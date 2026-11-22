/**
 * Detailed procedural roadside scenery: two tree species (broadleaf and
 * conifer) with sculpted, vertex-shaded canopies and per-tree colour, and a
 * city of varied buildings (glass towers, offices, residential blocks, brick)
 * whose façade textures keep real-world window proportions at any size, with
 * lobbies, roof slabs, rooftop plant and aviation lights.
 */
import * as THREE from "three";
import { mergeGeometries, mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";

const rnd = (n: number) => {
  const t = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return t - Math.floor(t);
};
const noise = (x: number, y: number, z: number) =>
  Math.sin(x * 1.7 + y * 2.3) * Math.sin(y * 1.3 + z * 2.9) * Math.sin(z * 1.9 + x * 1.1) +
  0.5 * Math.sin(x * 4.1 - z * 3.7 + y * 2.2);

function withColor(g: THREE.BufferGeometry, shade: (x: number, y: number, z: number, i: number) => number) {
  const p = g.attributes["position"] as THREE.BufferAttribute;
  const col: number[] = [];
  for (let i = 0; i < p.count; i++) {
    const v = shade(p.getX(i), p.getY(i), p.getZ(i), i);
    col.push(v, v, v);
  }
  g.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
  return g;
}

function clean(g: THREE.BufferGeometry) {
  g.deleteAttribute("uv");
  g.deleteAttribute("normal");
  return mergeVertices(g);
}

function blob(r: number, x: number, y: number, z: number, seed: number) {
  const g = clean(new THREE.IcosahedronGeometry(r, 2));
  const p = g.attributes["position"] as THREE.BufferAttribute;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = noise(v.x * 1.3 + seed, v.y * 1.3, v.z * 1.3 - seed);
    v.multiplyScalar(1 + n * 0.2);
    if (v.y < -r * 0.35) v.y = -r * 0.35 + (v.y + r * 0.35) * 0.45;
    p.setXYZ(i, v.x + x, v.y + y, v.z + z);
  }
  return g;
}

function broadleaf() {
  const trunk = mergeGeometries([
    new THREE.CylinderGeometry(0.16, 0.3, 3.6, 8).translate(0, 1.8, 0),
    new THREE.CylinderGeometry(0.07, 0.13, 2.0, 6).rotateZ(0.75).translate(0.6, 3.3, 0),
    new THREE.CylinderGeometry(0.06, 0.12, 1.8, 6).rotateZ(-0.7).rotateY(2.1).translate(-0.3, 3.1, 0.45),
  ].map((g) => g.toNonIndexed()));
  const parts: [number, number, number, number][] = [
    [2.0, 0, 5.0, 0],
    [1.55, 1.25, 4.4, 0.4],
    [1.5, -1.15, 4.6, -0.5],
    [1.4, 0.2, 4.3, 1.3],
    [1.35, -0.3, 4.5, -1.25],
    [1.3, 0.35, 6.2, 0.2],
  ];
  const foliage = mergeGeometries(parts.map(([r, x, y, z], i) => blob(r, x, y, z, i * 2.7)));
  withColor(foliage, (x, y, z, i) => {
    const h = Math.min(1, Math.max(0, (y - 3.2) / 4));
    return 0.42 + h * 0.62 + (rnd(i * 0.73) - 0.5) * 0.14 + noise(x * 2, y * 2, z * 2) * 0.05;
  });
  foliage.computeVertexNormals();
  return { trunk: trunk ?? new THREE.BufferGeometry(), foliage };
}

function conifer() {
  const trunk = new THREE.CylinderGeometry(0.12, 0.26, 3.4, 7).translate(0, 1.7, 0);
  const tiers: THREE.BufferGeometry[] = [];
  const n = 7;
  for (let t = 0; t < n; t++) {
    const r = 2.5 * (1 - t / (n + 0.6)) + 0.25;
    const h = 2.3 - t * 0.12;
    const g = clean(new THREE.ConeGeometry(r, h, 14, 3, true));
    const p = g.attributes["position"] as THREE.BufferAttribute;
    for (let i = 0; i < p.count; i++) {
      let x = p.getX(i);
      let y = p.getY(i);
      let z = p.getZ(i);
      if (y < -h / 2 + 0.01) {
        const a = Math.atan2(z, x);
        const k = 1 + 0.16 * Math.sin(a * 7 + t * 1.3);
        x *= k;
        z *= k;
        y -= 0.22 * (0.5 + 0.5 * Math.sin(a * 7 + t));
      }
      const jitter = 1 + noise(x * 2 + t, y * 2, z * 2) * 0.05;
      p.setXYZ(i, x * jitter, y + 1.7 + t * 1.02 + h / 2, z * jitter);
    }
    tiers.push(g);
  }
  const foliage = mergeGeometries(tiers);
  withColor(foliage, (x, y, z, i) => {
    const out = Math.min(1, Math.hypot(x, z) / 2.4);
    return 0.38 + out * 0.5 + Math.min(0.25, (y - 1.7) / 30) + (rnd(i * 1.37) - 0.5) * 0.12;
  });
  foliage.computeVertexNormals();
  return { trunk, foliage };
}

