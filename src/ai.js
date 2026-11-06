import { PITCH, clamp, dist2d, rand, pointSegDist, lerp } from './config.js';

// AI is installed onto Match.prototype so the brains can use the live match state.
export function installAI(Match) {
  Object.assign(Match.prototype, {
    thinkAI(p, dt) {
      p.decisionTimer -= dt;
      if (p.controlled) return this.thinkControlled(p);
      if (p.isGK) return this.thinkGK(p, dt);
      const b = this.ball;
      if (b.owner === p) return this.thinkCarrier(p);
      if (b.owner && b.owner.team === p.team) return this.thinkSupport(p);
      return this.thinkDefend(p);
    },

    thinkControlled(p) {
      const ridingBall = this.ball.owner === p;
      let mx = this.input.move.x;
      let my = -this.input.move.y; // screen-up = towards the opponent goal (-Z)
      const mag = Math.hypot(mx, my);
      if (mag > 1) {
        mx /= mag;
        my /= mag;
      }
      if (p.stun > 0.05 || p.slide > 0) {
        p.mvx = 0;
        p.mvz = 0;
        p.sprinting = false;
        return;
      }
      const sprint = this.input.has('sprint') && mag > 0.2 && p.stamina > 3;
      const base = (sprint ? p.sprintSpeed : p.speed) * (ridingBall ? 0.95 : 1);
      const sp = base * (0.84 + 0.16 * (p.stamina / 100));
      p.mvx = mx * sp;
      p.mvz = my * sp;
      p.sprinting = sprint;
    },

    thinkCarrier(p) {
      const dir = this.attackDir[p.team];
      const gz = dir * PITCH.halfLength;
      const pressure = this.nearestOpponentDist(p);
      const dGoal = Math.hypot(p.pos.x, gz - p.pos.z);

      if (p.decisionTimer <= 0) {
        p.decisionTimer = this.diff.reaction * rand(0.65, 1.25) + 0.08;

        // Shoot when it is on
        if (Math.abs(p.pos.x) < 33) {
          if (dGoal < 20 && Math.random() < 0.85) return this.shootAI(p);
          if (dGoal < 26 && Math.random() < 0.55) return this.shootAI(p);
          if (dGoal < 32 && Math.random() < 0.22) return this.shootAI(p);
          if (dGoal < 40 && Math.random() < 0.05) return this.shootAI(p);
        }

        // Inside the final third, back yourself; deeper, keep it moving
        const passTrigger = dGoal < 30 ? 1.8 : 6.2;
        if (pressure < passTrigger || Math.random() < 0.06) {
          const t = this.findPassTarget(p);
          if (t) return this.passTo(p, t);
        }
        if (pressure < 4.2 && dGoal > 22 && Math.random() < 0.3) {
          const t = this.findPassTarget(p, true);
          if (t) return this.passTo(p, t, { through: true });
        }
      }

      // Drive at the box, bending away from the nearest defender
      let tx = clamp(
        p.baseX * 0.3 + (p.pos.x - p.baseX) * 0.35,
        -PITCH.halfWidth + 3,
        PITCH.halfWidth - 3
      );
      let tz = gz - dir * (dGoal < 26 ? 0.5 : 6);
      const opp = this.nearestOpponent(p);
      if (opp) {
        const d = dist2d(p.pos.x, p.pos.z, opp.pos.x, opp.pos.z);
        if (d < 5.5) {
          const ax = p.pos.x - opp.pos.x;
          const az = p.pos.z - opp.pos.z;
          const a = Math.hypot(ax, az) || 1;
          tx += (ax / a) * 5;
          tz += (az / a) * 1.5;
        }
      }
      this.steer(p, tx, tz, 0.98, dGoal < 36 || pressure < 7);
    },

    thinkSupport(p) {
      const dir = this.attackDir[p.team];
      const b = this.ball;
      const home = this.homePos(p);
      const progress = clamp((b.z * dir + PITCH.halfLength) / (PITCH.halfLength * 2), 0, 1);

      let tx = home.x * 0.82 + (b.x - home.x) * 0.3;
      let tz = home.z + (b.z - home.z) * 0.34;
      if (p.role === 'ATT') {
        tz = b.z + dir * (10 + progress * 8);
        if (progress > 0.5) tz = dir * (PITCH.halfLength - 8.5);
      } else if (p.role === 'MID') {
        const wide = Math.abs(p.baseX) > 15;
        tz = b.z + dir * (wide ? 7 + progress * 5 : 1.5);
      } else tz = home.z + (b.z - home.z) * 0.2;

      // keep width, don't crowd the ball
      if (dist2d(p.pos.x, p.pos.z, b.x, b.z) < 7) {
        tx += (p.pos.x < b.x ? -1 : 1) * 5;
      }
      tx = clamp(tx, -PITCH.halfWidth + 2.5, PITCH.halfWidth - 2.5);
      tz = clamp(tz, -PITCH.halfLength + 3, PITCH.halfLength - 3);
      this.steer(p, tx, tz, 0.9, progress > 0.52 && (p.role === 'ATT' || p.role === 'MID'));
    },

    thinkDefend(p) {
      const b = this.ball;
      const dir = this.attackDir[p.team];
      const home = this.homePos(p);
      const dBall = dist2d(p.pos.x, p.pos.z, b.x, b.z);

      // nearest defender presses, second one covers
      const mates = this.players
        .filter((q) => q.team === p.team && !q.isGK)
        .sort(
          (a, c) =>
            dist2d(a.pos.x, a.pos.z, b.x, b.z) - dist2d(c.pos.x, c.pos.z, b.x, b.z)
        );
      const rank = mates.indexOf(p);

      if (rank === 0) {
        this.steer(p, b.x + b.vx * 0.14, b.z + b.vz * 0.14, 1, true);
        if (
          b.owner &&
          b.owner.team !== p.team &&
          dBall < 2.0 &&
          p.tackleTimer <= 0 &&
          Math.random() < this.diff.tackle * 0.09
        ) {
          this.tryTackle(p);
        }
        return;
      }
      if (rank === 1 && b.owner && b.owner.team !== p.team && dBall < 24) {
        const o = b.owner;
        // cover the goal side of the carrier rather than doubling up on the ball
        this.steer(p, o.pos.x * 0.75, o.pos.z - dir * 5.5, 0.9, dBall < 12);
        return;
      }

      const progress = clamp((b.z * dir + PITCH.halfLength) / (PITCH.halfLength * 2), 0, 1);
      let tx = home.x + (b.x - home.x) * 0.22;
      let tz = home.z - dir * (3 + progress * 4);

      if (p.role === 'DEF') {
        const mark = this.nearestOpponentTo(p, 15);
        if (mark && !mark.isGK) {
          tx = lerp(tx, mark.pos.x, 0.52);
          tz = lerp(tz, mark.pos.z - dir * 1.7, 0.52);
        }
      }
      tx = clamp(tx, -PITCH.halfWidth + 2, PITCH.halfWidth - 2);
      tz = clamp(tz, -PITCH.halfLength + 2.5, PITCH.halfLength - 2.5);
      this.steer(p, tx, tz, 0.8, false);
    },

    thinkGK(p, dt) {
      const b = this.ball;
      const dir = this.attackDir[p.team];
      const ownZ = -dir * PITCH.halfLength;

      if (b.owner === p) {
        p.mvx = 0;
        p.mvz = 0;
        p.gkHold -= dt;
        if (p.gkHold <= 0) {
          const t = this.findPassTarget(p, false, true);
          if (t) this.passTo(p, t);
          else this.kickBall(p, Math.sin(p.facing), Math.cos(p.facing), 28, 7);
        }
        return;
      }

      const ballToGoal = Math.abs(b.z - ownZ);
      let tx = clamp(b.x * 0.42, -4.8, 4.8);
      let tz = ownZ + dir * 1.7;

      const threat = !b.owner || b.owner.team !== p.team;
      if (threat && ballToGoal < 26) {
        const dBall = dist2d(p.pos.x, p.pos.z, b.x, b.z);
        const close = dist2d(b.x, b.z, 0, ownZ);
        if (close < 15 && dBall < close + 3.5) {
          // sweep up
          this.steer(p, b.x, b.z, 1, true);
          return;
        }
        tz = ownZ + dir * clamp(1.7 + (22 - ballToGoal) * 0.22, 1.7, 6.5);
      }
      this.steer(p, tx, tz, 0.9, false);
    },

    findPassTarget(p, through = false, includeGK = false) {
      const dir = this.attackDir[p.team];
      let best = null;
      let bestScore = -Infinity;
      for (const t of this.players) {
        if (t.team !== p.team || t === p) continue;
        if (t.isGK && !includeGK) continue;
        const d = dist2d(p.pos.x, p.pos.z, t.pos.x, t.pos.z);
        if (d < 4.5 || d > 58) continue;

        const lead = through ? 0.55 : 0.2;
        const tx = clamp(t.pos.x + t.vel.x * lead, -PITCH.halfWidth + 1, PITCH.halfWidth - 1);
        const tz = clamp(
          t.pos.z + t.vel.z * lead + (through ? dir * 6 : 0),
          -PITCH.halfLength + 2,
          PITCH.halfLength - 2
        );
        const forward = (tz - p.pos.z) * dir;
        const open = this.nearestOpponentAt(tx, tz, p.team);
        const lane = this.laneClearance(p.pos.x, p.pos.z, tx, tz, p.team);

        let score = forward * 1.05 + Math.min(open, 11) * 1.35 + Math.min(lane, 13) * 1.2 - d * 0.16;
        if (t.isGK) score -= 34;
        if (forward < -8) score -= 6;
        if (forward > 20) score += 3.5;
        if (tz * dir > PITCH.halfLength - 28) score += 5;
        if (through) score += forward * 0.5 + (t.role === 'ATT' ? 6 : 0) + Math.min(open, 11) * 0.8;
        if (t.role === 'ATT' && forward > 6) score += 3;
        score += Math.random() * 1.4;
        if (score > bestScore) {
          bestScore = score;
          best = t;
        }
      }
      return best;
    },

    laneClearance(ax, az, bx, bz, team) {
      let min = 15;
      for (const o of this.players) {
        if (o.team === team) continue;
        const d = pointSegDist(ax, az, bx, bz, o.pos.x, o.pos.z);
        if (d < min) min = d;
      }
      return min;
    },

    passTo(p, t, opts = {}) {
      const dir = this.attackDir[p.team];
      const through = !!opts.through;
      const lead = through ? 0.55 : 0.2;
      let tx = t.pos.x + t.vel.x * lead;
      let tz = t.pos.z + t.vel.z * lead + (through ? dir * 6.5 : 0);
      tx = clamp(tx, -PITCH.halfWidth + 1, PITCH.halfWidth - 1);
      tz = clamp(tz, -PITCH.halfLength + 1.5, PITCH.halfLength - 1.5);

      const wide = Math.abs(p.pos.x) > 23;
      const nearByline = p.pos.z * dir > PITCH.halfLength - 20;
      const cross = !through && wide && nearByline;

      if (cross) {
        tx = t.pos.x * 0.15;
        tz = dir * (PITCH.halfLength - 11);
      }

      let dx = tx - p.pos.x;
      let dz = tz - p.pos.z;
      const d = Math.hypot(dx, dz) || 1;
      dx /= d;
      dz /= d;

      const spread = (Math.random() - 0.5) * this.diff.passError * (p.isGK ? 1.6 : 1);
      const ang = Math.atan2(dx, dz) + spread;
      const speed = clamp(10 + d * 0.66, 12, 27) * (through ? 1.16 : 1);
      const loft = cross ? 6.4 : through ? 1.4 : 0;

      this.kickBall(p, Math.sin(ang), Math.cos(ang), speed, loft);
      this.passTarget = t;
      this.passTimer = 1.2;
    },

    shootAI(p) {
      const dir = this.attackDir[p.team];
      const gz = dir * PITCH.halfLength;
      const side = Math.random() < 0.5 ? -1 : 1;
      const aimX = side * (0.6 + Math.random() * 2.7);
      const power = rand(0.65, 1);
      this.shootAt(p, aimX, gz, power, this.diff.shotError * 1.6);
    },
  });
}
