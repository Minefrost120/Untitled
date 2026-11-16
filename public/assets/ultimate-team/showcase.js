// 3D hologram showcase for Ultimate Team.
// Model + animation assets come from the three.js repository on GitHub
// (Robot Expressive by Don McCurdy, CC-BY 4.0) and are served locally from
// /assets/models. three.js itself is vendored from the same repository.
const MODEL_URL = '/assets/models/robot-expressive.glb';
const THREE_URL = '/vendor/three.module.min.js';
const LOADER_URL = '/vendor/GLTFLoader.js';

const CLIP_BUTTONS = [
  ['Idle', 'IDLE'],
  ['Running', 'RUN'],
  ['Walk', 'WALK'],
  ['Wave', 'WAVE'],
  ['Dance', 'DANCE'],
  ['ThumbsUp', 'THUMBS UP'],
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
  let clips = [];
  const actions = {};
  let loadPromise = null;
  let failed = false;
  let dragX = 0;
  let dragging = false;
  let spin = 0.35;

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
        clips = gltf.animations || [];
        clips.forEach((clip) => {
          const action = mixer.clipAction(clip);
          actions[clip.name] = action;
        });
        clock = new THREE.Clock();
        play('Idle');
        resize();
        start();
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

  function play(name) {
    if (!mixer) return;
    const next = actions[name] || actions.Idle || Object.values(actions)[0];
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
      if (!dragging) spin += delta * 0.0001;
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
      return clips.map((clip) => clip.name);
    },
    buttons: CLIP_BUTTONS.filter(([clip]) => clip),
    dispose() {
      stop();
      observer.disconnect();
      if (renderer) renderer.dispose();
      renderer = null;
      failed = true;
    },
  };
}