export type TreeSet = {
  kinds: { trunk: THREE.InstancedMesh; foliage: THREE.InstancedMesh; n: number }[];
  add(kind: number, m: THREE.Matrix4, seed: number): void;
  commit(): void;
};

const GREENS = [0x3f7a2c, 0x4f8a33, 0x356b29, 0x5d8f3a, 0x6d9a3f, 0x2f5e25];
const PINES = [0x24502a, 0x2c5a30, 0x1f4626, 0x33633a];

export function createTrees(scene: THREE.Scene, capacity: number): TreeSet {
  const bark = new THREE.MeshStandardMaterial({ color: 0x5b4433, roughness: 0.95 });
  const leaves = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.82, side: THREE.DoubleSide });
  const kinds = [broadleaf(), conifer()].map((g) => {
    const trunk = new THREE.InstancedMesh(g.trunk, bark, capacity);
    const foliage = new THREE.InstancedMesh(g.foliage, leaves, capacity);
    for (const m of [trunk, foliage]) {
      m.frustumCulled = false;
      m.count = 0;
      m.castShadow = true;
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    }
    foliage.setColorAt(0, new THREE.Color());
    scene.add(trunk, foliage);
    return { trunk, foliage, n: 0 };
  });
  const c = new THREE.Color();
  return {
    kinds,
    add(kind, m, seed) {
      const k = kinds[kind];
      if (!k || k.n >= capacity) return;
      k.trunk.setMatrixAt(k.n, m);
      k.foliage.setMatrixAt(k.n, m);
      const pal = kind === 0 ? GREENS : PINES;
      c.setHex(pal[Math.floor(rnd(seed) * pal.length)] ?? 0x3f7a2c).multiplyScalar(1.6 + rnd(seed * 3.1) * 0.5);
      k.foliage.setColorAt(k.n, c);
      k.n++;
    },
    commit() {
      for (const k of kinds) {
        k.trunk.count = k.foliage.count = k.n;
        k.trunk.instanceMatrix.needsUpdate = k.foliage.instanceMatrix.needsUpdate = true;
        if (k.foliage.instanceColor) k.foliage.instanceColor.needsUpdate = true;
        k.n = 0;
      }
    },
  };
}

// ---------------------------------------------------------------- buildings

const TILE_W = 12;
const TILE_H = 13.2; // four 3.3 m storeys per texture tile

