// @ts-nocheck
/* eslint-disable */
// Ported from the original Supercar Highway Dash build.
function e(e) {
  return e.coarse || (e.touchPoints > 0 && e.width < 1024) ? `touch` : `pc`;
}
function t(e, t) {
  return e === `auto` ? t : e;
}
function n(e) {
  return e.width >= e.height ? `landscape` : `rotate`;
}
function r(e) {
  return {
    width: e.height,
    height: e.width,
    transform: `translateX(${e.width}px) rotate(90deg)`,
  };
}
function i(e, t, n) {
  return { x: t, y: n - e };
}
function a(e, t, n) {
  if (t)
    return {
      x: 0.15,
      z: ((((e % 24) + 24) % 24) / 24 - 0.5) * 2.4,
      strength: 0.55,
    };
  let r = Math.sin(e / 900) * 0.9 + Math.sin(e / 310) * 0.35,
    i = 0.55 + 0.45 * Math.abs(Math.sin(e / 1400));
  return {
    x: Math.sin(r) * i,
    z: Math.cos(r) * i * 0.5,
    strength: 0.75 * (1 - n * 0.85),
  };
}
var o = (2 / 3) * 0.4,
  s = 0.4,
  c = o * 0.6;
o * s;
var l = o / 2;
(l / 3, l / 2);
function u(e, t, n) {
  return e < 2 && (n === null || Math.abs(t - n) >= 350);
}
var d = new Set([
    `mustang-blue`,
    `mustang-black`,
    `bmw-m3`,
    `porsche-gt3`,
    `bugatti-chiron`,
    `ferrari-sf90`,
  ]),
  f = (e) => !!e && d.has(e),
  p = { gain: 40, spread: 55, top: 235 },
  m = {
    "bugatti-chiron": { gain: 60, spread: 80, top: 300 },
    "ferrari-sf90": { gain: 55, spread: 70, top: 290 },
  };
function h(e, t, n, r, i, a = p) {
  let o = t ? n < 0.25 : n < 0.7;
  return o
    ? {
        push: o,
        cruise: Math.min(a.top, e + a.gain + r * a.spread),
        duration: 2.5 + i * 5,
      }
    : { push: o, cruise: e * (0.88 + r * 0.17), duration: 3.5 + i * 7.5 };
}
var g = {
  m5: [1.8, 4.1],
  hatch: [1.8, 4.1],
  sedan: [1.85, 4.7],
  suv: [1.88, 4.65],
  pickup: [1.9, 5.3],
  bus: [2.55, 12],
  truck: [2.55, 19.8],
  "mustang-blue": [1.92, 4.8],
  "mustang-black": [1.92, 4.8],
  "bmw-m3": [1.9, 4.8],
  "porsche-gt3": [1.85, 4.57],
  "bugatti-chiron": [2.04, 4.54],
  "ferrari-sf90": [1.97, 4.71],
};
function _(e, t, n) {
  if (!f(n)) {
    let n = c;
    if (e < n) return t < 0.5 ? `mustang-blue` : `mustang-black`;
    if (e < (n += 0.10666666666666667)) return `porsche-gt3`;
    if (e < (n += 0.13333333333333333)) return `bmw-m3`;
    if (e < (n += 0.044444444444444446)) return `bugatti-chiron`;
    if (e < (n += 0.06666666666666667)) return `ferrari-sf90`;
  }
  let r = [`hatch`, `sedan`, `suv`, `pickup`, `bus`, `truck`];
  return r[Math.min(r.length - 1, Math.floor(t * r.length))] ?? `hatch`;
}
function v(e, t, n, r) {
  return e - (t - n) * r;
}
function y(e, t, n, r, i, a, o, s) {
  let c = r - e,
    l = i * 0.55,
    u = t + (Math.max(-l, Math.min(l, c * 1.7)) - t) * (1 - Math.exp(-3.5 * s)),
    d = e + u * s,
    f = Math.abs(r - d) < i * 0.008 && Math.abs(u) < i * 0.025,
    p = Math.atan2(u, Math.max(1, (a / 3.6) * o));
  return {
    x: f ? r : d,
    vx: f ? 0 : u,
    rot: n + (p - n) * (1 - Math.exp(-6 * s)),
    arrived: f,
  };
}
var b = [75, 115, 155, 195, 235, 275, 312, 352],
  x = b.length,
  S = 1e3,
  C = 9500,
  w = (e, t) => (C * t) / (b[e] ?? b[x - 1]);
function T(e, t, n) {
  let r = Math.max(0, Math.min(x - 1, e));
  for (; r < x - 1 && w(r, t) >= (n ? 9250 : 9500);) r++;
  let i = n ? 5500 : 3500;
  for (; r > 0 && w(r, t) < i && w(r - 1, t) < 8500;) r--;
  return r;
}
var E = 126.9,
  D = 1400,
  O = 2415,
  k = 2650,
  A = 3140,
  j = 2720,
  M = 3070,
  N = O,
  P = 5600,
  F = 6400,
  I = [
    [500, 560],
    [1100, 1160],
    [3900, 3960],
    [5e3, 5060],
  ],
  L = [300, 850, 1320, 3350, 4500, 5300],
  R = [750, 3600, 4900, 5900],
  z = 4200,
  B = (e) => ((e % F) + F) % F;
function V(e) {
  let t = B(e);
  return t < 1400
    ? `highway`
    : t < 2415
      ? `tunnel`
      : t >= 2650 && t < 3140
        ? `bridge`
        : t >= 3140 && t < 5600
          ? `night-highway`
          : `highway`;
}
var H = (e) => {
  let t = B(e);
  return t >= 1400 && t < 2415;
};
function U(e) {
  let t = B(e);
  return t >= 2720 && t < 3070;
}
function W(e) {
  let t = V(e);
  return t === `bridge` || t === `tunnel`;
}
var G = (e) => {
  let t = Math.max(0, Math.min(1, e));
  return t * t * (3 - 2 * t);
};
function K(e) {
  let t = B(e);
  return t < 2415
    ? 0
    : t < 3500
      ? G((t - N) / 1085)
      : t < 5600
        ? 1
        : 1 - G((t - P) / 800);
}
function q(e) {
  let t = B(e),
    n = O,
    r = 3390;
  return t < n || t > r ? 0 : G(t < 2895 ? (t - n) / 480 : (r - t) / 495);
}
function J(e) {
  if (H(e)) return 0;
  let t = B(e);
  if (t < 3700 || t > 4700) return 0;
  let n = Math.abs(t - 8400 / 2) / (1e3 / 2);
  return G(Math.min(1, (1 - n) * 1.6));
}
function Y(e) {
  let t = B(e);
  return (t >= 1360 && t < 2430) || K(e) > 0.35 || J(e) > 0.4;
}
export {
  f as A,
  i as B,
  b as C,
  w as D,
  T as E,
  v as F,
  e as I,
  t as L,
  h as M,
  _ as N,
  g as O,
  u as P,
  r as R,
  x as S,
  C as T,
  n as V,
  K as _,
  L as a,
  q as b,
  D as c,
  j as d,
  M as f,
  Y as g,
  H as h,
  F as i,
  y as j,
  m as k,
  E as l,
  W as m,
  k as n,
  R as o,
  B as p,
  A as r,
  z as s,
  I as t,
  O as u,
  U as v,
  S as w,
  V as x,
  J as y,
  a as z,
};
