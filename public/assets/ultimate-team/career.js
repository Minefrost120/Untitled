// Player career: pro creation, an August→May calendar with the cup final in
// April, dynamic rivals that scale with your form, retirement at 30 or later,
// and then the same save continuing as manager. Clubs, leagues and players come
// from the game's own database.

const STORAGE_KEY = 'uf27:career:v1';

const POSITIONS = ['ST', 'CAM', 'CM', 'LW', 'RW', 'LM', 'RM', 'CDM', 'CB', 'LB', 'RB', 'GK'];

// League rounds per month; the cup final is the April showpiece and the league
// finishes with two matches in May.
const MONTH_PLAN = [
  ['AUGUST', 4],
  ['SEPTEMBER', 4],
  ['OCTOBER', 4],
  ['NOVEMBER', 4],
  ['DECEMBER', 3],
  ['JANUARY', 3],
  ['FEBRUARY', 3],
  ['MARCH', 3],
  ['APRIL', 3],
  ['MAY', 2],
];

const CUP_ROUNDS = {
  OCTOBER: { label: 'CUP ROUND 1', bump: -9 },
  DECEMBER: { label: 'CUP QUARTER-FINAL', bump: -3 },
  FEBRUARY: { label: 'CUP SEMI-FINAL', bump: 3 },
  APRIL: { label: 'CUP FINAL', bump: 8 },
};

const WONDER_FIRST = ['Dario', 'Kian', 'Mateo', 'Yusuf', 'Noah', 'Ravi', 'Tomas', 'Ilias'];
const WONDER_LAST = ['Varela', 'Kovac', 'Duarte', 'Mbeki', 'Sorensen', 'Ferreira', 'Halim', 'Brenner'];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const random = (min, max) => Math.random() * (max - min) + min;
const randomInt = (min, max) => Math.floor(random(min, max + 1));
const round = (value) => Math.round(value);

const indexes = new WeakMap();

function indexFor(data) {
  if (indexes.has(data)) return indexes.get(data);
  const clubs = new Map();
  // Seed from the club metadata first so every club in the game is available,
  // not only the 597 that ship with squad data.
  Object.entries(data.clubs || {}).forEach(([id, raw]) => {
    const league = raw && raw.leagueId ? (data.leagues || {})[raw.leagueId] : null;
    clubs.set(id, {
      id,
      name: (raw && raw.name) || id,
      leagueId: (raw && raw.leagueId) || '',
      leagueName: (league && league.name) || '',
      ovrs: [],
    });
  });
  data.pool.forEach((player) => {
    if (!player.clubId) return;
    let club = clubs.get(player.clubId);
    if (!club) {
      club = { id: player.clubId, name: player.clubName, leagueId: player.leagueId, leagueName: player.leagueName, ovrs: [] };
      clubs.set(player.clubId, club);
    }
    if (!club.name && player.clubName) club.name = player.clubName;
    club.ovrs.push(player.ovr);
  });

  const ratings = new Map();
  clubs.forEach((club) => {
    const top = club.ovrs.sort((a, b) => b - a).slice(0, 11);
    if (top.length) ratings.set(club.id, round(top.reduce((sum, ovr) => sum + ovr, 0) / top.length));
  });
  const leagueRatings = new Map();
  clubs.forEach((club) => {
    const rating = ratings.get(club.id);
    if (!rating) return;
    if (!leagueRatings.has(club.leagueId)) leagueRatings.set(club.leagueId, []);
    leagueRatings.get(club.leagueId).push(rating);
  });
  const leagueAverage = new Map();
  leagueRatings.forEach((list, id) => leagueAverage.set(id, round(list.reduce((sum, rating) => sum + rating, 0) / list.length)));
  const clubList = [...clubs.values()]
    .map((club) => ({
      id: club.id,
      name: club.name,
      leagueId: club.leagueId,
      leagueName: club.leagueName,
      rating: ratings.get(club.id) || leagueAverage.get(club.leagueId) || 62,
    }))
    .sort((a, b) => b.rating - a.rating);
  const byLeague = new Map();
  clubList.forEach((club) => {
    if (!byLeague.has(club.leagueId)) byLeague.set(club.leagueId, []);
    byLeague.get(club.leagueId).push(club);
  });
  const elite = data.pool
    .filter((player) => player.ovr >= 84)
    .sort((a, b) => b.ovr - a.ovr)
    .slice(0, 700);
  const index = { clubs: clubList, byLeague, elite, clubMap: clubs };
  indexes.set(data, index);
  return index;
}

