// @ts-nocheck
/* eslint-disable */
// Ported from the original Supercar Highway Dash build.
import {
  Box3 as e,
  BoxGeometry as t,
  BufferAttribute as n,
  BufferGeometry as r,
  CanvasTexture as i,
  CatmullRomCurve3 as a,
  CircleGeometry as o,
  ClampToEdgeWrapping as s,
  Color as c,
  ConeGeometry as l,
  CylinderGeometry as u,
  DirectionalLight as d,
  DynamicDrawUsage as f,
  Euler as p,
  Float32BufferAttribute as m,
  Fog as h,
  Group as g,
  HemisphereLight as _,
  InstancedMesh as v,
  LineBasicMaterial as y,
  LineSegments as b,
  Matrix4 as x,
  Mesh as S,
  MeshBasicMaterial as C,
  MeshStandardMaterial as w,
  Object3D as T,
  PMREMGenerator as E,
  PerspectiveCamera as D,
  Plane as O,
  PlaneGeometry as k,
  PointLight as A,
  Quaternion as j,
  Raycaster as ee,
  RepeatWrapping as M,
  SRGBColorSpace as N,
  Scene as te,
  ShaderMaterial as ne,
  SpotLight as re,
  Sprite as ie,
  SpriteMaterial as ae,
  TextureLoader as oe,
  TubeGeometry as se,
  Vector2 as ce,
  Vector3 as P,
  WebGLRenderer as le,
} from "three";
import { l as ue } from "./car-custom";
import { applyCarCustom as de } from "./car-paint";
import {
  fetchGlb as fe,
  i as pe,
  loadCar as me,
  n as he,
  parseGlb as ge,
  r as _e,
  t as ve,
  trimChironForTrack as ye,
} from "./models3d";
import {
  D as be,
  E as xe,
  O as F,
  T as Se,
  _ as Ce,
  a as we,
  b as Te,
  c as I,
  d as L,
  f as Ee,
  g as De,
  h as R,
  i as Oe,
  l as ke,
  m as Ae,
  n as je,
  o as Me,
  p as z,
  r as Ne,
  s as Pe,
  t as Fe,
  u as B,
  v as Ie,
  w as Le,
  x as Re,
  y as ze,
  z as Be,
} from "./world";
import { n as Ve, t as He } from "./quality";
import { buildTwinTunnel, sweep as tunnelSweep } from "./twin-tunnel";
import { createCity, createTrees } from "./scenery";
import {
  BRIDGE_END,
  BRIDGE_START,
  DUAL_START,
  MEDIAN_X,
  OPP_RAIL_X,
  OPP_ROAD_INNER,
  OPP_ROAD_OUTER,
  TUNNEL_START,
  hasOppositeRoad,
  inSpan,
  isDualHighway,
  oncomingTraffic,
  spanCamera,
} from "./highway-layout";
var Ue = () => ({
    roll: 0,
    rollV: 0,
    pitch: 0,
    pitchV: 0,
    lastRot: 0,
    lastSpeed: 0,
  }),
  We = 0.55,
  Ge = 0.045,
  Ke = 0.03,
  qe = 90,
  Je = 13;
