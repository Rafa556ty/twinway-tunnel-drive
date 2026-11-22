// @ts-nocheck
/* eslint-disable */
// Ported from the original Supercar Highway Dash build.
import {
  CanvasTexture as e,
  RepeatWrapping as t,
  SRGBColorSpace as n,
} from "three";
import { c as r, s as i, t as a } from "./car-custom";
var o = /$^/,
  s = {
    revuelto: {
      body: /2024Paint_Material$/,
      seats: /^ORANGE_INT$/,
      rims: /Wheel1A_3D_3DWheel1B_Material$/,
      calipers: /CalliperA_Zone_Material$/,
    },
    chiron: {
      body: /^ChironMI_1245063001_014$|^ChironMI_Cabin1$/,
      seats: /^ChironMI_Cabin_Leather_A1$|^ChironMI_Cabin_Suede_A1$/,
      rims: /^ChironMI_Rim1$/,
      calipers: /^Chironcaliper_B$/,
    },
    "mustang-rtr": {
      body: /2019Paint_Material1$/,
      seats: /^int_Color_1$/,
      rims: /Wheel1A_3D_3DWheel4A_Material1$/,
      calipers: /CallipersCalliperGloss/,
    },
    m2: {
      body: /PaintTNR_Material_008$/,
      seats: /InteriorA_Material1$/,
      rims: /^RIM_Col$/,
      calipers: /CallipersCalliperGloss/,
    },
    "huracan-evo": {
      body: /PaintTNR_Material1$/,
      seats: /InteriorA_Material1$|^Interior_C1$/,
      rims: /TNR_Rim127A/,
      calipers: /CallipersCalliperGloss/,
    },
    tourbillon: {
      body: /2026Paint_Material1$/,
      seats: /2026InteriorColourZoneA/,
      rims: /3DWheel1A_Material1$/,
      calipers: /CalliperA_Zone/,
    },
    "utopia-roadster": {
      body: /2024Paint_Material1$/,
      seats: /InteriorColourZoneA/,
      rims: /3DWheel2A_Material1$/,
      calipers: /CalliperA_Zone|^utopiared_galiper$/,
    },
    huayra: {
      body: /^PAG_HUAYRA_PAINT/,
      seats: /^PAG_HUAYRA_LEATHER$/,
      rims: /^pag_wheels_b$/,
      calipers: /^amdb11_caliper/,
    },
    demon: {
      body: /^CARS$|^carpaint_second$/,
      seats: /^interior$/,
      rims: /^rim_second$/,
      calipers: o,
    },
    "chiron-ss300": {
      body: /^CSR2_CarPaint$/,
      seats: /^CSR2_Interior$/,
      rims: /^CSR2_Wheel1A_Rim$/,
      calipers: /^CSR2_Calliper_Color$/,
    },
    svj: { body: /^svj_paint$/, seats: o, rims: o, calipers: o },
    "m8-competition": {
      body: /^m8f92_CarPaint$|^m8f92_CarPaint2$/,
      seats: o,
      rims: /^m8_wheel_m8f92_Coloured$/,
      calipers: /^m8f92_Calliper_Color$/,
    },
    "m4-competition": {
      body: /^m4car_body1$|^m4car_hood1$|^m4car_bodykit1$/,
      seats: o,
      rims: /^rimRim_072_Garage1$/,
      calipers: /^red_caliper$/,
    },
    jesko: {
      body: /^body1$/,
      seats: o,
      rims: /^rim_chrome$/,
      calipers: /^paint1Mtlgreen$/,
    },
    "voiture-noire": {
      body: /2019Paint_Material$/,
      seats: o,
      rims: /3DWheel1A_Material$/,
      calipers: /CalliperGloss_Material$/,
    },
    laferrari: {
      body: /Carpaint_Red1$/,
      seats: /^uv1Details_INT1$/,
      rims: /Wheel1A_Material1$/,
      calipers: /^Color_Caliper$/,
    },
  };
function c(e, t) {
  for (let n of a) if (s[e][n].test(t)) return n;
  return null;
}
var l = null;
function u() {
  if (l) return l;
  let r = document.createElement(`canvas`);
  r.width = r.height = 64;
  let i = r.getContext(`2d`);
  for (let e = 0; e < 8; e++)
    for (let t = 0; t < 8; t++) {
      let n =
        ((t + e) >> 1) % 2 == 0
          ? i.createLinearGradient(t * 8, 0, (t + 1) * 8, 0)
          : i.createLinearGradient(0, e * 8, 0, (e + 1) * 8);
      (n.addColorStop(0, `#5a5a5a`),
        n.addColorStop(0.5, `#ffffff`),
        n.addColorStop(1, `#5a5a5a`),
        (i.fillStyle = n),
        i.fillRect(t * 8, e * 8, 8, 8));
    }
  return (
    (l = new e(r)),
    (l.wrapS = l.wrapT = t),
    l.repeat.set(24, 24),
    (l.colorSpace = n),
    (l.anisotropy = 4),
    l
  );
}
function d(e, t, n) {
  let a = new Map();
  e.traverse((e) => {
    let o = e;
    if (!o.isMesh || Array.isArray(o.material)) return;
    let s = o.userData.paintSource ?? o.material;
    if (!s?.isMeshStandardMaterial) return;
    let l = c(t, s.name);
    if (!l) return;
    let d = n[l];
    if (!d.color && !d.finish) {
      o.userData.paintSource && (o.material = s);
      return;
    }
    o.userData.paintSource = s;
    let f = a.get(s);
    if (!f) {
      f = s.clone();
      let e = {
          color: s.color.clone(),
          map: s.map,
          metalness: s.metalness,
          roughness: s.roughness,
          clearcoat: s.clearcoat ?? 0,
        },
        t = i(d);
      if (
        (t ? (f.color.set(t), (f.map = null)) : f.color.copy(e.color), d.finish)
      ) {
        let e = r(d.finish);
        ((f.metalness = e.metalness),
          (f.roughness = e.roughness),
          f.isMeshPhysicalMaterial && (f.clearcoat = e.clearcoat),
          e.weave && ((f.map = u()), (f.roughnessMap = null)));
      }
      ((f.needsUpdate = !0), a.set(s, f));
    }
    o.material = f;
  });
}
export { d as applyCarCustom };
