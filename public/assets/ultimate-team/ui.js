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

function playerCard(player, options = {}) {
  const { action = 'pick', selected = false, showRelease = false } = options;
  if (!player) return '';
  return `
    <button class="ut-card ut-card-${ovrTone(player.ovr)} ${selected ? 'is-selected' : ''}" type="button"
      data-ut="${action}" data-uid="${esc(player.uid)}">
      <span class="ut-card-stripe" style="background:${esc(player.clubColor)}"></span>
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

  let tab = 'squad';
  let activeClip = 'Idle';
  let selectedUid = Object.keys(state.squad).map((key) => state.squad[key])[0] || null;
  let pickerIndex = null;
  let clubQuery = '';
  let clubSort = 'ovr';
  const picker = { query: '', pos: 'ALL', league: 'ALL' };
  let overlay = null;
  let modal = null;
  let matchTimer = null;
  let matchResult = null;
  let matchFinished = false;
  let pendingRefresh = false;

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
    overlay.innerHTML = `
      <div class="ut-bg" aria-hidden="true"></div>
      <header class="ut-head">
        <button class="ut-back" type="button" data-ut="close"><span aria-hidden="true">←</span> BACK</button>
        <div class="ut-brand">
          <span class="ut-brand-mark">UF<i>27</i></span>
          <span class="ut-brand-text"><b>ULTIMATE</b><em>TEAM</em></span>
        </div>
        <div class="ut-clubbox">
          <button class="ut-club-name" type="button" data-ut="rename" title="Rename your club">${esc(state.clubName)}</button>
          <span class="ut-division">${esc(store.divisionName(state.division))}</span>
        </div>
        <div class="ut-coins" title="Coins"><span aria-hidden="true">◉</span><b>${coins(state.coins)}</b><small>COINS</small></div>
      </header>
      <nav class="ut-tabs" aria-label="Ultimate Team sections">
        ${[
          ['squad', 'SQUAD', `${m.filledCount}/${m.totalSlots}`],
          ['store', 'STORE', 'PACKS'],
          ['battles', 'SQUAD BATTLES', `${state.record.w}W ${state.record.d}D ${state.record.l}L`],
          ['club', 'CLUB', `${state.club.length}`],
        ]
          .map(
            ([id, label, meta]) => `
          <button class="ut-tab ${tab === id ? 'is-active' : ''}" type="button" data-ut="tab" data-tab="${id}">
            <b>${label}</b><small>${esc(meta)}</small>
          </button>`,
          )
          .join('')}
      </nav>
      <main class="ut-body">${tab === 'squad' ? squadView() : tab === 'store' ? storeView() : tab === 'battles' ? battlesView() : clubView()}</main>
    `;

    if (tab === 'squad') {
      const host = overlay.querySelector('.ut-holo-stage');
      if (host) {
        host.appendChild(showcase.canvas);
        showcase.start();
      }
      wireAnimationButtons();
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
    return `<button class="ut-slot ${off}" type="button" style="left:${left}%;top:${top}%" data-ut="slot" data-slot="${index}" aria-label="${esc(player.name)}, ${slot.pos}">
      <span class="ut-slot-ovr">${player.ovr}</span>
      <span class="ut-slot-name">${esc(shortName(player))}</span>
      <span class="ut-slot-pos">${slot.pos}</span>
      <span class="ut-slot-chem"><i style="width:${entry.chem}%"></i></span>
    </button>`;
  }

  function squadView() {
    const m = metrics();
    const bench = store.benchPlayers(state);
    const selected = selectedPlayer();

    return `
      <section class="ut-squad">
        <div class="ut-squad-main">
          <div class="ut-squad-bar">
            <div class="ut-metric"><small>SQUAD RATING</small><b>${m.rating || '—'}</b></div>
            <div class="ut-metric"><small>CHEMISTRY</small><b>${m.chemistry}</b><i class="ut-chem"><span style="width:${m.chemistry}%"></span></i></div>
            <label class="ut-select"><small>FORMATION</small>
              <select data-ut="formation">
                ${FORMATION_IDS.map((id) => `<option value="${id}" ${state.formation === id ? 'selected' : ''}>${FORMATIONS[id].name}</option>`).join('')}
              </select>
            </label>
            <button class="ut-btn ut-btn-ghost" type="button" data-ut="autofill">AUTO FILL</button>
          </div>

          <div class="ut-pitch">
            <div class="ut-pitch-lines" aria-hidden="true"></div>
            ${m.starters.map(slotMarkup).join('')}
          </div>

          <div class="ut-bench">
            <div class="ut-bench-head"><small>SUBSTITUTES</small><span>${bench.length}/7</span></div>
            <div class="ut-bench-row">
              ${Array.from({ length: 7 })
                .map((_, i) => {
                  const player = bench[i];
                  return player
                    ? `<button class="ut-bench-slot" type="button" data-ut="select" data-uid="${esc(player.uid)}">
                        <b>${player.ovr}</b><span>${esc(shortName(player, 10))}</span><small>${esc(player.pos)}</small>
                      </button>`
                    : `<button class="ut-bench-slot is-empty" type="button" data-ut="autofill"><span>+</span><small>SUB</small></button>`;
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
          <button class="ut-btn ut-btn-ghost" type="button" data-ut="move-bench" data-uid="${esc(player.uid)}">MOVE TO BENCH</button>
          <button class="ut-btn ut-btn-danger" type="button" data-ut="release" data-uid="${esc(player.uid)}">RELEASE</button>
        </div>
      </div>`;
  }

  function wireAnimationButtons() {
    if (!overlay) return;
    overlay.querySelectorAll('[data-ut="anim"]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.clip === activeClip);
    });
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
            <article class="ut-pack" style="--pack:${pack.color}">
              <span class="ut-pack-orb" aria-hidden="true">${pack.count}</span>
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
            <article class="ut-opp" style="--opp:${opponent.color}">
              <div class="ut-opp-crest">${esc(opponent.short)}</div>
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
    openModal({
      title: result.pack.name,
      subtitle: 'PACK OPENED',
      wide: true,
      body: `<div class="ut-reveal">${result.signings
        .map((player) => `<div class="ut-reveal-card">${playerCard(player, { action: 'none' })}</div>`)
        .join('')}</div>`,
      actions: `<button class="ut-btn ut-btn-ghost" type="button" data-ut="modal-close">DONE</button>
        <button class="ut-btn ut-btn-primary" type="button" data-ut="pack" data-pack="${result.pack.id}" ${state.coins < result.pack.cost ? 'disabled' : ''}>OPEN ANOTHER · ${coins(result.pack.cost)}</button>`,
    });
  }

  // ── Matches ──────────────────────────────────────────────────────────────
  function startBattle(opponentId) {
    const opponent = store.OPPONENTS.find((entry) => entry.id === opponentId);
    if (!opponent) return;
    const result = store.simulateMatch(state, opponent);
    matchResult = result;
    matchFinished = false;

    openModal({
      title: `${state.clubName} vs ${opponent.name}`,
      subtitle: 'SQUAD BATTLE · LIVE',
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
    const { promoted } = store.applyResult(state, {
      ...result,
      coins: result.coins,
      points: result.points,
    });
    const label = result.outcome === 'win' ? 'WIN' : result.outcome === 'draw' ? 'DRAW' : 'LOSS';
    if (modal) {
      const body = modal.querySelector('.ut-modal-body');
      if (body) {
        body.insertAdjacentHTML(
          'beforeend',
          `<div class="ut-match-result is-${result.outcome}">
            <small>FULL TIME</small>
            <h4>${label} · ${result.goalsFor} – ${result.goalsAgainst}</h4>
            <p>+${coins(result.coins)} coins${result.points ? ` · +${result.points} pts` : ''}${promoted ? ' · PROMOTED' : ''}</p>
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
        if (uid) {
          selectedUid = uid;
          if (tab === 'squad') render();
        } else {
          openPicker(index);
        }
        return;
      }
      case 'select':
        selectedUid = button.dataset.uid;
        render();
        return;
      case 'anim':
        activeClip = button.dataset.clip;
        showcase.play(activeClip);
        overlay.querySelectorAll('[data-ut="anim"]').forEach((el) => el.classList.toggle('is-active', el === button));
        return;
      case 'assign':
        store.assignToSlot(state, pickerIndex, button.dataset.uid);
        selectedUid = button.dataset.uid;
        closeModal();
        render();
        return;
      case 'move-bench': {
        const uid = button.dataset.uid;
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
      document.body.appendChild(overlay);
      document.documentElement.classList.add('ut-supported');
    }
    overlay.hidden = false;
    document.documentElement.classList.add('ut-open');
    render();
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

  window.addEventListener('keydown', onKeyDown, true);

  return { open, close, isOpen, state };
}
