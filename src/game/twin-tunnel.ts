/**
 * Procedural twin-bore tunnel (one bore per carriageway) with portals, a
 * pierced central wall so oncoming headlights flash between the pillars,
 * LED lighting, jet fans, lane signals and emergency signage, plus the
 * mountain that covers it. Local space: entrance portal at z = 0, the tunnel
 * runs toward -z for `length` metres.
 */
import * as THREE from "three";
import { LANE_W, MEDIAN_X, ONCOMING_X } from "./highway-layout";

const SPRING_Y = 4.6;
const RISE = 2.9;
const WALK_W = 1.5;
const WALK_H = 0.35;
const TILE_TOP = 3.6;
const FACADE_L = -40;
const FACADE_R = 26;
const FACADE_TOP = 13;
const FACADE_D = 1.4;

type Pt = [number, number];

export type Bore = { inner: number; outer: number };
/** Player bore (right) and oncoming bore (left); inner walls sit on the median. */
export const PLAYER_BORE: Bore = { inner: MEDIAN_X + 0.3, outer: 9.2 };
export const ONCOMING_BORE: Bore = { inner: MEDIAN_X - 0.3, outer: -23 };

function tex(w: number, h: number, draw: (c: CanvasRenderingContext2D) => void, srgb = true) {
  const cv = document.createElement("canvas");
  cv.width = w;
  cv.height = h;
  const ctx = cv.getContext("2d");
  if (!ctx) throw Error("Canvas context unavailable");
  draw(ctx);
  const t = new THREE.CanvasTexture(cv);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}

const rnd = (n: number) => {
  const t = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return t - Math.floor(t);
};

function speckle(c: CanvasRenderingContext2D, w: number, h: number, n: number, cols: string[]) {
  for (let i = 0; i < n; i++) {
    c.fillStyle = cols[i % cols.length] ?? "#888";
    const s = 1 + rnd(i * 3.3) * 2;
    c.fillRect(rnd(i) * w, rnd(i * 1.7) * h, s, s);
  }
}

