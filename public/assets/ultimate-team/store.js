// Ultimate Team save state, squad maths, packs and match simulation.
import { FORMATIONS, positionAffinity } from './data.js';

const STORAGE_KEY = 'uf27:ut:v1';
const BENCH_SIZE = 7;
const PROMOTION_POINTS = 12;

export const PACKS = [
  { id: 'bronze', name: 'BRONZE PACK', blurb: 'Five squad fillers to get you started.', cost: 750, count: 5, min: 52, max: 69, color: '#c98a4b' },
  { id: 'silver', name: 'SILVER PACK', blurb: 'Five players with room to grow.', cost: 2000, count: 5, min: 62, max: 77, color: '#c9d4dd' },
  { id: 'gold', name: 'GOLD PACK', blurb: 'Five first-team upgrades.', cost: 5500, count: 5, min: 70, max: 84, color: '#ffd166' },
  { id: 'elite', name: 'ELITE PACK', blurb: 'Three elite pulls, 84 and above.', cost: 15000, count: 3, min: 84, max: 99, color: '#a15cff' },
];

export const OPPONENTS = [
  { id: 'vale', name: 'Vale Rovers', short: 'VAL', rating: 68, color: '#1fd67f', reward: 1 },
  { id: 'northgate', name: 'Northgate United', short: 'NGU', rating: 74, color: '#4fe3ff', reward: 1.45 },
  { id: 'azure', name: 'Azure City', short: 'AZC', rating: 80, color: '#2f7bff', reward: 2 },
  { id: 'riverton', name: 'Riverton FC', short: 'RIV', rating: 86, color: '#ff3b4d', reward: 2.7 },
];

let uidCounter = 0;
function nextUid() {
  uidCounter += 1;
  return `p${Date.now().toString(36)}${uidCounter.toString(36)}`;
}

const random = (min, max) => Math.random() * (max - min) + min;
const randomInt = (min, max) => Math.floor(random(min, max + 1));
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const round = (value) => Math.round(value);

export function instantiate(player) {
  return { ...player, attrs: { ...player.attrs }, uid: nextUid() };
}

function pickStarterFrom(pool, pos, min, max, used) {
  const candidates = pool.filter(
    (p) => p.pos === pos && p.ovr >= min && p.ovr <= max && !used.has(`${p.sid}:${p.clubId}`),
  );
  const fallback = pool.filter((p) => p.ovr >= min && p.ovr <= max && !used.has(`${p.sid}:${p.clubId}`));
  const list = candidates.length ? candidates : fallback;
  if (!list.length) return null;
  return list[randomInt(0, Math.min(list.length - 1, 60))];
}

export function freshState(data) {
  const formation = '4-3-3';
  const slots = FORMATIONS[formation].slots;
  const used = new Set();
  const club = [];
  const squad = {};

  slots.forEach((slot, index) => {
    const base = pickStarterFrom(data.pool, slot.pos, 60, 74, used);
    if (!base) return;
    used.add(`${base.sid}:${base.clubId}`);
    const player = instantiate(base);
    club.push(player);
    squad[index] = player.uid;
  });

  const bench = [];
  const benchSpots = ['GK', 'CB', 'RB', 'CM', 'CAM', 'RW', 'ST'];
  benchSpots.slice(0, BENCH_SIZE).forEach((pos) => {
    const base = pickStarterFrom(data.pool, pos, 58, 72, used);
    if (!base) return;
    used.add(`${base.sid}:${base.clubId}`);
    const player = instantiate(base);
    club.push(player);
    bench.push(player.uid);
  });

  return {
    version: 1,
    clubName: 'Ultimate FC',
    coins: 2500,
    division: 5,
    points: 0,
    record: { w: 0, d: 0, l: 0 },
    formation,
    squad,
    bench,
    club,
    packsOpened: 0,
  };
}

export function loadState(data) {
  if (typeof localStorage === 'undefined') return freshState(data);
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return freshState(data);
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== 1 || !Array.isArray(parsed.club) || !FORMATIONS[parsed.formation]) {
      return freshState(data);
    }
    parsed.squad = parsed.squad || {};
    parsed.bench = Array.isArray(parsed.bench) ? parsed.bench : [];
    parsed.record = parsed.record || { w: 0, d: 0, l: 0 };
    parsed.coins = Number(parsed.coins) || 0;
    parsed.division = clamp(Number(parsed.division) || 5, 1, 5);
    parsed.points = Number(parsed.points) || 0;
    return parsed;
  } catch {
    return freshState(data);
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage may be unavailable; the session still works in memory */
  }
}

export function resetState(data) {
  const state = freshState(data);
  saveState(state);
  return state;
}

export function findPlayer(state, uid) {
  return state.club.find((p) => p.uid === uid) || null;
}

export function squadPlayers(state) {
  const slots = FORMATIONS[state.formation].slots;
  return slots.map((slot, index) => ({
    slot,
    index,
    player: state.squad[index] ? findPlayer(state, state.squad[index]) : null,
  }));
}

