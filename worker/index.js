// Ultimate Football 27 — Cloudflare Worker entry.
// Serves the pre-built app bundle, and hosts the online-only 1v1 mode. A match
// is created by one player, joined with a room code by another, and the Worker
// simulates the result from both submitted XIs. There is no offline opponent.

const JSON_HEADERS = {
  'content-type': 'application/json; charset=utf-8',
  'cache-control': 'no-store',
};
const MAX_BODY_BYTES = 12 * 1024;
const MATCH_TTL_MS = 24 * 60 * 60 * 1000;

let schemaReady = false;

async function ensureSchema(db) {
  if (schemaReady) return;
  await db
    .prepare(
      `CREATE TABLE IF NOT EXISTS matches (
        id TEXT PRIMARY KEY,
        host_token TEXT NOT NULL,
        guest_token TEXT,
        host_name TEXT NOT NULL,
        guest_name TEXT,
        host_squad TEXT NOT NULL,
        guest_squad TEXT,
        host_rating REAL NOT NULL,
        guest_rating REAL,
        status TEXT NOT NULL,
        result TEXT,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      )`,
    )
    .run();
  schemaReady = true;
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

function sameOrigin(request) {
  const origin = request.headers.get('origin');
  if (!origin) return true;
  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

async function readJson(request) {
  const length = Number(request.headers.get('content-length') || 0);
  if (length > MAX_BODY_BYTES) return null;
  try {
    const body = await request.text();
    if (body.length > MAX_BODY_BYTES) return null;
    return JSON.parse(body);
  } catch {
    return null;
  }
}

function cleanName(value) {
  return String(value || 'Player')
    .replace(/[\u0000-\u001f<>]/g, '')
    .trim()
    .slice(0, 24) || 'Player';
}

function parseSquad(input) {
  if (!Array.isArray(input) || input.length !== 11) return null;
  const squad = [];
  for (const entry of input) {
    const ovr = Number(entry && entry.ovr);
    const pos = String((entry && entry.pos) || '').toUpperCase().slice(0, 3);
    const name = cleanName(entry && entry.name);
    if (!Number.isFinite(ovr) || ovr < 30 || ovr > 99 || !pos) return null;
    squad.push({ name, pos, ovr: Math.round(ovr) });
  }
  return squad;
}

function teamRating(squad) {
  return Math.round(squad.reduce((sum, player) => sum + player.ovr, 0) / squad.length);
}

function randomCode() {
  const bytes = crypto.getRandomValues(new Uint8Array(4));
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('').slice(0, 6).toUpperCase();
}

function randomToken() {
  return crypto.randomUUID().replace(/-/g, '') + crypto.randomUUID().replace(/-/g, '');
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

function pickScorer(squad) {
  const weights = squad.map((player) => {
    const attacking = player.pos === 'ST' ? 2.6 : ['LW', 'RW', 'CAM'].includes(player.pos) ? 1.9 : ['CM', 'LM', 'RM'].includes(player.pos) ? 0.9 : 0.25;
    return Math.max(1, player.ovr * attacking);
  });
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  let roll = Math.random() * total;
  for (let index = 0; index < squad.length; index += 1) {
    roll -= weights[index];
    if (roll <= 0) return squad[index];
  }
  return squad[squad.length - 1];
}

function simulate(host, guest) {
  const hostRating = teamRating(host.squad);
  const guestRating = teamRating(guest.squad);
  const edge = (hostRating - guestRating) / 12;
  const hostGoals = poisson(Math.min(4.5, Math.max(0.2, 1.35 + edge * 0.6)));
  const guestGoals = poisson(Math.min(4.5, Math.max(0.2, 1.35 - edge * 0.6)));
  const events = [];
  for (let index = 0; index < hostGoals; index += 1) {
    const scorer = pickScorer(host.squad);
    events.push({ minute: 2 + Math.floor(Math.random() * 88), side: 'home', scorer: scorer.name });
  }
  for (let index = 0; index < guestGoals; index += 1) {
    const scorer = pickScorer(guest.squad);
    events.push({ minute: 2 + Math.floor(Math.random() * 88), side: 'away', scorer: scorer.name });
  }
  events.sort((a, b) => a.minute - b.minute);
  return {
    homeName: host.name,
    awayName: guest.name,
    homeGoals: hostGoals,
    awayGoals: guestGoals,
    hostRating,
    guestRating,
    events,
    playedAt: Date.now(),
  };
}

async function createMatch(request, env) {
  if (!sameOrigin(request)) return json({ error: 'Cross-origin request blocked.' }, 403);
  const body = await readJson(request);
  if (!body) return json({ error: 'Invalid request body.' }, 400);
  const squad = parseSquad(body.squad);
  if (!squad) return json({ error: 'Send an XI of 11 valid players.' }, 400);

  await ensureSchema(env.DB);
  const token = randomToken();
  const now = Date.now();
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const code = randomCode();
    try {
      await env.DB.prepare(
        `INSERT INTO matches (id, host_token, host_name, host_squad, host_rating, status, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, 'waiting', ?, ?)`,
      )
        .bind(code, token, cleanName(body.name), JSON.stringify(squad), teamRating(squad), now, now)
        .run();
      return json({ ok: true, code, token, role: 'host' });
    } catch (error) {
      if (attempt === 3) throw error;
    }
  }
  return json({ error: 'Could not create a room.' }, 500);
}

async function joinMatch(request, env) {
  if (!sameOrigin(request)) return json({ error: 'Cross-origin request blocked.' }, 403);
  const body = await readJson(request);
  if (!body) return json({ error: 'Invalid request body.' }, 400);
  const code = String(body.code || '').trim().toUpperCase().slice(0, 6);
  if (!/^[A-F0-9]{6}$/.test(code)) return json({ error: 'Enter a valid room code.' }, 400);
  const squad = parseSquad(body.squad);
  if (!squad) return json({ error: 'Send an XI of 11 valid players.' }, 400);

  await ensureSchema(env.DB);
  const row = await env.DB.prepare('SELECT * FROM matches WHERE id = ?').bind(code).first();
  if (!row) return json({ error: 'No room with that code.' }, 404);
  if (Date.now() - Number(row.created_at) > MATCH_TTL_MS) return json({ error: 'That room has expired.' }, 410);
  if (row.status !== 'waiting' || row.guest_token) return json({ error: 'That room is already full.' }, 409);

  const guestName = cleanName(body.name);
  const result = simulate(
    { name: row.host_name, squad: JSON.parse(row.host_squad) },
    { name: guestName, squad },
  );
  const token = randomToken();
  const now = Date.now();
  const update = await env.DB.prepare(
    `UPDATE matches
       SET guest_token = ?, guest_name = ?, guest_squad = ?, guest_rating = ?, status = 'done', result = ?, updated_at = ?
     WHERE id = ? AND guest_token IS NULL`,
  )
    .bind(token, guestName, JSON.stringify(squad), teamRating(squad), JSON.stringify(result), now, code)
    .run();
  if (!update.meta || update.meta.changes !== 1) return json({ error: 'That room is already full.' }, 409);

  return json({ ok: true, code, token, role: 'guest', result });
}

async function matchState(request, env) {
  const url = new URL(request.url);
  const code = String(url.searchParams.get('code') || '').trim().toUpperCase();
  const token = String(url.searchParams.get('token') || '');
  if (!code || !token) return json({ error: 'Missing room details.' }, 400);

  await ensureSchema(env.DB);
  const row = await env.DB.prepare(
    'SELECT id, host_token, guest_token, host_name, guest_name, status, result, created_at FROM matches WHERE id = ?',
  )
    .bind(code)
    .first();
  if (!row) return json({ error: 'No room with that code.' }, 404);
  if (token !== row.host_token && token !== row.guest_token) return json({ error: 'Not allowed in that room.' }, 403);
  if (Date.now() - Number(row.created_at) > MATCH_TTL_MS) return json({ error: 'That room has expired.' }, 410);

  const role = token === row.host_token ? 'host' : 'guest';
  return json({
    ok: true,
    code: row.id,
    role,
    status: row.status,
    opponent: row.status === 'done' ? (role === 'host' ? row.guest_name : row.host_name) : null,
    result: row.result ? JSON.parse(row.result) : null,
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/api/uf27/match/')) {
      if (!env.DB) return json({ error: 'Online 1v1 is not available on this deployment.' }, 503);
      try {
        if (url.pathname === '/api/uf27/match/create' && request.method === 'POST') return await createMatch(request, env);
        if (url.pathname === '/api/uf27/match/join' && request.method === 'POST') return await joinMatch(request, env);
        if (url.pathname === '/api/uf27/match/state' && request.method === 'GET') return await matchState(request, env);
        return json({ error: 'Unknown match action.' }, 404);
      } catch (error) {
        console.error('uf27 match api failed:', error && (error.stack || error.message || error));
        return json({ error: 'Online match failed. Try again.' }, 500);
      }
    }

    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;

    const wantsHtml = (request.headers.get('accept') || '').includes('text/html');
    if (url.pathname.startsWith('/assets/') || !wantsHtml) return response;

    return env.ASSETS.fetch(new Request(new URL('/index.html', url), request));
  },
};
