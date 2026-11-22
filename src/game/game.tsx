// @ts-nocheck
/* eslint-disable */
// Ported from the original Supercar Highway Dash build.
import * as __React from "react";
import * as __JSX from "react/jsx-runtime";
const e = (m) => m;
const t = () => __JSX;
const n = () => __React;
const r = (fn) => fn();
import {
  C as i,
  D as a,
  E as o,
  O as s,
  S as c,
  T as l,
  _ as u,
  a as d,
  b as f,
  d as p,
  f as m,
  g as ee,
  h,
  i as g,
  k as te,
  l as ne,
  m as _,
  n as v,
  o as re,
  p as ie,
  r as y,
  t as b,
  u as x,
  v as S,
  w as ae,
  x as C,
  y as oe,
} from "./car-custom";
import {
  A as w,
  B as T,
  C as E,
  D,
  E as O,
  F as k,
  I as se,
  L as ce,
  M as A,
  N as le,
  O as j,
  P as M,
  R as ue,
  S as de,
  T as N,
  V as fe,
  _ as pe,
  a as me,
  g as P,
  h as he,
  j as ge,
  k as _e,
  o as F,
  t as ve,
  w as I,
  y as ye,
} from "./world";
import { n as be } from "./quality";
var xe = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  Se = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  Ce = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase(),
    ),
  we = (e) => {
    let t = Ce(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  Te = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  Ee = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  L = e(n()),
  De = (0, L.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
      },
      c,
    ) =>
      (0, L.createElement)(
        `svg`,
        {
          ref: c,
          ...Te,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: xe(`lucide`, i),
          ...(!a && !Ee(s) && { "aria-hidden": `true` }),
          ...s,
        },
        [
          ...o.map(([e, t]) => (0, L.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ],
      ),
  ),
  R = (e, t) => {
    let n = (0, L.forwardRef)(({ className: n, ...r }, i) =>
      (0, L.createElement)(De, {
        ref: i,
        iconNode: t,
        className: xe(`lucide-${Se(we(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = we(e)), n);
  },
  Oe = R(`camera`, [
    [
      `path`,
      {
        d: `M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z`,
        key: `18u6gg`,
      },
    ],
    [`circle`, { cx: `12`, cy: `13`, r: `3`, key: `1vg3eu` }],
  ]),
  ke = R(`car`, [
    [
      `path`,
      {
        d: `M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2`,
        key: `5owen`,
      },
    ],
    [`circle`, { cx: `7`, cy: `17`, r: `2`, key: `u2ysq9` }],
    [`path`, { d: `M9 17h6`, key: `r8uit2` }],
    [`circle`, { cx: `17`, cy: `17`, r: `2`, key: `axvx0g` }],
  ]),
  Ae = R(`chevron-left`, [[`path`, { d: `m15 18-6-6 6-6`, key: `1wnfg3` }]]),
  je = R(`chevron-right`, [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]]),
  Me = R(`flame`, [
    [
      `path`,
      {
        d: `M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`,
        key: `1slcih`,
      },
    ],
  ]),
  Ne = R(`globe`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [
      `path`,
      { d: `M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`, key: `13o1zl` },
    ],
    [`path`, { d: `M2 12h20`, key: `9i4pu4` }],
  ]),
  Pe = R(`palette`, [
    [
      `path`,
      {
        d: `M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z`,
        key: `e79jfc`,
      },
    ],
    [
      `circle`,
      { cx: `13.5`, cy: `6.5`, r: `.5`, fill: `currentColor`, key: `1okk4w` },
    ],
    [
      `circle`,
      { cx: `17.5`, cy: `10.5`, r: `.5`, fill: `currentColor`, key: `f64h9f` },
    ],
    [
      `circle`,
      { cx: `6.5`, cy: `12.5`, r: `.5`, fill: `currentColor`, key: `qy21gx` },
    ],
    [
      `circle`,
      { cx: `8.5`, cy: `7.5`, r: `.5`, fill: `currentColor`, key: `fotxhn` },
    ],
  ]),
  Fe = R(`pause`, [
    [
      `rect`,
      { x: `14`, y: `3`, width: `5`, height: `18`, rx: `1`, key: `kaeet6` },
    ],
    [
      `rect`,
      { x: `5`, y: `3`, width: `5`, height: `18`, rx: `1`, key: `1wsw3u` },
    ],
  ]),
  Ie = R(`play`, [
    [
      `path`,
      {
        d: `M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,
        key: `10ikf1`,
      },
    ],
  ]),
  Le = R(`rotate-ccw`, [
    [
      `path`,
      { d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`, key: `1357e3` },
    ],
    [`path`, { d: `M3 3v5h5`, key: `1xhq8a` }],
  ]),
  Re = R(`settings`, [
    [
      `path`,
      {
        d: `M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,
        key: `1i5ecw`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  ze = R(`shield-alert`, [
    [
      `path`,
      {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`,
      },
    ],
    [`path`, { d: `M12 8v4`, key: `1got3b` }],
    [`path`, { d: `M12 16h.01`, key: `1drbdi` }],
  ]),
  Be = R(`shopping-bag`, [
    [`path`, { d: `M16 10a4 4 0 0 1-8 0`, key: `1ltviw` }],
    [`path`, { d: `M3.103 6.034h17.794`, key: `awc11p` }],
    [
      `path`,
      {
        d: `M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z`,
        key: `o988cm`,
      },
    ],
  ]),
  Ve = R(`trophy`, [
    [
      `path`,
      {
        d: `M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978`,
        key: `1n3hpd`,
      },
    ],
    [
      `path`,
      {
        d: `M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978`,
        key: `rfe1zi`,
      },
    ],
    [`path`, { d: `M18 9h1.5a1 1 0 0 0 0-5H18`, key: `7xy6bh` }],
    [`path`, { d: `M4 22h16`, key: `57wxv0` }],
    [
      `path`,
      {
        d: `M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z`,
        key: `1mhfuq`,
      },
    ],
    [`path`, { d: `M6 9H4.5a1 1 0 0 1 0-5H6`, key: `tex48p` }],
  ]),
  He = R(`volume-1`, [
    [
      `path`,
      {
        d: `M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,
        key: `uqj9uw`,
      },
    ],
    [`path`, { d: `M16 9a5 5 0 0 1 0 6`, key: `1q6k2b` }],
  ]),
  Ue = R(`volume-2`, [
    [
      `path`,
      {
        d: `M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,
        key: `uqj9uw`,
      },
    ],
    [`path`, { d: `M16 9a5 5 0 0 1 0 6`, key: `1q6k2b` }],
    [`path`, { d: `M19.364 18.364a9 9 0 0 0 0-12.728`, key: `ijwkga` }],
  ]),
  We = R(`volume-x`, [
    [
      `path`,
      {
        d: `M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,
        key: `uqj9uw`,
      },
    ],
    [`line`, { x1: `22`, x2: `16`, y1: `9`, y2: `15`, key: `1ewh16` }],
    [`line`, { x1: `16`, x2: `22`, y1: `9`, y2: `15`, key: `5ykzw1` }],
  ]),
  Ge = R(`wallet`, [
    [
      `path`,
      {
        d: `M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1`,
        key: `18etb6`,
      },
    ],
    [`path`, { d: `M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4`, key: `xoc0q4` }],
  ]),
  Ke = R(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  qe = R(`zap`, [
    [
      `path`,
      {
        d: `M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,
        key: `1xq2db`,
      },
    ],
  ]),
  Je = `/__l5e/assets-v1/116a3802-6680-49ba-ad2a-08e246a7f8f0/revuelto-DUcoAuj9.png`,
  Ye = `/__l5e/assets-v1/53f145a8-e87c-4b7f-ac7a-ec4f5dcf9bdb/police-gt3rs-A4tZki_x.png`,
  Xe = `/__l5e/assets-v1/b39e7ab4-19ff-44d6-93ee-2b1c81b02dbb/traffic-bus-DFfJamsq.png`,
  Ze = `/__l5e/assets-v1/010a4afc-66f9-4756-ae41-a983f4a72950/traffic-suv-Bi4_1leJ.png`,
  Qe = `/__l5e/assets-v1/71cc0412-c8ba-44ff-9686-8e5a6691f1b4/traffic-m5-D_9dhv_9.png`,
  $e = `/__l5e/assets-v1/7d05567a-b592-4b6f-bdba-6487006ef55e/traffic-mustang-blue-xyja7jRi.png`,
  et = `/__l5e/assets-v1/51da0202-1513-4137-b68a-6ad97d583cce/traffic-mustang-black-BFMMg1Q3.png`,
  tt = `/__l5e/assets-v1/ba3f7706-eb39-4229-bcbd-52e9d3cdfd85/traffic-sedan-BeUFNais.png`,
  nt = `/__l5e/assets-v1/06435178-04cd-4070-abd8-7347de5538d9/traffic-hatch-FTVeY9pP.png`,
  rt = `/__l5e/assets-v1/d5ef2007-bfcc-45c8-9a2b-dc3f3f4efbb7/traffic-pickup-BOPR6fvg.png`,
  it = {
    version: 1,
    asset_id: `ab4d241b-0303-43a9-9722-13699ba9d4b8`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/8db6765e-f01e-4a72-92f3-fe7dbb8a49b4/supercar-highway-dash-logo.webp`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/ab4d241b-0303-43a9-9722-13699ba9d4b8/supercar-highway-dash-logo.webp`,
    original_filename: `supercar-highway-dash-logo.webp`,
    size: 124382,
    content_type: `image/webp`,
    created_at: `2026-11-19T02:57:39Z`,
  },
  at = Object.defineProperty,
  ot = (e, t) => at(e, `name`, { value: t, configurable: !0 });
function st(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
ot(st, `setRef`);
function ct(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = st(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : st(e[t], null);
        }
      };
  };
}
ot(ct, `composeRefs`);
function lt(...e) {
  return L.useCallback(ct(...e), e);
}
ot(lt, `useComposedRefs`);
var ut = Object.defineProperty,
  z = (e, t) => ut(e, `name`, { value: t, configurable: !0 });
function dt(e) {
  let t = L.forwardRef((t, n) => {
    let { children: r, ...i } = t,
      a = null,
      o = !1,
      s = [];
    (bt(r) && typeof wt == `function` && (r = wt(r._payload)),
      L.Children.forEach(r, (e) => {
        if (vt(e)) {
          o = !0;
          let t = e,
            n = `child` in t.props ? t.props.child : t.props.children;
          (bt(n) && typeof wt == `function` && (n = wt(n._payload)),
            (a = ht(t, n)),
            s.push(a?.props?.children));
        } else s.push(e);
      }),
      a
        ? (a = L.cloneElement(a, void 0, s))
        : !o && L.Children.count(r) === 1 && L.isValidElement(r) && (a = r));
    let c = a ? _t(a) : void 0,
      l = lt(n, c);
    if (!a) {
      if (r || r === 0) throw Error(o ? Ct(e) : St(e));
      return r;
    }
    let u = gt(i, a.props ?? {});
    return (a.type !== L.Fragment && (u.ref = n ? l : c), L.cloneElement(a, u));
  });
  return ((t.displayName = `${e}.Slot`), t);
}
z(dt, `createSlot`);
var ft = dt(`Slot`),
  pt = Symbol.for(`radix.slottable`);
function mt(e) {
  let t = z(
    (e) => (`child` in e ? e.children(e.child) : e.children),
    `Slottable`,
  );
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = pt), t);
}
z(mt, `createSlottable`);
var ht = z((e, t) => {
  if (`child` in e.props) {
    let t = e.props.child;
    return L.isValidElement(t)
      ? L.cloneElement(t, void 0, e.props.children(t.props.children))
      : null;
  }
  return L.isValidElement(t) ? t : null;
}, `getSlottableElementFromSlottable`);
function gt(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return (i(...e), t);
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = { ...i, ...a })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
z(gt, `mergeProps`);
function _t(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
z(_t, `getElementRef`);
function vt(e) {
  return (
    L.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === pt
  );
}
z(vt, `isSlottable`);
var yt = Symbol.for(`react.lazy`);
function bt(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `$$typeof` in e &&
    e.$$typeof === yt &&
    `_payload` in e &&
    xt(e._payload)
  );
}
z(bt, `isLazyComponent`);
function xt(e) {
  return typeof e == `object` && !!e && `then` in e;
}
z(xt, `isPromiseLike`);
var St = z(
    (e) =>
      `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    `createSlotError`,
  ),
  Ct = z(
    (e) =>
      `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    `createSlottableError`,
  ),
  wt = L.use;
function Tt(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Tt(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function Et() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Tt(e)) && (r && (r += ` `), (r += t));
  return r;
}
var Dt = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
  Ot = Et,
  kt = (e, t) => (n) => {
    if (t?.variants == null) return Ot(e, n?.class, n?.className);
    let { variants: r, defaultVariants: i } = t,
      a = Object.keys(r).map((e) => {
        let t = n?.[e],
          a = i?.[e];
        if (t === null) return null;
        let o = Dt(t) || Dt(a);
        return r[e][o];
      }),
      o =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return (r === void 0 || (e[n] = r), e);
        }, {});
    return Ot(
      e,
      a,
      t?.compoundVariants?.reduce((e, t) => {
        let { class: n, className: r, ...a } = t;
        return Object.entries(a).every((e) => {
          let [t, n] = e;
          return Array.isArray(n)
            ? n.includes({ ...i, ...o }[t])
            : { ...i, ...o }[t] === n;
        })
          ? [...e, n, r]
          : e;
      }, []),
      n?.class,
      n?.className,
    );
  },
  At = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  jt = (e, t) => ({ classGroupId: e, validator: t }),
  Mt = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  B = `-`,
  Nt = [],
  Pt = `arbitrary..`,
  Ft = (e) => {
    let t = V(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return Lt(e);
        let n = e.split(B);
        return It(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? At(i, t) : t) : i || Nt;
        }
        return n[e] || Nt;
      },
    };
  },
  It = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = It(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(B) : e.slice(t).join(B),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  Lt = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? Pt + r : void 0;
        })(),
  V = (e) => {
    let { theme: t, classGroups: n } = e;
    return Rt(n, t);
  },
  Rt = (e, t) => {
    let n = Mt();
    for (let r in e) {
      let i = e[r];
      zt(i, n, r, t);
    }
    return n;
  },
  zt = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      Bt(i, t, n, r);
    }
  },
  Bt = (e, t, n, r) => {
    if (typeof e == `string`) {
      Vt(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      Ht(e, t, n, r);
      return;
    }
    Ut(e, t, n, r);
  },
  Vt = (e, t, n) => {
    let r = e === `` ? t : Wt(t, e);
    r.classGroupId = n;
  },
  Ht = (e, t, n, r) => {
    if (Gt(e)) {
      zt(e(r), t, n, r);
      return;
    }
    (t.validators === null && (t.validators = []), t.validators.push(jt(n, e)));
  },
  Ut = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      zt(o, Wt(t, a), n, r);
    }
  },
  Wt = (e, t) => {
    let n = e,
      r = t.split(B),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      (i || ((i = Mt()), n.nextPart.set(t, i)), (n = i));
    }
    return n;
  },
  Gt = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  Kt = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        ((n[i] = a),
          t++,
          t > e && ((t = 0), (r = n), (n = Object.create(null))));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return (i(e, t), t);
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  qt = `!`,
  Jt = `:`,
  Yt = [],
  Xt = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  Zt = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === Jt) {
              (t.push(e.slice(i, s)), (i = s + 1));
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[`
            ? n++
            : o === `]`
              ? n--
              : o === `(`
                ? r++
                : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(qt)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(qt) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return Xt(t, l, c, u);
      };
    if (t) {
      let e = t + Jt,
        n = r;
      r = (t) =>
        t.startsWith(e) ? n(t.slice(e.length)) : Xt(Yt, !1, t, void 0, !0);
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  Qt = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s
            ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
            : r.push(a);
        }
        return (r.length > 0 && (r.sort(), n.push(...r)), n);
      }
    );
  },
  $t = (e) => ({
    cache: Kt(e.cacheSize),
    parseClassName: Zt(e),
    sortModifiers: Qt(e),
    postfixLookupClassGroupIds: en(e),
    ...Ft(e),
  }),
  en = (e) => {
    let t = Object.create(null),
      n = e.postfixLookupClassGroups;
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  },
  tn = /\s+/,
  nn = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
        postfixLookupClassGroupIds: o,
      } = t,
      s = [],
      c = e.trim().split(tn),
      l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
      let t = c[e],
        {
          isExternal: u,
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: p,
          maybePostfixModifierPosition: m,
        } = n(t);
      if (u) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      let ee = !!m,
        h;
      if (ee) {
        h = r(p.substring(0, m));
        let e = h && o[h] ? r(p) : void 0;
        e && e !== h && ((h = e), (ee = !1));
      } else h = r(p);
      if (!h) {
        if (!ee) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        if (((h = r(p)), !h)) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        ee = !1;
      }
      let g = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
        te = f ? g + qt : g,
        ne = te + h;
      if (s.indexOf(ne) > -1) continue;
      s.push(ne);
      let _ = i(h, ee);
      for (let e = 0; e < _.length; ++e) {
        let t = _[e];
        s.push(te + t);
      }
      l = t + (l.length > 0 ? ` ` + l : l);
    }
    return l;
  },
  rn = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length;)
      (n = e[t++]) && (r = an(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  an = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++)
      e[r] && (t = an(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  on = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = $t(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = nn(e, n);
        return (i(e, a), a);
      };
    return ((a = o), (...e) => a(rn(...e)));
  },
  sn = [],
  H = (e) => {
    let t = (t) => t[e] || sn;
    return ((t.isThemeGetter = !0), t);
  },
  cn = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  ln = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  un = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  dn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  fn =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  pn = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  mn = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  hn =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  gn = (e) => un.test(e),
  U = (e) => !!e && !Number.isNaN(Number(e)),
  _n = (e) => !!e && Number.isInteger(Number(e)),
  vn = (e) => e.endsWith(`%`) && U(e.slice(0, -1)),
  yn = (e) => dn.test(e),
  bn = () => !0,
  xn = (e) => fn.test(e) && !pn.test(e),
  Sn = () => !1,
  Cn = (e) => mn.test(e),
  wn = (e) => hn.test(e),
  Tn = (e) => !W(e) && !G(e),
  En = (e) =>
    e.startsWith(`@container`) &&
    ((e[10] === `/` && e[11] !== void 0) ||
      (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
      (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))),
  Dn = (e) => Hn(e, Kn, Sn),
  W = (e) => cn.test(e),
  On = (e) => Hn(e, qn, xn),
  kn = (e) => Hn(e, Jn, U),
  An = (e) => Hn(e, Xn, bn),
  jn = (e) => Hn(e, Yn, Sn),
  Mn = (e) => Hn(e, Wn, Sn),
  Nn = (e) => Hn(e, Gn, wn),
  Pn = (e) => Hn(e, Zn, Cn),
  G = (e) => ln.test(e),
  Fn = (e) => Un(e, qn),
  In = (e) => Un(e, Yn),
  Ln = (e) => Un(e, Wn),
  Rn = (e) => Un(e, Kn),
  zn = (e) => Un(e, Gn),
  Bn = (e) => Un(e, Zn, !0),
  Vn = (e) => Un(e, Xn, !0),
  Hn = (e, t, n) => {
    let r = cn.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  Un = (e, t, n = !1) => {
    let r = ln.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  Wn = (e) => e === `position` || e === `percentage`,
  Gn = (e) => e === `image` || e === `url`,
  Kn = (e) => e === `length` || e === `size` || e === `bg-size`,
  qn = (e) => e === `length`,
  Jn = (e) => e === `number`,
  Yn = (e) => e === `family-name`,
  Xn = (e) => e === `number` || e === `weight`,
  Zn = (e) => e === `shadow`,
  Qn = on(() => {
    let e = H(`color`),
      t = H(`font`),
      n = H(`text`),
      r = H(`font-weight`),
      i = H(`tracking`),
      a = H(`leading`),
      o = H(`breakpoint`),
      s = H(`container`),
      c = H(`spacing`),
      l = H(`radius`),
      u = H(`shadow`),
      d = H(`inset-shadow`),
      f = H(`text-shadow`),
      p = H(`drop-shadow`),
      m = H(`blur`),
      ee = H(`perspective`),
      h = H(`aspect`),
      g = H(`ease`),
      te = H(`animate`),
      ne = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      _ = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      v = () => [..._(), G, W],
      re = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      ie = () => [`auto`, `contain`, `none`],
      y = () => [G, W, c],
      b = () => [gn, `full`, `auto`, ...y()],
      x = () => [_n, `none`, `subgrid`, G, W],
      S = () => [`auto`, { span: [`full`, _n, G, W] }, _n, G, W],
      ae = () => [_n, `auto`, G, W],
      C = () => [`auto`, `min`, `max`, `fr`, G, W],
      oe = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      w = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      T = () => [`auto`, ...y()],
      E = () => [
        gn,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...y(),
      ],
      D = () => [
        gn,
        `screen`,
        `full`,
        `dvw`,
        `lvw`,
        `svw`,
        `min`,
        `max`,
        `fit`,
        ...y(),
      ],
      O = () => [
        gn,
        `screen`,
        `full`,
        `lh`,
        `dvh`,
        `lvh`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...y(),
      ],
      k = () => [e, G, W],
      se = () => [..._(), Ln, Mn, { position: [G, W] }],
      ce = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      A = () => [`auto`, `cover`, `contain`, Rn, Dn, { size: [G, W] }],
      le = () => [vn, Fn, On],
      j = () => [``, `none`, `full`, l, G, W],
      M = () => [``, U, Fn, On],
      ue = () => [`solid`, `dashed`, `dotted`, `double`],
      de = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      N = () => [U, vn, Ln, Mn],
      fe = () => [``, `none`, m, G, W],
      pe = () => [`none`, U, G, W],
      me = () => [`none`, U, G, W],
      P = () => [U, G, W],
      he = () => [gn, `full`, ...y()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [yn],
        breakpoint: [yn],
        color: [bn],
        container: [yn],
        "drop-shadow": [yn],
        ease: [`in`, `out`, `in-out`],
        font: [Tn],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [yn],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [yn],
        shadow: [yn],
        spacing: [`px`, U],
        text: [yn],
        "text-shadow": [yn],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, gn, W, G, h] }],
        container: [`container`],
        "container-type": [{ "@container": [``, `normal`, `size`, G, W] }],
        "container-named": [En],
        columns: [{ columns: [U, W, G, s] }],
        "break-after": [{ "break-after": ne() }],
        "break-before": [{ "break-before": ne() }],
        "break-inside": [
          { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
        ],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
        ],
        "object-position": [{ object: v() }],
        overflow: [{ overflow: re() }],
        "overflow-x": [{ "overflow-x": re() }],
        "overflow-y": [{ "overflow-y": re() }],
        overscroll: [{ overscroll: ie() }],
        "overscroll-x": [{ "overscroll-x": ie() }],
        "overscroll-y": [{ "overscroll-y": ie() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: b() }],
        "inset-x": [{ "inset-x": b() }],
        "inset-y": [{ "inset-y": b() }],
        start: [{ "inset-s": b(), start: b() }],
        end: [{ "inset-e": b(), end: b() }],
        "inset-bs": [{ "inset-bs": b() }],
        "inset-be": [{ "inset-be": b() }],
        top: [{ top: b() }],
        right: [{ right: b() }],
        bottom: [{ bottom: b() }],
        left: [{ left: b() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [_n, `auto`, G, W] }],
        basis: [{ basis: [gn, `full`, `auto`, s, ...y()] }],
        "flex-direction": [
          { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
        ],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [U, gn, `auto`, `initial`, `none`, W] }],
        grow: [{ grow: [``, U, G, W] }],
        shrink: [{ shrink: [``, U, G, W] }],
        order: [{ order: [_n, `first`, `last`, `none`, G, W] }],
        "grid-cols": [{ "grid-cols": x() }],
        "col-start-end": [{ col: S() }],
        "col-start": [{ "col-start": ae() }],
        "col-end": [{ "col-end": ae() }],
        "grid-rows": [{ "grid-rows": x() }],
        "row-start-end": [{ row: S() }],
        "row-start": [{ "row-start": ae() }],
        "row-end": [{ "row-end": ae() }],
        "grid-flow": [
          { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
        ],
        "auto-cols": [{ "auto-cols": C() }],
        "auto-rows": [{ "auto-rows": C() }],
        gap: [{ gap: y() }],
        "gap-x": [{ "gap-x": y() }],
        "gap-y": [{ "gap-y": y() }],
        "justify-content": [{ justify: [...oe(), `normal`] }],
        "justify-items": [{ "justify-items": [...w(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...w()] }],
        "align-content": [{ content: [`normal`, ...oe()] }],
        "align-items": [{ items: [...w(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...w(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": oe() }],
        "place-items": [{ "place-items": [...w(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...w()] }],
        p: [{ p: y() }],
        px: [{ px: y() }],
        py: [{ py: y() }],
        ps: [{ ps: y() }],
        pe: [{ pe: y() }],
        pbs: [{ pbs: y() }],
        pbe: [{ pbe: y() }],
        pt: [{ pt: y() }],
        pr: [{ pr: y() }],
        pb: [{ pb: y() }],
        pl: [{ pl: y() }],
        m: [{ m: T() }],
        mx: [{ mx: T() }],
        my: [{ my: T() }],
        ms: [{ ms: T() }],
        me: [{ me: T() }],
        mbs: [{ mbs: T() }],
        mbe: [{ mbe: T() }],
        mt: [{ mt: T() }],
        mr: [{ mr: T() }],
        mb: [{ mb: T() }],
        ml: [{ ml: T() }],
        "space-x": [{ "space-x": y() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": y() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: E() }],
        "inline-size": [{ inline: [`auto`, ...D()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...D()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...D()] }],
        "block-size": [{ block: [`auto`, ...O()] }],
        "min-block-size": [{ "min-block": [`auto`, ...O()] }],
        "max-block-size": [{ "max-block": [`none`, ...O()] }],
        w: [{ w: [s, `screen`, ...E()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...E()] }],
        "max-w": [
          { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...E()] },
        ],
        h: [{ h: [`screen`, `lh`, ...E()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...E()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...E()] }],
        "font-size": [{ text: [`base`, n, Fn, On] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, Vn, An] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              vn,
              W,
            ],
          },
        ],
        "font-family": [{ font: [In, jn, t] }],
        "font-features": [{ "font-features": [W] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, G, W] }],
        "line-clamp": [{ "line-clamp": [U, `none`, G, kn] }],
        leading: [{ leading: [a, ...y()] }],
        "list-image": [{ "list-image": [`none`, G, W] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, G, W] }],
        "text-alignment": [
          { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
        ],
        "placeholder-color": [{ placeholder: k() }],
        "text-color": [{ text: k() }],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [{ decoration: [...ue(), `wavy`] }],
        "text-decoration-thickness": [
          { decoration: [U, `from-font`, `auto`, G, On] },
        ],
        "text-decoration-color": [{ decoration: k() }],
        "underline-offset": [{ "underline-offset": [U, `auto`, G, W] }],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: y() }],
        "tab-size": [{ tab: [_n, G, W] }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              G,
              W,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, G, W] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: se() }],
        "bg-repeat": [{ bg: ce() }],
        "bg-size": [{ bg: A() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                  _n,
                  G,
                  W,
                ],
                radial: [``, G, W],
                conic: [_n, G, W],
              },
              zn,
              Nn,
            ],
          },
        ],
        "bg-color": [{ bg: k() }],
        "gradient-from-pos": [{ from: le() }],
        "gradient-via-pos": [{ via: le() }],
        "gradient-to-pos": [{ to: le() }],
        "gradient-from": [{ from: k() }],
        "gradient-via": [{ via: k() }],
        "gradient-to": [{ to: k() }],
        rounded: [{ rounded: j() }],
        "rounded-s": [{ "rounded-s": j() }],
        "rounded-e": [{ "rounded-e": j() }],
        "rounded-t": [{ "rounded-t": j() }],
        "rounded-r": [{ "rounded-r": j() }],
        "rounded-b": [{ "rounded-b": j() }],
        "rounded-l": [{ "rounded-l": j() }],
        "rounded-ss": [{ "rounded-ss": j() }],
        "rounded-se": [{ "rounded-se": j() }],
        "rounded-ee": [{ "rounded-ee": j() }],
        "rounded-es": [{ "rounded-es": j() }],
        "rounded-tl": [{ "rounded-tl": j() }],
        "rounded-tr": [{ "rounded-tr": j() }],
        "rounded-br": [{ "rounded-br": j() }],
        "rounded-bl": [{ "rounded-bl": j() }],
        "border-w": [{ border: M() }],
        "border-w-x": [{ "border-x": M() }],
        "border-w-y": [{ "border-y": M() }],
        "border-w-s": [{ "border-s": M() }],
        "border-w-e": [{ "border-e": M() }],
        "border-w-bs": [{ "border-bs": M() }],
        "border-w-be": [{ "border-be": M() }],
        "border-w-t": [{ "border-t": M() }],
        "border-w-r": [{ "border-r": M() }],
        "border-w-b": [{ "border-b": M() }],
        "border-w-l": [{ "border-l": M() }],
        "divide-x": [{ "divide-x": M() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": M() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...ue(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...ue(), `hidden`, `none`] }],
        "border-color": [{ border: k() }],
        "border-color-x": [{ "border-x": k() }],
        "border-color-y": [{ "border-y": k() }],
        "border-color-s": [{ "border-s": k() }],
        "border-color-e": [{ "border-e": k() }],
        "border-color-bs": [{ "border-bs": k() }],
        "border-color-be": [{ "border-be": k() }],
        "border-color-t": [{ "border-t": k() }],
        "border-color-r": [{ "border-r": k() }],
        "border-color-b": [{ "border-b": k() }],
        "border-color-l": [{ "border-l": k() }],
        "divide-color": [{ divide: k() }],
        "outline-style": [{ outline: [...ue(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [U, G, W] }],
        "outline-w": [{ outline: [``, U, Fn, On] }],
        "outline-color": [{ outline: k() }],
        shadow: [{ shadow: [``, `none`, u, Bn, Pn] }],
        "shadow-color": [{ shadow: k() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, Bn, Pn] }],
        "inset-shadow-color": [{ "inset-shadow": k() }],
        "ring-w": [{ ring: M() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: k() }],
        "ring-offset-w": [{ "ring-offset": [U, On] }],
        "ring-offset-color": [{ "ring-offset": k() }],
        "inset-ring-w": [{ "inset-ring": M() }],
        "inset-ring-color": [{ "inset-ring": k() }],
        "text-shadow": [{ "text-shadow": [`none`, f, Bn, Pn] }],
        "text-shadow-color": [{ "text-shadow": k() }],
        opacity: [{ opacity: [U, G, W] }],
        "mix-blend": [
          { "mix-blend": [...de(), `plus-darker`, `plus-lighter`] },
        ],
        "bg-blend": [{ "bg-blend": de() }],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          { mask: [`add`, `subtract`, `intersect`, `exclude`] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [U] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": N() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": N() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": k() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": k() }],
        "mask-image-t-from-pos": [{ "mask-t-from": N() }],
        "mask-image-t-to-pos": [{ "mask-t-to": N() }],
        "mask-image-t-from-color": [{ "mask-t-from": k() }],
        "mask-image-t-to-color": [{ "mask-t-to": k() }],
        "mask-image-r-from-pos": [{ "mask-r-from": N() }],
        "mask-image-r-to-pos": [{ "mask-r-to": N() }],
        "mask-image-r-from-color": [{ "mask-r-from": k() }],
        "mask-image-r-to-color": [{ "mask-r-to": k() }],
        "mask-image-b-from-pos": [{ "mask-b-from": N() }],
        "mask-image-b-to-pos": [{ "mask-b-to": N() }],
        "mask-image-b-from-color": [{ "mask-b-from": k() }],
        "mask-image-b-to-color": [{ "mask-b-to": k() }],
        "mask-image-l-from-pos": [{ "mask-l-from": N() }],
        "mask-image-l-to-pos": [{ "mask-l-to": N() }],
        "mask-image-l-from-color": [{ "mask-l-from": k() }],
        "mask-image-l-to-color": [{ "mask-l-to": k() }],
        "mask-image-x-from-pos": [{ "mask-x-from": N() }],
        "mask-image-x-to-pos": [{ "mask-x-to": N() }],
        "mask-image-x-from-color": [{ "mask-x-from": k() }],
        "mask-image-x-to-color": [{ "mask-x-to": k() }],
        "mask-image-y-from-pos": [{ "mask-y-from": N() }],
        "mask-image-y-to-pos": [{ "mask-y-to": N() }],
        "mask-image-y-from-color": [{ "mask-y-from": k() }],
        "mask-image-y-to-color": [{ "mask-y-to": k() }],
        "mask-image-radial": [{ "mask-radial": [G, W] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": N() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": N() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": k() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": k() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": _() }],
        "mask-image-conic-pos": [{ "mask-conic": [U] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": N() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": N() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": k() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": k() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [{ mask: se() }],
        "mask-repeat": [{ mask: ce() }],
        "mask-size": [{ mask: A() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, G, W] }],
        filter: [{ filter: [``, `none`, G, W] }],
        blur: [{ blur: fe() }],
        brightness: [{ brightness: [U, G, W] }],
        contrast: [{ contrast: [U, G, W] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, p, Bn, Pn] }],
        "drop-shadow-color": [{ "drop-shadow": k() }],
        grayscale: [{ grayscale: [``, U, G, W] }],
        "hue-rotate": [{ "hue-rotate": [U, G, W] }],
        invert: [{ invert: [``, U, G, W] }],
        saturate: [{ saturate: [U, G, W] }],
        sepia: [{ sepia: [``, U, G, W] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, G, W] }],
        "backdrop-blur": [{ "backdrop-blur": fe() }],
        "backdrop-brightness": [{ "backdrop-brightness": [U, G, W] }],
        "backdrop-contrast": [{ "backdrop-contrast": [U, G, W] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, U, G, W] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [U, G, W] }],
        "backdrop-invert": [{ "backdrop-invert": [``, U, G, W] }],
        "backdrop-opacity": [{ "backdrop-opacity": [U, G, W] }],
        "backdrop-saturate": [{ "backdrop-saturate": [U, G, W] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, U, G, W] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": y() }],
        "border-spacing-x": [{ "border-spacing-x": y() }],
        "border-spacing-y": [{ "border-spacing-y": y() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              G,
              W,
            ],
          },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [U, `initial`, G, W] }],
        ease: [{ ease: [`linear`, `initial`, g, G, W] }],
        delay: [{ delay: [U, G, W] }],
        animate: [{ animate: [`none`, te, G, W] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [ee, G, W] }],
        "perspective-origin": [{ "perspective-origin": v() }],
        rotate: [{ rotate: pe() }],
        "rotate-x": [{ "rotate-x": pe() }],
        "rotate-y": [{ "rotate-y": pe() }],
        "rotate-z": [{ "rotate-z": pe() }],
        scale: [{ scale: me() }],
        "scale-x": [{ "scale-x": me() }],
        "scale-y": [{ "scale-y": me() }],
        "scale-z": [{ "scale-z": me() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: P() }],
        "skew-x": [{ "skew-x": P() }],
        "skew-y": [{ "skew-y": P() }],
        transform: [{ transform: [G, W, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: v() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: he() }],
        "translate-x": [{ "translate-x": he() }],
        "translate-y": [{ "translate-y": he() }],
        "translate-z": [{ "translate-z": he() }],
        "translate-none": [`translate-none`],
        zoom: [{ zoom: [_n, G, W] }],
        accent: [{ accent: k() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: k() }],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              G,
              W,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": k() }],
        "scrollbar-track-color": [{ "scrollbar-track": k() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": [`auto`, `stable`, `both`] },
        ],
        "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
        "scroll-m": [{ "scroll-m": y() }],
        "scroll-mx": [{ "scroll-mx": y() }],
        "scroll-my": [{ "scroll-my": y() }],
        "scroll-ms": [{ "scroll-ms": y() }],
        "scroll-me": [{ "scroll-me": y() }],
        "scroll-mbs": [{ "scroll-mbs": y() }],
        "scroll-mbe": [{ "scroll-mbe": y() }],
        "scroll-mt": [{ "scroll-mt": y() }],
        "scroll-mr": [{ "scroll-mr": y() }],
        "scroll-mb": [{ "scroll-mb": y() }],
        "scroll-ml": [{ "scroll-ml": y() }],
        "scroll-p": [{ "scroll-p": y() }],
        "scroll-px": [{ "scroll-px": y() }],
        "scroll-py": [{ "scroll-py": y() }],
        "scroll-ps": [{ "scroll-ps": y() }],
        "scroll-pe": [{ "scroll-pe": y() }],
        "scroll-pbs": [{ "scroll-pbs": y() }],
        "scroll-pbe": [{ "scroll-pbe": y() }],
        "scroll-pt": [{ "scroll-pt": y() }],
        "scroll-pr": [{ "scroll-pr": y() }],
        "scroll-pb": [{ "scroll-pb": y() }],
        "scroll-pl": [{ "scroll-pl": y() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [
          { "will-change": [`auto`, `scroll`, `contents`, `transform`, G, W] },
        ],
        fill: [{ fill: [`none`, ...k()] }],
        "stroke-w": [{ stroke: [U, Fn, On, kn] }],
        stroke: [{ stroke: [`none`, ...k()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        "container-named": [`container-type`],
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      postfixLookupClassGroups: [`container-type`],
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function K(...e) {
  return Qn(Et(e));
}
var q = t(),
  $n = kt(
    `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
    {
      variants: {
        variant: {
          default: `bg-primary text-primary-foreground shadow hover:bg-primary/90`,
          destructive: `bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90`,
          outline: `border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground`,
          secondary: `bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80`,
          ghost: `hover:bg-accent hover:text-accent-foreground`,
          link: `text-primary underline-offset-4 hover:underline`,
          race: `hex-cut rounded-none bg-primary text-primary-foreground font-display tracking-[0.12em] shadow-glow hover:brightness-110 active:scale-[0.97] transition-transform`,
          hud: `rounded-none corner-cut bg-hud text-foreground border border-hud-border hover:bg-secondary`,
        },
        size: {
          default: `h-9 px-4 py-2`,
          sm: `h-8 rounded-md px-3 text-xs`,
          lg: `h-10 rounded-md px-8`,
          xl: `h-16 px-14 text-3xl`,
          icon: `h-9 w-9`,
        },
      },
      defaultVariants: { variant: `default`, size: `default` },
    },
  ),
  J = L.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...i }, a) =>
      (0, q.jsx)(r ? ft : `button`, {
        className: K($n({ variant: t, size: n, className: e })),
        ref: a,
        ...i,
      }),
  );
J.displayName = `Button`;
var er = {
    version: 1,
    asset_id: `ced8ce56-e887-4ecf-86fb-bc3adeb28304`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/87d79c9a-935a-4ba9-b459-4c7f6ab60a20/chiron-road.jpg`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/ced8ce56-e887-4ecf-86fb-bc3adeb28304/chiron-road.jpg`,
    original_filename: `chiron-road.jpg`,
    size: 24216,
    content_type: `image/jpeg`,
    created_at: `2026-11-19T02:58:31Z`,
  },
  tr = `/__l5e/assets-v1/2586c620-3972-4d91-bfee-2841e08cc3a2/lamborghini-Bzq-aiWN.png`,
  nr = `/__l5e/assets-v1/d662bbfb-791b-44e2-b4ff-b0281eb07e05/ferrari-BTwB1tGj.png`,
  rr = `/__l5e/assets-v1/d7e12d78-bf6f-4b61-bfee-d6b20cbe2430/bugatti-CXtBHBHq.png`,
  ir = `/__l5e/assets-v1/d3f322d2-a803-4cc6-a5bd-d1fceacb3ea4/koenigsegg-CL8-3fOa.png`,
  ar = `/__l5e/assets-v1/6603a7e7-32d5-477e-b66c-af9474203889/pagani-D7TMmo3M.png`,
  or = `/__l5e/assets-v1/d9def78b-d321-44ce-9cbc-f4b65c6d15c5/dodge-Dz3p7F21.png`,
  sr = `/__l5e/assets-v1/a2108216-02ef-46f7-9b95-91549aa9a72a/bmw-DNZDVpkg.png`,
  cr = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMTAwIj48ZWxsaXBzZSBjeD0iMTAwIiBjeT0iNTAiIHJ4PSI5NiIgcnk9IjQ2IiBmaWxsPSIjMWYzYTkzIiBzdHJva2U9IiNjOWQzZWEiIHN0cm9rZS13aWR0aD0iNSIvPjxlbGxpcHNlIGN4PSIxMDAiIGN5PSI1MCIgcng9Ijg2IiByeT0iMzciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M5ZDNlYSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMTAwIiB5PSI2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Ikdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZiIgZm9udC1zdHlsZT0iaXRhbGljIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjQ2IiBmaWxsPSIjZmZmZmZmIj5Gb3JkPC90ZXh0Pjwvc3ZnPgo=`,
  lr = [
    { id: `ford`, name: `Ford` },
    { id: `lamborghini`, name: `Lamborghini` },
    { id: `ferrari`, name: `Ferrari` },
    { id: `bugatti`, name: `Bugatti` },
    { id: `koenigsegg`, name: `Koenigsegg` },
    { id: `pagani`, name: `Pagani` },
    { id: `dodge`, name: `Dodge` },
    { id: `bmw`, name: `BMW` },
  ],
  ur = {
    ford: cr,
    lamborghini: tr,
    ferrari: nr,
    bugatti: rr,
    koenigsegg: ir,
    pagani: ar,
    dodge: or,
    bmw: sr,
  };
function dr({
  labels: e,
  onClose: t,
  selectedCar: n,
  owned: i,
  onSelect: a,
  busy: o,
}) {
  let s = (0, L.useRef)(null),
    [c, l] = (0, L.useState)(0),
    [u, ee] = (0, L.useState)(`loading`),
    [te, _] = (0, L.useState)(``),
    [S, ae] = (0, L.useState)(v),
    [C, oe] = (0, L.useState)(`body`),
    [w, E] = (0, L.useState)(`color`),
    [D, O] = (0, L.useState)(!0),
    k = (0, L.useRef)(null),
    se = (0, L.useRef)(S);
  ((se.current = S),
    (0, L.useEffect)(() => {
      ae(ne(localStorage));
    }, []),
    (0, L.useEffect)(() => {
      let e = k.current;
      !e ||
        u !== `ready` ||
        r(
          async () => {
            let { applyCarCustom: e } = await import("./car-paint");
            return { applyCarCustom: e };
          },
          [],
        ).then(({ applyCarCustom: t }) => t(e, n, S[n]));
    }, [S, n, u]));
  let ce = (e) => {
      ae((t) => {
        let r = { ...t, [n]: e(t[n]) };
        try {
          p(localStorage, r);
        } catch {}
        return r;
      });
    },
    A = S[n][C];
  return (
    (0, L.useEffect)(() => {
      (ee(`loading`), l(0));
      let e = !1,
        t = 0,
        i = null,
        a = s.current;
      if (a)
        return (
          (async () => {
            let o = await r(() => import("three"), []),
              { OrbitControls: s } = await r(
                async () => {
                  let { OrbitControls: e } = await import(
                    "three/examples/jsm/controls/OrbitControls.js"
                  );
                  return { OrbitControls: e };
                },
                [],
              ),
              { RoomEnvironment: c } = await r(
                async () => {
                  let { RoomEnvironment: e } = await import(
                    "three/examples/jsm/environments/RoomEnvironment.js"
                  );
                  return { RoomEnvironment: e };
                },
                [],
              );
            if (e) return;
            let u = Math.max(1, a.clientWidth),
              d = Math.max(1, a.clientHeight),
              f =
                navigator.maxTouchPoints > 0 &&
                (navigator.deviceMemory ?? 4) <= 4,
              p = new o.WebGLRenderer({
                antialias: !f,
                powerPreference: `high-performance`,
              });
            (p.setPixelRatio(
              Math.min(window.devicePixelRatio || 1, f ? 1.25 : 2),
            ),
              p.setSize(u, d),
              (p.toneMapping = o.ACESFilmicToneMapping),
              (p.toneMappingExposure = 1.15),
              (p.shadowMap.enabled = !0),
              (p.shadowMap.type = o.PCFShadowMap));
            let m = p.domElement;
            ((m.style.display = `block`),
              (m.style.width = `100%`),
              (m.style.height = `100%`),
              (m.style.touchAction = `none`),
              a.appendChild(m));
            let h = new o.Scene();
            ((h.background = new o.Color(3160640)),
              (h.fog = new o.Fog(3160640, 20, 45)));
            let g = new o.PerspectiveCamera(35, u / d, 0.1, 120),
              te = new o.PMREMGenerator(p),
              ne = te.fromScene(new c(), 0.04).texture;
            ((h.environment = ne), (h.environmentIntensity = 0.6));
            let _ = new o.DirectionalLight(16777215, 2.4);
            ((_.castShadow = !0),
              _.shadow.mapSize.set(f ? 512 : 1024, f ? 512 : 1024),
              (_.shadow.camera.near = 1),
              (_.shadow.camera.far = 40),
              (_.shadow.bias = -6e-4),
              h.add(_),
              h.add(_.target));
            let v = new o.DirectionalLight(16757575, 1.5);
            (v.position.set(-6, 3, -5), h.add(v));
            let re = new o.DirectionalLight(8368895, 0.8);
            (re.position.set(5, 2, -6),
              h.add(re),
              h.add(new o.HemisphereLight(12571903, 1708552, 0.55)));
            let { loadCar: ie } = await r(
                async () => {
                  let { loadCar: e } = await import("./models3d");
                  return { loadCar: e };
                },
                [],
              ),
              y = await ie(n);
            if (e) return;
            let b = y.clone(!0);
            (b.traverse((e) => {
              e instanceof o.Mesh &&
                ((e.geometry = e.geometry.clone()),
                (e.material = Array.isArray(e.material)
                  ? e.material.map((e) => e.clone())
                  : e.material.clone()));
            }),
              l(1),
              (k.current = b));
            let x = new o.Group();
            (x.add(b),
              h.add(x),
              b.traverse((e) => {
                let t = e;
                t.isMesh && ((t.castShadow = !0), (t.receiveShadow = !0));
              }),
              (x.rotation.y = -Math.PI / 2),
              x.updateMatrixWorld(!0));
            let S = new o.Box3().setFromObject(x),
              ae = S.getSize(new o.Vector3()),
              C = S.getCenter(new o.Vector3());
            (x.position.set(-C.x, -S.min.y, -C.z), x.updateMatrixWorld(!0));
            let oe = Math.max(ae.x, ae.z),
              w = Math.max(0.4, ae.y),
              { addGarageEnvironment: E } = await r(
                async () => {
                  let { addGarageEnvironment: e } = await import(
                    "./garage-environment"
                  );
                  return { addGarageEnvironment: e };
                },
                [],
              );
            (E(h),
              _.position.set(oe * 0.9, w * 6, oe * 1.1),
              _.target.position.set(0, w * 0.4, 0));
            let D = oe * 0.9;
            ((_.shadow.camera.left = -D),
              (_.shadow.camera.right = D),
              (_.shadow.camera.top = D),
              (_.shadow.camera.bottom = -D),
              _.shadow.camera.updateProjectionMatrix());
            let O = new o.Vector3(0, w * 0.45, 0),
              se = new o.Vector3(0.68, 0.34, 0.65).normalize(),
              ce = () => {
                let e = Math.tan((g.fov * Math.PI) / 360),
                  t = e * g.aspect;
                return Math.max(oe / 2 / t, w / 2 / e) * 1.4;
              },
              A = ce();
            (g.position.copy(O).addScaledVector(se, A), g.lookAt(O));
            let le = (e) => {
              if (!a.closest(`[data-phone-rotated]`)) return;
              let t = T(e.clientX, e.clientY, window.innerWidth);
              for (let [n, r] of [
                [`clientX`, t.x],
                [`clientY`, t.y],
                [`pageX`, t.x],
                [`pageY`, t.y],
              ])
                Object.defineProperty(e, n, { value: r, configurable: !0 });
            };
            for (let e of [
              `pointerdown`,
              `pointermove`,
              `pointerup`,
              `pointercancel`,
            ])
              a.addEventListener(e, le, { capture: !0 });
            let j = new s(g, m);
            (j.target.copy(O),
              (j.enableDamping = !0),
              (j.dampingFactor = 0.075),
              (j.enablePan = !1),
              (j.autoRotate = !0),
              (j.autoRotateSpeed = 0.85),
              (j.minDistance = A * 0.4),
              (j.maxDistance = A * 2.4),
              (j.minPolarAngle = Math.PI * 0.12),
              (j.maxPolarAngle = Math.PI * 0.495),
              j.update());
            let M,
              ue = () => {
                (M && clearTimeout(M), (j.autoRotate = !1));
              },
              de = () => {
                (M && clearTimeout(M),
                  (M = setTimeout(() => {
                    j.autoRotate = !0;
                  }, 2200)));
              };
            (j.addEventListener(`start`, ue), j.addEventListener(`end`, de));
            let N = new ResizeObserver(() => {
              let e = Math.max(1, a.clientWidth),
                t = Math.max(1, a.clientHeight);
              ((g.aspect = e / t), g.updateProjectionMatrix(), p.setSize(e, t));
              let n = ce(),
                r = g.position.distanceTo(j.target);
              if (Math.abs(r - A) < 0.01) {
                let e = g.position.clone().sub(j.target).normalize();
                g.position.copy(j.target).addScaledVector(e, n);
              }
              ((A = n), (j.minDistance = A * 0.4), (j.maxDistance = A * 2.4));
            });
            N.observe(a);
            let fe = () => {
              ((t = requestAnimationFrame(fe)), j.update(), p.render(h, g));
            };
            (fe(),
              (a.dataset.sceneReady = `true`),
              (a.dataset.car = n),
              ee(`ready`),
              (i = () => {
                (cancelAnimationFrame(t),
                  (k.current = null),
                  N.disconnect(),
                  j.removeEventListener(`start`, ue),
                  j.removeEventListener(`end`, de));
                for (let e of [
                  `pointerdown`,
                  `pointermove`,
                  `pointerup`,
                  `pointercancel`,
                ])
                  a.removeEventListener(e, le, { capture: !0 });
                (M && clearTimeout(M),
                  j.dispose(),
                  h.traverse((e) => {
                    let t = e;
                    if (!t.isMesh) return;
                    t.geometry?.dispose();
                    let n = Array.isArray(t.material)
                      ? t.material
                      : [t.material];
                    for (let e of n)
                      if (e) {
                        for (let t of Object.values(e));
                        e.dispose();
                      }
                  }),
                  (h.environment = null),
                  ne.dispose(),
                  te.dispose(),
                  p.dispose(),
                  p.forceContextLoss(),
                  m.parentNode === a && a.removeChild(m));
              }));
          })().catch((t) => {
            e || (_(t instanceof Error ? t.message : String(t)), ee(`error`));
          }),
          () => {
            ((e = !0), i && i());
          }
        );
    }, [n]),
    (0, q.jsxs)(`div`, {
      className: `absolute inset-0 z-40 flex flex-col bg-background`,
      children: [
        (0, q.jsxs)(`div`, {
          className: `flex items-center justify-between gap-3 border-b border-hud-border bg-scrim-top px-5 pb-3 pt-[max(env(safe-area-inset-top),18px)] phone-landscape:pb-1.5 phone-landscape:pt-2`,
          children: [
            (0, q.jsxs)(`div`, {
              children: [
                (0, q.jsx)(`h2`, {
                  className: `font-display text-2xl leading-none tracking-[0.25em] text-primary`,
                  children: e.title,
                }),
                (0, q.jsx)(`p`, {
                  className: `mt-1 font-display text-[11px] tracking-[0.3em] text-muted-foreground`,
                  children: f(n).name.toUpperCase(),
                }),
              ],
            }),
            (0, q.jsx)(J, {
              variant: `ghost`,
              size: `icon`,
              onClick: t,
              "aria-label": e.close,
              className: `corner-cut border border-hud-border bg-hud p-2 text-foreground transition-colors hover:bg-secondary`,
              children: (0, q.jsx)(Ke, { className: `size-5` }),
            }),
          ],
        }),
        (0, q.jsxs)(`div`, {
          className: `relative flex min-h-0 flex-1`,
          children: [
            (0, q.jsxs)(`div`, {
              ref: s,
              className: `relative min-h-0 flex-1 touch-none`,
              children: [
                u === `loading` &&
                  (0, q.jsxs)(`div`, {
                    className: `absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/95`,
                    children: [
                      (0, q.jsx)(`div`, {
                        className: `h-1 w-40 overflow-hidden bg-secondary`,
                        children: (0, q.jsx)(`div`, {
                          className: `h-full bg-primary transition-[width] duration-150`,
                          style: { width: `${Math.round(c * 100)}%` },
                        }),
                      }),
                      (0, q.jsxs)(`p`, {
                        className: `animate-pulse-soft font-display text-sm tracking-[0.25em] text-primary`,
                        children: [e.loading, ` `, Math.round(c * 100), `%`],
                      }),
                    ],
                  }),
                u === `error` &&
                  (0, q.jsxs)(`div`, {
                    className: `absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center`,
                    children: [
                      (0, q.jsx)(`p`, {
                        className: `font-display text-lg tracking-[0.2em] text-brake`,
                        children: e.error,
                      }),
                      (0, q.jsx)(`p`, {
                        className: `text-xs text-muted-foreground`,
                        children: te,
                      }),
                      (0, q.jsx)(J, {
                        variant: `outline`,
                        size: `sm`,
                        className: `border-hud-border bg-hud text-xs`,
                        onClick: t,
                        children: e.close,
                      }),
                    ],
                  }),
              ],
            }),
            D
              ? (0, q.jsxs)(`aside`, {
                  "aria-label": `Personalizar carro`,
                  className: `garage-panel flex w-64 shrink-0 flex-col gap-3 overflow-y-auto border-l border-hud-border bg-hud p-3 phone-landscape:w-56 phone-landscape:gap-2 phone-landscape:p-2`,
                  children: [
                    (0, q.jsxs)(`div`, {
                      className: `flex items-center justify-between`,
                      children: [
                        (0, q.jsx)(`span`, {
                          className: `font-display text-sm tracking-[0.25em] text-primary`,
                          children: `PERSONALIZAR`,
                        }),
                        (0, q.jsx)(J, {
                          variant: `ghost`,
                          size: `sm`,
                          className: `h-6 px-2 text-[10px]`,
                          onClick: () => O(!1),
                          children: `OCULTAR`,
                        }),
                      ],
                    }),
                    (0, q.jsx)(`div`, {
                      role: `tablist`,
                      className: `grid grid-cols-2 gap-1`,
                      children: [`color`, `material`].map((e) =>
                        (0, q.jsx)(
                          J,
                          {
                            role: `tab`,
                            "aria-selected": w === e,
                            variant: `outline`,
                            size: `sm`,
                            onClick: () => E(e),
                            className: `h-7 text-[11px] ${w === e ? `border-primary bg-primary/15 text-primary` : `border-hud-border bg-card`}`,
                            children: e === `color` ? `CORES` : `MATERIAL`,
                          },
                          e,
                        ),
                      ),
                    }),
                    (0, q.jsx)(`div`, {
                      className: `grid grid-cols-2 gap-1`,
                      children: b.map((e) =>
                        (0, q.jsx)(
                          J,
                          {
                            variant: `outline`,
                            size: `sm`,
                            "aria-pressed": C === e,
                            onClick: () => oe(e),
                            className: `h-7 text-[11px] ${C === e ? `border-primary bg-primary/15 text-primary` : `border-hud-border bg-card`}`,
                            children:
                              e === `seats`
                                ? `Interior`
                                : e === `rims`
                                  ? `Calotas`
                                  : re[e],
                          },
                          e,
                        ),
                      ),
                    }),
                    w === `color`
                      ? (0, q.jsxs)(`div`, {
                          children: [
                            (0, q.jsx)(`div`, {
                              className: `grid grid-cols-6 gap-1.5`,
                              children: g.map((e) =>
                                (0, q.jsx)(
                                  `button`,
                                  {
                                    type: `button`,
                                    title: e.name,
                                    "aria-label": e.name,
                                    "aria-pressed": A.color === e.color,
                                    onClick: () => ce((t) => m(t, C, e.color)),
                                    className: `garage-swatch aspect-square rounded-sm border ${A.color === e.color ? `border-primary ring-2 ring-primary` : `border-hud-border`}`,
                                    style: { backgroundColor: e.color },
                                  },
                                  e.color,
                                ),
                              ),
                            }),
                            (0, q.jsxs)(`label`, {
                              className: `mt-2 flex items-center justify-between gap-2 text-[11px] text-muted-foreground`,
                              children: [
                                `Cor livre`,
                                (0, q.jsx)(`input`, {
                                  type: `color`,
                                  "aria-label": `Escolher cor livre`,
                                  value: A.color ?? `#808080`,
                                  onChange: (e) =>
                                    ce((t) => m(t, C, e.target.value)),
                                  className: `h-7 w-14 cursor-pointer rounded-sm border border-hud-border bg-card`,
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, q.jsx)(`div`, {
                          className: `grid grid-cols-2 gap-1`,
                          children: d[C].map((e) =>
                            (0, q.jsx)(
                              J,
                              {
                                variant: `outline`,
                                size: `sm`,
                                "aria-pressed": A.finish === e,
                                onClick: () => ce((t) => ie(t, C, e)),
                                className: `h-8 text-[11px] ${A.finish === e ? `border-primary bg-primary/15 text-primary` : `border-hud-border bg-card`}`,
                                children: y[e],
                              },
                              e,
                            ),
                          ),
                        }),
                    (0, q.jsx)(J, {
                      variant: `ghost`,
                      size: `sm`,
                      className: `h-7 text-[11px] text-muted-foreground`,
                      onClick: () => ce((e) => x(e, C)),
                      children: `Restaurar original`,
                    }),
                  ],
                })
              : (0, q.jsx)(J, {
                  variant: `outline`,
                  size: `sm`,
                  onClick: () => O(!0),
                  className: `absolute right-3 top-3 z-10 border-primary bg-hud text-xs text-primary`,
                  children: `PERSONALIZAR`,
                }),
          ],
        }),
        (0, q.jsx)(`div`, {
          className: `flex shrink-0 justify-start gap-3 overflow-x-auto border-t border-hud-border bg-hud px-3 py-3 sm:justify-center phone-landscape:py-1.5`,
          onPointerDown: (e) => e.stopPropagation(),
          onTouchMove: (e) => e.stopPropagation(),
          children: h
            .filter((e) => i.includes(e.id))
            .map((e) => ({
              ...e,
              image:
                e.id === `revuelto` ? Je : e.id === `chiron` ? er.url : null,
            }))
            .map((e) =>
              (0, q.jsxs)(
                J,
                {
                  variant: `outline`,
                  disabled: o,
                  "aria-pressed": n === e.id,
                  "aria-label": `Selecionar ${e.name}`,
                  onClick: () => a(e.id),
                  className: `h-auto w-40 shrink-0 flex-col gap-1 overflow-hidden whitespace-normal p-0 pb-2 phone-landscape:py-1.5 ${n === e.id ? `border-primary bg-primary/10` : `border-hud-border bg-card`}`,
                  children: [
                    e.image
                      ? (0, q.jsx)(`img`, {
                          src: e.image,
                          alt: e.name,
                          className: `h-16 w-full object-cover phone-landscape:hidden`,
                        })
                      : (0, q.jsx)(`img`, {
                          src: ur[e.brand],
                          alt: ``,
                          className: `h-16 w-full bg-secondary object-contain p-2 phone-landscape:hidden`,
                        }),
                    (0, q.jsx)(`span`, {
                      className: `px-1 text-center text-xs`,
                      children: e.name,
                    }),
                    (0, q.jsx)(`span`, {
                      className: `text-[10px] text-primary`,
                      children: e.id === n ? `SELECIONADO` : `DISPONÍVEL`,
                    }),
                  ],
                },
                e.id,
              ),
            ),
        }),
      ],
    })
  );
}
var fr = {
    version: 1,
    asset_id: `71dd33c6-5f2a-44a3-9aeb-8fbce76624d8`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/76c5f431-d2a0-4960-b88a-cdb55629da2c/svj.jpg`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/71dd33c6-5f2a-44a3-9aeb-8fbce76624d8/svj.jpg`,
    original_filename: `svj.jpg`,
    size: 75538,
    content_type: `image/jpeg`,
    created_at: `2026-11-19T02:58:12Z`,
  },
  pr = [
    {
      id: `svj`,
      name: `Lamborghini SVJ`,
      brand: `lamborghini`,
      price: 13e3,
      image: fr.url,
    },
    {
      id: `urus`,
      name: `Lamborghini Urus`,
      brand: `lamborghini`,
      price: 8e3,
      image: {
        version: 1,
        asset_id: `ac386db3-8e96-49b5-a1b3-0f8f6c29cd33`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/5014c7af-b192-4c6b-b313-c1c5afdf9b58/urus.jpg`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/ac386db3-8e96-49b5-a1b3-0f8f6c29cd33/urus.jpg`,
        original_filename: `urus.jpg`,
        size: 66189,
        content_type: `image/jpeg`,
        created_at: `2026-11-19T02:57:43Z`,
      }.url,
    },
    {
      id: `murcielago`,
      name: `Lamborghini Murciélago`,
      brand: `lamborghini`,
      price: 1e4,
      image: {
        version: 1,
        asset_id: `ea4743aa-4e8e-4f9d-a947-29070902717f`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/d5dd5aaa-647c-453e-8292-fb46e5ba2ad5/murcielago.jpg`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/ea4743aa-4e8e-4f9d-a947-29070902717f/murcielago.jpg`,
        original_filename: `murcielago.jpg`,
        size: 91610,
        content_type: `image/jpeg`,
        created_at: `2026-11-19T02:58:09Z`,
      }.url,
    },
    {
      id: `veneno`,
      name: `Lamborghini Veneno`,
      brand: `lamborghini`,
      price: 22e3,
      image: {
        version: 1,
        asset_id: `1905bf62-d5d0-4160-b6ed-11d3973a3d96`,
        project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
        url: `/__l5e/assets-v1/ba4659f9-0cee-4144-a260-2a21ed36db26/veneno.jpg`,
        r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/1905bf62-d5d0-4160-b6ed-11d3973a3d96/veneno.jpg`,
        original_filename: `veneno.jpg`,
        size: 57698,
        content_type: `image/jpeg`,
        created_at: `2026-11-19T02:57:36Z`,
      }.url,
    },
    {
      id: `chiron`,
      name: `Bugatti Chiron`,
      brand: `bugatti`,
      price: 3e4,
      image: er.url,
    },
  ];
function mr(e) {
  return { status: `demo`, purchased: !1 };
}
var hr = {
    version: 1,
    asset_id: `193c2e81-c472-47f0-b618-6941c9daec74`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/7502e357-ad83-4934-9037-66ef51fc6583/revuelto-store.jpg`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/193c2e81-c472-47f0-b618-6941c9daec74/revuelto-store.jpg`,
    original_filename: `revuelto-store.jpg`,
    size: 240563,
    content_type: `image/jpeg`,
    created_at: `2026-11-19T02:57:55Z`,
  },
  gr = {
    chiron: er.url,
    svj: fr.url,
    revuelto: hr.url,
    m2: {
      version: 1,
      asset_id: `97a93c92-0953-4638-950c-57a4e2f2675e`,
      project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
      url: `/__l5e/assets-v1/7580c26a-441e-4448-9304-95b924ad70e4/bmw-m2-store.jpg`,
      r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/97a93c92-0953-4638-950c-57a4e2f2675e/bmw-m2-store.jpg`,
      original_filename: `bmw-m2-store.jpg`,
      size: 191389,
      content_type: `image/jpeg`,
      created_at: `2026-11-19T02:57:47Z`,
    }.url,
    "mustang-rtr": {
      version: 1,
      asset_id: `e444f38e-b7d3-4363-a6e9-b15cbc6c4fbd`,
      project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
      url: `/__l5e/assets-v1/f4596213-6ed5-49b2-af15-a727a8f4a6e0/mustang-rtr-store.jpg`,
      r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/e444f38e-b7d3-4363-a6e9-b15cbc6c4fbd/mustang-rtr-store.jpg`,
      original_filename: `mustang-rtr-store.jpg`,
      size: 439390,
      content_type: `image/jpeg`,
      created_at: `2026-11-19T02:57:51Z`,
    }.url,
    "m4-competition": `/__l5e/assets-v1/da2f5aed-7ff3-44d3-b1c7-b58269454624/bmw-m4-competition-CUjis_k7.jpg`,
    "m8-competition": `/__l5e/assets-v1/a1013234-e1f5-4460-8d03-4aefced6cec1/bmw-m8-competition-DAxYjN_-.jpg`,
    jesko: `/__l5e/assets-v1/e8330cc9-0441-4453-8bbb-7bdafa547ac3/koenigsegg-jesko-ml7pQ-SX.jpg`,
    "voiture-noire": `/__l5e/assets-v1/6efbbe54-15fb-4923-9fbf-f97794520b7f/bugatti-voiture-noire-B48_gisA.jpg`,
  },
  _r = [
    { id: `revuelto`, name: `Revuelto`, logo: hr.url },
    ...lr.map((e) => ({ id: e.id, name: e.name, logo: ur[e.id] })),
  ],
  vr = [
    ...h.map((e) => ({
      key: e.id,
      kind: `car`,
      id: e.id,
      name: e.name,
      brand: e.brand,
      price: e.price,
      image: gr[e.id] ?? null,
    })),
    ...pr
      .filter((e) => !h.some((t) => t.id === e.id))
      .map((e) => ({
        key: e.id,
        kind: `demo`,
        id: e.id,
        name: e.name,
        brand: e.brand,
        price: e.price,
        image: e.image,
      })),
  ],
  yr = (e) =>
    e === `revuelto`
      ? vr.filter((e) => e.id === `revuelto`)
      : vr.filter((t) => t.brand === e);
function br({
  onClose: e,
  garage: t,
  balance: n,
  developer: r,
  onPick: a,
  busy: o,
}) {
  let [s, c] = (0, L.useState)(null),
    [u, d] = (0, L.useState)(`revuelto`),
    f = yr(u),
    p = _r.find((e) => e.id === u);
  return (0, q.jsxs)(`section`, {
    role: `dialog`,
    "aria-modal": `true`,
    "aria-label": `Loja`,
    className: `pointer-events-auto absolute inset-0 z-50 flex flex-col bg-background text-foreground`,
    children: [
      (0, q.jsxs)(`header`, {
        className: `flex shrink-0 items-center justify-between gap-3 border-b border-hud-border px-4 py-4 sm:px-8`,
        children: [
          (0, q.jsxs)(`div`, {
            className: `flex items-center gap-3`,
            children: [
              (0, q.jsx)(Be, { className: `size-6 text-primary` }),
              (0, q.jsx)(`h2`, {
                className: `font-display text-3xl`,
                children: `LOJA`,
              }),
            ],
          }),
          (0, q.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, q.jsxs)(`span`, {
                className: `flex items-center gap-1.5 rounded border border-primary/40 bg-card px-3 py-1.5 font-display text-lg tabular-nums text-primary`,
                "aria-label": `Seu saldo`,
                children: [
                  (0, q.jsx)(Ge, { className: `size-4` }),
                  r ? `GRÁTIS` : i(n),
                ],
              }),
              (0, q.jsx)(J, {
                variant: `ghost`,
                size: `icon`,
                onClick: e,
                "aria-label": `Fechar loja`,
                title: `Fechar loja`,
                children: (0, q.jsx)(Ke, { className: `size-5` }),
              }),
            ],
          }),
        ],
      }),
      (0, q.jsx)(`nav`, {
        role: `tablist`,
        "aria-label": `Marcas`,
        className: `flex shrink-0 gap-2 overflow-x-auto border-b border-hud-border px-3 py-3 sm:justify-center sm:px-8`,
        onPointerDown: (e) => e.stopPropagation(),
        onTouchMove: (e) => e.stopPropagation(),
        children: _r.map((e) =>
          (0, q.jsxs)(
            J,
            {
              role: `tab`,
              "aria-selected": u === e.id,
              variant: `outline`,
              onClick: () => d(e.id),
              className: `h-auto shrink-0 flex-col gap-1 rounded px-3 py-2 ${u === e.id ? `border-primary bg-primary/10 text-primary` : `border-hud-border bg-card text-foreground`}`,
              children: [
                (0, q.jsx)(`img`, {
                  src: e.logo,
                  alt: ``,
                  className:
                    e.id === `revuelto`
                      ? `h-10 w-16 rounded-sm object-cover`
                      : `size-10 object-contain`,
                }),
                (0, q.jsx)(`span`, {
                  className: `font-display text-xs uppercase tracking-widest`,
                  children: e.name,
                }),
              ],
            },
            e.id,
          ),
        ),
      }),
      (0, q.jsx)(`div`, {
        className: `min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-4 sm:px-8`,
        style: { touchAction: `pan-x pan-y`, WebkitOverflowScrolling: `touch` },
        onPointerDown: (e) => e.stopPropagation(),
        onTouchStart: (e) => e.stopPropagation(),
        onTouchMove: (e) => e.stopPropagation(),
        children: (0, q.jsxs)(`div`, {
          className: `mx-auto max-w-5xl`,
          children: [
            (0, q.jsxs)(`h3`, {
              className: `mb-5 flex items-center gap-3 border-b border-primary pb-3 font-display text-2xl uppercase text-primary`,
              children: [
                (0, q.jsx)(`img`, {
                  src: p.logo,
                  alt: ``,
                  className:
                    u === `revuelto`
                      ? `h-8 w-12 rounded-sm object-cover`
                      : `size-8 object-contain`,
                }),
                p.name,
              ],
            }),
            f.length === 0
              ? (0, q.jsxs)(`p`, {
                  className: `py-16 text-center text-sm text-muted-foreground`,
                  children: [`Nenhum carro `, p.name, ` disponível ainda.`],
                })
              : (0, q.jsx)(`div`, {
                  className:
                    u === `revuelto`
                      ? `mx-auto grid max-w-md grid-cols-1 gap-3`
                      : `grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5`,
                  children: f.map((e) => {
                    let s = e.kind === `car` && (r || l(t, e.id)),
                      d = e.kind === `car` && !s && n < e.price;
                    return (0, q.jsxs)(
                      J,
                      {
                        disabled: o,
                        variant: `outline`,
                        className: `block h-auto w-full overflow-hidden rounded border-hud-border bg-card p-0 text-left text-foreground whitespace-normal hover:border-primary hover:bg-card hover:text-foreground`,
                        onClick: () => {
                          if (e.kind === `car`) {
                            a(e.id);
                            return;
                          }
                          mr(e.id).status === `demo` && c(e.name);
                        },
                        "aria-label": e.name,
                        children: [
                          e.image
                            ? (0, q.jsx)(`img`, {
                                src: e.image,
                                alt: e.name,
                                loading: `lazy`,
                                className: `w-full bg-secondary object-cover ${u === `revuelto` ? `h-48 sm:h-56` : `h-20 sm:h-24`}`,
                              })
                            : (0, q.jsx)(`img`, {
                                src: ur[e.brand],
                                alt: ``,
                                loading: `lazy`,
                                className: `h-20 w-full bg-secondary object-contain p-3 sm:h-24`,
                              }),
                          (0, q.jsxs)(`div`, {
                            className: `flex flex-col items-start gap-1 p-2.5`,
                            children: [
                              (0, q.jsx)(`span`, {
                                className: `font-display text-base leading-tight`,
                                children: e.name,
                              }),
                              e.kind === `car`
                                ? (0, q.jsx)(`span`, {
                                    className: `text-xs font-semibold ${d ? `text-muted-foreground` : `text-primary`}`,
                                    children:
                                      e.kind === `car` && l(t, e.id)
                                        ? `NA GARAGEM`
                                        : r
                                          ? `GRÁTIS (DESENVOLVEDOR)`
                                          : i(e.price),
                                  })
                                : (0, q.jsxs)(`span`, {
                                    className: `text-xs font-semibold text-muted-foreground`,
                                    children: [i(e.price), ` · EM BREVE`],
                                  }),
                            ],
                          }),
                        ],
                      },
                      e.key,
                    );
                  }),
                }),
          ],
        }),
      }),
      s &&
        (0, q.jsx)(`div`, {
          role: `alertdialog`,
          "aria-modal": `true`,
          "aria-label": `Loja em DEMO`,
          className: `absolute inset-0 z-10 flex items-center justify-center bg-scrim p-5`,
          children: (0, q.jsxs)(`div`, {
            className: `w-full max-w-sm rounded border border-hud-border bg-card p-6 text-center`,
            children: [
              (0, q.jsx)(Be, { className: `mx-auto mb-3 size-8 text-primary` }),
              (0, q.jsx)(`h3`, {
                className: `font-display text-3xl text-primary`,
                children: `EM BREVE`,
              }),
              (0, q.jsx)(`p`, { className: `mt-3 font-semibold`, children: s }),
              (0, q.jsx)(`p`, {
                className: `mt-2 text-sm text-muted-foreground`,
                children: `Este carro chega nas próximas atualizações.`,
              }),
              (0, q.jsxs)(J, {
                variant: `race`,
                className: `mt-5 w-full`,
                onClick: () => c(null),
                children: [
                  (0, q.jsx)(Ae, { className: `size-4` }),
                  `VOLTAR À LOJA`,
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
var xr = (e, t, n, r) => {
  let i = (r * Math.PI) / 180;
  return [e + n * Math.cos(i), t + n * Math.sin(i)];
};
function Sr({ speed: e, gear: t }) {
  let n = Math.min(1e4, D(t, e)),
    r = Math.round((n / 1e4) * 24),
    i = Array.from({ length: 24 }, (e, t) => {
      let n = 180 + (t / 24) * 180 + 0.9,
        i = 180 + ((t + 1) / 24) * 180 - 0.9,
        [a, o] = xr(100, 96, 86, n),
        [s, c] = xr(100, 96, 86, i),
        [l, u] = xr(100, 96, 72, i),
        [d, f] = xr(100, 96, 72, n),
        p = (t + 1) / 24 > N / 1e4 - 0.08,
        m =
          t < r
            ? p
              ? `var(--color-brake)`
              : `var(--color-primary)`
            : `var(--color-hud-border)`;
      return (0, q.jsx)(
        `path`,
        {
          d: `M${a} ${o} L${s} ${c} L${l} ${u} L${d} ${f}Z`,
          fill: m,
          opacity: t < r ? 1 : 0.45,
        },
        t,
      );
    }),
    a = Array.from({ length: 11 }, (e, t) => {
      let [n, r] = xr(100, 96, 61, 180 + t * 18);
      return (0, q.jsx)(
        `text`,
        {
          x: n,
          y: r + 3,
          textAnchor: `middle`,
          fontSize: `8`,
          fontWeight: `700`,
          fill: t >= 9 ? `var(--color-primary)` : `var(--color-foreground)`,
          fontStyle: `italic`,
          children: t,
        },
        t,
      );
    });
  return (0, q.jsxs)(`svg`, {
    viewBox: `0 0 200 118`,
    className: `h-full w-full drop-shadow-lg`,
    "aria-label": `${Math.round(e)} km/h, marcha ${t}`,
    children: [
      (0, q.jsx)(`path`, {
        d: `M8 100 A92 92 0 0 1 192 100 L176 114 L24 114Z`,
        fill: `var(--color-hud)`,
        opacity: `0.72`,
        stroke: `var(--color-brake)`,
        strokeWidth: `0.8`,
      }),
      i,
      a,
      (0, q.jsx)(`text`, {
        x: `100`,
        y: `78`,
        textAnchor: `middle`,
        fontSize: `40`,
        fontWeight: `900`,
        fontStyle: `italic`,
        fill: `none`,
        stroke: `var(--color-primary)`,
        strokeWidth: `1.6`,
        children: e < 1 ? `N` : t,
      }),
      (0, q.jsx)(`text`, {
        x: `128`,
        y: `52`,
        fontSize: `5`,
        fill: `var(--color-muted-foreground)`,
        children: `RPM x1000`,
      }),
      (0, q.jsx)(`path`, {
        d: `M60 92 L140 92 L146 108 L54 108Z`,
        fill: `var(--color-foreground)`,
        opacity: `0.92`,
      }),
      (0, q.jsx)(`text`, {
        x: `114`,
        y: `105`,
        textAnchor: `end`,
        fontSize: `15`,
        fontWeight: `900`,
        fontStyle: `italic`,
        fill: `var(--color-background)`,
        className: `tabular-nums`,
        children: String(Math.round(e)).padStart(3, `0`),
      }),
      (0, q.jsx)(`text`, {
        x: `117`,
        y: `105`,
        fontSize: `5.5`,
        fontWeight: `700`,
        fill: `var(--color-background)`,
        children: `km/h`,
      }),
    ],
  });
}
function Cr({ speed: e, gear: t }) {
  let n = 120 + (Math.min(500, e) / 500) * 300,
    r = [];
  for (let e = 0; e <= 500; e += 10) {
    let t = 120 + (e / 500) * 300,
      n = e % 50 == 0,
      [i, a] = xr(100, 100, 88, t),
      [o, s] = xr(100, 100, n ? 76 : 82, t);
    if (
      (r.push(
        (0, q.jsx)(
          `line`,
          {
            x1: i,
            y1: a,
            x2: o,
            y2: s,
            stroke: `var(--color-chiron-glow)`,
            strokeWidth: n ? 2 : 0.8,
          },
          e,
        ),
      ),
      n)
    ) {
      let [n, i] = xr(100, 100, 64, t);
      r.push(
        (0, q.jsx)(
          `text`,
          {
            x: n,
            y: i + 3.5,
            textAnchor: `middle`,
            fontSize: `10`,
            fontWeight: `700`,
            fill: `var(--color-foreground)`,
            children: e,
          },
          `t${e}`,
        ),
      );
    }
  }
  let [i, a] = xr(100, 100, 74, n);
  return (0, q.jsxs)(`svg`, {
    viewBox: `0 0 200 200`,
    className: `h-full w-full drop-shadow-lg`,
    "aria-label": `${Math.round(e)} km/h, marcha ${t}`,
    children: [
      (0, q.jsx)(`defs`, {
        children: (0, q.jsxs)(`radialGradient`, {
          id: `chiron-face`,
          children: [
            (0, q.jsx)(`stop`, {
              offset: `0.6`,
              stopColor: `var(--color-hud)`,
            }),
            (0, q.jsx)(`stop`, {
              offset: `1`,
              stopColor: `var(--color-chiron-glow)`,
              stopOpacity: `0.35`,
            }),
          ],
        }),
      }),
      (0, q.jsx)(`circle`, {
        cx: `100`,
        cy: `100`,
        r: `97`,
        fill: `url(#chiron-face)`,
        opacity: `0.8`,
        stroke: `var(--color-muted-foreground)`,
        strokeWidth: `3`,
      }),
      r,
      (0, q.jsx)(`text`, {
        x: `100`,
        y: `66`,
        textAnchor: `middle`,
        fontSize: `16`,
        fontWeight: `900`,
        fill: `var(--color-muted-foreground)`,
        letterSpacing: `-3`,
        children: `EB`,
      }),
      (0, q.jsx)(`line`, {
        x1: `100`,
        y1: `100`,
        x2: i,
        y2: a,
        stroke: `var(--color-foreground)`,
        strokeWidth: `3`,
        strokeLinecap: `round`,
        style: { transition: `all 90ms linear` },
      }),
      (0, q.jsx)(`circle`, {
        cx: `100`,
        cy: `100`,
        r: `9`,
        fill: `var(--color-hud)`,
        stroke: `var(--color-foreground)`,
        strokeWidth: `2`,
      }),
      (0, q.jsx)(`rect`, {
        x: `66`,
        y: `140`,
        width: `68`,
        height: `34`,
        rx: `6`,
        fill: `var(--color-chiron-glow)`,
        opacity: `0.28`,
      }),
      (0, q.jsx)(`text`, {
        x: `118`,
        y: `163`,
        textAnchor: `end`,
        fontSize: `20`,
        fontWeight: `700`,
        fill: `var(--color-chiron-glow)`,
        className: `tabular-nums`,
        children: String(Math.round(e)).padStart(3, `0`),
      }),
      (0, q.jsx)(`text`, {
        x: `120`,
        y: `163`,
        fontSize: `6`,
        fill: `var(--color-foreground)`,
        children: `km/h`,
      }),
      (0, q.jsx)(`text`, {
        x: `100`,
        y: `172`,
        textAnchor: `middle`,
        fontSize: `7`,
        fontWeight: `700`,
        fill: `var(--color-foreground)`,
        children: e < 1 ? `N` : `D${t}`,
      }),
    ],
  });
}
function wr({ car: e, speed: t, gear: n }) {
  return f(e).sound === `chiron`
    ? (0, q.jsx)(`div`, {
        className: `h-32 w-32 sm:h-40 sm:w-40`,
        children: (0, q.jsx)(Cr, { speed: t, gear: n }),
      })
    : (0, q.jsx)(`div`, {
        className: `h-[6.5rem] w-44 sm:h-32 sm:w-56`,
        children: (0, q.jsx)(Sr, { speed: t, gear: n }),
      });
}
var Tr = {
    version: 1,
    asset_id: `251b8ad5-190f-43cd-9ad0-bcb38ec78d9f`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/c7ae6854-3b20-4345-8c64-7c4545e4806a/menu-music.mp3`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/251b8ad5-190f-43cd-9ad0-bcb38ec78d9f/menu-music.mp3`,
    original_filename: `menu-music.mp3`,
    size: 6233325,
    content_type: `audio/mpeg`,
    created_at: `2026-11-19T02:59:54Z`,
  },
  Er = {
    version: 1,
    asset_id: `3a233115-29a4-453a-a0c2-6a7045d5c598`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/69b4d356-2db6-4651-ab65-806438935f86/claim-purchase.mp3`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/3a233115-29a4-453a-a0c2-6a7045d5c598/claim-purchase.mp3`,
    original_filename: `claim-purchase.mp3`,
    size: 19897,
    content_type: `audio/mpeg`,
    created_at: `2026-11-19T02:59:48Z`,
  },
  Dr = (e) => e.title || e.phase !== `playing`,
  Or = 0.55,
  kr = 0.35,
  Ar = 0.9,
  jr = new (class {
    ctx = null;
    music = null;
    buy = null;
    muted = !1;
    wantMusic = !1;
    fadeRaf = 0;
    stopTimer;
    ensure() {
      if (!(typeof window > `u`) && !this.music) {
        document.addEventListener(`visibilitychange`, () => {
          document.hidden
            ? this.music?.pause()
            : this.wantMusic && !this.muted && this.startMusic();
        });
        let e = new Audio(Tr.url);
        ((e.loop = !0), (e.preload = `auto`), (e.volume = 0), (this.music = e));
        let t = new Audio(Er.url);
        ((t.preload = `auto`), (t.volume = Ar), (this.buy = t));
      }
    }
    audioCtx() {
      if (!this.ctx) {
        let e = window.AudioContext || window.webkitAudioContext;
        if (!e) return null;
        this.ctx = new e();
      }
      return (this.ctx.state === `suspended` && this.ctx.resume(), this.ctx);
    }
    unlock() {
      (this.ensure(),
        this.audioCtx(),
        this.wantMusic &&
          !this.muted &&
          this.music?.paused &&
          this.startMusic());
    }
    setMuted(e) {
      ((this.muted = e),
        this.ensure(),
        e ? this.music?.pause() : this.wantMusic && this.startMusic());
    }
    setMusic(e) {
      if (
        (this.ensure(),
        (this.wantMusic = e),
        clearTimeout(this.stopTimer),
        e && !this.muted)
      ) {
        this.startMusic();
        return;
      }
      (this.fadeTo(0, 600),
        (this.stopTimer = setTimeout(() => {
          this.wantMusic || this.music?.pause();
        }, 650)));
    }
    startMusic() {
      let e = this.music;
      !e ||
        document.hidden ||
        (e.paused &&
          e
            .play()
            .then(() => {
              (!this.wantMusic || this.muted) && e.pause();
            })
            .catch(() => {}),
        this.fadeTo(Or, 1200));
    }
    fadeTo(e, t, n) {
      let r = this.music;
      if (!r) return;
      cancelAnimationFrame(this.fadeRaf);
      let i = r.volume,
        a = performance.now(),
        o = (s) => {
          let c = Math.min(1, (s - a) / t);
          ((r.volume = Math.max(0, Math.min(1, i + (e - i) * c))),
            c < 1 ? (this.fadeRaf = requestAnimationFrame(o)) : n?.());
        };
      this.fadeRaf = requestAnimationFrame(o);
    }
    stopAll() {
      ((this.wantMusic = !1),
        clearTimeout(this.stopTimer),
        cancelAnimationFrame(this.fadeRaf),
        this.music?.pause());
    }
    click() {
      if (this.muted) return;
      let e = this.audioCtx();
      if (!e) return;
      let t = e.currentTime,
        n = e.createGain();
      (n.gain.setValueAtTime(kr, t),
        n.gain.exponentialRampToValueAtTime(1e-4, t + 0.09),
        n.connect(e.destination));
      let r = e.createOscillator();
      ((r.type = `triangle`),
        r.frequency.setValueAtTime(1650, t),
        r.frequency.exponentialRampToValueAtTime(820, t + 0.07),
        r.connect(n),
        r.start(t),
        r.stop(t + 0.1));
      let i = Math.floor(e.sampleRate * 0.025),
        a = e.createBuffer(1, i, e.sampleRate),
        o = a.getChannelData(0);
      for (let e = 0; e < i; e++) o[e] = (Math.random() * 2 - 1) * (1 - e / i);
      let s = e.createBufferSource();
      s.buffer = a;
      let c = e.createBiquadFilter();
      ((c.type = `bandpass`), (c.frequency.value = 4200), (c.Q.value = 1.2));
      let l = e.createGain();
      ((l.gain.value = kr * 0.5),
        s.connect(c).connect(l).connect(e.destination),
        s.start(t));
    }
    confirm() {
      if (this.muted) return;
      let e = this.audioCtx();
      if (!e) return;
      let t = e.currentTime,
        n = Math.floor(e.sampleRate * 0.6),
        r = e.createBuffer(1, n, e.sampleRate),
        i = r.getChannelData(0);
      for (let e = 0; e < n; e++) i[e] = Math.random() * 2 - 1;
      let a = e.createBufferSource();
      a.buffer = r;
      let o = e.createBiquadFilter();
      ((o.type = `bandpass`),
        (o.Q.value = 2),
        o.frequency.setValueAtTime(500, t),
        o.frequency.exponentialRampToValueAtTime(5e3, t + 0.5));
      let s = e.createGain();
      (s.gain.setValueAtTime(1e-4, t),
        s.gain.exponentialRampToValueAtTime(0.5, t + 0.25),
        s.gain.exponentialRampToValueAtTime(1e-4, t + 0.6),
        a.connect(o).connect(s).connect(e.destination),
        a.start(t),
        a.stop(t + 0.6),
        this.click());
    }
    purchase() {
      if ((this.ensure(), !(this.muted || !this.buy))) {
        try {
          this.buy.currentTime = 0;
        } catch {}
        this.buy.play().catch(() => {});
      }
    }
  })();
function Mr({ prompt: e, onContinue: t, onReady: n }) {
  let i = (0, L.useRef)(n);
  i.current = n;
  let a = (0, L.useRef)(null),
    o = (0, L.useRef)(null),
    s = (0, L.useRef)(null),
    [c, l] = (0, L.useState)(!1),
    [u, d] = (0, L.useState)(!1),
    f = (0, L.useRef)(!1);
  return (
    (0, L.useEffect)(() => {
      let e = !1,
        t = null,
        n = null;
      return (
        r(
          async () => {
            let { TitleScene: e } = await import("./title-scene");
            return { TitleScene: e };
          },
          [],
        ).then(({ TitleScene: r }) => {
          let c = o.current,
            u = a.current;
          e ||
            !c ||
            !u ||
            ((t = new r(c, s.current, () => {
              ((u.dataset.titleReady = `true`), l(!0), i.current?.());
            })),
            t.resize(u.clientWidth, u.clientHeight),
            (n = new ResizeObserver(() =>
              t?.resize(u.clientWidth, u.clientHeight),
            )),
            n.observe(u));
        }),
        () => {
          ((e = !0), n?.disconnect(), t?.dispose());
        }
      );
    }, []),
    (0, L.useEffect)(() => {
      let e = () => {
          f.current ||
            ((f.current = !0),
            jr.unlock(),
            jr.confirm(),
            d(!0),
            setTimeout(t, 450));
        },
        n = (t) => {
          t.repeat || (t.preventDefault(), t.stopPropagation(), e());
        };
      window.addEventListener(`keydown`, n, { capture: !0 });
      let r = a.current;
      return (
        r?.addEventListener(`pointerup`, e),
        () => {
          (window.removeEventListener(`keydown`, n, { capture: !0 }),
            r?.removeEventListener(`pointerup`, e));
        }
      );
    }, [t]),
    (0, q.jsxs)(`div`, {
      ref: a,
      role: `button`,
      tabIndex: 0,
      "aria-label": e,
      className: `title-screen absolute inset-0 z-[80] cursor-pointer overflow-hidden bg-background transition-opacity duration-500 ${u ? `opacity-0` : `opacity-100`}`,
      children: [
        (0, q.jsx)(`canvas`, {
          ref: o,
          className: `absolute inset-0 block h-full w-full`,
        }),
        (0, q.jsx)(`div`, {
          ref: s,
          className: `pointer-events-none absolute inset-0 bg-background opacity-100`,
        }),
        (0, q.jsx)(`div`, {
          className: `title-vignette pointer-events-none absolute inset-0`,
        }),
        (0, q.jsx)(`div`, {
          className: `title-letterbox pointer-events-none absolute inset-x-0 top-0 h-[7%]`,
        }),
        (0, q.jsx)(`div`, {
          className: `title-letterbox pointer-events-none absolute inset-x-0 bottom-0 h-[7%]`,
        }),
        (0, q.jsx)(`img`, {
          src: it.url,
          alt: `Supercar Highway Dash`,
          width: 680,
          height: 540,
          className: `title-logo pointer-events-none absolute left-[max(env(safe-area-inset-left),20px)] top-[max(env(safe-area-inset-top),16px)] h-16 w-auto sm:h-20`,
        }),
        (0, q.jsxs)(`div`, {
          className: `pointer-events-none absolute inset-x-0 bottom-[11%] flex flex-col items-center gap-2`,
          children: [
            c
              ? (0, q.jsx)(`p`, {
                  className: `title-prompt animate-title-blink font-display text-2xl tracking-[0.35em] sm:text-3xl`,
                  children: e,
                })
              : (0, q.jsx)(`p`, {
                  className: `title-prompt animate-pulse-soft font-display text-lg tracking-[0.4em]`,
                  children: `…`,
                }),
            (0, q.jsx)(`span`, { className: `title-rule h-px w-48` }),
          ],
        }),
      ],
    })
  );
}
var Nr = {
    version: 1,
    asset_id: `f9458395-704c-4cc7-af86-342cca7daa48`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/2e649c24-f069-4cd7-b524-047c43c38dc3/revuelto-idle.wav`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/f9458395-704c-4cc7-af86-342cca7daa48/revuelto-idle.wav`,
    original_filename: `revuelto-idle.wav`,
    size: 336044,
    content_type: `audio/wav`,
    created_at: `2026-11-19T02:44:24Z`,
  },
  Pr = {
    version: 1,
    asset_id: `1bcd7e55-a991-4946-85fb-52a599b92a6a`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/0c5a8a69-0f7b-4967-9f5d-fe71560e447b/revuelto-rev.wav`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/1bcd7e55-a991-4946-85fb-52a599b92a6a/revuelto-rev.wav`,
    original_filename: `revuelto-rev.wav`,
    size: 60044,
    content_type: `audio/wav`,
    created_at: `2026-11-19T02:44:38Z`,
  },
  Fr = {
    version: 1,
    asset_id: `1a82d08e-3751-4ffe-8925-72cfffd85b1e`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/acec2685-536a-4f13-a215-7dfc76662883/ferrari-engine.mp3`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/1a82d08e-3751-4ffe-8925-72cfffd85b1e/ferrari-engine.mp3`,
    original_filename: `ferrari-engine.mp3`,
    size: 308298,
    content_type: `audio/mpeg`,
    created_at: `2026-11-19T03:00:26Z`,
  },
  Ir = {
    version: 1,
    asset_id: `6238d603-6dde-4b18-9aa3-65f935227acd`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/b5a03546-5882-415c-bd60-409aaef79a56/bugatti-engine.mp3`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/6238d603-6dde-4b18-9aa3-65f935227acd/bugatti-engine.mp3`,
    original_filename: `bugatti-engine.mp3`,
    size: 236058,
    content_type: `audio/mpeg`,
    created_at: `2026-11-19T02:59:33Z`,
  },
  Lr = {
    version: 1,
    asset_id: `b907e79d-7fe3-4c13-819d-888394ec2db6`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/11eb952b-66bd-47ca-84ec-e0b53399063a/mustang-engine.mp3`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/b907e79d-7fe3-4c13-819d-888394ec2db6/mustang-engine.mp3`,
    original_filename: `mustang-engine.mp3`,
    size: 144858,
    content_type: `audio/mpeg`,
    created_at: `2026-11-19T03:00:05Z`,
  },
  Rr = {
    "ferrari-sf90": Fr.url,
    "bugatti-chiron": Ir.url,
    "mustang-blue": Lr.url,
    "mustang-black": Lr.url,
  };
function zr(e, t, n, r, i) {
  let a = Math.hypot(e.z - t, (e.x - n) / Math.max(0.01, r)),
    o = !!e.sportPush && e.speed < e.cruise - 4;
  return {
    accelerating: o,
    gain:
      !i || e.hit || !Rr[e.type] || a >= 95
        ? 0
        : (o ? 0.38 : 0.085) * (1 - a / 95) ** 2,
    pan: Math.max(-0.9, Math.min(0.9, (e.x - n) / Math.max(1, r * 10))),
    rate: o
      ? 0.9 + Math.min(0.25, e.speed / 1e3)
      : 0.76 + Math.min(0.16, e.speed / 1400),
    cutoff: o ? 8500 : 1800,
  };
}
var Br = class {
    ctx;
    output;
    buffers = new Map();
    voices = new Map();
    disposed = !1;
    constructor(e, t) {
      ((this.ctx = e), (this.output = t), this.load());
    }
    async load() {
      await Promise.all(
        [...new Set(Object.values(Rr))].map(async (e) => {
          try {
            let t = await fetch(e);
            if (!t.ok) return;
            let n = await this.ctx.decodeAudioData(await t.arrayBuffer());
            this.disposed || this.buffers.set(e, n);
          } catch (e) {
            console.warn(`Traffic recording unavailable`, e);
          }
        }),
      );
    }
    update(e, t, n, r, i) {
      let a = i
          ? e
              .filter((e) => Rr[e.type] && !e.hit && Math.abs(e.z - t) < 95)
              .sort((e, n) => Math.abs(e.z - t) - Math.abs(n.z - t))
              .slice(0, 6)
          : [],
        o = new Set(a);
      for (let [e, t] of this.voices)
        o.has(e) || (this.stopVoice(t), this.voices.delete(e));
      for (let e of a) {
        let a = Rr[e.type];
        if (!a) continue;
        let o = this.buffers.get(a);
        if (!o) continue;
        let s = zr(e, t, n, r, i),
          c = this.voices.get(e);
        if (!c) {
          let t = this.ctx.createBufferSource();
          ((t.buffer = o), (t.loop = !0));
          let n = this.ctx.createGain();
          n.gain.value = 0;
          let r = this.ctx.createBiquadFilter();
          r.type = `lowpass`;
          let i = this.ctx.createStereoPanner();
          (t.connect(r),
            r.connect(n),
            n.connect(i),
            i.connect(this.output),
            (c = {
              source: t,
              gain: n,
              filter: r,
              pan: i,
              accelerating: s.accelerating,
            }),
            this.setLoop(c, o, s.accelerating),
            t.start(this.ctx.currentTime, t.loopStart),
            this.voices.set(e, c));
        }
        c.accelerating !== s.accelerating && this.setLoop(c, o, s.accelerating);
        let l = this.ctx.currentTime;
        (c.gain.gain.setTargetAtTime(s.gain, l, 0.12),
          c.source.playbackRate.setTargetAtTime(s.rate, l, 0.2),
          c.filter.frequency.setTargetAtTime(s.cutoff, l, 0.2),
          c.pan.pan.setTargetAtTime(s.pan, l, 0.1));
      }
    }
    setLoop(e, t, n) {
      let r = t.getChannelData(0),
        i = Math.min(t.duration, n ? 4 : 1.4),
        a = 0,
        o = n ? -1 / 0 : 1 / 0;
      for (let e = 0; e + i <= t.duration; e += 0.2) {
        let s = 0;
        for (
          let n = Math.floor(e * t.sampleRate);
          n < (e + i) * t.sampleRate;
          n += 64
        )
          s += (r[n] ?? 0) ** 2;
        s < 0.05 || ((n ? s > o : s < o) && ((a = e), (o = s)));
      }
      ((e.source.loopStart = a),
        (e.source.loopEnd = a + i),
        (e.accelerating = n));
    }
    stopVoice(e) {
      let t = this.ctx.currentTime;
      (e.gain.gain.setTargetAtTime(0, t, 0.025),
        e.source.stop(t + 0.15),
        (e.source.onended = () => {
          (e.source.disconnect(),
            e.filter.disconnect(),
            e.gain.disconnect(),
            e.pan.disconnect());
        }));
    }
    dispose() {
      this.disposed = !0;
      for (let e of this.voices.values()) this.stopVoice(e);
      (this.voices.clear(), this.buffers.clear());
    }
  },
  Vr = {
    version: 1,
    asset_id: `a3249ade-c90d-4c70-8ff4-092a8f4c396d`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/d8f86b1d-bde7-4d3c-b1a9-0dd1418b48c1/laferrari-engine.mp3`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/a3249ade-c90d-4c70-8ff4-092a8f4c396d/laferrari-engine.mp3`,
    original_filename: `laferrari-engine.mp3`,
    size: 161481,
    content_type: `audio/mpeg`,
    created_at: `2026-11-19T02:59:15Z`,
  },
  Hr = {
    version: 1,
    asset_id: `40f57cc4-4862-4b49-974e-28d435406b4a`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/9d4869e7-37d5-41a7-b42b-e270eddfa674/huayra-engine.mp3`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/40f57cc4-4862-4b49-974e-28d435406b4a/huayra-engine.mp3`,
    original_filename: `huayra-engine.mp3`,
    size: 121253,
    content_type: `audio/mpeg`,
    created_at: `2026-11-19T03:00:20Z`,
  },
  Ur = {
    version: 1,
    asset_id: `672d53b2-5c47-4413-95ac-fd1e56dd47b8`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/29eb18b0-a446-4154-a094-53be4b364e76/challenger-engine.mp3`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/672d53b2-5c47-4413-95ac-fd1e56dd47b8/challenger-engine.mp3`,
    original_filename: `challenger-engine.mp3`,
    size: 131179,
    content_type: `audio/mpeg`,
    created_at: `2026-11-19T02:59:44Z`,
  },
  Wr = {
    chiron: Ir.url,
    "chiron-ss300": Ir.url,
    tourbillon: Ir.url,
    laferrari: Vr.url,
    huayra: Hr.url,
    "utopia-roadster": Hr.url,
    demon: Ur.url,
    "mustang-rtr": Ur.url,
    "voiture-noire": Ir.url,
    jesko: Fr.url,
  },
  Gr = (e) => Wr[e] ?? null,
  Kr = {
    version: 1,
    asset_id: `1588fbef-93b4-4b01-845d-f23eb656216e`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/500582ae-88a7-4181-a67f-dc9254f41e5a/svj-pull.wav`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/1588fbef-93b4-4b01-845d-f23eb656216e/svj-pull.wav`,
    original_filename: `svj-pull.wav`,
    size: 270960,
    content_type: `audio/wav`,
    created_at: `2026-11-19T03:00:02Z`,
  },
  qr = {
    version: 1,
    asset_id: `c54dcc25-f74f-4d6a-82a9-45b9592c705c`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/6082da20-7cde-40fb-a784-446d29e2df45/svj-overrun.wav`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/c54dcc25-f74f-4d6a-82a9-45b9592c705c/svj-overrun.wav`,
    original_filename: `svj-overrun.wav`,
    size: 113822,
    content_type: `audio/wav`,
    created_at: `2026-11-19T03:00:16Z`,
  },
  Jr = {
    version: 1,
    asset_id: `4845f844-0c23-470d-bc79-df0fa268fc74`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/b1c9d02b-53c3-41d4-9bd1-14a8de613f04/svj-shift.wav`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/4845f844-0c23-470d-bc79-df0fa268fc74/svj-shift.wav`,
    original_filename: `svj-shift.wav`,
    size: 44144,
    content_type: `audio/wav`,
    created_at: `2026-11-19T03:00:09Z`,
  },
  Yr = {
    version: 1,
    asset_id: `c0ba6564-5405-4268-8bc9-d52f1679cef9`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/80684e56-6f68-4551-b73e-77450c009440/svj-lift.wav`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/c0ba6564-5405-4268-8bc9-d52f1679cef9/svj-lift.wav`,
    original_filename: `svj-lift.wav`,
    size: 95300,
    content_type: `audio/wav`,
    created_at: `2026-11-19T02:59:51Z`,
  },
  Xr = {
    version: 1,
    asset_id: `48e299fe-680a-4274-8d95-3ddc4a928fba`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/de763b16-aeae-488f-9619-93dc0f72a3c0/svj-brake.wav`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/48e299fe-680a-4274-8d95-3ddc4a928fba/svj-brake.wav`,
    original_filename: `svj-brake.wav`,
    size: 114704,
    content_type: `audio/wav`,
    created_at: `2026-11-19T02:59:37Z`,
  },
  Zr = {
    version: 1,
    asset_id: `e139a0a9-e025-4b54-b954-6b0817b28100`,
    project_id: `6c4d8497-bdfb-463f-a832-2a55460f42eb`,
    url: `/__l5e/assets-v1/e67def33-ede5-45d8-bf8a-04be582bd775/svj-blip.wav`,
    r2_key: `a/v1/6c4d8497-bdfb-463f-a832-2a55460f42eb/e139a0a9-e025-4b54-b954-6b0817b28100/svj-blip.wav`,
    original_filename: `svj-blip.wav`,
    size: 49434,
    content_type: `audio/wav`,
    created_at: `2026-11-19T02:59:57Z`,
  },
  Qr = (e, t, n) => Math.max(t, Math.min(n, e)),
  $r = () => ({ gear: 0, throttle: !1, brake: !1, lastBlip: -9 });
function ei(e, t) {
  let n = [],
    r = t.brake && !t.throttle;
  return (
    t.gear > e.gear && t.throttle
      ? n.push(`shift`)
      : t.gear < e.gear &&
        !t.throttle &&
        t.speed > 20 &&
        t.t - e.lastBlip > 0.3 &&
        (n.push(`blip`), (e.lastBlip = t.t)),
    r && !e.brake && t.speed > 30
      ? n.push(`brake`)
      : e.throttle && !t.throttle && !r && t.speed > 30 && n.push(`lift`),
    t.throttle && !e.throttle && n.push(`throttle-on`),
    (e.gear = t.gear),
    (e.throttle = t.throttle),
    (e.brake = r),
    n
  );
}
var ti = (e, t) =>
    e < 6 ? 1e3 : Qr((N * e) / (E[t] ?? E[E.length - 1]), 2500, N),
  ni = (e) => 0.6 + (0.5 * e) / N,
  ri = class {
    ctx;
    bufs = {};
    bus;
    pullGain;
    overGain;
    pullSrc = null;
    overSrc = null;
    oneShot = null;
    state = $r();
    duckUntil = 0;
    loaded = !1;
    constructor(e, t) {
      ((this.ctx = e),
        (this.bus = e.createGain()),
        (this.bus.gain.value = 0),
        this.bus.connect(t),
        (this.pullGain = e.createGain()),
        (this.pullGain.gain.value = 0),
        this.pullGain.connect(this.bus),
        (this.overGain = e.createGain()),
        (this.overGain.gain.value = 0),
        this.overGain.connect(this.bus),
        this.load());
    }
    async load() {
      let e = Object.entries({
        pull: Kr,
        overrun: qr,
        shift: Jr,
        lift: Yr,
        brake: Xr,
        blip: Zr,
      });
      await Promise.all(
        e.map(async ([e, t]) => {
          try {
            let n = await fetch(t.url);
            if (!n.ok) return;
            this.bufs[e] = await this.ctx.decodeAudioData(
              await n.arrayBuffer(),
            );
          } catch {}
        }),
      );
      let t = (e, t) => {
        if (!e || !t) return null;
        let n = this.ctx.createBufferSource();
        return ((n.buffer = e), (n.loop = !0), n.connect(t), n.start(), n);
      };
      ((this.pullSrc = t(this.bufs.pull, this.pullGain)),
        (this.overSrc = t(this.bufs.overrun, this.overGain)),
        (this.loaded = !0));
    }
    get ready() {
      return this.loaded;
    }
    play(e, t, n, r = 1) {
      let i = this.bufs[e];
      if (!i) return;
      let a = e === `blip`;
      a || this.stopOneShot(t, 0.04);
      let o = this.ctx.createBufferSource();
      ((o.buffer = i), (o.playbackRate.value = r));
      let s = this.ctx.createGain();
      ((s.gain.value = n),
        o.connect(s),
        s.connect(this.bus),
        o.start(t),
        (o.onended = () => {
          (s.disconnect(), this.oneShot?.src === o && (this.oneShot = null));
        }),
        a || (this.oneShot = { src: o, gain: s }));
    }
    stopOneShot(e, t) {
      let n = this.oneShot;
      if (n) {
        (n.gain.gain.cancelScheduledValues(e),
          n.gain.gain.setTargetAtTime(0, e, t));
        try {
          n.src.stop(e + t * 6);
        } catch {}
        this.oneShot = null;
      }
    }
    update(e, t, n, r, i) {
      let a = this.ctx.currentTime;
      if (!i) {
        (this.bus.gain.setTargetAtTime(0, a, 0.12),
          this.stopOneShot(a, 0.05),
          (this.state = $r()));
        return;
      }
      this.bus.gain.setTargetAtTime(1, a, 0.08);
      let o = ti(e, r),
        s = ni(o);
      (this.pullSrc?.playbackRate.setTargetAtTime(s, a, 0.05),
        this.overSrc?.playbackRate.setTargetAtTime(
          0.74 + 0.3 * Math.min(e / 300, 1),
          a,
          0.2,
        ));
      for (let i of ei(this.state, {
        t: a,
        speed: e,
        throttle: t,
        brake: n,
        gear: r,
      }))
        i === `shift`
          ? (this.play(`shift`, a, 1, Qr(s * 1.1, 0.85, 1.25)),
            this.pullGain.gain.cancelScheduledValues(a),
            this.pullGain.gain.setTargetAtTime(0.04, a, 0.015),
            this.pullGain.gain.setTargetAtTime(1, a + 0.2, 0.05),
            (this.duckUntil = a + 0.3))
          : i === `blip`
            ? this.play(`blip`, a, 0.75, Qr(0.85 + (0.25 * o) / N, 0.85, 1.1))
            : i === `lift`
              ? this.play(`lift`, a, 0.95)
              : i === `brake`
                ? this.play(`brake`, a, 0.95)
                : i === `throttle-on` &&
                  this.oneShot &&
                  !this.duckUntil &&
                  this.stopOneShot(a, 0.05);
      let c = a < this.duckUntil;
      if ((c || (this.duckUntil = 0), t))
        (c || this.pullGain.gain.setTargetAtTime(1, a, 0.05),
          this.overGain.gain.setTargetAtTime(0, a, 0.05));
      else {
        this.pullGain.gain.setTargetAtTime(0, a, 0.06);
        let t = e < 6;
        this.overGain.gain.setTargetAtTime(
          t ? 0.45 : this.oneShot ? 0.25 : 0.6,
          a,
          this.oneShot ? 0.35 : 0.15,
        );
      }
    }
  },
  ii = 0.82,
  Y = (e, t, n) => Math.max(t, Math.min(n, e)),
  ai = (e, t) => e + Math.random() * (t - e),
  oi = (e) => 80 + ((e - 1500) * 260) / 7e3,
  si = [
    [0.05, 1.25],
    [1.25, 2.2],
    [2.2, 3.25],
    [3.25, 3.8],
    [3.8, 4.4],
    [4.4, 4.8],
    [4.8, 5.25],
    [5.25, 6.28],
  ],
  ci = class {
    playerCar = `revuelto`;
    svj = null;
    recordingUrl = null;
    chironBuffer = null;
    chironSource = null;
    chironGain = null;
    setPlayerCar(e) {
      let t = e === `svj` ? null : Gr(e);
      ((this.playerCar = e === `svj` ? `svj` : t ? `chiron` : `revuelto`),
        e === `svj` &&
          this.ctx &&
          this.master &&
          !this.svj &&
          (this.svj = new ri(this.ctx, this.master)),
        t !== this.recordingUrl &&
          ((this.recordingUrl = t),
          this.chironSource?.stop(),
          this.chironSource?.disconnect(),
          this.chironGain?.disconnect(),
          (this.chironSource = null),
          (this.chironGain = null),
          (this.chironBuffer = null)),
        !t &&
          this.ctx &&
          this.chironGain?.gain.setTargetAtTime(0, this.ctx.currentTime, 0.1),
        t && this.ctx && !this.chironBuffer && this.loadChiron(this.ctx, t));
    }
    async loadChiron(e, t) {
      try {
        let n = await fetch(t);
        if (!n.ok) return;
        let r = await e.decodeAudioData(await n.arrayBuffer());
        if (
          this.ctx !== e ||
          !this.master ||
          this.chironSource ||
          this.recordingUrl !== t
        )
          return;
        this.chironBuffer = r;
        let i = e.createBufferSource();
        ((i.buffer = r),
          (i.loop = !0),
          (i.loopStart = 0.1),
          (i.loopEnd = Math.max(0.2, r.duration - 0.1)));
        let a = e.createGain();
        ((a.gain.value = 0),
          i.connect(a),
          a.connect(this.master),
          i.start(),
          (this.chironSource = i),
          (this.chironGain = a));
      } catch {}
    }
    trafficAudio = null;
    setTraffic(e, t, n, r, i) {
      this.trafficAudio?.update(e, t, n, r, i);
    }
    ctx = null;
    master = null;
    forzaBuf = null;
    topGearBuf = null;
    forzaGain = null;
    topGearGain = null;
    forzaSrc = null;
    topGearSrc = null;
    currentPlayingGear = -1;
    isTopGearActive = !1;
    loadBus = null;
    loadFilter = null;
    shiftGain = null;
    idleGain = null;
    idleSrc = null;
    tunnelLP = null;
    comp = null;
    windGain = null;
    windFilter = null;
    windSrc = null;
    revBuf = null;
    noiseBuf = null;
    timer = null;
    muted = !1;
    hornGain = null;
    hornOsc1 = null;
    hornOsc2 = null;
    hornFilter = null;
    policeGain = null;
    sirenOsc = null;
    sirenLfo = null;
    sirenLfoGain = null;
    policeEngineGain = null;
    policeEngineOsc = null;
    boostGain = null;
    boostOsc = null;
    skidBuf = null;
    skidGain = null;
    skidSrc = null;
    tireGain = null;
    tireOsc1 = null;
    tireOsc2 = null;
    tireFilter = null;
    rpm = I;
    gear = 0;
    hz = oi(I);
    throttle = !1;
    lastT = 0;
    crackleUntil = 0;
    inTunnel = !1;
    tunnelBoom = null;
    tunnelSend = null;
    sirenDistLP = null;
    lastGap = 999;
    unlock() {
      if (!(typeof window > `u`)) {
        if (!this.ctx) {
          let e = window.AudioContext || window.webkitAudioContext;
          if (!e) return;
          let t = new e();
          this.ctx = t;
          let n = t.createDynamicsCompressor();
          ((n.threshold.value = -12),
            (n.knee.value = 8),
            (n.ratio.value = 4.5),
            (n.attack.value = 0.003),
            (n.release.value = 0.15),
            n.connect(t.destination),
            (this.master = t.createGain()),
            (this.master.gain.value = this.muted ? 0 : ii),
            (this.tunnelLP = t.createBiquadFilter()),
            (this.tunnelLP.type = `lowpass`),
            (this.tunnelLP.frequency.value = 18e3),
            (this.tunnelLP.Q.value = 0.9),
            (this.tunnelBoom = t.createBiquadFilter()),
            (this.tunnelBoom.type = `lowshelf`),
            (this.tunnelBoom.frequency.value = 220),
            (this.tunnelBoom.gain.value = 0),
            this.tunnelLP.connect(this.tunnelBoom),
            this.tunnelBoom.connect(n),
            this.master.connect(this.tunnelLP),
            (this.trafficAudio = new Br(t, this.master)),
            (this.tunnelSend = t.createGain()),
            (this.tunnelSend.gain.value = 0),
            this.master.connect(this.tunnelSend));
          let r = t.createBiquadFilter();
          ((r.type = `lowpass`),
            (r.frequency.value = 2200),
            this.tunnelSend.connect(r));
          for (let [e, i] of [
            [0.067, 0.42],
            [0.113, 0.36],
            [0.171, 0.3],
          ]) {
            let a = t.createDelay(0.5);
            a.delayTime.value = e;
            let o = t.createGain();
            ((o.gain.value = i), r.connect(a), a.connect(o), o.connect(a));
            let s = t.createGain();
            ((s.gain.value = 0.55), a.connect(s), s.connect(n));
          }
          ((this.comp = n),
            (this.loadBus = t.createGain()),
            (this.loadBus.gain.value = 0),
            this.loadBus.connect(this.master),
            (this.loadFilter = t.createBiquadFilter()),
            (this.loadFilter.type = `lowpass`),
            (this.loadFilter.frequency.value = 7500),
            (this.loadFilter.Q.value = 0.7),
            this.loadFilter.connect(this.loadBus));
          let i = t.createBiquadFilter();
          ((i.type = `lowshelf`),
            (i.frequency.value = 240),
            (i.gain.value = 7),
            i.connect(this.loadFilter),
            (this.shiftGain = t.createGain()),
            this.shiftGain.connect(i),
            (this.forzaGain = t.createGain()),
            (this.forzaGain.gain.value = 0),
            this.forzaGain.connect(this.shiftGain),
            (this.topGearGain = t.createGain()),
            (this.topGearGain.gain.value = 0),
            this.topGearGain.connect(this.shiftGain),
            (this.idleGain = t.createGain()),
            (this.idleGain.gain.value = 0),
            this.idleGain.connect(this.master));
          let a = t.sampleRate * 2;
          this.noiseBuf = t.createBuffer(1, a, t.sampleRate);
          let o = this.noiseBuf.getChannelData(0),
            s = 0;
          for (let e = 0; e < a; e++)
            ((s = 0.97 * s + 0.03 * (Math.random() * 2 - 1)),
              (o[e] = s * 6 + (Math.random() * 2 - 1) * 0.15));
          ((this.windFilter = t.createBiquadFilter()),
            (this.windFilter.type = `bandpass`),
            (this.windFilter.frequency.value = 500),
            (this.windFilter.Q.value = 0.5),
            (this.windGain = t.createGain()),
            (this.windGain.gain.value = 0),
            this.windFilter.connect(this.windGain),
            this.windGain.connect(this.master));
          let c = t.createBufferSource();
          ((c.buffer = this.noiseBuf),
            (c.loop = !0),
            c.connect(this.windFilter),
            c.start(),
            (this.windSrc = c),
            this.setupPoliceAudio(t),
            (this.boostGain = t.createGain()),
            (this.boostGain.gain.value = 0),
            this.boostGain.connect(this.master),
            (this.boostOsc = t.createOscillator()),
            (this.boostOsc.type = `sawtooth`),
            (this.boostOsc.frequency.value = 1400));
          let l = t.createBiquadFilter();
          ((l.type = `bandpass`),
            (l.frequency.value = 2200),
            (l.Q.value = 3),
            this.boostOsc.connect(l),
            l.connect(this.boostGain),
            this.boostOsc.start(),
            this.setupTireAudio(t),
            this.loadSamples(t),
            (this.timer = setInterval(() => this.tick(), 60)));
        }
        this.ctx.resume();
      }
    }
    async loadSamples(e) {
      (this.recordingUrl && this.loadChiron(e, this.recordingUrl),
        this.playerCar === `svj` &&
          this.master &&
          !this.svj &&
          (this.svj = new ri(e, this.master)));
      let t = async (t) => {
        for (let n of t)
          try {
            let t = await fetch(n);
            if (t.ok) {
              let n = await t.arrayBuffer();
              return await e.decodeAudioData(n);
            }
          } catch {}
        throw Error(`Failed to load audio from: ${t.join(`, `)}`);
      };
      try {
        let [n, r, i, a, o] = await Promise.all([
          t([Nr.url, `/__l5e/assets-v1/4f1980d2-a0e3-4ae0-bed2-181a041b3f48/ga-revuelto-idle.wav`]),
          t([Pr.url, `/__l5e/assets-v1/4b6ca994-6cd2-44b6-8700-653b0f4a7eb0/ga-revuelto-rev.wav`]),
          t([
            `/__l5e/assets-v1/2b2116a1-001f-415a-b94a-390ad83cf1be/ga-revuelto-forza.mp3`,
            `/__l5e/assets-v1/460e7de9-aaf1-41b9-9ded-aa38117a4503/Forza_Horizon_6_Lamborghini_Revuelto_Fully_Built_Orginal_Motor_Quarter_Mile_7.9__cut_6sec__070ae31a.mp3`,
          ]),
          t([`/__l5e/assets-v1/8e41bec6-009c-4ab2-9f64-42f217de009f/ga-revuelto-top-gear.wav`]),
          t([
            `/__l5e/assets-v1/c372159f-1d30-4def-94af-4b76e74a8c00/ga-tire-screech.mp3`,
            `/__l5e/assets-v1/494cdd71-5f7d-4f6c-96f2-2c656866cbe5/carro-cantando-pneu__cut_4sec__83efc857.mp3`,
          ]),
        ]);
        if (this.ctx !== e || !this.idleGain || !this.topGearGain) return;
        ((this.revBuf = r),
          (this.forzaBuf = i),
          (this.topGearBuf = a),
          (this.skidBuf = o),
          (this.idleSrc = e.createBufferSource()),
          (this.idleSrc.buffer = n),
          (this.idleSrc.loop = !0),
          this.idleSrc.connect(this.idleGain),
          this.idleSrc.start(),
          (this.topGearSrc = e.createBufferSource()),
          (this.topGearSrc.buffer = a),
          (this.topGearSrc.loop = !0),
          this.topGearSrc.connect(this.topGearGain),
          this.topGearSrc.start());
      } catch (e) {
        console.warn(`Engine audio samples load notice:`, e);
      }
    }
    setupPoliceAudio(e) {
      if (!this.master) return;
      ((this.policeGain = e.createGain()),
        (this.policeGain.gain.value = 0),
        (this.sirenDistLP = e.createBiquadFilter()),
        (this.sirenDistLP.type = `lowpass`),
        (this.sirenDistLP.frequency.value = 900),
        this.policeGain.connect(this.sirenDistLP),
        this.sirenDistLP.connect(this.master));
      let t = e.createBiquadFilter();
      ((t.type = `lowpass`),
        (t.frequency.value = 2600),
        (t.Q.value = 0.5),
        (this.sirenOsc = e.createOscillator()),
        (this.sirenOsc.type = `triangle`),
        (this.sirenOsc.frequency.value = 1e3),
        (this.sirenLfo = e.createOscillator()),
        (this.sirenLfo.type = `sine`),
        (this.sirenLfo.frequency.value = 0.3),
        (this.sirenLfoGain = e.createGain()),
        (this.sirenLfoGain.gain.value = 380),
        this.sirenLfo.connect(this.sirenLfoGain),
        this.sirenLfoGain.connect(this.sirenOsc.frequency));
      let n = e.createGain();
      ((n.gain.value = 0.5),
        this.sirenOsc.connect(t),
        t.connect(n),
        n.connect(this.policeGain),
        this.sirenOsc.start(),
        this.sirenLfo.start(),
        (this.policeEngineOsc = e.createOscillator()),
        (this.policeEngineOsc.type = `triangle`),
        (this.policeEngineOsc.frequency.value = 135));
      let r = e.createBiquadFilter();
      ((r.type = `lowpass`),
        (r.frequency.value = 900),
        (this.policeEngineGain = e.createGain()),
        (this.policeEngineGain.gain.value = 0),
        this.policeEngineOsc.connect(r),
        r.connect(this.policeEngineGain),
        this.policeEngineGain.connect(this.policeGain),
        this.policeEngineOsc.start());
    }
    dispose() {
      (this.trafficAudio?.dispose(),
        (this.trafficAudio = null),
        this.timer && clearInterval(this.timer),
        (this.timer = null),
        this.stopHorn(),
        this.stopForzaGear());
      try {
        (this.topGearSrc?.stop(),
          this.idleSrc?.stop(),
          this.windSrc?.stop(),
          this.skidSrc?.stop());
      } catch {}
      (this.chironSource?.stop(),
        this.chironSource?.disconnect(),
        this.chironGain?.disconnect(),
        (this.chironSource = null),
        (this.chironGain = null),
        (this.chironBuffer = null),
        this.ctx?.close(),
        (this.ctx = null));
    }
    setMuted(e) {
      ((this.muted = e),
        this.master &&
          this.ctx &&
          this.master.gain.setTargetAtTime(
            e ? 0 : ii,
            this.ctx.currentTime,
            0.05,
          ));
    }
    rev() {
      if (!this.ctx || !this.master || this.playerCar === `chiron`) return;
      let e = this.ctx,
        t = e.currentTime;
      if (this.forzaBuf)
        try {
          let n = e.createBufferSource();
          ((n.buffer = this.forzaBuf), (n.playbackRate.value = 1.05));
          let r = e.createGain();
          (r.gain.setValueAtTime(0, t),
            r.gain.linearRampToValueAtTime(0.9, t + 0.02),
            r.gain.setValueAtTime(0.9, t + 0.5),
            r.gain.exponentialRampToValueAtTime(0.001, t + 1.15),
            n.connect(r),
            r.connect(this.master),
            n.start(t, 0.05, 1.15));
          return;
        } catch {}
      if (this.revBuf) {
        let t = e.createBufferSource();
        t.buffer = this.revBuf;
        let n = e.createGain();
        ((n.gain.value = 0.85),
          t.connect(n),
          n.connect(this.master),
          t.start());
      }
    }
    startHorn(e = !1) {
      let t = this.ctx;
      if (!t || !this.master || this.hornGain) return;
      let n = t.currentTime,
        r = t.createGain();
      (r.gain.setValueAtTime(0, n),
        r.gain.linearRampToValueAtTime(0.52, n + 0.03));
      let i = t.createBiquadFilter();
      ((i.type = `bandpass`),
        (i.frequency.value = e ? 720 : 1200),
        (i.Q.value = e ? 2.5 : 1.2),
        i.connect(r),
        r.connect(this.master));
      let a = t.createOscillator();
      ((a.type = `sawtooth`), (a.frequency.value = 415));
      let o = t.createOscillator();
      ((o.type = `sawtooth`),
        (o.frequency.value = 520),
        a.connect(i),
        o.connect(i),
        a.start(n),
        o.start(n),
        (this.hornGain = r),
        (this.hornOsc1 = a),
        (this.hornOsc2 = o),
        (this.hornFilter = i));
    }
    stopHorn() {
      let e = this.ctx;
      if (!e || !this.hornGain) return;
      let t = e.currentTime;
      (this.hornGain.gain.cancelScheduledValues(t),
        this.hornGain.gain.setValueAtTime(this.hornGain.gain.value, t),
        this.hornGain.gain.exponentialRampToValueAtTime(1e-4, t + 0.08));
      let n = this.hornOsc1,
        r = this.hornOsc2,
        i = this.hornGain;
      (setTimeout(() => {
        try {
          (n?.stop(),
            r?.stop(),
            n?.disconnect(),
            r?.disconnect(),
            i.disconnect());
        } catch {}
      }, 100),
        (this.hornGain = null),
        (this.hornOsc1 = null),
        (this.hornOsc2 = null),
        (this.hornFilter = null));
    }
    setPolice(e, t) {
      let n = this.ctx;
      if (!n || !this.policeGain || !this.sirenLfo || !this.policeEngineGain)
        return;
      let r = n.currentTime;
      if (!t) {
        (this.policeGain.gain.setTargetAtTime(0, r, 0.2),
          this.policeEngineGain.gain.setTargetAtTime(0, r, 0.2));
        return;
      }
      let i = Y(1 - e / 600, 0, 1),
        a = Y(
          0.012 + 0.44 * (18 / (18 + e)) ** 0.9 * (0.35 + 0.65 * i),
          0,
          0.45,
        );
      this.sirenDistLP &&
        this.sirenDistLP.frequency.setTargetAtTime(
          700 + 7e3 * i ** 1.5,
          r,
          0.3,
        );
      let o = Y((this.lastGap - e) * 3, -40, 40);
      ((this.lastGap = e),
        this.sirenOsc &&
          this.sirenOsc.detune.setTargetAtTime(o * 1.5, r, 0.25));
      let s = e < 90 ? 2.8 : 0.3 + i * 0.25;
      (this.policeGain.gain.setTargetAtTime(Y(a, 0, 0.45), r, 0.3),
        this.sirenLfo.frequency.setTargetAtTime(s, r, 0.2));
      let c = e < 120 ? Y((1 - e / 120) * 0.1, 0, 0.1) : 0;
      this.policeEngineGain.gain.setTargetAtTime(c, r, 0.15);
    }
    tick() {
      let e = this.ctx;
      if (!e || e.state !== `running`) return;
      let t = e.currentTime;
      t < this.crackleUntil &&
        Math.random() < 0.34 &&
        this.pop(t + ai(0.01, 0.04), ai(0.25, 0.5));
    }
    pop(e, t) {
      let n = this.ctx;
      if (!n || !this.noiseBuf || !this.master) return;
      let r = n.createBufferSource();
      r.buffer = this.noiseBuf;
      let i = n.createBiquadFilter();
      ((i.type = `bandpass`),
        (i.frequency.value = this.inTunnel ? ai(350, 950) : ai(550, 1700)),
        (i.Q.value = this.inTunnel ? 2.2 : 1.2));
      let a = n.createGain(),
        o = ai(0.025, 0.07);
      (a.gain.setValueAtTime(0, e),
        a.gain.linearRampToValueAtTime(t, e + 0.003),
        a.gain.exponentialRampToValueAtTime(0.001, e + o),
        r.connect(i),
        i.connect(a),
        a.connect(this.master),
        r.start(e, ai(0, 1.5), o + 0.02));
    }
    fireExhaustBackfire() {
      if (!this.ctx || this.playerCar === `svj`) return;
      let e = this.ctx.currentTime;
      (this.pop(e + 0.01, 0.85),
        this.pop(e + 0.05, 0.72),
        this.pop(e + 0.09, 0.55));
    }
    shift(e) {
      let t = this.shiftGain;
      if (!t) return;
      (t.gain.cancelScheduledValues(e),
        t.gain.setValueAtTime(1, e),
        t.gain.linearRampToValueAtTime(0.18, e + 0.04),
        t.gain.linearRampToValueAtTime(1, e + 0.16),
        this.pop(e + 0.02, 0.65),
        this.pop(e + 0.06, 0.45));
      let n = this.ctx;
      if (n && this.revBuf && this.master) {
        let t = n.createBufferSource();
        ((t.buffer = this.revBuf), (t.playbackRate.value = 1.15));
        let r = n.createGain();
        (r.gain.setValueAtTime(0, e),
          r.gain.linearRampToValueAtTime(0.55, e + 0.01),
          r.gain.exponentialRampToValueAtTime(0.001, e + 0.14),
          t.connect(r),
          r.connect(this.master),
          t.start(e, 0.3, 0.16));
      }
    }
    startForzaGear(e, t) {
      let n = this.ctx;
      if (!n || !this.forzaBuf || !this.forzaGain) return;
      let r = si[e];
      if (!r) return;
      let [i, a] = r;
      this.stopForzaGear();
      try {
        let r = n.createBufferSource();
        r.buffer = this.forzaBuf;
        let o = Y(0.92 + (t / (E[e] ?? 200)) * 0.22, 0.88, 1.28);
        r.playbackRate.value = o;
        let s = a - i;
        (s > 0.3 &&
          ((r.loop = !0),
          (r.loopStart = i + s * 0.4),
          (r.loopEnd = Math.min(i + s * 0.98, this.forzaBuf.duration - 0.05))),
          r.connect(this.forzaGain),
          r.start(n.currentTime, i),
          (this.forzaSrc = r),
          (this.currentPlayingGear = e));
      } catch (e) {
        console.warn(`startForzaGear notice:`, e);
      }
    }
    stopForzaGear() {
      if (this.forzaSrc) {
        try {
          (this.forzaSrc.stop(), this.forzaSrc.disconnect());
        } catch {}
        this.forzaSrc = null;
      }
    }
    setEngine(e, t, n, r = !1, i = 0, a, o = !1) {
      let s = this.ctx;
      if (
        !s ||
        !this.idleGain ||
        !this.forzaGain ||
        !this.topGearGain ||
        !this.loadBus ||
        !this.loadFilter ||
        !this.windGain ||
        !this.windFilter
      )
        return;
      let c = s.currentTime;
      if (
        ((this.lastT = c),
        (this.inTunnel = r),
        this.playerCar !== `svj` && this.svj?.update(0, !1, !1, 0, !1),
        this.playerCar === `svj`)
      ) {
        (this.idleGain.gain.setTargetAtTime(0, c, 0.05),
          this.forzaGain.gain.setTargetAtTime(0, c, 0.05),
          this.topGearGain.gain.setTargetAtTime(0, c, 0.05),
          this.loadBus.gain.setTargetAtTime(0, c, 0.05),
          this.stopForzaGear(),
          this.chironGain?.gain.setTargetAtTime(0, c, 0.1),
          this.svj?.update(e, t, o, a ?? 0, n),
          this.windGain.gain.setTargetAtTime(
            n ? (r ? 0.12 : 0.2) * (e / 340) ** 2 : 0,
            c,
            0.2,
          ),
          this.tunnelLP &&
            this.tunnelLP.frequency.setTargetAtTime(
              r ? 3200 : 18e3,
              c,
              r ? 0.2 : 0.35,
            ),
          this.tunnelSend &&
            this.tunnelSend.gain.setTargetAtTime(r ? 0.5 : 0, c, 0.3));
        return;
      }
      if (this.playerCar === `chiron`) {
        (this.idleGain.gain.setTargetAtTime(0, c, 0.05),
          this.forzaGain.gain.setTargetAtTime(0, c, 0.05),
          this.topGearGain.gain.setTargetAtTime(0, c, 0.05),
          this.loadBus.gain.setTargetAtTime(0, c, 0.05),
          this.stopForzaGear(),
          this.chironGain?.gain.setTargetAtTime(
            n ? (t ? 0.65 : 0.12) : 0,
            c,
            0.12,
          ),
          this.chironSource?.playbackRate.setTargetAtTime(
            0.65 + Math.min(e / 340, 1) * 0.65,
            c,
            0.15,
          ),
          this.windGain.gain.setTargetAtTime(
            n ? 0.18 * (e / 340) ** 2 : 0,
            c,
            0.2,
          ));
        return;
      }
      this.chironGain?.gain.setTargetAtTime(0, c, 0.1);
      let l = i > 0 ? i * 0.22 : 0,
        u = n ? (r ? 0.12 : 0.22 + l) * (e / 340) ** 2 : 0;
      if (
        (this.windGain.gain.setTargetAtTime(u, c, 0.2),
        this.windFilter.frequency.setTargetAtTime(
          r ? 320 + e * 2 : i > 0.3 ? 750 + e * 3.5 : 350 + e * 4,
          c,
          0.2,
        ),
        !n)
      ) {
        (this.idleGain.gain.setTargetAtTime(0, c, 0.15),
          this.forzaGain.gain.setTargetAtTime(0, c, 0.15),
          this.topGearGain.gain.setTargetAtTime(0, c, 0.15),
          this.loadBus.gain.setTargetAtTime(0, c, 0.15),
          this.stopForzaGear(),
          (this.currentPlayingGear = -1),
          (this.isTopGearActive = !1),
          (this.rpm = I),
          (this.gear = 0),
          (this.crackleUntil = 0),
          (this.throttle = !1));
        return;
      }
      let d = a === void 0 ? O(this.gear, e, t) : Y(a, 0, de - 1);
      if (((this.gear = d), d >= de - 1 || e >= 305)) {
        this.isTopGearActive ||
          ((this.isTopGearActive = !0),
          this.stopForzaGear(),
          (this.currentPlayingGear = -1));
        let n = t ? 1 : 0.35;
        if (
          (this.topGearGain.gain.setTargetAtTime(n, c, 0.08),
          this.forzaGain.gain.setTargetAtTime(0, c, 0.06),
          this.idleGain.gain.setTargetAtTime(0, c, 0.1),
          this.loadBus.gain.setTargetAtTime(1, c, 0.05),
          this.topGearSrc)
        ) {
          let n = t ? Y(0.96 + ((e - 305) / 55) * 0.14, 0.94, 1.15) : 0.92;
          this.topGearSrc.playbackRate.setTargetAtTime(n, c, 0.06);
        }
        ((this.rpm = Y(8800 + ((e - 305) / 50) * 700, 8500, N)),
          (this.hz = oi(this.rpm)));
      } else if (
        (this.isTopGearActive &&
          ((this.isTopGearActive = !1),
          this.topGearGain.gain.setTargetAtTime(0, c, 0.08)),
        e < 6)
      )
        (this.idleGain.gain.setTargetAtTime(0.85, c, 0.1),
          this.forzaGain.gain.setTargetAtTime(0, c, 0.1),
          this.loadBus.gain.setTargetAtTime(0.2, c, 0.1),
          this.stopForzaGear(),
          (this.currentPlayingGear = -1),
          (this.rpm = I),
          (this.hz = oi(I)));
      else {
        let n = Y((N * e) / (E[d] ?? 300), 2500, N);
        if (
          ((this.rpm = n),
          (this.hz = oi(this.rpm)),
          this.currentPlayingGear !== -1 &&
            d > this.currentPlayingGear &&
            t &&
            this.shift(c),
          this.currentPlayingGear !== d)
        )
          this.startForzaGear(d, e);
        else if (this.forzaSrc) {
          let t = Y(0.92 + (e / (E[d] ?? 200)) * 0.22, 0.88, 1.28);
          this.forzaSrc.playbackRate.setTargetAtTime(t, c, 0.08);
        }
        let r = t ? 1 : 0.28;
        (this.forzaGain.gain.setTargetAtTime(r, c, t ? 0.04 : 0.12),
          this.idleGain.gain.setTargetAtTime(t ? 0 : 0.25, c, 0.15),
          this.loadBus.gain.setTargetAtTime(t ? 1 : 0.35, c, 0.08));
      }
      (this.throttle && !t && e > 60 && (this.crackleUntil = c + 1.1),
        t && (this.crackleUntil = 0),
        (this.throttle = t),
        this.loadFilter.frequency.setTargetAtTime(t ? 8e3 : 2600, c, 0.08),
        this.tunnelLP &&
          (this.tunnelLP.frequency.setTargetAtTime(
            r ? 3200 : 18e3,
            c,
            r ? 0.2 : 0.35,
          ),
          this.tunnelLP.Q.setTargetAtTime(r ? 1.4 : 0.7, c, 0.2)),
        this.tunnelBoom &&
          this.tunnelBoom.gain.setTargetAtTime(r ? 6 : 0, c, 0.25),
        this.tunnelSend &&
          this.tunnelSend.gain.setTargetAtTime(r ? 0.5 : 0, c, r ? 0.25 : 0.4));
    }
    setBoost(e) {
      let t = this.ctx;
      if (!t || !this.boostGain || !this.boostOsc) return;
      let n = t.currentTime;
      e
        ? (this.boostGain.gain.setTargetAtTime(0.32, n, 0.04),
          this.boostOsc.frequency.setTargetAtTime(2900, n, 0.12))
        : (this.boostGain.gain.setTargetAtTime(0, n, 0.12),
          this.boostOsc.frequency.setTargetAtTime(1400, n, 0.2));
    }
    playNearMissWhoosh() {
      let e = this.ctx;
      if (!e || !this.noiseBuf || !this.master) return;
      let t = e.currentTime,
        n = e.createBufferSource();
      n.buffer = this.noiseBuf;
      let r = e.createBiquadFilter();
      ((r.type = `bandpass`),
        r.frequency.setValueAtTime(420, t),
        r.frequency.exponentialRampToValueAtTime(1700, t + 0.09),
        r.frequency.exponentialRampToValueAtTime(320, t + 0.26),
        (r.Q.value = 2.2));
      let i = e.createGain();
      (i.gain.setValueAtTime(0, t),
        i.gain.linearRampToValueAtTime(0.48, t + 0.07),
        i.gain.exponentialRampToValueAtTime(0.001, t + 0.29),
        n.connect(r),
        r.connect(i),
        i.connect(this.master),
        n.start(t, ai(0, 1.5), 0.3));
    }
    playCameraShutter() {
      let e = this.ctx;
      if (!e || !this.master) return;
      let t = e.currentTime,
        n = e.createOscillator();
      ((n.type = `sine`),
        n.frequency.setValueAtTime(3200, t),
        n.frequency.exponentialRampToValueAtTime(750, t + 0.08));
      let r = e.createGain();
      (r.gain.setValueAtTime(0.55, t),
        r.gain.exponentialRampToValueAtTime(0.001, t + 0.1),
        n.connect(r),
        r.connect(this.master),
        n.start(t),
        n.stop(t + 0.1));
    }
    setupTireAudio(e) {
      this.master &&
        ((this.skidGain = e.createGain()),
        (this.skidGain.gain.value = 0),
        this.skidGain.connect(this.master),
        (this.tireGain = e.createGain()),
        (this.tireGain.gain.value = 0),
        this.tireGain.connect(this.master),
        (this.tireFilter = e.createBiquadFilter()),
        (this.tireFilter.type = `bandpass`),
        (this.tireFilter.frequency.value = 980),
        (this.tireFilter.Q.value = 2.4),
        this.tireFilter.connect(this.tireGain),
        (this.tireOsc1 = e.createOscillator()),
        (this.tireOsc1.type = `sawtooth`),
        (this.tireOsc1.frequency.value = 830),
        (this.tireOsc2 = e.createOscillator()),
        (this.tireOsc2.type = `triangle`),
        (this.tireOsc2.frequency.value = 1180),
        this.tireOsc1.connect(this.tireFilter),
        this.tireOsc2.connect(this.tireFilter));
    }
    setTireScreech(e) {
      let t = this.ctx;
      if (!t || !this.tireGain || !this.tireFilter) return;
      let n = t.currentTime,
        r = Y(e, 0, 1);
      if (r > 0.05) {
        if (this.skidBuf && this.skidGain) {
          if (!this.skidSrc)
            try {
              let e = t.createBufferSource();
              ((e.buffer = this.skidBuf),
                (e.loop = !0),
                e.connect(this.skidGain),
                e.start(n),
                (this.skidSrc = e));
            } catch {}
          (this.skidSrc &&
            this.skidSrc.playbackRate.setTargetAtTime(
              Y(0.95 + r * 0.18, 0.92, 1.25),
              n,
              0.04,
            ),
            this.skidGain.gain.setTargetAtTime(
              Y(0.15 + r * 0.8, 0, 0.95),
              n,
              0.04,
            ));
        }
        (this.tireGain.gain.setTargetAtTime(0, n, 0.04),
          this.tireFilter.frequency.setTargetAtTime(820 + r * 350, n, 0.05));
      } else
        (this.skidGain && this.skidGain.gain.setTargetAtTime(0, n, 0.06),
          this.tireGain.gain.setTargetAtTime(0, n, 0.07));
    }
    playTrafficHorn() {
      let e = this.ctx;
      if (!e || !this.master) return;
      let t = e.currentTime + 0.05,
        n = ai(330, 420),
        r =
          Math.random() < 0.5
            ? [[0, ai(0.45, 0.7)]]
            : [
                [0, 0.16],
                [0.24, ai(0.35, 0.5)],
              ],
        i = e.createStereoPanner();
      i.pan.value = ai(-0.6, 0.6);
      let a = e.createBiquadFilter();
      ((a.type = `bandpass`), (a.frequency.value = n * 2.2), (a.Q.value = 1.1));
      let o = e.createGain();
      ((o.gain.value = 0), a.connect(o), o.connect(i), i.connect(this.master));
      let s = r[r.length - 1],
        c = t + s[0] + s[1] + 0.1;
      for (let r of [n, n * 1.26]) {
        let n = e.createOscillator();
        ((n.type = `square`),
          n.frequency.setValueAtTime(r, t),
          n.frequency.linearRampToValueAtTime(r * 0.94, c),
          n.connect(a),
          n.start(t),
          n.stop(c));
      }
      for (let [e, n] of r)
        (o.gain.setValueAtTime(0, t + e),
          o.gain.linearRampToValueAtTime(0.16, t + e + 0.015),
          o.gain.setValueAtTime(0.16 * 0.7, t + e + n),
          o.gain.linearRampToValueAtTime(0, t + e + n + 0.04));
    }
    crash() {
      if (!this.ctx || !this.master) return;
      let e = this.ctx,
        t = e.currentTime,
        n = e.createOscillator();
      ((n.type = `sine`),
        n.frequency.setValueAtTime(95, t),
        n.frequency.exponentialRampToValueAtTime(28, t + 0.42));
      let r = e.createGain();
      (r.gain.setValueAtTime(1, t),
        r.gain.exponentialRampToValueAtTime(0.001, t + 0.55),
        n.connect(r),
        r.connect(this.master),
        n.start(t),
        n.stop(t + 0.6));
      let i = Math.floor(e.sampleRate * 1.5),
        a = e.createBuffer(1, i, e.sampleRate),
        o = a.getChannelData(0);
      for (let e = 0; e < i; e++) {
        let t = (1 - e / i) ** 1.8;
        o[e] = (Math.random() * 2 - 1) * t;
      }
      for (let n of [920, 1640, 2850]) {
        let r = e.createBufferSource();
        r.buffer = a;
        let i = e.createBiquadFilter();
        ((i.type = `bandpass`),
          i.frequency.setValueAtTime(n, t),
          i.frequency.exponentialRampToValueAtTime(n * 0.72, t + 0.8),
          (i.Q.value = 5.2));
        let o = e.createGain();
        (o.gain.setValueAtTime(0.85, t),
          o.gain.exponentialRampToValueAtTime(0.001, t + 0.95),
          r.connect(i),
          i.connect(o),
          o.connect(this.master),
          r.start(t));
      }
      let s = e.createBufferSource();
      s.buffer = a;
      let c = e.createBiquadFilter();
      ((c.type = `highpass`), c.frequency.setValueAtTime(3200, t));
      let l = e.createGain();
      (l.gain.setValueAtTime(0.65, t),
        l.gain.exponentialRampToValueAtTime(0.001, t + 0.65),
        s.connect(c),
        c.connect(l),
        l.connect(this.master),
        s.start(t),
        this.setTireScreech(1),
        setTimeout(() => {
          this.setTireScreech(0);
        }, 600));
    }
  },
  li = {
    "mustang-rtr": { top: 280, zeroTo100: 3.7 },
    m2: { top: 285, zeroTo100: 4 },
    "m8-competition": { top: 305, zeroTo100: 3.2 },
    "m4-competition": { top: 290, zeroTo100: 3.8 },
    demon: { top: 270, zeroTo100: 2.4 },
    "huracan-evo": { top: 325, zeroTo100: 2.9 },
    huayra: { top: 370, zeroTo100: 3.3 },
    laferrari: { top: 350, zeroTo100: 2.6 },
    "utopia-roadster": { top: 350, zeroTo100: 3 },
    svj: { top: 350, zeroTo100: 2.8 },
    revuelto: { top: 350, zeroTo100: 2.5 },
    chiron: { top: 420, zeroTo100: 2.4 },
    "voiture-noire": { top: 420, zeroTo100: 2.4 },
    tourbillon: { top: 445, zeroTo100: 2 },
    jesko: { top: 400, zeroTo100: 2.5 },
    "chiron-ss300": { top: 440, zeroTo100: 2.4 },
  },
  ui = 3.5,
  di = (e, t, n) => e * (1 - (n / t) ** 2) + ui;
function fi(e, t, n = 100) {
  let r = 0,
    i = 0,
    a = 0.005;
  for (; r < n && i < 120;) ((r += di(e, t, r) * a), (i += a));
  return i;
}
function pi(e) {
  let t = 1,
    n = 200;
  for (let r = 0; r < 40; r++) {
    let r = (t + n) / 2;
    fi(r, e.top) > e.zeroTo100 ? (t = r) : (n = r);
  }
  return (t + n) / 2;
}
var mi = 0.85,
  hi = 0.95,
  gi = 0.8;
function _i(e) {
  return e >= 220 ? `green` : e >= 120 ? `yellow` : e >= 50 ? `orange` : `red`;
}
var vi = (e) => Math.max(0, Math.min(1, e / 600));
function yi(e, t, n = 1 / 0, r = 290, i = 58) {
  let a = Math.min(r, n);
  if (e > a) return Math.max(a, e - 150 * t);
  let o = i * (1 - (e / r) ** 2) + 4;
  return Math.min(a, e + o * t);
}
function bi(e, t, n, r) {
  return e > 0 && e < n && Math.abs(t) < r * 0.55;
}
function xi(e, t, n, r, i) {
  return !e.some((e) => !e.hit && e.lane === t && e.z - n < r && n - e.z < i);
}
function Si(e, t, n, r) {
  let i = r.lanes ?? 3,
    a = !xi(e, t.lane, t.z, r.ahead, 0),
    o = [n, t.lane - 1, t.lane + 1];
  if (!a && t.lane === n) return t.lane;
  for (let n of o)
    if (
      !(n < 0 || n >= i || n === t.lane) &&
      Math.abs(n - t.lane) === 1 &&
      xi(e, n, t.z, r.ahead, r.behind)
    )
      return n;
  return t.lane;
}
var Ci = 1e3;
function wi(e) {
  let t = Math.floor(Math.max(0, e) / 100);
  return t * Ci + (100 * t * (t - 1)) / 2;
}
function Ti(e, t, n = 3) {
  let r = e.map(() => 1 / 0),
    i = t * 2.5;
  for (let a = 0; a < e.length; a++) {
    let o = e[a];
    if (!o || o.hit) continue;
    let s = [],
      c = !0;
    for (let t = 0; t < n; t++) {
      if (t === o.lane) continue;
      let n = null;
      for (let r of e) {
        if (r === o || r.hit || r.lane !== t) continue;
        let e = r.z - o.z;
        e < 0 || e > i || ((!n || r.z < n.z) && (n = r));
      }
      if (!n) {
        c = !1;
        break;
      }
      s.push(n);
    }
    if (!c || s.length === 0) continue;
    let l = Math.max(...s.map((e) => e.z)),
      u = Math.min(...s.map((e) => e.speed)),
      d = l - o.z;
    r[a] = Math.max(25, u - (d < t ? 30 : 10));
  }
  return r;
}
function Ei(e, t, n) {
  return new Set(
    e
      .filter((e) => !e.hit && Math.abs(e.z - t) < n)
      .flatMap((e) =>
        e.yieldState === `changing` && e.targetLane !== void 0
          ? [e.lane, e.targetLane]
          : [e.lane],
      ),
  );
}
function Di(e, t, n, r = 16, i = 14) {
  for (let a of e)
    if (!(a === t || a.hit) && (a.lane === n || a.targetLane === n)) {
      let e = a.z - t.z;
      if ((e >= 0 && e < r) || (e < 0 && -e < i)) return !1;
    }
  return !0;
}
function Oi(e, t, n, r) {
  let i = r.lanes ?? 3;
  if (n < 0 || n >= i || n === t.lane) return !1;
  for (let i of e) {
    if (
      i === t ||
      i.hit ||
      (i.lane !== n && (i.yieldState !== `changing` || i.targetLane !== n))
    )
      continue;
    let e = i.z - t.z;
    if (
      (e >= 0 && e < r.gapAhead) ||
      (e < 0 && -e < r.gapBehind + Math.max(0, i.speed - t.speed) * 0.25)
    )
      return !1;
  }
  return (
    Ei(e.filter((e) => e !== t).concat([{ ...t, lane: n }]), t.z, r.wallLen)
      .size < i
  );
}
var ki = 3.5,
  Ai = 3,
  ji = 68,
  Mi = 8,
  Ni = 0.3,
  Pi = 3.5,
  Fi = 3.2,
  Ii = 4.5,
  Li = 6,
  X = 720,
  Ri = 90,
  Z = {
    grass: `#41622b`,
    grassDark: `#2f481e`,
    grassLight: `#547a37`,
    tree: `#223b18`,
    treeLight: `#395b26`,
    gravel: `#787165`,
    asphalt: `#3f4146`,
    asphaltLight: `#4d5056`,
    asphaltDark: `#2c2e32`,
    line: `#f0ece0`,
    rail: `#b8bcc2`,
    railShadow: `rgba(0,0,0,0.4)`,
    post: `#686c72`,
  },
  Q = (e, t) => e + Math.random() * (t - e),
  $ = (e, t, n) => Math.max(t, Math.min(n, e)),
  zi = class {
    canvas;
    images;
    cb;
    audio;
    onRender;
    hidden = !1;
    threeD = !1;
    ctx;
    W = 0;
    H = 0;
    dpr = 1;
    bottomInset = 170;
    raf = 0;
    last = 0;
    phase = `menu`;
    mode = `free`;
    input = {
      left: !1,
      right: !1,
      gas: !1,
      brake: !1,
      horn: !1,
      boost: !1,
      highBeam: !1,
    };
    roadX = 0;
    roadW = 0;
    laneW = 0;
    carW = 0;
    k = 10;
    baseY = 0;
    lenM = 14;
    player = { x: 0, vx: 0, rot: 0, spin: 0, speed: 0, w: 0, h: 0 };
    pz = 0;
    distance = 0;
    topSpeed = 0;
    currentGear = 1;
    lastGear = 1;
    exhaustFlameTimer = 0;
    nextSpawnZ = 0;
    boostEnergy = 100;
    boostActive = !1;
    highBeamTimer = 0;
    nearMissCombo = 0;
    comboTimer = 0;
    lastNearMissEvent;
    nearMissEventTimer = 0;
    lastRadarEvent;
    radarEventTimer = 0;
    passedRadars = new Set();
    rainSprayT = 0;
    police = {
      x: 0,
      y: 0,
      z: -240,
      speed: 0,
      lane: 1,
      targetLane: 1,
      w: 0,
      h: 0,
      sirenT: 0,
      startDelay: gi,
      active: !1,
      blocking: !1,
      passLane: 1,
      vx: 0,
      rot: 0,
      holdT: 0,
      cutIn: !1,
    };
    traffic = [];
    lastBugattiZ = null;
    particles = [];
    streaks = [];
    scroll = 0;
    steerInput = 0;
    shake = 0;
    rubberT = 0;
    flash = 0;
    crashT = 0;
    emitT = 0;
    hudT = 0;
    hornActive = !1;
    gameOverOutcome = `crash`;
    paused = !1;
    tileDay = null;
    shadow;
    smokeDark;
    smokeLight;
    constructor(e, t, n, r) {
      ((this.canvas = e),
        (this.images = t),
        (this.cb = n),
        (this.audio = r),
        (this.ctx = e.getContext(`2d`)),
        (this.shadow = this.makeShadow()),
        (this.smokeDark = this.makeSmoke(55, 55, 58)),
        (this.smokeLight = this.makeSmoke(185, 185, 188)));
    }
    setBottomInset(e) {
      ((this.bottomInset = e), this.W && this.layout());
    }
    setThreeD(e) {
      ((this.threeD = e), this.W && this.layout());
    }
    get spanM() {
      return this.threeD ? this.lenM * 2.7 : this.lenM;
    }
    snapshot(e) {
      let t = this.player;
      return {
        phase: this.phase,
        mode: this.mode,
        ppm: this.laneW / 3.6,
        roadCenterX: this.roadX + this.roadW / 2,
        baseY: this.baseY,
        pz: this.pz,
        dt: e,
        player: t,
        braking: this.input.brake && this.phase === `playing`,
        gas: this.input.gas && this.phase === `playing`,
        steer: this.steerInput,
        gear: this.currentGear,
        boostActive: this.boostActive,
        exhaustFlame: this.exhaustFlameTimer,
        highBeam: this.highBeamTimer > 0,
        shake: this.shake,
        flash: this.flash,
        traffic: this.traffic,
        police: {
          ...this.police,
          active: this.mode === `police` && this.police.active,
        },
        particles: this.particles,
      };
    }
    debugSim(e) {}
    setMode(e) {
      this.mode = e;
    }
    topKmh = 352;
    accel = ji;
    policeMax = 290;
    policeAccel = 58;
    setCar(e) {
      let t = li[e];
      ((this.topKmh = t.top),
        (this.accel = pi(t)),
        (this.policeMax = Math.round(t.top * mi)),
        (this.policeAccel = this.accel * hi));
    }
    get playerTopSpeed() {
      return this.topKmh;
    }
    gearSpeed(e) {
      return (e * 352) / this.topKmh;
    }
    prizeNow() {
      return this.mode === `police` ? wi(this.distance) : 0;
    }
    resize(e, t) {
      if (e < 20 || t < 20) return;
      ((this.dpr = Math.min(window.devicePixelRatio || 1, 2)),
        (this.W = e),
        (this.H = t),
        (this.canvas.width = Math.round(e * this.dpr)),
        (this.canvas.height = Math.round(t * this.dpr)),
        (this.canvas.style.width = `${e}px`),
        (this.canvas.style.height = `${t}px`));
      let n = this.laneW,
        r = this.roadX;
      if ((this.layout(), n)) {
        let e = (this.player.x - r) / (n * Ai);
        this.player.x = this.roadX + e * this.roadW;
        for (let e of this.traffic)
          if (
            ((e.x = this.roadX + ((e.x - r) / n) * this.laneW),
            (e.vx *= this.laneW / n),
            this.threeD)
          ) {
            let t = j[e.type];
            ((e.w = t[0] * this.k),
              (e.h = t[1] * this.k),
              (e.y = k(this.baseY, e.z, this.pz, this.k)));
          }
      } else this.player.x = this.laneX(1);
      (this.buildTile(),
        (this.streaks = Array.from({ length: 18 }, () => ({
          x: Q(0, e),
          y: Q(0, t),
          len: Q(50, 130),
        }))));
    }
    layout() {
      ((this.roadW = Math.min(this.W * 0.82, 530)),
        (this.roadX = (this.W - this.roadW) / 2),
        (this.laneW = this.roadW / Ai),
        (this.carW = this.laneW * 0.68));
      let e = this.player;
      ((e.w = this.carW),
        (e.h =
          this.carW *
          (this.images.player.naturalHeight / this.images.player.naturalWidth)),
        (this.k = this.threeD ? this.laneW / 3.6 : (this.carW / 2.25) * Ni),
        (this.lenM = e.h / this.k),
        (this.baseY = this.H - this.bottomInset - e.h * 0.55 - 10),
        (this.police.w = this.carW * 0.96),
        (this.police.h =
          this.police.w *
          (this.images.police.naturalHeight /
            this.images.police.naturalWidth)));
      for (let e of this.traffic)
        this.threeD ||
          ((e.w = e.type === `bus` ? this.carW * 1.08 : this.carW * 0.95),
          (e.h = e.w * (e.img.naturalHeight / e.img.naturalWidth)));
      if (this.threeD) {
        let t = this.laneW / 3.6;
        ((e.w = 2.05 * t),
          (e.h = 4.95 * t),
          (this.police.w = 1.95 * t),
          (this.police.h = 4.8 * t),
          (this.lenM = e.h / this.k));
      }
    }
    laneX(e) {
      return this.roadX + this.laneW * (e + 0.5);
    }
    start() {
      ((this.phase = `playing`), (this.traffic = []), (this.particles = []));
      let e = this.player;
      ((e.x = this.laneX(1)),
        (e.vx = 0),
        (e.rot = 0),
        (e.spin = 0),
        (e.speed = 0),
        (this.pz = 0),
        (this.distance = 0),
        (this.lastBugattiZ = null),
        (this.topSpeed = 0),
        (this.currentGear = 1),
        (this.lastGear = 1),
        (this.exhaustFlameTimer = 0),
        (this.crashT = 0),
        (this.shake = 0),
        (this.flash = 0),
        (this.gameOverOutcome = `crash`),
        (this.nextSpawnZ = this.threeD ? 290 : (this.baseY + 260) / this.k),
        (this.boostEnergy = 100),
        (this.boostActive = !1),
        (this.highBeamTimer = 0),
        (this.nearMissCombo = 0),
        (this.comboTimer = 0),
        (this.lastNearMissEvent = void 0),
        (this.nearMissEventTimer = 0),
        (this.lastRadarEvent = void 0),
        (this.radarEventTimer = 0),
        this.passedRadars.clear(),
        (this.rainSprayT = 0),
        (this.police.z = -240),
        (this.police.speed = 0),
        (this.police.lane = 1),
        (this.police.targetLane = 1),
        (this.police.x = this.laneX(1)),
        (this.police.startDelay = gi),
        (this.police.active = this.mode === `police`),
        (this.police.blocking = !1),
        (this.police.cutIn = !1),
        (this.police.vx = 0),
        (this.police.rot = 0),
        (this.police.holdT = 0));
    }
    run() {
      let e = (t) => {
        let n = this.last ? Math.min((t - this.last) / 1e3, 0.05) : 0.016;
        if (
          ((this.last = t),
          (this.raf = requestAnimationFrame(e)),
          !(!this.W || !this.H || this.hidden))
        )
          try {
            (this.update(n),
              this.onRender ? this.onRender(this.snapshot(n)) : this.render());
          } catch (e) {
            console.warn(`frame error`, e);
          }
      };
      this.raf = requestAnimationFrame(e);
    }
    stop() {
      (cancelAnimationFrame(this.raf),
        this.audio?.setTraffic([], this.pz, this.player.x, this.k, !1),
        this.audio?.setEngine(0, !1, !1),
        this.audio?.stopHorn(),
        this.audio?.setPolice(999, !1),
        this.audio?.setBoost(!1));
    }
    update(e) {
      if (this.paused) {
        (this.audio?.setTraffic([], this.pz, this.player.x, this.k, !1),
          this.audio?.setEngine(0, !1, !1),
          this.audio?.setPolice(999, !1),
          this.audio?.setTireScreech(0));
        return;
      }
      let t = this.player,
        n = this.input,
        r = this.roadX + 10 + t.w * 0.4,
        i = this.roadX + this.roadW - 10 - t.w * 0.4;
      if (
        (n.horn && !this.hornActive
          ? ((this.hornActive = !0),
            this.audio?.startHorn(he(this.pz)),
            this.triggerHornYield())
          : !n.horn &&
            this.hornActive &&
            ((this.hornActive = !1), this.audio?.stopHorn()),
        n.highBeam &&
          this.highBeamTimer <= 0 &&
          ((this.highBeamTimer = 0.75), this.triggerHighBeamAlert()),
        this.highBeamTimer > 0 && (this.highBeamTimer -= e),
        this.phase === `menu`)
      )
        ((t.speed += (95 - t.speed) * (1 - Math.exp(-e))),
          (t.x += (this.laneX(1) - t.x) * (1 - Math.exp(-3 * e))),
          (this.currentGear = 2));
      else if (this.phase === `playing`) {
        let a;
        if (n.brake)
          ((a = -135),
            (this.boostActive = !1),
            this.audio?.setBoost(!1),
            (this.boostEnergy = Math.min(100, this.boostEnergy + 4 * e)),
            t.speed > 35
              ? this.audio?.setTireScreech(Math.min(1, t.speed / 180))
              : this.audio?.setTireScreech(0));
        else if (
          (this.audio?.setTireScreech(0), n.boost && this.boostEnergy > 2)
        ) {
          ((this.boostActive = !0),
            (this.boostEnergy = Math.max(0, this.boostEnergy - 28 * e)),
            this.audio?.setBoost(!0));
          let n =
            85 *
            (this.accel / ji) *
            Math.max(0, 1 - (t.speed / (this.topKmh + 12)) ** 1.3);
          ((a = this.accel * (1 - (t.speed / this.topKmh) ** 2) + n + 6),
            (this.exhaustFlameTimer = 0.22),
            (this.shake = Math.max(this.shake, 1.25)));
        } else
          ((this.boostActive = !1),
            this.audio?.setBoost(!1),
            (this.boostEnergy = Math.min(100, this.boostEnergy + 5.5 * e)),
            (a = n.gas
              ? this.accel * (1 - (t.speed / this.topKmh) ** 2) + 3.5
              : -(Mi + t.speed * 0.04)));
        t.speed = $(t.speed + a * e, 0, this.topKmh);
        let o =
          O(
            this.currentGear - 1,
            this.gearSpeed(t.speed),
            n.gas || this.boostActive,
          ) + 1;
        (o > this.currentGear &&
          (n.gas || this.boostActive) &&
          (o % 2 == 0 &&
            ((this.exhaustFlameTimer = 0.45),
            this.audio?.fireExhaustBackfire(),
            this.emitExhaustParticles()),
          this.cb.onShift?.(o)),
          (this.currentGear = o),
          (this.lastGear = o));
        let s = !!n.right - +!!n.left,
          c = s === 0 ? Ii : s * this.steerInput < 0 ? Li : Fi;
        this.steerInput += $(s - this.steerInput, -c * e, c * e);
        let l = s,
          u = 1 - 0.38 * Math.min(1, Math.max(0, (t.speed - 120) / 230)),
          d = this.laneW * (Pi * u),
          f = Math.min(1, t.speed / 30),
          p = this.steerInput * d * f,
          m = t.speed > 200 ? 5.2 : 6.8;
        ((t.vx += (p - t.vx) * (1 - Math.exp(-m * e))), (t.x += t.vx * e));
        let ee = Math.max(28, (t.speed / 3.6) * this.k),
          h = $(
            Math.atan2(t.vx, ee) + this.steerInput * 0.035 * f,
            -0.16,
            0.16,
          );
        if (
          ((t.rot += (h - t.rot) * (1 - Math.exp(-7.5 * e))),
          t.speed > 160 && Math.abs(t.vx) > this.laneW * 1.6)
        ) {
          let e = $(
            (Math.abs(t.vx) / (this.laneW * 2.4)) * (t.speed / 300),
            0,
            0.85,
          );
          !n.brake && e > 0.18 && this.audio?.setTireScreech(e * 0.7);
        }
        if (t.x < r || t.x > i) {
          let n = t.x < r ? -1 : 1;
          ((t.x = $(t.x, r, i)),
            t.speed > 20 &&
              l === n &&
              ((t.speed = Math.max(0, t.speed - 45 * e)),
              this.emitSparks(
                t.x + n * t.w * 0.45,
                this.baseY + Q(-t.h * 0.3, t.h * 0.3),
                1,
                n,
              ),
              (this.shake = Math.max(this.shake, 2.5))),
            (t.vx = 0));
        }
      } else if (this.phase === `busted`)
        ((t.speed = Math.max(0, t.speed - 150 * e)),
          (t.rot *= Math.exp(-6 * e)),
          (t.spin = 0),
          (t.vx *= Math.exp(-6 * e)),
          (t.x = $(t.x, r, i)),
          (this.crashT += e),
          t.speed <= 0.5 &&
            this.crashT > 0.5 &&
            ((this.phase = `over`),
            (this.gameOverOutcome = `busted`),
            this.cb.onGameOver({
              distance: this.distance,
              topSpeed: this.topSpeed,
              outcome: `busted`,
              prize: 0,
            })));
      else {
        ((t.speed *= Math.exp(-3.2 * e)),
          t.speed < 1 && (t.speed = 0),
          (t.rot *= Math.exp(-2.2 * e)),
          (t.spin = 0),
          (t.x += t.vx * e),
          (t.vx *= Math.exp(-3.5 * e)),
          (t.x < r || t.x > i) && ((t.x = $(t.x, r, i)), (t.vx = -t.vx * 0.3)),
          (this.crashT += e),
          (this.emitT += e));
        let n = this.crashT < 3 ? 0.025 : 0.06;
        for (; this.emitT > n;) {
          this.emitT -= n;
          let e = t.h * 0.22;
          this.emitSmoke(
            t.x - Math.sin(t.rot) * e,
            this.baseY + Math.cos(t.rot) * e,
            this.crashT < 2 && Math.random() < 0.35,
          );
        }
        if (
          (this.phase === `crashed` || this.phase === `escaped`) &&
          this.crashT > 1.4
        ) {
          let e = this.phase === `crashed` ? `crash` : `escaped`;
          ((this.phase = `over`),
            (this.gameOverOutcome = e),
            this.cb.onGameOver({
              distance: this.distance,
              topSpeed: this.topSpeed,
              outcome: e,
              prize: e === `escaped` ? this.prizeNow() : 0,
            }));
        }
      }
      this.phase === `playing` &&
        (this.topSpeed = Math.max(this.topSpeed, t.speed));
      let a = (t.speed / 3.6) * e;
      ((this.pz += a), this.phase === `playing` && (this.distance += a));
      let o = a * this.k;
      if (
        ((this.scroll = (this.scroll + o) % X),
        this.exhaustFlameTimer > 0 &&
          ((this.exhaustFlameTimer -= e),
          Math.random() < 0.4 && this.emitExhaustParticles()),
        this.updateTraffic(e),
        this.phase === `playing` && (this.spawn(), this.checkCollision()),
        this.mode === `police` &&
        (this.phase === `playing` || this.phase === `busted`)
          ? this.updatePolice(e)
          : this.audio?.setPolice(999, !1),
        this.comboTimer > 0 &&
          ((this.comboTimer -= e),
          this.comboTimer <= 0 && (this.nearMissCombo = 0)),
        this.nearMissEventTimer > 0 &&
          ((this.nearMissEventTimer -= e),
          this.nearMissEventTimer <= 0 && (this.lastNearMissEvent = void 0)),
        this.radarEventTimer > 0 &&
          ((this.radarEventTimer -= e),
          this.radarEventTimer <= 0 && (this.lastRadarEvent = void 0)),
        this.phase === `playing` && t.speed > 70)
      ) {
        for (let e of this.traffic)
          if (
            !(e.hit || e.nearMissed) &&
            Math.abs(e.z - this.pz) < this.lenM * 0.82
          ) {
            let n = Math.abs(e.x - t.x),
              r = (t.w + e.w) * 0.47,
              i = (t.w + e.w) * 0.86;
            if (n >= r && n <= i) {
              ((e.nearMissed = !0),
                (this.nearMissCombo += 1),
                (this.comboTimer = 3.5));
              let n = 150 * this.nearMissCombo;
              ((this.boostEnergy = Math.min(100, this.boostEnergy + 20)),
                (this.lastNearMissEvent = {
                  combo: this.nearMissCombo,
                  pts: n,
                }),
                (this.nearMissEventTimer = 2),
                this.audio?.playNearMissWhoosh(),
                Math.random() < 0.6 && this.audio?.playTrafficHorn(),
                this.cb.onNearMiss?.(this.nearMissCombo, n));
              let r = e.x > t.x ? 1 : -1;
              for (let e = 0; e < 6; e++)
                this.particles.push({
                  kind: `spark`,
                  x: t.x + r * (t.w * 0.45),
                  y: this.baseY + Q(-t.h * 0.3, t.h * 0.3),
                  vx: r * Q(40, 90),
                  vy: Q(-60, 60),
                  life: 0,
                  max: 0.25,
                  size: Q(2, 4),
                  grow: 0,
                  alpha: 0.9,
                  rot: 0,
                });
            }
          }
      }
      if (this.phase === `playing`)
        for (let e of F)
          this.pz >= e &&
            this.pz < e + 18 &&
            !this.passedRadars.has(e) &&
            (this.passedRadars.add(e),
            t.speed > 210 &&
              ((this.flash = 1),
              this.audio?.playCameraShutter(),
              (this.lastRadarEvent = {
                speed: Math.round(t.speed),
                limit: 120,
              }),
              (this.radarEventTimer = 2.2),
              this.cb.onRadarTrigger?.(Math.round(t.speed))));
      let s = this.phase === `playing`,
        c = he(this.pz),
        l = ye(this.pz);
      if (s && (n.gas || this.boostActive) && t.speed > 12 && t.speed < 330) {
        let n = (1 - t.speed / 340) * 0.8 + (this.boostActive ? 0.6 : 0);
        for (this.rubberT += e * n; this.rubberT > 0.035;) {
          this.rubberT -= 0.035;
          let e = Math.random() < 0.5 ? -1 : 1;
          this.emitRubber(
            t.x + e * t.w * 0.36,
            this.baseY + t.h * 0.3,
            t.speed,
          );
        }
      }
      for (let t of this.traffic)
        if (
          !(
            !t.sportPush ||
            t.hit ||
            t.speed > t.cruise - 6 ||
            Math.abs(t.z - this.pz) > 90
          ) &&
          ((t.rubberT = (t.rubberT ?? 0) + e), t.rubberT > 0.07)
        ) {
          t.rubberT = 0;
          let e = Math.random() < 0.5 ? -1 : 1;
          this.emitRubber(t.x + e * t.w * 0.36, t.y + t.h * 0.32, 0);
        }
      if (
        s &&
        l > 0.08 &&
        t.speed > 35 &&
        ((this.rainSprayT += e), this.rainSprayT > 0.045)
      ) {
        this.rainSprayT = 0;
        for (let e of [-1, 1])
          this.particles.push({
            kind: `spray`,
            x: t.x + e * (t.w * 0.32),
            y: this.baseY + t.h * 0.44,
            vx: e * Q(10, 35) + Q(-10, 10),
            vy: Q(50, 140) + t.speed * 0.6,
            life: 0,
            max: Q(0.25, 0.45),
            size: Q(4, 9),
            grow: Q(15, 25),
            alpha: 0.45 * l,
            rot: Q(0, 6.28),
          });
      }
      this.updateParticles(e, o);
      for (let e of this.streaks)
        ((e.y += o * 1.8),
          e.y > this.H + e.len && ((e.y = -e.len), (e.x = Q(0, this.W))));
      if (
        ((this.shake *= Math.exp(-6 * e)),
        (this.flash *= Math.exp(-5 * e)),
        this.audio?.setTraffic(this.traffic, this.pz, t.x, this.k, s),
        this.audio?.setEngine(
          s ? this.gearSpeed(t.speed) : 0,
          (n.gas || this.boostActive) && s,
          s,
          c,
          l,
          this.currentGear - 1,
          n.brake && s,
        ),
        (this.hudT += e),
        this.hudT > 0.08)
      ) {
        this.hudT = 0;
        let e = this.pz - this.police.z;
        this.cb.onHud({
          speed: t.speed,
          distance: this.distance,
          topSpeed: this.topSpeed,
          gear: this.currentGear,
          inTunnel: c,
          nightAmount: pe(this.pz),
          rainAmount: l,
          boostEnergy: Math.round(this.boostEnergy),
          boostActive: this.boostActive,
          nearMissCombo: this.nearMissCombo,
          nearMissEvent: this.lastNearMissEvent,
          radarEvent: this.lastRadarEvent,
          policeGap: this.mode === `police` ? e : void 0,
          policeZone: this.mode === `police` ? _i(e) : void 0,
          escapeProgress: this.mode === `police` ? vi(e) : void 0,
          prize: this.mode === `police` ? this.prizeNow() : void 0,
          rpm: D(this.currentGear - 1, this.gearSpeed(t.speed)),
        });
      }
    }
    triggerHighBeamAlert() {
      let e = this.player,
        t = $(Math.floor((e.x - this.roadX) / this.laneW), 0, 2);
      for (let n of this.traffic) {
        if (n.hit) continue;
        let r = n.z - this.pz;
        if (
          r > 10 &&
          r < 220 &&
          (n.lane === t || Math.abs(n.x - e.x) < this.carW * 1.1) &&
          n.yieldState !== `changing`
        ) {
          n.originalCruise = n.originalCruise ?? n.cruise;
          let e = [];
          if (
            (n.lane > 0 && n.lane - 1 !== t && e.push(n.lane - 1),
            n.lane < 2 && n.lane + 1 !== t && e.push(n.lane + 1),
            e.length === 0 &&
              (n.lane > 0 && e.push(n.lane - 1),
              n.lane < 2 && e.push(n.lane + 1)),
            e.length > 0)
          ) {
            let t = e.find((e) => Di(this.traffic, n, e, 14, 12)) ?? e[0];
            ((n.targetLane = t),
              (n.signal = t < n.lane ? -1 : 1),
              (n.signalTimer = 0),
              (n.yieldState = Di(this.traffic, n, t, 14, 12)
                ? `changing`
                : `accelerating`));
          }
        }
      }
    }
    updatePolice(e) {
      let t = this.police;
      if (((t.sirenT += e), t.startDelay > 0))
        ((t.startDelay -= e), (t.z = this.pz - 240), (t.speed = 100));
      else {
        let n = $(Math.floor((this.player.x - this.roadX) / this.laneW), 0, 2);
        Math.abs(t.x - this.laneX(t.lane)) < this.laneW * 0.15 &&
          ((t.targetLane = Si(this.traffic, { lane: t.lane, z: t.z }, n, {
            ahead: this.lenM * 3,
            behind: this.lenM * 1.6,
          })),
          (t.lane = t.targetLane));
        let r = this.policeMax;
        for (let e of this.traffic) {
          if (e.hit) continue;
          let n = e.z - t.z;
          n > 0 &&
            n < this.lenM * 2.6 &&
            Math.abs(e.x - t.x) < this.carW * 0.95 &&
            (r = Math.min(r, n < this.lenM * 1.15 ? e.speed * 0.85 : e.speed));
        }
        let i = this.pz - t.z,
          a = this.player.speed;
        if (this.phase === `busted`) {
          ((t.speed = Math.max(0, t.speed - 150 * e)), (t.lane = n));
          let r = t.z - this.pz - this.lenM * 1.15;
          (r < this.lenM * 2 &&
            (this.player.speed = Math.min(
              this.player.speed,
              t.speed + Math.max(0, r) * 6,
            )),
            (this.player.spin = 0),
            (this.player.rot *= Math.exp(-4 * e)));
        } else if (
          (!t.blocking &&
            i < this.lenM * 6 &&
            ((t.blocking = !0),
            (t.passLane =
              n === 0 || n === 2
                ? 1
                : t.lane === n
                  ? n + (Math.random() < 0.5 ? -1 : 1)
                  : t.lane)),
          t.blocking)
        ) {
          let r = t.z - this.pz,
            o = Math.abs(t.x - this.player.x) > this.carW * 1.1;
          if (
            (r > this.lenM * 1.7
              ? (t.cutIn = !0)
              : r < this.lenM * 1.15 && (t.cutIn = !1),
            t.cutIn)
          )
            ((t.lane = n),
              (t.speed =
                Math.abs(t.x - this.player.x) < this.carW * 0.5
                  ? Math.max(0, Math.min(t.speed, a) - 110 * e)
                  : Math.max(a + 15, t.speed - 40 * e)));
          else if (
            (t.passLane === n && (t.passLane = n === 0 ? 1 : n - 1),
            (t.lane = t.passLane),
            o)
          )
            t.speed = Math.min(340, Math.max(t.speed, a + 45));
          else if (r < 0) {
            let e = -r - this.lenM * 1.25;
            t.speed =
              e < this.lenM
                ? Math.min(t.speed, a + Math.max(-20, e * 4))
                : t.speed;
          }
          (Math.abs(t.x - this.player.x) > this.carW * 0.75 && (t.holdT = 0),
            i > this.lenM * 6 && (t.blocking = !1));
        } else t.speed = yi(t.speed, e, r, this.policeMax, this.policeAccel);
        t.z += (t.speed / 3.6) * e;
        let o = this.laneX(t.lane) - t.x,
          s =
            this.laneW *
            ((t.cutIn ? 0.95 : 0.55) + Math.min(t.speed, 220) / 260),
          c = $(o * 2.2, -s, s);
        ((t.vx += (c - t.vx) * (1 - Math.exp(-5 * e))), (t.x += t.vx * e));
        let l = Math.max(30, (t.speed / 3.6) * this.k),
          u = $(Math.atan2(t.vx, l), -0.32, 0.32);
        t.rot += (u - t.rot) * (1 - Math.exp(-10 * e));
      }
      t.y = this.baseY - (t.z - this.pz) * this.k;
      let n = this.pz - t.z;
      (this.audio?.setPolice(
        Math.abs(n),
        this.phase === `playing` || this.phase === `busted`,
      ),
        this.phase === `playing` &&
          (n >= 600
            ? ((this.phase = `escaped`),
              (this.gameOverOutcome = `escaped`),
              this.audio?.setPolice(999, !1))
            : t.blocking &&
                -n > this.lenM * 1.1 &&
                -n < this.lenM * 3 &&
                Math.abs(t.x - this.player.x) < this.carW * 0.45
              ? ((this.phase = `busted`),
                (this.gameOverOutcome = `busted`),
                (this.crashT = 0),
                this.audio?.setPolice(10, !0))
              : !t.blocking &&
                bi(n, t.x - this.player.x, this.lenM * 0.95, this.carW) &&
                ((this.phase = `busted`),
                (this.gameOverOutcome = `busted`),
                (this.crashT = 0),
                (this.shake = 3),
                this.audio?.setPolice(10, !0))));
    }
    triggerHornYield() {
      let e = this.player,
        t = $(Math.floor((e.x - this.roadX) / this.laneW), 0, 2),
        n;
      for (let t of this.traffic) {
        if (t.hit) continue;
        let r = t.z - this.pz;
        r <= 4 ||
          r >= 70 ||
          Math.abs(t.x - e.x) >= this.laneW * 0.6 ||
          ((!n || r < n.z - this.pz) && (n = t));
      }
      let r = n;
      if (r && r.yieldState !== `changing`) {
        r.originalCruise = r.originalCruise ?? r.cruise;
        let e = [];
        if (
          (r.lane > 0 && r.lane - 1 !== t && e.push(r.lane - 1),
          r.lane < 2 && r.lane + 1 !== t && e.push(r.lane + 1),
          e.length === 0 &&
            (r.lane > 0 && e.push(r.lane - 1),
            r.lane < 2 && e.push(r.lane + 1)),
          e.length === 0)
        )
          return;
        let n = e.find((e) => Di(this.traffic, r, e, 16, 14)) ?? e[0];
        ((r.targetLane = n),
          (r.signal = n < r.lane ? -1 : 1),
          (r.signalTimer = 0),
          (r.yieldState = Di(this.traffic, r, n, 16, 14)
            ? `changing`
            : `accelerating`));
      }
    }
    updateTraffic(e) {
      let t = [[], [], []];
      for (let e of this.traffic) t[e.lane]?.push(e);
      for (let e of t) e.sort((e, t) => t.z - e.z);
      let n = Ti(this.traffic, this.spanM * ki),
        r = new Map(this.traffic.map((e, t) => [e, n[t] ?? 1 / 0]));
      for (let n of t)
        for (let i = 0; i < n.length; i++) {
          let a = n[i];
          if (a.hit)
            ((a.speed *= Math.exp(-1.4 * e)),
              (a.rot += a.vr * e),
              (a.vr *= Math.exp(-2 * e)),
              (a.x += a.vx * e),
              (a.vx *= Math.exp(-3 * e)));
          else {
            if (
              a.sportBase !== void 0 &&
              a.yieldState === `idle` &&
              ((a.sportTimer = (a.sportTimer ?? 0) - e), a.sportTimer <= 0)
            ) {
              let e = A(
                a.sportBase,
                !!a.sportPush,
                Math.random(),
                Math.random(),
                Math.random(),
                _e[a.type],
              );
              ((a.sportPush = e.push),
                (a.sportTimer = e.duration),
                (a.originalCruise = e.cruise));
            }
            if (a.yieldState === `accelerating`) {
              let t = Math.min(220, (a.originalCruise ?? a.cruise) + 65);
              ((a.cruise += (t - a.cruise) * (1 - Math.exp(-4.5 * e))),
                Di(this.traffic, a, a.targetLane, 16, 14) &&
                  (a.yieldState = `changing`));
              let n = this.laneX(a.lane);
              ((a.x += (n - a.x) * (1 - Math.exp(-10 * e))), (a.rot = 0));
            } else if (a.yieldState === `changing`) {
              let t = this.laneX(a.targetLane),
                n = t - a.x,
                r = Math.sign(n),
                i =
                  Math.abs(a.z - this.pz) < this.lenM * 1.5 &&
                  Math.sign(this.player.x - a.x) === r,
                o =
                  Math.abs(a.x - this.laneX(a.lane)) < this.laneW * 0.45 &&
                  !this.mergeRoom(a);
              if (!i && !o) {
                let n = ge(a.x, a.vx, a.rot, t, this.laneW, a.speed, this.k, e);
                ((a.x = n.x), (a.vx = n.vx), (a.rot = n.rot));
              } else ((a.vx *= Math.exp(-8 * e)), (a.rot *= Math.exp(-6 * e)));
              Math.abs(t - a.x) < this.laneW * 0.008 &&
                Math.abs(a.vx) < this.laneW * 0.025 &&
                ((a.x = t),
                (a.rot = 0),
                (a.lane = a.targetLane),
                (a.yieldState = `idle`),
                (a.signal = 0),
                (a.vx = 0));
            } else {
              let t = n[i - 1],
                r = !!a.sportPush;
              if (
                t &&
                t.z - a.z < this.spanM * (r ? 6 : 4) &&
                a.cruise > t.speed + 8 &&
                a.signalTimer > (r ? 1.5 : 3)
              ) {
                let e = [a.lane - 1, a.lane + 1].find((e) =>
                  Oi(this.traffic, a, e, {
                    gapAhead: 24,
                    gapBehind: 22,
                    wallLen: this.spanM * ki,
                  }),
                );
                e !== void 0 &&
                  ((a.targetLane = e),
                  (a.signal = e < a.lane ? -1 : 1),
                  (a.signalTimer = 0),
                  (a.yieldState = `changing`));
              }
              a.originalCruise !== void 0 &&
                Math.abs(a.cruise - a.originalCruise) > 1 &&
                (a.cruise +=
                  (a.originalCruise - a.cruise) *
                  (1 - Math.exp(-(a.sportPush ? 1.2 : 2.5) * e)));
              let o = this.laneX(a.lane);
              ((a.x += (o - a.x) * (1 - Math.exp(-12 * e))),
                (a.rot = 0),
                a.yieldState === `idle` && (a.signal = 0));
            }
            let o = Math.min(a.cruise, r.get(a) ?? 1 / 0),
              s = i > 0 ? (n[i - 1] ?? null) : null;
            if (a.yieldState === `changing` && a.targetLane !== a.lane)
              for (let e of t[a.targetLane] ?? [])
                e === a ||
                  e.hit ||
                  e.z <= a.z ||
                  ((!s || e.z < s.z) && (s = e));
            if (s) {
              let e = s.z - a.z,
                t = ((a.h + s.h) / 2 / this.k) * 1.35 + 2.5;
              (e < t * 1.7 &&
                (o = Math.min(o, s.speed * (e < t ? 0.75 : 0.95))),
                e < t && (a.speed = Math.min(a.speed, s.speed)));
            }
            a.speed += (o - a.speed) * (1 - Math.exp(-5 * e));
          }
          ((a.z += (a.speed / 3.6) * e),
            (a.y = this.baseY - (a.z - this.pz) * this.k),
            (a.signalTimer += e));
        }
      let i = this.threeD ? this.baseY + 115 * this.k : this.H + 260,
        a = this.threeD ? this.baseY - 650 * this.k : -this.H * 1.6;
      this.traffic = this.traffic.filter((e) => e.y < i && e.y > a);
    }
    mergeRoom(e) {
      for (let t of this.traffic) {
        if (
          t === e ||
          t.hit ||
          (t.lane !== e.targetLane &&
            (t.yieldState !== `changing` || t.targetLane !== e.targetLane))
        )
          continue;
        let n = t.z - e.z,
          r = (t.h + e.h) / 2 / this.k + 2,
          i = n > 0 ? Math.max(0, (e.speed - t.speed) / 3.6) * 1.6 : 0;
        if (Math.abs(n) < r + i) return !1;
      }
      return !0;
    }
    spawn() {
      let e = this.threeD ? 290 : (this.baseY + 260) / this.k;
      this.threeD &&
        (this.nextSpawnZ = Math.max(this.nextSpawnZ, this.pz + e - 5));
      let t = 0;
      for (; this.nextSpawnZ < this.pz + e && t++ < 8;) {
        this.trySpawn(this.nextSpawnZ);
        let e = this.spanM,
          t = Math.max(e * 1.25, e * 3.4 - (this.distance / 700) * e);
        this.nextSpawnZ += t * Q(0.75, 1.45);
      }
    }
    trySpawn(e) {
      let t = Ei(this.traffic, e, this.spanM * ki),
        n = [0, 1, 2].filter((e) => !t.has(e));
      if (n.length <= 1) return;
      let r = this.threeD
          ? [
              {
                type: `hatch`,
                img: this.images.hatch,
                minSpeed: 85,
                maxSpeed: 120,
              },
              {
                type: `sedan`,
                img: this.images.sedan,
                minSpeed: 95,
                maxSpeed: 135,
              },
              {
                type: `suv`,
                img: this.images.suv,
                minSpeed: 90,
                maxSpeed: 130,
              },
              {
                type: `pickup`,
                img: this.images.pickup,
                minSpeed: 85,
                maxSpeed: 120,
              },
              {
                type: `bus`,
                img: this.images.bus,
                minSpeed: 72,
                maxSpeed: 92,
                preferredLane: 2,
              },
              {
                type: `truck`,
                img: this.images.bus,
                minSpeed: 70,
                maxSpeed: 88,
                preferredLane: 2,
              },
              {
                type: `mustang-blue`,
                img: this.images.mustangBlue,
                minSpeed: 100,
                maxSpeed: 160,
              },
              {
                type: `mustang-black`,
                img: this.images.mustangBlack,
                minSpeed: 100,
                maxSpeed: 160,
              },
              {
                type: `bmw-m3`,
                img: this.images.mustangBlack,
                minSpeed: 100,
                maxSpeed: 150,
              },
              {
                type: `porsche-gt3`,
                img: this.images.mustangBlack,
                minSpeed: 105,
                maxSpeed: 160,
              },
              {
                type: `bugatti-chiron`,
                img: this.images.mustangBlue,
                minSpeed: 110,
                maxSpeed: 165,
              },
              {
                type: `ferrari-sf90`,
                img: this.images.mustangBlack,
                minSpeed: 108,
                maxSpeed: 162,
              },
            ]
          : [
              {
                type: `sedan`,
                img: this.images.sedan,
                minSpeed: 85,
                maxSpeed: 115,
              },
              {
                type: `hatch`,
                img: this.images.hatch,
                minSpeed: 80,
                maxSpeed: 110,
              },
              {
                type: `pickup`,
                img: this.images.pickup,
                minSpeed: 80,
                maxSpeed: 105,
              },
              {
                type: `suv`,
                img: this.images.suv,
                minSpeed: 95,
                maxSpeed: 125,
              },
              {
                type: `bus`,
                img: this.images.bus,
                minSpeed: 72,
                maxSpeed: 88,
                preferredLane: 0,
              },
              {
                type: `m5`,
                img: this.images.m5,
                minSpeed: 140,
                maxSpeed: 195,
                preferredLane: 2,
              },
              {
                type: `mustang-blue`,
                img: this.images.mustangBlue,
                minSpeed: 145,
                maxSpeed: 200,
                preferredLane: 2,
              },
              {
                type: `mustang-black`,
                img: this.images.mustangBlack,
                minSpeed: 145,
                maxSpeed: 200,
                preferredLane: 2,
              },
            ],
        i = le(Math.random(), Math.random(), this.traffic.at(-1)?.type);
      if (this.threeD) {
        let t = this.traffic.filter((e) => e.type === `bugatti-chiron`),
          n = t.length ? Math.max(...t.map((e) => e.z)) : this.lastBugattiZ;
        (i === `bugatti-chiron` && n !== null && Math.abs(e - n) < 350
          ? (i = `sedan`)
          : M(t.length, e, n) && (i = `bugatti-chiron`),
          i === `bugatti-chiron` && (this.lastBugattiZ = e));
      }
      let a = this.threeD
        ? r.find((e) => e.type === i)
        : r[Math.floor(Math.random() * r.length)];
      if (!a) return;
      let o = n[Math.floor(Math.random() * n.length)] ?? 1;
      a.preferredLane !== void 0 &&
        n.includes(a.preferredLane) &&
        (o = a.preferredLane);
      let s = this.laneW / 3.6,
        c = this.threeD ? j[a.type] : void 0,
        l = c
          ? c[0] * s
          : a.type === `bus`
            ? this.carW * 1.05
            : this.carW * 0.94,
        u = Q(a.minSpeed, a.maxSpeed) + Math.min(25, this.distance / 400);
      this.traffic.push({
        x: this.laneX(o),
        y: k(this.baseY, e, this.pz, this.k),
        z: e,
        w: l,
        h: c ? c[1] * s : l * (a.img.naturalHeight / a.img.naturalWidth),
        lane: o,
        targetLane: o,
        speed: u,
        cruise: u,
        img: a.img,
        type: a.type,
        hit: !1,
        rot: 0,
        vr: 0,
        vx: 0,
        signal: 0,
        signalTimer: 0,
        yieldState: `idle`,
        originalCruise: u,
        ...(w(a.type)
          ? { sportBase: u, sportPush: !1, sportTimer: Q(1.5, 6) }
          : {}),
      });
    }
    checkCollision() {
      let e = this.player,
        t = e.w * 0.46,
        n = e.h * 0.47;
      for (let r of this.traffic) {
        let i = r.w * 0.465,
          a = r.h * 0.47;
        if (Math.abs(r.x - e.x) < t + i && Math.abs(r.y - this.baseY) < n + a) {
          this.crash(r);
          return;
        }
      }
    }
    crash(e) {
      let t = this.player;
      ((this.phase = `crashed`),
        (this.gameOverOutcome = `crash`),
        (this.crashT = 0),
        (this.emitT = 0));
      let n = t.x < e.x ? -1 : 1,
        r = $(Math.abs(t.speed - e.speed) / 150, 0.4, 1.6);
      ((t.rot = n * $(0.38 * r, 0.28, 0.65)),
        (t.spin = 0),
        (t.vx = n * 75 * r),
        (t.speed = Math.max(e.speed * 0.4, t.speed * 0.25)),
        (e.hit = !0),
        (e.vr = -n * 0.4 * r),
        (e.vx = -n * 45 * r),
        (e.speed = Math.max(e.speed, t.speed)),
        (this.shake = 18 * r),
        (this.flash = 0.85));
      let i = (t.x + e.x) / 2,
        a = (this.baseY + e.y) / 2;
      this.emitSparks(i, a, 26, 0);
      for (let e = 0; e < 18; e++)
        this.particles.push({
          kind: `debris`,
          x: i,
          y: a,
          vx: Q(-220, 220),
          vy: Q(-220, 220),
          life: 0,
          max: Q(0.8, 1.6),
          size: Q(3, 7),
          grow: 0,
          alpha: 1,
          rot: Q(0, 6),
          dark: Math.random() < 0.7,
        });
      for (let e = 0; e < 14; e++)
        this.emitSmoke(i + Q(-20, 20), a + Q(-20, 20), !1);
      this.audio?.crash();
    }
    emitExhaustParticles() {
      let e = this.player,
        t = this.baseY + e.h * 0.44;
      for (let n of [-1, 1]) {
        let r = e.x + n * e.w * 0.12;
        this.particles.push({
          kind: `flame`,
          x: r + Q(-2, 2),
          y: t,
          vx: Q(-10, 10),
          vy: Q(140, 260) + e.speed * 0.5,
          life: 0,
          max: Q(0.16, 0.26),
          size: Q(10, 18),
          grow: Q(15, 30),
          alpha: 1,
          rot: Q(0, Math.PI * 2),
        });
      }
    }
    emitRubber(e, t, n) {
      if (this.particles.length > 420) return;
      let r = this.k;
      this.particles.push({
        kind: `rubber`,
        x: e + Q(-0.12, 0.12) * r,
        y: t,
        vx: Q(-1.2, 1.2) * r,
        vy: Q(1.5, 4) * r + Math.min(n, 120) * 0.02 * r,
        h: Q(0.04, 0.12),
        vh: Q(0.8, 2.4),
        life: 0,
        max: Q(1.1, 1.9),
        size: Q(0.03, 0.06) * r,
        grow: 0,
        alpha: Q(0.75, 0.95),
        rot: 0,
      });
    }
    emitSmoke(e, t, n) {
      this.particles.length > 520 ||
        this.particles.push({
          kind: `smoke`,
          x: e + Q(-6, 6),
          y: t + Q(-6, 6),
          vx: Q(-18, 18),
          vy: Q(-30, 6),
          life: 0,
          max: Q(1.6, 2.8),
          size: Q(18, 28),
          grow: Q(40, 64),
          alpha: Q(0.5, 0.8),
          rot: 0,
          dark: n,
        });
    }
    emitSparks(e, t, n, r) {
      for (let i = 0; i < n; i++) {
        let n =
            r === 0
              ? Q(0, Math.PI * 2)
              : r < 0
                ? Q(Math.PI * 0.6, Math.PI * 1.4)
                : Q(-0.4 * Math.PI, 0.4 * Math.PI),
          i = Q(160, 420);
        this.particles.push({
          kind: `spark`,
          x: e,
          y: t,
          vx: Math.cos(n) * i,
          vy: Math.sin(n) * i + (r === 0 ? 0 : 120),
          life: 0,
          max: Q(0.25, 0.55),
          size: 1.6,
          grow: 0,
          alpha: 1,
          rot: 0,
        });
      }
    }
    updateParticles(e, t) {
      for (let n of this.particles)
        ((n.life += e),
          (n.x += n.vx * e),
          (n.y += n.vy * e + t),
          n.kind === `smoke`
            ? ((n.size += n.grow * e),
              (n.vx *= Math.exp(-0.8 * e)),
              (n.vy *= Math.exp(-0.8 * e)))
            : n.kind === `flame` || n.kind === `spray`
              ? ((n.size += n.grow * e),
                (n.vx *= Math.exp(-2.5 * e)),
                (n.vy *= Math.exp(-2 * e)))
              : n.kind === `rubber`
                ? ((n.vh = (n.vh ?? 0) - 9.8 * e),
                  (n.h = (n.h ?? 0) + n.vh * e),
                  n.h <= 0.015
                    ? ((n.h = 0.015),
                      (n.vh = 0),
                      (n.vx *= Math.exp(-9 * e)),
                      (n.vy *= Math.exp(-9 * e)))
                    : ((n.vx *= Math.exp(-1.2 * e)),
                      (n.vy *= Math.exp(-1.2 * e))))
                : n.kind === `debris`
                  ? ((n.vx *= Math.exp(-3 * e)),
                    (n.vy *= Math.exp(-3 * e)),
                    (n.rot += e * 8))
                  : ((n.vx *= Math.exp(-4 * e)), (n.vy *= Math.exp(-4 * e))));
      this.particles = this.particles.filter(
        (e) => e.life < e.max && e.y < this.H + 120,
      );
    }
    render() {
      let e = this.ctx,
        { W: t, H: n, pz: r } = this;
      e.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      let i = he(r),
        a = pe(r),
        o = P(r);
      if (
        ((e.fillStyle = i
          ? `#161719`
          : `rgb(${Math.round(65 * (1 - a) + 12 * a)},${Math.round(98 * (1 - a) + 18 * a)},${Math.round(43 * (1 - a) + 22 * a)})`),
        e.fillRect(0, 0, t, n),
        e.save(),
        this.shake > 0.3 &&
          e.translate(Q(-1, 1) * this.shake, Q(-1, 1) * this.shake),
        this.tileDay)
      )
        for (let r = this.scroll - X; r < n; r += X)
          e.drawImage(this.tileDay, 0, r, t, X);
      this.renderSceneryOverlays(e, r, i, a);
      let s = this.player,
        c = ye(r);
      if (c > 0.05) {
        ((e.fillStyle = `rgba(10, 14, 22, ${c * 0.45})`),
          e.fillRect(this.roadX, 0, this.roadW, n),
          e.save(),
          (e.globalCompositeOperation = `lighter`));
        for (let t of this.traffic)
          if (t.y > -80 && t.y < n + 60) {
            let n = e.createLinearGradient(
              t.x,
              t.y + t.h * 0.4,
              t.x,
              t.y + t.h * 0.4 + 90,
            );
            (n.addColorStop(0, `rgba(255, 45, 30, ${c * 0.35})`),
              n.addColorStop(1, `rgba(255, 45, 30, 0)`),
              (e.fillStyle = n),
              e.fillRect(t.x - t.w * 0.35, t.y + t.h * 0.4, t.w * 0.7, 90));
          }
        (e.restore(),
          (e.strokeStyle = `rgba(215, 235, 255, ${c * 0.4})`),
          (e.lineWidth = 1.2),
          e.beginPath());
        let r = 1400 + s.speed * 5;
        for (let i = 0; i < 36; i++) {
          let a = ((i * 73 + Date.now() * 0.35) % (t + 60)) - 30,
            o = ((i * 127 + r * 0.001 * Date.now()) % (n + 100)) - 50,
            s = Q(22, 42);
          (e.moveTo(a, o), e.lineTo(a - 3, o + s));
        }
        e.stroke();
      }
      let l = $((s.speed - 170) / 170, 0, 1) * 0.28;
      if (l > 0.01) {
        ((e.strokeStyle = `rgba(255,255,255,${l})`),
          (e.lineWidth = 1.2),
          e.beginPath());
        for (let t of this.streaks)
          (e.moveTo(t.x, t.y), e.lineTo(t.x, t.y + t.len));
        e.stroke();
      }
      let u = this.highBeamTimer > 0;
      if (o || u) {
        for (let t of this.traffic)
          !t.hit &&
            t.y > -150 &&
            t.y < n + 50 &&
            this.drawHeadlights(e, t.x, t.y, t.w, t.h, t.rot, 0.45);
        this.mode === `police` &&
          this.police.y > -200 &&
          this.police.y < n + 100 &&
          this.drawHeadlights(
            e,
            this.police.x,
            this.police.y,
            this.police.w,
            this.police.h,
            0,
            0.6,
          );
        let t = u ? 1.45 : 0.85;
        this.drawHeadlights(e, s.x, this.baseY, s.w, s.h, s.rot, t, u);
      }
      for (let e of this.traffic)
        this.drawCar(
          e.img,
          e.x,
          e.y,
          e.w,
          e.h,
          e.rot,
          !1,
          e.signal,
          e.signalTimer,
          o,
        );
      if (
        (this.mode === `police` &&
          this.police.y > -220 &&
          this.police.y < n + 150 &&
          this.drawPoliceCar(
            e,
            this.police.x,
            this.police.y,
            this.police.w,
            this.police.h,
            o,
          ),
        this.drawCar(
          this.images.player,
          s.x,
          this.baseY,
          s.w,
          s.h,
          s.rot,
          this.input.brake && this.phase === `playing`,
          0,
          0,
          o,
        ),
        this.exhaustFlameTimer > 0 &&
          this.drawExhaustFlame(e, s.x, this.baseY, s.w, s.h, s.rot),
        this.renderParticles(e),
        this.renderBridgesAndGantries(e, r),
        e.restore(),
        i)
      ) {
        let r = e.createLinearGradient(0, 0, 0, n);
        (r.addColorStop(0, `rgba(8,10,14,0.6)`),
          r.addColorStop(0.3, `rgba(8,10,14,0.3)`),
          r.addColorStop(0.7, `rgba(8,10,14,0.3)`),
          r.addColorStop(1, `rgba(8,10,14,0.5)`),
          (e.fillStyle = r),
          e.fillRect(0, 0, t, n));
      } else
        a > 0.05 &&
          ((e.fillStyle = `rgba(5, 8, 18, ${a * 0.58})`),
          e.fillRect(0, 0, t, n));
      if (this.mode === `police` && this.phase === `playing`) {
        let i = r - this.police.z;
        i < 50 &&
          ((e.fillStyle = `rgba(220, 20, 20, ${(1 - i / 50) * 0.35 * (Math.sin(Date.now() * 0.012) * 0.5 + 0.5)})`),
          e.fillRect(0, 0, t, n));
      }
      this.flash > 0.02 &&
        ((e.fillStyle = `rgba(255,240,220,${this.flash * 0.6})`),
        e.fillRect(0, 0, t, n));
    }
    renderSceneryOverlays(e, t, n, r) {
      let { W: i, H: a, roadX: o, roadW: s } = this;
      if (n) {
        ((e.fillStyle = `rgba(18, 20, 24, 0.4)`), e.fillRect(o, 0, s, a));
        let t = (this.scroll * 1) % 90;
        ((e.fillStyle = `rgba(255, 245, 200, 0.85)`),
          (e.shadowColor = `rgba(255, 230, 160, 0.8)`),
          (e.shadowBlur = 10));
        for (let n = t - 90; n < a; n += 90)
          e.fillRect(o + s * 0.5 - 18, n, 36, 4);
        e.shadowBlur = 0;
      } else if (r > 0.3) {
        let t = (this.scroll * 1) % 280;
        for (let n = t - 280; n < a + 100; n += 280) {
          let t = e.createRadialGradient(
            o + s * 0.7,
            n,
            10,
            o + s * 0.7,
            n,
            110,
          );
          (t.addColorStop(0, `rgba(255, 225, 140, ${r * 0.35})`),
            t.addColorStop(1, `rgba(255, 225, 140, 0)`),
            (e.fillStyle = t),
            e.fillRect(o, n - 110, s, 220),
            (e.fillStyle = `#8a8f98`),
            e.fillRect(o + s + 6, n - 6, 4, 12));
        }
      }
    }
    renderBridgesAndGantries(e, t) {
      let { roadX: n, roadW: r, H: i } = this;
      for (let a of me) {
        let o = this.baseY - (a - t) * this.k;
        o > -80 &&
          o < i + 60 &&
          ((e.fillStyle = `#3a3e46`),
          e.fillRect(n - 16, o, r + 32, 10),
          (e.fillStyle = `#1e2025`),
          e.fillRect(n - 18, o - 4, 6, 18),
          e.fillRect(n + r + 12, o - 4, 6, 18),
          (e.fillStyle = `#115c2a`),
          (e.strokeStyle = `#ffffff`),
          (e.lineWidth = 1.2),
          e.fillRect(n + 20, o - 28, r * 0.42, 26),
          e.strokeRect(n + 20, o - 28, r * 0.42, 26),
          (e.fillStyle = `#ffffff`),
          (e.font = `bold 9px Barlow, sans-serif`),
          e.fillText(`RODOVIA REVUELTO`, n + 26, o - 16),
          (e.font = `8px Barlow, sans-serif`),
          e.fillText(`SAÍDA 1 - CAPITAL 120 KM/H`, n + 26, o - 6),
          (e.fillStyle = `rgba(0,0,0,0.22)`),
          e.fillRect(n, o + 10, r, 14));
      }
      for (let [a, o] of ve) {
        let s = this.baseY - (o - t) * this.k,
          c = this.baseY - (a - t) * this.k;
        if (c > -120 && s < i + 120) {
          let t = Math.max(45, c - s);
          ((e.fillStyle = `rgba(0,0,0,0.4)`),
            e.fillRect(n, s, r, t),
            (e.fillStyle = `#5c6068`),
            e.fillRect(n - 22, s - 8, r + 44, t * 0.4),
            (e.fillStyle = `#797e88`),
            e.fillRect(n - 22, s, r + 44, t * 0.3),
            (e.fillStyle = `#a2a8b2`),
            e.fillRect(n - 22, s - 12, r + 44, 4));
        }
      }
      for (let a of F) {
        let o = this.baseY - (a - t) * this.k;
        if (o > -90 && o < i + 60) {
          ((e.fillStyle = `#2c2f36`),
            e.fillRect(n - 16, o, r + 32, 8),
            (e.fillStyle = `#1e2025`),
            e.fillRect(n - 18, o - 3, 5, 14),
            e.fillRect(n + r + 13, o - 3, 5, 14));
          for (let t = 0; t < Ai; t++) {
            let n = this.laneX(t);
            ((e.fillStyle = `#181a20`),
              e.fillRect(n - 11, o - 14, 22, 14),
              (e.fillStyle = `#0c0d10`),
              e.beginPath(),
              e.arc(n, o - 7, 4.5, 0, Math.PI * 2),
              e.fill(),
              (e.fillStyle =
                Math.floor(Date.now() / 350) % 2 == 0 ? `#00c8ff` : `#005588`),
              e.fillRect(n - 8, o - 12, 3, 3));
          }
          let t = n + 28,
            i = o - 16;
          ((e.fillStyle = `#ffffff`),
            e.beginPath(),
            e.arc(t, i, 14, 0, Math.PI * 2),
            e.fill(),
            (e.strokeStyle = `#dd1111`),
            (e.lineWidth = 2.8),
            e.stroke(),
            (e.fillStyle = `#111111`),
            (e.font = `bold 11px Barlow, sans-serif`),
            (e.textAlign = `center`),
            e.fillText(`120`, t, i + 4),
            (e.textAlign = `start`),
            (e.fillStyle = `#0b4f8c`),
            e.fillRect(n + r - 74, o - 22, 60, 20),
            (e.strokeStyle = `#ffffff`),
            (e.lineWidth = 1),
            e.strokeRect(n + r - 74, o - 22, 60, 20),
            (e.fillStyle = `#ffffff`),
            (e.font = `bold 8px Barlow, sans-serif`),
            e.fillText(`RADAR FIXO`, n + r - 68, o - 12),
            e.fillText(`120 KM/H`, n + r - 63, o - 4));
        }
      }
    }
    drawHeadlights(e, t, n, r, i, a, o, s = !1) {
      (e.save(),
        e.translate(t, n),
        e.rotate(a),
        (e.globalCompositeOperation = `lighter`));
      let c = s ? 360 : 220,
        l = s ? 0.95 : 0.65;
      for (let t of [-1, 1]) {
        let n = t * r * 0.32,
          a = -i * 0.44,
          s = e.createRadialGradient(n, a, 4, n, a - c * 0.7, c);
        (s.addColorStop(0, `rgba(240, 248, 255, ${0.65 * o})`),
          s.addColorStop(0.3, `rgba(220, 240, 255, ${0.35 * o})`),
          s.addColorStop(1, `rgba(200, 225, 255, 0)`),
          (e.fillStyle = s),
          e.beginPath(),
          e.moveTo(n - 6, a),
          e.lineTo(n - r * l, a - c),
          e.lineTo(n + r * l, a - c),
          e.lineTo(n + 6, a),
          e.closePath(),
          e.fill());
      }
      ((e.globalCompositeOperation = `source-over`), e.restore());
    }
    drawExhaustFlame(e, t, n, r, i, a) {
      (e.save(),
        e.translate(t, n),
        e.rotate(a),
        (e.globalCompositeOperation = `lighter`));
      let o = Math.min(1, this.exhaustFlameTimer / 0.45),
        s = (28 + Math.random() * 16) * o;
      for (let t of [-1, 1]) {
        let n = t * r * 0.12,
          a = i * 0.46,
          o = e.createLinearGradient(n, a, n, a + s);
        (o.addColorStop(0, `rgba(255, 140, 20, 0.95)`),
          o.addColorStop(0.5, `rgba(255, 70, 0, 0.8)`),
          o.addColorStop(1, `rgba(255, 0, 0, 0)`),
          (e.fillStyle = o),
          e.beginPath(),
          e.moveTo(n - 7, a),
          e.lineTo(n, a + s),
          e.lineTo(n + 7, a),
          e.closePath(),
          e.fill());
        let c = e.createLinearGradient(n, a, n, a + s * 0.55);
        (c.addColorStop(0, `rgba(200, 250, 255, 1)`),
          c.addColorStop(0.4, `rgba(40, 180, 255, 0.85)`),
          c.addColorStop(1, `rgba(0, 100, 255, 0)`),
          (e.fillStyle = c),
          e.beginPath(),
          e.moveTo(n - 4, a),
          e.lineTo(n, a + s * 0.55),
          e.lineTo(n + 4, a),
          e.closePath(),
          e.fill());
      }
      ((e.globalCompositeOperation = `source-over`), e.restore());
    }
    drawCar(e, t, n, r, i, a, o, s = 0, c = 0, l = !1) {
      let u = this.ctx;
      if (
        (u.save(),
        u.translate(t, n),
        u.rotate(a),
        (u.globalAlpha = 0.5),
        u.drawImage(this.shadow, -r / 2 + 5, -i / 2 + 8, r, i * 1.04),
        (u.globalAlpha = 1),
        u.drawImage(e, -r / 2, -i / 2, r, i),
        o || l)
      ) {
        u.globalCompositeOperation = `lighter`;
        let e = o ? r * 0.32 : r * 0.18,
          t = o ? 0.9 : 0.65;
        for (let n of [-1, 1]) {
          let a = n * r * 0.32,
            o = i * 0.44,
            s = u.createRadialGradient(a, o, 0, a, o, e);
          (s.addColorStop(0, `rgba(255, 30, 20, ${t})`),
            s.addColorStop(1, `rgba(255, 0, 0, 0)`),
            (u.fillStyle = s),
            u.fillRect(a - e, o - e, e * 2, e * 2));
        }
        u.globalCompositeOperation = `source-over`;
      }
      if (s !== 0 && Math.floor(c * 4.5) % 2 == 0) {
        u.globalCompositeOperation = `lighter`;
        let e = s,
          t = e * r * 0.38,
          n = i * 0.43,
          a = u.createRadialGradient(t, n, 1, t, n, r * 0.28);
        (a.addColorStop(0, `rgba(255, 175, 0, 1)`),
          a.addColorStop(0.4, `rgba(255, 130, 0, 0.7)`),
          a.addColorStop(1, `rgba(255, 100, 0, 0)`),
          (u.fillStyle = a),
          u.fillRect(t - r * 0.28, n - r * 0.28, r * 0.56, r * 0.56));
        let o = e * r * 0.38,
          c = -i * 0.42,
          l = u.createRadialGradient(o, c, 1, o, c, r * 0.2);
        (l.addColorStop(0, `rgba(255, 175, 0, 0.9)`),
          l.addColorStop(1, `rgba(255, 120, 0, 0)`),
          (u.fillStyle = l),
          u.fillRect(o - r * 0.2, c - r * 0.2, r * 0.4, r * 0.4),
          (u.globalCompositeOperation = `source-over`));
      }
      u.restore();
    }
    drawPoliceCar(e, t, n, r, i, a) {
      (e.save(),
        e.translate(t, n),
        e.rotate(this.police.rot),
        (e.globalAlpha = 0.55),
        e.drawImage(this.shadow, -r / 2 + 5, -i / 2 + 8, r, i * 1.04),
        (e.globalAlpha = 1),
        e.drawImage(this.images.police, -r / 2, -i / 2, r, i),
        (e.globalCompositeOperation = `lighter`));
      let o = Math.floor(Date.now() / 90) % 4,
        s = o === 0 || o === 1,
        c = o === 2 || o === 3,
        l = -i * 0.05;
      if (s) {
        let t = -r * 0.2,
          n = e.createRadialGradient(t, l, 2, t, l, r * 0.45);
        (n.addColorStop(0, `rgba(50, 140, 255, 1)`),
          n.addColorStop(0.35, `rgba(20, 90, 255, 0.75)`),
          n.addColorStop(1, `rgba(0, 50, 255, 0)`),
          (e.fillStyle = n),
          e.fillRect(t - r * 0.45, l - r * 0.45, r * 0.9, r * 0.9));
      }
      if (c) {
        let t = r * 0.2,
          n = e.createRadialGradient(t, l, 2, t, l, r * 0.45);
        (n.addColorStop(0, `rgba(255, 50, 40, 1)`),
          n.addColorStop(0.35, `rgba(255, 20, 20, 0.75)`),
          n.addColorStop(1, `rgba(255, 0, 0, 0)`),
          (e.fillStyle = n),
          e.fillRect(t - r * 0.45, l - r * 0.45, r * 0.9, r * 0.9));
      }
      ((e.globalCompositeOperation = `source-over`), e.restore());
    }
    renderParticles(e) {
      for (let t of this.particles) {
        let n = t.life / t.max;
        if (t.kind === `smoke`) {
          let r = t.alpha * (n < 0.15 ? n / 0.15 : 1 - (n - 0.15) / 0.85);
          e.globalAlpha = Math.max(0, r);
          let i = t.size * 2;
          e.drawImage(
            t.dark ? this.smokeDark : this.smokeLight,
            t.x - i / 2,
            t.y - i / 2,
            i,
            i,
          );
        } else if (t.kind === `flame`) {
          ((e.globalCompositeOperation = `lighter`),
            (e.globalAlpha = Math.max(0, 1 - n)));
          let r = e.createRadialGradient(t.x, t.y, 1, t.x, t.y, t.size);
          (r.addColorStop(0, `rgba(255, 200, 100, 0.9)`),
            r.addColorStop(0.4, `rgba(255, 80, 20, 0.7)`),
            r.addColorStop(1, `rgba(255, 0, 0, 0)`),
            (e.fillStyle = r),
            e.fillRect(t.x - t.size, t.y - t.size, t.size * 2, t.size * 2),
            (e.globalCompositeOperation = `source-over`));
        } else if (t.kind === `spray`) {
          ((e.globalCompositeOperation = `lighter`),
            (e.globalAlpha = Math.max(0, t.alpha * (1 - n))));
          let r = e.createRadialGradient(t.x, t.y, 1, t.x, t.y, t.size);
          (r.addColorStop(0, `rgba(225, 240, 255, 0.65)`),
            r.addColorStop(0.5, `rgba(180, 215, 245, 0.35)`),
            r.addColorStop(1, `rgba(150, 190, 230, 0)`),
            (e.fillStyle = r),
            e.fillRect(t.x - t.size, t.y - t.size, t.size * 2, t.size * 2),
            (e.globalCompositeOperation = `source-over`));
        } else
          t.kind === `debris` &&
            ((e.globalAlpha = 1 - n),
            e.save(),
            e.translate(t.x, t.y),
            e.rotate(t.rot),
            (e.fillStyle = t.dark ? `#141416` : `#b9bec4`),
            e.fillRect(-t.size / 2, -t.size / 3, t.size, t.size * 0.66),
            e.restore());
      }
      ((e.globalAlpha = 1),
        (e.globalCompositeOperation = `lighter`),
        (e.lineCap = `round`));
      for (let t of this.particles) {
        if (t.kind !== `spark`) continue;
        let n = t.life / t.max;
        ((e.strokeStyle = `rgba(255,${Math.round(200 - n * 120)},80,${1 - n})`),
          (e.lineWidth = 2),
          e.beginPath(),
          e.moveTo(t.x, t.y),
          e.lineTo(t.x - t.vx * 0.03, t.y - t.vy * 0.03),
          e.stroke());
      }
      e.globalCompositeOperation = `source-over`;
    }
    makeShadow() {
      let e = document.createElement(`canvas`);
      ((e.width = 100), (e.height = 200));
      let t = e.getContext(`2d`);
      return (
        (t.shadowColor = `rgba(0,0,0,1)`),
        (t.shadowBlur = 12),
        (t.shadowOffsetX = 1e3),
        (t.fillStyle = `#000`),
        Bi(t, -982, 12, 64, 176, 20),
        t.fill(),
        e
      );
    }
    makeSmoke(e, t, n) {
      let r = document.createElement(`canvas`);
      r.width = r.height = 64;
      let i = r.getContext(`2d`),
        a = i.createRadialGradient(32, 32, 0, 32, 32, 32);
      return (
        a.addColorStop(0, `rgba(${e},${t},${n},1)`),
        a.addColorStop(0.45, `rgba(${e},${t},${n},0.8)`),
        a.addColorStop(0.75, `rgba(${e},${t},${n},0.35)`),
        a.addColorStop(1, `rgba(${e},${t},${n},0)`),
        (i.fillStyle = a),
        i.fillRect(0, 0, 64, 64),
        r
      );
    }
    buildTile() {
      let { W: e, dpr: t, roadX: n, roadW: r, laneW: i } = this,
        a = document.createElement(`canvas`);
      ((a.width = Math.ceil(e * t)), (a.height = Math.ceil(X * t)));
      let o = a.getContext(`2d`);
      (o.scale(t, t), (o.fillStyle = Z.grass), o.fillRect(0, 0, e, X));
      for (let t = 0; t < 1600; t++)
        ((o.fillStyle = Math.random() < 0.5 ? Z.grassDark : Z.grassLight),
          (o.globalAlpha = Q(0.3, 0.8)),
          o.fillRect(Q(0, e), Q(0, X), Q(1, 3), Q(2, 6)));
      o.globalAlpha = 1;
      let s = n - 16;
      if (s > 18)
        for (let t of [0, 1])
          for (let n = 0; n < 8; n++) {
            let n = Q(9, Math.min(22, s * 0.45)),
              r = t === 0 ? Q(n * 0.3, s - n) : e - Q(n * 0.3, s - n),
              i = Q(0, X);
            for (let e of [-720, 0, X]) this.drawTree(o, r, i + e, n);
          }
      ((o.fillStyle = Z.gravel),
        o.fillRect(n - 14, 0, 14, X),
        o.fillRect(n + r, 0, 14, X));
      for (let e of [n - 11, n + r + 6]) {
        ((o.fillStyle = Z.railShadow), o.fillRect(e + 3, 0, 5, X));
        for (let t = 0; t < X; t += 36)
          ((o.fillStyle = Z.post),
            o.fillRect(e, t, 5, 6),
            (o.fillStyle = e < n ? `#ffcc00` : `#ff3322`),
            o.fillRect(e + 1, t + 1, 2, 3));
        ((o.fillStyle = Z.rail), o.fillRect(e + 1, 0, 3, X));
      }
      ((o.fillStyle = Z.asphalt), o.fillRect(n, 0, r, X));
      for (let e = 0; e < 3200; e++)
        ((o.fillStyle = Math.random() < 0.5 ? Z.asphaltLight : Z.asphaltDark),
          (o.globalAlpha = Q(0.25, 0.7)),
          o.fillRect(Q(n, n + r), Q(0, X), Q(1, 2.2), Q(1, 2.2)));
      ((o.globalAlpha = 0.09), (o.fillStyle = `#000`));
      for (let e = 0; e < Ai; e++) {
        let t = n + i * (e + 0.5);
        (o.fillRect(t - i * 0.27 - 6, 0, 12, X),
          o.fillRect(t + i * 0.27 - 6, 0, 12, X));
      }
      ((o.globalAlpha = 1),
        (o.fillStyle = Z.line),
        o.fillRect(n + 6, 0, 3, X),
        o.fillRect(n + r - 9, 0, 3, X));
      for (let e = 1; e < Ai; e++) {
        let t = n + i * e - 1.5;
        for (let e = 0; e < X; e += Ri)
          ((o.fillStyle = Z.line),
            o.fillRect(t, e, 3, 40),
            (o.fillStyle = `rgba(255, 255, 255, 0.9)`),
            o.fillRect(t - 0.5, e + 44, 4, 3));
      }
      this.tileDay = a;
    }
    drawTree(e, t, n, r) {
      ((e.fillStyle = `rgba(0,0,0,0.28)`),
        e.beginPath(),
        e.arc(t + r * 0.35, n + r * 0.45, r, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = Z.tree),
        e.beginPath(),
        e.arc(t, n, r, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = Z.treeLight),
        e.beginPath(),
        e.arc(t - r * 0.25, n - r * 0.25, r * 0.6, 0, Math.PI * 2),
        e.fill());
    }
  };
function Bi(e, t, n, r, i, a) {
  (e.beginPath(),
    e.moveTo(t + a, n),
    e.lineTo(t + r - a, n),
    e.quadraticCurveTo(t + r, n, t + r, n + a),
    e.lineTo(t + r, n + i - a),
    e.quadraticCurveTo(t + r, n + i, t + r - a, n + i),
    e.lineTo(t + a, n + i),
    e.quadraticCurveTo(t, n + i, t, n + i - a),
    e.lineTo(t, n + a),
    e.quadraticCurveTo(t, n, t + a, n),
    e.closePath());
}
function Vi(e) {
  return new Promise((t, n) => {
    let r = new Image();
    ((r.onload = () => t(r)), (r.onerror = n), (r.src = e));
  });
}
var Hi = [
    { id: `pt-BR`, label: `Português (Brasil)`, flag: `🇧🇷` },
    { id: `pt-PT`, label: `Português (Portugal)`, flag: `🇵🇹` },
    { id: `en`, label: `English`, flag: `🇺🇸/🇬🇧` },
    { id: `it`, label: `Italiano`, flag: `🇮🇹` },
    { id: `fr`, label: `Français`, flag: `🇫🇷` },
    { id: `ja`, label: `日本語`, flag: `🇯🇵` },
  ],
  Ui = {
    "pt-BR": {
      brand: `SUPERCAR`,
      model: `HIGHWAY DASH`,
      subtitle: `RODOVIA`,
      demoBadge: `DEMO`,
      modeSelect: `MODO DE JOGO`,
      modeFree: `Modo Corrida`,
      modePolice: `Fuga da Polícia (Lamborghini Aventador)`,
      policeEscapeTag: `POLICE ESCAPE`,
      instructions: [
        { text: `Segure ACELERAR para correr` },
        { text: `Segure FREIO para frear` },
        { text: `Toque nas laterais para virar` },
        { text: `Toque na BUZINA para abrir caminho` },
      ],
      pressToContinue: `APERTE PARA CONTINUAR`,
      play: `JOGAR`,
      restart: `REINICIAR`,
      menu: `MENU`,
      paintCar: `Pintar carro, trocar de carro`,
      settings: `Configurações do jogo`,
      language: `Idioma`,
      close: `Fechar`,
      horn: `BUZINA`,
      brake: `FREIO`,
      gas: `ACELERAR`,
      record: `Recorde`,
      gear: `MARCHA`,
      policeStatus: `POLÍCIA`,
      policeSafe: `Longe`,
      policeWarn: `Atenção`,
      policeClose: `Perto`,
      policeDanger: `Muito perto!`,
      crashedTitle: `GAME OVER`,
      crashedDesc: `Você bateu!`,
      bustedTitle: `PRESO!`,
      bustedDesc: `A polícia interceptou o seu veículo!`,
      escapedTitle: `VOCÊ ESCAPOU!`,
      escapedDesc: `Você despistou a Shelby da polícia na rodovia!`,
      newRecord: `NOVO RECORDE!`,
      kmDriven: `km rodados`,
      maxSpeed: `km/h máx.`,
      demoModalTitle: `Versão DEMO`,
      demoModalMsg: `O jogo ainda está na versão DEMO! As opções de pintura, personalização e troca de carros estão sendo desenvolvidas e serão lançadas em breve nas próximas atualizações.`,
      langModalTitle: `Escolha o idioma`,
      langModalSubtitle: `Você pode alterar isso a qualquer momento nas configurações.`,
      confirm: `Confirmar`,
      boost: `BOOST`,
      highBeam: `LUZ ALTA`,
      camera: `CÂMERA`,
      camChase: `Normal`,
      camHood: `Capô`,
      camCockpit: `Cockpit`,
      camLeft: `Lateral esq.`,
      camRight: `Lateral dir.`,
      camReverse: `Retrovisor`,
      nearMiss: `FINA!`,
      combo: `COMBO`,
      speedCamera: `RADAR`,
      speedWarning: `FOTOGRAFADO!`,
      garage: `GARAGEM`,
      garageHint: `Arraste para girar • pinça ou roda do mouse para chegar mais perto`,
      garageLoading: `Carregando o carro`,
      garageError: `O carro não pôde ser carregado`,
    },
    "pt-PT": {
      brand: `SUPERCAR`,
      model: `HIGHWAY DASH`,
      subtitle: `AUTOESTRADA`,
      demoBadge: `DEMO`,
      modeSelect: `MODO DE JOGO`,
      modeFree: `Modo Corrida`,
      modePolice: `Fuga à Polícia (Lamborghini Aventador)`,
      policeEscapeTag: `POLICE ESCAPE`,
      instructions: [
        { text: `Segura ACELERAR para correr` },
        { text: `Segura TRAVÃO para travar` },
        { text: `Toca nas laterais para virar` },
        { text: `Toca na BUZINA para abrir caminho` },
      ],
      pressToContinue: `PRIMA PARA CONTINUAR`,
      play: `JOGAR`,
      restart: `REINICIAR`,
      menu: `MENU`,
      paintCar: `Pintar carro, trocar de carro`,
      settings: `Definições do jogo`,
      language: `Idioma`,
      close: `Fechar`,
      horn: `BUZINA`,
      brake: `TRAVÃO`,
      gas: `ACELERAR`,
      record: `Recorde`,
      gear: `MUDANÇA`,
      policeStatus: `POLÍCIA`,
      policeSafe: `Longe`,
      policeWarn: `Atenção`,
      policeClose: `Perto`,
      policeDanger: `Muito perto!`,
      crashedTitle: `GAME OVER`,
      crashedDesc: `Bateu!`,
      bustedTitle: `CAPTURADO!`,
      bustedDesc: `A polícia intercetou o teu carro!`,
      escapedTitle: `ESCAPASTE!`,
      escapedDesc: `Deixaste a Shelby da polícia para trás!`,
      newRecord: `NOVO RECORDE!`,
      kmDriven: `km percorridos`,
      maxSpeed: `km/h máx.`,
      demoModalTitle: `Versão DEMO`,
      demoModalMsg: `O jogo ainda se encontra na versão DEMO! As opções de pintura, personalização e troca de carros estão a ser desenvolvidas e chegarão em breve.`,
      langModalTitle: `Escolha o idioma`,
      langModalSubtitle: `Podes alterar isso a qualquer momento nas definições.`,
      confirm: `Confirmar`,
      boost: `BOOST`,
      highBeam: `MÁXIMOS`,
      camera: `CÂMARA`,
      camChase: `Normal`,
      camHood: `Capó`,
      camCockpit: `Cockpit`,
      camLeft: `Lateral esq.`,
      camRight: `Lateral dir.`,
      camReverse: `Retrovisor`,
      nearMiss: `RASANTE!`,
      combo: `COMBO`,
      speedCamera: `RADAR`,
      speedWarning: `FOTOGRAFADO!`,
      garage: `GARAGEM`,
      garageHint: `Arrasta para girar • pinça ou roda do rato para te aproximares`,
      garageLoading: `A carregar o carro`,
      garageError: `Não foi possível carregar o carro`,
    },
    en: {
      brand: `SUPERCAR`,
      model: `HIGHWAY DASH`,
      subtitle: `HIGHWAY DASH`,
      demoBadge: `DEMO`,
      modeSelect: `GAME MODE`,
      modeFree: `Highway Dash`,
      modePolice: `Police Escape (Lamborghini Aventador)`,
      policeEscapeTag: `POLICE ESCAPE`,
      instructions: [
        { text: `Hold ACCELERATE to speed up` },
        { text: `Hold BRAKE to slow down` },
        { text: `Touch screen sides to steer` },
        { text: `Tap HORN to make traffic clear path` },
      ],
      pressToContinue: `PRESS TO CONTINUE`,
      play: `PLAY`,
      restart: `RESTART`,
      menu: `MENU`,
      paintCar: `Paint car, change car`,
      settings: `Game Settings`,
      language: `Language`,
      close: `Close`,
      horn: `HORN`,
      brake: `BRAKE`,
      gas: `GAS`,
      record: `Record`,
      gear: `GEAR`,
      policeStatus: `POLICE`,
      policeSafe: `Far`,
      policeWarn: `Approaching`,
      policeClose: `Close`,
      policeDanger: `Critical!`,
      crashedTitle: `GAME OVER`,
      crashedDesc: `You crashed!`,
      bustedTitle: `BUSTED!`,
      bustedDesc: `The police intercepted your Revuelto!`,
      escapedTitle: `YOU ESCAPED!`,
      escapedDesc: `You left the police Shelby in the dust!`,
      newRecord: `NEW RECORD!`,
      kmDriven: `km driven`,
      maxSpeed: `max km/h`,
      demoModalTitle: `DEMO Version`,
      demoModalMsg: `The game is currently in DEMO version! Paint customization, body tuning and vehicle garage are under active development and will be available in upcoming updates.`,
      langModalTitle: `Select Language`,
      langModalSubtitle: `You can change this anytime from the settings menu.`,
      confirm: `Confirm`,
      boost: `BOOST`,
      highBeam: `HIGH BEAM`,
      camera: `CAMERA`,
      camChase: `Chase`,
      camHood: `Hood`,
      camCockpit: `Cockpit`,
      camLeft: `Left side`,
      camRight: `Right side`,
      camReverse: `Rearview`,
      nearMiss: `NEAR MISS!`,
      combo: `COMBO`,
      speedCamera: `SPEED TRAP`,
      speedWarning: `CAMERA FLASH!`,
      garage: `GARAGE`,
      garageHint: `Drag to spin • pinch or scroll to zoom in`,
      garageLoading: `Loading the car`,
      garageError: `The car could not be loaded`,
    },
    it: {
      brand: `SUPERCAR`,
      model: `HIGHWAY DASH`,
      subtitle: `AUTOSTRADA`,
      demoBadge: `DEMO`,
      modeSelect: `MODALITÀ DI GIOCO`,
      modeFree: `Corsa Libera`,
      modePolice: `Fuga dalla Polizia (Lamborghini Aventador)`,
      policeEscapeTag: `POLICE ESCAPE`,
      instructions: [
        { text: `Tieni premuto ACCELERATORE per correre` },
        { text: `Tieni premuto FRENO per rallentare` },
        { text: `Tocca i lati dello schermo per sterzare` },
        { text: `Premi il CLACSON per farti strada nel traffico` },
      ],
      pressToContinue: `PREMI PER CONTINUARE`,
      play: `GIOCA`,
      restart: `RICOMINCIA`,
      menu: `MENU`,
      paintCar: `Vernicia auto, cambia auto`,
      settings: `Impostazioni di gioco`,
      language: `Lingua`,
      close: `Chiudi`,
      horn: `CLACSON`,
      brake: `FRENO`,
      gas: `ACCELERA`,
      record: `Record`,
      gear: `MARCIA`,
      policeStatus: `POLIZIA`,
      policeSafe: `Lontana`,
      policeWarn: `Attenzione`,
      policeClose: `Vicina`,
      policeDanger: `Pericolo!`,
      crashedTitle: `GAME OVER`,
      crashedDesc: `Incidente!`,
      bustedTitle: `ARRESTATO!`,
      bustedDesc: `La polizia ha bloccato la tua auto!`,
      escapedTitle: `SEI SCAPPATO!`,
      escapedDesc: `Hai seminato la Shelby della polizia!`,
      newRecord: `NUOVO RECORD!`,
      kmDriven: `km percorsi`,
      maxSpeed: `km/h max`,
      demoModalTitle: `Versione DEMO`,
      demoModalMsg: `Il gioco è ancora in versione DEMO! Le opzioni di verniciatura, personalizzazione e cambio auto sono in fase di sviluppo e arriveranno presto.`,
      langModalTitle: `Scegli la lingua`,
      langModalSubtitle: `Puoi modificarla in qualsiasi momento nelle impostazioni.`,
      confirm: `Conferma`,
      boost: `BOOST`,
      highBeam: `ABBAGLIANTI`,
      camera: `TELECAMERA`,
      camChase: `Normale`,
      camHood: `Cofano`,
      camCockpit: `Cockpit`,
      camLeft: `Lato sx`,
      camRight: `Lato dx`,
      camReverse: `Retrovisore`,
      nearMiss: `A FIL DI SPADA!`,
      combo: `COMBO`,
      speedCamera: `AUTOVELOX`,
      speedWarning: `FOTO AUTOVELOX!`,
      garage: `OFFICINA`,
      garageHint: `Trascina per girare • pizzica o scorri per avvicinarti`,
      garageLoading: `Caricamento dell'auto`,
      garageError: `Impossibile caricare l'auto`,
    },
    fr: {
      brand: `SUPERCAR`,
      model: `HIGHWAY DASH`,
      subtitle: `AUTOROUTE`,
      demoBadge: `DEMO`,
      modeSelect: `MODE DE JEU`,
      modeFree: `Course Libre`,
      modePolice: `Course-Poursuite (Lamborghini Aventador)`,
      policeEscapeTag: `POLICE ESCAPE`,
      instructions: [
        { text: `Maintenez ACCÉLÉRER pour foncer` },
        { text: `Maintenez FREINER pour ralentir` },
        { text: `Touchez les côtés pour tourner` },
        { text: `Touchez le KLAXON pour libérer la voie` },
      ],
      pressToContinue: `APPUYEZ POUR CONTINUER`,
      play: `JOUER`,
      restart: `RECOMMENCER`,
      menu: `MENU`,
      paintCar: `Peindre / changer de voiture`,
      settings: `Paramètres du jeu`,
      language: `Langue`,
      close: `Fermer`,
      horn: `KLAXON`,
      brake: `FREIN`,
      gas: `ACCÉLÉRER`,
      record: `Record`,
      gear: `VITESSE`,
      policeStatus: `POLICE`,
      policeSafe: `Loin`,
      policeWarn: `Attention`,
      policeClose: `Proche`,
      policeDanger: `Danger critique!`,
      crashedTitle: `GAME OVER`,
      crashedDesc: `Accident!`,
      bustedTitle: `ARRÊTÉ!`,
      bustedDesc: `La police a intercepté votre véhicule!`,
      escapedTitle: `VOUS VOUS ÊTES ÉCHAPPÉ!`,
      escapedDesc: `Vous avez semé la Shelby de police sur l'autoroute!`,
      newRecord: `NOUVEAU RECORD!`,
      kmDriven: `km parcourus`,
      maxSpeed: `km/h max`,
      demoModalTitle: `Version DÉMO`,
      demoModalMsg: `Le jeu est encore en version DÉMO! La personnalisation de la peinture et le changement de véhicule sont en cours de développement.`,
      langModalTitle: `Choisissez la langue`,
      langModalSubtitle: `Vous pouvez changer cela à tout moment dans les paramètres.`,
      confirm: `Confirmer`,
      boost: `BOOST`,
      highBeam: `PLEINS PHARES`,
      camera: `CAMÉRA`,
      camChase: `Normale`,
      camHood: `Capot`,
      camCockpit: `Cockpit`,
      camLeft: `Côté gauche`,
      camRight: `Côté droit`,
      camReverse: `Rétroviseur`,
      nearMiss: `FRÔLEMENT!`,
      combo: `COMBO`,
      speedCamera: `RADAR`,
      speedWarning: `FLASH RADAR!`,
      garage: `GARAGE`,
      garageHint: `Fais glisser pour faire tourner • pince ou molette pour zoomer`,
      garageLoading: `Chargement de la voiture`,
      garageError: `La voiture n'a pas pu être chargée`,
    },
    ja: {
      brand: `SUPERCAR`,
      model: `HIGHWAY DASH`,
      subtitle: `ハイウェイダッシュ`,
      demoBadge: `DEMO`,
      modeSelect: `ゲームモード`,
      modeFree: `ハイウェイラン`,
      modePolice: `ポリスエスケープ (Lamborghini Aventador)`,
      policeEscapeTag: `POLICE ESCAPE`,
      instructions: [
        { text: `アクセル長押しで加速` },
        { text: `ブレーキ長押しで減速` },
        { text: `画面の両端をタップしてハンドル操作` },
        { text: `ホーンを鳴らして前方的車に進路を譲らせる` },
      ],
      pressToContinue: `押して続ける`,
      play: `スタート`,
      restart: `リトライ`,
      menu: `メニュー`,
      paintCar: `ペイント・車種変更`,
      settings: `ゲーム設定`,
      language: `言語`,
      close: `閉じる`,
      horn: `ホーン`,
      brake: `ブレーキ`,
      gas: `アクセル`,
      record: `ベスト記録`,
      gear: `ギア`,
      policeStatus: `警察車両`,
      policeSafe: `安全距離`,
      policeWarn: `接近中`,
      policeClose: `至近距離`,
      policeDanger: `緊急事態！`,
      crashedTitle: `GAME OVER`,
      crashedDesc: `クラッシュ！`,
      bustedTitle: `逮捕！`,
      bustedDesc: `警察のポルシェに追いつかれました！`,
      escapedTitle: `脱出成功！`,
      escapedDesc: `ハイウェイで警察車両を完全に振り切りました！`,
      newRecord: `新記録達成！`,
      kmDriven: `走行距離 (km)`,
      maxSpeed: `最高速度 (km/h)`,
      demoModalTitle: `DEMO版`,
      demoModalMsg: `このゲームは現在DEMO版です！車体塗装やカスタム、車種変更機能は現在開発中であり、今後のアップデートで登場予定です。`,
      langModalTitle: `言語を選択してください`,
      langModalSubtitle: `設定メニューからいつでも変更できます。`,
      confirm: `決定`,
      boost: `BOOST`,
      highBeam: `ハイビーム`,
      camera: `カメラ`,
      camChase: `ノーマル`,
      camHood: `フード`,
      camCockpit: `コックピット`,
      camLeft: `左側`,
      camRight: `右側`,
      camReverse: `バックビュー`,
      nearMiss: `ギリギリ回避!`,
      combo: `COMBO`,
      speedCamera: `速度監視カメラ`,
      speedWarning: `速度違反フラッシュ!`,
      garage: `ガレージ`,
      garageHint: `ドラッグで回転 • ピンチやホイールでズーム`,
      garageLoading: `車両を読み込み中`,
      garageError: `車両を読み込めませんでした`,
    },
  },
  Wi = `revuelto-lang`;
function Gi() {
  if (typeof window > `u`) return null;
  let e = localStorage.getItem(Wi);
  return e && e in Ui ? e : null;
}
function Ki(e) {
  typeof window > `u` || localStorage.setItem(Wi, e);
}
var qi = `revuelto-best-distance`,
  Ji = `revuelto-police-best-distance`,
  Yi = 176,
  Xi = (e) => (e / 1e3).toFixed(2),
  Zi = (e) => {
    try {
      typeof navigator < `u` && `vibrate` in navigator && navigator.vibrate(e);
    } catch {}
  };
function Qi() {
  let e = (0, L.useRef)(null),
    t = (0, L.useRef)(null),
    n = (0, L.useRef)(null),
    d = (0, L.useRef)(null),
    p = (0, L.useRef)(null),
    m = (0, L.useRef)(null),
    h = (0, L.useRef)(null),
    g = (0, L.useRef)({
      left: new Set(),
      right: new Set(),
      gas: new Set(),
      brake: new Set(),
      horn: new Set(),
      boost: new Set(),
      highBeam: new Set(),
    }),
    ne = (0, L.useRef)({
      left: !1,
      right: !1,
      gas: !1,
      brake: !1,
      horn: !1,
      boost: !1,
      highBeam: !1,
    }),
    [v, re] = (0, L.useState)(_),
    [ie, y] = (0, L.useState)(!0),
    [b, x] = (0, L.useState)(``),
    [w, T] = (0, L.useState)(null),
    [E, D] = (0, L.useState)(0),
    [O, k] = (0, L.useState)(!1),
    [A, le] = (0, L.useState)(0),
    j = O ? c(v) : v,
    M = (0, L.useRef)(ee);
  (0, L.useEffect)(() => {
    let e = !1,
      t = ae(window.location.hostname);
    (k(t), D(o(localStorage)));
    let n = a(localStorage, t);
    return (
      (M.current = n.selectedCar),
      p.current?.setCar(n.selectedCar),
      (async () => {
        (await h.current?.selectPlayerCar(n.selectedCar),
          !e && (m.current?.setPlayerCar(n.selectedCar), re(n)));
      })()
        .catch(() => {
          e || x(`Não foi possível carregar sua garagem. Tente novamente.`);
        })
        .finally(() => {
          e || y(!1);
        }),
      () => {
        e = !0;
      }
    );
  }, []);
  let [de, N] = (0, L.useState)(!1),
    pe = (e) => {
      r(
        async () => {
          let { loadCar: e } = await import("./models3d");
          return { loadCar: e };
        },
        [],
      )
        .then(({ loadCar: t }) => t(e))
        .catch(() => {});
    },
    me = (e, t = !1) => {
      if (ie) return;
      let n = l(j, e);
      if (!n && !t) {
        (pe(e), T(e));
        return;
      }
      x(``);
      let r;
      try {
        if (n) r = { owned: v.owned, selectedCar: C(j, e).selectedCar };
        else {
          let t = u(v, E, e);
          if (!t) {
            x(`Saldo insuficiente para comprar este carro.`);
            return;
          }
          ((r = t.garage),
            s(localStorage, t.balance),
            D(t.balance),
            jr.purchase());
        }
        te(localStorage, r);
      } catch (e) {
        x(
          e instanceof Error
            ? e.message
            : `Não foi possível salvar. Tente novamente.`,
        );
        return;
      }
      ((M.current = r.selectedCar),
        p.current?.setCar(r.selectedCar),
        m.current?.setPlayerCar(r.selectedCar),
        re(r),
        T(null),
        N(!0));
      let i = r.selectedCar;
      Promise.resolve(h.current?.selectPlayerCar(i))
        .catch(() => x(`Não foi possível carregar o carro. Tente novamente.`))
        .finally(() => {
          M.current === i && N(!1);
        });
    },
    [P, he] = (0, L.useState)(`loading`),
    [ge, _e] = (0, L.useState)(`free`),
    [F, ve] = (0, L.useState)({
      speed: 0,
      distance: 0,
      topSpeed: 0,
      gear: 1,
      inTunnel: !1,
      nightAmount: 0,
      rainAmount: 0,
      boostEnergy: 100,
      boostActive: !1,
      nearMissCombo: 0,
    }),
    [I, ye] = (0, L.useState)({
      left: !1,
      right: !1,
      gas: !1,
      brake: !1,
      horn: !1,
      boost: !1,
      highBeam: !1,
    }),
    [xe, Se] = (0, L.useState)(0),
    [Ce, we] = (0, L.useState)(0),
    [Te, Ee] = (0, L.useState)(null),
    [De, R] = (0, L.useState)(!1),
    [Ge, at] = (0, L.useState)(!1),
    [ot, st] = (0, L.useState)(!0),
    ct = (0, L.useRef)(null);
  if (!ct.current) {
    let e = () => {};
    ct.current = {
      wait: new Promise((t) => {
        e = t;
      }),
      open: e,
    };
  }
  let lt = (0, L.useCallback)(() => ct.current?.open(), []),
    ut = (0, L.useCallback)(() => {
      (ct.current?.open(), st(!1));
    }, []),
    z = (0, L.useRef)(!0);
  z.current = ot;
  let [dt, ft] = (0, L.useState)(`chase`),
    pt = (0, L.useCallback)(() => {
      let e = h.current?.cycleCamera();
      e && (ft(e), Zi(10));
    }, []),
    mt = (0, L.useCallback)(() => {
      at((e) => {
        let t = !e;
        return (p.current && (p.current.paused = t), t);
      });
    }, []),
    [ht, gt] = (0, L.useState)(`pt-BR`),
    [_t, vt] = (0, L.useState)(!1),
    [yt, bt] = (0, L.useState)(!1),
    [xt, St] = (0, L.useState)(!1),
    [Ct, wt] = (0, L.useState)(!1),
    [Tt, Et] = (0, L.useState)(!1),
    [Dt, Ot] = (0, L.useState)(`auto`),
    [kt, At] = (0, L.useState)(`touch`),
    [jt, Mt] = (0, L.useState)(`landscape`),
    B = ce(Dt, kt) === `pc`,
    [Nt, Pt] = (0, L.useState)({ width: 0, height: 0 }),
    Ft = !B,
    It = !B && jt === `rotate` && Nt.width > 0;
  (0, L.useEffect)(() => {
    let e = localStorage.getItem(`ui-pref`);
    (e === `pc` || e === `touch` || e === `auto`) && Ot(e);
    let t = window.matchMedia(`(pointer: coarse)`),
      n = () => {
        (At(
          se({
            touchPoints: navigator.maxTouchPoints || 0,
            coarse: t.matches,
            width: window.innerWidth,
          }),
        ),
          Mt(fe({ width: window.innerWidth, height: window.innerHeight })),
          Pt({ width: window.innerWidth, height: window.innerHeight }));
      };
    return (
      n(),
      window.addEventListener(`resize`, n),
      t.addEventListener(`change`, n),
      () => {
        (window.removeEventListener(`resize`, n),
          t.removeEventListener(`change`, n));
      }
    );
  }, []);
  let Lt = (e) => {
    (Ot(e), localStorage.setItem(`ui-pref`, e));
  };
  (0, L.useEffect)(() => {
    let t = p.current,
      n = e.current;
    !t ||
      !n ||
      (t.setBottomInset(B || Ft ? 0 : Yi),
      t.resize(n.clientWidth, n.clientHeight));
  }, [B, Ft, P]);
  let V = Ui[ht] || Ui[`pt-BR`];
  (0, L.useEffect)(() => {
    let e = Gi();
    e ? gt(e) : vt(!0);
  }, []);
  let Rt = (e) => {
      (gt(e), Ki(e), vt(!1), bt(!1));
    },
    zt = (0, L.useCallback)((e) => {
      let t = (g.current[e]?.size ?? 0) > 0 || !!ne.current[e],
        n = p.current;
      (n && (n.input[e] = t), ye((n) => (n[e] === t ? n : { ...n, [e]: t })));
    }, []);
  ((0, L.useEffect)(() => {
    let i = !1,
      a = Number(localStorage.getItem(qi) || 0),
      c = Number(localStorage.getItem(Ji) || 0);
    (Se(a), we(c));
    let l = new ci();
    m.current = l;
    let u = null,
      f = null;
    return (
      Promise.all([
        Vi(Je),
        Vi(Ye),
        Vi(Xe),
        Vi(Ze),
        Vi(Qe),
        Vi($e),
        Vi(et),
        Vi(tt),
        Vi(nt),
        Vi(rt),
      ])
        .then(([a, c, m, ee, g, te, ne, _, v, re]) => {
          if (i || !t.current || !e.current) return;
          let ie = {
              player: a,
              police: c,
              bus: m,
              suv: ee,
              m5: g,
              mustangBlue: te,
              mustangBlack: ne,
              sedan: _,
              hatch: v,
              pickup: re,
            },
            y = new zi(
              t.current,
              ie,
              {
                onHud: ve,
                onGameOver: ({
                  distance: e,
                  topSpeed: t,
                  outcome: n,
                  prize: r,
                }) => {
                  let i = n === `escaped` ? Math.max(0, Math.round(r)) : 0;
                  if ((le(i), i > 0)) {
                    let e = o(localStorage) + i;
                    (s(localStorage, e), D(e), jr.purchase());
                  }
                  let a = y.mode,
                    c = a === `police` ? Ji : qi,
                    l = e > Number(localStorage.getItem(c) || 0);
                  (l &&
                    (localStorage.setItem(c, String(Math.round(e))),
                    a === `police` ? we(e) : Se(e)),
                    Ee({ distance: e, topSpeed: t, record: l, outcome: n }),
                    he(`over`));
                },
              },
              l,
            );
          (import.meta.env.DEV && (window.__engine = y),
            (p.current = y),
            y.setCar(M.current),
            (y.hidden = z.current),
            y.setThreeD(!0),
            y.setBottomInset(Yi));
          let b = e.current;
          (y.resize(b.clientWidth, b.clientHeight),
            (be({
              userAgent: navigator.userAgent,
              memory: navigator.deviceMemory,
              cores: navigator.hardwareConcurrency || 4,
              touch: navigator.maxTouchPoints > 0,
            }) && ct.current
              ? Promise.race([
                  ct.current.wait,
                  new Promise((e) => setTimeout(e, 12e3)),
                ])
              : Promise.resolve()
            )
              .then(() =>
                r(
                  () => import("./render3d"),
                  [],
                ),
              )
              .then(({ Scene3D: e }) => {
                if (i || !n.current) return;
                let t = new e(n.current, d.current, () => {
                  b.dataset.sceneReady = `true`;
                });
                (import.meta.env.DEV && (window.__scene3d = t),
                  (f = t),
                  (h.current = t),
                  t.selectPlayerCar(M.current),
                  l.setPlayerCar(M.current),
                  t.resize(b.clientWidth, b.clientHeight),
                  (y.onRender = t.render));
              }),
            (u = new ResizeObserver(() => {
              (y.resize(b.clientWidth, b.clientHeight),
                f?.resize(b.clientWidth, b.clientHeight));
            })),
            u.observe(b),
            y.run(),
            he(`menu`));
        })
        .catch((e) => {
          console.error(`Asset load failure:`, e);
        }),
      () => {
        ((i = !0),
          u?.disconnect(),
          p.current?.stop(),
          (p.current = null),
          (h.current = null),
          f?.dispose(),
          l.dispose(),
          (m.current = null));
      }
    );
  }, []),
    (0, L.useEffect)(() => {
      let e = {
          ArrowLeft: `left`,
          KeyA: `left`,
          ArrowRight: `right`,
          KeyD: `right`,
          ArrowUp: `gas`,
          KeyW: `gas`,
          ArrowDown: `brake`,
          KeyS: `brake`,
          Space: `brake`,
          KeyH: `horn`,
          KeyB: `horn`,
        },
        t = (t) => (n) => {
          if (
            t &&
            (n.code === `Escape` || n.code === `KeyP`) &&
            P === `playing`
          ) {
            (n.preventDefault(), mt());
            return;
          }
          if (t && n.code === `KeyC`) {
            P === `playing` && (n.preventDefault(), pt());
            return;
          }
          let r = e[n.code];
          r && (n.preventDefault(), (ne.current[r] = t), zt(r));
        },
        n = t(!0),
        r = t(!1);
      return (
        window.addEventListener(`keydown`, n),
        window.addEventListener(`keyup`, r),
        () => {
          (window.removeEventListener(`keydown`, n),
            window.removeEventListener(`keyup`, r));
        }
      );
    }, [zt, P, mt, pt]));
  let Bt = (e) => {
      let t = e ?? ge;
      (m.current?.unlock(),
        m.current?.rev(),
        Ee(null),
        at(!1),
        Object.keys(g.current).forEach((e) => {
          (g.current[e]?.clear(), zt(e));
        }),
        p.current &&
          ((p.current.paused = !1), p.current.setMode(t), p.current.start()),
        he(`playing`));
    },
    Vt = () => {
      let e = !De;
      (R(e), m.current?.setMuted(e), jr.setMuted(e));
    };
  (0, L.useEffect)(() => {
    p.current && (p.current.hidden = ot);
  }, [ot, P]);
  let Ht = Dr({ title: ot, phase: P });
  ((0, L.useEffect)(() => {
    jr.setMusic(Ht);
  }, [Ht]),
    (0, L.useEffect)(() => () => jr.setMusic(!1), []));
  let Ut = (e) => {
      let t = e.target.closest(`button, [role=tab]`);
      !t ||
        t.disabled ||
        ((P !== `playing` ||
          Ge ||
          t.hasAttribute(`data-ui-sound`) ||
          Ct ||
          Tt) &&
          jr.click());
    },
    Wt = (e) => {
      let t = (t) => {
        g.current[e]?.delete(t.pointerId) && zt(e);
      };
      return {
        onPointerDown: (t) => {
          t.preventDefault();
          try {
            t.currentTarget.setPointerCapture(t.pointerId);
          } catch {}
          (g.current[e]?.add(t.pointerId), zt(e));
        },
        onPointerUp: t,
        onPointerCancel: t,
        onLostPointerCapture: t,
        onContextMenu: (e) => e.preventDefault(),
      };
    },
    Gt = P === `playing`;
  Math.min(1, F.speed / 352);
  let Kt = ge === `police` ? Ce : xe,
    qt = {
      green: {
        color: `text-emerald-400`,
        bg: `bg-emerald-500`,
        label: V.policeSafe,
      },
      yellow: {
        color: `text-yellow-400`,
        bg: `bg-yellow-500`,
        label: V.policeWarn,
      },
      orange: {
        color: `text-orange-400`,
        bg: `bg-orange-500`,
        label: V.policeClose,
      },
      red: {
        color: `text-rose-500`,
        bg: `bg-rose-500 animate-pulse`,
        label: V.policeDanger,
      },
    },
    Jt = F.policeZone && qt[F.policeZone] ? qt[F.policeZone] : qt.green,
    Yt = {
      chase: V.camChase,
      hood: V.camHood,
      cockpit: V.camCockpit,
      left: V.camLeft,
      right: V.camRight,
      reverse: V.camReverse,
    };
  return (0, q.jsx)(`main`, {
    className: K(
      `game-surface fixed flex justify-center bg-background`,
      It ? `left-0 top-0 origin-top-left` : `inset-0`,
    ),
    style: It ? ue(Nt) : void 0,
    "data-phone-rotated": It ? `` : void 0,
    onPointerDown: () => {
      (m.current?.unlock(), jr.unlock());
    },
    onClickCapture: Ut,
    children: (0, q.jsxs)(`div`, {
      ref: e,
      className: K(
        `relative h-full w-full overflow-hidden select-none`,
        B || Ft ? `max-w-none` : `max-w-[500px]`,
      ),
      children: [
        (0, q.jsx)(`canvas`, { ref: t, className: `hidden` }),
        (0, q.jsx)(`canvas`, {
          ref: n,
          className: `absolute inset-0 block h-full w-full touch-none`,
        }),
        (0, q.jsx)(`div`, {
          ref: d,
          className: `pointer-events-none absolute inset-0 bg-foreground opacity-0`,
        }),
        (Gt || P === `over`) &&
          (0, q.jsxs)(`div`, {
            className: `pointer-events-none absolute inset-x-0 top-0 z-20 bg-scrim-top px-3 pb-8 pt-[max(env(safe-area-inset-top),10px)]`,
            children: [
              (0, q.jsxs)(`div`, {
                className: `flex items-start justify-between gap-2`,
                children: [
                  (0, q.jsx)(wr, {
                    car: v.selectedCar,
                    speed: F.speed,
                    gear: F.gear,
                  }),
                  (0, q.jsxs)(`div`, {
                    className: `flex items-start gap-2`,
                    children: [
                      (0, q.jsxs)(`div`, {
                        className: `corner-cut border border-hud-border bg-hud px-3 py-1.5 text-right shadow-md`,
                        children: [
                          (0, q.jsxs)(`div`, {
                            className: `font-display text-2xl sm:text-3xl leading-none tabular-nums text-foreground`,
                            children: [
                              Xi(F.distance),
                              (0, q.jsx)(`span`, {
                                className: `ml-1 text-sm text-primary`,
                                children: `KM`,
                              }),
                            ],
                          }),
                          (0, q.jsxs)(`div`, {
                            className: `mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,
                            children: [V.record, `: `, Xi(Kt), ` km`],
                          }),
                        ],
                      }),
                      (0, q.jsx)(J, {
                        variant: `hud`,
                        size: `icon`,
                        className: `pointer-events-auto h-10 w-10 border border-hud-border bg-hud text-foreground hover:bg-secondary/70 shadow-md`,
                        onClick: mt,
                        "data-ui-sound": !0,
                        "aria-label": Ge ? `Continuar` : `Pausar`,
                        children: Ge
                          ? (0, q.jsx)(Ie, { className: `size-5 text-primary` })
                          : (0, q.jsx)(Fe, { className: `size-5` }),
                      }),
                      (0, q.jsx)(J, {
                        variant: `hud`,
                        size: `icon`,
                        className: `pointer-events-auto h-10 w-10 border border-hud-border bg-hud text-foreground hover:bg-secondary/70 shadow-md`,
                        onClick: Vt,
                        "aria-label": De ? `Unmute` : `Mute`,
                        children: De
                          ? (0, q.jsx)(We, { className: `size-5` })
                          : (0, q.jsx)(Ue, { className: `size-5` }),
                      }),
                    ],
                  }),
                ],
              }),
              ge === `police` &&
                F.policeGap !== void 0 &&
                (0, q.jsxs)(`div`, {
                  className: `pointer-events-none fixed inset-x-0 top-1 z-30 mx-auto max-w-[320px] corner-cut border border-hud-border bg-hud/90 px-3 py-1.5 shadow-lg`,
                  children: [
                    (0, q.jsxs)(`div`, {
                      className: `flex items-center justify-between text-[11px] font-bold tracking-wider`,
                      children: [
                        (0, q.jsxs)(`div`, {
                          className: `flex items-center gap-1.5 text-foreground`,
                          children: [
                            (0, q.jsx)(ze, {
                              className: `size-3.5 text-rose-500 animate-pulse`,
                            }),
                            (0, q.jsx)(`span`, { children: V.policeStatus }),
                          ],
                        }),
                        (0, q.jsxs)(`div`, {
                          className: `flex items-center gap-1.5`,
                          children: [
                            (0, q.jsx)(`span`, {
                              className: K(
                                `text-xs font-display tracking-wider`,
                                Jt.color,
                              ),
                              children: Jt.label,
                            }),
                            (0, q.jsxs)(`span`, {
                              className: `tabular-nums text-[10px] text-muted-foreground`,
                              children: [`(`, Math.round(F.policeGap), `m)`],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, q.jsx)(`div`, {
                      className: `mt-1 h-1.5 w-full bg-secondary/80 rounded-full overflow-hidden flex`,
                      children: (0, q.jsx)(`div`, {
                        className: K(
                          `h-full transition-all duration-150`,
                          Jt.bg,
                        ),
                        style: {
                          width: `${Math.min(100, Math.max(6, (F.escapeProgress ?? 0) * 100))}%`,
                        },
                      }),
                    }),
                    (F.prize ?? 0) > 0 &&
                      (0, q.jsxs)(`div`, {
                        className: `mt-1 text-center font-display text-sm tabular-nums tracking-wider text-primary`,
                        children: [`PRÊMIO SE ESCAPAR: `, i(F.prize ?? 0)],
                      }),
                  ],
                }),
              Gt &&
                F.nearMissEvent &&
                (0, q.jsx)(`div`, {
                  className: K(
                    `pointer-events-none fixed inset-x-0 z-30 flex justify-center animate-rise-in`,
                    ge === `police` ? `top-14` : `top-1`,
                  ),
                  children: (0, q.jsxs)(`div`, {
                    className: `corner-cut flex items-center gap-2.5 border-2 border-primary/70 bg-black/85 backdrop-blur-xs px-4 py-1.5 shadow-glow`,
                    children: [
                      (0, q.jsx)(Me, {
                        className: `size-5 text-primary animate-pulse`,
                      }),
                      (0, q.jsxs)(`div`, {
                        className: `flex flex-col items-center`,
                        children: [
                          (0, q.jsxs)(`span`, {
                            className: `font-display text-2xl tracking-wider text-primary drop-shadow-md leading-none`,
                            children: [
                              V.nearMiss,
                              `!`,
                              ` `,
                              F.nearMissEvent.combo > 1
                                ? `x${F.nearMissEvent.combo}`
                                : ``,
                            ],
                          }),
                          (0, q.jsxs)(`span`, {
                            className: `text-[10px] font-bold text-foreground/90 tracking-widest uppercase`,
                            children: [
                              `+`,
                              F.nearMissEvent.pts,
                              ` PTS • NITRO +20%`,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          }),
        Gt &&
          Ft &&
          (0, q.jsxs)(`div`, {
            className: `pointer-events-none absolute inset-0 z-10`,
            children: [
              (0, q.jsxs)(`div`, {
                className: `pointer-events-auto absolute bottom-[max(env(safe-area-inset-bottom),14px)] left-[max(env(safe-area-inset-left),18px)] flex flex-col items-start gap-2`,
                children: [
                  (0, q.jsxs)(`button`, {
                    type: `button`,
                    ...Wt(`horn`),
                    "aria-label": V.horn,
                    className: K(
                      `corner-cut flex items-center gap-1.5 border border-hud-border px-4 py-1.5 shadow-lg transition-all duration-75`,
                      I.horn
                        ? `scale-95 border-primary bg-primary text-primary-foreground shadow-glow`
                        : `bg-hud/90 text-foreground/90`,
                    ),
                    children: [
                      (0, q.jsx)(He, { className: `size-4 text-primary` }),
                      (0, q.jsx)(`span`, {
                        className: `font-display text-xs tracking-widest`,
                        children: V.horn,
                      }),
                    ],
                  }),
                  (0, q.jsx)(`div`, {
                    className: `flex gap-3`,
                    children: [`left`, `right`].map((e) =>
                      (0, q.jsx)(
                        `button`,
                        {
                          type: `button`,
                          ...Wt(e),
                          "aria-label":
                            e === `left` ? `Steer Left` : `Steer Right`,
                          className: K(
                            `flex size-[min(92px,26vh)] items-center justify-center rounded-full border-2 backdrop-blur-xs transition-transform duration-75 select-none`,
                            I[e]
                              ? `scale-95 border-primary bg-steer-active text-primary`
                              : `border-hud-border bg-hud/70 text-foreground/85`,
                          ),
                          children:
                            e === `left`
                              ? (0, q.jsx)(Ae, {
                                  className: `size-12`,
                                  strokeWidth: 2.5,
                                })
                              : (0, q.jsx)(je, {
                                  className: `size-12`,
                                  strokeWidth: 2.5,
                                }),
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
              (0, q.jsxs)(`div`, {
                className: `pointer-events-auto absolute bottom-[max(env(safe-area-inset-bottom),14px)] right-[max(env(safe-area-inset-right),18px)] flex flex-col items-end gap-2`,
                children: [
                  (0, q.jsxs)(`button`, {
                    type: `button`,
                    onClick: pt,
                    "aria-label": V.camera,
                    className: `corner-cut flex items-center gap-1.5 border border-hud-border bg-hud/90 px-4 py-1.5 text-foreground/90 shadow-lg active:scale-95`,
                    children: [
                      (0, q.jsx)(Oe, { className: `size-4 text-primary` }),
                      (0, q.jsx)(`span`, {
                        className: `font-display text-xs tracking-widest`,
                        children: Yt[dt],
                      }),
                    ],
                  }),
                  (0, q.jsxs)(`div`, {
                    className: `flex items-end gap-3`,
                    children: [
                      (0, q.jsxs)(`button`, {
                        type: `button`,
                        ...Wt(`brake`),
                        "aria-label": V.brake,
                        className: K(
                          `corner-cut flex h-[min(96px,27vh)] w-[min(84px,24vh)] flex-col items-center justify-end border-2 pb-2 transition-transform duration-75 select-none`,
                          I.brake
                            ? `translate-y-1 scale-95 border-brake bg-brake/30`
                            : `border-pedal-ridge bg-pedal`,
                        ),
                        children: [
                          (0, q.jsx)(`div`, {
                            className: `pedal-ridges mb-1.5 h-[40%] w-[78%]`,
                          }),
                          (0, q.jsx)(`span`, {
                            className: K(
                              `font-display text-sm tracking-widest`,
                              I.brake ? `text-brake` : `text-foreground`,
                            ),
                            children: V.brake,
                          }),
                        ],
                      }),
                      (0, q.jsxs)(`button`, {
                        type: `button`,
                        ...Wt(`gas`),
                        "aria-label": V.gas,
                        className: K(
                          `corner-cut flex h-[min(128px,36vh)] w-[min(84px,24vh)] flex-col items-center justify-end border-2 pb-2 transition-transform duration-75 select-none`,
                          I.gas
                            ? `translate-y-1 scale-95 border-pedal-active bg-primary/25`
                            : `border-pedal-ridge bg-pedal`,
                        ),
                        children: [
                          (0, q.jsx)(`div`, {
                            className: `pedal-ridges mb-1.5 h-[50%] w-[72%]`,
                          }),
                          (0, q.jsx)(`span`, {
                            className: K(
                              `font-display text-sm tracking-wider`,
                              I.gas ? `text-primary` : `text-foreground`,
                            ),
                            children: V.gas,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        Gt &&
          !Ft &&
          (0, q.jsxs)(`div`, {
            className: `absolute inset-0 z-10 pointer-events-none`,
            children: [
              !B &&
                [`left`, `right`].map((e) =>
                  (0, q.jsx)(
                    `div`,
                    {
                      ...Wt(e),
                      "aria-label": e === `left` ? `Steer Left` : `Steer Right`,
                      role: `button`,
                      className: K(
                        `pointer-events-auto absolute bottom-0 top-[22%] flex w-[26%] items-center transition-colors duration-100 cursor-pointer`,
                        e === `left`
                          ? `left-0 justify-start pl-2`
                          : `right-0 justify-end pr-2`,
                        I[e] ? `bg-steer-active` : `bg-transparent`,
                      ),
                      children: (0, q.jsx)(`div`, {
                        className: K(
                          `flex h-16 w-16 items-center justify-center rounded-full bg-black/20 backdrop-blur-xs transition-transform border border-white/10`,
                          I[e]
                            ? `scale-110 text-primary border-primary/50`
                            : `text-foreground/75`,
                        ),
                        children:
                          e === `left`
                            ? (0, q.jsx)(Ae, {
                                className: `h-12 w-12`,
                                strokeWidth: 2.5,
                              })
                            : (0, q.jsx)(je, {
                                className: `h-12 w-12`,
                                strokeWidth: 2.5,
                              }),
                      }),
                    },
                    e,
                  ),
                ),
              (0, q.jsxs)(`div`, {
                className: `pointer-events-auto absolute inset-x-0 bottom-0 flex flex-col items-center justify-end px-4 pb-[max(env(safe-area-inset-bottom),14px)]`,
                style: { height: B ? `auto` : Yi },
                children: [
                  (0, q.jsxs)(`div`, {
                    className: `mb-2 flex w-full items-center justify-center gap-3`,
                    children: [
                      (0, q.jsxs)(`button`, {
                        type: `button`,
                        ...Wt(`horn`),
                        "aria-label": V.horn,
                        className: K(
                          `corner-cut flex items-center justify-center gap-2 px-6 py-2 border border-hud-border transition-all duration-75 active:scale-95 shadow-lg`,
                          I.horn
                            ? `border-primary bg-primary text-primary-foreground font-bold scale-95 shadow-glow`
                            : `bg-hud/90 text-foreground/90 hover:bg-secondary`,
                        ),
                        children: [
                          (0, q.jsx)(He, { className: `size-4 text-primary` }),
                          (0, q.jsx)(`span`, {
                            className: `font-display text-sm tracking-widest`,
                            children: V.horn,
                          }),
                        ],
                      }),
                      (0, q.jsxs)(`button`, {
                        type: `button`,
                        onClick: pt,
                        "aria-label": V.camera,
                        className: `corner-cut flex items-center justify-center gap-2 px-4 py-2 border border-hud-border bg-hud/90 text-foreground/90 hover:bg-secondary transition-all duration-75 active:scale-95 shadow-lg`,
                        children: [
                          (0, q.jsx)(Oe, { className: `size-4 text-primary` }),
                          (0, q.jsx)(`span`, {
                            className: `font-display text-sm tracking-widest`,
                            children: Yt[dt],
                          }),
                        ],
                      }),
                    ],
                  }),
                  B &&
                    (0, q.jsx)(`p`, {
                      className: `rounded bg-hud/80 px-3 py-1 font-display text-xs tracking-widest text-foreground/80`,
                      children: `W / ↑ · S / ↓ / ESPAÇO · A D / ← → · H · C · ESC`,
                    }),
                  (0, q.jsxs)(`div`, {
                    className: K(
                      `flex w-full items-end justify-center gap-4`,
                      B && `hidden`,
                    ),
                    children: [
                      (0, q.jsxs)(`button`, {
                        type: `button`,
                        ...Wt(`brake`),
                        "aria-label": V.brake,
                        className: K(
                          `corner-cut flex h-[98px] w-[42%] max-w-[110px] flex-col items-center justify-end border-2 pb-2 transition-transform duration-75 select-none`,
                          I.brake
                            ? `translate-y-1 scale-95 border-brake bg-brake/30`
                            : `border-pedal-ridge bg-pedal hover:brightness-110`,
                        ),
                        children: [
                          (0, q.jsx)(`div`, {
                            className: `pedal-ridges mb-1.5 h-11 w-[78%]`,
                          }),
                          (0, q.jsx)(`span`, {
                            className: K(
                              `font-display text-base tracking-widest`,
                              I.brake ? `text-brake` : `text-foreground`,
                            ),
                            children: V.brake,
                          }),
                        ],
                      }),
                      (0, q.jsxs)(`button`, {
                        type: `button`,
                        ...Wt(`gas`),
                        "aria-label": V.gas,
                        className: K(
                          `corner-cut flex h-[126px] w-[42%] max-w-[100px] flex-col items-center justify-end border-2 pb-2 transition-transform duration-75 select-none`,
                          I.gas
                            ? `translate-y-1 scale-95 border-pedal-active bg-primary/25`
                            : `border-pedal-ridge bg-pedal hover:brightness-110`,
                        ),
                        children: [
                          (0, q.jsx)(`div`, {
                            className: `pedal-ridges mb-1.5 h-16 w-[72%]`,
                          }),
                          (0, q.jsx)(`span`, {
                            className: K(
                              `font-display text-base tracking-wider`,
                              I.gas ? `text-primary` : `text-foreground`,
                            ),
                            children: V.gas,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        P === `menu` &&
          (0, q.jsx)(`img`, {
            src: it.url,
            alt: `Supercar Highway Dash`,
            width: 680,
            height: 540,
            className: `title-logo pointer-events-none absolute left-[max(env(safe-area-inset-left),16px)] top-[max(env(safe-area-inset-top),12px)] z-[31] h-14 w-auto sm:h-16`,
          }),
        P === `menu` &&
          (0, q.jsx)(`div`, {
            className: K(
              `absolute inset-0 z-30 flex flex-col overflow-y-auto`,
              B
                ? `bg-scrim backdrop-blur-[3px]`
                : Ft
                  ? `flex-row bg-scrim`
                  : `justify-between`,
            ),
            children: (0, q.jsxs)(`div`, {
              className: K(
                B
                  ? `m-auto flex w-full max-w-md flex-col gap-3 px-4 py-6`
                  : `contents`,
              ),
              children: [
                (0, q.jsxs)(`div`, {
                  className: K(
                    `animate-rise-in px-6 text-center`,
                    B
                      ? `pb-2 pt-2 drop-shadow-[0_2px_8px_var(--color-background)]`
                      : Ft
                        ? `flex w-[44%] shrink-0 flex-col justify-center py-4 pl-[max(env(safe-area-inset-left),24px)]`
                        : `bg-scrim-top pb-6 pt-[max(env(safe-area-inset-top),24px)]`,
                  ),
                  children: [
                    (0, q.jsxs)(`div`, {
                      className: `mx-auto mb-2 flex items-center justify-center gap-2`,
                      children: [
                        (0, q.jsx)(`span`, {
                          className: `rounded bg-primary/20 px-2 py-0.5 text-[11px] font-bold tracking-widest text-primary border border-primary/30`,
                          children: V.demoBadge,
                        }),
                        (0, q.jsxs)(`button`, {
                          onClick: () => bt(!0),
                          className: `flex items-center gap-1 rounded bg-secondary/80 px-2 py-0.5 text-xs text-foreground/80 hover:bg-secondary border border-hud-border transition-colors`,
                          children: [
                            (0, q.jsx)(Ne, {
                              className: `size-3 text-primary`,
                            }),
                            (0, q.jsx)(`span`, {
                              children: Hi.find((e) => e.id === ht)?.flag,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, q.jsx)(`h1`, {
                      className: `sr-only`,
                      children: `Supercar Highway Dash`,
                    }),
                  ],
                }),
                (0, q.jsxs)(`div`, {
                  className: K(
                    `animate-rise-in flex flex-col items-center gap-4 px-6 text-center`,
                    B
                      ? `corner-cut border border-hud-border bg-hud py-6 shadow-lg backdrop-blur-md`
                      : Ft
                        ? `min-h-0 flex-1 justify-center gap-3 overflow-y-auto py-4 pr-[max(env(safe-area-inset-right),24px)]`
                        : `bg-scrim-bottom pb-[max(env(safe-area-inset-bottom),24px)] pt-6`,
                  ),
                  children: [
                    (0, q.jsxs)(`div`, {
                      className: `w-full max-w-xs space-y-1.5`,
                      children: [
                        (0, q.jsx)(`p`, {
                          className: `text-[11px] font-bold tracking-widest text-muted-foreground uppercase`,
                          children: V.modeSelect,
                        }),
                        (0, q.jsxs)(`div`, {
                          className: `grid grid-cols-2 gap-2`,
                          children: [
                            (0, q.jsxs)(`button`, {
                              type: `button`,
                              onClick: () => _e(`free`),
                              className: K(
                                `corner-cut flex flex-col items-center justify-center py-2 px-2 border transition-all text-xs font-bold`,
                                ge === `free`
                                  ? `border-primary bg-primary/20 text-primary shadow-glow`
                                  : `border-hud-border bg-hud text-muted-foreground hover:bg-secondary`,
                              ),
                              children: [
                                (0, q.jsx)(qe, { className: `size-4 mb-1` }),
                                (0, q.jsx)(`span`, { children: V.modeFree }),
                              ],
                            }),
                            (0, q.jsxs)(`button`, {
                              type: `button`,
                              onClick: () => _e(`police`),
                              className: K(
                                `corner-cut flex flex-col items-center justify-center py-2 px-2 border transition-all text-xs font-bold`,
                                ge === `police`
                                  ? `border-rose-500 bg-rose-500/25 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.4)]`
                                  : `border-hud-border bg-hud text-muted-foreground hover:bg-secondary`,
                              ),
                              children: [
                                (0, q.jsx)(ze, {
                                  className: `size-4 mb-1 text-rose-500`,
                                }),
                                (0, q.jsx)(`span`, { children: V.modePolice }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, q.jsx)(`ul`, {
                      className: K(
                        `space-y-1 text-xs font-medium text-foreground/80 max-w-xs`,
                        Ft && `hidden`,
                      ),
                      children: V.instructions.map((e, t) =>
                        (0, q.jsxs)(
                          `li`,
                          {
                            className: `flex items-center justify-center gap-1.5`,
                            children: [
                              (0, q.jsx)(`span`, {
                                className: `size-1.5 rounded-full bg-primary`,
                              }),
                              (0, q.jsx)(`span`, { children: e.text }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                    (0, q.jsx)(J, {
                      variant: `race`,
                      size: `xl`,
                      className: K(
                        `w-full max-w-xs text-xl font-display tracking-widest shadow-glow`,
                        Ft ? `py-5` : `py-6`,
                      ),
                      disabled: ie,
                      onClick: () => Bt(),
                      children: V.play,
                    }),
                    (0, q.jsxs)(`div`, {
                      className: K(
                        `w-full max-w-xs gap-2`,
                        Ft ? `grid grid-cols-2` : `flex flex-col`,
                      ),
                      children: [
                        (0, q.jsxs)(J, {
                          variant: `outline`,
                          size: `sm`,
                          className: `w-full border-primary/40 bg-hud/80 text-foreground hover:bg-secondary text-xs`,
                          onClick: () => wt(!0),
                          children: [
                            (0, q.jsx)(ke, {
                              className: `size-3.5 mr-1.5 text-primary`,
                            }),
                            V.garage,
                          ],
                        }),
                        (0, q.jsxs)(J, {
                          variant: `outline`,
                          size: `sm`,
                          className: `w-full border-primary/40 bg-hud/80 text-foreground hover:bg-secondary text-xs`,
                          onClick: () => Et(!0),
                          children: [
                            (0, q.jsx)(Be, {
                              className: `size-3.5 mr-1.5 text-primary`,
                            }),
                            `Loja`,
                          ],
                        }),
                        (0, q.jsxs)(J, {
                          variant: `outline`,
                          size: `sm`,
                          className: `w-full border-hud-border bg-hud/80 text-foreground hover:bg-secondary text-xs`,
                          onClick: () => wt(!0),
                          children: [
                            (0, q.jsx)(Pe, {
                              className: `size-3.5 mr-1.5 text-primary`,
                            }),
                            V.paintCar,
                          ],
                        }),
                        (0, q.jsxs)(J, {
                          variant: `ghost`,
                          size: `sm`,
                          className: `w-full text-xs text-muted-foreground hover:text-foreground`,
                          onClick: () => bt(!0),
                          children: [
                            (0, q.jsx)(Re, { className: `size-3.5 mr-1.5` }),
                            V.settings,
                          ],
                        }),
                      ],
                    }),
                    (0, q.jsxs)(`p`, {
                      className: `font-display text-lg tabular-nums tracking-wider text-primary`,
                      "aria-label": `Seu saldo`,
                      children: [
                        `SALDO: `,
                        O ? `GRÁTIS (DESENVOLVEDOR)` : i(E),
                      ],
                    }),
                    Kt > 0 &&
                      (0, q.jsxs)(`p`, {
                        className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground`,
                        children: [V.record, `: `, Xi(Kt), ` km`],
                      }),
                  ],
                }),
              ],
            }),
          }),
        P === `over` &&
          Te &&
          (0, q.jsx)(`div`, {
            className: `absolute inset-0 z-30 flex items-center justify-center overflow-y-auto bg-scrim px-6 py-4`,
            children: (0, q.jsxs)(`div`, {
              className: `animate-rise-in m-auto w-full max-w-xs text-center`,
              children: [
                Te.outcome === `escaped`
                  ? (0, q.jsxs)(q.Fragment, {
                      children: [
                        (0, q.jsx)(Ve, {
                          className: `mx-auto size-14 text-emerald-400 mb-2 animate-bounce`,
                        }),
                        (0, q.jsx)(`h2`, {
                          className: `font-display text-5xl leading-none text-emerald-400`,
                          children: V.escapedTitle,
                        }),
                        (0, q.jsx)(`p`, {
                          className: `mt-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300`,
                          children: V.escapedDesc,
                        }),
                      ],
                    })
                  : Te.outcome === `busted`
                    ? (0, q.jsxs)(q.Fragment, {
                        children: [
                          (0, q.jsx)(ze, {
                            className: `mx-auto size-14 text-rose-500 mb-2 animate-pulse`,
                          }),
                          (0, q.jsx)(`h2`, {
                            className: `font-display text-6xl leading-none text-rose-500`,
                            children: V.bustedTitle,
                          }),
                          (0, q.jsx)(`p`, {
                            className: `mt-1 text-xs font-medium uppercase tracking-[0.2em] text-rose-300`,
                            children: V.bustedDesc,
                          }),
                        ],
                      })
                    : (0, q.jsxs)(q.Fragment, {
                        children: [
                          (0, q.jsx)(`h2`, {
                            className: `font-display text-6xl leading-none text-brake`,
                            children: V.crashedTitle,
                          }),
                          (0, q.jsx)(`p`, {
                            className: `mt-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground`,
                            children: V.crashedDesc,
                          }),
                        ],
                      }),
                Te.outcome === `escaped` &&
                  A > 0 &&
                  (0, q.jsxs)(`p`, {
                    className: `mt-3 font-display text-3xl tabular-nums text-primary`,
                    role: `status`,
                    children: [`+`, i(A)],
                  }),
                Te.record &&
                  (0, q.jsx)(`p`, {
                    className: `animate-pulse-soft mt-3 font-display text-xl tracking-widest text-primary`,
                    children: V.newRecord,
                  }),
                (0, q.jsxs)(`div`, {
                  className: `mt-4 grid grid-cols-2 gap-2`,
                  children: [
                    (0, q.jsxs)(`div`, {
                      className: `corner-cut border border-hud-border bg-hud px-3 py-2.5`,
                      children: [
                        (0, q.jsx)(`div`, {
                          className: `font-display text-3xl leading-none tabular-nums`,
                          children: Xi(Te.distance),
                        }),
                        (0, q.jsx)(`div`, {
                          className: `mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,
                          children: V.kmDriven,
                        }),
                      ],
                    }),
                    (0, q.jsxs)(`div`, {
                      className: `corner-cut border border-hud-border bg-hud px-3 py-2.5`,
                      children: [
                        (0, q.jsx)(`div`, {
                          className: `font-display text-3xl leading-none tabular-nums`,
                          children: Math.round(Te.topSpeed),
                        }),
                        (0, q.jsx)(`div`, {
                          className: `mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,
                          children: V.maxSpeed,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, q.jsxs)(`div`, {
                  className: `mt-5 space-y-2`,
                  children: [
                    (0, q.jsxs)(J, {
                      variant: `race`,
                      size: `xl`,
                      className: `w-full text-base font-display tracking-widest`,
                      onClick: () => Bt(),
                      children: [
                        (0, q.jsx)(Le, { className: `size-5 mr-1` }),
                        ` `,
                        V.restart,
                      ],
                    }),
                    (0, q.jsx)(J, {
                      variant: `outline`,
                      size: `default`,
                      className: `w-full border-hud-border bg-hud text-foreground hover:bg-secondary text-sm`,
                      onClick: () => he(`menu`),
                      children: V.menu,
                    }),
                  ],
                }),
                (0, q.jsxs)(`p`, {
                  className: `mt-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground`,
                  children: [V.record, `: `, Xi(Kt), ` km`],
                }),
              ],
            }),
          }),
        Ge &&
          P === `playing` &&
          (0, q.jsx)(`div`, {
            className: `absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4`,
            children: (0, q.jsxs)(`div`, {
              className: `w-full max-w-sm corner-cut border-2 border-primary/60 bg-card p-6 shadow-2xl text-center animate-rise-in`,
              children: [
                (0, q.jsx)(`h2`, {
                  className: `font-display text-4xl text-primary tracking-wider mb-1`,
                  children: `JOGO PAUSADO`,
                }),
                (0, q.jsx)(`p`, {
                  className: `text-xs text-muted-foreground mb-6 uppercase tracking-widest font-semibold`,
                  children: `Revuelto Highway Dash 3D`,
                }),
                (0, q.jsxs)(`div`, {
                  className: `space-y-3`,
                  children: [
                    (0, q.jsxs)(J, {
                      className: `w-full py-6 text-lg font-display tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 corner-cut font-bold shadow-glow`,
                      onClick: mt,
                      children: [
                        (0, q.jsx)(Ie, {
                          className: `mr-2 size-5 fill-current`,
                        }),
                        `CONTINUAR`,
                      ],
                    }),
                    (0, q.jsxs)(J, {
                      variant: `outline`,
                      className: `w-full py-5 font-display tracking-wider border-hud-border bg-hud text-foreground hover:bg-secondary corner-cut text-sm`,
                      onClick: () => Bt(ge),
                      children: [
                        (0, q.jsx)(Le, { className: `mr-2 size-4` }),
                        `REINICIAR CORRIDA`,
                      ],
                    }),
                    (0, q.jsxs)(J, {
                      variant: `outline`,
                      className: `w-full py-5 font-display tracking-wider border-hud-border bg-hud text-foreground hover:bg-secondary corner-cut text-sm`,
                      onClick: Vt,
                      children: [
                        De
                          ? (0, q.jsx)(We, {
                              className: `mr-2 size-4 text-brake`,
                            })
                          : (0, q.jsx)(Ue, {
                              className: `mr-2 size-4 text-primary`,
                            }),
                        De ? `ATIVAR SOM` : `DESATIVAR SOM`,
                      ],
                    }),
                    (0, q.jsx)(J, {
                      variant: `ghost`,
                      className: `w-full py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground`,
                      onClick: () => {
                        (at(!1),
                          p.current && (p.current.paused = !1),
                          he(`menu`));
                      },
                      children: V.menu,
                    }),
                  ],
                }),
              ],
            }),
          }),
        P === `loading` &&
          (0, q.jsxs)(`div`, {
            className: `absolute inset-0 z-30 flex flex-col items-center justify-center bg-background/95`,
            children: [
              (0, q.jsx)(Me, {
                className: `size-12 text-primary animate-pulse mb-3`,
              }),
              (0, q.jsx)(`p`, {
                className: `animate-pulse-soft font-display text-2xl tracking-[0.3em] text-primary`,
                children: `CARREGANDO`,
              }),
            ],
          }),
        Ct &&
          (0, q.jsx)(dr, {
            labels: {
              title: V.garage,
              hint: V.garageHint,
              loading: V.garageLoading,
              error: V.garageError,
              close: V.close,
            },
            selectedCar: v.selectedCar,
            owned: j.owned,
            busy: ie,
            onSelect: (e) => {
              me(e);
            },
            onClose: () => {
              (wt(!1), h.current?.refreshCarCustom());
            },
          }),
        xt &&
          (0, q.jsx)(`div`, {
            className: `absolute inset-0 z-40 flex items-center justify-center bg-black/80 px-4`,
            children: (0, q.jsxs)(`div`, {
              className: `corner-cut border border-primary/50 bg-card p-5 max-w-sm text-center shadow-2xl animate-rise-in`,
              children: [
                (0, q.jsx)(Pe, {
                  className: `mx-auto size-10 text-primary mb-2`,
                }),
                (0, q.jsx)(`h3`, {
                  className: `font-display text-2xl tracking-wide text-foreground`,
                  children: V.demoModalTitle,
                }),
                (0, q.jsx)(`p`, {
                  className: `mt-2 text-xs leading-relaxed text-muted-foreground`,
                  children: V.demoModalMsg,
                }),
                (0, q.jsx)(`div`, {
                  className: `mt-5`,
                  children: (0, q.jsx)(J, {
                    variant: `default`,
                    className: `w-full font-bold text-xs`,
                    onClick: () => St(!1),
                    children: V.close,
                  }),
                }),
              ],
            }),
          }),
        !ot &&
          (_t || yt) &&
          (0, q.jsx)(`div`, {
            className: `absolute inset-0 z-50 flex items-center justify-center bg-black/85 px-4`,
            children: (0, q.jsxs)(`div`, {
              className: `corner-cut border border-hud-border bg-card p-5 w-full max-w-sm shadow-2xl animate-rise-in`,
              children: [
                (0, q.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-3 border-b border-border`,
                  children: [
                    (0, q.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, q.jsx)(Ne, { className: `size-5 text-primary` }),
                        (0, q.jsx)(`h3`, {
                          className: `font-display text-xl tracking-wider text-foreground`,
                          children: V.langModalTitle,
                        }),
                      ],
                    }),
                    yt &&
                      (0, q.jsx)(`button`, {
                        onClick: () => bt(!1),
                        className: `text-muted-foreground hover:text-foreground`,
                        children: (0, q.jsx)(Ke, { className: `size-4` }),
                      }),
                  ],
                }),
                (0, q.jsx)(`p`, {
                  className: `mt-2 text-xs text-muted-foreground`,
                  children: V.langModalSubtitle,
                }),
                (0, q.jsx)(`div`, {
                  className: `mt-4 grid grid-cols-1 gap-2`,
                  children: Hi.map((e) =>
                    (0, q.jsxs)(
                      `button`,
                      {
                        onClick: () => Rt(e.id),
                        className: K(
                          `flex items-center justify-between px-3.5 py-2.5 rounded border text-sm font-medium transition-all text-left`,
                          ht === e.id
                            ? `border-primary bg-primary/20 text-primary font-bold shadow-sm`
                            : `border-hud-border bg-secondary/50 text-foreground/90 hover:bg-secondary`,
                        ),
                        children: [
                          (0, q.jsxs)(`span`, {
                            className: `flex items-center gap-2.5`,
                            children: [
                              (0, q.jsx)(`span`, {
                                className: `text-xl`,
                                children: e.flag,
                              }),
                              (0, q.jsx)(`span`, { children: e.label }),
                            ],
                          }),
                          ht === e.id &&
                            (0, q.jsx)(`span`, {
                              className: `text-xs text-primary font-bold`,
                              children: `✓`,
                            }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
                yt &&
                  (0, q.jsxs)(`div`, {
                    className: `mt-4`,
                    children: [
                      (0, q.jsx)(`p`, {
                        className: `mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground`,
                        children: `Controles / Controls`,
                      }),
                      (0, q.jsx)(`div`, {
                        className: `mb-3 grid grid-cols-3 gap-2`,
                        children: [
                          [`auto`, `Auto`],
                          [`pc`, `PC`],
                          [`touch`, `Celular`],
                        ].map(([e, t]) =>
                          (0, q.jsx)(
                            `button`,
                            {
                              type: `button`,
                              onClick: () => Lt(e),
                              className: K(
                                `rounded border px-2 py-2 text-xs font-bold`,
                                Dt === e
                                  ? `border-primary bg-primary/20 text-primary`
                                  : `border-hud-border bg-secondary/50 text-foreground/90`,
                              ),
                              children: t,
                            },
                            e,
                          ),
                        ),
                      }),
                      (0, q.jsx)(J, {
                        variant: `outline`,
                        className: `w-full text-xs`,
                        onClick: () => bt(!1),
                        children: V.close,
                      }),
                    ],
                  }),
              ],
            }),
          }),
        b &&
          (Ct || Tt || w) &&
          (0, q.jsx)(`div`, {
            role: `alert`,
            className: `absolute inset-x-4 top-20 z-[70] border border-brake bg-card p-3 text-center text-sm text-brake`,
            children: b,
          }),
        w &&
          (0, q.jsx)(`div`, {
            role: `alertdialog`,
            "aria-modal": `true`,
            "aria-label": `Comprar ${f(w).name}`,
            className: `absolute inset-0 z-[60] flex items-center justify-center bg-scrim p-5`,
            children: (0, q.jsxs)(`div`, {
              className: `w-full max-w-sm rounded border border-primary/40 bg-card p-6 text-center`,
              children: [
                (0, q.jsx)(ke, { className: `mx-auto size-9 text-primary` }),
                (0, q.jsxs)(`h3`, {
                  className: `mt-3 font-display text-3xl`,
                  children: [`COMPRAR `, f(w).name.toUpperCase(), `?`],
                }),
                (0, q.jsx)(`p`, {
                  className: `mt-3 font-display text-2xl tabular-nums text-primary`,
                  children: i(oe(w)),
                }),
                (0, q.jsxs)(`p`, {
                  className: `mt-2 text-sm text-muted-foreground`,
                  children: [
                    `Seu saldo: `,
                    i(E),
                    !S(E, w) &&
                      (0, q.jsxs)(q.Fragment, {
                        children: [
                          ` · Faltam `,
                          i(oe(w) - E),
                          `. Fuja da polícia para ganhar dólares.`,
                        ],
                      }),
                  ],
                }),
                (0, q.jsx)(J, {
                  variant: `race`,
                  disabled: ie || !S(E, w),
                  className: `mt-5 w-full`,
                  onClick: () => {
                    me(w, !0);
                  },
                  children: S(E, w) ? `SIM, COMPRAR` : `SALDO INSUFICIENTE`,
                }),
                (0, q.jsx)(J, {
                  variant: `ghost`,
                  disabled: ie,
                  className: `mt-2 w-full`,
                  onClick: () => T(null),
                  children: `CANCELAR`,
                }),
              ],
            }),
          }),
        Tt &&
          (0, q.jsx)(br, {
            garage: v,
            balance: E,
            developer: O,
            busy: ie,
            onPick: (e) => {
              me(e);
            },
            onClose: () => Et(!1),
          }),
        de &&
          !ot &&
          (0, q.jsxs)(`div`, {
            role: `status`,
            className: `pointer-events-none absolute bottom-4 left-1/2 z-[75] -translate-x-1/2 border border-hud-border bg-hud px-4 py-2 font-display text-sm tracking-widest text-foreground`,
            children: [`CARREGANDO `, f(v.selectedCar).name.toUpperCase(), `…`],
          }),
        ot &&
          (0, q.jsx)(Mr, {
            prompt: V.pressToContinue,
            onContinue: ut,
            onReady: lt,
          }),
      ],
    }),
  });
}
var $i = Qi;
export { $i as component };