/** Segmental arch from (x0, spring) to (x1, spring) rising `rise` above the springline. */
export function arch(x0: number, x1: number, spring: number, rise: number, n: number): Pt[] {
  const c = Math.abs(x1 - x0) / 2;
  const xm = (x0 + x1) / 2;
  const r = (c * c + rise * rise) / (2 * rise);
  const cy = spring + rise - r;
  const a0 = Math.atan2(spring - cy, x0 - xm);
  const a1 = Math.atan2(spring - cy, x1 - xm);
  const pts: Pt[] = [];
  for (let i = 0; i <= n; i++) {
    const a = a0 + ((a1 - a0) * i) / n;
    pts.push([xm + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  return pts;
}

function archY(b: Bore, x: number) {
  const c = Math.abs(b.outer - b.inner) / 2;
  const xm = (b.outer + b.inner) / 2;
  const r = (c * c + RISE * RISE) / (2 * RISE);
  const cy = SPRING_Y + RISE - r;
  return cy + Math.sqrt(Math.max(0, r * r - (x - xm) ** 2));
}

/** Extrudes a 2D profile straight along -z. UV u follows the profile, v follows z. */
export function sweep(profile: Pt[], length: number, uScale: number, vScale: number) {
  const n = profile.length;
  const pos: number[] = [];
  const uv: number[] = [];
  const idx: number[] = [];
  const s: number[] = [0];
  for (let i = 1; i < n; i++) {
    const a = profile[i - 1] as Pt;
    const b = profile[i] as Pt;
    s.push((s[i - 1] ?? 0) + Math.hypot(b[0] - a[0], b[1] - a[1]));
  }
  for (const ring of [0, 1]) {
    for (let i = 0; i < n; i++) {
      const p = profile[i] as Pt;
      pos.push(p[0], p[1], -ring * length);
      uv.push((s[i] ?? 0) / uScale, (ring * length) / vScale);
    }
  }
  for (let i = 0; i < n - 1; i++) idx.push(i, n + i, i + 1, i + 1, n + i, n + i + 1);
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

function signTexture(draw: (c: CanvasRenderingContext2D, w: number, h: number) => void, w = 512, h = 192) {
  return tex(w, h, (c) => draw(c, w, h));
}

function instanced(geo: THREE.BufferGeometry, mat: THREE.Material | THREE.Material[], mats: THREE.Matrix4[]) {
  const m = new THREE.InstancedMesh(geo, mat, Math.max(1, mats.length));
  mats.forEach((x, i) => m.setMatrixAt(i, x));
  m.count = mats.length;
  m.instanceMatrix.needsUpdate = true;
  m.frustumCulled = false;
  return m;
}

const at = (x: number, y: number, z: number, ry = 0) =>
  new THREE.Matrix4().compose(
    new THREE.Vector3(x, y, z),
    new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), ry),
    new THREE.Vector3(1, 1, 1),
  );

function openingPath(b: Bore): Pt[] {
  return [[b.outer, -0.3], [b.outer, SPRING_Y], ...arch(b.outer, b.inner, SPRING_Y, RISE, 24), [b.inner, -0.3]];
}

function buildPortal(length: number, materials: {
  facade: THREE.Material;
  cornice: THREE.Material;
  frame: THREE.Material;
  header: THREE.Material;
}) {
  const shape = new THREE.Shape();
  shape.moveTo(FACADE_L, -0.6);
  shape.lineTo(FACADE_R, -0.6);
  shape.lineTo(FACADE_R, FACADE_TOP);
  shape.lineTo(FACADE_L, FACADE_TOP);
  shape.closePath();
  for (const b of [PLAYER_BORE, ONCOMING_BORE]) {
    const pts = openingPath(b);
    const hole = new THREE.Path();
    pts.forEach(([x, y], i) => (i ? hole.lineTo(x, y) : hole.moveTo(x, y)));
    hole.closePath();
    shape.holes.push(hole);
  }
  const geo = new THREE.ExtrudeGeometry(shape, { depth: FACADE_D, bevelEnabled: false, curveSegments: 4 });
  const uv = geo.attributes["uv"] as THREE.BufferAttribute;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) / 5, uv.getY(i) / 5);

  const group = new THREE.Group();
  const cx = (FACADE_L + FACADE_R) / 2;
  const w = FACADE_R - FACADE_L;
  for (const [z, front] of [[0, 1], [-length - FACADE_D, -1]] as const) {
    const facade = new THREE.Mesh(geo, materials.facade);
    facade.position.z = z;
    facade.receiveShadow = true;
    const cornice = new THREE.Mesh(new THREE.BoxGeometry(w + 1.2, 0.9, FACADE_D + 1), materials.cornice);
    cornice.position.set(cx, FACADE_TOP + 0.45, z + FACADE_D / 2);
    // pilasters framing the façade
    for (const px of [FACADE_L + 0.9, FACADE_R - 0.9, MEDIAN_X]) {
      const pil = new THREE.Mesh(new THREE.BoxGeometry(px === MEDIAN_X ? 0.6 : 1.8, FACADE_TOP, 0.6), materials.cornice);
      pil.position.set(px, FACADE_TOP / 2, front > 0 ? z + FACADE_D + 0.3 : z - 0.3);
      group.add(pil);
    }
    group.add(facade, cornice);
    // glowing LED frame around both openings on the visible side
    for (const b of [PLAYER_BORE, ONCOMING_BORE]) {
      const pts = openingPath(b).map(([x, y]) => new THREE.Vector3(x, Math.max(0.02, y), 0));
      const curve = new THREE.CatmullRomCurve3(pts, false, "catmullrom", 0.05);
      const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 80, 0.07, 5, false), materials.frame);
      tube.position.z = front > 0 ? z + FACADE_D + 0.05 : z - 0.05;
      group.add(tube);
    }
  }
  // header sign above the player's opening (entrance side)
  const xc = (PLAYER_BORE.inner + PLAYER_BORE.outer) / 2;
  const header = new THREE.Mesh(new THREE.PlaneGeometry(10.5, 2.6), materials.header);
  header.position.set(xc, SPRING_Y + RISE + 2.6, FACADE_D + 0.08);
  group.add(header);
  return group;
}

