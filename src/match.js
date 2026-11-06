import * as THREE from 'three';
import { PITCH, FORMATIONS, clamp, dist2d, rand } from './config.js';
import { createPlayerVisual, createBallVisual, createControlRing } from './entities.js';
import { installAI } from './ai.js';
import { installPresenter } from './present.js';

const GRAVITY = 18;

export class Match {
  constructor({ scene, camera, home, away, difficulty, halfSeconds, input, hud, audio, onFinish }) {
    this.scene = scene;
    this.camera = camera;
    this.teams = [home, away];
    this.diff = difficulty;
    this.halfSeconds = halfSeconds;
    this.input = input;
    this.hud = hud;
    this.audio = audio;
    this.onFinish = onFinish;

    this.attackDir = [-1, 1];
    this.players = [];
    this.score = [0, 0];
    this.possession = [0, 0];
    this.stats = { shots: [0, 0], onTarget: [0, 0] };

    this.half = 1;
    this.halfElapsed = 0;
    this.clock = 0;
    this.time = 0;

    this.state = 'kickoff';
    this.stateTimer = 1.5;
    this.kickoffTeam = 0;
    this.kickoffNext = 0;
    this.pendingTaker = null;

    this.charge = 0;
    this.charging = false;
    this.tackleHold = -1;
    this.passTarget = null;
    this.passTimer = 0;
    this.lastShot = null;
    this.lastTouch = { team: 0, player: null };
    this.controlled = null;

    this.focus = new THREE.Vector2(0, 0);
    this._spinAxis = new THREE.Vector3(1, 0, 0);

    this.ball = { x: 0, z: 0, y: 0, vx: 0, vz: 0, vy: 0, owner: null, ignore: null, ignoreTimer: 0 };
    this.ballVisual = createBallVisual();
    scene.add(this.ballVisual.root);
    this.ring = createControlRing();
    scene.add(this.ring);

    this.buildPlayers();
    this.setupKickoff(0);
    this.focus.set(0, 0);
    this.updateCamera(1);
    this.updateVisuals(0.016);
  }

  // ── setup ───────────────────────────────────────────────────────────────
  buildPlayers() {
    for (let t = 0; t < 2; t++) {
      const team = this.teams[t];
      const slots = FORMATIONS[team.formation] || FORMATIONS['4-3-3'];
      slots.forEach((slot, i) => {
        const isGK = slot.role === 'GK';
        const visual = createPlayerVisual(team, isGK, i + t * 4);
        this.scene.add(visual.root);

        const roleBonus = slot.role === 'ATT' ? 3 : slot.role === 'MID' ? 1 : 0;
        const rating = clamp(team.rating + roleBonus + ((i * 7 + t * 3) % 5) - 2, 62, 93);
        const pace = (rating - 70) * 0.075;
        let speed = 5.0 + pace + (slot.role === 'ATT' ? 0.22 : 0);
        let sprintSpeed = speed + 1.95 + (slot.role === 'ATT' ? 0.15 : 0);
        if (isGK) {
          speed = 5.1 + pace * 0.4;
          sprintSpeed = 6.1 + pace * 0.4;
        }

        this.players.push({
          id: `${t}-${i}`,
          team: t,
          isGK,
          role: slot.role,
          name: team.squad[i],
          number: slot.number,
          rating,
          baseX: slot.x,
          baseDepth: slot.d,
          pos: { x: 0, z: 0 },
          vel: { x: 0, z: 0 },
          mvx: 0,
          mvz: 0,
          facing: t === 0 ? Math.PI : 0,
          speed,
          sprintSpeed,
          stamina: 100,
          sprinting: false,
          speedNow: 0,
          controlled: false,
          visual,
          decisionTimer: Math.random() * 0.4,
          stun: 0,
          slide: 0,
          tackleTimer: 0,
          kickCooldown: 0,
          gkHold: 0.6,
          runPhase: Math.random() * 6.28,
          spinTime: 0,
          skillTimer: 0,
          shield: 0,
        });
      });
    }
  }

  dispose() {
    for (const p of this.players) this.scene.remove(p.visual.root);
    this.scene.remove(this.ballVisual.root);
    this.scene.remove(this.ring);
    this.players = [];
  }

  homePos(p) {
    const dir = this.attackDir[p.team];
    return { x: p.baseX, z: dir * (p.baseDepth * PITCH.halfLength * 2 - PITCH.halfLength) };
  }

