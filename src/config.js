// ── Pitch geometry (metres) ────────────────────────────────────────────────
export const PITCH = {
  halfLength: 52.5,
  halfWidth: 34,
  goalHalfWidth: 3.66,
  goalHeight: 2.44,
  boxHalfWidth: 20.16,
  boxDepth: 16.5,
  sixHalfWidth: 9.16,
  sixDepth: 5.5,
  circleRadius: 9.15,
  penaltyDist: 11,
};

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const rand = (a, b) => a + Math.random() * (b - a);
export const dist2d = (ax, az, bx, bz) => Math.hypot(ax - bx, az - bz);
export const pick = (arr) => arr[(Math.random() * arr.length) | 0];

export function angleLerp(a, b, t) {
  let d = b - a;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return a + d * clamp(t, 0, 1);
}

// distance from point p to segment a-b (2D)
export function pointSegDist(ax, az, bx, bz, px, pz) {
  const vx = bx - ax;
  const vz = bz - az;
  const wx = px - ax;
  const wz = pz - az;
  const len2 = vx * vx + vz * vz || 1;
  const t = clamp((wx * vx + wz * vz) / len2, 0, 1);
  return Math.hypot(px - (ax + vx * t), pz - (az + vz * t));
}

// ── Formations: x = lateral metres, d = depth 0 (own goal) → 1 (opp goal) ──
export const FORMATIONS = {
  '4-3-3': [
    { role: 'GK', x: 0, d: 0.035, number: 1 },
    { role: 'DEF', x: 21, d: 0.21, number: 2 },
    { role: 'DEF', x: 7, d: 0.165, number: 5 },
    { role: 'DEF', x: -7, d: 0.165, number: 6 },
    { role: 'DEF', x: -21, d: 0.21, number: 3 },
    { role: 'MID', x: 0, d: 0.34, number: 4 },
    { role: 'MID', x: 14, d: 0.45, number: 8 },
    { role: 'MID', x: -14, d: 0.45, number: 14 },
    { role: 'ATT', x: 24, d: 0.68, number: 7 },
    { role: 'ATT', x: 0, d: 0.755, number: 9 },
    { role: 'ATT', x: -24, d: 0.68, number: 11 },
  ],
  '4-4-2': [
    { role: 'GK', x: 0, d: 0.035, number: 1 },
    { role: 'DEF', x: 21, d: 0.2, number: 2 },
    { role: 'DEF', x: 7, d: 0.155, number: 5 },
    { role: 'DEF', x: -7, d: 0.155, number: 6 },
    { role: 'DEF', x: -21, d: 0.2, number: 3 },
    { role: 'MID', x: 24, d: 0.52, number: 7 },
    { role: 'MID', x: 7, d: 0.42, number: 4 },
    { role: 'MID', x: -7, d: 0.42, number: 8 },
    { role: 'MID', x: -24, d: 0.52, number: 11 },
    { role: 'ATT', x: 5, d: 0.75, number: 9 },
    { role: 'ATT', x: -5, d: 0.75, number: 10 },
  ],
};

// ── Clubs ─────────────────────────────────────────────────────────────────
const SURNAMES = [
  'Adler', 'Bakker', 'Brennan', 'Costa', 'Dumont', 'Eriksen', 'Ferrari', 'Gomez', 'Haas',
  'Ibrahim', 'Jansen', 'Keller', 'Lombardi', 'Moreau', 'Novak', 'Okafor', 'Petrov', 'Quinn',
  'Rossi', 'Silva', 'Tavares', 'Ueda', 'Vidal', 'Walsh', 'Yilmaz', 'Zimmer', 'Castillo',
  'Diallo', 'Esposito', 'Fontaine', 'Grimaldi', 'Hughes', 'Ivanov', 'Jensen', 'Kovac',
  'Larsen', 'Mendes', 'Nakamura', 'Ortega', 'Pereira', 'Ramos', 'Sorensen', 'Toure',
  'Ulrich', 'Vargas', 'Weber', 'Yates', 'Zanetti', 'Adeyemi', 'Bianchi', 'Campbell',
  'Dvorak', 'Egan', 'Fischer', 'Gallardo', 'Hansen', 'Ishida', 'Jovic', 'Keane', 'Lindqvist',
  'Marchetti', 'Nunez', 'Oduya', 'Palmer', 'Reyes', 'Schmidt', 'Tanaka', 'Vega', 'Wright',
  'Zubiri', 'Boateng', 'Carvalho', 'Delgado', 'Eriksson', 'Fonseca', 'Garrido', 'Herrera',
];

const TEAM_SEED = [
  { id: 'riverton', name: 'Riverton FC', short: 'RIV', primary: '#e02b36', secondary: '#ffffff', shorts: '#f4f4f4', socks: '#e02b36', rating: 84 },
  { id: 'azure', name: 'Azure City', short: 'AZC', primary: '#56c7f2', secondary: '#0b2a4a', shorts: '#ffffff', socks: '#2e8fc0', rating: 86 },
  { id: 'capital', name: 'Capital Athletic', short: 'CAP', primary: '#1b2a63', secondary: '#f0c24a', shorts: '#1b2a63', socks: '#f0c24a', rating: 85 },
  { id: 'verde', name: 'Verde FC', short: 'VRD', primary: '#17a05a', secondary: '#ffffff', shorts: '#ffffff', socks: '#17a05a', rating: 82 },
  { id: 'nero', name: 'Nero Milano', short: 'NER', primary: '#1b1c21', secondary: '#e03a3a', shorts: '#1b1c21', socks: '#e03a3a', rating: 83 },
  { id: 'solar', name: 'Solar FC', short: 'SOL', primary: '#f2c518', secondary: '#17181c', shorts: '#17181c', socks: '#f2c518', rating: 81 },
  { id: 'harbor', name: 'Harbor Rovers', short: 'HBR', primary: '#f2742c', secondary: '#12314f', shorts: '#12314f', socks: '#f2742c', rating: 80 },
  { id: 'northgate', name: 'Northgate FC', short: 'NTH', primary: '#7a3bd0', secondary: '#ffffff', shorts: '#ffffff', socks: '#7a3bd0', rating: 79 },
];

function buildSquad(seed) {
  return Array.from({ length: 11 }, (_, i) => SURNAMES[(seed * 9 + i * 3) % SURNAMES.length]);
}

export const TEAMS = TEAM_SEED.map((t, i) => ({
  ...t,
  formation: i % 3 === 1 ? '4-4-2' : '4-3-3',
  gk: '#8ef2c0',
  squad: buildSquad(i),
}));

export const DIFFICULTY = {
  easy: { label: 'EASY', aiSpeed: 0.92, reaction: 0.5, passError: 0.2, shotError: 0.3, gk: 0.78, tackle: 0.38, press: 0.8 },
  normal: { label: 'NORMAL', aiSpeed: 1.0, reaction: 0.34, passError: 0.11, shotError: 0.16, gk: 0.9, tackle: 0.55, press: 1.0 },
  hard: { label: 'PRO', aiSpeed: 1.06, reaction: 0.22, passError: 0.05, shotError: 0.07, gk: 0.97, tackle: 0.7, press: 1.15 },
};
