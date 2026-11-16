// Ultimate Team data layer.
// Reuses the game's own bundled real-squad and club chunks instead of shipping
// a second player database, so ratings, positions, nations, clubs and colours
// always match the rest of Ultimate Football 27.

const SQUADS_URL = '/assets/realSquads-v4Z_bKqE.js';
const CLUBS_URL = '/assets/clubs-7SsSOggh.js';

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

let cache = null;

export async function loadGameData() {
  if (cache) return cache;

  const [squadModule, clubModule] = await Promise.all([import(SQUADS_URL), import(CLUBS_URL)]);
  const squads = squadModule.REAL_SQUADS || {};
  const clubs = clubModule.C || {};
  const leagues = clubModule.a || {};

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

      const name = raw.name || `${raw.first || ''} ${raw.last || ''}`.trim();
      const clubName = club ? club.name : titleise(clubId);
      pool.push({
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
        clubShort: club ? club.short : initials(clubName),
        clubColor: club ? club.primary : '#4fe3ff',
        clubAccent: club ? club.secondary : '#050d0b',
        leagueId: league ? league.id : '',
        leagueName: league ? league.name : 'Rest of World',
      });
    }
  }

  pool.sort((a, b) => b.ovr - a.ovr);

  cache = {
    pool,
    clubs,
    leagues,
    nations: Array.from(new Set(pool.map((p) => p.nat))).sort(),
    leaguesInPool: Array.from(new Map(pool.filter((p) => p.leagueId).map((p) => [p.leagueId, p.leagueName])).entries())
      .map(([id, name]) => ({ id, name }))
      .sort((a, b) => a.name.localeCompare(b.name)),
    maxOvr: pool.length ? pool[0].ovr : 90,
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
