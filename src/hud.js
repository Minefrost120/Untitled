import { PITCH } from './config.js';

export class Hud {
  constructor() {
    this.el = {
      hud: document.getElementById('hud'),
      crestHome: document.getElementById('crestHome'),
      crestAway: document.getElementById('crestAway'),
      nameHome: document.getElementById('nameHome'),
      nameAway: document.getElementById('nameAway'),
      scoreHome: document.getElementById('scoreHome'),
      scoreAway: document.getElementById('scoreAway'),
      clock: document.getElementById('clock'),
      halfLabel: document.getElementById('halfLabel'),
      commentary: document.getElementById('commentary'),
      radar: document.getElementById('radar'),
      possText: document.getElementById('possText'),
      pNum: document.getElementById('pNum'),
      pName: document.getElementById('pName'),
      staminaBar: document.getElementById('staminaBar'),
      power: document.getElementById('power'),
      powerFill: document.getElementById('powerFill'),
      banner: document.getElementById('banner'),
    };
    this.rctx = this.el.radar.getContext('2d');
    this.commentTimer = null;
    this.bannerTimer = null;
    this.commentQueue = [];
    this.radioTimer = 0;
  }

  setTeams(home, away) {
    const setCrest = (el, team) => {
      el.textContent = team.short;
      el.style.background = `linear-gradient(160deg, ${team.primary}, ${shade(team.primary, -0.55)})`;
      el.style.color = pickInk(team.primary);
      el.style.borderColor = hexA(team.secondary, 0.55);
    };
    setCrest(this.el.crestHome, home);
    setCrest(this.el.crestAway, away);
    this.el.nameHome.textContent = home.short;
    this.el.nameAway.textContent = away.short;
    this.el.crestHome.title = home.name;
    this.el.crestAway.title = away.name;
  }

  show() {
    this.el.hud.classList.remove('hidden');
  }

  hide() {
    this.el.hud.classList.add('hidden');
  }

  commentary(text, tone = 'info') {
    const el = this.el.commentary;
    el.textContent = text;
    el.classList.toggle('goal', tone === 'goal');
    el.classList.add('show');
    clearTimeout(this.commentTimer);
    this.commentTimer = setTimeout(() => el.classList.remove('show'), tone === 'goal' ? 3200 : 2100);
  }

  banner(title, sub = '', ms = 1400, goal = false) {
    const el = this.el.banner;
    el.innerHTML = `${title}${sub ? `<small>${sub}</small>` : ''}`;
    el.classList.toggle('goal', goal);
    el.classList.add('show');
    clearTimeout(this.bannerTimer);
    this.bannerTimer = setTimeout(() => el.classList.remove('show'), ms);
  }

  hideBanner() {
    this.el.banner.classList.remove('show');
  }

  sync(match) {
    const [home, away] = match.teams;
    this.el.scoreHome.textContent = match.score[0];
    this.el.scoreAway.textContent = match.score[1];
    const minutes = Math.min(90, Math.floor(match.clock));
    this.el.clock.textContent = `${minutes}'`;
    this.el.halfLabel.textContent = match.half === 1 ? '1ST HALF' : '2ND HALF';

    const p = match.controlled;
    if (p) {
      this.el.pName.textContent = p.name.toUpperCase();
      this.el.pNum.textContent = p.number;
      const st = Math.round(p.stamina);
      this.el.staminaBar.style.width = `${st}%`;
      this.el.staminaBar.style.background =
        st > 55 ? 'linear-gradient(90deg,#2ee98a,#c6ff45)' : st > 25 ? 'linear-gradient(90deg,#ffd166,#ffb400)' : 'linear-gradient(90deg,#ff6b6b,#ff3b4d)';
    }

    if (match.charge > 0.02) {
      this.el.power.classList.remove('hidden');
      this.el.powerFill.style.width = `${Math.round(match.charge * 100)}%`;
    } else {
      this.el.power.classList.add('hidden');
    }

    const totalP = match.possession[0] + match.possession[1];
    const homeP = totalP > 0 ? Math.round((match.possession[0] / totalP) * 100) : 50;
    this.el.possText.textContent = `${homeP}%`;

    this.radioTimer -= 1;
    if (this.radioTimer <= 0) {
      this.radioTimer = 3;
      this.drawRadar(match);
    }
    this.lastPoss = homeP;
  }

