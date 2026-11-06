import * as THREE from 'three';
import { PITCH } from './config.js';

const PPM = 20; // texture pixels per metre
const GROUND_W = 120;
const GROUND_L = 84;

function canvas2d(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return [c, c.getContext('2d')];
}

// ── Pitch markings drawn into one big texture ─────────────────────────────
function makePitchTexture() {
  const W = GROUND_W * PPM;
  const H = GROUND_L * PPM;
  const [c, g] = canvas2d(W, H);
  const px = (x) => (x + GROUND_W / 2) * PPM;
  const pz = (z) => (z + GROUND_L / 2) * PPM;

  // surround
  g.fillStyle = '#11512c';
  g.fillRect(0, 0, W, H);

  // pitch base + mowing stripes
  const x0 = px(-PITCH.halfWidth);
  const z0 = pz(-PITCH.halfLength);
  const pw = PITCH.halfWidth * 2 * PPM;
  const pl = PITCH.halfLength * 2 * PPM;
  g.fillStyle = '#1d7138';
  g.fillRect(x0, z0, pw, pl);

  const bands = 20;
  const band = pl / bands;
  for (let i = 0; i < bands; i += 2) {
    g.fillStyle = 'rgba(255,255,255,0.045)';
    g.fillRect(x0, z0 + i * band, pw, band);
  }

  // grass grain
  for (let i = 0; i < 34000; i++) {
    const rx = Math.random() * W;
    const ry = Math.random() * H;
    const light = Math.random() < 0.5;
    g.fillStyle = light ? 'rgba(210,255,200,0.05)' : 'rgba(0,20,0,0.06)';
    g.fillRect(rx, ry, 2, 2);
  }

  // white lines
  g.strokeStyle = 'rgba(255,255,255,0.92)';
  g.fillStyle = 'rgba(255,255,255,0.92)';
  g.lineWidth = 3.2;
  const line = (ax, az, bx, bz) => {
    g.beginPath();
    g.moveTo(px(ax), pz(az));
    g.lineTo(px(bx), pz(bz));
    g.stroke();
  };
  const dot = (x, z, r = 0.34) => {
    g.beginPath();
    g.arc(px(x), pz(z), r * PPM, 0, Math.PI * 2);
    g.fill();
  };
  const rect = (x1, z1, x2, z2) => {
    g.strokeRect(px(Math.min(x1, x2)), pz(Math.min(z1, z2)), Math.abs(x2 - x1) * PPM, Math.abs(z2 - z1) * PPM);
  };

  // boundary
  rect(-PITCH.halfWidth, -PITCH.halfLength, PITCH.halfWidth, PITCH.halfLength);
  // halfway
  line(-PITCH.halfWidth, 0, PITCH.halfWidth, 0);
  // centre circle + spot
  g.beginPath();
  g.arc(px(0), pz(0), PITCH.circleRadius * PPM, 0, Math.PI * 2);
  g.stroke();
  dot(0, 0, 0.3);

  for (const side of [-1, 1]) {
    const gz = side * PITCH.halfLength;
    // penalty area
    rect(-PITCH.boxHalfWidth, gz, PITCH.boxHalfWidth, gz - side * PITCH.boxDepth);
    // six yard box
    rect(-PITCH.sixHalfWidth, gz, PITCH.sixHalfWidth, gz - side * PITCH.sixDepth);
    // penalty spot
    const spotZ = gz - side * PITCH.penaltyDist;
    dot(0, spotZ, 0.3);
    // penalty arc — only the part outside the box
    const distFromBox = Math.abs(PITCH.penaltyDist - PITCH.boxDepth); // 5.5
    const a = Math.asin(Math.min(1, distFromBox / PITCH.circleRadius));
    g.beginPath();
    if (side === -1) {
      g.arc(px(0), pz(spotZ), PITCH.circleRadius * PPM, a, Math.PI - a);
    } else {
      g.arc(px(0), pz(spotZ), PITCH.circleRadius * PPM, Math.PI + a, Math.PI * 2 - a);
    }
    g.stroke();
    // goal line shading inside the mouth
    line(-PITCH.goalHalfWidth, gz, PITCH.goalHalfWidth, gz);
  }

  // corner arcs
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const cx = sx * PITCH.halfWidth;
      const cz = sz * PITCH.halfLength;
      g.beginPath();
      const a0 = Math.atan2(sz * 1, sx * 1);
      g.arc(px(cx), pz(cz), 1 * PPM, a0 - Math.PI / 2, a0 + Math.PI / 2);
      g.stroke();
    }
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