  ownGoalZ(team) {
    return -this.attackDir[team] * PITCH.halfLength;
  }

  targetGoalZ(team) {
    return this.attackDir[team] * PITCH.halfLength;
  }

  setupKickoff(team) {
    this.state = 'kickoff';
    this.stateTimer = 1.5;
    this.kickoffTeam = team;
    this.pendingTaker = null;
    this.ball.owner = null;
    this.ball.ignore = null;
    this.ball.ignoreTimer = 0;
    this.charging = false;
    this.charge = 0;
    this.passTarget = null;
    this.restartType = null;

    for (const p of this.players) {
      const h = this.homePos(p);
      const ownZ = this.ownGoalZ(p.team);
      p.pos.x = h.x * 0.94;
      p.pos.z = ownZ + (h.z - ownZ) * 0.5;
      p.vel.x = 0;
      p.vel.z = 0;
      p.mvx = 0;
      p.mvz = 0;
      p.facing = this.attackDir[p.team] > 0 ? 0 : Math.PI;
      p.stun = 0;
      p.slide = 0;
      p.kickCooldown = 0;
      p.skillTimer = 0;
      p.tackleTimer = 0;
    }

    const taker =
      this.players.find((p) => p.team === team && p.role === 'ATT' && Math.abs(p.baseX) < 1) ||
      this.players.find((p) => p.team === team && p.role === 'ATT') ||
      this.players.find((p) => p.team === team && !p.isGK);

    this.ball.x = 0;
    this.ball.z = 0;
    this.ball.y = 0;
    this.ball.vx = 0;
    this.ball.vz = 0;
    this.ball.vy = 0;

    if (taker) {
      taker.pos.x = 0;
      taker.pos.z = -this.attackDir[team] * 1.15;
      taker.facing = this.attackDir[team] > 0 ? 0 : Math.PI;
      this.ball.owner = taker;
      this.lastTouch = { team, player: taker };
    }

    this.setControl(team === 0 ? taker : this.nearestPlayerToBall(0, true));
    this.hud.banner('KICK OFF', this.teams[team].short, 1200);
    this.audio.whistle(false);
  }

  beginSecondHalf() {
    this.half = 2;
    this.halfElapsed = 0;
    this.clock = 45;
    this.setupKickoff(1);
    this.hud.commentary('Second half under way.');
  }

  endHalf() {
    this.stats.shots = this.stats.shots || [0, 0];
    if (this.half === 1) {
      this.state = 'halftime';
      this.stateTimer = 3.0;
      this.clock = 45;
      this.ball.owner = null;
      this.hud.banner('HALF TIME', `${this.score[0]} – ${this.score[1]}`, 2800);
      this.audio.whistle(true);
    } else {
      this.state = 'fulltime';
      this.clock = 90;
      this.ball.owner = null;
      this.hud.banner('FULL TIME', `${this.score[0]} – ${this.score[1]}`, 3200);
      this.audio.whistle(true);
      this.onFinish?.(this);
    }
  }

  onStateEnd() {
    if (this.state === 'kickoff' || this.state === 'restart') {
      this.state = 'play';
      this.stateTimer = 0;
      if (this.pendingTaker) {
        const p = this.pendingTaker;
        this.ball.x = p.pos.x + Math.sin(p.facing) * 0.55;
        this.ball.z = p.pos.z + Math.cos(p.facing) * 0.55;
        this.setPossession(p);
        this.pendingTaker = null;
      }
      return;
    }
    if (this.state === 'goal') {
      this.setupKickoff(this.kickoffNext);
      return;
    }
    if (this.state === 'halftime') {
      this.beginSecondHalf();
    }
  }

  // ── main loop ───────────────────────────────────────────────────────────
  update(dtRaw) {
    const dt = clamp(dtRaw, 0.0001, 0.05);
    this.time += dt;

    if (this.state === 'fulltime') {
      this.updateVisuals(dt);
      this.updateCamera(dt);
      this.hud.sync(this);
      return;
    }

    if (this.state === 'play') {
      this.halfElapsed += dt;
      this.clock = (this.half - 1) * 45 + Math.min(45, (this.halfElapsed / this.halfSeconds) * 45);
      if (this.halfElapsed >= this.halfSeconds) {
        this.endHalf();
        this.updateVisuals(dt);
        this.updateCamera(dt);
        this.hud.sync(this);
        return;
      }
    } else {
      this.stateTimer -= dt;
      if (this.stateTimer <= 0) this.onStateEnd();
    }

    if (this.state === 'play') this.simulate(dt);

    if (this.passTimer > 0) {
      this.passTimer -= dt;
      if (this.passTimer <= 0) this.passTarget = null;
    }

    this.updateVisuals(dt);
    this.updateCamera(dt);
    this.hud.sync(this);
  }