  drawRadar(match) {
    const g = this.rctx;
    const W = this.el.radar.width;
    const H = this.el.radar.height;
    const pad = 7;
    const px = (x) => pad + ((x + PITCH.halfWidth) / (PITCH.halfWidth * 2)) * (W - pad * 2);
    const pz = (z) => pad + ((z + PITCH.halfLength) / (PITCH.halfLength * 2)) * (H - pad * 2);

    g.clearRect(0, 0, W, H);
    g.fillStyle = 'rgba(6,20,15,0.9)';
    g.fillRect(0, 0, W, H);

    // grass
    g.fillStyle = 'rgba(24,78,46,0.85)';
    g.fillRect(px(-PITCH.halfWidth), pz(-PITCH.halfLength), px(PITCH.halfWidth) - px(-PITCH.halfWidth), pz(PITCH.halfLength) - pz(-PITCH.halfLength));

    g.strokeStyle = 'rgba(255,255,255,0.24)';
    g.lineWidth = 1;
    g.strokeRect(px(-PITCH.halfWidth), pz(-PITCH.halfLength), px(PITCH.halfWidth) - px(-PITCH.halfWidth), pz(PITCH.halfLength) - pz(-PITCH.halfLength));
    g.beginPath();
    g.moveTo(px(-PITCH.halfWidth), pz(0));
    g.lineTo(px(PITCH.halfWidth), pz(0));
    g.stroke();
    g.beginPath();
    g.arc(px(0), pz(0), (PITCH.circleRadius / (PITCH.halfWidth * 2)) * (W - pad * 2), 0, Math.PI * 2);
    g.stroke();

    for (const s of [-1, 1]) {
      const gz = s * PITCH.halfLength;
      g.strokeRect(
        px(-PITCH.boxHalfWidth),
        Math.min(pz(gz), pz(gz - s * PITCH.boxDepth)),
        px(PITCH.boxHalfWidth) - px(-PITCH.boxHalfWidth),
        Math.abs(pz(gz) - pz(gz - s * PITCH.boxDepth))
      );
      g.fillStyle = 'rgba(255,255,255,0.5)';
      g.fillRect(px(-PITCH.goalHalfWidth), pz(gz) - 1, px(PITCH.goalHalfWidth) - px(-PITCH.goalHalfWidth), 2);
    }

    // players
    for (const p of match.players) {
      const isP = p.team === 0;
      g.fillStyle = isP ? '#c6ff45' : '#ff5566';
      g.beginPath();
      g.arc(px(p.pos.x), pz(p.pos.z), p.isGK ? 3.2 : 2.7, 0, Math.PI * 2);
      g.fill();
      if (p.controlled) {
        g.strokeStyle = '#ffffff';
        g.lineWidth = 1.5;
        g.beginPath();
        g.arc(px(p.pos.x), pz(p.pos.z), 5, 0, Math.PI * 2);
        g.stroke();
      }
    }

    // ball
    const b = match.ball;
    g.fillStyle = '#ffffff';
    g.beginPath();
    g.arc(px(b.x), pz(b.z), 2.4, 0, Math.PI * 2);
    g.fill();

    // attack arrow
    g.fillStyle = 'rgba(198,255,69,0.5)';
    g.beginPath();
    g.moveTo(W / 2, 2);
    g.lineTo(W / 2 - 4, 8);
    g.lineTo(W / 2 + 4, 8);
    g.closePath();
    g.fill();
  }
}

// ── small colour helpers for crest chrome ────────────────────────────────
function toRgb(hex) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function shade(hex, amt) {
  const [r, g, b] = toRgb(hex);
  const f = (v) => Math.round(Math.max(0, Math.min(255, amt < 0 ? v * (1 + amt) : v + (255 - v) * amt)));
  return `rgb(${f(r)}, ${f(g)}, ${f(b)})`;
}

export function hexA(hex, a) {
  const [r, g, b] = toRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function pickInk(hex) {
  const [r, g, b] = toRgb(hex);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.6 ? '#08140f' : '#ffffff';
}