export function benchPlayers(state) {
  return state.bench.map((uid) => findPlayer(state, uid)).filter(Boolean);
}

export function squadMetrics(state) {
  const starters = squadPlayers(state);
  const filled = starters.filter((entry) => entry.player);

  const counts = (player, key) =>
    filled.filter((entry) => entry.player.uid !== player.uid && entry.player[key] && entry.player[key] === player[key]).length;

  let chemTotal = 0;
  const detailed = starters.map((entry) => {
    if (!entry.player) return { ...entry, effOvr: 0, chem: 0, affinity: 0 };
    const affinity = positionAffinity(entry.slot.pos, entry.player.pos);
    const clubLinks = counts(entry.player, 'clubId');
    const nationLinks = counts(entry.player, 'nat');
    const leagueLinks = counts(entry.player, 'leagueId');

    const chemPoints =
      affinity * 1.1 + Math.min(1, clubLinks / 2) + Math.min(1, nationLinks / 3) + Math.min(1, leagueLinks / 3);
    const chem = round(clamp(chemPoints / 4.1, 0, 1) * 100);
    const positionPenalty = affinity === 1 ? 0 : affinity >= 0.5 ? 2 : affinity > 0 ? 4 : 7;
    const chemBonus = chem >= 85 ? 2 : chem >= 65 ? 1 : 0;
    chemTotal += chem;
    return { ...entry, affinity, chem, effOvr: entry.player.ovr - positionPenalty + chemBonus };
  });

  const rating = filled.length
    ? round(detailed.reduce((sum, entry) => sum + entry.effOvr, 0) / Math.max(1, filled.length))
    : 0;
  const chemistry = filled.length ? round(chemTotal / filled.length) : 0;

  return { starters: detailed, rating, chemistry, filledCount: filled.length, totalSlots: starters.length };
}

export function setFormation(state, formation) {
  if (!FORMATIONS[formation]) return state.newState || state;
  const previous = squadPlayers(state);
  state.formation = formation;
  const slots = FORMATIONS[formation].slots;
  const next = {};
  const used = new Set();

  // Keep as many players in place as possible: exact position matches first.
  slots.forEach((slot, index) => {
    const exact = previous.find((entry) => entry.player && !used.has(entry.player.uid) && entry.slot.pos === slot.pos);
    if (exact) {
      next[index] = exact.player.uid;
      used.add(exact.player.uid);
    }
  });
  const leftover = previous.filter((entry) => entry.player && !used.has(entry.player.uid));
  slots.forEach((slot, index) => {
    if (next[index]) return;
    const candidate = leftover.find((entry) => !used.has(entry.player.uid));
    if (candidate) {
      next[index] = candidate.player.uid;
      used.add(candidate.player.uid);
    }
  });

  state.squad = next;
  // Push anyone who lost their place to the bench.
  const inSquad = new Set(Object.values(next));
  const bench = state.bench.filter((uid) => !inSquad.has(uid));
  previous.forEach((entry) => {
    if (entry.player && !inSquad.has(entry.player.uid) && !bench.includes(entry.player.uid)) bench.push(entry.player.uid);
  });
  state.bench = bench.slice(0, BENCH_SIZE);
  saveState(state);
  return state;
}

export function assignToSlot(state, index, uid) {
  if (!uid) return state;
  const existingIndex = Object.keys(state.squad).find((key) => state.squad[key] === uid);
  if (existingIndex !== undefined) {
    const previous = state.squad[index];
    state.squad[index] = uid;
    if (previous) state.squad[existingIndex] = previous;
    else delete state.squad[existingIndex];
    saveState(state);
    return state;
  }
  state.bench = state.bench.filter((id) => id !== uid);
  state.squad[index] = uid;
  saveState(state);
  return state;
}

export function clearSlot(state, index) {
  const uid = state.squad[index];
  if (!uid) return state;
  delete state.squad[index];
  if (!state.bench.includes(uid)) state.bench.push(uid);
  state.bench = state.bench.slice(0, BENCH_SIZE);
  saveState(state);
  return state;
}

export function autoFill(state) {
  const metrics = squadMetrics(state);
  const used = new Set(Object.values(state.squad));
  const bench = state.bench.filter((uid) => !used.has(uid));

  metrics.starters.forEach((entry) => {
    if (entry.player) return;
    const candidates = state.club
      .filter((player) => !used.has(player.uid))
      .map((player) => ({
        player,
        score:
          player.ovr +
          positionAffinity(entry.slot.pos, player.pos) * 40 -
          (bench.includes(player.uid) ? 2 : 0),
      }))
      .sort((a, b) => b.score - a.score);
    if (!candidates.length) return;
    const pick = candidates[0].player;
    state.squad[entry.index] = pick.uid;
    used.add(pick.uid);
    state.bench = state.bench.filter((uid) => uid !== pick.uid);
  });

  saveState(state);
  return state;
}

