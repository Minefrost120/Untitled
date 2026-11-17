// Ultimate Team data layer.
// Reuses the game's own bundled real-squad and club chunks instead of shipping
// a second player database. Those chunks are content-hashed by the build, so
// they are discovered at runtime rather than hard-coded: page preloads, loaded
// resources, the app's entry bundle and a small cache are all consulted. If a
// chunk cannot be found or a module no longer exports the expected data, the
// mode degrades (derived club names) or reports "unavailable" instead of
// throwing, and the rest of the game keeps working.

const KNOWN_CHUNKS = {
  squads: '/assets/realSquads-v4Z_bKqE.js',
  clubs: '/assets/clubs-7SsSOggh.js',
};

// Entry chunks keep their module name and gain a hash suffix. Squad *parts* use
// `realSquads.partN-…`, so the dash form deliberately matches only the entry.
const SQUAD_CHUNK_RE = /\/?assets\/realSquads-[A-Za-z0-9_-]+\.js/;
const CLUB_CHUNK_RE = /\/?assets\/clubs-[A-Za-z0-9_-]+\.js/;
const CACHE_KEY = 'uf27:chunks:v2';

export const GROUPS = {
  GK: 'GK',
  RB: 'DEF', CB: 'DEF', LB: 'DEF',
  CDM: 'MID', CM: 'MID', CAM: 'MID', RM: 'MID', LM: 'MID',
  RW: 'ATT', LW: 'ATT', ST: 'ATT',
};

// Pitch coordinates follow the game's own formation data: x is left/right in
// percent-ish units, d is depth from own goal (0) to opponent goal (1).
export const FORMATIONS = {
  '4-3-3': {
    name: '4-3-3',
    desc: 'Wide front three with a holding midfielder.',
    slots: [
      { pos: 'GK', x: 0, d: 0.04 },
      { pos: 'RB', x: 22, d: 0.2 }, { pos: 'CB', x: 8, d: 0.15 }, { pos: 'CB', x: -8, d: 0.15 }, { pos: 'LB', x: -22, d: 0.2 },
      { pos: 'CDM', x: 0, d: 0.34 }, { pos: 'CM', x: 15, d: 0.46 }, { pos: 'CM', x: -15, d: 0.46 },
      { pos: 'RW', x: 24, d: 0.68 }, { pos: 'ST', x: 0, d: 0.74 }, { pos: 'LW', x: -24, d: 0.68 },
    ],
  },
  '4-2-3-1': {
    name: '4-2-3-1',
    desc: 'Double pivot, a free number ten and one striker.',
    slots: [
      { pos: 'GK', x: 0, d: 0.04 },
      { pos: 'RB', x: 22, d: 0.2 }, { pos: 'CB', x: 8, d: 0.15 }, { pos: 'CB', x: -8, d: 0.15 }, { pos: 'LB', x: -22, d: 0.2 },
      { pos: 'CDM', x: 8, d: 0.35 }, { pos: 'CDM', x: -8, d: 0.35 },
      { pos: 'RM', x: 24, d: 0.57 }, { pos: 'CAM', x: 0, d: 0.59 }, { pos: 'LM', x: -24, d: 0.57 },
      { pos: 'ST', x: 0, d: 0.76 },
    ],
  },
  '4-4-2': {
    name: '4-4-2',
    desc: 'Flat midfield four, two strikers, old-school balance.',
    slots: [
      { pos: 'GK', x: 0, d: 0.04 },
      { pos: 'RB', x: 22, d: 0.2 }, { pos: 'CB', x: 8, d: 0.15 }, { pos: 'CB', x: -8, d: 0.15 }, { pos: 'LB', x: -22, d: 0.2 },
      { pos: 'RM', x: 24, d: 0.48 }, { pos: 'CM', x: 8, d: 0.44 }, { pos: 'CM', x: -8, d: 0.44 }, { pos: 'LM', x: -24, d: 0.48 },
      { pos: 'ST', x: 8, d: 0.74 }, { pos: 'ST', x: -8, d: 0.74 },
    ],
  },
  '3-5-2': {
    name: '3-5-2',
    desc: 'Back three, wing-backs high and two up top.',
    slots: [
      { pos: 'GK', x: 0, d: 0.04 },
      { pos: 'CB', x: 15, d: 0.15 }, { pos: 'CB', x: 0, d: 0.13 }, { pos: 'CB', x: -15, d: 0.15 },
      { pos: 'RM', x: 28, d: 0.46 }, { pos: 'CM', x: 12, d: 0.42 }, { pos: 'CM', x: 0, d: 0.38 }, { pos: 'CM', x: -12, d: 0.42 }, { pos: 'LM', x: -28, d: 0.46 },
      { pos: 'ST', x: 9, d: 0.74 }, { pos: 'ST', x: -9, d: 0.74 },
    ],
  },
  '5-3-2': {
    name: '5-3-2',
    desc: 'Deep block with wing-backs and a compact three.',
    slots: [
      { pos: 'GK', x: 0, d: 0.04 },
      { pos: 'RB', x: 30, d: 0.24 }, { pos: 'CB', x: 15, d: 0.14 }, { pos: 'CB', x: 0, d: 0.12 }, { pos: 'CB', x: -15, d: 0.14 }, { pos: 'LB', x: -30, d: 0.24 },
      { pos: 'CM', x: 12, d: 0.42 }, { pos: 'CDM', x: 0, d: 0.36 }, { pos: 'CM', x: -12, d: 0.42 },
      { pos: 'ST', x: 9, d: 0.73 }, { pos: 'ST', x: -9, d: 0.73 },
    ],
  },
};