function buildMountain(length: number) {
  const cx = (FACADE_L + FACADE_R) / 2;
  const core = (FACADE_R - FACADE_L) / 2 - 0.5;
  const W = 540;
  const D = length + 260;
  const geo = new THREE.PlaneGeometry(W, D, 108, 110).rotateX(-Math.PI / 2);
  const p = geo.attributes["position"] as THREE.BufferAttribute;
  const colors: number[] = [];
  const grass = new THREE.Color(0x4d6a30);
  const dark = new THREE.Color(0x34482a);
  const rock = new THREE.Color(0x7b766b);
  const c = new THREE.Color();
  const zMid = -length / 2;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i) + cx;
    let z = p.getZ(i) + zMid;
    const dx = Math.abs(x - cx);
    const inside = z <= 0 && z >= -length;
    const dIn = inside ? Math.min(-z, z + length) : 0;
    const dOut = z > 0 ? z : z < -length ? -length - z : 0;
    const ridge = 34 + 22 * Math.sin(z * 0.0062 + 1.1) + 9 * Math.sin(z * 0.021 + x * 0.013);
    const side = 1 - Math.exp(-Math.max(0, dx - core) / 42);
    const noise = (rnd(i * 0.37) - 0.5) * 2.2;
    const portalH = FACADE_TOP + 1.5 + ridge * 0.75 * side;
    let y: number;
    if (inside) {
      y = FACADE_TOP + 0.6 + Math.min(dIn * 0.55, ridge * 0.65) + ridge * 0.75 * side + noise * Math.min(1, dIn / 10);
    } else if (dx < core) {
      // collapse onto the top of the portal so nothing blocks the openings
      z = z > 0 ? 0 : -length;
      y = FACADE_TOP - 0.2;
    } else {
      y = Math.max(-1.5, portalH * Math.exp(-dOut / 32) - dOut * 0.05 + noise * 0.5);
    }
    const edge = Math.min(1, Math.max(0, (W / 2 - dx) / 60));
    y = -2 + (y + 2) * edge;
    p.setXYZ(i, x, y, z);
    const steep = Math.min(1, Math.abs(y - FACADE_TOP) / 45);
    c.copy(grass)
      .lerp(dark, rnd(i * 3.1) * 0.6)
      .lerp(rock, steep * 0.55 + (rnd(i * 7.3) > 0.86 ? 0.35 : 0));
    colors.push(c.r, c.g, c.b);
  }
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(
    geo,
    new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, flatShading: true, side: THREE.DoubleSide }),
  );
  mesh.receiveShadow = true;
  return mesh;
}