  simulate(dt) {
    this.input.sample();
    this.handleControlledActions(dt);

    for (const p of this.players) {
      p.kickCooldown = Math.max(0, p.kickCooldown - dt);
      p.stun = Math.max(0, p.stun - dt);
      p.tackleTimer = Math.max(0, p.tackleTimer - dt);
      p.skillTimer = Math.max(0, p.skillTimer - dt);
      p.shield = Math.max(0, p.shield - dt);
      this.thinkAI(p, dt);
    }

    for (const p of this.players) this.stepPlayer(p, dt);
    this.resolveCollisions();
    this.updateBall(dt);

    // follow a loose ball with the closest defender
    this.autoSwitchTimer = (this.autoSwitchTimer ?? 0) - dt;
    if (!this.ball.owner && this.autoSwitchTimer <= 0) {
      this.autoSwitchTimer = 0.45;
      const c = this.controlled;
      if (c) {
        const cd = dist2d(c.pos.x, c.pos.z, this.ball.x, this.ball.z);
        if (cd > 8) {
          const n = this.nearestPlayerToBall(0, false);
          if (n && n !== c && dist2d(n.pos.x, n.pos.z, this.ball.x, this.ball.z) < cd - 5) {
            this.setControl(n);
          }
        }
      }
    }

    const holder = this.ball.owner ? this.ball.owner.team : this.lastTouch.team;
    if (holder === 0 || holder === 1) this.possession[holder] += dt;
  }

  stepPlayer(p, dt) {
    const accel = 1 - Math.exp(-11 * dt);

    if (p.slide > 0) {
      p.slide -= dt;
      p.vel.x *= 1 - 2.4 * dt;
      p.vel.z *= 1 - 2.4 * dt;
    } else if (p.stun > 0) {
      p.vel.x *= 1 - 7 * dt;
      p.vel.z *= 1 - 7 * dt;
    } else {
      p.vel.x += (p.mvx - p.vel.x) * accel;
      p.vel.z += (p.mvz - p.vel.z) * accel;
    }

    p.pos.x += p.vel.x * dt;
    p.pos.z += p.vel.z * dt;

    p.pos.x = clamp(p.pos.x, -PITCH.halfWidth + 0.6, PITCH.halfWidth - 0.6);
    p.pos.z = clamp(p.pos.z, -PITCH.halfLength + 0.8, PITCH.halfLength - 0.8);

    p.speedNow = Math.hypot(p.vel.x, p.vel.z);
    if (p.speedNow > 0.4 && p.stun <= 0.05) {
      const target = Math.atan2(p.vel.x, p.vel.z);
      let diff = target - p.facing;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      p.facing += diff * Math.min(1, 14 * dt);
    }

    const draining = p.sprinting && p.speedNow > 2;
    p.stamina = clamp(p.stamina + (draining ? -10 : 5.5) * dt, 0, 100);
    if (p.stamina <= 0.5) p.sprinting = false;

    p.runPhase += p.speedNow * 2.15 * dt;
    p.mvx = 0;
    p.mvz = 0;
  }

  resolveCollisions() {
    const ps = this.players;
    for (let i = 0; i < ps.length; i++) {
      for (let j = i + 1; j < ps.length; j++) {
        const a = ps[i];
        const b = ps[j];
        let dx = b.pos.x - a.pos.x;
        let dz = b.pos.z - a.pos.z;
        const d = Math.hypot(dx, dz);
        const min = a.isGK || b.isGK ? 0.95 : 0.86;
        if (d < 0.0001 || d >= min) continue;
        const push = (min - d) / 2;
        dx /= d;
        dz /= d;
        a.pos.x -= dx * push;
        a.pos.z -= dz * push;
        b.pos.x += dx * push;
        b.pos.z += dz * push;
      }
    }
  }

