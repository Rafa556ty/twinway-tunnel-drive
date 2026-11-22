// @ts-nocheck
/* eslint-disable */
// Ported from the original Supercar Highway Dash build.
import {
  BoxGeometry as e,
  CanvasTexture as t,
  CylinderGeometry as n,
  Mesh as r,
  MeshStandardMaterial as i,
  PlaneGeometry as a,
  PointLight as o,
  RepeatWrapping as s,
  SRGBColorSpace as c,
  TorusGeometry as l,
} from "three";
function u(u) {
  let d = document.createElement(`canvas`);
  d.width = d.height = 512;
  let f = d.getContext(`2d`);
  if (!f) return;
  ((f.fillStyle = `#646b70`), f.fillRect(0, 0, 512, 512));
  for (let e = 0; e < 12e3; e++)
    ((f.fillStyle = e % 2 ? `#72787c` : `#555d62`),
      f.fillRect(Math.random() * 512, Math.random() * 512, 2, 2));
  ((f.strokeStyle = `#3e464c`),
    (f.lineWidth = 3),
    f.strokeRect(0, 0, 512, 512));
  let p = new t(d);
  ((p.colorSpace = c), (p.wrapS = p.wrapT = s), p.repeat.set(8, 8));
  let m = new r(
    new a(26, 26),
    new i({ map: p, metalness: 0.15, roughness: 0.56 }),
  );
  ((m.rotation.x = -Math.PI / 2),
    (m.position.y = -0.015),
    (m.receiveShadow = !0),
    u.add(m));
  let h = new i({ color: 7370619, roughness: 0.8, map: p }),
    g = new i({ color: 2567988, roughness: 0.36, metalness: 0.65 }),
    _ = new i({ color: 9707304, roughness: 0.34, metalness: 0.6 }),
    v = (t, n, i, a, o, s, c) => {
      let l = new r(new e(t, n, i), c);
      return (
        l.position.set(a, o, s),
        (l.castShadow = l.receiveShadow = !0),
        u.add(l),
        l
      );
    };
  (v(22, 5, 0.25, 0, 2.5, -7, h),
    v(0.25, 5, 19, -10, 2.5, 1, h),
    v(0.25, 5, 19, 10, 2.5, 1, h),
    v(6, 3.5, 0.15, 0, 1.75, -6.8, g));
  for (let e = 0; e < 14; e++) v(6, 0.035, 0.04, 0, 0.2 + e * 0.24, -6.69, h);
  v(2.1, 1.05, 0.65, -5.4, 0.525, -5.8, _);
  for (let e = 0; e < 5; e++)
    v(1.95, 0.025, 0.035, -5.4, 0.16 + e * 0.18, -5.45, g);
  v(2.6, 0.12, 1, 5, 1.05, -5.8, g);
  for (let e of [4, 6]) v(0.12, 1, 0.7, e, 0.5, -5.8, g);
  let y = new i({ color: 1316377, roughness: 0.88 });
  for (let t of [-7.6, 7.6])
    for (let n = 0; n < 4; n++) {
      let i = new r(new l(0.4, 0.15, 12, 40), y);
      ((i.rotation.x = Math.PI / 2),
        i.position.set(t, 0.18 + n * 0.29, -4.9),
        (i.castShadow = !0),
        u.add(i));
      for (let i = 0; i < 28; i++) {
        let a = new r(new e(0.045, 0.27, 0.03), y),
          o = (i / 28) * Math.PI * 2;
        (a.position.set(
          t + Math.cos(o) * 0.543,
          0.18 + n * 0.29,
          -4.9 + Math.sin(o) * 0.543,
        ),
          (a.rotation.y = -o),
          u.add(a));
      }
    }
  let b = new i({ color: 15791871, emissive: 14872063, emissiveIntensity: 3 });
  for (let e of [-4, 4]) {
    v(0.18, 0.06, 7, e, 4.5, -1, b);
    let t = new o(15398143, 28, 15, 2);
    (t.position.set(e, 3.8, -1), u.add(t));
  }
  for (let e = 0; e < 3; e++) {
    let t = new r(new l(0.36, 0.13, 12, 32), y);
    (t.position.set(4 + e * 1.1, 2.2, -6.65), u.add(t));
    let i = new r(new n(0.28, 0.28, 0.08, 20), g);
    ((i.rotation.x = Math.PI / 2), i.position.copy(t.position), u.add(i));
  }
}
export { u as addGarageEnvironment };