function canvas(w: number, h: number, draw: (c: CanvasRenderingContext2D) => void, srgb = true) {
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

type Style = {
  wall: string;
  wallVar: string[];
  glass: [string, string];
  cols: number;
  frame: (c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) => void;
  win: [number, number, number, number]; // inset x, inset y, width, height as fractions of a bay
  roughness: number;
  metalness: number;
};

const STYLES: Style[] = [
  {
    // glass curtain-wall tower
    wall: "#2d3b46",
    wallVar: ["#33424e", "#2a3741"],
    glass: ["#5d86a3", "#9fc3d8"],
    cols: 6,
    frame: (c, x, y, w, h) => {
      c.fillStyle = "#c9d3da";
      c.fillRect(x, y + h - 6, w, 6);
    },
    win: [0.04, 0.06, 0.92, 0.82],
    roughness: 0.12,
    metalness: 0.65,
  },
  {
    // white office with ribbon windows
    wall: "#e4e1da",
    wallVar: ["#ebe8e1", "#d9d6cf"],
    glass: ["#30465a", "#5c7b93"],
    cols: 4,
    frame: (c, x, y, w, h) => {
      c.fillStyle = "rgba(0,0,0,0.12)";
      c.fillRect(x, y + h * 0.62, w, 3);
    },
    win: [0.0, 0.12, 1.0, 0.5],
    roughness: 0.55,
    metalness: 0.15,
  },
  {
    // residential block with balconies
    wall: "#d9c3a0",
    wallVar: ["#e0cba9", "#cdb692", "#d4bd98"],
    glass: ["#263646", "#4a6378"],
    cols: 4,
    frame: (c, x, y, w, h) => {
      c.fillStyle = "#f1ede6";
      c.fillRect(x + w * 0.08, y + h * 0.74, w * 0.84, h * 0.07);
      c.strokeStyle = "rgba(70,70,70,0.9)";
      c.lineWidth = 2;
      c.beginPath();
      c.moveTo(x + w * 0.08, y + h * 0.6);
      c.lineTo(x + w * 0.92, y + h * 0.6);
      for (let i = 0; i <= 8; i++) {
        const xx = x + w * (0.08 + (0.84 * i) / 8);
        c.moveTo(xx, y + h * 0.6);
        c.lineTo(xx, y + h * 0.74);
      }
      c.stroke();
    },
    win: [0.2, 0.18, 0.6, 0.5],
    roughness: 0.85,
    metalness: 0.02,
  },
  {
    // brick mid-rise
    wall: "#9a5a43",
    wallVar: ["#a4624a", "#8c4f3a", "#955841"],
    glass: ["#1f2b36", "#405567"],
    cols: 4,
    frame: (c, x, y, w, h) => {
      c.fillStyle = "#d8d0c4";
      c.fillRect(x + w * 0.18, y + h * 0.7, w * 0.64, h * 0.05);
      c.fillRect(x + w * 0.18, y + h * 0.14, w * 0.64, h * 0.04);
    },
    win: [0.24, 0.18, 0.52, 0.52],
    roughness: 0.9,
    metalness: 0.02,
  },
];

function facade(style: Style, seed: number) {
  const S = 512;
  const rows = 4;
  const bw = S / style.cols;
  const bh = S / rows;
  const lit: [number, number, number, number][] = [];
  const map = canvas(S, S, (c) => {
    c.fillStyle = style.wall;
    c.fillRect(0, 0, S, S);
    for (let i = 0; i < 7000; i++) {
      c.fillStyle = style.wallVar[i % style.wallVar.length] ?? style.wall;
      c.fillRect(rnd(i + seed) * S, rnd(i * 1.9 + seed) * S, 1 + rnd(i * 3.1) * 2, 1 + rnd(i * 4.3) * 2);
    }
    if (style === STYLES[3])
      for (let y = 0; y < S; y += 8)
        for (let x = (y / 8) % 2 ? 0 : 10; x < S; x += 20) {
          c.fillStyle = "rgba(40,20,14,0.25)";
          c.fillRect(x, y, 1.5, 8);
          c.fillRect(0, y, S, 1.2);
        }
    for (let r = 0; r < rows; r++)
      for (let k = 0; k < style.cols; k++) {
        const x = k * bw;
        const y = r * bh;
        const [ix, iy, iw, ih] = style.win;
        const wx = x + bw * ix;
        const wy = y + bh * iy;
        const ww = bw * iw;
        const wh = bh * ih;
        const g = c.createLinearGradient(wx, wy, wx + ww * 0.4, wy + wh);
        const shade = rnd(r * 13 + k * 7 + seed);
        g.addColorStop(0, style.glass[1]);
        g.addColorStop(1, style.glass[0]);
        c.fillStyle = g;
        c.fillRect(wx, wy, ww, wh);
        c.fillStyle = `rgba(0,0,0,${0.1 + shade * 0.25})`;
        c.fillRect(wx, wy, ww, wh);
        // mullions
        c.fillStyle = "rgba(25,28,32,0.85)";
        c.fillRect(wx, wy, ww, 2);
        c.fillRect(wx + ww / 2 - 1, wy, 2, wh);
        if (shade > 0.6) {
          // curtains
          c.fillStyle = "rgba(235,228,210,0.55)";
          c.fillRect(wx + 3, wy + 3, ww * 0.22, wh - 6);
        }
        style.frame(c, x, y, bw, bh);
        if (rnd(r * 5.3 + k * 11.1 + seed * 2) > 0.58) lit.push([wx, wy, ww, wh]);
      }
  });
  const emissive = canvas(S, S, (c) => {
    c.fillStyle = "#000";
    c.fillRect(0, 0, S, S);
    lit.forEach(([x, y, w, h], i) => {
      const warm = rnd(i * 2.2 + seed) > 0.3;
      c.fillStyle = warm ? "#ffd59a" : "#cfe6ff";
      c.globalAlpha = 0.55 + rnd(i * 4.4) * 0.45;
      c.fillRect(x + 2, y + 2, w - 4, h - 4);
    });
    c.globalAlpha = 1;
  });
  return { map, emissive };
}

/** Façade UVs in metres so windows keep their size whatever the building's scale. */
function metricFacade(mat: THREE.MeshStandardMaterial) {
  mat.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace(
      "#include <uv_vertex>",
      `#include <uv_vertex>
#ifdef USE_INSTANCING
  vec3 bScale = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
  vec2 faceM = abs(normal.x) > 0.5 ? vec2(bScale.z, bScale.y) : (abs(normal.z) > 0.5 ? vec2(bScale.x, bScale.y) : vec2(0.0));
  float bayShift = floor(fract(sin(instanceMatrix[3].x * 12.9898) * 43758.5453) * 4.0) * 0.25;
  vec2 facadeUv = uv * faceM / vec2(${TILE_W.toFixed(1)}, ${TILE_H.toFixed(1)}) + vec2(bayShift, 0.0);
  #ifdef USE_MAP
    vMapUv = facadeUv;
  #endif
  #ifdef USE_EMISSIVEMAP
    vEmissiveMapUv = facadeUv;
  #endif
#endif`,
    );
  };
  mat.customProgramCacheKey = () => "metric-facade";
}