  steer(p, tx, tz, mult = 1, sprint = false) {
    const dx = tx - p.pos.x;
    const dz = tz - p.pos.z;
    const d = Math.hypot(dx, dz);
    const stop = d < 0.8 ? d / 0.8 : 1;
    const canSprint = sprint && p.stamina > 2;
    let sp = (canSprint ? p.sprintSpeed : p.speed) * mult * stop;
    if (p.team === 1) sp *= this.diff.aiSpeed;
    sp *= 0.84 + 0.16 * (p.stamina / 100);
    if (d > 0.03) {
      p.mvx = (dx / d) * sp;
      p.mvz = (dz / d) * sp;
    } else {
      p.mvx = 0;
      p.mvz = 0;
    }
    p.sprinting = canSprint;
  }

  // ── helpers used by AI ──────────────────────────────────────────────────
  nearestOpponent(p) {
    let best = null;
    let bestD = Infinity;
    for (const o of this.players) {
      if (o.team === p.team) continue;
      const d = dist2d(p.pos.x, p.pos.z, o.pos.x, o.pos.z);
      if (d < bestD) {
        bestD = d;
        best = o;
      }
    }
    return best;
  }

  nearestOpponentDist(p) {
    const o = this.nearestOpponent(p);
    return o ? dist2d(p.pos.x, p.pos.z, o.pos.x, o.pos.z) : 99;
  }

  nearestOpponentAt(x, z, team) {
    let best = 99;
    for (const o of this.players) {
      if (o.team === team) continue;
      const d = dist2d(x, z, o.pos.x, o.pos.z);
      if (d < best) best = d;
    }
    return best;
  }

  nearestOpponentTo(p, maxDist = 99) {
    let best = null;
    let bestD = maxDist;
    for (const o of this.players) {
      if (o.team === p.team || o.isGK) continue;
      const d = dist2d(p.pos.x, p.pos.z, o.pos.x, o.pos.z);
      if (d < bestD) {
        bestD = d;
        best = o;
      }
    }
    return best;
  }

  nearestPlayerToBall(team, allowGK = true) {
    let best = null;
    let bestD = Infinity;
    for (const p of this.players) {
      if (p.team !== team) continue;
      if (p.isGK && !allowGK) continue;
      const d = dist2d(p.pos.x, p.pos.z, this.ball.x, this.ball.z);
      if (d < bestD) {
        bestD = d;
        best = p;
      }
    }
    return best;
  }

  setControl(p) {
    if (!p || this.controlled === p) return;
    for (const q of this.players) q.controlled = false;
    p.controlled = true;
    this.controlled = p;
  }

  switchPlayer() {
    const mates = this.players
      .filter((p) => p.team === 0 && !p.isGK)
      .sort(
        (a, b) =>
          dist2d(a.pos.x, a.pos.z, this.ball.x, this.ball.z) -
          dist2d(b.pos.x, b.pos.z, this.ball.x, this.ball.z)
      );
    if (!mates.length) return;
    const idx = mates.indexOf(this.controlled);
    let next;
    if (idx === -1) {
      // keeper (or an unexpected state): hand over to the nearest outfield player
      next = mates.find((m) => m !== this.controlled) || mates[0];
    } else {
      next = mates[(idx + 1) % mates.length];
    }
    this.setControl(next);
    this.audio.touch();
  }

  // ── controlled player actions ───────────────────────────────────────────
  handleControlledActions(dt) {
    const p = this.controlled;
    if (!p) return;
    const hasBall = this.ball.owner === p;
    const alive = p.stun <= 0.05 && p.slide <= 0;

    if (this.input.consume('shoot')) {
      this.charging = hasBall && alive;
      this.charge = 0;
    }
    if (this.charging) {
      if (this.input.has('shoot') && hasBall && alive) {
        this.charge = Math.min(1, this.charge + dt / 0.85);
      } else {
        if (hasBall && alive) this.shootPlayer(p, Math.max(0.34, this.charge));
        this.charging = false;
        this.charge = 0;
      }
    }
    if (!hasBall && this.charging) {
      this.charging = false;
      this.charge = 0;
    }

    if (this.input.consume('pass') && hasBall && alive) {
      const t = this.findPassTarget(p);
      if (t) this.passTo(p, t);
      else this.kickBall(p, Math.sin(p.facing), Math.cos(p.facing), 15, 0);
    }

    if (this.input.consume('through') && hasBall && alive) {
      const t = this.findPassTarget(p, true);
      if (t) this.passTo(p, t, { through: true });
      else this.kickBall(p, Math.sin(p.facing), Math.cos(p.facing), 18, 0);
    }

    if (this.input.consume('skill') && hasBall && alive) this.skillMove(p);

    if (this.input.consume('tackle')) {
      if (hasBall) p.shield = 0.3;
      else if (alive) this.tackleHold = 0;
    }
    if (this.tackleHold >= 0) {
      if (this.input.has('tackle') && !hasBall) {
        this.tackleHold += dt;
        if (this.tackleHold > 0.3) {
          this.slideTackle(p);
          this.tackleHold = -1;
        }
      } else {
        if (!hasBall) this.tryTackle(p);
        this.tackleHold = -1;
      }
    }

    if (this.input.consume('switch')) this.switchPlayer();
  }