export function releasePlayer(state, uid) {
  const player = findPlayer(state, uid);
  if (!player) return { refund: 0 };
  const refund = Math.max(120, round(player.ovr * 14));
  state.coins += refund;
  state.club = state.club.filter((p) => p.uid !== uid);
  Object.keys(state.squad).forEach((key) => {
    if (state.squad[key] === uid) delete state.squad[key];
  });
  state.bench = state.bench.filter((id) => id !== uid);
  saveState(state);
  return { refund };
}

export function buyPack(state, data, packId) {
  const pack = PACKS.find((p) => p.id === packId);
  if (!pack || state.coins < pack.cost) return { ok: false, reason: 'coins' };

  const pool = data.pool.filter((player) => player.ovr >= pack.min && player.ovr <= pack.max);
  const signings = [];
  for (let i = 0; i < pack.count; i += 1) {
    const source = pool.length ? pool[randomInt(0, pool.length - 1)] : data.pool[randomInt(0, data.pool.length - 1)];
    const player = instantiate(source);
    state.club.push(player);
    signings.push(player);
  }

  state.coins -= pack.cost;
  state.packsOpened += 1;
  saveState(state);
  return { ok: true, signings, pack };
}

function poisson(lambda) {
  const limit = Math.exp(-lambda);
  let goals = 0;
  let product = 1;
  do {
    goals += 1;
    product *= Math.random();
  } while (product > limit);
  return goals - 1;
}

function weightedScorer(players) {
  const weights = players.map((player) => {
    const shoot = player.attrs.shoot || player.ovr;
    const posWeight = player.pos === 'ST' ? 2.4 : ['RW', 'LW', 'CAM'].includes(player.pos) ? 1.7 : ['CM', 'RM', 'LM'].includes(player.pos) ? 0.8 : 0.25;
    return Math.max(1, shoot * posWeight);
  });
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  let roll = Math.random() * total;
  for (let i = 0; i < players.length; i += 1) {
    roll -= weights[i];
    if (roll <= 0) return players[i];
  }
  return players[players.length - 1];
}

function weightedAssist(players, scorer) {
  const pool = players.filter((player) => player.uid !== scorer.uid);
  if (!pool.length) return null;
  const weights = pool.map((player) => Math.max(1, (player.attrs.pass || player.ovr) * (['CAM', 'CM', 'RM', 'LM', 'RW', 'LW'].includes(player.pos) ? 2 : 1)));
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  let roll = Math.random() * total;
  for (let i = 0; i < pool.length; i += 1) {
    roll -= weights[i];
    if (roll <= 0) return pool[i];
  }
  return pool[pool.length - 1];
}

export function simulateMatch(state, opponent) {
  const metrics = squadMetrics(state);
  const starters = metrics.starters.filter((entry) => entry.player).map((entry) => entry.player);
  const rating = metrics.rating || 60;
  const chemistry = metrics.chemistry || 0;

  const edge = (rating - opponent.rating) / 12 + (chemistry - 60) / 160;
  const chances = clamp(1.35 + edge * 0.55, 0.25, 4.4);
  const conceded = clamp(1.35 - edge * 0.55, 0.2, 4.4);

  const goalsFor = starters.length ? poisson(chances) : 0;
  const goalsAgainst = poisson(conceded);

  const events = [];
  for (let i = 0; i < goalsFor; i += 1) {
    const scorer = starters.length ? weightedScorer(starters) : null;
    const assist = scorer ? weightedAssist(starters, scorer) : null;
    events.push({ minute: randomInt(2, 90), side: 'home', scorer, assist });
  }
  for (let i = 0; i < goalsAgainst; i += 1) {
    events.push({ minute: randomInt(2, 90), side: 'away', scorer: null, assist: null });
  }
  events.sort((a, b) => a.minute - b.minute);

  const outcome = goalsFor > goalsAgainst ? 'win' : goalsFor === goalsAgainst ? 'draw' : 'loss';
  const points = outcome === 'win' ? 3 : outcome === 'draw' ? 1 : 0;
  const multiplier = outcome === 'win' ? 1 : outcome === 'draw' ? 0.45 : 0.18;
  const coins = round((opponent.rating * 22 + 120) * opponent.reward * multiplier);

  return {
    goalsFor,
    goalsAgainst,
    events,
    outcome,
    points,
    coins,
    rating,
    chemistry,
    opponent,
  };
}

export function applyResult(state, result) {
  state.record[result.outcome === 'win' ? 'w' : result.outcome === 'draw' ? 'd' : 'l'] += 1;
  state.coins += result.coins;
  if (result.outcome === 'win') state.points += result.points;
  else if (result.outcome === 'draw') state.points += result.points;

  let promoted = false;
  if (state.points >= PROMOTION_POINTS) {
    state.points = 0;
    if (state.division > 1) {
      state.division -= 1;
      promoted = true;
    }
  }
  saveState(state);
  return { promoted };
}

export function divisionName(division) {
  const names = { 1: 'ELITE', 2: 'DIVISION 1', 3: 'DIVISION 2', 4: 'DIVISION 3', 5: 'DIVISION 4' };
  return names[division] || `DIVISION ${division}`;
}

export { BENCH_SIZE, PROMOTION_POINTS };
