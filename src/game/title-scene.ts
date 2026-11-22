// @ts-nocheck
/* eslint-disable */
// Ported from the original Supercar Highway Dash build.
import {
  BufferAttribute as e,
  BufferGeometry as t,
  CanvasTexture as n,
  CircleGeometry as r,
  DirectionalLight as i,
  Euler as a,
  FogExp2 as o,
  Group as s,
  HemisphereLight as c,
  IcosahedronGeometry as l,
  InstancedMesh as u,
  Matrix4 as d,
  Mesh as f,
  MeshBasicMaterial as p,
  MeshPhysicalMaterial as m,
  MeshStandardMaterial as h,
  PMREMGenerator as g,
  PerspectiveCamera as _,
  PlaneGeometry as v,
  Points as y,
  PointsMaterial as b,
  Quaternion as x,
  RepeatWrapping as S,
  SRGBColorSpace as C,
  Scene as w,
  TextureLoader as T,
  Vector3 as E,
  WebGLRenderer as D,
} from "three";
import { loadCar as O } from "./models3d";
import { n as k, t as A } from "./quality";
var j = `/__l5e/assets-v1/af98ee7f-d595-4383-adca-5866f436d43e/title-sky-DeKgOAgj.jpg`,
  M = `/__l5e/assets-v1/9451424a-5791-44b9-8835-29db3731f592/title-dirt-ebII1ys6.jpg`,
  N = (e, t, n) => new E(e, t, n),
  P = [
    { key: `revuelto`, x: 0, z: 0, yaw: Math.PI + 0.35 },
    { key: `svj`, x: -3.6, z: -1.6, yaw: Math.PI + 0.75 },
    { key: `chiron`, x: 3.7, z: -1.2, yaw: Math.PI - 0.2, lowKey: `huayra` },
    { key: `laferrari`, x: -0.6, z: -5.2, yaw: Math.PI + 1.25, heavy: !0 },
  ];
function F(e) {
  return P.filter((t) => !(e && t.heavy)).map((t) =>
    e && t.lowKey ? { ...t, key: t.lowKey } : t,
  );
}
var I = N(0.8, 0.12, 0.58).normalize(),
  L = [
    {
      from: N(-7.5, 0.55, 6.5),
      to: N(6.5, 0.7, 7.2),
      lookFrom: N(-1, 0.6, -1),
      lookTo: N(1, 0.6, -1),
      fov: 32,
      dur: 9,
    },
    {
      from: N(5.2, 1, 7.2),
      to: N(3.9, 0.85, 5.8),
      lookFrom: N(0, 0.6, 0),
      lookTo: N(0, 0.55, 0),
      fov: 28,
      dur: 8,
    },
    {
      from: N(-9.5, 2.8, 8.5),
      to: N(-4.5, 2.1, 10.8),
      lookFrom: N(0, 1, -2),
      lookTo: N(0.5, 0.9, -2),
      fov: 38,
      dur: 9,
    },
    {
      from: N(-6.5, 0.45, -8.5),
      to: N(-8.5, 0.6, -5.5),
      lookFrom: N(0.5, 0.7, -1),
      lookTo: N(0, 0.7, -1.5),
      fov: 34,
      dur: 8,
    },
    {
      from: N(7.5, 0.35, 2.5),
      to: N(6.2, 0.45, 0.2),
      lookFrom: N(2.5, 0.5, -1),
      lookTo: N(0, 0.55, -2),
      fov: 30,
      dur: 8,
    },
  ],
  R = (e) => e * e * (3 - 2 * e);