  skillMove(p) {
    if (p.stamina < 8) return;
    const m = this.input.move;
    let sx = Math.sin(p.facing);
    let sz = Math.cos(p.facing);
    const mag = Math.hypot(m.x, m.y);
    if (mag > 0.25) {
      sx = m.x / mag;
      sz = -m.y / mag;
    }
    const boost = 10.2;
    p.vel.x = sx * boost;
    p.vel.z = sz * boost;
    p.facing = Math.atan2(sx, sz);
    p.skillTimer = 0.55;
    p.spinTime = 0.5;
    p.stamina = Math.max(0, p.stamina - 9);
    const b = this.ball;
    b.x = p.pos.x + sx * 0.95;
    b.z = p.pos.z + sz * 0.95;
    b.vx = sx * boost;
    b.vz = sz * boost;
    this.audio.click();
  }

  tryTackle(p) {
    if (p.tackleTimer > 0 || p.stun > 0.05 || p.slide > 0) return;
    p.tackleTimer = 0.65;
    p.vel.x += Math.sin(p.facing) * 2.2;
    p.vel.z += Math.cos(p.facing) * 2.2;

    const o = this.ball.owner;
    if (!o || o.team === p.team) return;
    const d = dist2d(p.pos.x, p.pos.z, o.pos.x, o.pos.z);
    if (d > 2.7) return;

    const chance =
      clamp(0.36 + (p.rating - o.rating) * 0.012 + (this.diff.tackle - 0.55) * 0.4, 0.12, 0.9) *
      (o.skillTimer > 0 ? 0.12 : 1) *
      (o.shield > 0 ? 0.55 : 1);

    if (Math.random() < chance) {
      o.stun = 0.34;
      this.setPossession(p);
      this.audio.tackle();
      if (p.team === 0) this.hud.commentary(`Tackle won by ${p.name}`);
    } else {
      p.stun = 0.26;
      this.audio.thud(0.6);
    }
  }

  slideTackle(p) {
    if (p.slide > 0 || p.stun > 0.05) return;
    p.slide = 0.6;
    p.vel.x = Math.sin(p.facing) * 9.6;
    p.vel.z = Math.cos(p.facing) * 9.6;
    p.stamina = Math.max(0, p.stamina - 9);
    this.audio.slide();

    const o = this.ball.owner;
    if (!o || o.team === p.team) return;
    const d = dist2d(p.pos.x, p.pos.z, o.pos.x, o.pos.z);
    if (d > 2.5) return;

    const chance =
      clamp(0.5 + (p.rating - o.rating) * 0.01 + (this.diff.tackle - 0.55) * 0.35, 0.2, 0.95) *
      (o.skillTimer > 0 ? 0.1 : 1);

    if (Math.random() < chance) {
      o.stun = 0.6;
      this.setPossession(p);
      this.audio.tackle();
      if (p.team === 0) this.hud.commentary(`Clean slide from ${p.name}`);
    } else {
      this.commitFoul(p, o);
    }
  }

  commitFoul(offender, victim) {
    this.audio.whistle(false);
    this.hud.banner('FREE KICK', `${this.teams[victim.team].short} · ${offender.name}`, 1500);
    this.hud.commentary(`Foul by ${offender.name} — free kick ${this.teams[victim.team].short}`);
    this.setRestart('freekick', victim.team, victim.pos.x, victim.pos.z);
  }

