import * as THREE from 'three';
import { buildWorld } from './pitch.js';
import { Match } from './match.js';
import { Input } from './input.js';
import { Hud, shade } from './hud.js';
import { Sfx } from './audio.js';
import { TEAMS, DIFFICULTY } from './config.js';

// ── renderer / scene ──────────────────────────────────────────────────────
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 0.5, 500);
camera.position.set(0, 36, 17.5);
camera.lookAt(0, 0, -7);
buildWorld(scene);

// ── UI / state ────────────────────────────────────────────────────────────
const hud = new Hud();
const audio = new Sfx();
const input = new Input({
  onPause: () => togglePause(),
  onMute: () => toggleMute(),
  onAny: () => audio.init(),
});

const menuEl = document.getElementById('menu');
const pauseEl = document.getElementById('pause');
const resultEl = document.getElementById('result');
const teamGrid = document.getElementById('teamGrid');
const opponentCard = document.getElementById('opponentCard');
const oppName = document.getElementById('oppName');
const oppRating = document.getElementById('oppRating');
const oppCrest = document.getElementById('oppCrest');

let selectedTeam = 0;
let opponentIndex = 1;
let difficulty = 'normal';
let halfSeconds = 180;
let match = null;
let paused = false;
let last = performance.now();

// small debug surface for smoke tests
window.__tdfc = {
  version: 2,
  get match() {
    return match;
  },
  get paused() {
    return paused;
  },
  errors: [],
};
const recordError = (err) => {
  if (window.__tdfc.errors.length < 4) {
    window.__tdfc.errors.push({ message: String(err?.message ?? err), stack: String(err?.stack ?? '') });
  }
};
window.addEventListener('error', (e) => recordError(e.error || e.message));
window.addEventListener('unhandledrejection', (e) => recordError(e.reason));

const crestStyle = (team) => ({
  background: `linear-gradient(160deg, ${team.primary}, ${shade(team.primary, -0.6)})`,
  borderColor: team.secondary + '88',
  color: '#fff',
});

// ── menu team tiles ───────────────────────────────────────────────────────
TEAMS.forEach((team, i) => {
  const btn = document.createElement('button');
  btn.className = 'team-tile';
  btn.type = 'button';
  btn.innerHTML = `<div class="crest">${team.short}</div><div class="tname">${team.name}</div><div class="ovr">OVR ${team.rating}</div>`;
  const crest = btn.querySelector('.crest');
  Object.assign(crest.style, crestStyle(team));
  btn.addEventListener('click', () => {
    selectedTeam = i;
    if (opponentIndex === i) cycleOpponent(false);
    TEAMS.forEach((t, k) => t._tile?.classList.toggle('active', k === selectedTeam));
    updateOpponent();
    audio.click();
  });
  team._tile = btn;
  teamGrid.appendChild(btn);
});
TEAMS[0]._tile.classList.add('active');

function cycleOpponent(play = true) {
  opponentIndex = (opponentIndex + 1) % TEAMS.length;
  if (opponentIndex === selectedTeam) opponentIndex = (opponentIndex + 1) % TEAMS.length;
  updateOpponent();
  if (play) audio.click();
}

function updateOpponent() {
  const team = TEAMS[opponentIndex];
  oppName.textContent = team.name;
  oppRating.textContent = `OVR ${team.rating}`;
  oppCrest.textContent = team.short;
  Object.assign(oppCrest.style, crestStyle(team));
}

opponentCard.addEventListener('click', () => cycleOpponent());
updateOpponent();

// ── segmented options ────────────────────────────────────────────────────
function bindSeg(id, onChange) {
  const wrap = document.getElementById(id);
  wrap.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      wrap.querySelectorAll('button').forEach((b) => b.classList.toggle('active', b === btn));
      onChange(btn.dataset.val);
      audio.click();
    });
  });
}
bindSeg('diffSeg', (val) => {
  difficulty = val;
});
bindSeg('halfSeg', (val) => {
  halfSeconds = parseInt(val, 10);
});

// ── match flow ───────────────────────────────────────────────────────────
document.getElementById('kickOff').addEventListener('click', () => startMatch());