// ── Crowd + advertising textures ──────────────────────────────────────────
function makeCrowdTexture() {
  const [c, g] = canvas2d(1024, 256);
  const bg = g.createLinearGradient(0, 0, 0, 256);
  bg.addColorStop(0, '#0a1512');
  bg.addColorStop(1, '#152622');
  g.fillStyle = bg;
  g.fillRect(0, 0, 1024, 256);
  const palette = ['#e6e0d2', '#a7b8c9', '#c25a4a', '#d8b25a', '#5a8098', '#eaeaea', '#7d8f6a', '#b48ad6'];
  for (let y = 8; y < 256; y += 13) {
    g.fillStyle = 'rgba(0,0,0,0.28)';
    g.fillRect(0, y + 9, 1024, 4);
    for (let x = 4; x < 1024; x += 9) {
      if (Math.random() < 0.18) continue;
      g.globalAlpha = 0.45 + Math.random() * 0.5;
      g.fillStyle = palette[(Math.random() * palette.length) | 0];
      g.fillRect(x + Math.random() * 3, y + Math.random() * 2, 3.4, 4.6);
    }
  }
  g.globalAlpha = 1;
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(4, 1);
  return tex;
}

function makeAdTexture() {
  const [c, g] = canvas2d(2048, 128);
  g.fillStyle = '#07120f';
  g.fillRect(0, 0, 2048, 128);
  const words = [
    ['TOP-DOWN FC', '#c6ff45', '#0b1a13'],
    ['FC MOBILE STYLE', '#4fe3ff', '#04141a'],
    ['ELEVEN A SIDE', '#ffffff', '#141414'],
    ['PLAY BEAUTIFUL', '#ffb400', '#1a1204'],
    ['FULL 90', '#ff3b4d', '#1a0507'],
    ['TOP-DOWN FC', '#c6ff45', '#0b1a13'],
  ];
  const w = 2048 / words.length;
  words.forEach(([txt, fg, bg], i) => {
    g.fillStyle = bg;
    g.fillRect(i * w, 0, w, 128);
    g.fillStyle = fg;
    g.font = '800 52px "Barlow Condensed", Arial, sans-serif';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText(txt, i * w + w / 2, 66);
    g.fillStyle = 'rgba(255,255,255,0.15)';
    g.fillRect(i * w, 0, 2, 128);
  });
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

// ── Goals ─────────────────────────────────────────────────────────────────
function buildGoal(scene, side) {
  const gz = side * PITCH.halfLength;
  const r = 0.075;
  const postMat = new THREE.MeshStandardMaterial({ color: 0xf7fbff, roughness: 0.35, metalness: 0.1 });
  const postGeo = new THREE.CylinderGeometry(r, r, PITCH.goalHeight, 10);
  const barGeo = new THREE.CylinderGeometry(r, r, PITCH.goalHalfWidth * 2, 10);

  for (const sx of [-1, 1]) {
    const post = new THREE.Mesh(postGeo, postMat);
    post.position.set(sx * PITCH.goalHalfWidth, PITCH.goalHeight / 2, gz);
    scene.add(post);
  }
  const bar = new THREE.Mesh(barGeo, postMat);
  bar.rotation.z = Math.PI / 2;
  bar.position.set(0, PITCH.goalHeight, gz);
  scene.add(bar);

  // net
  const depth = 2.2;
  const backZ = gz + side * depth;
  const pts = [];
  const push = (x1, y1, z1, x2, y2, z2) => {
    pts.push(x1, y1, z1, x2, y2, z2);
  };
  const step = 0.28;
  for (let x = -PITCH.goalHalfWidth; x <= PITCH.goalHalfWidth + 0.001; x += step) {
    push(x, 0, backZ, x, PITCH.goalHeight, backZ);
    // roof net
    push(x, PITCH.goalHeight, gz, x, PITCH.goalHeight, backZ);
  }
  for (let y = 0; y <= PITCH.goalHeight + 0.001; y += step) {
    push(-PITCH.goalHalfWidth, y, backZ, PITCH.goalHalfWidth, y, backZ);
    for (const sx of [-1, 1]) {
      push(sx * PITCH.goalHalfWidth, y, gz, sx * PITCH.goalHalfWidth, y, backZ);
    }
  }
  for (let z = gz; Math.abs(z - gz) <= depth + 0.001; z += side * step) {
    for (const sx of [-1, 1]) {
      push(sx * PITCH.goalHalfWidth, 0, z, sx * PITCH.goalHalfWidth, PITCH.goalHeight, z);
    }
    push(-PITCH.goalHalfWidth, PITCH.goalHeight, z, PITCH.goalHalfWidth, PITCH.goalHeight, z);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  const net = new THREE.LineSegments(
    geo,
    new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.24 })
  );
  scene.add(net);
}

