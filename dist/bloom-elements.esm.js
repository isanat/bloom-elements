"use client";
import { jsx as d, Fragment as ze, jsxs as K } from "react/jsx-runtime";
import * as u from "react";
import E, { forwardRef as In, createElement as dn, useLayoutEffect as Ai, useState as Qe, useMemo as Oc, useEffect as Je, createContext as hn, useContext as Jt, useRef as Ke, useImperativeHandle as Dc, useCallback as nt, isValidElement as Fa, PureComponent as Oi, cloneElement as GS } from "react";
import * as Go from "react-dom";
import Ic from "react-dom";
import { FormProvider as US, Controller as KS, useFormContext as YS } from "react-hook-form";
import { motion as Po, AnimatePresence as qS } from "framer-motion";
import { NavLink as XS } from "react-router-dom";
function Gd(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Xt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = Gd(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : Gd(e[o], null);
        }
      };
  };
}
function ae(...e) {
  return u.useCallback(Xt(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Mn(e) {
  const t = /* @__PURE__ */ ZS(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(QS);
    if (l) {
      const c = l.props.children, f = s.map((p) => p === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : p);
      return /* @__PURE__ */ d(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ d(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var kn = /* @__PURE__ */ Mn("Slot");
// @__NO_SIDE_EFFECTS__
function ZS(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = eC(o), s = JS(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? Xt(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ym = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function wm(e) {
  const t = ({ children: n }) => /* @__PURE__ */ d(ze, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = ym, t;
}
function QS(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ym;
}
function JS(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function eC(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function xm(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = xm(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function fn() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = xm(e)) && (r && (r += " "), r += t);
  return r;
}
const Ud = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Kd = fn, vn = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Kd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((c) => {
    const f = n == null ? void 0 : n[c], p = a == null ? void 0 : a[c];
    if (f === null) return null;
    const m = Ud(f) || Ud(p);
    return o[c][m];
  }), s = n && Object.entries(n).reduce((c, f) => {
    let [p, m] = f;
    return m === void 0 || (c[p] = m), c;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, f) => {
    let { class: p, className: m, ...h } = f;
    return Object.entries(h).every((g) => {
      let [v, b] = g;
      return Array.isArray(b) ? b.includes({
        ...a,
        ...s
      }[v]) : {
        ...a,
        ...s
      }[v] === b;
    }) ? [
      ...c,
      p,
      m
    ] : c;
  }, []);
  return Kd(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, kc = "-", tC = (e) => {
  const t = rC(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(kc);
      return s[0] === "" && s.length !== 1 && s.shift(), Sm(s, t) || nC(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const l = n[i] || [];
      return s && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, Sm = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Sm(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(kc);
  return (i = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : i.classGroupId;
}, Yd = /^\[(.+)\]$/, nC = (e) => {
  if (Yd.test(e)) {
    const t = Yd.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, rC = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return aC(Object.entries(e.classGroups), n).forEach(([a, i]) => {
    Pl(i, r, a, t);
  }), r;
}, Pl = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : qd(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (oC(o)) {
        Pl(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      Pl(i, qd(t, a), n, r);
    });
  });
}, qd = (e, t) => {
  let n = e;
  return t.split(kc).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, oC = (e) => e.isThemeGetter, aC = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([i, s]) => [t + i, s])) : a);
  return [n, o];
}) : e, iC = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (a, i) => {
    n.set(a, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let i = n.get(a);
      if (i !== void 0)
        return i;
      if ((i = r.get(a)) !== void 0)
        return o(a, i), i;
    },
    set(a, i) {
      n.has(a) ? n.set(a, i) : o(a, i);
    }
  };
}, Cm = "!", sC = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], a = t.length, i = (s) => {
    const l = [];
    let c = 0, f = 0, p;
    for (let b = 0; b < s.length; b++) {
      let y = s[b];
      if (c === 0) {
        if (y === o && (r || s.slice(b, b + a) === t)) {
          l.push(s.slice(f, b)), f = b + a;
          continue;
        }
        if (y === "/") {
          p = b;
          continue;
        }
      }
      y === "[" ? c++ : y === "]" && c--;
    }
    const m = l.length === 0 ? s : s.substring(f), h = m.startsWith(Cm), g = h ? m.substring(1) : m, v = p && p > f ? p - f : void 0;
    return {
      modifiers: l,
      hasImportantModifier: h,
      baseClassName: g,
      maybePostfixModifierPosition: v
    };
  };
  return n ? (s) => n({
    className: s,
    parseClassName: i
  }) : i;
}, lC = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, cC = (e) => ({
  cache: iC(e.cacheSize),
  parseClassName: sC(e),
  ...tC(e)
}), uC = /\s+/, dC = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, a = [], i = e.trim().split(uC);
  let s = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const c = i[l], {
      modifiers: f,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: h
    } = n(c);
    let g = !!h, v = r(g ? m.substring(0, h) : m);
    if (!v) {
      if (!g) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (v = r(m), !v) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      g = !1;
    }
    const b = lC(f).join(":"), y = p ? b + Cm : b, w = y + v;
    if (a.includes(w))
      continue;
    a.push(w);
    const x = o(v, g);
    for (let S = 0; S < x.length; ++S) {
      const C = x[S];
      a.push(y + C);
    }
    s = c + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function fC() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Pm(t)) && (r && (r += " "), r += n);
  return r;
}
const Pm = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Pm(e[r])) && (n && (n += " "), n += t);
  return n;
};
function pC(e, ...t) {
  let n, r, o, a = i;
  function i(l) {
    const c = t.reduce((f, p) => p(f), e());
    return n = cC(c), r = n.cache.get, o = n.cache.set, a = s, s(l);
  }
  function s(l) {
    const c = r(l);
    if (c)
      return c;
    const f = dC(l, n);
    return o(l, f), f;
  }
  return function() {
    return a(fC.apply(null, arguments));
  };
}
const Ie = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Nm = /^\[(?:([a-z-]+):)?(.+)\]$/i, mC = /^\d+\/\d+$/, hC = /* @__PURE__ */ new Set(["px", "full", "screen"]), vC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, bC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, yC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, wC = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, sn = (e) => Cr(e) || hC.has(e) || mC.test(e), Cn = (e) => Br(e, "length", RC), Cr = (e) => !!e && !Number.isNaN(Number(e)), As = (e) => Br(e, "number", Cr), ao = (e) => !!e && Number.isInteger(Number(e)), xC = (e) => e.endsWith("%") && Cr(e.slice(0, -1)), me = (e) => Nm.test(e), Pn = (e) => vC.test(e), SC = /* @__PURE__ */ new Set(["length", "size", "percentage"]), CC = (e) => Br(e, SC, Em), PC = (e) => Br(e, "position", Em), NC = /* @__PURE__ */ new Set(["image", "url"]), EC = (e) => Br(e, NC, MC), _C = (e) => Br(e, "", TC), io = () => !0, Br = (e, t, n) => {
  const r = Nm.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, RC = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  gC.test(e) && !bC.test(e)
), Em = () => !1, TC = (e) => yC.test(e), MC = (e) => wC.test(e), AC = () => {
  const e = Ie("colors"), t = Ie("spacing"), n = Ie("blur"), r = Ie("brightness"), o = Ie("borderColor"), a = Ie("borderRadius"), i = Ie("borderSpacing"), s = Ie("borderWidth"), l = Ie("contrast"), c = Ie("grayscale"), f = Ie("hueRotate"), p = Ie("invert"), m = Ie("gap"), h = Ie("gradientColorStops"), g = Ie("gradientColorStopPositions"), v = Ie("inset"), b = Ie("margin"), y = Ie("opacity"), w = Ie("padding"), x = Ie("saturate"), S = Ie("scale"), C = Ie("sepia"), N = Ie("skew"), P = Ie("space"), M = Ie("translate"), _ = () => ["auto", "contain", "none"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", me, t], k = () => [me, t], G = () => ["", sn, Cn], $ = () => ["auto", Cr, me], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], W = () => ["solid", "dashed", "dotted", "double", "none"], F = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], L = () => ["", "0", me], ee = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], te = () => [Cr, me];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [io],
      spacing: [sn, Cn],
      blur: ["none", "", Pn, me],
      brightness: te(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Pn, me],
      borderSpacing: k(),
      borderWidth: G(),
      contrast: te(),
      grayscale: L(),
      hueRotate: te(),
      invert: L(),
      gap: k(),
      gradientColorStops: [e],
      gradientColorStopPositions: [xC, Cn],
      inset: T(),
      margin: T(),
      opacity: te(),
      padding: k(),
      saturate: te(),
      scale: te(),
      sepia: L(),
      skew: te(),
      space: k(),
      translate: k()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", me]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Pn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ee()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ee()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...U(), me]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: B()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": B()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": B()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: _()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": _()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": _()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ao, me]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: T()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", me]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: L()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: L()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ao, me]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [io]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ao, me]
        }, me]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": $()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": $()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [io]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ao, me]
        }, me]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": $()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": $()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", me]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", me]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [m]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [m]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [m]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...D()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...D(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...D(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [P]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [P]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", me, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [me, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [me, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Pn]
        }, Pn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [me, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [me, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [me, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [me, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Pn, Cn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", As]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [io]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", me]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Cr, As]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", sn, me]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", me]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", me]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...W(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", sn, Cn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", sn, me]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: k()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", me]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", me]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...U(), PC]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", CC]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, EC]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [g]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...W(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: W()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...W()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [sn, me]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [sn, Cn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: G()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [sn, Cn]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Pn, _C]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [io]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...F(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": F()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Pn, me]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [C]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [C]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", me]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: te()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", me]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: te()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", me]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [S]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [S]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [S]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ao, me]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [M]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [M]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [N]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [N]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", me]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", me]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": k()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": k()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": k()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": k()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": k()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": k()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": k()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": k()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": k()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": k()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": k()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": k()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": k()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": k()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": k()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": k()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": k()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": k()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", me]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [sn, Cn, As]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, OC = /* @__PURE__ */ pC(AC);
function R(...e) {
  return OC(fn(e));
}
const Rr = vn(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display font-bold tracking-wide uppercase ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-glow",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md",
        outline: "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline !tracking-normal !font-medium !normal-case",
        success: "bg-success text-success-foreground hover:bg-success/90 shadow-md",
        warning: "bg-warning text-warning-foreground hover:bg-warning/90 shadow-md",
        premium: "bg-gradient-to-r from-primary to-info text-primary-foreground shadow-lg hover:shadow-glow",
        dark: "bg-foreground text-background hover:bg-foreground/90 shadow-md"
      },
      size: {
        default: "h-11 px-6 py-2 text-xs rounded-2xl",
        sm: "h-9 px-4 text-[10px] rounded-xl",
        lg: "h-14 px-10 text-xs rounded-2xl",
        xl: "h-16 px-12 text-sm rounded-3xl",
        icon: "h-11 w-11 rounded-2xl",
        "icon-sm": "h-9 w-9 rounded-xl",
        "icon-lg": "h-14 w-14 rounded-2xl"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Yn = u.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, a) => /* @__PURE__ */ d(r ? kn : "button", { className: R(Rr({ variant: t, size: n, className: e })), ref: a, ...o })
);
Yn.displayName = "Button";
const DC = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { ref: n, className: R("rounded-lg border bg-card text-card-foreground shadow-sm", e), ...t }));
DC.displayName = "Card";
const IC = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { ref: n, className: R("flex flex-col space-y-1.5 p-6", e), ...t })
);
IC.displayName = "CardHeader";
const kC = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("h3", { ref: n, className: R("text-2xl font-semibold leading-none tracking-tight", e), ...t })
);
kC.displayName = "CardTitle";
const $C = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("p", { ref: n, className: R("text-sm text-muted-foreground", e), ...t })
);
$C.displayName = "CardDescription";
const LC = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { ref: n, className: R("p-6 pt-0", e), ...t })
);
LC.displayName = "CardContent";
const FC = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { ref: n, className: R("flex items-center p-6 pt-0", e), ...t })
);
FC.displayName = "CardFooter";
const _m = u.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ d(
    "input",
    {
      type: t,
      className: R(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ref: r,
      ...n
    }
  )
);
_m.displayName = "Input";
var BC = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Q = BC.reduce((e, t) => {
  const n = /* @__PURE__ */ Mn(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function _o(e, t) {
  e && Go.flushSync(() => e.dispatchEvent(t));
}
var zC = "Label", Rm = u.forwardRef((e, t) => /* @__PURE__ */ d(
  Q.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Rm.displayName = zC;
var Tm = Rm;
const jC = vn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), Mm = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(Tm, { ref: n, className: R(jC(), e), ...t }));
Mm.displayName = Tm.displayName;
const HC = vn(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function QK({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ d("div", { className: R(HC({ variant: t }), e), ...n });
}
const WC = vn(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), VC = u.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ d("div", { ref: r, role: "alert", className: R(WC({ variant: t }), e), ...n }));
VC.displayName = "Alert";
const GC = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("h5", { ref: n, className: R("mb-1 font-medium leading-none tracking-tight", e), ...t })
);
GC.displayName = "AlertTitle";
const UC = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { ref: n, className: R("text-sm [&_p]:leading-relaxed", e), ...t })
);
UC.displayName = "AlertDescription";
function j(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function KC(e, t) {
  const n = u.createContext(t), r = (a) => {
    const { children: i, ...s } = a, l = u.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ d(n.Provider, { value: l, children: i });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const i = u.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Me(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = u.createContext(i), l = n.length;
    n = [...n, i];
    const c = (p) => {
      var y;
      const { scope: m, children: h, ...g } = p, v = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[l]) || s, b = u.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ d(v.Provider, { value: b, children: h });
    };
    c.displayName = a + "Provider";
    function f(p, m) {
      var v;
      const h = ((v = m == null ? void 0 : m[e]) == null ? void 0 : v[l]) || s, g = u.useContext(h);
      if (g) return g;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [c, f];
  }
  const o = () => {
    const a = n.map((i) => u.createContext(i));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [r, YC(o, ...t)];
}
function YC(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = r.reduce((s, { useScope: l, scopeName: c }) => {
        const p = l(a)[`__scope${c}`];
        return { ...s, ...p };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function gn(e) {
  const t = e + "CollectionProvider", [n, r] = Me(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (v) => {
    const { scope: b, children: y } = v, w = E.useRef(null), x = E.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d(o, { scope: b, itemMap: x, collectionRef: w, children: y });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", l = /* @__PURE__ */ Mn(s), c = E.forwardRef(
    (v, b) => {
      const { scope: y, children: w } = v, x = a(s, y), S = ae(b, x.collectionRef);
      return /* @__PURE__ */ d(l, { ref: S, children: w });
    }
  );
  c.displayName = s;
  const f = e + "CollectionItemSlot", p = "data-radix-collection-item", m = /* @__PURE__ */ Mn(f), h = E.forwardRef(
    (v, b) => {
      const { scope: y, children: w, ...x } = v, S = E.useRef(null), C = ae(b, S), N = a(f, y);
      return E.useEffect(() => (N.itemMap.set(S, { ref: S, ...x }), () => void N.itemMap.delete(S))), /* @__PURE__ */ d(m, { [p]: "", ref: C, children: w });
    }
  );
  h.displayName = f;
  function g(v) {
    const b = a(e + "CollectionConsumer", v);
    return E.useCallback(() => {
      const w = b.collectionRef.current;
      if (!w) return [];
      const x = Array.from(w.querySelectorAll(`[${p}]`));
      return Array.from(b.itemMap.values()).sort(
        (N, P) => x.indexOf(N.ref.current) - x.indexOf(P.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [
    { Provider: i, Slot: c, ItemSlot: h },
    g,
    r
  ];
}
function xe(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function qC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xe(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var XC = "DismissableLayer", Nl = "dismissableLayer.update", ZC = "dismissableLayer.pointerDownOutside", QC = "dismissableLayer.focusOutside", Xd, Am = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), bn = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...l
    } = e, c = u.useContext(Am), [f, p] = u.useState(null), m = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = u.useState({}), g = ae(t, (P) => p(P)), v = Array.from(c.layers), [b] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), y = v.indexOf(b), w = f ? v.indexOf(f) : -1, x = c.layersWithOutsidePointerEventsDisabled.size > 0, S = w >= y, C = eP((P) => {
      const M = P.target, _ = [...c.branches].some((B) => B.contains(M));
      !S || _ || (o == null || o(P), i == null || i(P), P.defaultPrevented || s == null || s());
    }, m), N = tP((P) => {
      const M = P.target;
      [...c.branches].some((B) => B.contains(M)) || (a == null || a(P), i == null || i(P), P.defaultPrevented || s == null || s());
    }, m);
    return qC((P) => {
      w === c.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && s && (P.preventDefault(), s()));
    }, m), u.useEffect(() => {
      if (f)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Xd = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), Zd(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Xd);
        };
    }, [f, m, n, c]), u.useEffect(() => () => {
      f && (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), Zd());
    }, [f, c]), u.useEffect(() => {
      const P = () => h({});
      return document.addEventListener(Nl, P), () => document.removeEventListener(Nl, P);
    }, []), /* @__PURE__ */ d(
      Q.div,
      {
        ...l,
        ref: g,
        style: {
          pointerEvents: x ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: j(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: j(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: j(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
bn.displayName = XC;
var JC = "DismissableLayerBranch", Om = u.forwardRef((e, t) => {
  const n = u.useContext(Am), r = u.useRef(null), o = ae(t, r);
  return u.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ d(Q.div, { ...e, ref: o });
});
Om.displayName = JC;
function eP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xe(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          Dm(
            ZC,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function tP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xe(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Dm(QC, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Zd() {
  const e = new CustomEvent(Nl);
  document.dispatchEvent(e);
}
function Dm(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? _o(o, a) : o.dispatchEvent(a);
}
var nP = bn, rP = Om, $e = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, oP = "Portal", zr = u.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, a] = u.useState(!1);
  $e(() => a(!0), []);
  const i = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? Ic.createPortal(/* @__PURE__ */ d(Q.div, { ...r, ref: t }), i) : null;
});
zr.displayName = oP;
function aP(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Le = (e) => {
  const { present: t, children: n } = e, r = iP(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), a = ae(r.ref, sP(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: a }) : null;
};
Le.displayName = "Presence";
function iP(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), a = u.useRef("none"), i = e ? "mounted" : "unmounted", [s, l] = aP(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return u.useEffect(() => {
    const c = ya(r.current);
    a.current = s === "mounted" ? c : "none";
  }, [s]), $e(() => {
    const c = r.current, f = o.current;
    if (f !== e) {
      const m = a.current, h = ya(c);
      e ? l("MOUNT") : h === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(f && m !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), $e(() => {
    if (t) {
      let c;
      const f = t.ownerDocument.defaultView ?? window, p = (h) => {
        const v = ya(r.current).includes(h.animationName);
        if (h.target === t && v && (l("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, m = (h) => {
        h.target === t && (a.current = ya(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        f.clearTimeout(c), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: u.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function ya(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function sP(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var lP = u[" useInsertionEffect ".trim().toString()] || $e;
function Ae({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, i] = cP({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, l = s ? e : o;
  {
    const f = u.useRef(e !== void 0);
    u.useEffect(() => {
      const p = f.current;
      p !== s && console.warn(
        `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = s;
    }, [s, r]);
  }
  const c = u.useCallback(
    (f) => {
      var p;
      if (s) {
        const m = uP(f) ? f(e) : f;
        m !== e && ((p = i.current) == null || p.call(i, m));
      } else
        a(f);
    },
    [s, e, a, i]
  );
  return [l, c];
}
function cP({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), a = u.useRef(t);
  return lP(() => {
    a.current = t;
  }, [t]), u.useEffect(() => {
    var i;
    o.current !== n && ((i = a.current) == null || i.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function uP(e) {
  return typeof e == "function";
}
var Im = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), dP = "VisuallyHidden", Di = u.forwardRef(
  (e, t) => /* @__PURE__ */ d(
    Q.span,
    {
      ...e,
      ref: t,
      style: { ...Im, ...e.style }
    }
  )
);
Di.displayName = dP;
var km = Di, $c = "ToastProvider", [Lc, fP, pP] = gn("Toast"), [$m, JK] = Me("Toast", [pP]), [mP, Ii] = $m($c), Lm = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: i
  } = e, [s, l] = u.useState(null), [c, f] = u.useState(0), p = u.useRef(!1), m = u.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${$c}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ d(Lc.Provider, { scope: t, children: /* @__PURE__ */ d(
    mP,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: c,
      viewport: s,
      onViewportChange: l,
      onToastAdd: u.useCallback(() => f((h) => h + 1), []),
      onToastRemove: u.useCallback(() => f((h) => h - 1), []),
      isFocusedToastEscapeKeyDownRef: p,
      isClosePausedRef: m,
      children: i
    }
  ) });
};
Lm.displayName = $c;
var Fm = "ToastViewport", hP = ["F8"], El = "toast.viewportPause", _l = "toast.viewportResume", Bm = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = hP,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, i = Ii(Fm, n), s = fP(n), l = u.useRef(null), c = u.useRef(null), f = u.useRef(null), p = u.useRef(null), m = ae(t, p, i.onViewportChange), h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), g = i.toastCount > 0;
    u.useEffect(() => {
      const b = (y) => {
        var x;
        r.length !== 0 && r.every((S) => y[S] || y.code === S) && ((x = p.current) == null || x.focus());
      };
      return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
    }, [r]), u.useEffect(() => {
      const b = l.current, y = p.current;
      if (g && b && y) {
        const w = () => {
          if (!i.isClosePausedRef.current) {
            const N = new CustomEvent(El);
            y.dispatchEvent(N), i.isClosePausedRef.current = !0;
          }
        }, x = () => {
          if (i.isClosePausedRef.current) {
            const N = new CustomEvent(_l);
            y.dispatchEvent(N), i.isClosePausedRef.current = !1;
          }
        }, S = (N) => {
          !b.contains(N.relatedTarget) && x();
        }, C = () => {
          b.contains(document.activeElement) || x();
        };
        return b.addEventListener("focusin", w), b.addEventListener("focusout", S), b.addEventListener("pointermove", w), b.addEventListener("pointerleave", C), window.addEventListener("blur", w), window.addEventListener("focus", x), () => {
          b.removeEventListener("focusin", w), b.removeEventListener("focusout", S), b.removeEventListener("pointermove", w), b.removeEventListener("pointerleave", C), window.removeEventListener("blur", w), window.removeEventListener("focus", x);
        };
      }
    }, [g, i.isClosePausedRef]);
    const v = u.useCallback(
      ({ tabbingDirection: b }) => {
        const w = s().map((x) => {
          const S = x.ref.current, C = [S, ...RP(S)];
          return b === "forwards" ? C : C.reverse();
        });
        return (b === "forwards" ? w.reverse() : w).flat();
      },
      [s]
    );
    return u.useEffect(() => {
      const b = p.current;
      if (b) {
        const y = (w) => {
          var C, N, P;
          const x = w.altKey || w.ctrlKey || w.metaKey;
          if (w.key === "Tab" && !x) {
            const M = document.activeElement, _ = w.shiftKey;
            if (w.target === b && _) {
              (C = c.current) == null || C.focus();
              return;
            }
            const k = v({ tabbingDirection: _ ? "backwards" : "forwards" }), G = k.findIndex(($) => $ === M);
            Os(k.slice(G + 1)) ? w.preventDefault() : _ ? (N = c.current) == null || N.focus() : (P = f.current) == null || P.focus();
          }
        };
        return b.addEventListener("keydown", y), () => b.removeEventListener("keydown", y);
      }
    }, [s, v]), /* @__PURE__ */ K(
      rP,
      {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: g ? void 0 : "none" },
        children: [
          g && /* @__PURE__ */ d(
            Rl,
            {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const b = v({
                  tabbingDirection: "forwards"
                });
                Os(b);
              }
            }
          ),
          /* @__PURE__ */ d(Lc.Slot, { scope: n, children: /* @__PURE__ */ d(Q.ol, { tabIndex: -1, ...a, ref: m }) }),
          g && /* @__PURE__ */ d(
            Rl,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const b = v({
                  tabbingDirection: "backwards"
                });
                Os(b);
              }
            }
          )
        ]
      }
    );
  }
);
Bm.displayName = Fm;
var zm = "ToastFocusProxy", Rl = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = Ii(zm, n);
    return /* @__PURE__ */ d(
      Di,
      {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (i) => {
          var c;
          const s = i.relatedTarget;
          !((c = a.viewport) != null && c.contains(s)) && r();
        }
      }
    );
  }
);
Rl.displayName = zm;
var Uo = "Toast", vP = "toast.swipeStart", gP = "toast.swipeMove", bP = "toast.swipeCancel", yP = "toast.swipeEnd", jm = u.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...i } = e, [s, l] = Ae({
      prop: r,
      defaultProp: o ?? !0,
      onChange: a,
      caller: Uo
    });
    return /* @__PURE__ */ d(Le, { present: n || s, children: /* @__PURE__ */ d(
      SP,
      {
        open: s,
        ...i,
        ref: t,
        onClose: () => l(!1),
        onPause: xe(e.onPause),
        onResume: xe(e.onResume),
        onSwipeStart: j(e.onSwipeStart, (c) => {
          c.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: j(e.onSwipeMove, (c) => {
          const { x: f, y: p } = c.detail.delta;
          c.currentTarget.setAttribute("data-swipe", "move"), c.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), c.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
        }),
        onSwipeCancel: j(e.onSwipeCancel, (c) => {
          c.currentTarget.setAttribute("data-swipe", "cancel"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: j(e.onSwipeEnd, (c) => {
          const { x: f, y: p } = c.detail.delta;
          c.currentTarget.setAttribute("data-swipe", "end"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), c.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), c.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), l(!1);
        })
      }
    ) });
  }
);
jm.displayName = Uo;
var [wP, xP] = $m(Uo, {
  onClose() {
  }
}), SP = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      type: r = "foreground",
      duration: o,
      open: a,
      onClose: i,
      onEscapeKeyDown: s,
      onPause: l,
      onResume: c,
      onSwipeStart: f,
      onSwipeMove: p,
      onSwipeCancel: m,
      onSwipeEnd: h,
      ...g
    } = e, v = Ii(Uo, n), [b, y] = u.useState(null), w = ae(t, ($) => y($)), x = u.useRef(null), S = u.useRef(null), C = o || v.duration, N = u.useRef(0), P = u.useRef(C), M = u.useRef(0), { onToastAdd: _, onToastRemove: B } = v, T = xe(() => {
      var U;
      (b == null ? void 0 : b.contains(document.activeElement)) && ((U = v.viewport) == null || U.focus()), i();
    }), k = u.useCallback(
      ($) => {
        !$ || $ === 1 / 0 || (window.clearTimeout(M.current), N.current = (/* @__PURE__ */ new Date()).getTime(), M.current = window.setTimeout(T, $));
      },
      [T]
    );
    u.useEffect(() => {
      const $ = v.viewport;
      if ($) {
        const U = () => {
          k(P.current), c == null || c();
        }, W = () => {
          const F = (/* @__PURE__ */ new Date()).getTime() - N.current;
          P.current = P.current - F, window.clearTimeout(M.current), l == null || l();
        };
        return $.addEventListener(El, W), $.addEventListener(_l, U), () => {
          $.removeEventListener(El, W), $.removeEventListener(_l, U);
        };
      }
    }, [v.viewport, C, l, c, k]), u.useEffect(() => {
      a && !v.isClosePausedRef.current && k(C);
    }, [a, C, v.isClosePausedRef, k]), u.useEffect(() => (_(), () => B()), [_, B]);
    const G = u.useMemo(() => b ? Ym(b) : null, [b]);
    return v.viewport ? /* @__PURE__ */ K(ze, { children: [
      G && /* @__PURE__ */ d(
        CP,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: G
        }
      ),
      /* @__PURE__ */ d(wP, { scope: n, onClose: T, children: Go.createPortal(
        /* @__PURE__ */ d(Lc.ItemSlot, { scope: n, children: /* @__PURE__ */ d(
          nP,
          {
            asChild: !0,
            onEscapeKeyDown: j(s, () => {
              v.isFocusedToastEscapeKeyDownRef.current || T(), v.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ d(
              Q.li,
              {
                role: "status",
                "aria-live": "off",
                "aria-atomic": !0,
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": v.swipeDirection,
                ...g,
                ref: w,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: j(e.onKeyDown, ($) => {
                  $.key === "Escape" && (s == null || s($.nativeEvent), $.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, T()));
                }),
                onPointerDown: j(e.onPointerDown, ($) => {
                  $.button === 0 && (x.current = { x: $.clientX, y: $.clientY });
                }),
                onPointerMove: j(e.onPointerMove, ($) => {
                  if (!x.current) return;
                  const U = $.clientX - x.current.x, W = $.clientY - x.current.y, F = !!S.current, D = ["left", "right"].includes(v.swipeDirection), L = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max, ee = D ? L(0, U) : 0, te = D ? 0 : L(0, W), I = $.pointerType === "touch" ? 10 : 2, O = { x: ee, y: te }, H = { originalEvent: $, delta: O };
                  F ? (S.current = O, wa(gP, p, H, {
                    discrete: !1
                  })) : Qd(O, v.swipeDirection, I) ? (S.current = O, wa(vP, f, H, {
                    discrete: !1
                  }), $.target.setPointerCapture($.pointerId)) : (Math.abs(U) > I || Math.abs(W) > I) && (x.current = null);
                }),
                onPointerUp: j(e.onPointerUp, ($) => {
                  const U = S.current, W = $.target;
                  if (W.hasPointerCapture($.pointerId) && W.releasePointerCapture($.pointerId), S.current = null, x.current = null, U) {
                    const F = $.currentTarget, D = { originalEvent: $, delta: U };
                    Qd(U, v.swipeDirection, v.swipeThreshold) ? wa(yP, h, D, {
                      discrete: !0
                    }) : wa(
                      bP,
                      m,
                      D,
                      {
                        discrete: !0
                      }
                    ), F.addEventListener("click", (L) => L.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        v.viewport
      ) })
    ] }) : null;
  }
), CP = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = Ii(Uo, t), [a, i] = u.useState(!1), [s, l] = u.useState(!1);
  return EP(() => i(!0)), u.useEffect(() => {
    const c = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(c);
  }, []), s ? null : /* @__PURE__ */ d(zr, { asChild: !0, children: /* @__PURE__ */ d(Di, { ...r, children: a && /* @__PURE__ */ K(ze, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, PP = "ToastTitle", Hm = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ d(Q.div, { ...r, ref: t });
  }
);
Hm.displayName = PP;
var NP = "ToastDescription", Wm = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ d(Q.div, { ...r, ref: t });
  }
);
Wm.displayName = NP;
var Vm = "ToastAction", Gm = u.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ d(Km, { altText: n, asChild: !0, children: /* @__PURE__ */ d(Fc, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Vm}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Gm.displayName = Vm;
var Um = "ToastClose", Fc = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = xP(Um, n);
    return /* @__PURE__ */ d(Km, { asChild: !0, children: /* @__PURE__ */ d(
      Q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: j(e.onClick, o.onClose)
      }
    ) });
  }
);
Fc.displayName = Um;
var Km = u.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ d(
    Q.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function Ym(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), _P(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const i = r.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...Ym(r));
    }
  }), t;
}
function wa(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? _o(o, a) : o.dispatchEvent(a);
}
var Qd = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function EP(e = () => {
}) {
  const t = xe(e);
  $e(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function _P(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function RP(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Os(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var TP = Lm, qm = Bm, Xm = jm, Zm = Hm, Qm = Wm, Jm = Gm, eh = Fc;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MP = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), th = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var AP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OP = In(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, l) => dn(
    "svg",
    {
      ref: l,
      ...AP,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: th("lucide", o),
      ...s
    },
    [
      ...i.map(([c, f]) => dn(c, f)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = (e, t) => {
  const n = In(
    ({ className: r, ...o }, a) => dn(OP, {
      ref: a,
      iconNode: t,
      className: th(`lucide-${MP(e)}`, r),
      ...o
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DP = pe("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IP = pe("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kP = pe("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qa = pe("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xa = pe("Briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jd = pe("ChartColumn", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = pe("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ki = pe("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nh = pe("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jr = pe("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $P = pe("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LP = pe("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FP = pe("CircleHelp", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $i = pe("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rh = pe("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ef = pe("CreditCard", [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BP = pe("Dot", [
  ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zP = pe("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = pe("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jP = pe("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HP = pe("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Za = pe("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WP = pe("Key", [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tf = pe("Layers", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw"
    }
  ],
  ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" }],
  ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VP = pe("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GP = pe("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UP = pe("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oh = pe("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bc = pe("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KP = pe("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YP = pe("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qP = pe("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zc = pe("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XP = pe("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ah = pe("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZP = pe("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QP = pe("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JP = pe("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eN = pe("UserPlus", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = pe("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tN = pe("Wallet", [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hr = pe("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = pe("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), nN = TP, ih = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  qm,
  {
    ref: n,
    className: R(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...t
  }
));
ih.displayName = qm.displayName;
const rN = vn(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), sh = u.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ d(Xm, { ref: r, className: R(rN({ variant: t }), e), ...n }));
sh.displayName = Xm.displayName;
const oN = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Jm,
  {
    ref: n,
    className: R(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t
  }
));
oN.displayName = Jm.displayName;
const lh = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  eh,
  {
    ref: n,
    className: R(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ d(Hr, { className: "h-4 w-4" })
  }
));
lh.displayName = eh.displayName;
const ch = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(Zm, { ref: n, className: R("text-sm font-semibold", e), ...t }));
ch.displayName = Zm.displayName;
const uh = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(Qm, { ref: n, className: R("text-sm opacity-90", e), ...t }));
uh.displayName = Qm.displayName;
const aN = 1, iN = 1e6;
let Is = 0;
function sN() {
  return Is = (Is + 1) % Number.MAX_SAFE_INTEGER, Is.toString();
}
const ks = /* @__PURE__ */ new Map(), nf = (e) => {
  if (ks.has(e))
    return;
  const t = setTimeout(() => {
    ks.delete(e), No({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, iN);
  ks.set(e, t);
}, lN = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, aN)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map((n) => n.id === t.toast.id ? { ...n, ...t.toast } : n)
      };
    case "DISMISS_TOAST": {
      const { toastId: n } = t;
      return n ? nf(n) : e.toasts.forEach((r) => {
        nf(r.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (r) => r.id === n || n === void 0 ? {
            ...r,
            open: !1
          } : r
        )
      };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? {
        ...e,
        toasts: []
      } : {
        ...e,
        toasts: e.toasts.filter((n) => n.id !== t.toastId)
      };
  }
}, Ba = [];
let za = { toasts: [] };
function No(e) {
  za = lN(za, e), Ba.forEach((t) => {
    t(za);
  });
}
function cN({ ...e }) {
  const t = sN(), n = (o) => No({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), r = () => No({ type: "DISMISS_TOAST", toastId: t });
  return No({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (o) => {
        o || r();
      }
    }
  }), {
    id: t,
    dismiss: r,
    update: n
  };
}
function uN() {
  const [e, t] = u.useState(za);
  return u.useEffect(() => (Ba.push(t), () => {
    const n = Ba.indexOf(t);
    n > -1 && Ba.splice(n, 1);
  }), [e]), {
    ...e,
    toast: cN,
    dismiss: (n) => No({ type: "DISMISS_TOAST", toastId: n })
  };
}
function eY() {
  const { toasts: e } = uN();
  return /* @__PURE__ */ K(nN, { children: [
    e.map(function({ id: t, title: n, description: r, action: o, ...a }) {
      return /* @__PURE__ */ K(sh, { ...a, children: [
        /* @__PURE__ */ K("div", { className: "grid gap-1", children: [
          n && /* @__PURE__ */ d(ch, { children: n }),
          r && /* @__PURE__ */ d(uh, { children: r })
        ] }),
        o,
        /* @__PURE__ */ d(lh, {})
      ] }, t);
    }),
    /* @__PURE__ */ d(ih, {})
  ] });
}
var jc = "Progress", Hc = 100, [dN, tY] = Me(jc), [fN, pN] = dN(jc), dh = u.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: a = mN,
      ...i
    } = e;
    (o || o === 0) && !rf(o) && console.error(hN(`${o}`, "Progress"));
    const s = rf(o) ? o : Hc;
    r !== null && !of(r, s) && console.error(vN(`${r}`, "Progress"));
    const l = of(r, s) ? r : null, c = Qa(l) ? a(l, s) : void 0;
    return /* @__PURE__ */ d(fN, { scope: n, value: l, max: s, children: /* @__PURE__ */ d(
      Q.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": Qa(l) ? l : void 0,
        "aria-valuetext": c,
        role: "progressbar",
        "data-state": mh(l, s),
        "data-value": l ?? void 0,
        "data-max": s,
        ...i,
        ref: t
      }
    ) });
  }
);
dh.displayName = jc;
var fh = "ProgressIndicator", ph = u.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = pN(fh, n);
    return /* @__PURE__ */ d(
      Q.div,
      {
        "data-state": mh(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
ph.displayName = fh;
function mN(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function mh(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Qa(e) {
  return typeof e == "number";
}
function rf(e) {
  return Qa(e) && !isNaN(e) && e > 0;
}
function of(e, t) {
  return Qa(e) && !isNaN(e) && e <= t && e >= 0;
}
function hN(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Hc}\`.`;
}
function vN(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Hc} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var hh = dh, gN = ph;
const bN = u.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ d(
  hh,
  {
    ref: r,
    className: R("relative h-4 w-full overflow-hidden rounded-full bg-secondary", e),
    ...n,
    children: /* @__PURE__ */ d(
      gN,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
bN.displayName = hh.displayName;
function af({ className: e, ...t }) {
  return /* @__PURE__ */ d("div", { className: R("animate-pulse rounded-md bg-muted", e), ...t });
}
const nY = US, vh = u.createContext({}), rY = ({
  ...e
}) => /* @__PURE__ */ d(vh.Provider, { value: { name: e.name }, children: /* @__PURE__ */ d(KS, { ...e }) }), Li = () => {
  const e = u.useContext(vh), t = u.useContext(gh), { getFieldState: n, formState: r } = YS(), o = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = t;
  return {
    id: a,
    name: e.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...o
  };
}, gh = u.createContext({}), yN = u.forwardRef(
  ({ className: e, ...t }, n) => {
    const r = u.useId();
    return /* @__PURE__ */ d(gh.Provider, { value: { id: r }, children: /* @__PURE__ */ d("div", { ref: n, className: R("space-y-2", e), ...t }) });
  }
);
yN.displayName = "FormItem";
const wN = u.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = Li();
  return /* @__PURE__ */ d(Mm, { ref: n, className: R(r && "text-destructive", e), htmlFor: o, ...t });
});
wN.displayName = "FormLabel";
const xN = u.forwardRef(
  ({ ...e }, t) => {
    const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = Li();
    return /* @__PURE__ */ d(
      kn,
      {
        ref: t,
        id: r,
        "aria-describedby": n ? `${o} ${a}` : `${o}`,
        "aria-invalid": !!n,
        ...e
      }
    );
  }
);
xN.displayName = "FormControl";
const SN = u.forwardRef(
  ({ className: e, ...t }, n) => {
    const { formDescriptionId: r } = Li();
    return /* @__PURE__ */ d("p", { ref: n, id: r, className: R("text-sm text-muted-foreground", e), ...t });
  }
);
SN.displayName = "FormDescription";
const CN = u.forwardRef(
  ({ className: e, children: t, ...n }, r) => {
    const { error: o, formMessageId: a } = Li(), i = o ? String(o == null ? void 0 : o.message) : t;
    return i ? /* @__PURE__ */ d("p", { ref: r, id: a, className: R("text-sm font-medium text-destructive", e), ...n, children: i }) : null;
  }
);
CN.displayName = "FormMessage";
const PN = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "textarea",
  {
    className: R(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...t
  }
));
PN.displayName = "Textarea";
function Wr(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Yo(e) {
  const [t, n] = u.useState(void 0);
  return $e(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          i = c.inlineSize, s = c.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        n({ width: i, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Fi = "Checkbox", [NN, oY] = Me(Fi), [EN, Wc] = NN(Fi);
function _N(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: a,
    form: i,
    name: s,
    onCheckedChange: l,
    required: c,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: p
  } = e, [m, h] = Ae({
    prop: n,
    defaultProp: o ?? !1,
    onChange: l,
    caller: Fi
  }), [g, v] = u.useState(null), [b, y] = u.useState(null), w = u.useRef(!1), x = g ? !!i || !!g.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), S = {
    checked: m,
    disabled: a,
    setChecked: h,
    control: g,
    setControl: v,
    name: s,
    form: i,
    value: f,
    hasConsumerStoppedPropagationRef: w,
    required: c,
    defaultChecked: Tn(o) ? !1 : o,
    isFormControl: x,
    bubbleInput: b,
    setBubbleInput: y
  };
  return /* @__PURE__ */ d(
    EN,
    {
      scope: t,
      ...S,
      children: RN(p) ? p(S) : r
    }
  );
}
var bh = "CheckboxTrigger", yh = u.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
    const {
      control: a,
      value: i,
      disabled: s,
      checked: l,
      required: c,
      setControl: f,
      setChecked: p,
      hasConsumerStoppedPropagationRef: m,
      isFormControl: h,
      bubbleInput: g
    } = Wc(bh, e), v = ae(o, f), b = u.useRef(l);
    return u.useEffect(() => {
      const y = a == null ? void 0 : a.form;
      if (y) {
        const w = () => p(b.current);
        return y.addEventListener("reset", w), () => y.removeEventListener("reset", w);
      }
    }, [a, p]), /* @__PURE__ */ d(
      Q.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Tn(l) ? "mixed" : l,
        "aria-required": c,
        "data-state": Ph(l),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: i,
        ...r,
        ref: v,
        onKeyDown: j(t, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: j(n, (y) => {
          p((w) => Tn(w) ? !0 : !w), g && h && (m.current = y.isPropagationStopped(), m.current || y.stopPropagation());
        })
      }
    );
  }
);
yh.displayName = bh;
var Vc = u.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: l,
      onCheckedChange: c,
      form: f,
      ...p
    } = e;
    return /* @__PURE__ */ d(
      _N,
      {
        __scopeCheckbox: n,
        checked: o,
        defaultChecked: a,
        disabled: s,
        required: i,
        onCheckedChange: c,
        name: r,
        form: f,
        value: l,
        internal_do_not_use_render: ({ isFormControl: m }) => /* @__PURE__ */ K(ze, { children: [
          /* @__PURE__ */ d(
            yh,
            {
              ...p,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          m && /* @__PURE__ */ d(
            Ch,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
Vc.displayName = Fi;
var wh = "CheckboxIndicator", xh = u.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = Wc(wh, n);
    return /* @__PURE__ */ d(
      Le,
      {
        present: r || Tn(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ d(
          Q.span,
          {
            "data-state": Ph(a.checked),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
xh.displayName = wh;
var Sh = "CheckboxBubbleInput", Ch = u.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: a,
      defaultChecked: i,
      required: s,
      disabled: l,
      name: c,
      value: f,
      form: p,
      bubbleInput: m,
      setBubbleInput: h
    } = Wc(Sh, e), g = ae(n, h), v = Wr(a), b = Yo(r);
    u.useEffect(() => {
      const w = m;
      if (!w) return;
      const x = window.HTMLInputElement.prototype, C = Object.getOwnPropertyDescriptor(
        x,
        "checked"
      ).set, N = !o.current;
      if (v !== a && C) {
        const P = new Event("click", { bubbles: N });
        w.indeterminate = Tn(a), C.call(w, Tn(a) ? !1 : a), w.dispatchEvent(P);
      }
    }, [m, v, a, o]);
    const y = u.useRef(Tn(a) ? !1 : a);
    return /* @__PURE__ */ d(
      Q.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i ?? y.current,
        required: s,
        disabled: l,
        name: c,
        value: f,
        form: p,
        ...t,
        tabIndex: -1,
        ref: g,
        style: {
          ...t.style,
          ...b,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
Ch.displayName = Sh;
function RN(e) {
  return typeof e == "function";
}
function Tn(e) {
  return e === "indeterminate";
}
function Ph(e) {
  return Tn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const TN = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Vc,
  {
    ref: n,
    className: R(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d(xh, { className: R("flex items-center justify-center text-current"), children: /* @__PURE__ */ d(Ko, { className: "h-4 w-4" }) })
  }
));
TN.displayName = Vc.displayName;
var MN = u[" useId ".trim().toString()] || (() => {
}), AN = 0;
function Te(e) {
  const [t, n] = u.useState(MN());
  return $e(() => {
    n((r) => r ?? String(AN++));
  }, [e]), t ? `radix-${t}` : "";
}
var ON = u.createContext(void 0);
function Ft(e) {
  const t = u.useContext(ON);
  return e || t || "ltr";
}
var $s = "rovingFocusGroup.onEntryFocus", DN = { bubbles: !1, cancelable: !0 }, qo = "RovingFocusGroup", [Tl, Nh, IN] = gn(qo), [kN, en] = Me(
  qo,
  [IN]
), [$N, LN] = kN(qo), Eh = u.forwardRef(
  (e, t) => /* @__PURE__ */ d(Tl.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(Tl.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(FN, { ...e, ref: t }) }) })
);
Eh.displayName = qo;
var FN = u.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: l,
    onEntryFocus: c,
    preventScrollOnEntryFocus: f = !1,
    ...p
  } = e, m = u.useRef(null), h = ae(t, m), g = Ft(a), [v, b] = Ae({
    prop: i,
    defaultProp: s ?? null,
    onChange: l,
    caller: qo
  }), [y, w] = u.useState(!1), x = xe(c), S = Nh(n), C = u.useRef(!1), [N, P] = u.useState(0);
  return u.useEffect(() => {
    const M = m.current;
    if (M)
      return M.addEventListener($s, x), () => M.removeEventListener($s, x);
  }, [x]), /* @__PURE__ */ d(
    $N,
    {
      scope: n,
      orientation: r,
      dir: g,
      loop: o,
      currentTabStopId: v,
      onItemFocus: u.useCallback(
        (M) => b(M),
        [b]
      ),
      onItemShiftTab: u.useCallback(() => w(!0), []),
      onFocusableItemAdd: u.useCallback(
        () => P((M) => M + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => P((M) => M - 1),
        []
      ),
      children: /* @__PURE__ */ d(
        Q.div,
        {
          tabIndex: y || N === 0 ? -1 : 0,
          "data-orientation": r,
          ...p,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: j(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: j(e.onFocus, (M) => {
            const _ = !C.current;
            if (M.target === M.currentTarget && _ && !y) {
              const B = new CustomEvent($s, DN);
              if (M.currentTarget.dispatchEvent(B), !B.defaultPrevented) {
                const T = S().filter((W) => W.focusable), k = T.find((W) => W.active), G = T.find((W) => W.id === v), U = [k, G, ...T].filter(
                  Boolean
                ).map((W) => W.ref.current);
                Th(U, f);
              }
            }
            C.current = !1;
          }),
          onBlur: j(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), _h = "RovingFocusGroupItem", Rh = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: i,
      ...s
    } = e, l = Te(), c = a || l, f = LN(_h, n), p = f.currentTabStopId === c, m = Nh(n), { onFocusableItemAdd: h, onFocusableItemRemove: g, currentTabStopId: v } = f;
    return u.useEffect(() => {
      if (r)
        return h(), () => g();
    }, [r, h, g]), /* @__PURE__ */ d(
      Tl.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ d(
          Q.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": f.orientation,
            ...s,
            ref: t,
            onMouseDown: j(e.onMouseDown, (b) => {
              r ? f.onItemFocus(c) : b.preventDefault();
            }),
            onFocus: j(e.onFocus, () => f.onItemFocus(c)),
            onKeyDown: j(e.onKeyDown, (b) => {
              if (b.key === "Tab" && b.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (b.target !== b.currentTarget) return;
              const y = jN(b, f.orientation, f.dir);
              if (y !== void 0) {
                if (b.metaKey || b.ctrlKey || b.altKey || b.shiftKey) return;
                b.preventDefault();
                let x = m().filter((S) => S.focusable).map((S) => S.ref.current);
                if (y === "last") x.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && x.reverse();
                  const S = x.indexOf(b.currentTarget);
                  x = f.loop ? HN(x, S + 1) : x.slice(S + 1);
                }
                setTimeout(() => Th(x));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: p, hasTabStop: v != null }) : i
          }
        )
      }
    );
  }
);
Rh.displayName = _h;
var BN = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function zN(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function jN(e, t, n) {
  const r = zN(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return BN[r];
}
function Th(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function HN(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Xo = Eh, Zo = Rh, Gc = "Radio", [WN, Mh] = Me(Gc), [VN, GN] = WN(Gc), Ah = u.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: o = !1,
      required: a,
      disabled: i,
      value: s = "on",
      onCheck: l,
      form: c,
      ...f
    } = e, [p, m] = u.useState(null), h = ae(t, (b) => m(b)), g = u.useRef(!1), v = p ? c || !!p.closest("form") : !0;
    return /* @__PURE__ */ K(VN, { scope: n, checked: o, disabled: i, children: [
      /* @__PURE__ */ d(
        Q.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": kh(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: s,
          ...f,
          ref: h,
          onClick: j(e.onClick, (b) => {
            o || l == null || l(), v && (g.current = b.isPropagationStopped(), g.current || b.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ d(
        Ih,
        {
          control: p,
          bubbles: !g.current,
          name: r,
          value: s,
          checked: o,
          required: a,
          disabled: i,
          form: c,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Ah.displayName = Gc;
var Oh = "RadioIndicator", Dh = u.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = GN(Oh, n);
    return /* @__PURE__ */ d(Le, { present: r || a.checked, children: /* @__PURE__ */ d(
      Q.span,
      {
        "data-state": kh(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Dh.displayName = Oh;
var UN = "RadioBubbleInput", Ih = u.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const i = u.useRef(null), s = ae(i, a), l = Wr(n), c = Yo(t);
    return u.useEffect(() => {
      const f = i.current;
      if (!f) return;
      const p = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (l !== n && h) {
        const g = new Event("click", { bubbles: r });
        h.call(f, n), f.dispatchEvent(g);
      }
    }, [l, n, r]), /* @__PURE__ */ d(
      Q.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: s,
        style: {
          ...o.style,
          ...c,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Ih.displayName = UN;
function kh(e) {
  return e ? "checked" : "unchecked";
}
var KN = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Bi = "RadioGroup", [YN, aY] = Me(Bi, [
  en,
  Mh
]), $h = en(), Lh = Mh(), [qN, XN] = YN(Bi), Fh = u.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: a,
      required: i = !1,
      disabled: s = !1,
      orientation: l,
      dir: c,
      loop: f = !0,
      onValueChange: p,
      ...m
    } = e, h = $h(n), g = Ft(c), [v, b] = Ae({
      prop: a,
      defaultProp: o ?? null,
      onChange: p,
      caller: Bi
    });
    return /* @__PURE__ */ d(
      qN,
      {
        scope: n,
        name: r,
        required: i,
        disabled: s,
        value: v,
        onValueChange: b,
        children: /* @__PURE__ */ d(
          Xo,
          {
            asChild: !0,
            ...h,
            orientation: l,
            dir: g,
            loop: f,
            children: /* @__PURE__ */ d(
              Q.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": l,
                "data-disabled": s ? "" : void 0,
                dir: g,
                ...m,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
Fh.displayName = Bi;
var Bh = "RadioGroupItem", zh = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = XN(Bh, n), i = a.disabled || r, s = $h(n), l = Lh(n), c = u.useRef(null), f = ae(t, c), p = a.value === o.value, m = u.useRef(!1);
    return u.useEffect(() => {
      const h = (v) => {
        KN.includes(v.key) && (m.current = !0);
      }, g = () => m.current = !1;
      return document.addEventListener("keydown", h), document.addEventListener("keyup", g), () => {
        document.removeEventListener("keydown", h), document.removeEventListener("keyup", g);
      };
    }, []), /* @__PURE__ */ d(
      Zo,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: p,
        children: /* @__PURE__ */ d(
          Ah,
          {
            disabled: i,
            required: a.required,
            checked: p,
            ...l,
            ...o,
            name: a.name,
            ref: f,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: j((h) => {
              h.key === "Enter" && h.preventDefault();
            }),
            onFocus: j(o.onFocus, () => {
              var h;
              m.current && ((h = c.current) == null || h.click());
            })
          }
        )
      }
    );
  }
);
zh.displayName = Bh;
var ZN = "RadioGroupIndicator", jh = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = Lh(n);
    return /* @__PURE__ */ d(Dh, { ...o, ...r, ref: t });
  }
);
jh.displayName = ZN;
var Hh = Fh, Wh = zh, QN = jh;
const JN = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(Hh, { className: R("grid gap-2", e), ...t, ref: n }));
JN.displayName = Hh.displayName;
const eE = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Wh,
  {
    ref: n,
    className: R(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d(QN, { className: "flex items-center justify-center", children: /* @__PURE__ */ d($i, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
eE.displayName = Wh.displayName;
function Ro(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var Ls = 0;
function zi() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? sf()), document.body.insertAdjacentElement("beforeend", e[1] ?? sf()), Ls++, () => {
      Ls === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Ls--;
    };
  }, []);
}
function sf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Fs = "focusScope.autoFocusOnMount", Bs = "focusScope.autoFocusOnUnmount", lf = { bubbles: !1, cancelable: !0 }, tE = "FocusScope", Qo = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, l] = u.useState(null), c = xe(o), f = xe(a), p = u.useRef(null), m = ae(t, (v) => l(v)), h = u.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  u.useEffect(() => {
    if (r) {
      let v = function(x) {
        if (h.paused || !s) return;
        const S = x.target;
        s.contains(S) ? p.current = S : _n(p.current, { select: !0 });
      }, b = function(x) {
        if (h.paused || !s) return;
        const S = x.relatedTarget;
        S !== null && (s.contains(S) || _n(p.current, { select: !0 }));
      }, y = function(x) {
        if (document.activeElement === document.body)
          for (const C of x)
            C.removedNodes.length > 0 && _n(s);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", b);
      const w = new MutationObserver(y);
      return s && w.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", b), w.disconnect();
      };
    }
  }, [r, s, h.paused]), u.useEffect(() => {
    if (s) {
      uf.add(h);
      const v = document.activeElement;
      if (!s.contains(v)) {
        const y = new CustomEvent(Fs, lf);
        s.addEventListener(Fs, c), s.dispatchEvent(y), y.defaultPrevented || (nE(sE(Vh(s)), { select: !0 }), document.activeElement === v && _n(s));
      }
      return () => {
        s.removeEventListener(Fs, c), setTimeout(() => {
          const y = new CustomEvent(Bs, lf);
          s.addEventListener(Bs, f), s.dispatchEvent(y), y.defaultPrevented || _n(v ?? document.body, { select: !0 }), s.removeEventListener(Bs, f), uf.remove(h);
        }, 0);
      };
    }
  }, [s, c, f, h]);
  const g = u.useCallback(
    (v) => {
      if (!n && !r || h.paused) return;
      const b = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, y = document.activeElement;
      if (b && y) {
        const w = v.currentTarget, [x, S] = rE(w);
        x && S ? !v.shiftKey && y === S ? (v.preventDefault(), n && _n(x, { select: !0 })) : v.shiftKey && y === x && (v.preventDefault(), n && _n(S, { select: !0 })) : y === w && v.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ d(Q.div, { tabIndex: -1, ...i, ref: m, onKeyDown: g });
});
Qo.displayName = tE;
function nE(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (_n(r, { select: t }), document.activeElement !== n) return;
}
function rE(e) {
  const t = Vh(e), n = cf(t, e), r = cf(t.reverse(), e);
  return [n, r];
}
function Vh(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function cf(e, t) {
  for (const n of e)
    if (!oE(n, { upTo: t })) return n;
}
function oE(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function aE(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function _n(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && aE(e) && t && e.select();
  }
}
var uf = iE();
function iE() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = df(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = df(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function df(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function sE(e) {
  return e.filter((t) => t.tagName !== "A");
}
const lE = ["top", "right", "bottom", "left"], An = Math.min, gt = Math.max, Ja = Math.round, xa = Math.floor, qt = (e) => ({
  x: e,
  y: e
}), cE = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, uE = {
  start: "end",
  end: "start"
};
function Ml(e, t, n) {
  return gt(e, An(t, n));
}
function pn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function mn(e) {
  return e.split("-")[0];
}
function Vr(e) {
  return e.split("-")[1];
}
function Uc(e) {
  return e === "x" ? "y" : "x";
}
function Kc(e) {
  return e === "y" ? "height" : "width";
}
const dE = /* @__PURE__ */ new Set(["top", "bottom"]);
function Kt(e) {
  return dE.has(mn(e)) ? "y" : "x";
}
function Yc(e) {
  return Uc(Kt(e));
}
function fE(e, t, n) {
  n === void 0 && (n = !1);
  const r = Vr(e), o = Yc(e), a = Kc(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = ei(i)), [i, ei(i)];
}
function pE(e) {
  const t = ei(e);
  return [Al(e), t, Al(t)];
}
function Al(e) {
  return e.replace(/start|end/g, (t) => uE[t]);
}
const ff = ["left", "right"], pf = ["right", "left"], mE = ["top", "bottom"], hE = ["bottom", "top"];
function vE(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? pf : ff : t ? ff : pf;
    case "left":
    case "right":
      return t ? mE : hE;
    default:
      return [];
  }
}
function gE(e, t, n, r) {
  const o = Vr(e);
  let a = vE(mn(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Al)))), a;
}
function ei(e) {
  return e.replace(/left|right|bottom|top/g, (t) => cE[t]);
}
function bE(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Gh(e) {
  return typeof e != "number" ? bE(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ti(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function mf(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Kt(t), i = Yc(t), s = Kc(i), l = mn(t), c = a === "y", f = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, m = r[s] / 2 - o[s] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Vr(t)) {
    case "start":
      h[i] -= m * (n && c ? -1 : 1);
      break;
    case "end":
      h[i] += m * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const yE = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = a.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: p
  } = mf(c, r, l), m = r, h = {}, g = 0;
  for (let v = 0; v < s.length; v++) {
    const {
      name: b,
      fn: y
    } = s[v], {
      x: w,
      y: x,
      data: S,
      reset: C
    } = await y({
      x: f,
      y: p,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: h,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = w ?? f, p = x ?? p, h = {
      ...h,
      [b]: {
        ...h[b],
        ...S
      }
    }, C && g <= 50 && (g++, typeof C == "object" && (C.placement && (m = C.placement), C.rects && (c = C.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: f,
      y: p
    } = mf(c, m, l)), v = -1);
  }
  return {
    x: f,
    y: p,
    placement: m,
    strategy: o,
    middlewareData: h
  };
};
async function To(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: p = "floating",
    altBoundary: m = !1,
    padding: h = 0
  } = pn(t, e), g = Gh(h), b = s[m ? p === "floating" ? "reference" : "floating" : p], y = ti(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(b))) == null || n ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: f,
    strategy: l
  })), w = p === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), S = await (a.isElement == null ? void 0 : a.isElement(x)) ? await (a.getScale == null ? void 0 : a.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = ti(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: x,
    strategy: l
  }) : w);
  return {
    top: (y.top - C.top + g.top) / S.y,
    bottom: (C.bottom - y.bottom + g.bottom) / S.y,
    left: (y.left - C.left + g.left) / S.x,
    right: (C.right - y.right + g.right) / S.x
  };
}
const wE = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: l
    } = t, {
      element: c,
      padding: f = 0
    } = pn(e, t) || {};
    if (c == null)
      return {};
    const p = Gh(f), m = {
      x: n,
      y: r
    }, h = Yc(o), g = Kc(h), v = await i.getDimensions(c), b = h === "y", y = b ? "top" : "left", w = b ? "bottom" : "right", x = b ? "clientHeight" : "clientWidth", S = a.reference[g] + a.reference[h] - m[h] - a.floating[g], C = m[h] - a.reference[h], N = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let P = N ? N[x] : 0;
    (!P || !await (i.isElement == null ? void 0 : i.isElement(N))) && (P = s.floating[x] || a.floating[g]);
    const M = S / 2 - C / 2, _ = P / 2 - v[g] / 2 - 1, B = An(p[y], _), T = An(p[w], _), k = B, G = P - v[g] - T, $ = P / 2 - v[g] / 2 + M, U = Ml(k, $, G), W = !l.arrow && Vr(o) != null && $ !== U && a.reference[g] / 2 - ($ < k ? B : T) - v[g] / 2 < 0, F = W ? $ < k ? $ - k : $ - G : 0;
    return {
      [h]: m[h] + F,
      data: {
        [h]: U,
        centerOffset: $ - U - F,
        ...W && {
          alignmentOffset: F
        }
      },
      reset: W
    };
  }
}), xE = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: l,
        elements: c
      } = t, {
        mainAxis: f = !0,
        crossAxis: p = !0,
        fallbackPlacements: m,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: v = !0,
        ...b
      } = pn(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const y = mn(o), w = Kt(s), x = mn(s) === s, S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), C = m || (x || !v ? [ei(s)] : pE(s)), N = g !== "none";
      !m && N && C.push(...gE(s, v, g, S));
      const P = [s, ...C], M = await To(t, b), _ = [];
      let B = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (f && _.push(M[y]), p) {
        const $ = fE(o, i, S);
        _.push(M[$[0]], M[$[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: _
      }], !_.every(($) => $ <= 0)) {
        var T, k;
        const $ = (((T = a.flip) == null ? void 0 : T.index) || 0) + 1, U = P[$];
        if (U && (!(p === "alignment" ? w !== Kt(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        B.every((D) => D.overflows[0] > 0 && Kt(D.placement) === w)))
          return {
            data: {
              index: $,
              overflows: B
            },
            reset: {
              placement: U
            }
          };
        let W = (k = B.filter((F) => F.overflows[0] <= 0).sort((F, D) => F.overflows[1] - D.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!W)
          switch (h) {
            case "bestFit": {
              var G;
              const F = (G = B.filter((D) => {
                if (N) {
                  const L = Kt(D.placement);
                  return L === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((L) => L > 0).reduce((L, ee) => L + ee, 0)]).sort((D, L) => D[1] - L[1])[0]) == null ? void 0 : G[0];
              F && (W = F);
              break;
            }
            case "initialPlacement":
              W = s;
              break;
          }
        if (o !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
};
function hf(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function vf(e) {
  return lE.some((t) => e[t] >= 0);
}
const SE = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = pn(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await To(t, {
            ...o,
            elementContext: "reference"
          }), i = hf(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: vf(i)
            }
          };
        }
        case "escaped": {
          const a = await To(t, {
            ...o,
            altBoundary: !0
          }), i = hf(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: vf(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Uh = /* @__PURE__ */ new Set(["left", "top"]);
async function CE(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = mn(n), s = Vr(n), l = Kt(n) === "y", c = Uh.has(i) ? -1 : 1, f = a && l ? -1 : 1, p = pn(t, e);
  let {
    mainAxis: m,
    crossAxis: h,
    alignmentAxis: g
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return s && typeof g == "number" && (h = s === "end" ? g * -1 : g), l ? {
    x: h * f,
    y: m * c
  } : {
    x: m * c,
    y: h * f
  };
}
const PE = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = t, l = await CE(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, NE = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (b) => {
            let {
              x: y,
              y: w
            } = b;
            return {
              x: y,
              y: w
            };
          }
        },
        ...l
      } = pn(e, t), c = {
        x: n,
        y: r
      }, f = await To(t, l), p = Kt(mn(o)), m = Uc(p);
      let h = c[m], g = c[p];
      if (a) {
        const b = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", w = h + f[b], x = h - f[y];
        h = Ml(w, h, x);
      }
      if (i) {
        const b = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", w = g + f[b], x = g - f[y];
        g = Ml(w, g, x);
      }
      const v = s.fn({
        ...t,
        [m]: h,
        [p]: g
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [m]: a,
            [p]: i
          }
        }
      };
    }
  };
}, EE = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = pn(e, t), f = {
        x: n,
        y: r
      }, p = Kt(o), m = Uc(p);
      let h = f[m], g = f[p];
      const v = pn(s, t), b = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const x = m === "y" ? "height" : "width", S = a.reference[m] - a.floating[x] + b.mainAxis, C = a.reference[m] + a.reference[x] - b.mainAxis;
        h < S ? h = S : h > C && (h = C);
      }
      if (c) {
        var y, w;
        const x = m === "y" ? "width" : "height", S = Uh.has(mn(o)), C = a.reference[p] - a.floating[x] + (S && ((y = i.offset) == null ? void 0 : y[p]) || 0) + (S ? 0 : b.crossAxis), N = a.reference[p] + a.reference[x] + (S ? 0 : ((w = i.offset) == null ? void 0 : w[p]) || 0) - (S ? b.crossAxis : 0);
        g < C ? g = C : g > N && (g = N);
      }
      return {
        [m]: h,
        [p]: g
      };
    }
  };
}, _E = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: i,
        elements: s
      } = t, {
        apply: l = () => {
        },
        ...c
      } = pn(e, t), f = await To(t, c), p = mn(o), m = Vr(o), h = Kt(o) === "y", {
        width: g,
        height: v
      } = a.floating;
      let b, y;
      p === "top" || p === "bottom" ? (b = p, y = m === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = p, b = m === "end" ? "top" : "bottom");
      const w = v - f.top - f.bottom, x = g - f.left - f.right, S = An(v - f[b], w), C = An(g - f[y], x), N = !t.middlewareData.shift;
      let P = S, M = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (M = x), (r = t.middlewareData.shift) != null && r.enabled.y && (P = w), N && !m) {
        const B = gt(f.left, 0), T = gt(f.right, 0), k = gt(f.top, 0), G = gt(f.bottom, 0);
        h ? M = g - 2 * (B !== 0 || T !== 0 ? B + T : gt(f.left, f.right)) : P = v - 2 * (k !== 0 || G !== 0 ? k + G : gt(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: M,
        availableHeight: P
      });
      const _ = await i.getDimensions(s.floating);
      return g !== _.width || v !== _.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ji() {
  return typeof window < "u";
}
function Gr(e) {
  return Kh(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function bt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function tn(e) {
  var t;
  return (t = (Kh(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Kh(e) {
  return ji() ? e instanceof Node || e instanceof bt(e).Node : !1;
}
function It(e) {
  return ji() ? e instanceof Element || e instanceof bt(e).Element : !1;
}
function Zt(e) {
  return ji() ? e instanceof HTMLElement || e instanceof bt(e).HTMLElement : !1;
}
function gf(e) {
  return !ji() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof bt(e).ShadowRoot;
}
const RE = /* @__PURE__ */ new Set(["inline", "contents"]);
function Jo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = kt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !RE.has(o);
}
const TE = /* @__PURE__ */ new Set(["table", "td", "th"]);
function ME(e) {
  return TE.has(Gr(e));
}
const AE = [":popover-open", ":modal"];
function Hi(e) {
  return AE.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const OE = ["transform", "translate", "scale", "rotate", "perspective"], DE = ["transform", "translate", "scale", "rotate", "perspective", "filter"], IE = ["paint", "layout", "strict", "content"];
function qc(e) {
  const t = Xc(), n = It(e) ? kt(e) : e;
  return OE.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || DE.some((r) => (n.willChange || "").includes(r)) || IE.some((r) => (n.contain || "").includes(r));
}
function kE(e) {
  let t = On(e);
  for (; Zt(t) && !Tr(t); ) {
    if (qc(t))
      return t;
    if (Hi(t))
      return null;
    t = On(t);
  }
  return null;
}
function Xc() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const $E = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Tr(e) {
  return $E.has(Gr(e));
}
function kt(e) {
  return bt(e).getComputedStyle(e);
}
function Wi(e) {
  return It(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function On(e) {
  if (Gr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    gf(e) && e.host || // Fallback.
    tn(e)
  );
  return gf(t) ? t.host : t;
}
function Yh(e) {
  const t = On(e);
  return Tr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Zt(t) && Jo(t) ? t : Yh(t);
}
function Mo(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Yh(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = bt(o);
  if (a) {
    const s = Ol(i);
    return t.concat(i, i.visualViewport || [], Jo(o) ? o : [], s && n ? Mo(s) : []);
  }
  return t.concat(o, Mo(o, [], n));
}
function Ol(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function qh(e) {
  const t = kt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Zt(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = Ja(n) !== a || Ja(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function Zc(e) {
  return It(e) ? e : e.contextElement;
}
function Pr(e) {
  const t = Zc(e);
  if (!Zt(t))
    return qt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = qh(t);
  let i = (a ? Ja(n.width) : n.width) / r, s = (a ? Ja(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const LE = /* @__PURE__ */ qt(0);
function Xh(e) {
  const t = bt(e);
  return !Xc() || !t.visualViewport ? LE : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function FE(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== bt(e) ? !1 : t;
}
function Xn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Zc(e);
  let i = qt(1);
  t && (r ? It(r) && (i = Pr(r)) : i = Pr(e));
  const s = FE(a, n, r) ? Xh(a) : qt(0);
  let l = (o.left + s.x) / i.x, c = (o.top + s.y) / i.y, f = o.width / i.x, p = o.height / i.y;
  if (a) {
    const m = bt(a), h = r && It(r) ? bt(r) : r;
    let g = m, v = Ol(g);
    for (; v && r && h !== g; ) {
      const b = Pr(v), y = v.getBoundingClientRect(), w = kt(v), x = y.left + (v.clientLeft + parseFloat(w.paddingLeft)) * b.x, S = y.top + (v.clientTop + parseFloat(w.paddingTop)) * b.y;
      l *= b.x, c *= b.y, f *= b.x, p *= b.y, l += x, c += S, g = bt(v), v = Ol(g);
    }
  }
  return ti({
    width: f,
    height: p,
    x: l,
    y: c
  });
}
function Qc(e, t) {
  const n = Wi(e).scrollLeft;
  return t ? t.left + n : Xn(tn(e)).left + n;
}
function Zh(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Qc(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function BE(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = tn(r), s = t ? Hi(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = qt(1);
  const f = qt(0), p = Zt(r);
  if ((p || !p && !a) && ((Gr(r) !== "body" || Jo(i)) && (l = Wi(r)), Zt(r))) {
    const h = Xn(r);
    c = Pr(r), f.x = h.x + r.clientLeft, f.y = h.y + r.clientTop;
  }
  const m = i && !p && !a ? Zh(i, l, !0) : qt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + f.x + m.x,
    y: n.y * c.y - l.scrollTop * c.y + f.y + m.y
  };
}
function zE(e) {
  return Array.from(e.getClientRects());
}
function jE(e) {
  const t = tn(e), n = Wi(e), r = e.ownerDocument.body, o = gt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = gt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Qc(e);
  const s = -n.scrollTop;
  return kt(r).direction === "rtl" && (i += gt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function HE(e, t) {
  const n = bt(e), r = tn(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const c = Xc();
    (!c || c && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
const WE = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function VE(e, t) {
  const n = Xn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Zt(e) ? Pr(e) : qt(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, c = r * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: c
  };
}
function bf(e, t, n) {
  let r;
  if (t === "viewport")
    r = HE(e, n);
  else if (t === "document")
    r = jE(tn(e));
  else if (It(t))
    r = VE(t, n);
  else {
    const o = Xh(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ti(r);
}
function Qh(e, t) {
  const n = On(e);
  return n === t || !It(n) || Tr(n) ? !1 : kt(n).position === "fixed" || Qh(n, t);
}
function GE(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Mo(e, [], !1).filter((s) => It(s) && Gr(s) !== "body"), o = null;
  const a = kt(e).position === "fixed";
  let i = a ? On(e) : e;
  for (; It(i) && !Tr(i); ) {
    const s = kt(i), l = qc(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && !!o && WE.has(o.position) || Jo(i) && !l && Qh(e, i)) ? r = r.filter((f) => f !== i) : o = s, i = On(i);
  }
  return t.set(e, r), r;
}
function UE(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Hi(t) ? [] : GE(t, this._c) : [].concat(n), r], s = i[0], l = i.reduce((c, f) => {
    const p = bf(t, f, o);
    return c.top = gt(p.top, c.top), c.right = An(p.right, c.right), c.bottom = An(p.bottom, c.bottom), c.left = gt(p.left, c.left), c;
  }, bf(t, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function KE(e) {
  const {
    width: t,
    height: n
  } = qh(e);
  return {
    width: t,
    height: n
  };
}
function YE(e, t, n) {
  const r = Zt(t), o = tn(t), a = n === "fixed", i = Xn(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = qt(0);
  function c() {
    l.x = Qc(o);
  }
  if (r || !r && !a)
    if ((Gr(t) !== "body" || Jo(o)) && (s = Wi(t)), r) {
      const h = Xn(t, !0, a, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && c();
  a && !r && o && c();
  const f = o && !r && !a ? Zh(o, s) : qt(0), p = i.left + s.scrollLeft - l.x - f.x, m = i.top + s.scrollTop - l.y - f.y;
  return {
    x: p,
    y: m,
    width: i.width,
    height: i.height
  };
}
function zs(e) {
  return kt(e).position === "static";
}
function yf(e, t) {
  if (!Zt(e) || kt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return tn(e) === n && (n = n.ownerDocument.body), n;
}
function Jh(e, t) {
  const n = bt(e);
  if (Hi(e))
    return n;
  if (!Zt(e)) {
    let o = On(e);
    for (; o && !Tr(o); ) {
      if (It(o) && !zs(o))
        return o;
      o = On(o);
    }
    return n;
  }
  let r = yf(e, t);
  for (; r && ME(r) && zs(r); )
    r = yf(r, t);
  return r && Tr(r) && zs(r) && !qc(r) ? n : r || kE(e) || n;
}
const qE = async function(e) {
  const t = this.getOffsetParent || Jh, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: YE(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function XE(e) {
  return kt(e).direction === "rtl";
}
const ZE = {
  convertOffsetParentRelativeRectToViewportRelativeRect: BE,
  getDocumentElement: tn,
  getClippingRect: UE,
  getOffsetParent: Jh,
  getElementRects: qE,
  getClientRects: zE,
  getDimensions: KE,
  getScale: Pr,
  isElement: It,
  isRTL: XE
};
function ev(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function QE(e, t) {
  let n = null, r;
  const o = tn(e);
  function a() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function i(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), a();
    const c = e.getBoundingClientRect(), {
      left: f,
      top: p,
      width: m,
      height: h
    } = c;
    if (s || t(), !m || !h)
      return;
    const g = xa(p), v = xa(o.clientWidth - (f + m)), b = xa(o.clientHeight - (p + h)), y = xa(f), x = {
      rootMargin: -g + "px " + -v + "px " + -b + "px " + -y + "px",
      threshold: gt(0, An(1, l)) || 1
    };
    let S = !0;
    function C(N) {
      const P = N[0].intersectionRatio;
      if (P !== l) {
        if (!S)
          return i();
        P ? i(!1, P) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !ev(c, e.getBoundingClientRect()) && i(), S = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, x);
    }
    n.observe(e);
  }
  return i(!0), a;
}
function JE(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = Zc(e), f = o || a ? [...c ? Mo(c) : [], ...Mo(t)] : [];
  f.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const p = c && s ? QE(c, n) : null;
  let m = -1, h = null;
  i && (h = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === c && h && (h.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var x;
      (x = h) == null || x.observe(t);
    })), n();
  }), c && !l && h.observe(c), h.observe(t));
  let g, v = l ? Xn(e) : null;
  l && b();
  function b() {
    const y = Xn(e);
    v && !ev(v, y) && n(), v = y, g = requestAnimationFrame(b);
  }
  return n(), () => {
    var y;
    f.forEach((w) => {
      o && w.removeEventListener("scroll", n), a && w.removeEventListener("resize", n);
    }), p == null || p(), (y = h) == null || y.disconnect(), h = null, l && cancelAnimationFrame(g);
  };
}
const e_ = PE, t_ = NE, n_ = xE, r_ = _E, o_ = SE, wf = wE, a_ = EE, i_ = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ZE,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return yE(e, t, {
    ...o,
    platform: a
  });
};
var s_ = typeof document < "u", l_ = function() {
}, ja = s_ ? Ai : l_;
function ni(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!ni(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !ni(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function tv(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function xf(e, t) {
  const n = tv(e);
  return Math.round(t * n) / n;
}
function js(e) {
  const t = u.useRef(e);
  return ja(() => {
    t.current = e;
  }), t;
}
function c_(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: c
  } = e, [f, p] = u.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, h] = u.useState(r);
  ni(m, r) || h(r);
  const [g, v] = u.useState(null), [b, y] = u.useState(null), w = u.useCallback((D) => {
    D !== N.current && (N.current = D, v(D));
  }, []), x = u.useCallback((D) => {
    D !== P.current && (P.current = D, y(D));
  }, []), S = a || g, C = i || b, N = u.useRef(null), P = u.useRef(null), M = u.useRef(f), _ = l != null, B = js(l), T = js(o), k = js(c), G = u.useCallback(() => {
    if (!N.current || !P.current)
      return;
    const D = {
      placement: t,
      strategy: n,
      middleware: m
    };
    T.current && (D.platform = T.current), i_(N.current, P.current, D).then((L) => {
      const ee = {
        ...L,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: k.current !== !1
      };
      $.current && !ni(M.current, ee) && (M.current = ee, Go.flushSync(() => {
        p(ee);
      }));
    });
  }, [m, t, n, T, k]);
  ja(() => {
    c === !1 && M.current.isPositioned && (M.current.isPositioned = !1, p((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [c]);
  const $ = u.useRef(!1);
  ja(() => ($.current = !0, () => {
    $.current = !1;
  }), []), ja(() => {
    if (S && (N.current = S), C && (P.current = C), S && C) {
      if (B.current)
        return B.current(S, C, G);
      G();
    }
  }, [S, C, G, B, _]);
  const U = u.useMemo(() => ({
    reference: N,
    floating: P,
    setReference: w,
    setFloating: x
  }), [w, x]), W = u.useMemo(() => ({
    reference: S,
    floating: C
  }), [S, C]), F = u.useMemo(() => {
    const D = {
      position: n,
      left: 0,
      top: 0
    };
    if (!W.floating)
      return D;
    const L = xf(W.floating, f.x), ee = xf(W.floating, f.y);
    return s ? {
      ...D,
      transform: "translate(" + L + "px, " + ee + "px)",
      ...tv(W.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: L,
      top: ee
    };
  }, [n, s, W.floating, f.x, f.y]);
  return u.useMemo(() => ({
    ...f,
    update: G,
    refs: U,
    elements: W,
    floatingStyles: F
  }), [f, G, U, W, F]);
}
const u_ = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? wf({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? wf({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, d_ = (e, t) => ({
  ...e_(e),
  options: [e, t]
}), f_ = (e, t) => ({
  ...t_(e),
  options: [e, t]
}), p_ = (e, t) => ({
  ...a_(e),
  options: [e, t]
}), m_ = (e, t) => ({
  ...n_(e),
  options: [e, t]
}), h_ = (e, t) => ({
  ...r_(e),
  options: [e, t]
}), v_ = (e, t) => ({
  ...o_(e),
  options: [e, t]
}), g_ = (e, t) => ({
  ...u_(e),
  options: [e, t]
});
var b_ = "Arrow", nv = u.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ d(
    Q.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ d("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
nv.displayName = b_;
var y_ = nv, Jc = "Popper", [rv, nn] = Me(Jc), [w_, ov] = rv(Jc), av = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ d(w_, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
av.displayName = Jc;
var iv = "PopperAnchor", sv = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = ov(iv, n), i = u.useRef(null), s = ae(t, i);
    return u.useEffect(() => {
      a.onAnchorChange((r == null ? void 0 : r.current) || i.current);
    }), r ? null : /* @__PURE__ */ d(Q.div, { ...o, ref: s });
  }
);
sv.displayName = iv;
var eu = "PopperContent", [x_, S_] = rv(eu), lv = u.forwardRef(
  (e, t) => {
    var A, Y, J, ne, re, X;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: f = 0,
      sticky: p = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: g,
      ...v
    } = e, b = ov(eu, n), [y, w] = u.useState(null), x = ae(t, (q) => w(q)), [S, C] = u.useState(null), N = Yo(S), P = (N == null ? void 0 : N.width) ?? 0, M = (N == null ? void 0 : N.height) ?? 0, _ = r + (a !== "center" ? "-" + a : ""), B = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, T = Array.isArray(c) ? c : [c], k = T.length > 0, G = {
      padding: B,
      boundary: T.filter(P_),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: k
    }, { refs: $, floatingStyles: U, placement: W, isPositioned: F, middlewareData: D } = c_({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: _,
      whileElementsMounted: (...q) => JE(...q, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        d_({ mainAxis: o + M, alignmentAxis: i }),
        l && f_({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? p_() : void 0,
          ...G
        }),
        l && m_({ ...G }),
        h_({
          ...G,
          apply: ({ elements: q, rects: z, availableWidth: oe, availableHeight: le }) => {
            const { width: ve, height: de } = z.reference, ce = q.floating.style;
            ce.setProperty("--radix-popper-available-width", `${oe}px`), ce.setProperty("--radix-popper-available-height", `${le}px`), ce.setProperty("--radix-popper-anchor-width", `${ve}px`), ce.setProperty("--radix-popper-anchor-height", `${de}px`);
          }
        }),
        S && g_({ element: S, padding: s }),
        N_({ arrowWidth: P, arrowHeight: M }),
        m && v_({ strategy: "referenceHidden", ...G })
      ]
    }), [L, ee] = dv(W), te = xe(g);
    $e(() => {
      F && (te == null || te());
    }, [F, te]);
    const I = (A = D.arrow) == null ? void 0 : A.x, O = (Y = D.arrow) == null ? void 0 : Y.y, H = ((J = D.arrow) == null ? void 0 : J.centerOffset) !== 0, [V, Z] = u.useState();
    return $e(() => {
      y && Z(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ d(
      "div",
      {
        ref: $.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...U,
          transform: F ? U.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: V,
          "--radix-popper-transform-origin": [
            (ne = D.transformOrigin) == null ? void 0 : ne.x,
            (re = D.transformOrigin) == null ? void 0 : re.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((X = D.hide) == null ? void 0 : X.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ d(
          x_,
          {
            scope: n,
            placedSide: L,
            onArrowChange: C,
            arrowX: I,
            arrowY: O,
            shouldHideArrow: H,
            children: /* @__PURE__ */ d(
              Q.div,
              {
                "data-side": L,
                "data-align": ee,
                ...v,
                ref: x,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: F ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
lv.displayName = eu;
var cv = "PopperArrow", C_ = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, uv = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = S_(cv, r), i = C_[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ d(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ d(
          y_,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
uv.displayName = cv;
function P_(e) {
  return e !== null;
}
var N_ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, y, w;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, f] = dv(n), p = { start: "0%", center: "50%", end: "100%" }[f], m = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + s / 2, h = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + l / 2;
    let g = "", v = "";
    return c === "bottom" ? (g = i ? p : `${m}px`, v = `${-l}px`) : c === "top" ? (g = i ? p : `${m}px`, v = `${r.floating.height + l}px`) : c === "right" ? (g = `${-l}px`, v = i ? p : `${h}px`) : c === "left" && (g = `${r.floating.width + l}px`, v = i ? p : `${h}px`), { data: { x: g, y: v } };
  }
});
function dv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Ur = av, Kr = sv, ea = lv, ta = uv, E_ = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, pr = /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ new WeakMap(), Ca = {}, Hs = 0, fv = function(e) {
  return e && (e.host || fv(e.parentNode));
}, __ = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = fv(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, R_ = function(e, t, n, r) {
  var o = __(t, Array.isArray(e) ? e : [e]);
  Ca[n] || (Ca[n] = /* @__PURE__ */ new WeakMap());
  var a = Ca[n], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), c = function(p) {
    !p || s.has(p) || (s.add(p), c(p.parentNode));
  };
  o.forEach(c);
  var f = function(p) {
    !p || l.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (s.has(m))
        f(m);
      else
        try {
          var h = m.getAttribute(r), g = h !== null && h !== "false", v = (pr.get(m) || 0) + 1, b = (a.get(m) || 0) + 1;
          pr.set(m, v), a.set(m, b), i.push(m), v === 1 && g && Sa.set(m, !0), b === 1 && m.setAttribute(n, "true"), g || m.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", m, y);
        }
    });
  };
  return f(t), s.clear(), Hs++, function() {
    i.forEach(function(p) {
      var m = pr.get(p) - 1, h = a.get(p) - 1;
      pr.set(p, m), a.set(p, h), m || (Sa.has(p) || p.removeAttribute(r), Sa.delete(p)), h || p.removeAttribute(n);
    }), Hs--, Hs || (pr = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ new WeakMap(), Ca = {});
  };
}, Vi = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = E_(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), R_(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ut = function() {
  return Ut = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Ut.apply(this, arguments);
};
function pv(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function T_(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Ha = "right-scroll-bar-position", Wa = "width-before-scroll-bar", M_ = "with-scroll-bars-hidden", A_ = "--removed-body-scroll-bar-size";
function Ws(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function O_(e, t) {
  var n = Qe(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var D_ = typeof window < "u" ? u.useLayoutEffect : u.useEffect, Sf = /* @__PURE__ */ new WeakMap();
function I_(e, t) {
  var n = O_(null, function(r) {
    return e.forEach(function(o) {
      return Ws(o, r);
    });
  });
  return D_(function() {
    var r = Sf.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), i = n.current;
      o.forEach(function(s) {
        a.has(s) || Ws(s, null);
      }), a.forEach(function(s) {
        o.has(s) || Ws(s, i);
      });
    }
    Sf.set(n, e);
  }, [e]), n;
}
function k_(e) {
  return e;
}
function $_(e, t) {
  t === void 0 && (t = k_);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, r);
      return n.push(i), function() {
        n = n.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(a);
      }
      n = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var i = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(a), i = n;
      }
      var l = function() {
        var f = i;
        i = [], f.forEach(a);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(f) {
          i.push(f), c();
        },
        filter: function(f) {
          return i = i.filter(f), n;
        }
      };
    }
  };
  return o;
}
function L_(e) {
  e === void 0 && (e = {});
  var t = $_(null);
  return t.options = Ut({ async: !0, ssr: !1 }, e), t;
}
var mv = function(e) {
  var t = e.sideCar, n = pv(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, Ut({}, n));
};
mv.isSideCarExport = !0;
function F_(e, t) {
  return e.useMedium(t), mv;
}
var hv = L_(), Vs = function() {
}, Gi = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Vs,
    onWheelCapture: Vs,
    onTouchMoveCapture: Vs
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, l = e.className, c = e.removeScrollBar, f = e.enabled, p = e.shards, m = e.sideCar, h = e.noRelative, g = e.noIsolation, v = e.inert, b = e.allowPinchZoom, y = e.as, w = y === void 0 ? "div" : y, x = e.gapMode, S = pv(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = m, N = I_([n, t]), P = Ut(Ut({}, S), o);
  return u.createElement(
    u.Fragment,
    null,
    f && u.createElement(C, { sideCar: hv, removeScrollBar: c, shards: p, noRelative: h, noIsolation: g, inert: v, setCallbacks: a, allowPinchZoom: !!b, lockRef: n, gapMode: x }),
    i ? u.cloneElement(u.Children.only(s), Ut(Ut({}, P), { ref: N })) : u.createElement(w, Ut({}, P, { className: l, ref: N }), s)
  );
});
Gi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Gi.classNames = {
  fullWidth: Wa,
  zeroRight: Ha
};
var B_ = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function z_() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = B_();
  return t && e.setAttribute("nonce", t), e;
}
function j_(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function H_(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var W_ = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = z_()) && (j_(t, n), H_(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, V_ = function() {
  var e = W_();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, vv = function() {
  var e = V_(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, G_ = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Gs = function(e) {
  return parseInt(e || "", 10) || 0;
}, U_ = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Gs(n), Gs(r), Gs(o)];
}, K_ = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return G_;
  var t = U_(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Y_ = vv(), Nr = "data-scroll-locked", q_ = function(e, t, n, r) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(M_, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(Nr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ha, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Wa, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Ha, " .").concat(Ha, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Wa, " .").concat(Wa, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Nr, `] {
    `).concat(A_, ": ").concat(s, `px;
  }
`);
}, Cf = function() {
  var e = parseInt(document.body.getAttribute(Nr) || "0", 10);
  return isFinite(e) ? e : 0;
}, X_ = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Nr, (Cf() + 1).toString()), function() {
      var e = Cf() - 1;
      e <= 0 ? document.body.removeAttribute(Nr) : document.body.setAttribute(Nr, e.toString());
    };
  }, []);
}, Z_ = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  X_();
  var a = u.useMemo(function() {
    return K_(o);
  }, [o]);
  return u.createElement(Y_, { styles: q_(a, !t, o, n ? "" : "!important") });
}, Dl = !1;
if (typeof window < "u")
  try {
    var Pa = Object.defineProperty({}, "passive", {
      get: function() {
        return Dl = !0, !0;
      }
    });
    window.addEventListener("test", Pa, Pa), window.removeEventListener("test", Pa, Pa);
  } catch {
    Dl = !1;
  }
var mr = Dl ? { passive: !1 } : !1, Q_ = function(e) {
  return e.tagName === "TEXTAREA";
}, gv = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Q_(e) && n[t] === "visible")
  );
}, J_ = function(e) {
  return gv(e, "overflowY");
}, eR = function(e) {
  return gv(e, "overflowX");
}, Pf = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = bv(e, r);
    if (o) {
      var a = yv(e, r), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, tR = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, nR = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, bv = function(e, t) {
  return e === "v" ? J_(t) : eR(t);
}, yv = function(e, t) {
  return e === "v" ? tR(t) : nR(t);
}, rR = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, oR = function(e, t, n, r, o) {
  var a = rR(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, l = t.contains(s), c = !1, f = i > 0, p = 0, m = 0;
  do {
    if (!s)
      break;
    var h = yv(e, s), g = h[0], v = h[1], b = h[2], y = v - b - a * g;
    (g || y) && bv(e, s) && (p += y, m += g);
    var w = s.parentNode;
    s = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (f && (Math.abs(p) < 1 || !o) || !f && (Math.abs(m) < 1 || !o)) && (c = !0), c;
}, Na = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Nf = function(e) {
  return [e.deltaX, e.deltaY];
}, Ef = function(e) {
  return e && "current" in e ? e.current : e;
}, aR = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, iR = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, sR = 0, hr = [];
function lR(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(sR++)[0], a = u.useState(vv)[0], i = u.useRef(e);
  u.useEffect(function() {
    i.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = T_([e.lockRef.current], (e.shards || []).map(Ef), !0).filter(Boolean);
      return v.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = u.useCallback(function(v, b) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !i.current.allowPinchZoom;
    var y = Na(v), w = n.current, x = "deltaX" in v ? v.deltaX : w[0] - y[0], S = "deltaY" in v ? v.deltaY : w[1] - y[1], C, N = v.target, P = Math.abs(x) > Math.abs(S) ? "h" : "v";
    if ("touches" in v && P === "h" && N.type === "range")
      return !1;
    var M = Pf(P, N);
    if (!M)
      return !0;
    if (M ? C = P : (C = P === "v" ? "h" : "v", M = Pf(P, N)), !M)
      return !1;
    if (!r.current && "changedTouches" in v && (x || S) && (r.current = C), !C)
      return !0;
    var _ = r.current || C;
    return oR(_, b, v, _ === "h" ? x : S, !0);
  }, []), l = u.useCallback(function(v) {
    var b = v;
    if (!(!hr.length || hr[hr.length - 1] !== a)) {
      var y = "deltaY" in b ? Nf(b) : Na(b), w = t.current.filter(function(C) {
        return C.name === b.type && (C.target === b.target || b.target === C.shadowParent) && aR(C.delta, y);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var x = (i.current.shards || []).map(Ef).filter(Boolean).filter(function(C) {
          return C.contains(b.target);
        }), S = x.length > 0 ? s(b, x[0]) : !i.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), c = u.useCallback(function(v, b, y, w) {
    var x = { name: v, delta: b, target: y, should: w, shadowParent: cR(y) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== x;
      });
    }, 1);
  }, []), f = u.useCallback(function(v) {
    n.current = Na(v), r.current = void 0;
  }, []), p = u.useCallback(function(v) {
    c(v.type, Nf(v), v.target, s(v, e.lockRef.current));
  }, []), m = u.useCallback(function(v) {
    c(v.type, Na(v), v.target, s(v, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return hr.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", l, mr), document.addEventListener("touchmove", l, mr), document.addEventListener("touchstart", f, mr), function() {
      hr = hr.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", l, mr), document.removeEventListener("touchmove", l, mr), document.removeEventListener("touchstart", f, mr);
    };
  }, []);
  var h = e.removeScrollBar, g = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    g ? u.createElement(a, { styles: iR(o) }) : null,
    h ? u.createElement(Z_, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function cR(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const uR = F_(hv, lR);
var na = u.forwardRef(function(e, t) {
  return u.createElement(Gi, Ut({}, e, { ref: t, sideCar: uR }));
});
na.classNames = Gi.classNames;
var dR = [" ", "Enter", "ArrowUp", "ArrowDown"], fR = [" ", "Enter"], Zn = "Select", [Ui, Ki, pR] = gn(Zn), [Yr, iY] = Me(Zn, [
  pR,
  nn
]), Yi = nn(), [mR, $n] = Yr(Zn), [hR, vR] = Yr(Zn), wv = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    value: i,
    defaultValue: s,
    onValueChange: l,
    dir: c,
    name: f,
    autoComplete: p,
    disabled: m,
    required: h,
    form: g
  } = e, v = Yi(t), [b, y] = u.useState(null), [w, x] = u.useState(null), [S, C] = u.useState(!1), N = Ft(c), [P, M] = Ae({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Zn
  }), [_, B] = Ae({
    prop: i,
    defaultProp: s,
    onChange: l,
    caller: Zn
  }), T = u.useRef(null), k = b ? g || !!b.closest("form") : !0, [G, $] = u.useState(/* @__PURE__ */ new Set()), U = Array.from(G).map((W) => W.props.value).join(";");
  return /* @__PURE__ */ d(Ur, { ...v, children: /* @__PURE__ */ K(
    mR,
    {
      required: h,
      scope: t,
      trigger: b,
      onTriggerChange: y,
      valueNode: w,
      onValueNodeChange: x,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: C,
      contentId: Te(),
      value: _,
      onValueChange: B,
      open: P,
      onOpenChange: M,
      dir: N,
      triggerPointerDownPosRef: T,
      disabled: m,
      children: [
        /* @__PURE__ */ d(Ui.Provider, { scope: t, children: /* @__PURE__ */ d(
          hR,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback((W) => {
              $((F) => new Set(F).add(W));
            }, []),
            onNativeOptionRemove: u.useCallback((W) => {
              $((F) => {
                const D = new Set(F);
                return D.delete(W), D;
              });
            }, []),
            children: n
          }
        ) }),
        k ? /* @__PURE__ */ K(
          Gv,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: f,
            autoComplete: p,
            value: _,
            onChange: (W) => B(W.target.value),
            disabled: m,
            form: g,
            children: [
              _ === void 0 ? /* @__PURE__ */ d("option", { value: "" }) : null,
              Array.from(G)
            ]
          },
          U
        ) : null
      ]
    }
  ) });
};
wv.displayName = Zn;
var xv = "SelectTrigger", Sv = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Yi(n), i = $n(xv, n), s = i.disabled || r, l = ae(t, i.onTriggerChange), c = Ki(n), f = u.useRef("touch"), [p, m, h] = Kv((v) => {
      const b = c().filter((x) => !x.disabled), y = b.find((x) => x.value === i.value), w = Yv(b, v, y);
      w !== void 0 && i.onValueChange(w.value);
    }), g = (v) => {
      s || (i.onOpenChange(!0), h()), v && (i.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ d(Kr, { asChild: !0, ...a, children: /* @__PURE__ */ d(
      Q.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": Uv(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: j(o.onClick, (v) => {
          v.currentTarget.focus(), f.current !== "mouse" && g(v);
        }),
        onPointerDown: j(o.onPointerDown, (v) => {
          f.current = v.pointerType;
          const b = v.target;
          b.hasPointerCapture(v.pointerId) && b.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (g(v), v.preventDefault());
        }),
        onKeyDown: j(o.onKeyDown, (v) => {
          const b = p.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && m(v.key), !(b && v.key === " ") && dR.includes(v.key) && (g(), v.preventDefault());
        })
      }
    ) });
  }
);
Sv.displayName = xv;
var Cv = "SelectValue", Pv = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: i = "", ...s } = e, l = $n(Cv, n), { onValueNodeHasChildrenChange: c } = l, f = a !== void 0, p = ae(t, l.onValueNodeChange);
    return $e(() => {
      c(f);
    }, [c, f]), /* @__PURE__ */ d(
      Q.span,
      {
        ...s,
        ref: p,
        style: { pointerEvents: "none" },
        children: Uv(l.value) ? /* @__PURE__ */ d(ze, { children: i }) : a
      }
    );
  }
);
Pv.displayName = Cv;
var gR = "SelectIcon", Nv = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ d(Q.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Nv.displayName = gR;
var bR = "SelectPortal", Ev = (e) => /* @__PURE__ */ d(zr, { asChild: !0, ...e });
Ev.displayName = bR;
var Qn = "SelectContent", _v = u.forwardRef(
  (e, t) => {
    const n = $n(Qn, e.__scopeSelect), [r, o] = u.useState();
    if ($e(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Go.createPortal(
        /* @__PURE__ */ d(Rv, { scope: e.__scopeSelect, children: /* @__PURE__ */ d(Ui.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ d("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ d(Tv, { ...e, ref: t });
  }
);
_v.displayName = Qn;
var Mt = 10, [Rv, Ln] = Yr(Qn), yR = "SelectContentImpl", wR = /* @__PURE__ */ Mn("SelectContent.RemoveScroll"), Tv = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: s,
      sideOffset: l,
      align: c,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: h,
      sticky: g,
      hideWhenDetached: v,
      avoidCollisions: b,
      //
      ...y
    } = e, w = $n(Qn, n), [x, S] = u.useState(null), [C, N] = u.useState(null), P = ae(t, (A) => S(A)), [M, _] = u.useState(null), [B, T] = u.useState(
      null
    ), k = Ki(n), [G, $] = u.useState(!1), U = u.useRef(!1);
    u.useEffect(() => {
      if (x) return Vi(x);
    }, [x]), zi();
    const W = u.useCallback(
      (A) => {
        const [Y, ...J] = k().map((X) => X.ref.current), [ne] = J.slice(-1), re = document.activeElement;
        for (const X of A)
          if (X === re || (X == null || X.scrollIntoView({ block: "nearest" }), X === Y && C && (C.scrollTop = 0), X === ne && C && (C.scrollTop = C.scrollHeight), X == null || X.focus(), document.activeElement !== re)) return;
      },
      [k, C]
    ), F = u.useCallback(
      () => W([M, x]),
      [W, M, x]
    );
    u.useEffect(() => {
      G && F();
    }, [G, F]);
    const { onOpenChange: D, triggerPointerDownPosRef: L } = w;
    u.useEffect(() => {
      if (x) {
        let A = { x: 0, y: 0 };
        const Y = (ne) => {
          var re, X;
          A = {
            x: Math.abs(Math.round(ne.pageX) - (((re = L.current) == null ? void 0 : re.x) ?? 0)),
            y: Math.abs(Math.round(ne.pageY) - (((X = L.current) == null ? void 0 : X.y) ?? 0))
          };
        }, J = (ne) => {
          A.x <= 10 && A.y <= 10 ? ne.preventDefault() : x.contains(ne.target) || D(!1), document.removeEventListener("pointermove", Y), L.current = null;
        };
        return L.current !== null && (document.addEventListener("pointermove", Y), document.addEventListener("pointerup", J, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Y), document.removeEventListener("pointerup", J, { capture: !0 });
        };
      }
    }, [x, D, L]), u.useEffect(() => {
      const A = () => D(!1);
      return window.addEventListener("blur", A), window.addEventListener("resize", A), () => {
        window.removeEventListener("blur", A), window.removeEventListener("resize", A);
      };
    }, [D]);
    const [ee, te] = Kv((A) => {
      const Y = k().filter((re) => !re.disabled), J = Y.find((re) => re.ref.current === document.activeElement), ne = Yv(Y, A, J);
      ne && setTimeout(() => ne.ref.current.focus());
    }), I = u.useCallback(
      (A, Y, J) => {
        const ne = !U.current && !J;
        (w.value !== void 0 && w.value === Y || ne) && (_(A), ne && (U.current = !0));
      },
      [w.value]
    ), O = u.useCallback(() => x == null ? void 0 : x.focus(), [x]), H = u.useCallback(
      (A, Y, J) => {
        const ne = !U.current && !J;
        (w.value !== void 0 && w.value === Y || ne) && T(A);
      },
      [w.value]
    ), V = r === "popper" ? Il : Mv, Z = V === Il ? {
      side: s,
      sideOffset: l,
      align: c,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: h,
      sticky: g,
      hideWhenDetached: v,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ d(
      Rv,
      {
        scope: n,
        content: x,
        viewport: C,
        onViewportChange: N,
        itemRefCallback: I,
        selectedItem: M,
        onItemLeave: O,
        itemTextRefCallback: H,
        focusSelectedItem: F,
        selectedItemText: B,
        position: r,
        isPositioned: G,
        searchRef: ee,
        children: /* @__PURE__ */ d(na, { as: wR, allowPinchZoom: !0, children: /* @__PURE__ */ d(
          Qo,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (A) => {
              A.preventDefault();
            },
            onUnmountAutoFocus: j(o, (A) => {
              var Y;
              (Y = w.trigger) == null || Y.focus({ preventScroll: !0 }), A.preventDefault();
            }),
            children: /* @__PURE__ */ d(
              bn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (A) => A.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ d(
                  V,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (A) => A.preventDefault(),
                    ...y,
                    ...Z,
                    onPlaced: () => $(!0),
                    ref: P,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: j(y.onKeyDown, (A) => {
                      const Y = A.ctrlKey || A.altKey || A.metaKey;
                      if (A.key === "Tab" && A.preventDefault(), !Y && A.key.length === 1 && te(A.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(A.key)) {
                        let ne = k().filter((re) => !re.disabled).map((re) => re.ref.current);
                        if (["ArrowUp", "End"].includes(A.key) && (ne = ne.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(A.key)) {
                          const re = A.target, X = ne.indexOf(re);
                          ne = ne.slice(X + 1);
                        }
                        setTimeout(() => W(ne)), A.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Tv.displayName = yR;
var xR = "SelectItemAlignedPosition", Mv = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = $n(Qn, n), i = Ln(Qn, n), [s, l] = u.useState(null), [c, f] = u.useState(null), p = ae(t, (P) => f(P)), m = Ki(n), h = u.useRef(!1), g = u.useRef(!0), { viewport: v, selectedItem: b, selectedItemText: y, focusSelectedItem: w } = i, x = u.useCallback(() => {
    if (a.trigger && a.valueNode && s && c && v && b && y) {
      const P = a.trigger.getBoundingClientRect(), M = c.getBoundingClientRect(), _ = a.valueNode.getBoundingClientRect(), B = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const re = B.left - M.left, X = _.left - re, q = P.left - X, z = P.width + q, oe = Math.max(z, M.width), le = window.innerWidth - Mt, ve = Ro(X, [
          Mt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Mt, le - oe)
        ]);
        s.style.minWidth = z + "px", s.style.left = ve + "px";
      } else {
        const re = M.right - B.right, X = window.innerWidth - _.right - re, q = window.innerWidth - P.right - X, z = P.width + q, oe = Math.max(z, M.width), le = window.innerWidth - Mt, ve = Ro(X, [
          Mt,
          Math.max(Mt, le - oe)
        ]);
        s.style.minWidth = z + "px", s.style.right = ve + "px";
      }
      const T = m(), k = window.innerHeight - Mt * 2, G = v.scrollHeight, $ = window.getComputedStyle(c), U = parseInt($.borderTopWidth, 10), W = parseInt($.paddingTop, 10), F = parseInt($.borderBottomWidth, 10), D = parseInt($.paddingBottom, 10), L = U + W + G + D + F, ee = Math.min(b.offsetHeight * 5, L), te = window.getComputedStyle(v), I = parseInt(te.paddingTop, 10), O = parseInt(te.paddingBottom, 10), H = P.top + P.height / 2 - Mt, V = k - H, Z = b.offsetHeight / 2, A = b.offsetTop + Z, Y = U + W + A, J = L - Y;
      if (Y <= H) {
        const re = T.length > 0 && b === T[T.length - 1].ref.current;
        s.style.bottom = "0px";
        const X = c.clientHeight - v.offsetTop - v.offsetHeight, q = Math.max(
          V,
          Z + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (re ? O : 0) + X + F
        ), z = Y + q;
        s.style.height = z + "px";
      } else {
        const re = T.length > 0 && b === T[0].ref.current;
        s.style.top = "0px";
        const q = Math.max(
          H,
          U + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (re ? I : 0) + Z
        ) + J;
        s.style.height = q + "px", v.scrollTop = Y - H + v.offsetTop;
      }
      s.style.margin = `${Mt}px 0`, s.style.minHeight = ee + "px", s.style.maxHeight = k + "px", r == null || r(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    m,
    a.trigger,
    a.valueNode,
    s,
    c,
    v,
    b,
    y,
    a.dir,
    r
  ]);
  $e(() => x(), [x]);
  const [S, C] = u.useState();
  $e(() => {
    c && C(window.getComputedStyle(c).zIndex);
  }, [c]);
  const N = u.useCallback(
    (P) => {
      P && g.current === !0 && (x(), w == null || w(), g.current = !1);
    },
    [x, w]
  );
  return /* @__PURE__ */ d(
    CR,
    {
      scope: n,
      contentWrapper: s,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: N,
      children: /* @__PURE__ */ d(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ d(
            Q.div,
            {
              ...o,
              ref: p,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
Mv.displayName = xR;
var SR = "SelectPopperPosition", Il = u.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Mt,
    ...a
  } = e, i = Yi(n);
  return /* @__PURE__ */ d(
    ea,
    {
      ...i,
      ...a,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Il.displayName = SR;
var [CR, tu] = Yr(Qn, {}), kl = "SelectViewport", Av = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = Ln(kl, n), i = tu(kl, n), s = ae(t, a.onViewportChange), l = u.useRef(0);
    return /* @__PURE__ */ K(ze, { children: [
      /* @__PURE__ */ d(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ d(Ui.Slot, { scope: n, children: /* @__PURE__ */ d(
        Q.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: s,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: j(o.onScroll, (c) => {
            const f = c.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: m } = i;
            if (m != null && m.current && p) {
              const h = Math.abs(l.current - f.scrollTop);
              if (h > 0) {
                const g = window.innerHeight - Mt * 2, v = parseFloat(p.style.minHeight), b = parseFloat(p.style.height), y = Math.max(v, b);
                if (y < g) {
                  const w = y + h, x = Math.min(g, w), S = w - x;
                  p.style.height = x + "px", p.style.bottom === "0px" && (f.scrollTop = S > 0 ? S : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Av.displayName = kl;
var Ov = "SelectGroup", [PR, NR] = Yr(Ov), Dv = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Te();
    return /* @__PURE__ */ d(PR, { scope: n, id: o, children: /* @__PURE__ */ d(Q.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Dv.displayName = Ov;
var Iv = "SelectLabel", kv = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = NR(Iv, n);
    return /* @__PURE__ */ d(Q.div, { id: o.id, ...r, ref: t });
  }
);
kv.displayName = Iv;
var ri = "SelectItem", [ER, $v] = Yr(ri), Lv = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = $n(ri, n), l = Ln(ri, n), c = s.value === r, [f, p] = u.useState(a ?? ""), [m, h] = u.useState(!1), g = ae(
      t,
      (w) => {
        var x;
        return (x = l.itemRefCallback) == null ? void 0 : x.call(l, w, r, o);
      }
    ), v = Te(), b = u.useRef("touch"), y = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ d(
      ER,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: c,
        onItemTextChange: u.useCallback((w) => {
          p((x) => x || ((w == null ? void 0 : w.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ d(
          Ui.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ d(
              Q.div,
              {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": c && m,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: g,
                onFocus: j(i.onFocus, () => h(!0)),
                onBlur: j(i.onBlur, () => h(!1)),
                onClick: j(i.onClick, () => {
                  b.current !== "mouse" && y();
                }),
                onPointerUp: j(i.onPointerUp, () => {
                  b.current === "mouse" && y();
                }),
                onPointerDown: j(i.onPointerDown, (w) => {
                  b.current = w.pointerType;
                }),
                onPointerMove: j(i.onPointerMove, (w) => {
                  var x;
                  b.current = w.pointerType, o ? (x = l.onItemLeave) == null || x.call(l) : b.current === "mouse" && w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: j(i.onPointerLeave, (w) => {
                  var x;
                  w.currentTarget === document.activeElement && ((x = l.onItemLeave) == null || x.call(l));
                }),
                onKeyDown: j(i.onKeyDown, (w) => {
                  var S;
                  ((S = l.searchRef) == null ? void 0 : S.current) !== "" && w.key === " " || (fR.includes(w.key) && y(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Lv.displayName = ri;
var yo = "SelectItemText", Fv = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, i = $n(yo, n), s = Ln(yo, n), l = $v(yo, n), c = vR(yo, n), [f, p] = u.useState(null), m = ae(
      t,
      (y) => p(y),
      l.onItemTextChange,
      (y) => {
        var w;
        return (w = s.itemTextRefCallback) == null ? void 0 : w.call(s, y, l.value, l.disabled);
      }
    ), h = f == null ? void 0 : f.textContent, g = u.useMemo(
      () => /* @__PURE__ */ d("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: b } = c;
    return $e(() => (v(g), () => b(g)), [v, b, g]), /* @__PURE__ */ K(ze, { children: [
      /* @__PURE__ */ d(Q.span, { id: l.textId, ...a, ref: m }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? Go.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
Fv.displayName = yo;
var Bv = "SelectItemIndicator", zv = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return $v(Bv, n).isSelected ? /* @__PURE__ */ d(Q.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
zv.displayName = Bv;
var $l = "SelectScrollUpButton", jv = u.forwardRef((e, t) => {
  const n = Ln($l, e.__scopeSelect), r = tu($l, e.__scopeSelect), [o, a] = u.useState(!1), i = ae(t, r.onScrollButtonChange);
  return $e(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const c = l.scrollTop > 0;
        a(c);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ d(
    Wv,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
jv.displayName = $l;
var Ll = "SelectScrollDownButton", Hv = u.forwardRef((e, t) => {
  const n = Ln(Ll, e.__scopeSelect), r = tu(Ll, e.__scopeSelect), [o, a] = u.useState(!1), i = ae(t, r.onScrollButtonChange);
  return $e(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const c = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < c;
        a(f);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ d(
    Wv,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
Hv.displayName = Ll;
var Wv = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = Ln("SelectScrollButton", n), i = u.useRef(null), s = Ki(n), l = u.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return u.useEffect(() => () => l(), [l]), $e(() => {
    var f;
    const c = s().find((p) => p.ref.current === document.activeElement);
    (f = c == null ? void 0 : c.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ d(
    Q.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: j(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: j(o.onPointerMove, () => {
        var c;
        (c = a.onItemLeave) == null || c.call(a), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: j(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), _R = "SelectSeparator", Vv = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ d(Q.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Vv.displayName = _R;
var Fl = "SelectArrow", RR = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Yi(n), a = $n(Fl, n), i = Ln(Fl, n);
    return a.open && i.position === "popper" ? /* @__PURE__ */ d(ta, { ...o, ...r, ref: t }) : null;
  }
);
RR.displayName = Fl;
var TR = "SelectBubbleInput", Gv = u.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = u.useRef(null), a = ae(r, o), i = Wr(t);
    return u.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== t && f) {
        const p = new Event("change", { bubbles: !0 });
        f.call(s, t), s.dispatchEvent(p);
      }
    }, [i, t]), /* @__PURE__ */ d(
      Q.select,
      {
        ...n,
        style: { ...Im, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
Gv.displayName = TR;
function Uv(e) {
  return e === "" || e === void 0;
}
function Kv(e) {
  const t = xe(e), n = u.useRef(""), r = u.useRef(0), o = u.useCallback(
    (i) => {
      const s = n.current + i;
      t(s), function l(c) {
        n.current = c, window.clearTimeout(r.current), c !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      }(s);
    },
    [t]
  ), a = u.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function Yv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = MR(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function MR(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var AR = wv, qv = Sv, OR = Pv, DR = Nv, IR = Ev, Xv = _v, kR = Av, $R = Dv, Zv = kv, Qv = Lv, LR = Fv, FR = zv, Jv = jv, eg = Hv, tg = Vv;
const sY = AR, lY = $R, cY = OR, BR = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ K(
  qv,
  {
    ref: r,
    className: R(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ d(DR, { asChild: !0, children: /* @__PURE__ */ d(ki, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
BR.displayName = qv.displayName;
const ng = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Jv,
  {
    ref: n,
    className: R("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ d($P, { className: "h-4 w-4" })
  }
));
ng.displayName = Jv.displayName;
const rg = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  eg,
  {
    ref: n,
    className: R("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ d(ki, { className: "h-4 w-4" })
  }
));
rg.displayName = eg.displayName;
const zR = u.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ d(IR, { children: /* @__PURE__ */ K(
  Xv,
  {
    ref: o,
    className: R(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ d(ng, {}),
      /* @__PURE__ */ d(
        kR,
        {
          className: R(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ d(rg, {})
    ]
  }
) }));
zR.displayName = Xv.displayName;
const jR = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(Zv, { ref: n, className: R("py-1.5 pl-8 pr-2 text-sm font-semibold", e), ...t }));
jR.displayName = Zv.displayName;
const HR = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ K(
  Qv,
  {
    ref: r,
    className: R(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d(FR, { children: /* @__PURE__ */ d(Ko, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ d(LR, { children: t })
    ]
  }
));
HR.displayName = Qv.displayName;
const WR = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(tg, { ref: n, className: R("-mx-1 my-1 h-px bg-muted", e), ...t }));
WR.displayName = tg.displayName;
var og = ["PageUp", "PageDown"], ag = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], ig = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, qr = "Slider", [Bl, VR, GR] = gn(qr), [sg, uY] = Me(qr, [
  GR
]), [UR, qi] = sg(qr), lg = u.forwardRef(
  (e, t) => {
    const {
      name: n,
      min: r = 0,
      max: o = 100,
      step: a = 1,
      orientation: i = "horizontal",
      disabled: s = !1,
      minStepsBetweenThumbs: l = 0,
      defaultValue: c = [r],
      value: f,
      onValueChange: p = () => {
      },
      onValueCommit: m = () => {
      },
      inverted: h = !1,
      form: g,
      ...v
    } = e, b = u.useRef(/* @__PURE__ */ new Set()), y = u.useRef(0), x = i === "horizontal" ? KR : YR, [S = [], C] = Ae({
      prop: f,
      defaultProp: c,
      onChange: (T) => {
        var G;
        (G = [...b.current][y.current]) == null || G.focus(), p(T);
      }
    }), N = u.useRef(S);
    function P(T) {
      const k = JR(S, T);
      B(T, k);
    }
    function M(T) {
      B(T, y.current);
    }
    function _() {
      const T = N.current[y.current];
      S[y.current] !== T && m(S);
    }
    function B(T, k, { commit: G } = { commit: !1 }) {
      const $ = rT(a), U = oT(Math.round((T - r) / a) * a + r, $), W = Ro(U, [r, o]);
      C((F = []) => {
        const D = ZR(F, W, k);
        if (nT(D, l * a)) {
          y.current = D.indexOf(W);
          const L = String(D) !== String(F);
          return L && G && m(D), L ? D : F;
        } else
          return F;
      });
    }
    return /* @__PURE__ */ d(
      UR,
      {
        scope: e.__scopeSlider,
        name: n,
        disabled: s,
        min: r,
        max: o,
        valueIndexToChangeRef: y,
        thumbs: b.current,
        values: S,
        orientation: i,
        form: g,
        children: /* @__PURE__ */ d(Bl.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ d(Bl.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ d(
          x,
          {
            "aria-disabled": s,
            "data-disabled": s ? "" : void 0,
            ...v,
            ref: t,
            onPointerDown: j(v.onPointerDown, () => {
              s || (N.current = S);
            }),
            min: r,
            max: o,
            inverted: h,
            onSlideStart: s ? void 0 : P,
            onSlideMove: s ? void 0 : M,
            onSlideEnd: s ? void 0 : _,
            onHomeKeyDown: () => !s && B(r, 0, { commit: !0 }),
            onEndKeyDown: () => !s && B(o, S.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: T, direction: k }) => {
              if (!s) {
                const U = og.includes(T.key) || T.shiftKey && ag.includes(T.key) ? 10 : 1, W = y.current, F = S[W], D = a * U * k;
                B(F + D, W, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
lg.displayName = qr;
var [cg, ug] = sg(qr, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), KR = u.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      dir: o,
      inverted: a,
      onSlideStart: i,
      onSlideMove: s,
      onSlideEnd: l,
      onStepKeyDown: c,
      ...f
    } = e, [p, m] = u.useState(null), h = ae(t, (x) => m(x)), g = u.useRef(void 0), v = Ft(o), b = v === "ltr", y = b && !a || !b && a;
    function w(x) {
      const S = g.current || p.getBoundingClientRect(), C = [0, S.width], P = nu(C, y ? [n, r] : [r, n]);
      return g.current = S, P(x - S.left);
    }
    return /* @__PURE__ */ d(
      cg,
      {
        scope: e.__scopeSlider,
        startEdge: y ? "left" : "right",
        endEdge: y ? "right" : "left",
        direction: y ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ d(
          dg,
          {
            dir: v,
            "data-orientation": "horizontal",
            ...f,
            ref: h,
            style: {
              ...f.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (x) => {
              const S = w(x.clientX);
              i == null || i(S);
            },
            onSlideMove: (x) => {
              const S = w(x.clientX);
              s == null || s(S);
            },
            onSlideEnd: () => {
              g.current = void 0, l == null || l();
            },
            onStepKeyDown: (x) => {
              const C = ig[y ? "from-left" : "from-right"].includes(x.key);
              c == null || c({ event: x, direction: C ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), YR = u.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      inverted: o,
      onSlideStart: a,
      onSlideMove: i,
      onSlideEnd: s,
      onStepKeyDown: l,
      ...c
    } = e, f = u.useRef(null), p = ae(t, f), m = u.useRef(void 0), h = !o;
    function g(v) {
      const b = m.current || f.current.getBoundingClientRect(), y = [0, b.height], x = nu(y, h ? [r, n] : [n, r]);
      return m.current = b, x(v - b.top);
    }
    return /* @__PURE__ */ d(
      cg,
      {
        scope: e.__scopeSlider,
        startEdge: h ? "bottom" : "top",
        endEdge: h ? "top" : "bottom",
        size: "height",
        direction: h ? 1 : -1,
        children: /* @__PURE__ */ d(
          dg,
          {
            "data-orientation": "vertical",
            ...c,
            ref: p,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (v) => {
              const b = g(v.clientY);
              a == null || a(b);
            },
            onSlideMove: (v) => {
              const b = g(v.clientY);
              i == null || i(b);
            },
            onSlideEnd: () => {
              m.current = void 0, s == null || s();
            },
            onStepKeyDown: (v) => {
              const y = ig[h ? "from-bottom" : "from-top"].includes(v.key);
              l == null || l({ event: v, direction: y ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), dg = u.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: n,
      onSlideStart: r,
      onSlideMove: o,
      onSlideEnd: a,
      onHomeKeyDown: i,
      onEndKeyDown: s,
      onStepKeyDown: l,
      ...c
    } = e, f = qi(qr, n);
    return /* @__PURE__ */ d(
      Q.span,
      {
        ...c,
        ref: t,
        onKeyDown: j(e.onKeyDown, (p) => {
          p.key === "Home" ? (i(p), p.preventDefault()) : p.key === "End" ? (s(p), p.preventDefault()) : og.concat(ag).includes(p.key) && (l(p), p.preventDefault());
        }),
        onPointerDown: j(e.onPointerDown, (p) => {
          const m = p.target;
          m.setPointerCapture(p.pointerId), p.preventDefault(), f.thumbs.has(m) ? m.focus() : r(p);
        }),
        onPointerMove: j(e.onPointerMove, (p) => {
          p.target.hasPointerCapture(p.pointerId) && o(p);
        }),
        onPointerUp: j(e.onPointerUp, (p) => {
          const m = p.target;
          m.hasPointerCapture(p.pointerId) && (m.releasePointerCapture(p.pointerId), a(p));
        })
      }
    );
  }
), fg = "SliderTrack", pg = u.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = qi(fg, n);
    return /* @__PURE__ */ d(
      Q.span,
      {
        "data-disabled": o.disabled ? "" : void 0,
        "data-orientation": o.orientation,
        ...r,
        ref: t
      }
    );
  }
);
pg.displayName = fg;
var zl = "SliderRange", mg = u.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = qi(zl, n), a = ug(zl, n), i = u.useRef(null), s = ae(t, i), l = o.values.length, c = o.values.map(
      (m) => gg(m, o.min, o.max)
    ), f = l > 1 ? Math.min(...c) : 0, p = 100 - Math.max(...c);
    return /* @__PURE__ */ d(
      Q.span,
      {
        "data-orientation": o.orientation,
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: s,
        style: {
          ...e.style,
          [a.startEdge]: f + "%",
          [a.endEdge]: p + "%"
        }
      }
    );
  }
);
mg.displayName = zl;
var jl = "SliderThumb", hg = u.forwardRef(
  (e, t) => {
    const n = VR(e.__scopeSlider), [r, o] = u.useState(null), a = ae(t, (s) => o(s)), i = u.useMemo(
      () => r ? n().findIndex((s) => s.ref.current === r) : -1,
      [n, r]
    );
    return /* @__PURE__ */ d(qR, { ...e, ref: a, index: i });
  }
), qR = u.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, index: r, name: o, ...a } = e, i = qi(jl, n), s = ug(jl, n), [l, c] = u.useState(null), f = ae(t, (w) => c(w)), p = l ? i.form || !!l.closest("form") : !0, m = Yo(l), h = i.values[r], g = h === void 0 ? 0 : gg(h, i.min, i.max), v = QR(r, i.values.length), b = m == null ? void 0 : m[s.size], y = b ? eT(b, g, s.direction) : 0;
    return u.useEffect(() => {
      if (l)
        return i.thumbs.add(l), () => {
          i.thumbs.delete(l);
        };
    }, [l, i.thumbs]), /* @__PURE__ */ K(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [s.startEdge]: `calc(${g}% + ${y}px)`
        },
        children: [
          /* @__PURE__ */ d(Bl.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ d(
            Q.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || v,
              "aria-valuemin": i.min,
              "aria-valuenow": h,
              "aria-valuemax": i.max,
              "aria-orientation": i.orientation,
              "data-orientation": i.orientation,
              "data-disabled": i.disabled ? "" : void 0,
              tabIndex: i.disabled ? void 0 : 0,
              ...a,
              ref: f,
              style: h === void 0 ? { display: "none" } : e.style,
              onFocus: j(e.onFocus, () => {
                i.valueIndexToChangeRef.current = r;
              })
            }
          ) }),
          p && /* @__PURE__ */ d(
            vg,
            {
              name: o ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              form: i.form,
              value: h
            },
            r
          )
        ]
      }
    );
  }
);
hg.displayName = jl;
var XR = "RadioBubbleInput", vg = u.forwardRef(
  ({ __scopeSlider: e, value: t, ...n }, r) => {
    const o = u.useRef(null), a = ae(o, r), i = Wr(t);
    return u.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "value").set;
      if (i !== t && f) {
        const p = new Event("input", { bubbles: !0 });
        f.call(s, t), s.dispatchEvent(p);
      }
    }, [i, t]), /* @__PURE__ */ d(
      Q.input,
      {
        style: { display: "none" },
        ...n,
        ref: a,
        defaultValue: t
      }
    );
  }
);
vg.displayName = XR;
function ZR(e = [], t, n) {
  const r = [...e];
  return r[n] = t, r.sort((o, a) => o - a);
}
function gg(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Ro(a, [0, 100]);
}
function QR(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function JR(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)), r = Math.min(...n);
  return n.indexOf(r);
}
function eT(e, t, n) {
  const r = e / 2, a = nu([0, 50], [0, r]);
  return (r - a(t) * n) * n;
}
function tT(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function nT(e, t) {
  if (t > 0) {
    const n = tT(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function nu(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function rT(e) {
  return (String(e).split(".")[1] || "").length;
}
function oT(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var bg = lg, aT = pg, iT = mg, sT = hg;
const lT = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ K(
  bg,
  {
    ref: n,
    className: R("relative flex w-full touch-none select-none items-center", e),
    ...t,
    children: [
      /* @__PURE__ */ d(aT, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ d(iT, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ d(sT, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
lT.displayName = bg.displayName;
var Xi = "Switch", [cT, dY] = Me(Xi), [uT, dT] = cT(Xi), yg = u.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: l = "on",
      onCheckedChange: c,
      form: f,
      ...p
    } = e, [m, h] = u.useState(null), g = ae(t, (x) => h(x)), v = u.useRef(!1), b = m ? f || !!m.closest("form") : !0, [y, w] = Ae({
      prop: o,
      defaultProp: a ?? !1,
      onChange: c,
      caller: Xi
    });
    return /* @__PURE__ */ K(uT, { scope: n, checked: y, disabled: s, children: [
      /* @__PURE__ */ d(
        Q.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": i,
          "data-state": Cg(y),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: l,
          ...p,
          ref: g,
          onClick: j(e.onClick, (x) => {
            w((S) => !S), b && (v.current = x.isPropagationStopped(), v.current || x.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ d(
        Sg,
        {
          control: m,
          bubbles: !v.current,
          name: r,
          value: l,
          checked: y,
          required: i,
          disabled: s,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
yg.displayName = Xi;
var wg = "SwitchThumb", xg = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = dT(wg, n);
    return /* @__PURE__ */ d(
      Q.span,
      {
        "data-state": Cg(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
xg.displayName = wg;
var fT = "SwitchBubbleInput", Sg = u.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const i = u.useRef(null), s = ae(i, a), l = Wr(n), c = Yo(t);
    return u.useEffect(() => {
      const f = i.current;
      if (!f) return;
      const p = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (l !== n && h) {
        const g = new Event("click", { bubbles: r });
        h.call(f, n), f.dispatchEvent(g);
      }
    }, [l, n, r]), /* @__PURE__ */ d(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: s,
        style: {
          ...o.style,
          ...c,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Sg.displayName = fT;
function Cg(e) {
  return e ? "checked" : "unchecked";
}
var Pg = yg, pT = xg;
const mT = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Pg,
  {
    className: R(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ d(
      pT,
      {
        className: R(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
mT.displayName = Pg.displayName;
var Ng = "Toggle", ru = u.forwardRef((e, t) => {
  const { pressed: n, defaultPressed: r, onPressedChange: o, ...a } = e, [i, s] = Ae({
    prop: n,
    onChange: o,
    defaultProp: r ?? !1,
    caller: Ng
  });
  return /* @__PURE__ */ d(
    Q.button,
    {
      type: "button",
      "aria-pressed": i,
      "data-state": i ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...a,
      ref: t,
      onClick: j(e.onClick, () => {
        e.disabled || s(!i);
      })
    }
  );
});
ru.displayName = Ng;
var Eg = ru;
const _g = vn(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), hT = u.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ d(Eg, { ref: o, className: R(_g({ variant: t, size: n, className: e })), ...r }));
hT.displayName = Eg.displayName;
var Fn = "ToggleGroup", [Rg, fY] = Me(Fn, [
  en
]), Tg = en(), ou = E.forwardRef((e, t) => {
  const { type: n, ...r } = e;
  if (n === "single")
    return /* @__PURE__ */ d(vT, { ...r, ref: t });
  if (n === "multiple")
    return /* @__PURE__ */ d(gT, { ...r, ref: t });
  throw new Error(`Missing prop \`type\` expected on \`${Fn}\``);
});
ou.displayName = Fn;
var [Mg, Ag] = Rg(Fn), vT = E.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = Ae({
    prop: n,
    defaultProp: r ?? "",
    onChange: o,
    caller: Fn
  });
  return /* @__PURE__ */ d(
    Mg,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: E.useMemo(() => i ? [i] : [], [i]),
      onItemActivate: s,
      onItemDeactivate: E.useCallback(() => s(""), [s]),
      children: /* @__PURE__ */ d(Og, { ...a, ref: t })
    }
  );
}), gT = E.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = Ae({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: Fn
  }), l = E.useCallback(
    (f) => s((p = []) => [...p, f]),
    [s]
  ), c = E.useCallback(
    (f) => s((p = []) => p.filter((m) => m !== f)),
    [s]
  );
  return /* @__PURE__ */ d(
    Mg,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: l,
      onItemDeactivate: c,
      children: /* @__PURE__ */ d(Og, { ...a, ref: t })
    }
  );
});
ou.displayName = Fn;
var [bT, yT] = Rg(Fn), Og = E.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: n,
      disabled: r = !1,
      rovingFocus: o = !0,
      orientation: a,
      dir: i,
      loop: s = !0,
      ...l
    } = e, c = Tg(n), f = Ft(i), p = { role: "group", dir: f, ...l };
    return /* @__PURE__ */ d(bT, { scope: n, rovingFocus: o, disabled: r, children: o ? /* @__PURE__ */ d(
      Xo,
      {
        asChild: !0,
        ...c,
        orientation: a,
        dir: f,
        loop: s,
        children: /* @__PURE__ */ d(Q.div, { ...p, ref: t })
      }
    ) : /* @__PURE__ */ d(Q.div, { ...p, ref: t }) });
  }
), oi = "ToggleGroupItem", Dg = E.forwardRef(
  (e, t) => {
    const n = Ag(oi, e.__scopeToggleGroup), r = yT(oi, e.__scopeToggleGroup), o = Tg(e.__scopeToggleGroup), a = n.value.includes(e.value), i = r.disabled || e.disabled, s = { ...e, pressed: a, disabled: i }, l = E.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ d(
      Zo,
      {
        asChild: !0,
        ...o,
        focusable: !i,
        active: a,
        ref: l,
        children: /* @__PURE__ */ d(_f, { ...s, ref: t })
      }
    ) : /* @__PURE__ */ d(_f, { ...s, ref: t });
  }
);
Dg.displayName = oi;
var _f = E.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: n, value: r, ...o } = e, a = Ag(oi, n), i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, s = a.type === "single" ? i : void 0;
    return /* @__PURE__ */ d(
      ru,
      {
        ...s,
        ...o,
        ref: t,
        onPressedChange: (l) => {
          l ? a.onItemActivate(r) : a.onItemDeactivate(r);
        }
      }
    );
  }
), Ig = ou, kg = Dg;
const $g = u.createContext({
  size: "default",
  variant: "default"
}), wT = u.forwardRef(({ className: e, variant: t, size: n, children: r, ...o }, a) => /* @__PURE__ */ d(Ig, { ref: a, className: R("flex items-center justify-center gap-1", e), ...o, children: /* @__PURE__ */ d($g.Provider, { value: { variant: t, size: n }, children: r }) }));
wT.displayName = Ig.displayName;
const xT = u.forwardRef(({ className: e, children: t, variant: n, size: r, ...o }, a) => {
  const i = u.useContext($g);
  return /* @__PURE__ */ d(
    kg,
    {
      ref: a,
      className: R(
        _g({
          variant: i.variant || n,
          size: i.size || r
        }),
        e
      ),
      ...o,
      children: t
    }
  );
});
xT.displayName = kg.displayName;
var ST = Object.defineProperty, CT = Object.defineProperties, PT = Object.getOwnPropertyDescriptors, ai = Object.getOwnPropertySymbols, Lg = Object.prototype.hasOwnProperty, Fg = Object.prototype.propertyIsEnumerable, Rf = (e, t, n) => t in e ? ST(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, NT = (e, t) => {
  for (var n in t || (t = {})) Lg.call(t, n) && Rf(e, n, t[n]);
  if (ai) for (var n of ai(t)) Fg.call(t, n) && Rf(e, n, t[n]);
  return e;
}, ET = (e, t) => CT(e, PT(t)), _T = (e, t) => {
  var n = {};
  for (var r in e) Lg.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ai) for (var r of ai(e)) t.indexOf(r) < 0 && Fg.call(e, r) && (n[r] = e[r]);
  return n;
};
function RT(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
function TT(e) {
  let t = u.useRef();
  return u.useEffect(() => {
    t.current = e;
  }), t.current;
}
var MT = 18, Bg = 40, AT = `${Bg}px`, OT = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function DT({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let [o, a] = u.useState(!1), [i, s] = u.useState(!1), [l, c] = u.useState(!1), f = u.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && o && i, [o, i, n]), p = u.useCallback(() => {
    let m = e.current, h = t.current;
    if (!m || !h || l || n === "none") return;
    let g = m, v = g.getBoundingClientRect().left + g.offsetWidth, b = g.getBoundingClientRect().top + g.offsetHeight / 2, y = v - MT, w = b;
    document.querySelectorAll(OT).length === 0 && document.elementFromPoint(y, w) === m || (a(!0), c(!0));
  }, [e, t, l, n]);
  return u.useEffect(() => {
    let m = e.current;
    if (!m || n === "none") return;
    function h() {
      let v = window.innerWidth - m.getBoundingClientRect().right;
      s(v >= Bg);
    }
    h();
    let g = setInterval(h, 1e3);
    return () => {
      clearInterval(g);
    };
  }, [e, n]), u.useEffect(() => {
    let m = r || document.activeElement === t.current;
    if (n === "none" || !m) return;
    let h = setTimeout(p, 0), g = setTimeout(p, 2e3), v = setTimeout(p, 5e3), b = setTimeout(() => {
      c(!0);
    }, 6e3);
    return () => {
      clearTimeout(h), clearTimeout(g), clearTimeout(v), clearTimeout(b);
    };
  }, [t, r, n, p]), { hasPWMBadge: o, willPushPWMBadge: f, PWM_BADGE_SPACE_WIDTH: AT };
}
var zg = u.createContext({}), jg = u.forwardRef((e, t) => {
  var n = e, { value: r, onChange: o, maxLength: a, textAlign: i = "left", pattern: s, placeholder: l, inputMode: c = "numeric", onComplete: f, pushPasswordManagerStrategy: p = "increase-width", pasteTransformer: m, containerClassName: h, noScriptCSSFallback: g = IT, render: v, children: b } = n, y = _T(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), w, x, S, C, N;
  let [P, M] = u.useState(typeof y.defaultValue == "string" ? y.defaultValue : ""), _ = r ?? P, B = TT(_), T = u.useCallback((z) => {
    o == null || o(z), M(z);
  }, [o]), k = u.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), G = u.useRef(null), $ = u.useRef(null), U = u.useRef({ value: _, onChange: T, isIOS: typeof window < "u" && ((x = (w = window == null ? void 0 : window.CSS) == null ? void 0 : w.supports) == null ? void 0 : x.call(w, "-webkit-touch-callout", "none")) }), W = u.useRef({ prev: [(S = G.current) == null ? void 0 : S.selectionStart, (C = G.current) == null ? void 0 : C.selectionEnd, (N = G.current) == null ? void 0 : N.selectionDirection] });
  u.useImperativeHandle(t, () => G.current, []), u.useEffect(() => {
    let z = G.current, oe = $.current;
    if (!z || !oe) return;
    U.current.value !== z.value && U.current.onChange(z.value), W.current.prev = [z.selectionStart, z.selectionEnd, z.selectionDirection];
    function le() {
      if (document.activeElement !== z) {
        I(null), H(null);
        return;
      }
      let ce = z.selectionStart, Ne = z.selectionEnd, Fe = z.selectionDirection, Re = z.maxLength, je = z.value, tt = W.current.prev, it = -1, De = -1, Ve;
      if (je.length !== 0 && ce !== null && Ne !== null) {
        let mt = ce === Ne, _t = ce === je.length && je.length < Re;
        if (mt && !_t) {
          let et = ce;
          if (et === 0) it = 0, De = 1, Ve = "forward";
          else if (et === Re) it = et - 1, De = et, Ve = "backward";
          else if (Re > 1 && je.length > 1) {
            let ct = 0;
            if (tt[0] !== null && tt[1] !== null) {
              Ve = et < tt[1] ? "backward" : "forward";
              let xn = tt[0] === tt[1] && tt[0] < Re;
              Ve === "backward" && !xn && (ct = -1);
            }
            it = ct + et, De = ct + et + 1;
          }
        }
        it !== -1 && De !== -1 && it !== De && G.current.setSelectionRange(it, De, Ve);
      }
      let wn = it !== -1 ? it : ce, Et = De !== -1 ? De : Ne, st = Ve ?? Fe;
      I(wn), H(Et), W.current.prev = [wn, Et, st];
    }
    if (document.addEventListener("selectionchange", le, { capture: !0 }), le(), document.activeElement === z && ee(!0), !document.getElementById("input-otp-style")) {
      let ce = document.createElement("style");
      if (ce.id = "input-otp-style", document.head.appendChild(ce), ce.sheet) {
        let Ne = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        lo(ce.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), lo(ce.sheet, `[data-input-otp]:autofill { ${Ne} }`), lo(ce.sheet, `[data-input-otp]:-webkit-autofill { ${Ne} }`), lo(ce.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), lo(ce.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let ve = () => {
      oe && oe.style.setProperty("--root-height", `${z.clientHeight}px`);
    };
    ve();
    let de = new ResizeObserver(ve);
    return de.observe(z), () => {
      document.removeEventListener("selectionchange", le, { capture: !0 }), de.disconnect();
    };
  }, []);
  let [F, D] = u.useState(!1), [L, ee] = u.useState(!1), [te, I] = u.useState(null), [O, H] = u.useState(null);
  u.useEffect(() => {
    RT(() => {
      var z, oe, le, ve;
      (z = G.current) == null || z.dispatchEvent(new Event("input"));
      let de = (oe = G.current) == null ? void 0 : oe.selectionStart, ce = (le = G.current) == null ? void 0 : le.selectionEnd, Ne = (ve = G.current) == null ? void 0 : ve.selectionDirection;
      de !== null && ce !== null && (I(de), H(ce), W.current.prev = [de, ce, Ne]);
    });
  }, [_, L]), u.useEffect(() => {
    B !== void 0 && _ !== B && B.length < a && _.length === a && (f == null || f(_));
  }, [a, f, B, _]);
  let V = DT({ containerRef: $, inputRef: G, pushPasswordManagerStrategy: p, isFocused: L }), Z = u.useCallback((z) => {
    let oe = z.currentTarget.value.slice(0, a);
    if (oe.length > 0 && k && !k.test(oe)) {
      z.preventDefault();
      return;
    }
    typeof B == "string" && oe.length < B.length && document.dispatchEvent(new Event("selectionchange")), T(oe);
  }, [a, T, B, k]), A = u.useCallback(() => {
    var z;
    if (G.current) {
      let oe = Math.min(G.current.value.length, a - 1), le = G.current.value.length;
      (z = G.current) == null || z.setSelectionRange(oe, le), I(oe), H(le);
    }
    ee(!0);
  }, [a]), Y = u.useCallback((z) => {
    var oe, le;
    let ve = G.current;
    if (!m && (!U.current.isIOS || !z.clipboardData || !ve)) return;
    let de = z.clipboardData.getData("text/plain"), ce = m ? m(de) : de;
    z.preventDefault();
    let Ne = (oe = G.current) == null ? void 0 : oe.selectionStart, Fe = (le = G.current) == null ? void 0 : le.selectionEnd, Re = (Ne !== Fe ? _.slice(0, Ne) + ce + _.slice(Fe) : _.slice(0, Ne) + ce + _.slice(Ne)).slice(0, a);
    if (Re.length > 0 && k && !k.test(Re)) return;
    ve.value = Re, T(Re);
    let je = Math.min(Re.length, a - 1), tt = Re.length;
    ve.setSelectionRange(je, tt), I(je), H(tt);
  }, [a, T, k, _]), J = u.useMemo(() => ({ position: "relative", cursor: y.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [y.disabled]), ne = u.useMemo(() => ({ position: "absolute", inset: 0, width: V.willPushPWMBadge ? `calc(100% + ${V.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: V.willPushPWMBadge ? `inset(0 ${V.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: i, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [V.PWM_BADGE_SPACE_WIDTH, V.willPushPWMBadge, i]), re = u.useMemo(() => u.createElement("input", ET(NT({ autoComplete: y.autoComplete || "one-time-code" }, y), { "data-input-otp": !0, "data-input-otp-placeholder-shown": _.length === 0 || void 0, "data-input-otp-mss": te, "data-input-otp-mse": O, inputMode: c, pattern: k == null ? void 0 : k.source, "aria-placeholder": l, style: ne, maxLength: a, value: _, ref: G, onPaste: (z) => {
    var oe;
    Y(z), (oe = y.onPaste) == null || oe.call(y, z);
  }, onChange: Z, onMouseOver: (z) => {
    var oe;
    D(!0), (oe = y.onMouseOver) == null || oe.call(y, z);
  }, onMouseLeave: (z) => {
    var oe;
    D(!1), (oe = y.onMouseLeave) == null || oe.call(y, z);
  }, onFocus: (z) => {
    var oe;
    A(), (oe = y.onFocus) == null || oe.call(y, z);
  }, onBlur: (z) => {
    var oe;
    ee(!1), (oe = y.onBlur) == null || oe.call(y, z);
  } })), [Z, A, Y, c, ne, a, O, te, y, k == null ? void 0 : k.source, _]), X = u.useMemo(() => ({ slots: Array.from({ length: a }).map((z, oe) => {
    var le;
    let ve = L && te !== null && O !== null && (te === O && oe === te || oe >= te && oe < O), de = _[oe] !== void 0 ? _[oe] : null, ce = _[0] !== void 0 ? null : (le = l == null ? void 0 : l[oe]) != null ? le : null;
    return { char: de, placeholderChar: ce, isActive: ve, hasFakeCaret: ve && de === null };
  }), isFocused: L, isHovering: !y.disabled && F }), [L, F, a, O, te, y.disabled, _]), q = u.useMemo(() => v ? v(X) : u.createElement(zg.Provider, { value: X }, b), [b, X, v]);
  return u.createElement(u.Fragment, null, g !== null && u.createElement("noscript", null, u.createElement("style", null, g)), u.createElement("div", { ref: $, "data-input-otp-container": !0, style: J, className: h }, q, u.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, re)));
});
jg.displayName = "Input";
function lo(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var IT = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
const kT = u.forwardRef(
  ({ className: e, containerClassName: t, ...n }, r) => /* @__PURE__ */ d(
    jg,
    {
      ref: r,
      containerClassName: R("flex items-center gap-2 has-[:disabled]:opacity-50", t),
      className: R("disabled:cursor-not-allowed", e),
      ...n
    }
  )
);
kT.displayName = "InputOTP";
const $T = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { ref: n, className: R("flex items-center", e), ...t })
);
$T.displayName = "InputOTPGroup";
const LT = u.forwardRef(({ index: e, className: t, ...n }, r) => {
  const o = u.useContext(zg), { char: a, hasFakeCaret: i, isActive: s } = o.slots[e];
  return /* @__PURE__ */ K(
    "div",
    {
      ref: r,
      className: R(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        s && "z-10 ring-2 ring-ring ring-offset-background",
        t
      ),
      ...n,
      children: [
        a,
        i && /* @__PURE__ */ d("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ d("div", { className: "animate-caret-blink h-4 w-px bg-foreground duration-1000" }) })
      ]
    }
  );
});
LT.displayName = "InputOTPSlot";
const FT = u.forwardRef(
  ({ ...e }, t) => /* @__PURE__ */ d("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ d(BP, {}) })
);
FT.displayName = "InputOTPSeparator";
var Zi = "Collapsible", [BT, Hg] = Me(Zi), [zT, au] = BT(Zi), Wg = u.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: a,
      onOpenChange: i,
      ...s
    } = e, [l, c] = Ae({
      prop: r,
      defaultProp: o ?? !1,
      onChange: i,
      caller: Zi
    });
    return /* @__PURE__ */ d(
      zT,
      {
        scope: n,
        disabled: a,
        contentId: Te(),
        open: l,
        onOpenToggle: u.useCallback(() => c((f) => !f), [c]),
        children: /* @__PURE__ */ d(
          Q.div,
          {
            "data-state": cu(l),
            "data-disabled": a ? "" : void 0,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
Wg.displayName = Zi;
var Vg = "CollapsibleTrigger", iu = u.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = au(Vg, n);
    return /* @__PURE__ */ d(
      Q.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": cu(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: j(e.onClick, o.onOpenToggle)
      }
    );
  }
);
iu.displayName = Vg;
var su = "CollapsibleContent", lu = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = au(su, e.__scopeCollapsible);
    return /* @__PURE__ */ d(Le, { present: n || o.open, children: ({ present: a }) => /* @__PURE__ */ d(jT, { ...r, ref: t, present: a }) });
  }
);
lu.displayName = su;
var jT = u.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, i = au(su, n), [s, l] = u.useState(r), c = u.useRef(null), f = ae(t, c), p = u.useRef(0), m = p.current, h = u.useRef(0), g = h.current, v = i.open || s, b = u.useRef(v), y = u.useRef(void 0);
  return u.useEffect(() => {
    const w = requestAnimationFrame(() => b.current = !1);
    return () => cancelAnimationFrame(w);
  }, []), $e(() => {
    const w = c.current;
    if (w) {
      y.current = y.current || {
        transitionDuration: w.style.transitionDuration,
        animationName: w.style.animationName
      }, w.style.transitionDuration = "0s", w.style.animationName = "none";
      const x = w.getBoundingClientRect();
      p.current = x.height, h.current = x.width, b.current || (w.style.transitionDuration = y.current.transitionDuration, w.style.animationName = y.current.animationName), l(r);
    }
  }, [i.open, r]), /* @__PURE__ */ d(
    Q.div,
    {
      "data-state": cu(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !v,
      ...a,
      ref: f,
      style: {
        "--radix-collapsible-content-height": m ? `${m}px` : void 0,
        "--radix-collapsible-content-width": g ? `${g}px` : void 0,
        ...e.style
      },
      children: v && o
    }
  );
});
function cu(e) {
  return e ? "open" : "closed";
}
var Gg = Wg, HT = iu, WT = lu, Bt = "Accordion", VT = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [uu, GT, UT] = gn(Bt), [Qi, pY] = Me(Bt, [
  UT,
  Hg
]), du = Hg(), Ug = E.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, a = r;
    return /* @__PURE__ */ d(uu.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ d(XT, { ...a, ref: t }) : /* @__PURE__ */ d(qT, { ...o, ref: t }) });
  }
);
Ug.displayName = Bt;
var [Kg, KT] = Qi(Bt), [Yg, YT] = Qi(
  Bt,
  { collapsible: !1 }
), qT = E.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...i
    } = e, [s, l] = Ae({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: Bt
    });
    return /* @__PURE__ */ d(
      Kg,
      {
        scope: e.__scopeAccordion,
        value: E.useMemo(() => s ? [s] : [], [s]),
        onItemOpen: l,
        onItemClose: E.useCallback(() => a && l(""), [a, l]),
        children: /* @__PURE__ */ d(Yg, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ d(qg, { ...i, ref: t }) })
      }
    );
  }
), XT = E.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = Ae({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: Bt
  }), l = E.useCallback(
    (f) => s((p = []) => [...p, f]),
    [s]
  ), c = E.useCallback(
    (f) => s((p = []) => p.filter((m) => m !== f)),
    [s]
  );
  return /* @__PURE__ */ d(
    Kg,
    {
      scope: e.__scopeAccordion,
      value: i,
      onItemOpen: l,
      onItemClose: c,
      children: /* @__PURE__ */ d(Yg, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ d(qg, { ...a, ref: t }) })
    }
  );
}), [ZT, Ji] = Qi(Bt), qg = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...i } = e, s = E.useRef(null), l = ae(s, t), c = GT(n), p = Ft(o) === "ltr", m = j(e.onKeyDown, (h) => {
      var M;
      if (!VT.includes(h.key)) return;
      const g = h.target, v = c().filter((_) => {
        var B;
        return !((B = _.ref.current) != null && B.disabled);
      }), b = v.findIndex((_) => _.ref.current === g), y = v.length;
      if (b === -1) return;
      h.preventDefault();
      let w = b;
      const x = 0, S = y - 1, C = () => {
        w = b + 1, w > S && (w = x);
      }, N = () => {
        w = b - 1, w < x && (w = S);
      };
      switch (h.key) {
        case "Home":
          w = x;
          break;
        case "End":
          w = S;
          break;
        case "ArrowRight":
          a === "horizontal" && (p ? C() : N());
          break;
        case "ArrowDown":
          a === "vertical" && C();
          break;
        case "ArrowLeft":
          a === "horizontal" && (p ? N() : C());
          break;
        case "ArrowUp":
          a === "vertical" && N();
          break;
      }
      const P = w % y;
      (M = v[P].ref.current) == null || M.focus();
    });
    return /* @__PURE__ */ d(
      ZT,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ d(uu.Slot, { scope: n, children: /* @__PURE__ */ d(
          Q.div,
          {
            ...i,
            "data-orientation": a,
            ref: l,
            onKeyDown: r ? void 0 : m
          }
        ) })
      }
    );
  }
), ii = "AccordionItem", [QT, fu] = Qi(ii), Xg = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, a = Ji(ii, n), i = KT(ii, n), s = du(n), l = Te(), c = r && i.value.includes(r) || !1, f = a.disabled || e.disabled;
    return /* @__PURE__ */ d(
      QT,
      {
        scope: n,
        open: c,
        disabled: f,
        triggerId: l,
        children: /* @__PURE__ */ d(
          Gg,
          {
            "data-orientation": a.orientation,
            "data-state": nb(c),
            ...s,
            ...o,
            ref: t,
            disabled: f,
            open: c,
            onOpenChange: (p) => {
              p ? i.onItemOpen(r) : i.onItemClose(r);
            }
          }
        )
      }
    );
  }
);
Xg.displayName = ii;
var Zg = "AccordionHeader", Qg = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Ji(Bt, n), a = fu(Zg, n);
    return /* @__PURE__ */ d(
      Q.h3,
      {
        "data-orientation": o.orientation,
        "data-state": nb(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Qg.displayName = Zg;
var Hl = "AccordionTrigger", Jg = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Ji(Bt, n), a = fu(Hl, n), i = YT(Hl, n), s = du(n);
    return /* @__PURE__ */ d(uu.ItemSlot, { scope: n, children: /* @__PURE__ */ d(
      HT,
      {
        "aria-disabled": a.open && !i.collapsible || void 0,
        "data-orientation": o.orientation,
        id: a.triggerId,
        ...s,
        ...r,
        ref: t
      }
    ) });
  }
);
Jg.displayName = Hl;
var eb = "AccordionContent", tb = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Ji(Bt, n), a = fu(eb, n), i = du(n);
    return /* @__PURE__ */ d(
      WT,
      {
        role: "region",
        "aria-labelledby": a.triggerId,
        "data-orientation": o.orientation,
        ...i,
        ...r,
        ref: t,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...e.style
        }
      }
    );
  }
);
tb.displayName = eb;
function nb(e) {
  return e ? "open" : "closed";
}
var JT = Ug, eM = Xg, tM = Qg, rb = Jg, ob = tb;
const mY = JT, nM = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(eM, { ref: n, className: R("border-b", e), ...t }));
nM.displayName = "AccordionItem";
const rM = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d(tM, { className: "flex", children: /* @__PURE__ */ K(
  rb,
  {
    ref: r,
    className: R(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ d(ki, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
rM.displayName = rb.displayName;
const oM = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d(
  ob,
  {
    ref: r,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: /* @__PURE__ */ d("div", { className: R("pb-4 pt-0", e), children: t })
  }
));
oM.displayName = ob.displayName;
var es = "Tabs", [aM, hY] = Me(es, [
  en
]), ab = en(), [iM, pu] = aM(es), ib = u.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      dir: s,
      activationMode: l = "automatic",
      ...c
    } = e, f = Ft(s), [p, m] = Ae({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: es
    });
    return /* @__PURE__ */ d(
      iM,
      {
        scope: n,
        baseId: Te(),
        value: p,
        onValueChange: m,
        orientation: i,
        dir: f,
        activationMode: l,
        children: /* @__PURE__ */ d(
          Q.div,
          {
            dir: f,
            "data-orientation": i,
            ...c,
            ref: t
          }
        )
      }
    );
  }
);
ib.displayName = es;
var sb = "TabsList", lb = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = pu(sb, n), i = ab(n);
    return /* @__PURE__ */ d(
      Xo,
      {
        asChild: !0,
        ...i,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ d(
          Q.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
lb.displayName = sb;
var cb = "TabsTrigger", ub = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, i = pu(cb, n), s = ab(n), l = pb(i.baseId, r), c = mb(i.baseId, r), f = r === i.value;
    return /* @__PURE__ */ d(
      Zo,
      {
        asChild: !0,
        ...s,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ d(
          Q.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": c,
            "data-state": f ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: l,
            ...a,
            ref: t,
            onMouseDown: j(e.onMouseDown, (p) => {
              !o && p.button === 0 && p.ctrlKey === !1 ? i.onValueChange(r) : p.preventDefault();
            }),
            onKeyDown: j(e.onKeyDown, (p) => {
              [" ", "Enter"].includes(p.key) && i.onValueChange(r);
            }),
            onFocus: j(e.onFocus, () => {
              const p = i.activationMode !== "manual";
              !f && !o && p && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
ub.displayName = cb;
var db = "TabsContent", fb = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...i } = e, s = pu(db, n), l = pb(s.baseId, r), c = mb(s.baseId, r), f = r === s.value, p = u.useRef(f);
    return u.useEffect(() => {
      const m = requestAnimationFrame(() => p.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ d(Le, { present: o || f, children: ({ present: m }) => /* @__PURE__ */ d(
      Q.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": s.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !m,
        id: c,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
          ...e.style,
          animationDuration: p.current ? "0s" : void 0
        },
        children: m && a
      }
    ) });
  }
);
fb.displayName = db;
function pb(e, t) {
  return `${e}-trigger-${t}`;
}
function mb(e, t) {
  return `${e}-content-${t}`;
}
var sM = ib, hb = lb, vb = ub, gb = fb;
const vY = sM, lM = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  hb,
  {
    ref: n,
    className: R(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
lM.displayName = hb.displayName;
const cM = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  vb,
  {
    ref: n,
    className: R(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t
  }
));
cM.displayName = vb.displayName;
const uM = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  gb,
  {
    ref: n,
    className: R(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
uM.displayName = gb.displayName;
const dM = u.forwardRef(({ ...e }, t) => /* @__PURE__ */ d("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
dM.displayName = "Breadcrumb";
const fM = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d(
    "ol",
    {
      ref: n,
      className: R(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        e
      ),
      ...t
    }
  )
);
fM.displayName = "BreadcrumbList";
const pM = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("li", { ref: n, className: R("inline-flex items-center gap-1.5", e), ...t })
);
pM.displayName = "BreadcrumbItem";
const mM = u.forwardRef(({ asChild: e, className: t, ...n }, r) => /* @__PURE__ */ d(e ? kn : "a", { ref: r, className: R("transition-colors hover:text-foreground", t), ...n }));
mM.displayName = "BreadcrumbLink";
const hM = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d(
    "span",
    {
      ref: n,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: R("font-normal text-foreground", e),
      ...t
    }
  )
);
hM.displayName = "BreadcrumbPage";
const vM = ({ children: e, className: t, ...n }) => /* @__PURE__ */ d("li", { role: "presentation", "aria-hidden": "true", className: R("[&>svg]:size-3.5", t), ...n, children: e ?? /* @__PURE__ */ d(jr, {}) });
vM.displayName = "BreadcrumbSeparator";
const gM = ({ className: e, ...t }) => /* @__PURE__ */ d(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: R("mx-auto flex w-full justify-center", e),
    ...t
  }
);
gM.displayName = "Pagination";
const bM = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("ul", { ref: n, className: R("flex flex-row items-center gap-1", e), ...t })
);
bM.displayName = "PaginationContent";
const yM = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("li", { ref: n, className: R("", e), ...t }));
yM.displayName = "PaginationItem";
const mu = ({ className: e, isActive: t, size: n = "icon", ...r }) => /* @__PURE__ */ d(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: R(
      Rr({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...r
  }
);
mu.displayName = "PaginationLink";
const wM = ({ className: e, ...t }) => /* @__PURE__ */ K(mu, { "aria-label": "Go to previous page", size: "default", className: R("gap-1 pl-2.5", e), ...t, children: [
  /* @__PURE__ */ d(nh, { className: "h-4 w-4" }),
  /* @__PURE__ */ d("span", { children: "Previous" })
] });
wM.displayName = "PaginationPrevious";
const xM = ({ className: e, ...t }) => /* @__PURE__ */ K(mu, { "aria-label": "Go to next page", size: "default", className: R("gap-1 pr-2.5", e), ...t, children: [
  /* @__PURE__ */ d("span", { children: "Next" }),
  /* @__PURE__ */ d(jr, { className: "h-4 w-4" })
] });
xM.displayName = "PaginationNext";
const SM = ({ className: e, ...t }) => /* @__PURE__ */ K("span", { "aria-hidden": !0, className: R("flex h-9 w-9 items-center justify-center", e), ...t, children: [
  /* @__PURE__ */ d(zP, { className: "h-4 w-4" }),
  /* @__PURE__ */ d("span", { className: "sr-only", children: "More pages" })
] });
SM.displayName = "PaginationEllipsis";
var or = "NavigationMenu", [hu, bb, CM] = gn(or), [Wl, PM, NM] = gn(or), [vu, gY] = Me(
  or,
  [CM, NM]
), [EM, Pt] = vu(or), [_M, RM] = vu(or), yb = u.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      delayDuration: i = 200,
      skipDelayDuration: s = 300,
      orientation: l = "horizontal",
      dir: c,
      ...f
    } = e, [p, m] = u.useState(null), h = ae(t, (_) => m(_)), g = Ft(c), v = u.useRef(0), b = u.useRef(0), y = u.useRef(0), [w, x] = u.useState(!0), [S, C] = Ae({
      prop: r,
      onChange: (_) => {
        const B = _ !== "", T = s > 0;
        B ? (window.clearTimeout(y.current), T && x(!1)) : (window.clearTimeout(y.current), y.current = window.setTimeout(
          () => x(!0),
          s
        )), o == null || o(_);
      },
      defaultProp: a ?? "",
      caller: or
    }), N = u.useCallback(() => {
      window.clearTimeout(b.current), b.current = window.setTimeout(() => C(""), 150);
    }, [C]), P = u.useCallback(
      (_) => {
        window.clearTimeout(b.current), C(_);
      },
      [C]
    ), M = u.useCallback(
      (_) => {
        S === _ ? window.clearTimeout(b.current) : v.current = window.setTimeout(() => {
          window.clearTimeout(b.current), C(_);
        }, i);
      },
      [S, C, i]
    );
    return u.useEffect(() => () => {
      window.clearTimeout(v.current), window.clearTimeout(b.current), window.clearTimeout(y.current);
    }, []), /* @__PURE__ */ d(
      wb,
      {
        scope: n,
        isRootMenu: !0,
        value: S,
        dir: g,
        orientation: l,
        rootNavigationMenu: p,
        onTriggerEnter: (_) => {
          window.clearTimeout(v.current), w ? M(_) : P(_);
        },
        onTriggerLeave: () => {
          window.clearTimeout(v.current), N();
        },
        onContentEnter: () => window.clearTimeout(b.current),
        onContentLeave: N,
        onItemSelect: (_) => {
          C((B) => B === _ ? "" : _);
        },
        onItemDismiss: () => C(""),
        children: /* @__PURE__ */ d(
          Q.nav,
          {
            "aria-label": "Main",
            "data-orientation": l,
            dir: g,
            ...f,
            ref: h
          }
        )
      }
    );
  }
);
yb.displayName = or;
var Vl = "NavigationMenuSub", TM = u.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      ...s
    } = e, l = Pt(Vl, n), [c, f] = Ae({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: Vl
    });
    return /* @__PURE__ */ d(
      wb,
      {
        scope: n,
        isRootMenu: !1,
        value: c,
        dir: l.dir,
        orientation: i,
        rootNavigationMenu: l.rootNavigationMenu,
        onTriggerEnter: (p) => f(p),
        onItemSelect: (p) => f(p),
        onItemDismiss: () => f(""),
        children: /* @__PURE__ */ d(Q.div, { "data-orientation": i, ...s, ref: t })
      }
    );
  }
);
TM.displayName = Vl;
var wb = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    dir: o,
    orientation: a,
    children: i,
    value: s,
    onItemSelect: l,
    onItemDismiss: c,
    onTriggerEnter: f,
    onTriggerLeave: p,
    onContentEnter: m,
    onContentLeave: h
  } = e, [g, v] = u.useState(null), [b, y] = u.useState(/* @__PURE__ */ new Map()), [w, x] = u.useState(null);
  return /* @__PURE__ */ d(
    EM,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: s,
      previousValue: Wr(s),
      baseId: Te(),
      dir: o,
      orientation: a,
      viewport: g,
      onViewportChange: v,
      indicatorTrack: w,
      onIndicatorTrackChange: x,
      onTriggerEnter: xe(f),
      onTriggerLeave: xe(p),
      onContentEnter: xe(m),
      onContentLeave: xe(h),
      onItemSelect: xe(l),
      onItemDismiss: xe(c),
      onViewportContentChange: u.useCallback((S, C) => {
        y((N) => (N.set(S, C), new Map(N)));
      }, []),
      onViewportContentRemove: u.useCallback((S) => {
        y((C) => C.has(S) ? (C.delete(S), new Map(C)) : C);
      }, []),
      children: /* @__PURE__ */ d(hu.Provider, { scope: t, children: /* @__PURE__ */ d(_M, { scope: t, items: b, children: i }) })
    }
  );
}, xb = "NavigationMenuList", Sb = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = Pt(xb, n), a = /* @__PURE__ */ d(Q.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ d(Q.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ d(hu.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ d(Ob, { asChild: !0, children: a }) : a }) });
  }
);
Sb.displayName = xb;
var Cb = "NavigationMenuItem", [MM, Pb] = vu(Cb), Nb = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, a = Te(), i = r || a || "LEGACY_REACT_AUTO_VALUE", s = u.useRef(null), l = u.useRef(null), c = u.useRef(null), f = u.useRef(() => {
    }), p = u.useRef(!1), m = u.useCallback((g = "start") => {
      if (s.current) {
        f.current();
        const v = Ul(s.current);
        v.length && yu(g === "start" ? v : v.reverse());
      }
    }, []), h = u.useCallback(() => {
      if (s.current) {
        const g = Ul(s.current);
        g.length && (f.current = LM(g));
      }
    }, []);
    return /* @__PURE__ */ d(
      MM,
      {
        scope: n,
        value: i,
        triggerRef: l,
        contentRef: s,
        focusProxyRef: c,
        wasEscapeCloseRef: p,
        onEntryKeyDown: m,
        onFocusProxyEnter: m,
        onRootContentClose: h,
        onContentFocusOutside: h,
        children: /* @__PURE__ */ d(Q.li, { ...o, ref: t })
      }
    );
  }
);
Nb.displayName = Cb;
var Gl = "NavigationMenuTrigger", Eb = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = Pt(Gl, e.__scopeNavigationMenu), i = Pb(Gl, e.__scopeNavigationMenu), s = u.useRef(null), l = ae(s, i.triggerRef, t), c = Ib(a.baseId, i.value), f = kb(a.baseId, i.value), p = u.useRef(!1), m = u.useRef(!1), h = i.value === a.value;
  return /* @__PURE__ */ K(ze, { children: [
    /* @__PURE__ */ d(hu.ItemSlot, { scope: n, value: i.value, children: /* @__PURE__ */ d(Db, { asChild: !0, children: /* @__PURE__ */ d(
      Q.button,
      {
        id: c,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": wu(h),
        "aria-expanded": h,
        "aria-controls": f,
        ...o,
        ref: l,
        onPointerEnter: j(e.onPointerEnter, () => {
          m.current = !1, i.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: j(
          e.onPointerMove,
          si(() => {
            r || m.current || i.wasEscapeCloseRef.current || p.current || (a.onTriggerEnter(i.value), p.current = !0);
          })
        ),
        onPointerLeave: j(
          e.onPointerLeave,
          si(() => {
            r || (a.onTriggerLeave(), p.current = !1);
          })
        ),
        onClick: j(e.onClick, () => {
          a.onItemSelect(i.value), m.current = h;
        }),
        onKeyDown: j(e.onKeyDown, (g) => {
          const b = { horizontal: "ArrowDown", vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[a.orientation];
          h && g.key === b && (i.onEntryKeyDown(), g.preventDefault());
        })
      }
    ) }) }),
    h && /* @__PURE__ */ K(ze, { children: [
      /* @__PURE__ */ d(
        km,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: i.focusProxyRef,
          onFocus: (g) => {
            const v = i.contentRef.current, b = g.relatedTarget, y = b === s.current, w = v == null ? void 0 : v.contains(b);
            (y || !w) && i.onFocusProxyEnter(y ? "start" : "end");
          }
        }
      ),
      a.viewport && /* @__PURE__ */ d("span", { "aria-owns": f })
    ] })
  ] });
});
Eb.displayName = Gl;
var AM = "NavigationMenuLink", Tf = "navigationMenu.linkSelect", _b = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
    return /* @__PURE__ */ d(Db, { asChild: !0, children: /* @__PURE__ */ d(
      Q.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...a,
        ref: t,
        onClick: j(
          e.onClick,
          (i) => {
            const s = i.target, l = new CustomEvent(Tf, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(Tf, (c) => o == null ? void 0 : o(c), { once: !0 }), _o(s, l), !l.defaultPrevented && !i.metaKey) {
              const c = new CustomEvent(Va, {
                bubbles: !0,
                cancelable: !0
              });
              _o(s, c);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
_b.displayName = AM;
var gu = "NavigationMenuIndicator", Rb = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Pt(gu, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? Ic.createPortal(
    /* @__PURE__ */ d(Le, { present: n || a, children: /* @__PURE__ */ d(OM, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
Rb.displayName = gu;
var OM = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Pt(gu, n), a = bb(n), [i, s] = u.useState(
    null
  ), [l, c] = u.useState(null), f = o.orientation === "horizontal", p = !!o.value;
  u.useEffect(() => {
    var v;
    const g = (v = a().find((b) => b.value === o.value)) == null ? void 0 : v.ref.current;
    g && s(g);
  }, [a, o.value]);
  const m = () => {
    i && c({
      size: f ? i.offsetWidth : i.offsetHeight,
      offset: f ? i.offsetLeft : i.offsetTop
    });
  };
  return Kl(i, m), Kl(o.indicatorTrack, m), l ? /* @__PURE__ */ d(
    Q.div,
    {
      "aria-hidden": !0,
      "data-state": p ? "visible" : "hidden",
      "data-orientation": o.orientation,
      ...r,
      ref: t,
      style: {
        position: "absolute",
        ...f ? {
          left: 0,
          width: l.size + "px",
          transform: `translateX(${l.offset}px)`
        } : {
          top: 0,
          height: l.size + "px",
          transform: `translateY(${l.offset}px)`
        },
        ...r.style
      }
    }
  ) : null;
}), Mr = "NavigationMenuContent", Tb = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Pt(Mr, e.__scopeNavigationMenu), a = Pb(Mr, e.__scopeNavigationMenu), i = ae(a.contentRef, t), s = a.value === o.value, l = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ d(DM, { forceMount: n, ...l, ref: i }) : /* @__PURE__ */ d(Le, { present: n || s, children: /* @__PURE__ */ d(
    Mb,
    {
      "data-state": wu(s),
      ...l,
      ref: i,
      onPointerEnter: j(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: j(
        e.onPointerLeave,
        si(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !s && o.isRootMenu ? "none" : void 0,
        ...l.style
      }
    }
  ) });
});
Tb.displayName = Mr;
var DM = u.forwardRef((e, t) => {
  const n = Pt(Mr, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return $e(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), $e(() => () => o(e.value), [e.value, o]), null;
}), Va = "navigationMenu.rootContentDismiss", Mb = u.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: a,
    wasEscapeCloseRef: i,
    onRootContentClose: s,
    onContentFocusOutside: l,
    ...c
  } = e, f = Pt(Mr, n), p = u.useRef(null), m = ae(p, t), h = Ib(f.baseId, r), g = kb(f.baseId, r), v = bb(n), b = u.useRef(null), { onItemDismiss: y } = f;
  u.useEffect(() => {
    const x = p.current;
    if (f.isRootMenu && x) {
      const S = () => {
        var C;
        y(), s(), x.contains(document.activeElement) && ((C = o.current) == null || C.focus());
      };
      return x.addEventListener(Va, S), () => x.removeEventListener(Va, S);
    }
  }, [f.isRootMenu, e.value, o, y, s]);
  const w = u.useMemo(() => {
    const S = v().map((B) => B.value);
    f.dir === "rtl" && S.reverse();
    const C = S.indexOf(f.value), N = S.indexOf(f.previousValue), P = r === f.value, M = N === S.indexOf(r);
    if (!P && !M) return b.current;
    const _ = (() => {
      if (C !== N) {
        if (P && N !== -1) return C > N ? "from-end" : "from-start";
        if (M && C !== -1) return C > N ? "to-start" : "to-end";
      }
      return null;
    })();
    return b.current = _, _;
  }, [f.previousValue, f.value, f.dir, v, r]);
  return /* @__PURE__ */ d(Ob, { asChild: !0, children: /* @__PURE__ */ d(
    bn,
    {
      id: g,
      "aria-labelledby": h,
      "data-motion": w,
      "data-orientation": f.orientation,
      ...c,
      ref: m,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var S;
        const x = new Event(Va, {
          bubbles: !0,
          cancelable: !0
        });
        (S = p.current) == null || S.dispatchEvent(x);
      },
      onFocusOutside: j(e.onFocusOutside, (x) => {
        var C;
        l();
        const S = x.target;
        (C = f.rootNavigationMenu) != null && C.contains(S) && x.preventDefault();
      }),
      onPointerDownOutside: j(e.onPointerDownOutside, (x) => {
        var P;
        const S = x.target, C = v().some((M) => {
          var _;
          return (_ = M.ref.current) == null ? void 0 : _.contains(S);
        }), N = f.isRootMenu && ((P = f.viewport) == null ? void 0 : P.contains(S));
        (C || N || !f.isRootMenu) && x.preventDefault();
      }),
      onKeyDown: j(e.onKeyDown, (x) => {
        var N;
        const S = x.altKey || x.ctrlKey || x.metaKey;
        if (x.key === "Tab" && !S) {
          const P = Ul(x.currentTarget), M = document.activeElement, _ = P.findIndex((k) => k === M), T = x.shiftKey ? P.slice(0, _).reverse() : P.slice(_ + 1, P.length);
          yu(T) ? x.preventDefault() : (N = a.current) == null || N.focus();
        }
      }),
      onEscapeKeyDown: j(e.onEscapeKeyDown, (x) => {
        i.current = !0;
      })
    }
  ) });
}), bu = "NavigationMenuViewport", Ab = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, a = !!Pt(bu, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ d(Le, { present: n || a, children: /* @__PURE__ */ d(IM, { ...r, ref: t }) });
});
Ab.displayName = bu;
var IM = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = Pt(bu, n), i = ae(t, a.onViewportChange), s = RM(
    Mr,
    e.__scopeNavigationMenu
  ), [l, c] = u.useState(null), [f, p] = u.useState(null), m = l ? (l == null ? void 0 : l.width) + "px" : void 0, h = l ? (l == null ? void 0 : l.height) + "px" : void 0, g = !!a.value, v = g ? a.value : a.previousValue;
  return Kl(f, () => {
    f && c({ width: f.offsetWidth, height: f.offsetHeight });
  }), /* @__PURE__ */ d(
    Q.div,
    {
      "data-state": wu(g),
      "data-orientation": a.orientation,
      ...o,
      ref: i,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !g && a.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": m,
        "--radix-navigation-menu-viewport-height": h,
        ...o.style
      },
      onPointerEnter: j(e.onPointerEnter, a.onContentEnter),
      onPointerLeave: j(e.onPointerLeave, si(a.onContentLeave)),
      children: Array.from(s.items).map(([y, { ref: w, forceMount: x, ...S }]) => {
        const C = v === y;
        return /* @__PURE__ */ d(Le, { present: x || C, children: /* @__PURE__ */ d(
          Mb,
          {
            ...S,
            ref: Xt(w, (N) => {
              C && N && p(N);
            })
          }
        ) }, y);
      })
    }
  );
}), kM = "FocusGroup", Ob = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = Pt(kM, n);
    return /* @__PURE__ */ d(Wl.Provider, { scope: n, children: /* @__PURE__ */ d(Wl.Slot, { scope: n, children: /* @__PURE__ */ d(Q.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), Mf = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], $M = "FocusGroupItem", Db = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = PM(n), a = Pt($M, n);
    return /* @__PURE__ */ d(Wl.ItemSlot, { scope: n, children: /* @__PURE__ */ d(
      Q.button,
      {
        ...r,
        ref: t,
        onKeyDown: j(e.onKeyDown, (i) => {
          if (["Home", "End", ...Mf].includes(i.key)) {
            let l = o().map((p) => p.ref.current);
            if ([a.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(i.key) && l.reverse(), Mf.includes(i.key)) {
              const p = l.indexOf(i.currentTarget);
              l = l.slice(p + 1);
            }
            setTimeout(() => yu(l)), i.preventDefault();
          }
        })
      }
    ) });
  }
);
function Ul(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function yu(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function LM(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Kl(e, t) {
  const n = xe(t);
  $e(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
function wu(e) {
  return e ? "open" : "closed";
}
function Ib(e, t) {
  return `${e}-trigger-${t}`;
}
function kb(e, t) {
  return `${e}-content-${t}`;
}
function si(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var $b = yb, Lb = Sb, FM = Nb, Fb = Eb, BM = _b, Bb = Rb, zb = Tb, jb = Ab;
const zM = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ K(
  $b,
  {
    ref: r,
    className: R("relative z-10 flex max-w-max flex-1 items-center justify-center", e),
    ...n,
    children: [
      t,
      /* @__PURE__ */ d(Hb, {})
    ]
  }
));
zM.displayName = $b.displayName;
const jM = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Lb,
  {
    ref: n,
    className: R("group flex flex-1 list-none items-center justify-center space-x-1", e),
    ...t
  }
));
jM.displayName = Lb.displayName;
const bY = FM, HM = vn(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), WM = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ K(
  Fb,
  {
    ref: r,
    className: R(HM(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ d(
        ki,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
WM.displayName = Fb.displayName;
const VM = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  zb,
  {
    ref: n,
    className: R(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      e
    ),
    ...t
  }
));
VM.displayName = zb.displayName;
const yY = BM, Hb = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { className: R("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ d(
  jb,
  {
    className: R(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
Hb.displayName = jb.displayName;
const GM = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Bb,
  {
    ref: n,
    className: R(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
GM.displayName = Bb.displayName;
var Yl = ["Enter", " "], UM = ["ArrowDown", "PageUp", "Home"], Wb = ["ArrowUp", "PageDown", "End"], KM = [...UM, ...Wb], YM = {
  ltr: [...Yl, "ArrowRight"],
  rtl: [...Yl, "ArrowLeft"]
}, qM = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, ra = "Menu", [Ao, XM, ZM] = gn(ra), [ar, oa] = Me(ra, [
  ZM,
  nn,
  en
]), aa = nn(), Vb = en(), [Gb, Bn] = ar(ra), [QM, ia] = ar(ra), Ub = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: i = !0 } = e, s = aa(t), [l, c] = u.useState(null), f = u.useRef(!1), p = xe(a), m = Ft(o);
  return u.useEffect(() => {
    const h = () => {
      f.current = !0, document.addEventListener("pointerdown", g, { capture: !0, once: !0 }), document.addEventListener("pointermove", g, { capture: !0, once: !0 });
    }, g = () => f.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", g, { capture: !0 }), document.removeEventListener("pointermove", g, { capture: !0 });
    };
  }, []), /* @__PURE__ */ d(Ur, { ...s, children: /* @__PURE__ */ d(
    Gb,
    {
      scope: t,
      open: n,
      onOpenChange: p,
      content: l,
      onContentChange: c,
      children: /* @__PURE__ */ d(
        QM,
        {
          scope: t,
          onClose: u.useCallback(() => p(!1), [p]),
          isUsingKeyboardRef: f,
          dir: m,
          modal: i,
          children: r
        }
      )
    }
  ) });
};
Ub.displayName = ra;
var JM = "MenuAnchor", xu = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = aa(n);
    return /* @__PURE__ */ d(Kr, { ...o, ...r, ref: t });
  }
);
xu.displayName = JM;
var Su = "MenuPortal", [eA, Kb] = ar(Su, {
  forceMount: void 0
}), Yb = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Bn(Su, t);
  return /* @__PURE__ */ d(eA, { scope: t, forceMount: n, children: /* @__PURE__ */ d(Le, { present: n || a.open, children: /* @__PURE__ */ d(zr, { asChild: !0, container: o, children: r }) }) });
};
Yb.displayName = Su;
var Ct = "MenuContent", [tA, Cu] = ar(Ct), qb = u.forwardRef(
  (e, t) => {
    const n = Kb(Ct, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Bn(Ct, e.__scopeMenu), i = ia(Ct, e.__scopeMenu);
    return /* @__PURE__ */ d(Ao.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d(Le, { present: r || a.open, children: /* @__PURE__ */ d(Ao.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ d(nA, { ...o, ref: t }) : /* @__PURE__ */ d(rA, { ...o, ref: t }) }) }) });
  }
), nA = u.forwardRef(
  (e, t) => {
    const n = Bn(Ct, e.__scopeMenu), r = u.useRef(null), o = ae(t, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return Vi(a);
    }, []), /* @__PURE__ */ d(
      Pu,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: j(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), rA = u.forwardRef((e, t) => {
  const n = Bn(Ct, e.__scopeMenu);
  return /* @__PURE__ */ d(
    Pu,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), oA = /* @__PURE__ */ Mn("MenuContent.ScrollLock"), Pu = u.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEntryFocus: l,
      onEscapeKeyDown: c,
      onPointerDownOutside: f,
      onFocusOutside: p,
      onInteractOutside: m,
      onDismiss: h,
      disableOutsideScroll: g,
      ...v
    } = e, b = Bn(Ct, n), y = ia(Ct, n), w = aa(n), x = Vb(n), S = XM(n), [C, N] = u.useState(null), P = u.useRef(null), M = ae(t, P, b.onContentChange), _ = u.useRef(0), B = u.useRef(""), T = u.useRef(0), k = u.useRef(null), G = u.useRef("right"), $ = u.useRef(0), U = g ? na : u.Fragment, W = g ? { as: oA, allowPinchZoom: !0 } : void 0, F = (L) => {
      var A, Y;
      const ee = B.current + L, te = S().filter((J) => !J.disabled), I = document.activeElement, O = (A = te.find((J) => J.ref.current === I)) == null ? void 0 : A.textValue, H = te.map((J) => J.textValue), V = vA(H, ee, O), Z = (Y = te.find((J) => J.textValue === V)) == null ? void 0 : Y.ref.current;
      (function J(ne) {
        B.current = ne, window.clearTimeout(_.current), ne !== "" && (_.current = window.setTimeout(() => J(""), 1e3));
      })(ee), Z && setTimeout(() => Z.focus());
    };
    u.useEffect(() => () => window.clearTimeout(_.current), []), zi();
    const D = u.useCallback((L) => {
      var te, I;
      return G.current === ((te = k.current) == null ? void 0 : te.side) && bA(L, (I = k.current) == null ? void 0 : I.area);
    }, []);
    return /* @__PURE__ */ d(
      tA,
      {
        scope: n,
        searchRef: B,
        onItemEnter: u.useCallback(
          (L) => {
            D(L) && L.preventDefault();
          },
          [D]
        ),
        onItemLeave: u.useCallback(
          (L) => {
            var ee;
            D(L) || ((ee = P.current) == null || ee.focus(), N(null));
          },
          [D]
        ),
        onTriggerLeave: u.useCallback(
          (L) => {
            D(L) && L.preventDefault();
          },
          [D]
        ),
        pointerGraceTimerRef: T,
        onPointerGraceIntentChange: u.useCallback((L) => {
          k.current = L;
        }, []),
        children: /* @__PURE__ */ d(U, { ...W, children: /* @__PURE__ */ d(
          Qo,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: j(a, (L) => {
              var ee;
              L.preventDefault(), (ee = P.current) == null || ee.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ d(
              bn,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: c,
                onPointerDownOutside: f,
                onFocusOutside: p,
                onInteractOutside: m,
                onDismiss: h,
                children: /* @__PURE__ */ d(
                  Xo,
                  {
                    asChild: !0,
                    ...x,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: N,
                    onEntryFocus: j(l, (L) => {
                      y.isUsingKeyboardRef.current || L.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ d(
                      ea,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": fy(b.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...w,
                        ...v,
                        ref: M,
                        style: { outline: "none", ...v.style },
                        onKeyDown: j(v.onKeyDown, (L) => {
                          const te = L.target.closest("[data-radix-menu-content]") === L.currentTarget, I = L.ctrlKey || L.altKey || L.metaKey, O = L.key.length === 1;
                          te && (L.key === "Tab" && L.preventDefault(), !I && O && F(L.key));
                          const H = P.current;
                          if (L.target !== H || !KM.includes(L.key)) return;
                          L.preventDefault();
                          const Z = S().filter((A) => !A.disabled).map((A) => A.ref.current);
                          Wb.includes(L.key) && Z.reverse(), mA(Z);
                        }),
                        onBlur: j(e.onBlur, (L) => {
                          L.currentTarget.contains(L.target) || (window.clearTimeout(_.current), B.current = "");
                        }),
                        onPointerMove: j(
                          e.onPointerMove,
                          Oo((L) => {
                            const ee = L.target, te = $.current !== L.clientX;
                            if (L.currentTarget.contains(ee) && te) {
                              const I = L.clientX > $.current ? "right" : "left";
                              G.current = I, $.current = L.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
qb.displayName = Ct;
var aA = "MenuGroup", Nu = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d(Q.div, { role: "group", ...r, ref: t });
  }
);
Nu.displayName = aA;
var iA = "MenuLabel", Xb = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d(Q.div, { ...r, ref: t });
  }
);
Xb.displayName = iA;
var li = "MenuItem", Af = "menu.itemSelect", ts = u.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = u.useRef(null), i = ia(li, e.__scopeMenu), s = Cu(li, e.__scopeMenu), l = ae(t, a), c = u.useRef(!1), f = () => {
      const p = a.current;
      if (!n && p) {
        const m = new CustomEvent(Af, { bubbles: !0, cancelable: !0 });
        p.addEventListener(Af, (h) => r == null ? void 0 : r(h), { once: !0 }), _o(p, m), m.defaultPrevented ? c.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ d(
      Zb,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: j(e.onClick, f),
        onPointerDown: (p) => {
          var m;
          (m = e.onPointerDown) == null || m.call(e, p), c.current = !0;
        },
        onPointerUp: j(e.onPointerUp, (p) => {
          var m;
          c.current || (m = p.currentTarget) == null || m.click();
        }),
        onKeyDown: j(e.onKeyDown, (p) => {
          const m = s.searchRef.current !== "";
          n || m && p.key === " " || Yl.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }
);
ts.displayName = li;
var Zb = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, i = Cu(li, n), s = Vb(n), l = u.useRef(null), c = ae(t, l), [f, p] = u.useState(!1), [m, h] = u.useState("");
    return u.useEffect(() => {
      const g = l.current;
      g && h((g.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ d(
      Ao.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? m,
        children: /* @__PURE__ */ d(Zo, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ d(
          Q.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: c,
            onPointerMove: j(
              e.onPointerMove,
              Oo((g) => {
                r ? i.onItemLeave(g) : (i.onItemEnter(g), g.defaultPrevented || g.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: j(
              e.onPointerLeave,
              Oo((g) => i.onItemLeave(g))
            ),
            onFocus: j(e.onFocus, () => p(!0)),
            onBlur: j(e.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }
), sA = "MenuCheckboxItem", Qb = u.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ d(ry, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ d(
      ts,
      {
        role: "menuitemcheckbox",
        "aria-checked": ci(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Ru(n),
        onSelect: j(
          o.onSelect,
          () => r == null ? void 0 : r(ci(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Qb.displayName = sA;
var Jb = "MenuRadioGroup", [lA, cA] = ar(
  Jb,
  { value: void 0, onValueChange: () => {
  } }
), ey = u.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = xe(r);
    return /* @__PURE__ */ d(lA, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ d(Nu, { ...o, ref: t }) });
  }
);
ey.displayName = Jb;
var ty = "MenuRadioItem", ny = u.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = cA(ty, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ d(ry, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ d(
      ts,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": Ru(a),
        onSelect: j(
          r.onSelect,
          () => {
            var i;
            return (i = o.onValueChange) == null ? void 0 : i.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
ny.displayName = ty;
var Eu = "MenuItemIndicator", [ry, uA] = ar(
  Eu,
  { checked: !1 }
), oy = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = uA(Eu, n);
    return /* @__PURE__ */ d(
      Le,
      {
        present: r || ci(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ d(
          Q.span,
          {
            ...o,
            ref: t,
            "data-state": Ru(a.checked)
          }
        )
      }
    );
  }
);
oy.displayName = Eu;
var dA = "MenuSeparator", ay = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d(
      Q.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
ay.displayName = dA;
var fA = "MenuArrow", iy = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = aa(n);
    return /* @__PURE__ */ d(ta, { ...o, ...r, ref: t });
  }
);
iy.displayName = fA;
var _u = "MenuSub", [pA, sy] = ar(_u), ly = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Bn(_u, t), i = aa(t), [s, l] = u.useState(null), [c, f] = u.useState(null), p = xe(o);
  return u.useEffect(() => (a.open === !1 && p(!1), () => p(!1)), [a.open, p]), /* @__PURE__ */ d(Ur, { ...i, children: /* @__PURE__ */ d(
    Gb,
    {
      scope: t,
      open: r,
      onOpenChange: p,
      content: c,
      onContentChange: f,
      children: /* @__PURE__ */ d(
        pA,
        {
          scope: t,
          contentId: Te(),
          triggerId: Te(),
          trigger: s,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
ly.displayName = _u;
var wo = "MenuSubTrigger", cy = u.forwardRef(
  (e, t) => {
    const n = Bn(wo, e.__scopeMenu), r = ia(wo, e.__scopeMenu), o = sy(wo, e.__scopeMenu), a = Cu(wo, e.__scopeMenu), i = u.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: l } = a, c = { __scopeMenu: e.__scopeMenu }, f = u.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return u.useEffect(() => f, [f]), u.useEffect(() => {
      const p = s.current;
      return () => {
        window.clearTimeout(p), l(null);
      };
    }, [s, l]), /* @__PURE__ */ d(xu, { asChild: !0, ...c, children: /* @__PURE__ */ d(
      Zb,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": fy(n.open),
        ...e,
        ref: Xt(t, o.onTriggerChange),
        onClick: (p) => {
          var m;
          (m = e.onClick) == null || m.call(e, p), !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: j(
          e.onPointerMove,
          Oo((p) => {
            a.onItemEnter(p), !p.defaultPrevented && !e.disabled && !n.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: j(
          e.onPointerLeave,
          Oo((p) => {
            var h, g;
            f();
            const m = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (m) {
              const v = (g = n.content) == null ? void 0 : g.dataset.side, b = v === "right", y = b ? -5 : 5, w = m[b ? "left" : "right"], x = m[b ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: p.clientX + y, y: p.clientY },
                  { x: w, y: m.top },
                  { x, y: m.top },
                  { x, y: m.bottom },
                  { x: w, y: m.bottom }
                ],
                side: v
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(p), p.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: j(e.onKeyDown, (p) => {
          var h;
          const m = a.searchRef.current !== "";
          e.disabled || m && p.key === " " || YM[r.dir].includes(p.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), p.preventDefault());
        })
      }
    ) });
  }
);
cy.displayName = wo;
var uy = "MenuSubContent", dy = u.forwardRef(
  (e, t) => {
    const n = Kb(Ct, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Bn(Ct, e.__scopeMenu), i = ia(Ct, e.__scopeMenu), s = sy(uy, e.__scopeMenu), l = u.useRef(null), c = ae(t, l);
    return /* @__PURE__ */ d(Ao.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d(Le, { present: r || a.open, children: /* @__PURE__ */ d(Ao.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ d(
      Pu,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: c,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          var p;
          i.isUsingKeyboardRef.current && ((p = l.current) == null || p.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: j(e.onFocusOutside, (f) => {
          f.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: j(e.onEscapeKeyDown, (f) => {
          i.onClose(), f.preventDefault();
        }),
        onKeyDown: j(e.onKeyDown, (f) => {
          var h;
          const p = f.currentTarget.contains(f.target), m = qM[i.dir].includes(f.key);
          p && m && (a.onOpenChange(!1), (h = s.trigger) == null || h.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
dy.displayName = uy;
function fy(e) {
  return e ? "open" : "closed";
}
function ci(e) {
  return e === "indeterminate";
}
function Ru(e) {
  return ci(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function mA(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function hA(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function vA(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = hA(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function gA(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], l = t[i], c = s.x, f = s.y, p = l.x, m = l.y;
    f > r != m > r && n < (p - c) * (r - f) / (m - f) + c && (o = !o);
  }
  return o;
}
function bA(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return gA(n, t);
}
function Oo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Tu = Ub, Mu = xu, Au = Yb, Ou = qb, Du = Nu, Iu = Xb, ku = ts, $u = Qb, Lu = ey, Fu = ny, Bu = oy, zu = ay, ju = iy, Hu = ly, Wu = cy, Vu = dy, sa = "Menubar", [ql, yA, wA] = gn(sa), [py, wY] = Me(sa, [
  wA,
  en
]), rt = oa(), my = en(), [xA, Gu] = py(sa), hy = u.forwardRef(
  (e, t) => {
    const {
      __scopeMenubar: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      loop: i = !0,
      dir: s,
      ...l
    } = e, c = Ft(s), f = my(n), [p, m] = Ae({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: sa
    }), [h, g] = u.useState(null);
    return /* @__PURE__ */ d(
      xA,
      {
        scope: n,
        value: p,
        onMenuOpen: u.useCallback(
          (v) => {
            m(v), g(v);
          },
          [m]
        ),
        onMenuClose: u.useCallback(() => m(""), [m]),
        onMenuToggle: u.useCallback(
          (v) => {
            m((b) => b ? "" : v), g(v);
          },
          [m]
        ),
        dir: c,
        loop: i,
        children: /* @__PURE__ */ d(ql.Provider, { scope: n, children: /* @__PURE__ */ d(ql.Slot, { scope: n, children: /* @__PURE__ */ d(
          Xo,
          {
            asChild: !0,
            ...f,
            orientation: "horizontal",
            loop: i,
            dir: c,
            currentTabStopId: h,
            onCurrentTabStopIdChange: g,
            children: /* @__PURE__ */ d(Q.div, { role: "menubar", ...l, ref: t })
          }
        ) }) })
      }
    );
  }
);
hy.displayName = sa;
var Uu = "MenubarMenu", [SA, vy] = py(Uu), gy = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = Te(), a = n || o || "LEGACY_REACT_AUTO_VALUE", i = Gu(Uu, t), s = rt(t), l = u.useRef(null), c = u.useRef(!1), f = i.value === a;
  return u.useEffect(() => {
    f || (c.current = !1);
  }, [f]), /* @__PURE__ */ d(
    SA,
    {
      scope: t,
      value: a,
      triggerId: Te(),
      triggerRef: l,
      contentId: Te(),
      wasKeyboardTriggerOpenRef: c,
      children: /* @__PURE__ */ d(
        Tu,
        {
          ...s,
          open: f,
          onOpenChange: (p) => {
            p || i.onMenuClose();
          },
          modal: !1,
          dir: i.dir,
          ...r
        }
      )
    }
  );
};
gy.displayName = Uu;
var Xl = "MenubarTrigger", by = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = my(n), i = rt(n), s = Gu(Xl, n), l = vy(Xl, n), c = u.useRef(null), f = ae(t, c, l.triggerRef), [p, m] = u.useState(!1), h = s.value === l.value;
    return /* @__PURE__ */ d(ql.ItemSlot, { scope: n, value: l.value, disabled: r, children: /* @__PURE__ */ d(
      Zo,
      {
        asChild: !0,
        ...a,
        focusable: !r,
        tabStopId: l.value,
        children: /* @__PURE__ */ d(Mu, { asChild: !0, ...i, children: /* @__PURE__ */ d(
          Q.button,
          {
            type: "button",
            role: "menuitem",
            id: l.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": h,
            "aria-controls": h ? l.contentId : void 0,
            "data-highlighted": p ? "" : void 0,
            "data-state": h ? "open" : "closed",
            "data-disabled": r ? "" : void 0,
            disabled: r,
            ...o,
            ref: f,
            onPointerDown: j(e.onPointerDown, (g) => {
              !r && g.button === 0 && g.ctrlKey === !1 && (s.onMenuOpen(l.value), h || g.preventDefault());
            }),
            onPointerEnter: j(e.onPointerEnter, () => {
              var v;
              !!s.value && !h && (s.onMenuOpen(l.value), (v = c.current) == null || v.focus());
            }),
            onKeyDown: j(e.onKeyDown, (g) => {
              r || (["Enter", " "].includes(g.key) && s.onMenuToggle(l.value), g.key === "ArrowDown" && s.onMenuOpen(l.value), ["Enter", " ", "ArrowDown"].includes(g.key) && (l.wasKeyboardTriggerOpenRef.current = !0, g.preventDefault()));
            }),
            onFocus: j(e.onFocus, () => m(!0)),
            onBlur: j(e.onBlur, () => m(!1))
          }
        ) })
      }
    ) });
  }
);
by.displayName = Xl;
var CA = "MenubarPortal", yy = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = rt(t);
  return /* @__PURE__ */ d(Au, { ...r, ...n });
};
yy.displayName = CA;
var Zl = "MenubarContent", wy = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, align: r = "start", ...o } = e, a = rt(n), i = Gu(Zl, n), s = vy(Zl, n), l = yA(n), c = u.useRef(!1);
    return /* @__PURE__ */ d(
      Ou,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        "data-radix-menubar-content": "",
        ...a,
        ...o,
        ref: t,
        align: r,
        onCloseAutoFocus: j(e.onCloseAutoFocus, (f) => {
          var m;
          !!!i.value && !c.current && ((m = s.triggerRef.current) == null || m.focus()), c.current = !1, f.preventDefault();
        }),
        onFocusOutside: j(e.onFocusOutside, (f) => {
          const p = f.target;
          l().some((h) => {
            var g;
            return (g = h.ref.current) == null ? void 0 : g.contains(p);
          }) && f.preventDefault();
        }),
        onInteractOutside: j(e.onInteractOutside, () => {
          c.current = !0;
        }),
        onEntryFocus: (f) => {
          s.wasKeyboardTriggerOpenRef.current || f.preventDefault();
        },
        onKeyDown: j(
          e.onKeyDown,
          (f) => {
            if (["ArrowRight", "ArrowLeft"].includes(f.key)) {
              const p = f.target, m = p.hasAttribute("data-radix-menubar-subtrigger"), h = p.closest("[data-radix-menubar-content]") !== f.currentTarget, v = (i.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === f.key;
              if (!v && m || h && v) return;
              let w = l().filter((C) => !C.disabled).map((C) => C.value);
              v && w.reverse();
              const x = w.indexOf(s.value);
              w = i.loop ? LA(w, x + 1) : w.slice(x + 1);
              const [S] = w;
              S && i.onMenuOpen(S);
            }
          },
          { checkForDefaultPrevented: !1 }
        ),
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
wy.displayName = Zl;
var PA = "MenubarGroup", xy = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = rt(n);
    return /* @__PURE__ */ d(Du, { ...o, ...r, ref: t });
  }
);
xy.displayName = PA;
var NA = "MenubarLabel", Sy = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = rt(n);
    return /* @__PURE__ */ d(Iu, { ...o, ...r, ref: t });
  }
);
Sy.displayName = NA;
var EA = "MenubarItem", Cy = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = rt(n);
    return /* @__PURE__ */ d(ku, { ...o, ...r, ref: t });
  }
);
Cy.displayName = EA;
var _A = "MenubarCheckboxItem", Py = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = rt(n);
    return /* @__PURE__ */ d($u, { ...o, ...r, ref: t });
  }
);
Py.displayName = _A;
var RA = "MenubarRadioGroup", TA = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = rt(n);
    return /* @__PURE__ */ d(Lu, { ...o, ...r, ref: t });
  }
);
TA.displayName = RA;
var MA = "MenubarRadioItem", Ny = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = rt(n);
    return /* @__PURE__ */ d(Fu, { ...o, ...r, ref: t });
  }
);
Ny.displayName = MA;
var AA = "MenubarItemIndicator", Ey = u.forwardRef((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = rt(n);
  return /* @__PURE__ */ d(Bu, { ...o, ...r, ref: t });
});
Ey.displayName = AA;
var OA = "MenubarSeparator", _y = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = rt(n);
    return /* @__PURE__ */ d(zu, { ...o, ...r, ref: t });
  }
);
_y.displayName = OA;
var DA = "MenubarArrow", IA = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = rt(n);
    return /* @__PURE__ */ d(ju, { ...o, ...r, ref: t });
  }
);
IA.displayName = DA;
var Ry = "MenubarSub", Ty = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, i = rt(t), [s, l] = Ae({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: Ry
  });
  return /* @__PURE__ */ d(Hu, { ...i, open: s, onOpenChange: l, children: n });
};
Ty.displayName = Ry;
var kA = "MenubarSubTrigger", My = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = rt(n);
    return /* @__PURE__ */ d(
      Wu,
      {
        "data-radix-menubar-subtrigger": "",
        ...o,
        ...r,
        ref: t
      }
    );
  }
);
My.displayName = kA;
var $A = "MenubarSubContent", Ay = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = rt(n);
    return /* @__PURE__ */ d(
      Vu,
      {
        ...o,
        "data-radix-menubar-content": "",
        ...r,
        ref: t,
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Ay.displayName = $A;
function LA(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Oy = hy, FA = gy, Dy = by, BA = yy, Iy = wy, zA = xy, ky = Sy, $y = Cy, Ly = Py, Fy = Ny, By = Ey, zy = _y, jA = Ty, jy = My, Hy = Ay;
const xY = FA, SY = zA, CY = jA, HA = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Oy,
  {
    ref: n,
    className: R("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", e),
    ...t
  }
));
HA.displayName = Oy.displayName;
const WA = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Dy,
  {
    ref: n,
    className: R(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...t
  }
));
WA.displayName = Dy.displayName;
const VA = u.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ K(
  jy,
  {
    ref: o,
    className: R(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ d(jr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
VA.displayName = jy.displayName;
const GA = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Hy,
  {
    ref: n,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
GA.displayName = Hy.displayName;
const UA = u.forwardRef(({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ d(BA, { children: /* @__PURE__ */ d(
  Iy,
  {
    ref: a,
    align: t,
    alignOffset: n,
    sideOffset: r,
    className: R(
      "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...o
  }
) }));
UA.displayName = Iy.displayName;
const KA = u.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d(
  $y,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
KA.displayName = $y.displayName;
const YA = u.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ K(
  Ly,
  {
    ref: o,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ d("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d(By, { children: /* @__PURE__ */ d(Ko, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
YA.displayName = Ly.displayName;
const qA = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ K(
  Fy,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d(By, { children: /* @__PURE__ */ d($i, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
qA.displayName = Fy.displayName;
const XA = u.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d(
  ky,
  {
    ref: r,
    className: R("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
    ...n
  }
));
XA.displayName = ky.displayName;
const ZA = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(zy, { ref: n, className: R("-mx-1 my-1 h-px bg-muted", e), ...t }));
ZA.displayName = zy.displayName;
const QA = ({ className: e, ...t }) => /* @__PURE__ */ d("span", { className: R("ml-auto text-xs tracking-widest text-muted-foreground", e), ...t });
QA.displayname = "MenubarShortcut";
const Us = 768;
function JA() {
  const [e, t] = u.useState(void 0);
  return u.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${Us - 1}px)`), r = () => {
      t(window.innerWidth < Us);
    };
    return n.addEventListener("change", r), t(window.innerWidth < Us), () => n.removeEventListener("change", r);
  }, []), !!e;
}
var eO = "Separator", Of = "horizontal", tO = ["horizontal", "vertical"], Wy = u.forwardRef((e, t) => {
  const { decorative: n, orientation: r = Of, ...o } = e, a = nO(r) ? r : Of, s = n ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ d(
    Q.div,
    {
      "data-orientation": a,
      ...s,
      ...o,
      ref: t
    }
  );
});
Wy.displayName = eO;
function nO(e) {
  return tO.includes(e);
}
var Vy = Wy;
const Gy = u.forwardRef(({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ d(
  Vy,
  {
    ref: o,
    decorative: n,
    orientation: t,
    className: R("shrink-0 bg-border", t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", e),
    ...r
  }
));
Gy.displayName = Vy.displayName;
var ns = "Dialog", [Uy, Ky] = Me(ns), [rO, zt] = Uy(ns), Yy = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = u.useRef(null), l = u.useRef(null), [c, f] = Ae({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: ns
  });
  return /* @__PURE__ */ d(
    rO,
    {
      scope: t,
      triggerRef: s,
      contentRef: l,
      contentId: Te(),
      titleId: Te(),
      descriptionId: Te(),
      open: c,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((p) => !p), [f]),
      modal: i,
      children: n
    }
  );
};
Yy.displayName = ns;
var qy = "DialogTrigger", Xy = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = zt(qy, n), a = ae(t, o.triggerRef);
    return /* @__PURE__ */ d(
      Q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": qu(o.open),
        ...r,
        ref: a,
        onClick: j(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Xy.displayName = qy;
var Ku = "DialogPortal", [oO, Zy] = Uy(Ku, {
  forceMount: void 0
}), Qy = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = zt(Ku, t);
  return /* @__PURE__ */ d(oO, { scope: t, forceMount: n, children: u.Children.map(r, (i) => /* @__PURE__ */ d(Le, { present: n || a.open, children: /* @__PURE__ */ d(zr, { asChild: !0, container: o, children: i }) })) });
};
Qy.displayName = Ku;
var ui = "DialogOverlay", Jy = u.forwardRef(
  (e, t) => {
    const n = Zy(ui, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = zt(ui, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ d(Le, { present: r || a.open, children: /* @__PURE__ */ d(iO, { ...o, ref: t }) }) : null;
  }
);
Jy.displayName = ui;
var aO = /* @__PURE__ */ Mn("DialogOverlay.RemoveScroll"), iO = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = zt(ui, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d(na, { as: aO, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ d(
        Q.div,
        {
          "data-state": qu(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Jn = "DialogContent", ew = u.forwardRef(
  (e, t) => {
    const n = Zy(Jn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = zt(Jn, e.__scopeDialog);
    return /* @__PURE__ */ d(Le, { present: r || a.open, children: a.modal ? /* @__PURE__ */ d(sO, { ...o, ref: t }) : /* @__PURE__ */ d(lO, { ...o, ref: t }) });
  }
);
ew.displayName = Jn;
var sO = u.forwardRef(
  (e, t) => {
    const n = zt(Jn, e.__scopeDialog), r = u.useRef(null), o = ae(t, n.contentRef, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return Vi(a);
    }, []), /* @__PURE__ */ d(
      tw,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: j(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: j(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: j(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), lO = u.forwardRef(
  (e, t) => {
    const n = zt(Jn, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ d(
      tw,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), tw = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = zt(Jn, n), l = u.useRef(null), c = ae(t, l);
    return zi(), /* @__PURE__ */ K(ze, { children: [
      /* @__PURE__ */ d(
        Qo,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ d(
            bn,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": qu(s.open),
              ...i,
              ref: c,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ K(ze, { children: [
        /* @__PURE__ */ d(uO, { titleId: s.titleId }),
        /* @__PURE__ */ d(fO, { contentRef: l, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Yu = "DialogTitle", nw = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = zt(Yu, n);
    return /* @__PURE__ */ d(Q.h2, { id: o.titleId, ...r, ref: t });
  }
);
nw.displayName = Yu;
var rw = "DialogDescription", ow = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = zt(rw, n);
    return /* @__PURE__ */ d(Q.p, { id: o.descriptionId, ...r, ref: t });
  }
);
ow.displayName = rw;
var aw = "DialogClose", iw = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = zt(aw, n);
    return /* @__PURE__ */ d(
      Q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: j(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
iw.displayName = aw;
function qu(e) {
  return e ? "open" : "closed";
}
var sw = "DialogTitleWarning", [cO, lw] = KC(sw, {
  contentName: Jn,
  titleName: Yu,
  docsSlug: "dialog"
}), uO = ({ titleId: e }) => {
  const t = lw(sw), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, dO = "DialogDescriptionWarning", fO = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${lw(dO).contentName}}.`;
  return u.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, la = Yy, rs = Xy, ca = Qy, ir = Jy, sr = ew, Xr = nw, Zr = ow, lr = iw;
const pO = la, PY = rs, NY = lr, mO = ca, cw = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  ir,
  {
    className: R(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
cw.displayName = ir.displayName;
const hO = vn(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), uw = u.forwardRef(
  ({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ K(mO, { children: [
    /* @__PURE__ */ d(cw, {}),
    /* @__PURE__ */ K(sr, { ref: o, className: R(hO({ side: e }), t), ...r, children: [
      n,
      /* @__PURE__ */ K(lr, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
        /* @__PURE__ */ d(Hr, { className: "h-4 w-4" }),
        /* @__PURE__ */ d("span", { className: "sr-only", children: "Close" })
      ] })
    ] })
  ] })
);
uw.displayName = sr.displayName;
const vO = ({ className: e, ...t }) => /* @__PURE__ */ d("div", { className: R("flex flex-col space-y-2 text-center sm:text-left", e), ...t });
vO.displayName = "SheetHeader";
const gO = ({ className: e, ...t }) => /* @__PURE__ */ d("div", { className: R("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e), ...t });
gO.displayName = "SheetFooter";
const bO = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(Xr, { ref: n, className: R("text-lg font-semibold text-foreground", e), ...t }));
bO.displayName = Xr.displayName;
const yO = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(Zr, { ref: n, className: R("text-sm text-muted-foreground", e), ...t }));
yO.displayName = Zr.displayName;
var [os, EY] = Me("Tooltip", [
  nn
]), as = nn(), dw = "TooltipProvider", wO = 700, Ql = "tooltip.open", [xO, Xu] = os(dw), fw = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = wO,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, i = u.useRef(!0), s = u.useRef(!1), l = u.useRef(0);
  return u.useEffect(() => {
    const c = l.current;
    return () => window.clearTimeout(c);
  }, []), /* @__PURE__ */ d(
    xO,
    {
      scope: t,
      isOpenDelayedRef: i,
      delayDuration: n,
      onOpen: u.useCallback(() => {
        window.clearTimeout(l.current), i.current = !1;
      }, []),
      onClose: u.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => i.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: s,
      onPointerInTransitChange: u.useCallback((c) => {
        s.current = c;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
fw.displayName = dw;
var Do = "Tooltip", [SO, is] = os(Do), pw = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, l = Xu(Do, e.__scopeTooltip), c = as(t), [f, p] = u.useState(null), m = Te(), h = u.useRef(0), g = i ?? l.disableHoverableContent, v = s ?? l.delayDuration, b = u.useRef(!1), [y, w] = Ae({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (P) => {
      P ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Ql))) : l.onClose(), a == null || a(P);
    },
    caller: Do
  }), x = u.useMemo(() => y ? b.current ? "delayed-open" : "instant-open" : "closed", [y]), S = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, b.current = !1, w(!0);
  }, [w]), C = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, w(!1);
  }, [w]), N = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      b.current = !0, w(!0), h.current = 0;
    }, v);
  }, [v, w]);
  return u.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ d(Ur, { ...c, children: /* @__PURE__ */ d(
    SO,
    {
      scope: t,
      contentId: m,
      open: y,
      stateAttribute: x,
      trigger: f,
      onTriggerChange: p,
      onTriggerEnter: u.useCallback(() => {
        l.isOpenDelayedRef.current ? N() : S();
      }, [l.isOpenDelayedRef, N, S]),
      onTriggerLeave: u.useCallback(() => {
        g ? C() : (window.clearTimeout(h.current), h.current = 0);
      }, [C, g]),
      onOpen: S,
      onClose: C,
      disableHoverableContent: g,
      children: n
    }
  ) });
};
pw.displayName = Do;
var Jl = "TooltipTrigger", mw = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = is(Jl, n), a = Xu(Jl, n), i = as(n), s = u.useRef(null), l = ae(t, s, o.onTriggerChange), c = u.useRef(!1), f = u.useRef(!1), p = u.useCallback(() => c.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ d(Kr, { asChild: !0, ...i, children: /* @__PURE__ */ d(
      Q.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: j(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !f.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: j(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: j(e.onPointerDown, () => {
          o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: j(e.onFocus, () => {
          c.current || o.onOpen();
        }),
        onBlur: j(e.onBlur, o.onClose),
        onClick: j(e.onClick, o.onClose)
      }
    ) });
  }
);
mw.displayName = Jl;
var CO = "TooltipPortal", [_Y, PO] = os(CO, {
  forceMount: void 0
}), Ar = "TooltipContent", hw = u.forwardRef(
  (e, t) => {
    const n = PO(Ar, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, i = is(Ar, e.__scopeTooltip);
    return /* @__PURE__ */ d(Le, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ d(vw, { side: o, ...a, ref: t }) : /* @__PURE__ */ d(NO, { side: o, ...a, ref: t }) });
  }
), NO = u.forwardRef((e, t) => {
  const n = is(Ar, e.__scopeTooltip), r = Xu(Ar, e.__scopeTooltip), o = u.useRef(null), a = ae(t, o), [i, s] = u.useState(null), { trigger: l, onClose: c } = n, f = o.current, { onPointerInTransitChange: p } = r, m = u.useCallback(() => {
    s(null), p(!1);
  }, [p]), h = u.useCallback(
    (g, v) => {
      const b = g.currentTarget, y = { x: g.clientX, y: g.clientY }, w = MO(y, b.getBoundingClientRect()), x = AO(y, w), S = OO(v.getBoundingClientRect()), C = IO([...x, ...S]);
      s(C), p(!0);
    },
    [p]
  );
  return u.useEffect(() => () => m(), [m]), u.useEffect(() => {
    if (l && f) {
      const g = (b) => h(b, f), v = (b) => h(b, l);
      return l.addEventListener("pointerleave", g), f.addEventListener("pointerleave", v), () => {
        l.removeEventListener("pointerleave", g), f.removeEventListener("pointerleave", v);
      };
    }
  }, [l, f, h, m]), u.useEffect(() => {
    if (i) {
      const g = (v) => {
        const b = v.target, y = { x: v.clientX, y: v.clientY }, w = (l == null ? void 0 : l.contains(b)) || (f == null ? void 0 : f.contains(b)), x = !DO(y, i);
        w ? m() : x && (m(), c());
      };
      return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g);
    }
  }, [l, f, i, c, m]), /* @__PURE__ */ d(vw, { ...e, ref: a });
}), [EO, _O] = os(Do, { isInside: !1 }), RO = /* @__PURE__ */ wm("TooltipContent"), vw = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, l = is(Ar, n), c = as(n), { onClose: f } = l;
    return u.useEffect(() => (document.addEventListener(Ql, f), () => document.removeEventListener(Ql, f)), [f]), u.useEffect(() => {
      if (l.trigger) {
        const p = (m) => {
          const h = m.target;
          h != null && h.contains(l.trigger) && f();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [l.trigger, f]), /* @__PURE__ */ d(
      bn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ K(
          ea,
          {
            "data-state": l.stateAttribute,
            ...c,
            ...s,
            ref: t,
            style: {
              ...s.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ d(RO, { children: r }),
              /* @__PURE__ */ d(EO, { scope: n, isInside: !0, children: /* @__PURE__ */ d(km, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
hw.displayName = Ar;
var gw = "TooltipArrow", TO = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = as(n);
    return _O(
      gw,
      n
    ).isInside ? null : /* @__PURE__ */ d(ta, { ...o, ...r, ref: t });
  }
);
TO.displayName = gw;
function MO(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function AO(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function OO(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function DO(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], l = t[i], c = s.x, f = s.y, p = l.x, m = l.y;
    f > r != m > r && n < (p - c) * (r - f) / (m - f) + c && (o = !o);
  }
  return o;
}
function IO(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), kO(t);
}
function kO(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], i = t[t.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], i = n[n.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var $O = fw, LO = pw, FO = mw, bw = hw;
const BO = $O, zO = LO, jO = FO, yw = u.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ d(
  bw,
  {
    ref: r,
    sideOffset: t,
    className: R(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
yw.displayName = bw.displayName;
const HO = "sidebar:state", WO = 60 * 60 * 24 * 7, VO = "16rem", GO = "18rem", UO = "3rem", KO = "b", ww = u.createContext(null);
function ss() {
  const e = u.useContext(ww);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
const YO = u.forwardRef(({ defaultOpen: e = !0, open: t, onOpenChange: n, className: r, style: o, children: a, ...i }, s) => {
  const l = JA(), [c, f] = u.useState(!1), [p, m] = u.useState(e), h = t ?? p, g = u.useCallback(
    (w) => {
      const x = typeof w == "function" ? w(h) : w;
      n ? n(x) : m(x), document.cookie = `${HO}=${x}; path=/; max-age=${WO}`;
    },
    [n, h]
  ), v = u.useCallback(() => l ? f((w) => !w) : g((w) => !w), [l, g, f]);
  u.useEffect(() => {
    const w = (x) => {
      x.key === KO && (x.metaKey || x.ctrlKey) && (x.preventDefault(), v());
    };
    return window.addEventListener("keydown", w), () => window.removeEventListener("keydown", w);
  }, [v]);
  const b = h ? "expanded" : "collapsed", y = u.useMemo(
    () => ({
      state: b,
      open: h,
      setOpen: g,
      isMobile: l,
      openMobile: c,
      setOpenMobile: f,
      toggleSidebar: v
    }),
    [b, h, g, l, c, f, v]
  );
  return /* @__PURE__ */ d(ww.Provider, { value: y, children: /* @__PURE__ */ d(BO, { delayDuration: 0, children: /* @__PURE__ */ d(
    "div",
    {
      style: {
        "--sidebar-width": VO,
        "--sidebar-width-icon": UO,
        ...o
      },
      className: R("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", r),
      ref: s,
      ...i,
      children: a
    }
  ) }) });
});
YO.displayName = "SidebarProvider";
const qO = u.forwardRef(({ side: e = "left", variant: t = "sidebar", collapsible: n = "offcanvas", className: r, children: o, ...a }, i) => {
  const { isMobile: s, state: l, openMobile: c, setOpenMobile: f } = ss();
  return n === "none" ? /* @__PURE__ */ d(
    "div",
    {
      className: R("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", r),
      ref: i,
      ...a,
      children: o
    }
  ) : s ? /* @__PURE__ */ d(pO, { open: c, onOpenChange: f, ...a, children: /* @__PURE__ */ d(
    uw,
    {
      "data-sidebar": "sidebar",
      "data-mobile": "true",
      className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
      style: {
        "--sidebar-width": GO
      },
      side: e,
      children: /* @__PURE__ */ d("div", { className: "flex h-full w-full flex-col", children: o })
    }
  ) }) : /* @__PURE__ */ K(
    "div",
    {
      ref: i,
      className: "group peer hidden text-sidebar-foreground md:block",
      "data-state": l,
      "data-collapsible": l === "collapsed" ? n : "",
      "data-variant": t,
      "data-side": e,
      children: [
        /* @__PURE__ */ d(
          "div",
          {
            className: R(
              "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
            )
          }
        ),
        /* @__PURE__ */ d(
          "div",
          {
            className: R(
              "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
              r
            ),
            ...a,
            children: /* @__PURE__ */ d(
              "div",
              {
                "data-sidebar": "sidebar",
                className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                children: o
              }
            )
          }
        )
      ]
    }
  );
});
qO.displayName = "Sidebar";
const XO = u.forwardRef(
  ({ className: e, onClick: t, ...n }, r) => {
    const { toggleSidebar: o } = ss();
    return /* @__PURE__ */ K(
      Yn,
      {
        ref: r,
        "data-sidebar": "trigger",
        variant: "ghost",
        size: "icon",
        className: R("h-7 w-7", e),
        onClick: (a) => {
          t == null || t(a), o();
        },
        ...n,
        children: [
          /* @__PURE__ */ d(YP, {}),
          /* @__PURE__ */ d("span", { className: "sr-only", children: "Toggle Sidebar" })
        ]
      }
    );
  }
);
XO.displayName = "SidebarTrigger";
const ZO = u.forwardRef(
  ({ className: e, ...t }, n) => {
    const { toggleSidebar: r } = ss();
    return /* @__PURE__ */ d(
      "button",
      {
        ref: n,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: r,
        title: "Toggle Sidebar",
        className: R(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 hover:after:bg-sidebar-border sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          e
        ),
        ...t
      }
    );
  }
);
ZO.displayName = "SidebarRail";
const QO = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "main",
  {
    ref: n,
    className: R(
      "relative flex min-h-svh flex-1 flex-col bg-background",
      "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
      e
    ),
    ...t
  }
));
QO.displayName = "SidebarInset";
const JO = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d(
    _m,
    {
      ref: n,
      "data-sidebar": "input",
      className: R(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        e
      ),
      ...t
    }
  )
);
JO.displayName = "SidebarInput";
const eD = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { ref: n, "data-sidebar": "header", className: R("flex flex-col gap-2 p-2", e), ...t }));
eD.displayName = "SidebarHeader";
const tD = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { ref: n, "data-sidebar": "footer", className: R("flex flex-col gap-2 p-2", e), ...t }));
tD.displayName = "SidebarFooter";
const nD = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d(
    Gy,
    {
      ref: n,
      "data-sidebar": "separator",
      className: R("mx-2 w-auto bg-sidebar-border", e),
      ...t
    }
  )
);
nD.displayName = "SidebarSeparator";
const rD = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "div",
  {
    ref: n,
    "data-sidebar": "content",
    className: R(
      "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      e
    ),
    ...t
  }
));
rD.displayName = "SidebarContent";
const oD = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "div",
  {
    ref: n,
    "data-sidebar": "group",
    className: R("relative flex w-full min-w-0 flex-col p-2", e),
    ...t
  }
));
oD.displayName = "SidebarGroup";
const aD = u.forwardRef(
  ({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ d(
    t ? kn : "div",
    {
      ref: r,
      "data-sidebar": "group-label",
      className: R(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...n
    }
  )
);
aD.displayName = "SidebarGroupLabel";
const iD = u.forwardRef(
  ({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ d(
    t ? kn : "button",
    {
      ref: r,
      "data-sidebar": "group-action",
      className: R(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...n
    }
  )
);
iD.displayName = "SidebarGroupAction";
const sD = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { ref: n, "data-sidebar": "group-content", className: R("w-full text-sm", e), ...t })
);
sD.displayName = "SidebarGroupContent";
const lD = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("ul", { ref: n, "data-sidebar": "menu", className: R("flex w-full min-w-0 flex-col gap-1", e), ...t }));
lD.displayName = "SidebarMenu";
const cD = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("li", { ref: n, "data-sidebar": "menu-item", className: R("group/menu-item relative", e), ...t }));
cD.displayName = "SidebarMenuItem";
const uD = vn(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), dD = u.forwardRef(({ asChild: e = !1, isActive: t = !1, variant: n = "default", size: r = "default", tooltip: o, className: a, ...i }, s) => {
  const l = e ? kn : "button", { isMobile: c, state: f } = ss(), p = /* @__PURE__ */ d(
    l,
    {
      ref: s,
      "data-sidebar": "menu-button",
      "data-size": r,
      "data-active": t,
      className: R(uD({ variant: n, size: r }), a),
      ...i
    }
  );
  return o ? (typeof o == "string" && (o = {
    children: o
  }), /* @__PURE__ */ K(zO, { children: [
    /* @__PURE__ */ d(jO, { asChild: !0, children: p }),
    /* @__PURE__ */ d(yw, { side: "right", align: "center", hidden: f !== "collapsed" || c, ...o })
  ] })) : p;
});
dD.displayName = "SidebarMenuButton";
const fD = u.forwardRef(({ className: e, asChild: t = !1, showOnHover: n = !1, ...r }, o) => /* @__PURE__ */ d(
  t ? kn : "button",
  {
    ref: o,
    "data-sidebar": "menu-action",
    className: R(
      "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      // Increases the hit area of the button on mobile.
      "after:absolute after:-inset-2 after:md:hidden",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      n && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
      e
    ),
    ...r
  }
));
fD.displayName = "SidebarMenuAction";
const pD = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d(
    "div",
    {
      ref: n,
      "data-sidebar": "menu-badge",
      className: R(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  )
);
pD.displayName = "SidebarMenuBadge";
const mD = u.forwardRef(({ className: e, showIcon: t = !1, ...n }, r) => {
  const o = u.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ K(
    "div",
    {
      ref: r,
      "data-sidebar": "menu-skeleton",
      className: R("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...n,
      children: [
        t && /* @__PURE__ */ d(af, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ d(
          af,
          {
            className: "h-4 max-w-[--skeleton-width] flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": o
            }
          }
        )
      ]
    }
  );
});
mD.displayName = "SidebarMenuSkeleton";
const hD = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d(
    "ul",
    {
      ref: n,
      "data-sidebar": "menu-sub",
      className: R(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  )
);
hD.displayName = "SidebarMenuSub";
const vD = u.forwardRef(({ ...e }, t) => /* @__PURE__ */ d("li", { ref: t, ...e }));
vD.displayName = "SidebarMenuSubItem";
const gD = u.forwardRef(({ asChild: e = !1, size: t = "md", isActive: n, className: r, ...o }, a) => /* @__PURE__ */ d(
  e ? kn : "a",
  {
    ref: a,
    "data-sidebar": "menu-sub-button",
    "data-size": t,
    "data-active": n,
    className: R(
      "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
      "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
      t === "sm" && "text-xs",
      t === "md" && "text-sm",
      "group-data-[collapsible=icon]:hidden",
      r
    ),
    ...o
  }
));
gD.displayName = "SidebarMenuSubButton";
function bD(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const xw = E.createContext({
  drawerRef: {
    current: null
  },
  overlayRef: {
    current: null
  },
  onPress: () => {
  },
  onRelease: () => {
  },
  onDrag: () => {
  },
  onNestedDrag: () => {
  },
  onNestedOpenChange: () => {
  },
  onNestedRelease: () => {
  },
  openProp: void 0,
  dismissible: !1,
  isOpen: !1,
  isDragging: !1,
  keyboardIsOpen: {
    current: !1
  },
  snapPointsOffset: null,
  snapPoints: null,
  handleOnly: !1,
  modal: !1,
  shouldFade: !1,
  activeSnapPoint: null,
  onOpenChange: () => {
  },
  setActiveSnapPoint: () => {
  },
  closeDrawer: () => {
  },
  direction: "bottom",
  shouldScaleBackground: !1,
  setBackgroundColorOnScale: !0,
  noBodyStyles: !1,
  container: null,
  autoFocus: !1
}), Qr = () => {
  const e = E.useContext(xw);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
bD(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,100%,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,100%,0)}}@keyframes slideFromTop{from{transform:translate3d(0,-100%,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,-100%,0)}}@keyframes slideFromLeft{from{transform:translate3d(-100%,0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(-100%,0,0)}}@keyframes slideFromRight{from{transform:translate3d(100%,0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(100%,0,0)}}`);
const yD = 24, wD = typeof window < "u" ? Ai : Je;
function Df(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function xD() {
  return Zu(/^Mac/);
}
function SD() {
  return Zu(/^iPhone/);
}
function If() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function CD() {
  return Zu(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  xD() && navigator.maxTouchPoints > 1;
}
function Sw() {
  return SD() || CD();
}
function Zu(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const Ks = typeof document < "u" && window.visualViewport;
function kf(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Cw(e) {
  for (kf(e) && (e = e.parentElement); e && !kf(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const PD = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let Ea = 0, Ys;
function ND(e = {}) {
  let { isDisabled: t } = e;
  wD(() => {
    if (!t)
      return Ea++, Ea === 1 && Sw() && (Ys = ED()), () => {
        Ea--, Ea === 0 && (Ys == null || Ys());
      };
  }, [
    t
  ]);
}
function ED() {
  let e, t = 0, n = (p) => {
    e = Cw(p.target), !(e === document.documentElement && e === document.body) && (t = p.changedTouches[0].pageY);
  }, r = (p) => {
    if (!e || e === document.documentElement || e === document.body) {
      p.preventDefault();
      return;
    }
    let m = p.changedTouches[0].pageY, h = e.scrollTop, g = e.scrollHeight - e.clientHeight;
    g !== 0 && ((h <= 0 && m > t || h >= g && m < t) && p.preventDefault(), t = m);
  }, o = (p) => {
    let m = p.target;
    ec(m) && m !== document.activeElement && (p.preventDefault(), m.style.transform = "translateY(-2000px)", m.focus(), requestAnimationFrame(() => {
      m.style.transform = "";
    }));
  }, a = (p) => {
    let m = p.target;
    ec(m) && (m.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      m.style.transform = "", Ks && (Ks.height < window.innerHeight ? requestAnimationFrame(() => {
        $f(m);
      }) : Ks.addEventListener("resize", () => $f(m), {
        once: !0
      }));
    }));
  }, i = () => {
    window.scrollTo(0, 0);
  }, s = window.pageXOffset, l = window.pageYOffset, c = Df(_D(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let f = Df(co(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), co(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), co(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), co(document, "focus", a, !0), co(window, "scroll", i));
  return () => {
    c(), f(), window.scrollTo(s, l);
  };
}
function _D(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function co(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function $f(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = Cw(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom;
      const i = n.getBoundingClientRect().bottom + yD;
      a > i && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function ec(e) {
  return e instanceof HTMLInputElement && !PD.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function RD(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function TD(...e) {
  return (t) => e.forEach((n) => RD(n, t));
}
function Pw(...e) {
  return u.useCallback(TD(...e), e);
}
const Nw = /* @__PURE__ */ new WeakMap();
function Xe(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && Nw.set(e, r);
}
function MD(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = Nw.get(e);
  n && (e.style[t] = n[t]);
}
const Ze = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return e;
  }
};
function _a(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[Ze(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[Ze(t) ? 5 : 4]) : null);
}
function AD(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function qs(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function OD(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const He = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, Ew = 0.4, DD = 0.25, ID = 100, _w = 8, Hn = 16, tc = 26, Xs = "vaul-dragging";
function Rw(e) {
  const t = E.useRef(e);
  return E.useEffect(() => {
    t.current = e;
  }), E.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function kD({ defaultProp: e, onChange: t }) {
  const n = E.useState(e), [r] = n, o = E.useRef(r), a = Rw(t);
  return E.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
function Tw({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = kD({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, i = a ? e : r, s = Rw(n), l = E.useCallback((c) => {
    if (a) {
      const p = typeof c == "function" ? c(e) : c;
      p !== e && s(p);
    } else
      o(c);
  }, [
    a,
    e,
    o,
    s
  ]);
  return [
    i,
    l
  ];
}
function $D({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: i, direction: s = "bottom", container: l, snapToSequentialPoint: c }) {
  const [f, p] = Tw({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), [m, h] = E.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  E.useEffect(() => {
    function P() {
      h({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", P), () => window.removeEventListener("resize", P);
  }, []);
  const g = E.useMemo(() => f === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    f
  ]), v = E.useMemo(() => n == null ? void 0 : n.findIndex((P) => P === f), [
    n,
    f
  ]), b = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === f || !n, y = E.useMemo(() => {
    const P = l ? {
      width: l.getBoundingClientRect().width,
      height: l.getBoundingClientRect().height
    } : typeof window < "u" ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : {
      width: 0,
      height: 0
    };
    var M;
    return (M = n == null ? void 0 : n.map((_) => {
      const B = typeof _ == "string";
      let T = 0;
      if (B && (T = parseInt(_, 10)), Ze(s)) {
        const G = B ? T : m ? _ * P.height : 0;
        return m ? s === "bottom" ? P.height - G : -P.height + G : G;
      }
      const k = B ? T : m ? _ * P.width : 0;
      return m ? s === "right" ? P.width - k : -P.width + k : k;
    })) != null ? M : [];
  }, [
    n,
    m,
    l
  ]), w = E.useMemo(() => v !== null ? y == null ? void 0 : y[v] : null, [
    y,
    v
  ]), x = E.useCallback((P) => {
    var M;
    const _ = (M = y == null ? void 0 : y.findIndex((B) => B === P)) != null ? M : null;
    i(_), Xe(r.current, {
      transition: `transform ${He.DURATION}s cubic-bezier(${He.EASE.join(",")})`,
      transform: Ze(s) ? `translate3d(0, ${P}px, 0)` : `translate3d(${P}px, 0, 0)`
    }), y && _ !== y.length - 1 && _ !== a && _ < a ? Xe(o.current, {
      transition: `opacity ${He.DURATION}s cubic-bezier(${He.EASE.join(",")})`,
      opacity: "0"
    }) : Xe(o.current, {
      transition: `opacity ${He.DURATION}s cubic-bezier(${He.EASE.join(",")})`,
      opacity: "1"
    }), p(n == null ? void 0 : n[Math.max(_, 0)]);
  }, [
    r.current,
    n,
    y,
    a,
    o,
    p
  ]);
  E.useEffect(() => {
    if (f || e) {
      var P;
      const M = (P = n == null ? void 0 : n.findIndex((_) => _ === e || _ === f)) != null ? P : -1;
      y && M !== -1 && typeof y[M] == "number" && x(y[M]);
    }
  }, [
    f,
    e,
    n,
    y,
    x
  ]);
  function S({ draggedDistance: P, closeDrawer: M, velocity: _, dismissible: B }) {
    if (a === void 0) return;
    const T = s === "bottom" || s === "right" ? (w ?? 0) - P : (w ?? 0) + P, k = v === a - 1, G = v === 0, $ = P > 0;
    if (k && Xe(o.current, {
      transition: `opacity ${He.DURATION}s cubic-bezier(${He.EASE.join(",")})`
    }), !c && _ > 2 && !$) {
      B ? M() : x(y[0]);
      return;
    }
    if (!c && _ > 2 && $ && y && n) {
      x(y[n.length - 1]);
      return;
    }
    const U = y == null ? void 0 : y.reduce((F, D) => typeof F != "number" || typeof D != "number" ? F : Math.abs(D - T) < Math.abs(F - T) ? D : F), W = Ze(s) ? window.innerHeight : window.innerWidth;
    if (_ > Ew && Math.abs(P) < W * 0.4) {
      const F = $ ? 1 : -1;
      if (F > 0 && g) {
        x(y[n.length - 1]);
        return;
      }
      if (G && F < 0 && B && M(), v === null) return;
      x(y[v + F]);
      return;
    }
    x(U);
  }
  function C({ draggedDistance: P }) {
    if (w === null) return;
    const M = s === "bottom" || s === "right" ? w - P : w + P;
    (s === "bottom" || s === "right") && M < y[y.length - 1] || (s === "top" || s === "left") && M > y[y.length - 1] || Xe(r.current, {
      transform: Ze(s) ? `translate3d(0, ${M}px, 0)` : `translate3d(${M}px, 0, 0)`
    });
  }
  function N(P, M) {
    if (!n || typeof v != "number" || !y || a === void 0) return null;
    const _ = v === a - 1;
    if (v >= a && M)
      return 0;
    if (_ && !M) return 1;
    if (!b && !_) return null;
    const T = _ ? v + 1 : v - 1, k = _ ? y[T] - y[T - 1] : y[T + 1] - y[T], G = P / Math.abs(k);
    return _ ? 1 - G : G;
  }
  return {
    isLastSnapPoint: g,
    activeSnapPoint: f,
    shouldFade: b,
    getPercentageDragged: N,
    setActiveSnapPoint: p,
    activeSnapPointIndex: v,
    onRelease: S,
    onDrag: C,
    snapPointsOffset: y
  };
}
const LD = () => () => {
};
function FD() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: o } = Qr(), a = E.useRef(null), i = Oc(() => document.body.style.backgroundColor, []);
  function s() {
    return (window.innerWidth - tc) / window.innerWidth;
  }
  E.useEffect(() => {
    if (t && n) {
      a.current && clearTimeout(a.current);
      const l = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!l) return;
      OD(r && !o ? qs(document.body, {
        background: "black"
      }) : LD, qs(l, {
        transformOrigin: Ze(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${He.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${He.EASE.join(",")})`
      }));
      const c = qs(l, {
        borderRadius: `${_w}px`,
        overflow: "hidden",
        ...Ze(e) ? {
          transform: `scale(${s()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${s()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        c(), a.current = window.setTimeout(() => {
          i ? document.body.style.background = i : document.body.style.removeProperty("background");
        }, He.DURATION * 1e3);
      };
    }
  }, [
    t,
    n,
    i
  ]);
}
let uo = null;
function BD({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o, noBodyStyles: a }) {
  const [i, s] = E.useState(() => typeof window < "u" ? window.location.href : ""), l = E.useRef(0), c = E.useCallback(() => {
    if (If() && uo === null && e && !a) {
      uo = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: p, innerHeight: m } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-l.current}px`,
        left: `${-p}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const h = m - window.innerHeight;
        h && l.current >= m && (document.body.style.top = `${-(l.current + h)}px`);
      }), 300);
    }
  }, [
    e
  ]), f = E.useCallback(() => {
    if (If() && uo !== null && !a) {
      const p = -parseInt(document.body.style.top, 10), m = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, uo), window.requestAnimationFrame(() => {
        if (o && i !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(m, p);
      }), uo = null;
    }
  }, [
    i
  ]);
  return E.useEffect(() => {
    function p() {
      l.current = window.scrollY;
    }
    return p(), window.addEventListener("scroll", p), () => {
      window.removeEventListener("scroll", p);
    };
  }, []), E.useEffect(() => {
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && c(), t || window.setTimeout(() => {
      f();
    }, 500)) : f());
  }, [
    e,
    r,
    i,
    t,
    n,
    c,
    f
  ]), {
    restorePositionSetting: f
  };
}
function Mw({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: o, snapPoints: a, shouldScaleBackground: i = !1, setBackgroundColorOnScale: s = !0, closeThreshold: l = DD, scrollLockTimeout: c = ID, dismissible: f = !0, handleOnly: p = !1, fadeFromIndex: m = a && a.length - 1, activeSnapPoint: h, setActiveSnapPoint: g, fixed: v, modal: b = !0, onClose: y, nested: w, noBodyStyles: x, direction: S = "bottom", defaultOpen: C = !1, disablePreventScroll: N = !0, snapToSequentialPoint: P = !1, preventScrollRestoration: M = !1, repositionInputs: _ = !0, onAnimationEnd: B, container: T, autoFocus: k = !1 }) {
  var G, $;
  const [U = !1, W] = Tw({
    defaultProp: C,
    prop: e,
    onChange: (se) => {
      t == null || t(se), !se && !w && De(), setTimeout(() => {
        B == null || B(se);
      }, He.DURATION * 1e3), se && !b && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), se || (document.body.style.pointerEvents = "auto");
    }
  }), [F, D] = E.useState(!1), [L, ee] = E.useState(!1), [te, I] = E.useState(!1), O = E.useRef(null), H = E.useRef(null), V = E.useRef(null), Z = E.useRef(null), A = E.useRef(null), Y = E.useRef(!1), J = E.useRef(null), ne = E.useRef(0), re = E.useRef(!1), X = E.useRef(0), q = E.useRef(null), z = E.useRef(((G = q.current) == null ? void 0 : G.getBoundingClientRect().height) || 0), oe = E.useRef((($ = q.current) == null ? void 0 : $.getBoundingClientRect().width) || 0), le = E.useRef(0), ve = E.useCallback((se) => {
    a && se === Re.length - 1 && (H.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: de, activeSnapPointIndex: ce, setActiveSnapPoint: Ne, onRelease: Fe, snapPointsOffset: Re, onDrag: je, shouldFade: tt, getPercentageDragged: it } = $D({
    snapPoints: a,
    activeSnapPointProp: h,
    setActiveSnapPointProp: g,
    drawerRef: q,
    fadeFromIndex: m,
    overlayRef: O,
    onSnapPointChange: ve,
    direction: S,
    container: T,
    snapToSequentialPoint: P
  });
  ND({
    isDisabled: !U || L || !b || te || !F || !_ || !N
  });
  const { restorePositionSetting: De } = BD({
    isOpen: U,
    modal: b,
    nested: w,
    hasBeenOpened: F,
    preventScrollRestoration: M,
    noBodyStyles: x
  });
  function Ve() {
    return (window.innerWidth - tc) / window.innerWidth;
  }
  function wn(se) {
    var be, Se;
    !f && !a || q.current && !q.current.contains(se.target) || (z.current = ((be = q.current) == null ? void 0 : be.getBoundingClientRect().height) || 0, oe.current = ((Se = q.current) == null ? void 0 : Se.getBoundingClientRect().width) || 0, ee(!0), V.current = /* @__PURE__ */ new Date(), Sw() && window.addEventListener("touchend", () => Y.current = !1, {
      once: !0
    }), se.target.setPointerCapture(se.pointerId), ne.current = Ze(S) ? se.pageY : se.pageX);
  }
  function Et(se, be) {
    var Se, Ee;
    let ge = se;
    const Be = (Se = window.getSelection()) == null ? void 0 : Se.toString(), qe = q.current ? _a(q.current, S) : null, ie = /* @__PURE__ */ new Date();
    if (ge.hasAttribute("data-vaul-no-drag") || ge.closest("[data-vaul-no-drag]"))
      return !1;
    if (S === "right" || S === "left")
      return !0;
    if (H.current && ie.getTime() - H.current.getTime() < 500)
      return !1;
    if (qe !== null && (S === "bottom" ? qe > 0 : qe < 0))
      return !0;
    if (Be && Be.length > 0)
      return !1;
    if (ie.getTime() - ((Ee = A.current) == null ? void 0 : Ee.getTime()) < c && qe === 0 || be)
      return A.current = ie, !1;
    for (; ge; ) {
      if (ge.scrollHeight > ge.clientHeight) {
        if (ge.scrollTop !== 0)
          return A.current = /* @__PURE__ */ new Date(), !1;
        if (ge.getAttribute("role") === "dialog")
          return !0;
      }
      ge = ge.parentNode;
    }
    return !0;
  }
  function st(se) {
    if (q.current && L) {
      const be = S === "bottom" || S === "right" ? 1 : -1, Se = (ne.current - (Ze(S) ? se.pageY : se.pageX)) * be, Ee = Se > 0, ge = a && !f && !Ee;
      if (ge && ce === 0) return;
      const Be = Math.abs(Se), qe = document.querySelector("[data-vaul-drawer-wrapper]"), ie = S === "bottom" || S === "top" ? z.current : oe.current;
      let fe = Be / ie;
      const ye = it(Be, Ee);
      if (ye !== null && (fe = ye), ge && fe >= 1 || !Y.current && !Et(se.target, Ee)) return;
      if (q.current.classList.add(Xs), Y.current = !0, Xe(q.current, {
        transition: "none"
      }), Xe(O.current, {
        transition: "none"
      }), a && je({
        draggedDistance: Se
      }), Ee && !a) {
        const Ge = AD(Se), ht = Math.min(Ge * -1, 0) * be;
        Xe(q.current, {
          transform: Ze(S) ? `translate3d(0, ${ht}px, 0)` : `translate3d(${ht}px, 0, 0)`
        });
        return;
      }
      const Ye = 1 - fe;
      if ((tt || m && ce === m - 1) && (r == null || r(se, fe), Xe(O.current, {
        opacity: `${Ye}`,
        transition: "none"
      }, !0)), qe && O.current && i) {
        const Ge = Math.min(Ve() + fe * (1 - Ve()), 1), ht = 8 - fe * 8, Gt = Math.max(0, 14 - fe * 14);
        Xe(qe, {
          borderRadius: `${ht}px`,
          transform: Ze(S) ? `scale(${Ge}) translate3d(0, ${Gt}px, 0)` : `scale(${Ge}) translate3d(${Gt}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!a) {
        const Ge = Be * be;
        Xe(q.current, {
          transform: Ze(S) ? `translate3d(0, ${Ge}px, 0)` : `translate3d(${Ge}px, 0, 0)`
        });
      }
    }
  }
  E.useEffect(() => {
    var se;
    function be() {
      if (!q.current || !_) return;
      const Se = document.activeElement;
      if (ec(Se) || re.current) {
        var Ee;
        const ge = ((Ee = window.visualViewport) == null ? void 0 : Ee.height) || 0, Be = window.innerHeight;
        let qe = Be - ge;
        const ie = q.current.getBoundingClientRect().height || 0, fe = ie > Be * 0.8;
        le.current || (le.current = ie);
        const ye = q.current.getBoundingClientRect().top;
        if (Math.abs(X.current - qe) > 60 && (re.current = !re.current), a && a.length > 0 && Re && ce) {
          const Ye = Re[ce] || 0;
          qe += Ye;
        }
        if (X.current = qe, ie > ge || re.current) {
          const Ye = q.current.getBoundingClientRect().height;
          let Ge = Ye;
          Ye > ge && (Ge = ge - (fe ? ye : tc)), v ? q.current.style.height = `${Ye - Math.max(qe, 0)}px` : q.current.style.height = `${Math.max(Ge, ge - ye)}px`;
        } else
          q.current.style.height = `${le.current}px`;
        a && a.length > 0 && !re.current ? q.current.style.bottom = "0px" : q.current.style.bottom = `${Math.max(qe, 0)}px`;
      }
    }
    return (se = window.visualViewport) == null || se.addEventListener("resize", be), () => {
      var Se;
      return (Se = window.visualViewport) == null ? void 0 : Se.removeEventListener("resize", be);
    };
  }, [
    ce,
    a,
    Re
  ]);
  function mt(se) {
    et(), y == null || y(), se || W(!1), setTimeout(() => {
      a && Ne(a[0]);
    }, He.DURATION * 1e3);
  }
  function _t() {
    if (!q.current) return;
    const se = document.querySelector("[data-vaul-drawer-wrapper]"), be = _a(q.current, S);
    Xe(q.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${He.DURATION}s cubic-bezier(${He.EASE.join(",")})`
    }), Xe(O.current, {
      transition: `opacity ${He.DURATION}s cubic-bezier(${He.EASE.join(",")})`,
      opacity: "1"
    }), i && be && be > 0 && U && Xe(se, {
      borderRadius: `${_w}px`,
      overflow: "hidden",
      ...Ze(S) ? {
        transform: `scale(${Ve()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${Ve()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${He.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${He.EASE.join(",")})`
    }, !0);
  }
  function et() {
    !L || !q.current || (q.current.classList.remove(Xs), Y.current = !1, ee(!1), Z.current = /* @__PURE__ */ new Date());
  }
  function ct(se) {
    if (!L || !q.current) return;
    q.current.classList.remove(Xs), Y.current = !1, ee(!1), Z.current = /* @__PURE__ */ new Date();
    const be = _a(q.current, S);
    if (!Et(se.target, !1) || !be || Number.isNaN(be) || V.current === null) return;
    const Se = Z.current.getTime() - V.current.getTime(), Ee = ne.current - (Ze(S) ? se.pageY : se.pageX), ge = Math.abs(Ee) / Se;
    if (ge > 0.05 && (I(!0), setTimeout(() => {
      I(!1);
    }, 200)), a) {
      Fe({
        draggedDistance: Ee * (S === "bottom" || S === "right" ? 1 : -1),
        closeDrawer: mt,
        velocity: ge,
        dismissible: f
      }), o == null || o(se, !0);
      return;
    }
    if (S === "bottom" || S === "right" ? Ee > 0 : Ee < 0) {
      _t(), o == null || o(se, !0);
      return;
    }
    if (ge > Ew) {
      mt(), o == null || o(se, !1);
      return;
    }
    var Be;
    const qe = Math.min((Be = q.current.getBoundingClientRect().height) != null ? Be : 0, window.innerHeight);
    var ie;
    const fe = Math.min((ie = q.current.getBoundingClientRect().width) != null ? ie : 0, window.innerWidth), ye = S === "left" || S === "right";
    if (Math.abs(be) >= (ye ? fe : qe) * l) {
      mt(), o == null || o(se, !1);
      return;
    }
    o == null || o(se, !0), _t();
  }
  E.useEffect(() => (U && (Xe(document.documentElement, {
    scrollBehavior: "auto"
  }), H.current = /* @__PURE__ */ new Date()), () => {
    MD(document.documentElement, "scrollBehavior");
  }), [
    U
  ]);
  function xn(se) {
    const be = se ? (window.innerWidth - Hn) / window.innerWidth : 1, Se = se ? -Hn : 0;
    J.current && window.clearTimeout(J.current), Xe(q.current, {
      transition: `transform ${He.DURATION}s cubic-bezier(${He.EASE.join(",")})`,
      transform: `scale(${be}) translate3d(0, ${Se}px, 0)`
    }), !se && q.current && (J.current = setTimeout(() => {
      const Ee = _a(q.current, S);
      Xe(q.current, {
        transition: "none",
        transform: Ze(S) ? `translate3d(0, ${Ee}px, 0)` : `translate3d(${Ee}px, 0, 0)`
      });
    }, 500));
  }
  function Vt(se, be) {
    if (be < 0) return;
    const Se = (window.innerWidth - Hn) / window.innerWidth, Ee = Se + be * (1 - Se), ge = -Hn + be * Hn;
    Xe(q.current, {
      transform: Ze(S) ? `scale(${Ee}) translate3d(0, ${ge}px, 0)` : `scale(${Ee}) translate3d(${ge}px, 0, 0)`,
      transition: "none"
    });
  }
  function oo(se, be) {
    const Se = Ze(S) ? window.innerHeight : window.innerWidth, Ee = be ? (Se - Hn) / Se : 1, ge = be ? -Hn : 0;
    be && Xe(q.current, {
      transition: `transform ${He.DURATION}s cubic-bezier(${He.EASE.join(",")})`,
      transform: Ze(S) ? `scale(${Ee}) translate3d(0, ${ge}px, 0)` : `scale(${Ee}) translate3d(${ge}px, 0, 0)`
    });
  }
  return /* @__PURE__ */ E.createElement(la, {
    defaultOpen: C,
    onOpenChange: (se) => {
      !f && !se || (se ? D(!0) : mt(!0), W(se));
    },
    open: U
  }, /* @__PURE__ */ E.createElement(xw.Provider, {
    value: {
      activeSnapPoint: de,
      snapPoints: a,
      setActiveSnapPoint: Ne,
      drawerRef: q,
      overlayRef: O,
      onOpenChange: t,
      onPress: wn,
      onRelease: ct,
      onDrag: st,
      dismissible: f,
      handleOnly: p,
      isOpen: U,
      isDragging: L,
      shouldFade: tt,
      closeDrawer: mt,
      onNestedDrag: Vt,
      onNestedOpenChange: xn,
      onNestedRelease: oo,
      keyboardIsOpen: re,
      modal: b,
      snapPointsOffset: Re,
      direction: S,
      shouldScaleBackground: i,
      setBackgroundColorOnScale: s,
      noBodyStyles: x,
      container: T,
      autoFocus: k
    }
  }, n));
}
const Aw = /* @__PURE__ */ E.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: o, shouldFade: a, isOpen: i, modal: s } = Qr(), l = Pw(t, n), c = r && r.length > 0;
  return s ? /* @__PURE__ */ E.createElement(ir, {
    onMouseUp: o,
    ref: l,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": i && c ? "true" : "false",
    "data-vaul-snap-points-overlay": i && a ? "true" : "false",
    ...e
  }) : (typeof window < "u" && window.requestAnimationFrame(() => {
    document.body.style.pointerEvents = "auto";
  }), null);
});
Aw.displayName = "Drawer.Overlay";
const Ow = /* @__PURE__ */ E.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, o) {
  const { drawerRef: a, onPress: i, onRelease: s, onDrag: l, keyboardIsOpen: c, snapPointsOffset: f, modal: p, isOpen: m, direction: h, snapPoints: g, container: v, handleOnly: b, autoFocus: y } = Qr(), [w, x] = E.useState(!1), S = Pw(o, a), C = E.useRef(null), N = E.useRef(null), P = E.useRef(!1), M = g && g.length > 0;
  FD();
  const _ = (T, k, G = 0) => {
    if (P.current) return !0;
    const $ = Math.abs(T.y), U = Math.abs(T.x), W = U > $, F = [
      "bottom",
      "right"
    ].includes(k) ? 1 : -1;
    if (k === "left" || k === "right") {
      if (!(T.x * F < 0) && U >= 0 && U <= G)
        return W;
    } else if (!(T.y * F < 0) && $ >= 0 && $ <= G)
      return !W;
    return P.current = !0, !0;
  };
  E.useEffect(() => {
    M && window.requestAnimationFrame(() => {
      x(!0);
    });
  }, []);
  function B(T) {
    C.current = null, P.current = !1, s(T);
  }
  return /* @__PURE__ */ E.createElement(sr, {
    "data-vaul-drawer-direction": h,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": w ? "true" : "false",
    "data-vaul-snap-points": m && M ? "true" : "false",
    "data-vaul-custom-container": v ? "true" : "false",
    ...r,
    ref: S,
    style: f && f.length > 0 ? {
      "--snap-point-height": `${f[0]}px`,
      ...t
    } : t,
    onPointerDown: (T) => {
      b || (r.onPointerDown == null || r.onPointerDown.call(r, T), C.current = {
        x: T.pageX,
        y: T.pageY
      }, i(T));
    },
    onOpenAutoFocus: (T) => {
      n == null || n(T), y || T.preventDefault();
    },
    onPointerDownOutside: (T) => {
      if (e == null || e(T), !p || T.defaultPrevented) {
        T.preventDefault();
        return;
      }
      c.current && (c.current = !1);
    },
    onFocusOutside: (T) => {
      if (!p) {
        T.preventDefault();
        return;
      }
    },
    onPointerMove: (T) => {
      if (N.current = T, b || (r.onPointerMove == null || r.onPointerMove.call(r, T), !C.current)) return;
      const k = T.pageY - C.current.y, G = T.pageX - C.current.x, $ = T.pointerType === "touch" ? 10 : 2;
      _({
        x: G,
        y: k
      }, h, $) ? l(T) : (Math.abs(G) > $ || Math.abs(k) > $) && (C.current = null);
    },
    onPointerUp: (T) => {
      r.onPointerUp == null || r.onPointerUp.call(r, T), C.current = null, P.current = !1, s(T);
    },
    onPointerOut: (T) => {
      r.onPointerOut == null || r.onPointerOut.call(r, T), B(N.current);
    },
    onContextMenu: (T) => {
      r.onContextMenu == null || r.onContextMenu.call(r, T), B(N.current);
    }
  });
});
Ow.displayName = "Drawer.Content";
const zD = 250, jD = 120, Dw = /* @__PURE__ */ E.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: o, isDragging: a, snapPoints: i, activeSnapPoint: s, setActiveSnapPoint: l, dismissible: c, handleOnly: f, isOpen: p, onPress: m, onDrag: h } = Qr(), g = E.useRef(null), v = E.useRef(!1);
  function b() {
    if (v.current) {
      x();
      return;
    }
    window.setTimeout(() => {
      y();
    }, jD);
  }
  function y() {
    if (a || e || v.current) {
      x();
      return;
    }
    if (x(), (!i || i.length === 0) && c) {
      o();
      return;
    }
    if (s === i[i.length - 1] && c) {
      o();
      return;
    }
    const C = i.findIndex((P) => P === s);
    if (C === -1) return;
    const N = i[C + 1];
    l(N);
  }
  function w() {
    g.current = window.setTimeout(() => {
      v.current = !0;
    }, zD);
  }
  function x() {
    window.clearTimeout(g.current), v.current = !1;
  }
  return /* @__PURE__ */ E.createElement("div", {
    onClick: b,
    onPointerCancel: x,
    onPointerDown: (S) => {
      f && m(S), w();
    },
    onPointerMove: (S) => {
      f && h(S);
    },
    // onPointerUp is already handled by the content component
    ref: r,
    "data-vaul-drawer-visible": p ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ E.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
Dw.displayName = "Drawer.Handle";
function HD({ onDrag: e, onOpenChange: t, ...n }) {
  const { onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: a } = Qr();
  if (!r)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return /* @__PURE__ */ E.createElement(Mw, {
    nested: !0,
    onClose: () => {
      o(!1);
    },
    onDrag: (i, s) => {
      r(i, s), e == null || e(i, s);
    },
    onOpenChange: (i) => {
      i && o(i);
    },
    onRelease: a,
    ...n
  });
}
function WD(e) {
  const t = Qr(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ E.createElement(ca, {
    container: n,
    ...r
  });
}
const jt = {
  Root: Mw,
  NestedRoot: HD,
  Content: Ow,
  Overlay: Aw,
  Trigger: rs,
  Portal: WD,
  Handle: Dw,
  Close: lr,
  Title: Xr,
  Description: Zr
}, VD = ({ shouldScaleBackground: e = !0, ...t }) => /* @__PURE__ */ d(jt.Root, { shouldScaleBackground: e, ...t });
VD.displayName = "Drawer";
const RY = jt.Trigger, GD = jt.Portal, TY = jt.Close, Iw = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(jt.Overlay, { ref: n, className: R("fixed inset-0 z-50 bg-black/80", e), ...t }));
Iw.displayName = jt.Overlay.displayName;
const UD = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ K(GD, { children: [
  /* @__PURE__ */ d(Iw, {}),
  /* @__PURE__ */ K(
    jt.Content,
    {
      ref: r,
      className: R(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ d("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        t
      ]
    }
  )
] }));
UD.displayName = "DrawerContent";
const KD = ({ className: e, ...t }) => /* @__PURE__ */ d("div", { className: R("grid gap-1.5 p-4 text-center sm:text-left", e), ...t });
KD.displayName = "DrawerHeader";
const YD = ({ className: e, ...t }) => /* @__PURE__ */ d("div", { className: R("mt-auto flex flex-col gap-2 p-4", e), ...t });
YD.displayName = "DrawerFooter";
const qD = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  jt.Title,
  {
    ref: n,
    className: R("text-lg font-semibold leading-none tracking-tight", e),
    ...t
  }
));
qD.displayName = jt.Title.displayName;
const XD = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(jt.Description, { ref: n, className: R("text-sm text-muted-foreground", e), ...t }));
XD.displayName = jt.Description.displayName;
const MY = Gg, AY = iu, OY = lu;
function ZD(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Qu = "ScrollArea", [kw, DY] = Me(Qu), [QD, Nt] = kw(Qu), $w = u.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...i
    } = e, [s, l] = u.useState(null), [c, f] = u.useState(null), [p, m] = u.useState(null), [h, g] = u.useState(null), [v, b] = u.useState(null), [y, w] = u.useState(0), [x, S] = u.useState(0), [C, N] = u.useState(!1), [P, M] = u.useState(!1), _ = ae(t, (T) => l(T)), B = Ft(o);
    return /* @__PURE__ */ d(
      QD,
      {
        scope: n,
        type: r,
        dir: B,
        scrollHideDelay: a,
        scrollArea: s,
        viewport: c,
        onViewportChange: f,
        content: p,
        onContentChange: m,
        scrollbarX: h,
        onScrollbarXChange: g,
        scrollbarXEnabled: C,
        onScrollbarXEnabledChange: N,
        scrollbarY: v,
        onScrollbarYChange: b,
        scrollbarYEnabled: P,
        onScrollbarYEnabledChange: M,
        onCornerWidthChange: w,
        onCornerHeightChange: S,
        children: /* @__PURE__ */ d(
          Q.div,
          {
            dir: B,
            ...i,
            ref: _,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": y + "px",
              "--radix-scroll-area-corner-height": x + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
$w.displayName = Qu;
var Lw = "ScrollAreaViewport", Fw = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...a } = e, i = Nt(Lw, n), s = u.useRef(null), l = ae(t, s, i.onViewportChange);
    return /* @__PURE__ */ K(ze, { children: [
      /* @__PURE__ */ d(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ d(
        Q.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: l,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ d("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
Fw.displayName = Lw;
var rn = "ScrollAreaScrollbar", Ju = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Nt(rn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o, s = e.orientation === "horizontal";
    return u.useEffect(() => (s ? a(!0) : i(!0), () => {
      s ? a(!1) : i(!1);
    }), [s, a, i]), o.type === "hover" ? /* @__PURE__ */ d(JD, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ d(eI, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ d(Bw, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ d(ed, { ...r, ref: t }) : null;
  }
);
Ju.displayName = rn;
var JD = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Nt(rn, e.__scopeScrollArea), [a, i] = u.useState(!1);
  return u.useEffect(() => {
    const s = o.scrollArea;
    let l = 0;
    if (s) {
      const c = () => {
        window.clearTimeout(l), i(!0);
      }, f = () => {
        l = window.setTimeout(() => i(!1), o.scrollHideDelay);
      };
      return s.addEventListener("pointerenter", c), s.addEventListener("pointerleave", f), () => {
        window.clearTimeout(l), s.removeEventListener("pointerenter", c), s.removeEventListener("pointerleave", f);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ d(Le, { present: n || a, children: /* @__PURE__ */ d(
    Bw,
    {
      "data-state": a ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), eI = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Nt(rn, e.__scopeScrollArea), a = e.orientation === "horizontal", i = cs(() => l("SCROLL_END"), 100), [s, l] = ZD("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return u.useEffect(() => {
    if (s === "idle") {
      const c = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(c);
    }
  }, [s, o.scrollHideDelay, l]), u.useEffect(() => {
    const c = o.viewport, f = a ? "scrollLeft" : "scrollTop";
    if (c) {
      let p = c[f];
      const m = () => {
        const h = c[f];
        p !== h && (l("SCROLL"), i()), p = h;
      };
      return c.addEventListener("scroll", m), () => c.removeEventListener("scroll", m);
    }
  }, [o.viewport, a, l, i]), /* @__PURE__ */ d(Le, { present: n || s !== "hidden", children: /* @__PURE__ */ d(
    ed,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: j(e.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: j(e.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), Bw = u.forwardRef((e, t) => {
  const n = Nt(rn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, i] = u.useState(!1), s = e.orientation === "horizontal", l = cs(() => {
    if (n.viewport) {
      const c = n.viewport.offsetWidth < n.viewport.scrollWidth, f = n.viewport.offsetHeight < n.viewport.scrollHeight;
      i(s ? c : f);
    }
  }, 10);
  return Or(n.viewport, l), Or(n.content, l), /* @__PURE__ */ d(Le, { present: r || a, children: /* @__PURE__ */ d(
    ed,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), ed = u.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Nt(rn, e.__scopeScrollArea), a = u.useRef(null), i = u.useRef(0), [s, l] = u.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), c = Vw(s.viewport, s.content), f = {
    ...r,
    sizes: s,
    onSizesChange: l,
    hasThumb: c > 0 && c < 1,
    onThumbChange: (m) => a.current = m,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (m) => i.current = m
  };
  function p(m, h) {
    return iI(m, i.current, s, h);
  }
  return n === "horizontal" ? /* @__PURE__ */ d(
    tI,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollLeft, h = Lf(m, s, o.dir);
          a.current.style.transform = `translate3d(${h}px, 0, 0)`;
        }
      },
      onWheelScroll: (m) => {
        o.viewport && (o.viewport.scrollLeft = m);
      },
      onDragScroll: (m) => {
        o.viewport && (o.viewport.scrollLeft = p(m, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ d(
    nI,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollTop, h = Lf(m, s);
          a.current.style.transform = `translate3d(0, ${h}px, 0)`;
        }
      },
      onWheelScroll: (m) => {
        o.viewport && (o.viewport.scrollTop = m);
      },
      onDragScroll: (m) => {
        o.viewport && (o.viewport.scrollTop = p(m));
      }
    }
  ) : null;
}), tI = u.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Nt(rn, e.__scopeScrollArea), [i, s] = u.useState(), l = u.useRef(null), c = ae(t, l, a.onScrollbarXChange);
  return u.useEffect(() => {
    l.current && s(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ d(
    jw,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: c,
      sizes: n,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": ls(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
      onDragScroll: (f) => e.onDragScroll(f.x),
      onWheelScroll: (f, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollLeft + f.deltaX;
          e.onWheelScroll(m), Uw(m, p) && f.preventDefault();
        }
      },
      onResize: () => {
        l.current && a.viewport && i && r({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: fi(i.paddingLeft),
            paddingEnd: fi(i.paddingRight)
          }
        });
      }
    }
  );
}), nI = u.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Nt(rn, e.__scopeScrollArea), [i, s] = u.useState(), l = u.useRef(null), c = ae(t, l, a.onScrollbarYChange);
  return u.useEffect(() => {
    l.current && s(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ d(
    jw,
    {
      "data-orientation": "vertical",
      ...o,
      ref: c,
      sizes: n,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": ls(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
      onDragScroll: (f) => e.onDragScroll(f.y),
      onWheelScroll: (f, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollTop + f.deltaY;
          e.onWheelScroll(m), Uw(m, p) && f.preventDefault();
        }
      },
      onResize: () => {
        l.current && a.viewport && i && r({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: fi(i.paddingTop),
            paddingEnd: fi(i.paddingBottom)
          }
        });
      }
    }
  );
}), [rI, zw] = kw(rn), jw = u.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: a,
    onThumbPointerUp: i,
    onThumbPointerDown: s,
    onThumbPositionChange: l,
    onDragScroll: c,
    onWheelScroll: f,
    onResize: p,
    ...m
  } = e, h = Nt(rn, n), [g, v] = u.useState(null), b = ae(t, (_) => v(_)), y = u.useRef(null), w = u.useRef(""), x = h.viewport, S = r.content - r.viewport, C = xe(f), N = xe(l), P = cs(p, 10);
  function M(_) {
    if (y.current) {
      const B = _.clientX - y.current.left, T = _.clientY - y.current.top;
      c({ x: B, y: T });
    }
  }
  return u.useEffect(() => {
    const _ = (B) => {
      const T = B.target;
      (g == null ? void 0 : g.contains(T)) && C(B, S);
    };
    return document.addEventListener("wheel", _, { passive: !1 }), () => document.removeEventListener("wheel", _, { passive: !1 });
  }, [x, g, S, C]), u.useEffect(N, [r, N]), Or(g, P), Or(h.content, P), /* @__PURE__ */ d(
    rI,
    {
      scope: n,
      scrollbar: g,
      hasThumb: o,
      onThumbChange: xe(a),
      onThumbPointerUp: xe(i),
      onThumbPositionChange: N,
      onThumbPointerDown: xe(s),
      children: /* @__PURE__ */ d(
        Q.div,
        {
          ...m,
          ref: b,
          style: { position: "absolute", ...m.style },
          onPointerDown: j(e.onPointerDown, (_) => {
            _.button === 0 && (_.target.setPointerCapture(_.pointerId), y.current = g.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), M(_));
          }),
          onPointerMove: j(e.onPointerMove, M),
          onPointerUp: j(e.onPointerUp, (_) => {
            const B = _.target;
            B.hasPointerCapture(_.pointerId) && B.releasePointerCapture(_.pointerId), document.body.style.webkitUserSelect = w.current, h.viewport && (h.viewport.style.scrollBehavior = ""), y.current = null;
          })
        }
      )
    }
  );
}), di = "ScrollAreaThumb", Hw = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = zw(di, e.__scopeScrollArea);
    return /* @__PURE__ */ d(Le, { present: n || o.hasThumb, children: /* @__PURE__ */ d(oI, { ref: t, ...r }) });
  }
), oI = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, a = Nt(di, n), i = zw(di, n), { onThumbPositionChange: s } = i, l = ae(
      t,
      (p) => i.onThumbChange(p)
    ), c = u.useRef(void 0), f = cs(() => {
      c.current && (c.current(), c.current = void 0);
    }, 100);
    return u.useEffect(() => {
      const p = a.viewport;
      if (p) {
        const m = () => {
          if (f(), !c.current) {
            const h = sI(p, s);
            c.current = h, s();
          }
        };
        return s(), p.addEventListener("scroll", m), () => p.removeEventListener("scroll", m);
      }
    }, [a.viewport, f, s]), /* @__PURE__ */ d(
      Q.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: j(e.onPointerDownCapture, (p) => {
          const h = p.target.getBoundingClientRect(), g = p.clientX - h.left, v = p.clientY - h.top;
          i.onThumbPointerDown({ x: g, y: v });
        }),
        onPointerUp: j(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
Hw.displayName = di;
var td = "ScrollAreaCorner", Ww = u.forwardRef(
  (e, t) => {
    const n = Nt(td, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ d(aI, { ...e, ref: t }) : null;
  }
);
Ww.displayName = td;
var aI = u.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Nt(td, n), [a, i] = u.useState(0), [s, l] = u.useState(0), c = !!(a && s);
  return Or(o.scrollbarX, () => {
    var p;
    const f = ((p = o.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
    o.onCornerHeightChange(f), l(f);
  }), Or(o.scrollbarY, () => {
    var p;
    const f = ((p = o.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
    o.onCornerWidthChange(f), i(f);
  }), c ? /* @__PURE__ */ d(
    Q.div,
    {
      ...r,
      ref: t,
      style: {
        width: a,
        height: s,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function fi(e) {
  return e ? parseInt(e, 10) : 0;
}
function Vw(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function ls(e) {
  const t = Vw(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function iI(e, t, n, r = "ltr") {
  const o = ls(n), a = o / 2, i = t || a, s = o - i, l = n.scrollbar.paddingStart + i, c = n.scrollbar.size - n.scrollbar.paddingEnd - s, f = n.content - n.viewport, p = r === "ltr" ? [0, f] : [f * -1, 0];
  return Gw([l, c], p)(e);
}
function Lf(e, t, n = "ltr") {
  const r = ls(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, i = t.content - t.viewport, s = a - r, l = n === "ltr" ? [0, i] : [i * -1, 0], c = Ro(e, l);
  return Gw([0, i], [0, s])(c);
}
function Gw(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Uw(e, t) {
  return e > 0 && e < t;
}
var sI = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, i = n.left !== a.left, s = n.top !== a.top;
    (i || s) && t(), n = a, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function cs(e, t) {
  const n = xe(e), r = u.useRef(0);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), u.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Or(e, t) {
  const n = xe(t);
  $e(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
var Kw = $w, lI = Fw, cI = Ww;
const uI = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ K(Kw, { ref: r, className: R("relative overflow-hidden", e), ...n, children: [
  /* @__PURE__ */ d(lI, { className: "h-full w-full rounded-[inherit]", children: t }),
  /* @__PURE__ */ d(Yw, {}),
  /* @__PURE__ */ d(cI, {})
] }));
uI.displayName = Kw.displayName;
const Yw = u.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ d(
  Ju,
  {
    ref: r,
    orientation: t,
    className: R(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ d(Hw, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Yw.displayName = Ju.displayName;
const us = hn(null);
us.displayName = "PanelGroupContext";
const Ue = {
  group: "data-panel-group",
  groupDirection: "data-panel-group-direction",
  groupId: "data-panel-group-id",
  panel: "data-panel",
  panelCollapsible: "data-panel-collapsible",
  panelId: "data-panel-id",
  panelSize: "data-panel-size",
  resizeHandle: "data-resize-handle",
  resizeHandleActive: "data-resize-handle-active",
  resizeHandleEnabled: "data-panel-resize-handle-enabled",
  resizeHandleId: "data-panel-resize-handle-id",
  resizeHandleState: "data-resize-handle-state"
}, nd = 10, qn = Ai, Ff = u.useId, dI = typeof Ff == "function" ? Ff : () => null;
let fI = 0;
function rd(e = null) {
  const t = dI(), n = Ke(e || t || null);
  return n.current === null && (n.current = "" + fI++), e ?? n.current;
}
function qw({
  children: e,
  className: t = "",
  collapsedSize: n,
  collapsible: r,
  defaultSize: o,
  forwardedRef: a,
  id: i,
  maxSize: s,
  minSize: l,
  onCollapse: c,
  onExpand: f,
  onResize: p,
  order: m,
  style: h,
  tagName: g = "div",
  ...v
}) {
  const b = Jt(us);
  if (b === null)
    throw Error("Panel components must be rendered within a PanelGroup container");
  const {
    collapsePanel: y,
    expandPanel: w,
    getPanelSize: x,
    getPanelStyle: S,
    groupId: C,
    isPanelCollapsed: N,
    reevaluatePanelConstraints: P,
    registerPanel: M,
    resizePanel: _,
    unregisterPanel: B
  } = b, T = rd(i), k = Ke({
    callbacks: {
      onCollapse: c,
      onExpand: f,
      onResize: p
    },
    constraints: {
      collapsedSize: n,
      collapsible: r,
      defaultSize: o,
      maxSize: s,
      minSize: l
    },
    id: T,
    idIsFromProps: i !== void 0,
    order: m
  });
  Ke({
    didLogMissingDefaultSizeWarning: !1
  }), qn(() => {
    const {
      callbacks: $,
      constraints: U
    } = k.current, W = {
      ...U
    };
    k.current.id = T, k.current.idIsFromProps = i !== void 0, k.current.order = m, $.onCollapse = c, $.onExpand = f, $.onResize = p, U.collapsedSize = n, U.collapsible = r, U.defaultSize = o, U.maxSize = s, U.minSize = l, (W.collapsedSize !== U.collapsedSize || W.collapsible !== U.collapsible || W.maxSize !== U.maxSize || W.minSize !== U.minSize) && P(k.current, W);
  }), qn(() => {
    const $ = k.current;
    return M($), () => {
      B($);
    };
  }, [m, T, M, B]), Dc(a, () => ({
    collapse: () => {
      y(k.current);
    },
    expand: ($) => {
      w(k.current, $);
    },
    getId() {
      return T;
    },
    getSize() {
      return x(k.current);
    },
    isCollapsed() {
      return N(k.current);
    },
    isExpanded() {
      return !N(k.current);
    },
    resize: ($) => {
      _(k.current, $);
    }
  }), [y, w, x, N, T, _]);
  const G = S(k.current, o);
  return dn(g, {
    ...v,
    children: e,
    className: t,
    id: T,
    style: {
      ...G,
      ...h
    },
    // CSS selectors
    [Ue.groupId]: C,
    [Ue.panel]: "",
    [Ue.panelCollapsible]: r || void 0,
    [Ue.panelId]: T,
    [Ue.panelSize]: parseFloat("" + G.flexGrow).toFixed(1)
  });
}
const Xw = In((e, t) => dn(qw, {
  ...e,
  forwardedRef: t
}));
qw.displayName = "Panel";
Xw.displayName = "forwardRef(Panel)";
let nc = null, Ga = -1, Rn = null;
function pI(e, t) {
  if (t) {
    const n = (t & t0) !== 0, r = (t & n0) !== 0, o = (t & r0) !== 0, a = (t & o0) !== 0;
    if (n)
      return o ? "se-resize" : a ? "ne-resize" : "e-resize";
    if (r)
      return o ? "sw-resize" : a ? "nw-resize" : "w-resize";
    if (o)
      return "s-resize";
    if (a)
      return "n-resize";
  }
  switch (e) {
    case "horizontal":
      return "ew-resize";
    case "intersection":
      return "move";
    case "vertical":
      return "ns-resize";
  }
}
function mI() {
  Rn !== null && (document.head.removeChild(Rn), nc = null, Rn = null, Ga = -1);
}
function Zs(e, t) {
  var n, r;
  const o = pI(e, t);
  if (nc !== o) {
    if (nc = o, Rn === null && (Rn = document.createElement("style"), document.head.appendChild(Rn)), Ga >= 0) {
      var a;
      (a = Rn.sheet) === null || a === void 0 || a.removeRule(Ga);
    }
    Ga = (n = (r = Rn.sheet) === null || r === void 0 ? void 0 : r.insertRule(`*{cursor: ${o} !important;}`)) !== null && n !== void 0 ? n : -1;
  }
}
function Zw(e) {
  return e.type === "keydown";
}
function Qw(e) {
  return e.type.startsWith("pointer");
}
function Jw(e) {
  return e.type.startsWith("mouse");
}
function ds(e) {
  if (Qw(e)) {
    if (e.isPrimary)
      return {
        x: e.clientX,
        y: e.clientY
      };
  } else if (Jw(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  return {
    x: 1 / 0,
    y: 1 / 0
  };
}
function hI() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
function vI(e, t, n) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function gI(e, t) {
  if (e === t) throw new Error("Cannot compare node with itself");
  const n = {
    a: jf(e),
    b: jf(t)
  };
  let r;
  for (; n.a.at(-1) === n.b.at(-1); )
    e = n.a.pop(), t = n.b.pop(), r = e;
  he(r, "Stacking order can only be calculated for elements with a common ancestor");
  const o = {
    a: zf(Bf(n.a)),
    b: zf(Bf(n.b))
  };
  if (o.a === o.b) {
    const a = r.childNodes, i = {
      a: n.a.at(-1),
      b: n.b.at(-1)
    };
    let s = a.length;
    for (; s--; ) {
      const l = a[s];
      if (l === i.a) return 1;
      if (l === i.b) return -1;
    }
  }
  return Math.sign(o.a - o.b);
}
const bI = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function yI(e) {
  var t;
  const n = getComputedStyle((t = e0(e)) !== null && t !== void 0 ? t : e).display;
  return n === "flex" || n === "inline-flex";
}
function wI(e) {
  const t = getComputedStyle(e);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || yI(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || bI.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function Bf(e) {
  let t = e.length;
  for (; t--; ) {
    const n = e[t];
    if (he(n, "Missing node"), wI(n)) return n;
  }
  return null;
}
function zf(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function jf(e) {
  const t = [];
  for (; e; )
    t.push(e), e = e0(e);
  return t;
}
function e0(e) {
  const {
    parentNode: t
  } = e;
  return t && t instanceof ShadowRoot ? t.host : t;
}
const t0 = 1, n0 = 2, r0 = 4, o0 = 8, xI = hI() === "coarse";
let Ot = [], Er = !1, Kn = /* @__PURE__ */ new Map(), fs = /* @__PURE__ */ new Map();
const Io = /* @__PURE__ */ new Set();
function SI(e, t, n, r, o) {
  var a;
  const {
    ownerDocument: i
  } = t, s = {
    direction: n,
    element: t,
    hitAreaMargins: r,
    setResizeHandlerState: o
  }, l = (a = Kn.get(i)) !== null && a !== void 0 ? a : 0;
  return Kn.set(i, l + 1), Io.add(s), pi(), function() {
    var f;
    fs.delete(e), Io.delete(s);
    const p = (f = Kn.get(i)) !== null && f !== void 0 ? f : 1;
    if (Kn.set(i, p - 1), pi(), p === 1 && Kn.delete(i), Ot.includes(s)) {
      const m = Ot.indexOf(s);
      m >= 0 && Ot.splice(m, 1), ad(), o("up", !0, null);
    }
  };
}
function CI(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = ds(e);
  Er = !0, od({
    target: t,
    x: n,
    y: r
  }), pi(), Ot.length > 0 && (mi("down", e), e.preventDefault(), a0(t) || e.stopImmediatePropagation());
}
function Qs(e) {
  const {
    x: t,
    y: n
  } = ds(e);
  if (Er && e.buttons === 0 && (Er = !1, mi("up", e)), !Er) {
    const {
      target: r
    } = e;
    od({
      target: r,
      x: t,
      y: n
    });
  }
  mi("move", e), ad(), Ot.length > 0 && e.preventDefault();
}
function Js(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = ds(e);
  fs.clear(), Er = !1, Ot.length > 0 && (e.preventDefault(), a0(t) || e.stopImmediatePropagation()), mi("up", e), od({
    target: t,
    x: n,
    y: r
  }), ad(), pi();
}
function a0(e) {
  let t = e;
  for (; t; ) {
    if (t.hasAttribute(Ue.resizeHandle))
      return !0;
    t = t.parentElement;
  }
  return !1;
}
function od({
  target: e,
  x: t,
  y: n
}) {
  Ot.splice(0);
  let r = null;
  (e instanceof HTMLElement || e instanceof SVGElement) && (r = e), Io.forEach((o) => {
    const {
      element: a,
      hitAreaMargins: i
    } = o, s = a.getBoundingClientRect(), {
      bottom: l,
      left: c,
      right: f,
      top: p
    } = s, m = xI ? i.coarse : i.fine;
    if (t >= c - m && t <= f + m && n >= p - m && n <= l + m) {
      if (r !== null && document.contains(r) && a !== r && !a.contains(r) && !r.contains(a) && // Calculating stacking order has a cost, so we should avoid it if possible
      // That is why we only check potentially intersecting handles,
      // and why we skip if the event target is within the handle's DOM
      gI(r, a) > 0) {
        let g = r, v = !1;
        for (; g && !g.contains(a); ) {
          if (vI(g.getBoundingClientRect(), s)) {
            v = !0;
            break;
          }
          g = g.parentElement;
        }
        if (v)
          return;
      }
      Ot.push(o);
    }
  });
}
function el(e, t) {
  fs.set(e, t);
}
function ad() {
  let e = !1, t = !1;
  Ot.forEach((r) => {
    const {
      direction: o
    } = r;
    o === "horizontal" ? e = !0 : t = !0;
  });
  let n = 0;
  fs.forEach((r) => {
    n |= r;
  }), e && t ? Zs("intersection", n) : e ? Zs("horizontal", n) : t ? Zs("vertical", n) : mI();
}
let tl = new AbortController();
function pi() {
  tl.abort(), tl = new AbortController();
  const e = {
    capture: !0,
    signal: tl.signal
  };
  Io.size && (Er ? (Ot.length > 0 && Kn.forEach((t, n) => {
    const {
      body: r
    } = n;
    t > 0 && (r.addEventListener("contextmenu", Js, e), r.addEventListener("pointerleave", Qs, e), r.addEventListener("pointermove", Qs, e));
  }), window.addEventListener("pointerup", Js, e), window.addEventListener("pointercancel", Js, e)) : Kn.forEach((t, n) => {
    const {
      body: r
    } = n;
    t > 0 && (r.addEventListener("pointerdown", CI, e), r.addEventListener("pointermove", Qs, e));
  }));
}
function mi(e, t) {
  Io.forEach((n) => {
    const {
      setResizeHandlerState: r
    } = n, o = Ot.includes(n);
    r(e, o, t);
  });
}
function PI() {
  const [e, t] = Qe(0);
  return nt(() => t((n) => n + 1), []);
}
function he(e, t) {
  if (!e)
    throw console.error(t), Error(t);
}
function er(e, t, n = nd) {
  return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
}
function un(e, t, n = nd) {
  return er(e, t, n) === 0;
}
function vt(e, t, n) {
  return er(e, t, n) === 0;
}
function NI(e, t, n) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++) {
    const o = e[r], a = t[r];
    if (!vt(o, a, n))
      return !1;
  }
  return !0;
}
function Sr({
  panelConstraints: e,
  panelIndex: t,
  size: n
}) {
  const r = e[t];
  he(r != null, `Panel constraints not found for index ${t}`);
  let {
    collapsedSize: o = 0,
    collapsible: a,
    maxSize: i = 100,
    minSize: s = 0
  } = r;
  if (er(n, s) < 0)
    if (a) {
      const l = (o + s) / 2;
      er(n, l) < 0 ? n = o : n = s;
    } else
      n = s;
  return n = Math.min(i, n), n = parseFloat(n.toFixed(nd)), n;
}
function xo({
  delta: e,
  initialLayout: t,
  panelConstraints: n,
  pivotIndices: r,
  prevLayout: o,
  trigger: a
}) {
  if (vt(e, 0))
    return t;
  const i = [...t], [s, l] = r;
  he(s != null, "Invalid first pivot index"), he(l != null, "Invalid second pivot index");
  let c = 0;
  if (a === "keyboard") {
    {
      const p = e < 0 ? l : s, m = n[p];
      he(m, `Panel constraints not found for index ${p}`);
      const {
        collapsedSize: h = 0,
        collapsible: g,
        minSize: v = 0
      } = m;
      if (g) {
        const b = t[p];
        if (he(b != null, `Previous layout not found for panel index ${p}`), vt(b, h)) {
          const y = v - b;
          er(y, Math.abs(e)) > 0 && (e = e < 0 ? 0 - y : y);
        }
      }
    }
    {
      const p = e < 0 ? s : l, m = n[p];
      he(m, `No panel constraints found for index ${p}`);
      const {
        collapsedSize: h = 0,
        collapsible: g,
        minSize: v = 0
      } = m;
      if (g) {
        const b = t[p];
        if (he(b != null, `Previous layout not found for panel index ${p}`), vt(b, v)) {
          const y = b - h;
          er(y, Math.abs(e)) > 0 && (e = e < 0 ? 0 - y : y);
        }
      }
    }
  }
  {
    const p = e < 0 ? 1 : -1;
    let m = e < 0 ? l : s, h = 0;
    for (; ; ) {
      const v = t[m];
      he(v != null, `Previous layout not found for panel index ${m}`);
      const y = Sr({
        panelConstraints: n,
        panelIndex: m,
        size: 100
      }) - v;
      if (h += y, m += p, m < 0 || m >= n.length)
        break;
    }
    const g = Math.min(Math.abs(e), Math.abs(h));
    e = e < 0 ? 0 - g : g;
  }
  {
    let m = e < 0 ? s : l;
    for (; m >= 0 && m < n.length; ) {
      const h = Math.abs(e) - Math.abs(c), g = t[m];
      he(g != null, `Previous layout not found for panel index ${m}`);
      const v = g - h, b = Sr({
        panelConstraints: n,
        panelIndex: m,
        size: v
      });
      if (!vt(g, b) && (c += g - b, i[m] = b, c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      e < 0 ? m-- : m++;
    }
  }
  if (NI(o, i))
    return o;
  {
    const p = e < 0 ? l : s, m = t[p];
    he(m != null, `Previous layout not found for panel index ${p}`);
    const h = m + c, g = Sr({
      panelConstraints: n,
      panelIndex: p,
      size: h
    });
    if (i[p] = g, !vt(g, h)) {
      let v = h - g, y = e < 0 ? l : s;
      for (; y >= 0 && y < n.length; ) {
        const w = i[y];
        he(w != null, `Previous layout not found for panel index ${y}`);
        const x = w + v, S = Sr({
          panelConstraints: n,
          panelIndex: y,
          size: x
        });
        if (vt(w, S) || (v -= S - w, i[y] = S), vt(v, 0))
          break;
        e > 0 ? y-- : y++;
      }
    }
  }
  const f = i.reduce((p, m) => m + p, 0);
  return vt(f, 100) ? i : o;
}
function EI({
  layout: e,
  panelsArray: t,
  pivotIndices: n
}) {
  let r = 0, o = 100, a = 0, i = 0;
  const s = n[0];
  he(s != null, "No pivot index found"), t.forEach((p, m) => {
    const {
      constraints: h
    } = p, {
      maxSize: g = 100,
      minSize: v = 0
    } = h;
    m === s ? (r = v, o = g) : (a += v, i += g);
  });
  const l = Math.min(o, 100 - a), c = Math.max(r, 100 - i), f = e[s];
  return {
    valueMax: l,
    valueMin: c,
    valueNow: f
  };
}
function ko(e, t = document) {
  return Array.from(t.querySelectorAll(`[${Ue.resizeHandleId}][data-panel-group-id="${e}"]`));
}
function i0(e, t, n = document) {
  const o = ko(e, n).findIndex((a) => a.getAttribute(Ue.resizeHandleId) === t);
  return o ?? null;
}
function s0(e, t, n) {
  const r = i0(e, t, n);
  return r != null ? [r, r + 1] : [-1, -1];
}
function l0(e, t = document) {
  var n;
  if (t instanceof HTMLElement && (t == null || (n = t.dataset) === null || n === void 0 ? void 0 : n.panelGroupId) == e)
    return t;
  const r = t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);
  return r || null;
}
function ps(e, t = document) {
  const n = t.querySelector(`[${Ue.resizeHandleId}="${e}"]`);
  return n || null;
}
function _I(e, t, n, r = document) {
  var o, a, i, s;
  const l = ps(t, r), c = ko(e, r), f = l ? c.indexOf(l) : -1, p = (o = (a = n[f]) === null || a === void 0 ? void 0 : a.id) !== null && o !== void 0 ? o : null, m = (i = (s = n[f + 1]) === null || s === void 0 ? void 0 : s.id) !== null && i !== void 0 ? i : null;
  return [p, m];
}
function RI({
  committedValuesRef: e,
  eagerValuesRef: t,
  groupId: n,
  layout: r,
  panelDataArray: o,
  panelGroupElement: a,
  setLayout: i
}) {
  Ke({
    didWarnAboutMissingResizeHandle: !1
  }), qn(() => {
    if (!a)
      return;
    const s = ko(n, a);
    for (let l = 0; l < o.length - 1; l++) {
      const {
        valueMax: c,
        valueMin: f,
        valueNow: p
      } = EI({
        layout: r,
        panelsArray: o,
        pivotIndices: [l, l + 1]
      }), m = s[l];
      if (m != null) {
        const h = o[l];
        he(h, `No panel data found for index "${l}"`), m.setAttribute("aria-controls", h.id), m.setAttribute("aria-valuemax", "" + Math.round(c)), m.setAttribute("aria-valuemin", "" + Math.round(f)), m.setAttribute("aria-valuenow", p != null ? "" + Math.round(p) : "");
      }
    }
    return () => {
      s.forEach((l, c) => {
        l.removeAttribute("aria-controls"), l.removeAttribute("aria-valuemax"), l.removeAttribute("aria-valuemin"), l.removeAttribute("aria-valuenow");
      });
    };
  }, [n, r, o, a]), Je(() => {
    if (!a)
      return;
    const s = t.current;
    he(s, "Eager values not found");
    const {
      panelDataArray: l
    } = s, c = l0(n, a);
    he(c != null, `No group found for id "${n}"`);
    const f = ko(n, a);
    he(f, `No resize handles found for group id "${n}"`);
    const p = f.map((m) => {
      const h = m.getAttribute(Ue.resizeHandleId);
      he(h, "Resize handle element has no handle id attribute");
      const [g, v] = _I(n, h, l, a);
      if (g == null || v == null)
        return () => {
        };
      const b = (y) => {
        if (!y.defaultPrevented)
          switch (y.key) {
            case "Enter": {
              y.preventDefault();
              const w = l.findIndex((x) => x.id === g);
              if (w >= 0) {
                const x = l[w];
                he(x, `No panel data found for index ${w}`);
                const S = r[w], {
                  collapsedSize: C = 0,
                  collapsible: N,
                  minSize: P = 0
                } = x.constraints;
                if (S != null && N) {
                  const M = xo({
                    delta: vt(S, C) ? P - C : C - S,
                    initialLayout: r,
                    panelConstraints: l.map((_) => _.constraints),
                    pivotIndices: s0(n, h, a),
                    prevLayout: r,
                    trigger: "keyboard"
                  });
                  r !== M && i(M);
                }
              }
              break;
            }
          }
      };
      return m.addEventListener("keydown", b), () => {
        m.removeEventListener("keydown", b);
      };
    });
    return () => {
      p.forEach((m) => m());
    };
  }, [a, e, t, n, r, o, i]);
}
function Hf(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function c0(e, t) {
  const n = e === "horizontal", {
    x: r,
    y: o
  } = ds(t);
  return n ? r : o;
}
function TI(e, t, n, r, o) {
  const a = n === "horizontal", i = ps(t, o);
  he(i, `No resize handle element found for id "${t}"`);
  const s = i.getAttribute(Ue.groupId);
  he(s, "Resize handle element has no group id attribute");
  let {
    initialCursorPosition: l
  } = r;
  const c = c0(n, e), f = l0(s, o);
  he(f, `No group element found for id "${s}"`);
  const p = f.getBoundingClientRect(), m = a ? p.width : p.height;
  return (c - l) / m * 100;
}
function MI(e, t, n, r, o, a) {
  if (Zw(e)) {
    const i = n === "horizontal";
    let s = 0;
    e.shiftKey ? s = 100 : o != null ? s = o : s = 10;
    let l = 0;
    switch (e.key) {
      case "ArrowDown":
        l = i ? 0 : s;
        break;
      case "ArrowLeft":
        l = i ? -s : 0;
        break;
      case "ArrowRight":
        l = i ? s : 0;
        break;
      case "ArrowUp":
        l = i ? 0 : -s;
        break;
      case "End":
        l = 100;
        break;
      case "Home":
        l = -100;
        break;
    }
    return l;
  } else
    return r == null ? 0 : TI(e, t, n, r, a);
}
function AI({
  panelDataArray: e
}) {
  const t = Array(e.length), n = e.map((a) => a.constraints);
  let r = 0, o = 100;
  for (let a = 0; a < e.length; a++) {
    const i = n[a];
    he(i, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: s
    } = i;
    s != null && (r++, t[a] = s, o -= s);
  }
  for (let a = 0; a < e.length; a++) {
    const i = n[a];
    he(i, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: s
    } = i;
    if (s != null)
      continue;
    const l = e.length - r, c = o / l;
    r++, t[a] = c, o -= c;
  }
  return t;
}
function vr(e, t, n) {
  t.forEach((r, o) => {
    const a = e[o];
    he(a, `Panel data not found for index ${o}`);
    const {
      callbacks: i,
      constraints: s,
      id: l
    } = a, {
      collapsedSize: c = 0,
      collapsible: f
    } = s, p = n[l];
    if (p == null || r !== p) {
      n[l] = r;
      const {
        onCollapse: m,
        onExpand: h,
        onResize: g
      } = i;
      g && g(r, p), f && (m || h) && (h && (p == null || un(p, c)) && !un(r, c) && h(), m && (p == null || !un(p, c)) && un(r, c) && m());
    }
  });
}
function Ra(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] != t[n])
      return !1;
  return !0;
}
function OI({
  defaultSize: e,
  dragState: t,
  layout: n,
  panelData: r,
  panelIndex: o,
  precision: a = 3
}) {
  const i = n[o];
  let s;
  return i == null ? s = e != null ? e.toPrecision(a) : "1" : r.length === 1 ? s = "1" : s = i.toPrecision(a), {
    flexBasis: 0,
    flexGrow: s,
    flexShrink: 1,
    // Without this, Panel sizes may be unintentionally overridden by their content
    overflow: "hidden",
    // Disable pointer events inside of a panel during resize
    // This avoid edge cases like nested iframes
    pointerEvents: t !== null ? "none" : void 0
  };
}
function DI(e, t = 10) {
  let n = null;
  return (...o) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      e(...o);
    }, t);
  };
}
function Wf(e) {
  try {
    if (typeof localStorage < "u")
      e.getItem = (t) => localStorage.getItem(t), e.setItem = (t, n) => {
        localStorage.setItem(t, n);
      };
    else
      throw new Error("localStorage not supported in this environment");
  } catch (t) {
    console.error(t), e.getItem = () => null, e.setItem = () => {
    };
  }
}
function u0(e) {
  return `react-resizable-panels:${e}`;
}
function d0(e) {
  return e.map((t) => {
    const {
      constraints: n,
      id: r,
      idIsFromProps: o,
      order: a
    } = t;
    return o ? r : a ? `${a}:${JSON.stringify(n)}` : JSON.stringify(n);
  }).sort((t, n) => t.localeCompare(n)).join(",");
}
function f0(e, t) {
  try {
    const n = u0(e), r = t.getItem(n);
    if (r) {
      const o = JSON.parse(r);
      if (typeof o == "object" && o != null)
        return o;
    }
  } catch {
  }
  return null;
}
function II(e, t, n) {
  var r, o;
  const a = (r = f0(e, n)) !== null && r !== void 0 ? r : {}, i = d0(t);
  return (o = a[i]) !== null && o !== void 0 ? o : null;
}
function kI(e, t, n, r, o) {
  var a;
  const i = u0(e), s = d0(t), l = (a = f0(e, o)) !== null && a !== void 0 ? a : {};
  l[s] = {
    expandToSizes: Object.fromEntries(n.entries()),
    layout: r
  };
  try {
    o.setItem(i, JSON.stringify(l));
  } catch (c) {
    console.error(c);
  }
}
function Vf({
  layout: e,
  panelConstraints: t
}) {
  const n = [...e], r = n.reduce((a, i) => a + i, 0);
  if (n.length !== t.length)
    throw Error(`Invalid ${t.length} panel layout: ${n.map((a) => `${a}%`).join(", ")}`);
  if (!vt(r, 100) && n.length > 0)
    for (let a = 0; a < t.length; a++) {
      const i = n[a];
      he(i != null, `No layout data found for index ${a}`);
      const s = 100 / r * i;
      n[a] = s;
    }
  let o = 0;
  for (let a = 0; a < t.length; a++) {
    const i = n[a];
    he(i != null, `No layout data found for index ${a}`);
    const s = Sr({
      panelConstraints: t,
      panelIndex: a,
      size: i
    });
    i != s && (o += i - s, n[a] = s);
  }
  if (!vt(o, 0))
    for (let a = 0; a < t.length; a++) {
      const i = n[a];
      he(i != null, `No layout data found for index ${a}`);
      const s = i + o, l = Sr({
        panelConstraints: t,
        panelIndex: a,
        size: s
      });
      if (i !== l && (o -= l - i, n[a] = l, vt(o, 0)))
        break;
    }
  return n;
}
const $I = 100, So = {
  getItem: (e) => (Wf(So), So.getItem(e)),
  setItem: (e, t) => {
    Wf(So), So.setItem(e, t);
  }
}, Gf = {};
function p0({
  autoSaveId: e = null,
  children: t,
  className: n = "",
  direction: r,
  forwardedRef: o,
  id: a = null,
  onLayout: i = null,
  keyboardResizeBy: s = null,
  storage: l = So,
  style: c,
  tagName: f = "div",
  ...p
}) {
  const m = rd(a), h = Ke(null), [g, v] = Qe(null), [b, y] = Qe([]), w = PI(), x = Ke({}), S = Ke(/* @__PURE__ */ new Map()), C = Ke(0), N = Ke({
    autoSaveId: e,
    direction: r,
    dragState: g,
    id: m,
    keyboardResizeBy: s,
    onLayout: i,
    storage: l
  }), P = Ke({
    layout: b,
    panelDataArray: [],
    panelDataArrayChanged: !1
  });
  Ke({
    didLogIdAndOrderWarning: !1,
    didLogPanelConstraintsWarning: !1,
    prevPanelIds: []
  }), Dc(o, () => ({
    getId: () => N.current.id,
    getLayout: () => {
      const {
        layout: O
      } = P.current;
      return O;
    },
    setLayout: (O) => {
      const {
        onLayout: H
      } = N.current, {
        layout: V,
        panelDataArray: Z
      } = P.current, A = Vf({
        layout: O,
        panelConstraints: Z.map((Y) => Y.constraints)
      });
      Hf(V, A) || (y(A), P.current.layout = A, H && H(A), vr(Z, A, x.current));
    }
  }), []), qn(() => {
    N.current.autoSaveId = e, N.current.direction = r, N.current.dragState = g, N.current.id = m, N.current.onLayout = i, N.current.storage = l;
  }), RI({
    committedValuesRef: N,
    eagerValuesRef: P,
    groupId: m,
    layout: b,
    panelDataArray: P.current.panelDataArray,
    setLayout: y,
    panelGroupElement: h.current
  }), Je(() => {
    const {
      panelDataArray: O
    } = P.current;
    if (e) {
      if (b.length === 0 || b.length !== O.length)
        return;
      let H = Gf[e];
      H == null && (H = DI(kI, $I), Gf[e] = H);
      const V = [...O], Z = new Map(S.current);
      H(e, V, Z, b, l);
    }
  }, [e, b, l]), Je(() => {
  });
  const M = nt((O) => {
    const {
      onLayout: H
    } = N.current, {
      layout: V,
      panelDataArray: Z
    } = P.current;
    if (O.constraints.collapsible) {
      const A = Z.map((re) => re.constraints), {
        collapsedSize: Y = 0,
        panelSize: J,
        pivotIndices: ne
      } = Wn(Z, O, V);
      if (he(J != null, `Panel size not found for panel "${O.id}"`), !un(J, Y)) {
        S.current.set(O.id, J);
        const X = yr(Z, O) === Z.length - 1 ? J - Y : Y - J, q = xo({
          delta: X,
          initialLayout: V,
          panelConstraints: A,
          pivotIndices: ne,
          prevLayout: V,
          trigger: "imperative-api"
        });
        Ra(V, q) || (y(q), P.current.layout = q, H && H(q), vr(Z, q, x.current));
      }
    }
  }, []), _ = nt((O, H) => {
    const {
      onLayout: V
    } = N.current, {
      layout: Z,
      panelDataArray: A
    } = P.current;
    if (O.constraints.collapsible) {
      const Y = A.map((z) => z.constraints), {
        collapsedSize: J = 0,
        panelSize: ne = 0,
        minSize: re = 0,
        pivotIndices: X
      } = Wn(A, O, Z), q = H ?? re;
      if (un(ne, J)) {
        const z = S.current.get(O.id), oe = z != null && z >= q ? z : q, ve = yr(A, O) === A.length - 1 ? ne - oe : oe - ne, de = xo({
          delta: ve,
          initialLayout: Z,
          panelConstraints: Y,
          pivotIndices: X,
          prevLayout: Z,
          trigger: "imperative-api"
        });
        Ra(Z, de) || (y(de), P.current.layout = de, V && V(de), vr(A, de, x.current));
      }
    }
  }, []), B = nt((O) => {
    const {
      layout: H,
      panelDataArray: V
    } = P.current, {
      panelSize: Z
    } = Wn(V, O, H);
    return he(Z != null, `Panel size not found for panel "${O.id}"`), Z;
  }, []), T = nt((O, H) => {
    const {
      panelDataArray: V
    } = P.current, Z = yr(V, O);
    return OI({
      defaultSize: H,
      dragState: g,
      layout: b,
      panelData: V,
      panelIndex: Z
    });
  }, [g, b]), k = nt((O) => {
    const {
      layout: H,
      panelDataArray: V
    } = P.current, {
      collapsedSize: Z = 0,
      collapsible: A,
      panelSize: Y
    } = Wn(V, O, H);
    return he(Y != null, `Panel size not found for panel "${O.id}"`), A === !0 && un(Y, Z);
  }, []), G = nt((O) => {
    const {
      layout: H,
      panelDataArray: V
    } = P.current, {
      collapsedSize: Z = 0,
      collapsible: A,
      panelSize: Y
    } = Wn(V, O, H);
    return he(Y != null, `Panel size not found for panel "${O.id}"`), !A || er(Y, Z) > 0;
  }, []), $ = nt((O) => {
    const {
      panelDataArray: H
    } = P.current;
    H.push(O), H.sort((V, Z) => {
      const A = V.order, Y = Z.order;
      return A == null && Y == null ? 0 : A == null ? -1 : Y == null ? 1 : A - Y;
    }), P.current.panelDataArrayChanged = !0, w();
  }, [w]);
  qn(() => {
    if (P.current.panelDataArrayChanged) {
      P.current.panelDataArrayChanged = !1;
      const {
        autoSaveId: O,
        onLayout: H,
        storage: V
      } = N.current, {
        layout: Z,
        panelDataArray: A
      } = P.current;
      let Y = null;
      if (O) {
        const ne = II(O, A, V);
        ne && (S.current = new Map(Object.entries(ne.expandToSizes)), Y = ne.layout);
      }
      Y == null && (Y = AI({
        panelDataArray: A
      }));
      const J = Vf({
        layout: Y,
        panelConstraints: A.map((ne) => ne.constraints)
      });
      Hf(Z, J) || (y(J), P.current.layout = J, H && H(J), vr(A, J, x.current));
    }
  }), qn(() => {
    const O = P.current;
    return () => {
      O.layout = [];
    };
  }, []);
  const U = nt((O) => {
    let H = !1;
    const V = h.current;
    return V && window.getComputedStyle(V, null).getPropertyValue("direction") === "rtl" && (H = !0), function(A) {
      A.preventDefault();
      const Y = h.current;
      if (!Y)
        return () => null;
      const {
        direction: J,
        dragState: ne,
        id: re,
        keyboardResizeBy: X,
        onLayout: q
      } = N.current, {
        layout: z,
        panelDataArray: oe
      } = P.current, {
        initialLayout: le
      } = ne ?? {}, ve = s0(re, O, Y);
      let de = MI(A, O, J, ne, X, Y);
      const ce = J === "horizontal";
      ce && H && (de = -de);
      const Ne = oe.map((je) => je.constraints), Fe = xo({
        delta: de,
        initialLayout: le ?? z,
        panelConstraints: Ne,
        pivotIndices: ve,
        prevLayout: z,
        trigger: Zw(A) ? "keyboard" : "mouse-or-touch"
      }), Re = !Ra(z, Fe);
      (Qw(A) || Jw(A)) && C.current != de && (C.current = de, !Re && de !== 0 ? ce ? el(O, de < 0 ? t0 : n0) : el(O, de < 0 ? r0 : o0) : el(O, 0)), Re && (y(Fe), P.current.layout = Fe, q && q(Fe), vr(oe, Fe, x.current));
    };
  }, []), W = nt((O, H) => {
    const {
      onLayout: V
    } = N.current, {
      layout: Z,
      panelDataArray: A
    } = P.current, Y = A.map((z) => z.constraints), {
      panelSize: J,
      pivotIndices: ne
    } = Wn(A, O, Z);
    he(J != null, `Panel size not found for panel "${O.id}"`);
    const X = yr(A, O) === A.length - 1 ? J - H : H - J, q = xo({
      delta: X,
      initialLayout: Z,
      panelConstraints: Y,
      pivotIndices: ne,
      prevLayout: Z,
      trigger: "imperative-api"
    });
    Ra(Z, q) || (y(q), P.current.layout = q, V && V(q), vr(A, q, x.current));
  }, []), F = nt((O, H) => {
    const {
      layout: V,
      panelDataArray: Z
    } = P.current, {
      collapsedSize: A = 0,
      collapsible: Y
    } = H, {
      collapsedSize: J = 0,
      collapsible: ne,
      maxSize: re = 100,
      minSize: X = 0
    } = O.constraints, {
      panelSize: q
    } = Wn(Z, O, V);
    q != null && (Y && ne && un(q, A) ? un(A, J) || W(O, J) : q < X ? W(O, X) : q > re && W(O, re));
  }, [W]), D = nt((O, H) => {
    const {
      direction: V
    } = N.current, {
      layout: Z
    } = P.current;
    if (!h.current)
      return;
    const A = ps(O, h.current);
    he(A, `Drag handle element not found for id "${O}"`);
    const Y = c0(V, H);
    v({
      dragHandleId: O,
      dragHandleRect: A.getBoundingClientRect(),
      initialCursorPosition: Y,
      initialLayout: Z
    });
  }, []), L = nt(() => {
    v(null);
  }, []), ee = nt((O) => {
    const {
      panelDataArray: H
    } = P.current, V = yr(H, O);
    V >= 0 && (H.splice(V, 1), delete x.current[O.id], P.current.panelDataArrayChanged = !0, w());
  }, [w]), te = Oc(() => ({
    collapsePanel: M,
    direction: r,
    dragState: g,
    expandPanel: _,
    getPanelSize: B,
    getPanelStyle: T,
    groupId: m,
    isPanelCollapsed: k,
    isPanelExpanded: G,
    reevaluatePanelConstraints: F,
    registerPanel: $,
    registerResizeHandle: U,
    resizePanel: W,
    startDragging: D,
    stopDragging: L,
    unregisterPanel: ee,
    panelGroupElement: h.current
  }), [M, g, r, _, B, T, m, k, G, F, $, U, W, D, L, ee]), I = {
    display: "flex",
    flexDirection: r === "horizontal" ? "row" : "column",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  };
  return dn(us.Provider, {
    value: te
  }, dn(f, {
    ...p,
    children: t,
    className: n,
    id: a,
    ref: h,
    style: {
      ...I,
      ...c
    },
    // CSS selectors
    [Ue.group]: "",
    [Ue.groupDirection]: r,
    [Ue.groupId]: m
  }));
}
const m0 = In((e, t) => dn(p0, {
  ...e,
  forwardedRef: t
}));
p0.displayName = "PanelGroup";
m0.displayName = "forwardRef(PanelGroup)";
function yr(e, t) {
  return e.findIndex((n) => n === t || n.id === t.id);
}
function Wn(e, t, n) {
  const r = yr(e, t), a = r === e.length - 1 ? [r - 1, r] : [r, r + 1], i = n[r];
  return {
    ...t.constraints,
    panelSize: i,
    pivotIndices: a
  };
}
function LI({
  disabled: e,
  handleId: t,
  resizeHandler: n,
  panelGroupElement: r
}) {
  Je(() => {
    if (e || n == null || r == null)
      return;
    const o = ps(t, r);
    if (o == null)
      return;
    const a = (i) => {
      if (!i.defaultPrevented)
        switch (i.key) {
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
          case "ArrowUp":
          case "End":
          case "Home": {
            i.preventDefault(), n(i);
            break;
          }
          case "F6": {
            i.preventDefault();
            const s = o.getAttribute(Ue.groupId);
            he(s, `No group element found for id "${s}"`);
            const l = ko(s, r), c = i0(s, t, r);
            he(c !== null, `No resize element found for id "${t}"`);
            const f = i.shiftKey ? c > 0 ? c - 1 : l.length - 1 : c + 1 < l.length ? c + 1 : 0;
            l[f].focus();
            break;
          }
        }
    };
    return o.addEventListener("keydown", a), () => {
      o.removeEventListener("keydown", a);
    };
  }, [r, e, t, n]);
}
function h0({
  children: e = null,
  className: t = "",
  disabled: n = !1,
  hitAreaMargins: r,
  id: o,
  onBlur: a,
  onClick: i,
  onDragging: s,
  onFocus: l,
  onPointerDown: c,
  onPointerUp: f,
  style: p = {},
  tabIndex: m = 0,
  tagName: h = "div",
  ...g
}) {
  var v, b;
  const y = Ke(null), w = Ke({
    onClick: i,
    onDragging: s,
    onPointerDown: c,
    onPointerUp: f
  });
  Je(() => {
    w.current.onClick = i, w.current.onDragging = s, w.current.onPointerDown = c, w.current.onPointerUp = f;
  });
  const x = Jt(us);
  if (x === null)
    throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
  const {
    direction: S,
    groupId: C,
    registerResizeHandle: N,
    startDragging: P,
    stopDragging: M,
    panelGroupElement: _
  } = x, B = rd(o), [T, k] = Qe("inactive"), [G, $] = Qe(!1), [U, W] = Qe(null), F = Ke({
    state: T
  });
  qn(() => {
    F.current.state = T;
  }), Je(() => {
    if (n)
      W(null);
    else {
      const te = N(B);
      W(() => te);
    }
  }, [n, B, N]);
  const D = (v = r == null ? void 0 : r.coarse) !== null && v !== void 0 ? v : 15, L = (b = r == null ? void 0 : r.fine) !== null && b !== void 0 ? b : 5;
  return Je(() => {
    if (n || U == null)
      return;
    const te = y.current;
    he(te, "Element ref not attached");
    let I = !1;
    return SI(B, te, S, {
      coarse: D,
      fine: L
    }, (H, V, Z) => {
      if (!V) {
        k("inactive");
        return;
      }
      switch (H) {
        case "down": {
          k("drag"), I = !1, he(Z, 'Expected event to be defined for "down" action'), P(B, Z);
          const {
            onDragging: A,
            onPointerDown: Y
          } = w.current;
          A == null || A(!0), Y == null || Y();
          break;
        }
        case "move": {
          const {
            state: A
          } = F.current;
          I = !0, A !== "drag" && k("hover"), he(Z, 'Expected event to be defined for "move" action'), U(Z);
          break;
        }
        case "up": {
          k("hover"), M();
          const {
            onClick: A,
            onDragging: Y,
            onPointerUp: J
          } = w.current;
          Y == null || Y(!1), J == null || J(), I || A == null || A();
          break;
        }
      }
    });
  }, [D, S, n, L, N, B, U, P, M]), LI({
    disabled: n,
    handleId: B,
    resizeHandler: U,
    panelGroupElement: _
  }), dn(h, {
    ...g,
    children: e,
    className: t,
    id: o,
    onBlur: () => {
      $(!1), a == null || a();
    },
    onFocus: () => {
      $(!0), l == null || l();
    },
    ref: y,
    role: "separator",
    style: {
      ...{
        touchAction: "none",
        userSelect: "none"
      },
      ...p
    },
    tabIndex: m,
    // CSS selectors
    [Ue.groupDirection]: S,
    [Ue.groupId]: C,
    [Ue.resizeHandle]: "",
    [Ue.resizeHandleActive]: T === "drag" ? "pointer" : G ? "keyboard" : void 0,
    [Ue.resizeHandleEnabled]: !n,
    [Ue.resizeHandleId]: B,
    [Ue.resizeHandleState]: T
  });
}
h0.displayName = "PanelResizeHandle";
const IY = ({ className: e, ...t }) => /* @__PURE__ */ d(
  m0,
  {
    className: R("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", e),
    ...t
  }
), kY = Xw, $Y = ({
  withHandle: e,
  className: t,
  ...n
}) => /* @__PURE__ */ d(
  h0,
  {
    className: R(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      t
    ),
    ...n,
    children: e && /* @__PURE__ */ d("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ d(HP, { className: "h-2.5 w-2.5" }) })
  }
), FI = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ d("table", { ref: n, className: R("w-full caption-bottom text-sm", e), ...t }) })
);
FI.displayName = "Table";
const BI = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("thead", { ref: n, className: R("[&_tr]:border-b", e), ...t })
);
BI.displayName = "TableHeader";
const zI = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("tbody", { ref: n, className: R("[&_tr:last-child]:border-0", e), ...t })
);
zI.displayName = "TableBody";
const jI = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("tfoot", { ref: n, className: R("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e), ...t })
);
jI.displayName = "TableFooter";
const HI = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d(
    "tr",
    {
      ref: n,
      className: R("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", e),
      ...t
    }
  )
);
HI.displayName = "TableRow";
const WI = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d(
    "th",
    {
      ref: n,
      className: R(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        e
      ),
      ...t
    }
  )
);
WI.displayName = "TableHead";
const VI = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("td", { ref: n, className: R("p-4 align-middle [&:has([role=checkbox])]:pr-0", e), ...t })
);
VI.displayName = "TableCell";
const GI = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d("caption", { ref: n, className: R("mt-4 text-sm text-muted-foreground", e), ...t })
);
GI.displayName = "TableCaption";
function we(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function yt(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function lt(e, t) {
  const n = we(e);
  return isNaN(t) ? yt(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function $t(e, t) {
  const n = we(e);
  if (isNaN(t)) return yt(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = yt(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const a = o.getDate();
  return r >= a ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const id = 6048e5, UI = 864e5;
let KI = {};
function ua() {
  return KI;
}
function Qt(e, t) {
  var s, l, c, f;
  const n = ua(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = we(e), a = o.getDay(), i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function tr(e) {
  return Qt(e, { weekStartsOn: 1 });
}
function v0(e) {
  const t = we(e), n = t.getFullYear(), r = yt(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = tr(r), a = yt(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const i = tr(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function Dr(e) {
  const t = we(e);
  return t.setHours(0, 0, 0, 0), t;
}
function hi(e) {
  const t = we(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Yt(e, t) {
  const n = Dr(e), r = Dr(t), o = +n - hi(n), a = +r - hi(r);
  return Math.round((o - a) / UI);
}
function YI(e) {
  const t = v0(e), n = yt(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), tr(n);
}
function rc(e, t) {
  const n = t * 7;
  return lt(e, n);
}
function qI(e, t) {
  return $t(e, t * 12);
}
function XI(e) {
  let t;
  return e.forEach(function(n) {
    const r = we(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function ZI(e) {
  let t;
  return e.forEach((n) => {
    const r = we(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function dt(e, t) {
  const n = Dr(e), r = Dr(t);
  return +n == +r;
}
function sd(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function QI(e) {
  if (!sd(e) && typeof e != "number")
    return !1;
  const t = we(e);
  return !isNaN(Number(t));
}
function $o(e, t) {
  const n = we(e), r = we(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
function JI(e, t, n) {
  const r = Qt(e, n), o = Qt(t, n), a = +r - hi(r), i = +o - hi(o);
  return Math.round((a - i) / id);
}
function ld(e) {
  const t = we(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function ft(e) {
  const t = we(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function g0(e) {
  const t = we(e), n = yt(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function cd(e, t) {
  var s, l, c, f;
  const n = ua(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = we(e), a = o.getDay(), i = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function b0(e) {
  return cd(e, { weekStartsOn: 1 });
}
const e2 = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, t2 = (e, t, n) => {
  let r;
  const o = e2[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function nl(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const n2 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, r2 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, o2 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, a2 = {
  date: nl({
    formats: n2,
    defaultWidth: "full"
  }),
  time: nl({
    formats: r2,
    defaultWidth: "full"
  }),
  dateTime: nl({
    formats: o2,
    defaultWidth: "full"
  })
}, i2 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, s2 = (e, t, n, r) => i2[e];
function fo(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const l2 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, c2 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, u2 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, d2 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, f2 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, p2 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, m2 = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, h2 = {
  ordinalNumber: m2,
  era: fo({
    values: l2,
    defaultWidth: "wide"
  }),
  quarter: fo({
    values: c2,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: fo({
    values: u2,
    defaultWidth: "wide"
  }),
  day: fo({
    values: d2,
    defaultWidth: "wide"
  }),
  dayPeriod: fo({
    values: f2,
    defaultWidth: "wide",
    formattingValues: p2,
    defaultFormattingWidth: "wide"
  })
};
function po(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? g2(s, (p) => p.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      v2(s, (p) => p.test(i))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(l) : l, c = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(c)
    ) : c;
    const f = t.slice(i.length);
    return { value: c, rest: f };
  };
}
function v2(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function g2(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function b2(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(o.length);
    return { value: i, rest: s };
  };
}
const y2 = /^(\d+)(th|st|nd|rd)?/i, w2 = /\d+/i, x2 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, S2 = {
  any: [/^b/i, /^(a|c)/i]
}, C2 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, P2 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, N2 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, E2 = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, _2 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, R2 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, T2 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, M2 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, A2 = {
  ordinalNumber: b2({
    matchPattern: y2,
    parsePattern: w2,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: po({
    matchPatterns: x2,
    defaultMatchWidth: "wide",
    parsePatterns: S2,
    defaultParseWidth: "any"
  }),
  quarter: po({
    matchPatterns: C2,
    defaultMatchWidth: "wide",
    parsePatterns: P2,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: po({
    matchPatterns: N2,
    defaultMatchWidth: "wide",
    parsePatterns: E2,
    defaultParseWidth: "any"
  }),
  day: po({
    matchPatterns: _2,
    defaultMatchWidth: "wide",
    parsePatterns: R2,
    defaultParseWidth: "any"
  }),
  dayPeriod: po({
    matchPatterns: T2,
    defaultMatchWidth: "any",
    parsePatterns: M2,
    defaultParseWidth: "any"
  })
}, y0 = {
  code: "en-US",
  formatDistance: t2,
  formatLong: a2,
  formatRelative: s2,
  localize: h2,
  match: A2,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function O2(e) {
  const t = we(e);
  return Yt(t, g0(t)) + 1;
}
function w0(e) {
  const t = we(e), n = +tr(t) - +YI(t);
  return Math.round(n / id) + 1;
}
function x0(e, t) {
  var f, p, m, h;
  const n = we(e), r = n.getFullYear(), o = ua(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((p = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((h = (m = o.locale) == null ? void 0 : m.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, i = yt(e, 0);
  i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = Qt(i, t), l = yt(e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const c = Qt(l, t);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function D2(e, t) {
  var s, l, c, f;
  const n = ua(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = x0(e, t), a = yt(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Qt(a, t);
}
function S0(e, t) {
  const n = we(e), r = +Qt(n, t) - +D2(n, t);
  return Math.round(r / id) + 1;
}
function _e(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Nn = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return _e(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : _e(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return _e(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return _e(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return _e(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return _e(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return _e(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return _e(o, t.length);
  }
}, gr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Uf = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return Nn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = x0(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return _e(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : _e(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = v0(e);
    return _e(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return _e(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return _e(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return _e(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Nn.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return _e(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = S0(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : _e(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = w0(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : _e(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Nn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = O2(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : _e(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return _e(a, 2);
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return _e(a, t.length);
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return _e(o, t.length);
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = gr.noon : r === 0 ? o = gr.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = gr.evening : r >= 12 ? o = gr.afternoon : r >= 4 ? o = gr.morning : o = gr.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return Nn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Nn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : _e(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : _e(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Nn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Nn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Nn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Yf(r);
      case "XXXX":
      case "XX":
        return Vn(r);
      case "XXXXX":
      case "XXX":
      default:
        return Vn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Yf(r);
      case "xxxx":
      case "xx":
        return Vn(r);
      case "xxxxx":
      case "xxx":
      default:
        return Vn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Kf(r, ":");
      case "OOOO":
      default:
        return "GMT" + Vn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Kf(r, ":");
      case "zzzz":
      default:
        return "GMT" + Vn(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return _e(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return _e(r, t.length);
  }
};
function Kf(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + _e(a, 2);
}
function Yf(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + _e(Math.abs(e) / 60, 2) : Vn(e, t);
}
function Vn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = _e(Math.trunc(r / 60), 2), a = _e(r % 60, 2);
  return n + o + t + a;
}
const qf = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, C0 = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, I2 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return qf(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", qf(r, t)).replace("{{time}}", C0(o, t));
}, k2 = {
  p: C0,
  P: I2
}, $2 = /^D+$/, L2 = /^Y+$/, F2 = ["D", "DD", "YY", "YYYY"];
function B2(e) {
  return $2.test(e);
}
function z2(e) {
  return L2.test(e);
}
function j2(e, t, n) {
  const r = H2(e, t, n);
  if (console.warn(r), F2.includes(e)) throw new RangeError(r);
}
function H2(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const W2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, V2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, G2 = /^'([^]*?)'?$/, U2 = /''/g, K2 = /[a-zA-Z]/;
function cr(e, t, n) {
  var f, p, m, h, g, v, b, y;
  const r = ua(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? y0, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((p = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((h = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, i = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (g = n == null ? void 0 : n.locale) == null ? void 0 : g.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((y = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : y.weekStartsOn) ?? 0, s = we(e);
  if (!QI(s))
    throw new RangeError("Invalid time value");
  let l = t.match(V2).map((w) => {
    const x = w[0];
    if (x === "p" || x === "P") {
      const S = k2[x];
      return S(w, o.formatLong);
    }
    return w;
  }).join("").match(W2).map((w) => {
    if (w === "''")
      return { isToken: !1, value: "'" };
    const x = w[0];
    if (x === "'")
      return { isToken: !1, value: Y2(w) };
    if (Uf[x])
      return { isToken: !0, value: w };
    if (x.match(K2))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: w };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
  const c = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return l.map((w) => {
    if (!w.isToken) return w.value;
    const x = w.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && z2(x) || !(n != null && n.useAdditionalDayOfYearTokens) && B2(x)) && j2(x, t, String(e));
    const S = Uf[x[0]];
    return S(s, x, o.localize, c);
  }).join("");
}
function Y2(e) {
  const t = e.match(G2);
  return t ? t[1].replace(U2, "'") : e;
}
function q2(e) {
  const t = we(e), n = t.getFullYear(), r = t.getMonth(), o = yt(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function X2(e) {
  return Math.trunc(+we(e) / 1e3);
}
function Z2(e) {
  const t = we(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Q2(e, t) {
  return JI(
    Z2(e),
    ft(e),
    t
  ) + 1;
}
function oc(e, t) {
  const n = we(e), r = we(t);
  return n.getTime() > r.getTime();
}
function P0(e, t) {
  const n = we(e), r = we(t);
  return +n < +r;
}
function ud(e, t) {
  const n = we(e), r = we(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function J2(e, t) {
  const n = we(e), r = we(t);
  return n.getFullYear() === r.getFullYear();
}
function rl(e, t) {
  return lt(e, -t);
}
function ol(e, t) {
  const n = we(e), r = n.getFullYear(), o = n.getDate(), a = yt(e, 0);
  a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
  const i = q2(a);
  return n.setMonth(t, Math.min(o, i)), n;
}
function Xf(e, t) {
  const n = we(e);
  return isNaN(+n) ? yt(e, NaN) : (n.setFullYear(t), n);
}
var ue = function() {
  return ue = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, ue.apply(this, arguments);
};
function ek(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function N0(e, t, n) {
  for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function da(e) {
  return e.mode === "multiple";
}
function fa(e) {
  return e.mode === "range";
}
function ms(e) {
  return e.mode === "single";
}
var tk = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function nk(e, t) {
  return cr(e, "LLLL y", t);
}
function rk(e, t) {
  return cr(e, "d", t);
}
function ok(e, t) {
  return cr(e, "LLLL", t);
}
function ak(e) {
  return "".concat(e);
}
function ik(e, t) {
  return cr(e, "cccccc", t);
}
function sk(e, t) {
  return cr(e, "yyyy", t);
}
var lk = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: nk,
  formatDay: rk,
  formatMonthCaption: ok,
  formatWeekNumber: ak,
  formatWeekdayName: ik,
  formatYearCaption: sk
}), ck = function(e, t, n) {
  return cr(e, "do MMMM (EEEE)", n);
}, uk = function() {
  return "Month: ";
}, dk = function() {
  return "Go to next month";
}, fk = function() {
  return "Go to previous month";
}, pk = function(e, t) {
  return cr(e, "cccc", t);
}, mk = function(e) {
  return "Week n. ".concat(e);
}, hk = function() {
  return "Year: ";
}, vk = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: ck,
  labelMonthDropdown: uk,
  labelNext: dk,
  labelPrevious: fk,
  labelWeekNumber: mk,
  labelWeekday: pk,
  labelYearDropdown: hk
});
function gk() {
  var e = "buttons", t = tk, n = y0, r = {}, o = {}, a = 1, i = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: lk,
    labels: vk,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: i,
    today: s,
    mode: "default"
  };
}
function bk(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, i = e.toDate;
  return r ? a = ft(r) : t && (a = new Date(t, 0, 1)), o ? i = ld(o) : n && (i = new Date(n, 11, 31)), {
    fromDate: a ? Dr(a) : void 0,
    toDate: i ? Dr(i) : void 0
  };
}
var E0 = hn(void 0);
function yk(e) {
  var t, n = e.initialProps, r = gk(), o = bk(n), a = o.fromDate, i = o.toDate, s = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  s !== "buttons" && (!a || !i) && (s = "buttons");
  var l;
  (ms(n) || da(n) || fa(n)) && (l = n.onSelect);
  var c = ue(ue(ue({}, r), n), { captionLayout: s, classNames: ue(ue({}, r.classNames), n.classNames), components: ue({}, n.components), formatters: ue(ue({}, r.formatters), n.formatters), fromDate: a, labels: ue(ue({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: ue(ue({}, r.modifiers), n.modifiers), modifiersClassNames: ue(ue({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: l, styles: ue(ue({}, r.styles), n.styles), toDate: i });
  return d(E0.Provider, { value: c, children: e.children });
}
function Oe() {
  var e = Jt(E0);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function _0(e) {
  var t = Oe(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return d("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: n }) });
}
function wk(e) {
  return d("svg", ue({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: d("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function R0(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, i = e.caption, s = e.className, l = e.style, c = Oe(), f = (n = (t = c.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : wk;
  return K("div", { className: s, style: l, children: [d("span", { className: c.classNames.vhidden, children: e["aria-label"] }), d("select", { name: e.name, "aria-label": e["aria-label"], className: c.classNames.dropdown, style: c.styles.dropdown, value: o, onChange: r, children: a }), K("div", { className: c.classNames.caption_label, style: c.styles.caption_label, "aria-hidden": "true", children: [i, d(f, { className: c.classNames.dropdown_icon, style: c.styles.dropdown_icon })] })] });
}
function xk(e) {
  var t, n = Oe(), r = n.fromDate, o = n.toDate, a = n.styles, i = n.locale, s = n.formatters.formatMonthCaption, l = n.classNames, c = n.components, f = n.labels.labelMonthDropdown;
  if (!r)
    return d(ze, {});
  if (!o)
    return d(ze, {});
  var p = [];
  if (J2(r, o))
    for (var m = ft(r), h = r.getMonth(); h <= o.getMonth(); h++)
      p.push(ol(m, h));
  else
    for (var m = ft(/* @__PURE__ */ new Date()), h = 0; h <= 11; h++)
      p.push(ol(m, h));
  var g = function(b) {
    var y = Number(b.target.value), w = ol(ft(e.displayMonth), y);
    e.onChange(w);
  }, v = (t = c == null ? void 0 : c.Dropdown) !== null && t !== void 0 ? t : R0;
  return d(v, { name: "months", "aria-label": f(), className: l.dropdown_month, style: a.dropdown_month, onChange: g, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }), children: p.map(function(b) {
    return d("option", { value: b.getMonth(), children: s(b, { locale: i }) }, b.getMonth());
  }) });
}
function Sk(e) {
  var t, n = e.displayMonth, r = Oe(), o = r.fromDate, a = r.toDate, i = r.locale, s = r.styles, l = r.classNames, c = r.components, f = r.formatters.formatYearCaption, p = r.labels.labelYearDropdown, m = [];
  if (!o)
    return d(ze, {});
  if (!a)
    return d(ze, {});
  for (var h = o.getFullYear(), g = a.getFullYear(), v = h; v <= g; v++)
    m.push(Xf(g0(/* @__PURE__ */ new Date()), v));
  var b = function(w) {
    var x = Xf(ft(n), Number(w.target.value));
    e.onChange(x);
  }, y = (t = c == null ? void 0 : c.Dropdown) !== null && t !== void 0 ? t : R0;
  return d(y, { name: "years", "aria-label": p(), className: l.dropdown_year, style: s.dropdown_year, onChange: b, value: n.getFullYear(), caption: f(n, { locale: i }), children: m.map(function(w) {
    return d("option", { value: w.getFullYear(), children: f(w, { locale: i }) }, w.getFullYear());
  }) });
}
function Ck(e, t) {
  var n = Qe(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function Pk(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, i = e.fromDate, s = e.numberOfMonths, l = s === void 0 ? 1 : s;
  if (a && $o(a, o) < 0) {
    var c = -1 * (l - 1);
    o = $t(a, c);
  }
  return i && $o(o, i) < 0 && (o = i), ft(o);
}
function Nk() {
  var e = Oe(), t = Pk(e), n = Ck(t, e.month), r = n[0], o = n[1], a = function(i) {
    var s;
    if (!e.disableNavigation) {
      var l = ft(i);
      o(l), (s = e.onMonthChange) === null || s === void 0 || s.call(e, l);
    }
  };
  return [r, a];
}
function Ek(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = ft(e), a = ft($t(o, r)), i = $o(a, o), s = [], l = 0; l < i; l++) {
    var c = $t(o, l);
    s.push(c);
  }
  return n && (s = s.reverse()), s;
}
function _k(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = ft(e);
    if (!n)
      return $t(s, i);
    var l = $o(n, e);
    if (!(l < a))
      return $t(s, i);
  }
}
function Rk(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = ft(e);
    if (!n)
      return $t(s, -i);
    var l = $o(s, n);
    if (!(l <= 0))
      return $t(s, -i);
  }
}
var T0 = hn(void 0);
function Tk(e) {
  var t = Oe(), n = Nk(), r = n[0], o = n[1], a = Ek(r, t), i = _k(r, t), s = Rk(r, t), l = function(p) {
    return a.some(function(m) {
      return ud(p, m);
    });
  }, c = function(p, m) {
    l(p) || (m && P0(p, m) ? o($t(p, 1 + t.numberOfMonths * -1)) : o(p));
  }, f = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: c,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: l
  };
  return d(T0.Provider, { value: f, children: e.children });
}
function pa() {
  var e = Jt(T0);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Zf(e) {
  var t, n = Oe(), r = n.classNames, o = n.styles, a = n.components, i = pa().goToMonth, s = function(f) {
    i($t(f, e.displayIndex ? -e.displayIndex : 0));
  }, l = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : _0, c = d(l, { id: e.id, displayMonth: e.displayMonth });
  return K("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [d("div", { className: r.vhidden, children: c }), d(xk, { onChange: s, displayMonth: e.displayMonth }), d(Sk, { onChange: s, displayMonth: e.displayMonth })] });
}
function Mk(e) {
  return d("svg", ue({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: d("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Ak(e) {
  return d("svg", ue({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: d("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var vi = In(function(e, t) {
  var n = Oe(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var i = a.join(" "), s = ue(ue({}, o.button_reset), o.button);
  return e.style && Object.assign(s, e.style), d("button", ue({}, e, { ref: t, type: "button", className: i, style: s }));
});
function Ok(e) {
  var t, n, r = Oe(), o = r.dir, a = r.locale, i = r.classNames, s = r.styles, l = r.labels, c = l.labelPrevious, f = l.labelNext, p = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return d(ze, {});
  var m = c(e.previousMonth, { locale: a }), h = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), g = f(e.nextMonth, { locale: a }), v = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), b = (t = p == null ? void 0 : p.IconRight) !== null && t !== void 0 ? t : Ak, y = (n = p == null ? void 0 : p.IconLeft) !== null && n !== void 0 ? n : Mk;
  return K("div", { className: i.nav, style: s.nav, children: [!e.hidePrevious && d(vi, { name: "previous-month", "aria-label": m, className: h, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? d(b, { className: i.nav_icon, style: s.nav_icon }) : d(y, { className: i.nav_icon, style: s.nav_icon }) }), !e.hideNext && d(vi, { name: "next-month", "aria-label": g, className: v, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? d(y, { className: i.nav_icon, style: s.nav_icon }) : d(b, { className: i.nav_icon, style: s.nav_icon }) })] });
}
function Qf(e) {
  var t = Oe().numberOfMonths, n = pa(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, i = n.displayMonths, s = i.findIndex(function(g) {
    return ud(e.displayMonth, g);
  }), l = s === 0, c = s === i.length - 1, f = t > 1 && (l || !c), p = t > 1 && (c || !l), m = function() {
    r && a(r);
  }, h = function() {
    o && a(o);
  };
  return d(Ok, { displayMonth: e.displayMonth, hideNext: f, hidePrevious: p, nextMonth: o, previousMonth: r, onPreviousClick: m, onNextClick: h });
}
function Dk(e) {
  var t, n = Oe(), r = n.classNames, o = n.disableNavigation, a = n.styles, i = n.captionLayout, s = n.components, l = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : _0, c;
  return o ? c = d(l, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? c = d(Zf, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? c = K(ze, { children: [d(Zf, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), d(Qf, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : c = K(ze, { children: [d(l, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), d(Qf, { displayMonth: e.displayMonth, id: e.id })] }), d("div", { className: r.caption, style: a.caption, children: c });
}
function Ik(e) {
  var t = Oe(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? d("tfoot", { className: o, style: r.tfoot, children: d("tr", { children: d("td", { colSpan: 8, children: n }) }) }) : d(ze, {});
}
function kk(e, t, n) {
  for (var r = n ? tr(/* @__PURE__ */ new Date()) : Qt(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var i = lt(r, a);
    o.push(i);
  }
  return o;
}
function $k() {
  var e = Oe(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, l = e.labels.labelWeekday, c = kk(o, a, i);
  return K("tr", { style: n.head_row, className: t.head_row, children: [r && d("td", { style: n.head_cell, className: t.head_cell }), c.map(function(f, p) {
    return d("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": l(f, { locale: o }), children: s(f, { locale: o }) }, p);
  })] });
}
function Lk() {
  var e, t = Oe(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : $k;
  return d("thead", { style: r.head, className: n.head, children: d(a, {}) });
}
function Fk(e) {
  var t = Oe(), n = t.locale, r = t.formatters.formatDay;
  return d(ze, { children: r(e.date, { locale: n }) });
}
var dd = hn(void 0);
function Bk(e) {
  if (!da(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return d(dd.Provider, { value: t, children: e.children });
  }
  return d(zk, { initialProps: e.initialProps, children: e.children });
}
function zk(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, i = function(c, f, p) {
    var m, h;
    (m = t.onDayClick) === null || m === void 0 || m.call(t, c, f, p);
    var g = !!(f.selected && o && (r == null ? void 0 : r.length) === o);
    if (!g) {
      var v = !!(!f.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var b = r ? N0([], r) : [];
        if (f.selected) {
          var y = b.findIndex(function(w) {
            return dt(c, w);
          });
          b.splice(y, 1);
        } else
          b.push(c);
        (h = t.onSelect) === null || h === void 0 || h.call(t, b, c, f, p);
      }
    }
  }, s = {
    disabled: []
  };
  r && s.disabled.push(function(c) {
    var f = a && r.length > a - 1, p = r.some(function(m) {
      return dt(m, c);
    });
    return !!(f && !p);
  });
  var l = {
    selected: r,
    onDayClick: i,
    modifiers: s
  };
  return d(dd.Provider, { value: l, children: n });
}
function fd() {
  var e = Jt(dd);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function jk(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? dt(o, e) && dt(r, e) ? void 0 : dt(o, e) ? { from: o, to: void 0 } : dt(r, e) ? void 0 : oc(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? oc(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? P0(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var pd = hn(void 0);
function Hk(e) {
  if (!fa(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return d(pd.Provider, { value: t, children: e.children });
  }
  return d(Wk, { initialProps: e.initialProps, children: e.children });
}
function Wk(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, i = o.to, s = t.min, l = t.max, c = function(h, g, v) {
    var b, y;
    (b = t.onDayClick) === null || b === void 0 || b.call(t, h, g, v);
    var w = jk(h, r);
    (y = t.onSelect) === null || y === void 0 || y.call(t, w, h, g, v);
  }, f = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (f.range_start = [a], i ? (f.range_end = [i], dt(a, i) || (f.range_middle = [
    {
      after: a,
      before: i
    }
  ])) : f.range_end = [a]) : i && (f.range_start = [i], f.range_end = [i]), s && (a && !i && f.disabled.push({
    after: rl(a, s - 1),
    before: lt(a, s - 1)
  }), a && i && f.disabled.push({
    after: a,
    before: lt(a, s - 1)
  }), !a && i && f.disabled.push({
    after: rl(i, s - 1),
    before: lt(i, s - 1)
  })), l) {
    if (a && !i && (f.disabled.push({
      before: lt(a, -l + 1)
    }), f.disabled.push({
      after: lt(a, l - 1)
    })), a && i) {
      var p = Yt(i, a) + 1, m = l - p;
      f.disabled.push({
        before: rl(a, m)
      }), f.disabled.push({
        after: lt(i, m)
      });
    }
    !a && i && (f.disabled.push({
      before: lt(i, -l + 1)
    }), f.disabled.push({
      after: lt(i, l - 1)
    }));
  }
  return d(pd.Provider, { value: { selected: r, onDayClick: c, modifiers: f }, children: n });
}
function md() {
  var e = Jt(pd);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Ua(e) {
  return Array.isArray(e) ? N0([], e) : e !== void 0 ? [e] : [];
}
function Vk(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = Ua(o);
  }), t;
}
var Lt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Lt || (Lt = {}));
var Gk = Lt.Selected, ln = Lt.Disabled, Uk = Lt.Hidden, Kk = Lt.Today, al = Lt.RangeEnd, il = Lt.RangeMiddle, sl = Lt.RangeStart, Yk = Lt.Outside;
function qk(e, t, n) {
  var r, o = (r = {}, r[Gk] = Ua(e.selected), r[ln] = Ua(e.disabled), r[Uk] = Ua(e.hidden), r[Kk] = [e.today], r[al] = [], r[il] = [], r[sl] = [], r[Yk] = [], r);
  return e.fromDate && o[ln].push({ before: e.fromDate }), e.toDate && o[ln].push({ after: e.toDate }), da(e) ? o[ln] = o[ln].concat(t.modifiers[ln]) : fa(e) && (o[ln] = o[ln].concat(n.modifiers[ln]), o[sl] = n.modifiers[sl], o[il] = n.modifiers[il], o[al] = n.modifiers[al]), o;
}
var M0 = hn(void 0);
function Xk(e) {
  var t = Oe(), n = fd(), r = md(), o = qk(t, n, r), a = Vk(t.modifiers), i = ue(ue({}, o), a);
  return d(M0.Provider, { value: i, children: e.children });
}
function A0() {
  var e = Jt(M0);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function Zk(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Qk(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Jk(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function e$(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function t$(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function n$(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var a = Yt(o, r) < 0;
    a && (n = [o, r], r = n[0], o = n[1]);
    var i = Yt(e, r) >= 0 && Yt(o, e) >= 0;
    return i;
  }
  return o ? dt(o, e) : r ? dt(r, e) : !1;
}
function r$(e) {
  return sd(e);
}
function o$(e) {
  return Array.isArray(e) && e.every(sd);
}
function a$(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (r$(n))
      return dt(e, n);
    if (o$(n))
      return n.includes(e);
    if (Qk(n))
      return n$(e, n);
    if (t$(n))
      return n.dayOfWeek.includes(e.getDay());
    if (Zk(n)) {
      var r = Yt(n.before, e), o = Yt(n.after, e), a = r > 0, i = o < 0, s = oc(n.before, n.after);
      return s ? i && a : a || i;
    }
    return Jk(n) ? Yt(e, n.after) > 0 : e$(n) ? Yt(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function hd(e, t, n) {
  var r = Object.keys(t).reduce(function(a, i) {
    var s = t[i];
    return a$(e, s) && a.push(i), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !ud(e, n) && (o.outside = !0), o;
}
function i$(e, t) {
  for (var n = ft(e[0]), r = ld(e[e.length - 1]), o, a, i = n; i <= r; ) {
    var s = hd(i, t), l = !s.disabled && !s.hidden;
    if (!l) {
      i = lt(i, 1);
      continue;
    }
    if (s.selected)
      return i;
    s.today && !a && (a = i), o || (o = i), i = lt(i, 1);
  }
  return a || o;
}
var s$ = 365;
function O0(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, i = t.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, l = o.weekStartsOn, c = o.fromDate, f = o.toDate, p = o.locale, m = {
    day: lt,
    week: rc,
    month: $t,
    year: qI,
    startOfWeek: function(b) {
      return o.ISOWeek ? tr(b) : Qt(b, { locale: p, weekStartsOn: l });
    },
    endOfWeek: function(b) {
      return o.ISOWeek ? b0(b) : cd(b, { locale: p, weekStartsOn: l });
    }
  }, h = m[n](e, r === "after" ? 1 : -1);
  r === "before" && c ? h = XI([c, h]) : r === "after" && f && (h = ZI([f, h]));
  var g = !0;
  if (a) {
    var v = hd(h, a);
    g = !v.disabled && !v.hidden;
  }
  return g ? h : s.count > s$ ? s.lastFocused : O0(h, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: ue(ue({}, s), { count: s.count + 1 })
  });
}
var D0 = hn(void 0);
function l$(e) {
  var t = pa(), n = A0(), r = Qe(), o = r[0], a = r[1], i = Qe(), s = i[0], l = i[1], c = i$(t.displayMonths, n), f = o ?? (s && t.isDateDisplayed(s)) ? s : c, p = function() {
    l(o), a(void 0);
  }, m = function(b) {
    a(b);
  }, h = Oe(), g = function(b, y) {
    if (o) {
      var w = O0(o, {
        moveBy: b,
        direction: y,
        context: h,
        modifiers: n
      });
      dt(o, w) || (t.goToDate(w, o), m(w));
    }
  }, v = {
    focusedDay: o,
    focusTarget: f,
    blur: p,
    focus: m,
    focusDayAfter: function() {
      return g("day", "after");
    },
    focusDayBefore: function() {
      return g("day", "before");
    },
    focusWeekAfter: function() {
      return g("week", "after");
    },
    focusWeekBefore: function() {
      return g("week", "before");
    },
    focusMonthBefore: function() {
      return g("month", "before");
    },
    focusMonthAfter: function() {
      return g("month", "after");
    },
    focusYearBefore: function() {
      return g("year", "before");
    },
    focusYearAfter: function() {
      return g("year", "after");
    },
    focusStartOfWeek: function() {
      return g("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return g("endOfWeek", "after");
    }
  };
  return d(D0.Provider, { value: v, children: e.children });
}
function vd() {
  var e = Jt(D0);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function c$(e, t) {
  var n = A0(), r = hd(e, n, t);
  return r;
}
var gd = hn(void 0);
function u$(e) {
  if (!ms(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return d(gd.Provider, { value: t, children: e.children });
  }
  return d(d$, { initialProps: e.initialProps, children: e.children });
}
function d$(e) {
  var t = e.initialProps, n = e.children, r = function(a, i, s) {
    var l, c, f;
    if ((l = t.onDayClick) === null || l === void 0 || l.call(t, a, i, s), i.selected && !t.required) {
      (c = t.onSelect) === null || c === void 0 || c.call(t, void 0, a, i, s);
      return;
    }
    (f = t.onSelect) === null || f === void 0 || f.call(t, a, a, i, s);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return d(gd.Provider, { value: o, children: n });
}
function I0() {
  var e = Jt(gd);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function f$(e, t) {
  var n = Oe(), r = I0(), o = fd(), a = md(), i = vd(), s = i.focusDayAfter, l = i.focusDayBefore, c = i.focusWeekAfter, f = i.focusWeekBefore, p = i.blur, m = i.focus, h = i.focusMonthBefore, g = i.focusMonthAfter, v = i.focusYearBefore, b = i.focusYearAfter, y = i.focusStartOfWeek, w = i.focusEndOfWeek, x = function(F) {
    var D, L, ee, te;
    ms(n) ? (D = r.onDayClick) === null || D === void 0 || D.call(r, e, t, F) : da(n) ? (L = o.onDayClick) === null || L === void 0 || L.call(o, e, t, F) : fa(n) ? (ee = a.onDayClick) === null || ee === void 0 || ee.call(a, e, t, F) : (te = n.onDayClick) === null || te === void 0 || te.call(n, e, t, F);
  }, S = function(F) {
    var D;
    m(e), (D = n.onDayFocus) === null || D === void 0 || D.call(n, e, t, F);
  }, C = function(F) {
    var D;
    p(), (D = n.onDayBlur) === null || D === void 0 || D.call(n, e, t, F);
  }, N = function(F) {
    var D;
    (D = n.onDayMouseEnter) === null || D === void 0 || D.call(n, e, t, F);
  }, P = function(F) {
    var D;
    (D = n.onDayMouseLeave) === null || D === void 0 || D.call(n, e, t, F);
  }, M = function(F) {
    var D;
    (D = n.onDayPointerEnter) === null || D === void 0 || D.call(n, e, t, F);
  }, _ = function(F) {
    var D;
    (D = n.onDayPointerLeave) === null || D === void 0 || D.call(n, e, t, F);
  }, B = function(F) {
    var D;
    (D = n.onDayTouchCancel) === null || D === void 0 || D.call(n, e, t, F);
  }, T = function(F) {
    var D;
    (D = n.onDayTouchEnd) === null || D === void 0 || D.call(n, e, t, F);
  }, k = function(F) {
    var D;
    (D = n.onDayTouchMove) === null || D === void 0 || D.call(n, e, t, F);
  }, G = function(F) {
    var D;
    (D = n.onDayTouchStart) === null || D === void 0 || D.call(n, e, t, F);
  }, $ = function(F) {
    var D;
    (D = n.onDayKeyUp) === null || D === void 0 || D.call(n, e, t, F);
  }, U = function(F) {
    var D;
    switch (F.key) {
      case "ArrowLeft":
        F.preventDefault(), F.stopPropagation(), n.dir === "rtl" ? s() : l();
        break;
      case "ArrowRight":
        F.preventDefault(), F.stopPropagation(), n.dir === "rtl" ? l() : s();
        break;
      case "ArrowDown":
        F.preventDefault(), F.stopPropagation(), c();
        break;
      case "ArrowUp":
        F.preventDefault(), F.stopPropagation(), f();
        break;
      case "PageUp":
        F.preventDefault(), F.stopPropagation(), F.shiftKey ? v() : h();
        break;
      case "PageDown":
        F.preventDefault(), F.stopPropagation(), F.shiftKey ? b() : g();
        break;
      case "Home":
        F.preventDefault(), F.stopPropagation(), y();
        break;
      case "End":
        F.preventDefault(), F.stopPropagation(), w();
        break;
    }
    (D = n.onDayKeyDown) === null || D === void 0 || D.call(n, e, t, F);
  }, W = {
    onClick: x,
    onFocus: S,
    onBlur: C,
    onKeyDown: U,
    onKeyUp: $,
    onMouseEnter: N,
    onMouseLeave: P,
    onPointerEnter: M,
    onPointerLeave: _,
    onTouchCancel: B,
    onTouchEnd: T,
    onTouchMove: k,
    onTouchStart: G
  };
  return W;
}
function p$() {
  var e = Oe(), t = I0(), n = fd(), r = md(), o = ms(e) ? t.selected : da(e) ? n.selected : fa(e) ? r.selected : void 0;
  return o;
}
function m$(e) {
  return Object.values(Lt).includes(e);
}
function h$(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (m$(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function v$(e, t) {
  var n = ue({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = ue(ue({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function g$(e, t, n) {
  var r, o, a, i = Oe(), s = vd(), l = c$(e, t), c = f$(e, l), f = p$(), p = !!(i.onDayClick || i.mode !== "default");
  Je(function() {
    var N;
    l.outside || s.focusedDay && p && dt(s.focusedDay, e) && ((N = n.current) === null || N === void 0 || N.focus());
  }, [
    s.focusedDay,
    e,
    n,
    p,
    l.outside
  ]);
  var m = h$(i, l).join(" "), h = v$(i, l), g = !!(l.outside && !i.showOutsideDays || l.hidden), v = (a = (o = i.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : Fk, b = d(v, { date: e, displayMonth: t, activeModifiers: l }), y = {
    style: h,
    className: m,
    children: b,
    role: "gridcell"
  }, w = s.focusTarget && dt(s.focusTarget, e) && !l.outside, x = s.focusedDay && dt(s.focusedDay, e), S = ue(ue(ue({}, y), (r = { disabled: l.disabled, role: "gridcell" }, r["aria-selected"] = l.selected, r.tabIndex = x || w ? 0 : -1, r)), c), C = {
    isButton: p,
    isHidden: g,
    activeModifiers: l,
    selectedDays: f,
    buttonProps: S,
    divProps: y
  };
  return C;
}
function b$(e) {
  var t = Ke(null), n = g$(e.date, e.displayMonth, t);
  return n.isHidden ? d("div", { role: "gridcell" }) : n.isButton ? d(vi, ue({ name: "day", ref: t }, n.buttonProps)) : d("div", ue({}, n.divProps));
}
function y$(e) {
  var t = e.number, n = e.dates, r = Oe(), o = r.onWeekNumberClick, a = r.styles, i = r.classNames, s = r.locale, l = r.labels.labelWeekNumber, c = r.formatters.formatWeekNumber, f = c(Number(t), { locale: s });
  if (!o)
    return d("span", { className: i.weeknumber, style: a.weeknumber, children: f });
  var p = l(Number(t), { locale: s }), m = function(h) {
    o(t, n, h);
  };
  return d(vi, { name: "week-number", "aria-label": p, className: i.weeknumber, style: a.weeknumber, onClick: m, children: f });
}
function w$(e) {
  var t, n, r = Oe(), o = r.styles, a = r.classNames, i = r.showWeekNumber, s = r.components, l = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : b$, c = (n = s == null ? void 0 : s.WeekNumber) !== null && n !== void 0 ? n : y$, f;
  return i && (f = d("td", { className: a.cell, style: o.cell, children: d(c, { number: e.weekNumber, dates: e.dates }) })), K("tr", { className: a.row, style: o.row, children: [f, e.dates.map(function(p) {
    return d("td", { className: a.cell, style: o.cell, role: "presentation", children: d(l, { displayMonth: e.displayMonth, date: p }) }, X2(p));
  })] });
}
function Jf(e, t, n) {
  for (var r = n != null && n.ISOWeek ? b0(t) : cd(t, n), o = n != null && n.ISOWeek ? tr(e) : Qt(e, n), a = Yt(r, o), i = [], s = 0; s <= a; s++)
    i.push(lt(o, s));
  var l = i.reduce(function(c, f) {
    var p = n != null && n.ISOWeek ? w0(f) : S0(f, n), m = c.find(function(h) {
      return h.weekNumber === p;
    });
    return m ? (m.dates.push(f), c) : (c.push({
      weekNumber: p,
      dates: [f]
    }), c);
  }, []);
  return l;
}
function x$(e, t) {
  var n = Jf(ft(e), ld(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = Q2(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], i = rc(a, 6 - r), s = Jf(rc(a, 1), i, t);
      n.push.apply(n, s);
    }
  }
  return n;
}
function S$(e) {
  var t, n, r, o = Oe(), a = o.locale, i = o.classNames, s = o.styles, l = o.hideHead, c = o.fixedWeeks, f = o.components, p = o.weekStartsOn, m = o.firstWeekContainsDate, h = o.ISOWeek, g = x$(e.displayMonth, {
    useFixedWeeks: !!c,
    ISOWeek: h,
    locale: a,
    weekStartsOn: p,
    firstWeekContainsDate: m
  }), v = (t = f == null ? void 0 : f.Head) !== null && t !== void 0 ? t : Lk, b = (n = f == null ? void 0 : f.Row) !== null && n !== void 0 ? n : w$, y = (r = f == null ? void 0 : f.Footer) !== null && r !== void 0 ? r : Ik;
  return K("table", { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!l && d(v, {}), d("tbody", { className: i.tbody, style: s.tbody, children: g.map(function(w) {
    return d(b, { displayMonth: e.displayMonth, dates: w.dates, weekNumber: w.weekNumber }, w.weekNumber);
  }) }), d(y, { displayMonth: e.displayMonth })] });
}
function C$() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var P$ = C$() ? Ai : Je, ll = !1, N$ = 0;
function ep() {
  return "react-day-picker-".concat(++N$);
}
function E$(e) {
  var t, n = e ?? (ll ? ep() : null), r = Qe(n), o = r[0], a = r[1];
  return P$(function() {
    o === null && a(ep());
  }, []), Je(function() {
    ll === !1 && (ll = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function _$(e) {
  var t, n, r = Oe(), o = r.dir, a = r.classNames, i = r.styles, s = r.components, l = pa().displayMonths, c = E$(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), f = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, p = [a.month], m = i.month, h = e.displayIndex === 0, g = e.displayIndex === l.length - 1, v = !h && !g;
  o === "rtl" && (t = [h, g], g = t[0], h = t[1]), h && (p.push(a.caption_start), m = ue(ue({}, m), i.caption_start)), g && (p.push(a.caption_end), m = ue(ue({}, m), i.caption_end)), v && (p.push(a.caption_between), m = ue(ue({}, m), i.caption_between));
  var b = (n = s == null ? void 0 : s.Caption) !== null && n !== void 0 ? n : Dk;
  return K("div", { className: p.join(" "), style: m, children: [d(b, { id: c, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), d(S$, { id: f, "aria-labelledby": c, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function R$(e) {
  var t = Oe(), n = t.classNames, r = t.styles;
  return d("div", { className: n.months, style: r.months, children: e.children });
}
function T$(e) {
  var t, n, r = e.initialProps, o = Oe(), a = vd(), i = pa(), s = Qe(!1), l = s[0], c = s[1];
  Je(function() {
    o.initialFocus && a.focusTarget && (l || (a.focus(a.focusTarget), c(!0)));
  }, [
    o.initialFocus,
    l,
    a.focus,
    a.focusTarget,
    a
  ]);
  var f = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && f.push(o.classNames.multiple_months), o.showWeekNumber && f.push(o.classNames.with_weeknumber);
  var p = ue(ue({}, o.styles.root), o.style), m = Object.keys(r).filter(function(g) {
    return g.startsWith("data-");
  }).reduce(function(g, v) {
    var b;
    return ue(ue({}, g), (b = {}, b[v] = r[v], b));
  }, {}), h = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : R$;
  return d("div", ue({ className: f.join(" "), style: p, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, m, { children: d(h, { children: i.displayMonths.map(function(g, v) {
    return d(_$, { displayIndex: v, displayMonth: g }, v);
  }) }) }));
}
function M$(e) {
  var t = e.children, n = ek(e, ["children"]);
  return d(yk, { initialProps: n, children: d(Tk, { children: d(u$, { initialProps: n, children: d(Bk, { initialProps: n, children: d(Hk, { initialProps: n, children: d(Xk, { children: d(l$, { children: t }) }) }) }) }) }) });
}
function A$(e) {
  return d(M$, ue({}, e, { children: d(T$, { initialProps: e }) }));
}
function O$({ className: e, classNames: t, showOutsideDays: n = !0, ...r }) {
  return /* @__PURE__ */ d(
    A$,
    {
      showOutsideDays: n,
      className: R("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: R(
          Rr({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: R(Rr({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: ({ ...o }) => /* @__PURE__ */ d(nh, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ d(jr, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
O$.displayName = "Calendar";
function D$(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function tp(e) {
  return D$(e) || Array.isArray(e);
}
function I$() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function bd(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((i) => {
    const s = e[i], l = t[i];
    return typeof s == "function" ? `${s}` == `${l}` : !tp(s) || !tp(l) ? s === l : bd(s, l);
  });
}
function np(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function k$(e, t) {
  if (e.length !== t.length) return !1;
  const n = np(e), r = np(t);
  return n.every((o, a) => {
    const i = r[a];
    return bd(o, i);
  });
}
function yd(e) {
  return typeof e == "number";
}
function ac(e) {
  return typeof e == "string";
}
function hs(e) {
  return typeof e == "boolean";
}
function rp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function We(e) {
  return Math.abs(e);
}
function wd(e) {
  return Math.sign(e);
}
function Eo(e, t) {
  return We(e - t);
}
function $$(e, t) {
  if (e === 0 || t === 0 || We(e) <= We(t)) return 0;
  const n = Eo(We(e), We(t));
  return We(n / e);
}
function L$(e) {
  return Math.round(e * 100) / 100;
}
function Lo(e) {
  return Fo(e).map(Number);
}
function Dt(e) {
  return e[ma(e)];
}
function ma(e) {
  return Math.max(0, e.length - 1);
}
function xd(e, t) {
  return t === ma(e);
}
function op(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Fo(e) {
  return Object.keys(e);
}
function k0(e, t) {
  return [e, t].reduce((n, r) => (Fo(r).forEach((o) => {
    const a = n[o], i = r[o], s = rp(a) && rp(i);
    n[o] = s ? k0(a, i) : i;
  }), n), {});
}
function ic(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function F$(e, t) {
  const n = {
    start: r,
    center: o,
    end: a
  };
  function r() {
    return 0;
  }
  function o(l) {
    return a(l) / 2;
  }
  function a(l) {
    return t - l;
  }
  function i(l, c) {
    return ac(e) ? n[e](l) : e(t, l, c);
  }
  return {
    measure: i
  };
}
function Bo() {
  let e = [];
  function t(o, a, i, s = {
    passive: !0
  }) {
    let l;
    if ("addEventListener" in o)
      o.addEventListener(a, i, s), l = () => o.removeEventListener(a, i, s);
    else {
      const c = o;
      c.addListener(i), l = () => c.removeListener(i);
    }
    return e.push(l), r;
  }
  function n() {
    e = e.filter((o) => o());
  }
  const r = {
    add: t,
    clear: n
  };
  return r;
}
function B$(e, t, n, r) {
  const o = Bo(), a = 1e3 / 60;
  let i = null, s = 0, l = 0;
  function c() {
    o.add(e, "visibilitychange", () => {
      e.hidden && g();
    });
  }
  function f() {
    h(), o.clear();
  }
  function p(b) {
    if (!l) return;
    i || (i = b, n(), n());
    const y = b - i;
    for (i = b, s += y; s >= a; )
      n(), s -= a;
    const w = s / a;
    r(w), l && (l = t.requestAnimationFrame(p));
  }
  function m() {
    l || (l = t.requestAnimationFrame(p));
  }
  function h() {
    t.cancelAnimationFrame(l), i = null, s = 0, l = 0;
  }
  function g() {
    i = null, s = 0;
  }
  return {
    init: c,
    destroy: f,
    start: m,
    stop: h,
    update: n,
    render: r
  };
}
function z$(e, t) {
  const n = t === "rtl", r = e === "y", o = r ? "y" : "x", a = r ? "x" : "y", i = !r && n ? -1 : 1, s = f(), l = p();
  function c(g) {
    const {
      height: v,
      width: b
    } = g;
    return r ? v : b;
  }
  function f() {
    return r ? "top" : n ? "right" : "left";
  }
  function p() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function m(g) {
    return g * i;
  }
  return {
    scroll: o,
    cross: a,
    startEdge: s,
    endEdge: l,
    measureSize: c,
    direction: m
  };
}
function nr(e = 0, t = 0) {
  const n = We(e - t);
  function r(c) {
    return c < e;
  }
  function o(c) {
    return c > t;
  }
  function a(c) {
    return r(c) || o(c);
  }
  function i(c) {
    return a(c) ? r(c) ? e : t : c;
  }
  function s(c) {
    return n ? c - n * Math.ceil((c - t) / n) : c;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: i,
    reachedAny: a,
    reachedMax: o,
    reachedMin: r,
    removeOffset: s
  };
}
function $0(e, t, n) {
  const {
    constrain: r
  } = nr(0, e), o = e + 1;
  let a = i(t);
  function i(m) {
    return n ? We((o + m) % o) : r(m);
  }
  function s() {
    return a;
  }
  function l(m) {
    return a = i(m), p;
  }
  function c(m) {
    return f().set(s() + m);
  }
  function f() {
    return $0(e, s(), n);
  }
  const p = {
    get: s,
    set: l,
    add: c,
    clone: f
  };
  return p;
}
function j$(e, t, n, r, o, a, i, s, l, c, f, p, m, h, g, v, b, y, w) {
  const {
    cross: x,
    direction: S
  } = e, C = ["INPUT", "SELECT", "TEXTAREA"], N = {
    passive: !1
  }, P = Bo(), M = Bo(), _ = nr(50, 225).constrain(h.measure(20)), B = {
    mouse: 300,
    touch: 400
  }, T = {
    mouse: 500,
    touch: 600
  }, k = g ? 43 : 25;
  let G = !1, $ = 0, U = 0, W = !1, F = !1, D = !1, L = !1;
  function ee(X) {
    if (!w) return;
    function q(oe) {
      (hs(w) || w(X, oe)) && Z(oe);
    }
    const z = t;
    P.add(z, "dragstart", (oe) => oe.preventDefault(), N).add(z, "touchmove", () => {
    }, N).add(z, "touchend", () => {
    }).add(z, "touchstart", q).add(z, "mousedown", q).add(z, "touchcancel", Y).add(z, "contextmenu", Y).add(z, "click", J, !0);
  }
  function te() {
    P.clear(), M.clear();
  }
  function I() {
    const X = L ? n : t;
    M.add(X, "touchmove", A, N).add(X, "touchend", Y).add(X, "mousemove", A, N).add(X, "mouseup", Y);
  }
  function O(X) {
    const q = X.nodeName || "";
    return C.includes(q);
  }
  function H() {
    return (g ? T : B)[L ? "mouse" : "touch"];
  }
  function V(X, q) {
    const z = p.add(wd(X) * -1), oe = f.byDistance(X, !g).distance;
    return g || We(X) < _ ? oe : b && q ? oe * 0.5 : f.byIndex(z.get(), 0).distance;
  }
  function Z(X) {
    const q = ic(X, r);
    L = q, D = g && q && !X.buttons && G, G = Eo(o.get(), i.get()) >= 2, !(q && X.button !== 0) && (O(X.target) || (W = !0, a.pointerDown(X), c.useFriction(0).useDuration(0), o.set(i), I(), $ = a.readPoint(X), U = a.readPoint(X, x), m.emit("pointerDown")));
  }
  function A(X) {
    if (!ic(X, r) && X.touches.length >= 2) return Y(X);
    const z = a.readPoint(X), oe = a.readPoint(X, x), le = Eo(z, $), ve = Eo(oe, U);
    if (!F && !L && (!X.cancelable || (F = le > ve, !F)))
      return Y(X);
    const de = a.pointerMove(X);
    le > v && (D = !0), c.useFriction(0.3).useDuration(0.75), s.start(), o.add(S(de)), X.preventDefault();
  }
  function Y(X) {
    const z = f.byDistance(0, !1).index !== p.get(), oe = a.pointerUp(X) * H(), le = V(S(oe), z), ve = $$(oe, le), de = k - 10 * ve, ce = y + ve / 50;
    F = !1, W = !1, M.clear(), c.useDuration(de).useFriction(ce), l.distance(le, !g), L = !1, m.emit("pointerUp");
  }
  function J(X) {
    D && (X.stopPropagation(), X.preventDefault(), D = !1);
  }
  function ne() {
    return W;
  }
  return {
    init: ee,
    destroy: te,
    pointerDown: ne
  };
}
function H$(e, t) {
  let r, o;
  function a(p) {
    return p.timeStamp;
  }
  function i(p, m) {
    const g = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (ic(p, t) ? p : p.touches[0])[g];
  }
  function s(p) {
    return r = p, o = p, i(p);
  }
  function l(p) {
    const m = i(p) - i(o), h = a(p) - a(r) > 170;
    return o = p, h && (r = p), m;
  }
  function c(p) {
    if (!r || !o) return 0;
    const m = i(o) - i(r), h = a(p) - a(r), g = a(p) - a(o) > 170, v = m / h;
    return h && !g && We(v) > 0.1 ? v : 0;
  }
  return {
    pointerDown: s,
    pointerMove: l,
    pointerUp: c,
    readPoint: i
  };
}
function W$() {
  function e(n) {
    const {
      offsetTop: r,
      offsetLeft: o,
      offsetWidth: a,
      offsetHeight: i
    } = n;
    return {
      top: r,
      right: o + a,
      bottom: r + i,
      left: o,
      width: a,
      height: i
    };
  }
  return {
    measure: e
  };
}
function V$(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function G$(e, t, n, r, o, a, i) {
  const s = [e].concat(r);
  let l, c, f = [], p = !1;
  function m(b) {
    return o.measureSize(i.measure(b));
  }
  function h(b) {
    if (!a) return;
    c = m(e), f = r.map(m);
    function y(w) {
      for (const x of w) {
        if (p) return;
        const S = x.target === e, C = r.indexOf(x.target), N = S ? c : f[C], P = m(S ? e : r[C]);
        if (We(P - N) >= 0.5) {
          b.reInit(), t.emit("resize");
          break;
        }
      }
    }
    l = new ResizeObserver((w) => {
      (hs(a) || a(b, w)) && y(w);
    }), n.requestAnimationFrame(() => {
      s.forEach((w) => l.observe(w));
    });
  }
  function g() {
    p = !0, l && l.disconnect();
  }
  return {
    init: h,
    destroy: g
  };
}
function U$(e, t, n, r, o, a) {
  let i = 0, s = 0, l = o, c = a, f = e.get(), p = 0;
  function m() {
    const N = r.get() - e.get(), P = !l;
    let M = 0;
    return P ? (i = 0, n.set(r), e.set(r), M = N) : (n.set(e), i += N / l, i *= c, f += i, e.add(i), M = f - p), s = wd(M), p = f, C;
  }
  function h() {
    const N = r.get() - t.get();
    return We(N) < 1e-3;
  }
  function g() {
    return l;
  }
  function v() {
    return s;
  }
  function b() {
    return i;
  }
  function y() {
    return x(o);
  }
  function w() {
    return S(a);
  }
  function x(N) {
    return l = N, C;
  }
  function S(N) {
    return c = N, C;
  }
  const C = {
    direction: v,
    duration: g,
    velocity: b,
    seek: m,
    settled: h,
    useBaseFriction: w,
    useBaseDuration: y,
    useFriction: S,
    useDuration: x
  };
  return C;
}
function K$(e, t, n, r, o) {
  const a = o.measure(10), i = o.measure(50), s = nr(0.1, 0.99);
  let l = !1;
  function c() {
    return !(l || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function f(h) {
    if (!c()) return;
    const g = e.reachedMin(t.get()) ? "min" : "max", v = We(e[g] - t.get()), b = n.get() - t.get(), y = s.constrain(v / i);
    n.subtract(b * y), !h && We(b) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function p(h) {
    l = !h;
  }
  return {
    shouldConstrain: c,
    constrain: f,
    toggleActive: p
  };
}
function Y$(e, t, n, r, o) {
  const a = nr(-t + e, 0), i = p(), s = f(), l = m();
  function c(g, v) {
    return Eo(g, v) <= 1;
  }
  function f() {
    const g = i[0], v = Dt(i), b = i.lastIndexOf(g), y = i.indexOf(v) + 1;
    return nr(b, y);
  }
  function p() {
    return n.map((g, v) => {
      const {
        min: b,
        max: y
      } = a, w = a.constrain(g), x = !v, S = xd(n, v);
      return x ? y : S || c(b, w) ? b : c(y, w) ? y : w;
    }).map((g) => parseFloat(g.toFixed(3)));
  }
  function m() {
    if (t <= e + o) return [a.max];
    if (r === "keepSnaps") return i;
    const {
      min: g,
      max: v
    } = s;
    return i.slice(g, v);
  }
  return {
    snapsContained: l,
    scrollContainLimit: s
  };
}
function q$(e, t, n) {
  const r = t[0], o = n ? r - e : Dt(t);
  return {
    limit: nr(o, r)
  };
}
function X$(e, t, n, r) {
  const a = t.min + 0.1, i = t.max + 0.1, {
    reachedMin: s,
    reachedMax: l
  } = nr(a, i);
  function c(m) {
    return m === 1 ? l(n.get()) : m === -1 ? s(n.get()) : !1;
  }
  function f(m) {
    if (!c(m)) return;
    const h = e * (m * -1);
    r.forEach((g) => g.add(h));
  }
  return {
    loop: f
  };
}
function Z$(e) {
  const {
    max: t,
    length: n
  } = e;
  function r(a) {
    const i = a - t;
    return n ? i / -n : 0;
  }
  return {
    get: r
  };
}
function Q$(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: i
  } = e, {
    groupSlides: s
  } = o, l = p().map(t.measure), c = m(), f = h();
  function p() {
    return s(r).map((v) => Dt(v)[i] - v[0][a]).map(We);
  }
  function m() {
    return r.map((v) => n[a] - v[a]).map((v) => -We(v));
  }
  function h() {
    return s(c).map((v) => v[0]).map((v, b) => v + l[b]);
  }
  return {
    snaps: c,
    snapsAligned: f
  };
}
function J$(e, t, n, r, o, a) {
  const {
    groupSlides: i
  } = o, {
    min: s,
    max: l
  } = r, c = f();
  function f() {
    const m = i(a), h = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : h ? m : m.slice(s, l).map((g, v, b) => {
      const y = !v, w = xd(b, v);
      if (y) {
        const x = Dt(b[0]) + 1;
        return op(x);
      }
      if (w) {
        const x = ma(a) - Dt(b)[0] + 1;
        return op(x, Dt(b)[0]);
      }
      return g;
    });
  }
  return {
    slideRegistry: c
  };
}
function eL(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: i,
    constrain: s
  } = r;
  function l(g) {
    return g.concat().sort((v, b) => We(v) - We(b))[0];
  }
  function c(g) {
    const v = e ? i(g) : s(g), b = t.map((w, x) => ({
      diff: f(w - v, 0),
      index: x
    })).sort((w, x) => We(w.diff) - We(x.diff)), {
      index: y
    } = b[0];
    return {
      index: y,
      distance: v
    };
  }
  function f(g, v) {
    const b = [g, g + n, g - n];
    if (!e) return g;
    if (!v) return l(b);
    const y = b.filter((w) => wd(w) === v);
    return y.length ? l(y) : Dt(b) - n;
  }
  function p(g, v) {
    const b = t[g] - o.get(), y = f(b, v);
    return {
      index: g,
      distance: y
    };
  }
  function m(g, v) {
    const b = o.get() + g, {
      index: y,
      distance: w
    } = c(b), x = !e && a(b);
    if (!v || x) return {
      index: y,
      distance: g
    };
    const S = t[y] - w, C = g + f(S, 0);
    return {
      index: y,
      distance: C
    };
  }
  return {
    byDistance: m,
    byIndex: p,
    shortcut: f
  };
}
function tL(e, t, n, r, o, a, i) {
  function s(p) {
    const m = p.distance, h = p.index !== t.get();
    a.add(m), m && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), h && (n.set(t.get()), t.set(p.index), i.emit("select"));
  }
  function l(p, m) {
    const h = o.byDistance(p, m);
    s(h);
  }
  function c(p, m) {
    const h = t.clone().set(p), g = o.byIndex(h.get(), m);
    s(g);
  }
  return {
    distance: l,
    index: c
  };
}
function nL(e, t, n, r, o, a, i, s) {
  const l = {
    passive: !0,
    capture: !0
  };
  let c = 0;
  function f(h) {
    if (!s) return;
    function g(v) {
      if ((/* @__PURE__ */ new Date()).getTime() - c > 10) return;
      i.emit("slideFocusStart"), e.scrollLeft = 0;
      const w = n.findIndex((x) => x.includes(v));
      yd(w) && (o.useDuration(0), r.index(w, 0), i.emit("slideFocus"));
    }
    a.add(document, "keydown", p, !1), t.forEach((v, b) => {
      a.add(v, "focus", (y) => {
        (hs(s) || s(h, y)) && g(b);
      }, l);
    });
  }
  function p(h) {
    h.code === "Tab" && (c = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: f
  };
}
function Co(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(l) {
    t = i(l);
  }
  function o(l) {
    t += i(l);
  }
  function a(l) {
    t -= i(l);
  }
  function i(l) {
    return yd(l) ? l : l.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function L0(e, t) {
  const n = e.scroll === "x" ? i : s, r = t.style;
  let o = null, a = !1;
  function i(m) {
    return `translate3d(${m}px,0px,0px)`;
  }
  function s(m) {
    return `translate3d(0px,${m}px,0px)`;
  }
  function l(m) {
    if (a) return;
    const h = L$(e.direction(m));
    h !== o && (r.transform = n(h), o = h);
  }
  function c(m) {
    a = !m;
  }
  function f() {
    a || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: f,
    to: l,
    toggleActive: c
  };
}
function rL(e, t, n, r, o, a, i, s, l) {
  const f = Lo(o), p = Lo(o).reverse(), m = y().concat(w());
  function h(P, M) {
    return P.reduce((_, B) => _ - o[B], M);
  }
  function g(P, M) {
    return P.reduce((_, B) => h(_, M) > 0 ? _.concat([B]) : _, []);
  }
  function v(P) {
    return a.map((M, _) => ({
      start: M - r[_] + 0.5 + P,
      end: M + t - 0.5 + P
    }));
  }
  function b(P, M, _) {
    const B = v(M);
    return P.map((T) => {
      const k = _ ? 0 : -n, G = _ ? n : 0, $ = _ ? "end" : "start", U = B[T][$];
      return {
        index: T,
        loopPoint: U,
        slideLocation: Co(-1),
        translate: L0(e, l[T]),
        target: () => s.get() > U ? k : G
      };
    });
  }
  function y() {
    const P = i[0], M = g(p, P);
    return b(M, n, !1);
  }
  function w() {
    const P = t - i[0] - 1, M = g(f, P);
    return b(M, -n, !0);
  }
  function x() {
    return m.every(({
      index: P
    }) => {
      const M = f.filter((_) => _ !== P);
      return h(M, t) <= 0.1;
    });
  }
  function S() {
    m.forEach((P) => {
      const {
        target: M,
        translate: _,
        slideLocation: B
      } = P, T = M();
      T !== B.get() && (_.to(T), B.set(T));
    });
  }
  function C() {
    m.forEach((P) => P.translate.clear());
  }
  return {
    canLoop: x,
    clear: C,
    loop: S,
    loopPoints: m
  };
}
function oL(e, t, n) {
  let r, o = !1;
  function a(l) {
    if (!n) return;
    function c(f) {
      for (const p of f)
        if (p.type === "childList") {
          l.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((f) => {
      o || (hs(n) || n(l, f)) && c(f);
    }), r.observe(e, {
      childList: !0
    });
  }
  function i() {
    r && r.disconnect(), o = !0;
  }
  return {
    init: a,
    destroy: i
  };
}
function aL(e, t, n, r) {
  const o = {};
  let a = null, i = null, s, l = !1;
  function c() {
    s = new IntersectionObserver((g) => {
      l || (g.forEach((v) => {
        const b = t.indexOf(v.target);
        o[b] = v;
      }), a = null, i = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((g) => s.observe(g));
  }
  function f() {
    s && s.disconnect(), l = !0;
  }
  function p(g) {
    return Fo(o).reduce((v, b) => {
      const y = parseInt(b), {
        isIntersecting: w
      } = o[y];
      return (g && w || !g && !w) && v.push(y), v;
    }, []);
  }
  function m(g = !0) {
    if (g && a) return a;
    if (!g && i) return i;
    const v = p(g);
    return g && (a = v), g || (i = v), v;
  }
  return {
    init: c,
    destroy: f,
    get: m
  };
}
function iL(e, t, n, r, o, a) {
  const {
    measureSize: i,
    startEdge: s,
    endEdge: l
  } = e, c = n[0] && o, f = g(), p = v(), m = n.map(i), h = b();
  function g() {
    if (!c) return 0;
    const w = n[0];
    return We(t[s] - w[s]);
  }
  function v() {
    if (!c) return 0;
    const w = a.getComputedStyle(Dt(r));
    return parseFloat(w.getPropertyValue(`margin-${l}`));
  }
  function b() {
    return n.map((w, x, S) => {
      const C = !x, N = xd(S, x);
      return C ? m[x] + f : N ? m[x] + p : S[x + 1][s] - w[s];
    }).map(We);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: h,
    startGap: f,
    endGap: p
  };
}
function sL(e, t, n, r, o, a, i, s, l) {
  const {
    startEdge: c,
    endEdge: f,
    direction: p
  } = e, m = yd(n);
  function h(y, w) {
    return Lo(y).filter((x) => x % w === 0).map((x) => y.slice(x, x + w));
  }
  function g(y) {
    return y.length ? Lo(y).reduce((w, x, S) => {
      const C = Dt(w) || 0, N = C === 0, P = x === ma(y), M = o[c] - a[C][c], _ = o[c] - a[x][f], B = !r && N ? p(i) : 0, T = !r && P ? p(s) : 0, k = We(_ - T - (M + B));
      return S && k > t + l && w.push(x), P && w.push(y.length), w;
    }, []).map((w, x, S) => {
      const C = Math.max(S[x - 1] || 0);
      return y.slice(C, w);
    }) : [];
  }
  function v(y) {
    return m ? h(y, n) : g(y);
  }
  return {
    groupSlides: v
  };
}
function lL(e, t, n, r, o, a, i) {
  const {
    align: s,
    axis: l,
    direction: c,
    startIndex: f,
    loop: p,
    duration: m,
    dragFree: h,
    dragThreshold: g,
    inViewThreshold: v,
    slidesToScroll: b,
    skipSnaps: y,
    containScroll: w,
    watchResize: x,
    watchSlides: S,
    watchDrag: C,
    watchFocus: N
  } = a, P = 2, M = W$(), _ = M.measure(t), B = n.map(M.measure), T = z$(l, c), k = T.measureSize(_), G = V$(k), $ = F$(s, k), U = !p && !!w, W = p || !!w, {
    slideSizes: F,
    slideSizesWithGaps: D,
    startGap: L,
    endGap: ee
  } = iL(T, _, B, n, W, o), te = sL(T, k, b, p, _, B, L, ee, P), {
    snaps: I,
    snapsAligned: O
  } = Q$(T, $, _, B, te), H = -Dt(I) + Dt(D), {
    snapsContained: V,
    scrollContainLimit: Z
  } = Y$(k, H, O, w, P), A = U ? V : O, {
    limit: Y
  } = q$(H, A, p), J = $0(ma(A), f, p), ne = J.clone(), re = Lo(n), X = ({
    dragHandler: st,
    scrollBody: mt,
    scrollBounds: _t,
    options: {
      loop: et
    }
  }) => {
    et || _t.constrain(st.pointerDown()), mt.seek();
  }, q = ({
    scrollBody: st,
    translate: mt,
    location: _t,
    offsetLocation: et,
    previousLocation: ct,
    scrollLooper: xn,
    slideLooper: Vt,
    dragHandler: oo,
    animation: se,
    eventHandler: be,
    scrollBounds: Se,
    options: {
      loop: Ee
    }
  }, ge) => {
    const Be = st.settled(), qe = !Se.shouldConstrain(), ie = Ee ? Be : Be && qe, fe = ie && !oo.pointerDown();
    fe && se.stop();
    const ye = _t.get() * ge + ct.get() * (1 - ge);
    et.set(ye), Ee && (xn.loop(st.direction()), Vt.loop()), mt.to(et.get()), fe && be.emit("settle"), ie || be.emit("scroll");
  }, z = B$(r, o, () => X(Et), (st) => q(Et, st)), oe = 0.68, le = A[J.get()], ve = Co(le), de = Co(le), ce = Co(le), Ne = Co(le), Fe = U$(ve, ce, de, Ne, m, oe), Re = eL(p, A, H, Y, Ne), je = tL(z, J, ne, Fe, Re, Ne, i), tt = Z$(Y), it = Bo(), De = aL(t, n, i, v), {
    slideRegistry: Ve
  } = J$(U, w, A, Z, te, re), wn = nL(e, n, Ve, je, Fe, it, i, N), Et = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: i,
    containerRect: _,
    slideRects: B,
    animation: z,
    axis: T,
    dragHandler: j$(T, e, r, o, Ne, H$(T, o), ve, z, je, Fe, Re, J, i, G, h, g, y, oe, C),
    eventStore: it,
    percentOfView: G,
    index: J,
    indexPrevious: ne,
    limit: Y,
    location: ve,
    offsetLocation: ce,
    previousLocation: de,
    options: a,
    resizeHandler: G$(t, i, o, n, T, x, M),
    scrollBody: Fe,
    scrollBounds: K$(Y, ce, Ne, Fe, G),
    scrollLooper: X$(H, Y, ce, [ve, ce, de, Ne]),
    scrollProgress: tt,
    scrollSnapList: A.map(tt.get),
    scrollSnaps: A,
    scrollTarget: Re,
    scrollTo: je,
    slideLooper: rL(T, k, H, F, D, I, A, ce, n),
    slideFocus: wn,
    slidesHandler: oL(t, i, S),
    slidesInView: De,
    slideIndexes: re,
    slideRegistry: Ve,
    slidesToScroll: te,
    target: Ne,
    translate: L0(T, t)
  };
  return Et;
}
function cL() {
  let e = {}, t;
  function n(c) {
    t = c;
  }
  function r(c) {
    return e[c] || [];
  }
  function o(c) {
    return r(c).forEach((f) => f(t, c)), l;
  }
  function a(c, f) {
    return e[c] = r(c).concat([f]), l;
  }
  function i(c, f) {
    return e[c] = r(c).filter((p) => p !== f), l;
  }
  function s() {
    e = {};
  }
  const l = {
    init: n,
    emit: o,
    off: i,
    on: a,
    clear: s
  };
  return l;
}
const uL = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function dL(e) {
  function t(a, i) {
    return k0(a, i || {});
  }
  function n(a) {
    const i = a.breakpoints || {}, s = Fo(i).filter((l) => e.matchMedia(l).matches).map((l) => i[l]).reduce((l, c) => t(l, c), {});
    return t(a, s);
  }
  function r(a) {
    return a.map((i) => Fo(i.breakpoints || {})).reduce((i, s) => i.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function fL(e) {
  let t = [];
  function n(a, i) {
    return t = i.filter(({
      options: s
    }) => e.optionsAtMedia(s).active !== !1), t.forEach((s) => s.init(a, e)), i.reduce((s, l) => Object.assign(s, {
      [l.name]: l
    }), {});
  }
  function r() {
    t = t.filter((a) => a.destroy());
  }
  return {
    init: n,
    destroy: r
  };
}
function gi(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = dL(o), i = fL(a), s = Bo(), l = cL(), {
    mergeOptions: c,
    optionsAtMedia: f,
    optionsMediaQueries: p
  } = a, {
    on: m,
    off: h,
    emit: g
  } = l, v = T;
  let b = !1, y, w = c(uL, gi.globalOptions), x = c(w), S = [], C, N, P;
  function M() {
    const {
      container: re,
      slides: X
    } = x;
    N = (ac(re) ? e.querySelector(re) : re) || e.children[0];
    const z = ac(X) ? N.querySelectorAll(X) : X;
    P = [].slice.call(z || N.children);
  }
  function _(re) {
    const X = lL(e, N, P, r, o, re, l);
    if (re.loop && !X.slideLooper.canLoop()) {
      const q = Object.assign({}, re, {
        loop: !1
      });
      return _(q);
    }
    return X;
  }
  function B(re, X) {
    b || (w = c(w, re), x = f(w), S = X || S, M(), y = _(x), p([w, ...S.map(({
      options: q
    }) => q)]).forEach((q) => s.add(q, "change", T)), x.active && (y.translate.to(y.location.get()), y.animation.init(), y.slidesInView.init(), y.slideFocus.init(ne), y.eventHandler.init(ne), y.resizeHandler.init(ne), y.slidesHandler.init(ne), y.options.loop && y.slideLooper.loop(), N.offsetParent && P.length && y.dragHandler.init(ne), C = i.init(ne, S)));
  }
  function T(re, X) {
    const q = te();
    k(), B(c({
      startIndex: q
    }, re), X), l.emit("reInit");
  }
  function k() {
    y.dragHandler.destroy(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), y.animation.destroy(), i.destroy(), s.clear();
  }
  function G() {
    b || (b = !0, s.clear(), k(), l.emit("destroy"), l.clear());
  }
  function $(re, X, q) {
    !x.active || b || (y.scrollBody.useBaseFriction().useDuration(X === !0 ? 0 : x.duration), y.scrollTo.index(re, q || 0));
  }
  function U(re) {
    const X = y.index.add(1).get();
    $(X, re, -1);
  }
  function W(re) {
    const X = y.index.add(-1).get();
    $(X, re, 1);
  }
  function F() {
    return y.index.add(1).get() !== te();
  }
  function D() {
    return y.index.add(-1).get() !== te();
  }
  function L() {
    return y.scrollSnapList;
  }
  function ee() {
    return y.scrollProgress.get(y.offsetLocation.get());
  }
  function te() {
    return y.index.get();
  }
  function I() {
    return y.indexPrevious.get();
  }
  function O() {
    return y.slidesInView.get();
  }
  function H() {
    return y.slidesInView.get(!1);
  }
  function V() {
    return C;
  }
  function Z() {
    return y;
  }
  function A() {
    return e;
  }
  function Y() {
    return N;
  }
  function J() {
    return P;
  }
  const ne = {
    canScrollNext: F,
    canScrollPrev: D,
    containerNode: Y,
    internalEngine: Z,
    destroy: G,
    off: h,
    on: m,
    emit: g,
    plugins: V,
    previousScrollSnap: I,
    reInit: v,
    rootNode: A,
    scrollNext: U,
    scrollPrev: W,
    scrollProgress: ee,
    scrollSnapList: L,
    scrollTo: $,
    selectedScrollSnap: te,
    slideNodes: J,
    slidesInView: O,
    slidesNotInView: H
  };
  return B(t, n), setTimeout(() => l.emit("init"), 0), ne;
}
gi.globalOptions = void 0;
function Sd(e = {}, t = []) {
  const n = Ke(e), r = Ke(t), [o, a] = Qe(), [i, s] = Qe(), l = nt(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return Je(() => {
    bd(n.current, e) || (n.current = e, l());
  }, [e, l]), Je(() => {
    k$(r.current, t) || (r.current = t, l());
  }, [t, l]), Je(() => {
    if (I$() && i) {
      gi.globalOptions = Sd.globalOptions;
      const c = gi(i, n.current, r.current);
      return a(c), () => c.destroy();
    } else
      a(void 0);
  }, [i, a]), [s, o];
}
Sd.globalOptions = void 0;
const F0 = u.createContext(null);
function vs() {
  const e = u.useContext(F0);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const pL = u.forwardRef(
  ({ orientation: e = "horizontal", opts: t, setApi: n, plugins: r, className: o, children: a, ...i }, s) => {
    const [l, c] = Sd(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [f, p] = u.useState(!1), [m, h] = u.useState(!1), g = u.useCallback((w) => {
      w && (p(w.canScrollPrev()), h(w.canScrollNext()));
    }, []), v = u.useCallback(() => {
      c == null || c.scrollPrev();
    }, [c]), b = u.useCallback(() => {
      c == null || c.scrollNext();
    }, [c]), y = u.useCallback(
      (w) => {
        w.key === "ArrowLeft" ? (w.preventDefault(), v()) : w.key === "ArrowRight" && (w.preventDefault(), b());
      },
      [v, b]
    );
    return u.useEffect(() => {
      !c || !n || n(c);
    }, [c, n]), u.useEffect(() => {
      if (c)
        return g(c), c.on("reInit", g), c.on("select", g), () => {
          c == null || c.off("select", g);
        };
    }, [c, g]), /* @__PURE__ */ d(
      F0.Provider,
      {
        value: {
          carouselRef: l,
          api: c,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: v,
          scrollNext: b,
          canScrollPrev: f,
          canScrollNext: m
        },
        children: /* @__PURE__ */ d(
          "div",
          {
            ref: s,
            onKeyDownCapture: y,
            className: R("relative", o),
            role: "region",
            "aria-roledescription": "carousel",
            ...i,
            children: a
          }
        )
      }
    );
  }
);
pL.displayName = "Carousel";
const mL = u.forwardRef(
  ({ className: e, ...t }, n) => {
    const { carouselRef: r, orientation: o } = vs();
    return /* @__PURE__ */ d("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ d(
      "div",
      {
        ref: n,
        className: R("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
        ...t
      }
    ) });
  }
);
mL.displayName = "CarouselContent";
const hL = u.forwardRef(
  ({ className: e, ...t }, n) => {
    const { orientation: r } = vs();
    return /* @__PURE__ */ d(
      "div",
      {
        ref: n,
        role: "group",
        "aria-roledescription": "slide",
        className: R("min-w-0 shrink-0 grow-0 basis-full", r === "horizontal" ? "pl-4" : "pt-4", e),
        ...t
      }
    );
  }
);
hL.displayName = "CarouselItem";
const vL = u.forwardRef(
  ({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
    const { orientation: a, scrollPrev: i, canScrollPrev: s } = vs();
    return /* @__PURE__ */ K(
      Yn,
      {
        ref: o,
        variant: t,
        size: n,
        className: R(
          "absolute h-8 w-8 rounded-full",
          a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          e
        ),
        disabled: !s,
        onClick: i,
        ...r,
        children: [
          /* @__PURE__ */ d(DP, { className: "h-4 w-4" }),
          /* @__PURE__ */ d("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
vL.displayName = "CarouselPrevious";
const gL = u.forwardRef(
  ({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
    const { orientation: a, scrollNext: i, canScrollNext: s } = vs();
    return /* @__PURE__ */ K(
      Yn,
      {
        ref: o,
        variant: t,
        size: n,
        className: R(
          "absolute h-8 w-8 rounded-full",
          a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          e
        ),
        disabled: !s,
        onClick: i,
        ...r,
        children: [
          /* @__PURE__ */ d(IP, { className: "h-4 w-4" }),
          /* @__PURE__ */ d("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
gL.displayName = "CarouselNext";
var ap = 1, bL = 0.9, yL = 0.8, wL = 0.17, cl = 0.1, ul = 0.999, xL = 0.9999, SL = 0.99, CL = /[\\\/_+.#"@\[\(\{&]/, PL = /[\\\/_+.#"@\[\(\{&]/g, NL = /[\s-]/, B0 = /[\s-]/g;
function sc(e, t, n, r, o, a, i) {
  if (a === t.length) return o === e.length ? ap : SL;
  var s = `${o},${a}`;
  if (i[s] !== void 0) return i[s];
  for (var l = r.charAt(a), c = n.indexOf(l, o), f = 0, p, m, h, g; c >= 0; ) p = sc(e, t, n, r, c + 1, a + 1, i), p > f && (c === o ? p *= ap : CL.test(e.charAt(c - 1)) ? (p *= yL, h = e.slice(o, c - 1).match(PL), h && o > 0 && (p *= Math.pow(ul, h.length))) : NL.test(e.charAt(c - 1)) ? (p *= bL, g = e.slice(o, c - 1).match(B0), g && o > 0 && (p *= Math.pow(ul, g.length))) : (p *= wL, o > 0 && (p *= Math.pow(ul, c - o))), e.charAt(c) !== t.charAt(a) && (p *= xL)), (p < cl && n.charAt(c - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(c - 1) !== r.charAt(a)) && (m = sc(e, t, n, r, c + 1, a + 2, i), m * cl > p && (p = m * cl)), p > f && (f = p), c = n.indexOf(l, c + 1);
  return i[s] = f, f;
}
function ip(e) {
  return e.toLowerCase().replace(B0, " ");
}
function EL(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, sc(e, t, ip(e), ip(t), 0, 0, {});
}
var mo = '[cmdk-group=""]', dl = '[cmdk-group-items=""]', _L = '[cmdk-group-heading=""]', z0 = '[cmdk-item=""]', sp = `${z0}:not([aria-disabled="true"])`, lc = "cmdk-item-select", wr = "data-value", RL = (e, t, n) => EL(e, t, n), j0 = u.createContext(void 0), ha = () => u.useContext(j0), H0 = u.createContext(void 0), Cd = () => u.useContext(H0), W0 = u.createContext(void 0), V0 = u.forwardRef((e, t) => {
  let n = xr(() => {
    var I, O;
    return { search: "", value: (O = (I = e.value) != null ? I : e.defaultValue) != null ? O : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = xr(() => /* @__PURE__ */ new Set()), o = xr(() => /* @__PURE__ */ new Map()), a = xr(() => /* @__PURE__ */ new Map()), i = xr(() => /* @__PURE__ */ new Set()), s = G0(e), { label: l, children: c, value: f, onValueChange: p, filter: m, shouldFilter: h, loop: g, disablePointerSelection: v = !1, vimBindings: b = !0, ...y } = e, w = Te(), x = Te(), S = Te(), C = u.useRef(null), N = BL();
  rr(() => {
    if (f !== void 0) {
      let I = f.trim();
      n.current.value = I, P.emit();
    }
  }, [f]), rr(() => {
    N(6, G);
  }, []);
  let P = u.useMemo(() => ({ subscribe: (I) => (i.current.add(I), () => i.current.delete(I)), snapshot: () => n.current, setState: (I, O, H) => {
    var V, Z, A, Y;
    if (!Object.is(n.current[I], O)) {
      if (n.current[I] = O, I === "search") k(), B(), N(1, T);
      else if (I === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let J = document.getElementById(S);
          J ? J.focus() : (V = document.getElementById(w)) == null || V.focus();
        }
        if (N(7, () => {
          var J;
          n.current.selectedItemId = (J = $()) == null ? void 0 : J.id, P.emit();
        }), H || N(5, G), ((Z = s.current) == null ? void 0 : Z.value) !== void 0) {
          let J = O ?? "";
          (Y = (A = s.current).onValueChange) == null || Y.call(A, J);
          return;
        }
      }
      P.emit();
    }
  }, emit: () => {
    i.current.forEach((I) => I());
  } }), []), M = u.useMemo(() => ({ value: (I, O, H) => {
    var V;
    O !== ((V = a.current.get(I)) == null ? void 0 : V.value) && (a.current.set(I, { value: O, keywords: H }), n.current.filtered.items.set(I, _(O, H)), N(2, () => {
      B(), P.emit();
    }));
  }, item: (I, O) => (r.current.add(I), O && (o.current.has(O) ? o.current.get(O).add(I) : o.current.set(O, /* @__PURE__ */ new Set([I]))), N(3, () => {
    k(), B(), n.current.value || T(), P.emit();
  }), () => {
    a.current.delete(I), r.current.delete(I), n.current.filtered.items.delete(I);
    let H = $();
    N(4, () => {
      k(), (H == null ? void 0 : H.getAttribute("id")) === I && T(), P.emit();
    });
  }), group: (I) => (o.current.has(I) || o.current.set(I, /* @__PURE__ */ new Set()), () => {
    a.current.delete(I), o.current.delete(I);
  }), filter: () => s.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: w, inputId: S, labelId: x, listInnerRef: C }), []);
  function _(I, O) {
    var H, V;
    let Z = (V = (H = s.current) == null ? void 0 : H.filter) != null ? V : RL;
    return I ? Z(I, n.current.search, O) : 0;
  }
  function B() {
    if (!n.current.search || s.current.shouldFilter === !1) return;
    let I = n.current.filtered.items, O = [];
    n.current.filtered.groups.forEach((V) => {
      let Z = o.current.get(V), A = 0;
      Z.forEach((Y) => {
        let J = I.get(Y);
        A = Math.max(J, A);
      }), O.push([V, A]);
    });
    let H = C.current;
    U().sort((V, Z) => {
      var A, Y;
      let J = V.getAttribute("id"), ne = Z.getAttribute("id");
      return ((A = I.get(ne)) != null ? A : 0) - ((Y = I.get(J)) != null ? Y : 0);
    }).forEach((V) => {
      let Z = V.closest(dl);
      Z ? Z.appendChild(V.parentElement === Z ? V : V.closest(`${dl} > *`)) : H.appendChild(V.parentElement === H ? V : V.closest(`${dl} > *`));
    }), O.sort((V, Z) => Z[1] - V[1]).forEach((V) => {
      var Z;
      let A = (Z = C.current) == null ? void 0 : Z.querySelector(`${mo}[${wr}="${encodeURIComponent(V[0])}"]`);
      A == null || A.parentElement.appendChild(A);
    });
  }
  function T() {
    let I = U().find((H) => H.getAttribute("aria-disabled") !== "true"), O = I == null ? void 0 : I.getAttribute(wr);
    P.setState("value", O || void 0);
  }
  function k() {
    var I, O, H, V;
    if (!n.current.search || s.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let Z = 0;
    for (let A of r.current) {
      let Y = (O = (I = a.current.get(A)) == null ? void 0 : I.value) != null ? O : "", J = (V = (H = a.current.get(A)) == null ? void 0 : H.keywords) != null ? V : [], ne = _(Y, J);
      n.current.filtered.items.set(A, ne), ne > 0 && Z++;
    }
    for (let [A, Y] of o.current) for (let J of Y) if (n.current.filtered.items.get(J) > 0) {
      n.current.filtered.groups.add(A);
      break;
    }
    n.current.filtered.count = Z;
  }
  function G() {
    var I, O, H;
    let V = $();
    V && (((I = V.parentElement) == null ? void 0 : I.firstChild) === V && ((H = (O = V.closest(mo)) == null ? void 0 : O.querySelector(_L)) == null || H.scrollIntoView({ block: "nearest" })), V.scrollIntoView({ block: "nearest" }));
  }
  function $() {
    var I;
    return (I = C.current) == null ? void 0 : I.querySelector(`${z0}[aria-selected="true"]`);
  }
  function U() {
    var I;
    return Array.from(((I = C.current) == null ? void 0 : I.querySelectorAll(sp)) || []);
  }
  function W(I) {
    let O = U()[I];
    O && P.setState("value", O.getAttribute(wr));
  }
  function F(I) {
    var O;
    let H = $(), V = U(), Z = V.findIndex((Y) => Y === H), A = V[Z + I];
    (O = s.current) != null && O.loop && (A = Z + I < 0 ? V[V.length - 1] : Z + I === V.length ? V[0] : V[Z + I]), A && P.setState("value", A.getAttribute(wr));
  }
  function D(I) {
    let O = $(), H = O == null ? void 0 : O.closest(mo), V;
    for (; H && !V; ) H = I > 0 ? LL(H, mo) : FL(H, mo), V = H == null ? void 0 : H.querySelector(sp);
    V ? P.setState("value", V.getAttribute(wr)) : F(I);
  }
  let L = () => W(U().length - 1), ee = (I) => {
    I.preventDefault(), I.metaKey ? L() : I.altKey ? D(1) : F(1);
  }, te = (I) => {
    I.preventDefault(), I.metaKey ? W(0) : I.altKey ? D(-1) : F(-1);
  };
  return u.createElement(Q.div, { ref: t, tabIndex: -1, ...y, "cmdk-root": "", onKeyDown: (I) => {
    var O;
    (O = y.onKeyDown) == null || O.call(y, I);
    let H = I.nativeEvent.isComposing || I.keyCode === 229;
    if (!(I.defaultPrevented || H)) switch (I.key) {
      case "n":
      case "j": {
        b && I.ctrlKey && ee(I);
        break;
      }
      case "ArrowDown": {
        ee(I);
        break;
      }
      case "p":
      case "k": {
        b && I.ctrlKey && te(I);
        break;
      }
      case "ArrowUp": {
        te(I);
        break;
      }
      case "Home": {
        I.preventDefault(), W(0);
        break;
      }
      case "End": {
        I.preventDefault(), L();
        break;
      }
      case "Enter": {
        I.preventDefault();
        let V = $();
        if (V) {
          let Z = new Event(lc);
          V.dispatchEvent(Z);
        }
      }
    }
  } }, u.createElement("label", { "cmdk-label": "", htmlFor: M.inputId, id: M.labelId, style: jL }, l), gs(e, (I) => u.createElement(H0.Provider, { value: P }, u.createElement(j0.Provider, { value: M }, I))));
}), TL = u.forwardRef((e, t) => {
  var n, r;
  let o = Te(), a = u.useRef(null), i = u.useContext(W0), s = ha(), l = G0(e), c = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : i == null ? void 0 : i.forceMount;
  rr(() => {
    if (!c) return s.item(o, i == null ? void 0 : i.id);
  }, [c]);
  let f = U0(o, a, [e.value, e.children, a], e.keywords), p = Cd(), m = Dn((N) => N.value && N.value === f.current), h = Dn((N) => c || s.filter() === !1 ? !0 : N.search ? N.filtered.items.get(o) > 0 : !0);
  u.useEffect(() => {
    let N = a.current;
    if (!(!N || e.disabled)) return N.addEventListener(lc, g), () => N.removeEventListener(lc, g);
  }, [h, e.onSelect, e.disabled]);
  function g() {
    var N, P;
    v(), (P = (N = l.current).onSelect) == null || P.call(N, f.current);
  }
  function v() {
    p.setState("value", f.current, !0);
  }
  if (!h) return null;
  let { disabled: b, value: y, onSelect: w, forceMount: x, keywords: S, ...C } = e;
  return u.createElement(Q.div, { ref: Xt(a, t), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!b, "aria-selected": !!m, "data-disabled": !!b, "data-selected": !!m, onPointerMove: b || s.getDisablePointerSelection() ? void 0 : v, onClick: b ? void 0 : g }, e.children);
}), ML = u.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, i = Te(), s = u.useRef(null), l = u.useRef(null), c = Te(), f = ha(), p = Dn((h) => o || f.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(i) : !0);
  rr(() => f.group(i), []), U0(i, s, [e.value, e.heading, l]);
  let m = u.useMemo(() => ({ id: i, forceMount: o }), [o]);
  return u.createElement(Q.div, { ref: Xt(s, t), ...a, "cmdk-group": "", role: "presentation", hidden: p ? void 0 : !0 }, n && u.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), gs(e, (h) => u.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, u.createElement(W0.Provider, { value: m }, h))));
}), AL = u.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = u.useRef(null), a = Dn((i) => !i.search);
  return !n && !a ? null : u.createElement(Q.div, { ref: Xt(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), OL = u.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = Cd(), i = Dn((c) => c.search), s = Dn((c) => c.selectedItemId), l = ha();
  return u.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), u.createElement(Q.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": s, id: l.inputId, type: "text", value: o ? e.value : i, onChange: (c) => {
    o || a.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), DL = u.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = u.useRef(null), i = u.useRef(null), s = Dn((c) => c.selectedItemId), l = ha();
  return u.useEffect(() => {
    if (i.current && a.current) {
      let c = i.current, f = a.current, p, m = new ResizeObserver(() => {
        p = requestAnimationFrame(() => {
          let h = c.offsetHeight;
          f.style.setProperty("--cmdk-list-height", h.toFixed(1) + "px");
        });
      });
      return m.observe(c), () => {
        cancelAnimationFrame(p), m.unobserve(c);
      };
    }
  }, []), u.createElement(Q.div, { ref: Xt(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": s, "aria-label": r, id: l.listId }, gs(e, (c) => u.createElement("div", { ref: Xt(i, l.listInnerRef), "cmdk-list-sizer": "" }, c)));
}), IL = u.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: i, ...s } = e;
  return u.createElement(la, { open: n, onOpenChange: r }, u.createElement(ca, { container: i }, u.createElement(ir, { "cmdk-overlay": "", className: o }), u.createElement(sr, { "aria-label": e.label, "cmdk-dialog": "", className: a }, u.createElement(V0, { ref: t, ...s }))));
}), kL = u.forwardRef((e, t) => Dn((n) => n.filtered.count === 0) ? u.createElement(Q.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), $L = u.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return u.createElement(Q.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, gs(e, (i) => u.createElement("div", { "aria-hidden": !0 }, i)));
}), pt = Object.assign(V0, { List: DL, Item: TL, Input: OL, Group: ML, Separator: AL, Dialog: IL, Empty: kL, Loading: $L });
function LL(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function FL(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function G0(e) {
  let t = u.useRef(e);
  return rr(() => {
    t.current = e;
  }), t;
}
var rr = typeof window > "u" ? u.useEffect : u.useLayoutEffect;
function xr(e) {
  let t = u.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Dn(e) {
  let t = Cd(), n = () => e(t.snapshot());
  return u.useSyncExternalStore(t.subscribe, n, n);
}
function U0(e, t, n, r = []) {
  let o = u.useRef(), a = ha();
  return rr(() => {
    var i;
    let s = (() => {
      var c;
      for (let f of n) {
        if (typeof f == "string") return f.trim();
        if (typeof f == "object" && "current" in f) return f.current ? (c = f.current.textContent) == null ? void 0 : c.trim() : o.current;
      }
    })(), l = r.map((c) => c.trim());
    a.value(e, s, l), (i = t.current) == null || i.setAttribute(wr, s), o.current = s;
  }), o;
}
var BL = () => {
  let [e, t] = u.useState(), n = xr(() => /* @__PURE__ */ new Map());
  return rr(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function zL(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function gs({ asChild: e, children: t }, n) {
  return e && u.isValidElement(t) ? u.cloneElement(zL(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var jL = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const HL = la, LY = rs, WL = ca, FY = lr, K0 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  ir,
  {
    ref: n,
    className: R(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
K0.displayName = ir.displayName;
const Y0 = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ K(WL, { children: [
  /* @__PURE__ */ d(K0, {}),
  /* @__PURE__ */ K(
    sr,
    {
      ref: r,
      className: R(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ K(lr, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ d(Hr, { className: "h-4 w-4" }),
          /* @__PURE__ */ d("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Y0.displayName = sr.displayName;
const VL = ({ className: e, ...t }) => /* @__PURE__ */ d("div", { className: R("flex flex-col space-y-1.5 text-center sm:text-left", e), ...t });
VL.displayName = "DialogHeader";
const GL = ({ className: e, ...t }) => /* @__PURE__ */ d("div", { className: R("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e), ...t });
GL.displayName = "DialogFooter";
const UL = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Xr,
  {
    ref: n,
    className: R("text-lg font-semibold leading-none tracking-tight", e),
    ...t
  }
));
UL.displayName = Xr.displayName;
const KL = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(Zr, { ref: n, className: R("text-sm text-muted-foreground", e), ...t }));
KL.displayName = Zr.displayName;
const q0 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  pt,
  {
    ref: n,
    className: R(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
q0.displayName = pt.displayName;
const BY = ({ children: e, ...t }) => /* @__PURE__ */ d(HL, { ...t, children: /* @__PURE__ */ d(Y0, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ d(q0, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), YL = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ K("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ d(zc, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ d(
    pt.Input,
    {
      ref: n,
      className: R(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
YL.displayName = pt.Input.displayName;
const qL = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  pt.List,
  {
    ref: n,
    className: R("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
qL.displayName = pt.List.displayName;
const XL = u.forwardRef((e, t) => /* @__PURE__ */ d(pt.Empty, { ref: t, className: "py-6 text-center text-sm", ...e }));
XL.displayName = pt.Empty.displayName;
const ZL = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  pt.Group,
  {
    ref: n,
    className: R(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
ZL.displayName = pt.Group.displayName;
const QL = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(pt.Separator, { ref: n, className: R("-mx-1 h-px bg-border", e), ...t }));
QL.displayName = pt.Separator.displayName;
const JL = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  pt.Item,
  {
    ref: n,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      e
    ),
    ...t
  }
));
JL.displayName = pt.Item.displayName;
const e5 = ({ className: e, ...t }) => /* @__PURE__ */ d("span", { className: R("ml-auto text-xs tracking-widest text-muted-foreground", e), ...t });
e5.displayName = "CommandShortcut";
var Ta = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function on(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var t5 = Array.isArray, Ht = t5, n5 = typeof Ta == "object" && Ta && Ta.Object === Object && Ta, X0 = n5, r5 = X0, o5 = typeof self == "object" && self && self.Object === Object && self, a5 = r5 || o5 || Function("return this")(), an = a5, i5 = an, s5 = i5.Symbol, va = s5, lp = va, Z0 = Object.prototype, l5 = Z0.hasOwnProperty, c5 = Z0.toString, ho = lp ? lp.toStringTag : void 0;
function u5(e) {
  var t = l5.call(e, ho), n = e[ho];
  try {
    e[ho] = void 0;
    var r = !0;
  } catch {
  }
  var o = c5.call(e);
  return r && (t ? e[ho] = n : delete e[ho]), o;
}
var d5 = u5, f5 = Object.prototype, p5 = f5.toString;
function m5(e) {
  return p5.call(e);
}
var h5 = m5, cp = va, v5 = d5, g5 = h5, b5 = "[object Null]", y5 = "[object Undefined]", up = cp ? cp.toStringTag : void 0;
function w5(e) {
  return e == null ? e === void 0 ? y5 : b5 : up && up in Object(e) ? v5(e) : g5(e);
}
var ur = w5;
function x5(e) {
  return e != null && typeof e == "object";
}
var dr = x5, S5 = ur, C5 = dr, P5 = "[object Symbol]";
function N5(e) {
  return typeof e == "symbol" || C5(e) && S5(e) == P5;
}
var ga = N5, E5 = Ht, _5 = ga, R5 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, T5 = /^\w*$/;
function M5(e, t) {
  if (E5(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || _5(e) ? !0 : T5.test(e) || !R5.test(e) || t != null && e in Object(t);
}
var Pd = M5;
function A5(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var zn = A5;
const Q0 = /* @__PURE__ */ on(zn);
var O5 = ur, D5 = zn, I5 = "[object AsyncFunction]", k5 = "[object Function]", $5 = "[object GeneratorFunction]", L5 = "[object Proxy]";
function F5(e) {
  if (!D5(e))
    return !1;
  var t = O5(e);
  return t == k5 || t == $5 || t == I5 || t == L5;
}
var Nd = F5;
const bi = /* @__PURE__ */ on(Nd);
var B5 = an, z5 = B5["__core-js_shared__"], j5 = z5, fl = j5, dp = function() {
  var e = /[^.]+$/.exec(fl && fl.keys && fl.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function H5(e) {
  return !!dp && dp in e;
}
var W5 = H5, V5 = Function.prototype, G5 = V5.toString;
function U5(e) {
  if (e != null) {
    try {
      return G5.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var J0 = U5, K5 = Nd, Y5 = W5, q5 = zn, X5 = J0, Z5 = /[\\^$.*+?()[\]{}|]/g, Q5 = /^\[object .+?Constructor\]$/, J5 = Function.prototype, eF = Object.prototype, tF = J5.toString, nF = eF.hasOwnProperty, rF = RegExp(
  "^" + tF.call(nF).replace(Z5, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function oF(e) {
  if (!q5(e) || Y5(e))
    return !1;
  var t = K5(e) ? rF : Q5;
  return t.test(X5(e));
}
var aF = oF;
function iF(e, t) {
  return e == null ? void 0 : e[t];
}
var sF = iF, lF = aF, cF = sF;
function uF(e, t) {
  var n = cF(e, t);
  return lF(n) ? n : void 0;
}
var fr = uF, dF = fr, fF = dF(Object, "create"), bs = fF, fp = bs;
function pF() {
  this.__data__ = fp ? fp(null) : {}, this.size = 0;
}
var mF = pF;
function hF(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var vF = hF, gF = bs, bF = "__lodash_hash_undefined__", yF = Object.prototype, wF = yF.hasOwnProperty;
function xF(e) {
  var t = this.__data__;
  if (gF) {
    var n = t[e];
    return n === bF ? void 0 : n;
  }
  return wF.call(t, e) ? t[e] : void 0;
}
var SF = xF, CF = bs, PF = Object.prototype, NF = PF.hasOwnProperty;
function EF(e) {
  var t = this.__data__;
  return CF ? t[e] !== void 0 : NF.call(t, e);
}
var _F = EF, RF = bs, TF = "__lodash_hash_undefined__";
function MF(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = RF && t === void 0 ? TF : t, this;
}
var AF = MF, OF = mF, DF = vF, IF = SF, kF = _F, $F = AF;
function Jr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Jr.prototype.clear = OF;
Jr.prototype.delete = DF;
Jr.prototype.get = IF;
Jr.prototype.has = kF;
Jr.prototype.set = $F;
var LF = Jr;
function FF() {
  this.__data__ = [], this.size = 0;
}
var BF = FF;
function zF(e, t) {
  return e === t || e !== e && t !== t;
}
var Ed = zF, jF = Ed;
function HF(e, t) {
  for (var n = e.length; n--; )
    if (jF(e[n][0], t))
      return n;
  return -1;
}
var ys = HF, WF = ys, VF = Array.prototype, GF = VF.splice;
function UF(e) {
  var t = this.__data__, n = WF(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : GF.call(t, n, 1), --this.size, !0;
}
var KF = UF, YF = ys;
function qF(e) {
  var t = this.__data__, n = YF(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var XF = qF, ZF = ys;
function QF(e) {
  return ZF(this.__data__, e) > -1;
}
var JF = QF, eB = ys;
function tB(e, t) {
  var n = this.__data__, r = eB(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var nB = tB, rB = BF, oB = KF, aB = XF, iB = JF, sB = nB;
function eo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
eo.prototype.clear = rB;
eo.prototype.delete = oB;
eo.prototype.get = aB;
eo.prototype.has = iB;
eo.prototype.set = sB;
var ws = eo, lB = fr, cB = an, uB = lB(cB, "Map"), _d = uB, pp = LF, dB = ws, fB = _d;
function pB() {
  this.size = 0, this.__data__ = {
    hash: new pp(),
    map: new (fB || dB)(),
    string: new pp()
  };
}
var mB = pB;
function hB(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var vB = hB, gB = vB;
function bB(e, t) {
  var n = e.__data__;
  return gB(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var xs = bB, yB = xs;
function wB(e) {
  var t = yB(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var xB = wB, SB = xs;
function CB(e) {
  return SB(this, e).get(e);
}
var PB = CB, NB = xs;
function EB(e) {
  return NB(this, e).has(e);
}
var _B = EB, RB = xs;
function TB(e, t) {
  var n = RB(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var MB = TB, AB = mB, OB = xB, DB = PB, IB = _B, kB = MB;
function to(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
to.prototype.clear = AB;
to.prototype.delete = OB;
to.prototype.get = DB;
to.prototype.has = IB;
to.prototype.set = kB;
var Rd = to, ex = Rd, $B = "Expected a function";
function Td(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError($B);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var i = e.apply(this, r);
    return n.cache = a.set(o, i) || a, i;
  };
  return n.cache = new (Td.Cache || ex)(), n;
}
Td.Cache = ex;
var LB = Td, FB = LB, BB = 500;
function zB(e) {
  var t = FB(e, function(r) {
    return n.size === BB && n.clear(), r;
  }), n = t.cache;
  return t;
}
var jB = zB, HB = jB, WB = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, VB = /\\(\\)?/g, GB = HB(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(WB, function(n, r, o, a) {
    t.push(o ? a.replace(VB, "$1") : r || n);
  }), t;
}), UB = GB;
function KB(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var tx = KB, mp = va, YB = tx, qB = Ht, XB = ga, ZB = 1 / 0, hp = mp ? mp.prototype : void 0, vp = hp ? hp.toString : void 0;
function nx(e) {
  if (typeof e == "string")
    return e;
  if (qB(e))
    return YB(e, nx) + "";
  if (XB(e))
    return vp ? vp.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ZB ? "-0" : t;
}
var QB = nx, JB = QB;
function e4(e) {
  return e == null ? "" : JB(e);
}
var rx = e4, t4 = Ht, n4 = Pd, r4 = UB, o4 = rx;
function a4(e, t) {
  return t4(e) ? e : n4(e, t) ? [e] : r4(o4(e));
}
var ox = a4, i4 = ga, s4 = 1 / 0;
function l4(e) {
  if (typeof e == "string" || i4(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -s4 ? "-0" : t;
}
var Ss = l4, c4 = ox, u4 = Ss;
function d4(e, t) {
  t = c4(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[u4(t[n++])];
  return n && n == r ? e : void 0;
}
var Md = d4, f4 = Md;
function p4(e, t, n) {
  var r = e == null ? void 0 : f4(e, t);
  return r === void 0 ? n : r;
}
var m4 = p4;
function h4(e) {
  return e == null;
}
var v4 = h4;
const g4 = /* @__PURE__ */ on(v4);
var b4 = ur, y4 = Ht, w4 = dr, x4 = "[object String]";
function S4(e) {
  return typeof e == "string" || !y4(e) && w4(e) && b4(e) == x4;
}
var C4 = S4;
const ax = /* @__PURE__ */ on(C4);
var Ce = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gp;
function P4() {
  if (gp) return Ce;
  gp = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function v(b) {
    if (typeof b == "object" && b !== null) {
      var y = b.$$typeof;
      switch (y) {
        case e:
          switch (b = b.type, b) {
            case n:
            case o:
            case r:
            case c:
            case f:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case i:
                case l:
                case m:
                case p:
                case a:
                  return b;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return Ce.ContextConsumer = i, Ce.ContextProvider = a, Ce.Element = e, Ce.ForwardRef = l, Ce.Fragment = n, Ce.Lazy = m, Ce.Memo = p, Ce.Portal = t, Ce.Profiler = o, Ce.StrictMode = r, Ce.Suspense = c, Ce.SuspenseList = f, Ce.isAsyncMode = function() {
    return !1;
  }, Ce.isConcurrentMode = function() {
    return !1;
  }, Ce.isContextConsumer = function(b) {
    return v(b) === i;
  }, Ce.isContextProvider = function(b) {
    return v(b) === a;
  }, Ce.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, Ce.isForwardRef = function(b) {
    return v(b) === l;
  }, Ce.isFragment = function(b) {
    return v(b) === n;
  }, Ce.isLazy = function(b) {
    return v(b) === m;
  }, Ce.isMemo = function(b) {
    return v(b) === p;
  }, Ce.isPortal = function(b) {
    return v(b) === t;
  }, Ce.isProfiler = function(b) {
    return v(b) === o;
  }, Ce.isStrictMode = function(b) {
    return v(b) === r;
  }, Ce.isSuspense = function(b) {
    return v(b) === c;
  }, Ce.isSuspenseList = function(b) {
    return v(b) === f;
  }, Ce.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === o || b === r || b === c || b === f || b === h || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === p || b.$$typeof === a || b.$$typeof === i || b.$$typeof === l || b.$$typeof === g || b.getModuleId !== void 0);
  }, Ce.typeOf = v, Ce;
}
var Pe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bp;
function N4() {
  return bp || (bp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g = !1, v = !1, b = !1, y = !1, w = !1, x;
    x = Symbol.for("react.module.reference");
    function S(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === n || z === o || w || z === r || z === c || z === f || y || z === h || g || v || b || typeof z == "object" && z !== null && (z.$$typeof === m || z.$$typeof === p || z.$$typeof === a || z.$$typeof === i || z.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === x || z.getModuleId !== void 0));
    }
    function C(z) {
      if (typeof z == "object" && z !== null) {
        var oe = z.$$typeof;
        switch (oe) {
          case e:
            var le = z.type;
            switch (le) {
              case n:
              case o:
              case r:
              case c:
              case f:
                return le;
              default:
                var ve = le && le.$$typeof;
                switch (ve) {
                  case s:
                  case i:
                  case l:
                  case m:
                  case p:
                  case a:
                    return ve;
                  default:
                    return oe;
                }
            }
          case t:
            return oe;
        }
      }
    }
    var N = i, P = a, M = e, _ = l, B = n, T = m, k = p, G = t, $ = o, U = r, W = c, F = f, D = !1, L = !1;
    function ee(z) {
      return D || (D = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function te(z) {
      return L || (L = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function I(z) {
      return C(z) === i;
    }
    function O(z) {
      return C(z) === a;
    }
    function H(z) {
      return typeof z == "object" && z !== null && z.$$typeof === e;
    }
    function V(z) {
      return C(z) === l;
    }
    function Z(z) {
      return C(z) === n;
    }
    function A(z) {
      return C(z) === m;
    }
    function Y(z) {
      return C(z) === p;
    }
    function J(z) {
      return C(z) === t;
    }
    function ne(z) {
      return C(z) === o;
    }
    function re(z) {
      return C(z) === r;
    }
    function X(z) {
      return C(z) === c;
    }
    function q(z) {
      return C(z) === f;
    }
    Pe.ContextConsumer = N, Pe.ContextProvider = P, Pe.Element = M, Pe.ForwardRef = _, Pe.Fragment = B, Pe.Lazy = T, Pe.Memo = k, Pe.Portal = G, Pe.Profiler = $, Pe.StrictMode = U, Pe.Suspense = W, Pe.SuspenseList = F, Pe.isAsyncMode = ee, Pe.isConcurrentMode = te, Pe.isContextConsumer = I, Pe.isContextProvider = O, Pe.isElement = H, Pe.isForwardRef = V, Pe.isFragment = Z, Pe.isLazy = A, Pe.isMemo = Y, Pe.isPortal = J, Pe.isProfiler = ne, Pe.isStrictMode = re, Pe.isSuspense = X, Pe.isSuspenseList = q, Pe.isValidElementType = S, Pe.typeOf = C;
  }()), Pe;
}
process.env.NODE_ENV === "production" ? P4() : N4();
var E4 = ur, _4 = dr, R4 = "[object Number]";
function T4(e) {
  return typeof e == "number" || _4(e) && E4(e) == R4;
}
var ix = T4;
const M4 = /* @__PURE__ */ on(ix);
var A4 = ix;
function O4(e) {
  return A4(e) && e != +e;
}
var D4 = O4;
const I4 = /* @__PURE__ */ on(D4);
var Ma = function(t) {
  return ax(t) && t.indexOf("%") === t.length - 1;
}, At = function(t) {
  return M4(t) && !I4(t);
}, yi = function(t) {
  return At(t) || ax(t);
};
function cc(e) {
  "@babel/helpers - typeof";
  return cc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cc(e);
}
var k4 = ["viewBox", "children"], $4 = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], yp = ["points", "pathLength"], pl = {
  svg: k4,
  polygon: yp,
  polyline: yp
}, sx = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], L4 = function(t, n, r) {
  return function(o) {
    return t(n, r, o), null;
  };
}, F4 = function(t, n, r) {
  if (!Q0(t) || cc(t) !== "object")
    return null;
  var o = null;
  return Object.keys(t).forEach(function(a) {
    var i = t[a];
    sx.includes(a) && typeof i == "function" && (o || (o = {}), o[a] = L4(i, n, r));
  }), o;
}, B4 = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, z4 = function(t, n, r, o) {
  var a, i = (a = pl == null ? void 0 : pl[o]) !== null && a !== void 0 ? a : [];
  return n.startsWith("data-") || !bi(t) && (o && i.includes(n) || $4.includes(n)) || sx.includes(n);
}, lx = function(t, n, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var o = t;
  if (/* @__PURE__ */ Fa(t) && (o = t.props), !Q0(o))
    return null;
  var a = {};
  return Object.keys(o).forEach(function(i) {
    var s;
    z4((s = o) === null || s === void 0 ? void 0 : s[i], i, n, r) && (a[i] = o[i]);
  }), a;
}, j4 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function uc() {
  return uc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, uc.apply(this, arguments);
}
function H4(e, t) {
  if (e == null) return {};
  var n = W4(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function W4(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function V4(e) {
  var t = e.children, n = e.width, r = e.height, o = e.viewBox, a = e.className, i = e.style, s = e.title, l = e.desc, c = H4(e, j4), f = o || {
    width: n,
    height: r,
    x: 0,
    y: 0
  }, p = fn("recharts-surface", a);
  return /* @__PURE__ */ E.createElement("svg", uc({}, lx(c, !0, "svg"), {
    className: p,
    width: n,
    height: r,
    style: i,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
  }), /* @__PURE__ */ E.createElement("title", null, s), /* @__PURE__ */ E.createElement("desc", null, l), t);
}
var G4 = process.env.NODE_ENV !== "production", Ka = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  if (G4 && typeof console < "u" && console.warn && (n === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (n === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(n.replace(/%s/g, function() {
        return o[i++];
      }));
    }
};
function U4(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var a = Array(o); ++r < o; )
    a[r] = e[r + t];
  return a;
}
var K4 = U4, Y4 = K4;
function q4(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : Y4(e, t, n);
}
var X4 = q4, Z4 = "\\ud800-\\udfff", Q4 = "\\u0300-\\u036f", J4 = "\\ufe20-\\ufe2f", e3 = "\\u20d0-\\u20ff", t3 = Q4 + J4 + e3, n3 = "\\ufe0e\\ufe0f", r3 = "\\u200d", o3 = RegExp("[" + r3 + Z4 + t3 + n3 + "]");
function a3(e) {
  return o3.test(e);
}
var cx = a3;
function i3(e) {
  return e.split("");
}
var s3 = i3, ux = "\\ud800-\\udfff", l3 = "\\u0300-\\u036f", c3 = "\\ufe20-\\ufe2f", u3 = "\\u20d0-\\u20ff", d3 = l3 + c3 + u3, f3 = "\\ufe0e\\ufe0f", p3 = "[" + ux + "]", dc = "[" + d3 + "]", fc = "\\ud83c[\\udffb-\\udfff]", m3 = "(?:" + dc + "|" + fc + ")", dx = "[^" + ux + "]", fx = "(?:\\ud83c[\\udde6-\\uddff]){2}", px = "[\\ud800-\\udbff][\\udc00-\\udfff]", h3 = "\\u200d", mx = m3 + "?", hx = "[" + f3 + "]?", v3 = "(?:" + h3 + "(?:" + [dx, fx, px].join("|") + ")" + hx + mx + ")*", g3 = hx + mx + v3, b3 = "(?:" + [dx + dc + "?", dc, fx, px, p3].join("|") + ")", y3 = RegExp(fc + "(?=" + fc + ")|" + b3 + g3, "g");
function w3(e) {
  return e.match(y3) || [];
}
var x3 = w3, S3 = s3, C3 = cx, P3 = x3;
function N3(e) {
  return C3(e) ? P3(e) : S3(e);
}
var E3 = N3, _3 = X4, R3 = cx, T3 = E3, M3 = rx;
function A3(e) {
  return function(t) {
    t = M3(t);
    var n = R3(t) ? T3(t) : void 0, r = n ? n[0] : t.charAt(0), o = n ? _3(n, 1).join("") : t.slice(1);
    return r[e]() + o;
  };
}
var O3 = A3, D3 = O3, I3 = D3("toUpperCase"), k3 = I3;
const vx = /* @__PURE__ */ on(k3);
function Aa(e) {
  return function() {
    return e;
  };
}
const gx = Math.cos, wi = Math.sin, Wt = Math.sqrt, xi = Math.PI, Cs = 2 * xi, pc = Math.PI, mc = 2 * pc, Gn = 1e-6, $3 = mc - Gn;
function bx(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function L3(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return bx;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let o = 1, a = r.length; o < a; ++o)
      this._ += Math.round(arguments[o] * n) / n + r[o];
  };
}
class F3 {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? bx : L3(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, r, o) {
    this._append`Q${+t},${+n},${this._x1 = +r},${this._y1 = +o}`;
  }
  bezierCurveTo(t, n, r, o, a, i) {
    this._append`C${+t},${+n},${+r},${+o},${this._x1 = +a},${this._y1 = +i}`;
  }
  arcTo(t, n, r, o, a) {
    if (t = +t, n = +n, r = +r, o = +o, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let i = this._x1, s = this._y1, l = r - t, c = o - n, f = i - t, p = s - n, m = f * f + p * p;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (m > Gn) if (!(Math.abs(p * l - c * f) > Gn) || !a)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let h = r - i, g = o - s, v = l * l + c * c, b = h * h + g * g, y = Math.sqrt(v), w = Math.sqrt(m), x = a * Math.tan((pc - Math.acos((v + m - b) / (2 * y * w))) / 2), S = x / w, C = x / y;
      Math.abs(S - 1) > Gn && this._append`L${t + S * f},${n + S * p}`, this._append`A${a},${a},0,0,${+(p * h > f * g)},${this._x1 = t + C * l},${this._y1 = n + C * c}`;
    }
  }
  arc(t, n, r, o, a, i) {
    if (t = +t, n = +n, r = +r, i = !!i, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(o), l = r * Math.sin(o), c = t + s, f = n + l, p = 1 ^ i, m = i ? o - a : a - o;
    this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > Gn || Math.abs(this._y1 - f) > Gn) && this._append`L${c},${f}`, r && (m < 0 && (m = m % mc + mc), m > $3 ? this._append`A${r},${r},0,1,${p},${t - s},${n - l}A${r},${r},0,1,${p},${this._x1 = c},${this._y1 = f}` : m > Gn && this._append`A${r},${r},0,${+(m >= pc)},${p},${this._x1 = t + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(t, n, r, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+o}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function B3(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length) return t;
    if (n == null)
      t = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
      t = r;
    }
    return e;
  }, () => new F3(t);
}
const Ad = {
  draw(e, t) {
    const n = Wt(t / xi);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, Cs);
  }
}, z3 = {
  draw(e, t) {
    const n = Wt(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, yx = Wt(1 / 3), j3 = yx * 2, H3 = {
  draw(e, t) {
    const n = Wt(t / j3), r = n * yx;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
}, W3 = {
  draw(e, t) {
    const n = Wt(t), r = -n / 2;
    e.rect(r, r, n, n);
  }
}, V3 = 0.8908130915292852, wx = wi(xi / 10) / wi(7 * xi / 10), G3 = wi(Cs / 10) * wx, U3 = -gx(Cs / 10) * wx, K3 = {
  draw(e, t) {
    const n = Wt(t * V3), r = G3 * n, o = U3 * n;
    e.moveTo(0, -n), e.lineTo(r, o);
    for (let a = 1; a < 5; ++a) {
      const i = Cs * a / 5, s = gx(i), l = wi(i);
      e.lineTo(l * n, -s * n), e.lineTo(s * r - l * o, l * r + s * o);
    }
    e.closePath();
  }
}, ml = Wt(3), Y3 = {
  draw(e, t) {
    const n = -Wt(t / (ml * 3));
    e.moveTo(0, n * 2), e.lineTo(-ml * n, -n), e.lineTo(ml * n, -n), e.closePath();
  }
}, wt = -0.5, xt = Wt(3) / 2, hc = 1 / Wt(12), q3 = (hc / 2 + 1) * 3, X3 = {
  draw(e, t) {
    const n = Wt(t / q3), r = n / 2, o = n * hc, a = r, i = n * hc + n, s = -a, l = i;
    e.moveTo(r, o), e.lineTo(a, i), e.lineTo(s, l), e.lineTo(wt * r - xt * o, xt * r + wt * o), e.lineTo(wt * a - xt * i, xt * a + wt * i), e.lineTo(wt * s - xt * l, xt * s + wt * l), e.lineTo(wt * r + xt * o, wt * o - xt * r), e.lineTo(wt * a + xt * i, wt * i - xt * a), e.lineTo(wt * s + xt * l, wt * l - xt * s), e.closePath();
  }
};
function Z3(e, t) {
  let n = null, r = B3(o);
  e = typeof e == "function" ? e : Aa(e || Ad), t = typeof t == "function" ? t : Aa(t === void 0 ? 64 : +t);
  function o() {
    let a;
    if (n || (n = a = r()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), a) return n = null, a + "" || null;
  }
  return o.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : Aa(a), o) : e;
  }, o.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : Aa(+a), o) : t;
  }, o.context = function(a) {
    return arguments.length ? (n = a ?? null, o) : n;
  }, o;
}
function zo(e) {
  "@babel/helpers - typeof";
  return zo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zo(e);
}
var Q3 = ["type", "size", "sizeType"];
function vc() {
  return vc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, vc.apply(this, arguments);
}
function wp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function xp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wp(Object(n), !0).forEach(function(r) {
      J3(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function J3(e, t, n) {
  return t = ez(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ez(e) {
  var t = tz(e, "string");
  return zo(t) == "symbol" ? t : t + "";
}
function tz(e, t) {
  if (zo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (zo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nz(e, t) {
  if (e == null) return {};
  var n = rz(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function rz(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var xx = {
  symbolCircle: Ad,
  symbolCross: z3,
  symbolDiamond: H3,
  symbolSquare: W3,
  symbolStar: K3,
  symbolTriangle: Y3,
  symbolWye: X3
}, oz = Math.PI / 180, az = function(t) {
  var n = "symbol".concat(vx(t));
  return xx[n] || Ad;
}, iz = function(t, n, r) {
  if (n === "area")
    return t;
  switch (r) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var o = 18 * oz;
      return 1.25 * t * t * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, sz = function(t, n) {
  xx["symbol".concat(vx(t))] = n;
}, Sx = function(t) {
  var n = t.type, r = n === void 0 ? "circle" : n, o = t.size, a = o === void 0 ? 64 : o, i = t.sizeType, s = i === void 0 ? "area" : i, l = nz(t, Q3), c = xp(xp({}, l), {}, {
    type: r,
    size: a,
    sizeType: s
  }), f = function() {
    var b = az(r), y = Z3().type(b).size(iz(a, s, r));
    return y();
  }, p = c.className, m = c.cx, h = c.cy, g = lx(c, !0);
  return m === +m && h === +h && a === +a ? /* @__PURE__ */ E.createElement("path", vc({}, g, {
    className: fn("recharts-symbols", p),
    transform: "translate(".concat(m, ", ").concat(h, ")"),
    d: f()
  })) : null;
};
Sx.registerSymbol = sz;
function Ir(e) {
  "@babel/helpers - typeof";
  return Ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ir(e);
}
function gc() {
  return gc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, gc.apply(this, arguments);
}
function Sp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function lz(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sp(Object(n), !0).forEach(function(r) {
      jo(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function cz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function uz(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Px(r.key), r);
  }
}
function dz(e, t, n) {
  return t && uz(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function fz(e, t, n) {
  return t = Si(t), pz(e, Cx() ? Reflect.construct(t, n || [], Si(e).constructor) : t.apply(e, n));
}
function pz(e, t) {
  if (t && (Ir(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return mz(e);
}
function mz(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Cx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Cx = function() {
    return !!e;
  })();
}
function Si(e) {
  return Si = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Si(e);
}
function hz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && bc(e, t);
}
function bc(e, t) {
  return bc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, bc(e, t);
}
function jo(e, t, n) {
  return t = Px(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Px(e) {
  var t = vz(e, "string");
  return Ir(t) == "symbol" ? t : t + "";
}
function vz(e, t) {
  if (Ir(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ir(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var St = 32, Od = /* @__PURE__ */ function(e) {
  function t() {
    return cz(this, t), fz(this, t, arguments);
  }
  return hz(t, e), dz(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(r) {
        var o = this.props.inactiveColor, a = St / 2, i = St / 6, s = St / 3, l = r.inactive ? o : r.color;
        if (r.type === "plainline")
          return /* @__PURE__ */ E.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            strokeDasharray: r.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: St,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (r.type === "line")
          return /* @__PURE__ */ E.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            d: "M0,".concat(a, "h").concat(s, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(St, "M").concat(2 * s, ",").concat(a, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(s, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (r.type === "rect")
          return /* @__PURE__ */ E.createElement("path", {
            stroke: "none",
            fill: l,
            d: "M0,".concat(St / 8, "h").concat(St, "v").concat(St * 3 / 4, "h").concat(-St, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ E.isValidElement(r.legendIcon)) {
          var c = lz({}, r);
          return delete c.legendIcon, /* @__PURE__ */ E.cloneElement(r.legendIcon, c);
        }
        return /* @__PURE__ */ E.createElement(Sx, {
          fill: l,
          cx: a,
          cy: a,
          size: St,
          sizeType: "diameter",
          type: r.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var r = this, o = this.props, a = o.payload, i = o.iconSize, s = o.layout, l = o.formatter, c = o.inactiveColor, f = {
        x: 0,
        y: 0,
        width: St,
        height: St
      }, p = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, m = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(h, g) {
        var v = h.formatter || l, b = fn(jo(jo({
          "recharts-legend-item": !0
        }, "legend-item-".concat(g), !0), "inactive", h.inactive));
        if (h.type === "none")
          return null;
        var y = bi(h.value) ? null : h.value;
        Ka(
          !bi(h.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var w = h.inactive ? c : h.color;
        return /* @__PURE__ */ E.createElement("li", gc({
          className: b,
          style: p,
          key: "legend-item-".concat(g)
        }, F4(r.props, h, g)), /* @__PURE__ */ E.createElement(V4, {
          width: i,
          height: i,
          viewBox: f,
          style: m
        }, r.renderIcon(h)), /* @__PURE__ */ E.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: w
          }
        }, v ? v(y, h, g) : y));
      });
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.payload, a = r.layout, i = r.align;
      if (!o || !o.length)
        return null;
      var s = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? i : "left"
      };
      return /* @__PURE__ */ E.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
}(Oi);
jo(Od, "displayName", "Legend");
jo(Od, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var gz = ws;
function bz() {
  this.__data__ = new gz(), this.size = 0;
}
var yz = bz;
function wz(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var xz = wz;
function Sz(e) {
  return this.__data__.get(e);
}
var Cz = Sz;
function Pz(e) {
  return this.__data__.has(e);
}
var Nz = Pz, Ez = ws, _z = _d, Rz = Rd, Tz = 200;
function Mz(e, t) {
  var n = this.__data__;
  if (n instanceof Ez) {
    var r = n.__data__;
    if (!_z || r.length < Tz - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Rz(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var Az = Mz, Oz = ws, Dz = yz, Iz = xz, kz = Cz, $z = Nz, Lz = Az;
function no(e) {
  var t = this.__data__ = new Oz(e);
  this.size = t.size;
}
no.prototype.clear = Dz;
no.prototype.delete = Iz;
no.prototype.get = kz;
no.prototype.has = $z;
no.prototype.set = Lz;
var Nx = no, Fz = "__lodash_hash_undefined__";
function Bz(e) {
  return this.__data__.set(e, Fz), this;
}
var zz = Bz;
function jz(e) {
  return this.__data__.has(e);
}
var Hz = jz, Wz = Rd, Vz = zz, Gz = Hz;
function Ci(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Wz(); ++t < n; )
    this.add(e[t]);
}
Ci.prototype.add = Ci.prototype.push = Vz;
Ci.prototype.has = Gz;
var Ex = Ci;
function Uz(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var Kz = Uz;
function Yz(e, t) {
  return e.has(t);
}
var _x = Yz, qz = Ex, Xz = Kz, Zz = _x, Qz = 1, Jz = 2;
function ej(e, t, n, r, o, a) {
  var i = n & Qz, s = e.length, l = t.length;
  if (s != l && !(i && l > s))
    return !1;
  var c = a.get(e), f = a.get(t);
  if (c && f)
    return c == t && f == e;
  var p = -1, m = !0, h = n & Jz ? new qz() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < s; ) {
    var g = e[p], v = t[p];
    if (r)
      var b = i ? r(v, g, p, t, e, a) : r(g, v, p, e, t, a);
    if (b !== void 0) {
      if (b)
        continue;
      m = !1;
      break;
    }
    if (h) {
      if (!Xz(t, function(y, w) {
        if (!Zz(h, w) && (g === y || o(g, y, n, r, a)))
          return h.push(w);
      })) {
        m = !1;
        break;
      }
    } else if (!(g === v || o(g, v, n, r, a))) {
      m = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), m;
}
var Rx = ej, tj = an, nj = tj.Uint8Array, rj = nj;
function oj(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
var aj = oj;
function ij(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Dd = ij, Cp = va, Pp = rj, sj = Ed, lj = Rx, cj = aj, uj = Dd, dj = 1, fj = 2, pj = "[object Boolean]", mj = "[object Date]", hj = "[object Error]", vj = "[object Map]", gj = "[object Number]", bj = "[object RegExp]", yj = "[object Set]", wj = "[object String]", xj = "[object Symbol]", Sj = "[object ArrayBuffer]", Cj = "[object DataView]", Np = Cp ? Cp.prototype : void 0, hl = Np ? Np.valueOf : void 0;
function Pj(e, t, n, r, o, a, i) {
  switch (n) {
    case Cj:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Sj:
      return !(e.byteLength != t.byteLength || !a(new Pp(e), new Pp(t)));
    case pj:
    case mj:
    case gj:
      return sj(+e, +t);
    case hj:
      return e.name == t.name && e.message == t.message;
    case bj:
    case wj:
      return e == t + "";
    case vj:
      var s = cj;
    case yj:
      var l = r & dj;
      if (s || (s = uj), e.size != t.size && !l)
        return !1;
      var c = i.get(e);
      if (c)
        return c == t;
      r |= fj, i.set(e, t);
      var f = lj(s(e), s(t), r, o, a, i);
      return i.delete(e), f;
    case xj:
      if (hl)
        return hl.call(e) == hl.call(t);
  }
  return !1;
}
var Nj = Pj;
function Ej(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Tx = Ej, _j = Tx, Rj = Ht;
function Tj(e, t, n) {
  var r = t(e);
  return Rj(e) ? r : _j(r, n(e));
}
var Mj = Tj;
function Aj(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (a[o++] = i);
  }
  return a;
}
var Oj = Aj;
function Dj() {
  return [];
}
var Ij = Dj, kj = Oj, $j = Ij, Lj = Object.prototype, Fj = Lj.propertyIsEnumerable, Ep = Object.getOwnPropertySymbols, Bj = Ep ? function(e) {
  return e == null ? [] : (e = Object(e), kj(Ep(e), function(t) {
    return Fj.call(e, t);
  }));
} : $j, zj = Bj;
function jj(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Hj = jj, Wj = ur, Vj = dr, Gj = "[object Arguments]";
function Uj(e) {
  return Vj(e) && Wj(e) == Gj;
}
var Kj = Uj, _p = Kj, Yj = dr, Mx = Object.prototype, qj = Mx.hasOwnProperty, Xj = Mx.propertyIsEnumerable, Zj = _p(/* @__PURE__ */ function() {
  return arguments;
}()) ? _p : function(e) {
  return Yj(e) && qj.call(e, "callee") && !Xj.call(e, "callee");
}, Id = Zj, Pi = { exports: {} };
function Qj() {
  return !1;
}
var Jj = Qj;
Pi.exports;
(function(e, t) {
  var n = an, r = Jj, o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, i = a && a.exports === o, s = i ? n.Buffer : void 0, l = s ? s.isBuffer : void 0, c = l || r;
  e.exports = c;
})(Pi, Pi.exports);
var Ax = Pi.exports, eH = 9007199254740991, tH = /^(?:0|[1-9]\d*)$/;
function nH(e, t) {
  var n = typeof e;
  return t = t ?? eH, !!t && (n == "number" || n != "symbol" && tH.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var kd = nH, rH = 9007199254740991;
function oH(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= rH;
}
var $d = oH, aH = ur, iH = $d, sH = dr, lH = "[object Arguments]", cH = "[object Array]", uH = "[object Boolean]", dH = "[object Date]", fH = "[object Error]", pH = "[object Function]", mH = "[object Map]", hH = "[object Number]", vH = "[object Object]", gH = "[object RegExp]", bH = "[object Set]", yH = "[object String]", wH = "[object WeakMap]", xH = "[object ArrayBuffer]", SH = "[object DataView]", CH = "[object Float32Array]", PH = "[object Float64Array]", NH = "[object Int8Array]", EH = "[object Int16Array]", _H = "[object Int32Array]", RH = "[object Uint8Array]", TH = "[object Uint8ClampedArray]", MH = "[object Uint16Array]", AH = "[object Uint32Array]", ke = {};
ke[CH] = ke[PH] = ke[NH] = ke[EH] = ke[_H] = ke[RH] = ke[TH] = ke[MH] = ke[AH] = !0;
ke[lH] = ke[cH] = ke[xH] = ke[uH] = ke[SH] = ke[dH] = ke[fH] = ke[pH] = ke[mH] = ke[hH] = ke[vH] = ke[gH] = ke[bH] = ke[yH] = ke[wH] = !1;
function OH(e) {
  return sH(e) && iH(e.length) && !!ke[aH(e)];
}
var DH = OH;
function IH(e) {
  return function(t) {
    return e(t);
  };
}
var Ox = IH, Ni = { exports: {} };
Ni.exports;
(function(e, t) {
  var n = X0, r = t && !t.nodeType && t, o = r && !0 && e && !e.nodeType && e, a = o && o.exports === r, i = a && n.process, s = function() {
    try {
      var l = o && o.require && o.require("util").types;
      return l || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(Ni, Ni.exports);
var kH = Ni.exports, $H = DH, LH = Ox, Rp = kH, Tp = Rp && Rp.isTypedArray, FH = Tp ? LH(Tp) : $H, Dx = FH, BH = Hj, zH = Id, jH = Ht, HH = Ax, WH = kd, VH = Dx, GH = Object.prototype, UH = GH.hasOwnProperty;
function KH(e, t) {
  var n = jH(e), r = !n && zH(e), o = !n && !r && HH(e), a = !n && !r && !o && VH(e), i = n || r || o || a, s = i ? BH(e.length, String) : [], l = s.length;
  for (var c in e)
    (t || UH.call(e, c)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    WH(c, l))) && s.push(c);
  return s;
}
var YH = KH, qH = Object.prototype;
function XH(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || qH;
  return e === n;
}
var ZH = XH;
function QH(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var JH = QH, eW = JH, tW = eW(Object.keys, Object), nW = tW, rW = ZH, oW = nW, aW = Object.prototype, iW = aW.hasOwnProperty;
function sW(e) {
  if (!rW(e))
    return oW(e);
  var t = [];
  for (var n in Object(e))
    iW.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var lW = sW, cW = Nd, uW = $d;
function dW(e) {
  return e != null && uW(e.length) && !cW(e);
}
var Ps = dW, fW = YH, pW = lW, mW = Ps;
function hW(e) {
  return mW(e) ? fW(e) : pW(e);
}
var Ld = hW, vW = Mj, gW = zj, bW = Ld;
function yW(e) {
  return vW(e, bW, gW);
}
var wW = yW, Mp = wW, xW = 1, SW = Object.prototype, CW = SW.hasOwnProperty;
function PW(e, t, n, r, o, a) {
  var i = n & xW, s = Mp(e), l = s.length, c = Mp(t), f = c.length;
  if (l != f && !i)
    return !1;
  for (var p = l; p--; ) {
    var m = s[p];
    if (!(i ? m in t : CW.call(t, m)))
      return !1;
  }
  var h = a.get(e), g = a.get(t);
  if (h && g)
    return h == t && g == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var b = i; ++p < l; ) {
    m = s[p];
    var y = e[m], w = t[m];
    if (r)
      var x = i ? r(w, y, m, t, e, a) : r(y, w, m, e, t, a);
    if (!(x === void 0 ? y === w || o(y, w, n, r, a) : x)) {
      v = !1;
      break;
    }
    b || (b = m == "constructor");
  }
  if (v && !b) {
    var S = e.constructor, C = t.constructor;
    S != C && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof C == "function" && C instanceof C) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var NW = PW, EW = fr, _W = an, RW = EW(_W, "DataView"), TW = RW, MW = fr, AW = an, OW = MW(AW, "Promise"), DW = OW, IW = fr, kW = an, $W = IW(kW, "Set"), Ix = $W, LW = fr, FW = an, BW = LW(FW, "WeakMap"), zW = BW, yc = TW, wc = _d, xc = DW, Sc = Ix, Cc = zW, kx = ur, ro = J0, Ap = "[object Map]", jW = "[object Object]", Op = "[object Promise]", Dp = "[object Set]", Ip = "[object WeakMap]", kp = "[object DataView]", HW = ro(yc), WW = ro(wc), VW = ro(xc), GW = ro(Sc), UW = ro(Cc), Un = kx;
(yc && Un(new yc(new ArrayBuffer(1))) != kp || wc && Un(new wc()) != Ap || xc && Un(xc.resolve()) != Op || Sc && Un(new Sc()) != Dp || Cc && Un(new Cc()) != Ip) && (Un = function(e) {
  var t = kx(e), n = t == jW ? e.constructor : void 0, r = n ? ro(n) : "";
  if (r)
    switch (r) {
      case HW:
        return kp;
      case WW:
        return Ap;
      case VW:
        return Op;
      case GW:
        return Dp;
      case UW:
        return Ip;
    }
  return t;
});
var KW = Un, vl = Nx, YW = Rx, qW = Nj, XW = NW, $p = KW, Lp = Ht, Fp = Ax, ZW = Dx, QW = 1, Bp = "[object Arguments]", zp = "[object Array]", Oa = "[object Object]", JW = Object.prototype, jp = JW.hasOwnProperty;
function e8(e, t, n, r, o, a) {
  var i = Lp(e), s = Lp(t), l = i ? zp : $p(e), c = s ? zp : $p(t);
  l = l == Bp ? Oa : l, c = c == Bp ? Oa : c;
  var f = l == Oa, p = c == Oa, m = l == c;
  if (m && Fp(e)) {
    if (!Fp(t))
      return !1;
    i = !0, f = !1;
  }
  if (m && !f)
    return a || (a = new vl()), i || ZW(e) ? YW(e, t, n, r, o, a) : qW(e, t, l, n, r, o, a);
  if (!(n & QW)) {
    var h = f && jp.call(e, "__wrapped__"), g = p && jp.call(t, "__wrapped__");
    if (h || g) {
      var v = h ? e.value() : e, b = g ? t.value() : t;
      return a || (a = new vl()), o(v, b, n, r, a);
    }
  }
  return m ? (a || (a = new vl()), XW(e, t, n, r, o, a)) : !1;
}
var t8 = e8, n8 = t8, Hp = dr;
function $x(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Hp(e) && !Hp(t) ? e !== e && t !== t : n8(e, t, n, r, $x, o);
}
var Lx = $x, r8 = Nx, o8 = Lx, a8 = 1, i8 = 2;
function s8(e, t, n, r) {
  var o = n.length, a = o, i = !r;
  if (e == null)
    return !a;
  for (e = Object(e); o--; ) {
    var s = n[o];
    if (i && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++o < a; ) {
    s = n[o];
    var l = s[0], c = e[l], f = s[1];
    if (i && s[2]) {
      if (c === void 0 && !(l in e))
        return !1;
    } else {
      var p = new r8();
      if (r)
        var m = r(c, f, l, e, t, p);
      if (!(m === void 0 ? o8(f, c, a8 | i8, r, p) : m))
        return !1;
    }
  }
  return !0;
}
var l8 = s8, c8 = zn;
function u8(e) {
  return e === e && !c8(e);
}
var Fx = u8, d8 = Fx, f8 = Ld;
function p8(e) {
  for (var t = f8(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, d8(o)];
  }
  return t;
}
var m8 = p8;
function h8(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var Bx = h8, v8 = l8, g8 = m8, b8 = Bx;
function y8(e) {
  var t = g8(e);
  return t.length == 1 && t[0][2] ? b8(t[0][0], t[0][1]) : function(n) {
    return n === e || v8(n, e, t);
  };
}
var w8 = y8;
function x8(e, t) {
  return e != null && t in Object(e);
}
var S8 = x8, C8 = ox, P8 = Id, N8 = Ht, E8 = kd, _8 = $d, R8 = Ss;
function T8(e, t, n) {
  t = C8(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var i = R8(t[r]);
    if (!(a = e != null && n(e, i)))
      break;
    e = e[i];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && _8(o) && E8(i, o) && (N8(e) || P8(e)));
}
var M8 = T8, A8 = S8, O8 = M8;
function D8(e, t) {
  return e != null && O8(e, t, A8);
}
var I8 = D8, k8 = Lx, $8 = m4, L8 = I8, F8 = Pd, B8 = Fx, z8 = Bx, j8 = Ss, H8 = 1, W8 = 2;
function V8(e, t) {
  return F8(e) && B8(t) ? z8(j8(e), t) : function(n) {
    var r = $8(n, e);
    return r === void 0 && r === t ? L8(n, e) : k8(t, r, H8 | W8);
  };
}
var G8 = V8;
function U8(e) {
  return e;
}
var Ns = U8;
function K8(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var Y8 = K8, q8 = Md;
function X8(e) {
  return function(t) {
    return q8(t, e);
  };
}
var Z8 = X8, Q8 = Y8, J8 = Z8, e6 = Pd, t6 = Ss;
function n6(e) {
  return e6(e) ? Q8(t6(e)) : J8(e);
}
var r6 = n6, o6 = w8, a6 = G8, i6 = Ns, s6 = Ht, l6 = r6;
function c6(e) {
  return typeof e == "function" ? e : e == null ? i6 : typeof e == "object" ? s6(e) ? a6(e[0], e[1]) : o6(e) : l6(e);
}
var zx = c6;
function u6(e, t, n, r) {
  for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var d6 = u6;
function f6(e) {
  return e !== e;
}
var p6 = f6;
function m6(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
var h6 = m6, v6 = d6, g6 = p6, b6 = h6;
function y6(e, t, n) {
  return t === t ? b6(e, t, n) : v6(e, g6, n);
}
var w6 = y6, x6 = w6;
function S6(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && x6(e, t, 0) > -1;
}
var C6 = S6;
function P6(e, t, n) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (n(t, e[r]))
      return !0;
  return !1;
}
var N6 = P6;
function E6() {
}
var _6 = E6, gl = Ix, R6 = _6, T6 = Dd, M6 = 1 / 0, A6 = gl && 1 / T6(new gl([, -0]))[1] == M6 ? function(e) {
  return new gl(e);
} : R6, O6 = A6, D6 = Ex, I6 = C6, k6 = N6, $6 = _x, L6 = O6, F6 = Dd, B6 = 200;
function z6(e, t, n) {
  var r = -1, o = I6, a = e.length, i = !0, s = [], l = s;
  if (n)
    i = !1, o = k6;
  else if (a >= B6) {
    var c = t ? null : L6(e);
    if (c)
      return F6(c);
    i = !1, o = $6, l = new D6();
  } else
    l = t ? [] : s;
  e:
    for (; ++r < a; ) {
      var f = e[r], p = t ? t(f) : f;
      if (f = n || f !== 0 ? f : 0, i && p === p) {
        for (var m = l.length; m--; )
          if (l[m] === p)
            continue e;
        t && l.push(p), s.push(f);
      } else o(l, p, n) || (l !== s && l.push(p), s.push(f));
    }
  return s;
}
var j6 = z6, H6 = zx, W6 = j6;
function V6(e, t) {
  return e && e.length ? W6(e, H6(t)) : [];
}
var G6 = V6;
const Wp = /* @__PURE__ */ on(G6);
function jx(e, t, n) {
  return t === !0 ? Wp(e, n) : bi(t) ? Wp(e, t) : e;
}
function kr(e) {
  "@babel/helpers - typeof";
  return kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kr(e);
}
var U6 = ["ref"];
function Vp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function cn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vp(Object(n), !0).forEach(function(r) {
      Es(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function K6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gp(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Wx(r.key), r);
  }
}
function Y6(e, t, n) {
  return t && Gp(e.prototype, t), n && Gp(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function q6(e, t, n) {
  return t = Ei(t), X6(e, Hx() ? Reflect.construct(t, n || [], Ei(e).constructor) : t.apply(e, n));
}
function X6(e, t) {
  if (t && (kr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Z6(e);
}
function Z6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Hx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Hx = function() {
    return !!e;
  })();
}
function Ei(e) {
  return Ei = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ei(e);
}
function Q6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Pc(e, t);
}
function Pc(e, t) {
  return Pc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Pc(e, t);
}
function Es(e, t, n) {
  return t = Wx(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Wx(e) {
  var t = J6(e, "string");
  return kr(t) == "symbol" ? t : t + "";
}
function J6(e, t) {
  if (kr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (kr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function eV(e, t) {
  if (e == null) return {};
  var n = tV(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function tV(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function nV(e) {
  return e.value;
}
function rV(e, t) {
  if (/* @__PURE__ */ E.isValidElement(e))
    return /* @__PURE__ */ E.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ E.createElement(e, t);
  t.ref;
  var n = eV(t, U6);
  return /* @__PURE__ */ E.createElement(Od, n);
}
var Up = 1, Fd = /* @__PURE__ */ function(e) {
  function t() {
    var n;
    K6(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = q6(this, t, [].concat(o)), Es(n, "lastBoundingBox", {
      width: -1,
      height: -1
    }), n;
  }
  return Q6(t, e), Y6(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        return r.height = this.wrapperNode.offsetHeight, r.width = this.wrapperNode.offsetWidth, r;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var r = this.props.onBBoxUpdate, o = this.getBBox();
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > Up || Math.abs(o.height - this.lastBoundingBox.height) > Up) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, r && r(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, r && r(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? cn({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(r) {
      var o = this.props, a = o.layout, i = o.align, s = o.verticalAlign, l = o.margin, c = o.chartWidth, f = o.chartHeight, p, m;
      if (!r || (r.left === void 0 || r.left === null) && (r.right === void 0 || r.right === null))
        if (i === "center" && a === "vertical") {
          var h = this.getBBoxSnapshot();
          p = {
            left: ((c || 0) - h.width) / 2
          };
        } else
          p = i === "right" ? {
            right: l && l.right || 0
          } : {
            left: l && l.left || 0
          };
      if (!r || (r.top === void 0 || r.top === null) && (r.bottom === void 0 || r.bottom === null))
        if (s === "middle") {
          var g = this.getBBoxSnapshot();
          m = {
            top: ((f || 0) - g.height) / 2
          };
        } else
          m = s === "bottom" ? {
            bottom: l && l.bottom || 0
          } : {
            top: l && l.top || 0
          };
      return cn(cn({}, p), m);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.content, i = o.width, s = o.height, l = o.wrapperStyle, c = o.payloadUniqBy, f = o.payload, p = cn(cn({
        position: "absolute",
        width: i || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(l)), l);
      return /* @__PURE__ */ E.createElement("div", {
        className: "recharts-legend-wrapper",
        style: p,
        ref: function(h) {
          r.wrapperNode = h;
        }
      }, rV(a, cn(cn({}, this.props), {}, {
        payload: jx(f, c, nV)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(r, o) {
      var a = cn(cn({}, this.defaultProps), r.props), i = a.layout;
      return i === "vertical" && At(r.props.height) ? {
        height: r.props.height
      } : i === "horizontal" ? {
        width: r.props.width || o
      } : null;
    }
  }]);
}(Oi);
Es(Fd, "displayName", "Legend");
Es(Fd, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Kp = va, oV = Id, aV = Ht, Yp = Kp ? Kp.isConcatSpreadable : void 0;
function iV(e) {
  return aV(e) || oV(e) || !!(Yp && e && e[Yp]);
}
var sV = iV, lV = Tx, cV = sV;
function Vx(e, t, n, r, o) {
  var a = -1, i = e.length;
  for (n || (n = cV), o || (o = []); ++a < i; ) {
    var s = e[a];
    t > 0 && n(s) ? t > 1 ? Vx(s, t - 1, n, r, o) : lV(o, s) : r || (o[o.length] = s);
  }
  return o;
}
var uV = Vx;
function dV(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), i = r(t), s = i.length; s--; ) {
      var l = i[e ? s : ++o];
      if (n(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var fV = dV, pV = fV, mV = pV(), hV = mV, vV = hV, gV = Ld;
function bV(e, t) {
  return e && vV(e, t, gV);
}
var yV = bV, wV = Ps;
function xV(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!wV(n))
      return e(n, r);
    for (var o = n.length, a = t ? o : -1, i = Object(n); (t ? a-- : ++a < o) && r(i[a], a, i) !== !1; )
      ;
    return n;
  };
}
var SV = xV, CV = yV, PV = SV, NV = PV(CV), EV = NV, _V = EV, RV = Ps;
function TV(e, t) {
  var n = -1, r = RV(e) ? Array(e.length) : [];
  return _V(e, function(o, a, i) {
    r[++n] = t(o, a, i);
  }), r;
}
var MV = TV;
function AV(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
var OV = AV, qp = ga;
function DV(e, t) {
  if (e !== t) {
    var n = e !== void 0, r = e === null, o = e === e, a = qp(e), i = t !== void 0, s = t === null, l = t === t, c = qp(t);
    if (!s && !c && !a && e > t || a && i && l && !s && !c || r && i && l || !n && l || !o)
      return 1;
    if (!r && !a && !c && e < t || c && n && o && !r && !a || s && n && o || !i && o || !l)
      return -1;
  }
  return 0;
}
var IV = DV, kV = IV;
function $V(e, t, n) {
  for (var r = -1, o = e.criteria, a = t.criteria, i = o.length, s = n.length; ++r < i; ) {
    var l = kV(o[r], a[r]);
    if (l) {
      if (r >= s)
        return l;
      var c = n[r];
      return l * (c == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var LV = $V, bl = tx, FV = Md, BV = zx, zV = MV, jV = OV, HV = Ox, WV = LV, VV = Ns, GV = Ht;
function UV(e, t, n) {
  t.length ? t = bl(t, function(a) {
    return GV(a) ? function(i) {
      return FV(i, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [VV];
  var r = -1;
  t = bl(t, HV(BV));
  var o = zV(e, function(a, i, s) {
    var l = bl(t, function(c) {
      return c(a);
    });
    return { criteria: l, index: ++r, value: a };
  });
  return jV(o, function(a, i) {
    return WV(a, i, n);
  });
}
var KV = UV;
function YV(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var qV = YV, XV = qV, Xp = Math.max;
function ZV(e, t, n) {
  return t = Xp(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = Xp(r.length - t, 0), i = Array(a); ++o < a; )
      i[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(i), XV(e, this, s);
  };
}
var QV = ZV;
function JV(e) {
  return function() {
    return e;
  };
}
var e9 = JV, t9 = fr, n9 = function() {
  try {
    var e = t9(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), r9 = n9, o9 = e9, Zp = r9, a9 = Ns, i9 = Zp ? function(e, t) {
  return Zp(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: o9(t),
    writable: !0
  });
} : a9, s9 = i9, l9 = 800, c9 = 16, u9 = Date.now;
function d9(e) {
  var t = 0, n = 0;
  return function() {
    var r = u9(), o = c9 - (r - n);
    if (n = r, o > 0) {
      if (++t >= l9)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var f9 = d9, p9 = s9, m9 = f9, h9 = m9(p9), v9 = h9, g9 = Ns, b9 = QV, y9 = v9;
function w9(e, t) {
  return y9(b9(e, t, g9), e + "");
}
var x9 = w9, S9 = Ed, C9 = Ps, P9 = kd, N9 = zn;
function E9(e, t, n) {
  if (!N9(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? C9(n) && P9(t, n.length) : r == "string" && t in n) ? S9(n[t], e) : !1;
}
var _9 = E9, R9 = uV, T9 = KV, M9 = x9, Qp = _9, A9 = M9(function(e, t) {
  if (e == null)
    return [];
  var n = t.length;
  return n > 1 && Qp(e, t[0], t[1]) ? t = [] : n > 2 && Qp(t[0], t[1], t[2]) && (t = [t[0]]), T9(e, R9(t, 1), []);
}), O9 = A9;
const D9 = /* @__PURE__ */ on(O9);
function Ho(e) {
  "@babel/helpers - typeof";
  return Ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ho(e);
}
function Nc() {
  return Nc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Nc.apply(this, arguments);
}
function I9(e, t) {
  return F9(e) || L9(e, t) || $9(e, t) || k9();
}
function k9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $9(e, t) {
  if (e) {
    if (typeof e == "string") return Jp(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Jp(e, t);
  }
}
function Jp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function L9(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, s = [], l = !0, c = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (f) {
      c = !0, o = f;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return s;
  }
}
function F9(e) {
  if (Array.isArray(e)) return e;
}
function em(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function yl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? em(Object(n), !0).forEach(function(r) {
      B9(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : em(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function B9(e, t, n) {
  return t = z9(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function z9(e) {
  var t = j9(e, "string");
  return Ho(t) == "symbol" ? t : t + "";
}
function j9(e, t) {
  if (Ho(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ho(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function H9(e) {
  return Array.isArray(e) && yi(e[0]) && yi(e[1]) ? e.join(" ~ ") : e;
}
var W9 = function(t) {
  var n = t.separator, r = n === void 0 ? " : " : n, o = t.contentStyle, a = o === void 0 ? {} : o, i = t.itemStyle, s = i === void 0 ? {} : i, l = t.labelStyle, c = l === void 0 ? {} : l, f = t.payload, p = t.formatter, m = t.itemSorter, h = t.wrapperClassName, g = t.labelClassName, v = t.label, b = t.labelFormatter, y = t.accessibilityLayer, w = y === void 0 ? !1 : y, x = function() {
    if (f && f.length) {
      var k = {
        padding: 0,
        margin: 0
      }, G = (m ? D9(f, m) : f).map(function($, U) {
        if ($.type === "none")
          return null;
        var W = yl({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: $.color || "#000"
        }, s), F = $.formatter || p || H9, D = $.value, L = $.name, ee = D, te = L;
        if (F && ee != null && te != null) {
          var I = F(D, L, $, U, f);
          if (Array.isArray(I)) {
            var O = I9(I, 2);
            ee = O[0], te = O[1];
          } else
            ee = I;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ E.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(U),
            style: W
          }, yi(te) ? /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, te) : null, yi(te) ? /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, r) : null, /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, ee), /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, $.unit || ""))
        );
      });
      return /* @__PURE__ */ E.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: k
      }, G);
    }
    return null;
  }, S = yl({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), C = yl({
    margin: 0
  }, c), N = !g4(v), P = N ? v : "", M = fn("recharts-default-tooltip", h), _ = fn("recharts-tooltip-label", g);
  N && b && f !== void 0 && f !== null && (P = b(v, f));
  var B = w ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ E.createElement("div", Nc({
    className: M,
    style: S
  }, B), /* @__PURE__ */ E.createElement("p", {
    className: _,
    style: C
  }, /* @__PURE__ */ E.isValidElement(P) ? P : "".concat(P)), x());
};
function Wo(e) {
  "@babel/helpers - typeof";
  return Wo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wo(e);
}
function Da(e, t, n) {
  return t = V9(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function V9(e) {
  var t = G9(e, "string");
  return Wo(t) == "symbol" ? t : t + "";
}
function G9(e, t) {
  if (Wo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Wo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vo = "recharts-tooltip-wrapper", U9 = {
  visibility: "hidden"
};
function K9(e) {
  var t = e.coordinate, n = e.translateX, r = e.translateY;
  return fn(vo, Da(Da(Da(Da({}, "".concat(vo, "-right"), At(n) && t && At(t.x) && n >= t.x), "".concat(vo, "-left"), At(n) && t && At(t.x) && n < t.x), "".concat(vo, "-bottom"), At(r) && t && At(t.y) && r >= t.y), "".concat(vo, "-top"), At(r) && t && At(t.y) && r < t.y));
}
function tm(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.key, o = e.offsetTopLeft, a = e.position, i = e.reverseDirection, s = e.tooltipDimension, l = e.viewBox, c = e.viewBoxDimension;
  if (a && At(a[r]))
    return a[r];
  var f = n[r] - s - o, p = n[r] + o;
  if (t[r])
    return i[r] ? f : p;
  if (i[r]) {
    var m = f, h = l[r];
    return m < h ? Math.max(p, l[r]) : Math.max(f, l[r]);
  }
  var g = p + s, v = l[r] + c;
  return g > v ? Math.max(f, l[r]) : Math.max(p, l[r]);
}
function Y9(e) {
  var t = e.translateX, n = e.translateY, r = e.useTranslate3d;
  return {
    transform: r ? "translate3d(".concat(t, "px, ").concat(n, "px, 0)") : "translate(".concat(t, "px, ").concat(n, "px)")
  };
}
function q9(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.offsetTopLeft, o = e.position, a = e.reverseDirection, i = e.tooltipBox, s = e.useTranslate3d, l = e.viewBox, c, f, p;
  return i.height > 0 && i.width > 0 && n ? (f = tm({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "x",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.width,
    viewBox: l,
    viewBoxDimension: l.width
  }), p = tm({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "y",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.height,
    viewBox: l,
    viewBoxDimension: l.height
  }), c = Y9({
    translateX: f,
    translateY: p,
    useTranslate3d: s
  })) : c = U9, {
    cssProperties: c,
    cssClasses: K9({
      translateX: f,
      translateY: p,
      coordinate: n
    })
  };
}
function $r(e) {
  "@babel/helpers - typeof";
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $r(e);
}
function nm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function rm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nm(Object(n), !0).forEach(function(r) {
      _c(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nm(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function X9(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Z9(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ux(r.key), r);
  }
}
function Q9(e, t, n) {
  return t && Z9(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function J9(e, t, n) {
  return t = _i(t), eG(e, Gx() ? Reflect.construct(t, n || [], _i(e).constructor) : t.apply(e, n));
}
function eG(e, t) {
  if (t && ($r(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return tG(e);
}
function tG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Gx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Gx = function() {
    return !!e;
  })();
}
function _i(e) {
  return _i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, _i(e);
}
function nG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ec(e, t);
}
function Ec(e, t) {
  return Ec = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Ec(e, t);
}
function _c(e, t, n) {
  return t = Ux(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ux(e) {
  var t = rG(e, "string");
  return $r(t) == "symbol" ? t : t + "";
}
function rG(e, t) {
  if ($r(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if ($r(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var om = 1, oG = /* @__PURE__ */ function(e) {
  function t() {
    var n;
    X9(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = J9(this, t, [].concat(o)), _c(n, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), _c(n, "handleKeyDown", function(i) {
      if (i.key === "Escape") {
        var s, l, c, f;
        n.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (l = n.props.coordinate) === null || l === void 0 ? void 0 : l.x) !== null && s !== void 0 ? s : 0,
            y: (c = (f = n.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && c !== void 0 ? c : 0
          }
        });
      }
    }), n;
  }
  return nG(t, e), Q9(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        (Math.abs(r.width - this.state.lastBoundingBox.width) > om || Math.abs(r.height - this.state.lastBoundingBox.height) > om) && this.setState({
          lastBoundingBox: {
            width: r.width,
            height: r.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var r, o;
      this.props.active && this.updateBBox(), this.state.dismissed && (((r = this.props.coordinate) === null || r === void 0 ? void 0 : r.x) !== this.state.dismissedAtCoordinate.x || ((o = this.props.coordinate) === null || o === void 0 ? void 0 : o.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, l = o.animationEasing, c = o.children, f = o.coordinate, p = o.hasPayload, m = o.isAnimationActive, h = o.offset, g = o.position, v = o.reverseDirection, b = o.useTranslate3d, y = o.viewBox, w = o.wrapperStyle, x = q9({
        allowEscapeViewBox: i,
        coordinate: f,
        offsetTopLeft: h,
        position: g,
        reverseDirection: v,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: b,
        viewBox: y
      }), S = x.cssClasses, C = x.cssProperties, N = rm(rm({
        transition: m && a ? "transform ".concat(s, "ms ").concat(l) : void 0
      }, C), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && p ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, w);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ E.createElement("div", {
          tabIndex: -1,
          className: S,
          style: N,
          ref: function(M) {
            r.wrapperNode = M;
          }
        }, c)
      );
    }
  }]);
}(Oi), aG = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Ya = {
  isSsr: aG(),
  get: function(t) {
    return Ya[t];
  },
  set: function(t, n) {
    if (typeof t == "string")
      Ya[t] = n;
    else {
      var r = Object.keys(t);
      r && r.length && r.forEach(function(o) {
        Ya[o] = t[o];
      });
    }
  }
};
function Lr(e) {
  "@babel/helpers - typeof";
  return Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lr(e);
}
function am(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function im(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? am(Object(n), !0).forEach(function(r) {
      Bd(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : am(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function iG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sG(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Yx(r.key), r);
  }
}
function lG(e, t, n) {
  return t && sG(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function cG(e, t, n) {
  return t = Ri(t), uG(e, Kx() ? Reflect.construct(t, n || [], Ri(e).constructor) : t.apply(e, n));
}
function uG(e, t) {
  if (t && (Lr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return dG(e);
}
function dG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Kx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Kx = function() {
    return !!e;
  })();
}
function Ri(e) {
  return Ri = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ri(e);
}
function fG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Rc(e, t);
}
function Rc(e, t) {
  return Rc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Rc(e, t);
}
function Bd(e, t, n) {
  return t = Yx(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Yx(e) {
  var t = pG(e, "string");
  return Lr(t) == "symbol" ? t : t + "";
}
function pG(e, t) {
  if (Lr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Lr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mG(e) {
  return e.dataKey;
}
function hG(e, t) {
  return /* @__PURE__ */ E.isValidElement(e) ? /* @__PURE__ */ E.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ E.createElement(e, t) : /* @__PURE__ */ E.createElement(W9, t);
}
var zd = /* @__PURE__ */ function(e) {
  function t() {
    return iG(this, t), cG(this, t, arguments);
  }
  return fG(t, e), lG(t, [{
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, l = o.animationEasing, c = o.content, f = o.coordinate, p = o.filterNull, m = o.isAnimationActive, h = o.offset, g = o.payload, v = o.payloadUniqBy, b = o.position, y = o.reverseDirection, w = o.useTranslate3d, x = o.viewBox, S = o.wrapperStyle, C = g ?? [];
      p && C.length && (C = jx(g.filter(function(P) {
        return P.value != null && (P.hide !== !0 || r.props.includeHidden);
      }), v, mG));
      var N = C.length > 0;
      return /* @__PURE__ */ E.createElement(oG, {
        allowEscapeViewBox: i,
        animationDuration: s,
        animationEasing: l,
        isAnimationActive: m,
        active: a,
        coordinate: f,
        hasPayload: N,
        offset: h,
        position: b,
        reverseDirection: y,
        useTranslate3d: w,
        viewBox: x,
        wrapperStyle: S
      }, hG(c, im(im({}, this.props), {}, {
        payload: C
      })));
    }
  }]);
}(Oi);
Bd(zd, "displayName", "Tooltip");
Bd(zd, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Ya.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var vG = an, gG = function() {
  return vG.Date.now();
}, bG = gG, yG = /\s/;
function wG(e) {
  for (var t = e.length; t-- && yG.test(e.charAt(t)); )
    ;
  return t;
}
var xG = wG, SG = xG, CG = /^\s+/;
function PG(e) {
  return e && e.slice(0, SG(e) + 1).replace(CG, "");
}
var NG = PG, EG = NG, sm = zn, _G = ga, lm = NaN, RG = /^[-+]0x[0-9a-f]+$/i, TG = /^0b[01]+$/i, MG = /^0o[0-7]+$/i, AG = parseInt;
function OG(e) {
  if (typeof e == "number")
    return e;
  if (_G(e))
    return lm;
  if (sm(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = sm(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = EG(e);
  var n = TG.test(e);
  return n || MG.test(e) ? AG(e.slice(2), n ? 2 : 8) : RG.test(e) ? lm : +e;
}
var DG = OG, IG = zn, wl = bG, cm = DG, kG = "Expected a function", $G = Math.max, LG = Math.min;
function FG(e, t, n) {
  var r, o, a, i, s, l, c = 0, f = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(kG);
  t = cm(t) || 0, IG(n) && (f = !!n.leading, p = "maxWait" in n, a = p ? $G(cm(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function h(N) {
    var P = r, M = o;
    return r = o = void 0, c = N, i = e.apply(M, P), i;
  }
  function g(N) {
    return c = N, s = setTimeout(y, t), f ? h(N) : i;
  }
  function v(N) {
    var P = N - l, M = N - c, _ = t - P;
    return p ? LG(_, a - M) : _;
  }
  function b(N) {
    var P = N - l, M = N - c;
    return l === void 0 || P >= t || P < 0 || p && M >= a;
  }
  function y() {
    var N = wl();
    if (b(N))
      return w(N);
    s = setTimeout(y, v(N));
  }
  function w(N) {
    return s = void 0, m && r ? h(N) : (r = o = void 0, i);
  }
  function x() {
    s !== void 0 && clearTimeout(s), c = 0, r = l = o = s = void 0;
  }
  function S() {
    return s === void 0 ? i : w(wl());
  }
  function C() {
    var N = wl(), P = b(N);
    if (r = arguments, o = this, l = N, P) {
      if (s === void 0)
        return g(l);
      if (p)
        return clearTimeout(s), s = setTimeout(y, t), h(l);
    }
    return s === void 0 && (s = setTimeout(y, t)), i;
  }
  return C.cancel = x, C.flush = S, C;
}
var BG = FG, zG = BG, jG = zn, HG = "Expected a function";
function WG(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(HG);
  return jG(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), zG(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
var VG = WG;
const GG = /* @__PURE__ */ on(VG);
function Vo(e) {
  "@babel/helpers - typeof";
  return Vo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vo(e);
}
function um(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ia(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? um(Object(n), !0).forEach(function(r) {
      UG(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : um(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function UG(e, t, n) {
  return t = KG(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function KG(e) {
  var t = YG(e, "string");
  return Vo(t) == "symbol" ? t : t + "";
}
function YG(e, t) {
  if (Vo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Vo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qG(e, t) {
  return JG(e) || QG(e, t) || ZG(e, t) || XG();
}
function XG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZG(e, t) {
  if (e) {
    if (typeof e == "string") return dm(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dm(e, t);
  }
}
function dm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function QG(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, s = [], l = !0, c = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (f) {
      c = !0, o = f;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return s;
  }
}
function JG(e) {
  if (Array.isArray(e)) return e;
}
var e7 = /* @__PURE__ */ In(function(e, t) {
  var n = e.aspect, r = e.initialDimension, o = r === void 0 ? {
    width: -1,
    height: -1
  } : r, a = e.width, i = a === void 0 ? "100%" : a, s = e.height, l = s === void 0 ? "100%" : s, c = e.minWidth, f = c === void 0 ? 0 : c, p = e.minHeight, m = e.maxHeight, h = e.children, g = e.debounce, v = g === void 0 ? 0 : g, b = e.id, y = e.className, w = e.onResize, x = e.style, S = x === void 0 ? {} : x, C = Ke(null), N = Ke();
  N.current = w, Dc(t, function() {
    return Object.defineProperty(C.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), C.current;
      },
      configurable: !0
    });
  });
  var P = Qe({
    containerWidth: o.width,
    containerHeight: o.height
  }), M = qG(P, 2), _ = M[0], B = M[1], T = nt(function(G, $) {
    B(function(U) {
      var W = Math.round(G), F = Math.round($);
      return U.containerWidth === W && U.containerHeight === F ? U : {
        containerWidth: W,
        containerHeight: F
      };
    });
  }, []);
  Je(function() {
    var G = function(L) {
      var ee, te = L[0].contentRect, I = te.width, O = te.height;
      T(I, O), (ee = N.current) === null || ee === void 0 || ee.call(N, I, O);
    };
    v > 0 && (G = GG(G, v, {
      trailing: !0,
      leading: !1
    }));
    var $ = new ResizeObserver(G), U = C.current.getBoundingClientRect(), W = U.width, F = U.height;
    return T(W, F), $.observe(C.current), function() {
      $.disconnect();
    };
  }, [T, v]);
  var k = Oc(function() {
    var G = _.containerWidth, $ = _.containerHeight;
    if (G < 0 || $ < 0)
      return null;
    Ka(Ma(i) || Ma(l), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, l), Ka(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
    var U = Ma(i) ? G : i, W = Ma(l) ? $ : l;
    n && n > 0 && (U ? W = U / n : W && (U = W * n), m && W > m && (W = m)), Ka(U > 0 || W > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, U, W, i, l, f, p, n);
    var F = !Array.isArray(h) && B4(h.type).endsWith("Chart");
    return E.Children.map(h, function(D) {
      return /* @__PURE__ */ E.isValidElement(D) ? /* @__PURE__ */ GS(D, Ia({
        width: U,
        height: W
      }, F ? {
        style: Ia({
          height: "100%",
          width: "100%",
          maxHeight: W,
          maxWidth: U
        }, D.props.style)
      } : {})) : D;
    });
  }, [n, h, l, m, p, f, _, i]);
  return /* @__PURE__ */ E.createElement("div", {
    id: b ? "".concat(b) : void 0,
    className: fn("recharts-responsive-container", y),
    style: Ia(Ia({}, S), {}, {
      width: i,
      height: l,
      minWidth: f,
      minHeight: p,
      maxHeight: m
    }),
    ref: C
  }, k);
});
const t7 = { light: "", dark: ".dark" }, qx = u.createContext(null);
function Xx() {
  const e = u.useContext(qx);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const n7 = u.forwardRef(({ id: e, className: t, children: n, config: r, ...o }, a) => {
  const i = u.useId(), s = `chart-${e || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ d(qx.Provider, { value: { config: r }, children: /* @__PURE__ */ K(
    "div",
    {
      "data-chart": s,
      ref: a,
      className: R(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ d(r7, { id: s, config: r }),
        /* @__PURE__ */ d(e7, { children: n })
      ]
    }
  ) });
});
n7.displayName = "Chart";
const r7 = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(([r, o]) => o.theme || o.color);
  return n.length ? /* @__PURE__ */ d(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(t7).map(
          ([r, o]) => `
${o} [data-chart=${e}] {
${n.map(([a, i]) => {
            var l;
            const s = ((l = i.theme) == null ? void 0 : l[r]) || i.color;
            return s ? `  --color-${a}: ${s};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, zY = zd, o7 = u.forwardRef(
  ({
    active: e,
    payload: t,
    className: n,
    indicator: r = "dot",
    hideLabel: o = !1,
    hideIndicator: a = !1,
    label: i,
    labelFormatter: s,
    labelClassName: l,
    formatter: c,
    color: f,
    nameKey: p,
    labelKey: m
  }, h) => {
    const { config: g } = Xx(), v = u.useMemo(() => {
      var C;
      if (o || !(t != null && t.length))
        return null;
      const [y] = t, w = `${m || y.dataKey || y.name || "value"}`, x = Tc(g, y, w), S = !m && typeof i == "string" ? ((C = g[i]) == null ? void 0 : C.label) || i : x == null ? void 0 : x.label;
      return s ? /* @__PURE__ */ d("div", { className: R("font-medium", l), children: s(S, t) }) : S ? /* @__PURE__ */ d("div", { className: R("font-medium", l), children: S }) : null;
    }, [i, s, t, o, l, g, m]);
    if (!e || !(t != null && t.length))
      return null;
    const b = t.length === 1 && r !== "dot";
    return /* @__PURE__ */ K(
      "div",
      {
        ref: h,
        className: R(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          n
        ),
        children: [
          b ? null : v,
          /* @__PURE__ */ d("div", { className: "grid gap-1.5", children: t.map((y, w) => {
            const x = `${p || y.name || y.dataKey || "value"}`, S = Tc(g, y, x), C = f || y.payload.fill || y.color;
            return /* @__PURE__ */ d(
              "div",
              {
                className: R(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  r === "dot" && "items-center"
                ),
                children: c && (y == null ? void 0 : y.value) !== void 0 && y.name ? c(y.value, y.name, y, w, y.payload) : /* @__PURE__ */ K(ze, { children: [
                  S != null && S.icon ? /* @__PURE__ */ d(S.icon, {}) : !a && /* @__PURE__ */ d(
                    "div",
                    {
                      className: R("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                        "h-2.5 w-2.5": r === "dot",
                        "w-1": r === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                        "my-0.5": b && r === "dashed"
                      }),
                      style: {
                        "--color-bg": C,
                        "--color-border": C
                      }
                    }
                  ),
                  /* @__PURE__ */ K(
                    "div",
                    {
                      className: R(
                        "flex flex-1 justify-between leading-none",
                        b ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ K("div", { className: "grid gap-1.5", children: [
                          b ? v : null,
                          /* @__PURE__ */ d("span", { className: "text-muted-foreground", children: (S == null ? void 0 : S.label) || y.name })
                        ] }),
                        y.value && /* @__PURE__ */ d("span", { className: "font-mono font-medium tabular-nums text-foreground", children: y.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              y.dataKey
            );
          }) })
        ]
      }
    );
  }
);
o7.displayName = "ChartTooltip";
const jY = Fd, a7 = u.forwardRef(({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: o }, a) => {
  const { config: i } = Xx();
  return n != null && n.length ? /* @__PURE__ */ d(
    "div",
    {
      ref: a,
      className: R("flex items-center justify-center gap-4", r === "top" ? "pb-3" : "pt-3", e),
      children: n.map((s) => {
        const l = `${o || s.dataKey || "value"}`, c = Tc(i, s, l);
        return /* @__PURE__ */ K(
          "div",
          {
            className: R("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
            children: [
              c != null && c.icon && !t ? /* @__PURE__ */ d(c.icon, {}) : /* @__PURE__ */ d(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: s.color
                  }
                }
              ),
              c == null ? void 0 : c.label
            ]
          },
          s.value
        );
      })
    }
  ) : null;
});
a7.displayName = "ChartLegend";
function Tc(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = n;
  return n in t && typeof t[n] == "string" ? o = t[n] : r && n in r && typeof r[n] == "string" && (o = r[n]), o in e ? e[o] : e[n];
}
var i7 = "AspectRatio", Zx = u.forwardRef(
  (e, t) => {
    const { ratio: n = 1 / 1, style: r, ...o } = e;
    return /* @__PURE__ */ d(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / n}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: /* @__PURE__ */ d(
          Q.div,
          {
            ...o,
            ref: t,
            style: {
              ...r,
              // ensures children expand in ratio
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        )
      }
    );
  }
);
Zx.displayName = i7;
var s7 = Zx;
const HY = s7;
var Qx = "AlertDialog", [l7, WY] = Me(Qx, [
  Ky
]), yn = Ky(), Jx = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = yn(t);
  return /* @__PURE__ */ d(la, { ...r, ...n, modal: !0 });
};
Jx.displayName = Qx;
var c7 = "AlertDialogTrigger", e1 = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = yn(n);
    return /* @__PURE__ */ d(rs, { ...o, ...r, ref: t });
  }
);
e1.displayName = c7;
var u7 = "AlertDialogPortal", t1 = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = yn(t);
  return /* @__PURE__ */ d(ca, { ...r, ...n });
};
t1.displayName = u7;
var d7 = "AlertDialogOverlay", n1 = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = yn(n);
    return /* @__PURE__ */ d(ir, { ...o, ...r, ref: t });
  }
);
n1.displayName = d7;
var _r = "AlertDialogContent", [f7, p7] = l7(_r), m7 = /* @__PURE__ */ wm("AlertDialogContent"), r1 = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e, a = yn(n), i = u.useRef(null), s = ae(t, i), l = u.useRef(null);
    return /* @__PURE__ */ d(
      cO,
      {
        contentName: _r,
        titleName: o1,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ d(f7, { scope: n, cancelRef: l, children: /* @__PURE__ */ K(
          sr,
          {
            role: "alertdialog",
            ...a,
            ...o,
            ref: s,
            onOpenAutoFocus: j(o.onOpenAutoFocus, (c) => {
              var f;
              c.preventDefault(), (f = l.current) == null || f.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (c) => c.preventDefault(),
            onInteractOutside: (c) => c.preventDefault(),
            children: [
              /* @__PURE__ */ d(m7, { children: r }),
              /* @__PURE__ */ d(v7, { contentRef: i })
            ]
          }
        ) })
      }
    );
  }
);
r1.displayName = _r;
var o1 = "AlertDialogTitle", a1 = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = yn(n);
    return /* @__PURE__ */ d(Xr, { ...o, ...r, ref: t });
  }
);
a1.displayName = o1;
var i1 = "AlertDialogDescription", s1 = u.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = yn(n);
  return /* @__PURE__ */ d(Zr, { ...o, ...r, ref: t });
});
s1.displayName = i1;
var h7 = "AlertDialogAction", l1 = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = yn(n);
    return /* @__PURE__ */ d(lr, { ...o, ...r, ref: t });
  }
);
l1.displayName = h7;
var c1 = "AlertDialogCancel", u1 = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = p7(c1, n), a = yn(n), i = ae(t, o);
    return /* @__PURE__ */ d(lr, { ...a, ...r, ref: i });
  }
);
u1.displayName = c1;
var v7 = ({ contentRef: e }) => {
  const t = `\`${_r}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${_r}\` by passing a \`${i1}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${_r}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return u.useEffect(() => {
    var r;
    document.getElementById(
      (r = e.current) == null ? void 0 : r.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, g7 = Jx, b7 = e1, y7 = t1, d1 = n1, f1 = r1, p1 = l1, m1 = u1, h1 = a1, v1 = s1;
const VY = g7, GY = b7, w7 = y7, g1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  d1,
  {
    className: R(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
g1.displayName = d1.displayName;
const x7 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ K(w7, { children: [
  /* @__PURE__ */ d(g1, {}),
  /* @__PURE__ */ d(
    f1,
    {
      ref: n,
      className: R(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
x7.displayName = f1.displayName;
const S7 = ({ className: e, ...t }) => /* @__PURE__ */ d("div", { className: R("flex flex-col space-y-2 text-center sm:text-left", e), ...t });
S7.displayName = "AlertDialogHeader";
const C7 = ({ className: e, ...t }) => /* @__PURE__ */ d("div", { className: R("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e), ...t });
C7.displayName = "AlertDialogFooter";
const P7 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(h1, { ref: n, className: R("text-lg font-semibold", e), ...t }));
P7.displayName = h1.displayName;
const N7 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(v1, { ref: n, className: R("text-sm text-muted-foreground", e), ...t }));
N7.displayName = v1.displayName;
const E7 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(p1, { ref: n, className: R(Rr(), e), ...t }));
E7.displayName = p1.displayName;
const _7 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  m1,
  {
    ref: n,
    className: R(Rr({ variant: "outline" }), "mt-2 sm:mt-0", e),
    ...t
  }
));
_7.displayName = m1.displayName;
var jd = "ContextMenu", [R7, UY] = Me(jd, [
  oa
]), ot = oa(), [T7, b1] = R7(jd), y1 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [i, s] = u.useState(!1), l = ot(t), c = xe(r), f = u.useCallback(
    (p) => {
      s(p), c(p);
    },
    [c]
  );
  return /* @__PURE__ */ d(
    T7,
    {
      scope: t,
      open: i,
      onOpenChange: f,
      modal: a,
      children: /* @__PURE__ */ d(
        Tu,
        {
          ...l,
          dir: o,
          open: i,
          onOpenChange: f,
          modal: a,
          children: n
        }
      )
    }
  );
};
y1.displayName = jd;
var w1 = "ContextMenuTrigger", x1 = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = b1(w1, n), i = ot(n), s = u.useRef({ x: 0, y: 0 }), l = u.useRef({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...s.current })
    }), c = u.useRef(0), f = u.useCallback(
      () => window.clearTimeout(c.current),
      []
    ), p = (m) => {
      s.current = { x: m.clientX, y: m.clientY }, a.onOpenChange(!0);
    };
    return u.useEffect(() => f, [f]), u.useEffect(() => void (r && f()), [r, f]), /* @__PURE__ */ K(ze, { children: [
      /* @__PURE__ */ d(Mu, { ...i, virtualRef: l }),
      /* @__PURE__ */ d(
        Q.span,
        {
          "data-state": a.open ? "open" : "closed",
          "data-disabled": r ? "" : void 0,
          ...o,
          ref: t,
          style: { WebkitTouchCallout: "none", ...e.style },
          onContextMenu: r ? e.onContextMenu : j(e.onContextMenu, (m) => {
            f(), p(m), m.preventDefault();
          }),
          onPointerDown: r ? e.onPointerDown : j(
            e.onPointerDown,
            ka((m) => {
              f(), c.current = window.setTimeout(() => p(m), 700);
            })
          ),
          onPointerMove: r ? e.onPointerMove : j(e.onPointerMove, ka(f)),
          onPointerCancel: r ? e.onPointerCancel : j(e.onPointerCancel, ka(f)),
          onPointerUp: r ? e.onPointerUp : j(e.onPointerUp, ka(f))
        }
      )
    ] });
  }
);
x1.displayName = w1;
var M7 = "ContextMenuPortal", S1 = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = ot(t);
  return /* @__PURE__ */ d(Au, { ...r, ...n });
};
S1.displayName = M7;
var C1 = "ContextMenuContent", P1 = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = b1(C1, n), a = ot(n), i = u.useRef(!1);
    return /* @__PURE__ */ d(
      Ou,
      {
        ...a,
        ...r,
        ref: t,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (s) => {
          var l;
          (l = e.onCloseAutoFocus) == null || l.call(e, s), !s.defaultPrevented && i.current && s.preventDefault(), i.current = !1;
        },
        onInteractOutside: (s) => {
          var l;
          (l = e.onInteractOutside) == null || l.call(e, s), !s.defaultPrevented && !o.modal && (i.current = !0);
        },
        style: {
          ...e.style,
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
P1.displayName = C1;
var A7 = "ContextMenuGroup", N1 = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = ot(n);
    return /* @__PURE__ */ d(Du, { ...o, ...r, ref: t });
  }
);
N1.displayName = A7;
var O7 = "ContextMenuLabel", E1 = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = ot(n);
    return /* @__PURE__ */ d(Iu, { ...o, ...r, ref: t });
  }
);
E1.displayName = O7;
var D7 = "ContextMenuItem", _1 = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = ot(n);
    return /* @__PURE__ */ d(ku, { ...o, ...r, ref: t });
  }
);
_1.displayName = D7;
var I7 = "ContextMenuCheckboxItem", R1 = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ot(n);
  return /* @__PURE__ */ d($u, { ...o, ...r, ref: t });
});
R1.displayName = I7;
var k7 = "ContextMenuRadioGroup", $7 = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ot(n);
  return /* @__PURE__ */ d(Lu, { ...o, ...r, ref: t });
});
$7.displayName = k7;
var L7 = "ContextMenuRadioItem", T1 = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ot(n);
  return /* @__PURE__ */ d(Fu, { ...o, ...r, ref: t });
});
T1.displayName = L7;
var F7 = "ContextMenuItemIndicator", M1 = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ot(n);
  return /* @__PURE__ */ d(Bu, { ...o, ...r, ref: t });
});
M1.displayName = F7;
var B7 = "ContextMenuSeparator", A1 = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ot(n);
  return /* @__PURE__ */ d(zu, { ...o, ...r, ref: t });
});
A1.displayName = B7;
var z7 = "ContextMenuArrow", j7 = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = ot(n);
    return /* @__PURE__ */ d(ju, { ...o, ...r, ref: t });
  }
);
j7.displayName = z7;
var O1 = "ContextMenuSub", D1 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, i = ot(t), [s, l] = Ae({
    prop: o,
    defaultProp: a ?? !1,
    onChange: r,
    caller: O1
  });
  return /* @__PURE__ */ d(Hu, { ...i, open: s, onOpenChange: l, children: n });
};
D1.displayName = O1;
var H7 = "ContextMenuSubTrigger", I1 = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ot(n);
  return /* @__PURE__ */ d(Wu, { ...o, ...r, ref: t });
});
I1.displayName = H7;
var W7 = "ContextMenuSubContent", k1 = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ot(n);
  return /* @__PURE__ */ d(
    Vu,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
k1.displayName = W7;
function ka(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
var V7 = y1, G7 = x1, U7 = S1, $1 = P1, K7 = N1, L1 = E1, F1 = _1, B1 = R1, z1 = T1, j1 = M1, H1 = A1, Y7 = D1, W1 = I1, V1 = k1;
const KY = V7, YY = G7, qY = K7, XY = Y7, q7 = u.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ K(
  W1,
  {
    ref: o,
    className: R(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ d(jr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
q7.displayName = W1.displayName;
const X7 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  V1,
  {
    ref: n,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
X7.displayName = V1.displayName;
const Z7 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(U7, { children: /* @__PURE__ */ d(
  $1,
  {
    ref: n,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
) }));
Z7.displayName = $1.displayName;
const Q7 = u.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d(
  F1,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Q7.displayName = F1.displayName;
const J7 = u.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ K(
  B1,
  {
    ref: o,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ d("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d(j1, { children: /* @__PURE__ */ d(Ko, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
J7.displayName = B1.displayName;
const eU = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ K(
  z1,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d(j1, { children: /* @__PURE__ */ d($i, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
eU.displayName = z1.displayName;
const tU = u.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d(
  L1,
  {
    ref: r,
    className: R("px-2 py-1.5 text-sm font-semibold text-foreground", t && "pl-8", e),
    ...n
  }
));
tU.displayName = L1.displayName;
const nU = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(H1, { ref: n, className: R("-mx-1 my-1 h-px bg-border", e), ...t }));
nU.displayName = H1.displayName;
const rU = ({ className: e, ...t }) => /* @__PURE__ */ d("span", { className: R("ml-auto text-xs tracking-widest text-muted-foreground", e), ...t });
rU.displayName = "ContextMenuShortcut";
var _s = "DropdownMenu", [oU, ZY] = Me(
  _s,
  [oa]
), at = oa(), [aU, G1] = oU(_s), U1 = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, l = at(t), c = u.useRef(null), [f, p] = Ae({
    prop: o,
    defaultProp: a ?? !1,
    onChange: i,
    caller: _s
  });
  return /* @__PURE__ */ d(
    aU,
    {
      scope: t,
      triggerId: Te(),
      triggerRef: c,
      contentId: Te(),
      open: f,
      onOpenChange: p,
      onOpenToggle: u.useCallback(() => p((m) => !m), [p]),
      modal: s,
      children: /* @__PURE__ */ d(Tu, { ...l, open: f, onOpenChange: p, dir: r, modal: s, children: n })
    }
  );
};
U1.displayName = _s;
var K1 = "DropdownMenuTrigger", Y1 = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = G1(K1, n), i = at(n);
    return /* @__PURE__ */ d(Mu, { asChild: !0, ...i, children: /* @__PURE__ */ d(
      Q.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Xt(t, a.triggerRef),
        onPointerDown: j(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
        }),
        onKeyDown: j(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
Y1.displayName = K1;
var iU = "DropdownMenuPortal", q1 = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = at(t);
  return /* @__PURE__ */ d(Au, { ...r, ...n });
};
q1.displayName = iU;
var X1 = "DropdownMenuContent", Z1 = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = G1(X1, n), a = at(n), i = u.useRef(!1);
    return /* @__PURE__ */ d(
      Ou,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: j(e.onCloseAutoFocus, (s) => {
          var l;
          i.current || (l = o.triggerRef.current) == null || l.focus(), i.current = !1, s.preventDefault();
        }),
        onInteractOutside: j(e.onInteractOutside, (s) => {
          const l = s.detail.originalEvent, c = l.button === 0 && l.ctrlKey === !0, f = l.button === 2 || c;
          (!o.modal || f) && (i.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Z1.displayName = X1;
var sU = "DropdownMenuGroup", Q1 = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = at(n);
    return /* @__PURE__ */ d(Du, { ...o, ...r, ref: t });
  }
);
Q1.displayName = sU;
var lU = "DropdownMenuLabel", J1 = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = at(n);
    return /* @__PURE__ */ d(Iu, { ...o, ...r, ref: t });
  }
);
J1.displayName = lU;
var cU = "DropdownMenuItem", eS = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = at(n);
    return /* @__PURE__ */ d(ku, { ...o, ...r, ref: t });
  }
);
eS.displayName = cU;
var uU = "DropdownMenuCheckboxItem", tS = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = at(n);
  return /* @__PURE__ */ d($u, { ...o, ...r, ref: t });
});
tS.displayName = uU;
var dU = "DropdownMenuRadioGroup", nS = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = at(n);
  return /* @__PURE__ */ d(Lu, { ...o, ...r, ref: t });
});
nS.displayName = dU;
var fU = "DropdownMenuRadioItem", rS = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = at(n);
  return /* @__PURE__ */ d(Fu, { ...o, ...r, ref: t });
});
rS.displayName = fU;
var pU = "DropdownMenuItemIndicator", oS = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = at(n);
  return /* @__PURE__ */ d(Bu, { ...o, ...r, ref: t });
});
oS.displayName = pU;
var mU = "DropdownMenuSeparator", aS = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = at(n);
  return /* @__PURE__ */ d(zu, { ...o, ...r, ref: t });
});
aS.displayName = mU;
var hU = "DropdownMenuArrow", vU = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = at(n);
    return /* @__PURE__ */ d(ju, { ...o, ...r, ref: t });
  }
);
vU.displayName = hU;
var gU = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, i = at(t), [s, l] = Ae({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ d(Hu, { ...i, open: s, onOpenChange: l, children: n });
}, bU = "DropdownMenuSubTrigger", iS = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = at(n);
  return /* @__PURE__ */ d(Wu, { ...o, ...r, ref: t });
});
iS.displayName = bU;
var yU = "DropdownMenuSubContent", sS = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = at(n);
  return /* @__PURE__ */ d(
    Vu,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
sS.displayName = yU;
var wU = U1, xU = Y1, lS = q1, cS = Z1, SU = Q1, uS = J1, dS = eS, fS = tS, CU = nS, pS = rS, mS = oS, hS = aS, PU = gU, vS = iS, gS = sS;
const QY = wU, JY = xU, eq = SU, tq = lS, nq = PU, rq = CU, NU = u.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ K(
  vS,
  {
    ref: o,
    className: R(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ d(jr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
NU.displayName = vS.displayName;
const EU = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  gS,
  {
    ref: n,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
EU.displayName = gS.displayName;
const _U = u.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ d(lS, { children: /* @__PURE__ */ d(
  cS,
  {
    ref: r,
    sideOffset: t,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
_U.displayName = cS.displayName;
const RU = u.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d(
  dS,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
RU.displayName = dS.displayName;
const TU = u.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ K(
  fS,
  {
    ref: o,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ d("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d(mS, { children: /* @__PURE__ */ d(Ko, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
TU.displayName = fS.displayName;
const MU = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ K(
  pS,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d(mS, { children: /* @__PURE__ */ d($i, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
MU.displayName = pS.displayName;
const AU = u.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d(
  uS,
  {
    ref: r,
    className: R("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
    ...n
  }
));
AU.displayName = uS.displayName;
const OU = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(hS, { ref: n, className: R("-mx-1 my-1 h-px bg-muted", e), ...t }));
OU.displayName = hS.displayName;
const DU = ({ className: e, ...t }) => /* @__PURE__ */ d("span", { className: R("ml-auto text-xs tracking-widest opacity-60", e), ...t });
DU.displayName = "DropdownMenuShortcut";
var Rs = "Popover", [bS, oq] = Me(Rs, [
  nn
]), ba = nn(), [IU, jn] = bS(Rs), yS = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = ba(t), l = u.useRef(null), [c, f] = u.useState(!1), [p, m] = Ae({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Rs
  });
  return /* @__PURE__ */ d(Ur, { ...s, children: /* @__PURE__ */ d(
    IU,
    {
      scope: t,
      contentId: Te(),
      triggerRef: l,
      open: p,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((h) => !h), [m]),
      hasCustomAnchor: c,
      onCustomAnchorAdd: u.useCallback(() => f(!0), []),
      onCustomAnchorRemove: u.useCallback(() => f(!1), []),
      modal: i,
      children: n
    }
  ) });
};
yS.displayName = Rs;
var wS = "PopoverAnchor", kU = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = jn(wS, n), a = ba(n), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return u.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ d(Kr, { ...a, ...r, ref: t });
  }
);
kU.displayName = wS;
var xS = "PopoverTrigger", SS = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = jn(xS, n), a = ba(n), i = ae(t, o.triggerRef), s = /* @__PURE__ */ d(
      Q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": _S(o.open),
        ...r,
        ref: i,
        onClick: j(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ d(Kr, { asChild: !0, ...a, children: s });
  }
);
SS.displayName = xS;
var Hd = "PopoverPortal", [$U, LU] = bS(Hd, {
  forceMount: void 0
}), CS = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = jn(Hd, t);
  return /* @__PURE__ */ d($U, { scope: t, forceMount: n, children: /* @__PURE__ */ d(Le, { present: n || a.open, children: /* @__PURE__ */ d(zr, { asChild: !0, container: o, children: r }) }) });
};
CS.displayName = Hd;
var Fr = "PopoverContent", PS = u.forwardRef(
  (e, t) => {
    const n = LU(Fr, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = jn(Fr, e.__scopePopover);
    return /* @__PURE__ */ d(Le, { present: r || a.open, children: a.modal ? /* @__PURE__ */ d(BU, { ...o, ref: t }) : /* @__PURE__ */ d(zU, { ...o, ref: t }) });
  }
);
PS.displayName = Fr;
var FU = /* @__PURE__ */ Mn("PopoverContent.RemoveScroll"), BU = u.forwardRef(
  (e, t) => {
    const n = jn(Fr, e.__scopePopover), r = u.useRef(null), o = ae(t, r), a = u.useRef(!1);
    return u.useEffect(() => {
      const i = r.current;
      if (i) return Vi(i);
    }, []), /* @__PURE__ */ d(na, { as: FU, allowPinchZoom: !0, children: /* @__PURE__ */ d(
      NS,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: j(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), a.current || (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: j(
          e.onPointerDownOutside,
          (i) => {
            const s = i.detail.originalEvent, l = s.button === 0 && s.ctrlKey === !0, c = s.button === 2 || l;
            a.current = c;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: j(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), zU = u.forwardRef(
  (e, t) => {
    const n = jn(Fr, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ d(
      NS,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), NS = u.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: s,
      onPointerDownOutside: l,
      onFocusOutside: c,
      onInteractOutside: f,
      ...p
    } = e, m = jn(Fr, n), h = ba(n);
    return zi(), /* @__PURE__ */ d(
      Qo,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ d(
          bn,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: f,
            onEscapeKeyDown: s,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onDismiss: () => m.onOpenChange(!1),
            children: /* @__PURE__ */ d(
              ea,
              {
                "data-state": _S(m.open),
                role: "dialog",
                id: m.contentId,
                ...h,
                ...p,
                ref: t,
                style: {
                  ...p.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), ES = "PopoverClose", jU = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = jn(ES, n);
    return /* @__PURE__ */ d(
      Q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: j(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
jU.displayName = ES;
var HU = "PopoverArrow", WU = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ba(n);
    return /* @__PURE__ */ d(ta, { ...o, ...r, ref: t });
  }
);
WU.displayName = HU;
function _S(e) {
  return e ? "open" : "closed";
}
var VU = yS, GU = SS, UU = CS, RS = PS;
const aq = VU, iq = GU, KU = u.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ d(UU, { children: /* @__PURE__ */ d(
  RS,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: R(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
KU.displayName = RS.displayName;
var xl, Ts = "HoverCard", [TS, sq] = Me(Ts, [
  nn
]), Ms = nn(), [YU, Wd] = TS(Ts), MS = (e) => {
  const {
    __scopeHoverCard: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    openDelay: i = 700,
    closeDelay: s = 300
  } = e, l = Ms(t), c = u.useRef(0), f = u.useRef(0), p = u.useRef(!1), m = u.useRef(!1), [h, g] = Ae({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Ts
  }), v = u.useCallback(() => {
    clearTimeout(f.current), c.current = window.setTimeout(() => g(!0), i);
  }, [i, g]), b = u.useCallback(() => {
    clearTimeout(c.current), !p.current && !m.current && (f.current = window.setTimeout(() => g(!1), s));
  }, [s, g]), y = u.useCallback(() => g(!1), [g]);
  return u.useEffect(() => () => {
    clearTimeout(c.current), clearTimeout(f.current);
  }, []), /* @__PURE__ */ d(
    YU,
    {
      scope: t,
      open: h,
      onOpenChange: g,
      onOpen: v,
      onClose: b,
      onDismiss: y,
      hasSelectionRef: p,
      isPointerDownOnContentRef: m,
      children: /* @__PURE__ */ d(Ur, { ...l, children: n })
    }
  );
};
MS.displayName = Ts;
var AS = "HoverCardTrigger", OS = u.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: n, ...r } = e, o = Wd(AS, n), a = Ms(n);
    return /* @__PURE__ */ d(Kr, { asChild: !0, ...a, children: /* @__PURE__ */ d(
      Q.a,
      {
        "data-state": o.open ? "open" : "closed",
        ...r,
        ref: t,
        onPointerEnter: j(e.onPointerEnter, Mi(o.onOpen)),
        onPointerLeave: j(e.onPointerLeave, Mi(o.onClose)),
        onFocus: j(e.onFocus, o.onOpen),
        onBlur: j(e.onBlur, o.onClose),
        onTouchStart: j(e.onTouchStart, (i) => i.preventDefault())
      }
    ) });
  }
);
OS.displayName = AS;
var qU = "HoverCardPortal", [lq, XU] = TS(qU, {
  forceMount: void 0
}), Ti = "HoverCardContent", DS = u.forwardRef(
  (e, t) => {
    const n = XU(Ti, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = Wd(Ti, e.__scopeHoverCard);
    return /* @__PURE__ */ d(Le, { present: r || a.open, children: /* @__PURE__ */ d(
      ZU,
      {
        "data-state": a.open ? "open" : "closed",
        ...o,
        onPointerEnter: j(e.onPointerEnter, Mi(a.onOpen)),
        onPointerLeave: j(e.onPointerLeave, Mi(a.onClose)),
        ref: t
      }
    ) });
  }
);
DS.displayName = Ti;
var ZU = u.forwardRef((e, t) => {
  const {
    __scopeHoverCard: n,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: a,
    onInteractOutside: i,
    ...s
  } = e, l = Wd(Ti, n), c = Ms(n), f = u.useRef(null), p = ae(t, f), [m, h] = u.useState(!1);
  return u.useEffect(() => {
    if (m) {
      const g = document.body;
      return xl = g.style.userSelect || g.style.webkitUserSelect, g.style.userSelect = "none", g.style.webkitUserSelect = "none", () => {
        g.style.userSelect = xl, g.style.webkitUserSelect = xl;
      };
    }
  }, [m]), u.useEffect(() => {
    if (f.current) {
      const g = () => {
        h(!1), l.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var b;
          ((b = document.getSelection()) == null ? void 0 : b.toString()) !== "" && (l.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", g), () => {
        document.removeEventListener("pointerup", g), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [l.isPointerDownOnContentRef, l.hasSelectionRef]), u.useEffect(() => {
    f.current && eK(f.current).forEach((v) => v.setAttribute("tabindex", "-1"));
  }), /* @__PURE__ */ d(
    bn,
    {
      asChild: !0,
      disableOutsidePointerEvents: !1,
      onInteractOutside: i,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: j(a, (g) => {
        g.preventDefault();
      }),
      onDismiss: l.onDismiss,
      children: /* @__PURE__ */ d(
        ea,
        {
          ...c,
          ...s,
          onPointerDown: j(s.onPointerDown, (g) => {
            g.currentTarget.contains(g.target) && h(!0), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !0;
          }),
          ref: p,
          style: {
            ...s.style,
            userSelect: m ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: m ? "text" : void 0,
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      )
    }
  );
}), QU = "HoverCardArrow", JU = u.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: n, ...r } = e, o = Ms(n);
    return /* @__PURE__ */ d(ta, { ...o, ...r, ref: t });
  }
);
JU.displayName = QU;
function Mi(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function eK(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
var tK = MS, nK = OS, IS = DS;
const cq = tK, uq = nK, rK = u.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ d(
  IS,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: R(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
rK.displayName = IS.displayName;
var Mc = { exports: {} }, Sl = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fm;
function oK() {
  if (fm) return Sl;
  fm = 1;
  var e = E;
  function t(p, m) {
    return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, a = e.useLayoutEffect, i = e.useDebugValue;
  function s(p, m) {
    var h = m(), g = r({ inst: { value: h, getSnapshot: m } }), v = g[0].inst, b = g[1];
    return a(
      function() {
        v.value = h, v.getSnapshot = m, l(v) && b({ inst: v });
      },
      [p, h, m]
    ), o(
      function() {
        return l(v) && b({ inst: v }), p(function() {
          l(v) && b({ inst: v });
        });
      },
      [p]
    ), i(h), h;
  }
  function l(p) {
    var m = p.getSnapshot;
    p = p.value;
    try {
      var h = m();
      return !n(p, h);
    } catch {
      return !0;
    }
  }
  function c(p, m) {
    return m();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : s;
  return Sl.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Sl;
}
var Cl = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pm;
function aK() {
  return pm || (pm = 1, process.env.NODE_ENV !== "production" && function() {
    function e(h, g) {
      return h === g && (h !== 0 || 1 / h === 1 / g) || h !== h && g !== g;
    }
    function t(h, g) {
      f || o.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var v = g();
      if (!p) {
        var b = g();
        a(v, b) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), p = !0);
      }
      b = i({
        inst: { value: v, getSnapshot: g }
      });
      var y = b[0].inst, w = b[1];
      return l(
        function() {
          y.value = v, y.getSnapshot = g, n(y) && w({ inst: y });
        },
        [h, v, g]
      ), s(
        function() {
          return n(y) && w({ inst: y }), h(function() {
            n(y) && w({ inst: y });
          });
        },
        [h]
      ), c(v), v;
    }
    function n(h) {
      var g = h.getSnapshot;
      h = h.value;
      try {
        var v = g();
        return !a(h, v);
      } catch {
        return !0;
      }
    }
    function r(h, g) {
      return g();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = E, a = typeof Object.is == "function" ? Object.is : e, i = o.useState, s = o.useEffect, l = o.useLayoutEffect, c = o.useDebugValue, f = !1, p = !1, m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
    Cl.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Cl;
}
process.env.NODE_ENV === "production" ? Mc.exports = oK() : Mc.exports = aK();
var iK = Mc.exports;
function sK() {
  return iK.useSyncExternalStore(
    lK,
    () => !0,
    () => !1
  );
}
function lK() {
  return () => {
  };
}
var Vd = "Avatar", [cK, dq] = Me(Vd), [uK, kS] = cK(Vd), $S = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, a] = u.useState("idle");
    return /* @__PURE__ */ d(
      uK,
      {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ d(Q.span, { ...r, ref: t })
      }
    );
  }
);
$S.displayName = Vd;
var LS = "AvatarImage", FS = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
    }, ...a } = e, i = kS(LS, n), s = dK(r, a), l = xe((c) => {
      o(c), i.onImageLoadingStatusChange(c);
    });
    return $e(() => {
      s !== "idle" && l(s);
    }, [s, l]), s === "loaded" ? /* @__PURE__ */ d(Q.img, { ...a, ref: t, src: r }) : null;
  }
);
FS.displayName = LS;
var BS = "AvatarFallback", zS = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, a = kS(BS, n), [i, s] = u.useState(r === void 0);
    return u.useEffect(() => {
      if (r !== void 0) {
        const l = window.setTimeout(() => s(!0), r);
        return () => window.clearTimeout(l);
      }
    }, [r]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ d(Q.span, { ...o, ref: t }) : null;
  }
);
zS.displayName = BS;
function mm(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function dK(e, { referrerPolicy: t, crossOrigin: n }) {
  const r = sK(), o = u.useRef(null), a = r ? (o.current || (o.current = new window.Image()), o.current) : null, [i, s] = u.useState(
    () => mm(a, e)
  );
  return $e(() => {
    s(mm(a, e));
  }, [a, e]), $e(() => {
    const l = (p) => () => {
      s(p);
    };
    if (!a) return;
    const c = l("loaded"), f = l("error");
    return a.addEventListener("load", c), a.addEventListener("error", f), t && (a.referrerPolicy = t), typeof n == "string" && (a.crossOrigin = n), () => {
      a.removeEventListener("load", c), a.removeEventListener("error", f);
    };
  }, [a, n, t]), i;
}
var jS = $S, HS = FS, WS = zS;
const fK = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  jS,
  {
    ref: n,
    className: R("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
    ...t
  }
));
fK.displayName = jS.displayName;
const pK = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(HS, { ref: n, className: R("aspect-square h-full w-full", e), ...t }));
pK.displayName = HS.displayName;
const mK = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  WS,
  {
    ref: n,
    className: R("flex h-full w-full items-center justify-center rounded-full bg-muted", e),
    ...t
  }
));
mK.displayName = WS.displayName;
const VS = hn({ theme: "light", toggleTheme: () => {
} });
function fq({ children: e }) {
  const [t, n] = Qe(() => typeof window < "u" && localStorage.getItem("evyra-theme") || "light");
  Je(() => {
    const o = document.documentElement;
    o.classList.remove("light", "dark"), o.classList.add(t), localStorage.setItem("evyra-theme", t);
  }, [t]);
  const r = () => n((o) => o === "light" ? "dark" : "light");
  return /* @__PURE__ */ d(VS.Provider, { value: { theme: t, toggleTheme: r }, children: e });
}
const hK = () => Jt(VS), vK = [
  { id: "1", type: "proposal", title: "Nova Proposta Recebida", desc: "Mariana Costa enviou uma proposta para Apoio Pós-Operatório.", time: "2 min", read: !1, avatar: "https://i.pravatar.cc/100?u=prop0" },
  { id: "2", type: "message", title: "Nova Mensagem", desc: 'João Pedro: "Olá, gostaria de discutir os detalhes..."', time: "15 min", read: !1, avatar: "https://i.pravatar.cc/100?u=prop1" },
  { id: "3", type: "status", title: "Proposta Aceite", desc: "A sua proposta para Cuidados Mensais foi aceite.", time: "1h", read: !1 },
  { id: "4", type: "message", title: "Nova Mensagem", desc: 'Ana Ferreira: "Confirmo disponibilidade para amanhã."', time: "2h", read: !0, avatar: "https://i.pravatar.cc/100?u=prop2" },
  { id: "5", type: "proposal", title: "Proposta Atualizada", desc: "Carlos Silva atualizou o orçamento para 890€.", time: "3h", read: !0, avatar: "https://i.pravatar.cc/100?u=prop3" }
], hm = [
  { type: "message", title: "Nova Mensagem", desc: 'Sofia Lopes: "Podemos agendar para sexta-feira?"', avatar: "https://i.pravatar.cc/100?u=prop4" },
  { type: "proposal", title: "Nova Proposta Recebida", desc: "Ricardo Mendes candidatou-se a Fisioterapia Domiciliária.", avatar: "https://i.pravatar.cc/100?u=prop5" },
  { type: "status", title: "Pagamento Confirmado", desc: "O pagamento de 450€ foi processado com sucesso." }
], gK = {
  proposal: bo,
  message: Bc,
  status: LP
}, bK = {
  proposal: "bg-primary/10 text-primary",
  message: "bg-accent text-accent-foreground",
  status: "bg-success/10 text-success"
}, pq = ({ sidebarOpen: e, onMobileMenuToggle: t }) => {
  const { theme: n, toggleTheme: r } = hK(), [o, a] = Qe(vK), [i, s] = Qe(!1), l = Ke(null), c = Ke(0), f = o.filter((g) => !g.read).length;
  Je(() => {
    const g = setInterval(() => {
      if (c.current < hm.length) {
        const v = hm[c.current];
        c.current++, a((b) => [
          { ...v, id: `new-${Date.now()}`, read: !1, time: "agora" },
          ...b
        ]);
      }
    }, 3e4);
    return () => clearInterval(g);
  }, []), Je(() => {
    const g = (v) => {
      l.current && !l.current.contains(v.target) && s(!1);
    };
    return i && document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [i]);
  const p = () => {
    a((g) => g.map((v) => ({ ...v, read: !0 })));
  }, m = (g) => {
    a((v) => v.map((b) => b.id === g ? { ...b, read: !0 } : b));
  }, h = (g) => {
    a((v) => v.filter((b) => b.id !== g));
  };
  return /* @__PURE__ */ K("header", { className: "h-16 border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between", children: [
    /* @__PURE__ */ K("div", { className: "flex items-center gap-4 flex-1", children: [
      /* @__PURE__ */ d(
        "button",
        {
          onClick: t,
          className: "p-2 text-muted-foreground hover:bg-accent rounded-xl transition-colors md:hidden",
          children: /* @__PURE__ */ d(oh, { size: 22 })
        }
      ),
      /* @__PURE__ */ K("div", { className: "relative w-full max-w-md hidden md:block", children: [
        /* @__PURE__ */ d(zc, { size: 16, className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ d(
          "input",
          {
            className: "w-full bg-secondary border border-border rounded-2xl pl-11 pr-4 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body text-foreground placeholder:text-muted-foreground",
            placeholder: "Pesquisar por especialidade ou localização..."
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ K("div", { className: "flex items-center gap-2 md:gap-3", children: [
      /* @__PURE__ */ d(
        "button",
        {
          onClick: r,
          className: "p-2.5 text-muted-foreground hover:bg-accent rounded-xl transition-colors",
          "aria-label": "Toggle theme",
          children: n === "dark" ? /* @__PURE__ */ d(JP, { size: 20 }) : /* @__PURE__ */ d(KP, { size: 20 })
        }
      ),
      /* @__PURE__ */ K("div", { className: "relative", ref: l, children: [
        /* @__PURE__ */ K(
          "button",
          {
            onClick: () => s(!i),
            className: "p-2.5 text-muted-foreground hover:bg-accent rounded-xl relative transition-colors",
            children: [
              /* @__PURE__ */ d(qa, { size: 20 }),
              f > 0 && /* @__PURE__ */ d(
                Po.span,
                {
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  className: "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-destructive text-destructive-foreground rounded-full text-[10px] font-bold flex items-center justify-center px-1 border-2 border-card",
                  children: f
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ d(qS, { children: i && /* @__PURE__ */ K(
          Po.div,
          {
            initial: { opacity: 0, y: 8, scale: 0.96 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: 8, scale: 0.96 },
            transition: { duration: 0.2, ease: "easeOut" },
            className: "absolute right-0 top-full mt-2 w-[calc(100vw-2rem)] sm:w-96 bg-card border border-border rounded-2xl shadow-elevated overflow-hidden z-50",
            children: [
              /* @__PURE__ */ K("div", { className: "px-5 py-4 border-b border-border flex items-center justify-between", children: [
                /* @__PURE__ */ K("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ d("h3", { className: "font-display font-black text-foreground uppercase text-sm tracking-wider", children: "Notificações" }),
                  f > 0 && /* @__PURE__ */ K("span", { className: "bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-lg", children: [
                    f,
                    " novas"
                  ] })
                ] }),
                f > 0 && /* @__PURE__ */ d(
                  "button",
                  {
                    onClick: p,
                    className: "text-xs font-semibold text-primary hover:text-primary/80 transition-colors",
                    children: "Marcar todas como lidas"
                  }
                )
              ] }),
              /* @__PURE__ */ d("div", { className: "max-h-[400px] overflow-y-auto", children: o.length === 0 ? /* @__PURE__ */ K("div", { className: "py-12 text-center text-muted-foreground", children: [
                /* @__PURE__ */ d(qa, { size: 32, className: "mx-auto mb-3 opacity-30" }),
                /* @__PURE__ */ d("p", { className: "text-sm font-medium", children: "Sem notificações" })
              ] }) : o.map((g, v) => {
                const b = gK[g.type];
                return /* @__PURE__ */ K(
                  Po.div,
                  {
                    initial: { opacity: 0, x: -12 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: v * 0.03 },
                    className: R(
                      "flex items-start gap-3 px-5 py-3.5 hover:bg-accent/50 transition-colors cursor-pointer group relative",
                      !g.read && "bg-primary/[0.03]"
                    ),
                    onClick: () => m(g.id),
                    children: [
                      !g.read && /* @__PURE__ */ d("span", { className: "absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full" }),
                      g.avatar ? /* @__PURE__ */ d("div", { className: "w-9 h-9 rounded-xl overflow-hidden shrink-0 ring-2 ring-secondary", children: /* @__PURE__ */ d("img", { src: g.avatar, alt: "", className: "w-full h-full object-cover" }) }) : /* @__PURE__ */ d("div", { className: R("w-9 h-9 rounded-xl flex items-center justify-center shrink-0", bK[g.type]), children: /* @__PURE__ */ d(b, { size: 16 }) }),
                      /* @__PURE__ */ K("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ d("p", { className: R("text-sm font-semibold text-foreground truncate", !g.read && "font-bold"), children: g.title }),
                        /* @__PURE__ */ d("p", { className: "text-xs text-muted-foreground line-clamp-2 mt-0.5", children: g.desc }),
                        /* @__PURE__ */ K("div", { className: "flex items-center gap-1 mt-1.5", children: [
                          /* @__PURE__ */ d(rh, { size: 10, className: "text-muted-foreground/50" }),
                          /* @__PURE__ */ d("span", { className: "text-[10px] text-muted-foreground/60 font-medium", children: g.time })
                        ] })
                      ] }),
                      /* @__PURE__ */ d(
                        "button",
                        {
                          onClick: (y) => {
                            y.stopPropagation(), h(g.id);
                          },
                          className: "opacity-0 group-hover:opacity-100 p-1 text-muted-foreground hover:text-destructive rounded-lg transition-all shrink-0",
                          children: /* @__PURE__ */ d(Hr, { size: 14 })
                        }
                      )
                    ]
                  },
                  g.id
                );
              }) })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ d("div", { className: "w-10 h-10 bg-secondary rounded-xl border-2 border-card shadow-card overflow-hidden ring-2 ring-secondary cursor-pointer", children: /* @__PURE__ */ d("img", { src: "https://i.pravatar.cc/100?u=company", alt: "User", className: "w-full h-full object-cover" }) })
    ] })
  ] });
}, En = ({
  icon: e,
  label: t,
  desc: n,
  active: r,
  onClick: o,
  isOpen: a,
  count: i,
  variant: s = "default",
  badge: l
}) => /* @__PURE__ */ K(
  "button",
  {
    onClick: o,
    className: R(
      "w-full flex items-center justify-between p-3 rounded-2xl transition-all duration-200 relative group",
      r ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-accent hover:text-foreground"
    ),
    children: [
      /* @__PURE__ */ K("div", { className: "flex items-center gap-3 min-w-0", children: [
        /* @__PURE__ */ d(e, { size: 18, className: R(
          "shrink-0",
          r ? "text-primary-foreground" : s === "danger" ? "text-destructive" : "text-muted-foreground group-hover:text-primary transition-colors"
        ) }),
        a && /* @__PURE__ */ K("div", { className: "min-w-0 text-left", children: [
          /* @__PURE__ */ d("span", { className: R(
            "text-sm font-display font-bold tracking-tight block",
            r ? "text-primary-foreground" : s === "danger" ? "text-destructive" : "text-foreground"
          ), children: t }),
          n && /* @__PURE__ */ d("span", { className: "text-[10px] opacity-60 font-medium block leading-none mt-0.5 truncate", children: n })
        ] })
      ] }),
      a && (i || l) && /* @__PURE__ */ d("span", { className: R(
        "px-2 py-0.5 rounded-lg text-[9px] font-bold font-display uppercase tracking-widest shrink-0",
        r ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary/10 text-primary"
      ), children: i || l })
    ]
  }
), go = ({ label: e, isOpen: t }) => /* @__PURE__ */ d("div", { className: "pt-5 pb-1.5 px-3", children: t ? /* @__PURE__ */ d("p", { className: "text-[9px] font-display font-black text-muted-foreground/50 uppercase tracking-[0.3em]", children: e }) : /* @__PURE__ */ d("div", { className: "h-px bg-border mx-auto w-8" }) }), br = {
  main: [
    { id: "dashboard", icon: Jd, label: "Dashboard", desc: "Visão geral" },
    { id: "marketplace", icon: zc, label: "Explorar Talentos", desc: "Pesquisar cuidadores" },
    { id: "demandas", icon: Xa, label: "Demandas", desc: "Publicar necessidades", count: "3" },
    { id: "search-cuidadores", icon: so, label: "Procurar Cuidadores", desc: "Encontrar profissional" },
    { id: "entrevistas", icon: Ds, label: "Entrevistas", desc: "Agendadas e pendentes" },
    { id: "propostas", icon: bo, label: "Propostas", desc: "Recebidas e enviadas", count: "2" },
    { id: "chat", icon: Bc, label: "Mensagens", desc: "Conversas ativas", count: "5" }
  ],
  recruit: [
    { id: "contratos", icon: bo, label: "Contratos", desc: "Ativos e histórico", count: "1" },
    { id: "database", icon: so, label: "Base de Dados", desc: "Pool de candidatos" },
    { id: "payments", icon: tN, label: "Pagamentos & Escrow", desc: "Transações e saldo" },
    { id: "verificacao", icon: ah, label: "Verificação KYC", desc: "Estado de identidade" },
    { id: "profile", icon: so, label: "Meu Perfil", desc: "Editar informação" },
    { id: "wallet", icon: ef, label: "Carteira", desc: "Saldo detalhado", badge: "novo" },
    { id: "notificacoes", icon: qa, label: "Notificações", desc: "Alertas recentes", badge: "novo" }
  ],
  flows: [
    { id: "cuidador-detail", icon: so, label: "Detalhe Cuidador", desc: "Perfil público", badge: "novo" },
    { id: "nova-demanda", icon: Xa, label: "Nova Demanda", desc: "Publicar necessidade", badge: "novo" },
    { id: "novo-contrato", icon: bo, label: "Novo Contrato", desc: "Criar contrato", badge: "novo" },
    { id: "proposal-flow", icon: Ds, label: "Proposal Flow", desc: "Aceitar proposta", badge: "novo" }
  ],
  auth: [
    { id: "login", icon: WP, label: "Login", desc: "Página de entrada", badge: "novo" },
    { id: "register", icon: eN, label: "Registro", desc: "Criação de conta", badge: "novo" },
    { id: "family-setup", icon: Za, label: "Family Setup", desc: "Wizard família", badge: "novo" },
    { id: "profile-setup", icon: so, label: "Profile Setup", desc: "Wizard cuidador", badge: "novo" },
    { id: "kyc", icon: ZP, label: "Verificação KYC", desc: "Identidade Didit", badge: "novo" }
  ],
  admin: [
    { id: "admin", icon: VP, label: "Admin Dashboard", desc: "Painel de gestão", badge: "novo" },
    { id: "help", icon: FP, label: "Centro de Ajuda", desc: "FAQ & suporte", badge: "novo" }
  ],
  uikit: [
    { id: "ui-buttons", icon: tf, label: "Botões" },
    { id: "ui-forms", icon: bo, label: "Formulários" },
    { id: "ui-cards", icon: ef, label: "Cards & Badges" },
    { id: "ui-feedback", icon: qa, label: "Feedback & Alerts" },
    { id: "ui-data", icon: Jd, label: "Dados & Tabelas" },
    { id: "ui-navigation", icon: jP, label: "Navegação" },
    { id: "ui-overlays", icon: tf, label: "Overlays & Modais" },
    { id: "ui-misc", icon: Ds, label: "Utilitários" }
  ]
}, vm = ({ currentView: e, setCurrentView: t, isOpen: n, setIsOpen: r, onNavigate: o }) => {
  const a = (i) => {
    t(i), o == null || o();
  };
  return /* @__PURE__ */ K("div", { className: "flex flex-col h-full p-4", children: [
    /* @__PURE__ */ K("div", { className: "flex items-center justify-between mb-6 px-1 pt-1", children: [
      n ? /* @__PURE__ */ K("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ d("div", { className: "w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-glow", children: /* @__PURE__ */ d(Za, { size: 20, className: "text-primary-foreground", fill: "currentColor" }) }),
        /* @__PURE__ */ K("div", { children: [
          /* @__PURE__ */ d("h1", { className: "text-base font-display font-black tracking-tighter text-primary leading-none", children: "EVYRA" }),
          /* @__PURE__ */ d("p", { className: "text-[9px] font-display font-bold text-muted-foreground uppercase tracking-widest mt-0.5", children: "UI Kit" })
        ] })
      ] }) : /* @__PURE__ */ d("div", { className: "w-10 h-10 bg-primary rounded-xl flex items-center justify-center mx-auto shadow-glow", children: /* @__PURE__ */ d(Za, { size: 20, className: "text-primary-foreground", fill: "currentColor" }) }),
      /* @__PURE__ */ d("button", { onClick: () => r(!n), className: "p-2 hover:bg-accent rounded-xl transition-colors text-muted-foreground hidden md:block", children: /* @__PURE__ */ d(oh, { size: 18 }) })
    ] }),
    n && /* @__PURE__ */ K("div", { className: "mx-1 mb-4 px-3 py-2.5 bg-primary/5 border border-primary/20 rounded-2xl", children: [
      /* @__PURE__ */ d("p", { className: "text-[9px] font-display font-black uppercase tracking-widest text-primary", children: "13 páginas novas" }),
      /* @__PURE__ */ d("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Prontas para o repositório" })
    ] }),
    /* @__PURE__ */ K("nav", { className: "flex-1 space-y-0.5 overflow-y-auto scrollbar-hide", children: [
      br.main.map((i) => /* @__PURE__ */ d(
        En,
        {
          icon: i.icon,
          label: i.label,
          desc: n ? i.desc : void 0,
          active: e === i.id,
          onClick: () => a(i.id),
          isOpen: n,
          count: i.count
        },
        i.id
      )),
      /* @__PURE__ */ d(go, { label: "Recrutamento", isOpen: n }),
      br.recruit.map((i) => /* @__PURE__ */ d(
        En,
        {
          icon: i.icon,
          label: i.label,
          desc: n ? i.desc : void 0,
          active: e === i.id,
          onClick: () => a(i.id),
          isOpen: n,
          badge: i.badge
        },
        i.id
      )),
      /* @__PURE__ */ d(go, { label: "Novos Fluxos", isOpen: n }),
      br.flows.map((i) => /* @__PURE__ */ d(
        En,
        {
          icon: i.icon,
          label: i.label,
          desc: n ? i.desc : void 0,
          active: e === i.id,
          onClick: () => a(i.id),
          isOpen: n,
          badge: i.badge
        },
        i.id
      )),
      /* @__PURE__ */ d(go, { label: "Auth & Onboarding", isOpen: n }),
      br.auth.map((i) => /* @__PURE__ */ d(
        En,
        {
          icon: i.icon,
          label: i.label,
          desc: n ? i.desc : void 0,
          active: e === i.id,
          onClick: () => a(i.id),
          isOpen: n,
          badge: i.badge
        },
        i.id
      )),
      /* @__PURE__ */ d(go, { label: "Admin & Suporte", isOpen: n }),
      br.admin.map((i) => /* @__PURE__ */ d(
        En,
        {
          icon: i.icon,
          label: i.label,
          desc: n ? i.desc : void 0,
          active: e === i.id,
          onClick: () => a(i.id),
          isOpen: n,
          badge: i.badge
        },
        i.id
      )),
      /* @__PURE__ */ d(go, { label: "UI Kit", isOpen: n }),
      br.uikit.map((i) => /* @__PURE__ */ d(
        En,
        {
          icon: i.icon,
          label: i.label,
          active: e === i.id,
          onClick: () => a(i.id),
          isOpen: n
        },
        i.id
      ))
    ] }),
    /* @__PURE__ */ K("div", { className: "pt-4 border-t border-border space-y-1", children: [
      /* @__PURE__ */ d(En, { icon: XP, label: "Definições", active: !1, isOpen: n }),
      /* @__PURE__ */ d(En, { icon: GP, label: "Sair", active: !1, isOpen: n, variant: "danger" })
    ] })
  ] });
}, mq = ({
  currentView: e,
  setCurrentView: t,
  isOpen: n,
  setIsOpen: r,
  isMobileOpen: o,
  setIsMobileOpen: a
}) => /* @__PURE__ */ K(ze, { children: [
  /* @__PURE__ */ d("aside", { className: R(
    "fixed top-0 left-0 h-full bg-card border-r border-border z-50 transition-all duration-500 ease-in-out flex-col hidden md:flex",
    n ? "w-72" : "w-20"
  ), children: /* @__PURE__ */ d(vm, { currentView: e, setCurrentView: t, isOpen: n, setIsOpen: r }) }),
  o && /* @__PURE__ */ d("div", { className: "fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 md:hidden", onClick: () => a(!1) }),
  /* @__PURE__ */ K("aside", { className: R(
    "fixed top-0 left-0 h-full w-72 bg-card border-r border-border z-[60] transition-transform duration-300 ease-in-out md:hidden",
    o ? "translate-x-0" : "-translate-x-full"
  ), children: [
    /* @__PURE__ */ d("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ d("button", { onClick: () => a(!1), className: "p-2 hover:bg-accent rounded-xl transition-colors text-muted-foreground", children: /* @__PURE__ */ d(Hr, { size: 20 }) }) }),
    /* @__PURE__ */ d(
      vm,
      {
        currentView: e,
        setCurrentView: t,
        isOpen: !0,
        setIsOpen: r,
        onNavigate: () => a(!1)
      }
    )
  ] })
] });
var yK = (e) => {
  switch (e) {
    case "success":
      return SK;
    case "info":
      return PK;
    case "warning":
      return CK;
    case "error":
      return NK;
    default:
      return null;
  }
}, wK = Array(12).fill(0), xK = ({ visible: e, className: t }) => E.createElement("div", { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e }, E.createElement("div", { className: "sonner-spinner" }, wK.map((n, r) => E.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${r}` })))), SK = E.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, E.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), CK = E.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, E.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), PK = E.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, E.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), NK = E.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, E.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), EK = E.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, E.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), E.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })), _K = () => {
  let [e, t] = E.useState(document.hidden);
  return E.useEffect(() => {
    let n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
}, Ac = 1, RK = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let t = this.subscribers.indexOf(e);
      this.subscribers.splice(t, 1);
    }), this.publish = (e) => {
      this.subscribers.forEach((t) => t(e));
    }, this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    }, this.create = (e) => {
      var t;
      let { message: n, ...r } = e, o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Ac++, a = this.toasts.find((s) => s.id === o), i = e.dismissible === void 0 ? !0 : e.dismissible;
      return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o), a ? this.toasts = this.toasts.map((s) => s.id === o ? (this.publish({ ...s, ...e, id: o, title: n }), { ...s, ...e, id: o, dismissible: i, title: n }) : s) : this.addToast({ title: n, ...r, dismissible: i, id: o }), o;
    }, this.dismiss = (e) => (this.dismissedToasts.add(e), e || this.toasts.forEach((t) => {
      this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })), e), this.message = (e, t) => this.create({ ...t, message: e }), this.error = (e, t) => this.create({ ...t, message: e, type: "error" }), this.success = (e, t) => this.create({ ...t, type: "success", message: e }), this.info = (e, t) => this.create({ ...t, type: "info", message: e }), this.warning = (e, t) => this.create({ ...t, type: "warning", message: e }), this.loading = (e, t) => this.create({ ...t, type: "loading", message: e }), this.promise = (e, t) => {
      if (!t) return;
      let n;
      t.loading !== void 0 && (n = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let r = e instanceof Promise ? e : e(), o = n !== void 0, a, i = r.then(async (l) => {
        if (a = ["resolve", l], E.isValidElement(l)) o = !1, this.create({ id: n, type: "default", message: l });
        else if (MK(l) && !l.ok) {
          o = !1;
          let c = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error, f = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
          this.create({ id: n, type: "error", message: c, description: f });
        } else if (t.success !== void 0) {
          o = !1;
          let c = typeof t.success == "function" ? await t.success(l) : t.success, f = typeof t.description == "function" ? await t.description(l) : t.description;
          this.create({ id: n, type: "success", message: c, description: f });
        }
      }).catch(async (l) => {
        if (a = ["reject", l], t.error !== void 0) {
          o = !1;
          let c = typeof t.error == "function" ? await t.error(l) : t.error, f = typeof t.description == "function" ? await t.description(l) : t.description;
          this.create({ id: n, type: "error", message: c, description: f });
        }
      }).finally(() => {
        var l;
        o && (this.dismiss(n), n = void 0), (l = t.finally) == null || l.call(t);
      }), s = () => new Promise((l, c) => i.then(() => a[0] === "reject" ? c(a[1]) : l(a[1])).catch(c));
      return typeof n != "string" && typeof n != "number" ? { unwrap: s } : Object.assign(n, { unwrap: s });
    }, this.custom = (e, t) => {
      let n = (t == null ? void 0 : t.id) || Ac++;
      return this.create({ jsx: e(n), id: n, ...t }), n;
    }, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}, ut = new RK(), TK = (e, t) => {
  let n = (t == null ? void 0 : t.id) || Ac++;
  return ut.addToast({ title: e, ...t, id: n }), n;
}, MK = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", AK = TK, OK = () => ut.toasts, DK = () => ut.getActiveToasts(), $a = Object.assign(AK, { success: ut.success, info: ut.info, warning: ut.warning, error: ut.error, custom: ut.custom, message: ut.message, promise: ut.promise, dismiss: ut.dismiss, loading: ut.loading }, { getHistory: OK, getToasts: DK });
function IK(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
IK(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function La(e) {
  return e.label !== void 0;
}
var kK = 3, $K = "32px", LK = "16px", gm = 4e3, FK = 356, BK = 14, zK = 20, jK = 200;
function Tt(...e) {
  return e.filter(Boolean).join(" ");
}
function HK(e) {
  let [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
var WK = (e) => {
  var t, n, r, o, a, i, s, l, c, f, p;
  let { invert: m, toast: h, unstyled: g, interacting: v, setHeights: b, visibleToasts: y, heights: w, index: x, toasts: S, expanded: C, removeToast: N, defaultRichColors: P, closeButton: M, style: _, cancelButtonStyle: B, actionButtonStyle: T, className: k = "", descriptionClassName: G = "", duration: $, position: U, gap: W, loadingIcon: F, expandByDefault: D, classNames: L, icons: ee, closeButtonAriaLabel: te = "Close toast", pauseWhenPageIsHidden: I } = e, [O, H] = E.useState(null), [V, Z] = E.useState(null), [A, Y] = E.useState(!1), [J, ne] = E.useState(!1), [re, X] = E.useState(!1), [q, z] = E.useState(!1), [oe, le] = E.useState(!1), [ve, de] = E.useState(0), [ce, Ne] = E.useState(0), Fe = E.useRef(h.duration || $ || gm), Re = E.useRef(null), je = E.useRef(null), tt = x === 0, it = x + 1 <= y, De = h.type, Ve = h.dismissible !== !1, wn = h.className || "", Et = h.descriptionClassName || "", st = E.useMemo(() => w.findIndex((ie) => ie.toastId === h.id) || 0, [w, h.id]), mt = E.useMemo(() => {
    var ie;
    return (ie = h.closeButton) != null ? ie : M;
  }, [h.closeButton, M]), _t = E.useMemo(() => h.duration || $ || gm, [h.duration, $]), et = E.useRef(0), ct = E.useRef(0), xn = E.useRef(0), Vt = E.useRef(null), [oo, se] = U.split("-"), be = E.useMemo(() => w.reduce((ie, fe, ye) => ye >= st ? ie : ie + fe.height, 0), [w, st]), Se = _K(), Ee = h.invert || m, ge = De === "loading";
  ct.current = E.useMemo(() => st * W + be, [st, be]), E.useEffect(() => {
    Fe.current = _t;
  }, [_t]), E.useEffect(() => {
    Y(!0);
  }, []), E.useEffect(() => {
    let ie = je.current;
    if (ie) {
      let fe = ie.getBoundingClientRect().height;
      return Ne(fe), b((ye) => [{ toastId: h.id, height: fe, position: h.position }, ...ye]), () => b((ye) => ye.filter((Ye) => Ye.toastId !== h.id));
    }
  }, [b, h.id]), E.useLayoutEffect(() => {
    if (!A) return;
    let ie = je.current, fe = ie.style.height;
    ie.style.height = "auto";
    let ye = ie.getBoundingClientRect().height;
    ie.style.height = fe, Ne(ye), b((Ye) => Ye.find((Ge) => Ge.toastId === h.id) ? Ye.map((Ge) => Ge.toastId === h.id ? { ...Ge, height: ye } : Ge) : [{ toastId: h.id, height: ye, position: h.position }, ...Ye]);
  }, [A, h.title, h.description, b, h.id]);
  let Be = E.useCallback(() => {
    ne(!0), de(ct.current), b((ie) => ie.filter((fe) => fe.toastId !== h.id)), setTimeout(() => {
      N(h);
    }, jK);
  }, [h, N, b, ct]);
  E.useEffect(() => {
    if (h.promise && De === "loading" || h.duration === 1 / 0 || h.type === "loading") return;
    let ie;
    return C || v || I && Se ? (() => {
      if (xn.current < et.current) {
        let fe = (/* @__PURE__ */ new Date()).getTime() - et.current;
        Fe.current = Fe.current - fe;
      }
      xn.current = (/* @__PURE__ */ new Date()).getTime();
    })() : Fe.current !== 1 / 0 && (et.current = (/* @__PURE__ */ new Date()).getTime(), ie = setTimeout(() => {
      var fe;
      (fe = h.onAutoClose) == null || fe.call(h, h), Be();
    }, Fe.current)), () => clearTimeout(ie);
  }, [C, v, h, De, I, Se, Be]), E.useEffect(() => {
    h.delete && Be();
  }, [Be, h.delete]);
  function qe() {
    var ie, fe, ye;
    return ee != null && ee.loading ? E.createElement("div", { className: Tt(L == null ? void 0 : L.loader, (ie = h == null ? void 0 : h.classNames) == null ? void 0 : ie.loader, "sonner-loader"), "data-visible": De === "loading" }, ee.loading) : F ? E.createElement("div", { className: Tt(L == null ? void 0 : L.loader, (fe = h == null ? void 0 : h.classNames) == null ? void 0 : fe.loader, "sonner-loader"), "data-visible": De === "loading" }, F) : E.createElement(xK, { className: Tt(L == null ? void 0 : L.loader, (ye = h == null ? void 0 : h.classNames) == null ? void 0 : ye.loader), visible: De === "loading" });
  }
  return E.createElement("li", { tabIndex: 0, ref: je, className: Tt(k, wn, L == null ? void 0 : L.toast, (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast, L == null ? void 0 : L.default, L == null ? void 0 : L[De], (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[De]), "data-sonner-toast": "", "data-rich-colors": (r = h.richColors) != null ? r : P, "data-styled": !(h.jsx || h.unstyled || g), "data-mounted": A, "data-promise": !!h.promise, "data-swiped": oe, "data-removed": J, "data-visible": it, "data-y-position": oo, "data-x-position": se, "data-index": x, "data-front": tt, "data-swiping": re, "data-dismissible": Ve, "data-type": De, "data-invert": Ee, "data-swipe-out": q, "data-swipe-direction": V, "data-expanded": !!(C || D && A), style: { "--index": x, "--toasts-before": x, "--z-index": S.length - x, "--offset": `${J ? ve : ct.current}px`, "--initial-height": D ? "auto" : `${ce}px`, ..._, ...h.style }, onDragEnd: () => {
    X(!1), H(null), Vt.current = null;
  }, onPointerDown: (ie) => {
    ge || !Ve || (Re.current = /* @__PURE__ */ new Date(), de(ct.current), ie.target.setPointerCapture(ie.pointerId), ie.target.tagName !== "BUTTON" && (X(!0), Vt.current = { x: ie.clientX, y: ie.clientY }));
  }, onPointerUp: () => {
    var ie, fe, ye, Ye;
    if (q || !Ve) return;
    Vt.current = null;
    let Ge = Number(((ie = je.current) == null ? void 0 : ie.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), ht = Number(((fe = je.current) == null ? void 0 : fe.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Gt = (/* @__PURE__ */ new Date()).getTime() - ((ye = Re.current) == null ? void 0 : ye.getTime()), Rt = O === "x" ? Ge : ht, Sn = Math.abs(Rt) / Gt;
    if (Math.abs(Rt) >= zK || Sn > 0.11) {
      de(ct.current), (Ye = h.onDismiss) == null || Ye.call(h, h), Z(O === "x" ? Ge > 0 ? "right" : "left" : ht > 0 ? "down" : "up"), Be(), z(!0), le(!1);
      return;
    }
    X(!1), H(null);
  }, onPointerMove: (ie) => {
    var fe, ye, Ye, Ge;
    if (!Vt.current || !Ve || ((fe = window.getSelection()) == null ? void 0 : fe.toString().length) > 0) return;
    let ht = ie.clientY - Vt.current.y, Gt = ie.clientX - Vt.current.x, Rt = (ye = e.swipeDirections) != null ? ye : HK(U);
    !O && (Math.abs(Gt) > 1 || Math.abs(ht) > 1) && H(Math.abs(Gt) > Math.abs(ht) ? "x" : "y");
    let Sn = { x: 0, y: 0 };
    O === "y" ? (Rt.includes("top") || Rt.includes("bottom")) && (Rt.includes("top") && ht < 0 || Rt.includes("bottom") && ht > 0) && (Sn.y = ht) : O === "x" && (Rt.includes("left") || Rt.includes("right")) && (Rt.includes("left") && Gt < 0 || Rt.includes("right") && Gt > 0) && (Sn.x = Gt), (Math.abs(Sn.x) > 0 || Math.abs(Sn.y) > 0) && le(!0), (Ye = je.current) == null || Ye.style.setProperty("--swipe-amount-x", `${Sn.x}px`), (Ge = je.current) == null || Ge.style.setProperty("--swipe-amount-y", `${Sn.y}px`);
  } }, mt && !h.jsx ? E.createElement("button", { "aria-label": te, "data-disabled": ge, "data-close-button": !0, onClick: ge || !Ve ? () => {
  } : () => {
    var ie;
    Be(), (ie = h.onDismiss) == null || ie.call(h, h);
  }, className: Tt(L == null ? void 0 : L.closeButton, (o = h == null ? void 0 : h.classNames) == null ? void 0 : o.closeButton) }, (a = ee == null ? void 0 : ee.close) != null ? a : EK) : null, h.jsx || Fa(h.title) ? h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title : E.createElement(E.Fragment, null, De || h.icon || h.promise ? E.createElement("div", { "data-icon": "", className: Tt(L == null ? void 0 : L.icon, (i = h == null ? void 0 : h.classNames) == null ? void 0 : i.icon) }, h.promise || h.type === "loading" && !h.icon ? h.icon || qe() : null, h.type !== "loading" ? h.icon || (ee == null ? void 0 : ee[De]) || yK(De) : null) : null, E.createElement("div", { "data-content": "", className: Tt(L == null ? void 0 : L.content, (s = h == null ? void 0 : h.classNames) == null ? void 0 : s.content) }, E.createElement("div", { "data-title": "", className: Tt(L == null ? void 0 : L.title, (l = h == null ? void 0 : h.classNames) == null ? void 0 : l.title) }, typeof h.title == "function" ? h.title() : h.title), h.description ? E.createElement("div", { "data-description": "", className: Tt(G, Et, L == null ? void 0 : L.description, (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.description) }, typeof h.description == "function" ? h.description() : h.description) : null), Fa(h.cancel) ? h.cancel : h.cancel && La(h.cancel) ? E.createElement("button", { "data-button": !0, "data-cancel": !0, style: h.cancelButtonStyle || B, onClick: (ie) => {
    var fe, ye;
    La(h.cancel) && Ve && ((ye = (fe = h.cancel).onClick) == null || ye.call(fe, ie), Be());
  }, className: Tt(L == null ? void 0 : L.cancelButton, (f = h == null ? void 0 : h.classNames) == null ? void 0 : f.cancelButton) }, h.cancel.label) : null, Fa(h.action) ? h.action : h.action && La(h.action) ? E.createElement("button", { "data-button": !0, "data-action": !0, style: h.actionButtonStyle || T, onClick: (ie) => {
    var fe, ye;
    La(h.action) && ((ye = (fe = h.action).onClick) == null || ye.call(fe, ie), !ie.defaultPrevented && Be());
  }, className: Tt(L == null ? void 0 : L.actionButton, (p = h == null ? void 0 : h.classNames) == null ? void 0 : p.actionButton) }, h.action.label) : null));
};
function bm() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function VK(e, t) {
  let n = {};
  return [e, t].forEach((r, o) => {
    let a = o === 1, i = a ? "--mobile-offset" : "--offset", s = a ? LK : $K;
    function l(c) {
      ["top", "right", "bottom", "left"].forEach((f) => {
        n[`${i}-${f}`] = typeof c == "number" ? `${c}px` : c;
      });
    }
    typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach((c) => {
      r[c] === void 0 ? n[`${i}-${c}`] = s : n[`${i}-${c}`] = typeof r[c] == "number" ? `${r[c]}px` : r[c];
    }) : l(s);
  }), n;
}
In(function(e, t) {
  let { invert: n, position: r = "bottom-right", hotkey: o = ["altKey", "KeyT"], expand: a, closeButton: i, className: s, offset: l, mobileOffset: c, theme: f = "light", richColors: p, duration: m, style: h, visibleToasts: g = kK, toastOptions: v, dir: b = bm(), gap: y = BK, loadingIcon: w, icons: x, containerAriaLabel: S = "Notifications", pauseWhenPageIsHidden: C } = e, [N, P] = E.useState([]), M = E.useMemo(() => Array.from(new Set([r].concat(N.filter((I) => I.position).map((I) => I.position)))), [N, r]), [_, B] = E.useState([]), [T, k] = E.useState(!1), [G, $] = E.useState(!1), [U, W] = E.useState(f !== "system" ? f : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), F = E.useRef(null), D = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), L = E.useRef(null), ee = E.useRef(!1), te = E.useCallback((I) => {
    P((O) => {
      var H;
      return (H = O.find((V) => V.id === I.id)) != null && H.delete || ut.dismiss(I.id), O.filter(({ id: V }) => V !== I.id);
    });
  }, []);
  return E.useEffect(() => ut.subscribe((I) => {
    if (I.dismiss) {
      P((O) => O.map((H) => H.id === I.id ? { ...H, delete: !0 } : H));
      return;
    }
    setTimeout(() => {
      Ic.flushSync(() => {
        P((O) => {
          let H = O.findIndex((V) => V.id === I.id);
          return H !== -1 ? [...O.slice(0, H), { ...O[H], ...I }, ...O.slice(H + 1)] : [I, ...O];
        });
      });
    });
  }), []), E.useEffect(() => {
    if (f !== "system") {
      W(f);
      return;
    }
    if (f === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? W("dark") : W("light")), typeof window > "u") return;
    let I = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      I.addEventListener("change", ({ matches: O }) => {
        W(O ? "dark" : "light");
      });
    } catch {
      I.addListener(({ matches: H }) => {
        try {
          W(H ? "dark" : "light");
        } catch (V) {
          console.error(V);
        }
      });
    }
  }, [f]), E.useEffect(() => {
    N.length <= 1 && k(!1);
  }, [N]), E.useEffect(() => {
    let I = (O) => {
      var H, V;
      o.every((Z) => O[Z] || O.code === Z) && (k(!0), (H = F.current) == null || H.focus()), O.code === "Escape" && (document.activeElement === F.current || (V = F.current) != null && V.contains(document.activeElement)) && k(!1);
    };
    return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
  }, [o]), E.useEffect(() => {
    if (F.current) return () => {
      L.current && (L.current.focus({ preventScroll: !0 }), L.current = null, ee.current = !1);
    };
  }, [F.current]), E.createElement("section", { ref: t, "aria-label": `${S} ${D}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: !0 }, M.map((I, O) => {
    var H;
    let [V, Z] = I.split("-");
    return N.length ? E.createElement("ol", { key: I, dir: b === "auto" ? bm() : b, tabIndex: -1, ref: F, className: s, "data-sonner-toaster": !0, "data-theme": U, "data-y-position": V, "data-lifted": T && N.length > 1 && !a, "data-x-position": Z, style: { "--front-toast-height": `${((H = _[0]) == null ? void 0 : H.height) || 0}px`, "--width": `${FK}px`, "--gap": `${y}px`, ...h, ...VK(l, c) }, onBlur: (A) => {
      ee.current && !A.currentTarget.contains(A.relatedTarget) && (ee.current = !1, L.current && (L.current.focus({ preventScroll: !0 }), L.current = null));
    }, onFocus: (A) => {
      A.target instanceof HTMLElement && A.target.dataset.dismissible === "false" || ee.current || (ee.current = !0, L.current = A.relatedTarget);
    }, onMouseEnter: () => k(!0), onMouseMove: () => k(!0), onMouseLeave: () => {
      G || k(!1);
    }, onDragEnd: () => k(!1), onPointerDown: (A) => {
      A.target instanceof HTMLElement && A.target.dataset.dismissible === "false" || $(!0);
    }, onPointerUp: () => $(!1) }, N.filter((A) => !A.position && O === 0 || A.position === I).map((A, Y) => {
      var J, ne;
      return E.createElement(WK, { key: A.id, icons: x, index: Y, toast: A, defaultRichColors: p, duration: (J = v == null ? void 0 : v.duration) != null ? J : m, className: v == null ? void 0 : v.className, descriptionClassName: v == null ? void 0 : v.descriptionClassName, invert: n, visibleToasts: g, closeButton: (ne = v == null ? void 0 : v.closeButton) != null ? ne : i, interacting: G, position: I, style: v == null ? void 0 : v.style, unstyled: v == null ? void 0 : v.unstyled, classNames: v == null ? void 0 : v.classNames, cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle, actionButtonStyle: v == null ? void 0 : v.actionButtonStyle, removeToast: te, toasts: N.filter((re) => re.position == A.position), heights: _.filter((re) => re.position == A.position), setHeights: B, expandByDefault: a, gap: y, loadingIcon: w, expanded: T, pauseWhenPageIsHidden: C, swipeDirections: e.swipeDirections });
    })) : null;
  }));
});
const hq = ({ open: e, onClose: t, profile: n }) => {
  const [r, o] = Qe(!1);
  return e ? /* @__PURE__ */ d(
    Po.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-foreground/50 backdrop-blur-sm",
      onClick: t,
      children: /* @__PURE__ */ K(
        Po.div,
        {
          initial: { opacity: 0, y: 80, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 60, scale: 0.95 },
          transition: { type: "spring", damping: 25, stiffness: 300 },
          className: "bg-card w-full max-w-lg rounded-t-3xl md:rounded-3xl shadow-elevated border border-border relative max-h-[90vh] overflow-y-auto",
          onClick: (a) => a.stopPropagation(),
          children: [
            /* @__PURE__ */ K("div", { className: "h-28 bg-gradient-to-br from-primary/20 via-info/10 to-primary/5 rounded-t-3xl relative", children: [
              /* @__PURE__ */ d("button", { onClick: t, className: "absolute top-4 right-4 p-2 bg-card/80 backdrop-blur-sm rounded-xl text-muted-foreground hover:text-foreground transition-all", children: /* @__PURE__ */ d(Hr, { size: 18 }) }),
              /* @__PURE__ */ d(
                "button",
                {
                  onClick: () => {
                    o(!r), $a(r ? "Removido dos favoritos" : "Adicionado aos favoritos");
                  },
                  className: "absolute top-4 left-4 p-2 bg-card/80 backdrop-blur-sm rounded-xl transition-all",
                  children: /* @__PURE__ */ d(Za, { size: 18, className: r ? "text-destructive fill-destructive" : "text-muted-foreground" })
                }
              )
            ] }),
            /* @__PURE__ */ d("div", { className: "flex justify-center -mt-12 relative z-10", children: /* @__PURE__ */ d("div", { className: "w-24 h-24 rounded-2xl bg-secondary overflow-hidden border-4 border-card shadow-elevated", children: /* @__PURE__ */ d("img", { src: `https://i.pravatar.cc/200?u=care${n.avatarId}`, alt: n.name, className: "w-full h-full object-cover" }) }) }),
            /* @__PURE__ */ K("div", { className: "p-6 pt-4 space-y-6", children: [
              /* @__PURE__ */ K("div", { className: "text-center", children: [
                /* @__PURE__ */ K("div", { className: "flex items-center justify-center gap-2 mb-1", children: [
                  /* @__PURE__ */ d("h2", { className: "text-xl font-display font-black text-foreground uppercase tracking-tight", children: n.name }),
                  /* @__PURE__ */ d(ah, { size: 18, className: "text-success" })
                ] }),
                /* @__PURE__ */ d("p", { className: "text-sm text-muted-foreground font-medium", children: n.role }),
                /* @__PURE__ */ K("div", { className: "flex items-center justify-center gap-4 mt-3", children: [
                  /* @__PURE__ */ K("span", { className: "flex items-center gap-1 text-sm font-bold text-warning", children: [
                    /* @__PURE__ */ d(QP, { size: 16, className: "fill-current" }),
                    " ",
                    n.rating
                  ] }),
                  /* @__PURE__ */ K("span", { className: "text-sm text-muted-foreground flex items-center gap-1", children: [
                    /* @__PURE__ */ d(UP, { size: 14 }),
                    " ",
                    n.location || "Porto, PT"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ d("div", { className: "grid grid-cols-3 gap-3", children: [
                { label: "Experiência", value: n.experience || "8 anos", icon: kP },
                { label: "Projetos", value: "24", icon: Xa },
                { label: "Tempo Resp.", value: "< 2h", icon: rh }
              ].map((a) => /* @__PURE__ */ K("div", { className: "bg-secondary/50 rounded-xl p-3 text-center", children: [
                /* @__PURE__ */ d(a.icon, { size: 16, className: "mx-auto text-primary mb-1" }),
                /* @__PURE__ */ d("p", { className: "text-sm font-display font-black text-foreground", children: a.value }),
                /* @__PURE__ */ d("p", { className: "text-[9px] font-display font-medium text-muted-foreground uppercase tracking-widest", children: a.label })
              ] }, a.label)) }),
              /* @__PURE__ */ K("div", { children: [
                /* @__PURE__ */ d("p", { className: "text-xs font-display font-bold text-foreground uppercase tracking-widest mb-2", children: "Sobre" }),
                /* @__PURE__ */ d("p", { className: "text-sm text-muted-foreground leading-relaxed", children: n.bio || "Especialista com mais de 8 anos de experiência em contexto hospitalar e domiciliário. Certificada em cuidados intensivos, apoio pós-operatório e gestão de medicação." })
              ] }),
              /* @__PURE__ */ K("div", { children: [
                /* @__PURE__ */ d("p", { className: "text-xs font-display font-bold text-foreground uppercase tracking-widest mb-2", children: "Competências" }),
                /* @__PURE__ */ d("div", { className: "flex flex-wrap gap-2", children: (n.skills || ["Drenagem", "Curativos", "Diabetes", "Pós-Operatório", "Geriatria"]).map((a) => /* @__PURE__ */ d("span", { className: "text-[10px] font-display font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg uppercase tracking-widest", children: a }, a)) })
              ] }),
              /* @__PURE__ */ K("div", { className: "bg-secondary/50 rounded-2xl p-4 flex items-center justify-between", children: [
                /* @__PURE__ */ K("div", { children: [
                  /* @__PURE__ */ d("p", { className: "text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest", children: "Preço Base" }),
                  /* @__PURE__ */ K("p", { className: "text-2xl font-display font-black text-foreground tracking-tighter", children: [
                    n.price,
                    "€",
                    /* @__PURE__ */ d("span", { className: "text-sm text-muted-foreground font-medium ml-1", children: "/h" })
                  ] })
                ] }),
                /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ d("span", { className: "px-3 py-1 text-[9px] font-display font-bold rounded-lg uppercase tracking-widest bg-success/10 text-success", children: "Disponível" }) })
              ] }),
              /* @__PURE__ */ K("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ K(Yn, { variant: "default", size: "lg", className: "flex-1", onClick: () => {
                  $a.success("Proposta de recrutamento enviada!"), t();
                }, children: [
                  /* @__PURE__ */ d(Xa, { size: 16 }),
                  " Propor Recrutamento"
                ] }),
                /* @__PURE__ */ d(Yn, { variant: "outline", size: "lg", onClick: () => {
                  $a.info("Chat aberto com " + n.name), t();
                }, children: /* @__PURE__ */ d(Bc, { size: 16 }) }),
                /* @__PURE__ */ d(Yn, { variant: "outline", size: "lg", onClick: () => $a.info("A ligar..."), children: /* @__PURE__ */ d(qP, { size: 16 }) })
              ] }),
              /* @__PURE__ */ K("div", { children: [
                /* @__PURE__ */ d("p", { className: "text-xs font-display font-bold text-foreground uppercase tracking-widest mb-3", children: "Disponibilidade" }),
                /* @__PURE__ */ d("div", { className: "grid grid-cols-7 gap-1.5", children: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((a, i) => /* @__PURE__ */ d("div", { className: `text-center p-2 rounded-xl text-[10px] font-display font-bold uppercase ${i < 5 ? "bg-success/10 text-success" : "bg-secondary text-muted-foreground"}`, children: a }, a)) })
              ] })
            ] })
          ]
        }
      )
    }
  ) : null;
}, vq = ({ title: e, desc: t }) => /* @__PURE__ */ K("div", { className: "space-y-1 sm:space-y-2", children: [
  /* @__PURE__ */ d("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-display font-black text-foreground tracking-tighter leading-none uppercase", children: e }),
  /* @__PURE__ */ d("p", { className: "text-sm sm:text-base text-muted-foreground font-medium", children: t })
] }), gq = ({ title: e, children: t }) => /* @__PURE__ */ K("section", { className: "space-y-4", children: [
  /* @__PURE__ */ d("h4", { className: "text-[10px] font-display font-black text-muted-foreground uppercase tracking-[0.4em] border-l-4 border-primary pl-4", children: e }),
  /* @__PURE__ */ d("div", { className: "bg-card p-5 sm:p-8 rounded-3xl border border-border shadow-card relative overflow-hidden", children: t })
] }), bq = ({ label: e, value: t, icon: n, colorClass: r }) => /* @__PURE__ */ K("div", { className: "bg-card p-5 sm:p-7 rounded-3xl border border-border shadow-card space-y-3 sm:space-y-4 hover:shadow-elevated transition-all group", children: [
  /* @__PURE__ */ d("div", { className: R("w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform", r || "text-primary"), children: /* @__PURE__ */ d(n, { size: 22 }) }),
  /* @__PURE__ */ K("div", { children: [
    /* @__PURE__ */ d("div", { className: "text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest", children: e }),
    /* @__PURE__ */ d("div", { className: "text-2xl sm:text-3xl font-display font-black text-foreground tracking-tighter leading-none mt-1", children: t })
  ] })
] }), GK = In(
  ({ className: e, activeClassName: t, pendingClassName: n, to: r, ...o }, a) => /* @__PURE__ */ d(
    XS,
    {
      ref: a,
      to: r,
      className: ({ isActive: i, isPending: s }) => R(e, i && t, s && n),
      ...o
    }
  )
);
GK.displayName = "NavLink";
export {
  mY as Accordion,
  oM as AccordionContent,
  nM as AccordionItem,
  rM as AccordionTrigger,
  VC as Alert,
  UC as AlertDescription,
  VY as AlertDialog,
  E7 as AlertDialogAction,
  _7 as AlertDialogCancel,
  x7 as AlertDialogContent,
  N7 as AlertDialogDescription,
  C7 as AlertDialogFooter,
  S7 as AlertDialogHeader,
  P7 as AlertDialogTitle,
  GY as AlertDialogTrigger,
  GC as AlertTitle,
  HY as AspectRatio,
  fK as Avatar,
  mK as AvatarFallback,
  pK as AvatarImage,
  QK as Badge,
  dM as Breadcrumb,
  pM as BreadcrumbItem,
  mM as BreadcrumbLink,
  fM as BreadcrumbList,
  hM as BreadcrumbPage,
  vM as BreadcrumbSeparator,
  Yn as Button,
  O$ as Calendar,
  DC as Card,
  LC as CardContent,
  $C as CardDescription,
  FC as CardFooter,
  IC as CardHeader,
  kC as CardTitle,
  pL as Carousel,
  mL as CarouselContent,
  hL as CarouselItem,
  gL as CarouselNext,
  vL as CarouselPrevious,
  n7 as ChartContainer,
  jY as ChartLegend,
  a7 as ChartLegendContent,
  r7 as ChartStyle,
  zY as ChartTooltip,
  o7 as ChartTooltipContent,
  TN as Checkbox,
  MY as Collapsible,
  OY as CollapsibleContent,
  AY as CollapsibleTrigger,
  q0 as Command,
  BY as CommandDialog,
  XL as CommandEmpty,
  ZL as CommandGroup,
  YL as CommandInput,
  JL as CommandItem,
  qL as CommandList,
  QL as CommandSeparator,
  e5 as CommandShortcut,
  KY as ContextMenu,
  J7 as ContextMenuCheckboxItem,
  Z7 as ContextMenuContent,
  qY as ContextMenuGroup,
  Q7 as ContextMenuItem,
  tU as ContextMenuLabel,
  eU as ContextMenuRadioItem,
  nU as ContextMenuSeparator,
  rU as ContextMenuShortcut,
  XY as ContextMenuSub,
  X7 as ContextMenuSubContent,
  q7 as ContextMenuSubTrigger,
  YY as ContextMenuTrigger,
  HL as Dialog,
  FY as DialogClose,
  Y0 as DialogContent,
  KL as DialogDescription,
  GL as DialogFooter,
  VL as DialogHeader,
  K0 as DialogOverlay,
  WL as DialogPortal,
  UL as DialogTitle,
  LY as DialogTrigger,
  gq as DocCard,
  VD as Drawer,
  TY as DrawerClose,
  UD as DrawerContent,
  XD as DrawerDescription,
  YD as DrawerFooter,
  KD as DrawerHeader,
  Iw as DrawerOverlay,
  GD as DrawerPortal,
  qD as DrawerTitle,
  RY as DrawerTrigger,
  QY as DropdownMenu,
  TU as DropdownMenuCheckboxItem,
  _U as DropdownMenuContent,
  eq as DropdownMenuGroup,
  RU as DropdownMenuItem,
  AU as DropdownMenuLabel,
  tq as DropdownMenuPortal,
  rq as DropdownMenuRadioGroup,
  MU as DropdownMenuRadioItem,
  OU as DropdownMenuSeparator,
  DU as DropdownMenuShortcut,
  nq as DropdownMenuSub,
  EU as DropdownMenuSubContent,
  NU as DropdownMenuSubTrigger,
  JY as DropdownMenuTrigger,
  pq as EvyraHeader,
  mq as EvyraSidebar,
  nY as Form,
  xN as FormControl,
  SN as FormDescription,
  rY as FormField,
  yN as FormItem,
  wN as FormLabel,
  CN as FormMessage,
  cq as HoverCard,
  rK as HoverCardContent,
  uq as HoverCardTrigger,
  _m as Input,
  kT as InputOTP,
  $T as InputOTPGroup,
  FT as InputOTPSeparator,
  LT as InputOTPSlot,
  Mm as Label,
  HA as Menubar,
  YA as MenubarCheckboxItem,
  UA as MenubarContent,
  SY as MenubarGroup,
  KA as MenubarItem,
  XA as MenubarLabel,
  xY as MenubarMenu,
  qA as MenubarRadioItem,
  ZA as MenubarSeparator,
  QA as MenubarShortcut,
  CY as MenubarSub,
  GA as MenubarSubContent,
  VA as MenubarSubTrigger,
  WA as MenubarTrigger,
  GK as NavLink,
  zM as NavigationMenu,
  VM as NavigationMenuContent,
  bY as NavigationMenuItem,
  yY as NavigationMenuLink,
  jM as NavigationMenuList,
  WM as NavigationMenuTrigger,
  gM as Pagination,
  bM as PaginationContent,
  SM as PaginationEllipsis,
  yM as PaginationItem,
  mu as PaginationLink,
  xM as PaginationNext,
  wM as PaginationPrevious,
  aq as Popover,
  KU as PopoverContent,
  iq as PopoverTrigger,
  hq as ProfileModal,
  bN as Progress,
  JN as RadioGroup,
  eE as RadioGroupItem,
  $Y as ResizableHandle,
  kY as ResizablePanel,
  IY as ResizablePanelGroup,
  uI as ScrollArea,
  Yw as ScrollBar,
  vq as SectionHeader,
  sY as Select,
  zR as SelectContent,
  lY as SelectGroup,
  HR as SelectItem,
  jR as SelectLabel,
  rg as SelectScrollDownButton,
  ng as SelectScrollUpButton,
  WR as SelectSeparator,
  BR as SelectTrigger,
  cY as SelectValue,
  Gy as Separator,
  pO as Sheet,
  NY as SheetClose,
  uw as SheetContent,
  yO as SheetDescription,
  gO as SheetFooter,
  vO as SheetHeader,
  cw as SheetOverlay,
  mO as SheetPortal,
  bO as SheetTitle,
  PY as SheetTrigger,
  qO as Sidebar,
  rD as SidebarContent,
  tD as SidebarFooter,
  oD as SidebarGroup,
  iD as SidebarGroupAction,
  sD as SidebarGroupContent,
  aD as SidebarGroupLabel,
  eD as SidebarHeader,
  QO as SidebarInset,
  lD as SidebarMenu,
  pD as SidebarMenuBadge,
  dD as SidebarMenuButton,
  cD as SidebarMenuItem,
  mD as SidebarMenuSkeleton,
  hD as SidebarMenuSub,
  gD as SidebarMenuSubButton,
  vD as SidebarMenuSubItem,
  YO as SidebarProvider,
  ZO as SidebarRail,
  XO as SidebarTrigger,
  af as Skeleton,
  lT as Slider,
  bq as StatBlock,
  mT as Switch,
  FI as Table,
  zI as TableBody,
  GI as TableCaption,
  VI as TableCell,
  jI as TableFooter,
  WI as TableHead,
  BI as TableHeader,
  HI as TableRow,
  vY as Tabs,
  uM as TabsContent,
  lM as TabsList,
  cM as TabsTrigger,
  PN as Textarea,
  fq as ThemeProvider,
  sh as Toast,
  oN as ToastAction,
  eY as Toaster,
  hT as Toggle,
  wT as ToggleGroup,
  xT as ToggleGroupItem,
  zO as Tooltip,
  yw as TooltipContent,
  BO as TooltipProvider,
  jO as TooltipTrigger,
  HC as badgeVariants,
  Rr as buttonVariants,
  R as cn,
  HM as navigationMenuTriggerStyle,
  cN as toast,
  _g as toggleVariants,
  JA as useIsMobile,
  ss as useSidebar,
  hK as useTheme,
  uN as useToast
};
//# sourceMappingURL=bloom-elements.esm.js.map
