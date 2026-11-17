// Ultimate Team bootstrap.
// Unlocks the rail entry the game ships as "coming soon", injects a launch card
// into the mode grid, and lazily loads the mode the first time it is opened.
const RAIL_SELECTOR = '#ufRail [data-nav="ultimate"]';
const CARD_SELECTOR = '#ufCards [data-card="ultimate"]';

let instance = null;
let loadingPromise = null;
let bootOverlay = null;

function unlockNav() {
  const rail = document.querySelector(RAIL_SELECTOR);
  if (rail) {
    if (rail.disabled) rail.disabled = false;
    rail.removeAttribute('aria-disabled');
    rail.classList.add('ut-rail-unlocked');
    const tag = rail.querySelector('.uf-rail-tag');
    if (tag && tag.textContent !== 'NEW') tag.textContent = 'NEW';
  }

  const cards = document.querySelector('#ufCards');
  if (cards && !document.querySelector(CARD_SELECTOR)) {
    const card = document.createElement('button');
    card.className = 'uf-card ut-launch-card';
    card.type = 'button';
    card.dataset.card = 'ultimate';
    card.innerHTML = `<span class="uf-card-art ut-launch-art" aria-hidden="true"><i></i></span>
      <span class="uf-card-body"><small>BUILD</small><b>ULTIMATE TEAM</b><em>Packs · Rivals · objectives · Squad Battles</em></span>
      <span class="uf-card-go" aria-hidden="true">→</span>`;
    cards.appendChild(card);
  }
}

function showBoot(message) {
  if (!bootOverlay) {
    bootOverlay = document.createElement('div');
    bootOverlay.className = 'ut-boot';
    bootOverlay.innerHTML = `<div class="ut-boot-card"><span class="ut-boot-spinner" aria-hidden="true"></span><b data-boot-text>LOADING ULTIMATE TEAM</b><small>REAL SQUADS · 16,000+ PLAYERS</small></div>`;
    document.body.appendChild(bootOverlay);
  }
  const label = bootOverlay.querySelector('[data-boot-text]');
  if (label && message) label.textContent = message;
  bootOverlay.hidden = false;
}

function hideBoot() {
  if (bootOverlay) bootOverlay.hidden = true;
}

function showBootError(error) {
  if (!bootOverlay) return;
  const message = String(error && error.message ? error.message : error);
  bootOverlay.innerHTML = `<div class="ut-boot-card is-error">
    <b>ULTIMATE TEAM DATA UNAVAILABLE</b>
    <small>${escapeHtml(message)}</small>
    <small>This usually means the game was rebuilt with new chunk names. Retry after the page reloads.</small>
    <div class="ut-boot-actions">
      <button type="button" data-boot-retry>RETRY</button>
      <button type="button" data-boot-close>CLOSE</button>
    </div>
  </div>`;
  bootOverlay.hidden = false;
  bootOverlay.querySelector('[data-boot-close]').addEventListener('click', hideBoot);
  bootOverlay.querySelector('[data-boot-retry]').addEventListener('click', () => location.reload());
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

async function ensureInstance() {
  if (instance) return instance;
  if (!loadingPromise) {
    loadingPromise = (async () => {
      const [{ loadGameData }, { mountUltimateTeam }] = await Promise.all([
        import('./data.js'),
        import('./ui.js'),
      ]);
      const data = await loadGameData();
      if (data.status === 'unavailable') {
        throw new Error(data.reason || 'No player data could be found for Ultimate Team.');
      }
      instance = mountUltimateTeam({ data });
      return instance;
    })().catch((error) => {
      loadingPromise = null;
      throw error;
    });
  }
  return loadingPromise;
}

async function launch() {
  if (instance) {
    instance.open();
    return;
  }
  showBoot('LOADING ULTIMATE TEAM');
  try {
    const app = await ensureInstance();
    hideBoot();
    app.open();
  } catch (error) {
    console.error('[UF27] Ultimate Team failed to start', error);
    showBootError(error);
  }
}

document.addEventListener(
  'click',
  (event) => {
    const trigger = event.target.closest('[data-nav="ultimate"], [data-card="ultimate"]');
    if (!trigger) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    launch();
  },
  true,
);

const observer = new MutationObserver(unlockNav);
observer.observe(document.body, { childList: true, subtree: true });
unlockNav();
