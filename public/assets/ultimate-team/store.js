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

export const RANKS = [
  { id: 'bronze', name: 'BRONZE', min: 0, reward: 600, color: '#c98a4b' },
  { id: 'silver', name: 'SILVER', min: 400, reward: 1100, color: '#c9d4dd' },
  { id: 'gold', name: 'GOLD', min: 950, reward: 1800, color: '#ffd166' },
  { id: 'elite', name: 'ELITE', min: 1650, reward: 2600, color: '#a15cff' },
  { id: 'ultimate', name: 'ULTIMATE', min: 2500, reward: 4000, color: '#4fe3ff' },
];

export const OBJECTIVES = [
  { id: 'first-pack', title: 'Open your first pack', detail: 'Sign players from any pack in the store.', goal: 1, metric: 'packs', reward: 500 },
  { id: 'club-25', title: 'Build a club of 25', detail: 'Grow your collection to 25 players.', goal: 25, metric: 'club', reward: 750 },
  { id: 'rating-78', title: 'Reach a 78 rated XI', detail: 'Improve your starting eleven rating.', goal: 78, metric: 'rating', reward: 1200 },
  { id: 'wins-3', title: 'Win 3 matches', detail: 'Squad Battles and Rivals wins both count.', goal: 3, metric: 'wins', reward: 1500 },
  { id: 'rivals-5', title: 'Win 5 Rivals matches', detail: 'Climb the ranked ladder.', goal: 5, metric: 'rivalsWins', reward: 2500 },
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
    rivals: { points: 0, wins: 0, draws: 0, losses: 0, rank: 0, best: 0 },
    objectivesClaimed: [],
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
    parsed.rivals = { points: 0, wins: 0, draws: 0, losses: 0, rank: 0, best: 0, ...(parsed.rivals || {}) };
    parsed.rivals.points = Number(parsed.rivals.points) || 0;
    parsed.rivals.rank = rankForPoints(parsed.rivals.points);
    parsed.objectivesClaimed = Array.isArray(parsed.objectivesClaimed) ? parsed.objectivesClaimed : [];
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

function slotIndexFor(state, uid) {
  const key = Object.keys(state.squad).find((entry) => state.squad[entry] === uid);
  return key === undefined ? null : Number(key);
}

// Swap two players wherever they are: XI to XI, XI to bench or bench to bench.
export function swapPlayers(state, uidA, uidB) {
  if (!uidA || !uidB || uidA === uidB) return state;
  const aSlot = slotIndexFor(state, uidA);
  const bSlot = slotIndexFor(state, uidB);
  const aBench = state.bench.indexOf(uidA);
  const bBench = state.bench.indexOf(uidB);
  if (aSlot !== null && bSlot !== null) {
    state.squad[aSlot] = uidB;
    state.squad[bSlot] = uidA;
  } else if (aSlot !== null && bBench >= 0) {
    state.squad[aSlot] = uidB;
    state.bench[bBench] = uidA;
  } else if (aBench >= 0 && bSlot !== null) {
    state.bench[aBench] = uidB;
    state.squad[bSlot] = uidA;
  } else if (aBench >= 0 && bBench >= 0) {
    state.bench[aBench] = uidB;
    state.bench[bBench] = uidA;
  } else {
    return state;
  }
  saveState(state);
  return state;
}

// Drop a player into an empty pitch slot, benching anyone already there.
export function moveToSlot(state, index, uid) {
  if (!uid) return state;
  Object.keys(state.squad).forEach((key) => {
    if (state.squad[key] === uid) delete state.squad[key];
  });
  const displaced = state.squad[index];
  state.squad[index] = uid;
  state.bench = state.bench.filter((id) => id !== uid && id !== displaced);
  if (displaced) state.bench = [displaced, ...state.bench].slice(0, BENCH_SIZE);
  saveState(state);
  return state;
}

// Drop a player onto an empty substitute slot.
export function moveToBench(state, index, uid) {
  if (!uid) return state;
  Object.keys(state.squad).forEach((key) => {
    if (state.squad[key] === uid) delete state.squad[key];
  });
  const rest = state.bench.filter((id) => id !== uid);
  const displaced = rest[index];
  const next = rest.slice();
  next[index] = uid;
  if (displaced) next.push(displaced);
  state.bench = next.filter(Boolean).slice(0, BENCH_SIZE);
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

// ── Transfer market ───────────────────────────────────────────────────────
export function marketPrice(player) {
  return Math.max(300, round(Math.pow(Math.max(50, player.ovr) - 40, 2) * 1.1));
}

export function buyMarketPlayer(state, data, key) {
  const source = data.pool.find((player) => `${player.sid}:${player.clubId}` === key);
  if (!source) return { ok: false, reason: 'missing' };
  const price = marketPrice(source);
  if (state.coins < price) return { ok: false, reason: 'coins', price };
  const signed = instantiate(source);
  state.club.push(signed);
  state.coins -= price;
  saveState(state);
  return { ok: true, player: signed, price };
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

// ── Rivals ────────────────────────────────────────────────────────────────
export function rankForPoints(points) {
  let index = 0;
  RANKS.forEach((rank, position) => {
    if (points >= rank.min) index = position;
  });
  return index;
}

export function rivalsOpponent(state) {
  const rivals = state.rivals || {};
  const rank = clamp(Number(rivals.rank) || 0, 0, RANKS.length - 1);
  const names = ['Riverside Athletic', 'Kingsmeadow', 'Vulcan FC', 'Olympic Nord', 'Meridian United'];
  const name = names[rank % names.length];
  return {
    id: `rivals-${rank}`,
    name,
    short: name.slice(0, 3).toUpperCase(),
    rating: clamp(64 + rank * 6 + randomInt(-2, 3), 60, 95),
    color: RANKS[rank].color,
    reward: 1.2 + rank * 0.35,
  };
}

export function simulateRivals(state) {
  const opponent = rivalsOpponent(state);
  const result = simulateMatch(state, opponent);
  result.mode = 'rivals';
  return result;
}

// Rivals uses its own ladder: results move rating instead of promotion points.
export function applyRivalsResult(state, result) {
  const rivals = state.rivals;
  rivals.wins = Number(rivals.wins) || 0;
  rivals.draws = Number(rivals.draws) || 0;
  rivals.losses = Number(rivals.losses) || 0;
  if (result.outcome === 'win') rivals.wins += 1;
  else if (result.outcome === 'draw') rivals.draws += 1;
  else rivals.losses += 1;

  const before = rankForPoints(rivals.points || 0);
  const delta = result.outcome === 'win' ? 45 : result.outcome === 'draw' ? 12 : -22;
  rivals.points = Math.max(0, (Number(rivals.points) || 0) + delta);
  const after = rankForPoints(rivals.points);
  rivals.rank = after;
  rivals.best = Math.max(Number(rivals.best) || 0, after);

  const rankedUp = after > before;
  const reward = rankedUp ? RANKS[after].reward : 0;
  state.coins += result.coins + reward;
  saveState(state);
  return { rankedUp, rank: after, reward };
}

export function rivalProgress(state) {
  const rivals = state.rivals || { points: 0, rank: 0 };
  const index = rankForPoints(rivals.points || 0);
  const rank = RANKS[index];
  const next = RANKS[index + 1] || null;
  const span = next ? next.min - rank.min : 1;
  const percent = next ? clamp((((rivals.points || 0) - rank.min) / span) * 100, 0, 100) : 100;
  return { rank, next, percent, points: rivals.points || 0, index };
}

// ── Objectives ────────────────────────────────────────────────────────────
export function objectiveProgress(state) {
  const metrics = squadMetrics(state);
  const rivals = state.rivals || {};
  const values = {
    packs: state.packsOpened || 0,
    club: state.club.length,
    rating: metrics.rating,
    wins: (state.record.w || 0) + (rivals.wins || 0),
    rivalsWins: rivals.wins || 0,
  };
  const claimed = new Set(state.objectivesClaimed || []);
  return OBJECTIVES.map((objective) => {
    const raw = values[objective.metric] || 0;
    return {
      ...objective,
      value: Math.min(raw, objective.goal),
      complete: raw >= objective.goal,
      claimed: claimed.has(objective.id),
    };
  });
}

export function claimObjective(state, id) {
  const objective = objectiveProgress(state).find((entry) => entry.id === id);
  if (!objective || !objective.complete || objective.claimed) return { ok: false };
  state.coins += objective.reward;
  state.objectivesClaimed = [...(state.objectivesClaimed || []), id];
  saveState(state);
  return { ok: true, reward: objective.reward, objective };
}

export function divisionName(division) {
  const names = { 1: 'ELITE', 2: 'DIVISION 1', 3: 'DIVISION 2', 4: 'DIVISION 3', 5: 'DIVISION 4' };
  return names[division] || `DIVISION ${division}`;
}

export { BENCH_SIZE, PROMOTION_POINTS };