export function buildTwinTunnel(length: number, opts: { low?: boolean } = {}) {
  const low = !!opts.low;
  const group = new THREE.Group();
  group.name = "twin-tunnel";

  // ---------- materials ----------
  const tiles = tex(512, 512, (c) => {
    c.fillStyle = "#8f969c";
    c.fillRect(0, 0, 512, 512);
    for (let y = 0; y < 8; y++)
      for (let x = 0; x < 4; x++) {
        const v = 226 + Math.floor(rnd(x * 9 + y * 17) * 16);
        c.fillStyle = `rgb(${v},${v + 2},${v + 4})`;
        c.fillRect(x * 128 + 3, y * 64 + 3, 122, 58);
      }
    const g = c.createLinearGradient(0, 0, 512, 0);
    g.addColorStop(0, "rgba(40,34,28,0.35)");
    g.addColorStop(0.22, "rgba(40,34,28,0)");
    c.fillStyle = g;
    c.fillRect(0, 0, 512, 512);
  });
  const ceiling = tex(256, 256, (c) => {
    c.fillStyle = "#5a5e64";
    c.fillRect(0, 0, 256, 256);
    speckle(c, 256, 256, 2600, ["#52565c", "#666a70", "#4a4e54"]);
    c.fillStyle = "rgba(15,16,18,0.7)";
    c.fillRect(0, 0, 256, 3);
    c.fillRect(0, 0, 3, 256);
  });
  const concrete = tex(256, 256, (c) => {
    c.fillStyle = "#b9b5ad";
    c.fillRect(0, 0, 256, 256);
    speckle(c, 256, 256, 5000, ["#c4c0b8", "#a9a59d", "#b0aca4", "#9d9991"]);
    c.fillStyle = "rgba(60,55,50,0.35)";
    c.fillRect(0, 0, 256, 2);
    c.fillRect(0, 0, 2, 256);
  });
  const hazard = tex(256, 256, (c) => {
    c.fillStyle = "#c9c5bd";
    c.fillRect(0, 0, 256, 256);
    c.save();
    c.beginPath();
    c.rect(0, 196, 256, 60);
    c.clip();
    for (let i = -8; i < 16; i++) {
      c.fillStyle = i % 2 ? "#141414" : "#f2c21b";
      c.beginPath();
      c.moveTo(i * 32, 256);
      c.lineTo(i * 32 + 32, 256);
      c.lineTo(i * 32 + 96, 196);
      c.lineTo(i * 32 + 64, 196);
      c.fill();
    }
    c.restore();
  });

  const wallMat = new THREE.MeshStandardMaterial({
    map: tiles,
    roughness: 0.28,
    metalness: 0.05,
    emissive: 0xffffff,
    emissiveMap: tiles,
    emissiveIntensity: 0.14,
    side: THREE.DoubleSide,
  });
  const ceilMat = new THREE.MeshStandardMaterial({
    map: ceiling,
    roughness: 0.85,
    side: THREE.DoubleSide,
    emissive: 0xffffff,
    emissiveMap: ceiling,
    emissiveIntensity: 0.12,
  });
  const concreteMat = new THREE.MeshStandardMaterial({ map: concrete, roughness: 0.9, side: THREE.DoubleSide });
  const pillarMat = new THREE.MeshStandardMaterial({ map: hazard, roughness: 0.8, emissive: 0xffffff, emissiveMap: hazard, emissiveIntensity: 0.08 });
  const ledMat = new THREE.MeshBasicMaterial({ color: 0xfff1d6, toneMapped: false });
  const accentMat = new THREE.MeshBasicMaterial({ color: 0x3fa6ff, toneMapped: false });
  const amberMat = new THREE.MeshBasicMaterial({ color: 0xffa21a, toneMapped: false });
  const fanMat = new THREE.MeshStandardMaterial({ color: 0x9aa0a6, metalness: 0.8, roughness: 0.35 });
  const fanCore = new THREE.MeshBasicMaterial({ color: 0x0c0d0f });
  const signBack = new THREE.MeshStandardMaterial({ color: 0x15171a, roughness: 0.6 });

  const exitTex = signTexture((c, w, h) => {
    c.fillStyle = "#0e8a45";
    c.fillRect(0, 0, w, h);
    c.strokeStyle = "#e9fff2";
    c.lineWidth = 8;
    c.strokeRect(10, 10, w - 20, h - 20);
    c.fillStyle = "#f4fff8";
    c.font = "bold 54px Arial, sans-serif";
    c.textBaseline = "middle";
    c.fillText("SAÍDA DE", 140, 66);
    c.fillText("EMERGÊNCIA", 140, 128);
    // running figure
    c.beginPath();
    c.arc(74, 52, 16, 0, Math.PI * 2);
    c.fill();
    c.lineWidth = 14;
    c.lineCap = "round";
    c.strokeStyle = "#f4fff8";
    c.beginPath();
    c.moveTo(70, 74);
    c.lineTo(60, 120);
    c.lineTo(36, 150);
    c.moveTo(60, 120);
    c.lineTo(92, 146);
    c.moveTo(68, 86);
    c.lineTo(102, 98);
    c.moveTo(68, 86);
    c.lineTo(40, 104);
    c.stroke();
  });
  const sosTex = signTexture((c, w, h) => {
    c.fillStyle = "#f07b12";
    c.fillRect(0, 0, w, h);
    c.fillStyle = "#fff";
    c.font = "bold 120px Arial, sans-serif";
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.fillText("SOS", w / 2, h / 2 + 6);
  }, 256, 192);
  const arrowTex = signTexture((c, w, h) => {
    c.fillStyle = "#050607";
    c.fillRect(0, 0, w, h);
    c.fillStyle = "#3dff7a";
    c.beginPath();
    c.moveTo(w / 2 - 34, 40);
    c.lineTo(w / 2 + 34, 40);
    c.lineTo(w / 2 + 34, 130);
    c.lineTo(w / 2 + 80, 130);
    c.lineTo(w / 2, 220);
    c.lineTo(w / 2 - 80, 130);
    c.lineTo(w / 2 - 34, 130);
    c.closePath();
    c.fill();
  }, 256, 256);
  const headerTex = signTexture((c, w, h) => {
    c.fillStyle = "#0d3b78";
    c.fillRect(0, 0, w, h);
    c.strokeStyle = "#ffffff";
    c.lineWidth = 10;
    c.strokeRect(14, 14, w - 28, h - 28);
    c.fillStyle = "#ffffff";
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.font = "bold 112px Arial, sans-serif";
    c.fillText("TÚNEL DA SERRA", w / 2, 108);
    c.font = "bold 66px Arial, sans-serif";
    c.fillText(`EXTENSÃO ${length.toLocaleString("pt-BR")} m  ·  ACENDA OS FARÓIS`, w / 2, 200);
  }, 1024, 256);
  const signMat = (map: THREE.Texture) => new THREE.MeshBasicMaterial({ map, toneMapped: false });

  // ---------- bores ----------
  const ledM: THREE.Matrix4[] = [];
  const delM: THREE.Matrix4[] = [];
  const fanM: THREE.Matrix4[] = [];
  const exitM: THREE.Matrix4[] = [];
  const sosM: THREE.Matrix4[] = [];
  const sigFwd: THREE.Matrix4[] = [];
  const sigBack: THREE.Matrix4[] = [];
  const ledStep = low ? 8 : 5;
  for (const b of [PLAYER_BORE, ONCOMING_BORE]) {
    const s = Math.sign(b.outer - b.inner);
    const xc = (b.inner + b.outer) / 2;
    const curb = b.outer - s * WALK_W;
    group.add(
      new THREE.Mesh(sweep([[curb, 0], [curb, WALK_H], [b.outer, WALK_H]], length, 3, 3), concreteMat),
      new THREE.Mesh(sweep([[b.outer, WALK_H], [b.outer, TILE_TOP]], length, 3.25, 2), wallMat),
      new THREE.Mesh(sweep([[b.outer, TILE_TOP], [b.outer, SPRING_Y], ...arch(b.outer, b.inner, SPRING_Y, RISE, 28)], length, 4, 4), ceilMat),
    );
    const accent = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.07, length), accentMat);
    accent.position.set(b.outer - s * 0.04, TILE_TOP, -length / 2);
    group.add(accent);
    for (const off of [-3, 3]) {
      const x = xc + off;
      const y = archY(b, x) - 0.06;
      for (let z = 2.5; z < length; z += ledStep) ledM.push(at(x, y, -z));
    }
    for (let z = 6; z < length; z += 12) delM.push(at(curb - s * 0.03, 0.2, -z));
    for (let z = 140; z < length - 60; z += 170)
      for (const off of [-2.4, 2.4]) fanM.push(at(xc + off, archY(b, xc + off) - 1.0, -z));
    for (let z = 75; z < length; z += 150) {
      const ry = s > 0 ? -Math.PI / 2 : Math.PI / 2;
      exitM.push(at(b.outer - s * 0.03, 2.55, -z, ry));
      sosM.push(at(b.outer - s * 0.03, 1.6, -z - 3.5, ry));
    }
    const lanes = b === PLAYER_BORE ? [-LANE_W, 0, LANE_W] : [ONCOMING_X - LANE_W, ONCOMING_X, ONCOMING_X + LANE_W];
    for (let z = 30; z < length; z += 220)
      for (const lx of lanes) (b === PLAYER_BORE ? sigFwd : sigBack).push(at(lx, archY(b, lx) - 1.15, -z, b === PLAYER_BORE ? 0 : Math.PI));
  }

  group.add(instanced(new THREE.BoxGeometry(0.34, 0.06, 3), ledMat, ledM));
  group.add(instanced(new THREE.BoxGeometry(0.04, 0.12, 0.12), amberMat, delM));
  const fanGeo = new THREE.CylinderGeometry(0.55, 0.55, 3.1, low ? 10 : 18, 1, false).rotateX(Math.PI / 2);
  group.add(instanced(fanGeo, [fanMat, fanCore, fanCore], fanM));
  group.add(instanced(new THREE.PlaneGeometry(1.7, 0.64), signMat(exitTex), exitM));
  group.add(instanced(new THREE.PlaneGeometry(0.8, 0.6), signMat(sosTex), sosM));
  const sigGeo = new THREE.BoxGeometry(0.95, 0.95, 0.22);
  const arrowMat = signMat(arrowTex);
  const sigMats = [signBack, signBack, signBack, signBack, arrowMat, signBack];
  group.add(instanced(sigGeo, sigMats, [...sigFwd, ...sigBack]));

  // ---------- central wall: beam + pillars standing on the median barrier ----------
  const beam = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, length), concreteMat);
  beam.position.set(MEDIAN_X, SPRING_Y - 0.3, -length / 2);
  group.add(beam);
  const pillarM: THREE.Matrix4[] = [];
  for (let z = 4; z < length; z += 12) {
    const m = new THREE.Matrix4().compose(
      new THREE.Vector3(MEDIAN_X, (SPRING_Y - 0.6) / 2, -z),
      new THREE.Quaternion(),
      new THREE.Vector3(1, 1, 1),
    );
    pillarM.push(m);
  }
  group.add(instanced(new THREE.BoxGeometry(0.62, SPRING_Y - 0.6, 0.9), pillarMat, pillarM));

  // ---------- portals + mountain ----------
  const facadeTex = tex(256, 256, (c) => {
    c.fillStyle = "#a9a49a";
    c.fillRect(0, 0, 256, 256);
    speckle(c, 256, 256, 6000, ["#b3aea4", "#9c978d", "#a39e94", "#8f8a80"]);
    c.fillStyle = "rgba(50,45,40,0.45)";
    for (let y = 0; y < 256; y += 64) c.fillRect(0, y, 256, 3);
    for (let y = 0; y < 256; y += 64)
      for (let x = (y / 64) % 2 ? 64 : 0; x < 256; x += 128) c.fillRect(x, y, 3, 64);
  });
  group.add(
    buildPortal(length, {
      facade: new THREE.MeshStandardMaterial({ map: facadeTex, roughness: 0.9 }),
      cornice: new THREE.MeshStandardMaterial({ color: 0x55585d, roughness: 0.7, metalness: 0.2 }),
      frame: new THREE.MeshBasicMaterial({ color: 0xffe2a8, toneMapped: false }),
      header: signMat(headerTex),
    }),
  );
  group.add(buildMountain(length));
  return group;
}
