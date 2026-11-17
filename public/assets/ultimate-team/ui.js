// Ultimate Team UI: squad builder, packs, Squad Battles and club collection.
import { FORMATIONS, FORMATION_IDS, positionAffinity } from './data.js';
import * as store from './store.js';
import { createShowcase } from './showcase.js';

const esc = (value) =>
  String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

const coins = (value) => Number(value || 0).toLocaleString('en-GB');
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const shortName = (player, max = 13) => {
  if (!player) return 'EMPTY';
  const name = player.last || player.name || '';
  return name.length > max ? `${name.slice(0, max - 1)}…` : name.toUpperCase();
};
const ovrTone = (ovr) => (ovr >= 85 ? 'elite' : ovr >= 78 ? 'gold' : ovr >= 68 ? 'silver' : 'bronze');
const RARITY_LABEL = { elite: 'ICON', gold: 'GOLD', silver: 'SILVER', bronze: 'BRONZE' };
const difficultyStars = (rating) => {
  const filled = rating >= 86 ? 5 : rating >= 80 ? 4 : 3;
  return '\u2605'.repeat(filled) + '\u2606'.repeat(5 - filled);
};

// Original artwork: a generic player silhouette and simple line icons, drawn
// for this app rather than borrowed from any commercial interface.
const SILHOUETTE = `<svg viewBox="0 0 120 150" aria-hidden="true" focusable="false"><circle cx="60" cy="34" r="19" fill="currentColor"/><path d="M60 58c-18 0-31 12-35 30l-7 62h84l-7-62c-4-18-17-30-35-30Z" fill="currentColor"/><path d="M31 92 12 118l10 8 20-24Zm58 0 19 26-10 8-20-24Z" fill="currentColor"/></svg>`;

