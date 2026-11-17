// 3D player hologram for Ultimate Team.
// Model, clips and three.js itself come from the three.js repository on GitHub
// and are served locally: a rigged humanoid with Idle / Walk / Run clips,
// quantised and WebP-textured to stay inside the Sites asset budget.
const MODEL_URL = '/assets/models/player.glb';
const THREE_URL = '/vendor/three.module.min.js';
const LOADER_URL = '/vendor/GLTFLoader.js';

// Preferred order and labels; only clips the model actually ships appear.
const CLIP_ORDER = ['Idle', 'Walk', 'Run', 'Jog'];
const CLIP_LABELS = { Idle: 'IDLE', Walk: 'WALK', Run: 'RUN', Jog: 'JOG' };
const HIDDEN_CLIPS = new Set(['TPose', 'Tpose', 'TPose_', 'bindpose']);
const FALLBACK_BUTTONS = [
  ['Idle', 'IDLE'],
  ['Walk', 'WALK'],
  ['Run', 'RUN'],
];

export function createShowcase() {
  const canvas = document.createElement('canvas');
  canvas.className = 'ut-holo-canvas';
  canvas.setAttribute('aria-label', 'Animated 3D player hologram');

  let THREE = null;
  let renderer = null;
  let scene = null;
  let camera = null;
  let model = null;
  let mixer = null;
  let clock = null;
  let frame = null;
  let current = null;
  let clipNames = [];
  const actions = {};
  let loadPromise = null;
  let failed = false;
  let dragX = 0;
  let dragging = false;
  let spin = Math.PI;
  const onClipsChanged = { fn: null };

  function onPointerDown(event) {
    dragging = true;
    dragX = event.clientX;
    canvas.setPointerCapture?.(event.pointerId);
  }
  function onPointerMove(event) {
    if (!dragging) return;
    spin += (event.clientX - dragX) * 0.01;
    dragX = event.clientX;
  }
  function onPointerUp() {
    dragging = false;
  }

  canvas.addEventListener('pointerdown', onPointerDown);
  canvas.addEventListener('pointermove', onPointerMove);
  canvas.addEventListener('pointerup', onPointerUp);
  canvas.addEventListener('pointercancel', onPointerUp);

  async function ensure() {
    if (renderer || failed) return renderer;
    if (loadPromise) return loadPromise;

    loadPromise = (async () => {
      try {
        const [three, loaderModule] = await Promise.all([import(THREE_URL), import(LOADER_URL)]);
        THREE = three;
        const GltfLoader = loaderModule.GLTFLoader;

        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(34, 1, 0.1, 60);
        camera.position.set(0, 1.15, 4.35);
        camera.lookAt(0, 0.85, 0);

        scene.add(new THREE.HemisphereLight(0xc6ff45, 0x04120c, 2.1));
        const key = new THREE.DirectionalLight(0xffffff, 2.6);
        key.position.set(2.6, 4.2, 3.4);
        scene.add(key);
        const rim = new THREE.DirectionalLight(0x4fe3ff, 2.2);
        rim.position.set(-3, 2.4, -2.6);
        scene.add(rim);
        const glow = new THREE.PointLight(0xc6ff45, 12, 7);
        glow.position.set(0, 0.25, 1.4);
        scene.add(glow);

        const floor = new THREE.Mesh(
          new THREE.CircleGeometry(1.55, 64),
          new THREE.MeshStandardMaterial({ color: 0x071812, roughness: 0.55, metalness: 0.35 }),
        );
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -0.001;
        scene.add(floor);

        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(1.5, 0.012, 12, 96),
          new THREE.MeshBasicMaterial({ color: 0xc6ff45, transparent: true, opacity: 0.65 }),
        );
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = 0.002;
        scene.add(ring);

        const halo = new THREE.Mesh(
          new THREE.RingGeometry(1.05, 1.48, 64),
          new THREE.MeshBasicMaterial({ color: 0xc6ff45, transparent: true, opacity: 0.07, side: THREE.DoubleSide }),
        );
        halo.rotation.x = -Math.PI / 2;
        halo.position.y = 0.003;
        scene.add(halo);

        const gltf = await new GltfLoader().loadAsync(MODEL_URL);
        model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const scale = 1.72 / Math.max(size.y, 0.001);
        model.scale.setScalar(scale);
        const box2 = new THREE.Box3().setFromObject(model);
        model.position.y -= box2.min.y;
        model.position.x -= (box2.min.x + box2.max.x) / 2;
        model.position.z -= (box2.min.z + box2.max.z) / 2;
        scene.add(model);

        mixer = new THREE.AnimationMixer(model);
        const clips = gltf.animations || [];
        clipNames = clips.map((clip) => clip.name).filter(Boolean);
        clips.forEach((clip) => {
          actions[clip.name] = mixer.clipAction(clip);
        });
        clock = new THREE.Clock();
        play(preferredClip());
        resize();
        start();
        if (typeof onClipsChanged.fn === 'function') onClipsChanged.fn(buttons());
      } catch (error) {
        failed = true;
        canvas.classList.add('is-unavailable');
        canvas.dataset.error = String(error && error.message ? error.message : error);
        console.warn('[UF27] 3D hologram unavailable:', error);
      }
      return renderer;
    })();

    return loadPromise;
  }

  function preferredClip() {
    const usable = clipNames.filter((name) => !HIDDEN_CLIPS.has(name));
    const preferred = CLIP_ORDER.find((name) => usable.includes(name));
    return preferred || usable[0] || clipNames[0] || null;
  }

  function buttons() {
    const usable = clipNames.filter((name) => !HIDDEN_CLIPS.has(name));
    if (!usable.length) return FALLBACK_BUTTONS;
    const preferred = CLIP_ORDER.filter((name) => usable.includes(name)).map((name) => [name, CLIP_LABELS[name] || name.toUpperCase()]);
    if (preferred.length) return preferred;
    return usable.map((name) => [name, CLIP_LABELS[name] || name.toUpperCase()]);
  }

  function play(name) {
    if (!mixer) return;
    const next = actions[name] || actions[preferredClip()] || Object.values(actions)[0];
    if (!next || next === current) return;
    next.reset().setEffectiveWeight(1).fadeIn(0.25).play();
    if (current) current.fadeOut(0.25);
    current = next;
  }

  function resize() {
    if (!renderer || !camera) return;
    const width = canvas.clientWidth || 320;
    const height = canvas.clientHeight || 260;
    renderer.setSize(width, height, false);
    camera.aspect = width / Math.max(height, 1);
    camera.updateProjectionMatrix();
  }

  function loop() {
    frame = requestAnimationFrame(loop);
    if (!renderer || !scene || !camera) return;
    const delta = clock ? Math.min(clock.getDelta(), 0.05) : 0.016;
    if (mixer) mixer.update(delta);
    if (model) {
      if (!dragging) spin += delta * 0.28;
      model.rotation.y = spin;
    }
    renderer.render(scene, camera);
  }

  function start() {
    if (!renderer) {
      ensure();
      return;
    }
    resize();
    if (!frame) loop();
  }

  function stop() {
    if (frame) cancelAnimationFrame(frame);
    frame = null;
  }

  const observer = new ResizeObserver(() => resize());
  observer.observe(canvas);

  return {
    canvas,
    start,
    stop,
    play,
    get clips() {
      return [...clipNames];
    },
    get buttons() {
      return buttons();
    },
    get ready() {
      return Boolean(renderer) && !failed;
    },
    get failed() {
      return failed;
    },
    onClipsChanged(fn) {
      onClipsChanged.fn = fn;
    },
    dispose() {
      stop();
      observer.disconnect();
      if (renderer) renderer.dispose();
      renderer = null;
      failed = true;
    },
  };
}