  shootPlayer(p, charge) {
    const dir = this.attackDir[p.team];
    const gz = dir * PITCH.halfLength;
    const m = this.input.move;
    const aim = Math.abs(m.x) > 0.15 ? clamp(m.x, -1, 1) * 3.1 : clamp(-p.pos.x * 0.09, -2.4, 2.4);
    this.shootAt(p, clamp(aim, -3.3, 3.3), gz, charge, 0.05);
  }

  shootAt(p, tx, tz, power = 0.7, noise = 0) {
    if (this.ball.owner !== p) return;
    let dx = tx - p.pos.x;
    let dz = tz - p.pos.z;
    const d = Math.hypot(dx, dz) || 1;
    let ang = Math.atan2(dx, dz);
    if (noise) ang += (Math.random() - 0.5) * noise;

    const speed = 21 + power * 13 + (p.rating - 75) * 0.2;
    const flight = d / speed;
    const aimH = rand(0.3, 1.7) * (0.45 + power * 0.85);
    const vy = clamp((aimH + 0.5 * GRAVITY * flight * flight) / flight, 0.3, 12);

    p.stamina = Math.max(0, p.stamina - 3.5);
    this.stats.shots[p.team]++;
    this.lastShot = { team: p.team, player: p, time: this.time };
    this.kickBall(p, Math.sin(ang), Math.cos(ang), speed, vy);
    this.audio.kick(clamp(0.45 + power * 0.65, 0.4, 1));
    if (p.team === 0) this.hud.commentary(`${p.name} lets fly!`);
  }

  kickBall(p, dx, dz, speed, vy = 0) {
    const b = this.ball;
    b.owner = null;
    b.x = clamp(p.pos.x + dx * 0.55, -PITCH.halfWidth - 2, PITCH.halfWidth + 2);
    b.z = clamp(p.pos.z + dz * 0.55, -PITCH.halfLength - 2, PITCH.halfLength + 2);
    b.y = Math.max(b.y, 0.06);
    b.vx = dx * speed;
    b.vz = dz * speed;
    b.vy = vy;
    b.ignore = p;
    b.ignoreTimer = 0.34;
    p.kickCooldown = 0.34;
    this.lastTouch = { team: p.team, player: p };
    this.charging = false;
    this.charge = 0;
    this.audio.kick(0.55);
  }

  // ── ball ────────────────────────────────────────────────────────────────
  updateBall(dt) {
    const b = this.ball;
    if (b.ignoreTimer > 0) {
      b.ignoreTimer -= dt;
      if (b.ignoreTimer <= 0) b.ignore = null;
    }

    if (b.owner) {
      const o = b.owner;
      if (o.stun > 0.05 || o.slide > 0) {
        b.owner = null;
        b.vx = o.vel.x * 0.7;
        b.vz = o.vel.z * 0.7;
        b.x = o.pos.x + Math.sin(o.facing) * 0.45;
        b.z = o.pos.z + Math.cos(o.facing) * 0.45;
      } else {
        const lead = 0.56 + (o.sprinting ? 0.2 : 0) + (o.skillTimer > 0 ? 0.4 : 0);
        const tx = o.pos.x + Math.sin(o.facing) * lead;
        const tz = o.pos.z + Math.cos(o.facing) * lead;
        const k = 1 - Math.exp(-17 * dt);
        b.x += (tx - b.x) * k;
        b.z += (tz - b.z) * k;
        b.y = 0;
        b.vy = 0;
        b.vx = o.vel.x;
        b.vz = o.vel.z;
      }
    }

    if (!b.owner) {
      b.x += b.vx * dt;
      b.z += b.vz * dt;

      if (b.y > 0 || b.vy > 0) {
        b.vy -= GRAVITY * dt;
        b.y += b.vy * dt;
        if (b.y <= 0) {
          b.y = 0;
          if (b.vy < -1.6) {
            b.vy = -b.vy * 0.45;
            b.vx *= 0.93;
            b.vz *= 0.93;
          } else {
            b.vy = 0;
            b.vx *= 0.9;
            b.vz *= 0.9;
          }
        }
      }

      const drag = Math.exp(-(b.y > 0.15 ? 0.1 : 0.62) * dt);
      b.vx *= drag;
      b.vz *= drag;

      this.tryPickup(b);
    }

    this.checkBounds();
  }