// ── Stands, boards, floodlights ───────────────────────────────────────────
function buildStadium(scene) {
  const crowdTex = makeCrowdTexture();
  const adTex = makeAdTexture();

  const standMat = new THREE.MeshStandardMaterial({
    map: crowdTex,
    roughness: 0.95,
    emissive: 0x223a33,
    emissiveIntensity: 0.35,
  });
  const baseMat = new THREE.MeshStandardMaterial({ color: 0x0a1714, roughness: 0.9 });

  const stands = [
    { pos: [0, -64], yaw: 0 },
    { pos: [0, 64], yaw: Math.PI },
    { pos: [-52, 0], yaw: Math.PI / 2 },
    { pos: [52, 0], yaw: -Math.PI / 2 },
  ];

  for (const s of stands) {
    const group = new THREE.Group();
    group.position.set(s.pos[0], 0, s.pos[1]);
    group.rotation.y = s.yaw;

    const wall = new THREE.Mesh(new THREE.BoxGeometry(138, 2.6, 2.4), baseMat);
    wall.position.set(0, 1.3, -0.6);
    group.add(wall);

    const plane = new THREE.Mesh(new THREE.PlaneGeometry(138, 17), standMat);
    plane.rotation.x = -1.2;
    plane.position.set(0, 6.4, 0);
    group.add(plane);

    // roof fascia
    const fascia = new THREE.Mesh(new THREE.BoxGeometry(138, 0.9, 0.5), baseMat);
    fascia.position.set(0, 12.6, -6.4);
    group.add(fascia);

    scene.add(group);
  }

  // advertising boards
  const adMat = new THREE.MeshStandardMaterial({
    map: adTex,
    emissive: 0xffffff,
    emissiveMap: adTex,
    emissiveIntensity: 0.45,
    roughness: 0.6,
  });
  const adGeoLong = new THREE.BoxGeometry(96, 1.15, 0.35);
  const adGeoShort = new THREE.BoxGeometry(76, 1.15, 0.35);

  const makeAd = (geo, x, z, yaw) => {
    const m = new THREE.Mesh(geo, adMat);
    m.position.set(x, 0.62, z);
    m.rotation.y = yaw;
    scene.add(m);
  };
  makeAd(adGeoLong, 0, -PITCH.halfLength - 4.4, 0);
  makeAd(adGeoLong, 0, PITCH.halfLength + 4.4, 0);
  makeAd(adGeoShort, -PITCH.halfWidth - 4.4, 0, Math.PI / 2);
  makeAd(adGeoShort, PITCH.halfWidth + 4.4, 0, Math.PI / 2);

  // floodlight masts
  const mastMat = new THREE.MeshStandardMaterial({ color: 0x16211f, roughness: 0.8 });
  const lampMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xf3ffe0,
    emissiveIntensity: 2.2,
    roughness: 0.3,
  });
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const px = sx * 62;
      const pz = sz * 76;
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.34, 30, 8), mastMat);
      mast.position.set(px, 15, pz);
      scene.add(mast);
      const rig = new THREE.Mesh(new THREE.BoxGeometry(7, 1.5, 0.5), mastMat);
      rig.position.set(px, 30, pz);
      scene.add(rig);
      const lamp = new THREE.Mesh(new THREE.PlaneGeometry(6.4, 1.1), lampMat);
      lamp.position.set(px, 30, pz + (sz < 0 ? 0.3 : -0.3));
      lamp.rotation.y = sz < 0 ? 0 : Math.PI;
      scene.add(lamp);
    }
  }

  // corner flags
  const flagPole = new THREE.CylinderGeometry(0.035, 0.035, 1.55, 6);
  const poleMat = new THREE.MeshStandardMaterial({ color: 0xe8f2ea, roughness: 0.5 });
  const flagMat = new THREE.MeshBasicMaterial({ color: 0xc6ff45, side: THREE.DoubleSide });
  const flagGeo = new THREE.PlaneGeometry(0.55, 0.34);
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const x = sx * PITCH.halfWidth;
      const z = sz * PITCH.halfLength;
      const pole = new THREE.Mesh(flagPole, poleMat);
      pole.position.set(x, 0.775, z);
      scene.add(pole);
      const flag = new THREE.Mesh(flagGeo, flagMat);
      flag.position.set(x + sx * 0.28, 1.35, z);
      scene.add(flag);
    }
  }
}

// ── Public ────────────────────────────────────────────────────────────────
export function buildWorld(scene) {
  scene.background = new THREE.Color(0x06110e);
  scene.fog = new THREE.Fog(0x06110e, 110, 260);

  const hemi = new THREE.HemisphereLight(0xd6ecff, 0x143121, 1.55);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0xfff4e2, 2.1);
  key.position.set(-38, 66, -26);
  scene.add(key);

  const fill = new THREE.DirectionalLight(0x9fc8ff, 0.85);
  fill.position.set(46, 40, 52);
  scene.add(fill);

  const pitch = new THREE.Mesh(
    new THREE.PlaneGeometry(GROUND_W, GROUND_L),
    new THREE.MeshStandardMaterial({ map: makePitchTexture(), roughness: 0.94, metalness: 0 })
  );
  pitch.rotation.x = -Math.PI / 2;
  pitch.receiveShadow = false;
  scene.add(pitch);

  const outer = new THREE.Mesh(
    new THREE.PlaneGeometry(420, 420),
    new THREE.MeshStandardMaterial({ color: 0x08160f, roughness: 1 })
  );
  outer.rotation.x = -Math.PI / 2;
  outer.position.y = -0.06;
  scene.add(outer);

  buildStadium(scene);
  buildGoal(scene, -1);
  buildGoal(scene, 1);

  return { pitch };
}