function startMatch() {
  audio.init();
  audio.resume();

  menuEl.classList.add('hidden');
  pauseEl.classList.add('hidden');
  resultEl.classList.add('hidden');
  paused = false;

  if (match) match.dispose();

  const home = TEAMS[selectedTeam];
  const away = TEAMS[opponentIndex === selectedTeam ? (selectedTeam + 1) % TEAMS.length : opponentIndex];
  hud.setTeams(home, away);
  hud.hideBanner();
  hud.show();

  match = new Match({
    scene,
    camera,
    home,
    away,
    difficulty: DIFFICULTY[difficulty] || DIFFICULTY.normal,
    halfSeconds,
    input,
    hud,
    audio,
    onFinish: (m) => {
      window.setTimeout(() => {
        if (match === m) showResult(m);
      }, 1500);
    },
  });
}

function showResult(m) {
  const home = TEAMS[selectedTeam];
  const away = TEAMS[opponentIndex === selectedTeam ? (selectedTeam + 1) % TEAMS.length : opponentIndex];
  hud.hideBanner();

  const setCrest = (el, team) => {
    el.textContent = team.short;
    Object.assign(el.style, crestStyle(team));
  };
  setCrest(document.getElementById('resCrestHome'), home);
  setCrest(document.getElementById('resCrestAway'), away);
  document.getElementById('resNameHome').textContent = home.name.toUpperCase();
  document.getElementById('resNameAway').textContent = away.name.toUpperCase();
  document.getElementById('resScore').textContent = `${m.score[0]} – ${m.score[1]}`;

  const total = m.possession[0] + m.possession[1] || 1;
  const hp = Math.round((m.possession[0] / total) * 100);
  document.getElementById('resPoss').textContent = `${hp}% – ${100 - hp}%`;
  document.getElementById('resShots').textContent = `${m.stats.shots[0]} – ${m.stats.shots[1]}`;
  document.getElementById('resOnTarget').textContent = `${m.stats.onTarget[0]} – ${m.stats.onTarget[1]}`;

  resultEl.classList.remove('hidden');
}

function togglePause() {
  if (!match || match.state === 'fulltime') return;
  if (!resultEl.classList.contains('hidden')) return;
  paused = !paused;
  pauseEl.classList.toggle('hidden', !paused);
  if (paused) {
    const away = TEAMS[opponentIndex === selectedTeam ? (selectedTeam + 1) % TEAMS.length : opponentIndex];
    const home = TEAMS[selectedTeam];
    document.getElementById('pauseScore').textContent =
      `${home.short} ${match.score[0]} – ${match.score[1]} ${away.short}`;
    audio.click();
  }
}

function quitToMenu() {
  if (match) {
    match.dispose();
    match = null;
  }
  paused = false;
  pauseEl.classList.add('hidden');
  resultEl.classList.add('hidden');
  menuEl.classList.remove('hidden');
  hud.hide();
  hud.hideBanner();
}

document.getElementById('pauseBtn').addEventListener('click', () => togglePause());
document.getElementById('resumeBtn').addEventListener('click', () => togglePause());
document.getElementById('restartBtn').addEventListener('click', () => startMatch());
document.getElementById('quitBtn').addEventListener('click', () => quitToMenu());
document.getElementById('rematchBtn').addEventListener('click', () => startMatch());
document.getElementById('menuBtn').addEventListener('click', () => quitToMenu());

function toggleMute() {
  const muted = audio.setMuted(!audio.muted);
  document.getElementById('muteBtn').textContent = muted ? '🔇' : '🔊';
}
document.getElementById('muteBtn').addEventListener('click', () => toggleMute());

// ── resize / visibility ──────────────────────────────────────────────────
function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
resize();

document.addEventListener('visibilitychange', () => {
  if (document.hidden && match && !paused && match.state !== 'fulltime') togglePause();
});

// ── loop ─────────────────────────────────────────────────────────────────
function frame(now) {
  requestAnimationFrame(frame);
  let dt = (now - last) / 1000;
  last = now;
  if (!Number.isFinite(dt) || dt <= 0) dt = 0.016;
  dt = Math.min(dt, 0.05);

  if (match && !paused) match.update(dt);
  input.endFrame();
  renderer.render(scene, camera);
}
requestAnimationFrame(frame);