  tryPickup(b) {
    let best = null;
    let bestD = Infinity;
    for (const p of this.players) {
      if (p === b.ignore || p.kickCooldown > 0 || p.stun > 0.1 || p.slide > 0) continue;
      const d = dist2d(p.pos.x, p.pos.z, b.x, b.z);
      const reach = p.isGK ? 1.5 : p.controlled ? 1.32 : 1.05;
      const maxH = p.isGK ? 2.4 : 1.85;
      if (d <= reach && b.y <= maxH && d < bestD) {
        bestD = d;
        best = p;
      }
    }
    if (!best) return;

    if (best.isGK) {
      this.catchBall(best);
      return;
    }

    const speed = Math.hypot(b.vx, b.vz);
    const isTarget = best === this.passTarget;
    const control = best.rating / 100 + (best.controlled ? 0.24 : 0) + (isTarget ? 0.3 : 0);
    if (speed > 13 && Math.random() > control * 0.9) {
      this.deflectBall(best);
      return;
    }
    this.setPossession(best);
  }

  deflectBall(p) {
    const b = this.ball;
    let nx = b.x - p.pos.x;
    let nz = b.z - p.pos.z;
    const d = Math.hypot(nx, nz) || 1;
    nx /= d;
    nz /= d;
    const dot = b.vx * nx + b.vz * nz;
    if (dot < 0) {
      b.vx -= 2 * dot * nx;
      b.vz -= 2 * dot * nz;
    }
    b.vx *= 0.52;
    b.vz *= 0.52;
    b.vy = Math.max(b.vy, 1.4);
    b.ignore = p;
    b.ignoreTimer = 0.2;
    this.lastTouch = { team: p.team, player: p };
    this.audio.thud(0.5);
  }

  catchBall(gk) {
    const wasShot = this.lastShot && this.lastShot.team !== gk.team;
    const speed = Math.hypot(this.ball.vx, this.ball.vz);

    // hard shots can be parried back into play
    if (speed > 23 && Math.random() < 0.42) {
      this.ball.x = gk.pos.x + Math.sin(gk.facing) * 0.6;
      this.ball.z = gk.pos.z + Math.cos(gk.facing) * 0.6;
      this.ball.y = 0.5;
      this.ball.vy = 2.6;
      this.ball.vx = -this.ball.vx * 0.32 + (Math.random() - 0.5) * 5;
      this.ball.vz = -this.ball.vz * 0.28 + (Math.random() - 0.5) * 3;
      this.ball.ignore = gk;
      this.ball.ignoreTimer = 0.28;
      this.lastTouch = { team: gk.team, player: gk };
      if (wasShot && this.lastShot) {
        this.stats.onTarget[this.lastShot.team]++;
        this.lastShot = null;
      }
      this.audio.thud(0.9);
      return;
    }

    this.ball.vy = 0;
    this.ball.y = 0;
    gk.gkHold = 0.8;
    this.setPossession(gk);
    this.audio.catchBall();
    if (wasShot) {
      this.stats.onTarget[this.lastShot.team]++;
      if (gk.team === 0) this.hud.commentary(`Save! ${gk.name} gathers it.`);
      this.lastShot = null;
    }
  }

  setPossession(p) {
    const b = this.ball;
    if (b.owner === p) return;
    b.owner = p;
    b.y = 0;
    b.vy = 0;
    b.vx = p.vel.x;
    b.vz = p.vel.z;
    b.ignore = null;
    b.ignoreTimer = 0;
    p.kickCooldown = 0;
    if (p.isGK) p.gkHold = 0.8;
    this.lastTouch = { team: p.team, player: p };
    this.passTarget = null;
    this.audio.touch();

    if (p.team === 0) {
      this.setControl(p);
      this.charging = false;
      this.charge = 0;
    } else {
      this.charging = false;
      this.charge = 0;
      const c = this.controlled;
      if (!c || dist2d(c.pos.x, c.pos.z, b.x, b.z) > 7) {
        const n = this.nearestPlayerToBall(0, false);
        if (n) this.setControl(n);
      }
    }
  }

