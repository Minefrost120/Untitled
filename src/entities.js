import * as THREE from 'three';

const cache = new Map();

function geo(key, make) {
  if (!cache.has(key)) cache.set(key, make());
  return cache.get(key);
}

const SKIN = ['#e8b996', '#c68a5f', '#8d5734', '#5f3a22', '#f0c9a6', '#a96a41'];
const HAIR = ['#1b1512', '#2e1f14', '#5c3a1e', '#c9a45a', '#101010', '#7a4a26'];

const materialCache = new Map();
function mat(color, opts = {}) {
  const key = `${color}|${opts.rough ?? 0.78}|${opts.emissive ?? ''}`;
  if (!materialCache.has(key)) {
    materialCache.set(
      key,
      new THREE.MeshStandardMaterial({
        color,
        roughness: opts.rough ?? 0.78,
        metalness: 0,
        emissive: opts.emissive ?? 0x000000,
        emissiveIntensity: opts.emissiveIntensity ?? 0,
        side: opts.side ?? THREE.FrontSide,
      })
    );
  }
  return materialCache.get(key);
}

/**
 * Low-poly footballer with a rig simple enough to animate from the match loop.
 */
export function createPlayerVisual(team, isGK, variant = 0) {
  const root = new THREE.Group();
  const skin = SKIN[(variant + team.id.length) % SKIN.length];
  const hair = HAIR[variant % HAIR.length];
  const jerseyColor = isGK ? team.gk : team.primary;
  const shortsColor = isGK ? '#101b17' : team.shorts;
  const socksColor = isGK ? team.gk : team.socks;

  const body = new THREE.Group();
  root.add(body);

  // shorts
  const shorts = new THREE.Mesh(
    geo('shorts', () => new THREE.CylinderGeometry(0.22, 0.25, 0.32, 10)),
    mat(shortsColor)
  );
  shorts.position.y = 0.92;
  body.add(shorts);

  // torso
  const torso = new THREE.Mesh(
    geo('torso', () => new THREE.CapsuleGeometry(0.235, 0.42, 4, 12)),
    mat(jerseyColor)
  );
  torso.position.y = 1.28;
  torso.scale.set(1, 1, 0.82);
  body.add(torso);

  // collar / sash detail so teams read at distance
  const collar = new THREE.Mesh(
    geo('collar', () => new THREE.CylinderGeometry(0.1, 0.17, 0.08, 10)),
    mat(team.secondary)
  );
  collar.position.y = 1.6;
  body.add(collar);

  // arms
  const armGeo = geo('arm', () => new THREE.CapsuleGeometry(0.062, 0.3, 3, 8));
  const armL = new THREE.Group();
  armL.position.set(0.255, 1.5, 0);
  const armLMesh = new THREE.Mesh(armGeo, mat(skin));
  armLMesh.position.y = -0.21;
  armL.add(armLMesh);
  const sleeveL = new THREE.Mesh(
    geo('sleeve', () => new THREE.CylinderGeometry(0.082, 0.075, 0.16, 8)),
    mat(jerseyColor)
  );
  sleeveL.position.y = -0.05;
  armL.add(sleeveL);
  body.add(armL);

  const armR = new THREE.Group();
  armR.position.set(-0.255, 1.5, 0);
  const armRMesh = new THREE.Mesh(armGeo, mat(skin));
  armRMesh.position.y = -0.21;
  armR.add(armRMesh);
  const sleeveR = new THREE.Mesh(
    geo('sleeve', () => new THREE.CylinderGeometry(0.082, 0.075, 0.16, 8)),
    mat(jerseyColor)
  );
  sleeveR.position.y = -0.05;
  armR.add(sleeveR);
  body.add(armR);

  // legs (single capsules with boots, animated at the hip)
  const legGeo = geo('leg', () => new THREE.CapsuleGeometry(0.095, 0.52, 3, 8));
  const sockGeo = geo('sock', () => new THREE.CylinderGeometry(0.1, 0.09, 0.22, 8));
  const bootGeo = geo('boot', () => new THREE.BoxGeometry(0.17, 0.09, 0.3));

  const makeLeg = (side) => {
    const g = new THREE.Group();
    g.position.set(side * 0.115, 0.85, 0);
    const leg = new THREE.Mesh(legGeo, mat(skin));
    leg.position.y = -0.33;
    g.add(leg);
    const sock = new THREE.Mesh(sockGeo, mat(socksColor));
    sock.position.y = -0.52;
    g.add(sock);
    const boot = new THREE.Mesh(bootGeo, mat('#101010'));
    boot.position.set(0, -0.66, 0.06);
    g.add(boot);
    body.add(g);
    return g;
  };
  const legL = makeLeg(1);
  const legR = makeLeg(-1);

  // head + hair
  const head = new THREE.Mesh(geo('head', () => new THREE.SphereGeometry(0.145, 12, 10)), mat(skin));
  head.position.y = 1.72;
  body.add(head);
  const hairMesh = new THREE.Mesh(
    geo('hair', () => new THREE.SphereGeometry(0.152, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55)),
    mat(hair)
  );
  hairMesh.position.y = 1.735;
  hairMesh.rotation.x = -0.18;
  body.add(hairMesh);

  // contact shadow
  const shadow = new THREE.Mesh(
    geo('blobShadow', () => new THREE.CircleGeometry(0.52, 18)),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.32, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  root.add(shadow);

  root.scale.setScalar(isGK ? 1.04 : 1);

  return { root, body, armL, armR, legL, legR, torso, head };
}

export function animatePlayer(visual, phase, speed, sliding) {
  const amp = Math.min(1, speed / 7) * 0.85;
  const swing = Math.sin(phase);
  visual.legL.rotation.x = swing * amp;
  visual.legR.rotation.x = -swing * amp;
  visual.armL.rotation.x = -swing * amp * 0.8;
  visual.armR.rotation.x = swing * amp * 0.8;
  visual.body.position.y = Math.abs(Math.cos(phase)) * 0.035 * Math.min(1, speed / 5);
  visual.body.rotation.z = Math.sin(phase) * 0.03 * Math.min(1, speed / 6);

  if (sliding) {
    visual.body.rotation.x = -1.15;
    visual.body.position.y = -0.5;
  } else {
    visual.body.rotation.x += (0 - visual.body.rotation.x) * 0.25;
    visual.body.position.y += (Math.abs(Math.cos(phase)) * 0.035 * Math.min(1, speed / 5) - visual.body.position.y) * 0.3;
  }
}

export function createBallVisual() {
  const [c] = (() => {
    const cv = document.createElement('canvas');
    cv.width = 256;
    cv.height = 256;
    return [cv, cv.getContext('2d')];
  })();
  const g = c.getContext('2d');
  g.fillStyle = '#f7f9f7';
  g.fillRect(0, 0, 256, 256);
  // pentagon-ish patches
  g.fillStyle = '#15181a';
  const spots = [
    [128, 46, 30], [54, 110, 26], [202, 110, 26], [92, 196, 28], [172, 196, 28], [128, 128, 22],
  ];
  for (const [x, y, r] of spots) {
    g.beginPath();
    for (let i = 0; i < 5; i++) {
      const a = -Math.PI / 2 + (i / 5) * Math.PI * 2;
      const px = x + Math.cos(a) * r;
      const py = y + Math.sin(a) * r;
      if (i === 0) g.moveTo(px, py);
      else g.lineTo(px, py);
    }
    g.closePath();
    g.fill();
  }
  g.strokeStyle = 'rgba(0,0,0,0.28)';
  g.lineWidth = 3;
  g.strokeRect(0, 0, 256, 256);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;

  const root = new THREE.Group();
  const ball = new THREE.Mesh(
    new THREE.SphereGeometry(0.32, 22, 16),
    new THREE.MeshStandardMaterial({ map: tex, roughness: 0.55, metalness: 0.05 })
  );
  root.add(ball);

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.3, 16),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.34, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  root.add(shadow);

  return { root, ball, shadow };
}

export function createControlRing() {
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.58, 0.72, 32),
    new THREE.MeshBasicMaterial({ color: 0xc6ff45, transparent: true, opacity: 0.92, depthWrite: false })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.035;
  return ring;
}