function z(e, t = 256) {
  let r = document.createElement(`canvas`);
  r.width = r.height = t;
  let i = r.getContext(`2d`),
    a = i.createRadialGradient(t / 2, t / 2, 0, t / 2, t / 2, t / 2);
  for (let [t, n] of e) a.addColorStop(t, n);
  return ((i.fillStyle = a), i.fillRect(0, 0, t, t), new n(r));
}
var B = class {
  canvas;
  fade;
  onReady;
  renderer;
  scene = new w();
  camera = new _(32, 1, 0.1, 600);
  raf = 0;
  disposed = !1;
  shot = 0;
  shotStart = 0;
  dust;
  own = [];
  readyFired = !1;
  carsReady = !1;
  low;
  quality = new A();
  baseDpr = 1;
  lastRender = 0;
  w = 1;
  h = 1;
  fadeVal = ``;
  skyReady = Promise.resolve();
  constructor(e, t, n) {
    ((this.canvas = e),
      (this.fade = t),
      (this.onReady = n),
      (this.low = k({
        userAgent: navigator.userAgent,
        memory: navigator.deviceMemory,
        cores: navigator.hardwareConcurrency || 4,
        touch: navigator.maxTouchPoints > 0,
      })));
    let r = new D({
      canvas: e,
      antialias: !this.low,
      powerPreference: `high-performance`,
      stencil: !1,
    });
    ((this.baseDpr = Math.min(window.devicePixelRatio || 1, this.low ? 1 : 2)),
      r.setPixelRatio(this.baseDpr),
      (r.toneMapping = 4),
      (r.toneMappingExposure = 1.05),
      (r.outputColorSpace = C),
      (r.shadowMap.enabled = !this.low),
      (r.shadowMap.type = 1),
      (r.shadowMap.autoUpdate = !1),
      (this.renderer = r),
      (this.scene.fog = new o(14263920, 0.0085)),
      this.build(),
      (this.loop = this.loop.bind(this)),
      (this.raf = requestAnimationFrame(this.loop)));
  }
  build() {
    let n = this.scene,
      o = new T();
    this.skyReady = new Promise((e) =>
      o.load(
        j,
        (t) => {
          if ((e(), this.disposed)) {
            t.dispose();
            return;
          }
          ((t.colorSpace = C),
            (t.mapping = 303),
            (n.background = t),
            (n.backgroundIntensity = 1));
          let r = new g(this.renderer),
            i = r.fromEquirectangular(t).texture;
          (r.dispose(),
            (n.environment = i),
            (n.environmentIntensity = 0.85),
            this.own.push(t, i));
        },
        void 0,
        () => e(),
      ),
    );
    let s = new i(16763274, 3.2);
    (s.position.copy(I).multiplyScalar(40), (s.castShadow = !this.low));
    let m = 2048;
    (s.shadow.mapSize.set(m, m),
      Object.assign(s.shadow.camera, {
        left: -12,
        right: 12,
        top: 12,
        bottom: -12,
        near: 1,
        far: 90,
      }),
      (s.shadow.bias = -4e-4),
      (s.shadow.normalBias = 0.02),
      n.add(s, s.target),
      n.add(new c(11125480, 8017202, 0.55)));
    let _ = new i(16751964, 0.6);
    (_.position.set(-20, 6, -12), n.add(_));
    let w = o.load(M);
    ((w.colorSpace = C),
      (w.wrapS = w.wrapT = S),
      w.repeat.set(26, 26),
      (w.anisotropy = Math.min(
        this.low ? 4 : 16,
        this.renderer.capabilities.getMaxAnisotropy(),
      )));
    let D = this.low ? null : o.load(M);
    D && ((D.wrapS = D.wrapT = S), D.repeat.set(26, 26));
    let O = z([
        [0, `#fff`],
        [0.55, `#fff`],
        [1, `#000`],
      ]),
      k = new h({
        map: w,
        bumpMap: D,
        bumpScale: 1.4,
        roughness: 0.97,
        metalness: 0,
        color: 15123610,
        alphaMap: O,
        transparent: !0,
        depthWrite: !0,
      }),
      A = new r(120, this.low ? 48 : 96),
      N = A.attributes.position;
    for (let e = 0; e < N.count; e++) {
      let t = N.getX(e),
        n = N.getY(e),
        r = Math.max(0, Math.hypot(t, n) - 14) / 40;
      N.setZ(
        e,
        (Math.sin(t * 0.11) * Math.cos(n * 0.09) * 0.8 +
          Math.sin(t * 0.031 + 1.3) * 1.6) *
          Math.min(1, r),
      );
    }
    A.computeVertexNormals();
    let P = new f(A, k);
    ((P.rotation.x = -Math.PI / 2),
      (P.receiveShadow = !0),
      n.add(P),
      this.own.push(w, O, k, A),
      D && this.own.push(D));
    let F = new l(1, this.low ? 1 : 3),
      L = F.attributes.position;
    for (let e = 0; e < L.count; e++) {
      let t = 0.88 + Math.random() * 0.24;
      L.setXYZ(e, L.getX(e) * t, L.getY(e) * t * 0.45, L.getZ(e) * t);
    }
    F.computeVertexNormals();
    let R = new h({ map: w, color: 12035470, roughness: 0.92 }),
      B = new u(F, R, 22),
      V = new d(),
      H = new x(),
      U = new a(),
      W = new E(),
      G = new E();
    for (let e = 0; e < B.count; e++) {
      let t = Math.random() * Math.PI * 2,
        n = 14 + Math.random() * 26;
      G.set(Math.cos(t) * n, 0, Math.sin(t) * n);
      let r = 0.15 + Math.random() * 0.6;
      (W.set(r, r, r),
        (G.y = -r * 0.25),
        H.setFromEuler(U.set(Math.random(), Math.random() * 6, Math.random())),
        B.setMatrixAt(e, V.compose(G, H, W)));
    }
    ((B.castShadow = B.receiveShadow = !this.low),
      n.add(B),
      this.own.push(F, R));
    let K = this.low ? 90 : 360,
      q = new Float32Array(K * 3);
    for (let e = 0; e < K; e++)
      ((q[e * 3] = (Math.random() - 0.5) * 26),
        (q[e * 3 + 1] = Math.random() * 3.5),
        (q[e * 3 + 2] = (Math.random() - 0.5) * 26));
    let J = new t();
    J.setAttribute(`position`, new e(q, 3));
    let Y = z(
        [
          [0, `rgba(255,255,255,1)`],
          [0.4, `rgba(255,240,210,0.5)`],
          [1, `rgba(255,230,200,0)`],
        ],
        64,
      ),
      X = new b({
        map: Y,
        color: 16767392,
        size: 0.05,
        transparent: !0,
        opacity: 0.7,
        depthWrite: !1,
        blending: 2,
      });
    ((this.dust = new y(J, X)), n.add(this.dust), this.own.push(J, Y, X));
    let Z = z(
        [
          [0, `rgba(0,0,0,0.75)`],
          [0.6, `rgba(0,0,0,0.35)`],
          [1, `rgba(0,0,0,0)`],
        ],
        128,
      ),
      Q = new p({ map: Z, transparent: !0, depthWrite: !1, opacity: 0.9 }),
      $ = new v(2.6, 5.4);
    (this.own.push(Z, Q, $), this.loadCars($, Q));
  }
  async loadCars(e, t) {
    let n = F(this.low),
      r = await Promise.all(
        n.map((e) =>
          O(e.key).catch((t) => (console.warn(`title car`, e.key, t), null)),
        ),
      );
    if (this.disposed) return;
    let i = new Map(),
      a = new s();
    n.forEach((n, o) => {
      let s = r[o];
      if (!s) return;
      let c = s.clone(!0);
      (c.position.set(n.x, 0, n.z),
        (c.rotation.y = n.yaw),
        c.traverse((e) => {
          let t = e;
          t.isMesh &&
            ((t.castShadow = !this.low),
            (t.receiveShadow = !this.low),
            this.low && (t.material = this.liteMaterial(t.material, i)));
        }));
      let l = new f(e, t);
      ((l.rotation.x = -Math.PI / 2),
        (l.rotation.z = -n.yaw),
        l.position.set(n.x, 0.02, n.z),
        a.add(l, c));
    });
    for (let e of i.values()) this.own.push(e);
    if ((this.scene.add(a), await this.skyReady, this.disposed)) return;
    try {
      await this.renderer.compileAsync(this.scene, this.camera);
    } catch {}
    if (this.disposed) return;
    let o = [];
    (this.scene.traverse((e) => {
      e.frustumCulled &&= (o.push(e), !1);
    }),
      (this.renderer.shadowMap.needsUpdate = !0),
      this.renderer.render(this.scene, this.camera));
    for (let e of o) e.frustumCulled = !0;
    this.carsReady = !0;
  }
  liteMaterial(e, t) {
    if (Array.isArray(e)) return e.map((e) => this.liteMaterial(e, t));
    if (!(e instanceof m)) return e;
    let n = t.get(e);
    if (!n) {
      let r = new h();
      (h.prototype.copy.call(r, e),
        (r.roughness = Math.max(0.12, e.roughness * (1 - 0.35 * e.clearcoat))),
        (r.name = e.name),
        (r.forceSinglePass = !0),
        t.set(e, (n = r)));
    }
    return n;
  }
  resize(e, t) {
    ((this.w = Math.max(1, e)),
      (this.h = Math.max(1, t)),
      this.renderer.setSize(this.w, this.h, !1),
      (this.camera.aspect = Math.max(1, e) / Math.max(1, t)),
      this.camera.updateProjectionMatrix());
  }
  hold = null;
  get shotCount() {
    return L.length;
  }
  lookTmp = new E();
  loop(e) {
    if (
      this.disposed ||
      ((this.raf = requestAnimationFrame(this.loop)),
      this.low && this.lastRender && e - this.lastRender < 29.333333333333336)
    )
      return;
    if (
      (this.low &&
        this.lastRender &&
        this.quality.sample((e - this.lastRender) / 1e3, document.hidden) &&
        (this.renderer.setPixelRatio(this.baseDpr * this.quality.scale),
        this.renderer.setSize(this.w, this.h, !1)),
      (this.lastRender = e),
      !this.carsReady)
    ) {
      this.fade &&
        this.fadeVal !== `1` &&
        ((this.fadeVal = `1`), (this.fade.style.opacity = `1`));
      return;
    }
    this.shotStart ||= e;
    let t = L[this.shot],
      n = (e - this.shotStart) / 1e3 / t.dur;
    if (
      (n >= 1 &&
        ((this.shot = (this.shot + 1) % L.length),
        (this.shotStart = e),
        (t = L[this.shot]),
        (n = 0)),
      this.hold && ((t = L[this.hold.shot % L.length]), (n = this.hold.t)),
      this.fade)
    ) {
      let e = n * t.dur,
        r = t.dur - e,
        i = Math.max(0, 1 - Math.min(e, r) / 0.7).toFixed(2);
      i !== this.fadeVal && ((this.fadeVal = i), (this.fade.style.opacity = i));
    }
    let r = R(n),
      i = e / 1e3;
    (this.camera.position.lerpVectors(t.from, t.to, r),
      (this.camera.position.y += Math.sin(i * 0.7) * 0.025),
      (this.camera.position.x += Math.sin(i * 0.43) * 0.03),
      this.lookTmp.lerpVectors(t.lookFrom, t.lookTo, r),
      this.camera.lookAt(this.lookTmp),
      this.camera.fov !== t.fov &&
        ((this.camera.fov = t.fov), this.camera.updateProjectionMatrix()),
      (this.dust.rotation.y = i * 0.012),
      (this.dust.position.y = Math.sin(i * 0.2) * 0.15),
      this.renderer.render(this.scene, this.camera),
      this.readyFired || ((this.readyFired = !0), this.onReady()));
  }
  dispose() {
    ((this.disposed = !0), cancelAnimationFrame(this.raf));
    for (let e of this.own) e.dispose();
    (this.scene.traverse((e) => {
      e instanceof u && e.dispose();
    }),
      this.renderer.dispose());
  }
};
export { B as TitleScene };