  // ── rules / restarts ────────────────────────────────────────────────────
  checkBounds() {
    const b = this.ball;
    if (b.owner) return;
    const L = PITCH.halfLength;
    const W = PITCH.halfWidth;

    if (b.z <= -L) {
      if (Math.abs(b.x) < PITCH.goalHalfWidth - 0.05 && b.y < PITCH.goalHeight) {
        this.scoreGoal(0);
        return;
      }
      this.handleGoalLine(-1);
      return;
    }
    if (b.z >= L) {
      if (Math.abs(b.x) < PITCH.goalHalfWidth - 0.05 && b.y < PITCH.goalHeight) {
        this.scoreGoal(1);
        return;
      }
      this.handleGoalLine(1);
      return;
    }
    if (b.x <= -W || b.x >= W) {
      const team = 1 - this.lastTouch.team;
      this.setRestart('throwin', team, Math.sign(b.x) * (W - 1.1), clamp(b.z, -L + 2, L - 2));
    }
  }

  handleGoalLine(side) {
    const attackingTeam = side === -1 ? 0 : 1;
    const defender = 1 - attackingTeam;
    if (this.lastTouch.team === attackingTeam) {
      this.setRestart('goalkick', defender, 0, side * (PITCH.halfLength - 6.2));
    } else {
      this.setRestart(
        'corner',
        attackingTeam,
        Math.sign(this.ball.x || 1) * (PITCH.halfWidth - 1.4),
        side * (PITCH.halfLength - 1.4)
      );
    }
  }

  setRestart(type, team, x, z) {
    const bx = clamp(x, -PITCH.halfWidth + 1, PITCH.halfWidth - 1);
    const bz = clamp(z, -PITCH.halfLength + 1, PITCH.halfLength - 1);

    this.state = 'restart';
    this.stateTimer = type === 'goalkick' ? 1.2 : 0.95;
    this.restartType = type;
    this.ball.owner = null;
    this.ball.ignore = null;
    this.ball.ignoreTimer = 0;
    this.ball.x = bx;
    this.ball.z = bz;
    this.ball.y = 0;
    this.ball.vx = 0;
    this.ball.vz = 0;
    this.ball.vy = 0;
    this.charging = false;
    this.charge = 0;

    let taker = null;
    if (type === 'goalkick') taker = this.players.find((p) => p.team === team && p.isGK);
    if (!taker) {
      let bestD = Infinity;
      for (const p of this.players) {
        if (p.team !== team || p.isGK) continue;
        const d = dist2d(p.pos.x, p.pos.z, bx, bz);
        if (d < bestD) {
          bestD = d;
          taker = p;
        }
      }
    }

    if (taker) {
      taker.pos.x = clamp(bx - (type === 'throwin' ? Math.sign(bx) * 0.9 : 0), -PITCH.halfWidth + 0.7, PITCH.halfWidth - 0.7);
      taker.pos.z = clamp(bz + 0.1, -PITCH.halfLength + 0.9, PITCH.halfLength - 0.9);
      taker.vel.x = 0;
      taker.vel.z = 0;
      taker.facing = this.attackDir[team] > 0 ? 0 : Math.PI;
      taker.kickCooldown = 0;
      taker.stun = 0;
      taker.slide = 0;
      this.pendingTaker = taker;
      this.lastTouch = { team, player: taker };
    }

    const labels = { throwin: 'THROW IN', goalkick: 'GOAL KICK', corner: 'CORNER', freekick: 'FREE KICK' };
    this.hud.banner(labels[type] || 'RESTART', this.teams[team].short, 1150);
    this.audio.whistle(false);
  }

  scoreGoal(team) {
    const scorer = this.lastTouch.player;
    this.score[team]++;
    if (this.lastShot && this.lastShot.team === team) {
      this.stats.onTarget[team]++;
      this.lastShot = null;
    }
    this.state = 'goal';
    this.stateTimer = 3.2;
    this.kickoffNext = 1 - team;
    this.ball.owner = null;
    this.charging = false;
    this.charge = 0;

    const own = scorer && scorer.team !== team;
    const who = scorer ? scorer.name : this.teams[team].short;
    this.hud.banner('GOAL!', own ? `OWN GOAL · ${who}` : `${who} · ${this.teams[team].short}`, 2800, true);
    this.hud.commentary(
      own ? `Oh no! ${who} turns it into his own net.` : `GOAL! ${who} scores for ${this.teams[team].name}!`,
      'goal'
    );
    this.audio.goal();
  }
}

installAI(Match);
installPresenter(Match);