export function clubOptions(data) {
  return indexFor(data).clubs.map(({ id, name, leagueId, leagueName, rating }) => ({ id, name, leagueId, leagueName, rating }));
}

function pickOpponent(candidates, target) {
  if (!candidates.length) return null;
  const ranked = candidates
    .map((club) => ({ club, distance: Math.abs(club.rating - target) + random(0, 6) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 8);
  return ranked[randomInt(0, ranked.length - 1)].club;
}

function wonderkid(level) {
  return {
    name: `${WONDER_FIRST[randomInt(0, WONDER_FIRST.length - 1)]} ${WONDER_LAST[randomInt(0, WONDER_LAST.length - 1)]}`,
    ovr: round(clamp(level + randomInt(1, 5), 90, 99)),
    pos: 'ST',
    elite: true,
    wonderkid: true,
  };
}

function makeStar(data, state, fixture) {
  const info = indexFor(data);
  const level = clamp(state.ovr + (fixture.opponent.rating - 72) * 0.7 + (state.form || 0) * 5 + random(-3, 3), 55, 99);

  // The better your pro gets, the better the player you come up against: the
  // elite list is drawn from the game's own best players.
  if (level >= 91 && info.elite.length) {
    if (state.ovr >= 93 || level >= 96) return wonderkid(level);
    const band = info.elite.filter((player) => player.ovr <= level + 5 && player.ovr >= level - 9);
    const pool = band.length ? band : info.elite;
    const pick = pool[randomInt(0, Math.min(pool.length - 1, 150))];
    return { name: pick.name, ovr: pick.ovr, pos: pick.pos, elite: true };
  }
  if (level >= 78 && info.elite.length) {
    const band = info.elite.filter((player) => player.ovr >= Math.min(78, level - 4) && player.ovr <= level + 3);
    if (band.length) {
      const pick = band[randomInt(0, Math.min(band.length - 1, 150))];
      return { name: pick.name, ovr: pick.ovr, pos: pick.pos, elite: true };
    }
  }
  const pick = data.pool.length ? data.pool[randomInt(0, Math.min(data.pool.length - 1, 4000))] : null;
  return { name: pick ? pick.name : 'Academy Prospect', ovr: round(clamp(level, 55, 84)), pos: pick ? pick.pos : state.pos, elite: false };
}

function generateFixtures(state, data) {
  const info = indexFor(data);
  const leagueClubs = (info.byLeague.get(state.leagueId) || []).filter((club) => club.id !== state.clubId);
  const opponentPool = leagueClubs.length >= 6 ? leagueClubs : info.clubs;
  const fixtures = [];
  let leagueRound = 0;

  MONTH_PLAN.forEach(([month, count]) => {
    for (let i = 0; i < count; i += 1) {
      leagueRound += 1;
      const target = state.clubRating + (leagueRound / 33) * 7;
      const opponent = pickOpponent(opponentPool, target);
      if (!opponent) continue;
      fixtures.push({
        id: `${state.season}-${month}-${leagueRound}`,
        month,
        competition: 'LEAGUE',
        label: leagueRound === 33 ? 'MATCHDAY 33 · FINAL DAY' : `MATCHDAY ${leagueRound}`,
        opponent,
        home: leagueRound % 2 === 0,
        played: false,
      });
    }
    const cup = CUP_ROUNDS[month];
    if (cup) {
      const opponent = pickOpponent(info.clubs, state.clubRating + cup.bump + 5);
      if (opponent) {
        fixtures.push({
          id: `${state.season}-${month}-cup`,
          month,
          competition: 'CUP',
          label: cup.label,
          opponent,
          home: false,
          played: false,
        });
      }
    }
  });

  fixtures.forEach((fixture) => {
    fixture.star = makeStar(data, state, fixture);
  });
  return fixtures;
}

function emptySeasonStats() {
  return { apps: 0, goals: 0, assists: 0, ratingSum: 0, points: 0 };
}

function newState(data, options) {
  const info = indexFor(data);
  const club = info.clubs.find((entry) => entry.id === options.clubId) || info.clubs[0];
  if (!club) return null;
  return {
    version: 1,
    active: true,
    name: (options.name || 'Your Pro').trim().slice(0, 24) || 'Your Pro',
    pos: POSITIONS.includes(options.pos) ? options.pos : 'ST',
    clubId: club.id,
    clubName: club.name,
    leagueId: club.leagueId,
    leagueName: club.leagueName,
    clubRating: club.rating,
    age: 18,
    ovr: clamp(round(club.rating - 7 + random(-2, 3)), 58, 76),
    season: 1,
    points: 0,
    form: 0,
    trophies: 0,
    stats: { apps: 0, goals: 0, assists: 0, ratingSum: 0 },
    seasonStats: emptySeasonStats(),
    fixtures: [],
    index: 0,
    log: [],
    retired: false,
    manager: false,
    managerRecord: { w: 0, d: 0, l: 0, seasons: 0 },
    lastSeason: null,
  };
}

export function createCareer(data, options = {}) {
  const state = newState(data, options);
  if (!state) return null;
  state.fixtures = generateFixtures(state, data);
  saveCareer(state);
  return state;
}

export function loadCareer() {
  try {
    if (typeof localStorage === 'undefined') return null;
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== 1 || !parsed.name) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveCareer(state) {
  try {
    if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage is an optimisation; the session still works in memory */
  }
}

export function clearCareer() {
  try {
    if (typeof localStorage !== 'undefined') localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
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

function finishSeason(state, data) {
  const champion = state.points >= 80;
  if (champion) state.trophies += 1;
  const summary = {
    season: state.season,
    points: state.points,
    champion,
    ...state.seasonStats,
  };
  state.lastSeason = summary;
  if (state.manager) {
    state.managerRecord.seasons = (state.managerRecord.seasons || 0) + 1;
    state.lastManagerFinish = state.points >= 80 ? 'CHAMPIONS' : state.points >= 60 ? 'TOP FOUR' : state.points >= 45 ? 'MID TABLE' : 'RELEGATION FIGHT';
  }
  state.age += 1;
  state.season += 1;
  state.points = 0;
  state.form = 0;
  state.seasonStats = emptySeasonStats();
  state.fixtures = generateFixtures(state, data);
  state.index = 0;
  state.log = state.log.slice(0, 40);
  saveCareer(state);
  return summary;
}

export function nextFixture(state) {
  return state && state.fixtures ? state.fixtures[state.index] || null : null;
}

export function currentMonth(state) {
  const fixture = nextFixture(state);
  if (fixture) return fixture.month;
  return state && state.fixtures.length ? 'MAY' : 'AUGUST';
}

export function seasonPointTarget() {
  return 80;
}

export function playNext(state, data) {
  if (!state || !state.active) return { ok: false, reason: 'inactive' };
  if (!state.fixtures.length) {
    state.fixtures = generateFixtures(state, data);
    state.index = 0;
  }
  const fixture = state.fixtures[state.index];
  if (!fixture) {
    const summary = finishSeason(state, data);
    return { ok: true, seasonEnded: true, summary, fixture: null };
  }

  const manager = Boolean(state.manager);
  const team = state.clubRating + (manager ? 2 : (state.ovr - 70) * 0.55) + (fixture.home ? 1.5 : 0);
  const oppRating = fixture.opponent.rating + (fixture.home ? -1.5 : 1.5);
  const goalsFor = poisson(clamp(1.35 + (team - oppRating) / 10, 0.25, 4.2));
  const goalsAgainst = poisson(clamp(1.35 - (team - oppRating) / 10, 0.25, 4.2));
  const outcome = goalsFor > goalsAgainst ? 'win' : goalsFor === goalsAgainst ? 'draw' : 'loss';

  let playerGoals = 0;
  let playerAssists = 0;
  let playerRating = 0;
  let starGoals = 0;

  if (!manager) {
    const attack = ['ST', 'CF'].includes(state.pos)
      ? 0.62
      : ['LW', 'RW', 'CAM'].includes(state.pos)
        ? 0.48
        : ['CM', 'LM', 'RM'].includes(state.pos)
          ? 0.24
          : state.pos === 'GK'
            ? 0.02
            : 0.08;
    const conversion = attack * (state.ovr / 80) * (1 + (state.form || 0) * 0.2);
    for (let i = 0; i < goalsFor; i += 1) {
      if (Math.random() < conversion) playerGoals += 1;
      else if (Math.random() < 0.4) playerAssists += 1;
    }
    playerRating = clamp(
      6.1 + playerGoals * 0.85 + playerAssists * 0.4 + (goalsFor - goalsAgainst) * 0.12 + random(-0.5, 0.7),
      4.4,
      10,
    );
  }

  for (let i = 0; i < goalsAgainst; i += 1) {
    if (fixture.star && Math.random() < 0.55) starGoals += 1;
  }

  fixture.played = true;
  fixture.result = { goalsFor, goalsAgainst, outcome, playerGoals, playerAssists, playerRating, starGoals };
  state.index += 1;

  if (manager) {
    state.managerRecord[outcome === 'win' ? 'w' : outcome === 'draw' ? 'd' : 'l'] += 1;
    if (outcome === 'win') state.points += 3;
    else if (outcome === 'draw') state.points += 1;
  } else {
    state.stats.apps += 1;
    state.stats.goals += playerGoals;
    state.stats.assists += playerAssists;
    state.stats.ratingSum += playerRating;
    state.seasonStats.apps += 1;
    state.seasonStats.goals += playerGoals;
    state.seasonStats.assists += playerAssists;
    state.seasonStats.ratingSum += playerRating;
    state.seasonStats.points += outcome === 'win' ? 3 : outcome === 'draw' ? 1 : 0;
    state.points += outcome === 'win' ? 3 : outcome === 'draw' ? 1 : 0;
    state.form = clamp((state.form || 0) * 0.7 + (playerRating - 6.8) / 3, -1, 1);
    state.ovr = clamp(state.ovr + (playerRating >= 7.8 ? 0.35 : playerRating >= 6.8 ? 0.16 : 0.04), 58, 99);
  }

  state.log.unshift({
    season: state.season,
    month: fixture.month,
    competition: fixture.competition,
    label: fixture.label,
    opponent: fixture.opponent.name,
    goalsFor,
    goalsAgainst,
    outcome,
  });
  state.log = state.log.slice(0, 60);

  saveCareer(state);

  if (state.index >= state.fixtures.length) {
    const summary = finishSeason(state, data);
    return { ok: true, fixture, result: fixture.result, seasonEnded: true, summary };
  }
  return { ok: true, fixture, result: fixture.result, seasonEnded: false };
}

export function retire(state, data) {
  if (!state || !state.active) return { ok: false, reason: 'inactive' };
  if (state.manager) return { ok: false, reason: 'manager' };
  if (state.age < 30) return { ok: false, reason: 'age', age: state.age };
  const totals = {
    seasons: state.season,
    apps: state.stats.apps,
    goals: state.stats.goals,
    assists: state.stats.assists,
    trophies: state.trophies,
  };
  state.retired = true;
  state.manager = true;
  state.managerRecord = { w: 0, d: 0, l: 0, seasons: 0 };
  state.points = 0;
  state.seasonStats = emptySeasonStats();
  state.fixtures = generateFixtures(state, data);
  state.index = 0;
  state.managerTotals = totals;
  saveCareer(state);
  return { ok: true, totals };
}

export function averageRating(stats) {
  if (!stats || !stats.apps) return '—';
  return (stats.ratingSum / stats.apps).toFixed(1);
}

export function monthsFor(state) {
  const fixtures = state && state.fixtures ? state.fixtures : [];
  const months = [];
  MONTH_PLAN.forEach(([month]) => {
    const list = fixtures.filter((fixture) => fixture.month === month);
    months.push({ month, fixtures: list });
  });
  return months;
}

export { POSITIONS, STORAGE_KEY, MONTH_PLAN, generateFixtures as buildFixtures };
