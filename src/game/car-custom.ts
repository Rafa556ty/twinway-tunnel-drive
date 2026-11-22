// @ts-nocheck
/* eslint-disable */
// Ported from the original Supercar Highway Dash build.
var e = `mustang-rtr`,
  t = [
    {
      id: `mustang-rtr`,
      name: `Ford Mustang RTR Spec 5`,
      brand: `ford`,
      price: 0,
      sound: `revuelto`,
    },
    {
      id: `revuelto`,
      name: `Lamborghini Revuelto`,
      brand: `lamborghini`,
      price: 24e5,
      sound: `revuelto`,
    },
    {
      id: `svj`,
      name: `Lamborghini Aventador SVJ LP 770-4 2019`,
      brand: `lamborghini`,
      price: 21e5,
      sound: `revuelto`,
    },
    {
      id: `huracan-evo`,
      name: `Lamborghini Huracán EVO 2019`,
      brand: `lamborghini`,
      price: 16e5,
      sound: `revuelto`,
    },
    {
      id: `laferrari`,
      name: `Ferrari LaFerrari 2014`,
      brand: `ferrari`,
      price: 3e6,
      sound: `revuelto`,
    },
    {
      id: `chiron`,
      name: `Bugatti Chiron`,
      brand: `bugatti`,
      price: 4e6,
      sound: `chiron`,
    },
    {
      id: `chiron-ss300`,
      name: `Bugatti Chiron Super Sport 300+`,
      brand: `bugatti`,
      price: 75e5,
      sound: `chiron`,
    },
    {
      id: `tourbillon`,
      name: `Bugatti Tourbillon 2026`,
      brand: `bugatti`,
      price: 6e6,
      sound: `chiron`,
    },
    {
      id: `voiture-noire`,
      name: `Bugatti La Voiture Noire 2019`,
      brand: `bugatti`,
      price: 52e5,
      sound: `chiron`,
    },
    {
      id: `jesko`,
      name: `Koenigsegg Jesko Attack 2019`,
      brand: `koenigsegg`,
      price: 68e5,
      sound: `revuelto`,
    },
    {
      id: `utopia-roadster`,
      name: `Pagani Utopia Roadster 2025`,
      brand: `pagani`,
      price: 37e5,
      sound: `revuelto`,
    },
    {
      id: `huayra`,
      name: `Pagani Huayra`,
      brand: `pagani`,
      price: 27e5,
      sound: `revuelto`,
    },
    {
      id: `demon`,
      name: `Dodge Challenger SRT Demon`,
      brand: `dodge`,
      price: 12e5,
      sound: `revuelto`,
    },
    {
      id: `m2`,
      name: `BMW M2 G87 Widebody 2026`,
      brand: `bmw`,
      price: 6e5,
      sound: `revuelto`,
    },
    {
      id: `m4-competition`,
      name: `BMW M4 Competition 2025`,
      brand: `bmw`,
      price: 1e6,
      sound: `revuelto`,
    },
    {
      id: `m8-competition`,
      name: `BMW M8 Competition Coupé`,
      brand: `bmw`,
      price: 14e5,
      sound: `revuelto`,
    },
  ],
  n = (e) => t.find((t) => t.id === e),
  r = (e) => t.some((t) => t.id === e),
  i = (e) => n(e).price,
  a = { owned: [e], selectedCar: e },
  o = (e, t) => e.owned.includes(t);