function Ye(e, t, n, r, i) {
  let a = Math.min(i, 0.05);
  if (a <= 0) return e;
  let o = (n - e.lastSpeed) / a,
    s = Math.min(1, n / 120),
    c = V(t * We * s, -0.045, Ge),
    l = V((r ? -0.022 : 0) + V(o / 60, -1, 1) * 0.008, -0.03, Ke),
    u = e.rollV + (qe * (c - e.roll) - Je * e.rollV) * a,
    d = e.pitchV + (qe * (l - e.pitch) - Je * e.pitchV) * a;
  return {
    roll: V(e.roll + u * a, -0.045 * 1.3, Ge * 1.3),
    rollV: u,
    pitch: V(e.pitch + d * a, -0.039, Ke * 1.3),
    pitchV: d,
    lastRot: t,
    lastSpeed: n,
  };
}
function V(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var Xe = () => ({
    x: 0,
    vx: 0,
    z: 0,
    vz: 0,
    y: 0,
    vy: 0,
    yaw: 0,
    roll: 0,
    pitch: 0,
    lastRot: 0,
    lastSpeed: 0,
    t: 0,
  }),
  H = {
    STIFF: 55,
    DAMP: 11,
    LAT_PER_G: 0.045,
    LONG_PER_G: 0.045,
    MAX_LAT: 0.07,
    MAX_LONG: 0.06,
    MAX_BACK: 0.012,
    LOOK_INTO_TURN: 0.16,
    LOOK_RATE: 4.5,
    TILT_PER_M: 0.9,
    NOD_PER_M: 0.55,
    BUZZ: 0.0028,
    BUMP: 0.012,
  },
  Ze = 9.81,
  Qe = 1 / 240;
function $e(e, t) {
  let n = Math.min(t.dt, 0.05);
  if (n <= 0) return e;
  let r = t.speedKmh / 3.6,
    i = U(
      (t.speedKmh - e.lastSpeed) / 3.6 / n / Ze + (t.braking ? -0.35 : 0),
      -1.6,
      1.4,
    ),
    a = U(
      -U(
        (r * ((t.rot - e.lastRot) / n)) / Ze +
          t.rot * Math.min(1, t.speedKmh / 140) * 1.2,
        -1.5,
        1.5,
      ) * H.LAT_PER_G,
      -H.MAX_LAT,
      H.MAX_LAT,
    ),
    o = U(i * H.LONG_PER_G, -H.MAX_LONG, H.MAX_BACK),
    s = Math.ceil(n / Qe),
    c = n / s,
    { x: l, vx: u, z: d, vz: f, y: p, vy: m, t: h } = e,
    g = Math.min(1, t.speedKmh / 320);
  for (let e = 0; e < s; e++) {
    ((u += (H.STIFF * (a - l) - H.DAMP * u) * c),
      (f += (H.STIFF * (o - d) - H.DAMP * f) * c),
      (l += u * c),
      (d = Math.min(H.MAX_BACK, d + f * c)),
      d >= H.MAX_BACK && f > 0 && (f = 0),
      (h += c));
    let e =
        H.BUZZ *
        g *
        (Math.sin(h * 37.1) * 0.6 + Math.sin(h * 23.3 + 1.3) * 0.4),
      n = H.BUMP * t.shake * Math.sin(h * 61.7);
    ((m += (420 * (e + n - p) - 30 * m) * c), (p += m * c));
  }
  let _ =
      -U(t.steer, -1, 1) *
      H.LOOK_INTO_TURN *
      (0.35 + 0.65 * Math.min(1, t.speedKmh / 60)),
    v = e.yaw + (_ - e.yaw) * (1 - Math.exp(-H.LOOK_RATE * n)),
    y = -l * H.TILT_PER_M,
    b = d * H.NOD_PER_M;
  return {
    x: l,
    vx: u,
    z: d,
    vz: f,
    y: p,
    vy: m,
    yaw: v,
    roll: y,
    pitch: b,
    lastRot: t.rot,
    lastSpeed: t.speedKmh,
    t: h,
  };
}
function U(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var et = `/__l5e/assets-v1/1738f48b-4b5b-40f3-9394-4deac3d77c82/highway-sky-BGIxHKeS.jpg`,
  tt = `/__l5e/assets-v1/7fc54a54-15ed-41b1-baa2-658760d049ca/highway-asphalt-CTjUyYqg.jpg`;
async function nt(e) {
  let t = new oe(),
    [n, r] = await Promise.all([t.loadAsync(et), t.loadAsync(tt)]);
  ((n.colorSpace = r.colorSpace = N), (n.mapping = 303));
  let a = new E(e),
    o = a.fromEquirectangular(n),
    s = (e) => {
      let t = document.createElement(`canvas`);
      ((t.width = 512), (t.height = 256));
      let n = t.getContext(`2d`);
      if (!n) throw Error(`Reflection canvas unavailable`);
      let r = n.createLinearGradient(0, 0, 0, 256);
      if (
        (r.addColorStop(0, e ? `#292724` : `#101c30`),
        r.addColorStop(0.5, e ? `#4a4236` : `#344255`),
        r.addColorStop(0.65, `#17191c`),
        r.addColorStop(1, `#080a0d`),
        (n.fillStyle = r),
        n.fillRect(0, 0, 512, 256),
        e)
      ) {
        n.fillStyle = `#e6c69d`;
        for (let e = 20; e < 512; e += 64) n.fillRect(e, 55, 28, 6);
      }
      let o = new i(t);
      ((o.colorSpace = N), (o.mapping = 303));
      let s = a.fromEquirectangular(o);
      return (o.dispose(), s);
    },
    c = s(!1),
    l = s(!0);
  return (a.dispose(), { sky: n, asphalt: r, day: o, night: c, tunnel: l });
}
function rt() {
  let e = document.createElement(`canvas`);
  ((e.width = 128), (e.height = 256));
  let t = e.getContext(`2d`);
  if (!t) throw Error(`Contact canvas unavailable`);
  let n = t.createImageData(128, 256);
  for (let e = 0; e < 256; e++)
    for (let t = 0; t < 128; t++) {
      let r = (t - 64) / 64,
        i = (e - 128) / 128,
        a = Math.exp(-3.4 * ((r / 0.82) ** 4 + (i / 0.82) ** 4)),
        o = 0;
      for (let e of [-0.77, 0.77])
        for (let t of [-0.62, 0.62])
          o += Math.exp(-((r - e) ** 2 / 0.022 + (i - t) ** 2 / 0.015));
      n.data[(e * 128 + t) * 4 + 3] = Math.min(230, a * 170 + o * 150);
    }
  t.putImageData(n, 0, 0);
  let r = new i(e);
  return ((r.colorSpace = N), r);
}
var W = (e) => e.flatMap((e) => [e, { ...e, x: -e.x }]),
  it = {
    bugatti: {
      front: W(
        [0.42, 0.52, 0.62, 0.72].map((e, t) => ({
          x: e,
          y: 0.5 + t * 0.012,
          w: 0.07,
          h: 0.06,
        })),
      ),
      rear: [
        { x: 0, y: 0.66, w: 1.7, h: 0.035 },
        ...W([{ x: 0.85, y: 0.6, w: 0.035, h: 0.16 }]),
      ],
    },
    ferrari: {
      front: W([{ x: 0.66, y: 0.52, w: 0.42, h: 0.035, tilt: 0.18 }]),
      rear: W([
        { x: 0.55, y: 0.6, w: 0.17, h: 0.06 },
        { x: 0.76, y: 0.6, w: 0.17, h: 0.06 },
      ]),
    },
    porsche: {
      front: W([{ x: 0.66, y: 0.58, w: 0.2, h: 0.2, round: !0 }]),
      rear: [{ x: 0, y: 0.7, w: 1.6, h: 0.035 }],
    },
    mustang: {
      front: W([
        { x: 0.68, y: 0.6, w: 0.3, h: 0.05, tilt: 0.12 },
        ...[0.6, 0.68, 0.76].map((e) => ({
          x: e,
          y: 0.52,
          w: 0.03,
          h: 0.07,
          tilt: 0.4,
        })),
      ]),
      rear: W([0.5, 0.6, 0.7].map((e) => ({ x: e, y: 0.6, w: 0.05, h: 0.14 }))),
    },
    bmw: {
      front: W([
        { x: 0.66, y: 0.58, w: 0.28, h: 0.035 },
        { x: 0.66, y: 0.53, w: 0.24, h: 0.03 },
      ]),
      rear: W([
        { x: 0.7, y: 0.66, w: 0.32, h: 0.04 },
        { x: 0.84, y: 0.61, w: 0.04, h: 0.12 },
      ]),
    },
  },
  at = {
    front: W([{ x: 0.7, y: 0.5, w: 0.3, h: 0.12 }]),
    rear: W([{ x: 0.75, y: 0.55, w: 0.22, h: 0.12 }]),
  },
  ot = (e) => it[e] ?? at;
function st(e) {
  return { front: e ? 1 : 0.18, rear: +!!e, glow: +!!e };
}
function ct(e, t, n = 0) {
  if (t < 0.08) return 0;
  let r = t > 0.55 ? 2.4 : 1.4;
  return ((Math.sin((e + n) * r * Math.PI) + 1) / 2) * 1.75;
}
var lt = null;
function ut() {
  if (lt) return lt;
  let e = document.createElement(`canvas`);
  e.width = e.height = 64;
  let t = e.getContext(`2d`),
    n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
  return (
    n.addColorStop(0, `rgba(255,255,255,1)`),
    n.addColorStop(0.35, `rgba(255,255,255,0.45)`),
    n.addColorStop(1, `rgba(255,255,255,0)`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 64, 64),
    (lt = new i(e)),
    lt
  );
}
function dt(e, t) {
  e.updateMatrixWorld(!0);
  let n = [];
  return (
    e.traverse((e) => {
      let r = e;
      if (!r.isMesh || e.parent?.name === `active-wing`) return;
      let i = Array.isArray(r.material) ? r.material : [r.material];
      if (!t(`${r.name} ${i.map((e) => e.name).join(` `)}`.toLowerCase()))
        return;
      let a = r.geometry.getAttribute(`position`),
        o = r.geometry.getIndex(),
        s = o ? o.count : a.count,
        c = (e) =>
          new P()
            .fromBufferAttribute(a, o ? o.getX(e) : e)
            .applyMatrix4(r.matrixWorld);
      for (let e = 0; e + 2 < s; e += 3) {
        let t = c(e),
          r = c(e + 1),
          i = c(e + 2),
          a = new P().subVectors(r, t).cross(new P().subVectors(i, t)),
          o = a.length() / 2;
        o < 1e-7 ||
          n.push({
            a: t,
            b: r,
            c: i,
            n: a.normalize(),
            area: o,
            center: t.clone().add(r).add(i).divideScalar(3),
          });
      }
    }),
    n
  );
}
var ft = (e) =>
    /window|windshield|windscreen|glass/.test(e) &&
    !/light|red|lamp|mirror/.test(e),
  pt = (e) =>
    /light|lamp|red_glass|redglass/.test(e) && !/amber|beacon|window/.test(e);
function mt(e, t) {
  let n = t.getSize(new P()),
    r = n.x / 2,
    i = (t.min.z + t.max.z) / 2,
    a = dt(e, ft).filter((e) => {
      let t = e.n.z > 0 ? e.n.clone().negate() : e.n;
      return (
        e.center.z < i &&
        t.z < -0.3 &&
        Math.abs(e.center.x) < r * 0.55 &&
        e.center.y > n.y * 0.35
      );
    });
  if (a.length) {
    let e = new P(),
      t = 1 / 0,
      n = 0,
      i = 0;
    for (let o of a) {
      let a = o.n.z > 0 ? o.n.clone().negate() : o.n;
      e.addScaledVector(a, o.area);
      for (let e of [o.a, o.b, o.c])
        ((i = Math.max(i, Math.abs(e.x))),
          Math.abs(e.x) < r * 0.4 && e.y < t && ((t = e.y), (n = e.z)));
    }
    if (!Number.isFinite(t))
      for (let e of a)
        for (let r of [e.a, e.b, e.c]) r.y < t && ((t = r.y), (n = r.z));
    (e.normalize(), console.log(`WSDBG`, t, n, e.toArray(), a.length));
    let o = Math.atan2(Math.max(e.y, 0), -e.z),
      s = new P(0, Math.cos(o), Math.sin(o)),
      c = new P(0, t, n).addScaledVector(s, 0.035).addScaledVector(e, 0.018);
    return {
      baseZ: c.z,
      baseY: c.y,
      halfW: Math.min(i, r),
      tilt: o,
      found: !0,
    };
  }
  let o = new ee(),
    s = new P(0, -1, 0),
    c = n.x * 0.12,
    l = (n) => {
      o.set(new P(c, t.max.y + 1, n), s);
      let r = o.intersectObject(e, !0)[0];
      return r ? r.point.y : null;
    };
  for (let e = t.min.z + n.z * 0.12; e < i + n.z * 0.1; e += 0.04) {
    let t = l(e),
      i = l(e + 0.12);
    if (t === null || i === null) continue;
    let a = (i - t) / 0.12;
    if (
      (console.log(`WSP`, e.toFixed(2), t.toFixed(3), a.toFixed(2)),
      a > 0.7 && t > n.y * 0.45)
    ) {
      let n = Math.atan2(1, a),
        i = new P(0, Math.sin(n), -Math.cos(n)),
        o = new P(0, Math.cos(n), Math.sin(n)),
        s = new P(0, t, e).addScaledVector(o, 0.06).addScaledVector(i, 0.018);
      return { baseZ: s.z, baseY: s.y, halfW: r * 0.62, tilt: n, found: !0 };
    }
  }
  return {
    baseZ: t.min.z + n.z * 0.3,
    baseY: n.y * 0.66,
    halfW: r,
    tilt: 1.05,
    found: !1,
  };
}
function ht(t, i, a) {
  let o = i.max.z - i.min.z,
    s = Math.min(o * 0.25, 1.4),
    c = dt(t, pt).filter((e) =>
      a ? e.center.z > i.max.z - s : e.center.z < i.min.z + s,
    );
  if (c.length < 4) return null;
  let l = new Float32Array(c.length * 9);
  c.forEach((e, t) => {
    let n = e.n.clone().multiplyScalar(0.004);
    [e.a, e.b, e.c].forEach((e, r) =>
      e
        .clone()
        .add(n)
        .toArray(l, t * 9 + r * 3),
    );
  });
  let u = new r();
  return (
    u.setAttribute(`position`, new n(l, 3)),
    {
      geo: u,
      sides: [-1, 1]
        .map((t) => {
          let n = new P(),
            r = new e(),
            i = 0;
          for (let e of c)
            Math.sign(e.center.x || 1) === t &&
              (n.addScaledVector(e.center, e.area),
              (i += e.area),
              r.expandByPoint(e.a).expandByPoint(e.b).expandByPoint(e.c));
          return i ? { c: n.divideScalar(i), size: r.getSize(new P()) } : null;
        })
        .filter((e) => !!e),
    }
  );
}
function gt(e, t, n, r, i, a, s = 1) {
  let c = new ee(),
    l = new P(0, 0, a ? -1 : 1),
    u = e.map((e) => {
      let u = e.round ? new o((e.w / 2) * s, 20) : new k(e.w * s, e.h * s);
      e.tilt && u.rotateZ(e.tilt * Math.sign(e.x || 1));
      let d = e.x * r,
        f = e.y * i;
      c.set(new P(d, f, a ? n.max.z + 1 : n.min.z - 1), l);
      let p = c.intersectObject(t, !0)[0],
        m = p
          ? p.point.z + (a ? 0.01 : -0.01)
          : a
            ? n.max.z - 0.05
            : n.min.z + 0.05;
      return (u.translate(d, f, m), u);
    });
  return pe(u) ?? u[0];
}
function _t(n, r, i, a) {
  let o = new e().setFromObject(r),
    s = (o.max.x - o.min.x) / 2,
    c = a ? Math.min(o.max.y, 1.35) : o.max.y,
    l = ot(n),
    u = (e, t, n = i) => {
      let r = new v(e, t, n);
      return (
        r.instanceMatrix.setUsage(f),
        (r.frustumCulled = !1),
        (r.count = 0),
        (r.renderOrder = 2),
        r
      );
    };
  r.updateMatrixWorld(!0);
  let d = ht(r, o, !1),
    p = ht(r, o, !0),
    m = (e) =>
      new C({
        color: e,
        toneMapped: !1,
        transparent: !0,
        side: 2,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2,
      }),
    h = u(d?.geo ?? gt(l.front, r, o, s, c, !1), m(15922943)),
    g = u(p?.geo ?? gt(l.rear, r, o, s, c, !0), m(16716294)),
    _ = (e) =>
      new C({
        color: e,
        map: ut(),
        transparent: !0,
        depthWrite: !1,
        blending: 2,
        toneMapped: !1,
        side: 2,
      }),
    y = (e, t, n) => {
      if (e?.sides.length) {
        let t = e.sides.map(({ c: e, size: t }) => {
          let r = Math.min(Math.max(t.x, 0.15) * 2.2 + 0.3, 1.4),
            i = Math.min(Math.max(t.y, 0.1) * 2.6 + 0.3, 0.9);
          return new k(r, i).translate(e.x, e.y, e.z + (n ? 0.06 : -0.06));
        });
        return pe(t) ?? t[0];
      }
      return gt(
        t.map((e) => ({
          ...e,
          w: Math.max(e.w, 0.12) * 2.6 + 0.3,
          h: Math.max(e.h, 0.12) * 2.6 + 0.3,
          round: !1,
          tilt: 0,
        })),
        r,
        o,
        s,
        c,
        n,
      );
    },
    b = u(y(d, l.front, !1), _(14674175)),
    x = u(y(p, l.rear, !0), _(16719888)),
    S = mt(r, o);
  console.log(
    `WS`,
    n,
    JSON.stringify(S),
    JSON.stringify(o.min.toArray()),
    JSON.stringify(o.max.toArray()),
  );
  let T = Math.min(0.62, S.halfW * 0.6) * (a ? 1.4 : 1),
    E = u(
      new t(T, 0.018, 0.025).translate(T / 2, 0.012, 0),
      new w({ color: 723724, roughness: 0.5, metalness: 0.3 }),
      i * 2,
    ),
    D = [
      new P(-S.halfW * 0.62, S.baseY, S.baseZ),
      new P(S.halfW * 0.02, S.baseY, S.baseZ),
    ],
    O = [h, g, b, x, E];
  return {
    front: h,
    rear: g,
    frontGlow: b,
    rearGlow: x,
    wipers: E,
    wiper: { pivots: D, tilt: S.found ? S.tilt : a ? 0.15 : S.tilt, length: T },
    all: O,
  };
}
var vt = new x(),
  yt = new j(),
  bt = new j(),
  xt = new p(),
  St = new P(1, 1, 1),
  Ct = new x();
function wt(e, t, n, r, i = Ct) {
  return (
    xt.set(n, 0, 0),
    yt.setFromEuler(xt),
    bt.setFromAxisAngle(new P(0, 0, 1), r * 0.95),
    yt.multiply(bt),
    vt.compose(t, yt, St),
    i.multiplyMatrices(e, vt)
  );
}
var Tt = {
  "mustang-rtr": { lamp: /LightB_Material1$/, tail: /^red_glass$/ },
  m2: { lamp: /LightD_Material1$/, tail: /^red_glass$/ },
  laferrari: { lamp: /^uv1MAT_Light1$|^glass_lishgt$/, tail: /^red_glass$/ },
  "huracan-evo": {
    lamp: /LightA_Material1$|^glass_light$|^emiss$/,
    tail: /^red_glass$/,
  },
  tourbillon: { lamp: /LightA_Material1$/, tail: /^red_glass$/ },
  "utopia-roadster": { lamp: /LightA_Material1$/, tail: /^utopiared_glass$/ },
  huayra: {
    lamp: /^pag_lights$|^pag_runninglight$/,
    tail: /^pag_taillight_L$/,
    brake: /^pag_brakelight$/,
  },
  demon: { lamp: /^lightglass$/, tail: /^redglass$/ },
  "chiron-ss300": {
    lamp: /^CSR2_Light$|^headlight$|^Park_light$/,
    tail: /^GlassRed$|^brake_park_light$/,
    brake: /^brake_light$/,
  },
  "m8-competition": {
    lamp: /^m8f92_lowbeam$|^m8f92_runninglight3$/,
    tail: /^m8f92_taillight$|^m8f92_glass_red$/,
  },
  "m4-competition": { lamp: /^m4car_emissive1$/, tail: /$^/ },
  jesko: { lamp: /^Lights$|^light_ref$/, tail: /^GlassRedMtl$/ },
  "voiture-noire": { lamp: /2019LightA_Material$/, tail: /^RED_GLASS$/ },
  revuelto: { lamp: /2024LightA_Material$/, tail: /^RED_GLASS$/ },
  svj: {
    lamp: /^svj_glow_pos$/,
    tail: /^svj_glow_back$/,
    brake: /^svj_glow_brake$/,
  },
};
function Et(e, t) {
  let n = Tt[e];
  return n
    ? n.brake?.test(t)
      ? `brake`
      : n.tail.test(t)
        ? `tail`
        : n.lamp.test(t)
          ? `lamp`
          : null
    : null;
}
var Dt = new Set([`svj`, `mustang-rtr`, `m2`, `revuelto`]);
function Ot(e, t, n = !1) {
  return {
    head: e ? 3.2 : n ? 0 : 0.5,
    tail: t ? 3 : e ? 1.6 : n ? 0 : 0.15,
    brake: t ? 4 : 0,
  };
}
var kt = [`chase`, `hood`, `cockpit`, `left`, `right`, `reverse`],
  At = {
    hood: {
      pos: { dx: 0, y: 1.06, z: -1.95 },
      look: { dx: 0, y: 0.85, z: -32 },
    },
    left: {
      pos: { dx: -4.6, y: 1.35, z: 2.4 },
      look: { dx: 0.9, y: 0.75, z: -7 },
    },
    right: {
      pos: { dx: 4.6, y: 1.35, z: 2.4 },
      look: { dx: -0.9, y: 0.75, z: -7 },
    },
    reverse: {
      pos: { dx: 0, y: 1.75, z: -8.2 },
      look: { dx: 0, y: 0.9, z: 26 },
    },
  };
function jt(e, t = !0) {
  let n = t ? kt : kt.filter((e) => e !== `cockpit`);
  return n[(n.indexOf(e) + 1) % n.length] ?? `chase`;
}
var Mt = new P(-0.4, 0.98, 0.1),
  G = `#f5c400`;
function Nt(e, t, n, r) {
  let a = document.createElement(`canvas`);
  ((a.width = n), (a.height = r));
  let o = new i(a);
  o.colorSpace = N;
  let s = new S(new k(e, t), new C({ map: o, toneMapped: !1 }));
  return (
    (s.userData.cabinOnly = !0),
    { canvas: a, ctx: a.getContext(`2d`), tex: o, mesh: s }
  );
}
var Pt = class {
  group = new g();
  cluster = Nt(0.3, 0.1, 768, 256);
  center = Nt(0.2, 0.125, 512, 320);
  gear = 0;
  acc = 1;
  rpm = Le;
  t = 0;
  constructor() {
    (this.cluster.mesh.position.set(-0.4, 0.83, -0.6),
      this.center.mesh.position.set(-0.08, 0.64, -0.46));
    for (let e of [this.cluster.mesh, this.center.mesh])
      (e.lookAt(Mt), this.group.add(e));
    this.group.name = `revuelto-dash`;
  }
  update(e, t, n) {
    ((this.t += n), (this.acc += n), (this.gear = xe(this.gear, e, t)));
    let r =
      Math.max(Le, Math.min(Se, be(this.gear, e))) + (t && e < 5 ? 2500 : 0);
    ((this.rpm += (r - this.rpm) * Math.min(1, n * 10)),
      !(this.acc < 1 / 20) &&
        ((this.acc = 0), this.drawCluster(e, t), this.drawCenter(e)));
  }
  drawCluster(e, t) {
    let { ctx: n, tex: r } = this.cluster;
    ((n.fillStyle = `#050505`), n.fillRect(0, 0, 768, 256));
    let i = Math.PI * 0.8,
      a = Math.PI * 2.2,
      o = this.rpm / Se;
    for (let e = 0; e < 40; e++) {
      let t = e / 40,
        r = i + (a - i) * t;
      ((n.strokeStyle = t < o ? (t > 0.85 ? `#ff2a1a` : G) : `#2a2a2a`),
        (n.lineWidth = 16),
        n.beginPath(),
        n.arc(384, 150, 120, r, r + ((a - i) / 40) * 0.7),
        n.stroke());
    }
    ((n.fillStyle = `#888`),
      (n.font = `bold 16px sans-serif`),
      (n.textAlign = `center`));
    for (let e = 0; e <= 9; e++) {
      let t = i + (a - i) * ((e * 1e3) / Se);
      if (e * 1e3 > 9500) break;
      n.fillText(String(e), 384 + Math.cos(t) * 92, 150 + Math.sin(t) * 92 + 6);
    }
    ((n.fillStyle = `#fff`),
      (n.font = `bold 72px sans-serif`),
      n.fillText(String(Math.round(e)), 384, 160),
      (n.font = `16px sans-serif`),
      (n.fillStyle = `#aaa`),
      n.fillText(`km/h`, 384, 184),
      (n.fillStyle = G),
      (n.font = `bold 40px sans-serif`),
      n.fillText(String(this.gear + 1), 384, 92),
      (n.textAlign = `left`),
      (n.fillStyle = G),
      (n.font = `bold 22px sans-serif`),
      n.fillText(`CORSA`, 30, 50),
      (n.fillStyle = `#aaa`),
      (n.font = `16px sans-serif`),
      n.fillText(`V12 + HPEV`, 30, 78));
    let s = 0.55 + 0.4 * Math.sin(this.t * 0.2);
    ((n.strokeStyle = `#555`),
      (n.lineWidth = 2),
      n.strokeRect(30, 100, 160, 16),
      (n.fillStyle = `#29c46a`),
      n.fillRect(32, 102, 156 * s, 12),
      (n.fillStyle = `#aaa`),
      n.fillText(`BATTERY ` + Math.round(s * 100) + `%`, 30, 140),
      (n.textAlign = `right`),
      (n.fillStyle = t ? G : `#666`),
      (n.font = `bold 22px sans-serif`),
      n.fillText(Math.round(this.rpm) + ` RPM`, 738, 50),
      (n.fillStyle = `#aaa`),
      (n.font = `16px sans-serif`),
      n.fillText(`OIL 108°C`, 738, 78),
      n.fillText(`TYRES OK`, 738, 104));
    let c = Math.min(1, Math.abs(e) / 350);
    ((n.strokeStyle = `#555`),
      n.strokeRect(578, 120, 160, 16),
      (n.fillStyle = G),
      n.fillRect(580, 122, 156 * c, 12),
      (r.needsUpdate = !0));
  }
  drawCenter(e) {
    let { ctx: t, tex: n } = this.center;
    ((t.fillStyle = `#0a0a0c`),
      t.fillRect(0, 0, 512, 320),
      (t.fillStyle = `#16161a`),
      t.fillRect(0, 0, 512, 40),
      (t.fillStyle = G),
      (t.font = `bold 20px sans-serif`),
      (t.textAlign = `left`),
      t.fillText(`LAMBORGHINI`, 16, 27));
    let r = new Date();
    ((t.textAlign = `right`),
      (t.fillStyle = `#ddd`),
      t.fillText(
        r.getHours().toString().padStart(2, `0`) +
          `:` +
          r.getMinutes().toString().padStart(2, `0`),
        496,
        27,
      ),
      (t.fillStyle = `#1b2128`),
      t.fillRect(16, 56, 300, 248),
      (t.strokeStyle = `#2f3a46`),
      (t.lineWidth = 6));
    for (let e = 0; e < 6; e++)
      (t.beginPath(),
        t.moveTo(16, 70 + e * 45),
        t.lineTo(316, 40 + e * 50),
        t.stroke());
    let i = (this.t * e * 0.05) % 40;
    ((t.strokeStyle = G),
      (t.lineWidth = 8),
      t.setLineDash([24, 16]),
      (t.lineDashOffset = -i),
      t.beginPath(),
      t.moveTo(166, 304),
      t.bezierCurveTo(170, 220, 120, 160, 200, 56),
      t.stroke(),
      t.setLineDash([]),
      (t.fillStyle = `#fff`),
      t.beginPath(),
      t.moveTo(166, 250),
      t.lineTo(154, 276),
      t.lineTo(178, 276),
      t.fill(),
      (t.textAlign = `left`),
      (t.fillStyle = `#aaa`),
      (t.font = `15px sans-serif`),
      t.fillText(`ENERGY FLOW`, 332, 76),
      (t.fillStyle = `rgba(41,196,106,${0.4 + 0.6 * ((Math.sin(this.t * 3) + 1) / 2)})`),
      t.fillRect(332, 88, 164, 10),
      (t.fillStyle = `#aaa`),
      t.fillText(`G-FORCE`, 332, 140),
      (t.strokeStyle = `#444`),
      (t.lineWidth = 2),
      t.beginPath(),
      t.arc(414, 200, 44, 0, Math.PI * 2),
      t.stroke(),
      (t.fillStyle = G),
      t.beginPath(),
      t.arc(
        414 + Math.sin(this.t) * 10,
        200 - Math.min(30, e / 12),
        6,
        0,
        Math.PI * 2,
      ),
      t.fill(),
      (t.fillStyle = `#ddd`),
      (t.font = `bold 22px sans-serif`),
      t.fillText(`♪ RADIO 98.1`, 332, 290),
      (n.needsUpdate = !0));
  }
};
function Ft(e, t, n, r) {
  let i = t > 120 ? 1 : t < 65 ? 0 : e.lift,
    a = e.lift + (i - e.lift) * (1 - Math.exp(-1.2 * r)),
    o = n && t > 15 ? -0.18 : 0;
  return { lift: a, tilt: e.tilt + (o - e.tilt) * (1 - Math.exp(-2 * r)) };
}
var It = 0.05;
function Lt(e, t, n, r, i) {
  let a = n && !r && t > 5 ? 1 : 0,
    o = a > e.lift ? 2.2 : 1.1,
    s = e.lift + (a - e.lift) * (1 - Math.exp(-o * i)),
    c = r && t > 15 ? -0.18 : -0.05 * s;
  return { lift: s, tilt: e.tilt + (c - e.tilt) * (1 - Math.exp(-2 * i)) };
}
var Rt = 0.2,
  zt = -0.16;
function Bt(e, t, n) {
  return e + (+!!t - e) * (1 - Math.exp(-(t ? 1.6 : 1.1) * n));
}
function Vt(e, t, n) {
  return t ? 0 : e / 3.6 / Math.max(0.05, n);
}
var Ht = 0.49;
function Ut(e) {
  return -Math.max(-1, Math.min(1, e)) * Ht;
}
var Wt = {
    version: 1,
    asset_id: `03e179a7-0dfe-4db6-a801-6a382936c6be`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/c0c2dd1b-f742-4e0a-8dc2-30e1fdd83495/tunnel.glb`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/03e179a7-0dfe-4db6-a801-6a382936c6be/tunnel.glb`,
    original_filename: `tunnel.glb`,
    size: 636128,
    content_type: `model/gltf-binary`,
    created_at: `2026-11-19T03:11:41Z`,
  },
  Gt = {
    version: 1,
    asset_id: `90e17746-bc92-40db-a754-db536fbe312f`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/bc70b76c-d867-44d0-bc91-67d2c4ee998f/bridge.glb`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/90e17746-bc92-40db-a754-db536fbe312f/bridge.glb`,
    original_filename: `bridge.glb`,
    size: 253460,
    content_type: `model/gltf-binary`,
    created_at: `2026-11-19T03:11:44Z`,
  },
  Kt = {
    version: 1,
    asset_id: `aa06a3ef-31d8-4999-a9bd-b1fe7bf2bcd4`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/09b8bc5b-e49f-42eb-9e5c-10159a17ec94/highway-kit.glb`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/aa06a3ef-31d8-4999-a9bd-b1fe7bf2bcd4/highway-kit.glb`,
    original_filename: `highway-kit.glb`,
    size: 557412,
    content_type: `model/gltf-binary`,
    created_at: `2026-11-19T03:11:49Z`,
  },
  K = (e) => {
    let t = Math.sin(e * 127.1 + 311.7) * 43758.5453;
    return t - Math.floor(t);
  },
  qt = -0.15,
  Jt = class {
    meshes;
    n = 0;
    constructor(e) {
      this.meshes = e;
    }
    add(e) {
      if (!(this.n >= (this.meshes[0]?.instanceMatrix.count ?? 0))) {
        for (let t of this.meshes) t.setMatrixAt(this.n, e);
        this.n++;
      }
    }
    commit() {
      for (let e of this.meshes)
        ((e.count = this.n),
          (e.visible = this.n > 0),
          (e.instanceMatrix.needsUpdate = !0));
      this.n = 0;
    }
  };
function Yt(e) {
  let t = [];
  return (
    e.traverse((e) => {
      e.isMesh && t.push(e);
    }),
    t
  );
}
function Xt(e, t, r, i) {
  return (
    e.updateMatrixWorld(!0),
    new Jt(
      Yt(e).map((e) => {
        let a = e.geometry.clone();
        for (let e of Object.keys(a.attributes)) {
          let t = a.getAttribute(e);
          if (
            t.array instanceof Float32Array &&
            !t.isInterleavedBufferAttribute
          )
            continue;
          let r = new Float32Array(t.count * t.itemSize);
          for (let e = 0; e < t.count; e++)
            for (let n = 0; n < t.itemSize; n++)
              r[e * t.itemSize + n] = t.getComponent(e, n);
          a.setAttribute(e, new n(r, t.itemSize));
        }
        a.applyMatrix4(e.matrixWorld);
        let o = e.material;
        /glow/i.test(o.name) && !i.includes(o) && i.push(o);
        let s = new v(a, o, t);
        return (
          (s.frustumCulled = !1),
          (s.count = 0),
          (s.visible = !1),
          r.add(s),
          s
        );
      }),
    )
  );
}
function Zt(e, t, n) {
  let r = document.createElement(`canvas`);
  ((r.width = e), (r.height = t), n(r.getContext(`2d`)));
  let a = new i(r);
  return ((a.colorSpace = N), (a.wrapS = a.wrapT = M), a);
}
var Qt = class {
  low;
  ahead;
  behind;
  loaded = !1;
  hasPines = !1;
  root = new g();
  glow = [];
  tunnelTiles = null;
  bridge = null;
  water;
  waterTex;
  banks = [];
  mountain = null;
  pines = null;
  bgTrees = null;
  store = null;
  m = new x();
  q = new j();
  p = new P();
  s = new P(1, 1, 1);
  up = new P(0, 1, 0);
  constructor(e, t, n, r) {
    ((this.low = t),
      (this.ahead = n),
      (this.behind = r),
      e.add(this.root),
      (this.waterTex = Zt(256, 256, (e) => {
        ((e.fillStyle = `#808080`), e.fillRect(0, 0, 256, 256));
        for (let t = 0; t < 900; t++) {
          let n = 110 + Math.floor(K(t) * 40);
          ((e.fillStyle = `rgb(${n},${n},255)`),
            e.fillRect(
              K(t * 3) * 256,
              K(t * 5) * 256,
              6 + K(t * 7) * 20,
              1 + K(t * 9) * 2,
            ));
        }
      })),
      (this.waterTex.colorSpace = ``),
      this.waterTex.repeat.set(40, 40));
    let i = new w({
      color: 2050652,
      roughness: 0.12,
      metalness: 0.35,
      normalMap: this.waterTex,
      normalScale: new ce(0.35, 0.35),
    });
    ((this.water = new S(new k(1400, Ee - L + 160), i)),
      (this.water.rotation.x = -Math.PI / 2),
      (this.water.visible = !1),
      this.root.add(this.water));
    let a = Zt(256, 256, (e) => {
      ((e.fillStyle = `#4e5a33`), e.fillRect(0, 0, 256, 256));
      for (let t = 0; t < 5e3; t++)
        ((e.fillStyle = [`#5d6b3a`, `#3f4a29`, `#6d6650`, `#7a7462`][t % 4]),
          e.fillRect(K(t) * 256, K(t * 2) * 256, 2 + K(t * 3) * 4, 2));
    });
    a.repeat.set(60, 3);
    let o = new w({ map: a, roughness: 1 });
    for (let e = 0; e < 2; e++) {
      let e = new S(new k(1400, Math.hypot(28, 14)), o);
      ((e.visible = !1), this.banks.push(e), this.root.add(e));
    }
  }
  async load() {
    let t = async (e) => ge(await fe(e)),
      [n, r, i] = await Promise.all([
        // The old GLB tunnel is replaced by the procedural twin-bore tunnel.
        Promise.resolve(null),
        t(Gt.url).catch((e) => (console.error(`bridge model`, e), null)),
        t(Kt.url).catch((e) => (console.error(`highway model`, e), null)),
      ]);
    if (n) {
      this.tunnelTiles = Xt(n, 4, this.root, this.glow);
      let t = new e().setFromObject(n);
      ((this.mountain = $t(t.min.x, t.max.x, t.max.y + qt)),
        (this.mountain.visible = !1),
        this.root.add(this.mountain));
    }
    if ((r && ((this.bridge = r), (r.visible = !1), this.root.add(r)), i)) {
      let e = i.getObjectByName(`pine`),
        t = i.getObjectByName(`bgtree`);
      for (let n of [e, t])
        n?.traverse((e) => {
          let t = e.material;
          t &&
            ((t.alphaTest = Math.max(t.alphaTest, 0.4)),
            (t.transparent = !1),
            (t.side = 2));
        });
      (e &&
        ((this.pines = Xt(e, this.low ? 40 : 90, this.root, this.glow)),
        (this.hasPines = !0)),
        t && (this.bgTrees = Xt(t, this.low ? 40 : 80, this.root, this.glow)));
      let n = i.getObjectByName(`store`);
      n && ((this.store = n), (n.visible = !1), this.root.add(n));
    }
    return ((this.loaded = !0), this.root);
  }
  zOf(e, t, n = 0) {
    let r = e - z(e) + t;
    return (
      r + n < e - this.behind - 60 && (r += Oe),
      r - 6400 + n >= e - this.behind - 60 && (r -= Oe),
      -(r - e)
    );
  }
  visible(e, t = 0, n = 0) {
    return e > -this.ahead - n && e - t < this.behind + n;
  }
  update(e, t, n) {
    let { m: r, q: i, p: a, s: o, up: s } = this;
    if (this.tunnelTiles) {
      for (let t = 0; t < 8; t++) {
        let n = this.zOf(e, I + t * ke, ke);
        this.visible(n, 126.9, 10) &&
          (r.makeTranslation(0, qt, n), this.tunnelTiles.add(r));
      }
      this.tunnelTiles.commit();
    }
    if (this.mountain) {
      let t = B - I,
        n = this.zOf(e, I, t);
      ((this.mountain.visible = this.visible(n, t, 260)),
        (this.mountain.position.z = n));
    }
    let c = this.zOf(e, je, 490),
      l = this.visible(c, 490, 120);
    this.bridge && ((this.bridge.visible = l), (this.bridge.position.z = c));
    let u = this.zOf(e, L, Ee - L),
      d = u - (Ee - L);
    if (
      ((this.water.visible = this.banks[0].visible = this.banks[1].visible = l),
      l)
    ) {
      (this.water.position.set(0, -12, (u + d) / 2),
        this.waterTex.offset.set(n * 0.01, n * 0.02));
      let e = Math.atan2(14, 28),
        [t, r] = this.banks;
      (t.rotation.set(-Math.PI / 2 - e, 0, 0),
        t.position.set(0, -14 / 2, u - 14),
        r.rotation.set(-Math.PI / 2 + e, 0, 0),
        r.position.set(0, -14 / 2, d + 14));
    }
    let f = this.low ? 150 : this.ahead;
    if (this.pines) {
      let t = Math.floor((e - this.behind) / 9);
      for (let n = t; n * 9 < e + f; n++) {
        let t = n * 9;
        if (Re(t) === `night-highway` && !(Ie(t) || R(t + 40) || R(t - 40)))
          for (let c of [-1, 1]) {
            let l = K(n * 2 + +(c > 0));
            if (l < 0.15 || (c > 0 && Math.abs(z(t) - 4200) < 30)) continue;
            let u = 0.75 + K(n * 7.3 + c) * 0.5;
            (i.setFromAxisAngle(s, l * 6.28),
              a.set(c * (12 + l * 22), 0, -(t - e)),
              r.compose(a, i, o.set(u, u * (0.85 + l * 0.3), u)),
              this.pines.add(r));
          }
      }
      this.pines.commit();
    }
    if (this.bgTrees) {
      let t = Math.floor((e - this.behind) / 6);
      for (let n = t; n * 6 < e + this.ahead; n++) {
        let t = n * 6;
        if (Re(t) === `night-highway` && !(Ie(t) || R(t + 60) || R(t - 60)))
          for (let c of [-1, 1]) {
            let l = K(n * 5 + c * 3);
            if (c > 0 && Math.abs(z(t) - 4200) < 40) continue;
            let u = 1 + K(n * 3.3 + c) * 0.6;
            (i.setFromAxisAngle(s, l * 6.28),
              a.set(c * (38 + l * 30), 0, -(t - e)),
              r.compose(a, i, o.set(u, u, u)),
              this.bgTrees.add(r));
          }
      }
      this.bgTrees.commit();
    }
    if (this.store) {
      let t = this.zOf(e, Pe);
      ((this.store.visible = this.visible(t, 0, 30)),
        this.store.position.set(25.4, 0, t),
        (this.store.rotation.y = Math.PI));
    }
    for (let e of this.glow) e.emissiveIntensity = 0.25 + t * 1.6;
  }
  dispose() {
    (this.root.traverse((e) => {
      let t = e;
      t.isMesh && t.geometry.dispose();
    }),
      this.root.removeFromParent());
  }
};
function $t(e, n, r) {
  let i = B - I,
    a = (e + n) / 2,
    o = (n - e) / 2 + 16,
    s = r + 7,
    l = r - 0.75,
    u = s - 0.6,
    d = new k(560, i + 160, 112, 64).rotateX(-Math.PI / 2),
    f = d.attributes.position,
    p = [],
    h = new c(5201201),
    _ = new c(7762026),
    v = new c(6247488),
    y = new c();
  for (let e = 0; e < f.count; e++) {
    let t = f.getX(e) + a,
      n = Math.round(((i + 160) / 2 - f.getZ(e)) / ((i + 160) / 64)),
      r =
        n <= 6
          ? 80 - (n * 80) / 6
          : n <= 58
            ? (-(n - 6) * i) / 52
            : -i - ((n - 64 + 6) * 80) / 6,
      s = Math.max(0, r, -i - r),
      c = Math.abs(t - a),
      l = 34 + 30 * Math.sin(r * 0.006 + 1.3) + 14 * Math.sin(r * 0.021),
      d = Math.max(0, c - o),
      m = Math.max(0, Math.min(-r, r + i)),
      g = (K(e) - 0.5) * 2.4,
      b =
        Math.min(28, m * 0.55) * (0.75 + 0.25 * Math.sin(t * 0.045 + r * 0.01)),
      x = u + l * (1 - Math.exp(-d / 50)) + b + (m > 2 ? g : 0),
      S = r;
    (s > 0 &&
      (c < o
        ? ((S = r > 0 ? 0 : -i), (x = u))
        : (x =
            Math.max(-0.6, x * Math.exp(-s / (24 + d * 0.4)) - 1.2) + g * 0.4)),
      f.setXYZ(e, t, x, S));
    let C = Math.min(1, Math.abs(x - u) / 40);
    (y
      .copy(h)
      .lerp(v, K(e * 3) * 0.5)
      .lerp(_, C * 0.8 + (K(e * 7) > 0.85 ? 0.3 : 0)),
      p.push(y.r, y.g, y.b));
  }
  (d.setAttribute(`color`, new m(p, 3)), d.computeVertexNormals());
  let b = new w({ vertexColors: !0, roughness: 1, flatShading: !0, side: 2 }),
    x = new g();
  x.add(new S(d, b));
  let C = Zt(128, 128, (e) => {
      ((e.fillStyle = `#8d877d`), e.fillRect(0, 0, 128, 128));
      for (let t = 0; t < 1500; t++)
        ((e.fillStyle = t % 2 ? `#99938a` : `#7f796f`),
          e.fillRect(K(t) * 128, K(t * 2) * 128, 2, 2));
      e.fillStyle = `rgba(40,36,30,0.35)`;
      for (let t = 0; t < 128; t += 32)
        (e.fillRect(0, t, 128, 2), e.fillRect(t, 0, 2, 128));
      e.fillStyle = `rgba(30,26,22,0.25)`;
      for (let t = 0; t < 40; t++)
        e.fillRect(K(t * 11) * 128, 0, 1 + K(t * 13) * 2, 40 + K(t * 17) * 88);
    }),
    T = new w({ map: C, roughness: 0.9 }),
    E = new w({ color: 7170143, roughness: 0.8 }),
    D = Zt(64, 8, (e) => {
      for (let t = 0; t < 8; t++)
        ((e.fillStyle = t % 2 ? `#e8c21a` : `#1d1d1d`),
          e.fillRect(t * 8, 0, 8, 8));
    });
  D.repeat.set(12, 1);
  let O = new w({ map: D, roughness: 0.6 }),
    A = 1.4,
    j = a - o,
    ee = a + o,
    M = (e, n, r, i, a, o, s = A) => {
      let c = new S(new t(n - e, i - r, s), o);
      if ((c.position.set((e + n) / 2, (r + i) / 2, a), o.map === C)) {
        let t = c.geometry.attributes.uv;
        for (let a = 0; a < t.count; a++)
          t.setXY(a, (t.getX(a) * (n - e)) / 6, (t.getY(a) * (i - r)) / 6);
      }
      x.add(c);
    };
  for (let t of [0, 1]) {
    let r = t === 0 ? A / 2 : -i - A / 2;
    (M(j, ee, l, s, r, T),
      M(j, e + 0.9, -1, l, r, T),
      M(n - 0.7, ee, -1, l, r, T),
      M(-12.4, -10.6, -0.2, l, r, T),
      M(j - 0.4, ee + 0.4, s, s + 0.5, r, E, 2.4));
    let a = t === 0 ? 1.42 : -i - A - 0.02;
    M(e + 0.9, n - 0.7, l - 0.01, l + 0.45, a, O, 0.05);
  }
  return x;
}
var en = [
    `sedan`,
    `hatch`,
    `suv`,
    `sedan`,
    `pickup`,
    `bmw`,
    `hatch`,
    `bus`,
    `suv`,
    `mustang`,
    `sedan`,
    `truck`,
    `hatch`,
    `suv`,
  ],
  tn = (e) => {
    let t = Math.sin(e * 127.1 + 311.7) * 43758.5453;
    return t - Math.floor(t);
  };
function nn(e) {
  return e >= 1400 && e < 2415 ? -22.4 : -14.5;
}
function rn(e, t, n, r) {
  let i = n + r,
    a = [];
  for (let r = 0; r < 14; r++) {
    let o =
        ((((e + ((65 + tn(r * 3.1) * 45) / 3.6) * t + tn(r * 7.7) * i) % i) +
          i) %
          i) -
        n,
      s = e - o;
    if (!Ae(s)) continue;
    let c = r % 3;
    a.push({ model: en[r % en.length], x: nn(z(s)) + (c - 1) * 3.6, z: o });
  }
  return a;
}
var an = 3.6,
  on = 1.6,
  sn = 14,
  q = 260,
  J = 110,
  cn = 24,
  Y = 370,
  ln = {
    m5: `hatch`,
    "mustang-blue": `mustang`,
    "mustang-black": `mustang`,
    "bmw-m3": `bmw`,
    "porsche-gt3": `porsche`,
    "bugatti-chiron": `bugatti`,
    "ferrari-sf90": `ferrari`,
    bus: `bus`,
    truck: `truck`,
    suv: `suv`,
    sedan: `sedan`,
    hatch: `hatch`,
    pickup: `pickup`,
  },
  un = {
    hatch: F.hatch,
    sedan: F.sedan,
    suv: F.suv,
    pickup: F.pickup,
    bus: F.bus,
    truck: F.truck,
    mustang: F[`mustang-blue`],
    bmw: F[`bmw-m3`],
    porsche: F[`porsche-gt3`],
    bugatti: F[`bugatti-chiron`],
    ferrari: F[`ferrari-sf90`],
  },
  X = (e) => {
    let t = Math.sin(e * 127.1 + 311.7) * 43758.5453;
    return t - Math.floor(t);
  },
  Z = (e, t, n) => e + (t - e) * n;
function Q(e, t, n) {
  let r = document.createElement(`canvas`);
  ((r.width = e), (r.height = t));
  let a = r.getContext(`2d`);
  if (!a) throw Error(`Canvas context unavailable`);
  n(a);
  let o = new i(r);
  return ((o.colorSpace = N), (o.wrapS = o.wrapT = M), (o.anisotropy = 8), o);
}
function dn(e, t, n, r, i, a) {
  for (let o = 0; o < r; o++) {
    e.fillStyle = i[o % i.length] ?? `#45474c`;
    let r = a[0] + Math.random() * (a[1] - a[0]);
    e.fillRect(Math.random() * t, Math.random() * n, r, r);
  }
}
function fn(e) {
  let t = 1024,
    n = 2048;
  return Q(t, n, (r) => {
    if (((r.fillStyle = `#3a3c40`), r.fillRect(0, 0, t, n), e)) {
      for (let i = 0; i < n; i += 256)
        for (let n = 0; n < t; n += 256) r.drawImage(e, n, i, 256, 256);
      ((r.fillStyle = `rgba(10,12,15,0.22)`), r.fillRect(0, 0, t, n));
    } else
      dn(
        r,
        t,
        n,
        38e3,
        [`#3d3f42`, `#36383b`, `#414346`, `#383a3d`],
        [0.5, 1.5],
      );
    let i = t / sn;
    for (let e = 0; e < 3; e++) {
      let t = (on + an * (e + 0.5)) * i;
      for (let e of [-0.85, 0.85]) {
        let a = r.createLinearGradient(t + e * i - 18, 0, t + e * i + 18, 0);
        (a.addColorStop(0, `rgba(20,20,22,0)`),
          a.addColorStop(0.5, `rgba(20,20,22,0.22)`),
          a.addColorStop(1, `rgba(20,20,22,0)`),
          (r.fillStyle = a),
          r.fillRect(t + e * i - 18, 0, 36, n));
      }
    }
    ((r.fillStyle = `#ece8dc`),
      r.fillRect(on * i - 6, 0, 8, n),
      r.fillRect(12.4 * i - 2, 0, 8, n));
    let a = n / cn;
    for (let e of [1, 2]) {
      let t = (on + an * e) * i - 3;
      for (let e = 0; e < cn; e += 12) r.fillRect(t, e * a, 6, 4 * a);
    }
    r.fillStyle = `rgba(230,230,220,0.35)`;
    for (let e = 0; e < n; e += 14)
      (r.fillRect(on * i - 22, e, 12, 6),
        r.fillRect(916.9714285714285, e, 12, 6));
  });
}
function pn() {
  return Q(512, 512, (e) => {
    ((e.fillStyle = `#3f5f2a`),
      e.fillRect(0, 0, 512, 512),
      dn(
        e,
        512,
        512,
        3e4,
        [`#4c6f32`, `#36521f`, `#5a7e3a`, `#2f4a1b`, `#6a7f3c`],
        [1, 4],
      ));
  });
}
function mn() {
  return Q(256, 256, (e) => {
    ((e.fillStyle = `#8d8a84`),
      e.fillRect(0, 0, 256, 256),
      dn(e, 256, 256, 9e3, [`#9a978f`, `#7f7c76`, `#a5a29a`], [1, 3]));
  });
}
function hn(e) {
  return Q(512, 192, (t) => {
    ((t.fillStyle = `#0f6b3a`),
      t.fillRect(0, 0, 512, 192),
      (t.strokeStyle = `#f2f2f2`),
      (t.lineWidth = 6),
      t.strokeRect(8, 8, 496, 176),
      (t.fillStyle = `#f7f7f7`),
      (t.font = `bold 46px Arial, sans-serif`),
      (t.textBaseline = `middle`),
      e.forEach((e, n) => t.fillText(e, 30, 60 + n * 70)));
  });
}
function gn(e) {
  let t = Q(128, 128, (t) => {
    let n = t.createRadialGradient(64, 64, 0, 64, 64, 64);
    for (let [t, r] of e) n.addColorStop(t, r);
    ((t.fillStyle = n), t.fillRect(0, 0, 128, 128));
  });
  return ((t.wrapS = t.wrapT = s), t);
}
var $ = { x: 0.275, y: 0.68, z: 2.37 },
  _n = `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uSeed;
  void main() {
    vUv = uv;
    vec3 p = position;
    // turbulent wobble grows toward the tip
    float t = uv.y;
    p.x += sin(uTime * 41.0 + t * 9.0 + uSeed) * 0.02 * t;
    p.y += cos(uTime * 37.0 + t * 7.0 + uSeed * 2.0) * 0.02 * t;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`,
  vn = `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uIntensity;
  uniform float uSeed;
  uniform float uCore;
  float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float n(vec2 p){
    vec2 i = floor(p), f = fract(p);
    f = f*f*(3.0-2.0*f);
    return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y);
  }
  void main() {
    float t = vUv.y; // 0 = exhaust tip, 1 = flame end
    float ang = vUv.x * 6.2831;
    float turb = n(vec2(ang * 1.5 + uSeed, t * 6.0 - uTime * 28.0)) * 0.6
               + n(vec2(ang * 3.0, t * 14.0 - uTime * 45.0)) * 0.4;
    float body = pow(1.0 - t, 1.3) * (0.55 + turb * 0.9);
    body *= smoothstep(0.0, 0.06, t);
    vec3 blue = vec3(0.45, 0.65, 1.0);
    vec3 white = vec3(1.0, 0.95, 0.85);
    vec3 orange = vec3(1.0, 0.45, 0.08);
    vec3 red = vec3(0.7, 0.08, 0.02);
    vec3 col = mix(blue, white, smoothstep(0.02, 0.15, t));
    col = mix(col, orange, smoothstep(0.15, 0.45, t));
    col = mix(col, red, smoothstep(0.55, 0.95, t));
    col = mix(col, mix(blue, white, t * 3.0), uCore);
    float a = clamp(body * uIntensity, 0.0, 1.0);
    gl_FragColor = vec4(col * (1.6 + uCore), a);
  }
`,
  yn = class {
    canvas;
    overlay;
    onReady;
    playerKey = `revuelto`;
    playerLoad = 0;
    chironRig = null;
    playerLocal = new x();
    async selectPlayerCar(e) {
      let t = ++this.playerLoad,
        n = await me(e);
      if (this.disposed || t !== this.playerLoad) return;
      try {
        await this.renderer.compileAsync(n, this.camera, this.scene);
      } catch {}
      if (this.disposed || t !== this.playerLoad) return;
      (this.player?.removeFromParent(),
        this.playerShadow?.removeFromParent(),
        this.sunShadow?.removeFromParent(),
        (this.playerTail = []),
        (this.playerHead = []),
        (this.playerBrakeOnly = []),
        (this.playerWipers = []),
        (this.playerWheels = []),
        (this.lightHalos = []),
        (this.flames = []),
        (this.engineBrakeLight = null),
        (this.wing = void 0),
        (this.chironRig = null),
        (this.steeringWheel = null),
        (this.cabinOnly = []),
        (this.playerKey = e));
      let r = n.clone(!0);
      ((this.revDash = null),
        e === `revuelto` &&
          ((this.revDash = new Pt()), r.add(this.revDash.group)),
        this.setupPlayer(r),
        this.refreshCarCustom(),
        (this.canvas.dataset.playerCar = e));
    }
    refreshCarCustom() {
      if (this.player)
        try {
          de(this.player, this.playerKey, ue(localStorage)[this.playerKey]);
        } catch (e) {
          console.warn(`car custom`, e);
        }
    }
    setupChiron(e) {
      (ye(e, this.low),
        e.traverse((e) => {
          e.userData.cabinOnly && this.cabinOnly.push(e);
        }));
      let t = _t(`bugatti`, e, 1, !1);
      this.chironRig = t;
      for (let n of t.all) ((n.count = n === t.wipers ? 2 : 1), e.add(n));
      (e.traverse((e) => {
        e instanceof S &&
          e.userData.wheel &&
          ((e.rotation.order = `YXZ`),
          this.playerWheels.push({
            mesh: e,
            radius: e.userData.radius || 0.34,
            front: e.userData.front === !0 || /_[LR]F$/.test(e.name),
          }));
      }),
        this.headL.position.set(-0.8, 0.7, -1.95),
        this.headR.position.set(0.8, 0.7, -1.95),
        this.headL.target.position.set(-0.9, 0, -30),
        this.headR.target.position.set(0.9, 0, -30),
        this.low ||
          e.add(this.headL, this.headR, this.headL.target, this.headR.target),
        (this.playerShadow = this.addContactShadow(this.scene, 2.3, 4.6)),
        (this.sunShadow = this.addContactShadow(this.scene, 2.9, 5.5)),
        (this.sunShadow.position.y = 0.016),
        (this.wing = e.getObjectByName(`active-wing`)),
        (this.steeringWheel = e.getObjectByName(`steering-wheel`) ?? null),
        (this.wingBaseY = this.wing?.position.y ?? 0),
        (this.wingRise = 0.14),
        (this.player = e),
        this.scene.add(e),
        (this.canvas.dataset.playerCar = `chiron`));
    }
    low = Ve({
      userAgent: navigator.userAgent,
      memory: navigator.deviceMemory,
      cores: navigator.hardwareConcurrency || 4,
      touch: navigator.maxTouchPoints > 0,
    });
    quality = new He();
    width = 1;
    height = 1;
    lastFrame = 0;
    baseDpr = 1;
    rainColor = new c(7371398);
    matrix = new x();
    quaternion = new j();
    scaleVector = new P();
    positionVector = new P();
    renderer;
    scene = new te();
    camera = new D(62, 1, 0.1, 900);
    sun;
    hemi;
    fog;
    sky = new c();
    daySky;
    dayColor = new c(11127784);
    duskColor = new c(3814736);
    nightColor = new c(329485);
    tunnelColor = new c(1315343);
    roadTex;
    grassTex;
    roadMat;
    reflectionMaps;
    contactTex;
    roadDetail;
    disposed = !1;
    lightHalos = [];
    playerShadow;
    sunShadow;
    posts;
    trunks;
    crowns;
    lampPoles;
    lampHeads;
    lampPools;
    lampHeadMat;
    lampPoolMat;
    tunnel;
    newTunnel = !1;
    map;
    waterClip = [new O(new P(0, 0, 1), 0), new O(new P(0, 0, -1), 0)];
    bridgeClip = [new O(new P(0, 0, 1), 0), new O(new P(0, 0, -1), 0)];
    leftRailClip = [new O(new P(0, 0, 1), 0), new O(new P(0, 0, -1), 0)];
    oppClip = [new O(new P(0, 0, 1), 0), new O(new P(0, 0, -1), 0)];
    oppRailClip = [new O(new P(0, 0, 1), 0), new O(new P(0, 0, -1), 0)];
    oppRoadMat = null;
    barrierStuds = null;
    crashCushion = null;
    sunsetColor = new c(15242330);
    sunWhite = new c(16773596);
    sunGold = new c(16753756);
    tunnelLightMat;
    tunnelLamp;
    bridges = [];
    gantries = [];
    radars = [];
    player = null;
    wing;
    steeringWheel = null;
    revDash = null;
    cabinOnly = [];
    eyeVector = new P();
    lookVector = new P();
    wingBaseY = 0.96;
    wingRise = 0.17;
    aero = { lift: 0, tilt: 0 };
    buildings;
    rooftops;
    cityMaterial;
    playerTail = [];
    playerHead = [];
    playerBrakeOnly = [];
    playerWheels = [];
    body = Ue();
    head = Xe();
    headEuler = new p(0, 0, 0, `YXZ`);
    headQuat = new j();
    engineBrakeLight = null;
    rimWarm = new d(16757575, 1.5);
    rimCool = new d(8368895, 0.8);
    roadBeamMesh = null;
    headL;
    headR;
    flames = [];
    flameAmt = 0;
    flameLen = 0;
    popT = 0;
    templates = new Map();
    policeCar = null;
    policeRed = null;
    policeBlue = null;
    sprites = [];
    smokeTex;
    sparkTex;
    rain;
    rainPos;
    time = 0;
    camX = 0;
    camPull = 0;
    camView = `chase`;
    ready = !1;
    constructor(e, t, i) {
      ((this.canvas = e), (this.overlay = t), (this.onReady = i));
      let a = Math.min(window.devicePixelRatio || 1, this.low ? 1 : 1.5);
      ((this.baseDpr = a),
        (this.renderer = new le({
          canvas: e,
          antialias: !0,
          powerPreference: `high-performance`,
          stencil: !1,
          precision: `highp`,
        })),
        this.renderer.setPixelRatio(a),
        (this.renderer.outputColorSpace = N),
        (this.renderer.toneMapping = 4),
        (this.renderer.toneMappingExposure = 1.05),
        (this.renderer.shadowMap.enabled = !this.low),
        (this.renderer.localClippingEnabled = !0),
        (this.renderer.shadowMap.type = 1),
        (this.fog = new h(11127784, 60, 250)),
        (this.scene.fog = this.fog),
        (this.scene.background = this.sky));
      let o = Q(1024, 512, (e) => {
        let t = e.createLinearGradient(0, 0, 0, 512);
        (t.addColorStop(0, `#598fc4`),
          t.addColorStop(0.48, `#a8cbe5`),
          t.addColorStop(0.7, `#e5e9e9`),
          t.addColorStop(1, `#94a287`),
          (e.fillStyle = t),
          e.fillRect(0, 0, 1024, 512));
        for (let t = 0; t < 45; t++) {
          let n = X(t * 3) * 1024,
            r = 160 + X(t * 7) * 90,
            i = e.createRadialGradient(n, r, 0, n, r, 70);
          (i.addColorStop(0, `rgba(255,255,255,0.22)`),
            i.addColorStop(1, `rgba(255,255,255,0)`),
            (e.fillStyle = i),
            e.save(),
            e.translate(n, r),
            e.scale(1, 0.22),
            e.translate(-n, -r),
            e.fillRect(n - 70, r - 70, 140, 140),
            e.restore());
        }
      });
      ((o.mapping = 303),
        (this.daySky = o),
        (this.hemi = new _(14675711, 3885610, 0.9)),
        this.scene.add(this.hemi),
        this.rimWarm.position.set(-6, 3, -5),
        this.rimCool.position.set(5, 2, -6),
        this.scene.add(this.rimWarm, this.rimCool),
        (this.sun = new d(16773596, 2.4)),
        (this.sun.castShadow = !0),
        this.sun.shadow.mapSize.set(1024, 1024));
      let s = this.sun.shadow.camera;
      ((s.left = -14),
        (s.right = 14),
        (s.top = 22),
        (s.bottom = -22),
        (s.near = 1),
        (s.far = 80),
        (this.sun.shadow.bias = -5e-4),
        this.scene.add(this.sun, this.sun.target),
        (this.tunnelLamp = new A(16763274, 0, 26, 1.6)),
        this.scene.add(this.tunnelLamp),
        (this.headL = this.makeHeadlight()),
        (this.headR = this.makeHeadlight()),
        (this.roadTex = fn()),
        this.roadTex.repeat.set(1, Y / cn),
        (this.grassTex = pn()),
        this.grassTex.repeat.set(10, Y / 8),
        (this.roadMat = new w({
          map: this.roadTex,
          roughness: 0.88,
          metalness: 0.02,
          bumpMap: this.roadTex,
          bumpScale: 0.012,
        })),
        (this.smokeTex = gn([
          [0, `rgba(255,255,255,0.9)`],
          [0.5, `rgba(255,255,255,0.35)`],
          [1, `rgba(255,255,255,0)`],
        ])),
        (this.sparkTex = gn([
          [0, `rgba(255,255,255,1)`],
          [0.25, `rgba(255,200,90,0.9)`],
          [1, `rgba(255,90,0,0)`],
        ])),
        (this.contactTex = rt()),
        this.buildWorld(),
        (this.map = new Qt(this.scene, this.low, q, J)),
        this.map
          .load()
          .then(async (e) => {
            if (!this.disposed) {
              try {
                await this.renderer.compileAsync(e, this.camera, this.scene);
              } catch {}
              this.canvas.dataset.mapReady = `true`;
            }
          })
          .catch((e) => console.error(`map models failed`, e)));
      let c = this.low ? 80 : 500;
      this.rainPos = new Float32Array(c * 6);
      for (let e = 0; e < c; e++) this.resetDrop(e, !0);
      let l = new r();
      (l.setAttribute(`position`, new n(this.rainPos, 3)),
        (this.rain = new b(
          l,
          new y({
            color: 13624063,
            transparent: !0,
            opacity: 0,
            depthWrite: !1,
          }),
        )),
        (this.rain.frustumCulled = !1),
        this.scene.add(this.rain));
      for (let e = 0; e < (this.low ? 12 : 96); e++) {
        let e = new ie(
          new ae({ map: this.smokeTex, transparent: !0, depthWrite: !1 }),
        );
        ((e.visible = !1), this.sprites.push(e), this.scene.add(e));
      }
      (this.loadModels(),
        nt(this.renderer)
          .then((e) => {
            if (this.disposed) {
              (e.day.dispose(),
                e.night.dispose(),
                e.tunnel.dispose(),
                e.sky.dispose(),
                e.asphalt.dispose());
              return;
            }
            (this.daySky.dispose(),
              (this.daySky = e.sky),
              (this.reflectionMaps = e),
              (this.scene.environment = e.day.texture));
            let t = fn(e.asphalt.image);
            (t.repeat.set(1, Y / cn),
              (this.roadMat.map = t),
              this.roadTex.dispose(),
              (this.roadTex = t));
            let n = e.asphalt.clone();
            ((n.colorSpace = ``),
              (n.wrapS = n.wrapT = M),
              n.repeat.set(sn / 3.5, Y / 3.5),
              (n.anisotropy = this.low ? 4 : 8),
              (n.needsUpdate = !0),
              (this.roadDetail = n),
              (this.roadMat.bumpMap = this.roadMat.roughnessMap = n),
              (this.roadMat.bumpScale = 0.008),
              (this.roadMat.needsUpdate = !0),
              (this.canvas.dataset.roadLightingReady = `true`));
          })
          .catch((e) => console.error(`Road lighting failed`, e)));
    }
    makeHeadlight() {
      let e = new re(16774368, 0, 90, 0.42, 0.55, 1.2);
      return (this.low || this.scene.add(e, e.target), e);
    }
    resetDrop(e, t) {
      let n = (Math.random() - 0.5) * 40,
        r = -Math.random() * 60 + 8,
        i = t ? Math.random() * 18 : 18,
        a = e * 6;
      this.rainPos.set([n, i, r, n - 0.05, i - 0.9, r + 0.25], a);
    }
    buildWorld() {
      let e = new S(new k(sn, Y), this.roadMat);
      ((e.rotation.x = -Math.PI / 2),
        (e.position.z = -75),
        (e.receiveShadow = !0),
        this.scene.add(e));
      let n = new w({
          color: 7827562,
          roughness: 1,
          clippingPlanes: this.waterClip,
          clipIntersection: !0,
        }),
        r = new w({
          map: this.grassTex,
          roughness: 1,
          clippingPlanes: this.waterClip,
          clipIntersection: !0,
        }),
        i = new w({
          color: 12896460,
          metalness: 0.85,
          roughness: 0.35,
          clippingPlanes: this.bridgeClip,
          clipIntersection: !0,
        });
      // Left guardrail disappears where the median barrier takes over.
      let leftRailMat = i.clone();
      ((leftRailMat.clippingPlanes = this.leftRailClip),
        (leftRailMat.clipIntersection = !0));
      for (let e of [-1, 1]) {
        let a = new S(new k(2.2, Y), n);
        ((a.rotation.x = -Math.PI / 2),
          a.position.set(e * 8.1, -0.02, -75),
          (a.receiveShadow = !0));
        let o = new S(new k(160, Y), r);
        ((o.rotation.x = -Math.PI / 2),
          o.position.set(e * 89.2, -0.05, -75),
          (o.receiveShadow = !0),
          this.scene.add(a, o));
        let s = new S(new t(0.08, 0.32, Y), e < 0 ? leftRailMat : i);
        (s.position.set(e * 7.45, 0.62, -75),
          (s.castShadow = !0),
          this.scene.add(s));
      }
      this.buildDualCarriageway(i);
      let a = new t(0.12, 0.75, 0.12);
      (a.translate(0, 0.37, 0),
        (this.posts = new v(
          a,
          new w({ color: 6975092, metalness: 0.6, roughness: 0.5 }),
          300,
        )),
        this.scene.add(this.posts));
      this.trees = createTrees(this.scene, 150);
      let m = new u(0.09, 0.14, 9, 8);
      (m.translate(0, 4.5, 0),
        (this.lampPoles = new v(
          m,
          new w({ color: 9080726, metalness: 0.7, roughness: 0.4 }),
          24,
        )));
      let h = new t(1.8, 0.18, 0.5);
      (h.translate(0, 9, 0),
        (this.lampHeadMat = new w({
          color: 7829367,
          emissive: 16767392,
          emissiveIntensity: 0,
        })),
        (this.lampHeads = new v(h, this.lampHeadMat, 48)));
      let _ = new o(5.5, 24);
      (_.rotateX(-Math.PI / 2),
        _.translate(0, 0.02, 0),
        (this.lampPoolMat = new C({
          map: gn([
            [0, `rgba(255,210,150,0.8)`],
            [1, `rgba(255,210,150,0)`],
          ]),
          transparent: !0,
          opacity: 0,
          blending: 2,
          depthWrite: !1,
        })),
        (this.lampPools = new v(_, this.lampPoolMat, 48)),
        this.scene.add(this.lampPoles, this.lampHeads, this.lampPools),
        this.buildTunnel());
      this.city = createCity(this.scene, 72);
      let b = new w({ map: mn(), roughness: 0.9 });
      for (let e = 0; e < 2; e++) {
        let e = new g(),
          n = new S(new t(56, 1.2, 12), b);
        ((n.position.x = -6), (n.position.y = 6.6), (n.castShadow = !0), e.add(n));
        let r = new S(new t(56, 0.9, 0.3), b);
        (r.position.set(-6, 7.6, 5.8), e.add(r, r.clone().translateZ(-11.6)));
        for (let [n, wd] of [
          [-26.5, 1.2],
          [MEDIAN_X, 0.6],
          [9.4, 1.2],
        ]) {
          let r = new S(new t(wd, 6.2, 3), b);
          (r.position.set(n, 3, 0), (r.castShadow = !0), e.add(r));
        }
        ((e.visible = !1), this.bridges.push(e), this.scene.add(e));
      }
      let x = new w({ color: 10133670, metalness: 0.8, roughness: 0.35 }),
        T = [
          [`São Paulo  42 km`, `Campinas  96 km`],
          [`Saída 23  →`, `Interlagos`],
          [`Rodovia dos`, `Bandeirantes`],
        ];
      for (let e = 0; e < 3; e++) {
        let n = new g();
        for (let e of [-1, 1]) {
          let t = new S(new u(0.2, 0.2, 7.2, 8), x);
          (t.position.set(e > 0 ? 7.9 : MEDIAN_X, 3.6, 0), n.add(t));
        }
        let r = new S(new t(16, 0.5, 0.5), x);
        ((r.position.y = 6.9), n.add(r));
        let i = new S(
          new t(6.5, 2.4, 0.15),
          new w({
            map: hn(T[e] ?? []),
            roughness: 0.5,
            emissive: 16777215,
            emissiveIntensity: 0,
            emissiveMap: null,
          }),
        );
        (i.position.set(-1.8, 6.2, 0.35),
          n.add(i),
          n.traverse((e) => (e.castShadow = !0)),
          (n.visible = !1),
          this.gantries.push(n),
          this.scene.add(n));
      }
      for (let e = 0; e < 2; e++) {
        let e = new g(),
          n = new S(new u(0.12, 0.12, 5.2, 8), x);
        n.position.y = 2.6;
        let r = new S(
          new t(0.6, 0.5, 0.7),
          new w({ color: 15658734, roughness: 0.5 }),
        );
        r.position.set(-0.3, 5.2, 0);
        let i = new S(new o(0.15, 16), new C({ color: 1118481 }));
        (i.position.set(-0.3, 5.2, -0.36),
          (i.rotation.y = Math.PI),
          e.add(n, r, i),
          (e.position.x = 8.6),
          (e.visible = !1),
          this.radars.push(e),
          this.scene.add(e));
      }
    }
    buildTunnel() {
      let e = B - I,
        n = buildTwinTunnel(e, { low: this.low });
      ((n.visible = !1), (this.tunnel = n), this.scene.add(n));
    }
    buildDualCarriageway(railMat) {
      // Oncoming carriageway: same asphalt as the main road, clipped to its span.
      let e = this.roadMat.clone();
      ((e.clippingPlanes = this.oppClip), (this.oppRoadMat = e));
      let n = OPP_ROAD_INNER - OPP_ROAD_OUTER,
        r = new k(n, Y),
        i = r.attributes.uv;
      for (let e = 0; e < i.count; e++) i.setX(e, i.getX(e) * (n / sn));
      let a = new S(r, e);
      ((a.rotation.x = -Math.PI / 2),
        a.position.set((OPP_ROAD_INNER + OPP_ROAD_OUTER) / 2, 0, -75),
        (a.receiveShadow = !0),
        this.scene.add(a));
      // New Jersey concrete median barrier.
      let o = tunnelSweep(
          [
            [0.3, 0],
            [0.3, 0.08],
            [0.12, 0.3],
            [0.09, 0.81],
            [-0.09, 0.81],
            [-0.12, 0.3],
            [-0.3, 0.08],
            [-0.3, 0],
          ],
          Y,
          1.2,
          3,
        ).translate(MEDIAN_X, 0, Y / 2 - 75),
        s = new S(
          o,
          new w({
            map: mn(),
            color: 14540751,
            roughness: 0.82,
            clippingPlanes: this.oppClip,
            side: 2,
          }),
        );
      ((s.castShadow = !0), (s.receiveShadow = !0), this.scene.add(s));
      // Outer guardrail of the oncoming carriageway (open-air part only).
      let c = railMat.clone();
      ((c.clippingPlanes = this.oppRailClip), (c.clipIntersection = !1));
      let l = new S(new t(0.08, 0.32, Y), c);
      (l.position.set(OPP_RAIL_X, 0.62, -75), (l.castShadow = !0), this.scene.add(l));
      // Amber reflectors on the barrier face.
      ((this.barrierStuds = new v(
        new t(0.03, 0.08, 0.16),
        new C({ color: 16753178, toneMapped: !1 }),
        64,
      )),
        (this.barrierStuds.frustumCulled = !1),
        this.scene.add(this.barrierStuds));
      // Crash cushion where the barrier begins.
      let u = Q(128, 128, (e) => {
          for (let t = 0; t < 8; t++)
            ((e.fillStyle = t % 2 ? `#151515` : `#f4c20d`),
              e.fillRect(0, t * 16, 128, 16));
        }),
        d = new g(),
        f = new S(new t(0.7, 0.9, 3.2), new w({ map: u, roughness: 0.6 }));
      f.position.set(0, 0.45, 1.6);
      let p = new S(
        new t(0.72, 0.5, 0.04),
        new C({ color: 16753178, toneMapped: !1 }),
      );
      (p.position.set(0, 0.62, 3.22),
        d.add(f, p),
        (d.visible = !1),
        (this.crashCushion = d),
        this.scene.add(d));
    }
    updateDualCarriageway(e) {
      let keep = (t, n, r) => {
          let i = spanCamera(e, n, r, J);
          ((t[0].constant = -i.far), (t[1].constant = i.near));
          return i;
        },
        n = keep(this.oppClip, DUAL_START, BRIDGE_START);
      keep(this.oppRailClip, DUAL_START, TUNNEL_START);
      let r = spanCamera(e, DUAL_START, BRIDGE_END, J);
      ((this.leftRailClip[0].constant = -r.near),
        (this.leftRailClip[1].constant = r.far));
      let i = this.oppRoadMat,
        a = this.roadMat;
      if (
        (i &&
          (i.map !== a.map &&
            ((i.map = a.map),
            (i.bumpMap = a.bumpMap),
            (i.roughnessMap = a.roughnessMap),
            (i.needsUpdate = !0)),
          (i.bumpScale = a.bumpScale),
          (i.roughness = a.roughness),
          i.color.copy(a.color)),
        this.crashCushion)
      ) {
        let e = n.near;
        ((this.crashCushion.visible = e < J && e > -q),
          this.crashCushion.position.set(MEDIAN_X, 0, e));
      }
    }
    async loadModels() {
      await this.selectPlayerCar(this.playerKey).catch((e) =>
        console.error(`Player model failed`, e),
      );
      let e = [
          `hatch`,
          `sedan`,
          `suv`,
          `pickup`,
          `bus`,
          `truck`,
          `mustang`,
          `bmw`,
          `porsche`,
          `bugatti`,
          `ferrari`,
        ],
        t = me(`police-aventador`)
          .then((e) => this.setupPoliceAventador(e.clone(!0)))
          .catch((e) => console.error(`police model failed`, e));
      (await Promise.all([
        t,
        ...e.map((e) =>
          me(e)
            .then((t) => {
              (this.templates.set(e, t), this.setupTrafficBatch(e, t));
            })
            .catch((t) => console.error(`model ${e} failed`, t)),
        ),
      ]),
        await this.precompileAll(),
        (this.canvas.dataset.modelsReady = `true`));
    }
    async precompileAll() {
      let e = [];
      this.scene.traverse((t) => {
        t.visible ||= (e.push(t), !0);
      });
      let t = this.scene.environment;
      try {
        (await this.renderer.compileAsync(this.scene, this.camera),
          this.reflectionMaps &&
            ((this.scene.environment = this.reflectionMaps.tunnel.texture),
            await this.renderer.compileAsync(this.scene, this.camera),
            (this.scene.environment = this.reflectionMaps.night.texture),
            await this.renderer.compileAsync(this.scene, this.camera)));
      } catch {
      } finally {
        this.scene.environment = t;
        for (let t of e) t.visible = !1;
      }
    }
    setupPlayer(n) {
      if (this.playerKey === `chiron`) {
        this.setupChiron(n);
        return;
      }
      let r = [],
        i = new e();
      n.updateMatrixWorld(!0);
      let o = [];
      n.traverse((e) => {
        let t = e;
        if (!t.isMesh) return;
        let n = Array.isArray(t.material) ? t.material : [t.material];
        for (let e of n) e.forceSinglePass = !0;
        if (!Array.isArray(t.material)) {
          let e = Et(this.playerKey, t.material.name || ``);
          if (e) {
            o.push({ mesh: t, role: e });
            return;
          }
        }
        n.forEach((e, n) => {
          let a = (e.name || ``).toLowerCase();
          if (a === `tail_light_brake` || a.includes(`brake_light`)) {
            let r = e.clone();
            ((r.emissive = new c(16713216)),
              (r.emissiveIntensity = 0),
              (r.toneMapped = !1),
              Array.isArray(t.material)
                ? (t.material[n] = r)
                : (t.material = r),
              this.playerBrakeOnly.push(r));
          } else if (
            a.startsWith(`tail`) ||
            a === `taillight_rear` ||
            a === `taillight_glass`
          ) {
            let r = e.clone();
            ((r.emissive = new c(16714242)),
              (r.emissiveIntensity = 0.8),
              (r.toneMapped = !1),
              Array.isArray(t.material)
                ? (t.material[n] = r)
                : (t.material = r),
              this.playerTail.push(r));
          } else if (
            a.includes(`headlight`) ||
            a.includes(`daylight`) ||
            a === `light`
          ) {
            let r = e.clone();
            ((r.emissive = new c(16774892)),
              (r.emissiveIntensity = 0.6),
              Array.isArray(t.material)
                ? (t.material[n] = r)
                : (t.material = r),
              this.playerHead.push(r));
          } else if (a === `exhaust`) {
            i.setFromObject(t);
            let e = i.getCenter(new P());
            ((e.z = i.max.z), r.push(e));
          }
        });
      });
      let s = this.setupRealLamps(n, o),
        l = [
          new P(-0.46, 0.94, 1.25),
          new P(-0.4, 0.955, 1.48),
          new P(-0.28, 0.965, 1.62),
          new P(0, 0.968, 1.64),
          new P(0.28, 0.965, 1.62),
          new P(0.4, 0.955, 1.48),
          new P(0.46, 0.94, 1.25),
        ],
        u = new a(l),
        d = new se(u, 32, 0.016, 8, !1),
        f = new C({
          color: 16717061,
          transparent: !0,
          opacity: 0.98,
          toneMapped: !1,
        }),
        p = new S(d, f);
      ((p.name = `engine-cowl-brake-strip`), (p.visible = !1));
      {
        let r = mt(n, new e().setFromObject(n)),
          i = Math.min(0.62, r.halfW * 0.6),
          a = new t(i, 0.018, 0.025).translate(i / 2, 0.012, 0),
          o = new w({ color: 723724, roughness: 0.5, metalness: 0.3 });
        for (let e of [-r.halfW * 0.62, r.halfW * 0.02]) {
          let t = new S(a, o);
          ((t.name = `wiper`),
            (t.rotation.order = `XYZ`),
            t.position.set(e, r.baseY, r.baseZ),
            n.add(t),
            this.playerWipers.push({ mesh: t, tilt: r.tilt }));
        }
      }
      let m = [];
      (n.traverse((t) => {
        let n = t;
        if (
          !n.isMesh ||
          m.length ||
          (
            (Array.isArray(n.material) ? n.material[0] : n.material)?.name || ``
          ).toLowerCase() !== `exhaust`
        )
          return;
        let r = n.geometry.getAttribute(`position`),
          i = new P(),
          a = [new e(), new e()];
        for (let e = 0; e < r.count; e++)
          (i.fromBufferAttribute(r, e).applyMatrix4(n.matrixWorld),
            a[i.x < 0 ? 0 : 1].expandByPoint(i));
        for (let e of a) {
          if (e.isEmpty()) continue;
          let t = e.getCenter(new P());
          ((t.z = e.max.z), m.push(t));
        }
      }),
        this.playerKey === `svj` &&
          ((m.length = 0), m.push(new P(-$.x, $.y, $.z), new P($.x, $.y, $.z))),
        m.length !== 2 &&
          ((m.length = 0),
          m.push(new P(-0.14, 0.78, 2.45), new P(0.14, 0.78, 2.45))));
      for (let e of m) this.flames.push(this.makeFlame(n, e));
      (this.headL.position.set(-0.7, 0.75, -2.2),
        this.headR.position.set(0.7, 0.75, -2.2),
        this.low || n.add(this.headL, this.headR),
        this.headL.target.position.set(-0.9, 0, -30),
        this.headR.target.position.set(0.9, 0, -30),
        this.low || n.add(this.headL.target, this.headR.target),
        (this.playerShadow = this.addContactShadow(this.scene, 2.25, 5)),
        (this.sunShadow = this.addContactShadow(this.scene, 2.9, 5.9)),
        (this.sunShadow.position.y = 0.016));
      let h = gn([
          [0, `rgba(255,255,255,0.5)`],
          [0.18, `rgba(255,255,255,0.22)`],
          [0.55, `rgba(255,255,255,0.06)`],
          [1, `rgba(255,255,255,0)`],
        ]),
        g = (e, t, r, i, a) => {
          let o = new C({
              map: h,
              color: i === `head` ? 16774374 : 16714242,
              transparent: !0,
              opacity: 0,
              depthWrite: !1,
              blending: 2,
              toneMapped: !1,
            }),
            s = new S(new k(a, a * 0.65), o);
          (s.position.set(e, t, r),
            i === `head` && (s.rotation.y = Math.PI),
            n.add(s),
            this.lightHalos.push({ mesh: s, kind: i }));
        };
      if (s.head.length || s.tail.length) {
        let e = (e) => Math.min(0.7, Math.max(0.28, (e.max.x - e.min.x) * 1.4));
        for (let t of s.head) {
          let n = t.getCenter(new P());
          g(n.x, n.y, t.min.z - 0.03, `head`, e(t));
        }
        for (let t of s.tail) {
          let n = t.getCenter(new P());
          g(n.x, n.y, t.max.z + 0.03, `tail`, e(t));
        }
        let [t, n] = s.head;
        if (t && n) {
          let e = t.getCenter(new P()),
            r = n.getCenter(new P()),
            [i, a] = e.x < r.x ? [e, r] : [r, e];
          (this.headL.position.set(i.x, i.y, t.min.z - 0.05),
            this.headR.position.set(a.x, a.y, n.min.z - 0.05));
        }
      } else
        for (let e of [-0.79, 0.79])
          (g(e, 0.73, 2.43, `tail`, 0.72), g(e, 0.56, -2.47, `head`, 0.56));
      let _ = Q(512, 1024, (e) => {
          e.clearRect(0, 0, 512, 1024);
          for (let t of [185, 327]) {
            let n = e.createRadialGradient(t, 160, 20, t, 520, 480);
            (n.addColorStop(0, `rgba(255, 248, 225, 0.85)`),
              n.addColorStop(0.35, `rgba(255, 238, 195, 0.45)`),
              n.addColorStop(0.72, `rgba(230, 215, 175, 0.16)`),
              n.addColorStop(1, `rgba(200, 190, 160, 0)`),
              (e.fillStyle = n),
              e.beginPath(),
              e.ellipse(t, 480, 165, 460, 0, 0, Math.PI * 2),
              e.fill());
          }
        }),
        v = new S(
          new k(8.2, 52),
          new C({
            map: _,
            color: 16775914,
            transparent: !0,
            opacity: 0.52,
            depthWrite: !1,
            blending: 2,
          }),
        );
      ((v.rotation.x = -Math.PI / 2),
        v.position.set(0, 0.025, -27),
        (v.name = `road-beam`),
        (v.visible = !1),
        n.add(v),
        (this.roadBeamMesh = v),
        (this.playerWheels.length = 0),
        n.traverse((e) => {
          let t = e;
          t.isMesh &&
            t.userData.wheel &&
            ((t.rotation.order = `YXZ`),
            this.playerWheels.push({
              mesh: t,
              radius: t.userData.radius || 0.34,
              front: t.userData.front === !0 || /_[LR]F$/.test(t.name),
            }));
        }),
        (this.player = n),
        (this.steeringWheel = n.getObjectByName(`steering-wheel`) ?? null),
        (this.wing = n.getObjectByName(`active-wing`)),
        (this.wingBaseY = this.wing?.position.y ?? 0.96),
        (this.wingRise = this.playerKey === `revuelto` ? It : 0.17),
        this.scene.add(n));
    }
    setupRealLamps(t, n) {
      let r = { head: [], tail: [] };
      if (!n.length) return r;
      t.updateMatrixWorld(!0);
      let i = new x().copy(t.matrixWorld).invert(),
        a = { head: [new e(), new e()], tail: [new e(), new e()] },
        o = (e, t) => {
          let n = e.clone();
          return (
            (n.emissive = new c(t === `head` ? 16774376 : 16714242)),
            t !== `head` && n.map && !n.emissiveMap && (n.emissiveMap = n.map),
            t === `head` &&
              ((n.emissiveMap = null),
              this.playerKey === `svj` &&
                ((n.map = null),
                (n.alphaMap = null),
                (n.transparent = !1),
                (n.opacity = 1),
                (n.alphaTest = 0),
                n.color.set(2763824),
                (n.polygonOffset = !0),
                (n.polygonOffsetFactor = -8),
                (n.polygonOffsetUnits = -40))),
            this.playerKey === `svj` &&
              t !== `head` &&
              n.color.multiplyScalar(0.12),
            (n.toneMapped = t === `head`),
            (n.emissiveIntensity = 0),
            (t === `head`
              ? this.playerHead
              : t === `tail`
                ? this.playerTail
                : this.playerBrakeOnly
            ).push(n),
            n
          );
        },
        s = new P();
      for (let { mesh: e, role: r } of n) {
        let n = new x().multiplyMatrices(i, e.matrixWorld),
          c = e.geometry,
          l = c.getAttribute(`position`),
          u = c.getIndex(),
          d = (u ? u.count : l.count) / 3,
          f = (e, t) => (u ? u.getX(e * 3 + t) : e * 3 + t),
          p = [],
          m = [];
        for (let e = 0; e < d; e++) {
          let t = 0;
          for (let r = 0; r < 3; r++)
            t += s.fromBufferAttribute(l, f(e, r)).applyMatrix4(n).z;
          (t < 0 ? p : m).push(f(e, 0), f(e, 1), f(e, 2));
        }
        let h =
            r === `lamp`
              ? [
                  [p, `head`],
                  [m, `tail`],
                ]
              : [
                  [m, r],
                  [p, r],
                ],
          g = e.parent ?? t;
        for (let [t, r] of h) {
          if (!t.length) continue;
          let i = c.clone();
          i.setIndex(t);
          let u = new S(i, o(e.material, r));
          if (
            ((u.name = `${e.name}-${r}`),
            u.position.copy(e.position),
            u.quaternion.copy(e.quaternion),
            u.scale.copy(e.scale),
            (u.renderOrder = e.renderOrder),
            g.add(u),
            r !== `brake`)
          )
            for (let e of t)
              (s.fromBufferAttribute(l, e).applyMatrix4(n),
                a[r][s.x < 0 ? 0 : 1].expandByPoint(s));
        }
        g.remove(e);
      }
      for (let e of [`head`, `tail`])
        for (let t of a[e]) t.isEmpty() || r[e].push(t);
      return r;
    }
    makeFlame(e, t) {
      let n = new g();
      n.position.copy(t);
      let r = (e, t) => {
          let r = new u(
            e * 0.25,
            e,
            1,
            this.low ? 10 : 20,
            this.low ? 5 : 12,
            !0,
          );
          (r.translate(0, 0.5, 0), r.rotateX(Math.PI / 2));
          let i = new ne({
              vertexShader: _n,
              fragmentShader: vn,
              uniforms: {
                uTime: { value: 0 },
                uIntensity: { value: 0 },
                uSeed: { value: Math.random() * 10 },
                uCore: { value: t },
              },
              transparent: !0,
              depthWrite: !1,
              blending: 2,
              side: 2,
            }),
            a = new S(r, i);
          return ((a.frustumCulled = !1), n.add(a), { mesh: a, mat: i });
        },
        i = r(0.11, 0),
        a = r(0.05, 1);
      a.mesh.scale.set(1, 1, 0.45);
      let o = new ie(
        new ae({
          map: gn([
            [0, `rgba(255,190,110,1)`],
            [0.35, `rgba(255,110,30,0.45)`],
            [1, `rgba(255,60,0,0)`],
          ]),
          transparent: !0,
          depthWrite: !1,
          blending: 2,
        }),
      );
      (o.scale.setScalar(0.6), (o.position.z = 0.15), n.add(o));
      let s = new A(16742954, 0, 7, 2);
      return (
        (s.position.z = 0.4),
        this.low || n.add(s),
        (n.visible = !1),
        e.add(n),
        { group: n, outer: i.mat, core: a.mat, glow: o, light: s }
      );
    }
    trafficBatches = new Map();
    trafficLights = new Map();
    playerWipers = [];
    wiperTmp = new x();
    trafficSignals = new Map();
    trafficWings = new Map();
    wingLift = new WeakMap();
    wingLocal = new x();
    wingWorld = new x();
    wingEuler = new p();
    wingQuat = new j();
    wingPos = new P();
    unitScale = new P(1, 1, 1);
    setupPoliceAventador(e) {
      ((this.policeRed = new w({
        color: 3342336,
        emissive: 16715792,
        emissiveIntensity: 0,
        toneMapped: !1,
      })),
        (this.policeBlue = new w({
          color: 2099,
          emissive: 1723903,
          emissiveIntensity: 0,
          toneMapped: !1,
        })),
        e.updateMatrixWorld(!0));
      let t = new x().copy(e.matrixWorld).invert(),
        n = [];
      e.traverse((e) => {
        let t = e;
        t.isMesh &&
          !Array.isArray(t.material) &&
          t.material.name === `CP_Light` &&
          n.push(t);
      });
      let r = new P();
      for (let i of n) {
        let n = new x().multiplyMatrices(t, i.matrixWorld),
          a = i.geometry,
          o = a.getAttribute(`position`),
          s = a.getIndex(),
          c = (s ? s.count : o.count) / 3,
          l = (e, t) => (s ? s.getX(e * 3 + t) : e * 3 + t),
          u = [],
          d = [];
        for (let e = 0; e < c; e++) {
          let t = 0;
          for (let i = 0; i < 3; i++)
            t += r.fromBufferAttribute(o, l(e, i)).applyMatrix4(n).x;
          (t < 0 ? u : d).push(l(e, 0), l(e, 1), l(e, 2));
        }
        let f = i.parent ?? e;
        for (let [e, t] of [
          [u, this.policeRed],
          [d, this.policeBlue],
        ]) {
          if (!e.length) continue;
          let n = a.clone();
          n.setIndex(e);
          let r = new S(n, t);
          (r.position.copy(i.position),
            r.quaternion.copy(i.quaternion),
            r.scale.copy(i.scale),
            f.add(r));
        }
        f.remove(i);
      }
      (e.traverse((e) => {
        let t = e;
        if (t.isMesh)
          for (let e of Array.isArray(t.material) ? t.material : [t.material])
            e.forceSinglePass = !0;
      }),
        this.addContactShadow(e, 2.15, 4.9),
        (e.visible = !1),
        this.scene.add(e),
        (this.policeCar = e));
    }
    setupTrafficBatch(e, n) {
      let r = [],
        i = [],
        a = null;
      (n.traverse((e) => {
        if (!(e instanceof S)) return;
        let t = Array.isArray(e.material) ? e.material : [e.material];
        for (let e of t) e.forceSinglePass = !0;
        let n = new v(e.geometry, e.material, 128);
        (n.instanceMatrix.setUsage(f),
          (n.frustumCulled = !1),
          (n.count = 0),
          this.scene.add(n),
          e.parent?.name === `active-wing`
            ? ((a = e.parent.position.clone()),
              i.push({ mesh: n, strut: !!e.userData.strut }))
            : r.push(n));
      }),
        a && i.length && this.trafficWings.set(e, { pivot: a, parts: i }));
      let [o, s] = un[e] ?? [2, 4.6],
        c = new v(
          new k(o + 0.15, s + 0.2).rotateX(-Math.PI / 2).translate(0, 0.018, 0),
          new C({
            map: this.contactTex,
            color: 0,
            transparent: !0,
            opacity: 0.86,
            depthWrite: !1,
          }),
          128,
        );
      ((c.frustumCulled = !1),
        this.scene.add(c),
        r.push(c),
        this.trafficBatches.set(e, r));
      let l = _t(e, n, 128, e === `bus` || e === `truck`);
      for (let e of l.all) this.scene.add(e);
      this.trafficLights.set(e, l);
      let u = new v(new t(0.13, 0.08, 0.04), new C({ color: 16752640 }), 256);
      ((u.frustumCulled = !1),
        u.instanceMatrix.setUsage(f),
        this.scene.add(u),
        this.trafficSignals.set(e, u));
    }
    resize(e, t) {
      ((this.width = e),
        (this.height = t),
        this.renderer.setSize(e, t, !1),
        (this.camera.aspect = e / t),
        this.camera.updateProjectionMatrix());
    }
    cycleCamera() {
      return (
        (this.camView = jt(this.camView, he(this.playerKey))),
        (this.canvas.dataset.camMode = this.camView),
        this.camView
      );
    }
    get cameraView() {
      return this.camView;
    }
    render = (e) => {
      let t = performance.now();
      (this.lastFrame &&
        this.low &&
        this.quality.sample((t - this.lastFrame) / 1e3, document.hidden) &&
        (this.renderer.setPixelRatio(this.baseDpr * this.quality.scale),
        this.renderer.setSize(this.width, this.height, !1)),
        (this.lastFrame = t));
      let n = Math.min(e.dt, 0.05);
      this.time += n;
      let { ppm: r } = e,
        i = (t) => (t - e.roadCenterX) / r,
        a = (t) => (t - e.baseY) / r,
        o = e.pz,
        s = Ce(o),
        c = ze(o),
        l = R(o),
        u = De(o) || e.highBeam,
        d = Math.min(1, s * 2) * (1 - s);
      (this.sky
        .copy(this.dayColor)
        .lerp(this.duskColor, d * 0.8)
        .lerp(this.nightColor, s),
        this.sky.lerp(this.rainColor, c * 0.6 * (1 - s)));
      let f = this.tunnelFactor(o);
      ((this.scene.background =
        s < 0.05 && c < 0.05 && f < 0.05 ? this.daySky : this.sky),
        this.fog.color.copy(this.sky).lerp(this.tunnelColor, f),
        (this.fog.near = Z(60, 25, Math.max(c, s * 0.5))),
        (this.fog.far = Z(250, 150, c)),
        (this.sun.intensity = Z(2.9, 0.04, s) * (1 - c * 0.6) * (1 - f)),
        (this.hemi.intensity =
          Z(0.95, 0.38, s) * (1 - c * 0.2) * Z(1, 0.65, f)),
        (this.scene.environmentIntensity = Z(1.15, 0.18, s) * Z(1, 0.35, f)),
        this.reflectionMaps &&
          (this.scene.environment =
            f > 0.5
              ? this.reflectionMaps.tunnel.texture
              : s > 0.45
                ? this.reflectionMaps.night.texture
                : this.reflectionMaps.day.texture));
      let p = Z(1, 0.3, Math.max(s, f));
      ((this.rimWarm.intensity = 0.22 * p),
        (this.rimCool.intensity = 0.32 * p),
        (this.roadMat.roughness = Z(0.96, 0.38, c)),
        this.roadMat.color.setScalar(Z(1, 0.55, c)),
        (this.tunnelLamp.intensity = l
          ? 28 + Math.sin(((o % 8) / 8) * Math.PI * 2) * 10
          : 0));
      let m = e.player.x,
        h = i(m);
      ((this.roadTex.offset.y = (o / cn) % 1),
        this.roadDetail && (this.roadDetail.offset.y = (o / 3.5) % 1),
        (this.grassTex.offset.y = (o / 8) % 1),
        this.layoutScenery(o, s),
        this.placeLandmarks(o));
      let g = z(o);
      (g > 1400 - q - 60 && g < 2415 + J + 60
        ? this.clipSpan(this.waterClip, o, I, B)
        : this.clipSpan(this.waterClip, o, L, Ee),
        this.clipSpan(this.bridgeClip, o, je, Ne),
        this.updateDualCarriageway(o),
        this.map?.loaded && this.map.update(o, s, this.time));
      let _ = Te(o);
      if (
        (this.sun.color.copy(this.sunWhite).lerp(this.sunGold, _),
        _ > 0.02 &&
          (this.sky.lerp(this.sunsetColor, _ * 0.55 * (1 - s * 0.6)),
          (this.scene.background = this.sky),
          this.fog.color.lerp(this.sunsetColor, _ * 0.4)),
        this.sun.position.set(h + 8, 22, -6),
        this.sun.target.position.set(h, 0, -8),
        this.player)
      ) {
        let t = this.player;
        if (
          (t.position.set(h, 0, 0),
          this.playerShadow &&
            ((this.playerShadow.position.x = h),
            (this.playerShadow.rotation.z = e.player.rot)),
          this.sunShadow)
        ) {
          let t = Be(o, l, s);
          ((this.sunShadow.position.x = h + t.x),
            (this.sunShadow.position.z = t.z),
            (this.sunShadow.rotation.z = e.player.rot),
            (this.sunShadow.material.opacity = t.strength));
        }
        ((t.rotation.y = -e.player.rot),
          (this.body = Ye(
            this.body,
            e.player.rot,
            e.player.speed,
            e.braking,
            n,
          )),
          (t.rotation.z = this.body.roll),
          (t.rotation.x = this.body.pitch));
        for (let t of this.playerWheels)
          ((t.mesh.rotation.x -= Vt(e.player.speed, e.braking, t.radius) * n),
            t.front && (t.mesh.rotation.y = Ut(e.steer ?? 0)));
        if (this.steeringWheel) {
          let t = this.steeringWheel.userData.axis;
          this.steeringWheel.quaternion.setFromAxisAngle(t, -_e(e.steer ?? 0));
        }
        if (
          (this.revDash?.update(e.player.speed, e.gas, n),
          (this.aero =
            this.playerKey === `revuelto`
              ? Lt(this.aero, e.player.speed, e.gas, e.braking, n)
              : Ft(this.aero, e.player.speed, e.braking, n)),
          this.wing)
        ) {
          this.wing.position.y =
            this.wingBaseY + this.aero.lift * this.wingRise;
          for (let e of this.wing.children)
            e.userData.strut
              ? (e.position.y = -this.aero.lift * this.wingRise * 0.45)
              : this.playerKey === `chiron` && (e.rotation.x = this.aero.tilt);
          this.playerKey !== `chiron` &&
            (this.wing.rotation.x = this.aero.tilt);
          for (let e of t.children.filter((e) => e.name === `wing-support`))
            ((e.visible = this.aero.lift > 0.02),
              (e.scale.y = this.aero.lift),
              (e.position.y = 0.8 + this.aero.lift * 0.085));
        }
        let r = e.braking;
        this.engineBrakeLight && (this.engineBrakeLight.visible = r);
        for (let e of this.playerBrakeOnly) e.emissiveIntensity = r ? 4 : 0;
        if (this.playerKey === `chiron`) {
          for (let e of this.playerTail)
            e.emissiveIntensity = r ? 2.6 : u ? 1.5 : 0.2;
          for (let e of this.playerHead) e.emissiveIntensity = u ? 3.8 : 0.6;
        } else {
          let e = Ot(u, r, Dt.has(this.playerKey));
          for (let t of this.playerTail) t.emissiveIntensity = e.tail;
          for (let t of this.playerHead) t.emissiveIntensity = e.head;
          for (let t of this.playerBrakeOnly) t.emissiveIntensity = e.brake;
        }
        let i = Dt.has(this.playerKey);
        for (let { mesh: e, kind: t } of this.lightHalos)
          ((e.material.opacity =
            t === `brake`
              ? r
                ? 0.65
                : 0
              : t === `tail`
                ? r
                  ? 0.65
                  : u
                    ? 0.44
                    : i
                      ? 0
                      : 0.035
                : u
                  ? 0.35
                  : i
                    ? 0
                    : 0.015),
            (e.visible = e.material.opacity > 0));
        this.roadBeamMesh &&
          ((this.roadBeamMesh.visible = u),
          (this.roadBeamMesh.material.opacity = e.highBeam
            ? 0.85
            : l
              ? 0.72
              : 0.52));
        for (let e of t.children) e.name === `road-beam` && (e.visible = u);
        let a = e.highBeam ? 260 : u ? 140 : 0;
        ((this.headL.intensity = this.headR.intensity = a),
          (this.headL.distance = this.headR.distance = e.highBeam ? 160 : 90));
        let d = ct(this.time, c);
        for (let e of this.playerWipers)
          (e.mesh.rotation.set(e.tilt, 0, d * 0.95), (e.mesh.visible = !0));
        if (this.chironRig) {
          let e = this.chironRig;
          this.playerLocal.identity();
          for (let t of [e.front, e.rear, e.frontGlow, e.rearGlow])
            (t.setMatrixAt(0, this.playerLocal),
              (t.instanceMatrix.needsUpdate = !0));
          ((e.front.material.opacity = u ? 1 : 0.18),
            (e.rear.material.opacity = r ? 1 : u ? 0.8 : 0),
            (e.frontGlow.material.opacity = u ? 0.35 : 0),
            (e.rearGlow.material.opacity = r ? 0.5 : u ? 0.25 : 0),
            e.wiper.pivots.forEach((t, n) =>
              e.wipers.setMatrixAt(
                n,
                wt(this.playerLocal, t, e.wiper.tilt, d, this.wiperTmp),
              ),
            ),
            (e.wipers.instanceMatrix.needsUpdate = !0));
        }
        (this.playerKey === `revuelto` || this.playerKey === `svj`) &&
          this.updateFlames(e, n);
      }
      let v = oncomingTraffic(o, this.time, 285, J);
      for (let [t, r] of this.trafficBatches) {
        let o = 0,
          s = 0,
          d = this.trafficSignals.get(t),
          f = this.trafficWings.get(t);
        for (let l of e.traffic) {
          let e = a(l.y);
          if (ln[l.type] !== t || e < -285 || e > J || o >= 128) continue;
          (this.positionVector.set(i(l.x), 0, e),
            this.quaternion.setFromAxisAngle(T.DEFAULT_UP, -l.rot),
            this.scaleVector.set(1, 1, 1),
            this.matrix.compose(
              this.positionVector,
              this.quaternion,
              this.scaleVector,
            ));
          for (let e of r) e.setMatrixAt(o, this.matrix);
          let u = this.trafficLights.get(t);
          if (u) {
            (u.front.setMatrixAt(o, this.matrix),
              u.rear.setMatrixAt(o, this.matrix),
              u.frontGlow.setMatrixAt(o, this.matrix),
              u.rearGlow.setMatrixAt(o, this.matrix));
            let e = ct(this.time, c, (o * 0.37) % 1);
            u.wiper.pivots.forEach((t, n) =>
              u.wipers.setMatrixAt(
                o * 2 + n,
                wt(this.matrix, t, u.wiper.tilt, e, this.wiperTmp),
              ),
            );
          }
          if (f) {
            let e =
                !l.hit && (!!l.sportPush || l.yieldState === `accelerating`),
              t = Bt(this.wingLift.get(l) ?? 0, e, n);
            this.wingLift.set(l, t);
            for (let { mesh: e, strut: n } of f.parts)
              (this.wingPos.copy(f.pivot),
                (this.wingPos.y += t * Rt * (n ? 0.55 : 1)),
                this.wingEuler.set(n ? 0 : t * zt, 0, 0),
                this.wingQuat.setFromEuler(this.wingEuler),
                this.wingLocal.compose(
                  this.wingPos,
                  this.wingQuat,
                  this.unitScale,
                ),
                this.wingWorld.multiplyMatrices(this.matrix, this.wingLocal),
                e.setMatrixAt(o, this.wingWorld));
          }
          if (d && l.signal !== 0 && Math.floor(l.signalTimer * 2.6) % 2 == 0) {
            let [t, n] = F[l.type];
            (this.positionVector.set(
              i(l.x) + l.signal * (t / 2 - 0.12),
              l.type === `bus` || l.type === `truck` ? 1.1 : 0.82,
              e + n / 2 + 0.03,
            ),
              this.matrix.compose(
                this.positionVector,
                this.quaternion,
                this.scaleVector,
              ),
              d.setMatrixAt(s++, this.matrix));
          }
          o++;
        }
        for (let e of v) {
          if (e.model !== t || o >= 128) continue;
          (this.positionVector.set(e.x, 0, e.z),
            this.quaternion.setFromAxisAngle(T.DEFAULT_UP, Math.PI),
            this.scaleVector.set(1, 1, 1),
            this.matrix.compose(
              this.positionVector,
              this.quaternion,
              this.scaleVector,
            ));
          for (let e of r) e.setMatrixAt(o, this.matrix);
          let n = this.trafficLights.get(t);
          if (n) {
            (n.front.setMatrixAt(o, this.matrix),
              n.rear.setMatrixAt(o, this.matrix),
              n.frontGlow.setMatrixAt(o, this.matrix),
              n.rearGlow.setMatrixAt(o, this.matrix));
            let e = ct(this.time, c, (o * 0.37) % 1);
            n.wiper.pivots.forEach((t, r) =>
              n.wipers.setMatrixAt(
                o * 2 + r,
                wt(this.matrix, t, n.wiper.tilt, e, this.wiperTmp),
              ),
            );
          }
          o++;
        }
        for (let e of f ? [...r, ...f.parts.map((e) => e.mesh)] : r)
          ((e.count = o),
            (e.visible = o > 0),
            (e.instanceMatrix.needsUpdate = !0));
        let p = this.trafficLights.get(t);
        if (p) {
          let e = st(u);
          ((p.front.material.opacity = e.front),
            (p.rear.material.opacity = e.rear),
            (p.frontGlow.material.opacity = e.glow * (l ? 0.9 : 0.75)),
            (p.rearGlow.material.opacity = e.glow * 0.6));
          for (let e of p.all)
            ((e.count = e === p.wipers ? o * 2 : o),
              (e.instanceMatrix.needsUpdate = !0));
          ((p.front.visible = o > 0),
            (p.wipers.visible = o > 0),
            (p.rear.visible = p.rearGlow.visible = o > 0 && e.rear > 0),
            (p.frontGlow.visible = o > 0 && e.glow > 0));
        }
        d &&
          ((d.count = s),
          (d.visible = s > 0),
          (d.instanceMatrix.needsUpdate = !0));
      }
      if (this.policeCar) {
        let t = e.police,
          n = a(t.y),
          r = e.mode === `police` && t.active && n > -285 && n < J;
        if (((this.policeCar.visible = r), r)) {
          (this.policeCar.position.set(i(t.x), 0, n),
            (this.policeCar.rotation.y = -t.rot));
          let e = (this.time * 2.2) % 1,
            r = (t) =>
              (e > t && e < t + 0.09) || (e > t + 0.15 && e < t + 0.24);
          (this.policeRed &&
            (this.policeRed.emissiveIntensity = r(0) ? 6 : 0.15),
            this.policeBlue &&
              (this.policeBlue.emissiveIntensity = r(0.5) ? 6 : 0.15));
        }
      }
      (this.updateParticles(e, i, a),
        this.updateRain(c, n, e.player.speed, l),
        (this.camX = Z(this.camX, h, 1 - Math.exp(-6 * n))));
      let y = Math.min(1, e.player.speed / 340),
        b = e.gas && e.player.speed < 345 ? (e.boostActive ? 1 : 0.7) : 0;
      this.camPull = Z(
        this.camPull,
        b,
        1 - Math.exp(-(b > this.camPull ? 1.6 : 2.4) * n),
      );
      let x =
          this.camView === `cockpit` && this.player
            ? ve[this.playerKey]
            : void 0,
        S = x ? 70 + y * 8 : 60 + y * 12,
        C = x ? 0.03 : 0.1;
      (Math.abs(this.camera.fov - S) > 0.05 || this.camera.near !== C) &&
        ((this.camera.fov = S),
        (this.camera.near = C),
        this.camera.updateProjectionMatrix());
      for (let e of this.cabinOnly) e.visible = !!x;
      let w = e.shake * 0.012,
        E = this.camView === `cockpit` && !x ? `hood` : this.camView,
        D = E === `chase` || E === `cockpit` ? null : At[E];
      if (x && this.player) {
        let t = this.player;
        (t.updateMatrixWorld(),
          (this.head = $e(this.head, {
            rot: e.player.rot,
            speedKmh: e.player.speed,
            steer: e.steer ?? 0,
            braking: e.braking,
            shake: Math.min(1, e.shake),
            dt: n,
          })));
        let r = this.head,
          [i, a, o] = x.eye;
        (this.eyeVector
          .set(i + r.x, a + r.y, o + r.z)
          .applyMatrix4(t.matrixWorld),
          this.lookVector
            .set(i + r.x, a + r.y - (x.drop ?? 0.9), o + r.z - 30)
            .applyMatrix4(t.matrixWorld),
          this.camera.position.copy(this.eyeVector),
          this.camera.up.set(0, 1, 0),
          this.camera.lookAt(this.lookVector),
          this.headEuler.set(r.pitch, r.yaw, this.body.roll * 0.45 + r.roll),
          this.camera.quaternion.multiply(
            this.headQuat.setFromEuler(this.headEuler),
          ));
      } else if (!D)
        (this.camera.position.set(
          this.camX * 0.9 + (Math.random() - 0.5) * w,
          2.05 - y * 0.25 + this.camPull * 0.14 + (Math.random() - 0.5) * w,
          6.6 - y * 0.8 + this.camPull * 0.75,
        ),
          this.camera.lookAt(this.camX * 0.95, 0.85, -16));
      else {
        let e = w * 0.5;
        (this.camera.position.set(
          this.camX + D.pos.dx + (Math.random() - 0.5) * e,
          D.pos.y + (Math.random() - 0.5) * e,
          D.pos.z,
        ),
          this.camera.lookAt(this.camX + D.look.dx, D.look.y, D.look.z));
      }
      (this.overlay &&
        (this.overlay.style.opacity = String(Math.min(0.6, e.flash * 0.6))),
        this.renderer.render(this.scene, this.camera),
        !this.ready &&
          this.player &&
          this.canvas.dataset.modelsReady === `true` &&
          ((this.ready = !0), this.onReady?.()));
    };
    tunnelFactor(e) {
      let t = z(e);
      if (t < 1395 || t > 2420) return 0;
      let n = Math.min(1, (t - I + 5) / 25),
        r = Math.min(1, (B + 5 - t) / 25);
      return Math.max(0, Math.min(n, r));
    }
    nearest(e, t) {
      let n = e - z(e) + t;
      return (n < e - J - 40 && (n += Oe), -(n - e));
    }
    clipSpan(e, t, n, r) {
      let i = this.nearest(t, n),
        [a, o] = e;
      ((a.constant = -i), (o.constant = i - (r - n)));
    }
    placeLandmarks(e) {
      let t = B - I,
        n = e - z(e) + I;
      n + t < e - J && (n += Oe);
      let r = -(n - e);
      ((this.tunnel.position.z = r),
        (this.tunnel.visible = r > -340 && r - t < J + 60));
      let i = (t, n) => {
        let r = n
          .map((t) => this.nearest(e, t))
          .filter((e) => e > -260 && e < J)
          .sort((e, t) => t - e);
        t.forEach((e, t) => {
          let n = r[t];
          ((e.visible = n !== void 0), n !== void 0 && (e.position.z = n));
        });
      };
      (i(
        this.bridges,
        Fe.map(([e, t]) => (e + t) / 2),
      ),
        i(this.gantries, we),
        i(this.radars, Me));
    }
    layoutScenery(e, t) {
      let n = this.matrix,
        r = this.quaternion,
        i = this.scaleVector,
        a = this.positionVector,
        o = this.map?.hasPines ?? !1,
        s = (e) => {
          let t = z(e);
          return t >= 2650 && t < 3140;
        },
        c = (e) => R(e) || s(e),
        l = (e) =>
          c(e) ||
          (o && Re(e) === `night-highway`) ||
          R(e + 90) ||
          R(e - 90);
      if (this.city) {
        let o = 0;
        for (
          let t = Math.floor((e - J) / 28);
          t * 28 < e + q + 90 && o < 72;
          t++
        )
          for (let s of [-1, 1]) {
            let c = t * 28;
            if (l(c)) continue;
            let u = X(t * 13 + s),
              h = X(t * 5 + s),
              d = 14 + h * h * 62,
              f = s * (44 + u * 46),
              p = 13 + X(t * 7 + s) * 10,
              m = 13 + X(t * 8 - s) * 12;
            (this.city.place(f, -(c - e), p, d, m, t * 2 + (s > 0 ? 1 : 0)), o++);
          }
        this.city.commit(t);
      }
      let u = 0,
        d = Math.floor((e - J) / 4);
      let studs = 0;
      for (let t = d; u < 297; t++) {
        let r = t * 4;
        if (r > e + 160) break;
        if (!s(r))
          for (let t of [-1, 1])
            (t < 0 && inSpan(r, DUAL_START, BRIDGE_END)) ||
              (n.makeTranslation(t * 7.55, 0, -(r - e)),
              this.posts.setMatrixAt(u++, n));
        (isDualHighway(r) &&
          (n.makeTranslation(OPP_RAIL_X - 0.05, 0, -(r - e)),
          this.posts.setMatrixAt(u++, n)),
          this.barrierStuds &&
            t % 2 == 0 &&
            studs < 64 &&
            hasOppositeRoad(r) &&
            (n.makeTranslation(MEDIAN_X + 0.115, 0.55, -(r - e)),
            this.barrierStuds.setMatrixAt(studs++, n)));
      }
      this.barrierStuds &&
        ((this.barrierStuds.count = studs),
        (this.barrierStuds.instanceMatrix.needsUpdate = !0));
      ((this.posts.count = u),
        (this.posts.instanceMatrix.needsUpdate = !0),
        (u = 0));
      let f = Math.floor((e - J) / 7);
      for (let t = f; u < 139; t++) {
        let o = t * 7;
        if (o > e + (this.low ? 120 : q)) break;
        for (let s of [-1, 1]) {
          let c = X(t * 2 + +(s > 0));
          if (c < 0.25 || l(o)) continue;
          let d =
              s < 0 && hasOppositeRoad(o) ? -(25 + c * 24) : s * (13 + c * 26),
            f = 0.75 + X(t * 7.3 + s) * 0.6;
          (a.set(d, 0, -(o - e)),
            i.set(f, f * (0.9 + c * 0.35), f),
            r.setFromAxisAngle(T.DEFAULT_UP, c * 6),
            n.compose(a, r, i),
            this.trees.add(X(t * 3.7 + s * 1.3) < 0.55 ? 0 : 1, n, t * 2 + s),
            u++);
        }
      }
      (this.trees.commit(), (u = 0));
      let p = Math.floor((e - J) / 45),
        hu = 0;
      for (let t = p; u < 24 && hu < 47; t++) {
        let o = t * 45;
        if (o > e + (this.low ? 120 : q)) break;
        if (c(o)) continue;
        let median = hasOppositeRoad(o),
          s = t % 2 == 0 ? -1 : 1,
          l = median ? MEDIAN_X : s * 8.4;
        (a.set(l, 0, -(o - e)),
          r.setFromAxisAngle(T.DEFAULT_UP, 0),
          i.set(1, 1, 1),
          n.compose(a, r, i),
          this.lampPoles.setMatrixAt(u, n));
        // Median lamps light both carriageways.
        for (let d of median ? [-1, 1] : [s])
          (n.makeTranslation(l - d * 0.8, 0, -(o - e)),
            this.lampHeads.setMatrixAt(hu, n),
            n.makeTranslation(l - d * 3.2, 0, -(o - e)),
            this.lampPools.setMatrixAt(hu, n),
            hu++);
        u++;
      }
      ((this.lampPoles.count = u),
        (this.lampHeads.count = this.lampPools.count = hu),
        (this.lampPoles.instanceMatrix.needsUpdate =
          this.lampHeads.instanceMatrix.needsUpdate =
          this.lampPools.instanceMatrix.needsUpdate =
            !0));
      let m = Math.max(0, (t - 0.25) / 0.75);
      ((this.lampHeadMat.emissiveIntensity = m * 4),
        (this.lampPoolMat.opacity = m * 0.55));
    }
    updateFlames(e, t) {
      let n = 0,
        r = 0,
        i = this.playerKey === `svj`;
      (e.boostActive && !i
        ? ((n = 1), (r = 1.05 + Math.random() * 0.45))
        : e.exhaustFlame > 0
          ? ((n = Math.min(1, e.exhaustFlame / 0.18)),
            (r = 0.9 + Math.random() * 0.7))
          : !e.gas &&
            e.player.speed > 120 &&
            e.phase === `playing` &&
            ((this.popT -= t),
            this.popT <= 0 &&
              ((this.popT = 0.08 + Math.random() * 0.35),
              Math.random() < 0.45 &&
                ((n = 0.55), (r = 0.3 + Math.random() * 0.3)))),
        i && (r *= 0.6),
        (this.flameAmt =
          n > this.flameAmt ? n : this.flameAmt * Math.exp(-14 * t)),
        (this.flameLen = r > 0 ? r : this.flameLen * Math.exp(-8 * t)));
      let a = this.flameAmt > 0.02;
      for (let e of this.flames) {
        if (((e.group.visible = a), !a)) continue;
        let t = 0.75 + Math.random() * 0.5,
          n = Math.max(0.12, this.flameLen * t);
        (e.group.scale.set(1 + this.flameAmt * 0.3, 1 + this.flameAmt * 0.3, n),
          e.glow.scale.set(0.55 * t, 0.55 * t, 0.55 / n));
        for (let n of [e.outer, e.core]) {
          let e = n.uniforms.uTime,
            r = n.uniforms.uIntensity;
          (e && (e.value = this.time),
            r && (r.value = this.flameAmt * t * 1.4));
        }
        e.light.intensity = this.flameAmt * t * 14;
      }
    }
    updateParticles(e, t, n) {
      let r = 0;
      for (let i of e.particles) {
        if (r >= this.sprites.length) break;
        if (i.kind === `flame`) continue;
        let a = this.sprites[r++];
        if (!a) break;
        let o = a.material,
          s = i.life / i.max;
        ((a.visible = !0),
          a.position.set(
            t(i.x),
            i.kind === `rubber`
              ? (i.h ?? 0.02)
              : 0.4 +
                  (i.kind === `smoke`
                    ? s * 2.4
                    : i.kind === `spark`
                      ? 0.4
                      : 0.15),
            n(i.y),
          ));
        let c =
          (i.size / e.ppm) *
          (i.kind === `smoke` ? 2.2 : i.kind === `spark` ? 3 : 1.6);
        (a.scale.setScalar(Math.max(0.05, c)),
          i.kind === `spark`
            ? ((o.map = this.sparkTex),
              (o.blending = 2),
              o.color.setHex(16777215))
            : ((o.map = this.smokeTex),
              (o.blending = 1),
              o.color.setHex(
                i.kind === `spray`
                  ? 14015974
                  : i.dark
                    ? 2763308
                    : i.kind === `debris` || i.kind === `rubber`
                      ? 1118481
                      : 10132126,
              )),
          (o.opacity =
            i.kind === `rubber`
              ? i.alpha * Math.min(1, (1 - s) * 3)
              : i.alpha * (1 - s)));
      }
      for (; r < this.sprites.length; r++) {
        let e = this.sprites[r];
        e && (e.visible = !1);
      }
    }
    updateRain(e, t, n, r) {
      let i = this.rain.material;
      if (
        ((i.opacity = r ? 0 : e * 0.55),
        (this.rain.visible = i.opacity > 0.01),
        !this.rain.visible)
      )
        return;
      this.rain.position.x = this.camX;
      let a = 22 * t,
        o = (n / 3.6) * t,
        s = this.rainPos;
      for (let e = 0; e < s.length / 6; e++) {
        let t = e * 6;
        ((s[t + 1] = (s[t + 1] ?? 0) - a),
          (s[t + 4] = (s[t + 4] ?? 0) - a),
          (s[t + 2] = (s[t + 2] ?? 0) + o),
          (s[t + 5] = (s[t + 5] ?? 0) + o),
          ((s[t + 1] ?? 0) < 0 || (s[t + 2] ?? 0) > 10) &&
            this.resetDrop(e, !1));
      }
      this.rain.geometry.attributes.position.needsUpdate = !0;
    }
    addContactShadow(e, t, n) {
      let r = new S(
        new k(t, n),
        new C({
          map: this.contactTex,
          color: 0,
          transparent: !0,
          opacity: 0.86,
          depthWrite: !1,
        }),
      );
      return (
        (r.rotation.x = -Math.PI / 2),
        (r.position.y = 0.018),
        e.add(r),
        r
      );
    }
    dispose() {
      ((this.disposed = !0),
        this.reflectionMaps?.day.dispose(),
        this.reflectionMaps?.night.dispose(),
        this.reflectionMaps?.tunnel.dispose(),
        this.reflectionMaps?.asphalt.dispose(),
        this.roadDetail?.dispose(),
        this.daySky.dispose(),
        this.contactTex.dispose(),
        this.roadTex.dispose(),
        this.renderer.dispose(),
        this.scene.traverse((e) => {
          e.geometry?.dispose?.();
        }));
    }
  };
export { yn as Scene3D };