export type City = {
  place(x: number, z: number, w: number, h: number, d: number, seed: number): void;
  commit(night: number): void;
};

export function createCity(scene: THREE.Scene, capacity: number): City {
  const box = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
  const styles = STYLES.map((st, i) => {
    const { map, emissive } = facade(st, i * 17.3);
    const mat = new THREE.MeshStandardMaterial({
      map,
      emissiveMap: emissive,
      emissive: 0xffffff,
      emissiveIntensity: 0,
      roughness: st.roughness,
      metalness: st.metalness,
    });
    metricFacade(mat);
    const mesh = new THREE.InstancedMesh(box, mat, capacity * 2);
    mesh.frustumCulled = false;
    mesh.count = 0;
    mesh.castShadow = mesh.receiveShadow = true;
    scene.add(mesh);
    return { mesh, mat, n: 0 };
  });
  const mk = (geo: THREE.BufferGeometry, mat: THREE.Material, cap: number) => {
    const m = new THREE.InstancedMesh(geo, mat, cap);
    m.frustumCulled = false;
    m.count = 0;
    scene.add(m);
    return { mesh: m, n: 0 };
  };
  const lobbyMat = new THREE.MeshStandardMaterial({
    color: 0x1d252c,
    roughness: 0.15,
    metalness: 0.7,
    emissive: 0xffc98a,
    emissiveIntensity: 0,
  });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x6b6e72, roughness: 0.85 });
  const plantMat = new THREE.MeshStandardMaterial({ color: 0xa7acb0, roughness: 0.5, metalness: 0.5 });
  const beaconMat = new THREE.MeshBasicMaterial({ color: 0xff2a1a, toneMapped: false });
  const lobby = mk(box, lobbyMat, capacity);
  const roof = mk(new THREE.BoxGeometry(1, 1, 1), roofMat, capacity * 2);
  const plant = mk(box, plantMat, capacity * 3);
  const beacon = mk(new THREE.BoxGeometry(0.5, 0.5, 0.5), beaconMat, capacity);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const p = new THREE.Vector3();
  const s = new THREE.Vector3();
  const put = (o: { mesh: THREE.InstancedMesh; n: number }, x: number, y: number, z: number, sx: number, sy: number, sz: number) => {
    if (o.n >= o.mesh.instanceMatrix.count) return;
    m.compose(p.set(x, y, z), q, s.set(sx, sy, sz));
    o.mesh.setMatrixAt(o.n++, m);
  };
  let time = 0;
  return {
    place(x, z, w, h, d, seed) {
      const st = styles[Math.floor(rnd(seed * 1.7) * styles.length)] ?? styles[0];
      if (!st) return;
      const podium = 4.2;
      put(lobby, x, 0, z, w + 0.6, podium, d + 0.6);
      put(st, x, podium, z, w, h - podium, d);
      let top = h;
      let tw = w;
      let td = d;
      if (h > 36 && rnd(seed * 5.1) > 0.35) {
        // setback crown
        tw = w * 0.68;
        td = d * 0.7;
        const ch = 6.6 + rnd(seed * 2.3) * 13.2;
        put(st, x, h, z, tw, ch, td);
        put(roof, x, h + 0.2, z, w + 0.3, 0.4, d + 0.3);
        top = h + ch;
      }
      put(roof, x, top + 0.3, z, tw + 0.4, 0.6, td + 0.4);
      put(plant, x - tw * 0.2, top + 0.6, z + td * 0.15, 2.6, 1.8, 2.2);
      put(plant, x + tw * 0.22, top + 0.6, z - td * 0.2, 1.8, 2.6, 1.8);
      put(plant, x + tw * 0.05, top + 0.6, z + td * 0.28, 3.4, 1.0, 1.4);
      if (top > 40) put(beacon, x, top + 3.6, z, 1, 1, 1);
    },
    commit(night) {
      time += 1 / 60;
      for (const st of styles) {
        st.mesh.count = st.n;
        st.mesh.instanceMatrix.needsUpdate = true;
        st.mat.emissiveIntensity = night * 1.35;
        st.n = 0;
      }
      for (const o of [lobby, roof, plant, beacon]) {
        o.mesh.count = o.n;
        o.mesh.instanceMatrix.needsUpdate = true;
        o.n = 0;
      }
      lobbyMat.emissiveIntensity = 0.05 + night * 0.9;
      beacon.mesh.visible = Math.sin(time * 4) > -0.2;
    },
  };
}