function s(e) {
  return { owned: t.map((e) => e.id), selectedCar: e.selectedCar };
}
function c(e, t) {
  return o(e, t) ? { ...e, selectedCar: t } : e;
}
var l = (e, t) => e >= i(t);
function u(e, n, r) {
  return o(e, r) || !l(n, r)
    ? null
    : {
        garage: {
          owned: t
            .map((e) => e.id)
            .filter((t) => t === r || e.owned.includes(t)),
          selectedCar: r,
        },
        balance: n - i(r),
      };
}
var d = `garage-state-v2`;
function f(n, i = !1) {
  try {
    let o = JSON.parse(n.getItem(d) ?? `null`);
    if (!o || typeof o != `object`) return a;
    let s = new Set([e]);
    if (Array.isArray(o.owned)) for (let e of o.owned) r(e) && s.add(e);
    return {
      owned: t.map((e) => e.id).filter((e) => s.has(e)),
      selectedCar:
        r(o.selectedCar) && (i || s.has(o.selectedCar)) ? o.selectedCar : e,
    };
  } catch {
    return a;
  }
}
function p(e, t) {
  e.setItem(d, JSON.stringify(t));
}
var m = `wallet-dollars-v1`;
function h(e) {
  let t = Number(e.getItem(m) ?? 0);
  return Number.isFinite(t) && t > 0 ? Math.floor(t) : 0;
}
function g(e, t) {
  e.setItem(m, String(Math.max(0, Math.floor(t))));
}
function _(e) {
  let t = e.toLowerCase();
  return (
    t === `localhost` ||
    t === `127.0.0.1` ||
    t.startsWith(`id-preview--`) ||
    t.startsWith(`preview--`) ||
    t.endsWith(`.lovableproject.com`)
  );
}
var v = (e) => `$${Math.round(e).toLocaleString(`pt-BR`)}`,
  y = [`body`, `seats`, `rims`, `calipers`],
  b = {
    body: `Carroceria`,
    seats: `Bancos`,
    rims: `Rodas`,
    calipers: `Freios`,
  },
  x = {
    gloss: `Brilhante`,
    metallic: `Metálico`,
    matte: `Fosco`,
    chrome: `Cromado`,
    carbon: `Fibra de carbono`,
    leather: `Couro`,
    alcantara: `Alcântara`,
  },
  S = {
    body: [`gloss`, `metallic`, `matte`, `chrome`, `carbon`],
    seats: [`leather`, `alcantara`, `carbon`],
    rims: [`gloss`, `metallic`, `matte`, `chrome`, `carbon`],
    calipers: [`gloss`, `metallic`, `matte`],
  },
  C = [
    { name: `Preto`, color: `#0a0a0c` },
    { name: `Branco`, color: `#f2f2f0` },
    { name: `Prata`, color: `#b9bec4` },
    { name: `Grafite`, color: `#3a3d42` },
    { name: `Vermelho`, color: `#c8101a` },
    { name: `Laranja`, color: `#ff5a0a` },
    { name: `Amarelo`, color: `#f5c400` },
    { name: `Verde`, color: `#2fa84f` },
    { name: `Verde-limão`, color: `#9be51c` },
    { name: `Azul`, color: `#1546c8` },
    { name: `Azul-claro`, color: `#3fa9f5` },
    { name: `Roxo`, color: `#6a2bc4` },
    { name: `Rosa`, color: `#e8378f` },
    { name: `Marrom`, color: `#6b3a1e` },
    { name: `Bege`, color: `#d8c3a0` },
    { name: `Dourado`, color: `#c9a23a` },
  ],
  w = { color: null, finish: null },
  T = () => ({
    body: { ...w },
    seats: { ...w },
    rims: { ...w },
    calipers: { ...w },
  }),
  E = () => Object.fromEntries(t.map((e) => [e.id, T()])),
  D = E(),
  O = /^#[0-9a-f]{6}$/i,
  k = (e, t) => S[e].includes(t);
function A(e, t, n) {
  return n !== null && !O.test(n)
    ? e
    : { ...e, [t]: { ...e[t], color: n?.toLowerCase() ?? null } };
}
function j(e, t, n) {
  return n !== null && !k(t, n) ? e : { ...e, [t]: { ...e[t], finish: n } };
}
var M = (e, t) => ({ ...e, [t]: { ...w } });
function N(e) {
  switch (e) {
    case `gloss`:
      return { metalness: 0.15, roughness: 0.1, clearcoat: 1, weave: !1 };
    case `metallic`:
      return { metalness: 0.85, roughness: 0.24, clearcoat: 0.7, weave: !1 };
    case `matte`:
      return { metalness: 0.1, roughness: 0.72, clearcoat: 0, weave: !1 };
    case `chrome`:
      return { metalness: 1, roughness: 0.04, clearcoat: 0.3, weave: !1 };
    case `carbon`:
      return { metalness: 0.35, roughness: 0.28, clearcoat: 1, weave: !0 };
    case `leather`:
      return { metalness: 0, roughness: 0.55, clearcoat: 0, weave: !1 };
    case `alcantara`:
      return { metalness: 0, roughness: 0.96, clearcoat: 0, weave: !1 };
  }
}
function P(e) {
  return e.color
    ? e.color
    : e.finish === `carbon`
      ? `#1c1d20`
      : e.finish === `chrome`
        ? `#d9dde2`
        : null;
}
var F = `car-custom-v1`;
function I(e) {
  let t = T();
  if (!e || typeof e != `object`) return t;
  for (let n of y) {
    let r = e[n];
    !r ||
      typeof r != `object` ||
      (typeof r.color == `string` && (t = A(t, n, r.color)),
      typeof r.finish == `string` && (t = j(t, n, r.finish)));
  }
  return t;
}
function L(e) {
  try {
    let n = JSON.parse(e.getItem(F) ?? `null`);
    return Object.fromEntries(t.map((e) => [e.id, I(n?.[e.id])]));
  } catch {
    return E();
  }
}
function R(e, t) {
  e.setItem(F, JSON.stringify(t));
}
export {
  v as C,
  f as D,
  h as E,
  g as O,
  s as S,
  o as T,
  u as _,
  S as a,
  n as b,
  N as c,
  R as d,
  A as f,
  e as g,
  t as h,
  C as i,
  p as k,
  L as l,
  a as m,
  D as n,
  b as o,
  j as p,
  x as r,
  P as s,
  y as t,
  M as u,
  l as v,
  _ as w,
  c as x,
  i as y,
};