export const FORMATION_IDS = Object.keys(FORMATIONS);

function titleise(slug) {
  return String(slug || '')
    .split('-')
    .map((word) => {
      if (!word) return '';
      const upper = word.toUpperCase();
      if (['FC', 'CF', 'AC', 'AS', 'SS', 'SV', 'SC', 'US', 'RC', 'CD', 'UD'].includes(upper)) return upper;
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(' ')
    .trim();
}

function initials(name) {
  const parts = String(name || 'UF').trim().split(/\s+/).filter(Boolean);
  return (parts.slice(0, 2).map((p) => p[0]).join('') || 'UF').toUpperCase();
}

// ── Chunk discovery ────────────────────────────────────────────────────────
function normalise(url) {
  try {
    return new URL(url, typeof location !== 'undefined' ? location.href : 'http://localhost').pathname;
  } catch {
    return url;
  }
}

function pageCandidates() {
  const urls = [];
  if (typeof document !== 'undefined') {
    document.querySelectorAll('link[href]').forEach((el) => urls.push(el.getAttribute('href') || ''));
    document.querySelectorAll('script[src]').forEach((el) => urls.push(el.getAttribute('src') || ''));
  }
  if (typeof performance !== 'undefined' && typeof performance.getEntriesByType === 'function') {
    performance.getEntriesByType('resource').forEach((entry) => urls.push(entry.name || ''));
  }
  return urls;
}

export function matchChunkUrls(urls) {
  const found = {};
  for (const raw of urls) {
    if (!raw) continue;
    const url = normalise(raw);
    if (!found.squads && SQUAD_CHUNK_RE.test(url)) found.squads = url.match(SQUAD_CHUNK_RE)[0];
    if (!found.clubs && CLUB_CHUNK_RE.test(url)) found.clubs = url.match(CLUB_CHUNK_RE)[0];
  }
  return found;
}

async function scanEntryBundle() {
  if (typeof document === 'undefined' || typeof fetch !== 'function') return {};
  const entries = [...document.querySelectorAll('script[type="module"][src]')].map((el) => el.getAttribute('src'));
  for (const src of entries) {
    try {
      const response = await fetch(src, { cache: 'no-cache' });
      if (!response.ok) continue;
      const text = await response.text();
      const found = matchChunkUrls([...text.matchAll(/\/?assets\/[A-Za-z0-9_.@-]+\.js/g)].map((match) => match[0]));
      if (found.squads || found.clubs) return found;
    } catch {
      /* try the next entry */
    }
  }
  return {};
}

function readCache() {
  try {
    const raw = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem(CACHE_KEY) : null;
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function writeCache(found) {
  try {
    if (typeof sessionStorage !== 'undefined' && (found.squads || found.clubs)) {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(found));
    }
  } catch {
    /* cache is an optimisation only */
  }
}

function clearCache() {
  try {
    if (typeof sessionStorage !== 'undefined') sessionStorage.removeItem(CACHE_KEY);
  } catch {
    /* ignore */
  }
}

export async function resolveChunkUrls({ squadsUrl, clubsUrl } = {}) {
  if (squadsUrl && clubsUrl) return { squads: squadsUrl, clubs: clubsUrl, source: 'explicit' };

  const found = { ...readCache(), ...matchChunkUrls(pageCandidates()) };
  let source = 'page';
  if (!found.squads || !found.clubs) {
    const scanned = await scanEntryBundle();
    if (scanned.squads && !found.squads) found.squads = scanned.squads;
    if (scanned.clubs && !found.clubs) found.clubs = scanned.clubs;
    if (scanned.squads || scanned.clubs) source = 'bundle';
  }
  writeCache(found);

  return {
    squads: squadsUrl || found.squads || KNOWN_CHUNKS.squads,
    clubs: clubsUrl || found.clubs || KNOWN_CHUNKS.clubs,
    source,
  };
}

async function importWithFallback(urls) {
  const attempts = [];
  let lastError = null;
  for (const url of urls.filter(Boolean).filter((value, index, list) => list.indexOf(value) === index)) {
    try {
      const module = await import(/* @vite-ignore */ url);
      attempts.push(url);
      return { module, url, attempts };
    } catch (error) {
      attempts.push(url);
      lastError = error;
    }
  }
  return { module: null, url: null, attempts, error: lastError };
}

// ── Export shape detection ─────────────────────────────────────────────────
function looksLikePlayerArray(value) {
  if (!Array.isArray(value) || !value.length) return false;
  const sample = value[0];
  return Boolean(sample) && typeof sample === 'object' && typeof sample.ovr === 'number' && (sample.sid !== undefined || typeof sample.name === 'string');
}

function looksLikeSquadMap(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  return Object.values(value).some(looksLikePlayerArray);
}

function looksLikeClubRecord(value) {
  return Boolean(value) && typeof value === 'object' && typeof value.name === 'string' && typeof value.primary === 'string';
}

function looksLikeLeagueRecord(value) {
  return Boolean(value) && typeof value === 'object' && typeof value.name === 'string' && typeof value.primary !== 'string' && (Array.isArray(value.clubs) || typeof value.tier === 'number');
}

function looksLikeClubMap(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  return Object.values(value).some(looksLikeClubRecord);
}

function looksLikeLeagueMap(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  return Object.values(value).some(looksLikeLeagueRecord);
}

export function findSquadMap(module) {
  if (!module || typeof module !== 'object') return null;
  if (looksLikeSquadMap(module.REAL_SQUADS)) return module.REAL_SQUADS;
  for (const value of Object.values(module)) {
    if (looksLikeSquadMap(value)) return value;
  }
  return null;
}

function chunkHasData(kind, module) {
  if (!module) return false;
  return kind === 'squads' ? Boolean(findSquadMap(module)) : Boolean(findClubMaps(module).clubs);
}

// Import a chunk, then rediscover if it turns out a cached name went stale
// after a rebuild. Explicit URLs (tests, overrides) are trusted as given.
async function importDataChunk(kind, resolved, explicit) {
  const first = await importWithFallback([resolved[kind]]);
  if (chunkHasData(kind, first.module) || explicit) return first;

  clearCache();
  const retryCandidates = [
    (await scanEntryBundle())[kind],
    matchChunkUrls(pageCandidates())[kind],
    KNOWN_CHUNKS[kind],
  ];
  const second = await importWithFallback(retryCandidates);
  if (chunkHasData(kind, second.module)) {
    resolved[kind] = second.url;
    writeCache(resolved);
    return second;
  }
  return first;
}

export function findClubMaps(module) {
  let clubs = null;
  let leagues = null;
  if (!module || typeof module !== 'object') return { clubs, leagues };
  for (const value of Object.values(module)) {
    if (!clubs && looksLikeClubMap(value)) clubs = value;
    else if (!leagues && looksLikeLeagueMap(value)) leagues = value;
  }
  return { clubs, leagues };
}

// ── Data assembly ──────────────────────────────────────────────────────────
function buildPlayer(raw, clubId, club, league) {
  const name = raw.name || `${raw.first || ''} ${raw.last || ''}`.trim();
  const clubName = club ? club.name : titleise(clubId);
  return {
    sid: raw.sid,
    name,
    last: raw.last || name.split(' ').slice(-1)[0] || name,
    nat: raw.nat || 'Unknown',
    pos: GROUPS[raw.pos] ? raw.pos : 'CM',
    ovr: raw.ovr,
    pot: typeof raw.pot === 'number' ? raw.pot : raw.ovr,
    attrs: raw.attrs || {},
    foot: raw.foot || '',
    skills: raw.skillMoves || 0,
    weakFoot: raw.weakFoot || 0,
    clubId,
    clubName,
    clubShort: club ? club.short || initials(clubName) : initials(clubName),
    clubColor: club ? club.primary || '#4fe3ff' : '#4fe3ff',
    clubAccent: club ? club.secondary || '#050d0b' : '#050d0b',
    leagueId: league ? league.id || '' : '',
    leagueName: league ? league.name || 'Rest of World' : 'Rest of World',
  };
}

let cache = null;

export async function loadGameData(options = {}) {
  if (cache && !options.chunkUrls && !options.force) return cache;

  const resolved = await resolveChunkUrls(options.chunkUrls || {});
  const warnings = [];

  const squadImport = await importDataChunk('squads', resolved, Boolean(options.chunkUrls));
  const squads = findSquadMap(squadImport.module);

  if (!squads) {
    const reason = squadImport.error
      ? `The bundled squad chunk could not be loaded (${squadImport.error.message || 'network error'}).`
      : 'The bundled squad chunk loaded but no player data was found in it.';
    cache = null;
    return {
      status: 'unavailable',
      reason,
      pool: [],
      clubs: {},
      leagues: {},
      nations: [],
      leaguesInPool: [],
      maxOvr: 0,
      warnings: [reason],
      sources: { ...resolved, attempts: squadImport.attempts },
    };
  }

  const clubImport = await importDataChunk('clubs', resolved, Boolean(options.chunkUrls));
  const clubMaps = findClubMaps(clubImport.module);
  let clubs = clubMaps.clubs || {};
  let leagues = clubMaps.leagues || {};

  if (!Object.keys(clubs).length) {
    warnings.push('Club metadata was unavailable, so club names and colours were derived from squad ids.');
    clubs = {};
  }
  if (!Object.keys(leagues).length) {
    if (Object.keys(clubs).length) warnings.push('League metadata was unavailable, so chemistry ignores leagues.');
    leagues = {};
  }

  const pool = [];
  const seen = new Set();

  for (const [clubId, rawPlayers] of Object.entries(squads)) {
    const club = clubs[clubId] || null;
    const league = club && club.leagueId ? leagues[club.leagueId] : null;
    for (const raw of rawPlayers || []) {
      if (!raw || typeof raw.ovr !== 'number') continue;
      const key = `${clubId}:${raw.sid}`;
      if (seen.has(key)) continue;
      seen.add(key);
      pool.push(buildPlayer(raw, clubId, club, league));
    }
  }

  if (!pool.length) {
    cache = null;
    return {
      status: 'unavailable',
      reason: 'Player data was found but contained no usable players.',
      pool: [],
      clubs,
      leagues,
      nations: [],
      leaguesInPool: [],
      maxOvr: 0,
      warnings,
      sources: resolved,
    };
  }

  pool.sort((a, b) => b.ovr - a.ovr);

  const status = warnings.length ? 'degraded' : 'ready';
  cache = {
    status,
    pool,
    clubs,
    leagues,
    nations: Array.from(new Set(pool.map((p) => p.nat))).sort(),
    leaguesInPool: Array.from(new Map(pool.filter((p) => p.leagueId).map((p) => [p.leagueId, p.leagueName])).entries())
      .map(([id, name]) => ({ id, name }))
      .sort((a, b) => a.name.localeCompare(b.name)),
    maxOvr: pool[0].ovr,
    warnings,
    sources: resolved,
  };
  return cache;
}

export function positionAffinity(slotPos, playerPos) {
  if (!playerPos) return 0;
  if (slotPos === playerPos) return 1;
  if (GROUPS[slotPos] && GROUPS[slotPos] === GROUPS[playerPos]) return 0.55;
  const neighbours = {
    RB: ['LB', 'RM', 'CB'], LB: ['RB', 'LM', 'CB'],
    CB: ['CDM', 'RB', 'LB'], CDM: ['CM', 'CB'], CM: ['CDM', 'CAM', 'RM', 'LM'],
    CAM: ['CM', 'ST', 'RW', 'LW'], RM: ['RW', 'CM', 'RB'], LM: ['LW', 'CM', 'LB'],
    RW: ['RM', 'ST', 'LW'], LW: ['LM', 'ST', 'RW'], ST: ['CAM', 'RW', 'LW'], GK: [],
  };
  return (neighbours[slotPos] || []).includes(playerPos) ? 0.3 : 0;
}

export function prettyClubName(clubId) {
  return titleise(clubId);
}