const TAB_ICONS = {
  squad: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h8l3 4-2 3v11H7V10L5 7l3-4Z"/><path d="M9 3v4h6V3"/></svg>`,
  store: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h16v12H4z"/><path d="M4 8 6.5 3h11L20 8"/><path d="M12 8v12"/></svg>`,
  battles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z"/><path d="m9 11 2 2 4-4"/></svg>`,
  club: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg>`,
  market: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h18l-2 13H5L3 7Z"/><path d="M8 7a4 4 0 0 1 8 0"/><path d="M9 13h6M9 16h4"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m4 11 8-7 8 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-5h4v5"/></svg>`,
  rivals: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m6 4 6 7 6-7"/><path d="m6 13 6 7 6-7"/></svg>`,
  objectives: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>`,
};

  function playerCard(player, options = {}) {
    const { action = 'pick', selected = false, showRelease = false } = options;
    if (!player) return '';
    const tone = ovrTone(player.ovr);
    return `
      <button class="ut-card ut-card-${tone} ${selected ? 'is-selected' : ''}" type="button"
        data-ut="${action}" data-uid="${esc(player.uid)}">
        <span class="ut-card-stripe" style="background:${esc(player.clubColor)}"></span>
        <span class="ut-card-art" aria-hidden="true">${SILHOUETTE}</span>
        <span class="ut-card-rarity">${RARITY_LABEL[tone]}</span>
        <span class="ut-card-top">
          <b class="ut-card-ovr">${player.ovr}</b>
          <span class="ut-card-pos">${esc(player.pos)}</span>
        </span>
        <span class="ut-card-name">${esc(player.name)}</span>
        <span class="ut-card-meta">${esc(player.clubShort)} · ${esc(player.nat)}</span>
        <span class="ut-card-foot">
          <span>${esc(player.leagueName)}</span>
          ${showRelease ? '' : '<i aria-hidden="true">›</i>'}
        </span>
      </button>`;
  }

export function mountUltimateTeam({ data }) {
  const showcase = createShowcase();
  const state = store.loadState(data);

  let tab = 'home';
  let activeClip = 'Idle';
  let selectedUid = Object.keys(state.squad).map((key) => state.squad[key])[0] || null;
  let moveUid = null;
  let lastTapUid = null;
  let pickerIndex = null;
  let clubQuery = '';
  let clubSort = 'ovr';
  const picker = { query: '', pos: 'ALL', league: 'ALL' };
  let marketQuery = '';
  let marketPos = 'ALL';
  let marketLeague = 'ALL';
  let marketNation = 'ALL';
  let marketSort = 'price';
  let walkoutTimer = null;
  const marketOptions = (() => {
    const leagues = new Map();
    const nations = new Set();
    const positions = new Set();
    data.pool.forEach((player) => {
      leagues.set(player.leagueId, player.leagueName);
      nations.add(player.nat);
      positions.add(player.pos);
    });
    return {
      leagues: [...leagues].sort((a, b) => String(a[1]).localeCompare(String(b[1]))),
      nations: [...nations].sort(),
      positions: [...positions].sort(),
    };
  })();
  let overlay = null;
  let modal = null;
  let matchTimer = null;
  let matchResult = null;
  let matchMode = 'battles';
  let matchFinished = false;
  let pendingRefresh = false;
  let degradedNoticeShown = false;

  function save() {
    store.saveState(state);
  }

  function metrics() {
    return store.squadMetrics(state);
  }

  function selectedPlayer() {
    return store.findPlayer(state, selectedUid);
  }

  function closeModal() {
    if (matchTimer) {
      clearInterval(matchTimer);
      matchTimer = null;
    }
    if (walkoutTimer) {
      clearTimeout(walkoutTimer);
      walkoutTimer = null;
    }
    const finishing = Boolean(matchResult && !matchFinished);
    if (modal) {
      modal.remove();
      modal = null;
    }
    if (finishing) finishMatch();
    matchResult = null;
    if (pendingRefresh) {
      pendingRefresh = false;
      render();
    }
  }

  function openModal({ title, subtitle = 'ULTIMATE TEAM', body, actions = '', wide = false }) {
    if (modal) modal.remove();
    modal = document.createElement('div');
    modal.className = `ut-modal${wide ? ' ut-modal-wide' : ''}`;
    modal.innerHTML = `
      <div class="ut-modal-card" role="dialog" aria-modal="true" aria-label="${esc(title)}">
        <header class="ut-modal-head">
          <div><small>${esc(subtitle)}</small><h3>${esc(title)}</h3></div>
          <button class="ut-modal-x" type="button" data-ut="modal-close" aria-label="Close">✕</button>
        </header>
        <div class="ut-modal-body">${body}</div>
        ${actions ? `<div class="ut-modal-actions">${actions}</div>` : ''}
      </div>`;
    overlay.appendChild(modal);
    requestAnimationFrame(() => modal && modal.classList.add('is-open'));
    return modal;
  }

  function toast(message) {
    let el = overlay.querySelector('.ut-toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'ut-toast';
      overlay.appendChild(el);
    }
    el.textContent = message;
    el.classList.add('is-show');
    clearTimeout(el.hideTimer);
    el.hideTimer = setTimeout(() => el.classList.remove('is-show'), 2600);
  }

  // ── Shell ────────────────────────────────────────────────────────────────
  function render() {
    if (!overlay) return;
    const m = metrics();
    const initials =
      (state.clubName || 'UF')
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0])
        .join('')
        .toUpperCase() || 'UF';
    const readyCount = store.objectiveProgress(state).filter((entry) => entry.complete && !entry.claimed).length;
    const rivalRank = store.RANKS[store.rankForPoints(state.rivals ? state.rivals.points : 0)].name;

    overlay.innerHTML = `
      <div class="ut-bg" aria-hidden="true"></div>
      <header class="ut-head">
        <button class="ut-back" type="button" data-ut="close"><span aria-hidden="true">←</span> BACK</button>
        <div class="ut-club-id">
          <span class="ut-crest" aria-hidden="true">${esc(initials)}</span>
          <span class="ut-club-text">
            <button class="ut-club-name" type="button" data-ut="rename" title="Rename your club">${esc(state.clubName)}</button>
            <small class="ut-division">${esc(store.divisionName(state.division))}</small>
          </span>
        </div>
        <div class="ut-brand">
          <span class="ut-brand-mark">UF<i>27</i></span>
          <span class="ut-brand-text"><b>ULTIMATE</b><em>TEAM</em></span>
        </div>
        ${data.status === 'degraded' ? '<span class="ut-warn" title="Club or league metadata was unavailable; names are derived locally">LIMITED DATA</span>' : ''}
        <div class="ut-coins" title="Coins"><span class="ut-coin" aria-hidden="true">C</span><b>${coins(state.coins)}</b><small>COINS</small></div>
      </header>
      <div class="ut-shell">
        <nav class="ut-tabs" aria-label="Ultimate Team sections">
          ${[
            ['home', 'HOME', 'HUB'],
            ['squad', 'SQUAD', `${m.filledCount}/${m.totalSlots}`],
            ['store', 'STORE', 'PACKS'],
            ['market', 'MARKET', 'BUY'],
            ['battles', 'BATTLES', `${state.record.w}W ${state.record.d}D ${state.record.l}L`],
            ['rivals', 'RIVALS', rivalRank],
            ['club', 'CLUB', `${state.club.length}`],
            ['objectives', 'OBJECTIVES', readyCount ? `${readyCount} READY` : 'SEASON'],
          ]
            .map(
              ([id, label, meta]) => `
            <button class="ut-tab ${tab === id ? 'is-active' : ''}" type="button" data-ut="tab" data-tab="${id}"${tab === id ? ' aria-current="page"' : ''}>
              <span class="ut-tab-icon" aria-hidden="true">${TAB_ICONS[id]}</span>
              <span class="ut-tab-label"><b>${label}</b><small>${esc(meta)}</small></span>
            </button>`,
            )
            .join('')}
        </nav>
        <main class="ut-body">${
          tab === 'home'
            ? homeView()
            : tab === 'squad'
              ? squadView()
              : tab === 'store'
                ? storeView()
                : tab === 'market'
                  ? marketView()
                : tab === 'battles'
                  ? battlesView()
                  : tab === 'rivals'
                    ? rivalsView()
                    : tab === 'objectives'
                      ? objectivesView()
                      : clubView()
        }</main>
      </div>
    `;

    if (tab === 'squad') {
      const host = overlay.querySelector('.ut-holo-stage');
      if (host) {
        host.appendChild(showcase.canvas);
        showcase.start();
      }
      renderAnimButtons();
    } else {
      showcase.stop();
    }
  }

  // ── Squad ────────────────────────────────────────────────────────────────
  function slotLeft(x) {
    return clamp(50 + x * 1.65, 8, 92);
  }
  function slotTop(d) {
    return clamp(93 - d * 84, 6, 95);
  }

  function slotMarkup(entry) {
    const { slot, player, index } = entry;
    const left = slotLeft(slot.x);
    const top = slotTop(slot.d);
    if (!player) {
      return `<button class="ut-slot is-empty" type="button" style="left:${left}%;top:${top}%" data-ut="slot" data-slot="${index}" aria-label="Empty ${slot.pos} slot">
        <span class="ut-slot-plus">+</span><span class="ut-slot-pos">${slot.pos}</span>
      </button>`;
    }
    const affinity = positionAffinity(slot.pos, player.pos);
    const off = affinity === 1 ? '' : affinity >= 0.5 ? 'is-near' : 'is-out';
    return `<button class="ut-slot ut-slot-${ovrTone(player.ovr)} ${off} ${moveUid === player.uid ? 'is-picked' : ''}" type="button" draggable="true" style="left:${left}%;top:${top}%" data-ut="slot" data-slot="${index}" data-uid="${esc(player.uid)}" aria-pressed="${moveUid === player.uid}" aria-label="${esc(player.name)}, ${slot.pos}">
      <span class="ut-slot-art" aria-hidden="true">${SILHOUETTE}</span>
      <span class="ut-slot-top"><b class="ut-slot-ovr">${player.ovr}</b><span class="ut-slot-pos">${slot.pos}</span></span>
      <span class="ut-slot-name">${esc(shortName(player))}</span>
      <span class="ut-slot-chem"><i style="width:${entry.chem}%"></i></span>
    </button>`;
  }

  function chemistryLinks(starters) {
    const points = starters.filter((entry) => entry.player).map((entry) => ({ entry, x: slotLeft(entry.slot.x), y: slotTop(entry.slot.d) }));
    const lines = [];
    for (let i = 0; i < points.length; i += 1) {
      for (let j = i + 1; j < points.length; j += 1) {
        const a = points[i];
        const b = points[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance > 38) continue;
        const sameClub = a.entry.player.clubId === b.entry.player.clubId;
        const sameNation = a.entry.player.nat === b.entry.player.nat;
        const sameLeague = a.entry.player.leagueId === b.entry.player.leagueId;
        if (!sameClub && !sameNation && !(sameLeague && distance < 30)) continue;
        lines.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, type: sameClub ? 'club' : sameNation ? 'nation' : 'league' });
      }
    }
    return lines;
  }

  function squadView() {
    const m = metrics();
    const bench = store.benchPlayers(state);
    const selected = selectedPlayer();
    const links = chemistryLinks(m.starters);

    return `
      <section class="ut-squad">
        <div class="ut-squad-main">
          <div class="ut-squad-bar">
            <div class="ut-rating"><small>SQUAD RATING</small><b>${m.rating || '—'}</b></div>
            <div class="ut-chem-block">
              <small>CHEMISTRY</small>
              <div class="ut-chem"><span style="width:${m.chemistry}%"></span></div>
              <b>${m.chemistry}<i>/100</i></b>
            </div>
            <label class="ut-select"><small>FORMATION</small>
              <select data-ut="formation">
                ${FORMATION_IDS.map((id) => `<option value="${id}" ${state.formation === id ? 'selected' : ''}>${FORMATIONS[id].name}</option>`).join('')}
              </select>
            </label>
            <button class="ut-btn ut-btn-primary" type="button" data-ut="autofill">AUTO FILL</button>
          </div>

          ${moveUid ? `<div class="ut-move-hint"><b>${esc(shortName(store.findPlayer(state, moveUid)))}</b> selected — tap another player or slot to swap<button class="ut-btn ut-btn-ghost" type="button" data-ut="cancel-move">CANCEL</button></div>` : ''}

          <div class="ut-pitch">
            <div class="ut-pitch-lines" aria-hidden="true"></div>
            <svg class="ut-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              ${links
                .map(
                  (line) =>
                    `<line class="ut-link ut-link-${line.type}" x1="${line.x1}" y1="${line.y1}" x2="${line.x2}" y2="${line.y2}" vector-effect="non-scaling-stroke" />`,
                )
                .join('')}
            </svg>
            ${m.starters.map(slotMarkup).join('')}
          </div>

          <div class="ut-bench">
            <div class="ut-bench-head"><small>SUBSTITUTES</small><span>${bench.length}/7</span></div>
            <div class="ut-bench-row">
              ${Array.from({ length: 7 })
                .map((_, i) => {
                  const player = bench[i];
                  return player
                    ? `<button class="ut-bench-slot ${moveUid === player.uid ? 'is-picked' : ''}" type="button" draggable="true" data-ut="select" data-uid="${esc(player.uid)}" data-bench="${i}" aria-pressed="${moveUid === player.uid}">
                        <b>${player.ovr}</b><span>${esc(shortName(player, 10))}</span><small>${esc(player.pos)}</small>
                      </button>`
                    : `<button class="ut-bench-slot is-empty" type="button" data-ut="bench" data-bench="${i}"><span>+</span><small>SUB</small></button>`;
                })
                .join('')}
            </div>
          </div>
        </div>

        <aside class="ut-side">
          <div class="ut-holo">
            <div class="ut-holo-stage"></div>
            <div class="ut-holo-overlay">
              <span class="ut-holo-tag">3D HOLOGRAM</span>
              <span class="ut-holo-name">${selected ? esc(selected.name) : 'SELECT A PLAYER'}</span>
            </div>
            <div class="ut-holo-anims" role="group" aria-label="Animation">
              ${showcase.buttons
                .map(([clip, label]) => `<button type="button" data-ut="anim" data-clip="${clip}">${label}</button>`)
                .join('')}
            </div>
          </div>
          ${selected ? detailMarkup(selected) : `<p class="ut-hint">Tap a pitch or bench player to inspect them. Empty slots open the club list.</p>`}
        </aside>
      </section>`;
  }

  function detailMarkup(player) {
    const inXI = Object.values(state.squad).includes(player.uid);
    const inBench = state.bench.includes(player.uid);
    const attrs = [
      ['PACE', player.attrs.pace],
      ['SHOOT', player.attrs.shoot],
      ['PASS', player.attrs.pass],
      ['DRIBBLE', player.attrs.dribble],
      ['DEFEND', player.attrs.defend],
      ['PHYSICAL', player.attrs.physical],
    ];
    const slotEntry = metrics().starters.find((entry) => entry.player && entry.player.uid === player.uid);
    return `
      <div class="ut-detail">
        <div class="ut-detail-head">
          <div><small>${esc(player.pos)} · ${esc(player.clubShort)}</small><h3>${esc(player.name)}</h3></div>
          <b class="ut-detail-ovr">${player.ovr}</b>
        </div>
        <div class="ut-detail-meta">
          <span>${esc(player.nat)}</span><span>${esc(player.clubName)}</span><span>${esc(player.leagueName)}</span>
        </div>
        ${slotEntry ? `<div class="ut-detail-chem">CHEMISTRY <b>${slotEntry.chem}</b>${slotEntry.affinity < 1 ? ' · OUT OF POSITION' : ''}</div>` : ''}
        <div class="ut-attrs">
          ${attrs
            .map(
              ([label, value]) => `
            <div class="ut-attr"><small>${label}</small><span><i style="width:${clamp(Number(value) || 0, 0, 100)}%"></i></span><b>${Number(value) || 0}</b></div>`,
            )
            .join('')}
        </div>
        <div class="ut-detail-actions">
          ${inXI || inBench ? `<button class="ut-btn ut-btn-primary" type="button" data-ut="arm-move" data-uid="${esc(player.uid)}">SWAP</button>` : ''}
          <button class="ut-btn ut-btn-ghost" type="button" data-ut="move-bench" data-uid="${esc(player.uid)}">MOVE TO BENCH</button>
          <button class="ut-btn ut-btn-danger" type="button" data-ut="release" data-uid="${esc(player.uid)}">RELEASE</button>
        </div>
      </div>`;
  }

  function renderAnimButtons() {
    const row = overlay && overlay.querySelector('.ut-holo-anims');
    if (!row) return;
    const buttons = showcase.buttons;
    if (!buttons.some(([clip]) => clip === activeClip)) activeClip = buttons[0] ? buttons[0][0] : 'Idle';
    row.innerHTML = buttons
      .map(([clip, label]) => `<button type="button" data-ut="anim" data-clip="${clip}" class="${clip === activeClip ? 'is-active' : ''}">${label}</button>`)
      .join('');
  }

  // ── Hub ──────────────────────────────────────────────────────────────────
  function modeTile(id, label, meta, target) {
    return `<button class="ut-tile" type="button" data-ut="tab" data-tab="${target}">
      <span class="ut-tile-icon" aria-hidden="true">${TAB_ICONS[id]}</span>
      <span class="ut-tile-body"><b>${label}</b><small>${esc(meta)}</small></span>
      <span class="ut-tile-go" aria-hidden="true">→</span>
    </button>`;
  }

  function homeView() {
    const m = metrics();
    const rivals = state.rivals || { points: 0, wins: 0, draws: 0, losses: 0 };
    const rank = store.RANKS[store.rankForPoints(rivals.points || 0)];
    const objectives = store.objectiveProgress(state);
    const ready = objectives.filter((objective) => objective.complete && !objective.claimed);
    const next = objectives.find((objective) => !objective.claimed) || objectives[objectives.length - 1];
    const initials =
      (state.clubName || 'UF')
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0])
        .join('')
        .toUpperCase() || 'UF';
    const tiles = [
      modeTile('squad', 'SQUAD', `${m.filledCount}/${m.totalSlots} players · OVR ${m.rating || '—'}`, 'squad'),
      modeTile('store', 'STORE', `${store.PACKS.length} packs · ${coins(state.coins)} coins`, 'store'),
      modeTile('market', 'MARKET', `${data.pool.length.toLocaleString('en-GB')} players to sign`, 'market'),
      modeTile('battles', 'SQUAD BATTLES', `${state.record.w}W ${state.record.d}D ${state.record.l}L · ${state.points}/${store.PROMOTION_POINTS} pts`, 'battles'),
      modeTile('rivals', 'RIVALS', `${rank.name} · ${rivals.points || 0} pts`, 'rivals'),
      modeTile('club', 'CLUB', `${state.club.length} players signed`, 'club'),
      modeTile('objectives', 'OBJECTIVES', ready.length ? `${ready.length} ready to claim` : `${objectives.filter((objective) => objective.claimed).length}/${objectives.length} claimed`, 'objectives'),
    ].join('');

    return `
      <section class="ut-home">
        <div class="ut-hero">
          <div class="ut-hero-main">
            <small>ULTIMATE TEAM · ${esc(store.divisionName(state.division))}</small>
            <h2>${esc(state.clubName)}</h2>
            <p>${state.record.w}W ${state.record.d}D ${state.record.l}L · ${coins(state.coins)} coins</p>
            <div class="ut-hero-stats">
              <div><small>SQUAD OVR</small><b>${m.rating || '—'}</b></div>
              <div><small>CHEMISTRY</small><b>${m.chemistry}</b></div>
              <div><small>CLUB SIZE</small><b>${state.club.length}</b></div>
              <div><small>RIVALS</small><b>${rank.name}</b></div>
            </div>
            <div class="ut-hero-actions">
              <button class="ut-btn ut-btn-primary" type="button" data-ut="tab" data-tab="squad">MANAGE SQUAD</button>
              <button class="ut-btn ut-btn-ghost" type="button" data-ut="tab" data-tab="rivals">PLAY RIVALS</button>
            </div>
          </div>
          <div class="ut-hero-crest" aria-hidden="true"><span>${esc(initials)}</span><small>${rank.name}</small></div>
        </div>
        <div class="ut-tiles">${tiles}</div>
        <div class="ut-home-lower">
          <div class="ut-feature">
            <small>NEXT OBJECTIVE</small>
            <h3>${next ? esc(next.title) : 'All objectives complete'}</h3>
            <p>${next ? esc(next.detail) : 'More objectives arrive with the next season.'}</p>
            ${next ? `<div class="ut-obj-bar"><span style="width:${Math.round((next.value / next.goal) * 100)}%"></span></div>
            <div class="ut-feature-foot"><small>${next.value}/${next.goal} · ${coins(next.reward)} COINS</small>
            ${next.complete && !next.claimed ? `<button class="ut-btn ut-btn-primary" type="button" data-ut="claim" data-id="${next.id}">CLAIM</button>` : `<button class="ut-btn ut-btn-ghost" type="button" data-ut="tab" data-tab="objectives">VIEW ALL</button>`}</div>` : ''}
          </div>
          <div class="ut-home-list">
            <small>READY TO CLAIM</small>
            ${ready.length ? ready.slice(0, 3).map((objective) => `<button class="ut-obj-row" type="button" data-ut="claim" data-id="${objective.id}"><b>${esc(objective.title)}</b><span>${coins(objective.reward)}</span></button>`).join('') : '<p class="ut-hint">Nothing to claim yet — open packs and win matches.</p>'}
          </div>
        </div>
      </section>`;
  }

  function rivalsView() {
    const m = metrics();
    const rivals = state.rivals || { points: 0, wins: 0, draws: 0, losses: 0 };
    const progress = store.rivalProgress(state);
    const rank = progress.rank;
    return `
      <section class="ut-rivals">
        <header class="ut-section-head">
          <div><small>RANKED LADDER</small><h2>RIVALS</h2><p>Every result moves your rating. Win to climb, lose and slip back down.</p></div>
          <div class="ut-record"><b>${rivals.wins || 0}<i>W</i></b><b>${rivals.draws || 0}<i>D</i></b><b>${rivals.losses || 0}<i>L</i></b></div>
        </header>
        <div class="ut-rank-card" style="--rank:${rank.color}">
          <span class="ut-rank-badge">${rank.name}</span>
          <div class="ut-rank-meter">
            <small>${progress.points} POINTS${progress.next ? ` · ${Math.max(0, progress.next.min - progress.points)} TO ${progress.next.name}` : ' · TOP RANK'}</small>
            <div class="ut-chem ut-rank-bar"><span style="width:${Math.round(progress.percent)}%"></span></div>
          </div>
          <button class="ut-btn ut-btn-primary" type="button" data-ut="rivals-match" ${m.filledCount < 11 ? 'disabled' : ''}>
            ${m.filledCount < 11 ? `NEED ${11 - m.filledCount} MORE` : 'PLAY MATCH'}
          </button>
        </div>
        <div class="ut-ladder">
          ${store.RANKS.map(
            (entry, index) => `
            <div class="ut-ladder-row ${index === progress.index ? 'is-current' : ''} ${index < progress.index ? 'is-past' : ''}" style="--rank:${entry.color}">
              <span class="ut-ladder-dot" aria-hidden="true"></span>
              <b>${entry.name}</b>
              <small>${entry.min}+ PTS</small>
              <span class="ut-ladder-reward">${coins(entry.reward)} COINS</span>
            </div>`,
          ).join('')}
        </div>
        <p class="ut-hint">Win <b>+45</b>, draw <b>+12</b>, loss <b>-22</b> rating. Rank-ups pay a one-off coin bonus.</p>
      </section>`;
  }

  function objectivesView() {
    const list = store.objectiveProgress(state);
    const ready = list.filter((objective) => objective.complete && !objective.claimed).length;
    return `
      <section class="ut-objectives">
        <header class="ut-section-head">
          <div><small>SEASON PROGRESS</small><h2>OBJECTIVES</h2><p>Complete goals as you build your club, then claim the coin rewards.</p></div>
          <div class="ut-wallet"><span aria-hidden="true">◉</span><b>${ready}</b><small>READY</small></div>
        </header>
        <div class="ut-obj-list">
          ${list
            .map(
              (objective) => `
            <article class="ut-obj ${objective.complete ? 'is-complete' : ''} ${objective.claimed ? 'is-claimed' : ''}">
              <div class="ut-obj-head"><b>${esc(objective.title)}</b><small>${coins(objective.reward)} COINS</small></div>
              <p>${esc(objective.detail)}</p>
              <div class="ut-obj-bar"><span style="width:${Math.round((objective.value / objective.goal) * 100)}%"></span></div>
              <div class="ut-obj-foot">
                <small>${objective.value}/${objective.goal}</small>
                ${objective.claimed ? '<span class="ut-obj-state">CLAIMED</span>' : objective.complete ? `<button class="ut-btn ut-btn-primary" type="button" data-ut="claim" data-id="${objective.id}">CLAIM</button>` : '<span class="ut-obj-state">IN PROGRESS</span>'}
              </div>
            </article>`,
            )
            .join('')}
        </div>
      </section>`;
  }

  // ── Market ───────────────────────────────────────────────────────────────
  function marketResults() {
    const query = marketQuery.trim().toLowerCase();
    let list = data.pool;
    if (query) list = list.filter((player) => player.name.toLowerCase().includes(query));
    if (marketPos !== 'ALL') list = list.filter((player) => player.pos === marketPos);
    if (marketLeague !== 'ALL') list = list.filter((player) => player.leagueId === marketLeague);
    if (marketNation !== 'ALL') list = list.filter((player) => player.nat === marketNation);
    const sorted = list
      .slice()
      .sort((a, b) => (marketSort === 'price' ? a.ovr - b.ovr : marketSort === 'name' ? a.name.localeCompare(b.name) : b.ovr - a.ovr));
    return { total: sorted.length, list: sorted.slice(0, 40) };
  }

  function marketRow(player) {
    const price = store.marketPrice(player);
    const key = `${player.sid}:${player.clubId}`;
    return `<article class="ut-market-row">
      <b class="ut-mkt-ovr ut-card-${ovrTone(player.ovr)}">${player.ovr}</b>
      <span class="ut-mkt-pos">${esc(player.pos)}</span>
      <span class="ut-mkt-name"><strong>${esc(player.name)}</strong><small>${esc(player.clubName)} · ${esc(player.nat)} · ${esc(player.leagueName)}</small></span>
      <span class="ut-mkt-price ${state.coins < price ? 'is-short' : ''}">${coins(price)}</span>
      <button class="ut-btn ut-btn-primary" type="button" data-ut="buy" data-key="${esc(key)}" ${state.coins < price ? 'disabled' : ''}>BUY</button>
    </article>`;
  }

  function marketView() {
    const { total, list } = marketResults();
    return `
      <section class="ut-market">
        <header class="ut-section-head">
          <div><small>TRANSFER MARKET</small><h2>MARKET</h2><p>Buy any of the game's real players straight into your club. Prices scale with rating.</p></div>
          <div class="ut-wallet"><span aria-hidden="true">◉</span><b>${coins(state.coins)}</b><small>COINS</small></div>
        </header>
        <div class="ut-market-tools">
          <input class="ut-input" type="search" data-ut="market-search" placeholder="Search player" value="${esc(marketQuery)}" aria-label="Search the market">
          <select class="ut-input" data-ut="market-pos" aria-label="Filter position">
            <option value="ALL">All positions</option>
            ${marketOptions.positions.map((pos) => `<option value="${pos}" ${marketPos === pos ? 'selected' : ''}>${pos}</option>`).join('')}
          </select>
          <select class="ut-input" data-ut="market-league" aria-label="Filter league">
            <option value="ALL">All leagues</option>
            ${marketOptions.leagues.map(([id, name]) => `<option value="${esc(id)}" ${marketLeague === id ? 'selected' : ''}>${esc(name)}</option>`).join('')}
          </select>
          <select class="ut-input" data-ut="market-nation" aria-label="Filter nation">
            <option value="ALL">All nations</option>
            ${marketOptions.nations.map((nat) => `<option value="${esc(nat)}" ${marketNation === nat ? 'selected' : ''}>${esc(nat)}</option>`).join('')}
          </select>
          <select class="ut-input" data-ut="market-sort" aria-label="Sort market">
            <option value="ovr" ${marketSort === 'ovr' ? 'selected' : ''}>Rating</option>
            <option value="price" ${marketSort === 'price' ? 'selected' : ''}>Price</option>
            <option value="name" ${marketSort === 'name' ? 'selected' : ''}>Name</option>
          </select>
        </div>
        <div class="ut-market-count"><small><b>${total.toLocaleString('en-GB')}</b> PLAYERS FOUND · SHOWING ${list.length}</small></div>
        <div class="ut-market-list" data-market-list>
          ${list.length ? list.map(marketRow).join('') : '<p class="ut-hint">No players match those filters.</p>'}
        </div>
      </section>`;
  }

  function refreshMarketList() {
    const host = overlay && overlay.querySelector('[data-market-list]');
    const count = overlay && overlay.querySelector('.ut-market-count small');
    const { total, list } = marketResults();
    if (count) count.innerHTML = `<b>${total.toLocaleString('en-GB')}</b> PLAYERS FOUND · SHOWING ${list.length}`;
    if (host) host.innerHTML = list.length ? list.map(marketRow).join('') : '<p class="ut-hint">No players match those filters.</p>';
  }

  // ── Store ────────────────────────────────────────────────────────────────
  function storeView() {
    return `
      <section class="ut-store">
        <header class="ut-section-head">
          <div><small>TRANSFER MARKET</small><h2>PACKS</h2><p>Sign players straight into your club. Every pack pulls from the game's real player database.</p></div>
          <div class="ut-wallet"><span aria-hidden="true">◉</span><b>${coins(state.coins)}</b><small>COINS</small></div>
        </header>
        <div class="ut-pack-grid">
          ${store.PACKS.map(
            (pack) => `
            <article class="ut-pack" style="--pack:${pack.color};--pack-soft:${pack.color}24;--pack-line:${pack.color}66">
              <span class="ut-pack-foil" aria-hidden="true"></span>
              <span class="ut-pack-tag">PACK</span>
              <span class="ut-pack-orb" aria-hidden="true"><b>${pack.count}</b><small>PLAYERS</small></span>
              <h3>${pack.name}</h3>
              <p>${pack.blurb}</p>
              <dl><div><dt>PLAYERS</dt><dd>${pack.count}</dd></div><div><dt>RATING</dt><dd>${pack.min}–${pack.max}</dd></div></dl>
              <button class="ut-btn ut-btn-primary" type="button" data-ut="pack" data-pack="${pack.id}" ${state.coins < pack.cost ? 'disabled' : ''}>
                OPEN · ${coins(pack.cost)}
              </button>
            </article>`,
          ).join('')}
        </div>
        <p class="ut-hint">Packs opened: <b>${state.packsOpened}</b>. Coins come from Squad Battles wins.</p>
      </section>`;
  }

  // ── Battles ──────────────────────────────────────────────────────────────
  function battlesView() {
    const m = metrics();
    const progress = clamp((state.points / store.PROMOTION_POINTS) * 100, 0, 100);
    return `
      <section class="ut-battles">
        <header class="ut-section-head">
          <div><small>${esc(store.divisionName(state.division))}</small><h2>SQUAD BATTLES</h2>
            <p>Four opponents, rewards on every result. ${store.PROMOTION_POINTS} points promotes you.</p></div>
          <div class="ut-record"><b>${state.record.w}<i>W</i></b><b>${state.record.d}<i>D</i></b><b>${state.record.l}<i>L</i></b></div>
        </header>
        <div class="ut-progress"><span style="width:${progress}%"></span><small>${state.points}/${store.PROMOTION_POINTS} PTS</small></div>
        <div class="ut-opp-grid">
          ${store.OPPONENTS.map(
            (opponent) => `
            <article class="ut-opp" style="--opp:${opponent.color};--opp-soft:${opponent.color}1f;--opp-line:${opponent.color}55">
              <div class="ut-opp-top">
                <div class="ut-opp-crest">${esc(opponent.short)}</div>
                <span class="ut-opp-stars" aria-hidden="true">${difficultyStars(opponent.rating)}</span>
              </div>
              <h3>${esc(opponent.name)}</h3>
              <div class="ut-opp-stats"><span>OVR <b>${opponent.rating}</b></span><span>REWARD <b>${coins(Math.round((opponent.rating * 22 + 120) * opponent.reward))}</b></span></div>
              <button class="ut-btn ut-btn-primary" type="button" data-ut="battle" data-opp="${opponent.id}" ${m.filledCount < 11 ? 'disabled' : ''}>
                ${m.filledCount < 11 ? `NEED ${11 - m.filledCount} MORE` : 'PLAY MATCH'}
              </button>
            </article>`,
          ).join('')}
        </div>
        <p class="ut-hint">Your squad: rating <b>${m.rating}</b>, chemistry <b>${m.chemistry}</b>.</p>
      </section>`;
  }

  // ── Club ─────────────────────────────────────────────────────────────────
  function clubView() {
    const list = state.club
      .filter((player) => !clubQuery || player.name.toLowerCase().includes(clubQuery))
      .slice()
      .sort((a, b) => (clubSort === 'ovr' ? b.ovr - a.ovr : clubSort === 'name' ? a.name.localeCompare(b.name) : a.pos.localeCompare(b.pos)));

    return `
      <section class="ut-club">
        <header class="ut-section-head">
          <div><small>YOUR COLLECTION</small><h2>CLUB</h2><p>${state.club.length} players signed, ${metrics().filledCount}/11 in the XI.</p></div>
          <div class="ut-wallet"><span aria-hidden="true">◉</span><b>${coins(state.coins)}</b><small>COINS</small></div>
        </header>
        <div class="ut-club-tools">
          <input class="ut-input" type="search" placeholder="Search players" value="${esc(clubQuery)}" data-ut="club-search" aria-label="Search club players">
          <select class="ut-input" data-ut="club-sort" aria-label="Sort club players">
            <option value="ovr" ${clubSort === 'ovr' ? 'selected' : ''}>Rating</option>
            <option value="name" ${clubSort === 'name' ? 'selected' : ''}>Name</option>
            <option value="pos" ${clubSort === 'pos' ? 'selected' : ''}>Position</option>
          </select>
          <button class="ut-btn ut-btn-danger" type="button" data-ut="reset">RESET CLUB</button>
        </div>
        <div class="ut-club-grid">
          ${list.length ? list.map((player) => playerCard(player, { action: 'inspect' })).join('') : '<p class="ut-hint">No players match that search.</p>'}
        </div>
      </section>`;
  }

  // ── Player picker ────────────────────────────────────────────────────────
  function pickerList() {
    const slot = FORMATIONS[state.formation].slots[pickerIndex];
    const inSquad = new Set(Object.values(state.squad));
    const benchSet = new Set(state.bench);
    const list = state.club
      .filter((player) => !inSquad.has(player.uid))
      .filter((player) => (picker.pos === 'ALL' ? true : player.pos === picker.pos))
      .filter((player) => (picker.league === 'ALL' ? true : player.leagueId === picker.league))
      .filter((player) => !picker.query || player.name.toLowerCase().includes(picker.query))
      .map((player) => ({ player, score: positionAffinity(slot.pos, player.pos) }))
      .sort((a, b) => b.score - a.score || b.player.ovr - a.player.ovr);

    if (!list.length) {
      return `<p class="ut-hint">No free players fit those filters. Open a pack in the STORE to sign more.</p>`;
    }

    return `
      <div class="ut-pick-grid">
        ${list
          .slice(0, 60)
          .map(({ player }) => `
            <button class="ut-pick ${benchSet.has(player.uid) ? 'is-bench' : ''}" type="button" data-ut="assign" data-uid="${esc(player.uid)}">
              <b>${player.ovr}</b>
              <span><strong>${esc(player.name)}</strong><small>${esc(player.pos)} · ${esc(player.clubShort)} · ${esc(player.nat)}</small></span>
              <i>${positionAffinity(slot.pos, player.pos) >= 1 ? slot.pos : positionAffinity(slot.pos, player.pos) > 0 ? '~' : '—'}</i>
            </button>`,
          )
          .join('')}
      </div>`;
  }

  function openPicker(index) {
    pickerIndex = index;
    const slot = FORMATIONS[state.formation].slots[index];
    const leagues = Array.from(new Set(state.club.filter((p) => !Object.values(state.squad).includes(p.uid)).map((p) => `${p.leagueId}|${p.leagueName}`)));
    const positions = Array.from(new Set(state.club.map((player) => player.pos))).sort();

    openModal({
      title: `SELECT ${slot.pos}`,
      subtitle: 'SQUAD BUILDER',
      wide: true,
      body: `
        <div class="ut-picker-filters">
          <input class="ut-input" type="search" placeholder="Search club" value="${esc(picker.query)}" data-ut="picker-search" aria-label="Search club">
          <select class="ut-input" data-ut="picker-pos" aria-label="Filter position">
            <option value="ALL">All positions</option>
            ${positions.map((pos) => `<option value="${pos}" ${picker.pos === pos ? 'selected' : ''}>${pos}</option>`).join('')}
          </select>
          <select class="ut-input" data-ut="picker-league" aria-label="Filter league">
            <option value="ALL">All leagues</option>
            ${leagues
              .map((entry) => {
                const [id, name] = entry.split('|');
                return `<option value="${esc(id)}" ${picker.league === id ? 'selected' : ''}>${esc(name)}</option>`;
              })
              .join('')}
          </select>
        </div>
        <div class="ut-pick-list" data-pick-list>${pickerList()}</div>`,
      actions: `<button class="ut-btn ut-btn-ghost" type="button" data-ut="modal-close">CANCEL</button>`,
    });
  }

  function refreshPickerList() {
    const host = modal && modal.querySelector('[data-pick-list]');
    if (host) host.innerHTML = pickerList();
  }

  // ── Packs ────────────────────────────────────────────────────────────────
  function openPack(packId) {
    const result = store.buyPack(state, data, packId);
    if (!result.ok) {
      toast('Not enough coins for that pack.');
      return;
    }
    render();
    const grid = result.signings
      .map((player) => `<div class="ut-reveal-card">${playerCard(player, { action: 'none' })}</div>`)
      .join('');
    const best = result.signings.slice().sort((a, b) => b.ovr - a.ovr)[0];
    const walkout = Boolean(best && best.ovr >= 80);
    openModal({
      title: result.pack.name,
      subtitle: 'PACK OPENED',
      wide: true,
      body: walkout
        ? `<div class="ut-walkout"><small>WALKOUT</small>
            <div class="ut-walkout-stage"><span class="ut-walkout-rays" aria-hidden="true"></span>
              <div class="ut-walkout-card">${playerCard(best, { action: 'none' })}</div>
            </div>
            <p>${esc(best.name)} · ${best.ovr} OVR · ${esc(best.clubName)}</p>
          </div>`
        : `<div class="ut-reveal">${grid}</div>`,
      actions: `<button class="ut-btn ut-btn-ghost" type="button" data-ut="modal-close">DONE</button>
        <button class="ut-btn ut-btn-primary" type="button" data-ut="pack" data-pack="${result.pack.id}" ${state.coins < result.pack.cost ? 'disabled' : ''}>OPEN ANOTHER · ${coins(result.pack.cost)}</button>`,
    });
    if (walkout) {
      walkoutTimer = setTimeout(() => {
        walkoutTimer = null;
        const body = modal && modal.querySelector('.ut-modal-body');
        if (body) body.innerHTML = `<div class="ut-reveal">${grid}</div>`;
      }, 1700);
    }
  }

  // ── Matches ──────────────────────────────────────────────────────────────
  function startBattle(opponentId) {
    const opponent = store.OPPONENTS.find((entry) => entry.id === opponentId);
    if (!opponent) return;
    beginMatch(opponent, store.simulateMatch(state, opponent), 'battles');
  }

  function startRivals() {
    if (metrics().filledCount < 11) {
      toast('Fill your XI before playing Rivals.');
      return;
    }
    const result = store.simulateRivals(state);
    beginMatch(result.opponent, result, 'rivals');
  }

  function beginMatch(opponent, result, mode) {
    matchMode = mode;
    matchResult = result;
    matchFinished = false;

    openModal({
      title: `${state.clubName} vs ${opponent.name}`,
      subtitle: mode === 'rivals' ? 'RIVALS · RANKED' : 'SQUAD BATTLE · LIVE',
      wide: true,
      body: `
        <div class="ut-match">
          <div class="ut-match-board">
            <div class="ut-match-side"><span class="ut-match-crest" style="--crest:#c6ff45">${esc(state.clubName.slice(0, 3).toUpperCase())}</span><b>${esc(state.clubName)}</b></div>
            <div class="ut-match-score"><b data-match-home>0</b><i>–</i><b data-match-away>0</b><small data-match-clock>0'</small></div>
            <div class="ut-match-side"><span class="ut-match-crest" style="--crest:${opponent.color}">${esc(opponent.short)}</span><b>${esc(opponent.name)}</b></div>
          </div>
          <div class="ut-match-feed" data-match-feed><p>Kick off.</p></div>
        </div>`,
      actions: `<button class="ut-btn ut-btn-ghost" type="button" data-ut="skip-match">SKIP TO RESULT</button>`,
    });

    let minute = 0;
    let home = 0;
    let away = 0;
    const feed = modal.querySelector('[data-match-feed]');
    const clockEl = modal.querySelector('[data-match-clock]');
    const homeEl = modal.querySelector('[data-match-home]');
    const awayEl = modal.querySelector('[data-match-away]');

    const grade = (rating) =>
      rating >= 82 ? 'CHANCE!' : rating >= 74 ? 'DANGER' : rating >= 66 ? 'ATTACK' : 'MOVE';

    matchTimer = setInterval(() => {
      minute = Math.min(90, minute + 3);
      if (clockEl) clockEl.textContent = `${minute}'`;
      const due = result.events.filter((event) => event.minute > minute - 3 && event.minute <= minute);
      due.forEach((event) => {
        if (event.side === 'home') home += 1;
        else away += 1;
        if (homeEl) homeEl.textContent = home;
        if (awayEl) awayEl.textContent = away;
        if (feed) {
          const line = document.createElement('p');
          line.className = event.side === 'home' ? 'is-home' : 'is-away';
          line.innerHTML =
            event.side === 'home'
              ? `<b>GOAL!</b> ${esc(event.scorer ? event.scorer.name : 'Unknown')} ${event.minute}'${event.assist ? ` <small>assist ${esc(event.assist.name)}</small>` : ''}`
              : `<b>CONCEDED</b> ${opponent.name} ${event.minute}'`;
          feed.prepend(line);
        }
      });
      if (minute >= 90) {
        clearInterval(matchTimer);
        matchTimer = null;
        finishMatch();
      }
    }, 90);
  }

  function finishMatch() {
    if (!matchResult || matchFinished) return;
    matchFinished = true;
    const result = matchResult;
    let bonusText = '';
    if (matchMode === 'rivals') {
      const applied = store.applyRivalsResult(state, result);
      if (applied.rankedUp) bonusText = ` · ${store.RANKS[applied.rank].name} RANK · +${coins(applied.reward)} BONUS`;
    } else {
      const { promoted } = store.applyResult(state, result);
      if (promoted) bonusText = ' · PROMOTED';
    }
    const label = result.outcome === 'win' ? 'WIN' : result.outcome === 'draw' ? 'DRAW' : 'LOSS';
    if (modal) {
      const body = modal.querySelector('.ut-modal-body');
      if (body) {
        body.insertAdjacentHTML(
          'beforeend',
          `<div class="ut-match-result is-${result.outcome}">
            <small>FULL TIME</small>
            <h4>${label} · ${result.goalsFor} – ${result.goalsAgainst}</h4>
            <p>+${coins(result.coins)} coins${matchMode === 'battles' && result.points ? ` · +${result.points} pts` : ''}${bonusText}</p>
          </div>`,
        );
      }
      const actions = modal.querySelector('.ut-modal-actions');
      if (actions) {
        actions.innerHTML = `<button class="ut-btn ut-btn-primary" type="button" data-ut="modal-close">CONTINUE</button>`;
      }
    }
    // Re-render only after the modal closes: render() rebuilds the overlay and
    // would otherwise remove the result panel the player is reading.
    pendingRefresh = true;
  }

  // ── Club rename / reset ──────────────────────────────────────────────────
  function openRename() {
    openModal({
      title: 'Rename your club',
      subtitle: 'ULTIMATE TEAM',
      body: `<label class="ut-field"><small>CLUB NAME</small><input class="ut-input" data-rename-input maxlength="26" value="${esc(state.clubName)}"></label>`,
      actions: `<button class="ut-btn ut-btn-ghost" type="button" data-ut="modal-close">CANCEL</button>
        <button class="ut-btn ut-btn-primary" type="button" data-ut="rename-save">SAVE</button>`,
    });
  }

  function openReset() {
    openModal({
      title: 'Reset Ultimate Team?',
      subtitle: 'DESTRUCTIVE',
      body: '<p class="ut-hint">This wipes your club name, coins, squad, packs opened and record, then hands you a fresh starter squad.</p>',
      actions: `<button class="ut-btn ut-btn-ghost" type="button" data-ut="modal-close">KEEP CLUB</button>
        <button class="ut-btn ut-btn-danger" type="button" data-ut="reset-confirm">RESET EVERYTHING</button>`,
    });
  }

  function openRelease(uid) {
    const player = store.findPlayer(state, uid);
    if (!player) return;
    const refund = Math.max(120, Math.round(player.ovr * 14));
    openModal({
      title: `Release ${player.name}?`,
      subtitle: 'CLUB',
      body: `<p class="ut-hint">${esc(player.name)} leaves your club permanently. You get <b>${coins(refund)} coins</b> back.</p>`,
      actions: `<button class="ut-btn ut-btn-ghost" type="button" data-ut="modal-close">KEEP PLAYER</button>
        <button class="ut-btn ut-btn-danger" type="button" data-ut="release-confirm" data-uid="${esc(uid)}">RELEASE · ${coins(refund)}</button>`,
    });
  }

  function openInspect(uid) {
    const player = store.findPlayer(state, uid);
    if (!player) return;
    openModal({
      title: player.name,
      subtitle: `${player.pos} · ${player.clubName}`,
      body: playerCard(player, { action: 'none' }) + `<div class="ut-inspect-attrs">${detailMarkup(player)}</div>`,
      actions: `<button class="ut-btn ut-btn-ghost" type="button" data-ut="modal-close">CLOSE</button>`,
    });
  }

  // ── Swap + drag and drop ────────────────────────────────────────────────
  function moveToTarget(target) {
    const uid = moveUid;
    moveUid = null;
    if (!uid || !target) {
      render();
      return;
    }
    if (target.dataset.slot !== undefined) {
      const index = Number(target.dataset.slot);
      const occupant = state.squad[index];
      if (occupant && occupant !== uid) store.swapPlayers(state, uid, occupant);
      else if (!occupant) store.moveToSlot(state, index, uid);
    } else if (target.dataset.bench !== undefined) {
      const index = Number(target.dataset.bench);
      const occupant = state.bench[index];
      if (occupant && occupant !== uid) store.swapPlayers(state, uid, occupant);
      else if (!occupant) store.moveToBench(state, index, uid);
    } else if (target.dataset.uid) {
      store.swapPlayers(state, uid, target.dataset.uid);
    }
    selectedUid = uid;
    lastTapUid = null;
    render();
    toast('Players swapped.');
  }

  function onDragStart(event) {
    const source = event.target.closest('[data-uid]');
    if (!source || !overlay.contains(source)) return;
    moveUid = source.dataset.uid;
    source.classList.add('is-dragging');
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
      try {
        event.dataTransfer.setData('text/plain', moveUid);
      } catch {
        /* older browsers */
      }
    }
  }

  function onDragOver(event) {
    const target = event.target.closest('[data-slot], [data-bench]');
    if (!target || !overlay.contains(target)) return;
    event.preventDefault();
    if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
    overlay.querySelectorAll('.is-drag-over').forEach((el) => el.classList.remove('is-drag-over'));
    target.classList.add('is-drag-over');
  }

  function onDrop(event) {
    const target = event.target.closest('[data-slot], [data-bench]');
    overlay.querySelectorAll('.is-drag-over, .is-dragging').forEach((el) => el.classList.remove('is-drag-over', 'is-dragging'));
    if (!target) {
      moveUid = null;
      return;
    }
    event.preventDefault();
    const carried = moveUid || (event.dataTransfer && event.dataTransfer.getData('text/plain'));
    if (!carried) return;
    moveUid = carried;
    moveToTarget(target);
  }

  function onDragEnd() {
    overlay.querySelectorAll('.is-drag-over, .is-dragging').forEach((el) => el.classList.remove('is-drag-over', 'is-dragging'));
  }

  // ── Events ───────────────────────────────────────────────────────────────
  function onClick(event) {
    const button = event.target.closest('[data-ut]');
    if (!button || !overlay.contains(button)) return;
    const action = button.dataset.ut;

    switch (action) {
      case 'close':
        close();
        return;
      case 'tab':
        closeModal();
        tab = button.dataset.tab;
        moveUid = null;
        lastTapUid = null;
        render();
        return;
      case 'autofill':
        store.autoFill(state);
        render();
        toast('Best available players moved into the XI.');
        return;
      case 'slot': {
        const index = Number(button.dataset.slot);
        const uid = state.squad[index];
        if (moveUid) {
          if (moveUid === uid) {
            moveUid = null;
            render();
            return;
          }
          moveToTarget(button);
          return;
        }
        if (uid) {
          const repeatTap = lastTapUid === uid;
          lastTapUid = uid;
          selectedUid = uid;
          if (repeatTap && tab === 'squad') {
            moveUid = uid;
            toast('Tap another player to swap.');
          }
          if (tab === 'squad') render();
        } else {
          openPicker(index);
        }
        return;
      }
      case 'select': {
        const uid = button.dataset.uid;
        if (moveUid && moveUid !== uid) {
          moveToTarget(button);
          return;
        }
        if (moveUid === uid) {
          moveUid = null;
          lastTapUid = null;
          render();
          return;
        }
        const repeatTap = lastTapUid === uid;
        lastTapUid = uid;
        selectedUid = uid;
        if (repeatTap) {
          moveUid = uid;
          toast('Tap another player to swap.');
        }
        render();
        return;
      }
      case 'bench': {
        const index = Number(button.dataset.bench);
        if (moveUid) {
          store.moveToBench(state, index, moveUid);
          moveUid = null;
          render();
          toast('Player moved to the bench.');
        } else {
          store.autoFill(state);
          render();
          toast('Bench filled with your best available players.');
        }
        return;
      }
      case 'cancel-move':
        moveUid = null;
        lastTapUid = null;
        render();
        return;
      case 'arm-move': {
        const uid = button.dataset.uid;
        const inXI = Object.values(state.squad).includes(uid);
        const inBench = state.bench.includes(uid);
        if (!uid || (!inXI && !inBench)) {
          toast('Pick a squad player to swap.');
          return;
        }
        selectedUid = uid;
        moveUid = uid;
        lastTapUid = uid;
        closeModal();
        render();
        toast('Tap another player to swap.');
        return;
      }
      case 'anim':
        activeClip = button.dataset.clip;
        showcase.play(activeClip);
        overlay.querySelectorAll('[data-ut="anim"]').forEach((el) => el.classList.toggle('is-active', el === button));
        return;
      case 'assign':
        store.assignToSlot(state, pickerIndex, button.dataset.uid);
        selectedUid = button.dataset.uid;
        moveUid = null;
        closeModal();
        render();
        return;
      case 'move-bench': {
        const uid = button.dataset.uid;
        moveUid = null;
        Object.keys(state.squad).forEach((key) => {
          if (state.squad[key] === uid) delete state.squad[key];
        });
        if (!state.bench.includes(uid)) state.bench = [uid, ...state.bench].slice(0, store.BENCH_SIZE);
        save();
        closeModal();
        render();
        toast('Player moved to the bench.');
        return;
      }
      case 'release':
        openRelease(button.dataset.uid);
        return;
      case 'release-confirm': {
        const result = store.releasePlayer(state, button.dataset.uid);
        if (selectedUid === button.dataset.uid) selectedUid = null;
        if (moveUid === button.dataset.uid) moveUid = null;
        closeModal();
        render();
        toast(`Released for ${coins(result.refund)} coins.`);
        return;
      }
      case 'pack':
        openPack(button.dataset.pack);
        return;
      case 'battle':
        startBattle(button.dataset.opp);
        return;
      case 'rivals-match':
        startRivals();
        return;
      case 'buy': {
        const bought = store.buyMarketPlayer(state, data, button.dataset.key);
        if (bought.ok) {
          render();
          toast(`Signed ${bought.player.name} for ${coins(bought.price)} coins.`);
        } else {
          toast(bought.reason === 'coins' ? 'Not enough coins for that player.' : 'That player is no longer available.');
        }
        return;
      }
      case 'claim': {
        const claimed = store.claimObjective(state, button.dataset.id);
        if (claimed.ok) {
          render();
          toast(`Objective reward: +${coins(claimed.reward)} coins.`);
        } else {
          toast('That objective is not ready to claim.');
        }
        return;
      }
      case 'skip-match':
        if (matchTimer) {
          clearInterval(matchTimer);
          matchTimer = null;
        }
        finishMatch();
        return;
      case 'modal-close':
        closeModal();
        return;
      case 'rename':
        openRename();
        return;
      case 'rename-save': {
        const input = modal && modal.querySelector('[data-rename-input]');
        const value = (input ? input.value : '').trim();
        if (value) state.clubName = value.slice(0, 26);
        save();
        closeModal();
        render();
        toast('Club renamed.');
        return;
      }
      case 'reset':
        openReset();
        return;
      case 'reset-confirm': {
        Object.assign(state, store.resetState(data));
        selectedUid = Object.keys(state.squad).map((key) => state.squad[key])[0] || null;
        moveUid = null;
        tab = 'squad';
        closeModal();
        render();
        toast('Ultimate Team reset.');
        return;
      }
      case 'inspect':
        openInspect(button.dataset.uid);
        return;
      case 'none':
      default:
        return;
    }
  }

  function onInput(event) {
    const target = event.target.closest('[data-ut]');
    if (!target) return;
    const action = target.dataset.ut;
    if (action === 'picker-search') {
      picker.query = target.value.trim().toLowerCase();
      refreshPickerList();
    } else if (action === 'market-search') {
      marketQuery = target.value.trim().toLowerCase();
      refreshMarketList();
    } else if (action === 'club-search') {
      clubQuery = target.value.trim().toLowerCase();
      const grid = overlay.querySelector('.ut-club-grid');
      if (grid) {
        const list = state.club
          .filter((player) => !clubQuery || player.name.toLowerCase().includes(clubQuery))
          .slice()
          .sort((a, b) => (clubSort === 'ovr' ? b.ovr - a.ovr : clubSort === 'name' ? a.name.localeCompare(b.name) : a.pos.localeCompare(b.pos)));
        grid.innerHTML = list.length
          ? list.map((player) => playerCard(player, { action: 'inspect' })).join('')
          : '<p class="ut-hint">No players match that search.</p>';
      }
    }
  }

  function onChange(event) {
    const target = event.target.closest('[data-ut]');
    if (!target) return;
    const action = target.dataset.ut;
    if (action === 'formation') {
      store.setFormation(state, target.value);
      render();
    } else if (action === 'market-pos') {
      marketPos = target.value;
      render();
    } else if (action === 'market-league') {
      marketLeague = target.value;
      render();
    } else if (action === 'market-nation') {
      marketNation = target.value;
      render();
    } else if (action === 'market-sort') {
      marketSort = target.value;
      render();
    } else if (action === 'picker-pos') {
      picker.pos = target.value;
      refreshPickerList();
    } else if (action === 'picker-league') {
      picker.league = target.value;
      refreshPickerList();
    } else if (action === 'club-sort') {
      clubSort = target.value;
      render();
    }
  }

  function onKeyDown(event) {
    if (!overlay || overlay.hidden) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      if (modal) closeModal();
      else close();
      return;
    }
    if (modal) return;
    event.stopPropagation();
  }

  function open() {
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'ut-app';
      overlay.hidden = true;
      overlay.addEventListener('click', onClick);
      overlay.addEventListener('input', onInput);
      overlay.addEventListener('change', onChange);
      overlay.addEventListener('dragstart', onDragStart);
      overlay.addEventListener('dragover', onDragOver);
      overlay.addEventListener('drop', onDrop);
      overlay.addEventListener('dragend', onDragEnd);
      document.body.appendChild(overlay);
      document.documentElement.classList.add('ut-supported');
    }
    overlay.hidden = false;
    document.documentElement.classList.add('ut-open');
    render();
    if (data.status === 'degraded' && !degradedNoticeShown) {
      degradedNoticeShown = true;
      toast('Limited data: club metadata was unavailable, names are derived.');
    }
    const first = overlay.querySelector('[data-ut="close"]');
    if (first) first.focus({ preventScroll: true });
  }

  function close() {
    if (!overlay) return;
    closeModal();
    overlay.hidden = true;
    document.documentElement.classList.remove('ut-open');
    showcase.stop();
  }

  function isOpen() {
    return Boolean(overlay && !overlay.hidden);
  }

  showcase.onClipsChanged(() => {
    if (overlay && !overlay.hidden) renderAnimButtons();
  });

  window.addEventListener('keydown', onKeyDown, true);

  return { open, close, isOpen, state, data };
}
