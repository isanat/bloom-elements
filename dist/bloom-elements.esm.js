import { jsx as l, Fragment as Me, jsxs as S } from "react/jsx-runtime";
import * as u from "react";
import _, { forwardRef as mn, createElement as br, useLayoutEffect as Vi, useState as me, useMemo as qc, useEffect as nt, createContext as Cr, useContext as ir, useRef as qe, useImperativeHandle as Xc, useCallback as it, isValidElement as Qa, PureComponent as Gi, cloneElement as mS } from "react";
import * as ra from "react-dom";
import Zc from "react-dom";
import { FormProvider as hS, Controller as gS, useFormContext as vS } from "react-hook-form";
import { motion as rt, AnimatePresence as na } from "framer-motion";
function df(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function nr(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const a = df(o, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const a = n[o];
          typeof a == "function" ? a() : df(e[o], null);
        }
      };
  };
}
function ae(...e) {
  return u.useCallback(nr(...e), e);
}
// @__NO_SIDE_EFFECTS__
function zr(e) {
  const t = /* @__PURE__ */ bS(e), r = u.forwardRef((n, o) => {
    const { children: a, ...i } = n, s = u.Children.toArray(a), c = s.find(yS);
    if (c) {
      const d = c.props.children, f = s.map((p) => p === c ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ l(t, { ...i, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, f) : null });
    }
    return /* @__PURE__ */ l(t, { ...i, ref: o, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
var Wr = /* @__PURE__ */ zr("Slot");
// @__NO_SIDE_EFFECTS__
function bS(e) {
  const t = u.forwardRef((r, n) => {
    const { children: o, ...a } = r;
    if (u.isValidElement(o)) {
      const i = xS(o), s = wS(a, o.props);
      return o.type !== u.Fragment && (s.ref = n ? nr(n, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Lm = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Fm(e) {
  const t = ({ children: r }) => /* @__PURE__ */ l(Me, { children: r });
  return t.displayName = `${e}.Slottable`, t.__radixId = Lm, t;
}
function yS(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Lm;
}
function wS(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? o && a ? r[n] = (...s) => {
      const c = a(...s);
      return o(...s), c;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...a } : n === "className" && (r[n] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function xS(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function zm(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = zm(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function yr() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = zm(e)) && (n && (n += " "), n += t);
  return n;
}
const uf = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ff = yr, Sr = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return ff(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((d) => {
    const f = r == null ? void 0 : r[d], p = a == null ? void 0 : a[d];
    if (f === null) return null;
    const m = uf(f) || uf(p);
    return o[d][m];
  }), s = r && Object.entries(r).reduce((d, f) => {
    let [p, m] = f;
    return m === void 0 || (d[p] = m), d;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((d, f) => {
    let { class: p, className: m, ...h } = f;
    return Object.entries(h).every((v) => {
      let [g, b] = v;
      return Array.isArray(b) ? b.includes({
        ...a,
        ...s
      }[g]) : {
        ...a,
        ...s
      }[g] === b;
    }) ? [
      ...d,
      p,
      m
    ] : d;
  }, []);
  return ff(e, i, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, Qc = "-", CS = (e) => {
  const t = NS(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(Qc);
      return s[0] === "" && s.length !== 1 && s.shift(), Bm(s, t) || SS(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const c = r[i] || [];
      return s && n[i] ? [...c, ...n[i]] : c;
    }
  };
}, Bm = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Bm(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Qc);
  return (i = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : i.classGroupId;
}, pf = /^\[(.+)\]$/, SS = (e) => {
  if (pf.test(e)) {
    const t = pf.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, NS = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return PS(Object.entries(e.classGroups), r).forEach(([a, i]) => {
    Bl(i, n, a, t);
  }), n;
}, Bl = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : mf(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (ES(o)) {
        Bl(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      Bl(i, mf(t, a), r, n);
    });
  });
}, mf = (e, t) => {
  let r = e;
  return t.split(Qc).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, ES = (e) => e.isThemeGetter, PS = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([i, s]) => [t + i, s])) : a);
  return [r, o];
}) : e, _S = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (a, i) => {
    r.set(a, i), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let i = r.get(a);
      if (i !== void 0)
        return i;
      if ((i = n.get(a)) !== void 0)
        return o(a, i), i;
    },
    set(a, i) {
      r.has(a) ? r.set(a, i) : o(a, i);
    }
  };
}, jm = "!", RS = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], a = t.length, i = (s) => {
    const c = [];
    let d = 0, f = 0, p;
    for (let b = 0; b < s.length; b++) {
      let y = s[b];
      if (d === 0) {
        if (y === o && (n || s.slice(b, b + a) === t)) {
          c.push(s.slice(f, b)), f = b + a;
          continue;
        }
        if (y === "/") {
          p = b;
          continue;
        }
      }
      y === "[" ? d++ : y === "]" && d--;
    }
    const m = c.length === 0 ? s : s.substring(f), h = m.startsWith(jm), v = h ? m.substring(1) : m, g = p && p > f ? p - f : void 0;
    return {
      modifiers: c,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: i
  }) : i;
}, TS = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, MS = (e) => ({
  cache: _S(e.cacheSize),
  parseClassName: RS(e),
  ...CS(e)
}), AS = /\s+/, kS = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, a = [], i = e.trim().split(AS);
  let s = "";
  for (let c = i.length - 1; c >= 0; c -= 1) {
    const d = i[c], {
      modifiers: f,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: h
    } = r(d);
    let v = !!h, g = n(v ? m.substring(0, h) : m);
    if (!g) {
      if (!v) {
        s = d + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (g = n(m), !g) {
        s = d + (s.length > 0 ? " " + s : s);
        continue;
      }
      v = !1;
    }
    const b = TS(f).join(":"), y = p ? b + jm : b, w = y + g;
    if (a.includes(w))
      continue;
    a.push(w);
    const x = o(g, v);
    for (let C = 0; C < x.length; ++C) {
      const N = x[C];
      a.push(y + N);
    }
    s = d + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function DS() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Hm(t)) && (n && (n += " "), n += r);
  return n;
}
const Hm = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Hm(e[n])) && (r && (r += " "), r += t);
  return r;
};
function OS(e, ...t) {
  let r, n, o, a = i;
  function i(c) {
    const d = t.reduce((f, p) => p(f), e());
    return r = MS(d), n = r.cache.get, o = r.cache.set, a = s, s(c);
  }
  function s(c) {
    const d = n(c);
    if (d)
      return d;
    const f = kS(c, r);
    return o(c, f), f;
  }
  return function() {
    return a(DS.apply(null, arguments));
  };
}
const Le = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Wm = /^\[(?:([a-z-]+):)?(.+)\]$/i, IS = /^\d+\/\d+$/, $S = /* @__PURE__ */ new Set(["px", "full", "screen"]), LS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, FS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, zS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, BS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, jS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, pr = (e) => $n(e) || $S.has(e) || IS.test(e), Mr = (e) => Jn(e, "length", qS), $n = (e) => !!e && !Number.isNaN(Number(e)), Gs = (e) => Jn(e, "number", $n), yo = (e) => !!e && Number.isInteger(Number(e)), HS = (e) => e.endsWith("%") && $n(e.slice(0, -1)), he = (e) => Wm.test(e), Ar = (e) => LS.test(e), WS = /* @__PURE__ */ new Set(["length", "size", "percentage"]), VS = (e) => Jn(e, WS, Vm), GS = (e) => Jn(e, "position", Vm), US = /* @__PURE__ */ new Set(["image", "url"]), KS = (e) => Jn(e, US, ZS), YS = (e) => Jn(e, "", XS), wo = () => !0, Jn = (e, t, r) => {
  const n = Wm.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, qS = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  FS.test(e) && !zS.test(e)
), Vm = () => !1, XS = (e) => BS.test(e), ZS = (e) => jS.test(e), QS = () => {
  const e = Le("colors"), t = Le("spacing"), r = Le("blur"), n = Le("brightness"), o = Le("borderColor"), a = Le("borderRadius"), i = Le("borderSpacing"), s = Le("borderWidth"), c = Le("contrast"), d = Le("grayscale"), f = Le("hueRotate"), p = Le("invert"), m = Le("gap"), h = Le("gradientColorStops"), v = Le("gradientColorStopPositions"), g = Le("inset"), b = Le("margin"), y = Le("opacity"), w = Le("padding"), x = Le("saturate"), C = Le("scale"), N = Le("sepia"), P = Le("skew"), E = Le("space"), A = Le("translate"), R = () => ["auto", "contain", "none"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", he, t], $ = () => [he, t], U = () => ["", pr, Mr], L = () => ["auto", $n, he], K = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], V = () => ["solid", "dashed", "dotted", "double", "none"], z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], O = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], F = () => ["", "0", he], ee = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], te = () => [$n, he];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [wo],
      spacing: [pr, Mr],
      blur: ["none", "", Ar, he],
      brightness: te(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ar, he],
      borderSpacing: $(),
      borderWidth: U(),
      contrast: te(),
      grayscale: F(),
      hueRotate: te(),
      invert: F(),
      gap: $(),
      gradientColorStops: [e],
      gradientColorStopPositions: [HS, Mr],
      inset: M(),
      margin: M(),
      opacity: te(),
      padding: $(),
      saturate: te(),
      scale: te(),
      sepia: F(),
      skew: te(),
      space: $(),
      translate: $()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", he]
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
        columns: [Ar]
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
        object: [...K(), he]
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
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
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
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
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
        z: ["auto", yo, he]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: M()
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
        flex: ["1", "auto", "initial", "none", he]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: F()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: F()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", yo, he]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [wo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", yo, he]
        }, he]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [wo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [yo, he]
        }, he]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
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
        "auto-cols": ["auto", "min", "max", "fr", he]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", he]
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
        justify: ["normal", ...O()]
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
        content: ["normal", ...O(), "baseline"]
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
        "place-content": [...O(), "baseline"]
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
        "space-x": [E]
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
        "space-y": [E]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", he, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [he, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [he, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ar]
        }, Ar]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [he, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [he, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [he, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [he, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ar, Mr]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Gs]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [wo]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", he]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", $n, Gs]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", pr, he]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", he]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", he]
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
        decoration: [...V(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", pr, Mr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", pr, he]
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
        indent: $()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", he]
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
        content: ["none", he]
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
        bg: [...K(), GS]
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
        bg: ["auto", "cover", "contain", VS]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, KS]
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
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
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
        border: [...V(), "hidden"]
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
        divide: V()
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
        outline: ["", ...V()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [pr, he]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [pr, Mr]
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
        ring: U()
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
        "ring-offset": [pr, Mr]
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
        shadow: ["", "inner", "none", Ar, YS]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [wo]
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
        "mix-blend": [...z(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": z()
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
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ar, he]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [d]
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
        sepia: [N]
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
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [d]
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
        "backdrop-sepia": [N]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", he]
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
        ease: ["linear", "in", "out", "in-out", he]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", he]
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
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [yo, he]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [A]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [A]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [P]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [P]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", he]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", he]
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
        "scroll-m": $()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": $()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": $()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": $()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": $()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": $()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": $()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": $()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": $()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": $()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": $()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": $()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": $()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": $()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": $()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": $()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": $()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": $()
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
        "will-change": ["auto", "scroll", "contents", "transform", he]
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
        stroke: [pr, Mr, Gs]
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
}, JS = /* @__PURE__ */ OS(QS);
function T(...e) {
  return JS(yr(e));
}
const jn = Sr(
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
), Ce = u.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...o }, a) => /* @__PURE__ */ l(n ? Wr : "button", { className: T(jn({ variant: t, size: r, className: e })), ref: a, ...o })
);
Ce.displayName = "Button";
const eN = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l("div", { ref: r, className: T("rounded-lg border bg-card text-card-foreground shadow-sm", e), ...t }));
eN.displayName = "Card";
const tN = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l("div", { ref: r, className: T("flex flex-col space-y-1.5 p-6", e), ...t })
);
tN.displayName = "CardHeader";
const rN = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l("h3", { ref: r, className: T("text-2xl font-semibold leading-none tracking-tight", e), ...t })
);
rN.displayName = "CardTitle";
const nN = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l("p", { ref: r, className: T("text-sm text-muted-foreground", e), ...t })
);
nN.displayName = "CardDescription";
const oN = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l("div", { ref: r, className: T("p-6 pt-0", e), ...t })
);
oN.displayName = "CardContent";
const aN = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l("div", { ref: r, className: T("flex items-center p-6 pt-0", e), ...t })
);
aN.displayName = "CardFooter";
const Gm = u.forwardRef(
  ({ className: e, type: t, ...r }, n) => /* @__PURE__ */ l(
    "input",
    {
      type: t,
      className: T(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ref: n,
      ...r
    }
  )
);
Gm.displayName = "Input";
var iN = [
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
], Q = iN.reduce((e, t) => {
  const r = /* @__PURE__ */ zr(`Primitive.${t}`), n = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, c = i ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l(c, { ...s, ref: a });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Fo(e, t) {
  e && ra.flushSync(() => e.dispatchEvent(t));
}
var sN = "Label", Um = u.forwardRef((e, t) => /* @__PURE__ */ l(
  Q.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      var o;
      r.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
Um.displayName = sN;
var Km = Um;
const lN = Sr("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), Ym = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(Km, { ref: r, className: T(lN(), e), ...t }));
Ym.displayName = Km.displayName;
const cN = Sr(
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
function LY({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ l("div", { className: T(cN({ variant: t }), e), ...r });
}
const dN = Sr(
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
), uN = u.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ l("div", { ref: n, role: "alert", className: T(dN({ variant: t }), e), ...r }));
uN.displayName = "Alert";
const fN = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l("h5", { ref: r, className: T("mb-1 font-medium leading-none tracking-tight", e), ...t })
);
fN.displayName = "AlertTitle";
const pN = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l("div", { ref: r, className: T("text-sm [&_p]:leading-relaxed", e), ...t })
);
pN.displayName = "AlertDescription";
function H(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), r === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function mN(e, t) {
  const r = u.createContext(t), n = (a) => {
    const { children: i, ...s } = a, c = u.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ l(r.Provider, { value: c, children: i });
  };
  n.displayName = e + "Provider";
  function o(a) {
    const i = u.useContext(r);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [n, o];
}
function De(e, t = []) {
  let r = [];
  function n(a, i) {
    const s = u.createContext(i), c = r.length;
    r = [...r, i];
    const d = (p) => {
      var y;
      const { scope: m, children: h, ...v } = p, g = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[c]) || s, b = u.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ l(g.Provider, { value: b, children: h });
    };
    d.displayName = a + "Provider";
    function f(p, m) {
      var g;
      const h = ((g = m == null ? void 0 : m[e]) == null ? void 0 : g[c]) || s, v = u.useContext(h);
      if (v) return v;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [d, f];
  }
  const o = () => {
    const a = r.map((i) => u.createContext(i));
    return function(s) {
      const c = (s == null ? void 0 : s[e]) || a;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return o.scopeName = e, [n, hN(o, ...t)];
}
function hN(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = n.reduce((s, { useScope: c, scopeName: d }) => {
        const p = c(a)[`__scope${d}`];
        return { ...s, ...p };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function Nr(e) {
  const t = e + "CollectionProvider", [r, n] = De(t), [o, a] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (g) => {
    const { scope: b, children: y } = g, w = _.useRef(null), x = _.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ l(o, { scope: b, itemMap: x, collectionRef: w, children: y });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", c = /* @__PURE__ */ zr(s), d = _.forwardRef(
    (g, b) => {
      const { scope: y, children: w } = g, x = a(s, y), C = ae(b, x.collectionRef);
      return /* @__PURE__ */ l(c, { ref: C, children: w });
    }
  );
  d.displayName = s;
  const f = e + "CollectionItemSlot", p = "data-radix-collection-item", m = /* @__PURE__ */ zr(f), h = _.forwardRef(
    (g, b) => {
      const { scope: y, children: w, ...x } = g, C = _.useRef(null), N = ae(b, C), P = a(f, y);
      return _.useEffect(() => (P.itemMap.set(C, { ref: C, ...x }), () => void P.itemMap.delete(C))), /* @__PURE__ */ l(m, { [p]: "", ref: N, children: w });
    }
  );
  h.displayName = f;
  function v(g) {
    const b = a(e + "CollectionConsumer", g);
    return _.useCallback(() => {
      const w = b.collectionRef.current;
      if (!w) return [];
      const x = Array.from(w.querySelectorAll(`[${p}]`));
      return Array.from(b.itemMap.values()).sort(
        (P, E) => x.indexOf(P.ref.current) - x.indexOf(E.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [
    { Provider: i, Slot: d, ItemSlot: h },
    v,
    n
  ];
}
function Se(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function gN(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Se(e);
  u.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var vN = "DismissableLayer", jl = "dismissableLayer.update", bN = "dismissableLayer.pointerDownOutside", yN = "dismissableLayer.focusOutside", hf, qm = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Er = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...c
    } = e, d = u.useContext(qm), [f, p] = u.useState(null), m = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = u.useState({}), v = ae(t, (E) => p(E)), g = Array.from(d.layers), [b] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), y = g.indexOf(b), w = f ? g.indexOf(f) : -1, x = d.layersWithOutsidePointerEventsDisabled.size > 0, C = w >= y, N = xN((E) => {
      const A = E.target, R = [...d.branches].some((B) => B.contains(A));
      !C || R || (o == null || o(E), i == null || i(E), E.defaultPrevented || s == null || s());
    }, m), P = CN((E) => {
      const A = E.target;
      [...d.branches].some((B) => B.contains(A)) || (a == null || a(E), i == null || i(E), E.defaultPrevented || s == null || s());
    }, m);
    return gN((E) => {
      w === d.layers.size - 1 && (n == null || n(E), !E.defaultPrevented && s && (E.preventDefault(), s()));
    }, m), u.useEffect(() => {
      if (f)
        return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (hf = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), gf(), () => {
          r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = hf);
        };
    }, [f, m, r, d]), u.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), gf());
    }, [f, d]), u.useEffect(() => {
      const E = () => h({});
      return document.addEventListener(jl, E), () => document.removeEventListener(jl, E);
    }, []), /* @__PURE__ */ l(
      Q.div,
      {
        ...c,
        ref: v,
        style: {
          pointerEvents: x ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: H(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: H(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: H(
          e.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }
);
Er.displayName = vN;
var wN = "DismissableLayerBranch", Xm = u.forwardRef((e, t) => {
  const r = u.useContext(qm), n = u.useRef(null), o = ae(t, n);
  return u.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ l(Q.div, { ...e, ref: o });
});
Xm.displayName = wN;
function xN(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Se(e), n = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const a = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          Zm(
            bN,
            r,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      n.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function CN(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Se(e), n = u.useRef(!1);
  return u.useEffect(() => {
    const o = (a) => {
      a.target && !n.current && Zm(yN, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function gf() {
  const e = new CustomEvent(jl);
  document.dispatchEvent(e);
}
function Zm(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? Fo(o, a) : o.dispatchEvent(a);
}
var SN = Er, NN = Xm, ze = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, EN = "Portal", eo = u.forwardRef((e, t) => {
  var s;
  const { container: r, ...n } = e, [o, a] = u.useState(!1);
  ze(() => a(!0), []);
  const i = r || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? Zc.createPortal(/* @__PURE__ */ l(Q.div, { ...n, ref: t }), i) : null;
});
eo.displayName = EN;
function PN(e, t) {
  return u.useReducer((r, n) => t[r][n] ?? r, e);
}
var Be = (e) => {
  const { present: t, children: r } = e, n = _N(t), o = typeof r == "function" ? r({ present: n.isPresent }) : u.Children.only(r), a = ae(n.ref, RN(o));
  return typeof r == "function" || n.isPresent ? u.cloneElement(o, { ref: a }) : null;
};
Be.displayName = "Presence";
function _N(e) {
  const [t, r] = u.useState(), n = u.useRef(null), o = u.useRef(e), a = u.useRef("none"), i = e ? "mounted" : "unmounted", [s, c] = PN(i, {
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
    const d = Da(n.current);
    a.current = s === "mounted" ? d : "none";
  }, [s]), ze(() => {
    const d = n.current, f = o.current;
    if (f !== e) {
      const m = a.current, h = Da(d);
      e ? c("MOUNT") : h === "none" || (d == null ? void 0 : d.display) === "none" ? c("UNMOUNT") : c(f && m !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), ze(() => {
    if (t) {
      let d;
      const f = t.ownerDocument.defaultView ?? window, p = (h) => {
        const g = Da(n.current).includes(h.animationName);
        if (h.target === t && g && (c("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, m = (h) => {
        h.target === t && (a.current = Da(n.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        f.clearTimeout(d), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: u.useCallback((d) => {
      n.current = d ? getComputedStyle(d) : null, r(d);
    }, [])
  };
}
function Da(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function RN(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var TN = u[" useInsertionEffect ".trim().toString()] || ze;
function Oe({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, a, i] = MN({
    defaultProp: t,
    onChange: r
  }), s = e !== void 0, c = s ? e : o;
  {
    const f = u.useRef(e !== void 0);
    u.useEffect(() => {
      const p = f.current;
      p !== s && console.warn(
        `${n} is changing from ${p ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = s;
    }, [s, n]);
  }
  const d = u.useCallback(
    (f) => {
      var p;
      if (s) {
        const m = AN(f) ? f(e) : f;
        m !== e && ((p = i.current) == null || p.call(i, m));
      } else
        a(f);
    },
    [s, e, a, i]
  );
  return [c, d];
}
function MN({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = u.useState(e), o = u.useRef(r), a = u.useRef(t);
  return TN(() => {
    a.current = t;
  }, [t]), u.useEffect(() => {
    var i;
    o.current !== r && ((i = a.current) == null || i.call(a, r), o.current = r);
  }, [r, o]), [r, n, a];
}
function AN(e) {
  return typeof e == "function";
}
var Qm = Object.freeze({
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
}), kN = "VisuallyHidden", Ui = u.forwardRef(
  (e, t) => /* @__PURE__ */ l(
    Q.span,
    {
      ...e,
      ref: t,
      style: { ...Qm, ...e.style }
    }
  )
);
Ui.displayName = kN;
var Jm = Ui, Jc = "ToastProvider", [ed, DN, ON] = Nr("Toast"), [eh, FY] = De("Toast", [ON]), [IN, Ki] = eh(Jc), th = (e) => {
  const {
    __scopeToast: t,
    label: r = "Notification",
    duration: n = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: i
  } = e, [s, c] = u.useState(null), [d, f] = u.useState(0), p = u.useRef(!1), m = u.useRef(!1);
  return r.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Jc}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ l(ed.Provider, { scope: t, children: /* @__PURE__ */ l(
    IN,
    {
      scope: t,
      label: r,
      duration: n,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: d,
      viewport: s,
      onViewportChange: c,
      onToastAdd: u.useCallback(() => f((h) => h + 1), []),
      onToastRemove: u.useCallback(() => f((h) => h - 1), []),
      isFocusedToastEscapeKeyDownRef: p,
      isClosePausedRef: m,
      children: i
    }
  ) });
};
th.displayName = Jc;
var rh = "ToastViewport", $N = ["F8"], Hl = "toast.viewportPause", Wl = "toast.viewportResume", nh = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      hotkey: n = $N,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, i = Ki(rh, r), s = DN(r), c = u.useRef(null), d = u.useRef(null), f = u.useRef(null), p = u.useRef(null), m = ae(t, p, i.onViewportChange), h = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = i.toastCount > 0;
    u.useEffect(() => {
      const b = (y) => {
        var x;
        n.length !== 0 && n.every((C) => y[C] || y.code === C) && ((x = p.current) == null || x.focus());
      };
      return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
    }, [n]), u.useEffect(() => {
      const b = c.current, y = p.current;
      if (v && b && y) {
        const w = () => {
          if (!i.isClosePausedRef.current) {
            const P = new CustomEvent(Hl);
            y.dispatchEvent(P), i.isClosePausedRef.current = !0;
          }
        }, x = () => {
          if (i.isClosePausedRef.current) {
            const P = new CustomEvent(Wl);
            y.dispatchEvent(P), i.isClosePausedRef.current = !1;
          }
        }, C = (P) => {
          !b.contains(P.relatedTarget) && x();
        }, N = () => {
          b.contains(document.activeElement) || x();
        };
        return b.addEventListener("focusin", w), b.addEventListener("focusout", C), b.addEventListener("pointermove", w), b.addEventListener("pointerleave", N), window.addEventListener("blur", w), window.addEventListener("focus", x), () => {
          b.removeEventListener("focusin", w), b.removeEventListener("focusout", C), b.removeEventListener("pointermove", w), b.removeEventListener("pointerleave", N), window.removeEventListener("blur", w), window.removeEventListener("focus", x);
        };
      }
    }, [v, i.isClosePausedRef]);
    const g = u.useCallback(
      ({ tabbingDirection: b }) => {
        const w = s().map((x) => {
          const C = x.ref.current, N = [C, ...qN(C)];
          return b === "forwards" ? N : N.reverse();
        });
        return (b === "forwards" ? w.reverse() : w).flat();
      },
      [s]
    );
    return u.useEffect(() => {
      const b = p.current;
      if (b) {
        const y = (w) => {
          var N, P, E;
          const x = w.altKey || w.ctrlKey || w.metaKey;
          if (w.key === "Tab" && !x) {
            const A = document.activeElement, R = w.shiftKey;
            if (w.target === b && R) {
              (N = d.current) == null || N.focus();
              return;
            }
            const $ = g({ tabbingDirection: R ? "backwards" : "forwards" }), U = $.findIndex((L) => L === A);
            Us($.slice(U + 1)) ? w.preventDefault() : R ? (P = d.current) == null || P.focus() : (E = f.current) == null || E.focus();
          }
        };
        return b.addEventListener("keydown", y), () => b.removeEventListener("keydown", y);
      }
    }, [s, g]), /* @__PURE__ */ S(
      NN,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: v ? void 0 : "none" },
        children: [
          v && /* @__PURE__ */ l(
            Vl,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const b = g({
                  tabbingDirection: "forwards"
                });
                Us(b);
              }
            }
          ),
          /* @__PURE__ */ l(ed.Slot, { scope: r, children: /* @__PURE__ */ l(Q.ol, { tabIndex: -1, ...a, ref: m }) }),
          v && /* @__PURE__ */ l(
            Vl,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const b = g({
                  tabbingDirection: "backwards"
                });
                Us(b);
              }
            }
          )
        ]
      }
    );
  }
);
nh.displayName = rh;
var oh = "ToastFocusProxy", Vl = u.forwardRef(
  (e, t) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...o } = e, a = Ki(oh, r);
    return /* @__PURE__ */ l(
      Ui,
      {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (i) => {
          var d;
          const s = i.relatedTarget;
          !((d = a.viewport) != null && d.contains(s)) && n();
        }
      }
    );
  }
);
Vl.displayName = oh;
var oa = "Toast", LN = "toast.swipeStart", FN = "toast.swipeMove", zN = "toast.swipeCancel", BN = "toast.swipeEnd", ah = u.forwardRef(
  (e, t) => {
    const { forceMount: r, open: n, defaultOpen: o, onOpenChange: a, ...i } = e, [s, c] = Oe({
      prop: n,
      defaultProp: o ?? !0,
      onChange: a,
      caller: oa
    });
    return /* @__PURE__ */ l(Be, { present: r || s, children: /* @__PURE__ */ l(
      WN,
      {
        open: s,
        ...i,
        ref: t,
        onClose: () => c(!1),
        onPause: Se(e.onPause),
        onResume: Se(e.onResume),
        onSwipeStart: H(e.onSwipeStart, (d) => {
          d.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: H(e.onSwipeMove, (d) => {
          const { x: f, y: p } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "move"), d.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
        }),
        onSwipeCancel: H(e.onSwipeCancel, (d) => {
          d.currentTarget.setAttribute("data-swipe", "cancel"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: H(e.onSwipeEnd, (d) => {
          const { x: f, y: p } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "end"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), c(!1);
        })
      }
    ) });
  }
);
ah.displayName = oa;
var [jN, HN] = eh(oa, {
  onClose() {
  }
}), WN = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: r,
      type: n = "foreground",
      duration: o,
      open: a,
      onClose: i,
      onEscapeKeyDown: s,
      onPause: c,
      onResume: d,
      onSwipeStart: f,
      onSwipeMove: p,
      onSwipeCancel: m,
      onSwipeEnd: h,
      ...v
    } = e, g = Ki(oa, r), [b, y] = u.useState(null), w = ae(t, (L) => y(L)), x = u.useRef(null), C = u.useRef(null), N = o || g.duration, P = u.useRef(0), E = u.useRef(N), A = u.useRef(0), { onToastAdd: R, onToastRemove: B } = g, M = Se(() => {
      var K;
      (b == null ? void 0 : b.contains(document.activeElement)) && ((K = g.viewport) == null || K.focus()), i();
    }), $ = u.useCallback(
      (L) => {
        !L || L === 1 / 0 || (window.clearTimeout(A.current), P.current = (/* @__PURE__ */ new Date()).getTime(), A.current = window.setTimeout(M, L));
      },
      [M]
    );
    u.useEffect(() => {
      const L = g.viewport;
      if (L) {
        const K = () => {
          $(E.current), d == null || d();
        }, V = () => {
          const z = (/* @__PURE__ */ new Date()).getTime() - P.current;
          E.current = E.current - z, window.clearTimeout(A.current), c == null || c();
        };
        return L.addEventListener(Hl, V), L.addEventListener(Wl, K), () => {
          L.removeEventListener(Hl, V), L.removeEventListener(Wl, K);
        };
      }
    }, [g.viewport, N, c, d, $]), u.useEffect(() => {
      a && !g.isClosePausedRef.current && $(N);
    }, [a, N, g.isClosePausedRef, $]), u.useEffect(() => (R(), () => B()), [R, B]);
    const U = u.useMemo(() => b ? fh(b) : null, [b]);
    return g.viewport ? /* @__PURE__ */ S(Me, { children: [
      U && /* @__PURE__ */ l(
        VN,
        {
          __scopeToast: r,
          role: "status",
          "aria-live": n === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: U
        }
      ),
      /* @__PURE__ */ l(jN, { scope: r, onClose: M, children: ra.createPortal(
        /* @__PURE__ */ l(ed.ItemSlot, { scope: r, children: /* @__PURE__ */ l(
          SN,
          {
            asChild: !0,
            onEscapeKeyDown: H(s, () => {
              g.isFocusedToastEscapeKeyDownRef.current || M(), g.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ l(
              Q.li,
              {
                role: "status",
                "aria-live": "off",
                "aria-atomic": !0,
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": g.swipeDirection,
                ...v,
                ref: w,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: H(e.onKeyDown, (L) => {
                  L.key === "Escape" && (s == null || s(L.nativeEvent), L.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0, M()));
                }),
                onPointerDown: H(e.onPointerDown, (L) => {
                  L.button === 0 && (x.current = { x: L.clientX, y: L.clientY });
                }),
                onPointerMove: H(e.onPointerMove, (L) => {
                  if (!x.current) return;
                  const K = L.clientX - x.current.x, V = L.clientY - x.current.y, z = !!C.current, O = ["left", "right"].includes(g.swipeDirection), F = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max, ee = O ? F(0, K) : 0, te = O ? 0 : F(0, V), I = L.pointerType === "touch" ? 10 : 2, D = { x: ee, y: te }, W = { originalEvent: L, delta: D };
                  z ? (C.current = D, Oa(FN, p, W, {
                    discrete: !1
                  })) : vf(D, g.swipeDirection, I) ? (C.current = D, Oa(LN, f, W, {
                    discrete: !1
                  }), L.target.setPointerCapture(L.pointerId)) : (Math.abs(K) > I || Math.abs(V) > I) && (x.current = null);
                }),
                onPointerUp: H(e.onPointerUp, (L) => {
                  const K = C.current, V = L.target;
                  if (V.hasPointerCapture(L.pointerId) && V.releasePointerCapture(L.pointerId), C.current = null, x.current = null, K) {
                    const z = L.currentTarget, O = { originalEvent: L, delta: K };
                    vf(K, g.swipeDirection, g.swipeThreshold) ? Oa(BN, h, O, {
                      discrete: !0
                    }) : Oa(
                      zN,
                      m,
                      O,
                      {
                        discrete: !0
                      }
                    ), z.addEventListener("click", (F) => F.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        g.viewport
      ) })
    ] }) : null;
  }
), VN = (e) => {
  const { __scopeToast: t, children: r, ...n } = e, o = Ki(oa, t), [a, i] = u.useState(!1), [s, c] = u.useState(!1);
  return KN(() => i(!0)), u.useEffect(() => {
    const d = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(d);
  }, []), s ? null : /* @__PURE__ */ l(eo, { asChild: !0, children: /* @__PURE__ */ l(Ui, { ...n, children: a && /* @__PURE__ */ S(Me, { children: [
    o.label,
    " ",
    r
  ] }) }) });
}, GN = "ToastTitle", ih = u.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ l(Q.div, { ...n, ref: t });
  }
);
ih.displayName = GN;
var UN = "ToastDescription", sh = u.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e;
    return /* @__PURE__ */ l(Q.div, { ...n, ref: t });
  }
);
sh.displayName = UN;
var lh = "ToastAction", ch = u.forwardRef(
  (e, t) => {
    const { altText: r, ...n } = e;
    return r.trim() ? /* @__PURE__ */ l(uh, { altText: r, asChild: !0, children: /* @__PURE__ */ l(td, { ...n, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${lh}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
ch.displayName = lh;
var dh = "ToastClose", td = u.forwardRef(
  (e, t) => {
    const { __scopeToast: r, ...n } = e, o = HN(dh, r);
    return /* @__PURE__ */ l(uh, { asChild: !0, children: /* @__PURE__ */ l(
      Q.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: H(e.onClick, o.onClose)
      }
    ) });
  }
);
td.displayName = dh;
var uh = u.forwardRef((e, t) => {
  const { __scopeToast: r, altText: n, ...o } = e;
  return /* @__PURE__ */ l(
    Q.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": n || void 0,
      ...o,
      ref: t
    }
  );
});
function fh(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), YN(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const i = n.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...fh(n));
    }
  }), t;
}
function Oa(e, t, r, { discrete: n }) {
  const o = r.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? Fo(o, a) : o.dispatchEvent(a);
}
var vf = (e, t, r = 0) => {
  const n = Math.abs(e.x), o = Math.abs(e.y), a = n > o;
  return t === "left" || t === "right" ? a && n > r : !a && o > r;
};
function KN(e = () => {
}) {
  const t = Se(e);
  ze(() => {
    let r = 0, n = 0;
    return r = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(r), window.cancelAnimationFrame(n);
    };
  }, [t]);
}
function YN(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function qN(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Us(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
var XN = th, ph = nh, mh = ah, hh = ih, gh = sh, vh = ch, bh = td;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZN = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), yh = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var QN = {
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
const JN = mn(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, c) => br(
    "svg",
    {
      ref: c,
      ...QN,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: yh("lucide", o),
      ...s
    },
    [
      ...i.map(([d, f]) => br(d, f)),
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
const se = (e, t) => {
  const r = mn(
    ({ className: n, ...o }, a) => br(JN, {
      ref: a,
      iconNode: t,
      className: yh(`lucide-${ZN(e)}`, n),
      ...o
    })
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eE = se("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aa = se("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yi = se("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tE = se("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rE = se("Award", [
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
const Hn = se("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ci = se("Briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bf = se("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gl = se("ChartColumn", [
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
const Qe = se("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ia = se("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wh = se("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hn = se("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nE = se("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oE = se("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aE = se("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iE = se("CircleHelp", [
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
const qi = se("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xh = se("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yf = se("CreditCard", [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sE = se("Dot", [
  ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lE = se("Ellipsis", [
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
const Ch = se("Euro", [
  ["path", { d: "M4 10h12", key: "1y6xl8" }],
  ["path", { d: "M4 14h9", key: "1loblj" }],
  [
    "path",
    {
      d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",
      key: "1j6lzo"
    }
  ]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cE = se("EyeOff", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dE = se("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
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
const Lr = se("FileText", [
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
const uE = se("Globe", [
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
const fE = se("GripVertical", [
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
const nn = se("Heart", [
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
const pE = se("Key", [
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
const wf = se("Layers", [
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
const mE = se("LayoutDashboard", [
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
const rd = se("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hE = se("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gE = se("LogOut", [
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
const Sh = se("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vE = se("MapPin", [
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
const Nh = se("Menu", [
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
const bE = se("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sa = se("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yE = se("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wE = se("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xE = se("Phone", [
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
const Xi = se("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CE = se("Settings", [
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
const nd = se("ShieldCheck", [
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
const on = se("Shield", [
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
const od = se("Star", [
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
const SE = se("Sun", [
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
const NE = se("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EE = se("UserPlus", [
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
const Ir = se("Users", [
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
const PE = se("Wallet", [
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
const to = se("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = se("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), _E = XN, Eh = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  ph,
  {
    ref: r,
    className: T(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...t
  }
));
Eh.displayName = ph.displayName;
const RE = Sr(
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
), Ph = u.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ l(mh, { ref: n, className: T(RE({ variant: t }), e), ...r }));
Ph.displayName = mh.displayName;
const TE = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  vh,
  {
    ref: r,
    className: T(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t
  }
));
TE.displayName = vh.displayName;
const _h = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  bh,
  {
    ref: r,
    className: T(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ l(to, { className: "h-4 w-4" })
  }
));
_h.displayName = bh.displayName;
const Rh = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(hh, { ref: r, className: T("text-sm font-semibold", e), ...t }));
Rh.displayName = hh.displayName;
const Th = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(gh, { ref: r, className: T("text-sm opacity-90", e), ...t }));
Th.displayName = gh.displayName;
const ME = 1, AE = 1e6;
let Ys = 0;
function kE() {
  return Ys = (Ys + 1) % Number.MAX_SAFE_INTEGER, Ys.toString();
}
const qs = /* @__PURE__ */ new Map(), xf = (e) => {
  if (qs.has(e))
    return;
  const t = setTimeout(() => {
    qs.delete(e), $o({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, AE);
  qs.set(e, t);
}, DE = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, ME)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map((r) => r.id === t.toast.id ? { ...r, ...t.toast } : r)
      };
    case "DISMISS_TOAST": {
      const { toastId: r } = t;
      return r ? xf(r) : e.toasts.forEach((n) => {
        xf(n.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (n) => n.id === r || r === void 0 ? {
            ...n,
            open: !1
          } : n
        )
      };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? {
        ...e,
        toasts: []
      } : {
        ...e,
        toasts: e.toasts.filter((r) => r.id !== t.toastId)
      };
  }
}, Ja = [];
let ei = { toasts: [] };
function $o(e) {
  ei = DE(ei, e), Ja.forEach((t) => {
    t(ei);
  });
}
function OE({ ...e }) {
  const t = kE(), r = (o) => $o({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), n = () => $o({ type: "DISMISS_TOAST", toastId: t });
  return $o({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (o) => {
        o || n();
      }
    }
  }), {
    id: t,
    dismiss: n,
    update: r
  };
}
function IE() {
  const [e, t] = u.useState(ei);
  return u.useEffect(() => (Ja.push(t), () => {
    const r = Ja.indexOf(t);
    r > -1 && Ja.splice(r, 1);
  }), [e]), {
    ...e,
    toast: OE,
    dismiss: (r) => $o({ type: "DISMISS_TOAST", toastId: r })
  };
}
function zY() {
  const { toasts: e } = IE();
  return /* @__PURE__ */ S(_E, { children: [
    e.map(function({ id: t, title: r, description: n, action: o, ...a }) {
      return /* @__PURE__ */ S(Ph, { ...a, children: [
        /* @__PURE__ */ S("div", { className: "grid gap-1", children: [
          r && /* @__PURE__ */ l(Rh, { children: r }),
          n && /* @__PURE__ */ l(Th, { children: n })
        ] }),
        o,
        /* @__PURE__ */ l(_h, {})
      ] }, t);
    }),
    /* @__PURE__ */ l(Eh, {})
  ] });
}
var ad = "Progress", id = 100, [$E, BY] = De(ad), [LE, FE] = $E(ad), Mh = u.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: n = null,
      max: o,
      getValueLabel: a = zE,
      ...i
    } = e;
    (o || o === 0) && !Cf(o) && console.error(BE(`${o}`, "Progress"));
    const s = Cf(o) ? o : id;
    n !== null && !Sf(n, s) && console.error(jE(`${n}`, "Progress"));
    const c = Sf(n, s) ? n : null, d = di(c) ? a(c, s) : void 0;
    return /* @__PURE__ */ l(LE, { scope: r, value: c, max: s, children: /* @__PURE__ */ l(
      Q.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": di(c) ? c : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": Dh(c, s),
        "data-value": c ?? void 0,
        "data-max": s,
        ...i,
        ref: t
      }
    ) });
  }
);
Mh.displayName = ad;
var Ah = "ProgressIndicator", kh = u.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...n } = e, o = FE(Ah, r);
    return /* @__PURE__ */ l(
      Q.div,
      {
        "data-state": Dh(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...n,
        ref: t
      }
    );
  }
);
kh.displayName = Ah;
function zE(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Dh(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function di(e) {
  return typeof e == "number";
}
function Cf(e) {
  return di(e) && !isNaN(e) && e > 0;
}
function Sf(e, t) {
  return di(e) && !isNaN(e) && e <= t && e >= 0;
}
function BE(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${id}\`.`;
}
function jE(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${id} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Oh = Mh, HE = kh;
const WE = u.forwardRef(({ className: e, value: t, ...r }, n) => /* @__PURE__ */ l(
  Oh,
  {
    ref: n,
    className: T("relative h-4 w-full overflow-hidden rounded-full bg-secondary", e),
    ...r,
    children: /* @__PURE__ */ l(
      HE,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
WE.displayName = Oh.displayName;
function Nf({ className: e, ...t }) {
  return /* @__PURE__ */ l("div", { className: T("animate-pulse rounded-md bg-muted", e), ...t });
}
const jY = hS, Ih = u.createContext({}), HY = ({
  ...e
}) => /* @__PURE__ */ l(Ih.Provider, { value: { name: e.name }, children: /* @__PURE__ */ l(gS, { ...e }) }), Zi = () => {
  const e = u.useContext(Ih), t = u.useContext($h), { getFieldState: r, formState: n } = vS(), o = r(e.name, n);
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
}, $h = u.createContext({}), VE = u.forwardRef(
  ({ className: e, ...t }, r) => {
    const n = u.useId();
    return /* @__PURE__ */ l($h.Provider, { value: { id: n }, children: /* @__PURE__ */ l("div", { ref: r, className: T("space-y-2", e), ...t }) });
  }
);
VE.displayName = "FormItem";
const GE = u.forwardRef(({ className: e, ...t }, r) => {
  const { error: n, formItemId: o } = Zi();
  return /* @__PURE__ */ l(Ym, { ref: r, className: T(n && "text-destructive", e), htmlFor: o, ...t });
});
GE.displayName = "FormLabel";
const UE = u.forwardRef(
  ({ ...e }, t) => {
    const { error: r, formItemId: n, formDescriptionId: o, formMessageId: a } = Zi();
    return /* @__PURE__ */ l(
      Wr,
      {
        ref: t,
        id: n,
        "aria-describedby": r ? `${o} ${a}` : `${o}`,
        "aria-invalid": !!r,
        ...e
      }
    );
  }
);
UE.displayName = "FormControl";
const KE = u.forwardRef(
  ({ className: e, ...t }, r) => {
    const { formDescriptionId: n } = Zi();
    return /* @__PURE__ */ l("p", { ref: r, id: n, className: T("text-sm text-muted-foreground", e), ...t });
  }
);
KE.displayName = "FormDescription";
const YE = u.forwardRef(
  ({ className: e, children: t, ...r }, n) => {
    const { error: o, formMessageId: a } = Zi(), i = o ? String(o == null ? void 0 : o.message) : t;
    return i ? /* @__PURE__ */ l("p", { ref: n, id: a, className: T("text-sm font-medium text-destructive", e), ...r, children: i }) : null;
  }
);
YE.displayName = "FormMessage";
const qE = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  "textarea",
  {
    className: T(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: r,
    ...t
  }
));
qE.displayName = "Textarea";
function ro(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function la(e) {
  const [t, r] = u.useState(void 0);
  return ze(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, d = Array.isArray(c) ? c[0] : c;
          i = d.inlineSize, s = d.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        r({ width: i, height: s });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
var Qi = "Checkbox", [XE, WY] = De(Qi), [ZE, sd] = XE(Qi);
function QE(e) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: n,
    defaultChecked: o,
    disabled: a,
    form: i,
    name: s,
    onCheckedChange: c,
    required: d,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: p
  } = e, [m, h] = Oe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: c,
    caller: Qi
  }), [v, g] = u.useState(null), [b, y] = u.useState(null), w = u.useRef(!1), x = v ? !!i || !!v.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), C = {
    checked: m,
    disabled: a,
    setChecked: h,
    control: v,
    setControl: g,
    name: s,
    form: i,
    value: f,
    hasConsumerStoppedPropagationRef: w,
    required: d,
    defaultChecked: Fr(o) ? !1 : o,
    isFormControl: x,
    bubbleInput: b,
    setBubbleInput: y
  };
  return /* @__PURE__ */ l(
    ZE,
    {
      scope: t,
      ...C,
      children: JE(p) ? p(C) : n
    }
  );
}
var Lh = "CheckboxTrigger", Fh = u.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: r, ...n }, o) => {
    const {
      control: a,
      value: i,
      disabled: s,
      checked: c,
      required: d,
      setControl: f,
      setChecked: p,
      hasConsumerStoppedPropagationRef: m,
      isFormControl: h,
      bubbleInput: v
    } = sd(Lh, e), g = ae(o, f), b = u.useRef(c);
    return u.useEffect(() => {
      const y = a == null ? void 0 : a.form;
      if (y) {
        const w = () => p(b.current);
        return y.addEventListener("reset", w), () => y.removeEventListener("reset", w);
      }
    }, [a, p]), /* @__PURE__ */ l(
      Q.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Fr(c) ? "mixed" : c,
        "aria-required": d,
        "data-state": Wh(c),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: i,
        ...n,
        ref: g,
        onKeyDown: H(t, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: H(r, (y) => {
          p((w) => Fr(w) ? !0 : !w), v && h && (m.current = y.isPropagationStopped(), m.current || y.stopPropagation());
        })
      }
    );
  }
);
Fh.displayName = Lh;
var ld = u.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: r,
      name: n,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: c,
      onCheckedChange: d,
      form: f,
      ...p
    } = e;
    return /* @__PURE__ */ l(
      QE,
      {
        __scopeCheckbox: r,
        checked: o,
        defaultChecked: a,
        disabled: s,
        required: i,
        onCheckedChange: d,
        name: n,
        form: f,
        value: c,
        internal_do_not_use_render: ({ isFormControl: m }) => /* @__PURE__ */ S(Me, { children: [
          /* @__PURE__ */ l(
            Fh,
            {
              ...p,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          m && /* @__PURE__ */ l(
            Hh,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
ld.displayName = Qi;
var zh = "CheckboxIndicator", Bh = u.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, a = sd(zh, r);
    return /* @__PURE__ */ l(
      Be,
      {
        present: n || Fr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ l(
          Q.span,
          {
            "data-state": Wh(a.checked),
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
Bh.displayName = zh;
var jh = "CheckboxBubbleInput", Hh = u.forwardRef(
  ({ __scopeCheckbox: e, ...t }, r) => {
    const {
      control: n,
      hasConsumerStoppedPropagationRef: o,
      checked: a,
      defaultChecked: i,
      required: s,
      disabled: c,
      name: d,
      value: f,
      form: p,
      bubbleInput: m,
      setBubbleInput: h
    } = sd(jh, e), v = ae(r, h), g = ro(a), b = la(n);
    u.useEffect(() => {
      const w = m;
      if (!w) return;
      const x = window.HTMLInputElement.prototype, N = Object.getOwnPropertyDescriptor(
        x,
        "checked"
      ).set, P = !o.current;
      if (g !== a && N) {
        const E = new Event("click", { bubbles: P });
        w.indeterminate = Fr(a), N.call(w, Fr(a) ? !1 : a), w.dispatchEvent(E);
      }
    }, [m, g, a, o]);
    const y = u.useRef(Fr(a) ? !1 : a);
    return /* @__PURE__ */ l(
      Q.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i ?? y.current,
        required: s,
        disabled: c,
        name: d,
        value: f,
        form: p,
        ...t,
        tabIndex: -1,
        ref: v,
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
Hh.displayName = jh;
function JE(e) {
  return typeof e == "function";
}
function Fr(e) {
  return e === "indeterminate";
}
function Wh(e) {
  return Fr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const eP = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  ld,
  {
    ref: r,
    className: T(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l(Bh, { className: T("flex items-center justify-center text-current"), children: /* @__PURE__ */ l(Qe, { className: "h-4 w-4" }) })
  }
));
eP.displayName = ld.displayName;
var tP = u[" useId ".trim().toString()] || (() => {
}), rP = 0;
function ke(e) {
  const [t, r] = u.useState(tP());
  return ze(() => {
    r((n) => n ?? String(rP++));
  }, [e]), t ? `radix-${t}` : "";
}
var nP = u.createContext(void 0);
function Gt(e) {
  const t = u.useContext(nP);
  return e || t || "ltr";
}
var Xs = "rovingFocusGroup.onEntryFocus", oP = { bubbles: !1, cancelable: !0 }, ca = "RovingFocusGroup", [Ul, Vh, aP] = Nr(ca), [iP, sr] = De(
  ca,
  [aP]
), [sP, lP] = iP(ca), Gh = u.forwardRef(
  (e, t) => /* @__PURE__ */ l(Ul.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l(Ul.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l(cP, { ...e, ref: t }) }) })
);
Gh.displayName = ca;
var cP = u.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: o = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: c,
    onEntryFocus: d,
    preventScrollOnEntryFocus: f = !1,
    ...p
  } = e, m = u.useRef(null), h = ae(t, m), v = Gt(a), [g, b] = Oe({
    prop: i,
    defaultProp: s ?? null,
    onChange: c,
    caller: ca
  }), [y, w] = u.useState(!1), x = Se(d), C = Vh(r), N = u.useRef(!1), [P, E] = u.useState(0);
  return u.useEffect(() => {
    const A = m.current;
    if (A)
      return A.addEventListener(Xs, x), () => A.removeEventListener(Xs, x);
  }, [x]), /* @__PURE__ */ l(
    sP,
    {
      scope: r,
      orientation: n,
      dir: v,
      loop: o,
      currentTabStopId: g,
      onItemFocus: u.useCallback(
        (A) => b(A),
        [b]
      ),
      onItemShiftTab: u.useCallback(() => w(!0), []),
      onFocusableItemAdd: u.useCallback(
        () => E((A) => A + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => E((A) => A - 1),
        []
      ),
      children: /* @__PURE__ */ l(
        Q.div,
        {
          tabIndex: y || P === 0 ? -1 : 0,
          "data-orientation": n,
          ...p,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: H(e.onMouseDown, () => {
            N.current = !0;
          }),
          onFocus: H(e.onFocus, (A) => {
            const R = !N.current;
            if (A.target === A.currentTarget && R && !y) {
              const B = new CustomEvent(Xs, oP);
              if (A.currentTarget.dispatchEvent(B), !B.defaultPrevented) {
                const M = C().filter((V) => V.focusable), $ = M.find((V) => V.active), U = M.find((V) => V.id === g), K = [$, U, ...M].filter(
                  Boolean
                ).map((V) => V.ref.current);
                Yh(K, f);
              }
            }
            N.current = !1;
          }),
          onBlur: H(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), Uh = "RovingFocusGroupItem", Kh = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: a,
      children: i,
      ...s
    } = e, c = ke(), d = a || c, f = lP(Uh, r), p = f.currentTabStopId === d, m = Vh(r), { onFocusableItemAdd: h, onFocusableItemRemove: v, currentTabStopId: g } = f;
    return u.useEffect(() => {
      if (n)
        return h(), () => v();
    }, [n, h, v]), /* @__PURE__ */ l(
      Ul.ItemSlot,
      {
        scope: r,
        id: d,
        focusable: n,
        active: o,
        children: /* @__PURE__ */ l(
          Q.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": f.orientation,
            ...s,
            ref: t,
            onMouseDown: H(e.onMouseDown, (b) => {
              n ? f.onItemFocus(d) : b.preventDefault();
            }),
            onFocus: H(e.onFocus, () => f.onItemFocus(d)),
            onKeyDown: H(e.onKeyDown, (b) => {
              if (b.key === "Tab" && b.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (b.target !== b.currentTarget) return;
              const y = fP(b, f.orientation, f.dir);
              if (y !== void 0) {
                if (b.metaKey || b.ctrlKey || b.altKey || b.shiftKey) return;
                b.preventDefault();
                let x = m().filter((C) => C.focusable).map((C) => C.ref.current);
                if (y === "last") x.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && x.reverse();
                  const C = x.indexOf(b.currentTarget);
                  x = f.loop ? pP(x, C + 1) : x.slice(C + 1);
                }
                setTimeout(() => Yh(x));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: p, hasTabStop: g != null }) : i
          }
        )
      }
    );
  }
);
Kh.displayName = Uh;
var dP = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function uP(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function fP(e, t, r) {
  const n = uP(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return dP[n];
}
function Yh(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function pP(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var da = Gh, ua = Kh, cd = "Radio", [mP, qh] = De(cd), [hP, gP] = mP(cd), Xh = u.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: r,
      name: n,
      checked: o = !1,
      required: a,
      disabled: i,
      value: s = "on",
      onCheck: c,
      form: d,
      ...f
    } = e, [p, m] = u.useState(null), h = ae(t, (b) => m(b)), v = u.useRef(!1), g = p ? d || !!p.closest("form") : !0;
    return /* @__PURE__ */ S(hP, { scope: r, checked: o, disabled: i, children: [
      /* @__PURE__ */ l(
        Q.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": eg(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: s,
          ...f,
          ref: h,
          onClick: H(e.onClick, (b) => {
            o || c == null || c(), g && (v.current = b.isPropagationStopped(), v.current || b.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ l(
        Jh,
        {
          control: p,
          bubbles: !v.current,
          name: n,
          value: s,
          checked: o,
          required: a,
          disabled: i,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Xh.displayName = cd;
var Zh = "RadioIndicator", Qh = u.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...o } = e, a = gP(Zh, r);
    return /* @__PURE__ */ l(Be, { present: n || a.checked, children: /* @__PURE__ */ l(
      Q.span,
      {
        "data-state": eg(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Qh.displayName = Zh;
var vP = "RadioBubbleInput", Jh = u.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, a) => {
    const i = u.useRef(null), s = ae(i, a), c = ro(r), d = la(t);
    return u.useEffect(() => {
      const f = i.current;
      if (!f) return;
      const p = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (c !== r && h) {
        const v = new Event("click", { bubbles: n });
        h.call(f, r), f.dispatchEvent(v);
      }
    }, [c, r, n]), /* @__PURE__ */ l(
      Q.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: r,
        ...o,
        tabIndex: -1,
        ref: s,
        style: {
          ...o.style,
          ...d,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Jh.displayName = vP;
function eg(e) {
  return e ? "checked" : "unchecked";
}
var bP = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Ji = "RadioGroup", [yP, VY] = De(Ji, [
  sr,
  qh
]), tg = sr(), rg = qh(), [wP, xP] = yP(Ji), ng = u.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: r,
      name: n,
      defaultValue: o,
      value: a,
      required: i = !1,
      disabled: s = !1,
      orientation: c,
      dir: d,
      loop: f = !0,
      onValueChange: p,
      ...m
    } = e, h = tg(r), v = Gt(d), [g, b] = Oe({
      prop: a,
      defaultProp: o ?? null,
      onChange: p,
      caller: Ji
    });
    return /* @__PURE__ */ l(
      wP,
      {
        scope: r,
        name: n,
        required: i,
        disabled: s,
        value: g,
        onValueChange: b,
        children: /* @__PURE__ */ l(
          da,
          {
            asChild: !0,
            ...h,
            orientation: c,
            dir: v,
            loop: f,
            children: /* @__PURE__ */ l(
              Q.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": c,
                "data-disabled": s ? "" : void 0,
                dir: v,
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
ng.displayName = Ji;
var og = "RadioGroupItem", ag = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...o } = e, a = xP(og, r), i = a.disabled || n, s = tg(r), c = rg(r), d = u.useRef(null), f = ae(t, d), p = a.value === o.value, m = u.useRef(!1);
    return u.useEffect(() => {
      const h = (g) => {
        bP.includes(g.key) && (m.current = !0);
      }, v = () => m.current = !1;
      return document.addEventListener("keydown", h), document.addEventListener("keyup", v), () => {
        document.removeEventListener("keydown", h), document.removeEventListener("keyup", v);
      };
    }, []), /* @__PURE__ */ l(
      ua,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: p,
        children: /* @__PURE__ */ l(
          Xh,
          {
            disabled: i,
            required: a.required,
            checked: p,
            ...c,
            ...o,
            name: a.name,
            ref: f,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: H((h) => {
              h.key === "Enter" && h.preventDefault();
            }),
            onFocus: H(o.onFocus, () => {
              var h;
              m.current && ((h = d.current) == null || h.click());
            })
          }
        )
      }
    );
  }
);
ag.displayName = og;
var CP = "RadioGroupIndicator", ig = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, o = rg(r);
    return /* @__PURE__ */ l(Qh, { ...o, ...n, ref: t });
  }
);
ig.displayName = CP;
var sg = ng, lg = ag, SP = ig;
const NP = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(sg, { className: T("grid gap-2", e), ...t, ref: r }));
NP.displayName = sg.displayName;
const EP = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  lg,
  {
    ref: r,
    className: T(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l(SP, { className: "flex items-center justify-center", children: /* @__PURE__ */ l(qi, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
EP.displayName = lg.displayName;
function zo(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
var Zs = 0;
function es() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ef()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ef()), Zs++, () => {
      Zs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Zs--;
    };
  }, []);
}
function Ef() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Qs = "focusScope.autoFocusOnMount", Js = "focusScope.autoFocusOnUnmount", Pf = { bubbles: !1, cancelable: !0 }, PP = "FocusScope", fa = u.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, c] = u.useState(null), d = Se(o), f = Se(a), p = u.useRef(null), m = ae(t, (g) => c(g)), h = u.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  u.useEffect(() => {
    if (n) {
      let g = function(x) {
        if (h.paused || !s) return;
        const C = x.target;
        s.contains(C) ? p.current = C : Or(p.current, { select: !0 });
      }, b = function(x) {
        if (h.paused || !s) return;
        const C = x.relatedTarget;
        C !== null && (s.contains(C) || Or(p.current, { select: !0 }));
      }, y = function(x) {
        if (document.activeElement === document.body)
          for (const N of x)
            N.removedNodes.length > 0 && Or(s);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", b);
      const w = new MutationObserver(y);
      return s && w.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", b), w.disconnect();
      };
    }
  }, [n, s, h.paused]), u.useEffect(() => {
    if (s) {
      Rf.add(h);
      const g = document.activeElement;
      if (!s.contains(g)) {
        const y = new CustomEvent(Qs, Pf);
        s.addEventListener(Qs, d), s.dispatchEvent(y), y.defaultPrevented || (_P(kP(cg(s)), { select: !0 }), document.activeElement === g && Or(s));
      }
      return () => {
        s.removeEventListener(Qs, d), setTimeout(() => {
          const y = new CustomEvent(Js, Pf);
          s.addEventListener(Js, f), s.dispatchEvent(y), y.defaultPrevented || Or(g ?? document.body, { select: !0 }), s.removeEventListener(Js, f), Rf.remove(h);
        }, 0);
      };
    }
  }, [s, d, f, h]);
  const v = u.useCallback(
    (g) => {
      if (!r && !n || h.paused) return;
      const b = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, y = document.activeElement;
      if (b && y) {
        const w = g.currentTarget, [x, C] = RP(w);
        x && C ? !g.shiftKey && y === C ? (g.preventDefault(), r && Or(x, { select: !0 })) : g.shiftKey && y === x && (g.preventDefault(), r && Or(C, { select: !0 })) : y === w && g.preventDefault();
      }
    },
    [r, n, h.paused]
  );
  return /* @__PURE__ */ l(Q.div, { tabIndex: -1, ...i, ref: m, onKeyDown: v });
});
fa.displayName = PP;
function _P(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (Or(n, { select: t }), document.activeElement !== r) return;
}
function RP(e) {
  const t = cg(e), r = _f(t, e), n = _f(t.reverse(), e);
  return [r, n];
}
function cg(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function _f(e, t) {
  for (const r of e)
    if (!TP(r, { upTo: t })) return r;
}
function TP(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function MP(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Or(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && MP(e) && t && e.select();
  }
}
var Rf = AP();
function AP() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = Tf(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = Tf(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function Tf(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function kP(e) {
  return e.filter((t) => t.tagName !== "A");
}
const DP = ["top", "right", "bottom", "left"], Br = Math.min, xt = Math.max, ui = Math.round, Ia = Math.floor, rr = (e) => ({
  x: e,
  y: e
}), OP = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, IP = {
  start: "end",
  end: "start"
};
function Kl(e, t, r) {
  return xt(e, Br(t, r));
}
function wr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function xr(e) {
  return e.split("-")[0];
}
function no(e) {
  return e.split("-")[1];
}
function dd(e) {
  return e === "x" ? "y" : "x";
}
function ud(e) {
  return e === "y" ? "height" : "width";
}
const $P = /* @__PURE__ */ new Set(["top", "bottom"]);
function er(e) {
  return $P.has(xr(e)) ? "y" : "x";
}
function fd(e) {
  return dd(er(e));
}
function LP(e, t, r) {
  r === void 0 && (r = !1);
  const n = no(e), o = fd(e), a = ud(o);
  let i = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = fi(i)), [i, fi(i)];
}
function FP(e) {
  const t = fi(e);
  return [Yl(e), t, Yl(t)];
}
function Yl(e) {
  return e.replace(/start|end/g, (t) => IP[t]);
}
const Mf = ["left", "right"], Af = ["right", "left"], zP = ["top", "bottom"], BP = ["bottom", "top"];
function jP(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? Af : Mf : t ? Mf : Af;
    case "left":
    case "right":
      return t ? zP : BP;
    default:
      return [];
  }
}
function HP(e, t, r, n) {
  const o = no(e);
  let a = jP(xr(e), r === "start", n);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Yl)))), a;
}
function fi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => OP[t]);
}
function WP(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function dg(e) {
  return typeof e != "number" ? WP(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function pi(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: o
  } = e;
  return {
    width: n,
    height: o,
    top: r,
    left: t,
    right: t + n,
    bottom: r + o,
    x: t,
    y: r
  };
}
function kf(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const a = er(t), i = fd(t), s = ud(i), c = xr(t), d = a === "y", f = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, m = n[s] / 2 - o[s] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: f,
        y: n.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: f,
        y: n.y + n.height
      };
      break;
    case "right":
      h = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      h = {
        x: n.x - o.width,
        y: p
      };
      break;
    default:
      h = {
        x: n.x,
        y: n.y
      };
  }
  switch (no(t)) {
    case "start":
      h[i] -= m * (r && d ? -1 : 1);
      break;
    case "end":
      h[i] += m * (r && d ? -1 : 1);
      break;
  }
  return h;
}
const VP = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = r, s = a.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let d = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: p
  } = kf(d, n, c), m = n, h = {}, v = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: b,
      fn: y
    } = s[g], {
      x: w,
      y: x,
      data: C,
      reset: N
    } = await y({
      x: f,
      y: p,
      initialPlacement: n,
      placement: m,
      strategy: o,
      middlewareData: h,
      rects: d,
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
        ...C
      }
    }, N && v <= 50 && (v++, typeof N == "object" && (N.placement && (m = N.placement), N.rects && (d = N.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : N.rects), {
      x: f,
      y: p
    } = kf(d, m, c)), g = -1);
  }
  return {
    x: f,
    y: p,
    placement: m,
    strategy: o,
    middlewareData: h
  };
};
async function Bo(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: c
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: p = "floating",
    altBoundary: m = !1,
    padding: h = 0
  } = wr(t, e), v = dg(h), b = s[m ? p === "floating" ? "reference" : "floating" : p], y = pi(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(b))) == null || r ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: c
  })), w = p === "floating" ? {
    x: n,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), C = await (a.isElement == null ? void 0 : a.isElement(x)) ? await (a.getScale == null ? void 0 : a.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, N = pi(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: x,
    strategy: c
  }) : w);
  return {
    top: (y.top - N.top + v.top) / C.y,
    bottom: (N.bottom - y.bottom + v.bottom) / C.y,
    left: (y.left - N.left + v.left) / C.x,
    right: (N.right - y.right + v.right) / C.x
  };
}
const GP = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: c
    } = t, {
      element: d,
      padding: f = 0
    } = wr(e, t) || {};
    if (d == null)
      return {};
    const p = dg(f), m = {
      x: r,
      y: n
    }, h = fd(o), v = ud(h), g = await i.getDimensions(d), b = h === "y", y = b ? "top" : "left", w = b ? "bottom" : "right", x = b ? "clientHeight" : "clientWidth", C = a.reference[v] + a.reference[h] - m[h] - a.floating[v], N = m[h] - a.reference[h], P = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d));
    let E = P ? P[x] : 0;
    (!E || !await (i.isElement == null ? void 0 : i.isElement(P))) && (E = s.floating[x] || a.floating[v]);
    const A = C / 2 - N / 2, R = E / 2 - g[v] / 2 - 1, B = Br(p[y], R), M = Br(p[w], R), $ = B, U = E - g[v] - M, L = E / 2 - g[v] / 2 + A, K = Kl($, L, U), V = !c.arrow && no(o) != null && L !== K && a.reference[v] / 2 - (L < $ ? B : M) - g[v] / 2 < 0, z = V ? L < $ ? L - $ : L - U : 0;
    return {
      [h]: m[h] + z,
      data: {
        [h]: K,
        centerOffset: L - K - z,
        ...V && {
          alignmentOffset: z
        }
      },
      reset: V
    };
  }
}), UP = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: c,
        elements: d
      } = t, {
        mainAxis: f = !0,
        crossAxis: p = !0,
        fallbackPlacements: m,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: g = !0,
        ...b
      } = wr(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const y = xr(o), w = er(s), x = xr(s) === s, C = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)), N = m || (x || !g ? [fi(s)] : FP(s)), P = v !== "none";
      !m && P && N.push(...HP(s, g, v, C));
      const E = [s, ...N], A = await Bo(t, b), R = [];
      let B = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (f && R.push(A[y]), p) {
        const L = LP(o, i, C);
        R.push(A[L[0]], A[L[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: R
      }], !R.every((L) => L <= 0)) {
        var M, $;
        const L = (((M = a.flip) == null ? void 0 : M.index) || 0) + 1, K = E[L];
        if (K && (!(p === "alignment" ? w !== er(K) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        B.every((O) => O.overflows[0] > 0 && er(O.placement) === w)))
          return {
            data: {
              index: L,
              overflows: B
            },
            reset: {
              placement: K
            }
          };
        let V = ($ = B.filter((z) => z.overflows[0] <= 0).sort((z, O) => z.overflows[1] - O.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!V)
          switch (h) {
            case "bestFit": {
              var U;
              const z = (U = B.filter((O) => {
                if (P) {
                  const F = er(O.placement);
                  return F === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((F) => F > 0).reduce((F, ee) => F + ee, 0)]).sort((O, F) => O[1] - F[1])[0]) == null ? void 0 : U[0];
              z && (V = z);
              break;
            }
            case "initialPlacement":
              V = s;
              break;
          }
        if (o !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
function Df(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Of(e) {
  return DP.some((t) => e[t] >= 0);
}
const KP = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = wr(e, t);
      switch (n) {
        case "referenceHidden": {
          const a = await Bo(t, {
            ...o,
            elementContext: "reference"
          }), i = Df(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Of(i)
            }
          };
        }
        case "escaped": {
          const a = await Bo(t, {
            ...o,
            altBoundary: !0
          }), i = Df(a, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Of(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, ug = /* @__PURE__ */ new Set(["left", "top"]);
async function YP(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), i = xr(r), s = no(r), c = er(r) === "y", d = ug.has(i) ? -1 : 1, f = a && c ? -1 : 1, p = wr(t, e);
  let {
    mainAxis: m,
    crossAxis: h,
    alignmentAxis: v
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return s && typeof v == "number" && (h = s === "end" ? v * -1 : v), c ? {
    x: h * f,
    y: m * d
  } : {
    x: m * d,
    y: h * f
  };
}
const qP = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = t, c = await YP(t, e);
      return i === ((r = s.offset) == null ? void 0 : r.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : {
        x: o + c.x,
        y: a + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
}, XP = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
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
        ...c
      } = wr(e, t), d = {
        x: r,
        y: n
      }, f = await Bo(t, c), p = er(xr(o)), m = dd(p);
      let h = d[m], v = d[p];
      if (a) {
        const b = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", w = h + f[b], x = h - f[y];
        h = Kl(w, h, x);
      }
      if (i) {
        const b = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", w = v + f[b], x = v - f[y];
        v = Kl(w, v, x);
      }
      const g = s.fn({
        ...t,
        [m]: h,
        [p]: v
      });
      return {
        ...g,
        data: {
          x: g.x - r,
          y: g.y - n,
          enabled: {
            [m]: a,
            [p]: i
          }
        }
      };
    }
  };
}, ZP = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: o,
        rects: a,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: c = !0,
        crossAxis: d = !0
      } = wr(e, t), f = {
        x: r,
        y: n
      }, p = er(o), m = dd(p);
      let h = f[m], v = f[p];
      const g = wr(s, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (c) {
        const x = m === "y" ? "height" : "width", C = a.reference[m] - a.floating[x] + b.mainAxis, N = a.reference[m] + a.reference[x] - b.mainAxis;
        h < C ? h = C : h > N && (h = N);
      }
      if (d) {
        var y, w;
        const x = m === "y" ? "width" : "height", C = ug.has(xr(o)), N = a.reference[p] - a.floating[x] + (C && ((y = i.offset) == null ? void 0 : y[p]) || 0) + (C ? 0 : b.crossAxis), P = a.reference[p] + a.reference[x] + (C ? 0 : ((w = i.offset) == null ? void 0 : w[p]) || 0) - (C ? b.crossAxis : 0);
        v < N ? v = N : v > P && (v = P);
      }
      return {
        [m]: h,
        [p]: v
      };
    }
  };
}, QP = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        rects: a,
        platform: i,
        elements: s
      } = t, {
        apply: c = () => {
        },
        ...d
      } = wr(e, t), f = await Bo(t, d), p = xr(o), m = no(o), h = er(o) === "y", {
        width: v,
        height: g
      } = a.floating;
      let b, y;
      p === "top" || p === "bottom" ? (b = p, y = m === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = p, b = m === "end" ? "top" : "bottom");
      const w = g - f.top - f.bottom, x = v - f.left - f.right, C = Br(g - f[b], w), N = Br(v - f[y], x), P = !t.middlewareData.shift;
      let E = C, A = N;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (A = x), (n = t.middlewareData.shift) != null && n.enabled.y && (E = w), P && !m) {
        const B = xt(f.left, 0), M = xt(f.right, 0), $ = xt(f.top, 0), U = xt(f.bottom, 0);
        h ? A = v - 2 * (B !== 0 || M !== 0 ? B + M : xt(f.left, f.right)) : E = g - 2 * ($ !== 0 || U !== 0 ? $ + U : xt(f.top, f.bottom));
      }
      await c({
        ...t,
        availableWidth: A,
        availableHeight: E
      });
      const R = await i.getDimensions(s.floating);
      return v !== R.width || g !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ts() {
  return typeof window < "u";
}
function oo(e) {
  return fg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ct(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function lr(e) {
  var t;
  return (t = (fg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function fg(e) {
  return ts() ? e instanceof Node || e instanceof Ct(e).Node : !1;
}
function jt(e) {
  return ts() ? e instanceof Element || e instanceof Ct(e).Element : !1;
}
function or(e) {
  return ts() ? e instanceof HTMLElement || e instanceof Ct(e).HTMLElement : !1;
}
function If(e) {
  return !ts() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ct(e).ShadowRoot;
}
const JP = /* @__PURE__ */ new Set(["inline", "contents"]);
function pa(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = Ht(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !JP.has(o);
}
const e_ = /* @__PURE__ */ new Set(["table", "td", "th"]);
function t_(e) {
  return e_.has(oo(e));
}
const r_ = [":popover-open", ":modal"];
function rs(e) {
  return r_.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const n_ = ["transform", "translate", "scale", "rotate", "perspective"], o_ = ["transform", "translate", "scale", "rotate", "perspective", "filter"], a_ = ["paint", "layout", "strict", "content"];
function pd(e) {
  const t = md(), r = jt(e) ? Ht(e) : e;
  return n_.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || o_.some((n) => (r.willChange || "").includes(n)) || a_.some((n) => (r.contain || "").includes(n));
}
function i_(e) {
  let t = jr(e);
  for (; or(t) && !Wn(t); ) {
    if (pd(t))
      return t;
    if (rs(t))
      return null;
    t = jr(t);
  }
  return null;
}
function md() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const s_ = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Wn(e) {
  return s_.has(oo(e));
}
function Ht(e) {
  return Ct(e).getComputedStyle(e);
}
function ns(e) {
  return jt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function jr(e) {
  if (oo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    If(e) && e.host || // Fallback.
    lr(e)
  );
  return If(t) ? t.host : t;
}
function pg(e) {
  const t = jr(e);
  return Wn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : or(t) && pa(t) ? t : pg(t);
}
function jo(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = pg(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Ct(o);
  if (a) {
    const s = ql(i);
    return t.concat(i, i.visualViewport || [], pa(o) ? o : [], s && r ? jo(s) : []);
  }
  return t.concat(o, jo(o, [], r));
}
function ql(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function mg(e) {
  const t = Ht(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = or(e), a = o ? e.offsetWidth : r, i = o ? e.offsetHeight : n, s = ui(r) !== a || ui(n) !== i;
  return s && (r = a, n = i), {
    width: r,
    height: n,
    $: s
  };
}
function hd(e) {
  return jt(e) ? e : e.contextElement;
}
function Ln(e) {
  const t = hd(e);
  if (!or(t))
    return rr(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = mg(t);
  let i = (a ? ui(r.width) : r.width) / n, s = (a ? ui(r.height) : r.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const l_ = /* @__PURE__ */ rr(0);
function hg(e) {
  const t = Ct(e);
  return !md() || !t.visualViewport ? l_ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function c_(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== Ct(e) ? !1 : t;
}
function an(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), a = hd(e);
  let i = rr(1);
  t && (n ? jt(n) && (i = Ln(n)) : i = Ln(e));
  const s = c_(a, r, n) ? hg(a) : rr(0);
  let c = (o.left + s.x) / i.x, d = (o.top + s.y) / i.y, f = o.width / i.x, p = o.height / i.y;
  if (a) {
    const m = Ct(a), h = n && jt(n) ? Ct(n) : n;
    let v = m, g = ql(v);
    for (; g && n && h !== v; ) {
      const b = Ln(g), y = g.getBoundingClientRect(), w = Ht(g), x = y.left + (g.clientLeft + parseFloat(w.paddingLeft)) * b.x, C = y.top + (g.clientTop + parseFloat(w.paddingTop)) * b.y;
      c *= b.x, d *= b.y, f *= b.x, p *= b.y, c += x, d += C, v = Ct(g), g = ql(v);
    }
  }
  return pi({
    width: f,
    height: p,
    x: c,
    y: d
  });
}
function gd(e, t) {
  const r = ns(e).scrollLeft;
  return t ? t.left + r : an(lr(e)).left + r;
}
function gg(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    gd(e, n)
  )), a = n.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function d_(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const a = o === "fixed", i = lr(n), s = t ? rs(t.floating) : !1;
  if (n === i || s && a)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = rr(1);
  const f = rr(0), p = or(n);
  if ((p || !p && !a) && ((oo(n) !== "body" || pa(i)) && (c = ns(n)), or(n))) {
    const h = an(n);
    d = Ln(n), f.x = h.x + n.clientLeft, f.y = h.y + n.clientTop;
  }
  const m = i && !p && !a ? gg(i, c, !0) : rr(0);
  return {
    width: r.width * d.x,
    height: r.height * d.y,
    x: r.x * d.x - c.scrollLeft * d.x + f.x + m.x,
    y: r.y * d.y - c.scrollTop * d.y + f.y + m.y
  };
}
function u_(e) {
  return Array.from(e.getClientRects());
}
function f_(e) {
  const t = lr(e), r = ns(e), n = e.ownerDocument.body, o = xt(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = xt(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + gd(e);
  const s = -r.scrollTop;
  return Ht(n).direction === "rtl" && (i += xt(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function p_(e, t) {
  const r = Ct(e), n = lr(e), o = r.visualViewport;
  let a = n.clientWidth, i = n.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const d = md();
    (!d || d && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
const m_ = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function h_(e, t) {
  const r = an(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, a = or(e) ? Ln(e) : rr(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = o * a.x, d = n * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: d
  };
}
function $f(e, t, r) {
  let n;
  if (t === "viewport")
    n = p_(e, r);
  else if (t === "document")
    n = f_(lr(e));
  else if (jt(t))
    n = h_(t, r);
  else {
    const o = hg(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return pi(n);
}
function vg(e, t) {
  const r = jr(e);
  return r === t || !jt(r) || Wn(r) ? !1 : Ht(r).position === "fixed" || vg(r, t);
}
function g_(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = jo(e, [], !1).filter((s) => jt(s) && oo(s) !== "body"), o = null;
  const a = Ht(e).position === "fixed";
  let i = a ? jr(e) : e;
  for (; jt(i) && !Wn(i); ) {
    const s = Ht(i), c = pd(i);
    !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && m_.has(o.position) || pa(i) && !c && vg(e, i)) ? n = n.filter((f) => f !== i) : o = s, i = jr(i);
  }
  return t.set(e, n), n;
}
function v_(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const i = [...r === "clippingAncestors" ? rs(t) ? [] : g_(t, this._c) : [].concat(r), n], s = i[0], c = i.reduce((d, f) => {
    const p = $f(t, f, o);
    return d.top = xt(p.top, d.top), d.right = Br(p.right, d.right), d.bottom = Br(p.bottom, d.bottom), d.left = xt(p.left, d.left), d;
  }, $f(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function b_(e) {
  const {
    width: t,
    height: r
  } = mg(e);
  return {
    width: t,
    height: r
  };
}
function y_(e, t, r) {
  const n = or(t), o = lr(t), a = r === "fixed", i = an(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = rr(0);
  function d() {
    c.x = gd(o);
  }
  if (n || !n && !a)
    if ((oo(t) !== "body" || pa(o)) && (s = ns(t)), n) {
      const h = an(t, !0, a, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else o && d();
  a && !n && o && d();
  const f = o && !n && !a ? gg(o, s) : rr(0), p = i.left + s.scrollLeft - c.x - f.x, m = i.top + s.scrollTop - c.y - f.y;
  return {
    x: p,
    y: m,
    width: i.width,
    height: i.height
  };
}
function el(e) {
  return Ht(e).position === "static";
}
function Lf(e, t) {
  if (!or(e) || Ht(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return lr(e) === r && (r = r.ownerDocument.body), r;
}
function bg(e, t) {
  const r = Ct(e);
  if (rs(e))
    return r;
  if (!or(e)) {
    let o = jr(e);
    for (; o && !Wn(o); ) {
      if (jt(o) && !el(o))
        return o;
      o = jr(o);
    }
    return r;
  }
  let n = Lf(e, t);
  for (; n && t_(n) && el(n); )
    n = Lf(n, t);
  return n && Wn(n) && el(n) && !pd(n) ? r : n || i_(e) || r;
}
const w_ = async function(e) {
  const t = this.getOffsetParent || bg, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: y_(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function x_(e) {
  return Ht(e).direction === "rtl";
}
const C_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: d_,
  getDocumentElement: lr,
  getClippingRect: v_,
  getOffsetParent: bg,
  getElementRects: w_,
  getClientRects: u_,
  getDimensions: b_,
  getScale: Ln,
  isElement: jt,
  isRTL: x_
};
function yg(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function S_(e, t) {
  let r = null, n;
  const o = lr(e);
  function a() {
    var s;
    clearTimeout(n), (s = r) == null || s.disconnect(), r = null;
  }
  function i(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), a();
    const d = e.getBoundingClientRect(), {
      left: f,
      top: p,
      width: m,
      height: h
    } = d;
    if (s || t(), !m || !h)
      return;
    const v = Ia(p), g = Ia(o.clientWidth - (f + m)), b = Ia(o.clientHeight - (p + h)), y = Ia(f), x = {
      rootMargin: -v + "px " + -g + "px " + -b + "px " + -y + "px",
      threshold: xt(0, Br(1, c)) || 1
    };
    let C = !0;
    function N(P) {
      const E = P[0].intersectionRatio;
      if (E !== c) {
        if (!C)
          return i();
        E ? i(!1, E) : n = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !yg(d, e.getBoundingClientRect()) && i(), C = !1;
    }
    try {
      r = new IntersectionObserver(N, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(N, x);
    }
    r.observe(e);
  }
  return i(!0), a;
}
function N_(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, d = hd(e), f = o || a ? [...d ? jo(d) : [], ...jo(t)] : [];
  f.forEach((y) => {
    o && y.addEventListener("scroll", r, {
      passive: !0
    }), a && y.addEventListener("resize", r);
  });
  const p = d && s ? S_(d, r) : null;
  let m = -1, h = null;
  i && (h = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === d && h && (h.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var x;
      (x = h) == null || x.observe(t);
    })), r();
  }), d && !c && h.observe(d), h.observe(t));
  let v, g = c ? an(e) : null;
  c && b();
  function b() {
    const y = an(e);
    g && !yg(g, y) && r(), g = y, v = requestAnimationFrame(b);
  }
  return r(), () => {
    var y;
    f.forEach((w) => {
      o && w.removeEventListener("scroll", r), a && w.removeEventListener("resize", r);
    }), p == null || p(), (y = h) == null || y.disconnect(), h = null, c && cancelAnimationFrame(v);
  };
}
const E_ = qP, P_ = XP, __ = UP, R_ = QP, T_ = KP, Ff = GP, M_ = ZP, A_ = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: C_,
    ...r
  }, a = {
    ...o.platform,
    _c: n
  };
  return VP(e, t, {
    ...o,
    platform: a
  });
};
var k_ = typeof document < "u", D_ = function() {
}, ti = k_ ? Vi : D_;
function mi(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!mi(e[n], t[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const a = o[n];
      if (!(a === "_owner" && e.$$typeof) && !mi(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function wg(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function zf(e, t) {
  const r = wg(e);
  return Math.round(t * r) / r;
}
function tl(e) {
  const t = u.useRef(e);
  return ti(() => {
    t.current = e;
  }), t;
}
function O_(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: d
  } = e, [f, p] = u.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, h] = u.useState(n);
  mi(m, n) || h(n);
  const [v, g] = u.useState(null), [b, y] = u.useState(null), w = u.useCallback((O) => {
    O !== P.current && (P.current = O, g(O));
  }, []), x = u.useCallback((O) => {
    O !== E.current && (E.current = O, y(O));
  }, []), C = a || v, N = i || b, P = u.useRef(null), E = u.useRef(null), A = u.useRef(f), R = c != null, B = tl(c), M = tl(o), $ = tl(d), U = u.useCallback(() => {
    if (!P.current || !E.current)
      return;
    const O = {
      placement: t,
      strategy: r,
      middleware: m
    };
    M.current && (O.platform = M.current), A_(P.current, E.current, O).then((F) => {
      const ee = {
        ...F,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: $.current !== !1
      };
      L.current && !mi(A.current, ee) && (A.current = ee, ra.flushSync(() => {
        p(ee);
      }));
    });
  }, [m, t, r, M, $]);
  ti(() => {
    d === !1 && A.current.isPositioned && (A.current.isPositioned = !1, p((O) => ({
      ...O,
      isPositioned: !1
    })));
  }, [d]);
  const L = u.useRef(!1);
  ti(() => (L.current = !0, () => {
    L.current = !1;
  }), []), ti(() => {
    if (C && (P.current = C), N && (E.current = N), C && N) {
      if (B.current)
        return B.current(C, N, U);
      U();
    }
  }, [C, N, U, B, R]);
  const K = u.useMemo(() => ({
    reference: P,
    floating: E,
    setReference: w,
    setFloating: x
  }), [w, x]), V = u.useMemo(() => ({
    reference: C,
    floating: N
  }), [C, N]), z = u.useMemo(() => {
    const O = {
      position: r,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return O;
    const F = zf(V.floating, f.x), ee = zf(V.floating, f.y);
    return s ? {
      ...O,
      transform: "translate(" + F + "px, " + ee + "px)",
      ...wg(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: F,
      top: ee
    };
  }, [r, s, V.floating, f.x, f.y]);
  return u.useMemo(() => ({
    ...f,
    update: U,
    refs: K,
    elements: V,
    floatingStyles: z
  }), [f, U, K, V, z]);
}
const I_ = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: n,
        padding: o
      } = typeof e == "function" ? e(r) : e;
      return n && t(n) ? n.current != null ? Ff({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? Ff({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, $_ = (e, t) => ({
  ...E_(e),
  options: [e, t]
}), L_ = (e, t) => ({
  ...P_(e),
  options: [e, t]
}), F_ = (e, t) => ({
  ...M_(e),
  options: [e, t]
}), z_ = (e, t) => ({
  ...__(e),
  options: [e, t]
}), B_ = (e, t) => ({
  ...R_(e),
  options: [e, t]
}), j_ = (e, t) => ({
  ...T_(e),
  options: [e, t]
}), H_ = (e, t) => ({
  ...I_(e),
  options: [e, t]
});
var W_ = "Arrow", xg = u.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ l(
    Q.svg,
    {
      ...a,
      ref: t,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ l("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
xg.displayName = W_;
var V_ = xg, vd = "Popper", [Cg, cr] = De(vd), [G_, Sg] = Cg(vd), Ng = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = u.useState(null);
  return /* @__PURE__ */ l(G_, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
Ng.displayName = vd;
var Eg = "PopperAnchor", Pg = u.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, a = Sg(Eg, r), i = u.useRef(null), s = ae(t, i);
    return u.useEffect(() => {
      a.onAnchorChange((n == null ? void 0 : n.current) || i.current);
    }), n ? null : /* @__PURE__ */ l(Q.div, { ...o, ref: s });
  }
);
Pg.displayName = Eg;
var bd = "PopperContent", [U_, K_] = Cg(bd), _g = u.forwardRef(
  (e, t) => {
    var k, Y, J, re, ne, X;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: c = !0,
      collisionBoundary: d = [],
      collisionPadding: f = 0,
      sticky: p = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: v,
      ...g
    } = e, b = Sg(bd, r), [y, w] = u.useState(null), x = ae(t, (q) => w(q)), [C, N] = u.useState(null), P = la(C), E = (P == null ? void 0 : P.width) ?? 0, A = (P == null ? void 0 : P.height) ?? 0, R = n + (a !== "center" ? "-" + a : ""), B = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, M = Array.isArray(d) ? d : [d], $ = M.length > 0, U = {
      padding: B,
      boundary: M.filter(q_),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: $
    }, { refs: L, floatingStyles: K, placement: V, isPositioned: z, middlewareData: O } = O_({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: (...q) => N_(...q, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        $_({ mainAxis: o + A, alignmentAxis: i }),
        c && L_({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? F_() : void 0,
          ...U
        }),
        c && z_({ ...U }),
        B_({
          ...U,
          apply: ({ elements: q, rects: j, availableWidth: oe, availableHeight: ce }) => {
            const { width: ve, height: fe } = j.reference, de = q.floating.style;
            de.setProperty("--radix-popper-available-width", `${oe}px`), de.setProperty("--radix-popper-available-height", `${ce}px`), de.setProperty("--radix-popper-anchor-width", `${ve}px`), de.setProperty("--radix-popper-anchor-height", `${fe}px`);
          }
        }),
        C && H_({ element: C, padding: s }),
        X_({ arrowWidth: E, arrowHeight: A }),
        m && j_({ strategy: "referenceHidden", ...U })
      ]
    }), [F, ee] = Mg(V), te = Se(v);
    ze(() => {
      z && (te == null || te());
    }, [z, te]);
    const I = (k = O.arrow) == null ? void 0 : k.x, D = (Y = O.arrow) == null ? void 0 : Y.y, W = ((J = O.arrow) == null ? void 0 : J.centerOffset) !== 0, [G, Z] = u.useState();
    return ze(() => {
      y && Z(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ l(
      "div",
      {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: z ? K.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: G,
          "--radix-popper-transform-origin": [
            (re = O.transformOrigin) == null ? void 0 : re.x,
            (ne = O.transformOrigin) == null ? void 0 : ne.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((X = O.hide) == null ? void 0 : X.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ l(
          U_,
          {
            scope: r,
            placedSide: F,
            onArrowChange: N,
            arrowX: I,
            arrowY: D,
            shouldHideArrow: W,
            children: /* @__PURE__ */ l(
              Q.div,
              {
                "data-side": F,
                "data-align": ee,
                ...g,
                ref: x,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: z ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
_g.displayName = bd;
var Rg = "PopperArrow", Y_ = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Tg = u.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, a = K_(Rg, n), i = Y_[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ l(
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
        children: /* @__PURE__ */ l(
          V_,
          {
            ...o,
            ref: r,
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
Tg.displayName = Rg;
function q_(e) {
  return e !== null;
}
var X_ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, y, w;
    const { placement: r, rects: n, middlewareData: o } = t, i = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [d, f] = Mg(r), p = { start: "0%", center: "50%", end: "100%" }[f], m = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + s / 2, h = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + c / 2;
    let v = "", g = "";
    return d === "bottom" ? (v = i ? p : `${m}px`, g = `${-c}px`) : d === "top" ? (v = i ? p : `${m}px`, g = `${n.floating.height + c}px`) : d === "right" ? (v = `${-c}px`, g = i ? p : `${h}px`) : d === "left" && (v = `${n.floating.width + c}px`, g = i ? p : `${h}px`), { data: { x: v, y: g } };
  }
});
function Mg(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var ao = Ng, io = Pg, ma = _g, ha = Tg, Z_ = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Pn = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakMap(), La = {}, rl = 0, Ag = function(e) {
  return e && (e.host || Ag(e.parentNode));
}, Q_ = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Ag(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, J_ = function(e, t, r, n) {
  var o = Q_(t, Array.isArray(e) ? e : [e]);
  La[r] || (La[r] = /* @__PURE__ */ new WeakMap());
  var a = La[r], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), d = function(p) {
    !p || s.has(p) || (s.add(p), d(p.parentNode));
  };
  o.forEach(d);
  var f = function(p) {
    !p || c.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (s.has(m))
        f(m);
      else
        try {
          var h = m.getAttribute(n), v = h !== null && h !== "false", g = (Pn.get(m) || 0) + 1, b = (a.get(m) || 0) + 1;
          Pn.set(m, g), a.set(m, b), i.push(m), g === 1 && v && $a.set(m, !0), b === 1 && m.setAttribute(r, "true"), v || m.setAttribute(n, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", m, y);
        }
    });
  };
  return f(t), s.clear(), rl++, function() {
    i.forEach(function(p) {
      var m = Pn.get(p) - 1, h = a.get(p) - 1;
      Pn.set(p, m), a.set(p, h), m || ($a.has(p) || p.removeAttribute(n), $a.delete(p)), h || p.removeAttribute(r);
    }), rl--, rl || (Pn = /* @__PURE__ */ new WeakMap(), Pn = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakMap(), La = {});
  };
}, os = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = Z_(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), J_(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, Jt = function() {
  return Jt = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Jt.apply(this, arguments);
};
function kg(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function e2(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var ri = "right-scroll-bar-position", ni = "width-before-scroll-bar", t2 = "with-scroll-bars-hidden", r2 = "--removed-body-scroll-bar-size";
function nl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function n2(e, t) {
  var r = me(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var o2 = typeof window < "u" ? u.useLayoutEffect : u.useEffect, Bf = /* @__PURE__ */ new WeakMap();
function a2(e, t) {
  var r = n2(null, function(n) {
    return e.forEach(function(o) {
      return nl(o, n);
    });
  });
  return o2(function() {
    var n = Bf.get(r);
    if (n) {
      var o = new Set(n), a = new Set(e), i = r.current;
      o.forEach(function(s) {
        a.has(s) || nl(s, null);
      }), a.forEach(function(s) {
        o.has(s) || nl(s, i);
      });
    }
    Bf.set(r, e);
  }, [e]), r;
}
function i2(e) {
  return e;
}
function s2(e, t) {
  t === void 0 && (t = i2);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, n);
      return r.push(i), function() {
        r = r.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (n = !0; r.length; ) {
        var i = r;
        r = [], i.forEach(a);
      }
      r = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(a) {
      n = !0;
      var i = [];
      if (r.length) {
        var s = r;
        r = [], s.forEach(a), i = r;
      }
      var c = function() {
        var f = i;
        i = [], f.forEach(a);
      }, d = function() {
        return Promise.resolve().then(c);
      };
      d(), r = {
        push: function(f) {
          i.push(f), d();
        },
        filter: function(f) {
          return i = i.filter(f), r;
        }
      };
    }
  };
  return o;
}
function l2(e) {
  e === void 0 && (e = {});
  var t = s2(null);
  return t.options = Jt({ async: !0, ssr: !1 }, e), t;
}
var Dg = function(e) {
  var t = e.sideCar, r = kg(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return u.createElement(n, Jt({}, r));
};
Dg.isSideCarExport = !0;
function c2(e, t) {
  return e.useMedium(t), Dg;
}
var Og = l2(), ol = function() {
}, as = u.forwardRef(function(e, t) {
  var r = u.useRef(null), n = u.useState({
    onScrollCapture: ol,
    onWheelCapture: ol,
    onTouchMoveCapture: ol
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, c = e.className, d = e.removeScrollBar, f = e.enabled, p = e.shards, m = e.sideCar, h = e.noRelative, v = e.noIsolation, g = e.inert, b = e.allowPinchZoom, y = e.as, w = y === void 0 ? "div" : y, x = e.gapMode, C = kg(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), N = m, P = a2([r, t]), E = Jt(Jt({}, C), o);
  return u.createElement(
    u.Fragment,
    null,
    f && u.createElement(N, { sideCar: Og, removeScrollBar: d, shards: p, noRelative: h, noIsolation: v, inert: g, setCallbacks: a, allowPinchZoom: !!b, lockRef: r, gapMode: x }),
    i ? u.cloneElement(u.Children.only(s), Jt(Jt({}, E), { ref: P })) : u.createElement(w, Jt({}, E, { className: c, ref: P }), s)
  );
});
as.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
as.classNames = {
  fullWidth: ni,
  zeroRight: ri
};
var d2 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function u2() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = d2();
  return t && e.setAttribute("nonce", t), e;
}
function f2(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function p2(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var m2 = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = u2()) && (f2(t, r), p2(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, h2 = function() {
  var e = m2();
  return function(t, r) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Ig = function() {
  var e = h2(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, g2 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, al = function(e) {
  return parseInt(e || "", 10) || 0;
}, v2 = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [al(r), al(n), al(o)];
}, b2 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return g2;
  var t = v2(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, y2 = Ig(), Fn = "data-scroll-locked", w2 = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(t2, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body[`).concat(Fn, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(s, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ri, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(ni, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(ri, " .").concat(ri, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(ni, " .").concat(ni, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Fn, `] {
    `).concat(r2, ": ").concat(s, `px;
  }
`);
}, jf = function() {
  var e = parseInt(document.body.getAttribute(Fn) || "0", 10);
  return isFinite(e) ? e : 0;
}, x2 = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Fn, (jf() + 1).toString()), function() {
      var e = jf() - 1;
      e <= 0 ? document.body.removeAttribute(Fn) : document.body.setAttribute(Fn, e.toString());
    };
  }, []);
}, C2 = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  x2();
  var a = u.useMemo(function() {
    return b2(o);
  }, [o]);
  return u.createElement(y2, { styles: w2(a, !t, o, r ? "" : "!important") });
}, Xl = !1;
if (typeof window < "u")
  try {
    var Fa = Object.defineProperty({}, "passive", {
      get: function() {
        return Xl = !0, !0;
      }
    });
    window.addEventListener("test", Fa, Fa), window.removeEventListener("test", Fa, Fa);
  } catch {
    Xl = !1;
  }
var _n = Xl ? { passive: !1 } : !1, S2 = function(e) {
  return e.tagName === "TEXTAREA";
}, $g = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !S2(e) && r[t] === "visible")
  );
}, N2 = function(e) {
  return $g(e, "overflowY");
}, E2 = function(e) {
  return $g(e, "overflowX");
}, Hf = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Lg(e, n);
    if (o) {
      var a = Fg(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, P2 = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, _2 = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Lg = function(e, t) {
  return e === "v" ? N2(t) : E2(t);
}, Fg = function(e, t) {
  return e === "v" ? P2(t) : _2(t);
}, R2 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, T2 = function(e, t, r, n, o) {
  var a = R2(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, c = t.contains(s), d = !1, f = i > 0, p = 0, m = 0;
  do {
    if (!s)
      break;
    var h = Fg(e, s), v = h[0], g = h[1], b = h[2], y = g - b - a * v;
    (v || y) && Lg(e, s) && (p += y, m += v);
    var w = s.parentNode;
    s = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (f && (Math.abs(p) < 1 || !o) || !f && (Math.abs(m) < 1 || !o)) && (d = !0), d;
}, za = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Wf = function(e) {
  return [e.deltaX, e.deltaY];
}, Vf = function(e) {
  return e && "current" in e ? e.current : e;
}, M2 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, A2 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, k2 = 0, Rn = [];
function D2(e) {
  var t = u.useRef([]), r = u.useRef([0, 0]), n = u.useRef(), o = u.useState(k2++)[0], a = u.useState(Ig)[0], i = u.useRef(e);
  u.useEffect(function() {
    i.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = e2([e.lockRef.current], (e.shards || []).map(Vf), !0).filter(Boolean);
      return g.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = u.useCallback(function(g, b) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !i.current.allowPinchZoom;
    var y = za(g), w = r.current, x = "deltaX" in g ? g.deltaX : w[0] - y[0], C = "deltaY" in g ? g.deltaY : w[1] - y[1], N, P = g.target, E = Math.abs(x) > Math.abs(C) ? "h" : "v";
    if ("touches" in g && E === "h" && P.type === "range")
      return !1;
    var A = Hf(E, P);
    if (!A)
      return !0;
    if (A ? N = E : (N = E === "v" ? "h" : "v", A = Hf(E, P)), !A)
      return !1;
    if (!n.current && "changedTouches" in g && (x || C) && (n.current = N), !N)
      return !0;
    var R = n.current || N;
    return T2(R, b, g, R === "h" ? x : C, !0);
  }, []), c = u.useCallback(function(g) {
    var b = g;
    if (!(!Rn.length || Rn[Rn.length - 1] !== a)) {
      var y = "deltaY" in b ? Wf(b) : za(b), w = t.current.filter(function(N) {
        return N.name === b.type && (N.target === b.target || b.target === N.shadowParent) && M2(N.delta, y);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var x = (i.current.shards || []).map(Vf).filter(Boolean).filter(function(N) {
          return N.contains(b.target);
        }), C = x.length > 0 ? s(b, x[0]) : !i.current.noIsolation;
        C && b.cancelable && b.preventDefault();
      }
    }
  }, []), d = u.useCallback(function(g, b, y, w) {
    var x = { name: g, delta: b, target: y, should: w, shadowParent: O2(y) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== x;
      });
    }, 1);
  }, []), f = u.useCallback(function(g) {
    r.current = za(g), n.current = void 0;
  }, []), p = u.useCallback(function(g) {
    d(g.type, Wf(g), g.target, s(g, e.lockRef.current));
  }, []), m = u.useCallback(function(g) {
    d(g.type, za(g), g.target, s(g, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Rn.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", c, _n), document.addEventListener("touchmove", c, _n), document.addEventListener("touchstart", f, _n), function() {
      Rn = Rn.filter(function(g) {
        return g !== a;
      }), document.removeEventListener("wheel", c, _n), document.removeEventListener("touchmove", c, _n), document.removeEventListener("touchstart", f, _n);
    };
  }, []);
  var h = e.removeScrollBar, v = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    v ? u.createElement(a, { styles: A2(o) }) : null,
    h ? u.createElement(C2, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function O2(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const I2 = c2(Og, D2);
var ga = u.forwardRef(function(e, t) {
  return u.createElement(as, Jt({}, e, { ref: t, sideCar: I2 }));
});
ga.classNames = as.classNames;
var $2 = [" ", "Enter", "ArrowUp", "ArrowDown"], L2 = [" ", "Enter"], sn = "Select", [is, ss, F2] = Nr(sn), [so, GY] = De(sn, [
  F2,
  cr
]), ls = cr(), [z2, Vr] = so(sn), [B2, j2] = so(sn), zg = (e) => {
  const {
    __scopeSelect: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    value: i,
    defaultValue: s,
    onValueChange: c,
    dir: d,
    name: f,
    autoComplete: p,
    disabled: m,
    required: h,
    form: v
  } = e, g = ls(t), [b, y] = u.useState(null), [w, x] = u.useState(null), [C, N] = u.useState(!1), P = Gt(d), [E, A] = Oe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: a,
    caller: sn
  }), [R, B] = Oe({
    prop: i,
    defaultProp: s,
    onChange: c,
    caller: sn
  }), M = u.useRef(null), $ = b ? v || !!b.closest("form") : !0, [U, L] = u.useState(/* @__PURE__ */ new Set()), K = Array.from(U).map((V) => V.props.value).join(";");
  return /* @__PURE__ */ l(ao, { ...g, children: /* @__PURE__ */ S(
    z2,
    {
      required: h,
      scope: t,
      trigger: b,
      onTriggerChange: y,
      valueNode: w,
      onValueNodeChange: x,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: N,
      contentId: ke(),
      value: R,
      onValueChange: B,
      open: E,
      onOpenChange: A,
      dir: P,
      triggerPointerDownPosRef: M,
      disabled: m,
      children: [
        /* @__PURE__ */ l(is.Provider, { scope: t, children: /* @__PURE__ */ l(
          B2,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback((V) => {
              L((z) => new Set(z).add(V));
            }, []),
            onNativeOptionRemove: u.useCallback((V) => {
              L((z) => {
                const O = new Set(z);
                return O.delete(V), O;
              });
            }, []),
            children: r
          }
        ) }),
        $ ? /* @__PURE__ */ S(
          dv,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: f,
            autoComplete: p,
            value: R,
            onChange: (V) => B(V.target.value),
            disabled: m,
            form: v,
            children: [
              R === void 0 ? /* @__PURE__ */ l("option", { value: "" }) : null,
              Array.from(U)
            ]
          },
          K
        ) : null
      ]
    }
  ) });
};
zg.displayName = sn;
var Bg = "SelectTrigger", jg = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e, a = ls(r), i = Vr(Bg, r), s = i.disabled || n, c = ae(t, i.onTriggerChange), d = ss(r), f = u.useRef("touch"), [p, m, h] = fv((g) => {
      const b = d().filter((x) => !x.disabled), y = b.find((x) => x.value === i.value), w = pv(b, g, y);
      w !== void 0 && i.onValueChange(w.value);
    }), v = (g) => {
      s || (i.onOpenChange(!0), h()), g && (i.triggerPointerDownPosRef.current = {
        x: Math.round(g.pageX),
        y: Math.round(g.pageY)
      });
    };
    return /* @__PURE__ */ l(io, { asChild: !0, ...a, children: /* @__PURE__ */ l(
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
        "data-placeholder": uv(i.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: H(o.onClick, (g) => {
          g.currentTarget.focus(), f.current !== "mouse" && v(g);
        }),
        onPointerDown: H(o.onPointerDown, (g) => {
          f.current = g.pointerType;
          const b = g.target;
          b.hasPointerCapture(g.pointerId) && b.releasePointerCapture(g.pointerId), g.button === 0 && g.ctrlKey === !1 && g.pointerType === "mouse" && (v(g), g.preventDefault());
        }),
        onKeyDown: H(o.onKeyDown, (g) => {
          const b = p.current !== "";
          !(g.ctrlKey || g.altKey || g.metaKey) && g.key.length === 1 && m(g.key), !(b && g.key === " ") && $2.includes(g.key) && (v(), g.preventDefault());
        })
      }
    ) });
  }
);
jg.displayName = Bg;
var Hg = "SelectValue", Wg = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, children: a, placeholder: i = "", ...s } = e, c = Vr(Hg, r), { onValueNodeHasChildrenChange: d } = c, f = a !== void 0, p = ae(t, c.onValueNodeChange);
    return ze(() => {
      d(f);
    }, [d, f]), /* @__PURE__ */ l(
      Q.span,
      {
        ...s,
        ref: p,
        style: { pointerEvents: "none" },
        children: uv(c.value) ? /* @__PURE__ */ l(Me, { children: i }) : a
      }
    );
  }
);
Wg.displayName = Hg;
var H2 = "SelectIcon", Vg = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return /* @__PURE__ */ l(Q.span, { "aria-hidden": !0, ...o, ref: t, children: n || "▼" });
  }
);
Vg.displayName = H2;
var W2 = "SelectPortal", Gg = (e) => /* @__PURE__ */ l(eo, { asChild: !0, ...e });
Gg.displayName = W2;
var ln = "SelectContent", Ug = u.forwardRef(
  (e, t) => {
    const r = Vr(ln, e.__scopeSelect), [n, o] = u.useState();
    if (ze(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const a = n;
      return a ? ra.createPortal(
        /* @__PURE__ */ l(Kg, { scope: e.__scopeSelect, children: /* @__PURE__ */ l(is.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ l("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ l(Yg, { ...e, ref: t });
  }
);
Ug.displayName = ln;
var $t = 10, [Kg, Gr] = so(ln), V2 = "SelectContentImpl", G2 = /* @__PURE__ */ zr("SelectContent.RemoveScroll"), Yg = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      position: n = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: s,
      sideOffset: c,
      align: d,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: h,
      sticky: v,
      hideWhenDetached: g,
      avoidCollisions: b,
      //
      ...y
    } = e, w = Vr(ln, r), [x, C] = u.useState(null), [N, P] = u.useState(null), E = ae(t, (k) => C(k)), [A, R] = u.useState(null), [B, M] = u.useState(
      null
    ), $ = ss(r), [U, L] = u.useState(!1), K = u.useRef(!1);
    u.useEffect(() => {
      if (x) return os(x);
    }, [x]), es();
    const V = u.useCallback(
      (k) => {
        const [Y, ...J] = $().map((X) => X.ref.current), [re] = J.slice(-1), ne = document.activeElement;
        for (const X of k)
          if (X === ne || (X == null || X.scrollIntoView({ block: "nearest" }), X === Y && N && (N.scrollTop = 0), X === re && N && (N.scrollTop = N.scrollHeight), X == null || X.focus(), document.activeElement !== ne)) return;
      },
      [$, N]
    ), z = u.useCallback(
      () => V([A, x]),
      [V, A, x]
    );
    u.useEffect(() => {
      U && z();
    }, [U, z]);
    const { onOpenChange: O, triggerPointerDownPosRef: F } = w;
    u.useEffect(() => {
      if (x) {
        let k = { x: 0, y: 0 };
        const Y = (re) => {
          var ne, X;
          k = {
            x: Math.abs(Math.round(re.pageX) - (((ne = F.current) == null ? void 0 : ne.x) ?? 0)),
            y: Math.abs(Math.round(re.pageY) - (((X = F.current) == null ? void 0 : X.y) ?? 0))
          };
        }, J = (re) => {
          k.x <= 10 && k.y <= 10 ? re.preventDefault() : x.contains(re.target) || O(!1), document.removeEventListener("pointermove", Y), F.current = null;
        };
        return F.current !== null && (document.addEventListener("pointermove", Y), document.addEventListener("pointerup", J, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Y), document.removeEventListener("pointerup", J, { capture: !0 });
        };
      }
    }, [x, O, F]), u.useEffect(() => {
      const k = () => O(!1);
      return window.addEventListener("blur", k), window.addEventListener("resize", k), () => {
        window.removeEventListener("blur", k), window.removeEventListener("resize", k);
      };
    }, [O]);
    const [ee, te] = fv((k) => {
      const Y = $().filter((ne) => !ne.disabled), J = Y.find((ne) => ne.ref.current === document.activeElement), re = pv(Y, k, J);
      re && setTimeout(() => re.ref.current.focus());
    }), I = u.useCallback(
      (k, Y, J) => {
        const re = !K.current && !J;
        (w.value !== void 0 && w.value === Y || re) && (R(k), re && (K.current = !0));
      },
      [w.value]
    ), D = u.useCallback(() => x == null ? void 0 : x.focus(), [x]), W = u.useCallback(
      (k, Y, J) => {
        const re = !K.current && !J;
        (w.value !== void 0 && w.value === Y || re) && M(k);
      },
      [w.value]
    ), G = n === "popper" ? Zl : qg, Z = G === Zl ? {
      side: s,
      sideOffset: c,
      align: d,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: h,
      sticky: v,
      hideWhenDetached: g,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ l(
      Kg,
      {
        scope: r,
        content: x,
        viewport: N,
        onViewportChange: P,
        itemRefCallback: I,
        selectedItem: A,
        onItemLeave: D,
        itemTextRefCallback: W,
        focusSelectedItem: z,
        selectedItemText: B,
        position: n,
        isPositioned: U,
        searchRef: ee,
        children: /* @__PURE__ */ l(ga, { as: G2, allowPinchZoom: !0, children: /* @__PURE__ */ l(
          fa,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (k) => {
              k.preventDefault();
            },
            onUnmountAutoFocus: H(o, (k) => {
              var Y;
              (Y = w.trigger) == null || Y.focus({ preventScroll: !0 }), k.preventDefault();
            }),
            children: /* @__PURE__ */ l(
              Er,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (k) => k.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ l(
                  G,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (k) => k.preventDefault(),
                    ...y,
                    ...Z,
                    onPlaced: () => L(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: H(y.onKeyDown, (k) => {
                      const Y = k.ctrlKey || k.altKey || k.metaKey;
                      if (k.key === "Tab" && k.preventDefault(), !Y && k.key.length === 1 && te(k.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(k.key)) {
                        let re = $().filter((ne) => !ne.disabled).map((ne) => ne.ref.current);
                        if (["ArrowUp", "End"].includes(k.key) && (re = re.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(k.key)) {
                          const ne = k.target, X = re.indexOf(ne);
                          re = re.slice(X + 1);
                        }
                        setTimeout(() => V(re)), k.preventDefault();
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
Yg.displayName = V2;
var U2 = "SelectItemAlignedPosition", qg = u.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = e, a = Vr(ln, r), i = Gr(ln, r), [s, c] = u.useState(null), [d, f] = u.useState(null), p = ae(t, (E) => f(E)), m = ss(r), h = u.useRef(!1), v = u.useRef(!0), { viewport: g, selectedItem: b, selectedItemText: y, focusSelectedItem: w } = i, x = u.useCallback(() => {
    if (a.trigger && a.valueNode && s && d && g && b && y) {
      const E = a.trigger.getBoundingClientRect(), A = d.getBoundingClientRect(), R = a.valueNode.getBoundingClientRect(), B = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ne = B.left - A.left, X = R.left - ne, q = E.left - X, j = E.width + q, oe = Math.max(j, A.width), ce = window.innerWidth - $t, ve = zo(X, [
          $t,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max($t, ce - oe)
        ]);
        s.style.minWidth = j + "px", s.style.left = ve + "px";
      } else {
        const ne = A.right - B.right, X = window.innerWidth - R.right - ne, q = window.innerWidth - E.right - X, j = E.width + q, oe = Math.max(j, A.width), ce = window.innerWidth - $t, ve = zo(X, [
          $t,
          Math.max($t, ce - oe)
        ]);
        s.style.minWidth = j + "px", s.style.right = ve + "px";
      }
      const M = m(), $ = window.innerHeight - $t * 2, U = g.scrollHeight, L = window.getComputedStyle(d), K = parseInt(L.borderTopWidth, 10), V = parseInt(L.paddingTop, 10), z = parseInt(L.borderBottomWidth, 10), O = parseInt(L.paddingBottom, 10), F = K + V + U + O + z, ee = Math.min(b.offsetHeight * 5, F), te = window.getComputedStyle(g), I = parseInt(te.paddingTop, 10), D = parseInt(te.paddingBottom, 10), W = E.top + E.height / 2 - $t, G = $ - W, Z = b.offsetHeight / 2, k = b.offsetTop + Z, Y = K + V + k, J = F - Y;
      if (Y <= W) {
        const ne = M.length > 0 && b === M[M.length - 1].ref.current;
        s.style.bottom = "0px";
        const X = d.clientHeight - g.offsetTop - g.offsetHeight, q = Math.max(
          G,
          Z + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ne ? D : 0) + X + z
        ), j = Y + q;
        s.style.height = j + "px";
      } else {
        const ne = M.length > 0 && b === M[0].ref.current;
        s.style.top = "0px";
        const q = Math.max(
          W,
          K + g.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ne ? I : 0) + Z
        ) + J;
        s.style.height = q + "px", g.scrollTop = Y - W + g.offsetTop;
      }
      s.style.margin = `${$t}px 0`, s.style.minHeight = ee + "px", s.style.maxHeight = $ + "px", n == null || n(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    m,
    a.trigger,
    a.valueNode,
    s,
    d,
    g,
    b,
    y,
    a.dir,
    n
  ]);
  ze(() => x(), [x]);
  const [C, N] = u.useState();
  ze(() => {
    d && N(window.getComputedStyle(d).zIndex);
  }, [d]);
  const P = u.useCallback(
    (E) => {
      E && v.current === !0 && (x(), w == null || w(), v.current = !1);
    },
    [x, w]
  );
  return /* @__PURE__ */ l(
    Y2,
    {
      scope: r,
      contentWrapper: s,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: P,
      children: /* @__PURE__ */ l(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ l(
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
qg.displayName = U2;
var K2 = "SelectPopperPosition", Zl = u.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = $t,
    ...a
  } = e, i = ls(r);
  return /* @__PURE__ */ l(
    ma,
    {
      ...i,
      ...a,
      ref: t,
      align: n,
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
Zl.displayName = K2;
var [Y2, yd] = so(ln, {}), Ql = "SelectViewport", Xg = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e, a = Gr(Ql, r), i = yd(Ql, r), s = ae(t, a.onViewportChange), c = u.useRef(0);
    return /* @__PURE__ */ S(Me, { children: [
      /* @__PURE__ */ l(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: n
        }
      ),
      /* @__PURE__ */ l(is.Slot, { scope: r, children: /* @__PURE__ */ l(
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
          onScroll: H(o.onScroll, (d) => {
            const f = d.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: m } = i;
            if (m != null && m.current && p) {
              const h = Math.abs(c.current - f.scrollTop);
              if (h > 0) {
                const v = window.innerHeight - $t * 2, g = parseFloat(p.style.minHeight), b = parseFloat(p.style.height), y = Math.max(g, b);
                if (y < v) {
                  const w = y + h, x = Math.min(v, w), C = w - x;
                  p.style.height = x + "px", p.style.bottom === "0px" && (f.scrollTop = C > 0 ? C : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Xg.displayName = Ql;
var Zg = "SelectGroup", [q2, X2] = so(Zg), Qg = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = ke();
    return /* @__PURE__ */ l(q2, { scope: r, id: o, children: /* @__PURE__ */ l(Q.div, { role: "group", "aria-labelledby": o, ...n, ref: t }) });
  }
);
Qg.displayName = Zg;
var Jg = "SelectLabel", ev = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = X2(Jg, r);
    return /* @__PURE__ */ l(Q.div, { id: o.id, ...n, ref: t });
  }
);
ev.displayName = Jg;
var hi = "SelectItem", [Z2, tv] = so(hi), rv = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = Vr(hi, r), c = Gr(hi, r), d = s.value === n, [f, p] = u.useState(a ?? ""), [m, h] = u.useState(!1), v = ae(
      t,
      (w) => {
        var x;
        return (x = c.itemRefCallback) == null ? void 0 : x.call(c, w, n, o);
      }
    ), g = ke(), b = u.useRef("touch"), y = () => {
      o || (s.onValueChange(n), s.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ l(
      Z2,
      {
        scope: r,
        value: n,
        disabled: o,
        textId: g,
        isSelected: d,
        onItemTextChange: u.useCallback((w) => {
          p((x) => x || ((w == null ? void 0 : w.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ l(
          is.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ l(
              Q.div,
              {
                role: "option",
                "aria-labelledby": g,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": d && m,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: v,
                onFocus: H(i.onFocus, () => h(!0)),
                onBlur: H(i.onBlur, () => h(!1)),
                onClick: H(i.onClick, () => {
                  b.current !== "mouse" && y();
                }),
                onPointerUp: H(i.onPointerUp, () => {
                  b.current === "mouse" && y();
                }),
                onPointerDown: H(i.onPointerDown, (w) => {
                  b.current = w.pointerType;
                }),
                onPointerMove: H(i.onPointerMove, (w) => {
                  var x;
                  b.current = w.pointerType, o ? (x = c.onItemLeave) == null || x.call(c) : b.current === "mouse" && w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: H(i.onPointerLeave, (w) => {
                  var x;
                  w.currentTarget === document.activeElement && ((x = c.onItemLeave) == null || x.call(c));
                }),
                onKeyDown: H(i.onKeyDown, (w) => {
                  var C;
                  ((C = c.searchRef) == null ? void 0 : C.current) !== "" && w.key === " " || (L2.includes(w.key) && y(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
rv.displayName = hi;
var Ao = "SelectItemText", nv = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...a } = e, i = Vr(Ao, r), s = Gr(Ao, r), c = tv(Ao, r), d = j2(Ao, r), [f, p] = u.useState(null), m = ae(
      t,
      (y) => p(y),
      c.onItemTextChange,
      (y) => {
        var w;
        return (w = s.itemTextRefCallback) == null ? void 0 : w.call(s, y, c.value, c.disabled);
      }
    ), h = f == null ? void 0 : f.textContent, v = u.useMemo(
      () => /* @__PURE__ */ l("option", { value: c.value, disabled: c.disabled, children: h }, c.value),
      [c.disabled, c.value, h]
    ), { onNativeOptionAdd: g, onNativeOptionRemove: b } = d;
    return ze(() => (g(v), () => b(v)), [g, b, v]), /* @__PURE__ */ S(Me, { children: [
      /* @__PURE__ */ l(Q.span, { id: c.textId, ...a, ref: m }),
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? ra.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
nv.displayName = Ao;
var ov = "SelectItemIndicator", av = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return tv(ov, r).isSelected ? /* @__PURE__ */ l(Q.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
av.displayName = ov;
var Jl = "SelectScrollUpButton", iv = u.forwardRef((e, t) => {
  const r = Gr(Jl, e.__scopeSelect), n = yd(Jl, e.__scopeSelect), [o, a] = u.useState(!1), i = ae(t, n.onScrollButtonChange);
  return ze(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const d = c.scrollTop > 0;
        a(d);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ l(
    lv,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = r;
        s && c && (s.scrollTop = s.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
iv.displayName = Jl;
var ec = "SelectScrollDownButton", sv = u.forwardRef((e, t) => {
  const r = Gr(ec, e.__scopeSelect), n = yd(ec, e.__scopeSelect), [o, a] = u.useState(!1), i = ae(t, n.onScrollButtonChange);
  return ze(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const d = c.scrollHeight - c.clientHeight, f = Math.ceil(c.scrollTop) < d;
        a(f);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ l(
    lv,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = r;
        s && c && (s.scrollTop = s.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
sv.displayName = ec;
var lv = u.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = e, a = Gr("SelectScrollButton", r), i = u.useRef(null), s = ss(r), c = u.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return u.useEffect(() => () => c(), [c]), ze(() => {
    var f;
    const d = s().find((p) => p.ref.current === document.activeElement);
    (f = d == null ? void 0 : d.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ l(
    Q.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: H(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerMove: H(o.onPointerMove, () => {
        var d;
        (d = a.onItemLeave) == null || d.call(a), i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerLeave: H(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), Q2 = "SelectSeparator", cv = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ l(Q.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
cv.displayName = Q2;
var tc = "SelectArrow", J2 = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = ls(r), a = Vr(tc, r), i = Gr(tc, r);
    return a.open && i.position === "popper" ? /* @__PURE__ */ l(ha, { ...o, ...n, ref: t }) : null;
  }
);
J2.displayName = tc;
var eR = "SelectBubbleInput", dv = u.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, n) => {
    const o = u.useRef(null), a = ae(n, o), i = ro(t);
    return u.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const c = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (i !== t && f) {
        const p = new Event("change", { bubbles: !0 });
        f.call(s, t), s.dispatchEvent(p);
      }
    }, [i, t]), /* @__PURE__ */ l(
      Q.select,
      {
        ...r,
        style: { ...Qm, ...r.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
dv.displayName = eR;
function uv(e) {
  return e === "" || e === void 0;
}
function fv(e) {
  const t = Se(e), r = u.useRef(""), n = u.useRef(0), o = u.useCallback(
    (i) => {
      const s = r.current + i;
      t(s), function c(d) {
        r.current = d, window.clearTimeout(n.current), d !== "" && (n.current = window.setTimeout(() => c(""), 1e3));
      }(s);
    },
    [t]
  ), a = u.useCallback(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return u.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a];
}
function pv(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = tR(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((d) => d !== r));
  const c = i.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function tR(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var rR = zg, mv = jg, nR = Wg, oR = Vg, aR = Gg, hv = Ug, iR = Xg, sR = Qg, gv = ev, vv = rv, lR = nv, cR = av, bv = iv, yv = sv, wv = cv;
const UY = rR, KY = sR, YY = nR, dR = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ S(
  mv,
  {
    ref: n,
    className: T(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ l(oR, { asChild: !0, children: /* @__PURE__ */ l(ia, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
dR.displayName = mv.displayName;
const xv = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  bv,
  {
    ref: r,
    className: T("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ l(nE, { className: "h-4 w-4" })
  }
));
xv.displayName = bv.displayName;
const Cv = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  yv,
  {
    ref: r,
    className: T("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ l(ia, { className: "h-4 w-4" })
  }
));
Cv.displayName = yv.displayName;
const uR = u.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, o) => /* @__PURE__ */ l(aR, { children: /* @__PURE__ */ S(
  hv,
  {
    ref: o,
    className: T(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...n,
    children: [
      /* @__PURE__ */ l(xv, {}),
      /* @__PURE__ */ l(
        iR,
        {
          className: T(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ l(Cv, {})
    ]
  }
) }));
uR.displayName = hv.displayName;
const fR = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(gv, { ref: r, className: T("py-1.5 pl-8 pr-2 text-sm font-semibold", e), ...t }));
fR.displayName = gv.displayName;
const pR = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ S(
  vv,
  {
    ref: n,
    className: T(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ l("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l(cR, { children: /* @__PURE__ */ l(Qe, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ l(lR, { children: t })
    ]
  }
));
pR.displayName = vv.displayName;
const mR = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(wv, { ref: r, className: T("-mx-1 my-1 h-px bg-muted", e), ...t }));
mR.displayName = wv.displayName;
var Sv = ["PageUp", "PageDown"], Nv = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Ev = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, lo = "Slider", [rc, hR, gR] = Nr(lo), [Pv, qY] = De(lo, [
  gR
]), [vR, cs] = Pv(lo), _v = u.forwardRef(
  (e, t) => {
    const {
      name: r,
      min: n = 0,
      max: o = 100,
      step: a = 1,
      orientation: i = "horizontal",
      disabled: s = !1,
      minStepsBetweenThumbs: c = 0,
      defaultValue: d = [n],
      value: f,
      onValueChange: p = () => {
      },
      onValueCommit: m = () => {
      },
      inverted: h = !1,
      form: v,
      ...g
    } = e, b = u.useRef(/* @__PURE__ */ new Set()), y = u.useRef(0), x = i === "horizontal" ? bR : yR, [C = [], N] = Oe({
      prop: f,
      defaultProp: d,
      onChange: (M) => {
        var U;
        (U = [...b.current][y.current]) == null || U.focus(), p(M);
      }
    }), P = u.useRef(C);
    function E(M) {
      const $ = NR(C, M);
      B(M, $);
    }
    function A(M) {
      B(M, y.current);
    }
    function R() {
      const M = P.current[y.current];
      C[y.current] !== M && m(C);
    }
    function B(M, $, { commit: U } = { commit: !1 }) {
      const L = RR(a), K = TR(Math.round((M - n) / a) * a + n, L), V = zo(K, [n, o]);
      N((z = []) => {
        const O = CR(z, V, $);
        if (_R(O, c * a)) {
          y.current = O.indexOf(V);
          const F = String(O) !== String(z);
          return F && U && m(O), F ? O : z;
        } else
          return z;
      });
    }
    return /* @__PURE__ */ l(
      vR,
      {
        scope: e.__scopeSlider,
        name: r,
        disabled: s,
        min: n,
        max: o,
        valueIndexToChangeRef: y,
        thumbs: b.current,
        values: C,
        orientation: i,
        form: v,
        children: /* @__PURE__ */ l(rc.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ l(rc.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ l(
          x,
          {
            "aria-disabled": s,
            "data-disabled": s ? "" : void 0,
            ...g,
            ref: t,
            onPointerDown: H(g.onPointerDown, () => {
              s || (P.current = C);
            }),
            min: n,
            max: o,
            inverted: h,
            onSlideStart: s ? void 0 : E,
            onSlideMove: s ? void 0 : A,
            onSlideEnd: s ? void 0 : R,
            onHomeKeyDown: () => !s && B(n, 0, { commit: !0 }),
            onEndKeyDown: () => !s && B(o, C.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: M, direction: $ }) => {
              if (!s) {
                const K = Sv.includes(M.key) || M.shiftKey && Nv.includes(M.key) ? 10 : 1, V = y.current, z = C[V], O = a * K * $;
                B(z + O, V, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
_v.displayName = lo;
var [Rv, Tv] = Pv(lo, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), bR = u.forwardRef(
  (e, t) => {
    const {
      min: r,
      max: n,
      dir: o,
      inverted: a,
      onSlideStart: i,
      onSlideMove: s,
      onSlideEnd: c,
      onStepKeyDown: d,
      ...f
    } = e, [p, m] = u.useState(null), h = ae(t, (x) => m(x)), v = u.useRef(void 0), g = Gt(o), b = g === "ltr", y = b && !a || !b && a;
    function w(x) {
      const C = v.current || p.getBoundingClientRect(), N = [0, C.width], E = wd(N, y ? [r, n] : [n, r]);
      return v.current = C, E(x - C.left);
    }
    return /* @__PURE__ */ l(
      Rv,
      {
        scope: e.__scopeSlider,
        startEdge: y ? "left" : "right",
        endEdge: y ? "right" : "left",
        direction: y ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ l(
          Mv,
          {
            dir: g,
            "data-orientation": "horizontal",
            ...f,
            ref: h,
            style: {
              ...f.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (x) => {
              const C = w(x.clientX);
              i == null || i(C);
            },
            onSlideMove: (x) => {
              const C = w(x.clientX);
              s == null || s(C);
            },
            onSlideEnd: () => {
              v.current = void 0, c == null || c();
            },
            onStepKeyDown: (x) => {
              const N = Ev[y ? "from-left" : "from-right"].includes(x.key);
              d == null || d({ event: x, direction: N ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), yR = u.forwardRef(
  (e, t) => {
    const {
      min: r,
      max: n,
      inverted: o,
      onSlideStart: a,
      onSlideMove: i,
      onSlideEnd: s,
      onStepKeyDown: c,
      ...d
    } = e, f = u.useRef(null), p = ae(t, f), m = u.useRef(void 0), h = !o;
    function v(g) {
      const b = m.current || f.current.getBoundingClientRect(), y = [0, b.height], x = wd(y, h ? [n, r] : [r, n]);
      return m.current = b, x(g - b.top);
    }
    return /* @__PURE__ */ l(
      Rv,
      {
        scope: e.__scopeSlider,
        startEdge: h ? "bottom" : "top",
        endEdge: h ? "top" : "bottom",
        size: "height",
        direction: h ? 1 : -1,
        children: /* @__PURE__ */ l(
          Mv,
          {
            "data-orientation": "vertical",
            ...d,
            ref: p,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (g) => {
              const b = v(g.clientY);
              a == null || a(b);
            },
            onSlideMove: (g) => {
              const b = v(g.clientY);
              i == null || i(b);
            },
            onSlideEnd: () => {
              m.current = void 0, s == null || s();
            },
            onStepKeyDown: (g) => {
              const y = Ev[h ? "from-bottom" : "from-top"].includes(g.key);
              c == null || c({ event: g, direction: y ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Mv = u.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: r,
      onSlideStart: n,
      onSlideMove: o,
      onSlideEnd: a,
      onHomeKeyDown: i,
      onEndKeyDown: s,
      onStepKeyDown: c,
      ...d
    } = e, f = cs(lo, r);
    return /* @__PURE__ */ l(
      Q.span,
      {
        ...d,
        ref: t,
        onKeyDown: H(e.onKeyDown, (p) => {
          p.key === "Home" ? (i(p), p.preventDefault()) : p.key === "End" ? (s(p), p.preventDefault()) : Sv.concat(Nv).includes(p.key) && (c(p), p.preventDefault());
        }),
        onPointerDown: H(e.onPointerDown, (p) => {
          const m = p.target;
          m.setPointerCapture(p.pointerId), p.preventDefault(), f.thumbs.has(m) ? m.focus() : n(p);
        }),
        onPointerMove: H(e.onPointerMove, (p) => {
          p.target.hasPointerCapture(p.pointerId) && o(p);
        }),
        onPointerUp: H(e.onPointerUp, (p) => {
          const m = p.target;
          m.hasPointerCapture(p.pointerId) && (m.releasePointerCapture(p.pointerId), a(p));
        })
      }
    );
  }
), Av = "SliderTrack", kv = u.forwardRef(
  (e, t) => {
    const { __scopeSlider: r, ...n } = e, o = cs(Av, r);
    return /* @__PURE__ */ l(
      Q.span,
      {
        "data-disabled": o.disabled ? "" : void 0,
        "data-orientation": o.orientation,
        ...n,
        ref: t
      }
    );
  }
);
kv.displayName = Av;
var nc = "SliderRange", Dv = u.forwardRef(
  (e, t) => {
    const { __scopeSlider: r, ...n } = e, o = cs(nc, r), a = Tv(nc, r), i = u.useRef(null), s = ae(t, i), c = o.values.length, d = o.values.map(
      (m) => $v(m, o.min, o.max)
    ), f = c > 1 ? Math.min(...d) : 0, p = 100 - Math.max(...d);
    return /* @__PURE__ */ l(
      Q.span,
      {
        "data-orientation": o.orientation,
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
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
Dv.displayName = nc;
var oc = "SliderThumb", Ov = u.forwardRef(
  (e, t) => {
    const r = hR(e.__scopeSlider), [n, o] = u.useState(null), a = ae(t, (s) => o(s)), i = u.useMemo(
      () => n ? r().findIndex((s) => s.ref.current === n) : -1,
      [r, n]
    );
    return /* @__PURE__ */ l(wR, { ...e, ref: a, index: i });
  }
), wR = u.forwardRef(
  (e, t) => {
    const { __scopeSlider: r, index: n, name: o, ...a } = e, i = cs(oc, r), s = Tv(oc, r), [c, d] = u.useState(null), f = ae(t, (w) => d(w)), p = c ? i.form || !!c.closest("form") : !0, m = la(c), h = i.values[n], v = h === void 0 ? 0 : $v(h, i.min, i.max), g = SR(n, i.values.length), b = m == null ? void 0 : m[s.size], y = b ? ER(b, v, s.direction) : 0;
    return u.useEffect(() => {
      if (c)
        return i.thumbs.add(c), () => {
          i.thumbs.delete(c);
        };
    }, [c, i.thumbs]), /* @__PURE__ */ S(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [s.startEdge]: `calc(${v}% + ${y}px)`
        },
        children: [
          /* @__PURE__ */ l(rc.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ l(
            Q.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || g,
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
              onFocus: H(e.onFocus, () => {
                i.valueIndexToChangeRef.current = n;
              })
            }
          ) }),
          p && /* @__PURE__ */ l(
            Iv,
            {
              name: o ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              form: i.form,
              value: h
            },
            n
          )
        ]
      }
    );
  }
);
Ov.displayName = oc;
var xR = "RadioBubbleInput", Iv = u.forwardRef(
  ({ __scopeSlider: e, value: t, ...r }, n) => {
    const o = u.useRef(null), a = ae(o, n), i = ro(t);
    return u.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const c = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(c, "value").set;
      if (i !== t && f) {
        const p = new Event("input", { bubbles: !0 });
        f.call(s, t), s.dispatchEvent(p);
      }
    }, [i, t]), /* @__PURE__ */ l(
      Q.input,
      {
        style: { display: "none" },
        ...r,
        ref: a,
        defaultValue: t
      }
    );
  }
);
Iv.displayName = xR;
function CR(e = [], t, r) {
  const n = [...e];
  return n[r] = t, n.sort((o, a) => o - a);
}
function $v(e, t, r) {
  const a = 100 / (r - t) * (e - t);
  return zo(a, [0, 100]);
}
function SR(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function NR(e, t) {
  if (e.length === 1) return 0;
  const r = e.map((o) => Math.abs(o - t)), n = Math.min(...r);
  return r.indexOf(n);
}
function ER(e, t, r) {
  const n = e / 2, a = wd([0, 50], [0, n]);
  return (n - a(t) * r) * r;
}
function PR(e) {
  return e.slice(0, -1).map((t, r) => e[r + 1] - t);
}
function _R(e, t) {
  if (t > 0) {
    const r = PR(e);
    return Math.min(...r) >= t;
  }
  return !0;
}
function wd(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function RR(e) {
  return (String(e).split(".")[1] || "").length;
}
function TR(e, t) {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}
var Lv = _v, MR = kv, AR = Dv, kR = Ov;
const DR = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ S(
  Lv,
  {
    ref: r,
    className: T("relative flex w-full touch-none select-none items-center", e),
    ...t,
    children: [
      /* @__PURE__ */ l(MR, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ l(AR, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ l(kR, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
DR.displayName = Lv.displayName;
var ds = "Switch", [OR, XY] = De(ds), [IR, $R] = OR(ds), Fv = u.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: r,
      name: n,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: c = "on",
      onCheckedChange: d,
      form: f,
      ...p
    } = e, [m, h] = u.useState(null), v = ae(t, (x) => h(x)), g = u.useRef(!1), b = m ? f || !!m.closest("form") : !0, [y, w] = Oe({
      prop: o,
      defaultProp: a ?? !1,
      onChange: d,
      caller: ds
    });
    return /* @__PURE__ */ S(IR, { scope: r, checked: y, disabled: s, children: [
      /* @__PURE__ */ l(
        Q.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": i,
          "data-state": Hv(y),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: c,
          ...p,
          ref: v,
          onClick: H(e.onClick, (x) => {
            w((C) => !C), b && (g.current = x.isPropagationStopped(), g.current || x.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ l(
        jv,
        {
          control: m,
          bubbles: !g.current,
          name: n,
          value: c,
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
Fv.displayName = ds;
var zv = "SwitchThumb", Bv = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, o = $R(zv, r);
    return /* @__PURE__ */ l(
      Q.span,
      {
        "data-state": Hv(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
Bv.displayName = zv;
var LR = "SwitchBubbleInput", jv = u.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, a) => {
    const i = u.useRef(null), s = ae(i, a), c = ro(r), d = la(t);
    return u.useEffect(() => {
      const f = i.current;
      if (!f) return;
      const p = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (c !== r && h) {
        const v = new Event("click", { bubbles: n });
        h.call(f, r), f.dispatchEvent(v);
      }
    }, [c, r, n]), /* @__PURE__ */ l(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: r,
        ...o,
        tabIndex: -1,
        ref: s,
        style: {
          ...o.style,
          ...d,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
jv.displayName = LR;
function Hv(e) {
  return e ? "checked" : "unchecked";
}
var Wv = Fv, FR = Bv;
const zR = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Wv,
  {
    className: T(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ l(
      FR,
      {
        className: T(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
zR.displayName = Wv.displayName;
var Vv = "Toggle", xd = u.forwardRef((e, t) => {
  const { pressed: r, defaultPressed: n, onPressedChange: o, ...a } = e, [i, s] = Oe({
    prop: r,
    onChange: o,
    defaultProp: n ?? !1,
    caller: Vv
  });
  return /* @__PURE__ */ l(
    Q.button,
    {
      type: "button",
      "aria-pressed": i,
      "data-state": i ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...a,
      ref: t,
      onClick: H(e.onClick, () => {
        e.disabled || s(!i);
      })
    }
  );
});
xd.displayName = Vv;
var Gv = xd;
const Uv = Sr(
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
), BR = u.forwardRef(({ className: e, variant: t, size: r, ...n }, o) => /* @__PURE__ */ l(Gv, { ref: o, className: T(Uv({ variant: t, size: r, className: e })), ...n }));
BR.displayName = Gv.displayName;
var Ur = "ToggleGroup", [Kv, ZY] = De(Ur, [
  sr
]), Yv = sr(), Cd = _.forwardRef((e, t) => {
  const { type: r, ...n } = e;
  if (r === "single")
    return /* @__PURE__ */ l(jR, { ...n, ref: t });
  if (r === "multiple")
    return /* @__PURE__ */ l(HR, { ...n, ref: t });
  throw new Error(`Missing prop \`type\` expected on \`${Ur}\``);
});
Cd.displayName = Ur;
var [qv, Xv] = Kv(Ur), jR = _.forwardRef((e, t) => {
  const {
    value: r,
    defaultValue: n,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = Oe({
    prop: r,
    defaultProp: n ?? "",
    onChange: o,
    caller: Ur
  });
  return /* @__PURE__ */ l(
    qv,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: _.useMemo(() => i ? [i] : [], [i]),
      onItemActivate: s,
      onItemDeactivate: _.useCallback(() => s(""), [s]),
      children: /* @__PURE__ */ l(Zv, { ...a, ref: t })
    }
  );
}), HR = _.forwardRef((e, t) => {
  const {
    value: r,
    defaultValue: n,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = Oe({
    prop: r,
    defaultProp: n ?? [],
    onChange: o,
    caller: Ur
  }), c = _.useCallback(
    (f) => s((p = []) => [...p, f]),
    [s]
  ), d = _.useCallback(
    (f) => s((p = []) => p.filter((m) => m !== f)),
    [s]
  );
  return /* @__PURE__ */ l(
    qv,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: c,
      onItemDeactivate: d,
      children: /* @__PURE__ */ l(Zv, { ...a, ref: t })
    }
  );
});
Cd.displayName = Ur;
var [WR, VR] = Kv(Ur), Zv = _.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: r,
      disabled: n = !1,
      rovingFocus: o = !0,
      orientation: a,
      dir: i,
      loop: s = !0,
      ...c
    } = e, d = Yv(r), f = Gt(i), p = { role: "group", dir: f, ...c };
    return /* @__PURE__ */ l(WR, { scope: r, rovingFocus: o, disabled: n, children: o ? /* @__PURE__ */ l(
      da,
      {
        asChild: !0,
        ...d,
        orientation: a,
        dir: f,
        loop: s,
        children: /* @__PURE__ */ l(Q.div, { ...p, ref: t })
      }
    ) : /* @__PURE__ */ l(Q.div, { ...p, ref: t }) });
  }
), gi = "ToggleGroupItem", Qv = _.forwardRef(
  (e, t) => {
    const r = Xv(gi, e.__scopeToggleGroup), n = VR(gi, e.__scopeToggleGroup), o = Yv(e.__scopeToggleGroup), a = r.value.includes(e.value), i = n.disabled || e.disabled, s = { ...e, pressed: a, disabled: i }, c = _.useRef(null);
    return n.rovingFocus ? /* @__PURE__ */ l(
      ua,
      {
        asChild: !0,
        ...o,
        focusable: !i,
        active: a,
        ref: c,
        children: /* @__PURE__ */ l(Gf, { ...s, ref: t })
      }
    ) : /* @__PURE__ */ l(Gf, { ...s, ref: t });
  }
);
Qv.displayName = gi;
var Gf = _.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: r, value: n, ...o } = e, a = Xv(gi, r), i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, s = a.type === "single" ? i : void 0;
    return /* @__PURE__ */ l(
      xd,
      {
        ...s,
        ...o,
        ref: t,
        onPressedChange: (c) => {
          c ? a.onItemActivate(n) : a.onItemDeactivate(n);
        }
      }
    );
  }
), Jv = Cd, eb = Qv;
const tb = u.createContext({
  size: "default",
  variant: "default"
}), GR = u.forwardRef(({ className: e, variant: t, size: r, children: n, ...o }, a) => /* @__PURE__ */ l(Jv, { ref: a, className: T("flex items-center justify-center gap-1", e), ...o, children: /* @__PURE__ */ l(tb.Provider, { value: { variant: t, size: r }, children: n }) }));
GR.displayName = Jv.displayName;
const UR = u.forwardRef(({ className: e, children: t, variant: r, size: n, ...o }, a) => {
  const i = u.useContext(tb);
  return /* @__PURE__ */ l(
    eb,
    {
      ref: a,
      className: T(
        Uv({
          variant: i.variant || r,
          size: i.size || n
        }),
        e
      ),
      ...o,
      children: t
    }
  );
});
UR.displayName = eb.displayName;
var KR = Object.defineProperty, YR = Object.defineProperties, qR = Object.getOwnPropertyDescriptors, vi = Object.getOwnPropertySymbols, rb = Object.prototype.hasOwnProperty, nb = Object.prototype.propertyIsEnumerable, Uf = (e, t, r) => t in e ? KR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, XR = (e, t) => {
  for (var r in t || (t = {})) rb.call(t, r) && Uf(e, r, t[r]);
  if (vi) for (var r of vi(t)) nb.call(t, r) && Uf(e, r, t[r]);
  return e;
}, ZR = (e, t) => YR(e, qR(t)), QR = (e, t) => {
  var r = {};
  for (var n in e) rb.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && vi) for (var n of vi(e)) t.indexOf(n) < 0 && nb.call(e, n) && (r[n] = e[n]);
  return r;
};
function JR(e) {
  let t = setTimeout(e, 0), r = setTimeout(e, 10), n = setTimeout(e, 50);
  return [t, r, n];
}
function eT(e) {
  let t = u.useRef();
  return u.useEffect(() => {
    t.current = e;
  }), t.current;
}
var tT = 18, ob = 40, rT = `${ob}px`, nT = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function oT({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: r, isFocused: n }) {
  let [o, a] = u.useState(!1), [i, s] = u.useState(!1), [c, d] = u.useState(!1), f = u.useMemo(() => r === "none" ? !1 : (r === "increase-width" || r === "experimental-no-flickering") && o && i, [o, i, r]), p = u.useCallback(() => {
    let m = e.current, h = t.current;
    if (!m || !h || c || r === "none") return;
    let v = m, g = v.getBoundingClientRect().left + v.offsetWidth, b = v.getBoundingClientRect().top + v.offsetHeight / 2, y = g - tT, w = b;
    document.querySelectorAll(nT).length === 0 && document.elementFromPoint(y, w) === m || (a(!0), d(!0));
  }, [e, t, c, r]);
  return u.useEffect(() => {
    let m = e.current;
    if (!m || r === "none") return;
    function h() {
      let g = window.innerWidth - m.getBoundingClientRect().right;
      s(g >= ob);
    }
    h();
    let v = setInterval(h, 1e3);
    return () => {
      clearInterval(v);
    };
  }, [e, r]), u.useEffect(() => {
    let m = n || document.activeElement === t.current;
    if (r === "none" || !m) return;
    let h = setTimeout(p, 0), v = setTimeout(p, 2e3), g = setTimeout(p, 5e3), b = setTimeout(() => {
      d(!0);
    }, 6e3);
    return () => {
      clearTimeout(h), clearTimeout(v), clearTimeout(g), clearTimeout(b);
    };
  }, [t, n, r, p]), { hasPWMBadge: o, willPushPWMBadge: f, PWM_BADGE_SPACE_WIDTH: rT };
}
var ab = u.createContext({}), ib = u.forwardRef((e, t) => {
  var r = e, { value: n, onChange: o, maxLength: a, textAlign: i = "left", pattern: s, placeholder: c, inputMode: d = "numeric", onComplete: f, pushPasswordManagerStrategy: p = "increase-width", pasteTransformer: m, containerClassName: h, noScriptCSSFallback: v = aT, render: g, children: b } = r, y = QR(r, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), w, x, C, N, P;
  let [E, A] = u.useState(typeof y.defaultValue == "string" ? y.defaultValue : ""), R = n ?? E, B = eT(R), M = u.useCallback((j) => {
    o == null || o(j), A(j);
  }, [o]), $ = u.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), U = u.useRef(null), L = u.useRef(null), K = u.useRef({ value: R, onChange: M, isIOS: typeof window < "u" && ((x = (w = window == null ? void 0 : window.CSS) == null ? void 0 : w.supports) == null ? void 0 : x.call(w, "-webkit-touch-callout", "none")) }), V = u.useRef({ prev: [(C = U.current) == null ? void 0 : C.selectionStart, (N = U.current) == null ? void 0 : N.selectionEnd, (P = U.current) == null ? void 0 : P.selectionDirection] });
  u.useImperativeHandle(t, () => U.current, []), u.useEffect(() => {
    let j = U.current, oe = L.current;
    if (!j || !oe) return;
    K.current.value !== j.value && K.current.onChange(j.value), V.current.prev = [j.selectionStart, j.selectionEnd, j.selectionDirection];
    function ce() {
      if (document.activeElement !== j) {
        I(null), W(null);
        return;
      }
      let de = j.selectionStart, _e = j.selectionEnd, je = j.selectionDirection, Ae = j.maxLength, We = j.value, at = V.current.prev, dt = -1, $e = -1, Ue;
      if (We.length !== 0 && de !== null && _e !== null) {
        let bt = de === _e, kt = de === We.length && We.length < Ae;
        if (bt && !kt) {
          let ot = de;
          if (ot === 0) dt = 0, $e = 1, Ue = "forward";
          else if (ot === Ae) dt = ot - 1, $e = ot, Ue = "backward";
          else if (Ae > 1 && We.length > 1) {
            let pt = 0;
            if (at[0] !== null && at[1] !== null) {
              Ue = ot < at[1] ? "backward" : "forward";
              let Rr = at[0] === at[1] && at[0] < Ae;
              Ue === "backward" && !Rr && (pt = -1);
            }
            dt = pt + ot, $e = pt + ot + 1;
          }
        }
        dt !== -1 && $e !== -1 && dt !== $e && U.current.setSelectionRange(dt, $e, Ue);
      }
      let _r = dt !== -1 ? dt : de, At = $e !== -1 ? $e : _e, ut = Ue ?? je;
      I(_r), W(At), V.current.prev = [_r, At, ut];
    }
    if (document.addEventListener("selectionchange", ce, { capture: !0 }), ce(), document.activeElement === j && ee(!0), !document.getElementById("input-otp-style")) {
      let de = document.createElement("style");
      if (de.id = "input-otp-style", document.head.appendChild(de), de.sheet) {
        let _e = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        xo(de.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), xo(de.sheet, `[data-input-otp]:autofill { ${_e} }`), xo(de.sheet, `[data-input-otp]:-webkit-autofill { ${_e} }`), xo(de.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), xo(de.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let ve = () => {
      oe && oe.style.setProperty("--root-height", `${j.clientHeight}px`);
    };
    ve();
    let fe = new ResizeObserver(ve);
    return fe.observe(j), () => {
      document.removeEventListener("selectionchange", ce, { capture: !0 }), fe.disconnect();
    };
  }, []);
  let [z, O] = u.useState(!1), [F, ee] = u.useState(!1), [te, I] = u.useState(null), [D, W] = u.useState(null);
  u.useEffect(() => {
    JR(() => {
      var j, oe, ce, ve;
      (j = U.current) == null || j.dispatchEvent(new Event("input"));
      let fe = (oe = U.current) == null ? void 0 : oe.selectionStart, de = (ce = U.current) == null ? void 0 : ce.selectionEnd, _e = (ve = U.current) == null ? void 0 : ve.selectionDirection;
      fe !== null && de !== null && (I(fe), W(de), V.current.prev = [fe, de, _e]);
    });
  }, [R, F]), u.useEffect(() => {
    B !== void 0 && R !== B && B.length < a && R.length === a && (f == null || f(R));
  }, [a, f, B, R]);
  let G = oT({ containerRef: L, inputRef: U, pushPasswordManagerStrategy: p, isFocused: F }), Z = u.useCallback((j) => {
    let oe = j.currentTarget.value.slice(0, a);
    if (oe.length > 0 && $ && !$.test(oe)) {
      j.preventDefault();
      return;
    }
    typeof B == "string" && oe.length < B.length && document.dispatchEvent(new Event("selectionchange")), M(oe);
  }, [a, M, B, $]), k = u.useCallback(() => {
    var j;
    if (U.current) {
      let oe = Math.min(U.current.value.length, a - 1), ce = U.current.value.length;
      (j = U.current) == null || j.setSelectionRange(oe, ce), I(oe), W(ce);
    }
    ee(!0);
  }, [a]), Y = u.useCallback((j) => {
    var oe, ce;
    let ve = U.current;
    if (!m && (!K.current.isIOS || !j.clipboardData || !ve)) return;
    let fe = j.clipboardData.getData("text/plain"), de = m ? m(fe) : fe;
    j.preventDefault();
    let _e = (oe = U.current) == null ? void 0 : oe.selectionStart, je = (ce = U.current) == null ? void 0 : ce.selectionEnd, Ae = (_e !== je ? R.slice(0, _e) + de + R.slice(je) : R.slice(0, _e) + de + R.slice(_e)).slice(0, a);
    if (Ae.length > 0 && $ && !$.test(Ae)) return;
    ve.value = Ae, M(Ae);
    let We = Math.min(Ae.length, a - 1), at = Ae.length;
    ve.setSelectionRange(We, at), I(We), W(at);
  }, [a, M, $, R]), J = u.useMemo(() => ({ position: "relative", cursor: y.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [y.disabled]), re = u.useMemo(() => ({ position: "absolute", inset: 0, width: G.willPushPWMBadge ? `calc(100% + ${G.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: G.willPushPWMBadge ? `inset(0 ${G.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: i, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [G.PWM_BADGE_SPACE_WIDTH, G.willPushPWMBadge, i]), ne = u.useMemo(() => u.createElement("input", ZR(XR({ autoComplete: y.autoComplete || "one-time-code" }, y), { "data-input-otp": !0, "data-input-otp-placeholder-shown": R.length === 0 || void 0, "data-input-otp-mss": te, "data-input-otp-mse": D, inputMode: d, pattern: $ == null ? void 0 : $.source, "aria-placeholder": c, style: re, maxLength: a, value: R, ref: U, onPaste: (j) => {
    var oe;
    Y(j), (oe = y.onPaste) == null || oe.call(y, j);
  }, onChange: Z, onMouseOver: (j) => {
    var oe;
    O(!0), (oe = y.onMouseOver) == null || oe.call(y, j);
  }, onMouseLeave: (j) => {
    var oe;
    O(!1), (oe = y.onMouseLeave) == null || oe.call(y, j);
  }, onFocus: (j) => {
    var oe;
    k(), (oe = y.onFocus) == null || oe.call(y, j);
  }, onBlur: (j) => {
    var oe;
    ee(!1), (oe = y.onBlur) == null || oe.call(y, j);
  } })), [Z, k, Y, d, re, a, D, te, y, $ == null ? void 0 : $.source, R]), X = u.useMemo(() => ({ slots: Array.from({ length: a }).map((j, oe) => {
    var ce;
    let ve = F && te !== null && D !== null && (te === D && oe === te || oe >= te && oe < D), fe = R[oe] !== void 0 ? R[oe] : null, de = R[0] !== void 0 ? null : (ce = c == null ? void 0 : c[oe]) != null ? ce : null;
    return { char: fe, placeholderChar: de, isActive: ve, hasFakeCaret: ve && fe === null };
  }), isFocused: F, isHovering: !y.disabled && z }), [F, z, a, D, te, y.disabled, R]), q = u.useMemo(() => g ? g(X) : u.createElement(ab.Provider, { value: X }, b), [b, X, g]);
  return u.createElement(u.Fragment, null, v !== null && u.createElement("noscript", null, u.createElement("style", null, v)), u.createElement("div", { ref: L, "data-input-otp-container": !0, style: J, className: h }, q, u.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, ne)));
});
ib.displayName = "Input";
function xo(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var aT = `
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
const iT = u.forwardRef(
  ({ className: e, containerClassName: t, ...r }, n) => /* @__PURE__ */ l(
    ib,
    {
      ref: n,
      containerClassName: T("flex items-center gap-2 has-[:disabled]:opacity-50", t),
      className: T("disabled:cursor-not-allowed", e),
      ...r
    }
  )
);
iT.displayName = "InputOTP";
const sT = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l("div", { ref: r, className: T("flex items-center", e), ...t })
);
sT.displayName = "InputOTPGroup";
const lT = u.forwardRef(({ index: e, className: t, ...r }, n) => {
  const o = u.useContext(ab), { char: a, hasFakeCaret: i, isActive: s } = o.slots[e];
  return /* @__PURE__ */ S(
    "div",
    {
      ref: n,
      className: T(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        s && "z-10 ring-2 ring-ring ring-offset-background",
        t
      ),
      ...r,
      children: [
        a,
        i && /* @__PURE__ */ l("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ l("div", { className: "animate-caret-blink h-4 w-px bg-foreground duration-1000" }) })
      ]
    }
  );
});
lT.displayName = "InputOTPSlot";
const cT = u.forwardRef(
  ({ ...e }, t) => /* @__PURE__ */ l("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ l(sE, {}) })
);
cT.displayName = "InputOTPSeparator";
var us = "Collapsible", [dT, sb] = De(us), [uT, Sd] = dT(us), lb = u.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: r,
      open: n,
      defaultOpen: o,
      disabled: a,
      onOpenChange: i,
      ...s
    } = e, [c, d] = Oe({
      prop: n,
      defaultProp: o ?? !1,
      onChange: i,
      caller: us
    });
    return /* @__PURE__ */ l(
      uT,
      {
        scope: r,
        disabled: a,
        contentId: ke(),
        open: c,
        onOpenToggle: u.useCallback(() => d((f) => !f), [d]),
        children: /* @__PURE__ */ l(
          Q.div,
          {
            "data-state": _d(c),
            "data-disabled": a ? "" : void 0,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
lb.displayName = us;
var cb = "CollapsibleTrigger", Nd = u.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: r, ...n } = e, o = Sd(cb, r);
    return /* @__PURE__ */ l(
      Q.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": _d(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...n,
        ref: t,
        onClick: H(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Nd.displayName = cb;
var Ed = "CollapsibleContent", Pd = u.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = Sd(Ed, e.__scopeCollapsible);
    return /* @__PURE__ */ l(Be, { present: r || o.open, children: ({ present: a }) => /* @__PURE__ */ l(fT, { ...n, ref: t, present: a }) });
  }
);
Pd.displayName = Ed;
var fT = u.forwardRef((e, t) => {
  const { __scopeCollapsible: r, present: n, children: o, ...a } = e, i = Sd(Ed, r), [s, c] = u.useState(n), d = u.useRef(null), f = ae(t, d), p = u.useRef(0), m = p.current, h = u.useRef(0), v = h.current, g = i.open || s, b = u.useRef(g), y = u.useRef(void 0);
  return u.useEffect(() => {
    const w = requestAnimationFrame(() => b.current = !1);
    return () => cancelAnimationFrame(w);
  }, []), ze(() => {
    const w = d.current;
    if (w) {
      y.current = y.current || {
        transitionDuration: w.style.transitionDuration,
        animationName: w.style.animationName
      }, w.style.transitionDuration = "0s", w.style.animationName = "none";
      const x = w.getBoundingClientRect();
      p.current = x.height, h.current = x.width, b.current || (w.style.transitionDuration = y.current.transitionDuration, w.style.animationName = y.current.animationName), c(n);
    }
  }, [i.open, n]), /* @__PURE__ */ l(
    Q.div,
    {
      "data-state": _d(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !g,
      ...a,
      ref: f,
      style: {
        "--radix-collapsible-content-height": m ? `${m}px` : void 0,
        "--radix-collapsible-content-width": v ? `${v}px` : void 0,
        ...e.style
      },
      children: g && o
    }
  );
});
function _d(e) {
  return e ? "open" : "closed";
}
var db = lb, pT = Nd, mT = Pd, Ut = "Accordion", hT = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Rd, gT, vT] = Nr(Ut), [fs, QY] = De(Ut, [
  vT,
  sb
]), Td = sb(), ub = _.forwardRef(
  (e, t) => {
    const { type: r, ...n } = e, o = n, a = n;
    return /* @__PURE__ */ l(Rd.Provider, { scope: e.__scopeAccordion, children: r === "multiple" ? /* @__PURE__ */ l(xT, { ...a, ref: t }) : /* @__PURE__ */ l(wT, { ...o, ref: t }) });
  }
);
ub.displayName = Ut;
var [fb, bT] = fs(Ut), [pb, yT] = fs(
  Ut,
  { collapsible: !1 }
), wT = _.forwardRef(
  (e, t) => {
    const {
      value: r,
      defaultValue: n,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...i
    } = e, [s, c] = Oe({
      prop: r,
      defaultProp: n ?? "",
      onChange: o,
      caller: Ut
    });
    return /* @__PURE__ */ l(
      fb,
      {
        scope: e.__scopeAccordion,
        value: _.useMemo(() => s ? [s] : [], [s]),
        onItemOpen: c,
        onItemClose: _.useCallback(() => a && c(""), [a, c]),
        children: /* @__PURE__ */ l(pb, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ l(mb, { ...i, ref: t }) })
      }
    );
  }
), xT = _.forwardRef((e, t) => {
  const {
    value: r,
    defaultValue: n,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = Oe({
    prop: r,
    defaultProp: n ?? [],
    onChange: o,
    caller: Ut
  }), c = _.useCallback(
    (f) => s((p = []) => [...p, f]),
    [s]
  ), d = _.useCallback(
    (f) => s((p = []) => p.filter((m) => m !== f)),
    [s]
  );
  return /* @__PURE__ */ l(
    fb,
    {
      scope: e.__scopeAccordion,
      value: i,
      onItemOpen: c,
      onItemClose: d,
      children: /* @__PURE__ */ l(pb, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ l(mb, { ...a, ref: t }) })
    }
  );
}), [CT, ps] = fs(Ut), mb = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, disabled: n, dir: o, orientation: a = "vertical", ...i } = e, s = _.useRef(null), c = ae(s, t), d = gT(r), p = Gt(o) === "ltr", m = H(e.onKeyDown, (h) => {
      var A;
      if (!hT.includes(h.key)) return;
      const v = h.target, g = d().filter((R) => {
        var B;
        return !((B = R.ref.current) != null && B.disabled);
      }), b = g.findIndex((R) => R.ref.current === v), y = g.length;
      if (b === -1) return;
      h.preventDefault();
      let w = b;
      const x = 0, C = y - 1, N = () => {
        w = b + 1, w > C && (w = x);
      }, P = () => {
        w = b - 1, w < x && (w = C);
      };
      switch (h.key) {
        case "Home":
          w = x;
          break;
        case "End":
          w = C;
          break;
        case "ArrowRight":
          a === "horizontal" && (p ? N() : P());
          break;
        case "ArrowDown":
          a === "vertical" && N();
          break;
        case "ArrowLeft":
          a === "horizontal" && (p ? P() : N());
          break;
        case "ArrowUp":
          a === "vertical" && P();
          break;
      }
      const E = w % y;
      (A = g[E].ref.current) == null || A.focus();
    });
    return /* @__PURE__ */ l(
      CT,
      {
        scope: r,
        disabled: n,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ l(Rd.Slot, { scope: r, children: /* @__PURE__ */ l(
          Q.div,
          {
            ...i,
            "data-orientation": a,
            ref: c,
            onKeyDown: n ? void 0 : m
          }
        ) })
      }
    );
  }
), bi = "AccordionItem", [ST, Md] = fs(bi), hb = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, value: n, ...o } = e, a = ps(bi, r), i = bT(bi, r), s = Td(r), c = ke(), d = n && i.value.includes(n) || !1, f = a.disabled || e.disabled;
    return /* @__PURE__ */ l(
      ST,
      {
        scope: r,
        open: d,
        disabled: f,
        triggerId: c,
        children: /* @__PURE__ */ l(
          db,
          {
            "data-orientation": a.orientation,
            "data-state": xb(d),
            ...s,
            ...o,
            ref: t,
            disabled: f,
            open: d,
            onOpenChange: (p) => {
              p ? i.onItemOpen(n) : i.onItemClose(n);
            }
          }
        )
      }
    );
  }
);
hb.displayName = bi;
var gb = "AccordionHeader", vb = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = ps(Ut, r), a = Md(gb, r);
    return /* @__PURE__ */ l(
      Q.h3,
      {
        "data-orientation": o.orientation,
        "data-state": xb(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
vb.displayName = gb;
var ac = "AccordionTrigger", bb = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = ps(Ut, r), a = Md(ac, r), i = yT(ac, r), s = Td(r);
    return /* @__PURE__ */ l(Rd.ItemSlot, { scope: r, children: /* @__PURE__ */ l(
      pT,
      {
        "aria-disabled": a.open && !i.collapsible || void 0,
        "data-orientation": o.orientation,
        id: a.triggerId,
        ...s,
        ...n,
        ref: t
      }
    ) });
  }
);
bb.displayName = ac;
var yb = "AccordionContent", wb = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: r, ...n } = e, o = ps(Ut, r), a = Md(yb, r), i = Td(r);
    return /* @__PURE__ */ l(
      mT,
      {
        role: "region",
        "aria-labelledby": a.triggerId,
        "data-orientation": o.orientation,
        ...i,
        ...n,
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
wb.displayName = yb;
function xb(e) {
  return e ? "open" : "closed";
}
var NT = ub, ET = hb, PT = vb, Cb = bb, Sb = wb;
const JY = NT, _T = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(ET, { ref: r, className: T("border-b", e), ...t }));
_T.displayName = "AccordionItem";
const RT = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ l(PT, { className: "flex", children: /* @__PURE__ */ S(
  Cb,
  {
    ref: n,
    className: T(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ l(ia, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
RT.displayName = Cb.displayName;
const TT = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ l(
  Sb,
  {
    ref: n,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...r,
    children: /* @__PURE__ */ l("div", { className: T("pb-4 pt-0", e), children: t })
  }
));
TT.displayName = Sb.displayName;
var ms = "Tabs", [MT, eq] = De(ms, [
  sr
]), Nb = sr(), [AT, Ad] = MT(ms), Eb = u.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: r,
      value: n,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      dir: s,
      activationMode: c = "automatic",
      ...d
    } = e, f = Gt(s), [p, m] = Oe({
      prop: n,
      onChange: o,
      defaultProp: a ?? "",
      caller: ms
    });
    return /* @__PURE__ */ l(
      AT,
      {
        scope: r,
        baseId: ke(),
        value: p,
        onValueChange: m,
        orientation: i,
        dir: f,
        activationMode: c,
        children: /* @__PURE__ */ l(
          Q.div,
          {
            dir: f,
            "data-orientation": i,
            ...d,
            ref: t
          }
        )
      }
    );
  }
);
Eb.displayName = ms;
var Pb = "TabsList", _b = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...o } = e, a = Ad(Pb, r), i = Nb(r);
    return /* @__PURE__ */ l(
      da,
      {
        asChild: !0,
        ...i,
        orientation: a.orientation,
        dir: a.dir,
        loop: n,
        children: /* @__PURE__ */ l(
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
_b.displayName = Pb;
var Rb = "TabsTrigger", Tb = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, disabled: o = !1, ...a } = e, i = Ad(Rb, r), s = Nb(r), c = kb(i.baseId, n), d = Db(i.baseId, n), f = n === i.value;
    return /* @__PURE__ */ l(
      ua,
      {
        asChild: !0,
        ...s,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ l(
          Q.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": d,
            "data-state": f ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: c,
            ...a,
            ref: t,
            onMouseDown: H(e.onMouseDown, (p) => {
              !o && p.button === 0 && p.ctrlKey === !1 ? i.onValueChange(n) : p.preventDefault();
            }),
            onKeyDown: H(e.onKeyDown, (p) => {
              [" ", "Enter"].includes(p.key) && i.onValueChange(n);
            }),
            onFocus: H(e.onFocus, () => {
              const p = i.activationMode !== "manual";
              !f && !o && p && i.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
Tb.displayName = Rb;
var Mb = "TabsContent", Ab = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, forceMount: o, children: a, ...i } = e, s = Ad(Mb, r), c = kb(s.baseId, n), d = Db(s.baseId, n), f = n === s.value, p = u.useRef(f);
    return u.useEffect(() => {
      const m = requestAnimationFrame(() => p.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ l(Be, { present: o || f, children: ({ present: m }) => /* @__PURE__ */ l(
      Q.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": s.orientation,
        role: "tabpanel",
        "aria-labelledby": c,
        hidden: !m,
        id: d,
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
Ab.displayName = Mb;
function kb(e, t) {
  return `${e}-trigger-${t}`;
}
function Db(e, t) {
  return `${e}-content-${t}`;
}
var kT = Eb, Ob = _b, Ib = Tb, $b = Ab;
const tq = kT, DT = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Ob,
  {
    ref: r,
    className: T(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
DT.displayName = Ob.displayName;
const OT = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Ib,
  {
    ref: r,
    className: T(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t
  }
));
OT.displayName = Ib.displayName;
const IT = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  $b,
  {
    ref: r,
    className: T(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
IT.displayName = $b.displayName;
const $T = u.forwardRef(({ ...e }, t) => /* @__PURE__ */ l("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
$T.displayName = "Breadcrumb";
const LT = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l(
    "ol",
    {
      ref: r,
      className: T(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        e
      ),
      ...t
    }
  )
);
LT.displayName = "BreadcrumbList";
const FT = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l("li", { ref: r, className: T("inline-flex items-center gap-1.5", e), ...t })
);
FT.displayName = "BreadcrumbItem";
const zT = u.forwardRef(({ asChild: e, className: t, ...r }, n) => /* @__PURE__ */ l(e ? Wr : "a", { ref: n, className: T("transition-colors hover:text-foreground", t), ...r }));
zT.displayName = "BreadcrumbLink";
const BT = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l(
    "span",
    {
      ref: r,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: T("font-normal text-foreground", e),
      ...t
    }
  )
);
BT.displayName = "BreadcrumbPage";
const jT = ({ children: e, className: t, ...r }) => /* @__PURE__ */ l("li", { role: "presentation", "aria-hidden": "true", className: T("[&>svg]:size-3.5", t), ...r, children: e ?? /* @__PURE__ */ l(hn, {}) });
jT.displayName = "BreadcrumbSeparator";
const HT = ({ className: e, ...t }) => /* @__PURE__ */ l(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: T("mx-auto flex w-full justify-center", e),
    ...t
  }
);
HT.displayName = "Pagination";
const WT = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l("ul", { ref: r, className: T("flex flex-row items-center gap-1", e), ...t })
);
WT.displayName = "PaginationContent";
const VT = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l("li", { ref: r, className: T("", e), ...t }));
VT.displayName = "PaginationItem";
const kd = ({ className: e, isActive: t, size: r = "icon", ...n }) => /* @__PURE__ */ l(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: T(
      jn({
        variant: t ? "outline" : "ghost",
        size: r
      }),
      e
    ),
    ...n
  }
);
kd.displayName = "PaginationLink";
const GT = ({ className: e, ...t }) => /* @__PURE__ */ S(kd, { "aria-label": "Go to previous page", size: "default", className: T("gap-1 pl-2.5", e), ...t, children: [
  /* @__PURE__ */ l(wh, { className: "h-4 w-4" }),
  /* @__PURE__ */ l("span", { children: "Previous" })
] });
GT.displayName = "PaginationPrevious";
const UT = ({ className: e, ...t }) => /* @__PURE__ */ S(kd, { "aria-label": "Go to next page", size: "default", className: T("gap-1 pr-2.5", e), ...t, children: [
  /* @__PURE__ */ l("span", { children: "Next" }),
  /* @__PURE__ */ l(hn, { className: "h-4 w-4" })
] });
UT.displayName = "PaginationNext";
const KT = ({ className: e, ...t }) => /* @__PURE__ */ S("span", { "aria-hidden": !0, className: T("flex h-9 w-9 items-center justify-center", e), ...t, children: [
  /* @__PURE__ */ l(lE, { className: "h-4 w-4" }),
  /* @__PURE__ */ l("span", { className: "sr-only", children: "More pages" })
] });
KT.displayName = "PaginationEllipsis";
var gn = "NavigationMenu", [Dd, Lb, YT] = Nr(gn), [ic, qT, XT] = Nr(gn), [Od, rq] = De(
  gn,
  [YT, XT]
), [ZT, Tt] = Od(gn), [QT, JT] = Od(gn), Fb = u.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: r,
      value: n,
      onValueChange: o,
      defaultValue: a,
      delayDuration: i = 200,
      skipDelayDuration: s = 300,
      orientation: c = "horizontal",
      dir: d,
      ...f
    } = e, [p, m] = u.useState(null), h = ae(t, (R) => m(R)), v = Gt(d), g = u.useRef(0), b = u.useRef(0), y = u.useRef(0), [w, x] = u.useState(!0), [C, N] = Oe({
      prop: n,
      onChange: (R) => {
        const B = R !== "", M = s > 0;
        B ? (window.clearTimeout(y.current), M && x(!1)) : (window.clearTimeout(y.current), y.current = window.setTimeout(
          () => x(!0),
          s
        )), o == null || o(R);
      },
      defaultProp: a ?? "",
      caller: gn
    }), P = u.useCallback(() => {
      window.clearTimeout(b.current), b.current = window.setTimeout(() => N(""), 150);
    }, [N]), E = u.useCallback(
      (R) => {
        window.clearTimeout(b.current), N(R);
      },
      [N]
    ), A = u.useCallback(
      (R) => {
        C === R ? window.clearTimeout(b.current) : g.current = window.setTimeout(() => {
          window.clearTimeout(b.current), N(R);
        }, i);
      },
      [C, N, i]
    );
    return u.useEffect(() => () => {
      window.clearTimeout(g.current), window.clearTimeout(b.current), window.clearTimeout(y.current);
    }, []), /* @__PURE__ */ l(
      zb,
      {
        scope: r,
        isRootMenu: !0,
        value: C,
        dir: v,
        orientation: c,
        rootNavigationMenu: p,
        onTriggerEnter: (R) => {
          window.clearTimeout(g.current), w ? A(R) : E(R);
        },
        onTriggerLeave: () => {
          window.clearTimeout(g.current), P();
        },
        onContentEnter: () => window.clearTimeout(b.current),
        onContentLeave: P,
        onItemSelect: (R) => {
          N((B) => B === R ? "" : R);
        },
        onItemDismiss: () => N(""),
        children: /* @__PURE__ */ l(
          Q.nav,
          {
            "aria-label": "Main",
            "data-orientation": c,
            dir: v,
            ...f,
            ref: h
          }
        )
      }
    );
  }
);
Fb.displayName = gn;
var sc = "NavigationMenuSub", eM = u.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: r,
      value: n,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      ...s
    } = e, c = Tt(sc, r), [d, f] = Oe({
      prop: n,
      onChange: o,
      defaultProp: a ?? "",
      caller: sc
    });
    return /* @__PURE__ */ l(
      zb,
      {
        scope: r,
        isRootMenu: !1,
        value: d,
        dir: c.dir,
        orientation: i,
        rootNavigationMenu: c.rootNavigationMenu,
        onTriggerEnter: (p) => f(p),
        onItemSelect: (p) => f(p),
        onItemDismiss: () => f(""),
        children: /* @__PURE__ */ l(Q.div, { "data-orientation": i, ...s, ref: t })
      }
    );
  }
);
eM.displayName = sc;
var zb = (e) => {
  const {
    scope: t,
    isRootMenu: r,
    rootNavigationMenu: n,
    dir: o,
    orientation: a,
    children: i,
    value: s,
    onItemSelect: c,
    onItemDismiss: d,
    onTriggerEnter: f,
    onTriggerLeave: p,
    onContentEnter: m,
    onContentLeave: h
  } = e, [v, g] = u.useState(null), [b, y] = u.useState(/* @__PURE__ */ new Map()), [w, x] = u.useState(null);
  return /* @__PURE__ */ l(
    ZT,
    {
      scope: t,
      isRootMenu: r,
      rootNavigationMenu: n,
      value: s,
      previousValue: ro(s),
      baseId: ke(),
      dir: o,
      orientation: a,
      viewport: v,
      onViewportChange: g,
      indicatorTrack: w,
      onIndicatorTrackChange: x,
      onTriggerEnter: Se(f),
      onTriggerLeave: Se(p),
      onContentEnter: Se(m),
      onContentLeave: Se(h),
      onItemSelect: Se(c),
      onItemDismiss: Se(d),
      onViewportContentChange: u.useCallback((C, N) => {
        y((P) => (P.set(C, N), new Map(P)));
      }, []),
      onViewportContentRemove: u.useCallback((C) => {
        y((N) => N.has(C) ? (N.delete(C), new Map(N)) : N);
      }, []),
      children: /* @__PURE__ */ l(Dd.Provider, { scope: t, children: /* @__PURE__ */ l(QT, { scope: t, items: b, children: i }) })
    }
  );
}, Bb = "NavigationMenuList", jb = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = Tt(Bb, r), a = /* @__PURE__ */ l(Q.ul, { "data-orientation": o.orientation, ...n, ref: t });
    return /* @__PURE__ */ l(Q.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ l(Dd.Slot, { scope: r, children: o.isRootMenu ? /* @__PURE__ */ l(Zb, { asChild: !0, children: a }) : a }) });
  }
);
jb.displayName = Bb;
var Hb = "NavigationMenuItem", [tM, Wb] = Od(Hb), Vb = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, value: n, ...o } = e, a = ke(), i = n || a || "LEGACY_REACT_AUTO_VALUE", s = u.useRef(null), c = u.useRef(null), d = u.useRef(null), f = u.useRef(() => {
    }), p = u.useRef(!1), m = u.useCallback((v = "start") => {
      if (s.current) {
        f.current();
        const g = cc(s.current);
        g.length && Ld(v === "start" ? g : g.reverse());
      }
    }, []), h = u.useCallback(() => {
      if (s.current) {
        const v = cc(s.current);
        v.length && (f.current = lM(v));
      }
    }, []);
    return /* @__PURE__ */ l(
      tM,
      {
        scope: r,
        value: i,
        triggerRef: c,
        contentRef: s,
        focusProxyRef: d,
        wasEscapeCloseRef: p,
        onEntryKeyDown: m,
        onFocusProxyEnter: m,
        onRootContentClose: h,
        onContentFocusOutside: h,
        children: /* @__PURE__ */ l(Q.li, { ...o, ref: t })
      }
    );
  }
);
Vb.displayName = Hb;
var lc = "NavigationMenuTrigger", Gb = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, disabled: n, ...o } = e, a = Tt(lc, e.__scopeNavigationMenu), i = Wb(lc, e.__scopeNavigationMenu), s = u.useRef(null), c = ae(s, i.triggerRef, t), d = Jb(a.baseId, i.value), f = ey(a.baseId, i.value), p = u.useRef(!1), m = u.useRef(!1), h = i.value === a.value;
  return /* @__PURE__ */ S(Me, { children: [
    /* @__PURE__ */ l(Dd.ItemSlot, { scope: r, value: i.value, children: /* @__PURE__ */ l(Qb, { asChild: !0, children: /* @__PURE__ */ l(
      Q.button,
      {
        id: d,
        disabled: n,
        "data-disabled": n ? "" : void 0,
        "data-state": Fd(h),
        "aria-expanded": h,
        "aria-controls": f,
        ...o,
        ref: c,
        onPointerEnter: H(e.onPointerEnter, () => {
          m.current = !1, i.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: H(
          e.onPointerMove,
          yi(() => {
            n || m.current || i.wasEscapeCloseRef.current || p.current || (a.onTriggerEnter(i.value), p.current = !0);
          })
        ),
        onPointerLeave: H(
          e.onPointerLeave,
          yi(() => {
            n || (a.onTriggerLeave(), p.current = !1);
          })
        ),
        onClick: H(e.onClick, () => {
          a.onItemSelect(i.value), m.current = h;
        }),
        onKeyDown: H(e.onKeyDown, (v) => {
          const b = { horizontal: "ArrowDown", vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[a.orientation];
          h && v.key === b && (i.onEntryKeyDown(), v.preventDefault());
        })
      }
    ) }) }),
    h && /* @__PURE__ */ S(Me, { children: [
      /* @__PURE__ */ l(
        Jm,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: i.focusProxyRef,
          onFocus: (v) => {
            const g = i.contentRef.current, b = v.relatedTarget, y = b === s.current, w = g == null ? void 0 : g.contains(b);
            (y || !w) && i.onFocusProxyEnter(y ? "start" : "end");
          }
        }
      ),
      a.viewport && /* @__PURE__ */ l("span", { "aria-owns": f })
    ] })
  ] });
});
Gb.displayName = lc;
var rM = "NavigationMenuLink", Kf = "navigationMenu.linkSelect", Ub = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, active: n, onSelect: o, ...a } = e;
    return /* @__PURE__ */ l(Qb, { asChild: !0, children: /* @__PURE__ */ l(
      Q.a,
      {
        "data-active": n ? "" : void 0,
        "aria-current": n ? "page" : void 0,
        ...a,
        ref: t,
        onClick: H(
          e.onClick,
          (i) => {
            const s = i.target, c = new CustomEvent(Kf, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(Kf, (d) => o == null ? void 0 : o(d), { once: !0 }), Fo(s, c), !c.defaultPrevented && !i.metaKey) {
              const d = new CustomEvent(oi, {
                bubbles: !0,
                cancelable: !0
              });
              Fo(s, d);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ub.displayName = rM;
var Id = "NavigationMenuIndicator", Kb = u.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Tt(Id, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? Zc.createPortal(
    /* @__PURE__ */ l(Be, { present: r || a, children: /* @__PURE__ */ l(nM, { ...n, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
Kb.displayName = Id;
var nM = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, ...n } = e, o = Tt(Id, r), a = Lb(r), [i, s] = u.useState(
    null
  ), [c, d] = u.useState(null), f = o.orientation === "horizontal", p = !!o.value;
  u.useEffect(() => {
    var g;
    const v = (g = a().find((b) => b.value === o.value)) == null ? void 0 : g.ref.current;
    v && s(v);
  }, [a, o.value]);
  const m = () => {
    i && d({
      size: f ? i.offsetWidth : i.offsetHeight,
      offset: f ? i.offsetLeft : i.offsetTop
    });
  };
  return dc(i, m), dc(o.indicatorTrack, m), c ? /* @__PURE__ */ l(
    Q.div,
    {
      "aria-hidden": !0,
      "data-state": p ? "visible" : "hidden",
      "data-orientation": o.orientation,
      ...n,
      ref: t,
      style: {
        position: "absolute",
        ...f ? {
          left: 0,
          width: c.size + "px",
          transform: `translateX(${c.offset}px)`
        } : {
          top: 0,
          height: c.size + "px",
          transform: `translateY(${c.offset}px)`
        },
        ...n.style
      }
    }
  ) : null;
}), Vn = "NavigationMenuContent", Yb = u.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Tt(Vn, e.__scopeNavigationMenu), a = Wb(Vn, e.__scopeNavigationMenu), i = ae(a.contentRef, t), s = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...n
  };
  return o.viewport ? /* @__PURE__ */ l(oM, { forceMount: r, ...c, ref: i }) : /* @__PURE__ */ l(Be, { present: r || s, children: /* @__PURE__ */ l(
    qb,
    {
      "data-state": Fd(s),
      ...c,
      ref: i,
      onPointerEnter: H(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: H(
        e.onPointerLeave,
        yi(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !s && o.isRootMenu ? "none" : void 0,
        ...c.style
      }
    }
  ) });
});
Yb.displayName = Vn;
var oM = u.forwardRef((e, t) => {
  const r = Tt(Vn, e.__scopeNavigationMenu), { onViewportContentChange: n, onViewportContentRemove: o } = r;
  return ze(() => {
    n(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, n]), ze(() => () => o(e.value), [e.value, o]), null;
}), oi = "navigationMenu.rootContentDismiss", qb = u.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: r,
    value: n,
    triggerRef: o,
    focusProxyRef: a,
    wasEscapeCloseRef: i,
    onRootContentClose: s,
    onContentFocusOutside: c,
    ...d
  } = e, f = Tt(Vn, r), p = u.useRef(null), m = ae(p, t), h = Jb(f.baseId, n), v = ey(f.baseId, n), g = Lb(r), b = u.useRef(null), { onItemDismiss: y } = f;
  u.useEffect(() => {
    const x = p.current;
    if (f.isRootMenu && x) {
      const C = () => {
        var N;
        y(), s(), x.contains(document.activeElement) && ((N = o.current) == null || N.focus());
      };
      return x.addEventListener(oi, C), () => x.removeEventListener(oi, C);
    }
  }, [f.isRootMenu, e.value, o, y, s]);
  const w = u.useMemo(() => {
    const C = g().map((B) => B.value);
    f.dir === "rtl" && C.reverse();
    const N = C.indexOf(f.value), P = C.indexOf(f.previousValue), E = n === f.value, A = P === C.indexOf(n);
    if (!E && !A) return b.current;
    const R = (() => {
      if (N !== P) {
        if (E && P !== -1) return N > P ? "from-end" : "from-start";
        if (A && N !== -1) return N > P ? "to-start" : "to-end";
      }
      return null;
    })();
    return b.current = R, R;
  }, [f.previousValue, f.value, f.dir, g, n]);
  return /* @__PURE__ */ l(Zb, { asChild: !0, children: /* @__PURE__ */ l(
    Er,
    {
      id: v,
      "aria-labelledby": h,
      "data-motion": w,
      "data-orientation": f.orientation,
      ...d,
      ref: m,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var C;
        const x = new Event(oi, {
          bubbles: !0,
          cancelable: !0
        });
        (C = p.current) == null || C.dispatchEvent(x);
      },
      onFocusOutside: H(e.onFocusOutside, (x) => {
        var N;
        c();
        const C = x.target;
        (N = f.rootNavigationMenu) != null && N.contains(C) && x.preventDefault();
      }),
      onPointerDownOutside: H(e.onPointerDownOutside, (x) => {
        var E;
        const C = x.target, N = g().some((A) => {
          var R;
          return (R = A.ref.current) == null ? void 0 : R.contains(C);
        }), P = f.isRootMenu && ((E = f.viewport) == null ? void 0 : E.contains(C));
        (N || P || !f.isRootMenu) && x.preventDefault();
      }),
      onKeyDown: H(e.onKeyDown, (x) => {
        var P;
        const C = x.altKey || x.ctrlKey || x.metaKey;
        if (x.key === "Tab" && !C) {
          const E = cc(x.currentTarget), A = document.activeElement, R = E.findIndex(($) => $ === A), M = x.shiftKey ? E.slice(0, R).reverse() : E.slice(R + 1, E.length);
          Ld(M) ? x.preventDefault() : (P = a.current) == null || P.focus();
        }
      }),
      onEscapeKeyDown: H(e.onEscapeKeyDown, (x) => {
        i.current = !0;
      })
    }
  ) });
}), $d = "NavigationMenuViewport", Xb = u.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, a = !!Tt($d, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ l(Be, { present: r || a, children: /* @__PURE__ */ l(aM, { ...n, ref: t }) });
});
Xb.displayName = $d;
var aM = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, children: n, ...o } = e, a = Tt($d, r), i = ae(t, a.onViewportChange), s = JT(
    Vn,
    e.__scopeNavigationMenu
  ), [c, d] = u.useState(null), [f, p] = u.useState(null), m = c ? (c == null ? void 0 : c.width) + "px" : void 0, h = c ? (c == null ? void 0 : c.height) + "px" : void 0, v = !!a.value, g = v ? a.value : a.previousValue;
  return dc(f, () => {
    f && d({ width: f.offsetWidth, height: f.offsetHeight });
  }), /* @__PURE__ */ l(
    Q.div,
    {
      "data-state": Fd(v),
      "data-orientation": a.orientation,
      ...o,
      ref: i,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !v && a.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": m,
        "--radix-navigation-menu-viewport-height": h,
        ...o.style
      },
      onPointerEnter: H(e.onPointerEnter, a.onContentEnter),
      onPointerLeave: H(e.onPointerLeave, yi(a.onContentLeave)),
      children: Array.from(s.items).map(([y, { ref: w, forceMount: x, ...C }]) => {
        const N = g === y;
        return /* @__PURE__ */ l(Be, { present: x || N, children: /* @__PURE__ */ l(
          qb,
          {
            ...C,
            ref: nr(w, (P) => {
              N && P && p(P);
            })
          }
        ) }, y);
      })
    }
  );
}), iM = "FocusGroup", Zb = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = Tt(iM, r);
    return /* @__PURE__ */ l(ic.Provider, { scope: r, children: /* @__PURE__ */ l(ic.Slot, { scope: r, children: /* @__PURE__ */ l(Q.div, { dir: o.dir, ...n, ref: t }) }) });
  }
), Yf = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], sM = "FocusGroupItem", Qb = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = qT(r), a = Tt(sM, r);
    return /* @__PURE__ */ l(ic.ItemSlot, { scope: r, children: /* @__PURE__ */ l(
      Q.button,
      {
        ...n,
        ref: t,
        onKeyDown: H(e.onKeyDown, (i) => {
          if (["Home", "End", ...Yf].includes(i.key)) {
            let c = o().map((p) => p.ref.current);
            if ([a.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(i.key) && c.reverse(), Yf.includes(i.key)) {
              const p = c.indexOf(i.currentTarget);
              c = c.slice(p + 1);
            }
            setTimeout(() => Ld(c)), i.preventDefault();
          }
        })
      }
    ) });
  }
);
function cc(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Ld(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
function lM(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const r = t.dataset.tabindex;
      t.setAttribute("tabindex", r);
    });
  };
}
function dc(e, t) {
  const r = Se(t);
  ze(() => {
    let n = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(n), n = window.requestAnimationFrame(r);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(n), o.unobserve(e);
      };
    }
  }, [e, r]);
}
function Fd(e) {
  return e ? "open" : "closed";
}
function Jb(e, t) {
  return `${e}-trigger-${t}`;
}
function ey(e, t) {
  return `${e}-content-${t}`;
}
function yi(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var ty = Fb, ry = jb, cM = Vb, ny = Gb, dM = Ub, oy = Kb, ay = Yb, iy = Xb;
const uM = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ S(
  ty,
  {
    ref: n,
    className: T("relative z-10 flex max-w-max flex-1 items-center justify-center", e),
    ...r,
    children: [
      t,
      /* @__PURE__ */ l(sy, {})
    ]
  }
));
uM.displayName = ty.displayName;
const fM = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  ry,
  {
    ref: r,
    className: T("group flex flex-1 list-none items-center justify-center space-x-1", e),
    ...t
  }
));
fM.displayName = ry.displayName;
const nq = cM, pM = Sr(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), mM = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ S(
  ny,
  {
    ref: n,
    className: T(pM(), "group", e),
    ...r,
    children: [
      t,
      " ",
      /* @__PURE__ */ l(
        ia,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
mM.displayName = ny.displayName;
const hM = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  ay,
  {
    ref: r,
    className: T(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      e
    ),
    ...t
  }
));
hM.displayName = ay.displayName;
const oq = dM, sy = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l("div", { className: T("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ l(
  iy,
  {
    className: T(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: r,
    ...t
  }
) }));
sy.displayName = iy.displayName;
const gM = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  oy,
  {
    ref: r,
    className: T(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
gM.displayName = oy.displayName;
var uc = ["Enter", " "], vM = ["ArrowDown", "PageUp", "Home"], ly = ["ArrowUp", "PageDown", "End"], bM = [...vM, ...ly], yM = {
  ltr: [...uc, "ArrowRight"],
  rtl: [...uc, "ArrowLeft"]
}, wM = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, va = "Menu", [Ho, xM, CM] = Nr(va), [vn, ba] = De(va, [
  CM,
  cr,
  sr
]), ya = cr(), cy = sr(), [dy, Kr] = vn(va), [SM, wa] = vn(va), uy = (e) => {
  const { __scopeMenu: t, open: r = !1, children: n, dir: o, onOpenChange: a, modal: i = !0 } = e, s = ya(t), [c, d] = u.useState(null), f = u.useRef(!1), p = Se(a), m = Gt(o);
  return u.useEffect(() => {
    const h = () => {
      f.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => f.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ l(ao, { ...s, children: /* @__PURE__ */ l(
    dy,
    {
      scope: t,
      open: r,
      onOpenChange: p,
      content: c,
      onContentChange: d,
      children: /* @__PURE__ */ l(
        SM,
        {
          scope: t,
          onClose: u.useCallback(() => p(!1), [p]),
          isUsingKeyboardRef: f,
          dir: m,
          modal: i,
          children: n
        }
      )
    }
  ) });
};
uy.displayName = va;
var NM = "MenuAnchor", zd = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = ya(r);
    return /* @__PURE__ */ l(io, { ...o, ...n, ref: t });
  }
);
zd.displayName = NM;
var Bd = "MenuPortal", [EM, fy] = vn(Bd, {
  forceMount: void 0
}), py = (e) => {
  const { __scopeMenu: t, forceMount: r, children: n, container: o } = e, a = Kr(Bd, t);
  return /* @__PURE__ */ l(EM, { scope: t, forceMount: r, children: /* @__PURE__ */ l(Be, { present: r || a.open, children: /* @__PURE__ */ l(eo, { asChild: !0, container: o, children: n }) }) });
};
py.displayName = Bd;
var Rt = "MenuContent", [PM, jd] = vn(Rt), my = u.forwardRef(
  (e, t) => {
    const r = fy(Rt, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = Kr(Rt, e.__scopeMenu), i = wa(Rt, e.__scopeMenu);
    return /* @__PURE__ */ l(Ho.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l(Be, { present: n || a.open, children: /* @__PURE__ */ l(Ho.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ l(_M, { ...o, ref: t }) : /* @__PURE__ */ l(RM, { ...o, ref: t }) }) }) });
  }
), _M = u.forwardRef(
  (e, t) => {
    const r = Kr(Rt, e.__scopeMenu), n = u.useRef(null), o = ae(t, n);
    return u.useEffect(() => {
      const a = n.current;
      if (a) return os(a);
    }, []), /* @__PURE__ */ l(
      Hd,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: H(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }
), RM = u.forwardRef((e, t) => {
  const r = Kr(Rt, e.__scopeMenu);
  return /* @__PURE__ */ l(
    Hd,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}), TM = /* @__PURE__ */ zr("MenuContent.ScrollLock"), Hd = u.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: r,
      loop: n = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEntryFocus: c,
      onEscapeKeyDown: d,
      onPointerDownOutside: f,
      onFocusOutside: p,
      onInteractOutside: m,
      onDismiss: h,
      disableOutsideScroll: v,
      ...g
    } = e, b = Kr(Rt, r), y = wa(Rt, r), w = ya(r), x = cy(r), C = xM(r), [N, P] = u.useState(null), E = u.useRef(null), A = ae(t, E, b.onContentChange), R = u.useRef(0), B = u.useRef(""), M = u.useRef(0), $ = u.useRef(null), U = u.useRef("right"), L = u.useRef(0), K = v ? ga : u.Fragment, V = v ? { as: TM, allowPinchZoom: !0 } : void 0, z = (F) => {
      var k, Y;
      const ee = B.current + F, te = C().filter((J) => !J.disabled), I = document.activeElement, D = (k = te.find((J) => J.ref.current === I)) == null ? void 0 : k.textValue, W = te.map((J) => J.textValue), G = jM(W, ee, D), Z = (Y = te.find((J) => J.textValue === G)) == null ? void 0 : Y.ref.current;
      (function J(re) {
        B.current = re, window.clearTimeout(R.current), re !== "" && (R.current = window.setTimeout(() => J(""), 1e3));
      })(ee), Z && setTimeout(() => Z.focus());
    };
    u.useEffect(() => () => window.clearTimeout(R.current), []), es();
    const O = u.useCallback((F) => {
      var te, I;
      return U.current === ((te = $.current) == null ? void 0 : te.side) && WM(F, (I = $.current) == null ? void 0 : I.area);
    }, []);
    return /* @__PURE__ */ l(
      PM,
      {
        scope: r,
        searchRef: B,
        onItemEnter: u.useCallback(
          (F) => {
            O(F) && F.preventDefault();
          },
          [O]
        ),
        onItemLeave: u.useCallback(
          (F) => {
            var ee;
            O(F) || ((ee = E.current) == null || ee.focus(), P(null));
          },
          [O]
        ),
        onTriggerLeave: u.useCallback(
          (F) => {
            O(F) && F.preventDefault();
          },
          [O]
        ),
        pointerGraceTimerRef: M,
        onPointerGraceIntentChange: u.useCallback((F) => {
          $.current = F;
        }, []),
        children: /* @__PURE__ */ l(K, { ...V, children: /* @__PURE__ */ l(
          fa,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: H(a, (F) => {
              var ee;
              F.preventDefault(), (ee = E.current) == null || ee.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ l(
              Er,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: d,
                onPointerDownOutside: f,
                onFocusOutside: p,
                onInteractOutside: m,
                onDismiss: h,
                children: /* @__PURE__ */ l(
                  da,
                  {
                    asChild: !0,
                    ...x,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: n,
                    currentTabStopId: N,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: H(c, (F) => {
                      y.isUsingKeyboardRef.current || F.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ l(
                      ma,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ay(b.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...w,
                        ...g,
                        ref: A,
                        style: { outline: "none", ...g.style },
                        onKeyDown: H(g.onKeyDown, (F) => {
                          const te = F.target.closest("[data-radix-menu-content]") === F.currentTarget, I = F.ctrlKey || F.altKey || F.metaKey, D = F.key.length === 1;
                          te && (F.key === "Tab" && F.preventDefault(), !I && D && z(F.key));
                          const W = E.current;
                          if (F.target !== W || !bM.includes(F.key)) return;
                          F.preventDefault();
                          const Z = C().filter((k) => !k.disabled).map((k) => k.ref.current);
                          ly.includes(F.key) && Z.reverse(), zM(Z);
                        }),
                        onBlur: H(e.onBlur, (F) => {
                          F.currentTarget.contains(F.target) || (window.clearTimeout(R.current), B.current = "");
                        }),
                        onPointerMove: H(
                          e.onPointerMove,
                          Wo((F) => {
                            const ee = F.target, te = L.current !== F.clientX;
                            if (F.currentTarget.contains(ee) && te) {
                              const I = F.clientX > L.current ? "right" : "left";
                              U.current = I, L.current = F.clientX;
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
my.displayName = Rt;
var MM = "MenuGroup", Wd = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ l(Q.div, { role: "group", ...n, ref: t });
  }
);
Wd.displayName = MM;
var AM = "MenuLabel", hy = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ l(Q.div, { ...n, ref: t });
  }
);
hy.displayName = AM;
var wi = "MenuItem", qf = "menu.itemSelect", hs = u.forwardRef(
  (e, t) => {
    const { disabled: r = !1, onSelect: n, ...o } = e, a = u.useRef(null), i = wa(wi, e.__scopeMenu), s = jd(wi, e.__scopeMenu), c = ae(t, a), d = u.useRef(!1), f = () => {
      const p = a.current;
      if (!r && p) {
        const m = new CustomEvent(qf, { bubbles: !0, cancelable: !0 });
        p.addEventListener(qf, (h) => n == null ? void 0 : n(h), { once: !0 }), Fo(p, m), m.defaultPrevented ? d.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ l(
      gy,
      {
        ...o,
        ref: c,
        disabled: r,
        onClick: H(e.onClick, f),
        onPointerDown: (p) => {
          var m;
          (m = e.onPointerDown) == null || m.call(e, p), d.current = !0;
        },
        onPointerUp: H(e.onPointerUp, (p) => {
          var m;
          d.current || (m = p.currentTarget) == null || m.click();
        }),
        onKeyDown: H(e.onKeyDown, (p) => {
          const m = s.searchRef.current !== "";
          r || m && p.key === " " || uc.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }
);
hs.displayName = wi;
var gy = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, disabled: n = !1, textValue: o, ...a } = e, i = jd(wi, r), s = cy(r), c = u.useRef(null), d = ae(t, c), [f, p] = u.useState(!1), [m, h] = u.useState("");
    return u.useEffect(() => {
      const v = c.current;
      v && h((v.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ l(
      Ho.ItemSlot,
      {
        scope: r,
        disabled: n,
        textValue: o ?? m,
        children: /* @__PURE__ */ l(ua, { asChild: !0, ...s, focusable: !n, children: /* @__PURE__ */ l(
          Q.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": n || void 0,
            "data-disabled": n ? "" : void 0,
            ...a,
            ref: d,
            onPointerMove: H(
              e.onPointerMove,
              Wo((v) => {
                n ? i.onItemLeave(v) : (i.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: H(
              e.onPointerLeave,
              Wo((v) => i.onItemLeave(v))
            ),
            onFocus: H(e.onFocus, () => p(!0)),
            onBlur: H(e.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }
), kM = "MenuCheckboxItem", vy = u.forwardRef(
  (e, t) => {
    const { checked: r = !1, onCheckedChange: n, ...o } = e;
    return /* @__PURE__ */ l(Cy, { scope: e.__scopeMenu, checked: r, children: /* @__PURE__ */ l(
      hs,
      {
        role: "menuitemcheckbox",
        "aria-checked": xi(r) ? "mixed" : r,
        ...o,
        ref: t,
        "data-state": Ud(r),
        onSelect: H(
          o.onSelect,
          () => n == null ? void 0 : n(xi(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
vy.displayName = kM;
var by = "MenuRadioGroup", [DM, OM] = vn(
  by,
  { value: void 0, onValueChange: () => {
  } }
), yy = u.forwardRef(
  (e, t) => {
    const { value: r, onValueChange: n, ...o } = e, a = Se(n);
    return /* @__PURE__ */ l(DM, { scope: e.__scopeMenu, value: r, onValueChange: a, children: /* @__PURE__ */ l(Wd, { ...o, ref: t }) });
  }
);
yy.displayName = by;
var wy = "MenuRadioItem", xy = u.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, o = OM(wy, e.__scopeMenu), a = r === o.value;
    return /* @__PURE__ */ l(Cy, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ l(
      hs,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...n,
        ref: t,
        "data-state": Ud(a),
        onSelect: H(
          n.onSelect,
          () => {
            var i;
            return (i = o.onValueChange) == null ? void 0 : i.call(o, r);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
xy.displayName = wy;
var Vd = "MenuItemIndicator", [Cy, IM] = vn(
  Vd,
  { checked: !1 }
), Sy = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, forceMount: n, ...o } = e, a = IM(Vd, r);
    return /* @__PURE__ */ l(
      Be,
      {
        present: n || xi(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ l(
          Q.span,
          {
            ...o,
            ref: t,
            "data-state": Ud(a.checked)
          }
        )
      }
    );
  }
);
Sy.displayName = Vd;
var $M = "MenuSeparator", Ny = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ l(
      Q.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...n,
        ref: t
      }
    );
  }
);
Ny.displayName = $M;
var LM = "MenuArrow", Ey = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = ya(r);
    return /* @__PURE__ */ l(ha, { ...o, ...n, ref: t });
  }
);
Ey.displayName = LM;
var Gd = "MenuSub", [FM, Py] = vn(Gd), _y = (e) => {
  const { __scopeMenu: t, children: r, open: n = !1, onOpenChange: o } = e, a = Kr(Gd, t), i = ya(t), [s, c] = u.useState(null), [d, f] = u.useState(null), p = Se(o);
  return u.useEffect(() => (a.open === !1 && p(!1), () => p(!1)), [a.open, p]), /* @__PURE__ */ l(ao, { ...i, children: /* @__PURE__ */ l(
    dy,
    {
      scope: t,
      open: n,
      onOpenChange: p,
      content: d,
      onContentChange: f,
      children: /* @__PURE__ */ l(
        FM,
        {
          scope: t,
          contentId: ke(),
          triggerId: ke(),
          trigger: s,
          onTriggerChange: c,
          children: r
        }
      )
    }
  ) });
};
_y.displayName = Gd;
var ko = "MenuSubTrigger", Ry = u.forwardRef(
  (e, t) => {
    const r = Kr(ko, e.__scopeMenu), n = wa(ko, e.__scopeMenu), o = Py(ko, e.__scopeMenu), a = jd(ko, e.__scopeMenu), i = u.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, d = { __scopeMenu: e.__scopeMenu }, f = u.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return u.useEffect(() => f, [f]), u.useEffect(() => {
      const p = s.current;
      return () => {
        window.clearTimeout(p), c(null);
      };
    }, [s, c]), /* @__PURE__ */ l(zd, { asChild: !0, ...d, children: /* @__PURE__ */ l(
      gy,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": o.contentId,
        "data-state": Ay(r.open),
        ...e,
        ref: nr(t, o.onTriggerChange),
        onClick: (p) => {
          var m;
          (m = e.onClick) == null || m.call(e, p), !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: H(
          e.onPointerMove,
          Wo((p) => {
            a.onItemEnter(p), !p.defaultPrevented && !e.disabled && !r.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              r.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: H(
          e.onPointerLeave,
          Wo((p) => {
            var h, v;
            f();
            const m = (h = r.content) == null ? void 0 : h.getBoundingClientRect();
            if (m) {
              const g = (v = r.content) == null ? void 0 : v.dataset.side, b = g === "right", y = b ? -5 : 5, w = m[b ? "left" : "right"], x = m[b ? "right" : "left"];
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
                side: g
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
        onKeyDown: H(e.onKeyDown, (p) => {
          var h;
          const m = a.searchRef.current !== "";
          e.disabled || m && p.key === " " || yM[n.dir].includes(p.key) && (r.onOpenChange(!0), (h = r.content) == null || h.focus(), p.preventDefault());
        })
      }
    ) });
  }
);
Ry.displayName = ko;
var Ty = "MenuSubContent", My = u.forwardRef(
  (e, t) => {
    const r = fy(Rt, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = Kr(Rt, e.__scopeMenu), i = wa(Rt, e.__scopeMenu), s = Py(Ty, e.__scopeMenu), c = u.useRef(null), d = ae(t, c);
    return /* @__PURE__ */ l(Ho.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l(Be, { present: n || a.open, children: /* @__PURE__ */ l(Ho.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ l(
      Hd,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: d,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          var p;
          i.isUsingKeyboardRef.current && ((p = c.current) == null || p.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: H(e.onFocusOutside, (f) => {
          f.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: H(e.onEscapeKeyDown, (f) => {
          i.onClose(), f.preventDefault();
        }),
        onKeyDown: H(e.onKeyDown, (f) => {
          var h;
          const p = f.currentTarget.contains(f.target), m = wM[i.dir].includes(f.key);
          p && m && (a.onOpenChange(!1), (h = s.trigger) == null || h.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
My.displayName = Ty;
function Ay(e) {
  return e ? "open" : "closed";
}
function xi(e) {
  return e === "indeterminate";
}
function Ud(e) {
  return xi(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function zM(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t)) return;
}
function BM(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
function jM(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = BM(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((d) => d !== r));
  const c = i.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function HM(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], c = t[i], d = s.x, f = s.y, p = c.x, m = c.y;
    f > n != m > n && r < (p - d) * (n - f) / (m - f) + d && (o = !o);
  }
  return o;
}
function WM(e, t) {
  if (!t) return !1;
  const r = { x: e.clientX, y: e.clientY };
  return HM(r, t);
}
function Wo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Kd = uy, Yd = zd, qd = py, Xd = my, Zd = Wd, Qd = hy, Jd = hs, eu = vy, tu = yy, ru = xy, nu = Sy, ou = Ny, au = Ey, iu = _y, su = Ry, lu = My, xa = "Menubar", [fc, VM, GM] = Nr(xa), [ky, aq] = De(xa, [
  GM,
  sr
]), st = ba(), Dy = sr(), [UM, cu] = ky(xa), Oy = u.forwardRef(
  (e, t) => {
    const {
      __scopeMenubar: r,
      value: n,
      onValueChange: o,
      defaultValue: a,
      loop: i = !0,
      dir: s,
      ...c
    } = e, d = Gt(s), f = Dy(r), [p, m] = Oe({
      prop: n,
      onChange: o,
      defaultProp: a ?? "",
      caller: xa
    }), [h, v] = u.useState(null);
    return /* @__PURE__ */ l(
      UM,
      {
        scope: r,
        value: p,
        onMenuOpen: u.useCallback(
          (g) => {
            m(g), v(g);
          },
          [m]
        ),
        onMenuClose: u.useCallback(() => m(""), [m]),
        onMenuToggle: u.useCallback(
          (g) => {
            m((b) => b ? "" : g), v(g);
          },
          [m]
        ),
        dir: d,
        loop: i,
        children: /* @__PURE__ */ l(fc.Provider, { scope: r, children: /* @__PURE__ */ l(fc.Slot, { scope: r, children: /* @__PURE__ */ l(
          da,
          {
            asChild: !0,
            ...f,
            orientation: "horizontal",
            loop: i,
            dir: d,
            currentTabStopId: h,
            onCurrentTabStopIdChange: v,
            children: /* @__PURE__ */ l(Q.div, { role: "menubar", ...c, ref: t })
          }
        ) }) })
      }
    );
  }
);
Oy.displayName = xa;
var du = "MenubarMenu", [KM, Iy] = ky(du), $y = (e) => {
  const { __scopeMenubar: t, value: r, ...n } = e, o = ke(), a = r || o || "LEGACY_REACT_AUTO_VALUE", i = cu(du, t), s = st(t), c = u.useRef(null), d = u.useRef(!1), f = i.value === a;
  return u.useEffect(() => {
    f || (d.current = !1);
  }, [f]), /* @__PURE__ */ l(
    KM,
    {
      scope: t,
      value: a,
      triggerId: ke(),
      triggerRef: c,
      contentId: ke(),
      wasKeyboardTriggerOpenRef: d,
      children: /* @__PURE__ */ l(
        Kd,
        {
          ...s,
          open: f,
          onOpenChange: (p) => {
            p || i.onMenuClose();
          },
          modal: !1,
          dir: i.dir,
          ...n
        }
      )
    }
  );
};
$y.displayName = du;
var pc = "MenubarTrigger", Ly = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: r, disabled: n = !1, ...o } = e, a = Dy(r), i = st(r), s = cu(pc, r), c = Iy(pc, r), d = u.useRef(null), f = ae(t, d, c.triggerRef), [p, m] = u.useState(!1), h = s.value === c.value;
    return /* @__PURE__ */ l(fc.ItemSlot, { scope: r, value: c.value, disabled: n, children: /* @__PURE__ */ l(
      ua,
      {
        asChild: !0,
        ...a,
        focusable: !n,
        tabStopId: c.value,
        children: /* @__PURE__ */ l(Yd, { asChild: !0, ...i, children: /* @__PURE__ */ l(
          Q.button,
          {
            type: "button",
            role: "menuitem",
            id: c.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": h,
            "aria-controls": h ? c.contentId : void 0,
            "data-highlighted": p ? "" : void 0,
            "data-state": h ? "open" : "closed",
            "data-disabled": n ? "" : void 0,
            disabled: n,
            ...o,
            ref: f,
            onPointerDown: H(e.onPointerDown, (v) => {
              !n && v.button === 0 && v.ctrlKey === !1 && (s.onMenuOpen(c.value), h || v.preventDefault());
            }),
            onPointerEnter: H(e.onPointerEnter, () => {
              var g;
              !!s.value && !h && (s.onMenuOpen(c.value), (g = d.current) == null || g.focus());
            }),
            onKeyDown: H(e.onKeyDown, (v) => {
              n || (["Enter", " "].includes(v.key) && s.onMenuToggle(c.value), v.key === "ArrowDown" && s.onMenuOpen(c.value), ["Enter", " ", "ArrowDown"].includes(v.key) && (c.wasKeyboardTriggerOpenRef.current = !0, v.preventDefault()));
            }),
            onFocus: H(e.onFocus, () => m(!0)),
            onBlur: H(e.onBlur, () => m(!1))
          }
        ) })
      }
    ) });
  }
);
Ly.displayName = pc;
var YM = "MenubarPortal", Fy = (e) => {
  const { __scopeMenubar: t, ...r } = e, n = st(t);
  return /* @__PURE__ */ l(qd, { ...n, ...r });
};
Fy.displayName = YM;
var mc = "MenubarContent", zy = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: r, align: n = "start", ...o } = e, a = st(r), i = cu(mc, r), s = Iy(mc, r), c = VM(r), d = u.useRef(!1);
    return /* @__PURE__ */ l(
      Xd,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        "data-radix-menubar-content": "",
        ...a,
        ...o,
        ref: t,
        align: n,
        onCloseAutoFocus: H(e.onCloseAutoFocus, (f) => {
          var m;
          !!!i.value && !d.current && ((m = s.triggerRef.current) == null || m.focus()), d.current = !1, f.preventDefault();
        }),
        onFocusOutside: H(e.onFocusOutside, (f) => {
          const p = f.target;
          c().some((h) => {
            var v;
            return (v = h.ref.current) == null ? void 0 : v.contains(p);
          }) && f.preventDefault();
        }),
        onInteractOutside: H(e.onInteractOutside, () => {
          d.current = !0;
        }),
        onEntryFocus: (f) => {
          s.wasKeyboardTriggerOpenRef.current || f.preventDefault();
        },
        onKeyDown: H(
          e.onKeyDown,
          (f) => {
            if (["ArrowRight", "ArrowLeft"].includes(f.key)) {
              const p = f.target, m = p.hasAttribute("data-radix-menubar-subtrigger"), h = p.closest("[data-radix-menubar-content]") !== f.currentTarget, g = (i.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === f.key;
              if (!g && m || h && g) return;
              let w = c().filter((N) => !N.disabled).map((N) => N.value);
              g && w.reverse();
              const x = w.indexOf(s.value);
              w = i.loop ? lA(w, x + 1) : w.slice(x + 1);
              const [C] = w;
              C && i.onMenuOpen(C);
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
zy.displayName = mc;
var qM = "MenubarGroup", By = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: r, ...n } = e, o = st(r);
    return /* @__PURE__ */ l(Zd, { ...o, ...n, ref: t });
  }
);
By.displayName = qM;
var XM = "MenubarLabel", jy = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: r, ...n } = e, o = st(r);
    return /* @__PURE__ */ l(Qd, { ...o, ...n, ref: t });
  }
);
jy.displayName = XM;
var ZM = "MenubarItem", Hy = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: r, ...n } = e, o = st(r);
    return /* @__PURE__ */ l(Jd, { ...o, ...n, ref: t });
  }
);
Hy.displayName = ZM;
var QM = "MenubarCheckboxItem", Wy = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: r, ...n } = e, o = st(r);
    return /* @__PURE__ */ l(eu, { ...o, ...n, ref: t });
  }
);
Wy.displayName = QM;
var JM = "MenubarRadioGroup", eA = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: r, ...n } = e, o = st(r);
    return /* @__PURE__ */ l(tu, { ...o, ...n, ref: t });
  }
);
eA.displayName = JM;
var tA = "MenubarRadioItem", Vy = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: r, ...n } = e, o = st(r);
    return /* @__PURE__ */ l(ru, { ...o, ...n, ref: t });
  }
);
Vy.displayName = tA;
var rA = "MenubarItemIndicator", Gy = u.forwardRef((e, t) => {
  const { __scopeMenubar: r, ...n } = e, o = st(r);
  return /* @__PURE__ */ l(nu, { ...o, ...n, ref: t });
});
Gy.displayName = rA;
var nA = "MenubarSeparator", Uy = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: r, ...n } = e, o = st(r);
    return /* @__PURE__ */ l(ou, { ...o, ...n, ref: t });
  }
);
Uy.displayName = nA;
var oA = "MenubarArrow", aA = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: r, ...n } = e, o = st(r);
    return /* @__PURE__ */ l(au, { ...o, ...n, ref: t });
  }
);
aA.displayName = oA;
var Ky = "MenubarSub", Yy = (e) => {
  const { __scopeMenubar: t, children: r, open: n, onOpenChange: o, defaultOpen: a } = e, i = st(t), [s, c] = Oe({
    prop: n,
    defaultProp: a ?? !1,
    onChange: o,
    caller: Ky
  });
  return /* @__PURE__ */ l(iu, { ...i, open: s, onOpenChange: c, children: r });
};
Yy.displayName = Ky;
var iA = "MenubarSubTrigger", qy = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: r, ...n } = e, o = st(r);
    return /* @__PURE__ */ l(
      su,
      {
        "data-radix-menubar-subtrigger": "",
        ...o,
        ...n,
        ref: t
      }
    );
  }
);
qy.displayName = iA;
var sA = "MenubarSubContent", Xy = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: r, ...n } = e, o = st(r);
    return /* @__PURE__ */ l(
      lu,
      {
        ...o,
        "data-radix-menubar-content": "",
        ...n,
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
Xy.displayName = sA;
function lA(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Zy = Oy, cA = $y, Qy = Ly, dA = Fy, Jy = zy, uA = By, ew = jy, tw = Hy, rw = Wy, nw = Vy, ow = Gy, aw = Uy, fA = Yy, iw = qy, sw = Xy;
const iq = cA, sq = uA, lq = fA, pA = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Zy,
  {
    ref: r,
    className: T("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", e),
    ...t
  }
));
pA.displayName = Zy.displayName;
const mA = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Qy,
  {
    ref: r,
    className: T(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...t
  }
));
mA.displayName = Qy.displayName;
const hA = u.forwardRef(({ className: e, inset: t, children: r, ...n }, o) => /* @__PURE__ */ S(
  iw,
  {
    ref: o,
    className: T(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...n,
    children: [
      r,
      /* @__PURE__ */ l(hn, { className: "ml-auto h-4 w-4" })
    ]
  }
));
hA.displayName = iw.displayName;
const gA = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  sw,
  {
    ref: r,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
gA.displayName = sw.displayName;
const vA = u.forwardRef(({ className: e, align: t = "start", alignOffset: r = -4, sideOffset: n = 8, ...o }, a) => /* @__PURE__ */ l(dA, { children: /* @__PURE__ */ l(
  Jy,
  {
    ref: a,
    align: t,
    alignOffset: r,
    sideOffset: n,
    className: T(
      "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...o
  }
) }));
vA.displayName = Jy.displayName;
const bA = u.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ l(
  tw,
  {
    ref: n,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r
  }
));
bA.displayName = tw.displayName;
const yA = u.forwardRef(({ className: e, children: t, checked: r, ...n }, o) => /* @__PURE__ */ S(
  rw,
  {
    ref: o,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ l("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l(ow, { children: /* @__PURE__ */ l(Qe, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
yA.displayName = rw.displayName;
const wA = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ S(
  nw,
  {
    ref: n,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ l("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l(ow, { children: /* @__PURE__ */ l(qi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
wA.displayName = nw.displayName;
const xA = u.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ l(
  ew,
  {
    ref: n,
    className: T("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
    ...r
  }
));
xA.displayName = ew.displayName;
const CA = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(aw, { ref: r, className: T("-mx-1 my-1 h-px bg-muted", e), ...t }));
CA.displayName = aw.displayName;
const SA = ({ className: e, ...t }) => /* @__PURE__ */ l("span", { className: T("ml-auto text-xs tracking-widest text-muted-foreground", e), ...t });
SA.displayname = "MenubarShortcut";
const il = 768;
function NA() {
  const [e, t] = u.useState(void 0);
  return u.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${il - 1}px)`), n = () => {
      t(window.innerWidth < il);
    };
    return r.addEventListener("change", n), t(window.innerWidth < il), () => r.removeEventListener("change", n);
  }, []), !!e;
}
var EA = "Separator", Xf = "horizontal", PA = ["horizontal", "vertical"], lw = u.forwardRef((e, t) => {
  const { decorative: r, orientation: n = Xf, ...o } = e, a = _A(n) ? n : Xf, s = r ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ l(
    Q.div,
    {
      "data-orientation": a,
      ...s,
      ...o,
      ref: t
    }
  );
});
lw.displayName = EA;
function _A(e) {
  return PA.includes(e);
}
var cw = lw;
const dw = u.forwardRef(({ className: e, orientation: t = "horizontal", decorative: r = !0, ...n }, o) => /* @__PURE__ */ l(
  cw,
  {
    ref: o,
    decorative: r,
    orientation: t,
    className: T("shrink-0 bg-border", t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", e),
    ...n
  }
));
dw.displayName = cw.displayName;
var gs = "Dialog", [uw, fw] = De(gs), [RA, Kt] = uw(gs), pw = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = u.useRef(null), c = u.useRef(null), [d, f] = Oe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: a,
    caller: gs
  });
  return /* @__PURE__ */ l(
    RA,
    {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: ke(),
      titleId: ke(),
      descriptionId: ke(),
      open: d,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((p) => !p), [f]),
      modal: i,
      children: r
    }
  );
};
pw.displayName = gs;
var mw = "DialogTrigger", hw = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Kt(mw, r), a = ae(t, o.triggerRef);
    return /* @__PURE__ */ l(
      Q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": pu(o.open),
        ...n,
        ref: a,
        onClick: H(e.onClick, o.onOpenToggle)
      }
    );
  }
);
hw.displayName = mw;
var uu = "DialogPortal", [TA, gw] = uw(uu, {
  forceMount: void 0
}), vw = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, a = Kt(uu, t);
  return /* @__PURE__ */ l(TA, { scope: t, forceMount: r, children: u.Children.map(n, (i) => /* @__PURE__ */ l(Be, { present: r || a.open, children: /* @__PURE__ */ l(eo, { asChild: !0, container: o, children: i }) })) });
};
vw.displayName = uu;
var Ci = "DialogOverlay", bw = u.forwardRef(
  (e, t) => {
    const r = gw(Ci, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = Kt(Ci, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ l(Be, { present: n || a.open, children: /* @__PURE__ */ l(AA, { ...o, ref: t }) }) : null;
  }
);
bw.displayName = Ci;
var MA = /* @__PURE__ */ zr("DialogOverlay.RemoveScroll"), AA = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Kt(Ci, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ l(ga, { as: MA, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ l(
        Q.div,
        {
          "data-state": pu(o.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), cn = "DialogContent", yw = u.forwardRef(
  (e, t) => {
    const r = gw(cn, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = Kt(cn, e.__scopeDialog);
    return /* @__PURE__ */ l(Be, { present: n || a.open, children: a.modal ? /* @__PURE__ */ l(kA, { ...o, ref: t }) : /* @__PURE__ */ l(DA, { ...o, ref: t }) });
  }
);
yw.displayName = cn;
var kA = u.forwardRef(
  (e, t) => {
    const r = Kt(cn, e.__scopeDialog), n = u.useRef(null), o = ae(t, r.contentRef, n);
    return u.useEffect(() => {
      const a = n.current;
      if (a) return os(a);
    }, []), /* @__PURE__ */ l(
      ww,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: H(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), (i = r.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: H(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: H(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), DA = u.forwardRef(
  (e, t) => {
    const r = Kt(cn, e.__scopeDialog), n = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ l(
      ww,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (n.current || (s = r.triggerRef.current) == null || s.focus(), a.preventDefault()), n.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var c, d;
          (c = e.onInteractOutside) == null || c.call(e, a), a.defaultPrevented || (n.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((d = r.triggerRef.current) == null ? void 0 : d.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), ww = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = Kt(cn, r), c = u.useRef(null), d = ae(t, c);
    return es(), /* @__PURE__ */ S(Me, { children: [
      /* @__PURE__ */ l(
        fa,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ l(
            Er,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": pu(s.open),
              ...i,
              ref: d,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ S(Me, { children: [
        /* @__PURE__ */ l(IA, { titleId: s.titleId }),
        /* @__PURE__ */ l(LA, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), fu = "DialogTitle", xw = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Kt(fu, r);
    return /* @__PURE__ */ l(Q.h2, { id: o.titleId, ...n, ref: t });
  }
);
xw.displayName = fu;
var Cw = "DialogDescription", Sw = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Kt(Cw, r);
    return /* @__PURE__ */ l(Q.p, { id: o.descriptionId, ...n, ref: t });
  }
);
Sw.displayName = Cw;
var Nw = "DialogClose", Ew = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Kt(Nw, r);
    return /* @__PURE__ */ l(
      Q.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: H(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Ew.displayName = Nw;
function pu(e) {
  return e ? "open" : "closed";
}
var Pw = "DialogTitleWarning", [OA, _w] = mN(Pw, {
  contentName: cn,
  titleName: fu,
  docsSlug: "dialog"
}), IA = ({ titleId: e }) => {
  const t = _w(Pw), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, $A = "DialogDescriptionWarning", LA = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${_w($A).contentName}}.`;
  return u.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, Ca = pw, vs = hw, Sa = vw, bn = bw, yn = yw, co = xw, uo = Sw, wn = Ew;
const FA = Ca, cq = vs, dq = wn, zA = Sa, Rw = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  bn,
  {
    className: T(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
Rw.displayName = bn.displayName;
const BA = Sr(
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
), Tw = u.forwardRef(
  ({ side: e = "right", className: t, children: r, ...n }, o) => /* @__PURE__ */ S(zA, { children: [
    /* @__PURE__ */ l(Rw, {}),
    /* @__PURE__ */ S(yn, { ref: o, className: T(BA({ side: e }), t), ...n, children: [
      r,
      /* @__PURE__ */ S(wn, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
        /* @__PURE__ */ l(to, { className: "h-4 w-4" }),
        /* @__PURE__ */ l("span", { className: "sr-only", children: "Close" })
      ] })
    ] })
  ] })
);
Tw.displayName = yn.displayName;
const jA = ({ className: e, ...t }) => /* @__PURE__ */ l("div", { className: T("flex flex-col space-y-2 text-center sm:text-left", e), ...t });
jA.displayName = "SheetHeader";
const HA = ({ className: e, ...t }) => /* @__PURE__ */ l("div", { className: T("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e), ...t });
HA.displayName = "SheetFooter";
const WA = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(co, { ref: r, className: T("text-lg font-semibold text-foreground", e), ...t }));
WA.displayName = co.displayName;
const VA = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(uo, { ref: r, className: T("text-sm text-muted-foreground", e), ...t }));
VA.displayName = uo.displayName;
var [bs, uq] = De("Tooltip", [
  cr
]), ys = cr(), Mw = "TooltipProvider", GA = 700, hc = "tooltip.open", [UA, mu] = bs(Mw), Aw = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = GA,
    skipDelayDuration: n = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, i = u.useRef(!0), s = u.useRef(!1), c = u.useRef(0);
  return u.useEffect(() => {
    const d = c.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ l(
    UA,
    {
      scope: t,
      isOpenDelayedRef: i,
      delayDuration: r,
      onOpen: u.useCallback(() => {
        window.clearTimeout(c.current), i.current = !1;
      }, []),
      onClose: u.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => i.current = !0,
          n
        );
      }, [n]),
      isPointerInTransitRef: s,
      onPointerInTransitChange: u.useCallback((d) => {
        s.current = d;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
Aw.displayName = Mw;
var Vo = "Tooltip", [KA, ws] = bs(Vo), kw = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, c = mu(Vo, e.__scopeTooltip), d = ys(t), [f, p] = u.useState(null), m = ke(), h = u.useRef(0), v = i ?? c.disableHoverableContent, g = s ?? c.delayDuration, b = u.useRef(!1), [y, w] = Oe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: (E) => {
      E ? (c.onOpen(), document.dispatchEvent(new CustomEvent(hc))) : c.onClose(), a == null || a(E);
    },
    caller: Vo
  }), x = u.useMemo(() => y ? b.current ? "delayed-open" : "instant-open" : "closed", [y]), C = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, b.current = !1, w(!0);
  }, [w]), N = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, w(!1);
  }, [w]), P = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      b.current = !0, w(!0), h.current = 0;
    }, g);
  }, [g, w]);
  return u.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ l(ao, { ...d, children: /* @__PURE__ */ l(
    KA,
    {
      scope: t,
      contentId: m,
      open: y,
      stateAttribute: x,
      trigger: f,
      onTriggerChange: p,
      onTriggerEnter: u.useCallback(() => {
        c.isOpenDelayedRef.current ? P() : C();
      }, [c.isOpenDelayedRef, P, C]),
      onTriggerLeave: u.useCallback(() => {
        v ? N() : (window.clearTimeout(h.current), h.current = 0);
      }, [N, v]),
      onOpen: C,
      onClose: N,
      disableHoverableContent: v,
      children: r
    }
  ) });
};
kw.displayName = Vo;
var gc = "TooltipTrigger", Dw = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = ws(gc, r), a = mu(gc, r), i = ys(r), s = u.useRef(null), c = ae(t, s, o.onTriggerChange), d = u.useRef(!1), f = u.useRef(!1), p = u.useCallback(() => d.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ l(io, { asChild: !0, ...i, children: /* @__PURE__ */ l(
      Q.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...n,
        ref: c,
        onPointerMove: H(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !f.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: H(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: H(e.onPointerDown, () => {
          o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: H(e.onFocus, () => {
          d.current || o.onOpen();
        }),
        onBlur: H(e.onBlur, o.onClose),
        onClick: H(e.onClick, o.onClose)
      }
    ) });
  }
);
Dw.displayName = gc;
var YA = "TooltipPortal", [fq, qA] = bs(YA, {
  forceMount: void 0
}), Gn = "TooltipContent", Ow = u.forwardRef(
  (e, t) => {
    const r = qA(Gn, e.__scopeTooltip), { forceMount: n = r.forceMount, side: o = "top", ...a } = e, i = ws(Gn, e.__scopeTooltip);
    return /* @__PURE__ */ l(Be, { present: n || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ l(Iw, { side: o, ...a, ref: t }) : /* @__PURE__ */ l(XA, { side: o, ...a, ref: t }) });
  }
), XA = u.forwardRef((e, t) => {
  const r = ws(Gn, e.__scopeTooltip), n = mu(Gn, e.__scopeTooltip), o = u.useRef(null), a = ae(t, o), [i, s] = u.useState(null), { trigger: c, onClose: d } = r, f = o.current, { onPointerInTransitChange: p } = n, m = u.useCallback(() => {
    s(null), p(!1);
  }, [p]), h = u.useCallback(
    (v, g) => {
      const b = v.currentTarget, y = { x: v.clientX, y: v.clientY }, w = tk(y, b.getBoundingClientRect()), x = rk(y, w), C = nk(g.getBoundingClientRect()), N = ak([...x, ...C]);
      s(N), p(!0);
    },
    [p]
  );
  return u.useEffect(() => () => m(), [m]), u.useEffect(() => {
    if (c && f) {
      const v = (b) => h(b, f), g = (b) => h(b, c);
      return c.addEventListener("pointerleave", v), f.addEventListener("pointerleave", g), () => {
        c.removeEventListener("pointerleave", v), f.removeEventListener("pointerleave", g);
      };
    }
  }, [c, f, h, m]), u.useEffect(() => {
    if (i) {
      const v = (g) => {
        const b = g.target, y = { x: g.clientX, y: g.clientY }, w = (c == null ? void 0 : c.contains(b)) || (f == null ? void 0 : f.contains(b)), x = !ok(y, i);
        w ? m() : x && (m(), d());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [c, f, i, d, m]), /* @__PURE__ */ l(Iw, { ...e, ref: a });
}), [ZA, QA] = bs(Vo, { isInside: !1 }), JA = /* @__PURE__ */ Fm("TooltipContent"), Iw = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, c = ws(Gn, r), d = ys(r), { onClose: f } = c;
    return u.useEffect(() => (document.addEventListener(hc, f), () => document.removeEventListener(hc, f)), [f]), u.useEffect(() => {
      if (c.trigger) {
        const p = (m) => {
          const h = m.target;
          h != null && h.contains(c.trigger) && f();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [c.trigger, f]), /* @__PURE__ */ l(
      Er,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ S(
          ma,
          {
            "data-state": c.stateAttribute,
            ...d,
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
              /* @__PURE__ */ l(JA, { children: n }),
              /* @__PURE__ */ l(ZA, { scope: r, isInside: !0, children: /* @__PURE__ */ l(Jm, { id: c.contentId, role: "tooltip", children: o || n }) })
            ]
          }
        )
      }
    );
  }
);
Ow.displayName = Gn;
var $w = "TooltipArrow", ek = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = ys(r);
    return QA(
      $w,
      r
    ).isInside ? null : /* @__PURE__ */ l(ha, { ...o, ...n, ref: t });
  }
);
ek.displayName = $w;
function tk(e, t) {
  const r = Math.abs(t.top - e.y), n = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(r, n, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case r:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function rk(e, t, r = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push(
        { x: e.x - r, y: e.y + r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "bottom":
      n.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x + r, y: e.y - r }
      );
      break;
    case "left":
      n.push(
        { x: e.x + r, y: e.y - r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "right":
      n.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x - r, y: e.y + r }
      );
      break;
  }
  return n;
}
function nk(e) {
  const { top: t, right: r, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: o, y: n }
  ];
}
function ok(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], c = t[i], d = s.x, f = s.y, p = c.x, m = c.y;
    f > n != m > n && r < (p - d) * (n - f) / (m - f) + d && (o = !o);
  }
  return o;
}
function ak(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), ik(t);
}
function ik(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], i = t[t.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const o = e[n];
    for (; r.length >= 2; ) {
      const a = r[r.length - 1], i = r[r.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) r.pop();
      else break;
    }
    r.push(o);
  }
  return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r);
}
var sk = Aw, lk = kw, ck = Dw, Lw = Ow;
const dk = sk, uk = lk, fk = ck, Fw = u.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ l(
  Lw,
  {
    ref: n,
    sideOffset: t,
    className: T(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
Fw.displayName = Lw.displayName;
const pk = "sidebar:state", mk = 60 * 60 * 24 * 7, hk = "16rem", gk = "18rem", vk = "3rem", bk = "b", zw = u.createContext(null);
function xs() {
  const e = u.useContext(zw);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
const yk = u.forwardRef(({ defaultOpen: e = !0, open: t, onOpenChange: r, className: n, style: o, children: a, ...i }, s) => {
  const c = NA(), [d, f] = u.useState(!1), [p, m] = u.useState(e), h = t ?? p, v = u.useCallback(
    (w) => {
      const x = typeof w == "function" ? w(h) : w;
      r ? r(x) : m(x), document.cookie = `${pk}=${x}; path=/; max-age=${mk}`;
    },
    [r, h]
  ), g = u.useCallback(() => c ? f((w) => !w) : v((w) => !w), [c, v, f]);
  u.useEffect(() => {
    const w = (x) => {
      x.key === bk && (x.metaKey || x.ctrlKey) && (x.preventDefault(), g());
    };
    return window.addEventListener("keydown", w), () => window.removeEventListener("keydown", w);
  }, [g]);
  const b = h ? "expanded" : "collapsed", y = u.useMemo(
    () => ({
      state: b,
      open: h,
      setOpen: v,
      isMobile: c,
      openMobile: d,
      setOpenMobile: f,
      toggleSidebar: g
    }),
    [b, h, v, c, d, f, g]
  );
  return /* @__PURE__ */ l(zw.Provider, { value: y, children: /* @__PURE__ */ l(dk, { delayDuration: 0, children: /* @__PURE__ */ l(
    "div",
    {
      style: {
        "--sidebar-width": hk,
        "--sidebar-width-icon": vk,
        ...o
      },
      className: T("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", n),
      ref: s,
      ...i,
      children: a
    }
  ) }) });
});
yk.displayName = "SidebarProvider";
const wk = u.forwardRef(({ side: e = "left", variant: t = "sidebar", collapsible: r = "offcanvas", className: n, children: o, ...a }, i) => {
  const { isMobile: s, state: c, openMobile: d, setOpenMobile: f } = xs();
  return r === "none" ? /* @__PURE__ */ l(
    "div",
    {
      className: T("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", n),
      ref: i,
      ...a,
      children: o
    }
  ) : s ? /* @__PURE__ */ l(FA, { open: d, onOpenChange: f, ...a, children: /* @__PURE__ */ l(
    Tw,
    {
      "data-sidebar": "sidebar",
      "data-mobile": "true",
      className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
      style: {
        "--sidebar-width": gk
      },
      side: e,
      children: /* @__PURE__ */ l("div", { className: "flex h-full w-full flex-col", children: o })
    }
  ) }) : /* @__PURE__ */ S(
    "div",
    {
      ref: i,
      className: "group peer hidden text-sidebar-foreground md:block",
      "data-state": c,
      "data-collapsible": c === "collapsed" ? r : "",
      "data-variant": t,
      "data-side": e,
      children: [
        /* @__PURE__ */ l(
          "div",
          {
            className: T(
              "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
            )
          }
        ),
        /* @__PURE__ */ l(
          "div",
          {
            className: T(
              "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
              n
            ),
            ...a,
            children: /* @__PURE__ */ l(
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
wk.displayName = "Sidebar";
const xk = u.forwardRef(
  ({ className: e, onClick: t, ...r }, n) => {
    const { toggleSidebar: o } = xs();
    return /* @__PURE__ */ S(
      Ce,
      {
        ref: n,
        "data-sidebar": "trigger",
        variant: "ghost",
        size: "icon",
        className: T("h-7 w-7", e),
        onClick: (a) => {
          t == null || t(a), o();
        },
        ...r,
        children: [
          /* @__PURE__ */ l(wE, {}),
          /* @__PURE__ */ l("span", { className: "sr-only", children: "Toggle Sidebar" })
        ]
      }
    );
  }
);
xk.displayName = "SidebarTrigger";
const Ck = u.forwardRef(
  ({ className: e, ...t }, r) => {
    const { toggleSidebar: n } = xs();
    return /* @__PURE__ */ l(
      "button",
      {
        ref: r,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: n,
        title: "Toggle Sidebar",
        className: T(
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
Ck.displayName = "SidebarRail";
const Sk = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  "main",
  {
    ref: r,
    className: T(
      "relative flex min-h-svh flex-1 flex-col bg-background",
      "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
      e
    ),
    ...t
  }
));
Sk.displayName = "SidebarInset";
const Nk = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l(
    Gm,
    {
      ref: r,
      "data-sidebar": "input",
      className: T(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        e
      ),
      ...t
    }
  )
);
Nk.displayName = "SidebarInput";
const Ek = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l("div", { ref: r, "data-sidebar": "header", className: T("flex flex-col gap-2 p-2", e), ...t }));
Ek.displayName = "SidebarHeader";
const Pk = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l("div", { ref: r, "data-sidebar": "footer", className: T("flex flex-col gap-2 p-2", e), ...t }));
Pk.displayName = "SidebarFooter";
const _k = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l(
    dw,
    {
      ref: r,
      "data-sidebar": "separator",
      className: T("mx-2 w-auto bg-sidebar-border", e),
      ...t
    }
  )
);
_k.displayName = "SidebarSeparator";
const Rk = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  "div",
  {
    ref: r,
    "data-sidebar": "content",
    className: T(
      "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      e
    ),
    ...t
  }
));
Rk.displayName = "SidebarContent";
const Tk = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  "div",
  {
    ref: r,
    "data-sidebar": "group",
    className: T("relative flex w-full min-w-0 flex-col p-2", e),
    ...t
  }
));
Tk.displayName = "SidebarGroup";
const Mk = u.forwardRef(
  ({ className: e, asChild: t = !1, ...r }, n) => /* @__PURE__ */ l(
    t ? Wr : "div",
    {
      ref: n,
      "data-sidebar": "group-label",
      className: T(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...r
    }
  )
);
Mk.displayName = "SidebarGroupLabel";
const Ak = u.forwardRef(
  ({ className: e, asChild: t = !1, ...r }, n) => /* @__PURE__ */ l(
    t ? Wr : "button",
    {
      ref: n,
      "data-sidebar": "group-action",
      className: T(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...r
    }
  )
);
Ak.displayName = "SidebarGroupAction";
const kk = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l("div", { ref: r, "data-sidebar": "group-content", className: T("w-full text-sm", e), ...t })
);
kk.displayName = "SidebarGroupContent";
const Dk = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l("ul", { ref: r, "data-sidebar": "menu", className: T("flex w-full min-w-0 flex-col gap-1", e), ...t }));
Dk.displayName = "SidebarMenu";
const Ok = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l("li", { ref: r, "data-sidebar": "menu-item", className: T("group/menu-item relative", e), ...t }));
Ok.displayName = "SidebarMenuItem";
const Ik = Sr(
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
), $k = u.forwardRef(({ asChild: e = !1, isActive: t = !1, variant: r = "default", size: n = "default", tooltip: o, className: a, ...i }, s) => {
  const c = e ? Wr : "button", { isMobile: d, state: f } = xs(), p = /* @__PURE__ */ l(
    c,
    {
      ref: s,
      "data-sidebar": "menu-button",
      "data-size": n,
      "data-active": t,
      className: T(Ik({ variant: r, size: n }), a),
      ...i
    }
  );
  return o ? (typeof o == "string" && (o = {
    children: o
  }), /* @__PURE__ */ S(uk, { children: [
    /* @__PURE__ */ l(fk, { asChild: !0, children: p }),
    /* @__PURE__ */ l(Fw, { side: "right", align: "center", hidden: f !== "collapsed" || d, ...o })
  ] })) : p;
});
$k.displayName = "SidebarMenuButton";
const Lk = u.forwardRef(({ className: e, asChild: t = !1, showOnHover: r = !1, ...n }, o) => /* @__PURE__ */ l(
  t ? Wr : "button",
  {
    ref: o,
    "data-sidebar": "menu-action",
    className: T(
      "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      // Increases the hit area of the button on mobile.
      "after:absolute after:-inset-2 after:md:hidden",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      r && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
      e
    ),
    ...n
  }
));
Lk.displayName = "SidebarMenuAction";
const Fk = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l(
    "div",
    {
      ref: r,
      "data-sidebar": "menu-badge",
      className: T(
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
Fk.displayName = "SidebarMenuBadge";
const zk = u.forwardRef(({ className: e, showIcon: t = !1, ...r }, n) => {
  const o = u.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ S(
    "div",
    {
      ref: n,
      "data-sidebar": "menu-skeleton",
      className: T("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...r,
      children: [
        t && /* @__PURE__ */ l(Nf, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ l(
          Nf,
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
zk.displayName = "SidebarMenuSkeleton";
const Bk = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l(
    "ul",
    {
      ref: r,
      "data-sidebar": "menu-sub",
      className: T(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  )
);
Bk.displayName = "SidebarMenuSub";
const jk = u.forwardRef(({ ...e }, t) => /* @__PURE__ */ l("li", { ref: t, ...e }));
jk.displayName = "SidebarMenuSubItem";
const Hk = u.forwardRef(({ asChild: e = !1, size: t = "md", isActive: r, className: n, ...o }, a) => /* @__PURE__ */ l(
  e ? Wr : "a",
  {
    ref: a,
    "data-sidebar": "menu-sub-button",
    "data-size": t,
    "data-active": r,
    className: T(
      "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
      "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
      t === "sm" && "text-xs",
      t === "md" && "text-sm",
      "group-data-[collapsible=icon]:hidden",
      n
    ),
    ...o
  }
));
Hk.displayName = "SidebarMenuSubButton";
function Wk(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
const Bw = _.createContext({
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
}), fo = () => {
  const e = _.useContext(Bw);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
Wk(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,100%,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,100%,0)}}@keyframes slideFromTop{from{transform:translate3d(0,-100%,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,-100%,0)}}@keyframes slideFromLeft{from{transform:translate3d(-100%,0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(-100%,0,0)}}@keyframes slideFromRight{from{transform:translate3d(100%,0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(100%,0,0)}}`);
const Vk = 24, Gk = typeof window < "u" ? Vi : nt;
function Zf(...e) {
  return (...t) => {
    for (let r of e)
      typeof r == "function" && r(...t);
  };
}
function Uk() {
  return hu(/^Mac/);
}
function Kk() {
  return hu(/^iPhone/);
}
function Qf() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Yk() {
  return hu(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Uk() && navigator.maxTouchPoints > 1;
}
function jw() {
  return Kk() || Yk();
}
function hu(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const sl = typeof document < "u" && window.visualViewport;
function Jf(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Hw(e) {
  for (Jf(e) && (e = e.parentElement); e && !Jf(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const qk = /* @__PURE__ */ new Set([
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
let Ba = 0, ll;
function Xk(e = {}) {
  let { isDisabled: t } = e;
  Gk(() => {
    if (!t)
      return Ba++, Ba === 1 && jw() && (ll = Zk()), () => {
        Ba--, Ba === 0 && (ll == null || ll());
      };
  }, [
    t
  ]);
}
function Zk() {
  let e, t = 0, r = (p) => {
    e = Hw(p.target), !(e === document.documentElement && e === document.body) && (t = p.changedTouches[0].pageY);
  }, n = (p) => {
    if (!e || e === document.documentElement || e === document.body) {
      p.preventDefault();
      return;
    }
    let m = p.changedTouches[0].pageY, h = e.scrollTop, v = e.scrollHeight - e.clientHeight;
    v !== 0 && ((h <= 0 && m > t || h >= v && m < t) && p.preventDefault(), t = m);
  }, o = (p) => {
    let m = p.target;
    vc(m) && m !== document.activeElement && (p.preventDefault(), m.style.transform = "translateY(-2000px)", m.focus(), requestAnimationFrame(() => {
      m.style.transform = "";
    }));
  }, a = (p) => {
    let m = p.target;
    vc(m) && (m.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      m.style.transform = "", sl && (sl.height < window.innerHeight ? requestAnimationFrame(() => {
        ep(m);
      }) : sl.addEventListener("resize", () => ep(m), {
        once: !0
      }));
    }));
  }, i = () => {
    window.scrollTo(0, 0);
  }, s = window.pageXOffset, c = window.pageYOffset, d = Zf(Qk(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let f = Zf(Co(document, "touchstart", r, {
    passive: !1,
    capture: !0
  }), Co(document, "touchmove", n, {
    passive: !1,
    capture: !0
  }), Co(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), Co(document, "focus", a, !0), Co(window, "scroll", i));
  return () => {
    d(), f(), window.scrollTo(s, c);
  };
}
function Qk(e, t, r) {
  let n = e.style[t];
  return e.style[t] = r, () => {
    e.style[t] = n;
  };
}
function Co(e, t, r, n) {
  return e.addEventListener(t, r, n), () => {
    e.removeEventListener(t, r, n);
  };
}
function ep(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let r = Hw(e);
    if (r !== document.documentElement && r !== document.body && r !== e) {
      let n = r.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom;
      const i = r.getBoundingClientRect().bottom + Vk;
      a > i && (r.scrollTop += o - n);
    }
    e = r.parentElement;
  }
}
function vc(e) {
  return e instanceof HTMLInputElement && !qk.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function Jk(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function eD(...e) {
  return (t) => e.forEach((r) => Jk(r, t));
}
function Ww(...e) {
  return u.useCallback(eD(...e), e);
}
const Vw = /* @__PURE__ */ new WeakMap();
function et(e, t, r = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    n[o] = e.style[o], e.style[o] = a;
  }), !r && Vw.set(e, n);
}
function tD(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = Vw.get(e);
  r && (e.style[t] = r[t]);
}
const tt = (e) => {
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
function ja(e, t) {
  if (!e)
    return null;
  const r = window.getComputedStyle(e), n = (
    // @ts-ignore
    r.transform || r.webkitTransform || r.mozTransform
  );
  let o = n.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[tt(t) ? 13 : 12]) : (o = n.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[tt(t) ? 5 : 4]) : null);
}
function rD(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function cl(e, t) {
  if (!e) return () => {
  };
  const r = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = r;
  };
}
function nD(...e) {
  return (...t) => {
    for (const r of e)
      typeof r == "function" && r(...t);
  };
}
const Ve = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, Gw = 0.4, oD = 0.25, aD = 100, Uw = 8, Xr = 16, bc = 26, dl = "vaul-dragging";
function Kw(e) {
  const t = _.useRef(e);
  return _.useEffect(() => {
    t.current = e;
  }), _.useMemo(() => (...r) => t.current == null ? void 0 : t.current.call(t, ...r), []);
}
function iD({ defaultProp: e, onChange: t }) {
  const r = _.useState(e), [n] = r, o = _.useRef(n), a = Kw(t);
  return _.useEffect(() => {
    o.current !== n && (a(n), o.current = n);
  }, [
    n,
    o,
    a
  ]), r;
}
function Yw({ prop: e, defaultProp: t, onChange: r = () => {
} }) {
  const [n, o] = iD({
    defaultProp: t,
    onChange: r
  }), a = e !== void 0, i = a ? e : n, s = Kw(r), c = _.useCallback((d) => {
    if (a) {
      const p = typeof d == "function" ? d(e) : d;
      p !== e && s(p);
    } else
      o(d);
  }, [
    a,
    e,
    o,
    s
  ]);
  return [
    i,
    c
  ];
}
function sD({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: r, drawerRef: n, overlayRef: o, fadeFromIndex: a, onSnapPointChange: i, direction: s = "bottom", container: c, snapToSequentialPoint: d }) {
  const [f, p] = Yw({
    prop: e,
    defaultProp: r == null ? void 0 : r[0],
    onChange: t
  }), [m, h] = _.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  _.useEffect(() => {
    function E() {
      h({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", E), () => window.removeEventListener("resize", E);
  }, []);
  const v = _.useMemo(() => f === (r == null ? void 0 : r[r.length - 1]) || null, [
    r,
    f
  ]), g = _.useMemo(() => r == null ? void 0 : r.findIndex((E) => E === f), [
    r,
    f
  ]), b = r && r.length > 0 && (a || a === 0) && !Number.isNaN(a) && r[a] === f || !r, y = _.useMemo(() => {
    const E = c ? {
      width: c.getBoundingClientRect().width,
      height: c.getBoundingClientRect().height
    } : typeof window < "u" ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : {
      width: 0,
      height: 0
    };
    var A;
    return (A = r == null ? void 0 : r.map((R) => {
      const B = typeof R == "string";
      let M = 0;
      if (B && (M = parseInt(R, 10)), tt(s)) {
        const U = B ? M : m ? R * E.height : 0;
        return m ? s === "bottom" ? E.height - U : -E.height + U : U;
      }
      const $ = B ? M : m ? R * E.width : 0;
      return m ? s === "right" ? E.width - $ : -E.width + $ : $;
    })) != null ? A : [];
  }, [
    r,
    m,
    c
  ]), w = _.useMemo(() => g !== null ? y == null ? void 0 : y[g] : null, [
    y,
    g
  ]), x = _.useCallback((E) => {
    var A;
    const R = (A = y == null ? void 0 : y.findIndex((B) => B === E)) != null ? A : null;
    i(R), et(n.current, {
      transition: `transform ${Ve.DURATION}s cubic-bezier(${Ve.EASE.join(",")})`,
      transform: tt(s) ? `translate3d(0, ${E}px, 0)` : `translate3d(${E}px, 0, 0)`
    }), y && R !== y.length - 1 && R !== a && R < a ? et(o.current, {
      transition: `opacity ${Ve.DURATION}s cubic-bezier(${Ve.EASE.join(",")})`,
      opacity: "0"
    }) : et(o.current, {
      transition: `opacity ${Ve.DURATION}s cubic-bezier(${Ve.EASE.join(",")})`,
      opacity: "1"
    }), p(r == null ? void 0 : r[Math.max(R, 0)]);
  }, [
    n.current,
    r,
    y,
    a,
    o,
    p
  ]);
  _.useEffect(() => {
    if (f || e) {
      var E;
      const A = (E = r == null ? void 0 : r.findIndex((R) => R === e || R === f)) != null ? E : -1;
      y && A !== -1 && typeof y[A] == "number" && x(y[A]);
    }
  }, [
    f,
    e,
    r,
    y,
    x
  ]);
  function C({ draggedDistance: E, closeDrawer: A, velocity: R, dismissible: B }) {
    if (a === void 0) return;
    const M = s === "bottom" || s === "right" ? (w ?? 0) - E : (w ?? 0) + E, $ = g === a - 1, U = g === 0, L = E > 0;
    if ($ && et(o.current, {
      transition: `opacity ${Ve.DURATION}s cubic-bezier(${Ve.EASE.join(",")})`
    }), !d && R > 2 && !L) {
      B ? A() : x(y[0]);
      return;
    }
    if (!d && R > 2 && L && y && r) {
      x(y[r.length - 1]);
      return;
    }
    const K = y == null ? void 0 : y.reduce((z, O) => typeof z != "number" || typeof O != "number" ? z : Math.abs(O - M) < Math.abs(z - M) ? O : z), V = tt(s) ? window.innerHeight : window.innerWidth;
    if (R > Gw && Math.abs(E) < V * 0.4) {
      const z = L ? 1 : -1;
      if (z > 0 && v) {
        x(y[r.length - 1]);
        return;
      }
      if (U && z < 0 && B && A(), g === null) return;
      x(y[g + z]);
      return;
    }
    x(K);
  }
  function N({ draggedDistance: E }) {
    if (w === null) return;
    const A = s === "bottom" || s === "right" ? w - E : w + E;
    (s === "bottom" || s === "right") && A < y[y.length - 1] || (s === "top" || s === "left") && A > y[y.length - 1] || et(n.current, {
      transform: tt(s) ? `translate3d(0, ${A}px, 0)` : `translate3d(${A}px, 0, 0)`
    });
  }
  function P(E, A) {
    if (!r || typeof g != "number" || !y || a === void 0) return null;
    const R = g === a - 1;
    if (g >= a && A)
      return 0;
    if (R && !A) return 1;
    if (!b && !R) return null;
    const M = R ? g + 1 : g - 1, $ = R ? y[M] - y[M - 1] : y[M + 1] - y[M], U = E / Math.abs($);
    return R ? 1 - U : U;
  }
  return {
    isLastSnapPoint: v,
    activeSnapPoint: f,
    shouldFade: b,
    getPercentageDragged: P,
    setActiveSnapPoint: p,
    activeSnapPointIndex: g,
    onRelease: C,
    onDrag: N,
    snapPointsOffset: y
  };
}
const lD = () => () => {
};
function cD() {
  const { direction: e, isOpen: t, shouldScaleBackground: r, setBackgroundColorOnScale: n, noBodyStyles: o } = fo(), a = _.useRef(null), i = qc(() => document.body.style.backgroundColor, []);
  function s() {
    return (window.innerWidth - bc) / window.innerWidth;
  }
  _.useEffect(() => {
    if (t && r) {
      a.current && clearTimeout(a.current);
      const c = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!c) return;
      nD(n && !o ? cl(document.body, {
        background: "black"
      }) : lD, cl(c, {
        transformOrigin: tt(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Ve.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Ve.EASE.join(",")})`
      }));
      const d = cl(c, {
        borderRadius: `${Uw}px`,
        overflow: "hidden",
        ...tt(e) ? {
          transform: `scale(${s()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${s()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        d(), a.current = window.setTimeout(() => {
          i ? document.body.style.background = i : document.body.style.removeProperty("background");
        }, Ve.DURATION * 1e3);
      };
    }
  }, [
    t,
    r,
    i
  ]);
}
let So = null;
function dD({ isOpen: e, modal: t, nested: r, hasBeenOpened: n, preventScrollRestoration: o, noBodyStyles: a }) {
  const [i, s] = _.useState(() => typeof window < "u" ? window.location.href : ""), c = _.useRef(0), d = _.useCallback(() => {
    if (Qf() && So === null && e && !a) {
      So = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: p, innerHeight: m } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-c.current}px`,
        left: `${-p}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const h = m - window.innerHeight;
        h && c.current >= m && (document.body.style.top = `${-(c.current + h)}px`);
      }), 300);
    }
  }, [
    e
  ]), f = _.useCallback(() => {
    if (Qf() && So !== null && !a) {
      const p = -parseInt(document.body.style.top, 10), m = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, So), window.requestAnimationFrame(() => {
        if (o && i !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(m, p);
      }), So = null;
    }
  }, [
    i
  ]);
  return _.useEffect(() => {
    function p() {
      c.current = window.scrollY;
    }
    return p(), window.addEventListener("scroll", p), () => {
      window.removeEventListener("scroll", p);
    };
  }, []), _.useEffect(() => {
    r || !n || (e ? (!window.matchMedia("(display-mode: standalone)").matches && d(), t || window.setTimeout(() => {
      f();
    }, 500)) : f());
  }, [
    e,
    n,
    i,
    t,
    r,
    d,
    f
  ]), {
    restorePositionSetting: f
  };
}
function qw({ open: e, onOpenChange: t, children: r, onDrag: n, onRelease: o, snapPoints: a, shouldScaleBackground: i = !1, setBackgroundColorOnScale: s = !0, closeThreshold: c = oD, scrollLockTimeout: d = aD, dismissible: f = !0, handleOnly: p = !1, fadeFromIndex: m = a && a.length - 1, activeSnapPoint: h, setActiveSnapPoint: v, fixed: g, modal: b = !0, onClose: y, nested: w, noBodyStyles: x, direction: C = "bottom", defaultOpen: N = !1, disablePreventScroll: P = !0, snapToSequentialPoint: E = !1, preventScrollRestoration: A = !1, repositionInputs: R = !0, onAnimationEnd: B, container: M, autoFocus: $ = !1 }) {
  var U, L;
  const [K = !1, V] = Yw({
    defaultProp: N,
    prop: e,
    onChange: (le) => {
      t == null || t(le), !le && !w && $e(), setTimeout(() => {
        B == null || B(le);
      }, Ve.DURATION * 1e3), le && !b && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), le || (document.body.style.pointerEvents = "auto");
    }
  }), [z, O] = _.useState(!1), [F, ee] = _.useState(!1), [te, I] = _.useState(!1), D = _.useRef(null), W = _.useRef(null), G = _.useRef(null), Z = _.useRef(null), k = _.useRef(null), Y = _.useRef(!1), J = _.useRef(null), re = _.useRef(0), ne = _.useRef(!1), X = _.useRef(0), q = _.useRef(null), j = _.useRef(((U = q.current) == null ? void 0 : U.getBoundingClientRect().height) || 0), oe = _.useRef(((L = q.current) == null ? void 0 : L.getBoundingClientRect().width) || 0), ce = _.useRef(0), ve = _.useCallback((le) => {
    a && le === Ae.length - 1 && (W.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: fe, activeSnapPointIndex: de, setActiveSnapPoint: _e, onRelease: je, snapPointsOffset: Ae, onDrag: We, shouldFade: at, getPercentageDragged: dt } = sD({
    snapPoints: a,
    activeSnapPointProp: h,
    setActiveSnapPointProp: v,
    drawerRef: q,
    fadeFromIndex: m,
    overlayRef: D,
    onSnapPointChange: ve,
    direction: C,
    container: M,
    snapToSequentialPoint: E
  });
  Xk({
    isDisabled: !K || F || !b || te || !z || !R || !P
  });
  const { restorePositionSetting: $e } = dD({
    isOpen: K,
    modal: b,
    nested: w,
    hasBeenOpened: z,
    preventScrollRestoration: A,
    noBodyStyles: x
  });
  function Ue() {
    return (window.innerWidth - bc) / window.innerWidth;
  }
  function _r(le) {
    var ye, Ne;
    !f && !a || q.current && !q.current.contains(le.target) || (j.current = ((ye = q.current) == null ? void 0 : ye.getBoundingClientRect().height) || 0, oe.current = ((Ne = q.current) == null ? void 0 : Ne.getBoundingClientRect().width) || 0, ee(!0), G.current = /* @__PURE__ */ new Date(), jw() && window.addEventListener("touchend", () => Y.current = !1, {
      once: !0
    }), le.target.setPointerCapture(le.pointerId), re.current = tt(C) ? le.pageY : le.pageX);
  }
  function At(le, ye) {
    var Ne, Re;
    let be = le;
    const He = (Ne = window.getSelection()) == null ? void 0 : Ne.toString(), Je = q.current ? ja(q.current, C) : null, ie = /* @__PURE__ */ new Date();
    if (be.hasAttribute("data-vaul-no-drag") || be.closest("[data-vaul-no-drag]"))
      return !1;
    if (C === "right" || C === "left")
      return !0;
    if (W.current && ie.getTime() - W.current.getTime() < 500)
      return !1;
    if (Je !== null && (C === "bottom" ? Je > 0 : Je < 0))
      return !0;
    if (He && He.length > 0)
      return !1;
    if (ie.getTime() - ((Re = k.current) == null ? void 0 : Re.getTime()) < d && Je === 0 || ye)
      return k.current = ie, !1;
    for (; be; ) {
      if (be.scrollHeight > be.clientHeight) {
        if (be.scrollTop !== 0)
          return k.current = /* @__PURE__ */ new Date(), !1;
        if (be.getAttribute("role") === "dialog")
          return !0;
      }
      be = be.parentNode;
    }
    return !0;
  }
  function ut(le) {
    if (q.current && F) {
      const ye = C === "bottom" || C === "right" ? 1 : -1, Ne = (re.current - (tt(C) ? le.pageY : le.pageX)) * ye, Re = Ne > 0, be = a && !f && !Re;
      if (be && de === 0) return;
      const He = Math.abs(Ne), Je = document.querySelector("[data-vaul-drawer-wrapper]"), ie = C === "bottom" || C === "top" ? j.current : oe.current;
      let pe = He / ie;
      const we = dt(He, Re);
      if (we !== null && (pe = we), be && pe >= 1 || !Y.current && !At(le.target, Re)) return;
      if (q.current.classList.add(dl), Y.current = !0, et(q.current, {
        transition: "none"
      }), et(D.current, {
        transition: "none"
      }), a && We({
        draggedDistance: Ne
      }), Re && !a) {
        const Ke = rD(Ne), yt = Math.min(Ke * -1, 0) * ye;
        et(q.current, {
          transform: tt(C) ? `translate3d(0, ${yt}px, 0)` : `translate3d(${yt}px, 0, 0)`
        });
        return;
      }
      const Ze = 1 - pe;
      if ((at || m && de === m - 1) && (n == null || n(le, pe), et(D.current, {
        opacity: `${Ze}`,
        transition: "none"
      }, !0)), Je && D.current && i) {
        const Ke = Math.min(Ue() + pe * (1 - Ue()), 1), yt = 8 - pe * 8, Qt = Math.max(0, 14 - pe * 14);
        et(Je, {
          borderRadius: `${yt}px`,
          transform: tt(C) ? `scale(${Ke}) translate3d(0, ${Qt}px, 0)` : `scale(${Ke}) translate3d(${Qt}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!a) {
        const Ke = He * ye;
        et(q.current, {
          transform: tt(C) ? `translate3d(0, ${Ke}px, 0)` : `translate3d(${Ke}px, 0, 0)`
        });
      }
    }
  }
  _.useEffect(() => {
    var le;
    function ye() {
      if (!q.current || !R) return;
      const Ne = document.activeElement;
      if (vc(Ne) || ne.current) {
        var Re;
        const be = ((Re = window.visualViewport) == null ? void 0 : Re.height) || 0, He = window.innerHeight;
        let Je = He - be;
        const ie = q.current.getBoundingClientRect().height || 0, pe = ie > He * 0.8;
        ce.current || (ce.current = ie);
        const we = q.current.getBoundingClientRect().top;
        if (Math.abs(X.current - Je) > 60 && (ne.current = !ne.current), a && a.length > 0 && Ae && de) {
          const Ze = Ae[de] || 0;
          Je += Ze;
        }
        if (X.current = Je, ie > be || ne.current) {
          const Ze = q.current.getBoundingClientRect().height;
          let Ke = Ze;
          Ze > be && (Ke = be - (pe ? we : bc)), g ? q.current.style.height = `${Ze - Math.max(Je, 0)}px` : q.current.style.height = `${Math.max(Ke, be - we)}px`;
        } else
          q.current.style.height = `${ce.current}px`;
        a && a.length > 0 && !ne.current ? q.current.style.bottom = "0px" : q.current.style.bottom = `${Math.max(Je, 0)}px`;
      }
    }
    return (le = window.visualViewport) == null || le.addEventListener("resize", ye), () => {
      var Ne;
      return (Ne = window.visualViewport) == null ? void 0 : Ne.removeEventListener("resize", ye);
    };
  }, [
    de,
    a,
    Ae
  ]);
  function bt(le) {
    ot(), y == null || y(), le || V(!1), setTimeout(() => {
      a && _e(a[0]);
    }, Ve.DURATION * 1e3);
  }
  function kt() {
    if (!q.current) return;
    const le = document.querySelector("[data-vaul-drawer-wrapper]"), ye = ja(q.current, C);
    et(q.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Ve.DURATION}s cubic-bezier(${Ve.EASE.join(",")})`
    }), et(D.current, {
      transition: `opacity ${Ve.DURATION}s cubic-bezier(${Ve.EASE.join(",")})`,
      opacity: "1"
    }), i && ye && ye > 0 && K && et(le, {
      borderRadius: `${Uw}px`,
      overflow: "hidden",
      ...tt(C) ? {
        transform: `scale(${Ue()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${Ue()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${Ve.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${Ve.EASE.join(",")})`
    }, !0);
  }
  function ot() {
    !F || !q.current || (q.current.classList.remove(dl), Y.current = !1, ee(!1), Z.current = /* @__PURE__ */ new Date());
  }
  function pt(le) {
    if (!F || !q.current) return;
    q.current.classList.remove(dl), Y.current = !1, ee(!1), Z.current = /* @__PURE__ */ new Date();
    const ye = ja(q.current, C);
    if (!At(le.target, !1) || !ye || Number.isNaN(ye) || G.current === null) return;
    const Ne = Z.current.getTime() - G.current.getTime(), Re = re.current - (tt(C) ? le.pageY : le.pageX), be = Math.abs(Re) / Ne;
    if (be > 0.05 && (I(!0), setTimeout(() => {
      I(!1);
    }, 200)), a) {
      je({
        draggedDistance: Re * (C === "bottom" || C === "right" ? 1 : -1),
        closeDrawer: bt,
        velocity: be,
        dismissible: f
      }), o == null || o(le, !0);
      return;
    }
    if (C === "bottom" || C === "right" ? Re > 0 : Re < 0) {
      kt(), o == null || o(le, !0);
      return;
    }
    if (be > Gw) {
      bt(), o == null || o(le, !1);
      return;
    }
    var He;
    const Je = Math.min((He = q.current.getBoundingClientRect().height) != null ? He : 0, window.innerHeight);
    var ie;
    const pe = Math.min((ie = q.current.getBoundingClientRect().width) != null ? ie : 0, window.innerWidth), we = C === "left" || C === "right";
    if (Math.abs(ye) >= (we ? pe : Je) * c) {
      bt(), o == null || o(le, !1);
      return;
    }
    o == null || o(le, !0), kt();
  }
  _.useEffect(() => (K && (et(document.documentElement, {
    scrollBehavior: "auto"
  }), W.current = /* @__PURE__ */ new Date()), () => {
    tD(document.documentElement, "scrollBehavior");
  }), [
    K
  ]);
  function Rr(le) {
    const ye = le ? (window.innerWidth - Xr) / window.innerWidth : 1, Ne = le ? -Xr : 0;
    J.current && window.clearTimeout(J.current), et(q.current, {
      transition: `transform ${Ve.DURATION}s cubic-bezier(${Ve.EASE.join(",")})`,
      transform: `scale(${ye}) translate3d(0, ${Ne}px, 0)`
    }), !le && q.current && (J.current = setTimeout(() => {
      const Re = ja(q.current, C);
      et(q.current, {
        transition: "none",
        transform: tt(C) ? `translate3d(0, ${Re}px, 0)` : `translate3d(${Re}px, 0, 0)`
      });
    }, 500));
  }
  function Zt(le, ye) {
    if (ye < 0) return;
    const Ne = (window.innerWidth - Xr) / window.innerWidth, Re = Ne + ye * (1 - Ne), be = -Xr + ye * Xr;
    et(q.current, {
      transform: tt(C) ? `scale(${Re}) translate3d(0, ${be}px, 0)` : `scale(${Re}) translate3d(${be}px, 0, 0)`,
      transition: "none"
    });
  }
  function bo(le, ye) {
    const Ne = tt(C) ? window.innerHeight : window.innerWidth, Re = ye ? (Ne - Xr) / Ne : 1, be = ye ? -Xr : 0;
    ye && et(q.current, {
      transition: `transform ${Ve.DURATION}s cubic-bezier(${Ve.EASE.join(",")})`,
      transform: tt(C) ? `scale(${Re}) translate3d(0, ${be}px, 0)` : `scale(${Re}) translate3d(${be}px, 0, 0)`
    });
  }
  return /* @__PURE__ */ _.createElement(Ca, {
    defaultOpen: N,
    onOpenChange: (le) => {
      !f && !le || (le ? O(!0) : bt(!0), V(le));
    },
    open: K
  }, /* @__PURE__ */ _.createElement(Bw.Provider, {
    value: {
      activeSnapPoint: fe,
      snapPoints: a,
      setActiveSnapPoint: _e,
      drawerRef: q,
      overlayRef: D,
      onOpenChange: t,
      onPress: _r,
      onRelease: pt,
      onDrag: ut,
      dismissible: f,
      handleOnly: p,
      isOpen: K,
      isDragging: F,
      shouldFade: at,
      closeDrawer: bt,
      onNestedDrag: Zt,
      onNestedOpenChange: Rr,
      onNestedRelease: bo,
      keyboardIsOpen: ne,
      modal: b,
      snapPointsOffset: Ae,
      direction: C,
      shouldScaleBackground: i,
      setBackgroundColorOnScale: s,
      noBodyStyles: x,
      container: M,
      autoFocus: $
    }
  }, r));
}
const Xw = /* @__PURE__ */ _.forwardRef(function({ ...e }, t) {
  const { overlayRef: r, snapPoints: n, onRelease: o, shouldFade: a, isOpen: i, modal: s } = fo(), c = Ww(t, r), d = n && n.length > 0;
  return s ? /* @__PURE__ */ _.createElement(bn, {
    onMouseUp: o,
    ref: c,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": i && d ? "true" : "false",
    "data-vaul-snap-points-overlay": i && a ? "true" : "false",
    ...e
  }) : (typeof window < "u" && window.requestAnimationFrame(() => {
    document.body.style.pointerEvents = "auto";
  }), null);
});
Xw.displayName = "Drawer.Overlay";
const Zw = /* @__PURE__ */ _.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: r, ...n }, o) {
  const { drawerRef: a, onPress: i, onRelease: s, onDrag: c, keyboardIsOpen: d, snapPointsOffset: f, modal: p, isOpen: m, direction: h, snapPoints: v, container: g, handleOnly: b, autoFocus: y } = fo(), [w, x] = _.useState(!1), C = Ww(o, a), N = _.useRef(null), P = _.useRef(null), E = _.useRef(!1), A = v && v.length > 0;
  cD();
  const R = (M, $, U = 0) => {
    if (E.current) return !0;
    const L = Math.abs(M.y), K = Math.abs(M.x), V = K > L, z = [
      "bottom",
      "right"
    ].includes($) ? 1 : -1;
    if ($ === "left" || $ === "right") {
      if (!(M.x * z < 0) && K >= 0 && K <= U)
        return V;
    } else if (!(M.y * z < 0) && L >= 0 && L <= U)
      return !V;
    return E.current = !0, !0;
  };
  _.useEffect(() => {
    A && window.requestAnimationFrame(() => {
      x(!0);
    });
  }, []);
  function B(M) {
    N.current = null, E.current = !1, s(M);
  }
  return /* @__PURE__ */ _.createElement(yn, {
    "data-vaul-drawer-direction": h,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": w ? "true" : "false",
    "data-vaul-snap-points": m && A ? "true" : "false",
    "data-vaul-custom-container": g ? "true" : "false",
    ...n,
    ref: C,
    style: f && f.length > 0 ? {
      "--snap-point-height": `${f[0]}px`,
      ...t
    } : t,
    onPointerDown: (M) => {
      b || (n.onPointerDown == null || n.onPointerDown.call(n, M), N.current = {
        x: M.pageX,
        y: M.pageY
      }, i(M));
    },
    onOpenAutoFocus: (M) => {
      r == null || r(M), y || M.preventDefault();
    },
    onPointerDownOutside: (M) => {
      if (e == null || e(M), !p || M.defaultPrevented) {
        M.preventDefault();
        return;
      }
      d.current && (d.current = !1);
    },
    onFocusOutside: (M) => {
      if (!p) {
        M.preventDefault();
        return;
      }
    },
    onPointerMove: (M) => {
      if (P.current = M, b || (n.onPointerMove == null || n.onPointerMove.call(n, M), !N.current)) return;
      const $ = M.pageY - N.current.y, U = M.pageX - N.current.x, L = M.pointerType === "touch" ? 10 : 2;
      R({
        x: U,
        y: $
      }, h, L) ? c(M) : (Math.abs(U) > L || Math.abs($) > L) && (N.current = null);
    },
    onPointerUp: (M) => {
      n.onPointerUp == null || n.onPointerUp.call(n, M), N.current = null, E.current = !1, s(M);
    },
    onPointerOut: (M) => {
      n.onPointerOut == null || n.onPointerOut.call(n, M), B(P.current);
    },
    onContextMenu: (M) => {
      n.onContextMenu == null || n.onContextMenu.call(n, M), B(P.current);
    }
  });
});
Zw.displayName = "Drawer.Content";
const uD = 250, fD = 120, Qw = /* @__PURE__ */ _.forwardRef(function({ preventCycle: e = !1, children: t, ...r }, n) {
  const { closeDrawer: o, isDragging: a, snapPoints: i, activeSnapPoint: s, setActiveSnapPoint: c, dismissible: d, handleOnly: f, isOpen: p, onPress: m, onDrag: h } = fo(), v = _.useRef(null), g = _.useRef(!1);
  function b() {
    if (g.current) {
      x();
      return;
    }
    window.setTimeout(() => {
      y();
    }, fD);
  }
  function y() {
    if (a || e || g.current) {
      x();
      return;
    }
    if (x(), (!i || i.length === 0) && d) {
      o();
      return;
    }
    if (s === i[i.length - 1] && d) {
      o();
      return;
    }
    const N = i.findIndex((E) => E === s);
    if (N === -1) return;
    const P = i[N + 1];
    c(P);
  }
  function w() {
    v.current = window.setTimeout(() => {
      g.current = !0;
    }, uD);
  }
  function x() {
    window.clearTimeout(v.current), g.current = !1;
  }
  return /* @__PURE__ */ _.createElement("div", {
    onClick: b,
    onPointerCancel: x,
    onPointerDown: (C) => {
      f && m(C), w();
    },
    onPointerMove: (C) => {
      f && h(C);
    },
    // onPointerUp is already handled by the content component
    ref: n,
    "data-vaul-drawer-visible": p ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...r
  }, /* @__PURE__ */ _.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
Qw.displayName = "Drawer.Handle";
function pD({ onDrag: e, onOpenChange: t, ...r }) {
  const { onNestedDrag: n, onNestedOpenChange: o, onNestedRelease: a } = fo();
  if (!n)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return /* @__PURE__ */ _.createElement(qw, {
    nested: !0,
    onClose: () => {
      o(!1);
    },
    onDrag: (i, s) => {
      n(i, s), e == null || e(i, s);
    },
    onOpenChange: (i) => {
      i && o(i);
    },
    onRelease: a,
    ...r
  });
}
function mD(e) {
  const t = fo(), { container: r = t.container, ...n } = e;
  return /* @__PURE__ */ _.createElement(Sa, {
    container: r,
    ...n
  });
}
const Yt = {
  Root: qw,
  NestedRoot: pD,
  Content: Zw,
  Overlay: Xw,
  Trigger: vs,
  Portal: mD,
  Handle: Qw,
  Close: wn,
  Title: co,
  Description: uo
}, hD = ({ shouldScaleBackground: e = !0, ...t }) => /* @__PURE__ */ l(Yt.Root, { shouldScaleBackground: e, ...t });
hD.displayName = "Drawer";
const pq = Yt.Trigger, gD = Yt.Portal, mq = Yt.Close, Jw = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(Yt.Overlay, { ref: r, className: T("fixed inset-0 z-50 bg-black/80", e), ...t }));
Jw.displayName = Yt.Overlay.displayName;
const vD = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ S(gD, { children: [
  /* @__PURE__ */ l(Jw, {}),
  /* @__PURE__ */ S(
    Yt.Content,
    {
      ref: n,
      className: T(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ l("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        t
      ]
    }
  )
] }));
vD.displayName = "DrawerContent";
const bD = ({ className: e, ...t }) => /* @__PURE__ */ l("div", { className: T("grid gap-1.5 p-4 text-center sm:text-left", e), ...t });
bD.displayName = "DrawerHeader";
const yD = ({ className: e, ...t }) => /* @__PURE__ */ l("div", { className: T("mt-auto flex flex-col gap-2 p-4", e), ...t });
yD.displayName = "DrawerFooter";
const wD = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  Yt.Title,
  {
    ref: r,
    className: T("text-lg font-semibold leading-none tracking-tight", e),
    ...t
  }
));
wD.displayName = Yt.Title.displayName;
const xD = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(Yt.Description, { ref: r, className: T("text-sm text-muted-foreground", e), ...t }));
xD.displayName = Yt.Description.displayName;
const hq = db, gq = Nd, vq = Pd;
function CD(e, t) {
  return u.useReducer((r, n) => t[r][n] ?? r, e);
}
var gu = "ScrollArea", [e0, bq] = De(gu), [SD, Mt] = e0(gu), t0 = u.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: r,
      type: n = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...i
    } = e, [s, c] = u.useState(null), [d, f] = u.useState(null), [p, m] = u.useState(null), [h, v] = u.useState(null), [g, b] = u.useState(null), [y, w] = u.useState(0), [x, C] = u.useState(0), [N, P] = u.useState(!1), [E, A] = u.useState(!1), R = ae(t, (M) => c(M)), B = Gt(o);
    return /* @__PURE__ */ l(
      SD,
      {
        scope: r,
        type: n,
        dir: B,
        scrollHideDelay: a,
        scrollArea: s,
        viewport: d,
        onViewportChange: f,
        content: p,
        onContentChange: m,
        scrollbarX: h,
        onScrollbarXChange: v,
        scrollbarXEnabled: N,
        onScrollbarXEnabledChange: P,
        scrollbarY: g,
        onScrollbarYChange: b,
        scrollbarYEnabled: E,
        onScrollbarYEnabledChange: A,
        onCornerWidthChange: w,
        onCornerHeightChange: C,
        children: /* @__PURE__ */ l(
          Q.div,
          {
            dir: B,
            ...i,
            ref: R,
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
t0.displayName = gu;
var r0 = "ScrollAreaViewport", n0 = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, children: n, nonce: o, ...a } = e, i = Mt(r0, r), s = u.useRef(null), c = ae(t, s, i.onViewportChange);
    return /* @__PURE__ */ S(Me, { children: [
      /* @__PURE__ */ l(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ l(
        Q.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: c,
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
          children: /* @__PURE__ */ l("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: n })
        }
      )
    ] });
  }
);
n0.displayName = r0;
var dr = "ScrollAreaScrollbar", vu = u.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = Mt(dr, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o, s = e.orientation === "horizontal";
    return u.useEffect(() => (s ? a(!0) : i(!0), () => {
      s ? a(!1) : i(!1);
    }), [s, a, i]), o.type === "hover" ? /* @__PURE__ */ l(ND, { ...n, ref: t, forceMount: r }) : o.type === "scroll" ? /* @__PURE__ */ l(ED, { ...n, ref: t, forceMount: r }) : o.type === "auto" ? /* @__PURE__ */ l(o0, { ...n, ref: t, forceMount: r }) : o.type === "always" ? /* @__PURE__ */ l(bu, { ...n, ref: t }) : null;
  }
);
vu.displayName = dr;
var ND = u.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Mt(dr, e.__scopeScrollArea), [a, i] = u.useState(!1);
  return u.useEffect(() => {
    const s = o.scrollArea;
    let c = 0;
    if (s) {
      const d = () => {
        window.clearTimeout(c), i(!0);
      }, f = () => {
        c = window.setTimeout(() => i(!1), o.scrollHideDelay);
      };
      return s.addEventListener("pointerenter", d), s.addEventListener("pointerleave", f), () => {
        window.clearTimeout(c), s.removeEventListener("pointerenter", d), s.removeEventListener("pointerleave", f);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ l(Be, { present: r || a, children: /* @__PURE__ */ l(
    o0,
    {
      "data-state": a ? "visible" : "hidden",
      ...n,
      ref: t
    }
  ) });
}), ED = u.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Mt(dr, e.__scopeScrollArea), a = e.orientation === "horizontal", i = Ss(() => c("SCROLL_END"), 100), [s, c] = CD("hidden", {
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
      const d = window.setTimeout(() => c("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(d);
    }
  }, [s, o.scrollHideDelay, c]), u.useEffect(() => {
    const d = o.viewport, f = a ? "scrollLeft" : "scrollTop";
    if (d) {
      let p = d[f];
      const m = () => {
        const h = d[f];
        p !== h && (c("SCROLL"), i()), p = h;
      };
      return d.addEventListener("scroll", m), () => d.removeEventListener("scroll", m);
    }
  }, [o.viewport, a, c, i]), /* @__PURE__ */ l(Be, { present: r || s !== "hidden", children: /* @__PURE__ */ l(
    bu,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...n,
      ref: t,
      onPointerEnter: H(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: H(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), o0 = u.forwardRef((e, t) => {
  const r = Mt(dr, e.__scopeScrollArea), { forceMount: n, ...o } = e, [a, i] = u.useState(!1), s = e.orientation === "horizontal", c = Ss(() => {
    if (r.viewport) {
      const d = r.viewport.offsetWidth < r.viewport.scrollWidth, f = r.viewport.offsetHeight < r.viewport.scrollHeight;
      i(s ? d : f);
    }
  }, 10);
  return Un(r.viewport, c), Un(r.content, c), /* @__PURE__ */ l(Be, { present: n || a, children: /* @__PURE__ */ l(
    bu,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), bu = u.forwardRef((e, t) => {
  const { orientation: r = "vertical", ...n } = e, o = Mt(dr, e.__scopeScrollArea), a = u.useRef(null), i = u.useRef(0), [s, c] = u.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), d = c0(s.viewport, s.content), f = {
    ...n,
    sizes: s,
    onSizesChange: c,
    hasThumb: d > 0 && d < 1,
    onThumbChange: (m) => a.current = m,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (m) => i.current = m
  };
  function p(m, h) {
    return AD(m, i.current, s, h);
  }
  return r === "horizontal" ? /* @__PURE__ */ l(
    PD,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollLeft, h = tp(m, s, o.dir);
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
  ) : r === "vertical" ? /* @__PURE__ */ l(
    _D,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollTop, h = tp(m, s);
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
}), PD = u.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: n, ...o } = e, a = Mt(dr, e.__scopeScrollArea), [i, s] = u.useState(), c = u.useRef(null), d = ae(t, c, a.onScrollbarXChange);
  return u.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ l(
    i0,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: d,
      sizes: r,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Cs(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
      onDragScroll: (f) => e.onDragScroll(f.x),
      onWheelScroll: (f, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollLeft + f.deltaX;
          e.onWheelScroll(m), u0(m, p) && f.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && n({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: Ni(i.paddingLeft),
            paddingEnd: Ni(i.paddingRight)
          }
        });
      }
    }
  );
}), _D = u.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: n, ...o } = e, a = Mt(dr, e.__scopeScrollArea), [i, s] = u.useState(), c = u.useRef(null), d = ae(t, c, a.onScrollbarYChange);
  return u.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ l(
    i0,
    {
      "data-orientation": "vertical",
      ...o,
      ref: d,
      sizes: r,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": Cs(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
      onDragScroll: (f) => e.onDragScroll(f.y),
      onWheelScroll: (f, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollTop + f.deltaY;
          e.onWheelScroll(m), u0(m, p) && f.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && i && n({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: Ni(i.paddingTop),
            paddingEnd: Ni(i.paddingBottom)
          }
        });
      }
    }
  );
}), [RD, a0] = e0(dr), i0 = u.forwardRef((e, t) => {
  const {
    __scopeScrollArea: r,
    sizes: n,
    hasThumb: o,
    onThumbChange: a,
    onThumbPointerUp: i,
    onThumbPointerDown: s,
    onThumbPositionChange: c,
    onDragScroll: d,
    onWheelScroll: f,
    onResize: p,
    ...m
  } = e, h = Mt(dr, r), [v, g] = u.useState(null), b = ae(t, (R) => g(R)), y = u.useRef(null), w = u.useRef(""), x = h.viewport, C = n.content - n.viewport, N = Se(f), P = Se(c), E = Ss(p, 10);
  function A(R) {
    if (y.current) {
      const B = R.clientX - y.current.left, M = R.clientY - y.current.top;
      d({ x: B, y: M });
    }
  }
  return u.useEffect(() => {
    const R = (B) => {
      const M = B.target;
      (v == null ? void 0 : v.contains(M)) && N(B, C);
    };
    return document.addEventListener("wheel", R, { passive: !1 }), () => document.removeEventListener("wheel", R, { passive: !1 });
  }, [x, v, C, N]), u.useEffect(P, [n, P]), Un(v, E), Un(h.content, E), /* @__PURE__ */ l(
    RD,
    {
      scope: r,
      scrollbar: v,
      hasThumb: o,
      onThumbChange: Se(a),
      onThumbPointerUp: Se(i),
      onThumbPositionChange: P,
      onThumbPointerDown: Se(s),
      children: /* @__PURE__ */ l(
        Q.div,
        {
          ...m,
          ref: b,
          style: { position: "absolute", ...m.style },
          onPointerDown: H(e.onPointerDown, (R) => {
            R.button === 0 && (R.target.setPointerCapture(R.pointerId), y.current = v.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), A(R));
          }),
          onPointerMove: H(e.onPointerMove, A),
          onPointerUp: H(e.onPointerUp, (R) => {
            const B = R.target;
            B.hasPointerCapture(R.pointerId) && B.releasePointerCapture(R.pointerId), document.body.style.webkitUserSelect = w.current, h.viewport && (h.viewport.style.scrollBehavior = ""), y.current = null;
          })
        }
      )
    }
  );
}), Si = "ScrollAreaThumb", s0 = u.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = a0(Si, e.__scopeScrollArea);
    return /* @__PURE__ */ l(Be, { present: r || o.hasThumb, children: /* @__PURE__ */ l(TD, { ref: t, ...n }) });
  }
), TD = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, style: n, ...o } = e, a = Mt(Si, r), i = a0(Si, r), { onThumbPositionChange: s } = i, c = ae(
      t,
      (p) => i.onThumbChange(p)
    ), d = u.useRef(void 0), f = Ss(() => {
      d.current && (d.current(), d.current = void 0);
    }, 100);
    return u.useEffect(() => {
      const p = a.viewport;
      if (p) {
        const m = () => {
          if (f(), !d.current) {
            const h = kD(p, s);
            d.current = h, s();
          }
        };
        return s(), p.addEventListener("scroll", m), () => p.removeEventListener("scroll", m);
      }
    }, [a.viewport, f, s]), /* @__PURE__ */ l(
      Q.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...n
        },
        onPointerDownCapture: H(e.onPointerDownCapture, (p) => {
          const h = p.target.getBoundingClientRect(), v = p.clientX - h.left, g = p.clientY - h.top;
          i.onThumbPointerDown({ x: v, y: g });
        }),
        onPointerUp: H(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
s0.displayName = Si;
var yu = "ScrollAreaCorner", l0 = u.forwardRef(
  (e, t) => {
    const r = Mt(yu, e.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && n ? /* @__PURE__ */ l(MD, { ...e, ref: t }) : null;
  }
);
l0.displayName = yu;
var MD = u.forwardRef((e, t) => {
  const { __scopeScrollArea: r, ...n } = e, o = Mt(yu, r), [a, i] = u.useState(0), [s, c] = u.useState(0), d = !!(a && s);
  return Un(o.scrollbarX, () => {
    var p;
    const f = ((p = o.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
    o.onCornerHeightChange(f), c(f);
  }), Un(o.scrollbarY, () => {
    var p;
    const f = ((p = o.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
    o.onCornerWidthChange(f), i(f);
  }), d ? /* @__PURE__ */ l(
    Q.div,
    {
      ...n,
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
function Ni(e) {
  return e ? parseInt(e, 10) : 0;
}
function c0(e, t) {
  const r = e / t;
  return isNaN(r) ? 0 : r;
}
function Cs(e) {
  const t = c0(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function AD(e, t, r, n = "ltr") {
  const o = Cs(r), a = o / 2, i = t || a, s = o - i, c = r.scrollbar.paddingStart + i, d = r.scrollbar.size - r.scrollbar.paddingEnd - s, f = r.content - r.viewport, p = n === "ltr" ? [0, f] : [f * -1, 0];
  return d0([c, d], p)(e);
}
function tp(e, t, r = "ltr") {
  const n = Cs(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, i = t.content - t.viewport, s = a - n, c = r === "ltr" ? [0, i] : [i * -1, 0], d = zo(e, c);
  return d0([0, i], [0, s])(d);
}
function d0(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function u0(e, t) {
  return e > 0 && e < t;
}
var kD = (e, t = () => {
}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop }, n = 0;
  return function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, i = r.left !== a.left, s = r.top !== a.top;
    (i || s) && t(), r = a, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
};
function Ss(e, t) {
  const r = Se(e), n = u.useRef(0);
  return u.useEffect(() => () => window.clearTimeout(n.current), []), u.useCallback(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, t);
  }, [r, t]);
}
function Un(e, t) {
  const r = Se(t);
  ze(() => {
    let n = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(n), n = window.requestAnimationFrame(r);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(n), o.unobserve(e);
      };
    }
  }, [e, r]);
}
var f0 = t0, DD = n0, OD = l0;
const ID = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ S(f0, { ref: n, className: T("relative overflow-hidden", e), ...r, children: [
  /* @__PURE__ */ l(DD, { className: "h-full w-full rounded-[inherit]", children: t }),
  /* @__PURE__ */ l(p0, {}),
  /* @__PURE__ */ l(OD, {})
] }));
ID.displayName = f0.displayName;
const p0 = u.forwardRef(({ className: e, orientation: t = "vertical", ...r }, n) => /* @__PURE__ */ l(
  vu,
  {
    ref: n,
    orientation: t,
    className: T(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...r,
    children: /* @__PURE__ */ l(s0, { className: "relative flex-1 rounded-full bg-border" })
  }
));
p0.displayName = vu.displayName;
const Ns = Cr(null);
Ns.displayName = "PanelGroupContext";
const Ye = {
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
}, wu = 10, rn = Vi, rp = u.useId, $D = typeof rp == "function" ? rp : () => null;
let LD = 0;
function xu(e = null) {
  const t = $D(), r = qe(e || t || null);
  return r.current === null && (r.current = "" + LD++), e ?? r.current;
}
function m0({
  children: e,
  className: t = "",
  collapsedSize: r,
  collapsible: n,
  defaultSize: o,
  forwardedRef: a,
  id: i,
  maxSize: s,
  minSize: c,
  onCollapse: d,
  onExpand: f,
  onResize: p,
  order: m,
  style: h,
  tagName: v = "div",
  ...g
}) {
  const b = ir(Ns);
  if (b === null)
    throw Error("Panel components must be rendered within a PanelGroup container");
  const {
    collapsePanel: y,
    expandPanel: w,
    getPanelSize: x,
    getPanelStyle: C,
    groupId: N,
    isPanelCollapsed: P,
    reevaluatePanelConstraints: E,
    registerPanel: A,
    resizePanel: R,
    unregisterPanel: B
  } = b, M = xu(i), $ = qe({
    callbacks: {
      onCollapse: d,
      onExpand: f,
      onResize: p
    },
    constraints: {
      collapsedSize: r,
      collapsible: n,
      defaultSize: o,
      maxSize: s,
      minSize: c
    },
    id: M,
    idIsFromProps: i !== void 0,
    order: m
  });
  qe({
    didLogMissingDefaultSizeWarning: !1
  }), rn(() => {
    const {
      callbacks: L,
      constraints: K
    } = $.current, V = {
      ...K
    };
    $.current.id = M, $.current.idIsFromProps = i !== void 0, $.current.order = m, L.onCollapse = d, L.onExpand = f, L.onResize = p, K.collapsedSize = r, K.collapsible = n, K.defaultSize = o, K.maxSize = s, K.minSize = c, (V.collapsedSize !== K.collapsedSize || V.collapsible !== K.collapsible || V.maxSize !== K.maxSize || V.minSize !== K.minSize) && E($.current, V);
  }), rn(() => {
    const L = $.current;
    return A(L), () => {
      B(L);
    };
  }, [m, M, A, B]), Xc(a, () => ({
    collapse: () => {
      y($.current);
    },
    expand: (L) => {
      w($.current, L);
    },
    getId() {
      return M;
    },
    getSize() {
      return x($.current);
    },
    isCollapsed() {
      return P($.current);
    },
    isExpanded() {
      return !P($.current);
    },
    resize: (L) => {
      R($.current, L);
    }
  }), [y, w, x, P, M, R]);
  const U = C($.current, o);
  return br(v, {
    ...g,
    children: e,
    className: t,
    id: M,
    style: {
      ...U,
      ...h
    },
    // CSS selectors
    [Ye.groupId]: N,
    [Ye.panel]: "",
    [Ye.panelCollapsible]: n || void 0,
    [Ye.panelId]: M,
    [Ye.panelSize]: parseFloat("" + U.flexGrow).toFixed(1)
  });
}
const h0 = mn((e, t) => br(m0, {
  ...e,
  forwardedRef: t
}));
m0.displayName = "Panel";
h0.displayName = "forwardRef(Panel)";
let yc = null, ai = -1, $r = null;
function FD(e, t) {
  if (t) {
    const r = (t & w0) !== 0, n = (t & x0) !== 0, o = (t & C0) !== 0, a = (t & S0) !== 0;
    if (r)
      return o ? "se-resize" : a ? "ne-resize" : "e-resize";
    if (n)
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
function zD() {
  $r !== null && (document.head.removeChild($r), yc = null, $r = null, ai = -1);
}
function ul(e, t) {
  var r, n;
  const o = FD(e, t);
  if (yc !== o) {
    if (yc = o, $r === null && ($r = document.createElement("style"), document.head.appendChild($r)), ai >= 0) {
      var a;
      (a = $r.sheet) === null || a === void 0 || a.removeRule(ai);
    }
    ai = (r = (n = $r.sheet) === null || n === void 0 ? void 0 : n.insertRule(`*{cursor: ${o} !important;}`)) !== null && r !== void 0 ? r : -1;
  }
}
function g0(e) {
  return e.type === "keydown";
}
function v0(e) {
  return e.type.startsWith("pointer");
}
function b0(e) {
  return e.type.startsWith("mouse");
}
function Es(e) {
  if (v0(e)) {
    if (e.isPrimary)
      return {
        x: e.clientX,
        y: e.clientY
      };
  } else if (b0(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  return {
    x: 1 / 0,
    y: 1 / 0
  };
}
function BD() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
function jD(e, t, r) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function HD(e, t) {
  if (e === t) throw new Error("Cannot compare node with itself");
  const r = {
    a: ap(e),
    b: ap(t)
  };
  let n;
  for (; r.a.at(-1) === r.b.at(-1); )
    e = r.a.pop(), t = r.b.pop(), n = e;
  ge(n, "Stacking order can only be calculated for elements with a common ancestor");
  const o = {
    a: op(np(r.a)),
    b: op(np(r.b))
  };
  if (o.a === o.b) {
    const a = n.childNodes, i = {
      a: r.a.at(-1),
      b: r.b.at(-1)
    };
    let s = a.length;
    for (; s--; ) {
      const c = a[s];
      if (c === i.a) return 1;
      if (c === i.b) return -1;
    }
  }
  return Math.sign(o.a - o.b);
}
const WD = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function VD(e) {
  var t;
  const r = getComputedStyle((t = y0(e)) !== null && t !== void 0 ? t : e).display;
  return r === "flex" || r === "inline-flex";
}
function GD(e) {
  const t = getComputedStyle(e);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || VD(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || WD.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function np(e) {
  let t = e.length;
  for (; t--; ) {
    const r = e[t];
    if (ge(r, "Missing node"), GD(r)) return r;
  }
  return null;
}
function op(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function ap(e) {
  const t = [];
  for (; e; )
    t.push(e), e = y0(e);
  return t;
}
function y0(e) {
  const {
    parentNode: t
  } = e;
  return t && t instanceof ShadowRoot ? t.host : t;
}
const w0 = 1, x0 = 2, C0 = 4, S0 = 8, UD = BD() === "coarse";
let zt = [], zn = !1, tn = /* @__PURE__ */ new Map(), Ps = /* @__PURE__ */ new Map();
const Go = /* @__PURE__ */ new Set();
function KD(e, t, r, n, o) {
  var a;
  const {
    ownerDocument: i
  } = t, s = {
    direction: r,
    element: t,
    hitAreaMargins: n,
    setResizeHandlerState: o
  }, c = (a = tn.get(i)) !== null && a !== void 0 ? a : 0;
  return tn.set(i, c + 1), Go.add(s), Ei(), function() {
    var f;
    Ps.delete(e), Go.delete(s);
    const p = (f = tn.get(i)) !== null && f !== void 0 ? f : 1;
    if (tn.set(i, p - 1), Ei(), p === 1 && tn.delete(i), zt.includes(s)) {
      const m = zt.indexOf(s);
      m >= 0 && zt.splice(m, 1), Su(), o("up", !0, null);
    }
  };
}
function YD(e) {
  const {
    target: t
  } = e, {
    x: r,
    y: n
  } = Es(e);
  zn = !0, Cu({
    target: t,
    x: r,
    y: n
  }), Ei(), zt.length > 0 && (Pi("down", e), e.preventDefault(), N0(t) || e.stopImmediatePropagation());
}
function fl(e) {
  const {
    x: t,
    y: r
  } = Es(e);
  if (zn && e.buttons === 0 && (zn = !1, Pi("up", e)), !zn) {
    const {
      target: n
    } = e;
    Cu({
      target: n,
      x: t,
      y: r
    });
  }
  Pi("move", e), Su(), zt.length > 0 && e.preventDefault();
}
function pl(e) {
  const {
    target: t
  } = e, {
    x: r,
    y: n
  } = Es(e);
  Ps.clear(), zn = !1, zt.length > 0 && (e.preventDefault(), N0(t) || e.stopImmediatePropagation()), Pi("up", e), Cu({
    target: t,
    x: r,
    y: n
  }), Su(), Ei();
}
function N0(e) {
  let t = e;
  for (; t; ) {
    if (t.hasAttribute(Ye.resizeHandle))
      return !0;
    t = t.parentElement;
  }
  return !1;
}
function Cu({
  target: e,
  x: t,
  y: r
}) {
  zt.splice(0);
  let n = null;
  (e instanceof HTMLElement || e instanceof SVGElement) && (n = e), Go.forEach((o) => {
    const {
      element: a,
      hitAreaMargins: i
    } = o, s = a.getBoundingClientRect(), {
      bottom: c,
      left: d,
      right: f,
      top: p
    } = s, m = UD ? i.coarse : i.fine;
    if (t >= d - m && t <= f + m && r >= p - m && r <= c + m) {
      if (n !== null && document.contains(n) && a !== n && !a.contains(n) && !n.contains(a) && // Calculating stacking order has a cost, so we should avoid it if possible
      // That is why we only check potentially intersecting handles,
      // and why we skip if the event target is within the handle's DOM
      HD(n, a) > 0) {
        let v = n, g = !1;
        for (; v && !v.contains(a); ) {
          if (jD(v.getBoundingClientRect(), s)) {
            g = !0;
            break;
          }
          v = v.parentElement;
        }
        if (g)
          return;
      }
      zt.push(o);
    }
  });
}
function ml(e, t) {
  Ps.set(e, t);
}
function Su() {
  let e = !1, t = !1;
  zt.forEach((n) => {
    const {
      direction: o
    } = n;
    o === "horizontal" ? e = !0 : t = !0;
  });
  let r = 0;
  Ps.forEach((n) => {
    r |= n;
  }), e && t ? ul("intersection", r) : e ? ul("horizontal", r) : t ? ul("vertical", r) : zD();
}
let hl = new AbortController();
function Ei() {
  hl.abort(), hl = new AbortController();
  const e = {
    capture: !0,
    signal: hl.signal
  };
  Go.size && (zn ? (zt.length > 0 && tn.forEach((t, r) => {
    const {
      body: n
    } = r;
    t > 0 && (n.addEventListener("contextmenu", pl, e), n.addEventListener("pointerleave", fl, e), n.addEventListener("pointermove", fl, e));
  }), window.addEventListener("pointerup", pl, e), window.addEventListener("pointercancel", pl, e)) : tn.forEach((t, r) => {
    const {
      body: n
    } = r;
    t > 0 && (n.addEventListener("pointerdown", YD, e), n.addEventListener("pointermove", fl, e));
  }));
}
function Pi(e, t) {
  Go.forEach((r) => {
    const {
      setResizeHandlerState: n
    } = r, o = zt.includes(r);
    n(e, o, t);
  });
}
function qD() {
  const [e, t] = me(0);
  return it(() => t((r) => r + 1), []);
}
function ge(e, t) {
  if (!e)
    throw console.error(t), Error(t);
}
function dn(e, t, r = wu) {
  return e.toFixed(r) === t.toFixed(r) ? 0 : e > t ? 1 : -1;
}
function gr(e, t, r = wu) {
  return dn(e, t, r) === 0;
}
function wt(e, t, r) {
  return dn(e, t, r) === 0;
}
function XD(e, t, r) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++) {
    const o = e[n], a = t[n];
    if (!wt(o, a, r))
      return !1;
  }
  return !0;
}
function In({
  panelConstraints: e,
  panelIndex: t,
  size: r
}) {
  const n = e[t];
  ge(n != null, `Panel constraints not found for index ${t}`);
  let {
    collapsedSize: o = 0,
    collapsible: a,
    maxSize: i = 100,
    minSize: s = 0
  } = n;
  if (dn(r, s) < 0)
    if (a) {
      const c = (o + s) / 2;
      dn(r, c) < 0 ? r = o : r = s;
    } else
      r = s;
  return r = Math.min(i, r), r = parseFloat(r.toFixed(wu)), r;
}
function Do({
  delta: e,
  initialLayout: t,
  panelConstraints: r,
  pivotIndices: n,
  prevLayout: o,
  trigger: a
}) {
  if (wt(e, 0))
    return t;
  const i = [...t], [s, c] = n;
  ge(s != null, "Invalid first pivot index"), ge(c != null, "Invalid second pivot index");
  let d = 0;
  if (a === "keyboard") {
    {
      const p = e < 0 ? c : s, m = r[p];
      ge(m, `Panel constraints not found for index ${p}`);
      const {
        collapsedSize: h = 0,
        collapsible: v,
        minSize: g = 0
      } = m;
      if (v) {
        const b = t[p];
        if (ge(b != null, `Previous layout not found for panel index ${p}`), wt(b, h)) {
          const y = g - b;
          dn(y, Math.abs(e)) > 0 && (e = e < 0 ? 0 - y : y);
        }
      }
    }
    {
      const p = e < 0 ? s : c, m = r[p];
      ge(m, `No panel constraints found for index ${p}`);
      const {
        collapsedSize: h = 0,
        collapsible: v,
        minSize: g = 0
      } = m;
      if (v) {
        const b = t[p];
        if (ge(b != null, `Previous layout not found for panel index ${p}`), wt(b, g)) {
          const y = b - h;
          dn(y, Math.abs(e)) > 0 && (e = e < 0 ? 0 - y : y);
        }
      }
    }
  }
  {
    const p = e < 0 ? 1 : -1;
    let m = e < 0 ? c : s, h = 0;
    for (; ; ) {
      const g = t[m];
      ge(g != null, `Previous layout not found for panel index ${m}`);
      const y = In({
        panelConstraints: r,
        panelIndex: m,
        size: 100
      }) - g;
      if (h += y, m += p, m < 0 || m >= r.length)
        break;
    }
    const v = Math.min(Math.abs(e), Math.abs(h));
    e = e < 0 ? 0 - v : v;
  }
  {
    let m = e < 0 ? s : c;
    for (; m >= 0 && m < r.length; ) {
      const h = Math.abs(e) - Math.abs(d), v = t[m];
      ge(v != null, `Previous layout not found for panel index ${m}`);
      const g = v - h, b = In({
        panelConstraints: r,
        panelIndex: m,
        size: g
      });
      if (!wt(v, b) && (d += v - b, i[m] = b, d.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      e < 0 ? m-- : m++;
    }
  }
  if (XD(o, i))
    return o;
  {
    const p = e < 0 ? c : s, m = t[p];
    ge(m != null, `Previous layout not found for panel index ${p}`);
    const h = m + d, v = In({
      panelConstraints: r,
      panelIndex: p,
      size: h
    });
    if (i[p] = v, !wt(v, h)) {
      let g = h - v, y = e < 0 ? c : s;
      for (; y >= 0 && y < r.length; ) {
        const w = i[y];
        ge(w != null, `Previous layout not found for panel index ${y}`);
        const x = w + g, C = In({
          panelConstraints: r,
          panelIndex: y,
          size: x
        });
        if (wt(w, C) || (g -= C - w, i[y] = C), wt(g, 0))
          break;
        e > 0 ? y-- : y++;
      }
    }
  }
  const f = i.reduce((p, m) => m + p, 0);
  return wt(f, 100) ? i : o;
}
function ZD({
  layout: e,
  panelsArray: t,
  pivotIndices: r
}) {
  let n = 0, o = 100, a = 0, i = 0;
  const s = r[0];
  ge(s != null, "No pivot index found"), t.forEach((p, m) => {
    const {
      constraints: h
    } = p, {
      maxSize: v = 100,
      minSize: g = 0
    } = h;
    m === s ? (n = g, o = v) : (a += g, i += v);
  });
  const c = Math.min(o, 100 - a), d = Math.max(n, 100 - i), f = e[s];
  return {
    valueMax: c,
    valueMin: d,
    valueNow: f
  };
}
function Uo(e, t = document) {
  return Array.from(t.querySelectorAll(`[${Ye.resizeHandleId}][data-panel-group-id="${e}"]`));
}
function E0(e, t, r = document) {
  const o = Uo(e, r).findIndex((a) => a.getAttribute(Ye.resizeHandleId) === t);
  return o ?? null;
}
function P0(e, t, r) {
  const n = E0(e, t, r);
  return n != null ? [n, n + 1] : [-1, -1];
}
function _0(e, t = document) {
  var r;
  if (t instanceof HTMLElement && (t == null || (r = t.dataset) === null || r === void 0 ? void 0 : r.panelGroupId) == e)
    return t;
  const n = t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);
  return n || null;
}
function _s(e, t = document) {
  const r = t.querySelector(`[${Ye.resizeHandleId}="${e}"]`);
  return r || null;
}
function QD(e, t, r, n = document) {
  var o, a, i, s;
  const c = _s(t, n), d = Uo(e, n), f = c ? d.indexOf(c) : -1, p = (o = (a = r[f]) === null || a === void 0 ? void 0 : a.id) !== null && o !== void 0 ? o : null, m = (i = (s = r[f + 1]) === null || s === void 0 ? void 0 : s.id) !== null && i !== void 0 ? i : null;
  return [p, m];
}
function JD({
  committedValuesRef: e,
  eagerValuesRef: t,
  groupId: r,
  layout: n,
  panelDataArray: o,
  panelGroupElement: a,
  setLayout: i
}) {
  qe({
    didWarnAboutMissingResizeHandle: !1
  }), rn(() => {
    if (!a)
      return;
    const s = Uo(r, a);
    for (let c = 0; c < o.length - 1; c++) {
      const {
        valueMax: d,
        valueMin: f,
        valueNow: p
      } = ZD({
        layout: n,
        panelsArray: o,
        pivotIndices: [c, c + 1]
      }), m = s[c];
      if (m != null) {
        const h = o[c];
        ge(h, `No panel data found for index "${c}"`), m.setAttribute("aria-controls", h.id), m.setAttribute("aria-valuemax", "" + Math.round(d)), m.setAttribute("aria-valuemin", "" + Math.round(f)), m.setAttribute("aria-valuenow", p != null ? "" + Math.round(p) : "");
      }
    }
    return () => {
      s.forEach((c, d) => {
        c.removeAttribute("aria-controls"), c.removeAttribute("aria-valuemax"), c.removeAttribute("aria-valuemin"), c.removeAttribute("aria-valuenow");
      });
    };
  }, [r, n, o, a]), nt(() => {
    if (!a)
      return;
    const s = t.current;
    ge(s, "Eager values not found");
    const {
      panelDataArray: c
    } = s, d = _0(r, a);
    ge(d != null, `No group found for id "${r}"`);
    const f = Uo(r, a);
    ge(f, `No resize handles found for group id "${r}"`);
    const p = f.map((m) => {
      const h = m.getAttribute(Ye.resizeHandleId);
      ge(h, "Resize handle element has no handle id attribute");
      const [v, g] = QD(r, h, c, a);
      if (v == null || g == null)
        return () => {
        };
      const b = (y) => {
        if (!y.defaultPrevented)
          switch (y.key) {
            case "Enter": {
              y.preventDefault();
              const w = c.findIndex((x) => x.id === v);
              if (w >= 0) {
                const x = c[w];
                ge(x, `No panel data found for index ${w}`);
                const C = n[w], {
                  collapsedSize: N = 0,
                  collapsible: P,
                  minSize: E = 0
                } = x.constraints;
                if (C != null && P) {
                  const A = Do({
                    delta: wt(C, N) ? E - N : N - C,
                    initialLayout: n,
                    panelConstraints: c.map((R) => R.constraints),
                    pivotIndices: P0(r, h, a),
                    prevLayout: n,
                    trigger: "keyboard"
                  });
                  n !== A && i(A);
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
  }, [a, e, t, r, n, o, i]);
}
function ip(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function R0(e, t) {
  const r = e === "horizontal", {
    x: n,
    y: o
  } = Es(t);
  return r ? n : o;
}
function eO(e, t, r, n, o) {
  const a = r === "horizontal", i = _s(t, o);
  ge(i, `No resize handle element found for id "${t}"`);
  const s = i.getAttribute(Ye.groupId);
  ge(s, "Resize handle element has no group id attribute");
  let {
    initialCursorPosition: c
  } = n;
  const d = R0(r, e), f = _0(s, o);
  ge(f, `No group element found for id "${s}"`);
  const p = f.getBoundingClientRect(), m = a ? p.width : p.height;
  return (d - c) / m * 100;
}
function tO(e, t, r, n, o, a) {
  if (g0(e)) {
    const i = r === "horizontal";
    let s = 0;
    e.shiftKey ? s = 100 : o != null ? s = o : s = 10;
    let c = 0;
    switch (e.key) {
      case "ArrowDown":
        c = i ? 0 : s;
        break;
      case "ArrowLeft":
        c = i ? -s : 0;
        break;
      case "ArrowRight":
        c = i ? s : 0;
        break;
      case "ArrowUp":
        c = i ? 0 : -s;
        break;
      case "End":
        c = 100;
        break;
      case "Home":
        c = -100;
        break;
    }
    return c;
  } else
    return n == null ? 0 : eO(e, t, r, n, a);
}
function rO({
  panelDataArray: e
}) {
  const t = Array(e.length), r = e.map((a) => a.constraints);
  let n = 0, o = 100;
  for (let a = 0; a < e.length; a++) {
    const i = r[a];
    ge(i, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: s
    } = i;
    s != null && (n++, t[a] = s, o -= s);
  }
  for (let a = 0; a < e.length; a++) {
    const i = r[a];
    ge(i, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: s
    } = i;
    if (s != null)
      continue;
    const c = e.length - n, d = o / c;
    n++, t[a] = d, o -= d;
  }
  return t;
}
function Tn(e, t, r) {
  t.forEach((n, o) => {
    const a = e[o];
    ge(a, `Panel data not found for index ${o}`);
    const {
      callbacks: i,
      constraints: s,
      id: c
    } = a, {
      collapsedSize: d = 0,
      collapsible: f
    } = s, p = r[c];
    if (p == null || n !== p) {
      r[c] = n;
      const {
        onCollapse: m,
        onExpand: h,
        onResize: v
      } = i;
      v && v(n, p), f && (m || h) && (h && (p == null || gr(p, d)) && !gr(n, d) && h(), m && (p == null || !gr(p, d)) && gr(n, d) && m());
    }
  });
}
function Ha(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++)
    if (e[r] != t[r])
      return !1;
  return !0;
}
function nO({
  defaultSize: e,
  dragState: t,
  layout: r,
  panelData: n,
  panelIndex: o,
  precision: a = 3
}) {
  const i = r[o];
  let s;
  return i == null ? s = e != null ? e.toPrecision(a) : "1" : n.length === 1 ? s = "1" : s = i.toPrecision(a), {
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
function oO(e, t = 10) {
  let r = null;
  return (...o) => {
    r !== null && clearTimeout(r), r = setTimeout(() => {
      e(...o);
    }, t);
  };
}
function sp(e) {
  try {
    if (typeof localStorage < "u")
      e.getItem = (t) => localStorage.getItem(t), e.setItem = (t, r) => {
        localStorage.setItem(t, r);
      };
    else
      throw new Error("localStorage not supported in this environment");
  } catch (t) {
    console.error(t), e.getItem = () => null, e.setItem = () => {
    };
  }
}
function T0(e) {
  return `react-resizable-panels:${e}`;
}
function M0(e) {
  return e.map((t) => {
    const {
      constraints: r,
      id: n,
      idIsFromProps: o,
      order: a
    } = t;
    return o ? n : a ? `${a}:${JSON.stringify(r)}` : JSON.stringify(r);
  }).sort((t, r) => t.localeCompare(r)).join(",");
}
function A0(e, t) {
  try {
    const r = T0(e), n = t.getItem(r);
    if (n) {
      const o = JSON.parse(n);
      if (typeof o == "object" && o != null)
        return o;
    }
  } catch {
  }
  return null;
}
function aO(e, t, r) {
  var n, o;
  const a = (n = A0(e, r)) !== null && n !== void 0 ? n : {}, i = M0(t);
  return (o = a[i]) !== null && o !== void 0 ? o : null;
}
function iO(e, t, r, n, o) {
  var a;
  const i = T0(e), s = M0(t), c = (a = A0(e, o)) !== null && a !== void 0 ? a : {};
  c[s] = {
    expandToSizes: Object.fromEntries(r.entries()),
    layout: n
  };
  try {
    o.setItem(i, JSON.stringify(c));
  } catch (d) {
    console.error(d);
  }
}
function lp({
  layout: e,
  panelConstraints: t
}) {
  const r = [...e], n = r.reduce((a, i) => a + i, 0);
  if (r.length !== t.length)
    throw Error(`Invalid ${t.length} panel layout: ${r.map((a) => `${a}%`).join(", ")}`);
  if (!wt(n, 100) && r.length > 0)
    for (let a = 0; a < t.length; a++) {
      const i = r[a];
      ge(i != null, `No layout data found for index ${a}`);
      const s = 100 / n * i;
      r[a] = s;
    }
  let o = 0;
  for (let a = 0; a < t.length; a++) {
    const i = r[a];
    ge(i != null, `No layout data found for index ${a}`);
    const s = In({
      panelConstraints: t,
      panelIndex: a,
      size: i
    });
    i != s && (o += i - s, r[a] = s);
  }
  if (!wt(o, 0))
    for (let a = 0; a < t.length; a++) {
      const i = r[a];
      ge(i != null, `No layout data found for index ${a}`);
      const s = i + o, c = In({
        panelConstraints: t,
        panelIndex: a,
        size: s
      });
      if (i !== c && (o -= c - i, r[a] = c, wt(o, 0)))
        break;
    }
  return r;
}
const sO = 100, Oo = {
  getItem: (e) => (sp(Oo), Oo.getItem(e)),
  setItem: (e, t) => {
    sp(Oo), Oo.setItem(e, t);
  }
}, cp = {};
function k0({
  autoSaveId: e = null,
  children: t,
  className: r = "",
  direction: n,
  forwardedRef: o,
  id: a = null,
  onLayout: i = null,
  keyboardResizeBy: s = null,
  storage: c = Oo,
  style: d,
  tagName: f = "div",
  ...p
}) {
  const m = xu(a), h = qe(null), [v, g] = me(null), [b, y] = me([]), w = qD(), x = qe({}), C = qe(/* @__PURE__ */ new Map()), N = qe(0), P = qe({
    autoSaveId: e,
    direction: n,
    dragState: v,
    id: m,
    keyboardResizeBy: s,
    onLayout: i,
    storage: c
  }), E = qe({
    layout: b,
    panelDataArray: [],
    panelDataArrayChanged: !1
  });
  qe({
    didLogIdAndOrderWarning: !1,
    didLogPanelConstraintsWarning: !1,
    prevPanelIds: []
  }), Xc(o, () => ({
    getId: () => P.current.id,
    getLayout: () => {
      const {
        layout: D
      } = E.current;
      return D;
    },
    setLayout: (D) => {
      const {
        onLayout: W
      } = P.current, {
        layout: G,
        panelDataArray: Z
      } = E.current, k = lp({
        layout: D,
        panelConstraints: Z.map((Y) => Y.constraints)
      });
      ip(G, k) || (y(k), E.current.layout = k, W && W(k), Tn(Z, k, x.current));
    }
  }), []), rn(() => {
    P.current.autoSaveId = e, P.current.direction = n, P.current.dragState = v, P.current.id = m, P.current.onLayout = i, P.current.storage = c;
  }), JD({
    committedValuesRef: P,
    eagerValuesRef: E,
    groupId: m,
    layout: b,
    panelDataArray: E.current.panelDataArray,
    setLayout: y,
    panelGroupElement: h.current
  }), nt(() => {
    const {
      panelDataArray: D
    } = E.current;
    if (e) {
      if (b.length === 0 || b.length !== D.length)
        return;
      let W = cp[e];
      W == null && (W = oO(iO, sO), cp[e] = W);
      const G = [...D], Z = new Map(C.current);
      W(e, G, Z, b, c);
    }
  }, [e, b, c]), nt(() => {
  });
  const A = it((D) => {
    const {
      onLayout: W
    } = P.current, {
      layout: G,
      panelDataArray: Z
    } = E.current;
    if (D.constraints.collapsible) {
      const k = Z.map((ne) => ne.constraints), {
        collapsedSize: Y = 0,
        panelSize: J,
        pivotIndices: re
      } = Zr(Z, D, G);
      if (ge(J != null, `Panel size not found for panel "${D.id}"`), !gr(J, Y)) {
        C.current.set(D.id, J);
        const X = kn(Z, D) === Z.length - 1 ? J - Y : Y - J, q = Do({
          delta: X,
          initialLayout: G,
          panelConstraints: k,
          pivotIndices: re,
          prevLayout: G,
          trigger: "imperative-api"
        });
        Ha(G, q) || (y(q), E.current.layout = q, W && W(q), Tn(Z, q, x.current));
      }
    }
  }, []), R = it((D, W) => {
    const {
      onLayout: G
    } = P.current, {
      layout: Z,
      panelDataArray: k
    } = E.current;
    if (D.constraints.collapsible) {
      const Y = k.map((j) => j.constraints), {
        collapsedSize: J = 0,
        panelSize: re = 0,
        minSize: ne = 0,
        pivotIndices: X
      } = Zr(k, D, Z), q = W ?? ne;
      if (gr(re, J)) {
        const j = C.current.get(D.id), oe = j != null && j >= q ? j : q, ve = kn(k, D) === k.length - 1 ? re - oe : oe - re, fe = Do({
          delta: ve,
          initialLayout: Z,
          panelConstraints: Y,
          pivotIndices: X,
          prevLayout: Z,
          trigger: "imperative-api"
        });
        Ha(Z, fe) || (y(fe), E.current.layout = fe, G && G(fe), Tn(k, fe, x.current));
      }
    }
  }, []), B = it((D) => {
    const {
      layout: W,
      panelDataArray: G
    } = E.current, {
      panelSize: Z
    } = Zr(G, D, W);
    return ge(Z != null, `Panel size not found for panel "${D.id}"`), Z;
  }, []), M = it((D, W) => {
    const {
      panelDataArray: G
    } = E.current, Z = kn(G, D);
    return nO({
      defaultSize: W,
      dragState: v,
      layout: b,
      panelData: G,
      panelIndex: Z
    });
  }, [v, b]), $ = it((D) => {
    const {
      layout: W,
      panelDataArray: G
    } = E.current, {
      collapsedSize: Z = 0,
      collapsible: k,
      panelSize: Y
    } = Zr(G, D, W);
    return ge(Y != null, `Panel size not found for panel "${D.id}"`), k === !0 && gr(Y, Z);
  }, []), U = it((D) => {
    const {
      layout: W,
      panelDataArray: G
    } = E.current, {
      collapsedSize: Z = 0,
      collapsible: k,
      panelSize: Y
    } = Zr(G, D, W);
    return ge(Y != null, `Panel size not found for panel "${D.id}"`), !k || dn(Y, Z) > 0;
  }, []), L = it((D) => {
    const {
      panelDataArray: W
    } = E.current;
    W.push(D), W.sort((G, Z) => {
      const k = G.order, Y = Z.order;
      return k == null && Y == null ? 0 : k == null ? -1 : Y == null ? 1 : k - Y;
    }), E.current.panelDataArrayChanged = !0, w();
  }, [w]);
  rn(() => {
    if (E.current.panelDataArrayChanged) {
      E.current.panelDataArrayChanged = !1;
      const {
        autoSaveId: D,
        onLayout: W,
        storage: G
      } = P.current, {
        layout: Z,
        panelDataArray: k
      } = E.current;
      let Y = null;
      if (D) {
        const re = aO(D, k, G);
        re && (C.current = new Map(Object.entries(re.expandToSizes)), Y = re.layout);
      }
      Y == null && (Y = rO({
        panelDataArray: k
      }));
      const J = lp({
        layout: Y,
        panelConstraints: k.map((re) => re.constraints)
      });
      ip(Z, J) || (y(J), E.current.layout = J, W && W(J), Tn(k, J, x.current));
    }
  }), rn(() => {
    const D = E.current;
    return () => {
      D.layout = [];
    };
  }, []);
  const K = it((D) => {
    let W = !1;
    const G = h.current;
    return G && window.getComputedStyle(G, null).getPropertyValue("direction") === "rtl" && (W = !0), function(k) {
      k.preventDefault();
      const Y = h.current;
      if (!Y)
        return () => null;
      const {
        direction: J,
        dragState: re,
        id: ne,
        keyboardResizeBy: X,
        onLayout: q
      } = P.current, {
        layout: j,
        panelDataArray: oe
      } = E.current, {
        initialLayout: ce
      } = re ?? {}, ve = P0(ne, D, Y);
      let fe = tO(k, D, J, re, X, Y);
      const de = J === "horizontal";
      de && W && (fe = -fe);
      const _e = oe.map((We) => We.constraints), je = Do({
        delta: fe,
        initialLayout: ce ?? j,
        panelConstraints: _e,
        pivotIndices: ve,
        prevLayout: j,
        trigger: g0(k) ? "keyboard" : "mouse-or-touch"
      }), Ae = !Ha(j, je);
      (v0(k) || b0(k)) && N.current != fe && (N.current = fe, !Ae && fe !== 0 ? de ? ml(D, fe < 0 ? w0 : x0) : ml(D, fe < 0 ? C0 : S0) : ml(D, 0)), Ae && (y(je), E.current.layout = je, q && q(je), Tn(oe, je, x.current));
    };
  }, []), V = it((D, W) => {
    const {
      onLayout: G
    } = P.current, {
      layout: Z,
      panelDataArray: k
    } = E.current, Y = k.map((j) => j.constraints), {
      panelSize: J,
      pivotIndices: re
    } = Zr(k, D, Z);
    ge(J != null, `Panel size not found for panel "${D.id}"`);
    const X = kn(k, D) === k.length - 1 ? J - W : W - J, q = Do({
      delta: X,
      initialLayout: Z,
      panelConstraints: Y,
      pivotIndices: re,
      prevLayout: Z,
      trigger: "imperative-api"
    });
    Ha(Z, q) || (y(q), E.current.layout = q, G && G(q), Tn(k, q, x.current));
  }, []), z = it((D, W) => {
    const {
      layout: G,
      panelDataArray: Z
    } = E.current, {
      collapsedSize: k = 0,
      collapsible: Y
    } = W, {
      collapsedSize: J = 0,
      collapsible: re,
      maxSize: ne = 100,
      minSize: X = 0
    } = D.constraints, {
      panelSize: q
    } = Zr(Z, D, G);
    q != null && (Y && re && gr(q, k) ? gr(k, J) || V(D, J) : q < X ? V(D, X) : q > ne && V(D, ne));
  }, [V]), O = it((D, W) => {
    const {
      direction: G
    } = P.current, {
      layout: Z
    } = E.current;
    if (!h.current)
      return;
    const k = _s(D, h.current);
    ge(k, `Drag handle element not found for id "${D}"`);
    const Y = R0(G, W);
    g({
      dragHandleId: D,
      dragHandleRect: k.getBoundingClientRect(),
      initialCursorPosition: Y,
      initialLayout: Z
    });
  }, []), F = it(() => {
    g(null);
  }, []), ee = it((D) => {
    const {
      panelDataArray: W
    } = E.current, G = kn(W, D);
    G >= 0 && (W.splice(G, 1), delete x.current[D.id], E.current.panelDataArrayChanged = !0, w());
  }, [w]), te = qc(() => ({
    collapsePanel: A,
    direction: n,
    dragState: v,
    expandPanel: R,
    getPanelSize: B,
    getPanelStyle: M,
    groupId: m,
    isPanelCollapsed: $,
    isPanelExpanded: U,
    reevaluatePanelConstraints: z,
    registerPanel: L,
    registerResizeHandle: K,
    resizePanel: V,
    startDragging: O,
    stopDragging: F,
    unregisterPanel: ee,
    panelGroupElement: h.current
  }), [A, v, n, R, B, M, m, $, U, z, L, K, V, O, F, ee]), I = {
    display: "flex",
    flexDirection: n === "horizontal" ? "row" : "column",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  };
  return br(Ns.Provider, {
    value: te
  }, br(f, {
    ...p,
    children: t,
    className: r,
    id: a,
    ref: h,
    style: {
      ...I,
      ...d
    },
    // CSS selectors
    [Ye.group]: "",
    [Ye.groupDirection]: n,
    [Ye.groupId]: m
  }));
}
const D0 = mn((e, t) => br(k0, {
  ...e,
  forwardedRef: t
}));
k0.displayName = "PanelGroup";
D0.displayName = "forwardRef(PanelGroup)";
function kn(e, t) {
  return e.findIndex((r) => r === t || r.id === t.id);
}
function Zr(e, t, r) {
  const n = kn(e, t), a = n === e.length - 1 ? [n - 1, n] : [n, n + 1], i = r[n];
  return {
    ...t.constraints,
    panelSize: i,
    pivotIndices: a
  };
}
function lO({
  disabled: e,
  handleId: t,
  resizeHandler: r,
  panelGroupElement: n
}) {
  nt(() => {
    if (e || r == null || n == null)
      return;
    const o = _s(t, n);
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
            i.preventDefault(), r(i);
            break;
          }
          case "F6": {
            i.preventDefault();
            const s = o.getAttribute(Ye.groupId);
            ge(s, `No group element found for id "${s}"`);
            const c = Uo(s, n), d = E0(s, t, n);
            ge(d !== null, `No resize element found for id "${t}"`);
            const f = i.shiftKey ? d > 0 ? d - 1 : c.length - 1 : d + 1 < c.length ? d + 1 : 0;
            c[f].focus();
            break;
          }
        }
    };
    return o.addEventListener("keydown", a), () => {
      o.removeEventListener("keydown", a);
    };
  }, [n, e, t, r]);
}
function O0({
  children: e = null,
  className: t = "",
  disabled: r = !1,
  hitAreaMargins: n,
  id: o,
  onBlur: a,
  onClick: i,
  onDragging: s,
  onFocus: c,
  onPointerDown: d,
  onPointerUp: f,
  style: p = {},
  tabIndex: m = 0,
  tagName: h = "div",
  ...v
}) {
  var g, b;
  const y = qe(null), w = qe({
    onClick: i,
    onDragging: s,
    onPointerDown: d,
    onPointerUp: f
  });
  nt(() => {
    w.current.onClick = i, w.current.onDragging = s, w.current.onPointerDown = d, w.current.onPointerUp = f;
  });
  const x = ir(Ns);
  if (x === null)
    throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
  const {
    direction: C,
    groupId: N,
    registerResizeHandle: P,
    startDragging: E,
    stopDragging: A,
    panelGroupElement: R
  } = x, B = xu(o), [M, $] = me("inactive"), [U, L] = me(!1), [K, V] = me(null), z = qe({
    state: M
  });
  rn(() => {
    z.current.state = M;
  }), nt(() => {
    if (r)
      V(null);
    else {
      const te = P(B);
      V(() => te);
    }
  }, [r, B, P]);
  const O = (g = n == null ? void 0 : n.coarse) !== null && g !== void 0 ? g : 15, F = (b = n == null ? void 0 : n.fine) !== null && b !== void 0 ? b : 5;
  return nt(() => {
    if (r || K == null)
      return;
    const te = y.current;
    ge(te, "Element ref not attached");
    let I = !1;
    return KD(B, te, C, {
      coarse: O,
      fine: F
    }, (W, G, Z) => {
      if (!G) {
        $("inactive");
        return;
      }
      switch (W) {
        case "down": {
          $("drag"), I = !1, ge(Z, 'Expected event to be defined for "down" action'), E(B, Z);
          const {
            onDragging: k,
            onPointerDown: Y
          } = w.current;
          k == null || k(!0), Y == null || Y();
          break;
        }
        case "move": {
          const {
            state: k
          } = z.current;
          I = !0, k !== "drag" && $("hover"), ge(Z, 'Expected event to be defined for "move" action'), K(Z);
          break;
        }
        case "up": {
          $("hover"), A();
          const {
            onClick: k,
            onDragging: Y,
            onPointerUp: J
          } = w.current;
          Y == null || Y(!1), J == null || J(), I || k == null || k();
          break;
        }
      }
    });
  }, [O, C, r, F, P, B, K, E, A]), lO({
    disabled: r,
    handleId: B,
    resizeHandler: K,
    panelGroupElement: R
  }), br(h, {
    ...v,
    children: e,
    className: t,
    id: o,
    onBlur: () => {
      L(!1), a == null || a();
    },
    onFocus: () => {
      L(!0), c == null || c();
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
    [Ye.groupDirection]: C,
    [Ye.groupId]: N,
    [Ye.resizeHandle]: "",
    [Ye.resizeHandleActive]: M === "drag" ? "pointer" : U ? "keyboard" : void 0,
    [Ye.resizeHandleEnabled]: !r,
    [Ye.resizeHandleId]: B,
    [Ye.resizeHandleState]: M
  });
}
O0.displayName = "PanelResizeHandle";
const yq = ({ className: e, ...t }) => /* @__PURE__ */ l(
  D0,
  {
    className: T("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", e),
    ...t
  }
), wq = h0, xq = ({
  withHandle: e,
  className: t,
  ...r
}) => /* @__PURE__ */ l(
  O0,
  {
    className: T(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      t
    ),
    ...r,
    children: e && /* @__PURE__ */ l("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ l(fE, { className: "h-2.5 w-2.5" }) })
  }
), cO = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ l("table", { ref: r, className: T("w-full caption-bottom text-sm", e), ...t }) })
);
cO.displayName = "Table";
const dO = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l("thead", { ref: r, className: T("[&_tr]:border-b", e), ...t })
);
dO.displayName = "TableHeader";
const uO = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l("tbody", { ref: r, className: T("[&_tr:last-child]:border-0", e), ...t })
);
uO.displayName = "TableBody";
const fO = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l("tfoot", { ref: r, className: T("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e), ...t })
);
fO.displayName = "TableFooter";
const pO = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l(
    "tr",
    {
      ref: r,
      className: T("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", e),
      ...t
    }
  )
);
pO.displayName = "TableRow";
const mO = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l(
    "th",
    {
      ref: r,
      className: T(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        e
      ),
      ...t
    }
  )
);
mO.displayName = "TableHead";
const hO = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l("td", { ref: r, className: T("p-4 align-middle [&:has([role=checkbox])]:pr-0", e), ...t })
);
hO.displayName = "TableCell";
const gO = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l("caption", { ref: r, className: T("mt-4 text-sm text-muted-foreground", e), ...t })
);
gO.displayName = "TableCaption";
function xe(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function St(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ft(e, t) {
  const r = xe(e);
  return isNaN(t) ? St(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Wt(e, t) {
  const r = xe(e);
  if (isNaN(t)) return St(e, NaN);
  if (!t)
    return r;
  const n = r.getDate(), o = St(e, r.getTime());
  o.setMonth(r.getMonth() + t + 1, 0);
  const a = o.getDate();
  return n >= a ? o : (r.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    n
  ), r);
}
const Nu = 6048e5, vO = 864e5;
let bO = {};
function Na() {
  return bO;
}
function ar(e, t) {
  var s, c, d, f;
  const r = Na(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? r.weekStartsOn ?? ((f = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = xe(e), a = o.getDay(), i = (a < n ? 7 : 0) + a - n;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function un(e) {
  return ar(e, { weekStartsOn: 1 });
}
function I0(e) {
  const t = xe(e), r = t.getFullYear(), n = St(e, 0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const o = un(n), a = St(e, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const i = un(a);
  return t.getTime() >= o.getTime() ? r + 1 : t.getTime() >= i.getTime() ? r : r - 1;
}
function Kn(e) {
  const t = xe(e);
  return t.setHours(0, 0, 0, 0), t;
}
function _i(e) {
  const t = xe(e), r = new Date(
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
  return r.setUTCFullYear(t.getFullYear()), +e - +r;
}
function tr(e, t) {
  const r = Kn(e), n = Kn(t), o = +r - _i(r), a = +n - _i(n);
  return Math.round((o - a) / vO);
}
function yO(e) {
  const t = I0(e), r = St(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), un(r);
}
function wc(e, t) {
  const r = t * 7;
  return ft(e, r);
}
function wO(e, t) {
  return Wt(e, t * 12);
}
function xO(e) {
  let t;
  return e.forEach(function(r) {
    const n = xe(r);
    (t === void 0 || t < n || isNaN(Number(n))) && (t = n);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function CO(e) {
  let t;
  return e.forEach((r) => {
    const n = xe(r);
    (!t || t > n || isNaN(+n)) && (t = n);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function ht(e, t) {
  const r = Kn(e), n = Kn(t);
  return +r == +n;
}
function Eu(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function SO(e) {
  if (!Eu(e) && typeof e != "number")
    return !1;
  const t = xe(e);
  return !isNaN(Number(t));
}
function Ko(e, t) {
  const r = xe(e), n = xe(t), o = r.getFullYear() - n.getFullYear(), a = r.getMonth() - n.getMonth();
  return o * 12 + a;
}
function NO(e, t, r) {
  const n = ar(e, r), o = ar(t, r), a = +n - _i(n), i = +o - _i(o);
  return Math.round((a - i) / Nu);
}
function Pu(e) {
  const t = xe(e), r = t.getMonth();
  return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function gt(e) {
  const t = xe(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function $0(e) {
  const t = xe(e), r = St(e, 0);
  return r.setFullYear(t.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function _u(e, t) {
  var s, c, d, f;
  const r = Na(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? r.weekStartsOn ?? ((f = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = xe(e), a = o.getDay(), i = (a < n ? -7 : 0) + 6 - (a - n);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function L0(e) {
  return _u(e, { weekStartsOn: 1 });
}
const EO = {
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
}, PO = (e, t, r) => {
  let n;
  const o = EO[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function gl(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const _O = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, RO = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, TO = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, MO = {
  date: gl({
    formats: _O,
    defaultWidth: "full"
  }),
  time: gl({
    formats: RO,
    defaultWidth: "full"
  }),
  dateTime: gl({
    formats: TO,
    defaultWidth: "full"
  })
}, AO = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, kO = (e, t, r, n) => AO[e];
function No(e) {
  return (t, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let o;
    if (n === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = r != null && r.width ? String(r.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = r != null && r.width ? String(r.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const DO = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, OO = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, IO = {
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
}, $O = {
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
}, LO = {
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
}, FO = {
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
}, zO = (e, t) => {
  const r = Number(e), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, BO = {
  ordinalNumber: zO,
  era: No({
    values: DO,
    defaultWidth: "wide"
  }),
  quarter: No({
    values: OO,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: No({
    values: IO,
    defaultWidth: "wide"
  }),
  day: No({
    values: $O,
    defaultWidth: "wide"
  }),
  dayPeriod: No({
    values: LO,
    defaultWidth: "wide",
    formattingValues: FO,
    defaultFormattingWidth: "wide"
  })
};
function Eo(e) {
  return (t, r = {}) => {
    const n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? HO(s, (p) => p.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      jO(s, (p) => p.test(i))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(c) : c, d = r.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      r.valueCallback(d)
    ) : d;
    const f = t.slice(i.length);
    return { value: d, rest: f };
  };
}
function jO(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function HO(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function WO(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const o = n[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = r.valueCallback ? r.valueCallback(i) : i;
    const s = t.slice(o.length);
    return { value: i, rest: s };
  };
}
const VO = /^(\d+)(th|st|nd|rd)?/i, GO = /\d+/i, UO = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, KO = {
  any: [/^b/i, /^(a|c)/i]
}, YO = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, qO = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, XO = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, ZO = {
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
}, QO = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, JO = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, eI = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, tI = {
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
}, rI = {
  ordinalNumber: WO({
    matchPattern: VO,
    parsePattern: GO,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Eo({
    matchPatterns: UO,
    defaultMatchWidth: "wide",
    parsePatterns: KO,
    defaultParseWidth: "any"
  }),
  quarter: Eo({
    matchPatterns: YO,
    defaultMatchWidth: "wide",
    parsePatterns: qO,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Eo({
    matchPatterns: XO,
    defaultMatchWidth: "wide",
    parsePatterns: ZO,
    defaultParseWidth: "any"
  }),
  day: Eo({
    matchPatterns: QO,
    defaultMatchWidth: "wide",
    parsePatterns: JO,
    defaultParseWidth: "any"
  }),
  dayPeriod: Eo({
    matchPatterns: eI,
    defaultMatchWidth: "any",
    parsePatterns: tI,
    defaultParseWidth: "any"
  })
}, F0 = {
  code: "en-US",
  formatDistance: PO,
  formatLong: MO,
  formatRelative: kO,
  localize: BO,
  match: rI,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function nI(e) {
  const t = xe(e);
  return tr(t, $0(t)) + 1;
}
function z0(e) {
  const t = xe(e), r = +un(t) - +yO(t);
  return Math.round(r / Nu) + 1;
}
function B0(e, t) {
  var f, p, m, h;
  const r = xe(e), n = r.getFullYear(), o = Na(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((p = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((h = (m = o.locale) == null ? void 0 : m.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, i = St(e, 0);
  i.setFullYear(n + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = ar(i, t), c = St(e, 0);
  c.setFullYear(n, 0, a), c.setHours(0, 0, 0, 0);
  const d = ar(c, t);
  return r.getTime() >= s.getTime() ? n + 1 : r.getTime() >= d.getTime() ? n : n - 1;
}
function oI(e, t) {
  var s, c, d, f;
  const r = Na(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((f = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = B0(e, t), a = St(e, 0);
  return a.setFullYear(o, 0, n), a.setHours(0, 0, 0, 0), ar(a, t);
}
function j0(e, t) {
  const r = xe(e), n = +ar(r, t) - +oI(r, t);
  return Math.round(n / Nu) + 1;
}
function Te(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const kr = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return Te(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : Te(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Te(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return Te(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Te(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Te(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Te(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), o = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return Te(o, t.length);
  }
}, Mn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, dp = {
  // Era
  G: function(e, t, r) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, { width: "abbreviated" });
      case "GGGGG":
        return r.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, r) {
    if (t === "yo") {
      const n = e.getFullYear(), o = n > 0 ? n : 1 - n;
      return r.ordinalNumber(o, { unit: "year" });
    }
    return kr.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const o = B0(e, n), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return Te(i, 2);
    }
    return t === "Yo" ? r.ordinalNumber(a, { unit: "year" }) : Te(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = I0(e);
    return Te(r, t.length);
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
    const r = e.getFullYear();
    return Te(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return Te(n, 2);
      case "Qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(n);
      case "qq":
        return Te(n, 2);
      case "qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return kr.M(e, t);
      case "Mo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "L":
        return String(n + 1);
      case "LL":
        return Te(n + 1, 2);
      case "Lo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, r, n) {
    const o = j0(e, n);
    return t === "wo" ? r.ordinalNumber(o, { unit: "week" }) : Te(o, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = z0(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : Te(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : kr.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = nI(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : Te(n, t.length);
  },
  // Day of week
  E: function(e, t, r) {
    const n = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, r, n) {
    const o = e.getDay(), a = (o - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return Te(a, 2);
      case "eo":
        return r.ordinalNumber(a, { unit: "day" });
      case "eee":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, n) {
    const o = e.getDay(), a = (o - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return Te(a, t.length);
      case "co":
        return r.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return r.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const n = e.getDay(), o = n === 0 ? 7 : n;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return Te(o, t.length);
      case "io":
        return r.ordinalNumber(o, { unit: "day" });
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, r) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const n = e.getHours();
    let o;
    switch (n === 12 ? o = Mn.noon : n === 0 ? o = Mn.midnight : o = n / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const n = e.getHours();
    let o;
    switch (n >= 17 ? o = Mn.evening : n >= 12 ? o = Mn.afternoon : n >= 4 ? o = Mn.morning : o = Mn.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, r) {
    if (t === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, { unit: "hour" });
    }
    return kr.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : kr.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : Te(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : Te(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : kr.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : kr.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return kr.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return fp(n);
      case "XXXX":
      case "XX":
        return Qr(n);
      case "XXXXX":
      case "XXX":
      default:
        return Qr(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return fp(n);
      case "xxxx":
      case "xx":
        return Qr(n);
      case "xxxxx":
      case "xxx":
      default:
        return Qr(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + up(n, ":");
      case "OOOO":
      default:
        return "GMT" + Qr(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + up(n, ":");
      case "zzzz":
      default:
        return "GMT" + Qr(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(e.getTime() / 1e3);
    return Te(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    const n = e.getTime();
    return Te(n, t.length);
  }
};
function up(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? r + String(o) : r + String(o) + t + Te(a, 2);
}
function fp(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Te(Math.abs(e) / 60, 2) : Qr(e, t);
}
function Qr(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Te(Math.trunc(n / 60), 2), a = Te(n % 60, 2);
  return r + o + t + a;
}
const pp = (e, t) => {
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
}, H0 = (e, t) => {
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
}, aI = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], o = r[2];
  if (!o)
    return pp(e, t);
  let a;
  switch (n) {
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
  return a.replace("{{date}}", pp(n, t)).replace("{{time}}", H0(o, t));
}, iI = {
  p: H0,
  P: aI
}, sI = /^D+$/, lI = /^Y+$/, cI = ["D", "DD", "YY", "YYYY"];
function dI(e) {
  return sI.test(e);
}
function uI(e) {
  return lI.test(e);
}
function fI(e, t, r) {
  const n = pI(e, t, r);
  if (console.warn(n), cI.includes(e)) throw new RangeError(n);
}
function pI(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const mI = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, hI = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, gI = /^'([^]*?)'?$/, vI = /''/g, bI = /[a-zA-Z]/;
function xn(e, t, r) {
  var f, p, m, h, v, g, b, y;
  const n = Na(), o = (r == null ? void 0 : r.locale) ?? n.locale ?? F0, a = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((p = (f = r == null ? void 0 : r.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((h = (m = n.locale) == null ? void 0 : m.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, i = (r == null ? void 0 : r.weekStartsOn) ?? ((g = (v = r == null ? void 0 : r.locale) == null ? void 0 : v.options) == null ? void 0 : g.weekStartsOn) ?? n.weekStartsOn ?? ((y = (b = n.locale) == null ? void 0 : b.options) == null ? void 0 : y.weekStartsOn) ?? 0, s = xe(e);
  if (!SO(s))
    throw new RangeError("Invalid time value");
  let c = t.match(hI).map((w) => {
    const x = w[0];
    if (x === "p" || x === "P") {
      const C = iI[x];
      return C(w, o.formatLong);
    }
    return w;
  }).join("").match(mI).map((w) => {
    if (w === "''")
      return { isToken: !1, value: "'" };
    const x = w[0];
    if (x === "'")
      return { isToken: !1, value: yI(w) };
    if (dp[x])
      return { isToken: !0, value: w };
    if (x.match(bI))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: w };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const d = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return c.map((w) => {
    if (!w.isToken) return w.value;
    const x = w.value;
    (!(r != null && r.useAdditionalWeekYearTokens) && uI(x) || !(r != null && r.useAdditionalDayOfYearTokens) && dI(x)) && fI(x, t, String(e));
    const C = dp[x[0]];
    return C(s, x, o.localize, d);
  }).join("");
}
function yI(e) {
  const t = e.match(gI);
  return t ? t[1].replace(vI, "'") : e;
}
function wI(e) {
  const t = xe(e), r = t.getFullYear(), n = t.getMonth(), o = St(e, 0);
  return o.setFullYear(r, n + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function xI(e) {
  return Math.trunc(+xe(e) / 1e3);
}
function CI(e) {
  const t = xe(e), r = t.getMonth();
  return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function SI(e, t) {
  return NO(
    CI(e),
    gt(e),
    t
  ) + 1;
}
function xc(e, t) {
  const r = xe(e), n = xe(t);
  return r.getTime() > n.getTime();
}
function W0(e, t) {
  const r = xe(e), n = xe(t);
  return +r < +n;
}
function Ru(e, t) {
  const r = xe(e), n = xe(t);
  return r.getFullYear() === n.getFullYear() && r.getMonth() === n.getMonth();
}
function NI(e, t) {
  const r = xe(e), n = xe(t);
  return r.getFullYear() === n.getFullYear();
}
function vl(e, t) {
  return ft(e, -t);
}
function bl(e, t) {
  const r = xe(e), n = r.getFullYear(), o = r.getDate(), a = St(e, 0);
  a.setFullYear(n, t, 15), a.setHours(0, 0, 0, 0);
  const i = wI(a);
  return r.setMonth(t, Math.min(o, i)), r;
}
function mp(e, t) {
  const r = xe(e);
  return isNaN(+r) ? St(e, NaN) : (r.setFullYear(t), r);
}
var ue = function() {
  return ue = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, ue.apply(this, arguments);
};
function EI(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function V0(e, t, r) {
  for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Ea(e) {
  return e.mode === "multiple";
}
function Pa(e) {
  return e.mode === "range";
}
function Rs(e) {
  return e.mode === "single";
}
var PI = {
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
function _I(e, t) {
  return xn(e, "LLLL y", t);
}
function RI(e, t) {
  return xn(e, "d", t);
}
function TI(e, t) {
  return xn(e, "LLLL", t);
}
function MI(e) {
  return "".concat(e);
}
function AI(e, t) {
  return xn(e, "cccccc", t);
}
function kI(e, t) {
  return xn(e, "yyyy", t);
}
var DI = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: _I,
  formatDay: RI,
  formatMonthCaption: TI,
  formatWeekNumber: MI,
  formatWeekdayName: AI,
  formatYearCaption: kI
}), OI = function(e, t, r) {
  return xn(e, "do MMMM (EEEE)", r);
}, II = function() {
  return "Month: ";
}, $I = function() {
  return "Go to next month";
}, LI = function() {
  return "Go to previous month";
}, FI = function(e, t) {
  return xn(e, "cccc", t);
}, zI = function(e) {
  return "Week n. ".concat(e);
}, BI = function() {
  return "Year: ";
}, jI = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: OI,
  labelMonthDropdown: II,
  labelNext: $I,
  labelPrevious: LI,
  labelWeekNumber: zI,
  labelWeekday: FI,
  labelYearDropdown: BI
});
function HI() {
  var e = "buttons", t = PI, r = F0, n = {}, o = {}, a = 1, i = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: DI,
    labels: jI,
    locale: r,
    modifiersClassNames: n,
    modifiers: o,
    numberOfMonths: a,
    styles: i,
    today: s,
    mode: "default"
  };
}
function WI(e) {
  var t = e.fromYear, r = e.toYear, n = e.fromMonth, o = e.toMonth, a = e.fromDate, i = e.toDate;
  return n ? a = gt(n) : t && (a = new Date(t, 0, 1)), o ? i = Pu(o) : r && (i = new Date(r, 11, 31)), {
    fromDate: a ? Kn(a) : void 0,
    toDate: i ? Kn(i) : void 0
  };
}
var G0 = Cr(void 0);
function VI(e) {
  var t, r = e.initialProps, n = HI(), o = WI(r), a = o.fromDate, i = o.toDate, s = (t = r.captionLayout) !== null && t !== void 0 ? t : n.captionLayout;
  s !== "buttons" && (!a || !i) && (s = "buttons");
  var c;
  (Rs(r) || Ea(r) || Pa(r)) && (c = r.onSelect);
  var d = ue(ue(ue({}, n), r), { captionLayout: s, classNames: ue(ue({}, n.classNames), r.classNames), components: ue({}, r.components), formatters: ue(ue({}, n.formatters), r.formatters), fromDate: a, labels: ue(ue({}, n.labels), r.labels), mode: r.mode || n.mode, modifiers: ue(ue({}, n.modifiers), r.modifiers), modifiersClassNames: ue(ue({}, n.modifiersClassNames), r.modifiersClassNames), onSelect: c, styles: ue(ue({}, n.styles), r.styles), toDate: i });
  return l(G0.Provider, { value: d, children: e.children });
}
function Ie() {
  var e = ir(G0);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function U0(e) {
  var t = Ie(), r = t.locale, n = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return l("div", { className: n.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: r }) });
}
function GI(e) {
  return l("svg", ue({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: l("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function K0(e) {
  var t, r, n = e.onChange, o = e.value, a = e.children, i = e.caption, s = e.className, c = e.style, d = Ie(), f = (r = (t = d.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && r !== void 0 ? r : GI;
  return S("div", { className: s, style: c, children: [l("span", { className: d.classNames.vhidden, children: e["aria-label"] }), l("select", { name: e.name, "aria-label": e["aria-label"], className: d.classNames.dropdown, style: d.styles.dropdown, value: o, onChange: n, children: a }), S("div", { className: d.classNames.caption_label, style: d.styles.caption_label, "aria-hidden": "true", children: [i, l(f, { className: d.classNames.dropdown_icon, style: d.styles.dropdown_icon })] })] });
}
function UI(e) {
  var t, r = Ie(), n = r.fromDate, o = r.toDate, a = r.styles, i = r.locale, s = r.formatters.formatMonthCaption, c = r.classNames, d = r.components, f = r.labels.labelMonthDropdown;
  if (!n)
    return l(Me, {});
  if (!o)
    return l(Me, {});
  var p = [];
  if (NI(n, o))
    for (var m = gt(n), h = n.getMonth(); h <= o.getMonth(); h++)
      p.push(bl(m, h));
  else
    for (var m = gt(/* @__PURE__ */ new Date()), h = 0; h <= 11; h++)
      p.push(bl(m, h));
  var v = function(b) {
    var y = Number(b.target.value), w = bl(gt(e.displayMonth), y);
    e.onChange(w);
  }, g = (t = d == null ? void 0 : d.Dropdown) !== null && t !== void 0 ? t : K0;
  return l(g, { name: "months", "aria-label": f(), className: c.dropdown_month, style: a.dropdown_month, onChange: v, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }), children: p.map(function(b) {
    return l("option", { value: b.getMonth(), children: s(b, { locale: i }) }, b.getMonth());
  }) });
}
function KI(e) {
  var t, r = e.displayMonth, n = Ie(), o = n.fromDate, a = n.toDate, i = n.locale, s = n.styles, c = n.classNames, d = n.components, f = n.formatters.formatYearCaption, p = n.labels.labelYearDropdown, m = [];
  if (!o)
    return l(Me, {});
  if (!a)
    return l(Me, {});
  for (var h = o.getFullYear(), v = a.getFullYear(), g = h; g <= v; g++)
    m.push(mp($0(/* @__PURE__ */ new Date()), g));
  var b = function(w) {
    var x = mp(gt(r), Number(w.target.value));
    e.onChange(x);
  }, y = (t = d == null ? void 0 : d.Dropdown) !== null && t !== void 0 ? t : K0;
  return l(y, { name: "years", "aria-label": p(), className: c.dropdown_year, style: s.dropdown_year, onChange: b, value: r.getFullYear(), caption: f(r, { locale: i }), children: m.map(function(w) {
    return l("option", { value: w.getFullYear(), children: f(w, { locale: i }) }, w.getFullYear());
  }) });
}
function YI(e, t) {
  var r = me(e), n = r[0], o = r[1], a = t === void 0 ? n : t;
  return [a, o];
}
function qI(e) {
  var t = e.month, r = e.defaultMonth, n = e.today, o = t || r || n || /* @__PURE__ */ new Date(), a = e.toDate, i = e.fromDate, s = e.numberOfMonths, c = s === void 0 ? 1 : s;
  if (a && Ko(a, o) < 0) {
    var d = -1 * (c - 1);
    o = Wt(a, d);
  }
  return i && Ko(o, i) < 0 && (o = i), gt(o);
}
function XI() {
  var e = Ie(), t = qI(e), r = YI(t, e.month), n = r[0], o = r[1], a = function(i) {
    var s;
    if (!e.disableNavigation) {
      var c = gt(i);
      o(c), (s = e.onMonthChange) === null || s === void 0 || s.call(e, c);
    }
  };
  return [n, a];
}
function ZI(e, t) {
  for (var r = t.reverseMonths, n = t.numberOfMonths, o = gt(e), a = gt(Wt(o, n)), i = Ko(a, o), s = [], c = 0; c < i; c++) {
    var d = Wt(o, c);
    s.push(d);
  }
  return r && (s = s.reverse()), s;
}
function QI(e, t) {
  if (!t.disableNavigation) {
    var r = t.toDate, n = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = n ? a : 1, s = gt(e);
    if (!r)
      return Wt(s, i);
    var c = Ko(r, e);
    if (!(c < a))
      return Wt(s, i);
  }
}
function JI(e, t) {
  if (!t.disableNavigation) {
    var r = t.fromDate, n = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = n ? a : 1, s = gt(e);
    if (!r)
      return Wt(s, -i);
    var c = Ko(s, r);
    if (!(c <= 0))
      return Wt(s, -i);
  }
}
var Y0 = Cr(void 0);
function e$(e) {
  var t = Ie(), r = XI(), n = r[0], o = r[1], a = ZI(n, t), i = QI(n, t), s = JI(n, t), c = function(p) {
    return a.some(function(m) {
      return Ru(p, m);
    });
  }, d = function(p, m) {
    c(p) || (m && W0(p, m) ? o(Wt(p, 1 + t.numberOfMonths * -1)) : o(p));
  }, f = {
    currentMonth: n,
    displayMonths: a,
    goToMonth: o,
    goToDate: d,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: c
  };
  return l(Y0.Provider, { value: f, children: e.children });
}
function _a() {
  var e = ir(Y0);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function hp(e) {
  var t, r = Ie(), n = r.classNames, o = r.styles, a = r.components, i = _a().goToMonth, s = function(f) {
    i(Wt(f, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : U0, d = l(c, { id: e.id, displayMonth: e.displayMonth });
  return S("div", { className: n.caption_dropdowns, style: o.caption_dropdowns, children: [l("div", { className: n.vhidden, children: d }), l(UI, { onChange: s, displayMonth: e.displayMonth }), l(KI, { onChange: s, displayMonth: e.displayMonth })] });
}
function t$(e) {
  return l("svg", ue({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: l("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function r$(e) {
  return l("svg", ue({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: l("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var Ri = mn(function(e, t) {
  var r = Ie(), n = r.classNames, o = r.styles, a = [n.button_reset, n.button];
  e.className && a.push(e.className);
  var i = a.join(" "), s = ue(ue({}, o.button_reset), o.button);
  return e.style && Object.assign(s, e.style), l("button", ue({}, e, { ref: t, type: "button", className: i, style: s }));
});
function n$(e) {
  var t, r, n = Ie(), o = n.dir, a = n.locale, i = n.classNames, s = n.styles, c = n.labels, d = c.labelPrevious, f = c.labelNext, p = n.components;
  if (!e.nextMonth && !e.previousMonth)
    return l(Me, {});
  var m = d(e.previousMonth, { locale: a }), h = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), v = f(e.nextMonth, { locale: a }), g = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), b = (t = p == null ? void 0 : p.IconRight) !== null && t !== void 0 ? t : r$, y = (r = p == null ? void 0 : p.IconLeft) !== null && r !== void 0 ? r : t$;
  return S("div", { className: i.nav, style: s.nav, children: [!e.hidePrevious && l(Ri, { name: "previous-month", "aria-label": m, className: h, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? l(b, { className: i.nav_icon, style: s.nav_icon }) : l(y, { className: i.nav_icon, style: s.nav_icon }) }), !e.hideNext && l(Ri, { name: "next-month", "aria-label": v, className: g, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? l(y, { className: i.nav_icon, style: s.nav_icon }) : l(b, { className: i.nav_icon, style: s.nav_icon }) })] });
}
function gp(e) {
  var t = Ie().numberOfMonths, r = _a(), n = r.previousMonth, o = r.nextMonth, a = r.goToMonth, i = r.displayMonths, s = i.findIndex(function(v) {
    return Ru(e.displayMonth, v);
  }), c = s === 0, d = s === i.length - 1, f = t > 1 && (c || !d), p = t > 1 && (d || !c), m = function() {
    n && a(n);
  }, h = function() {
    o && a(o);
  };
  return l(n$, { displayMonth: e.displayMonth, hideNext: f, hidePrevious: p, nextMonth: o, previousMonth: n, onPreviousClick: m, onNextClick: h });
}
function o$(e) {
  var t, r = Ie(), n = r.classNames, o = r.disableNavigation, a = r.styles, i = r.captionLayout, s = r.components, c = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : U0, d;
  return o ? d = l(c, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? d = l(hp, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? d = S(Me, { children: [l(hp, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), l(gp, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : d = S(Me, { children: [l(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), l(gp, { displayMonth: e.displayMonth, id: e.id })] }), l("div", { className: n.caption, style: a.caption, children: d });
}
function a$(e) {
  var t = Ie(), r = t.footer, n = t.styles, o = t.classNames.tfoot;
  return r ? l("tfoot", { className: o, style: n.tfoot, children: l("tr", { children: l("td", { colSpan: 8, children: r }) }) }) : l(Me, {});
}
function i$(e, t, r) {
  for (var n = r ? un(/* @__PURE__ */ new Date()) : ar(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var i = ft(n, a);
    o.push(i);
  }
  return o;
}
function s$() {
  var e = Ie(), t = e.classNames, r = e.styles, n = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, d = i$(o, a, i);
  return S("tr", { style: r.head_row, className: t.head_row, children: [n && l("td", { style: r.head_cell, className: t.head_cell }), d.map(function(f, p) {
    return l("th", { scope: "col", className: t.head_cell, style: r.head_cell, "aria-label": c(f, { locale: o }), children: s(f, { locale: o }) }, p);
  })] });
}
function l$() {
  var e, t = Ie(), r = t.classNames, n = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : s$;
  return l("thead", { style: n.head, className: r.head, children: l(a, {}) });
}
function c$(e) {
  var t = Ie(), r = t.locale, n = t.formatters.formatDay;
  return l(Me, { children: n(e.date, { locale: r }) });
}
var Tu = Cr(void 0);
function d$(e) {
  if (!Ea(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return l(Tu.Provider, { value: t, children: e.children });
  }
  return l(u$, { initialProps: e.initialProps, children: e.children });
}
function u$(e) {
  var t = e.initialProps, r = e.children, n = t.selected, o = t.min, a = t.max, i = function(d, f, p) {
    var m, h;
    (m = t.onDayClick) === null || m === void 0 || m.call(t, d, f, p);
    var v = !!(f.selected && o && (n == null ? void 0 : n.length) === o);
    if (!v) {
      var g = !!(!f.selected && a && (n == null ? void 0 : n.length) === a);
      if (!g) {
        var b = n ? V0([], n) : [];
        if (f.selected) {
          var y = b.findIndex(function(w) {
            return ht(d, w);
          });
          b.splice(y, 1);
        } else
          b.push(d);
        (h = t.onSelect) === null || h === void 0 || h.call(t, b, d, f, p);
      }
    }
  }, s = {
    disabled: []
  };
  n && s.disabled.push(function(d) {
    var f = a && n.length > a - 1, p = n.some(function(m) {
      return ht(m, d);
    });
    return !!(f && !p);
  });
  var c = {
    selected: n,
    onDayClick: i,
    modifiers: s
  };
  return l(Tu.Provider, { value: c, children: r });
}
function Mu() {
  var e = ir(Tu);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function f$(e, t) {
  var r = t || {}, n = r.from, o = r.to;
  return n && o ? ht(o, e) && ht(n, e) ? void 0 : ht(o, e) ? { from: o, to: void 0 } : ht(n, e) ? void 0 : xc(n, e) ? { from: e, to: o } : { from: n, to: e } : o ? xc(e, o) ? { from: o, to: e } : { from: e, to: o } : n ? W0(e, n) ? { from: e, to: n } : { from: n, to: e } : { from: e, to: void 0 };
}
var Au = Cr(void 0);
function p$(e) {
  if (!Pa(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return l(Au.Provider, { value: t, children: e.children });
  }
  return l(m$, { initialProps: e.initialProps, children: e.children });
}
function m$(e) {
  var t = e.initialProps, r = e.children, n = t.selected, o = n || {}, a = o.from, i = o.to, s = t.min, c = t.max, d = function(h, v, g) {
    var b, y;
    (b = t.onDayClick) === null || b === void 0 || b.call(t, h, v, g);
    var w = f$(h, n);
    (y = t.onSelect) === null || y === void 0 || y.call(t, w, h, v, g);
  }, f = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (f.range_start = [a], i ? (f.range_end = [i], ht(a, i) || (f.range_middle = [
    {
      after: a,
      before: i
    }
  ])) : f.range_end = [a]) : i && (f.range_start = [i], f.range_end = [i]), s && (a && !i && f.disabled.push({
    after: vl(a, s - 1),
    before: ft(a, s - 1)
  }), a && i && f.disabled.push({
    after: a,
    before: ft(a, s - 1)
  }), !a && i && f.disabled.push({
    after: vl(i, s - 1),
    before: ft(i, s - 1)
  })), c) {
    if (a && !i && (f.disabled.push({
      before: ft(a, -c + 1)
    }), f.disabled.push({
      after: ft(a, c - 1)
    })), a && i) {
      var p = tr(i, a) + 1, m = c - p;
      f.disabled.push({
        before: vl(a, m)
      }), f.disabled.push({
        after: ft(i, m)
      });
    }
    !a && i && (f.disabled.push({
      before: ft(i, -c + 1)
    }), f.disabled.push({
      after: ft(i, c - 1)
    }));
  }
  return l(Au.Provider, { value: { selected: n, onDayClick: d, modifiers: f }, children: r });
}
function ku() {
  var e = ir(Au);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function ii(e) {
  return Array.isArray(e) ? V0([], e) : e !== void 0 ? [e] : [];
}
function h$(e) {
  var t = {};
  return Object.entries(e).forEach(function(r) {
    var n = r[0], o = r[1];
    t[n] = ii(o);
  }), t;
}
var Vt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Vt || (Vt = {}));
var g$ = Vt.Selected, mr = Vt.Disabled, v$ = Vt.Hidden, b$ = Vt.Today, yl = Vt.RangeEnd, wl = Vt.RangeMiddle, xl = Vt.RangeStart, y$ = Vt.Outside;
function w$(e, t, r) {
  var n, o = (n = {}, n[g$] = ii(e.selected), n[mr] = ii(e.disabled), n[v$] = ii(e.hidden), n[b$] = [e.today], n[yl] = [], n[wl] = [], n[xl] = [], n[y$] = [], n);
  return e.fromDate && o[mr].push({ before: e.fromDate }), e.toDate && o[mr].push({ after: e.toDate }), Ea(e) ? o[mr] = o[mr].concat(t.modifiers[mr]) : Pa(e) && (o[mr] = o[mr].concat(r.modifiers[mr]), o[xl] = r.modifiers[xl], o[wl] = r.modifiers[wl], o[yl] = r.modifiers[yl]), o;
}
var q0 = Cr(void 0);
function x$(e) {
  var t = Ie(), r = Mu(), n = ku(), o = w$(t, r, n), a = h$(t.modifiers), i = ue(ue({}, o), a);
  return l(q0.Provider, { value: i, children: e.children });
}
function X0() {
  var e = ir(q0);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function C$(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function S$(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function N$(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function E$(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function P$(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function _$(e, t) {
  var r, n = t.from, o = t.to;
  if (n && o) {
    var a = tr(o, n) < 0;
    a && (r = [o, n], n = r[0], o = r[1]);
    var i = tr(e, n) >= 0 && tr(o, e) >= 0;
    return i;
  }
  return o ? ht(o, e) : n ? ht(n, e) : !1;
}
function R$(e) {
  return Eu(e);
}
function T$(e) {
  return Array.isArray(e) && e.every(Eu);
}
function M$(e, t) {
  return t.some(function(r) {
    if (typeof r == "boolean")
      return r;
    if (R$(r))
      return ht(e, r);
    if (T$(r))
      return r.includes(e);
    if (S$(r))
      return _$(e, r);
    if (P$(r))
      return r.dayOfWeek.includes(e.getDay());
    if (C$(r)) {
      var n = tr(r.before, e), o = tr(r.after, e), a = n > 0, i = o < 0, s = xc(r.before, r.after);
      return s ? i && a : a || i;
    }
    return N$(r) ? tr(e, r.after) > 0 : E$(r) ? tr(r.before, e) > 0 : typeof r == "function" ? r(e) : !1;
  });
}
function Du(e, t, r) {
  var n = Object.keys(t).reduce(function(a, i) {
    var s = t[i];
    return M$(e, s) && a.push(i), a;
  }, []), o = {};
  return n.forEach(function(a) {
    return o[a] = !0;
  }), r && !Ru(e, r) && (o.outside = !0), o;
}
function A$(e, t) {
  for (var r = gt(e[0]), n = Pu(e[e.length - 1]), o, a, i = r; i <= n; ) {
    var s = Du(i, t), c = !s.disabled && !s.hidden;
    if (!c) {
      i = ft(i, 1);
      continue;
    }
    if (s.selected)
      return i;
    s.today && !a && (a = i), o || (o = i), i = ft(i, 1);
  }
  return a || o;
}
var k$ = 365;
function Z0(e, t) {
  var r = t.moveBy, n = t.direction, o = t.context, a = t.modifiers, i = t.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, c = o.weekStartsOn, d = o.fromDate, f = o.toDate, p = o.locale, m = {
    day: ft,
    week: wc,
    month: Wt,
    year: wO,
    startOfWeek: function(b) {
      return o.ISOWeek ? un(b) : ar(b, { locale: p, weekStartsOn: c });
    },
    endOfWeek: function(b) {
      return o.ISOWeek ? L0(b) : _u(b, { locale: p, weekStartsOn: c });
    }
  }, h = m[r](e, n === "after" ? 1 : -1);
  n === "before" && d ? h = xO([d, h]) : n === "after" && f && (h = CO([f, h]));
  var v = !0;
  if (a) {
    var g = Du(h, a);
    v = !g.disabled && !g.hidden;
  }
  return v ? h : s.count > k$ ? s.lastFocused : Z0(h, {
    moveBy: r,
    direction: n,
    context: o,
    modifiers: a,
    retry: ue(ue({}, s), { count: s.count + 1 })
  });
}
var Q0 = Cr(void 0);
function D$(e) {
  var t = _a(), r = X0(), n = me(), o = n[0], a = n[1], i = me(), s = i[0], c = i[1], d = A$(t.displayMonths, r), f = o ?? (s && t.isDateDisplayed(s)) ? s : d, p = function() {
    c(o), a(void 0);
  }, m = function(b) {
    a(b);
  }, h = Ie(), v = function(b, y) {
    if (o) {
      var w = Z0(o, {
        moveBy: b,
        direction: y,
        context: h,
        modifiers: r
      });
      ht(o, w) || (t.goToDate(w, o), m(w));
    }
  }, g = {
    focusedDay: o,
    focusTarget: f,
    blur: p,
    focus: m,
    focusDayAfter: function() {
      return v("day", "after");
    },
    focusDayBefore: function() {
      return v("day", "before");
    },
    focusWeekAfter: function() {
      return v("week", "after");
    },
    focusWeekBefore: function() {
      return v("week", "before");
    },
    focusMonthBefore: function() {
      return v("month", "before");
    },
    focusMonthAfter: function() {
      return v("month", "after");
    },
    focusYearBefore: function() {
      return v("year", "before");
    },
    focusYearAfter: function() {
      return v("year", "after");
    },
    focusStartOfWeek: function() {
      return v("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return v("endOfWeek", "after");
    }
  };
  return l(Q0.Provider, { value: g, children: e.children });
}
function Ou() {
  var e = ir(Q0);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function O$(e, t) {
  var r = X0(), n = Du(e, r, t);
  return n;
}
var Iu = Cr(void 0);
function I$(e) {
  if (!Rs(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return l(Iu.Provider, { value: t, children: e.children });
  }
  return l($$, { initialProps: e.initialProps, children: e.children });
}
function $$(e) {
  var t = e.initialProps, r = e.children, n = function(a, i, s) {
    var c, d, f;
    if ((c = t.onDayClick) === null || c === void 0 || c.call(t, a, i, s), i.selected && !t.required) {
      (d = t.onSelect) === null || d === void 0 || d.call(t, void 0, a, i, s);
      return;
    }
    (f = t.onSelect) === null || f === void 0 || f.call(t, a, a, i, s);
  }, o = {
    selected: t.selected,
    onDayClick: n
  };
  return l(Iu.Provider, { value: o, children: r });
}
function J0() {
  var e = ir(Iu);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function L$(e, t) {
  var r = Ie(), n = J0(), o = Mu(), a = ku(), i = Ou(), s = i.focusDayAfter, c = i.focusDayBefore, d = i.focusWeekAfter, f = i.focusWeekBefore, p = i.blur, m = i.focus, h = i.focusMonthBefore, v = i.focusMonthAfter, g = i.focusYearBefore, b = i.focusYearAfter, y = i.focusStartOfWeek, w = i.focusEndOfWeek, x = function(z) {
    var O, F, ee, te;
    Rs(r) ? (O = n.onDayClick) === null || O === void 0 || O.call(n, e, t, z) : Ea(r) ? (F = o.onDayClick) === null || F === void 0 || F.call(o, e, t, z) : Pa(r) ? (ee = a.onDayClick) === null || ee === void 0 || ee.call(a, e, t, z) : (te = r.onDayClick) === null || te === void 0 || te.call(r, e, t, z);
  }, C = function(z) {
    var O;
    m(e), (O = r.onDayFocus) === null || O === void 0 || O.call(r, e, t, z);
  }, N = function(z) {
    var O;
    p(), (O = r.onDayBlur) === null || O === void 0 || O.call(r, e, t, z);
  }, P = function(z) {
    var O;
    (O = r.onDayMouseEnter) === null || O === void 0 || O.call(r, e, t, z);
  }, E = function(z) {
    var O;
    (O = r.onDayMouseLeave) === null || O === void 0 || O.call(r, e, t, z);
  }, A = function(z) {
    var O;
    (O = r.onDayPointerEnter) === null || O === void 0 || O.call(r, e, t, z);
  }, R = function(z) {
    var O;
    (O = r.onDayPointerLeave) === null || O === void 0 || O.call(r, e, t, z);
  }, B = function(z) {
    var O;
    (O = r.onDayTouchCancel) === null || O === void 0 || O.call(r, e, t, z);
  }, M = function(z) {
    var O;
    (O = r.onDayTouchEnd) === null || O === void 0 || O.call(r, e, t, z);
  }, $ = function(z) {
    var O;
    (O = r.onDayTouchMove) === null || O === void 0 || O.call(r, e, t, z);
  }, U = function(z) {
    var O;
    (O = r.onDayTouchStart) === null || O === void 0 || O.call(r, e, t, z);
  }, L = function(z) {
    var O;
    (O = r.onDayKeyUp) === null || O === void 0 || O.call(r, e, t, z);
  }, K = function(z) {
    var O;
    switch (z.key) {
      case "ArrowLeft":
        z.preventDefault(), z.stopPropagation(), r.dir === "rtl" ? s() : c();
        break;
      case "ArrowRight":
        z.preventDefault(), z.stopPropagation(), r.dir === "rtl" ? c() : s();
        break;
      case "ArrowDown":
        z.preventDefault(), z.stopPropagation(), d();
        break;
      case "ArrowUp":
        z.preventDefault(), z.stopPropagation(), f();
        break;
      case "PageUp":
        z.preventDefault(), z.stopPropagation(), z.shiftKey ? g() : h();
        break;
      case "PageDown":
        z.preventDefault(), z.stopPropagation(), z.shiftKey ? b() : v();
        break;
      case "Home":
        z.preventDefault(), z.stopPropagation(), y();
        break;
      case "End":
        z.preventDefault(), z.stopPropagation(), w();
        break;
    }
    (O = r.onDayKeyDown) === null || O === void 0 || O.call(r, e, t, z);
  }, V = {
    onClick: x,
    onFocus: C,
    onBlur: N,
    onKeyDown: K,
    onKeyUp: L,
    onMouseEnter: P,
    onMouseLeave: E,
    onPointerEnter: A,
    onPointerLeave: R,
    onTouchCancel: B,
    onTouchEnd: M,
    onTouchMove: $,
    onTouchStart: U
  };
  return V;
}
function F$() {
  var e = Ie(), t = J0(), r = Mu(), n = ku(), o = Rs(e) ? t.selected : Ea(e) ? r.selected : Pa(e) ? n.selected : void 0;
  return o;
}
function z$(e) {
  return Object.values(Vt).includes(e);
}
function B$(e, t) {
  var r = [e.classNames.day];
  return Object.keys(t).forEach(function(n) {
    var o = e.modifiersClassNames[n];
    if (o)
      r.push(o);
    else if (z$(n)) {
      var a = e.classNames["day_".concat(n)];
      a && r.push(a);
    }
  }), r;
}
function j$(e, t) {
  var r = ue({}, e.styles.day);
  return Object.keys(t).forEach(function(n) {
    var o;
    r = ue(ue({}, r), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[n]);
  }), r;
}
function H$(e, t, r) {
  var n, o, a, i = Ie(), s = Ou(), c = O$(e, t), d = L$(e, c), f = F$(), p = !!(i.onDayClick || i.mode !== "default");
  nt(function() {
    var P;
    c.outside || s.focusedDay && p && ht(s.focusedDay, e) && ((P = r.current) === null || P === void 0 || P.focus());
  }, [
    s.focusedDay,
    e,
    r,
    p,
    c.outside
  ]);
  var m = B$(i, c).join(" "), h = j$(i, c), v = !!(c.outside && !i.showOutsideDays || c.hidden), g = (a = (o = i.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : c$, b = l(g, { date: e, displayMonth: t, activeModifiers: c }), y = {
    style: h,
    className: m,
    children: b,
    role: "gridcell"
  }, w = s.focusTarget && ht(s.focusTarget, e) && !c.outside, x = s.focusedDay && ht(s.focusedDay, e), C = ue(ue(ue({}, y), (n = { disabled: c.disabled, role: "gridcell" }, n["aria-selected"] = c.selected, n.tabIndex = x || w ? 0 : -1, n)), d), N = {
    isButton: p,
    isHidden: v,
    activeModifiers: c,
    selectedDays: f,
    buttonProps: C,
    divProps: y
  };
  return N;
}
function W$(e) {
  var t = qe(null), r = H$(e.date, e.displayMonth, t);
  return r.isHidden ? l("div", { role: "gridcell" }) : r.isButton ? l(Ri, ue({ name: "day", ref: t }, r.buttonProps)) : l("div", ue({}, r.divProps));
}
function V$(e) {
  var t = e.number, r = e.dates, n = Ie(), o = n.onWeekNumberClick, a = n.styles, i = n.classNames, s = n.locale, c = n.labels.labelWeekNumber, d = n.formatters.formatWeekNumber, f = d(Number(t), { locale: s });
  if (!o)
    return l("span", { className: i.weeknumber, style: a.weeknumber, children: f });
  var p = c(Number(t), { locale: s }), m = function(h) {
    o(t, r, h);
  };
  return l(Ri, { name: "week-number", "aria-label": p, className: i.weeknumber, style: a.weeknumber, onClick: m, children: f });
}
function G$(e) {
  var t, r, n = Ie(), o = n.styles, a = n.classNames, i = n.showWeekNumber, s = n.components, c = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : W$, d = (r = s == null ? void 0 : s.WeekNumber) !== null && r !== void 0 ? r : V$, f;
  return i && (f = l("td", { className: a.cell, style: o.cell, children: l(d, { number: e.weekNumber, dates: e.dates }) })), S("tr", { className: a.row, style: o.row, children: [f, e.dates.map(function(p) {
    return l("td", { className: a.cell, style: o.cell, role: "presentation", children: l(c, { displayMonth: e.displayMonth, date: p }) }, xI(p));
  })] });
}
function vp(e, t, r) {
  for (var n = r != null && r.ISOWeek ? L0(t) : _u(t, r), o = r != null && r.ISOWeek ? un(e) : ar(e, r), a = tr(n, o), i = [], s = 0; s <= a; s++)
    i.push(ft(o, s));
  var c = i.reduce(function(d, f) {
    var p = r != null && r.ISOWeek ? z0(f) : j0(f, r), m = d.find(function(h) {
      return h.weekNumber === p;
    });
    return m ? (m.dates.push(f), d) : (d.push({
      weekNumber: p,
      dates: [f]
    }), d);
  }, []);
  return c;
}
function U$(e, t) {
  var r = vp(gt(e), Pu(e), t);
  if (t != null && t.useFixedWeeks) {
    var n = SI(e, t);
    if (n < 6) {
      var o = r[r.length - 1], a = o.dates[o.dates.length - 1], i = wc(a, 6 - n), s = vp(wc(a, 1), i, t);
      r.push.apply(r, s);
    }
  }
  return r;
}
function K$(e) {
  var t, r, n, o = Ie(), a = o.locale, i = o.classNames, s = o.styles, c = o.hideHead, d = o.fixedWeeks, f = o.components, p = o.weekStartsOn, m = o.firstWeekContainsDate, h = o.ISOWeek, v = U$(e.displayMonth, {
    useFixedWeeks: !!d,
    ISOWeek: h,
    locale: a,
    weekStartsOn: p,
    firstWeekContainsDate: m
  }), g = (t = f == null ? void 0 : f.Head) !== null && t !== void 0 ? t : l$, b = (r = f == null ? void 0 : f.Row) !== null && r !== void 0 ? r : G$, y = (n = f == null ? void 0 : f.Footer) !== null && n !== void 0 ? n : a$;
  return S("table", { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && l(g, {}), l("tbody", { className: i.tbody, style: s.tbody, children: v.map(function(w) {
    return l(b, { displayMonth: e.displayMonth, dates: w.dates, weekNumber: w.weekNumber }, w.weekNumber);
  }) }), l(y, { displayMonth: e.displayMonth })] });
}
function Y$() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var q$ = Y$() ? Vi : nt, Cl = !1, X$ = 0;
function bp() {
  return "react-day-picker-".concat(++X$);
}
function Z$(e) {
  var t, r = e ?? (Cl ? bp() : null), n = me(r), o = n[0], a = n[1];
  return q$(function() {
    o === null && a(bp());
  }, []), nt(function() {
    Cl === !1 && (Cl = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function Q$(e) {
  var t, r, n = Ie(), o = n.dir, a = n.classNames, i = n.styles, s = n.components, c = _a().displayMonths, d = Z$(n.id ? "".concat(n.id, "-").concat(e.displayIndex) : void 0), f = n.id ? "".concat(n.id, "-grid-").concat(e.displayIndex) : void 0, p = [a.month], m = i.month, h = e.displayIndex === 0, v = e.displayIndex === c.length - 1, g = !h && !v;
  o === "rtl" && (t = [h, v], v = t[0], h = t[1]), h && (p.push(a.caption_start), m = ue(ue({}, m), i.caption_start)), v && (p.push(a.caption_end), m = ue(ue({}, m), i.caption_end)), g && (p.push(a.caption_between), m = ue(ue({}, m), i.caption_between));
  var b = (r = s == null ? void 0 : s.Caption) !== null && r !== void 0 ? r : o$;
  return S("div", { className: p.join(" "), style: m, children: [l(b, { id: d, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), l(K$, { id: f, "aria-labelledby": d, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function J$(e) {
  var t = Ie(), r = t.classNames, n = t.styles;
  return l("div", { className: r.months, style: n.months, children: e.children });
}
function eL(e) {
  var t, r, n = e.initialProps, o = Ie(), a = Ou(), i = _a(), s = me(!1), c = s[0], d = s[1];
  nt(function() {
    o.initialFocus && a.focusTarget && (c || (a.focus(a.focusTarget), d(!0)));
  }, [
    o.initialFocus,
    c,
    a.focus,
    a.focusTarget,
    a
  ]);
  var f = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && f.push(o.classNames.multiple_months), o.showWeekNumber && f.push(o.classNames.with_weeknumber);
  var p = ue(ue({}, o.styles.root), o.style), m = Object.keys(n).filter(function(v) {
    return v.startsWith("data-");
  }).reduce(function(v, g) {
    var b;
    return ue(ue({}, v), (b = {}, b[g] = n[g], b));
  }, {}), h = (r = (t = n.components) === null || t === void 0 ? void 0 : t.Months) !== null && r !== void 0 ? r : J$;
  return l("div", ue({ className: f.join(" "), style: p, dir: o.dir, id: o.id, nonce: n.nonce, title: n.title, lang: n.lang }, m, { children: l(h, { children: i.displayMonths.map(function(v, g) {
    return l(Q$, { displayIndex: g, displayMonth: v }, g);
  }) }) }));
}
function tL(e) {
  var t = e.children, r = EI(e, ["children"]);
  return l(VI, { initialProps: r, children: l(e$, { children: l(I$, { initialProps: r, children: l(d$, { initialProps: r, children: l(p$, { initialProps: r, children: l(x$, { children: l(D$, { children: t }) }) }) }) }) }) });
}
function rL(e) {
  return l(tL, ue({}, e, { children: l(eL, { initialProps: e }) }));
}
function nL({ className: e, classNames: t, showOutsideDays: r = !0, ...n }) {
  return /* @__PURE__ */ l(
    rL,
    {
      showOutsideDays: r,
      className: T("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: T(
          jn({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: T(jn({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
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
        IconLeft: ({ ...o }) => /* @__PURE__ */ l(wh, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ l(hn, { className: "h-4 w-4" })
      },
      ...n
    }
  );
}
nL.displayName = "Calendar";
function oL(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function yp(e) {
  return oL(e) || Array.isArray(e);
}
function aL() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function $u(e, t) {
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : r.every((i) => {
    const s = e[i], c = t[i];
    return typeof s == "function" ? `${s}` == `${c}` : !yp(s) || !yp(c) ? s === c : $u(s, c);
  });
}
function wp(e) {
  return e.concat().sort((t, r) => t.name > r.name ? 1 : -1).map((t) => t.options);
}
function iL(e, t) {
  if (e.length !== t.length) return !1;
  const r = wp(e), n = wp(t);
  return r.every((o, a) => {
    const i = n[a];
    return $u(o, i);
  });
}
function Lu(e) {
  return typeof e == "number";
}
function Cc(e) {
  return typeof e == "string";
}
function Ts(e) {
  return typeof e == "boolean";
}
function xp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ge(e) {
  return Math.abs(e);
}
function Fu(e) {
  return Math.sign(e);
}
function Lo(e, t) {
  return Ge(e - t);
}
function sL(e, t) {
  if (e === 0 || t === 0 || Ge(e) <= Ge(t)) return 0;
  const r = Lo(Ge(e), Ge(t));
  return Ge(r / e);
}
function lL(e) {
  return Math.round(e * 100) / 100;
}
function Yo(e) {
  return qo(e).map(Number);
}
function Bt(e) {
  return e[Ra(e)];
}
function Ra(e) {
  return Math.max(0, e.length - 1);
}
function zu(e, t) {
  return t === Ra(e);
}
function Cp(e, t = 0) {
  return Array.from(Array(e), (r, n) => t + n);
}
function qo(e) {
  return Object.keys(e);
}
function ex(e, t) {
  return [e, t].reduce((r, n) => (qo(n).forEach((o) => {
    const a = r[o], i = n[o], s = xp(a) && xp(i);
    r[o] = s ? ex(a, i) : i;
  }), r), {});
}
function Sc(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function cL(e, t) {
  const r = {
    start: n,
    center: o,
    end: a
  };
  function n() {
    return 0;
  }
  function o(c) {
    return a(c) / 2;
  }
  function a(c) {
    return t - c;
  }
  function i(c, d) {
    return Cc(e) ? r[e](c) : e(t, c, d);
  }
  return {
    measure: i
  };
}
function Xo() {
  let e = [];
  function t(o, a, i, s = {
    passive: !0
  }) {
    let c;
    if ("addEventListener" in o)
      o.addEventListener(a, i, s), c = () => o.removeEventListener(a, i, s);
    else {
      const d = o;
      d.addListener(i), c = () => d.removeListener(i);
    }
    return e.push(c), n;
  }
  function r() {
    e = e.filter((o) => o());
  }
  const n = {
    add: t,
    clear: r
  };
  return n;
}
function dL(e, t, r, n) {
  const o = Xo(), a = 1e3 / 60;
  let i = null, s = 0, c = 0;
  function d() {
    o.add(e, "visibilitychange", () => {
      e.hidden && v();
    });
  }
  function f() {
    h(), o.clear();
  }
  function p(b) {
    if (!c) return;
    i || (i = b, r(), r());
    const y = b - i;
    for (i = b, s += y; s >= a; )
      r(), s -= a;
    const w = s / a;
    n(w), c && (c = t.requestAnimationFrame(p));
  }
  function m() {
    c || (c = t.requestAnimationFrame(p));
  }
  function h() {
    t.cancelAnimationFrame(c), i = null, s = 0, c = 0;
  }
  function v() {
    i = null, s = 0;
  }
  return {
    init: d,
    destroy: f,
    start: m,
    stop: h,
    update: r,
    render: n
  };
}
function uL(e, t) {
  const r = t === "rtl", n = e === "y", o = n ? "y" : "x", a = n ? "x" : "y", i = !n && r ? -1 : 1, s = f(), c = p();
  function d(v) {
    const {
      height: g,
      width: b
    } = v;
    return n ? g : b;
  }
  function f() {
    return n ? "top" : r ? "right" : "left";
  }
  function p() {
    return n ? "bottom" : r ? "left" : "right";
  }
  function m(v) {
    return v * i;
  }
  return {
    scroll: o,
    cross: a,
    startEdge: s,
    endEdge: c,
    measureSize: d,
    direction: m
  };
}
function fn(e = 0, t = 0) {
  const r = Ge(e - t);
  function n(d) {
    return d < e;
  }
  function o(d) {
    return d > t;
  }
  function a(d) {
    return n(d) || o(d);
  }
  function i(d) {
    return a(d) ? n(d) ? e : t : d;
  }
  function s(d) {
    return r ? d - r * Math.ceil((d - t) / r) : d;
  }
  return {
    length: r,
    max: t,
    min: e,
    constrain: i,
    reachedAny: a,
    reachedMax: o,
    reachedMin: n,
    removeOffset: s
  };
}
function tx(e, t, r) {
  const {
    constrain: n
  } = fn(0, e), o = e + 1;
  let a = i(t);
  function i(m) {
    return r ? Ge((o + m) % o) : n(m);
  }
  function s() {
    return a;
  }
  function c(m) {
    return a = i(m), p;
  }
  function d(m) {
    return f().set(s() + m);
  }
  function f() {
    return tx(e, s(), r);
  }
  const p = {
    get: s,
    set: c,
    add: d,
    clone: f
  };
  return p;
}
function fL(e, t, r, n, o, a, i, s, c, d, f, p, m, h, v, g, b, y, w) {
  const {
    cross: x,
    direction: C
  } = e, N = ["INPUT", "SELECT", "TEXTAREA"], P = {
    passive: !1
  }, E = Xo(), A = Xo(), R = fn(50, 225).constrain(h.measure(20)), B = {
    mouse: 300,
    touch: 400
  }, M = {
    mouse: 500,
    touch: 600
  }, $ = v ? 43 : 25;
  let U = !1, L = 0, K = 0, V = !1, z = !1, O = !1, F = !1;
  function ee(X) {
    if (!w) return;
    function q(oe) {
      (Ts(w) || w(X, oe)) && Z(oe);
    }
    const j = t;
    E.add(j, "dragstart", (oe) => oe.preventDefault(), P).add(j, "touchmove", () => {
    }, P).add(j, "touchend", () => {
    }).add(j, "touchstart", q).add(j, "mousedown", q).add(j, "touchcancel", Y).add(j, "contextmenu", Y).add(j, "click", J, !0);
  }
  function te() {
    E.clear(), A.clear();
  }
  function I() {
    const X = F ? r : t;
    A.add(X, "touchmove", k, P).add(X, "touchend", Y).add(X, "mousemove", k, P).add(X, "mouseup", Y);
  }
  function D(X) {
    const q = X.nodeName || "";
    return N.includes(q);
  }
  function W() {
    return (v ? M : B)[F ? "mouse" : "touch"];
  }
  function G(X, q) {
    const j = p.add(Fu(X) * -1), oe = f.byDistance(X, !v).distance;
    return v || Ge(X) < R ? oe : b && q ? oe * 0.5 : f.byIndex(j.get(), 0).distance;
  }
  function Z(X) {
    const q = Sc(X, n);
    F = q, O = v && q && !X.buttons && U, U = Lo(o.get(), i.get()) >= 2, !(q && X.button !== 0) && (D(X.target) || (V = !0, a.pointerDown(X), d.useFriction(0).useDuration(0), o.set(i), I(), L = a.readPoint(X), K = a.readPoint(X, x), m.emit("pointerDown")));
  }
  function k(X) {
    if (!Sc(X, n) && X.touches.length >= 2) return Y(X);
    const j = a.readPoint(X), oe = a.readPoint(X, x), ce = Lo(j, L), ve = Lo(oe, K);
    if (!z && !F && (!X.cancelable || (z = ce > ve, !z)))
      return Y(X);
    const fe = a.pointerMove(X);
    ce > g && (O = !0), d.useFriction(0.3).useDuration(0.75), s.start(), o.add(C(fe)), X.preventDefault();
  }
  function Y(X) {
    const j = f.byDistance(0, !1).index !== p.get(), oe = a.pointerUp(X) * W(), ce = G(C(oe), j), ve = sL(oe, ce), fe = $ - 10 * ve, de = y + ve / 50;
    z = !1, V = !1, A.clear(), d.useDuration(fe).useFriction(de), c.distance(ce, !v), F = !1, m.emit("pointerUp");
  }
  function J(X) {
    O && (X.stopPropagation(), X.preventDefault(), O = !1);
  }
  function re() {
    return V;
  }
  return {
    init: ee,
    destroy: te,
    pointerDown: re
  };
}
function pL(e, t) {
  let n, o;
  function a(p) {
    return p.timeStamp;
  }
  function i(p, m) {
    const v = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (Sc(p, t) ? p : p.touches[0])[v];
  }
  function s(p) {
    return n = p, o = p, i(p);
  }
  function c(p) {
    const m = i(p) - i(o), h = a(p) - a(n) > 170;
    return o = p, h && (n = p), m;
  }
  function d(p) {
    if (!n || !o) return 0;
    const m = i(o) - i(n), h = a(p) - a(n), v = a(p) - a(o) > 170, g = m / h;
    return h && !v && Ge(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: s,
    pointerMove: c,
    pointerUp: d,
    readPoint: i
  };
}
function mL() {
  function e(r) {
    const {
      offsetTop: n,
      offsetLeft: o,
      offsetWidth: a,
      offsetHeight: i
    } = r;
    return {
      top: n,
      right: o + a,
      bottom: n + i,
      left: o,
      width: a,
      height: i
    };
  }
  return {
    measure: e
  };
}
function hL(e) {
  function t(n) {
    return e * (n / 100);
  }
  return {
    measure: t
  };
}
function gL(e, t, r, n, o, a, i) {
  const s = [e].concat(n);
  let c, d, f = [], p = !1;
  function m(b) {
    return o.measureSize(i.measure(b));
  }
  function h(b) {
    if (!a) return;
    d = m(e), f = n.map(m);
    function y(w) {
      for (const x of w) {
        if (p) return;
        const C = x.target === e, N = n.indexOf(x.target), P = C ? d : f[N], E = m(C ? e : n[N]);
        if (Ge(E - P) >= 0.5) {
          b.reInit(), t.emit("resize");
          break;
        }
      }
    }
    c = new ResizeObserver((w) => {
      (Ts(a) || a(b, w)) && y(w);
    }), r.requestAnimationFrame(() => {
      s.forEach((w) => c.observe(w));
    });
  }
  function v() {
    p = !0, c && c.disconnect();
  }
  return {
    init: h,
    destroy: v
  };
}
function vL(e, t, r, n, o, a) {
  let i = 0, s = 0, c = o, d = a, f = e.get(), p = 0;
  function m() {
    const P = n.get() - e.get(), E = !c;
    let A = 0;
    return E ? (i = 0, r.set(n), e.set(n), A = P) : (r.set(e), i += P / c, i *= d, f += i, e.add(i), A = f - p), s = Fu(A), p = f, N;
  }
  function h() {
    const P = n.get() - t.get();
    return Ge(P) < 1e-3;
  }
  function v() {
    return c;
  }
  function g() {
    return s;
  }
  function b() {
    return i;
  }
  function y() {
    return x(o);
  }
  function w() {
    return C(a);
  }
  function x(P) {
    return c = P, N;
  }
  function C(P) {
    return d = P, N;
  }
  const N = {
    direction: g,
    duration: v,
    velocity: b,
    seek: m,
    settled: h,
    useBaseFriction: w,
    useBaseDuration: y,
    useFriction: C,
    useDuration: x
  };
  return N;
}
function bL(e, t, r, n, o) {
  const a = o.measure(10), i = o.measure(50), s = fn(0.1, 0.99);
  let c = !1;
  function d() {
    return !(c || !e.reachedAny(r.get()) || !e.reachedAny(t.get()));
  }
  function f(h) {
    if (!d()) return;
    const v = e.reachedMin(t.get()) ? "min" : "max", g = Ge(e[v] - t.get()), b = r.get() - t.get(), y = s.constrain(g / i);
    r.subtract(b * y), !h && Ge(b) < a && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction());
  }
  function p(h) {
    c = !h;
  }
  return {
    shouldConstrain: d,
    constrain: f,
    toggleActive: p
  };
}
function yL(e, t, r, n, o) {
  const a = fn(-t + e, 0), i = p(), s = f(), c = m();
  function d(v, g) {
    return Lo(v, g) <= 1;
  }
  function f() {
    const v = i[0], g = Bt(i), b = i.lastIndexOf(v), y = i.indexOf(g) + 1;
    return fn(b, y);
  }
  function p() {
    return r.map((v, g) => {
      const {
        min: b,
        max: y
      } = a, w = a.constrain(v), x = !g, C = zu(r, g);
      return x ? y : C || d(b, w) ? b : d(y, w) ? y : w;
    }).map((v) => parseFloat(v.toFixed(3)));
  }
  function m() {
    if (t <= e + o) return [a.max];
    if (n === "keepSnaps") return i;
    const {
      min: v,
      max: g
    } = s;
    return i.slice(v, g);
  }
  return {
    snapsContained: c,
    scrollContainLimit: s
  };
}
function wL(e, t, r) {
  const n = t[0], o = r ? n - e : Bt(t);
  return {
    limit: fn(o, n)
  };
}
function xL(e, t, r, n) {
  const a = t.min + 0.1, i = t.max + 0.1, {
    reachedMin: s,
    reachedMax: c
  } = fn(a, i);
  function d(m) {
    return m === 1 ? c(r.get()) : m === -1 ? s(r.get()) : !1;
  }
  function f(m) {
    if (!d(m)) return;
    const h = e * (m * -1);
    n.forEach((v) => v.add(h));
  }
  return {
    loop: f
  };
}
function CL(e) {
  const {
    max: t,
    length: r
  } = e;
  function n(a) {
    const i = a - t;
    return r ? i / -r : 0;
  }
  return {
    get: n
  };
}
function SL(e, t, r, n, o) {
  const {
    startEdge: a,
    endEdge: i
  } = e, {
    groupSlides: s
  } = o, c = p().map(t.measure), d = m(), f = h();
  function p() {
    return s(n).map((g) => Bt(g)[i] - g[0][a]).map(Ge);
  }
  function m() {
    return n.map((g) => r[a] - g[a]).map((g) => -Ge(g));
  }
  function h() {
    return s(d).map((g) => g[0]).map((g, b) => g + c[b]);
  }
  return {
    snaps: d,
    snapsAligned: f
  };
}
function NL(e, t, r, n, o, a) {
  const {
    groupSlides: i
  } = o, {
    min: s,
    max: c
  } = n, d = f();
  function f() {
    const m = i(a), h = !e || t === "keepSnaps";
    return r.length === 1 ? [a] : h ? m : m.slice(s, c).map((v, g, b) => {
      const y = !g, w = zu(b, g);
      if (y) {
        const x = Bt(b[0]) + 1;
        return Cp(x);
      }
      if (w) {
        const x = Ra(a) - Bt(b)[0] + 1;
        return Cp(x, Bt(b)[0]);
      }
      return v;
    });
  }
  return {
    slideRegistry: d
  };
}
function EL(e, t, r, n, o) {
  const {
    reachedAny: a,
    removeOffset: i,
    constrain: s
  } = n;
  function c(v) {
    return v.concat().sort((g, b) => Ge(g) - Ge(b))[0];
  }
  function d(v) {
    const g = e ? i(v) : s(v), b = t.map((w, x) => ({
      diff: f(w - g, 0),
      index: x
    })).sort((w, x) => Ge(w.diff) - Ge(x.diff)), {
      index: y
    } = b[0];
    return {
      index: y,
      distance: g
    };
  }
  function f(v, g) {
    const b = [v, v + r, v - r];
    if (!e) return v;
    if (!g) return c(b);
    const y = b.filter((w) => Fu(w) === g);
    return y.length ? c(y) : Bt(b) - r;
  }
  function p(v, g) {
    const b = t[v] - o.get(), y = f(b, g);
    return {
      index: v,
      distance: y
    };
  }
  function m(v, g) {
    const b = o.get() + v, {
      index: y,
      distance: w
    } = d(b), x = !e && a(b);
    if (!g || x) return {
      index: y,
      distance: v
    };
    const C = t[y] - w, N = v + f(C, 0);
    return {
      index: y,
      distance: N
    };
  }
  return {
    byDistance: m,
    byIndex: p,
    shortcut: f
  };
}
function PL(e, t, r, n, o, a, i) {
  function s(p) {
    const m = p.distance, h = p.index !== t.get();
    a.add(m), m && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), h && (r.set(t.get()), t.set(p.index), i.emit("select"));
  }
  function c(p, m) {
    const h = o.byDistance(p, m);
    s(h);
  }
  function d(p, m) {
    const h = t.clone().set(p), v = o.byIndex(h.get(), m);
    s(v);
  }
  return {
    distance: c,
    index: d
  };
}
function _L(e, t, r, n, o, a, i, s) {
  const c = {
    passive: !0,
    capture: !0
  };
  let d = 0;
  function f(h) {
    if (!s) return;
    function v(g) {
      if ((/* @__PURE__ */ new Date()).getTime() - d > 10) return;
      i.emit("slideFocusStart"), e.scrollLeft = 0;
      const w = r.findIndex((x) => x.includes(g));
      Lu(w) && (o.useDuration(0), n.index(w, 0), i.emit("slideFocus"));
    }
    a.add(document, "keydown", p, !1), t.forEach((g, b) => {
      a.add(g, "focus", (y) => {
        (Ts(s) || s(h, y)) && v(b);
      }, c);
    });
  }
  function p(h) {
    h.code === "Tab" && (d = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: f
  };
}
function Io(e) {
  let t = e;
  function r() {
    return t;
  }
  function n(c) {
    t = i(c);
  }
  function o(c) {
    t += i(c);
  }
  function a(c) {
    t -= i(c);
  }
  function i(c) {
    return Lu(c) ? c : c.get();
  }
  return {
    get: r,
    set: n,
    add: o,
    subtract: a
  };
}
function rx(e, t) {
  const r = e.scroll === "x" ? i : s, n = t.style;
  let o = null, a = !1;
  function i(m) {
    return `translate3d(${m}px,0px,0px)`;
  }
  function s(m) {
    return `translate3d(0px,${m}px,0px)`;
  }
  function c(m) {
    if (a) return;
    const h = lL(e.direction(m));
    h !== o && (n.transform = r(h), o = h);
  }
  function d(m) {
    a = !m;
  }
  function f() {
    a || (n.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: f,
    to: c,
    toggleActive: d
  };
}
function RL(e, t, r, n, o, a, i, s, c) {
  const f = Yo(o), p = Yo(o).reverse(), m = y().concat(w());
  function h(E, A) {
    return E.reduce((R, B) => R - o[B], A);
  }
  function v(E, A) {
    return E.reduce((R, B) => h(R, A) > 0 ? R.concat([B]) : R, []);
  }
  function g(E) {
    return a.map((A, R) => ({
      start: A - n[R] + 0.5 + E,
      end: A + t - 0.5 + E
    }));
  }
  function b(E, A, R) {
    const B = g(A);
    return E.map((M) => {
      const $ = R ? 0 : -r, U = R ? r : 0, L = R ? "end" : "start", K = B[M][L];
      return {
        index: M,
        loopPoint: K,
        slideLocation: Io(-1),
        translate: rx(e, c[M]),
        target: () => s.get() > K ? $ : U
      };
    });
  }
  function y() {
    const E = i[0], A = v(p, E);
    return b(A, r, !1);
  }
  function w() {
    const E = t - i[0] - 1, A = v(f, E);
    return b(A, -r, !0);
  }
  function x() {
    return m.every(({
      index: E
    }) => {
      const A = f.filter((R) => R !== E);
      return h(A, t) <= 0.1;
    });
  }
  function C() {
    m.forEach((E) => {
      const {
        target: A,
        translate: R,
        slideLocation: B
      } = E, M = A();
      M !== B.get() && (R.to(M), B.set(M));
    });
  }
  function N() {
    m.forEach((E) => E.translate.clear());
  }
  return {
    canLoop: x,
    clear: N,
    loop: C,
    loopPoints: m
  };
}
function TL(e, t, r) {
  let n, o = !1;
  function a(c) {
    if (!r) return;
    function d(f) {
      for (const p of f)
        if (p.type === "childList") {
          c.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    n = new MutationObserver((f) => {
      o || (Ts(r) || r(c, f)) && d(f);
    }), n.observe(e, {
      childList: !0
    });
  }
  function i() {
    n && n.disconnect(), o = !0;
  }
  return {
    init: a,
    destroy: i
  };
}
function ML(e, t, r, n) {
  const o = {};
  let a = null, i = null, s, c = !1;
  function d() {
    s = new IntersectionObserver((v) => {
      c || (v.forEach((g) => {
        const b = t.indexOf(g.target);
        o[b] = g;
      }), a = null, i = null, r.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: n
    }), t.forEach((v) => s.observe(v));
  }
  function f() {
    s && s.disconnect(), c = !0;
  }
  function p(v) {
    return qo(o).reduce((g, b) => {
      const y = parseInt(b), {
        isIntersecting: w
      } = o[y];
      return (v && w || !v && !w) && g.push(y), g;
    }, []);
  }
  function m(v = !0) {
    if (v && a) return a;
    if (!v && i) return i;
    const g = p(v);
    return v && (a = g), v || (i = g), g;
  }
  return {
    init: d,
    destroy: f,
    get: m
  };
}
function AL(e, t, r, n, o, a) {
  const {
    measureSize: i,
    startEdge: s,
    endEdge: c
  } = e, d = r[0] && o, f = v(), p = g(), m = r.map(i), h = b();
  function v() {
    if (!d) return 0;
    const w = r[0];
    return Ge(t[s] - w[s]);
  }
  function g() {
    if (!d) return 0;
    const w = a.getComputedStyle(Bt(n));
    return parseFloat(w.getPropertyValue(`margin-${c}`));
  }
  function b() {
    return r.map((w, x, C) => {
      const N = !x, P = zu(C, x);
      return N ? m[x] + f : P ? m[x] + p : C[x + 1][s] - w[s];
    }).map(Ge);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: h,
    startGap: f,
    endGap: p
  };
}
function kL(e, t, r, n, o, a, i, s, c) {
  const {
    startEdge: d,
    endEdge: f,
    direction: p
  } = e, m = Lu(r);
  function h(y, w) {
    return Yo(y).filter((x) => x % w === 0).map((x) => y.slice(x, x + w));
  }
  function v(y) {
    return y.length ? Yo(y).reduce((w, x, C) => {
      const N = Bt(w) || 0, P = N === 0, E = x === Ra(y), A = o[d] - a[N][d], R = o[d] - a[x][f], B = !n && P ? p(i) : 0, M = !n && E ? p(s) : 0, $ = Ge(R - M - (A + B));
      return C && $ > t + c && w.push(x), E && w.push(y.length), w;
    }, []).map((w, x, C) => {
      const N = Math.max(C[x - 1] || 0);
      return y.slice(N, w);
    }) : [];
  }
  function g(y) {
    return m ? h(y, r) : v(y);
  }
  return {
    groupSlides: g
  };
}
function DL(e, t, r, n, o, a, i) {
  const {
    align: s,
    axis: c,
    direction: d,
    startIndex: f,
    loop: p,
    duration: m,
    dragFree: h,
    dragThreshold: v,
    inViewThreshold: g,
    slidesToScroll: b,
    skipSnaps: y,
    containScroll: w,
    watchResize: x,
    watchSlides: C,
    watchDrag: N,
    watchFocus: P
  } = a, E = 2, A = mL(), R = A.measure(t), B = r.map(A.measure), M = uL(c, d), $ = M.measureSize(R), U = hL($), L = cL(s, $), K = !p && !!w, V = p || !!w, {
    slideSizes: z,
    slideSizesWithGaps: O,
    startGap: F,
    endGap: ee
  } = AL(M, R, B, r, V, o), te = kL(M, $, b, p, R, B, F, ee, E), {
    snaps: I,
    snapsAligned: D
  } = SL(M, L, R, B, te), W = -Bt(I) + Bt(O), {
    snapsContained: G,
    scrollContainLimit: Z
  } = yL($, W, D, w, E), k = K ? G : D, {
    limit: Y
  } = wL(W, k, p), J = tx(Ra(k), f, p), re = J.clone(), ne = Yo(r), X = ({
    dragHandler: ut,
    scrollBody: bt,
    scrollBounds: kt,
    options: {
      loop: ot
    }
  }) => {
    ot || kt.constrain(ut.pointerDown()), bt.seek();
  }, q = ({
    scrollBody: ut,
    translate: bt,
    location: kt,
    offsetLocation: ot,
    previousLocation: pt,
    scrollLooper: Rr,
    slideLooper: Zt,
    dragHandler: bo,
    animation: le,
    eventHandler: ye,
    scrollBounds: Ne,
    options: {
      loop: Re
    }
  }, be) => {
    const He = ut.settled(), Je = !Ne.shouldConstrain(), ie = Re ? He : He && Je, pe = ie && !bo.pointerDown();
    pe && le.stop();
    const we = kt.get() * be + pt.get() * (1 - be);
    ot.set(we), Re && (Rr.loop(ut.direction()), Zt.loop()), bt.to(ot.get()), pe && ye.emit("settle"), ie || ye.emit("scroll");
  }, j = dL(n, o, () => X(At), (ut) => q(At, ut)), oe = 0.68, ce = k[J.get()], ve = Io(ce), fe = Io(ce), de = Io(ce), _e = Io(ce), je = vL(ve, de, fe, _e, m, oe), Ae = EL(p, k, W, Y, _e), We = PL(j, J, re, je, Ae, _e, i), at = CL(Y), dt = Xo(), $e = ML(t, r, i, g), {
    slideRegistry: Ue
  } = NL(K, w, k, Z, te, ne), _r = _L(e, r, Ue, We, je, dt, i, P), At = {
    ownerDocument: n,
    ownerWindow: o,
    eventHandler: i,
    containerRect: R,
    slideRects: B,
    animation: j,
    axis: M,
    dragHandler: fL(M, e, n, o, _e, pL(M, o), ve, j, We, je, Ae, J, i, U, h, v, y, oe, N),
    eventStore: dt,
    percentOfView: U,
    index: J,
    indexPrevious: re,
    limit: Y,
    location: ve,
    offsetLocation: de,
    previousLocation: fe,
    options: a,
    resizeHandler: gL(t, i, o, r, M, x, A),
    scrollBody: je,
    scrollBounds: bL(Y, de, _e, je, U),
    scrollLooper: xL(W, Y, de, [ve, de, fe, _e]),
    scrollProgress: at,
    scrollSnapList: k.map(at.get),
    scrollSnaps: k,
    scrollTarget: Ae,
    scrollTo: We,
    slideLooper: RL(M, $, W, z, O, I, k, de, r),
    slideFocus: _r,
    slidesHandler: TL(t, i, C),
    slidesInView: $e,
    slideIndexes: ne,
    slideRegistry: Ue,
    slidesToScroll: te,
    target: _e,
    translate: rx(M, t)
  };
  return At;
}
function OL() {
  let e = {}, t;
  function r(d) {
    t = d;
  }
  function n(d) {
    return e[d] || [];
  }
  function o(d) {
    return n(d).forEach((f) => f(t, d)), c;
  }
  function a(d, f) {
    return e[d] = n(d).concat([f]), c;
  }
  function i(d, f) {
    return e[d] = n(d).filter((p) => p !== f), c;
  }
  function s() {
    e = {};
  }
  const c = {
    init: r,
    emit: o,
    off: i,
    on: a,
    clear: s
  };
  return c;
}
const IL = {
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
function $L(e) {
  function t(a, i) {
    return ex(a, i || {});
  }
  function r(a) {
    const i = a.breakpoints || {}, s = qo(i).filter((c) => e.matchMedia(c).matches).map((c) => i[c]).reduce((c, d) => t(c, d), {});
    return t(a, s);
  }
  function n(a) {
    return a.map((i) => qo(i.breakpoints || {})).reduce((i, s) => i.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: r,
    optionsMediaQueries: n
  };
}
function LL(e) {
  let t = [];
  function r(a, i) {
    return t = i.filter(({
      options: s
    }) => e.optionsAtMedia(s).active !== !1), t.forEach((s) => s.init(a, e)), i.reduce((s, c) => Object.assign(s, {
      [c.name]: c
    }), {});
  }
  function n() {
    t = t.filter((a) => a.destroy());
  }
  return {
    init: r,
    destroy: n
  };
}
function Ti(e, t, r) {
  const n = e.ownerDocument, o = n.defaultView, a = $L(o), i = LL(a), s = Xo(), c = OL(), {
    mergeOptions: d,
    optionsAtMedia: f,
    optionsMediaQueries: p
  } = a, {
    on: m,
    off: h,
    emit: v
  } = c, g = M;
  let b = !1, y, w = d(IL, Ti.globalOptions), x = d(w), C = [], N, P, E;
  function A() {
    const {
      container: ne,
      slides: X
    } = x;
    P = (Cc(ne) ? e.querySelector(ne) : ne) || e.children[0];
    const j = Cc(X) ? P.querySelectorAll(X) : X;
    E = [].slice.call(j || P.children);
  }
  function R(ne) {
    const X = DL(e, P, E, n, o, ne, c);
    if (ne.loop && !X.slideLooper.canLoop()) {
      const q = Object.assign({}, ne, {
        loop: !1
      });
      return R(q);
    }
    return X;
  }
  function B(ne, X) {
    b || (w = d(w, ne), x = f(w), C = X || C, A(), y = R(x), p([w, ...C.map(({
      options: q
    }) => q)]).forEach((q) => s.add(q, "change", M)), x.active && (y.translate.to(y.location.get()), y.animation.init(), y.slidesInView.init(), y.slideFocus.init(re), y.eventHandler.init(re), y.resizeHandler.init(re), y.slidesHandler.init(re), y.options.loop && y.slideLooper.loop(), P.offsetParent && E.length && y.dragHandler.init(re), N = i.init(re, C)));
  }
  function M(ne, X) {
    const q = te();
    $(), B(d({
      startIndex: q
    }, ne), X), c.emit("reInit");
  }
  function $() {
    y.dragHandler.destroy(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), y.animation.destroy(), i.destroy(), s.clear();
  }
  function U() {
    b || (b = !0, s.clear(), $(), c.emit("destroy"), c.clear());
  }
  function L(ne, X, q) {
    !x.active || b || (y.scrollBody.useBaseFriction().useDuration(X === !0 ? 0 : x.duration), y.scrollTo.index(ne, q || 0));
  }
  function K(ne) {
    const X = y.index.add(1).get();
    L(X, ne, -1);
  }
  function V(ne) {
    const X = y.index.add(-1).get();
    L(X, ne, 1);
  }
  function z() {
    return y.index.add(1).get() !== te();
  }
  function O() {
    return y.index.add(-1).get() !== te();
  }
  function F() {
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
  function D() {
    return y.slidesInView.get();
  }
  function W() {
    return y.slidesInView.get(!1);
  }
  function G() {
    return N;
  }
  function Z() {
    return y;
  }
  function k() {
    return e;
  }
  function Y() {
    return P;
  }
  function J() {
    return E;
  }
  const re = {
    canScrollNext: z,
    canScrollPrev: O,
    containerNode: Y,
    internalEngine: Z,
    destroy: U,
    off: h,
    on: m,
    emit: v,
    plugins: G,
    previousScrollSnap: I,
    reInit: g,
    rootNode: k,
    scrollNext: K,
    scrollPrev: V,
    scrollProgress: ee,
    scrollSnapList: F,
    scrollTo: L,
    selectedScrollSnap: te,
    slideNodes: J,
    slidesInView: D,
    slidesNotInView: W
  };
  return B(t, r), setTimeout(() => c.emit("init"), 0), re;
}
Ti.globalOptions = void 0;
function Bu(e = {}, t = []) {
  const r = qe(e), n = qe(t), [o, a] = me(), [i, s] = me(), c = it(() => {
    o && o.reInit(r.current, n.current);
  }, [o]);
  return nt(() => {
    $u(r.current, e) || (r.current = e, c());
  }, [e, c]), nt(() => {
    iL(n.current, t) || (n.current = t, c());
  }, [t, c]), nt(() => {
    if (aL() && i) {
      Ti.globalOptions = Bu.globalOptions;
      const d = Ti(i, r.current, n.current);
      return a(d), () => d.destroy();
    } else
      a(void 0);
  }, [i, a]), [s, o];
}
Bu.globalOptions = void 0;
const nx = u.createContext(null);
function Ms() {
  const e = u.useContext(nx);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const FL = u.forwardRef(
  ({ orientation: e = "horizontal", opts: t, setApi: r, plugins: n, className: o, children: a, ...i }, s) => {
    const [c, d] = Bu(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      n
    ), [f, p] = u.useState(!1), [m, h] = u.useState(!1), v = u.useCallback((w) => {
      w && (p(w.canScrollPrev()), h(w.canScrollNext()));
    }, []), g = u.useCallback(() => {
      d == null || d.scrollPrev();
    }, [d]), b = u.useCallback(() => {
      d == null || d.scrollNext();
    }, [d]), y = u.useCallback(
      (w) => {
        w.key === "ArrowLeft" ? (w.preventDefault(), g()) : w.key === "ArrowRight" && (w.preventDefault(), b());
      },
      [g, b]
    );
    return u.useEffect(() => {
      !d || !r || r(d);
    }, [d, r]), u.useEffect(() => {
      if (d)
        return v(d), d.on("reInit", v), d.on("select", v), () => {
          d == null || d.off("select", v);
        };
    }, [d, v]), /* @__PURE__ */ l(
      nx.Provider,
      {
        value: {
          carouselRef: c,
          api: d,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: g,
          scrollNext: b,
          canScrollPrev: f,
          canScrollNext: m
        },
        children: /* @__PURE__ */ l(
          "div",
          {
            ref: s,
            onKeyDownCapture: y,
            className: T("relative", o),
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
FL.displayName = "Carousel";
const zL = u.forwardRef(
  ({ className: e, ...t }, r) => {
    const { carouselRef: n, orientation: o } = Ms();
    return /* @__PURE__ */ l("div", { ref: n, className: "overflow-hidden", children: /* @__PURE__ */ l(
      "div",
      {
        ref: r,
        className: T("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
        ...t
      }
    ) });
  }
);
zL.displayName = "CarouselContent";
const BL = u.forwardRef(
  ({ className: e, ...t }, r) => {
    const { orientation: n } = Ms();
    return /* @__PURE__ */ l(
      "div",
      {
        ref: r,
        role: "group",
        "aria-roledescription": "slide",
        className: T("min-w-0 shrink-0 grow-0 basis-full", n === "horizontal" ? "pl-4" : "pt-4", e),
        ...t
      }
    );
  }
);
BL.displayName = "CarouselItem";
const jL = u.forwardRef(
  ({ className: e, variant: t = "outline", size: r = "icon", ...n }, o) => {
    const { orientation: a, scrollPrev: i, canScrollPrev: s } = Ms();
    return /* @__PURE__ */ S(
      Ce,
      {
        ref: o,
        variant: t,
        size: r,
        className: T(
          "absolute h-8 w-8 rounded-full",
          a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          e
        ),
        disabled: !s,
        onClick: i,
        ...n,
        children: [
          /* @__PURE__ */ l(aa, { className: "h-4 w-4" }),
          /* @__PURE__ */ l("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
jL.displayName = "CarouselPrevious";
const HL = u.forwardRef(
  ({ className: e, variant: t = "outline", size: r = "icon", ...n }, o) => {
    const { orientation: a, scrollNext: i, canScrollNext: s } = Ms();
    return /* @__PURE__ */ S(
      Ce,
      {
        ref: o,
        variant: t,
        size: r,
        className: T(
          "absolute h-8 w-8 rounded-full",
          a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          e
        ),
        disabled: !s,
        onClick: i,
        ...n,
        children: [
          /* @__PURE__ */ l(Yi, { className: "h-4 w-4" }),
          /* @__PURE__ */ l("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
HL.displayName = "CarouselNext";
var Sp = 1, WL = 0.9, VL = 0.8, GL = 0.17, Sl = 0.1, Nl = 0.999, UL = 0.9999, KL = 0.99, YL = /[\\\/_+.#"@\[\(\{&]/, qL = /[\\\/_+.#"@\[\(\{&]/g, XL = /[\s-]/, ox = /[\s-]/g;
function Nc(e, t, r, n, o, a, i) {
  if (a === t.length) return o === e.length ? Sp : KL;
  var s = `${o},${a}`;
  if (i[s] !== void 0) return i[s];
  for (var c = n.charAt(a), d = r.indexOf(c, o), f = 0, p, m, h, v; d >= 0; ) p = Nc(e, t, r, n, d + 1, a + 1, i), p > f && (d === o ? p *= Sp : YL.test(e.charAt(d - 1)) ? (p *= VL, h = e.slice(o, d - 1).match(qL), h && o > 0 && (p *= Math.pow(Nl, h.length))) : XL.test(e.charAt(d - 1)) ? (p *= WL, v = e.slice(o, d - 1).match(ox), v && o > 0 && (p *= Math.pow(Nl, v.length))) : (p *= GL, o > 0 && (p *= Math.pow(Nl, d - o))), e.charAt(d) !== t.charAt(a) && (p *= UL)), (p < Sl && r.charAt(d - 1) === n.charAt(a + 1) || n.charAt(a + 1) === n.charAt(a) && r.charAt(d - 1) !== n.charAt(a)) && (m = Nc(e, t, r, n, d + 1, a + 2, i), m * Sl > p && (p = m * Sl)), p > f && (f = p), d = r.indexOf(c, d + 1);
  return i[s] = f, f;
}
function Np(e) {
  return e.toLowerCase().replace(ox, " ");
}
function ZL(e, t, r) {
  return e = r && r.length > 0 ? `${e + " " + r.join(" ")}` : e, Nc(e, t, Np(e), Np(t), 0, 0, {});
}
var Po = '[cmdk-group=""]', El = '[cmdk-group-items=""]', QL = '[cmdk-group-heading=""]', ax = '[cmdk-item=""]', Ep = `${ax}:not([aria-disabled="true"])`, Ec = "cmdk-item-select", Dn = "data-value", JL = (e, t, r) => ZL(e, t, r), ix = u.createContext(void 0), Ta = () => u.useContext(ix), sx = u.createContext(void 0), ju = () => u.useContext(sx), lx = u.createContext(void 0), cx = u.forwardRef((e, t) => {
  let r = On(() => {
    var I, D;
    return { search: "", value: (D = (I = e.value) != null ? I : e.defaultValue) != null ? D : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), n = On(() => /* @__PURE__ */ new Set()), o = On(() => /* @__PURE__ */ new Map()), a = On(() => /* @__PURE__ */ new Map()), i = On(() => /* @__PURE__ */ new Set()), s = dx(e), { label: c, children: d, value: f, onValueChange: p, filter: m, shouldFilter: h, loop: v, disablePointerSelection: g = !1, vimBindings: b = !0, ...y } = e, w = ke(), x = ke(), C = ke(), N = u.useRef(null), P = d5();
  pn(() => {
    if (f !== void 0) {
      let I = f.trim();
      r.current.value = I, E.emit();
    }
  }, [f]), pn(() => {
    P(6, U);
  }, []);
  let E = u.useMemo(() => ({ subscribe: (I) => (i.current.add(I), () => i.current.delete(I)), snapshot: () => r.current, setState: (I, D, W) => {
    var G, Z, k, Y;
    if (!Object.is(r.current[I], D)) {
      if (r.current[I] = D, I === "search") $(), B(), P(1, M);
      else if (I === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let J = document.getElementById(C);
          J ? J.focus() : (G = document.getElementById(w)) == null || G.focus();
        }
        if (P(7, () => {
          var J;
          r.current.selectedItemId = (J = L()) == null ? void 0 : J.id, E.emit();
        }), W || P(5, U), ((Z = s.current) == null ? void 0 : Z.value) !== void 0) {
          let J = D ?? "";
          (Y = (k = s.current).onValueChange) == null || Y.call(k, J);
          return;
        }
      }
      E.emit();
    }
  }, emit: () => {
    i.current.forEach((I) => I());
  } }), []), A = u.useMemo(() => ({ value: (I, D, W) => {
    var G;
    D !== ((G = a.current.get(I)) == null ? void 0 : G.value) && (a.current.set(I, { value: D, keywords: W }), r.current.filtered.items.set(I, R(D, W)), P(2, () => {
      B(), E.emit();
    }));
  }, item: (I, D) => (n.current.add(I), D && (o.current.has(D) ? o.current.get(D).add(I) : o.current.set(D, /* @__PURE__ */ new Set([I]))), P(3, () => {
    $(), B(), r.current.value || M(), E.emit();
  }), () => {
    a.current.delete(I), n.current.delete(I), r.current.filtered.items.delete(I);
    let W = L();
    P(4, () => {
      $(), (W == null ? void 0 : W.getAttribute("id")) === I && M(), E.emit();
    });
  }), group: (I) => (o.current.has(I) || o.current.set(I, /* @__PURE__ */ new Set()), () => {
    a.current.delete(I), o.current.delete(I);
  }), filter: () => s.current.shouldFilter, label: c || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: w, inputId: C, labelId: x, listInnerRef: N }), []);
  function R(I, D) {
    var W, G;
    let Z = (G = (W = s.current) == null ? void 0 : W.filter) != null ? G : JL;
    return I ? Z(I, r.current.search, D) : 0;
  }
  function B() {
    if (!r.current.search || s.current.shouldFilter === !1) return;
    let I = r.current.filtered.items, D = [];
    r.current.filtered.groups.forEach((G) => {
      let Z = o.current.get(G), k = 0;
      Z.forEach((Y) => {
        let J = I.get(Y);
        k = Math.max(J, k);
      }), D.push([G, k]);
    });
    let W = N.current;
    K().sort((G, Z) => {
      var k, Y;
      let J = G.getAttribute("id"), re = Z.getAttribute("id");
      return ((k = I.get(re)) != null ? k : 0) - ((Y = I.get(J)) != null ? Y : 0);
    }).forEach((G) => {
      let Z = G.closest(El);
      Z ? Z.appendChild(G.parentElement === Z ? G : G.closest(`${El} > *`)) : W.appendChild(G.parentElement === W ? G : G.closest(`${El} > *`));
    }), D.sort((G, Z) => Z[1] - G[1]).forEach((G) => {
      var Z;
      let k = (Z = N.current) == null ? void 0 : Z.querySelector(`${Po}[${Dn}="${encodeURIComponent(G[0])}"]`);
      k == null || k.parentElement.appendChild(k);
    });
  }
  function M() {
    let I = K().find((W) => W.getAttribute("aria-disabled") !== "true"), D = I == null ? void 0 : I.getAttribute(Dn);
    E.setState("value", D || void 0);
  }
  function $() {
    var I, D, W, G;
    if (!r.current.search || s.current.shouldFilter === !1) {
      r.current.filtered.count = n.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let Z = 0;
    for (let k of n.current) {
      let Y = (D = (I = a.current.get(k)) == null ? void 0 : I.value) != null ? D : "", J = (G = (W = a.current.get(k)) == null ? void 0 : W.keywords) != null ? G : [], re = R(Y, J);
      r.current.filtered.items.set(k, re), re > 0 && Z++;
    }
    for (let [k, Y] of o.current) for (let J of Y) if (r.current.filtered.items.get(J) > 0) {
      r.current.filtered.groups.add(k);
      break;
    }
    r.current.filtered.count = Z;
  }
  function U() {
    var I, D, W;
    let G = L();
    G && (((I = G.parentElement) == null ? void 0 : I.firstChild) === G && ((W = (D = G.closest(Po)) == null ? void 0 : D.querySelector(QL)) == null || W.scrollIntoView({ block: "nearest" })), G.scrollIntoView({ block: "nearest" }));
  }
  function L() {
    var I;
    return (I = N.current) == null ? void 0 : I.querySelector(`${ax}[aria-selected="true"]`);
  }
  function K() {
    var I;
    return Array.from(((I = N.current) == null ? void 0 : I.querySelectorAll(Ep)) || []);
  }
  function V(I) {
    let D = K()[I];
    D && E.setState("value", D.getAttribute(Dn));
  }
  function z(I) {
    var D;
    let W = L(), G = K(), Z = G.findIndex((Y) => Y === W), k = G[Z + I];
    (D = s.current) != null && D.loop && (k = Z + I < 0 ? G[G.length - 1] : Z + I === G.length ? G[0] : G[Z + I]), k && E.setState("value", k.getAttribute(Dn));
  }
  function O(I) {
    let D = L(), W = D == null ? void 0 : D.closest(Po), G;
    for (; W && !G; ) W = I > 0 ? l5(W, Po) : c5(W, Po), G = W == null ? void 0 : W.querySelector(Ep);
    G ? E.setState("value", G.getAttribute(Dn)) : z(I);
  }
  let F = () => V(K().length - 1), ee = (I) => {
    I.preventDefault(), I.metaKey ? F() : I.altKey ? O(1) : z(1);
  }, te = (I) => {
    I.preventDefault(), I.metaKey ? V(0) : I.altKey ? O(-1) : z(-1);
  };
  return u.createElement(Q.div, { ref: t, tabIndex: -1, ...y, "cmdk-root": "", onKeyDown: (I) => {
    var D;
    (D = y.onKeyDown) == null || D.call(y, I);
    let W = I.nativeEvent.isComposing || I.keyCode === 229;
    if (!(I.defaultPrevented || W)) switch (I.key) {
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
        I.preventDefault(), V(0);
        break;
      }
      case "End": {
        I.preventDefault(), F();
        break;
      }
      case "Enter": {
        I.preventDefault();
        let G = L();
        if (G) {
          let Z = new Event(Ec);
          G.dispatchEvent(Z);
        }
      }
    }
  } }, u.createElement("label", { "cmdk-label": "", htmlFor: A.inputId, id: A.labelId, style: f5 }, c), As(e, (I) => u.createElement(sx.Provider, { value: E }, u.createElement(ix.Provider, { value: A }, I))));
}), e5 = u.forwardRef((e, t) => {
  var r, n;
  let o = ke(), a = u.useRef(null), i = u.useContext(lx), s = Ta(), c = dx(e), d = (n = (r = c.current) == null ? void 0 : r.forceMount) != null ? n : i == null ? void 0 : i.forceMount;
  pn(() => {
    if (!d) return s.item(o, i == null ? void 0 : i.id);
  }, [d]);
  let f = ux(o, a, [e.value, e.children, a], e.keywords), p = ju(), m = Hr((P) => P.value && P.value === f.current), h = Hr((P) => d || s.filter() === !1 ? !0 : P.search ? P.filtered.items.get(o) > 0 : !0);
  u.useEffect(() => {
    let P = a.current;
    if (!(!P || e.disabled)) return P.addEventListener(Ec, v), () => P.removeEventListener(Ec, v);
  }, [h, e.onSelect, e.disabled]);
  function v() {
    var P, E;
    g(), (E = (P = c.current).onSelect) == null || E.call(P, f.current);
  }
  function g() {
    p.setState("value", f.current, !0);
  }
  if (!h) return null;
  let { disabled: b, value: y, onSelect: w, forceMount: x, keywords: C, ...N } = e;
  return u.createElement(Q.div, { ref: nr(a, t), ...N, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!b, "aria-selected": !!m, "data-disabled": !!b, "data-selected": !!m, onPointerMove: b || s.getDisablePointerSelection() ? void 0 : g, onClick: b ? void 0 : v }, e.children);
}), t5 = u.forwardRef((e, t) => {
  let { heading: r, children: n, forceMount: o, ...a } = e, i = ke(), s = u.useRef(null), c = u.useRef(null), d = ke(), f = Ta(), p = Hr((h) => o || f.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(i) : !0);
  pn(() => f.group(i), []), ux(i, s, [e.value, e.heading, c]);
  let m = u.useMemo(() => ({ id: i, forceMount: o }), [o]);
  return u.createElement(Q.div, { ref: nr(s, t), ...a, "cmdk-group": "", role: "presentation", hidden: p ? void 0 : !0 }, r && u.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, r), As(e, (h) => u.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": r ? d : void 0 }, u.createElement(lx.Provider, { value: m }, h))));
}), r5 = u.forwardRef((e, t) => {
  let { alwaysRender: r, ...n } = e, o = u.useRef(null), a = Hr((i) => !i.search);
  return !r && !a ? null : u.createElement(Q.div, { ref: nr(o, t), ...n, "cmdk-separator": "", role: "separator" });
}), n5 = u.forwardRef((e, t) => {
  let { onValueChange: r, ...n } = e, o = e.value != null, a = ju(), i = Hr((d) => d.search), s = Hr((d) => d.selectedItemId), c = Ta();
  return u.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), u.createElement(Q.input, { ref: t, ...n, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": s, id: c.inputId, type: "text", value: o ? e.value : i, onChange: (d) => {
    o || a.setState("search", d.target.value), r == null || r(d.target.value);
  } });
}), o5 = u.forwardRef((e, t) => {
  let { children: r, label: n = "Suggestions", ...o } = e, a = u.useRef(null), i = u.useRef(null), s = Hr((d) => d.selectedItemId), c = Ta();
  return u.useEffect(() => {
    if (i.current && a.current) {
      let d = i.current, f = a.current, p, m = new ResizeObserver(() => {
        p = requestAnimationFrame(() => {
          let h = d.offsetHeight;
          f.style.setProperty("--cmdk-list-height", h.toFixed(1) + "px");
        });
      });
      return m.observe(d), () => {
        cancelAnimationFrame(p), m.unobserve(d);
      };
    }
  }, []), u.createElement(Q.div, { ref: nr(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": s, "aria-label": n, id: c.listId }, As(e, (d) => u.createElement("div", { ref: nr(i, c.listInnerRef), "cmdk-list-sizer": "" }, d)));
}), a5 = u.forwardRef((e, t) => {
  let { open: r, onOpenChange: n, overlayClassName: o, contentClassName: a, container: i, ...s } = e;
  return u.createElement(Ca, { open: r, onOpenChange: n }, u.createElement(Sa, { container: i }, u.createElement(bn, { "cmdk-overlay": "", className: o }), u.createElement(yn, { "aria-label": e.label, "cmdk-dialog": "", className: a }, u.createElement(cx, { ref: t, ...s }))));
}), i5 = u.forwardRef((e, t) => Hr((r) => r.filtered.count === 0) ? u.createElement(Q.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), s5 = u.forwardRef((e, t) => {
  let { progress: r, children: n, label: o = "Loading...", ...a } = e;
  return u.createElement(Q.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": r, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, As(e, (i) => u.createElement("div", { "aria-hidden": !0 }, i)));
}), vt = Object.assign(cx, { List: o5, Item: e5, Input: n5, Group: t5, Separator: r5, Dialog: a5, Empty: i5, Loading: s5 });
function l5(e, t) {
  let r = e.nextElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.nextElementSibling;
  }
}
function c5(e, t) {
  let r = e.previousElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.previousElementSibling;
  }
}
function dx(e) {
  let t = u.useRef(e);
  return pn(() => {
    t.current = e;
  }), t;
}
var pn = typeof window > "u" ? u.useEffect : u.useLayoutEffect;
function On(e) {
  let t = u.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Hr(e) {
  let t = ju(), r = () => e(t.snapshot());
  return u.useSyncExternalStore(t.subscribe, r, r);
}
function ux(e, t, r, n = []) {
  let o = u.useRef(), a = Ta();
  return pn(() => {
    var i;
    let s = (() => {
      var d;
      for (let f of r) {
        if (typeof f == "string") return f.trim();
        if (typeof f == "object" && "current" in f) return f.current ? (d = f.current.textContent) == null ? void 0 : d.trim() : o.current;
      }
    })(), c = n.map((d) => d.trim());
    a.value(e, s, c), (i = t.current) == null || i.setAttribute(Dn, s), o.current = s;
  }), o;
}
var d5 = () => {
  let [e, t] = u.useState(), r = On(() => /* @__PURE__ */ new Map());
  return pn(() => {
    r.current.forEach((n) => n()), r.current = /* @__PURE__ */ new Map();
  }, [e]), (n, o) => {
    r.current.set(n, o), t({});
  };
};
function u5(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function As({ asChild: e, children: t }, r) {
  return e && u.isValidElement(t) ? u.cloneElement(u5(t), { ref: t.ref }, r(t.props.children)) : r(t);
}
var f5 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const p5 = Ca, Cq = vs, m5 = Sa, Sq = wn, fx = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  bn,
  {
    ref: r,
    className: T(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
fx.displayName = bn.displayName;
const px = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ S(m5, { children: [
  /* @__PURE__ */ l(fx, {}),
  /* @__PURE__ */ S(
    yn,
    {
      ref: n,
      className: T(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ S(wn, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ l(to, { className: "h-4 w-4" }),
          /* @__PURE__ */ l("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
px.displayName = yn.displayName;
const h5 = ({ className: e, ...t }) => /* @__PURE__ */ l("div", { className: T("flex flex-col space-y-1.5 text-center sm:text-left", e), ...t });
h5.displayName = "DialogHeader";
const g5 = ({ className: e, ...t }) => /* @__PURE__ */ l("div", { className: T("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e), ...t });
g5.displayName = "DialogFooter";
const v5 = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  co,
  {
    ref: r,
    className: T("text-lg font-semibold leading-none tracking-tight", e),
    ...t
  }
));
v5.displayName = co.displayName;
const b5 = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(uo, { ref: r, className: T("text-sm text-muted-foreground", e), ...t }));
b5.displayName = uo.displayName;
const mx = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  vt,
  {
    ref: r,
    className: T(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
mx.displayName = vt.displayName;
const Nq = ({ children: e, ...t }) => /* @__PURE__ */ l(p5, { ...t, children: /* @__PURE__ */ l(px, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ l(mx, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), y5 = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ S("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ l(Xi, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ l(
    vt.Input,
    {
      ref: r,
      className: T(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
y5.displayName = vt.Input.displayName;
const w5 = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  vt.List,
  {
    ref: r,
    className: T("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
w5.displayName = vt.List.displayName;
const x5 = u.forwardRef((e, t) => /* @__PURE__ */ l(vt.Empty, { ref: t, className: "py-6 text-center text-sm", ...e }));
x5.displayName = vt.Empty.displayName;
const C5 = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  vt.Group,
  {
    ref: r,
    className: T(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
C5.displayName = vt.Group.displayName;
const S5 = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(vt.Separator, { ref: r, className: T("-mx-1 h-px bg-border", e), ...t }));
S5.displayName = vt.Separator.displayName;
const N5 = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  vt.Item,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      e
    ),
    ...t
  }
));
N5.displayName = vt.Item.displayName;
const E5 = ({ className: e, ...t }) => /* @__PURE__ */ l("span", { className: T("ml-auto text-xs tracking-widest text-muted-foreground", e), ...t });
E5.displayName = "CommandShortcut";
var Wa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ur(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var P5 = Array.isArray, qt = P5, _5 = typeof Wa == "object" && Wa && Wa.Object === Object && Wa, hx = _5, R5 = hx, T5 = typeof self == "object" && self && self.Object === Object && self, M5 = R5 || T5 || Function("return this")(), fr = M5, A5 = fr, k5 = A5.Symbol, Ma = k5, Pp = Ma, gx = Object.prototype, D5 = gx.hasOwnProperty, O5 = gx.toString, _o = Pp ? Pp.toStringTag : void 0;
function I5(e) {
  var t = D5.call(e, _o), r = e[_o];
  try {
    e[_o] = void 0;
    var n = !0;
  } catch {
  }
  var o = O5.call(e);
  return n && (t ? e[_o] = r : delete e[_o]), o;
}
var $5 = I5, L5 = Object.prototype, F5 = L5.toString;
function z5(e) {
  return F5.call(e);
}
var B5 = z5, _p = Ma, j5 = $5, H5 = B5, W5 = "[object Null]", V5 = "[object Undefined]", Rp = _p ? _p.toStringTag : void 0;
function G5(e) {
  return e == null ? e === void 0 ? V5 : W5 : Rp && Rp in Object(e) ? j5(e) : H5(e);
}
var Cn = G5;
function U5(e) {
  return e != null && typeof e == "object";
}
var Sn = U5, K5 = Cn, Y5 = Sn, q5 = "[object Symbol]";
function X5(e) {
  return typeof e == "symbol" || Y5(e) && K5(e) == q5;
}
var Aa = X5, Z5 = qt, Q5 = Aa, J5 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, e4 = /^\w*$/;
function t4(e, t) {
  if (Z5(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Q5(e) ? !0 : e4.test(e) || !J5.test(e) || t != null && e in Object(t);
}
var Hu = t4;
function r4(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Yr = r4;
const vx = /* @__PURE__ */ ur(Yr);
var n4 = Cn, o4 = Yr, a4 = "[object AsyncFunction]", i4 = "[object Function]", s4 = "[object GeneratorFunction]", l4 = "[object Proxy]";
function c4(e) {
  if (!o4(e))
    return !1;
  var t = n4(e);
  return t == i4 || t == s4 || t == a4 || t == l4;
}
var Wu = c4;
const Mi = /* @__PURE__ */ ur(Wu);
var d4 = fr, u4 = d4["__core-js_shared__"], f4 = u4, Pl = f4, Tp = function() {
  var e = /[^.]+$/.exec(Pl && Pl.keys && Pl.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function p4(e) {
  return !!Tp && Tp in e;
}
var m4 = p4, h4 = Function.prototype, g4 = h4.toString;
function v4(e) {
  if (e != null) {
    try {
      return g4.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var bx = v4, b4 = Wu, y4 = m4, w4 = Yr, x4 = bx, C4 = /[\\^$.*+?()[\]{}|]/g, S4 = /^\[object .+?Constructor\]$/, N4 = Function.prototype, E4 = Object.prototype, P4 = N4.toString, _4 = E4.hasOwnProperty, R4 = RegExp(
  "^" + P4.call(_4).replace(C4, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function T4(e) {
  if (!w4(e) || y4(e))
    return !1;
  var t = b4(e) ? R4 : S4;
  return t.test(x4(e));
}
var M4 = T4;
function A4(e, t) {
  return e == null ? void 0 : e[t];
}
var k4 = A4, D4 = M4, O4 = k4;
function I4(e, t) {
  var r = O4(e, t);
  return D4(r) ? r : void 0;
}
var Nn = I4, $4 = Nn, L4 = $4(Object, "create"), ks = L4, Mp = ks;
function F4() {
  this.__data__ = Mp ? Mp(null) : {}, this.size = 0;
}
var z4 = F4;
function B4(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var j4 = B4, H4 = ks, W4 = "__lodash_hash_undefined__", V4 = Object.prototype, G4 = V4.hasOwnProperty;
function U4(e) {
  var t = this.__data__;
  if (H4) {
    var r = t[e];
    return r === W4 ? void 0 : r;
  }
  return G4.call(t, e) ? t[e] : void 0;
}
var K4 = U4, Y4 = ks, q4 = Object.prototype, X4 = q4.hasOwnProperty;
function Z4(e) {
  var t = this.__data__;
  return Y4 ? t[e] !== void 0 : X4.call(t, e);
}
var Q4 = Z4, J4 = ks, e3 = "__lodash_hash_undefined__";
function t3(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = J4 && t === void 0 ? e3 : t, this;
}
var r3 = t3, n3 = z4, o3 = j4, a3 = K4, i3 = Q4, s3 = r3;
function po(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
po.prototype.clear = n3;
po.prototype.delete = o3;
po.prototype.get = a3;
po.prototype.has = i3;
po.prototype.set = s3;
var l3 = po;
function c3() {
  this.__data__ = [], this.size = 0;
}
var d3 = c3;
function u3(e, t) {
  return e === t || e !== e && t !== t;
}
var Vu = u3, f3 = Vu;
function p3(e, t) {
  for (var r = e.length; r--; )
    if (f3(e[r][0], t))
      return r;
  return -1;
}
var Ds = p3, m3 = Ds, h3 = Array.prototype, g3 = h3.splice;
function v3(e) {
  var t = this.__data__, r = m3(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : g3.call(t, r, 1), --this.size, !0;
}
var b3 = v3, y3 = Ds;
function w3(e) {
  var t = this.__data__, r = y3(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var x3 = w3, C3 = Ds;
function S3(e) {
  return C3(this.__data__, e) > -1;
}
var N3 = S3, E3 = Ds;
function P3(e, t) {
  var r = this.__data__, n = E3(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var _3 = P3, R3 = d3, T3 = b3, M3 = x3, A3 = N3, k3 = _3;
function mo(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
mo.prototype.clear = R3;
mo.prototype.delete = T3;
mo.prototype.get = M3;
mo.prototype.has = A3;
mo.prototype.set = k3;
var Os = mo, D3 = Nn, O3 = fr, I3 = D3(O3, "Map"), Gu = I3, Ap = l3, $3 = Os, L3 = Gu;
function F3() {
  this.size = 0, this.__data__ = {
    hash: new Ap(),
    map: new (L3 || $3)(),
    string: new Ap()
  };
}
var z3 = F3;
function B3(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var j3 = B3, H3 = j3;
function W3(e, t) {
  var r = e.__data__;
  return H3(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Is = W3, V3 = Is;
function G3(e) {
  var t = V3(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var U3 = G3, K3 = Is;
function Y3(e) {
  return K3(this, e).get(e);
}
var q3 = Y3, X3 = Is;
function Z3(e) {
  return X3(this, e).has(e);
}
var Q3 = Z3, J3 = Is;
function eF(e, t) {
  var r = J3(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var tF = eF, rF = z3, nF = U3, oF = q3, aF = Q3, iF = tF;
function ho(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ho.prototype.clear = rF;
ho.prototype.delete = nF;
ho.prototype.get = oF;
ho.prototype.has = aF;
ho.prototype.set = iF;
var Uu = ho, yx = Uu, sF = "Expected a function";
function Ku(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(sF);
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(o))
      return a.get(o);
    var i = e.apply(this, n);
    return r.cache = a.set(o, i) || a, i;
  };
  return r.cache = new (Ku.Cache || yx)(), r;
}
Ku.Cache = yx;
var lF = Ku, cF = lF, dF = 500;
function uF(e) {
  var t = cF(e, function(n) {
    return r.size === dF && r.clear(), n;
  }), r = t.cache;
  return t;
}
var fF = uF, pF = fF, mF = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, hF = /\\(\\)?/g, gF = pF(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(mF, function(r, n, o, a) {
    t.push(o ? a.replace(hF, "$1") : n || r);
  }), t;
}), vF = gF;
function bF(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}
var wx = bF, kp = Ma, yF = wx, wF = qt, xF = Aa, CF = 1 / 0, Dp = kp ? kp.prototype : void 0, Op = Dp ? Dp.toString : void 0;
function xx(e) {
  if (typeof e == "string")
    return e;
  if (wF(e))
    return yF(e, xx) + "";
  if (xF(e))
    return Op ? Op.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -CF ? "-0" : t;
}
var SF = xx, NF = SF;
function EF(e) {
  return e == null ? "" : NF(e);
}
var Cx = EF, PF = qt, _F = Hu, RF = vF, TF = Cx;
function MF(e, t) {
  return PF(e) ? e : _F(e, t) ? [e] : RF(TF(e));
}
var Sx = MF, AF = Aa, kF = 1 / 0;
function DF(e) {
  if (typeof e == "string" || AF(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -kF ? "-0" : t;
}
var $s = DF, OF = Sx, IF = $s;
function $F(e, t) {
  t = OF(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[IF(t[r++])];
  return r && r == n ? e : void 0;
}
var Yu = $F, LF = Yu;
function FF(e, t, r) {
  var n = e == null ? void 0 : LF(e, t);
  return n === void 0 ? r : n;
}
var zF = FF;
function BF(e) {
  return e == null;
}
var jF = BF;
const HF = /* @__PURE__ */ ur(jF);
var WF = Cn, VF = qt, GF = Sn, UF = "[object String]";
function KF(e) {
  return typeof e == "string" || !VF(e) && GF(e) && WF(e) == UF;
}
var YF = KF;
const Nx = /* @__PURE__ */ ur(YF);
var Ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ip;
function qF() {
  if (Ip) return Ee;
  Ip = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function g(b) {
    if (typeof b == "object" && b !== null) {
      var y = b.$$typeof;
      switch (y) {
        case e:
          switch (b = b.type, b) {
            case r:
            case o:
            case n:
            case d:
            case f:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case i:
                case c:
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
  return Ee.ContextConsumer = i, Ee.ContextProvider = a, Ee.Element = e, Ee.ForwardRef = c, Ee.Fragment = r, Ee.Lazy = m, Ee.Memo = p, Ee.Portal = t, Ee.Profiler = o, Ee.StrictMode = n, Ee.Suspense = d, Ee.SuspenseList = f, Ee.isAsyncMode = function() {
    return !1;
  }, Ee.isConcurrentMode = function() {
    return !1;
  }, Ee.isContextConsumer = function(b) {
    return g(b) === i;
  }, Ee.isContextProvider = function(b) {
    return g(b) === a;
  }, Ee.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, Ee.isForwardRef = function(b) {
    return g(b) === c;
  }, Ee.isFragment = function(b) {
    return g(b) === r;
  }, Ee.isLazy = function(b) {
    return g(b) === m;
  }, Ee.isMemo = function(b) {
    return g(b) === p;
  }, Ee.isPortal = function(b) {
    return g(b) === t;
  }, Ee.isProfiler = function(b) {
    return g(b) === o;
  }, Ee.isStrictMode = function(b) {
    return g(b) === n;
  }, Ee.isSuspense = function(b) {
    return g(b) === d;
  }, Ee.isSuspenseList = function(b) {
    return g(b) === f;
  }, Ee.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === o || b === n || b === d || b === f || b === h || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === p || b.$$typeof === a || b.$$typeof === i || b.$$typeof === c || b.$$typeof === v || b.getModuleId !== void 0);
  }, Ee.typeOf = g, Ee;
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
var $p;
function XF() {
  return $p || ($p = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v = !1, g = !1, b = !1, y = !1, w = !1, x;
    x = Symbol.for("react.module.reference");
    function C(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === r || j === o || w || j === n || j === d || j === f || y || j === h || v || g || b || typeof j == "object" && j !== null && (j.$$typeof === m || j.$$typeof === p || j.$$typeof === a || j.$$typeof === i || j.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === x || j.getModuleId !== void 0));
    }
    function N(j) {
      if (typeof j == "object" && j !== null) {
        var oe = j.$$typeof;
        switch (oe) {
          case e:
            var ce = j.type;
            switch (ce) {
              case r:
              case o:
              case n:
              case d:
              case f:
                return ce;
              default:
                var ve = ce && ce.$$typeof;
                switch (ve) {
                  case s:
                  case i:
                  case c:
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
    var P = i, E = a, A = e, R = c, B = r, M = m, $ = p, U = t, L = o, K = n, V = d, z = f, O = !1, F = !1;
    function ee(j) {
      return O || (O = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function te(j) {
      return F || (F = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function I(j) {
      return N(j) === i;
    }
    function D(j) {
      return N(j) === a;
    }
    function W(j) {
      return typeof j == "object" && j !== null && j.$$typeof === e;
    }
    function G(j) {
      return N(j) === c;
    }
    function Z(j) {
      return N(j) === r;
    }
    function k(j) {
      return N(j) === m;
    }
    function Y(j) {
      return N(j) === p;
    }
    function J(j) {
      return N(j) === t;
    }
    function re(j) {
      return N(j) === o;
    }
    function ne(j) {
      return N(j) === n;
    }
    function X(j) {
      return N(j) === d;
    }
    function q(j) {
      return N(j) === f;
    }
    Pe.ContextConsumer = P, Pe.ContextProvider = E, Pe.Element = A, Pe.ForwardRef = R, Pe.Fragment = B, Pe.Lazy = M, Pe.Memo = $, Pe.Portal = U, Pe.Profiler = L, Pe.StrictMode = K, Pe.Suspense = V, Pe.SuspenseList = z, Pe.isAsyncMode = ee, Pe.isConcurrentMode = te, Pe.isContextConsumer = I, Pe.isContextProvider = D, Pe.isElement = W, Pe.isForwardRef = G, Pe.isFragment = Z, Pe.isLazy = k, Pe.isMemo = Y, Pe.isPortal = J, Pe.isProfiler = re, Pe.isStrictMode = ne, Pe.isSuspense = X, Pe.isSuspenseList = q, Pe.isValidElementType = C, Pe.typeOf = N;
  }()), Pe;
}
process.env.NODE_ENV === "production" ? qF() : XF();
var ZF = Cn, QF = Sn, JF = "[object Number]";
function ez(e) {
  return typeof e == "number" || QF(e) && ZF(e) == JF;
}
var Ex = ez;
const tz = /* @__PURE__ */ ur(Ex);
var rz = Ex;
function nz(e) {
  return rz(e) && e != +e;
}
var oz = nz;
const az = /* @__PURE__ */ ur(oz);
var Va = function(t) {
  return Nx(t) && t.indexOf("%") === t.length - 1;
}, Lt = function(t) {
  return tz(t) && !az(t);
}, Ai = function(t) {
  return Lt(t) || Nx(t);
};
function Pc(e) {
  "@babel/helpers - typeof";
  return Pc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pc(e);
}
var iz = ["viewBox", "children"], sz = [
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
], Lp = ["points", "pathLength"], _l = {
  svg: iz,
  polygon: Lp,
  polyline: Lp
}, Px = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], lz = function(t, r, n) {
  return function(o) {
    return t(r, n, o), null;
  };
}, cz = function(t, r, n) {
  if (!vx(t) || Pc(t) !== "object")
    return null;
  var o = null;
  return Object.keys(t).forEach(function(a) {
    var i = t[a];
    Px.includes(a) && typeof i == "function" && (o || (o = {}), o[a] = lz(i, r, n));
  }), o;
}, dz = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, uz = function(t, r, n, o) {
  var a, i = (a = _l == null ? void 0 : _l[o]) !== null && a !== void 0 ? a : [];
  return r.startsWith("data-") || !Mi(t) && (o && i.includes(r) || sz.includes(r)) || Px.includes(r);
}, _x = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var o = t;
  if (/* @__PURE__ */ Qa(t) && (o = t.props), !vx(o))
    return null;
  var a = {};
  return Object.keys(o).forEach(function(i) {
    var s;
    uz((s = o) === null || s === void 0 ? void 0 : s[i], i, r, n) && (a[i] = o[i]);
  }), a;
}, fz = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function _c() {
  return _c = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _c.apply(this, arguments);
}
function pz(e, t) {
  if (e == null) return {};
  var r = mz(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function mz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function hz(e) {
  var t = e.children, r = e.width, n = e.height, o = e.viewBox, a = e.className, i = e.style, s = e.title, c = e.desc, d = pz(e, fz), f = o || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, p = yr("recharts-surface", a);
  return /* @__PURE__ */ _.createElement("svg", _c({}, _x(d, !0, "svg"), {
    className: p,
    width: r,
    height: n,
    style: i,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
  }), /* @__PURE__ */ _.createElement("title", null, s), /* @__PURE__ */ _.createElement("desc", null, c), t);
}
var gz = process.env.NODE_ENV !== "production", si = function(t, r) {
  for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    o[a - 2] = arguments[a];
  if (gz && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(r.replace(/%s/g, function() {
        return o[i++];
      }));
    }
};
function vz(e, t, r) {
  var n = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), r = r > o ? o : r, r < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(o); ++n < o; )
    a[n] = e[n + t];
  return a;
}
var bz = vz, yz = bz;
function wz(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : yz(e, t, r);
}
var xz = wz, Cz = "\\ud800-\\udfff", Sz = "\\u0300-\\u036f", Nz = "\\ufe20-\\ufe2f", Ez = "\\u20d0-\\u20ff", Pz = Sz + Nz + Ez, _z = "\\ufe0e\\ufe0f", Rz = "\\u200d", Tz = RegExp("[" + Rz + Cz + Pz + _z + "]");
function Mz(e) {
  return Tz.test(e);
}
var Rx = Mz;
function Az(e) {
  return e.split("");
}
var kz = Az, Tx = "\\ud800-\\udfff", Dz = "\\u0300-\\u036f", Oz = "\\ufe20-\\ufe2f", Iz = "\\u20d0-\\u20ff", $z = Dz + Oz + Iz, Lz = "\\ufe0e\\ufe0f", Fz = "[" + Tx + "]", Rc = "[" + $z + "]", Tc = "\\ud83c[\\udffb-\\udfff]", zz = "(?:" + Rc + "|" + Tc + ")", Mx = "[^" + Tx + "]", Ax = "(?:\\ud83c[\\udde6-\\uddff]){2}", kx = "[\\ud800-\\udbff][\\udc00-\\udfff]", Bz = "\\u200d", Dx = zz + "?", Ox = "[" + Lz + "]?", jz = "(?:" + Bz + "(?:" + [Mx, Ax, kx].join("|") + ")" + Ox + Dx + ")*", Hz = Ox + Dx + jz, Wz = "(?:" + [Mx + Rc + "?", Rc, Ax, kx, Fz].join("|") + ")", Vz = RegExp(Tc + "(?=" + Tc + ")|" + Wz + Hz, "g");
function Gz(e) {
  return e.match(Vz) || [];
}
var Uz = Gz, Kz = kz, Yz = Rx, qz = Uz;
function Xz(e) {
  return Yz(e) ? qz(e) : Kz(e);
}
var Zz = Xz, Qz = xz, Jz = Rx, eB = Zz, tB = Cx;
function rB(e) {
  return function(t) {
    t = tB(t);
    var r = Jz(t) ? eB(t) : void 0, n = r ? r[0] : t.charAt(0), o = r ? Qz(r, 1).join("") : t.slice(1);
    return n[e]() + o;
  };
}
var nB = rB, oB = nB, aB = oB("toUpperCase"), iB = aB;
const Ix = /* @__PURE__ */ ur(iB);
function Ga(e) {
  return function() {
    return e;
  };
}
const $x = Math.cos, ki = Math.sin, Xt = Math.sqrt, Di = Math.PI, Ls = 2 * Di, Mc = Math.PI, Ac = 2 * Mc, Jr = 1e-6, sB = Ac - Jr;
function Lx(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function lB(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Lx;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let o = 1, a = n.length; o < a; ++o)
      this._ += Math.round(arguments[o] * r) / r + n[o];
  };
}
class cB {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Lx : lB(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, o) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +o}`;
  }
  bezierCurveTo(t, r, n, o, a, i) {
    this._append`C${+t},${+r},${+n},${+o},${this._x1 = +a},${this._y1 = +i}`;
  }
  arcTo(t, r, n, o, a) {
    if (t = +t, r = +r, n = +n, o = +o, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let i = this._x1, s = this._y1, c = n - t, d = o - r, f = i - t, p = s - r, m = f * f + p * p;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (m > Jr) if (!(Math.abs(p * c - d * f) > Jr) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = n - i, v = o - s, g = c * c + d * d, b = h * h + v * v, y = Math.sqrt(g), w = Math.sqrt(m), x = a * Math.tan((Mc - Math.acos((g + m - b) / (2 * y * w))) / 2), C = x / w, N = x / y;
      Math.abs(C - 1) > Jr && this._append`L${t + C * f},${r + C * p}`, this._append`A${a},${a},0,0,${+(p * h > f * v)},${this._x1 = t + N * c},${this._y1 = r + N * d}`;
    }
  }
  arc(t, r, n, o, a, i) {
    if (t = +t, r = +r, n = +n, i = !!i, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(o), c = n * Math.sin(o), d = t + s, f = r + c, p = 1 ^ i, m = i ? o - a : a - o;
    this._x1 === null ? this._append`M${d},${f}` : (Math.abs(this._x1 - d) > Jr || Math.abs(this._y1 - f) > Jr) && this._append`L${d},${f}`, n && (m < 0 && (m = m % Ac + Ac), m > sB ? this._append`A${n},${n},0,1,${p},${t - s},${r - c}A${n},${n},0,1,${p},${this._x1 = d},${this._y1 = f}` : m > Jr && this._append`A${n},${n},0,${+(m >= Mc)},${p},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+o}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function dB(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new cB(t);
}
const qu = {
  draw(e, t) {
    const r = Xt(t / Di);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Ls);
  }
}, uB = {
  draw(e, t) {
    const r = Xt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, Fx = Xt(1 / 3), fB = Fx * 2, pB = {
  draw(e, t) {
    const r = Xt(t / fB), n = r * Fx;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, mB = {
  draw(e, t) {
    const r = Xt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, hB = 0.8908130915292852, zx = ki(Di / 10) / ki(7 * Di / 10), gB = ki(Ls / 10) * zx, vB = -$x(Ls / 10) * zx, bB = {
  draw(e, t) {
    const r = Xt(t * hB), n = gB * r, o = vB * r;
    e.moveTo(0, -r), e.lineTo(n, o);
    for (let a = 1; a < 5; ++a) {
      const i = Ls * a / 5, s = $x(i), c = ki(i);
      e.lineTo(c * r, -s * r), e.lineTo(s * n - c * o, c * n + s * o);
    }
    e.closePath();
  }
}, Rl = Xt(3), yB = {
  draw(e, t) {
    const r = -Xt(t / (Rl * 3));
    e.moveTo(0, r * 2), e.lineTo(-Rl * r, -r), e.lineTo(Rl * r, -r), e.closePath();
  }
}, Nt = -0.5, Et = Xt(3) / 2, kc = 1 / Xt(12), wB = (kc / 2 + 1) * 3, xB = {
  draw(e, t) {
    const r = Xt(t / wB), n = r / 2, o = r * kc, a = n, i = r * kc + r, s = -a, c = i;
    e.moveTo(n, o), e.lineTo(a, i), e.lineTo(s, c), e.lineTo(Nt * n - Et * o, Et * n + Nt * o), e.lineTo(Nt * a - Et * i, Et * a + Nt * i), e.lineTo(Nt * s - Et * c, Et * s + Nt * c), e.lineTo(Nt * n + Et * o, Nt * o - Et * n), e.lineTo(Nt * a + Et * i, Nt * i - Et * a), e.lineTo(Nt * s + Et * c, Nt * c - Et * s), e.closePath();
  }
};
function CB(e, t) {
  let r = null, n = dB(o);
  e = typeof e == "function" ? e : Ga(e || qu), t = typeof t == "function" ? t : Ga(t === void 0 ? 64 : +t);
  function o() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return o.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : Ga(a), o) : e;
  }, o.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : Ga(+a), o) : t;
  }, o.context = function(a) {
    return arguments.length ? (r = a ?? null, o) : r;
  }, o;
}
function Zo(e) {
  "@babel/helpers - typeof";
  return Zo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zo(e);
}
var SB = ["type", "size", "sizeType"];
function Dc() {
  return Dc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Dc.apply(this, arguments);
}
function Fp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fp(Object(r), !0).forEach(function(n) {
      NB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function NB(e, t, r) {
  return t = EB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function EB(e) {
  var t = PB(e, "string");
  return Zo(t) == "symbol" ? t : t + "";
}
function PB(e, t) {
  if (Zo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _B(e, t) {
  if (e == null) return {};
  var r = RB(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function RB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Bx = {
  symbolCircle: qu,
  symbolCross: uB,
  symbolDiamond: pB,
  symbolSquare: mB,
  symbolStar: bB,
  symbolTriangle: yB,
  symbolWye: xB
}, TB = Math.PI / 180, MB = function(t) {
  var r = "symbol".concat(Ix(t));
  return Bx[r] || qu;
}, AB = function(t, r, n) {
  if (r === "area")
    return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var o = 18 * TB;
      return 1.25 * t * t * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, kB = function(t, r) {
  Bx["symbol".concat(Ix(t))] = r;
}, jx = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, o = t.size, a = o === void 0 ? 64 : o, i = t.sizeType, s = i === void 0 ? "area" : i, c = _B(t, SB), d = zp(zp({}, c), {}, {
    type: n,
    size: a,
    sizeType: s
  }), f = function() {
    var b = MB(n), y = CB().type(b).size(AB(a, s, n));
    return y();
  }, p = d.className, m = d.cx, h = d.cy, v = _x(d, !0);
  return m === +m && h === +h && a === +a ? /* @__PURE__ */ _.createElement("path", Dc({}, v, {
    className: yr("recharts-symbols", p),
    transform: "translate(".concat(m, ", ").concat(h, ")"),
    d: f()
  })) : null;
};
jx.registerSymbol = kB;
function Yn(e) {
  "@babel/helpers - typeof";
  return Yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yn(e);
}
function Oc() {
  return Oc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Oc.apply(this, arguments);
}
function Bp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function DB(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bp(Object(r), !0).forEach(function(n) {
      Qo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function OB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function IB(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Wx(n.key), n);
  }
}
function $B(e, t, r) {
  return t && IB(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function LB(e, t, r) {
  return t = Oi(t), FB(e, Hx() ? Reflect.construct(t, r || [], Oi(e).constructor) : t.apply(e, r));
}
function FB(e, t) {
  if (t && (Yn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return zB(e);
}
function zB(e) {
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
function Oi(e) {
  return Oi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Oi(e);
}
function BB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ic(e, t);
}
function Ic(e, t) {
  return Ic = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Ic(e, t);
}
function Qo(e, t, r) {
  return t = Wx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Wx(e) {
  var t = jB(e, "string");
  return Yn(t) == "symbol" ? t : t + "";
}
function jB(e, t) {
  if (Yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pt = 32, Xu = /* @__PURE__ */ function(e) {
  function t() {
    return OB(this, t), LB(this, t, arguments);
  }
  return BB(t, e), $B(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var o = this.props.inactiveColor, a = Pt / 2, i = Pt / 6, s = Pt / 3, c = n.inactive ? o : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ _.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: Pt,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ _.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            d: "M0,".concat(a, "h").concat(s, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(Pt, "M").concat(2 * s, ",").concat(a, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(s, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ _.createElement("path", {
            stroke: "none",
            fill: c,
            d: "M0,".concat(Pt / 8, "h").concat(Pt, "v").concat(Pt * 3 / 4, "h").concat(-Pt, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ _.isValidElement(n.legendIcon)) {
          var d = DB({}, n);
          return delete d.legendIcon, /* @__PURE__ */ _.cloneElement(n.legendIcon, d);
        }
        return /* @__PURE__ */ _.createElement(jx, {
          fill: c,
          cx: a,
          cy: a,
          size: Pt,
          sizeType: "diameter",
          type: n.type
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
      var n = this, o = this.props, a = o.payload, i = o.iconSize, s = o.layout, c = o.formatter, d = o.inactiveColor, f = {
        x: 0,
        y: 0,
        width: Pt,
        height: Pt
      }, p = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, m = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(h, v) {
        var g = h.formatter || c, b = yr(Qo(Qo({
          "recharts-legend-item": !0
        }, "legend-item-".concat(v), !0), "inactive", h.inactive));
        if (h.type === "none")
          return null;
        var y = Mi(h.value) ? null : h.value;
        si(
          !Mi(h.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var w = h.inactive ? d : h.color;
        return /* @__PURE__ */ _.createElement("li", Oc({
          className: b,
          style: p,
          key: "legend-item-".concat(v)
        }, cz(n.props, h, v)), /* @__PURE__ */ _.createElement(hz, {
          width: i,
          height: i,
          viewBox: f,
          style: m
        }, n.renderIcon(h)), /* @__PURE__ */ _.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: w
          }
        }, g ? g(y, h, v) : y));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, o = n.payload, a = n.layout, i = n.align;
      if (!o || !o.length)
        return null;
      var s = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? i : "left"
      };
      return /* @__PURE__ */ _.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
}(Gi);
Qo(Xu, "displayName", "Legend");
Qo(Xu, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var HB = Os;
function WB() {
  this.__data__ = new HB(), this.size = 0;
}
var VB = WB;
function GB(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var UB = GB;
function KB(e) {
  return this.__data__.get(e);
}
var YB = KB;
function qB(e) {
  return this.__data__.has(e);
}
var XB = qB, ZB = Os, QB = Gu, JB = Uu, ej = 200;
function tj(e, t) {
  var r = this.__data__;
  if (r instanceof ZB) {
    var n = r.__data__;
    if (!QB || n.length < ej - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new JB(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var rj = tj, nj = Os, oj = VB, aj = UB, ij = YB, sj = XB, lj = rj;
function go(e) {
  var t = this.__data__ = new nj(e);
  this.size = t.size;
}
go.prototype.clear = oj;
go.prototype.delete = aj;
go.prototype.get = ij;
go.prototype.has = sj;
go.prototype.set = lj;
var Vx = go, cj = "__lodash_hash_undefined__";
function dj(e) {
  return this.__data__.set(e, cj), this;
}
var uj = dj;
function fj(e) {
  return this.__data__.has(e);
}
var pj = fj, mj = Uu, hj = uj, gj = pj;
function Ii(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new mj(); ++t < r; )
    this.add(e[t]);
}
Ii.prototype.add = Ii.prototype.push = hj;
Ii.prototype.has = gj;
var Gx = Ii;
function vj(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var bj = vj;
function yj(e, t) {
  return e.has(t);
}
var Ux = yj, wj = Gx, xj = bj, Cj = Ux, Sj = 1, Nj = 2;
function Ej(e, t, r, n, o, a) {
  var i = r & Sj, s = e.length, c = t.length;
  if (s != c && !(i && c > s))
    return !1;
  var d = a.get(e), f = a.get(t);
  if (d && f)
    return d == t && f == e;
  var p = -1, m = !0, h = r & Nj ? new wj() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < s; ) {
    var v = e[p], g = t[p];
    if (n)
      var b = i ? n(g, v, p, t, e, a) : n(v, g, p, e, t, a);
    if (b !== void 0) {
      if (b)
        continue;
      m = !1;
      break;
    }
    if (h) {
      if (!xj(t, function(y, w) {
        if (!Cj(h, w) && (v === y || o(v, y, r, n, a)))
          return h.push(w);
      })) {
        m = !1;
        break;
      }
    } else if (!(v === g || o(v, g, r, n, a))) {
      m = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), m;
}
var Kx = Ej, Pj = fr, _j = Pj.Uint8Array, Rj = _j;
function Tj(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, o) {
    r[++t] = [o, n];
  }), r;
}
var Mj = Tj;
function Aj(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Zu = Aj, jp = Ma, Hp = Rj, kj = Vu, Dj = Kx, Oj = Mj, Ij = Zu, $j = 1, Lj = 2, Fj = "[object Boolean]", zj = "[object Date]", Bj = "[object Error]", jj = "[object Map]", Hj = "[object Number]", Wj = "[object RegExp]", Vj = "[object Set]", Gj = "[object String]", Uj = "[object Symbol]", Kj = "[object ArrayBuffer]", Yj = "[object DataView]", Wp = jp ? jp.prototype : void 0, Tl = Wp ? Wp.valueOf : void 0;
function qj(e, t, r, n, o, a, i) {
  switch (r) {
    case Yj:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Kj:
      return !(e.byteLength != t.byteLength || !a(new Hp(e), new Hp(t)));
    case Fj:
    case zj:
    case Hj:
      return kj(+e, +t);
    case Bj:
      return e.name == t.name && e.message == t.message;
    case Wj:
    case Gj:
      return e == t + "";
    case jj:
      var s = Oj;
    case Vj:
      var c = n & $j;
      if (s || (s = Ij), e.size != t.size && !c)
        return !1;
      var d = i.get(e);
      if (d)
        return d == t;
      n |= Lj, i.set(e, t);
      var f = Dj(s(e), s(t), n, o, a, i);
      return i.delete(e), f;
    case Uj:
      if (Tl)
        return Tl.call(e) == Tl.call(t);
  }
  return !1;
}
var Xj = qj;
function Zj(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var Yx = Zj, Qj = Yx, Jj = qt;
function e6(e, t, r) {
  var n = t(e);
  return Jj(e) ? n : Qj(n, r(e));
}
var t6 = e6;
function r6(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (a[o++] = i);
  }
  return a;
}
var n6 = r6;
function o6() {
  return [];
}
var a6 = o6, i6 = n6, s6 = a6, l6 = Object.prototype, c6 = l6.propertyIsEnumerable, Vp = Object.getOwnPropertySymbols, d6 = Vp ? function(e) {
  return e == null ? [] : (e = Object(e), i6(Vp(e), function(t) {
    return c6.call(e, t);
  }));
} : s6, u6 = d6;
function f6(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var p6 = f6, m6 = Cn, h6 = Sn, g6 = "[object Arguments]";
function v6(e) {
  return h6(e) && m6(e) == g6;
}
var b6 = v6, Gp = b6, y6 = Sn, qx = Object.prototype, w6 = qx.hasOwnProperty, x6 = qx.propertyIsEnumerable, C6 = Gp(/* @__PURE__ */ function() {
  return arguments;
}()) ? Gp : function(e) {
  return y6(e) && w6.call(e, "callee") && !x6.call(e, "callee");
}, Qu = C6, $i = { exports: {} };
function S6() {
  return !1;
}
var N6 = S6;
$i.exports;
(function(e, t) {
  var r = fr, n = N6, o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, i = a && a.exports === o, s = i ? r.Buffer : void 0, c = s ? s.isBuffer : void 0, d = c || n;
  e.exports = d;
})($i, $i.exports);
var Xx = $i.exports, E6 = 9007199254740991, P6 = /^(?:0|[1-9]\d*)$/;
function _6(e, t) {
  var r = typeof e;
  return t = t ?? E6, !!t && (r == "number" || r != "symbol" && P6.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ju = _6, R6 = 9007199254740991;
function T6(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= R6;
}
var ef = T6, M6 = Cn, A6 = ef, k6 = Sn, D6 = "[object Arguments]", O6 = "[object Array]", I6 = "[object Boolean]", $6 = "[object Date]", L6 = "[object Error]", F6 = "[object Function]", z6 = "[object Map]", B6 = "[object Number]", j6 = "[object Object]", H6 = "[object RegExp]", W6 = "[object Set]", V6 = "[object String]", G6 = "[object WeakMap]", U6 = "[object ArrayBuffer]", K6 = "[object DataView]", Y6 = "[object Float32Array]", q6 = "[object Float64Array]", X6 = "[object Int8Array]", Z6 = "[object Int16Array]", Q6 = "[object Int32Array]", J6 = "[object Uint8Array]", e8 = "[object Uint8ClampedArray]", t8 = "[object Uint16Array]", r8 = "[object Uint32Array]", Fe = {};
Fe[Y6] = Fe[q6] = Fe[X6] = Fe[Z6] = Fe[Q6] = Fe[J6] = Fe[e8] = Fe[t8] = Fe[r8] = !0;
Fe[D6] = Fe[O6] = Fe[U6] = Fe[I6] = Fe[K6] = Fe[$6] = Fe[L6] = Fe[F6] = Fe[z6] = Fe[B6] = Fe[j6] = Fe[H6] = Fe[W6] = Fe[V6] = Fe[G6] = !1;
function n8(e) {
  return k6(e) && A6(e.length) && !!Fe[M6(e)];
}
var o8 = n8;
function a8(e) {
  return function(t) {
    return e(t);
  };
}
var Zx = a8, Li = { exports: {} };
Li.exports;
(function(e, t) {
  var r = hx, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, i = a && r.process, s = function() {
    try {
      var c = o && o.require && o.require("util").types;
      return c || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(Li, Li.exports);
var i8 = Li.exports, s8 = o8, l8 = Zx, Up = i8, Kp = Up && Up.isTypedArray, c8 = Kp ? l8(Kp) : s8, Qx = c8, d8 = p6, u8 = Qu, f8 = qt, p8 = Xx, m8 = Ju, h8 = Qx, g8 = Object.prototype, v8 = g8.hasOwnProperty;
function b8(e, t) {
  var r = f8(e), n = !r && u8(e), o = !r && !n && p8(e), a = !r && !n && !o && h8(e), i = r || n || o || a, s = i ? d8(e.length, String) : [], c = s.length;
  for (var d in e)
    (t || v8.call(e, d)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    m8(d, c))) && s.push(d);
  return s;
}
var y8 = b8, w8 = Object.prototype;
function x8(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || w8;
  return e === r;
}
var C8 = x8;
function S8(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var N8 = S8, E8 = N8, P8 = E8(Object.keys, Object), _8 = P8, R8 = C8, T8 = _8, M8 = Object.prototype, A8 = M8.hasOwnProperty;
function k8(e) {
  if (!R8(e))
    return T8(e);
  var t = [];
  for (var r in Object(e))
    A8.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var D8 = k8, O8 = Wu, I8 = ef;
function $8(e) {
  return e != null && I8(e.length) && !O8(e);
}
var Fs = $8, L8 = y8, F8 = D8, z8 = Fs;
function B8(e) {
  return z8(e) ? L8(e) : F8(e);
}
var tf = B8, j8 = t6, H8 = u6, W8 = tf;
function V8(e) {
  return j8(e, W8, H8);
}
var G8 = V8, Yp = G8, U8 = 1, K8 = Object.prototype, Y8 = K8.hasOwnProperty;
function q8(e, t, r, n, o, a) {
  var i = r & U8, s = Yp(e), c = s.length, d = Yp(t), f = d.length;
  if (c != f && !i)
    return !1;
  for (var p = c; p--; ) {
    var m = s[p];
    if (!(i ? m in t : Y8.call(t, m)))
      return !1;
  }
  var h = a.get(e), v = a.get(t);
  if (h && v)
    return h == t && v == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var b = i; ++p < c; ) {
    m = s[p];
    var y = e[m], w = t[m];
    if (n)
      var x = i ? n(w, y, m, t, e, a) : n(y, w, m, e, t, a);
    if (!(x === void 0 ? y === w || o(y, w, r, n, a) : x)) {
      g = !1;
      break;
    }
    b || (b = m == "constructor");
  }
  if (g && !b) {
    var C = e.constructor, N = t.constructor;
    C != N && "constructor" in e && "constructor" in t && !(typeof C == "function" && C instanceof C && typeof N == "function" && N instanceof N) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var X8 = q8, Z8 = Nn, Q8 = fr, J8 = Z8(Q8, "DataView"), eH = J8, tH = Nn, rH = fr, nH = tH(rH, "Promise"), oH = nH, aH = Nn, iH = fr, sH = aH(iH, "Set"), Jx = sH, lH = Nn, cH = fr, dH = lH(cH, "WeakMap"), uH = dH, $c = eH, Lc = Gu, Fc = oH, zc = Jx, Bc = uH, e1 = Cn, vo = bx, qp = "[object Map]", fH = "[object Object]", Xp = "[object Promise]", Zp = "[object Set]", Qp = "[object WeakMap]", Jp = "[object DataView]", pH = vo($c), mH = vo(Lc), hH = vo(Fc), gH = vo(zc), vH = vo(Bc), en = e1;
($c && en(new $c(new ArrayBuffer(1))) != Jp || Lc && en(new Lc()) != qp || Fc && en(Fc.resolve()) != Xp || zc && en(new zc()) != Zp || Bc && en(new Bc()) != Qp) && (en = function(e) {
  var t = e1(e), r = t == fH ? e.constructor : void 0, n = r ? vo(r) : "";
  if (n)
    switch (n) {
      case pH:
        return Jp;
      case mH:
        return qp;
      case hH:
        return Xp;
      case gH:
        return Zp;
      case vH:
        return Qp;
    }
  return t;
});
var bH = en, Ml = Vx, yH = Kx, wH = Xj, xH = X8, em = bH, tm = qt, rm = Xx, CH = Qx, SH = 1, nm = "[object Arguments]", om = "[object Array]", Ua = "[object Object]", NH = Object.prototype, am = NH.hasOwnProperty;
function EH(e, t, r, n, o, a) {
  var i = tm(e), s = tm(t), c = i ? om : em(e), d = s ? om : em(t);
  c = c == nm ? Ua : c, d = d == nm ? Ua : d;
  var f = c == Ua, p = d == Ua, m = c == d;
  if (m && rm(e)) {
    if (!rm(t))
      return !1;
    i = !0, f = !1;
  }
  if (m && !f)
    return a || (a = new Ml()), i || CH(e) ? yH(e, t, r, n, o, a) : wH(e, t, c, r, n, o, a);
  if (!(r & SH)) {
    var h = f && am.call(e, "__wrapped__"), v = p && am.call(t, "__wrapped__");
    if (h || v) {
      var g = h ? e.value() : e, b = v ? t.value() : t;
      return a || (a = new Ml()), o(g, b, r, n, a);
    }
  }
  return m ? (a || (a = new Ml()), xH(e, t, r, n, o, a)) : !1;
}
var PH = EH, _H = PH, im = Sn;
function t1(e, t, r, n, o) {
  return e === t ? !0 : e == null || t == null || !im(e) && !im(t) ? e !== e && t !== t : _H(e, t, r, n, t1, o);
}
var r1 = t1, RH = Vx, TH = r1, MH = 1, AH = 2;
function kH(e, t, r, n) {
  var o = r.length, a = o, i = !n;
  if (e == null)
    return !a;
  for (e = Object(e); o--; ) {
    var s = r[o];
    if (i && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++o < a; ) {
    s = r[o];
    var c = s[0], d = e[c], f = s[1];
    if (i && s[2]) {
      if (d === void 0 && !(c in e))
        return !1;
    } else {
      var p = new RH();
      if (n)
        var m = n(d, f, c, e, t, p);
      if (!(m === void 0 ? TH(f, d, MH | AH, n, p) : m))
        return !1;
    }
  }
  return !0;
}
var DH = kH, OH = Yr;
function IH(e) {
  return e === e && !OH(e);
}
var n1 = IH, $H = n1, LH = tf;
function FH(e) {
  for (var t = LH(e), r = t.length; r--; ) {
    var n = t[r], o = e[n];
    t[r] = [n, o, $H(o)];
  }
  return t;
}
var zH = FH;
function BH(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var o1 = BH, jH = DH, HH = zH, WH = o1;
function VH(e) {
  var t = HH(e);
  return t.length == 1 && t[0][2] ? WH(t[0][0], t[0][1]) : function(r) {
    return r === e || jH(r, e, t);
  };
}
var GH = VH;
function UH(e, t) {
  return e != null && t in Object(e);
}
var KH = UH, YH = Sx, qH = Qu, XH = qt, ZH = Ju, QH = ef, JH = $s;
function e9(e, t, r) {
  t = YH(t, e);
  for (var n = -1, o = t.length, a = !1; ++n < o; ) {
    var i = JH(t[n]);
    if (!(a = e != null && r(e, i)))
      break;
    e = e[i];
  }
  return a || ++n != o ? a : (o = e == null ? 0 : e.length, !!o && QH(o) && ZH(i, o) && (XH(e) || qH(e)));
}
var t9 = e9, r9 = KH, n9 = t9;
function o9(e, t) {
  return e != null && n9(e, t, r9);
}
var a9 = o9, i9 = r1, s9 = zF, l9 = a9, c9 = Hu, d9 = n1, u9 = o1, f9 = $s, p9 = 1, m9 = 2;
function h9(e, t) {
  return c9(e) && d9(t) ? u9(f9(e), t) : function(r) {
    var n = s9(r, e);
    return n === void 0 && n === t ? l9(r, e) : i9(t, n, p9 | m9);
  };
}
var g9 = h9;
function v9(e) {
  return e;
}
var zs = v9;
function b9(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var y9 = b9, w9 = Yu;
function x9(e) {
  return function(t) {
    return w9(t, e);
  };
}
var C9 = x9, S9 = y9, N9 = C9, E9 = Hu, P9 = $s;
function _9(e) {
  return E9(e) ? S9(P9(e)) : N9(e);
}
var R9 = _9, T9 = GH, M9 = g9, A9 = zs, k9 = qt, D9 = R9;
function O9(e) {
  return typeof e == "function" ? e : e == null ? A9 : typeof e == "object" ? k9(e) ? M9(e[0], e[1]) : T9(e) : D9(e);
}
var a1 = O9;
function I9(e, t, r, n) {
  for (var o = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < o; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var $9 = I9;
function L9(e) {
  return e !== e;
}
var F9 = L9;
function z9(e, t, r) {
  for (var n = r - 1, o = e.length; ++n < o; )
    if (e[n] === t)
      return n;
  return -1;
}
var B9 = z9, j9 = $9, H9 = F9, W9 = B9;
function V9(e, t, r) {
  return t === t ? W9(e, t, r) : j9(e, H9, r);
}
var G9 = V9, U9 = G9;
function K9(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && U9(e, t, 0) > -1;
}
var Y9 = K9;
function q9(e, t, r) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var X9 = q9;
function Z9() {
}
var Q9 = Z9, Al = Jx, J9 = Q9, eW = Zu, tW = 1 / 0, rW = Al && 1 / eW(new Al([, -0]))[1] == tW ? function(e) {
  return new Al(e);
} : J9, nW = rW, oW = Gx, aW = Y9, iW = X9, sW = Ux, lW = nW, cW = Zu, dW = 200;
function uW(e, t, r) {
  var n = -1, o = aW, a = e.length, i = !0, s = [], c = s;
  if (r)
    i = !1, o = iW;
  else if (a >= dW) {
    var d = t ? null : lW(e);
    if (d)
      return cW(d);
    i = !1, o = sW, c = new oW();
  } else
    c = t ? [] : s;
  e:
    for (; ++n < a; ) {
      var f = e[n], p = t ? t(f) : f;
      if (f = r || f !== 0 ? f : 0, i && p === p) {
        for (var m = c.length; m--; )
          if (c[m] === p)
            continue e;
        t && c.push(p), s.push(f);
      } else o(c, p, r) || (c !== s && c.push(p), s.push(f));
    }
  return s;
}
var fW = uW, pW = a1, mW = fW;
function hW(e, t) {
  return e && e.length ? mW(e, pW(t)) : [];
}
var gW = hW;
const sm = /* @__PURE__ */ ur(gW);
function i1(e, t, r) {
  return t === !0 ? sm(e, r) : Mi(t) ? sm(e, t) : e;
}
function qn(e) {
  "@babel/helpers - typeof";
  return qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qn(e);
}
var vW = ["ref"];
function lm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lm(Object(r), !0).forEach(function(n) {
      Bs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function bW(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, l1(n.key), n);
  }
}
function yW(e, t, r) {
  return t && cm(e.prototype, t), r && cm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function wW(e, t, r) {
  return t = Fi(t), xW(e, s1() ? Reflect.construct(t, r || [], Fi(e).constructor) : t.apply(e, r));
}
function xW(e, t) {
  if (t && (qn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return CW(e);
}
function CW(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function s1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (s1 = function() {
    return !!e;
  })();
}
function Fi(e) {
  return Fi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Fi(e);
}
function SW(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && jc(e, t);
}
function jc(e, t) {
  return jc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, jc(e, t);
}
function Bs(e, t, r) {
  return t = l1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function l1(e) {
  var t = NW(e, "string");
  return qn(t) == "symbol" ? t : t + "";
}
function NW(e, t) {
  if (qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function EW(e, t) {
  if (e == null) return {};
  var r = PW(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function PW(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function _W(e) {
  return e.value;
}
function RW(e, t) {
  if (/* @__PURE__ */ _.isValidElement(e))
    return /* @__PURE__ */ _.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ _.createElement(e, t);
  t.ref;
  var r = EW(t, vW);
  return /* @__PURE__ */ _.createElement(Xu, r);
}
var dm = 1, rf = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    bW(this, t);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return r = wW(this, t, [].concat(o)), Bs(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return SW(t, e), yW(t, [{
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
        var n = this.wrapperNode.getBoundingClientRect();
        return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var n = this.props.onBBoxUpdate, o = this.getBBox();
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > dm || Math.abs(o.height - this.lastBoundingBox.height) > dm) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, n && n(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? hr({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var o = this.props, a = o.layout, i = o.align, s = o.verticalAlign, c = o.margin, d = o.chartWidth, f = o.chartHeight, p, m;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (i === "center" && a === "vertical") {
          var h = this.getBBoxSnapshot();
          p = {
            left: ((d || 0) - h.width) / 2
          };
        } else
          p = i === "right" ? {
            right: c && c.right || 0
          } : {
            left: c && c.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (s === "middle") {
          var v = this.getBBoxSnapshot();
          m = {
            top: ((f || 0) - v.height) / 2
          };
        } else
          m = s === "bottom" ? {
            bottom: c && c.bottom || 0
          } : {
            top: c && c.top || 0
          };
      return hr(hr({}, p), m);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, o = this.props, a = o.content, i = o.width, s = o.height, c = o.wrapperStyle, d = o.payloadUniqBy, f = o.payload, p = hr(hr({
        position: "absolute",
        width: i || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(c)), c);
      return /* @__PURE__ */ _.createElement("div", {
        className: "recharts-legend-wrapper",
        style: p,
        ref: function(h) {
          n.wrapperNode = h;
        }
      }, RW(a, hr(hr({}, this.props), {}, {
        payload: i1(f, d, _W)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, o) {
      var a = hr(hr({}, this.defaultProps), n.props), i = a.layout;
      return i === "vertical" && Lt(n.props.height) ? {
        height: n.props.height
      } : i === "horizontal" ? {
        width: n.props.width || o
      } : null;
    }
  }]);
}(Gi);
Bs(rf, "displayName", "Legend");
Bs(rf, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var um = Ma, TW = Qu, MW = qt, fm = um ? um.isConcatSpreadable : void 0;
function AW(e) {
  return MW(e) || TW(e) || !!(fm && e && e[fm]);
}
var kW = AW, DW = Yx, OW = kW;
function c1(e, t, r, n, o) {
  var a = -1, i = e.length;
  for (r || (r = OW), o || (o = []); ++a < i; ) {
    var s = e[a];
    t > 0 && r(s) ? t > 1 ? c1(s, t - 1, r, n, o) : DW(o, s) : n || (o[o.length] = s);
  }
  return o;
}
var IW = c1;
function $W(e) {
  return function(t, r, n) {
    for (var o = -1, a = Object(t), i = n(t), s = i.length; s--; ) {
      var c = i[e ? s : ++o];
      if (r(a[c], c, a) === !1)
        break;
    }
    return t;
  };
}
var LW = $W, FW = LW, zW = FW(), BW = zW, jW = BW, HW = tf;
function WW(e, t) {
  return e && jW(e, t, HW);
}
var VW = WW, GW = Fs;
function UW(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!GW(r))
      return e(r, n);
    for (var o = r.length, a = t ? o : -1, i = Object(r); (t ? a-- : ++a < o) && n(i[a], a, i) !== !1; )
      ;
    return r;
  };
}
var KW = UW, YW = VW, qW = KW, XW = qW(YW), ZW = XW, QW = ZW, JW = Fs;
function eV(e, t) {
  var r = -1, n = JW(e) ? Array(e.length) : [];
  return QW(e, function(o, a, i) {
    n[++r] = t(o, a, i);
  }), n;
}
var tV = eV;
function rV(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var nV = rV, pm = Aa;
function oV(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, o = e === e, a = pm(e), i = t !== void 0, s = t === null, c = t === t, d = pm(t);
    if (!s && !d && !a && e > t || a && i && c && !s && !d || n && i && c || !r && c || !o)
      return 1;
    if (!n && !a && !d && e < t || d && r && o && !n && !a || s && r && o || !i && o || !c)
      return -1;
  }
  return 0;
}
var aV = oV, iV = aV;
function sV(e, t, r) {
  for (var n = -1, o = e.criteria, a = t.criteria, i = o.length, s = r.length; ++n < i; ) {
    var c = iV(o[n], a[n]);
    if (c) {
      if (n >= s)
        return c;
      var d = r[n];
      return c * (d == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var lV = sV, kl = wx, cV = Yu, dV = a1, uV = tV, fV = nV, pV = Zx, mV = lV, hV = zs, gV = qt;
function vV(e, t, r) {
  t.length ? t = kl(t, function(a) {
    return gV(a) ? function(i) {
      return cV(i, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [hV];
  var n = -1;
  t = kl(t, pV(dV));
  var o = uV(e, function(a, i, s) {
    var c = kl(t, function(d) {
      return d(a);
    });
    return { criteria: c, index: ++n, value: a };
  });
  return fV(o, function(a, i) {
    return mV(a, i, r);
  });
}
var bV = vV;
function yV(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var wV = yV, xV = wV, mm = Math.max;
function CV(e, t, r) {
  return t = mm(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, a = mm(n.length - t, 0), i = Array(a); ++o < a; )
      i[o] = n[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = n[o];
    return s[t] = r(i), xV(e, this, s);
  };
}
var SV = CV;
function NV(e) {
  return function() {
    return e;
  };
}
var EV = NV, PV = Nn, _V = function() {
  try {
    var e = PV(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), RV = _V, TV = EV, hm = RV, MV = zs, AV = hm ? function(e, t) {
  return hm(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: TV(t),
    writable: !0
  });
} : MV, kV = AV, DV = 800, OV = 16, IV = Date.now;
function $V(e) {
  var t = 0, r = 0;
  return function() {
    var n = IV(), o = OV - (n - r);
    if (r = n, o > 0) {
      if (++t >= DV)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var LV = $V, FV = kV, zV = LV, BV = zV(FV), jV = BV, HV = zs, WV = SV, VV = jV;
function GV(e, t) {
  return VV(WV(e, t, HV), e + "");
}
var UV = GV, KV = Vu, YV = Fs, qV = Ju, XV = Yr;
function ZV(e, t, r) {
  if (!XV(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? YV(r) && qV(t, r.length) : n == "string" && t in r) ? KV(r[t], e) : !1;
}
var QV = ZV, JV = IW, e7 = bV, t7 = UV, gm = QV, r7 = t7(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && gm(e, t[0], t[1]) ? t = [] : r > 2 && gm(t[0], t[1], t[2]) && (t = [t[0]]), e7(e, JV(t, 1), []);
}), n7 = r7;
const o7 = /* @__PURE__ */ ur(n7);
function Jo(e) {
  "@babel/helpers - typeof";
  return Jo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jo(e);
}
function Hc() {
  return Hc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Hc.apply(this, arguments);
}
function a7(e, t) {
  return c7(e) || l7(e, t) || s7(e, t) || i7();
}
function i7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function s7(e, t) {
  if (e) {
    if (typeof e == "string") return vm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vm(e, t);
  }
}
function vm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function l7(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, i, s = [], c = !0, d = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (f) {
      d = !0, o = f;
    } finally {
      try {
        if (!c && r.return != null && (i = r.return(), Object(i) !== i)) return;
      } finally {
        if (d) throw o;
      }
    }
    return s;
  }
}
function c7(e) {
  if (Array.isArray(e)) return e;
}
function bm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Dl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bm(Object(r), !0).forEach(function(n) {
      d7(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function d7(e, t, r) {
  return t = u7(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function u7(e) {
  var t = f7(e, "string");
  return Jo(t) == "symbol" ? t : t + "";
}
function f7(e, t) {
  if (Jo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Jo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function p7(e) {
  return Array.isArray(e) && Ai(e[0]) && Ai(e[1]) ? e.join(" ~ ") : e;
}
var m7 = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, o = t.contentStyle, a = o === void 0 ? {} : o, i = t.itemStyle, s = i === void 0 ? {} : i, c = t.labelStyle, d = c === void 0 ? {} : c, f = t.payload, p = t.formatter, m = t.itemSorter, h = t.wrapperClassName, v = t.labelClassName, g = t.label, b = t.labelFormatter, y = t.accessibilityLayer, w = y === void 0 ? !1 : y, x = function() {
    if (f && f.length) {
      var $ = {
        padding: 0,
        margin: 0
      }, U = (m ? o7(f, m) : f).map(function(L, K) {
        if (L.type === "none")
          return null;
        var V = Dl({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: L.color || "#000"
        }, s), z = L.formatter || p || p7, O = L.value, F = L.name, ee = O, te = F;
        if (z && ee != null && te != null) {
          var I = z(O, F, L, K, f);
          if (Array.isArray(I)) {
            var D = a7(I, 2);
            ee = D[0], te = D[1];
          } else
            ee = I;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ _.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(K),
            style: V
          }, Ai(te) ? /* @__PURE__ */ _.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, te) : null, Ai(te) ? /* @__PURE__ */ _.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ _.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, ee), /* @__PURE__ */ _.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, L.unit || ""))
        );
      });
      return /* @__PURE__ */ _.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: $
      }, U);
    }
    return null;
  }, C = Dl({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), N = Dl({
    margin: 0
  }, d), P = !HF(g), E = P ? g : "", A = yr("recharts-default-tooltip", h), R = yr("recharts-tooltip-label", v);
  P && b && f !== void 0 && f !== null && (E = b(g, f));
  var B = w ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ _.createElement("div", Hc({
    className: A,
    style: C
  }, B), /* @__PURE__ */ _.createElement("p", {
    className: R,
    style: N
  }, /* @__PURE__ */ _.isValidElement(E) ? E : "".concat(E)), x());
};
function ea(e) {
  "@babel/helpers - typeof";
  return ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ea(e);
}
function Ka(e, t, r) {
  return t = h7(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function h7(e) {
  var t = g7(e, "string");
  return ea(t) == "symbol" ? t : t + "";
}
function g7(e, t) {
  if (ea(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ea(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ro = "recharts-tooltip-wrapper", v7 = {
  visibility: "hidden"
};
function b7(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return yr(Ro, Ka(Ka(Ka(Ka({}, "".concat(Ro, "-right"), Lt(r) && t && Lt(t.x) && r >= t.x), "".concat(Ro, "-left"), Lt(r) && t && Lt(t.x) && r < t.x), "".concat(Ro, "-bottom"), Lt(n) && t && Lt(t.y) && n >= t.y), "".concat(Ro, "-top"), Lt(n) && t && Lt(t.y) && n < t.y));
}
function ym(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, o = e.offsetTopLeft, a = e.position, i = e.reverseDirection, s = e.tooltipDimension, c = e.viewBox, d = e.viewBoxDimension;
  if (a && Lt(a[n]))
    return a[n];
  var f = r[n] - s - o, p = r[n] + o;
  if (t[n])
    return i[n] ? f : p;
  if (i[n]) {
    var m = f, h = c[n];
    return m < h ? Math.max(p, c[n]) : Math.max(f, c[n]);
  }
  var v = p + s, g = c[n] + d;
  return v > g ? Math.max(f, c[n]) : Math.max(p, c[n]);
}
function y7(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function w7(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, o = e.position, a = e.reverseDirection, i = e.tooltipBox, s = e.useTranslate3d, c = e.viewBox, d, f, p;
  return i.height > 0 && i.width > 0 && r ? (f = ym({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), p = ym({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), d = y7({
    translateX: f,
    translateY: p,
    useTranslate3d: s
  })) : d = v7, {
    cssProperties: d,
    cssClasses: b7({
      translateX: f,
      translateY: p,
      coordinate: r
    })
  };
}
function Xn(e) {
  "@babel/helpers - typeof";
  return Xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xn(e);
}
function wm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wm(Object(r), !0).forEach(function(n) {
      Vc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function x7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function C7(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, u1(n.key), n);
  }
}
function S7(e, t, r) {
  return t && C7(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function N7(e, t, r) {
  return t = zi(t), E7(e, d1() ? Reflect.construct(t, r || [], zi(e).constructor) : t.apply(e, r));
}
function E7(e, t) {
  if (t && (Xn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return P7(e);
}
function P7(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function d1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (d1 = function() {
    return !!e;
  })();
}
function zi(e) {
  return zi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, zi(e);
}
function _7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Wc(e, t);
}
function Wc(e, t) {
  return Wc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Wc(e, t);
}
function Vc(e, t, r) {
  return t = u1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function u1(e) {
  var t = R7(e, "string");
  return Xn(t) == "symbol" ? t : t + "";
}
function R7(e, t) {
  if (Xn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Cm = 1, T7 = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    x7(this, t);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return r = N7(this, t, [].concat(o)), Vc(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Vc(r, "handleKeyDown", function(i) {
      if (i.key === "Escape") {
        var s, c, d, f;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (c = r.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && s !== void 0 ? s : 0,
            y: (d = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && d !== void 0 ? d : 0
          }
        });
      }
    }), r;
  }
  return _7(t, e), S7(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > Cm || Math.abs(n.height - this.state.lastBoundingBox.height) > Cm) && this.setState({
          lastBoundingBox: {
            width: n.width,
            height: n.height
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
      var n, o;
      this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((o = this.props.coordinate) === null || o === void 0 ? void 0 : o.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, d = o.children, f = o.coordinate, p = o.hasPayload, m = o.isAnimationActive, h = o.offset, v = o.position, g = o.reverseDirection, b = o.useTranslate3d, y = o.viewBox, w = o.wrapperStyle, x = w7({
        allowEscapeViewBox: i,
        coordinate: f,
        offsetTopLeft: h,
        position: v,
        reverseDirection: g,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: b,
        viewBox: y
      }), C = x.cssClasses, N = x.cssProperties, P = xm(xm({
        transition: m && a ? "transform ".concat(s, "ms ").concat(c) : void 0
      }, N), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && p ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, w);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ _.createElement("div", {
          tabIndex: -1,
          className: C,
          style: P,
          ref: function(A) {
            n.wrapperNode = A;
          }
        }, d)
      );
    }
  }]);
}(Gi), M7 = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, li = {
  isSsr: M7(),
  get: function(t) {
    return li[t];
  },
  set: function(t, r) {
    if (typeof t == "string")
      li[t] = r;
    else {
      var n = Object.keys(t);
      n && n.length && n.forEach(function(o) {
        li[o] = t[o];
      });
    }
  }
};
function Zn(e) {
  "@babel/helpers - typeof";
  return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zn(e);
}
function Sm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sm(Object(r), !0).forEach(function(n) {
      nf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function A7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function k7(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, p1(n.key), n);
  }
}
function D7(e, t, r) {
  return t && k7(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function O7(e, t, r) {
  return t = Bi(t), I7(e, f1() ? Reflect.construct(t, r || [], Bi(e).constructor) : t.apply(e, r));
}
function I7(e, t) {
  if (t && (Zn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $7(e);
}
function $7(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function f1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (f1 = function() {
    return !!e;
  })();
}
function Bi(e) {
  return Bi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Bi(e);
}
function L7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Gc(e, t);
}
function Gc(e, t) {
  return Gc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Gc(e, t);
}
function nf(e, t, r) {
  return t = p1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function p1(e) {
  var t = F7(e, "string");
  return Zn(t) == "symbol" ? t : t + "";
}
function F7(e, t) {
  if (Zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function z7(e) {
  return e.dataKey;
}
function B7(e, t) {
  return /* @__PURE__ */ _.isValidElement(e) ? /* @__PURE__ */ _.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ _.createElement(e, t) : /* @__PURE__ */ _.createElement(m7, t);
}
var of = /* @__PURE__ */ function(e) {
  function t() {
    return A7(this, t), O7(this, t, arguments);
  }
  return L7(t, e), D7(t, [{
    key: "render",
    value: function() {
      var n = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, c = o.animationEasing, d = o.content, f = o.coordinate, p = o.filterNull, m = o.isAnimationActive, h = o.offset, v = o.payload, g = o.payloadUniqBy, b = o.position, y = o.reverseDirection, w = o.useTranslate3d, x = o.viewBox, C = o.wrapperStyle, N = v ?? [];
      p && N.length && (N = i1(v.filter(function(E) {
        return E.value != null && (E.hide !== !0 || n.props.includeHidden);
      }), g, z7));
      var P = N.length > 0;
      return /* @__PURE__ */ _.createElement(T7, {
        allowEscapeViewBox: i,
        animationDuration: s,
        animationEasing: c,
        isAnimationActive: m,
        active: a,
        coordinate: f,
        hasPayload: P,
        offset: h,
        position: b,
        reverseDirection: y,
        useTranslate3d: w,
        viewBox: x,
        wrapperStyle: C
      }, B7(d, Nm(Nm({}, this.props), {}, {
        payload: N
      })));
    }
  }]);
}(Gi);
nf(of, "displayName", "Tooltip");
nf(of, "defaultProps", {
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
  isAnimationActive: !li.isSsr,
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
var j7 = fr, H7 = function() {
  return j7.Date.now();
}, W7 = H7, V7 = /\s/;
function G7(e) {
  for (var t = e.length; t-- && V7.test(e.charAt(t)); )
    ;
  return t;
}
var U7 = G7, K7 = U7, Y7 = /^\s+/;
function q7(e) {
  return e && e.slice(0, K7(e) + 1).replace(Y7, "");
}
var X7 = q7, Z7 = X7, Em = Yr, Q7 = Aa, Pm = NaN, J7 = /^[-+]0x[0-9a-f]+$/i, eG = /^0b[01]+$/i, tG = /^0o[0-7]+$/i, rG = parseInt;
function nG(e) {
  if (typeof e == "number")
    return e;
  if (Q7(e))
    return Pm;
  if (Em(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Em(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Z7(e);
  var r = eG.test(e);
  return r || tG.test(e) ? rG(e.slice(2), r ? 2 : 8) : J7.test(e) ? Pm : +e;
}
var oG = nG, aG = Yr, Ol = W7, _m = oG, iG = "Expected a function", sG = Math.max, lG = Math.min;
function cG(e, t, r) {
  var n, o, a, i, s, c, d = 0, f = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(iG);
  t = _m(t) || 0, aG(r) && (f = !!r.leading, p = "maxWait" in r, a = p ? sG(_m(r.maxWait) || 0, t) : a, m = "trailing" in r ? !!r.trailing : m);
  function h(P) {
    var E = n, A = o;
    return n = o = void 0, d = P, i = e.apply(A, E), i;
  }
  function v(P) {
    return d = P, s = setTimeout(y, t), f ? h(P) : i;
  }
  function g(P) {
    var E = P - c, A = P - d, R = t - E;
    return p ? lG(R, a - A) : R;
  }
  function b(P) {
    var E = P - c, A = P - d;
    return c === void 0 || E >= t || E < 0 || p && A >= a;
  }
  function y() {
    var P = Ol();
    if (b(P))
      return w(P);
    s = setTimeout(y, g(P));
  }
  function w(P) {
    return s = void 0, m && n ? h(P) : (n = o = void 0, i);
  }
  function x() {
    s !== void 0 && clearTimeout(s), d = 0, n = c = o = s = void 0;
  }
  function C() {
    return s === void 0 ? i : w(Ol());
  }
  function N() {
    var P = Ol(), E = b(P);
    if (n = arguments, o = this, c = P, E) {
      if (s === void 0)
        return v(c);
      if (p)
        return clearTimeout(s), s = setTimeout(y, t), h(c);
    }
    return s === void 0 && (s = setTimeout(y, t)), i;
  }
  return N.cancel = x, N.flush = C, N;
}
var dG = cG, uG = dG, fG = Yr, pG = "Expected a function";
function mG(e, t, r) {
  var n = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(pG);
  return fG(r) && (n = "leading" in r ? !!r.leading : n, o = "trailing" in r ? !!r.trailing : o), uG(e, t, {
    leading: n,
    maxWait: t,
    trailing: o
  });
}
var hG = mG;
const gG = /* @__PURE__ */ ur(hG);
function ta(e) {
  "@babel/helpers - typeof";
  return ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ta(e);
}
function Rm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ya(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rm(Object(r), !0).forEach(function(n) {
      vG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vG(e, t, r) {
  return t = bG(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bG(e) {
  var t = yG(e, "string");
  return ta(t) == "symbol" ? t : t + "";
}
function yG(e, t) {
  if (ta(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ta(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wG(e, t) {
  return NG(e) || SG(e, t) || CG(e, t) || xG();
}
function xG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CG(e, t) {
  if (e) {
    if (typeof e == "string") return Tm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Tm(e, t);
  }
}
function Tm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function SG(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, i, s = [], c = !0, d = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (f) {
      d = !0, o = f;
    } finally {
      try {
        if (!c && r.return != null && (i = r.return(), Object(i) !== i)) return;
      } finally {
        if (d) throw o;
      }
    }
    return s;
  }
}
function NG(e) {
  if (Array.isArray(e)) return e;
}
var EG = /* @__PURE__ */ mn(function(e, t) {
  var r = e.aspect, n = e.initialDimension, o = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, i = a === void 0 ? "100%" : a, s = e.height, c = s === void 0 ? "100%" : s, d = e.minWidth, f = d === void 0 ? 0 : d, p = e.minHeight, m = e.maxHeight, h = e.children, v = e.debounce, g = v === void 0 ? 0 : v, b = e.id, y = e.className, w = e.onResize, x = e.style, C = x === void 0 ? {} : x, N = qe(null), P = qe();
  P.current = w, Xc(t, function() {
    return Object.defineProperty(N.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), N.current;
      },
      configurable: !0
    });
  });
  var E = me({
    containerWidth: o.width,
    containerHeight: o.height
  }), A = wG(E, 2), R = A[0], B = A[1], M = it(function(U, L) {
    B(function(K) {
      var V = Math.round(U), z = Math.round(L);
      return K.containerWidth === V && K.containerHeight === z ? K : {
        containerWidth: V,
        containerHeight: z
      };
    });
  }, []);
  nt(function() {
    var U = function(F) {
      var ee, te = F[0].contentRect, I = te.width, D = te.height;
      M(I, D), (ee = P.current) === null || ee === void 0 || ee.call(P, I, D);
    };
    g > 0 && (U = gG(U, g, {
      trailing: !0,
      leading: !1
    }));
    var L = new ResizeObserver(U), K = N.current.getBoundingClientRect(), V = K.width, z = K.height;
    return M(V, z), L.observe(N.current), function() {
      L.disconnect();
    };
  }, [M, g]);
  var $ = qc(function() {
    var U = R.containerWidth, L = R.containerHeight;
    if (U < 0 || L < 0)
      return null;
    si(Va(i) || Va(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, c), si(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var K = Va(i) ? U : i, V = Va(c) ? L : c;
    r && r > 0 && (K ? V = K / r : V && (K = V * r), m && V > m && (V = m)), si(K > 0 || V > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, K, V, i, c, f, p, r);
    var z = !Array.isArray(h) && dz(h.type).endsWith("Chart");
    return _.Children.map(h, function(O) {
      return /* @__PURE__ */ _.isValidElement(O) ? /* @__PURE__ */ mS(O, Ya({
        width: K,
        height: V
      }, z ? {
        style: Ya({
          height: "100%",
          width: "100%",
          maxHeight: V,
          maxWidth: K
        }, O.props.style)
      } : {})) : O;
    });
  }, [r, h, c, m, p, f, R, i]);
  return /* @__PURE__ */ _.createElement("div", {
    id: b ? "".concat(b) : void 0,
    className: yr("recharts-responsive-container", y),
    style: Ya(Ya({}, C), {}, {
      width: i,
      height: c,
      minWidth: f,
      minHeight: p,
      maxHeight: m
    }),
    ref: N
  }, $);
});
const PG = { light: "", dark: ".dark" }, m1 = u.createContext(null);
function h1() {
  const e = u.useContext(m1);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const _G = u.forwardRef(({ id: e, className: t, children: r, config: n, ...o }, a) => {
  const i = u.useId(), s = `chart-${e || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ l(m1.Provider, { value: { config: n }, children: /* @__PURE__ */ S(
    "div",
    {
      "data-chart": s,
      ref: a,
      className: T(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ l(RG, { id: s, config: n }),
        /* @__PURE__ */ l(EG, { children: r })
      ]
    }
  ) });
});
_G.displayName = "Chart";
const RG = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([n, o]) => o.theme || o.color);
  return r.length ? /* @__PURE__ */ l(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(PG).map(
          ([n, o]) => `
${o} [data-chart=${e}] {
${r.map(([a, i]) => {
            var c;
            const s = ((c = i.theme) == null ? void 0 : c[n]) || i.color;
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
}, Eq = of, TG = u.forwardRef(
  ({
    active: e,
    payload: t,
    className: r,
    indicator: n = "dot",
    hideLabel: o = !1,
    hideIndicator: a = !1,
    label: i,
    labelFormatter: s,
    labelClassName: c,
    formatter: d,
    color: f,
    nameKey: p,
    labelKey: m
  }, h) => {
    const { config: v } = h1(), g = u.useMemo(() => {
      var N;
      if (o || !(t != null && t.length))
        return null;
      const [y] = t, w = `${m || y.dataKey || y.name || "value"}`, x = Uc(v, y, w), C = !m && typeof i == "string" ? ((N = v[i]) == null ? void 0 : N.label) || i : x == null ? void 0 : x.label;
      return s ? /* @__PURE__ */ l("div", { className: T("font-medium", c), children: s(C, t) }) : C ? /* @__PURE__ */ l("div", { className: T("font-medium", c), children: C }) : null;
    }, [i, s, t, o, c, v, m]);
    if (!e || !(t != null && t.length))
      return null;
    const b = t.length === 1 && n !== "dot";
    return /* @__PURE__ */ S(
      "div",
      {
        ref: h,
        className: T(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          r
        ),
        children: [
          b ? null : g,
          /* @__PURE__ */ l("div", { className: "grid gap-1.5", children: t.map((y, w) => {
            const x = `${p || y.name || y.dataKey || "value"}`, C = Uc(v, y, x), N = f || y.payload.fill || y.color;
            return /* @__PURE__ */ l(
              "div",
              {
                className: T(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  n === "dot" && "items-center"
                ),
                children: d && (y == null ? void 0 : y.value) !== void 0 && y.name ? d(y.value, y.name, y, w, y.payload) : /* @__PURE__ */ S(Me, { children: [
                  C != null && C.icon ? /* @__PURE__ */ l(C.icon, {}) : !a && /* @__PURE__ */ l(
                    "div",
                    {
                      className: T("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                        "h-2.5 w-2.5": n === "dot",
                        "w-1": n === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                        "my-0.5": b && n === "dashed"
                      }),
                      style: {
                        "--color-bg": N,
                        "--color-border": N
                      }
                    }
                  ),
                  /* @__PURE__ */ S(
                    "div",
                    {
                      className: T(
                        "flex flex-1 justify-between leading-none",
                        b ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ S("div", { className: "grid gap-1.5", children: [
                          b ? g : null,
                          /* @__PURE__ */ l("span", { className: "text-muted-foreground", children: (C == null ? void 0 : C.label) || y.name })
                        ] }),
                        y.value && /* @__PURE__ */ l("span", { className: "font-mono font-medium tabular-nums text-foreground", children: y.value.toLocaleString() })
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
TG.displayName = "ChartTooltip";
const Pq = rf, MG = u.forwardRef(({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = "bottom", nameKey: o }, a) => {
  const { config: i } = h1();
  return r != null && r.length ? /* @__PURE__ */ l(
    "div",
    {
      ref: a,
      className: T("flex items-center justify-center gap-4", n === "top" ? "pb-3" : "pt-3", e),
      children: r.map((s) => {
        const c = `${o || s.dataKey || "value"}`, d = Uc(i, s, c);
        return /* @__PURE__ */ S(
          "div",
          {
            className: T("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
            children: [
              d != null && d.icon && !t ? /* @__PURE__ */ l(d.icon, {}) : /* @__PURE__ */ l(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: s.color
                  }
                }
              ),
              d == null ? void 0 : d.label
            ]
          },
          s.value
        );
      })
    }
  ) : null;
});
MG.displayName = "ChartLegend";
function Uc(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = r;
  return r in t && typeof t[r] == "string" ? o = t[r] : n && r in n && typeof n[r] == "string" && (o = n[r]), o in e ? e[o] : e[r];
}
var AG = "AspectRatio", g1 = u.forwardRef(
  (e, t) => {
    const { ratio: r = 1 / 1, style: n, ...o } = e;
    return /* @__PURE__ */ l(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / r}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: /* @__PURE__ */ l(
          Q.div,
          {
            ...o,
            ref: t,
            style: {
              ...n,
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
g1.displayName = AG;
var kG = g1;
const _q = kG;
var v1 = "AlertDialog", [DG, Rq] = De(v1, [
  fw
]), Pr = fw(), b1 = (e) => {
  const { __scopeAlertDialog: t, ...r } = e, n = Pr(t);
  return /* @__PURE__ */ l(Ca, { ...n, ...r, modal: !0 });
};
b1.displayName = v1;
var OG = "AlertDialogTrigger", y1 = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = Pr(r);
    return /* @__PURE__ */ l(vs, { ...o, ...n, ref: t });
  }
);
y1.displayName = OG;
var IG = "AlertDialogPortal", w1 = (e) => {
  const { __scopeAlertDialog: t, ...r } = e, n = Pr(t);
  return /* @__PURE__ */ l(Sa, { ...n, ...r });
};
w1.displayName = IG;
var $G = "AlertDialogOverlay", x1 = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = Pr(r);
    return /* @__PURE__ */ l(bn, { ...o, ...n, ref: t });
  }
);
x1.displayName = $G;
var Bn = "AlertDialogContent", [LG, FG] = DG(Bn), zG = /* @__PURE__ */ Fm("AlertDialogContent"), C1 = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, children: n, ...o } = e, a = Pr(r), i = u.useRef(null), s = ae(t, i), c = u.useRef(null);
    return /* @__PURE__ */ l(
      OA,
      {
        contentName: Bn,
        titleName: S1,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ l(LG, { scope: r, cancelRef: c, children: /* @__PURE__ */ S(
          yn,
          {
            role: "alertdialog",
            ...a,
            ...o,
            ref: s,
            onOpenAutoFocus: H(o.onOpenAutoFocus, (d) => {
              var f;
              d.preventDefault(), (f = c.current) == null || f.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (d) => d.preventDefault(),
            onInteractOutside: (d) => d.preventDefault(),
            children: [
              /* @__PURE__ */ l(zG, { children: n }),
              /* @__PURE__ */ l(jG, { contentRef: i })
            ]
          }
        ) })
      }
    );
  }
);
C1.displayName = Bn;
var S1 = "AlertDialogTitle", N1 = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = Pr(r);
    return /* @__PURE__ */ l(co, { ...o, ...n, ref: t });
  }
);
N1.displayName = S1;
var E1 = "AlertDialogDescription", P1 = u.forwardRef((e, t) => {
  const { __scopeAlertDialog: r, ...n } = e, o = Pr(r);
  return /* @__PURE__ */ l(uo, { ...o, ...n, ref: t });
});
P1.displayName = E1;
var BG = "AlertDialogAction", _1 = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = Pr(r);
    return /* @__PURE__ */ l(wn, { ...o, ...n, ref: t });
  }
);
_1.displayName = BG;
var R1 = "AlertDialogCancel", T1 = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, { cancelRef: o } = FG(R1, r), a = Pr(r), i = ae(t, o);
    return /* @__PURE__ */ l(wn, { ...a, ...n, ref: i });
  }
);
T1.displayName = R1;
var jG = ({ contentRef: e }) => {
  const t = `\`${Bn}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Bn}\` by passing a \`${E1}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Bn}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return u.useEffect(() => {
    var n;
    document.getElementById(
      (n = e.current) == null ? void 0 : n.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, HG = b1, WG = y1, VG = w1, M1 = x1, A1 = C1, k1 = _1, D1 = T1, O1 = N1, I1 = P1;
const Tq = HG, Mq = WG, GG = VG, $1 = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  M1,
  {
    className: T(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
$1.displayName = M1.displayName;
const UG = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ S(GG, { children: [
  /* @__PURE__ */ l($1, {}),
  /* @__PURE__ */ l(
    A1,
    {
      ref: r,
      className: T(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
UG.displayName = A1.displayName;
const KG = ({ className: e, ...t }) => /* @__PURE__ */ l("div", { className: T("flex flex-col space-y-2 text-center sm:text-left", e), ...t });
KG.displayName = "AlertDialogHeader";
const YG = ({ className: e, ...t }) => /* @__PURE__ */ l("div", { className: T("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e), ...t });
YG.displayName = "AlertDialogFooter";
const qG = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(O1, { ref: r, className: T("text-lg font-semibold", e), ...t }));
qG.displayName = O1.displayName;
const XG = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(I1, { ref: r, className: T("text-sm text-muted-foreground", e), ...t }));
XG.displayName = I1.displayName;
const ZG = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(k1, { ref: r, className: T(jn(), e), ...t }));
ZG.displayName = k1.displayName;
const QG = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  D1,
  {
    ref: r,
    className: T(jn({ variant: "outline" }), "mt-2 sm:mt-0", e),
    ...t
  }
));
QG.displayName = D1.displayName;
var af = "ContextMenu", [JG, Aq] = De(af, [
  ba
]), lt = ba(), [eU, L1] = JG(af), F1 = (e) => {
  const { __scopeContextMenu: t, children: r, onOpenChange: n, dir: o, modal: a = !0 } = e, [i, s] = u.useState(!1), c = lt(t), d = Se(n), f = u.useCallback(
    (p) => {
      s(p), d(p);
    },
    [d]
  );
  return /* @__PURE__ */ l(
    eU,
    {
      scope: t,
      open: i,
      onOpenChange: f,
      modal: a,
      children: /* @__PURE__ */ l(
        Kd,
        {
          ...c,
          dir: o,
          open: i,
          onOpenChange: f,
          modal: a,
          children: r
        }
      )
    }
  );
};
F1.displayName = af;
var z1 = "ContextMenuTrigger", B1 = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: r, disabled: n = !1, ...o } = e, a = L1(z1, r), i = lt(r), s = u.useRef({ x: 0, y: 0 }), c = u.useRef({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...s.current })
    }), d = u.useRef(0), f = u.useCallback(
      () => window.clearTimeout(d.current),
      []
    ), p = (m) => {
      s.current = { x: m.clientX, y: m.clientY }, a.onOpenChange(!0);
    };
    return u.useEffect(() => f, [f]), u.useEffect(() => void (n && f()), [n, f]), /* @__PURE__ */ S(Me, { children: [
      /* @__PURE__ */ l(Yd, { ...i, virtualRef: c }),
      /* @__PURE__ */ l(
        Q.span,
        {
          "data-state": a.open ? "open" : "closed",
          "data-disabled": n ? "" : void 0,
          ...o,
          ref: t,
          style: { WebkitTouchCallout: "none", ...e.style },
          onContextMenu: n ? e.onContextMenu : H(e.onContextMenu, (m) => {
            f(), p(m), m.preventDefault();
          }),
          onPointerDown: n ? e.onPointerDown : H(
            e.onPointerDown,
            qa((m) => {
              f(), d.current = window.setTimeout(() => p(m), 700);
            })
          ),
          onPointerMove: n ? e.onPointerMove : H(e.onPointerMove, qa(f)),
          onPointerCancel: n ? e.onPointerCancel : H(e.onPointerCancel, qa(f)),
          onPointerUp: n ? e.onPointerUp : H(e.onPointerUp, qa(f))
        }
      )
    ] });
  }
);
B1.displayName = z1;
var tU = "ContextMenuPortal", j1 = (e) => {
  const { __scopeContextMenu: t, ...r } = e, n = lt(t);
  return /* @__PURE__ */ l(qd, { ...n, ...r });
};
j1.displayName = tU;
var H1 = "ContextMenuContent", W1 = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: r, ...n } = e, o = L1(H1, r), a = lt(r), i = u.useRef(!1);
    return /* @__PURE__ */ l(
      Xd,
      {
        ...a,
        ...n,
        ref: t,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (s) => {
          var c;
          (c = e.onCloseAutoFocus) == null || c.call(e, s), !s.defaultPrevented && i.current && s.preventDefault(), i.current = !1;
        },
        onInteractOutside: (s) => {
          var c;
          (c = e.onInteractOutside) == null || c.call(e, s), !s.defaultPrevented && !o.modal && (i.current = !0);
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
W1.displayName = H1;
var rU = "ContextMenuGroup", V1 = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ l(Zd, { ...o, ...n, ref: t });
  }
);
V1.displayName = rU;
var nU = "ContextMenuLabel", G1 = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ l(Qd, { ...o, ...n, ref: t });
  }
);
G1.displayName = nU;
var oU = "ContextMenuItem", U1 = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ l(Jd, { ...o, ...n, ref: t });
  }
);
U1.displayName = oU;
var aU = "ContextMenuCheckboxItem", K1 = u.forwardRef((e, t) => {
  const { __scopeContextMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ l(eu, { ...o, ...n, ref: t });
});
K1.displayName = aU;
var iU = "ContextMenuRadioGroup", sU = u.forwardRef((e, t) => {
  const { __scopeContextMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ l(tu, { ...o, ...n, ref: t });
});
sU.displayName = iU;
var lU = "ContextMenuRadioItem", Y1 = u.forwardRef((e, t) => {
  const { __scopeContextMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ l(ru, { ...o, ...n, ref: t });
});
Y1.displayName = lU;
var cU = "ContextMenuItemIndicator", q1 = u.forwardRef((e, t) => {
  const { __scopeContextMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ l(nu, { ...o, ...n, ref: t });
});
q1.displayName = cU;
var dU = "ContextMenuSeparator", X1 = u.forwardRef((e, t) => {
  const { __scopeContextMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ l(ou, { ...o, ...n, ref: t });
});
X1.displayName = dU;
var uU = "ContextMenuArrow", fU = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: r, ...n } = e, o = lt(r);
    return /* @__PURE__ */ l(au, { ...o, ...n, ref: t });
  }
);
fU.displayName = uU;
var Z1 = "ContextMenuSub", Q1 = (e) => {
  const { __scopeContextMenu: t, children: r, onOpenChange: n, open: o, defaultOpen: a } = e, i = lt(t), [s, c] = Oe({
    prop: o,
    defaultProp: a ?? !1,
    onChange: n,
    caller: Z1
  });
  return /* @__PURE__ */ l(iu, { ...i, open: s, onOpenChange: c, children: r });
};
Q1.displayName = Z1;
var pU = "ContextMenuSubTrigger", J1 = u.forwardRef((e, t) => {
  const { __scopeContextMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ l(su, { ...o, ...n, ref: t });
});
J1.displayName = pU;
var mU = "ContextMenuSubContent", eC = u.forwardRef((e, t) => {
  const { __scopeContextMenu: r, ...n } = e, o = lt(r);
  return /* @__PURE__ */ l(
    lu,
    {
      ...o,
      ...n,
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
eC.displayName = mU;
function qa(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
var hU = F1, gU = B1, vU = j1, tC = W1, bU = V1, rC = G1, nC = U1, oC = K1, aC = Y1, iC = q1, sC = X1, yU = Q1, lC = J1, cC = eC;
const kq = hU, Dq = gU, Oq = bU, Iq = yU, wU = u.forwardRef(({ className: e, inset: t, children: r, ...n }, o) => /* @__PURE__ */ S(
  lC,
  {
    ref: o,
    className: T(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...n,
    children: [
      r,
      /* @__PURE__ */ l(hn, { className: "ml-auto h-4 w-4" })
    ]
  }
));
wU.displayName = lC.displayName;
const xU = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  cC,
  {
    ref: r,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
xU.displayName = cC.displayName;
const CU = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(vU, { children: /* @__PURE__ */ l(
  tC,
  {
    ref: r,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
) }));
CU.displayName = tC.displayName;
const SU = u.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ l(
  nC,
  {
    ref: n,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r
  }
));
SU.displayName = nC.displayName;
const NU = u.forwardRef(({ className: e, children: t, checked: r, ...n }, o) => /* @__PURE__ */ S(
  oC,
  {
    ref: o,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ l("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l(iC, { children: /* @__PURE__ */ l(Qe, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
NU.displayName = oC.displayName;
const EU = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ S(
  aC,
  {
    ref: n,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ l("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l(iC, { children: /* @__PURE__ */ l(qi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
EU.displayName = aC.displayName;
const PU = u.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ l(
  rC,
  {
    ref: n,
    className: T("px-2 py-1.5 text-sm font-semibold text-foreground", t && "pl-8", e),
    ...r
  }
));
PU.displayName = rC.displayName;
const _U = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(sC, { ref: r, className: T("-mx-1 my-1 h-px bg-border", e), ...t }));
_U.displayName = sC.displayName;
const RU = ({ className: e, ...t }) => /* @__PURE__ */ l("span", { className: T("ml-auto text-xs tracking-widest text-muted-foreground", e), ...t });
RU.displayName = "ContextMenuShortcut";
var js = "DropdownMenu", [TU, $q] = De(
  js,
  [ba]
), ct = ba(), [MU, dC] = TU(js), uC = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: r,
    dir: n,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, c = ct(t), d = u.useRef(null), [f, p] = Oe({
    prop: o,
    defaultProp: a ?? !1,
    onChange: i,
    caller: js
  });
  return /* @__PURE__ */ l(
    MU,
    {
      scope: t,
      triggerId: ke(),
      triggerRef: d,
      contentId: ke(),
      open: f,
      onOpenChange: p,
      onOpenToggle: u.useCallback(() => p((m) => !m), [p]),
      modal: s,
      children: /* @__PURE__ */ l(Kd, { ...c, open: f, onOpenChange: p, dir: n, modal: s, children: r })
    }
  );
};
uC.displayName = js;
var fC = "DropdownMenuTrigger", pC = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, disabled: n = !1, ...o } = e, a = dC(fC, r), i = ct(r);
    return /* @__PURE__ */ l(Yd, { asChild: !0, ...i, children: /* @__PURE__ */ l(
      Q.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": n ? "" : void 0,
        disabled: n,
        ...o,
        ref: nr(t, a.triggerRef),
        onPointerDown: H(e.onPointerDown, (s) => {
          !n && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
        }),
        onKeyDown: H(e.onKeyDown, (s) => {
          n || (["Enter", " "].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
pC.displayName = fC;
var AU = "DropdownMenuPortal", mC = (e) => {
  const { __scopeDropdownMenu: t, ...r } = e, n = ct(t);
  return /* @__PURE__ */ l(qd, { ...n, ...r });
};
mC.displayName = AU;
var hC = "DropdownMenuContent", gC = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = dC(hC, r), a = ct(r), i = u.useRef(!1);
    return /* @__PURE__ */ l(
      Xd,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...n,
        ref: t,
        onCloseAutoFocus: H(e.onCloseAutoFocus, (s) => {
          var c;
          i.current || (c = o.triggerRef.current) == null || c.focus(), i.current = !1, s.preventDefault();
        }),
        onInteractOutside: H(e.onInteractOutside, (s) => {
          const c = s.detail.originalEvent, d = c.button === 0 && c.ctrlKey === !0, f = c.button === 2 || d;
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
gC.displayName = hC;
var kU = "DropdownMenuGroup", vC = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = ct(r);
    return /* @__PURE__ */ l(Zd, { ...o, ...n, ref: t });
  }
);
vC.displayName = kU;
var DU = "DropdownMenuLabel", bC = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = ct(r);
    return /* @__PURE__ */ l(Qd, { ...o, ...n, ref: t });
  }
);
bC.displayName = DU;
var OU = "DropdownMenuItem", yC = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = ct(r);
    return /* @__PURE__ */ l(Jd, { ...o, ...n, ref: t });
  }
);
yC.displayName = OU;
var IU = "DropdownMenuCheckboxItem", wC = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = ct(r);
  return /* @__PURE__ */ l(eu, { ...o, ...n, ref: t });
});
wC.displayName = IU;
var $U = "DropdownMenuRadioGroup", xC = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = ct(r);
  return /* @__PURE__ */ l(tu, { ...o, ...n, ref: t });
});
xC.displayName = $U;
var LU = "DropdownMenuRadioItem", CC = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = ct(r);
  return /* @__PURE__ */ l(ru, { ...o, ...n, ref: t });
});
CC.displayName = LU;
var FU = "DropdownMenuItemIndicator", SC = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = ct(r);
  return /* @__PURE__ */ l(nu, { ...o, ...n, ref: t });
});
SC.displayName = FU;
var zU = "DropdownMenuSeparator", NC = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = ct(r);
  return /* @__PURE__ */ l(ou, { ...o, ...n, ref: t });
});
NC.displayName = zU;
var BU = "DropdownMenuArrow", jU = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = ct(r);
    return /* @__PURE__ */ l(au, { ...o, ...n, ref: t });
  }
);
jU.displayName = BU;
var HU = (e) => {
  const { __scopeDropdownMenu: t, children: r, open: n, onOpenChange: o, defaultOpen: a } = e, i = ct(t), [s, c] = Oe({
    prop: n,
    defaultProp: a ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ l(iu, { ...i, open: s, onOpenChange: c, children: r });
}, WU = "DropdownMenuSubTrigger", EC = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = ct(r);
  return /* @__PURE__ */ l(su, { ...o, ...n, ref: t });
});
EC.displayName = WU;
var VU = "DropdownMenuSubContent", PC = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = ct(r);
  return /* @__PURE__ */ l(
    lu,
    {
      ...o,
      ...n,
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
PC.displayName = VU;
var GU = uC, UU = pC, _C = mC, RC = gC, KU = vC, TC = bC, MC = yC, AC = wC, YU = xC, kC = CC, DC = SC, OC = NC, qU = HU, IC = EC, $C = PC;
const Lq = GU, Fq = UU, zq = KU, Bq = _C, jq = qU, Hq = YU, XU = u.forwardRef(({ className: e, inset: t, children: r, ...n }, o) => /* @__PURE__ */ S(
  IC,
  {
    ref: o,
    className: T(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      t && "pl-8",
      e
    ),
    ...n,
    children: [
      r,
      /* @__PURE__ */ l(hn, { className: "ml-auto h-4 w-4" })
    ]
  }
));
XU.displayName = IC.displayName;
const ZU = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  $C,
  {
    ref: r,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
ZU.displayName = $C.displayName;
const QU = u.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ l(_C, { children: /* @__PURE__ */ l(
  RC,
  {
    ref: n,
    sideOffset: t,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
QU.displayName = RC.displayName;
const JU = u.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ l(
  MC,
  {
    ref: n,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r
  }
));
JU.displayName = MC.displayName;
const eK = u.forwardRef(({ className: e, children: t, checked: r, ...n }, o) => /* @__PURE__ */ S(
  AC,
  {
    ref: o,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ l("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l(DC, { children: /* @__PURE__ */ l(Qe, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
eK.displayName = AC.displayName;
const tK = u.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ S(
  kC,
  {
    ref: n,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ l("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l(DC, { children: /* @__PURE__ */ l(qi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
tK.displayName = kC.displayName;
const rK = u.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ l(
  TC,
  {
    ref: n,
    className: T("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
    ...r
  }
));
rK.displayName = TC.displayName;
const nK = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(OC, { ref: r, className: T("-mx-1 my-1 h-px bg-muted", e), ...t }));
nK.displayName = OC.displayName;
const oK = ({ className: e, ...t }) => /* @__PURE__ */ l("span", { className: T("ml-auto text-xs tracking-widest opacity-60", e), ...t });
oK.displayName = "DropdownMenuShortcut";
var Hs = "Popover", [LC, Wq] = De(Hs, [
  cr
]), ka = cr(), [aK, qr] = LC(Hs), FC = (e) => {
  const {
    __scopePopover: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = ka(t), c = u.useRef(null), [d, f] = u.useState(!1), [p, m] = Oe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Hs
  });
  return /* @__PURE__ */ l(ao, { ...s, children: /* @__PURE__ */ l(
    aK,
    {
      scope: t,
      contentId: ke(),
      triggerRef: c,
      open: p,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((h) => !h), [m]),
      hasCustomAnchor: d,
      onCustomAnchorAdd: u.useCallback(() => f(!0), []),
      onCustomAnchorRemove: u.useCallback(() => f(!1), []),
      modal: i,
      children: r
    }
  ) });
};
FC.displayName = Hs;
var zC = "PopoverAnchor", iK = u.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = qr(zC, r), a = ka(r), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return u.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ l(io, { ...a, ...n, ref: t });
  }
);
iK.displayName = zC;
var BC = "PopoverTrigger", jC = u.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = qr(BC, r), a = ka(r), i = ae(t, o.triggerRef), s = /* @__PURE__ */ l(
      Q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": UC(o.open),
        ...n,
        ref: i,
        onClick: H(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ l(io, { asChild: !0, ...a, children: s });
  }
);
jC.displayName = BC;
var sf = "PopoverPortal", [sK, lK] = LC(sf, {
  forceMount: void 0
}), HC = (e) => {
  const { __scopePopover: t, forceMount: r, children: n, container: o } = e, a = qr(sf, t);
  return /* @__PURE__ */ l(sK, { scope: t, forceMount: r, children: /* @__PURE__ */ l(Be, { present: r || a.open, children: /* @__PURE__ */ l(eo, { asChild: !0, container: o, children: n }) }) });
};
HC.displayName = sf;
var Qn = "PopoverContent", WC = u.forwardRef(
  (e, t) => {
    const r = lK(Qn, e.__scopePopover), { forceMount: n = r.forceMount, ...o } = e, a = qr(Qn, e.__scopePopover);
    return /* @__PURE__ */ l(Be, { present: n || a.open, children: a.modal ? /* @__PURE__ */ l(dK, { ...o, ref: t }) : /* @__PURE__ */ l(uK, { ...o, ref: t }) });
  }
);
WC.displayName = Qn;
var cK = /* @__PURE__ */ zr("PopoverContent.RemoveScroll"), dK = u.forwardRef(
  (e, t) => {
    const r = qr(Qn, e.__scopePopover), n = u.useRef(null), o = ae(t, n), a = u.useRef(!1);
    return u.useEffect(() => {
      const i = n.current;
      if (i) return os(i);
    }, []), /* @__PURE__ */ l(ga, { as: cK, allowPinchZoom: !0, children: /* @__PURE__ */ l(
      VC,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: H(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), a.current || (s = r.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: H(
          e.onPointerDownOutside,
          (i) => {
            const s = i.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0, d = s.button === 2 || c;
            a.current = d;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: H(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), uK = u.forwardRef(
  (e, t) => {
    const r = qr(Qn, e.__scopePopover), n = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ l(
      VC,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (n.current || (s = r.triggerRef.current) == null || s.focus(), a.preventDefault()), n.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var c, d;
          (c = e.onInteractOutside) == null || c.call(e, a), a.defaultPrevented || (n.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((d = r.triggerRef.current) == null ? void 0 : d.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), VC = u.forwardRef(
  (e, t) => {
    const {
      __scopePopover: r,
      trapFocus: n,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: s,
      onPointerDownOutside: c,
      onFocusOutside: d,
      onInteractOutside: f,
      ...p
    } = e, m = qr(Qn, r), h = ka(r);
    return es(), /* @__PURE__ */ l(
      fa,
      {
        asChild: !0,
        loop: !0,
        trapped: n,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ l(
          Er,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: f,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: d,
            onDismiss: () => m.onOpenChange(!1),
            children: /* @__PURE__ */ l(
              ma,
              {
                "data-state": UC(m.open),
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
), GC = "PopoverClose", fK = u.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = qr(GC, r);
    return /* @__PURE__ */ l(
      Q.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: H(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
fK.displayName = GC;
var pK = "PopoverArrow", mK = u.forwardRef(
  (e, t) => {
    const { __scopePopover: r, ...n } = e, o = ka(r);
    return /* @__PURE__ */ l(ha, { ...o, ...n, ref: t });
  }
);
mK.displayName = pK;
function UC(e) {
  return e ? "open" : "closed";
}
var hK = FC, gK = jC, vK = HC, KC = WC;
const Vq = hK, Gq = gK, bK = u.forwardRef(({ className: e, align: t = "center", sideOffset: r = 4, ...n }, o) => /* @__PURE__ */ l(vK, { children: /* @__PURE__ */ l(
  KC,
  {
    ref: o,
    align: t,
    sideOffset: r,
    className: T(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
bK.displayName = KC.displayName;
var Il, Ws = "HoverCard", [YC, Uq] = De(Ws, [
  cr
]), Vs = cr(), [yK, lf] = YC(Ws), qC = (e) => {
  const {
    __scopeHoverCard: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    openDelay: i = 700,
    closeDelay: s = 300
  } = e, c = Vs(t), d = u.useRef(0), f = u.useRef(0), p = u.useRef(!1), m = u.useRef(!1), [h, v] = Oe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Ws
  }), g = u.useCallback(() => {
    clearTimeout(f.current), d.current = window.setTimeout(() => v(!0), i);
  }, [i, v]), b = u.useCallback(() => {
    clearTimeout(d.current), !p.current && !m.current && (f.current = window.setTimeout(() => v(!1), s));
  }, [s, v]), y = u.useCallback(() => v(!1), [v]);
  return u.useEffect(() => () => {
    clearTimeout(d.current), clearTimeout(f.current);
  }, []), /* @__PURE__ */ l(
    yK,
    {
      scope: t,
      open: h,
      onOpenChange: v,
      onOpen: g,
      onClose: b,
      onDismiss: y,
      hasSelectionRef: p,
      isPointerDownOnContentRef: m,
      children: /* @__PURE__ */ l(ao, { ...c, children: r })
    }
  );
};
qC.displayName = Ws;
var XC = "HoverCardTrigger", ZC = u.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: r, ...n } = e, o = lf(XC, r), a = Vs(r);
    return /* @__PURE__ */ l(io, { asChild: !0, ...a, children: /* @__PURE__ */ l(
      Q.a,
      {
        "data-state": o.open ? "open" : "closed",
        ...n,
        ref: t,
        onPointerEnter: H(e.onPointerEnter, Hi(o.onOpen)),
        onPointerLeave: H(e.onPointerLeave, Hi(o.onClose)),
        onFocus: H(e.onFocus, o.onOpen),
        onBlur: H(e.onBlur, o.onClose),
        onTouchStart: H(e.onTouchStart, (i) => i.preventDefault())
      }
    ) });
  }
);
ZC.displayName = XC;
var wK = "HoverCardPortal", [Kq, xK] = YC(wK, {
  forceMount: void 0
}), ji = "HoverCardContent", QC = u.forwardRef(
  (e, t) => {
    const r = xK(ji, e.__scopeHoverCard), { forceMount: n = r.forceMount, ...o } = e, a = lf(ji, e.__scopeHoverCard);
    return /* @__PURE__ */ l(Be, { present: n || a.open, children: /* @__PURE__ */ l(
      CK,
      {
        "data-state": a.open ? "open" : "closed",
        ...o,
        onPointerEnter: H(e.onPointerEnter, Hi(a.onOpen)),
        onPointerLeave: H(e.onPointerLeave, Hi(a.onClose)),
        ref: t
      }
    ) });
  }
);
QC.displayName = ji;
var CK = u.forwardRef((e, t) => {
  const {
    __scopeHoverCard: r,
    onEscapeKeyDown: n,
    onPointerDownOutside: o,
    onFocusOutside: a,
    onInteractOutside: i,
    ...s
  } = e, c = lf(ji, r), d = Vs(r), f = u.useRef(null), p = ae(t, f), [m, h] = u.useState(!1);
  return u.useEffect(() => {
    if (m) {
      const v = document.body;
      return Il = v.style.userSelect || v.style.webkitUserSelect, v.style.userSelect = "none", v.style.webkitUserSelect = "none", () => {
        v.style.userSelect = Il, v.style.webkitUserSelect = Il;
      };
    }
  }, [m]), u.useEffect(() => {
    if (f.current) {
      const v = () => {
        h(!1), c.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var b;
          ((b = document.getSelection()) == null ? void 0 : b.toString()) !== "" && (c.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", v), () => {
        document.removeEventListener("pointerup", v), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [c.isPointerDownOnContentRef, c.hasSelectionRef]), u.useEffect(() => {
    f.current && EK(f.current).forEach((g) => g.setAttribute("tabindex", "-1"));
  }), /* @__PURE__ */ l(
    Er,
    {
      asChild: !0,
      disableOutsidePointerEvents: !1,
      onInteractOutside: i,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: H(a, (v) => {
        v.preventDefault();
      }),
      onDismiss: c.onDismiss,
      children: /* @__PURE__ */ l(
        ma,
        {
          ...d,
          ...s,
          onPointerDown: H(s.onPointerDown, (v) => {
            v.currentTarget.contains(v.target) && h(!0), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !0;
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
}), SK = "HoverCardArrow", NK = u.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: r, ...n } = e, o = Vs(r);
    return /* @__PURE__ */ l(ha, { ...o, ...n, ref: t });
  }
);
NK.displayName = SK;
function Hi(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function EK(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
var PK = qC, _K = ZC, JC = QC;
const Yq = PK, qq = _K, RK = u.forwardRef(({ className: e, align: t = "center", sideOffset: r = 4, ...n }, o) => /* @__PURE__ */ l(
  JC,
  {
    ref: o,
    align: t,
    sideOffset: r,
    className: T(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
RK.displayName = JC.displayName;
var Kc = { exports: {} }, $l = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mm;
function TK() {
  if (Mm) return $l;
  Mm = 1;
  var e = _;
  function t(p, m) {
    return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, a = e.useLayoutEffect, i = e.useDebugValue;
  function s(p, m) {
    var h = m(), v = n({ inst: { value: h, getSnapshot: m } }), g = v[0].inst, b = v[1];
    return a(
      function() {
        g.value = h, g.getSnapshot = m, c(g) && b({ inst: g });
      },
      [p, h, m]
    ), o(
      function() {
        return c(g) && b({ inst: g }), p(function() {
          c(g) && b({ inst: g });
        });
      },
      [p]
    ), i(h), h;
  }
  function c(p) {
    var m = p.getSnapshot;
    p = p.value;
    try {
      var h = m();
      return !r(p, h);
    } catch {
      return !0;
    }
  }
  function d(p, m) {
    return m();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : s;
  return $l.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, $l;
}
var Ll = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Am;
function MK() {
  return Am || (Am = 1, process.env.NODE_ENV !== "production" && function() {
    function e(h, v) {
      return h === v && (h !== 0 || 1 / h === 1 / v) || h !== h && v !== v;
    }
    function t(h, v) {
      f || o.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var g = v();
      if (!p) {
        var b = v();
        a(g, b) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), p = !0);
      }
      b = i({
        inst: { value: g, getSnapshot: v }
      });
      var y = b[0].inst, w = b[1];
      return c(
        function() {
          y.value = g, y.getSnapshot = v, r(y) && w({ inst: y });
        },
        [h, g, v]
      ), s(
        function() {
          return r(y) && w({ inst: y }), h(function() {
            r(y) && w({ inst: y });
          });
        },
        [h]
      ), d(g), g;
    }
    function r(h) {
      var v = h.getSnapshot;
      h = h.value;
      try {
        var g = v();
        return !a(h, g);
      } catch {
        return !0;
      }
    }
    function n(h, v) {
      return v();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = _, a = typeof Object.is == "function" ? Object.is : e, i = o.useState, s = o.useEffect, c = o.useLayoutEffect, d = o.useDebugValue, f = !1, p = !1, m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Ll.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Ll;
}
process.env.NODE_ENV === "production" ? Kc.exports = TK() : Kc.exports = MK();
var AK = Kc.exports;
function kK() {
  return AK.useSyncExternalStore(
    DK,
    () => !0,
    () => !1
  );
}
function DK() {
  return () => {
  };
}
var cf = "Avatar", [OK, Xq] = De(cf), [IK, eS] = OK(cf), tS = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, ...n } = e, [o, a] = u.useState("idle");
    return /* @__PURE__ */ l(
      IK,
      {
        scope: r,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ l(Q.span, { ...n, ref: t })
      }
    );
  }
);
tS.displayName = cf;
var rS = "AvatarImage", nS = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, src: n, onLoadingStatusChange: o = () => {
    }, ...a } = e, i = eS(rS, r), s = $K(n, a), c = Se((d) => {
      o(d), i.onImageLoadingStatusChange(d);
    });
    return ze(() => {
      s !== "idle" && c(s);
    }, [s, c]), s === "loaded" ? /* @__PURE__ */ l(Q.img, { ...a, ref: t, src: n }) : null;
  }
);
nS.displayName = rS;
var oS = "AvatarFallback", aS = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, delayMs: n, ...o } = e, a = eS(oS, r), [i, s] = u.useState(n === void 0);
    return u.useEffect(() => {
      if (n !== void 0) {
        const c = window.setTimeout(() => s(!0), n);
        return () => window.clearTimeout(c);
      }
    }, [n]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ l(Q.span, { ...o, ref: t }) : null;
  }
);
aS.displayName = oS;
function km(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function $K(e, { referrerPolicy: t, crossOrigin: r }) {
  const n = kK(), o = u.useRef(null), a = n ? (o.current || (o.current = new window.Image()), o.current) : null, [i, s] = u.useState(
    () => km(a, e)
  );
  return ze(() => {
    s(km(a, e));
  }, [a, e]), ze(() => {
    const c = (p) => () => {
      s(p);
    };
    if (!a) return;
    const d = c("loaded"), f = c("error");
    return a.addEventListener("load", d), a.addEventListener("error", f), t && (a.referrerPolicy = t), typeof r == "string" && (a.crossOrigin = r), () => {
      a.removeEventListener("load", d), a.removeEventListener("error", f);
    };
  }, [a, r, t]), i;
}
var iS = tS, sS = nS, lS = aS;
const LK = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  iS,
  {
    ref: r,
    className: T("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
    ...t
  }
));
LK.displayName = iS.displayName;
const FK = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(sS, { ref: r, className: T("aspect-square h-full w-full", e), ...t }));
FK.displayName = sS.displayName;
const zK = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l(
  lS,
  {
    ref: r,
    className: T("flex h-full w-full items-center justify-center rounded-full bg-muted", e),
    ...t
  }
));
zK.displayName = lS.displayName;
const cS = Cr({ theme: "light", toggleTheme: () => {
} });
function Zq({ children: e }) {
  const [t, r] = me(() => typeof window < "u" && localStorage.getItem("evyra-theme") || "light");
  nt(() => {
    const o = document.documentElement;
    o.classList.remove("light", "dark"), o.classList.add(t), localStorage.setItem("evyra-theme", t);
  }, [t]);
  const n = () => r((o) => o === "light" ? "dark" : "light");
  return /* @__PURE__ */ l(cS.Provider, { value: { theme: t, toggleTheme: n }, children: e });
}
const BK = () => ir(cS), jK = [
  { id: "1", type: "proposal", title: "Nova Proposta Recebida", desc: "Mariana Costa enviou uma proposta para Apoio Pós-Operatório.", time: "2 min", read: !1, avatar: "https://i.pravatar.cc/100?u=prop0" },
  { id: "2", type: "message", title: "Nova Mensagem", desc: 'João Pedro: "Olá, gostaria de discutir os detalhes..."', time: "15 min", read: !1, avatar: "https://i.pravatar.cc/100?u=prop1" },
  { id: "3", type: "status", title: "Proposta Aceite", desc: "A sua proposta para Cuidados Mensais foi aceite.", time: "1h", read: !1 },
  { id: "4", type: "message", title: "Nova Mensagem", desc: 'Ana Ferreira: "Confirmo disponibilidade para amanhã."', time: "2h", read: !0, avatar: "https://i.pravatar.cc/100?u=prop2" },
  { id: "5", type: "proposal", title: "Proposta Atualizada", desc: "Carlos Silva atualizou o orçamento para 890€.", time: "3h", read: !0, avatar: "https://i.pravatar.cc/100?u=prop3" }
], Dm = [
  { type: "message", title: "Nova Mensagem", desc: 'Sofia Lopes: "Podemos agendar para sexta-feira?"', avatar: "https://i.pravatar.cc/100?u=prop4" },
  { type: "proposal", title: "Nova Proposta Recebida", desc: "Ricardo Mendes candidatou-se a Fisioterapia Domiciliária.", avatar: "https://i.pravatar.cc/100?u=prop5" },
  { type: "status", title: "Pagamento Confirmado", desc: "O pagamento de 450€ foi processado com sucesso." }
], HK = {
  proposal: Lr,
  message: sa,
  status: aE
}, WK = {
  proposal: "bg-primary/10 text-primary",
  message: "bg-accent text-accent-foreground",
  status: "bg-success/10 text-success"
}, Qq = ({ sidebarOpen: e, onMobileMenuToggle: t }) => {
  const { theme: r, toggleTheme: n } = BK(), [o, a] = me(jK), [i, s] = me(!1), c = qe(null), d = qe(0), f = o.filter((v) => !v.read).length;
  nt(() => {
    const v = setInterval(() => {
      if (d.current < Dm.length) {
        const g = Dm[d.current];
        d.current++, a((b) => [
          { ...g, id: `new-${Date.now()}`, read: !1, time: "agora" },
          ...b
        ]);
      }
    }, 3e4);
    return () => clearInterval(v);
  }, []), nt(() => {
    const v = (g) => {
      c.current && !c.current.contains(g.target) && s(!1);
    };
    return i && document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [i]);
  const p = () => {
    a((v) => v.map((g) => ({ ...g, read: !0 })));
  }, m = (v) => {
    a((g) => g.map((b) => b.id === v ? { ...b, read: !0 } : b));
  }, h = (v) => {
    a((g) => g.filter((b) => b.id !== v));
  };
  return /* @__PURE__ */ S("header", { className: "h-16 border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between", children: [
    /* @__PURE__ */ S("div", { className: "flex items-center gap-4 flex-1", children: [
      /* @__PURE__ */ l(
        "button",
        {
          onClick: t,
          className: "p-2 text-muted-foreground hover:bg-accent rounded-xl transition-colors md:hidden",
          children: /* @__PURE__ */ l(Nh, { size: 22 })
        }
      ),
      /* @__PURE__ */ S("div", { className: "relative w-full max-w-md hidden md:block", children: [
        /* @__PURE__ */ l(Xi, { size: 16, className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ l(
          "input",
          {
            className: "w-full bg-secondary border border-border rounded-2xl pl-11 pr-4 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body text-foreground placeholder:text-muted-foreground",
            placeholder: "Pesquisar por especialidade ou localização..."
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ S("div", { className: "flex items-center gap-2 md:gap-3", children: [
      /* @__PURE__ */ l(
        "button",
        {
          onClick: n,
          className: "p-2.5 text-muted-foreground hover:bg-accent rounded-xl transition-colors",
          "aria-label": "Toggle theme",
          children: r === "dark" ? /* @__PURE__ */ l(SE, { size: 20 }) : /* @__PURE__ */ l(yE, { size: 20 })
        }
      ),
      /* @__PURE__ */ S("div", { className: "relative", ref: c, children: [
        /* @__PURE__ */ S(
          "button",
          {
            onClick: () => s(!i),
            className: "p-2.5 text-muted-foreground hover:bg-accent rounded-xl relative transition-colors",
            children: [
              /* @__PURE__ */ l(Hn, { size: 20 }),
              f > 0 && /* @__PURE__ */ l(
                rt.span,
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
        /* @__PURE__ */ l(na, { children: i && /* @__PURE__ */ S(
          rt.div,
          {
            initial: { opacity: 0, y: 8, scale: 0.96 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: 8, scale: 0.96 },
            transition: { duration: 0.2, ease: "easeOut" },
            className: "absolute right-0 top-full mt-2 w-[calc(100vw-2rem)] sm:w-96 bg-card border border-border rounded-2xl shadow-elevated overflow-hidden z-50",
            children: [
              /* @__PURE__ */ S("div", { className: "px-5 py-4 border-b border-border flex items-center justify-between", children: [
                /* @__PURE__ */ S("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ l("h3", { className: "font-display font-black text-foreground uppercase text-sm tracking-wider", children: "Notificações" }),
                  f > 0 && /* @__PURE__ */ S("span", { className: "bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-lg", children: [
                    f,
                    " novas"
                  ] })
                ] }),
                f > 0 && /* @__PURE__ */ l(
                  "button",
                  {
                    onClick: p,
                    className: "text-xs font-semibold text-primary hover:text-primary/80 transition-colors",
                    children: "Marcar todas como lidas"
                  }
                )
              ] }),
              /* @__PURE__ */ l("div", { className: "max-h-[400px] overflow-y-auto", children: o.length === 0 ? /* @__PURE__ */ S("div", { className: "py-12 text-center text-muted-foreground", children: [
                /* @__PURE__ */ l(Hn, { size: 32, className: "mx-auto mb-3 opacity-30" }),
                /* @__PURE__ */ l("p", { className: "text-sm font-medium", children: "Sem notificações" })
              ] }) : o.map((v, g) => {
                const b = HK[v.type];
                return /* @__PURE__ */ S(
                  rt.div,
                  {
                    initial: { opacity: 0, x: -12 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: g * 0.03 },
                    className: T(
                      "flex items-start gap-3 px-5 py-3.5 hover:bg-accent/50 transition-colors cursor-pointer group relative",
                      !v.read && "bg-primary/[0.03]"
                    ),
                    onClick: () => m(v.id),
                    children: [
                      !v.read && /* @__PURE__ */ l("span", { className: "absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full" }),
                      v.avatar ? /* @__PURE__ */ l("div", { className: "w-9 h-9 rounded-xl overflow-hidden shrink-0 ring-2 ring-secondary", children: /* @__PURE__ */ l("img", { src: v.avatar, alt: "", className: "w-full h-full object-cover" }) }) : /* @__PURE__ */ l("div", { className: T("w-9 h-9 rounded-xl flex items-center justify-center shrink-0", WK[v.type]), children: /* @__PURE__ */ l(b, { size: 16 }) }),
                      /* @__PURE__ */ S("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ l("p", { className: T("text-sm font-semibold text-foreground truncate", !v.read && "font-bold"), children: v.title }),
                        /* @__PURE__ */ l("p", { className: "text-xs text-muted-foreground line-clamp-2 mt-0.5", children: v.desc }),
                        /* @__PURE__ */ S("div", { className: "flex items-center gap-1 mt-1.5", children: [
                          /* @__PURE__ */ l(xh, { size: 10, className: "text-muted-foreground/50" }),
                          /* @__PURE__ */ l("span", { className: "text-[10px] text-muted-foreground/60 font-medium", children: v.time })
                        ] })
                      ] }),
                      /* @__PURE__ */ l(
                        "button",
                        {
                          onClick: (y) => {
                            y.stopPropagation(), h(v.id);
                          },
                          className: "opacity-0 group-hover:opacity-100 p-1 text-muted-foreground hover:text-destructive rounded-lg transition-all shrink-0",
                          children: /* @__PURE__ */ l(to, { size: 14 })
                        }
                      )
                    ]
                  },
                  v.id
                );
              }) })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ l("div", { className: "w-10 h-10 bg-secondary rounded-xl border-2 border-card shadow-card overflow-hidden ring-2 ring-secondary cursor-pointer", children: /* @__PURE__ */ l("img", { src: "https://i.pravatar.cc/100?u=company", alt: "User", className: "w-full h-full object-cover" }) })
    ] })
  ] });
}, Dr = ({
  icon: e,
  label: t,
  desc: r,
  active: n,
  onClick: o,
  isOpen: a,
  count: i,
  variant: s = "default",
  badge: c
}) => /* @__PURE__ */ S(
  "button",
  {
    onClick: o,
    className: T(
      "w-full flex items-center justify-between p-3 rounded-2xl transition-all duration-200 relative group",
      n ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-accent hover:text-foreground"
    ),
    children: [
      /* @__PURE__ */ S("div", { className: "flex items-center gap-3 min-w-0", children: [
        /* @__PURE__ */ l(e, { size: 18, className: T(
          "shrink-0",
          n ? "text-primary-foreground" : s === "danger" ? "text-destructive" : "text-muted-foreground group-hover:text-primary transition-colors"
        ) }),
        a && /* @__PURE__ */ S("div", { className: "min-w-0 text-left", children: [
          /* @__PURE__ */ l("span", { className: T(
            "text-sm font-display font-bold tracking-tight block",
            n ? "text-primary-foreground" : s === "danger" ? "text-destructive" : "text-foreground"
          ), children: t }),
          r && /* @__PURE__ */ l("span", { className: "text-[10px] opacity-60 font-medium block leading-none mt-0.5 truncate", children: r })
        ] })
      ] }),
      a && (i || c) && /* @__PURE__ */ l("span", { className: T(
        "px-2 py-0.5 rounded-lg text-[9px] font-bold font-display uppercase tracking-widest shrink-0",
        n ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary/10 text-primary"
      ), children: i || c })
    ]
  }
), To = ({ label: e, isOpen: t }) => /* @__PURE__ */ l("div", { className: "pt-5 pb-1.5 px-3", children: t ? /* @__PURE__ */ l("p", { className: "text-[9px] font-display font-black text-muted-foreground/50 uppercase tracking-[0.3em]", children: e }) : /* @__PURE__ */ l("div", { className: "h-px bg-border mx-auto w-8" }) }), An = {
  main: [
    { id: "dashboard", icon: Gl, label: "Dashboard", desc: "Visão geral" },
    { id: "marketplace", icon: Xi, label: "Explorar Talentos", desc: "Pesquisar cuidadores" },
    { id: "demandas", icon: ci, label: "Demandas", desc: "Publicar necessidades", count: "3" },
    { id: "search-cuidadores", icon: Ir, label: "Procurar Cuidadores", desc: "Encontrar profissional" },
    { id: "entrevistas", icon: Ks, label: "Entrevistas", desc: "Agendadas e pendentes" },
    { id: "propostas", icon: Lr, label: "Propostas", desc: "Recebidas e enviadas", count: "2" },
    { id: "chat", icon: sa, label: "Mensagens", desc: "Conversas ativas", count: "5" }
  ],
  recruit: [
    { id: "contratos", icon: Lr, label: "Contratos", desc: "Ativos e histórico", count: "1" },
    { id: "database", icon: Ir, label: "Base de Dados", desc: "Pool de candidatos" },
    { id: "payments", icon: PE, label: "Pagamentos & Escrow", desc: "Transações e saldo" },
    { id: "verificacao", icon: nd, label: "Verificação KYC", desc: "Estado de identidade" },
    { id: "profile", icon: Ir, label: "Meu Perfil", desc: "Editar informação" },
    { id: "wallet", icon: yf, label: "Carteira", desc: "Saldo detalhado", badge: "novo" },
    { id: "notificacoes", icon: Hn, label: "Notificações", desc: "Alertas recentes", badge: "novo" }
  ],
  flows: [
    { id: "cuidador-detail", icon: Ir, label: "Detalhe Cuidador", desc: "Perfil público", badge: "novo" },
    { id: "nova-demanda", icon: ci, label: "Nova Demanda", desc: "Publicar necessidade", badge: "novo" },
    { id: "novo-contrato", icon: Lr, label: "Novo Contrato", desc: "Criar contrato", badge: "novo" },
    { id: "proposal-flow", icon: Ks, label: "Proposal Flow", desc: "Aceitar proposta", badge: "novo" }
  ],
  auth: [
    { id: "login", icon: pE, label: "Login", desc: "Página de entrada", badge: "novo" },
    { id: "register", icon: EE, label: "Registro", desc: "Criação de conta", badge: "novo" },
    { id: "family-setup", icon: nn, label: "Family Setup", desc: "Wizard família", badge: "novo" },
    { id: "profile-setup", icon: Ir, label: "Profile Setup", desc: "Wizard cuidador", badge: "novo" },
    { id: "kyc", icon: on, label: "Verificação KYC", desc: "Identidade Didit", badge: "novo" }
  ],
  admin: [
    { id: "admin", icon: mE, label: "Admin Dashboard", desc: "Painel de gestão", badge: "novo" },
    { id: "help", icon: iE, label: "Centro de Ajuda", desc: "FAQ & suporte", badge: "novo" }
  ],
  uikit: [
    { id: "ui-buttons", icon: wf, label: "Botões" },
    { id: "ui-forms", icon: Lr, label: "Formulários" },
    { id: "ui-cards", icon: yf, label: "Cards & Badges" },
    { id: "ui-feedback", icon: Hn, label: "Feedback & Alerts" },
    { id: "ui-data", icon: Gl, label: "Dados & Tabelas" },
    { id: "ui-navigation", icon: uE, label: "Navegação" },
    { id: "ui-overlays", icon: wf, label: "Overlays & Modais" },
    { id: "ui-misc", icon: Ks, label: "Utilitários" }
  ]
}, Om = ({ currentView: e, setCurrentView: t, isOpen: r, setIsOpen: n, onNavigate: o }) => {
  const a = (i) => {
    t(i), o == null || o();
  };
  return /* @__PURE__ */ S("div", { className: "flex flex-col h-full p-4", children: [
    /* @__PURE__ */ S("div", { className: "flex items-center justify-between mb-6 px-1 pt-1", children: [
      r ? /* @__PURE__ */ S("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ l("div", { className: "w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-glow", children: /* @__PURE__ */ l(nn, { size: 20, className: "text-primary-foreground", fill: "currentColor" }) }),
        /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("h1", { className: "text-base font-display font-black tracking-tighter text-primary leading-none", children: "EVYRA" }),
          /* @__PURE__ */ l("p", { className: "text-[9px] font-display font-bold text-muted-foreground uppercase tracking-widest mt-0.5", children: "UI Kit" })
        ] })
      ] }) : /* @__PURE__ */ l("div", { className: "w-10 h-10 bg-primary rounded-xl flex items-center justify-center mx-auto shadow-glow", children: /* @__PURE__ */ l(nn, { size: 20, className: "text-primary-foreground", fill: "currentColor" }) }),
      /* @__PURE__ */ l("button", { onClick: () => n(!r), className: "p-2 hover:bg-accent rounded-xl transition-colors text-muted-foreground hidden md:block", children: /* @__PURE__ */ l(Nh, { size: 18 }) })
    ] }),
    r && /* @__PURE__ */ S("div", { className: "mx-1 mb-4 px-3 py-2.5 bg-primary/5 border border-primary/20 rounded-2xl", children: [
      /* @__PURE__ */ l("p", { className: "text-[9px] font-display font-black uppercase tracking-widest text-primary", children: "13 páginas novas" }),
      /* @__PURE__ */ l("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Prontas para o repositório" })
    ] }),
    /* @__PURE__ */ S("nav", { className: "flex-1 space-y-0.5 overflow-y-auto scrollbar-hide", children: [
      An.main.map((i) => /* @__PURE__ */ l(
        Dr,
        {
          icon: i.icon,
          label: i.label,
          desc: r ? i.desc : void 0,
          active: e === i.id,
          onClick: () => a(i.id),
          isOpen: r,
          count: i.count
        },
        i.id
      )),
      /* @__PURE__ */ l(To, { label: "Recrutamento", isOpen: r }),
      An.recruit.map((i) => /* @__PURE__ */ l(
        Dr,
        {
          icon: i.icon,
          label: i.label,
          desc: r ? i.desc : void 0,
          active: e === i.id,
          onClick: () => a(i.id),
          isOpen: r,
          badge: i.badge
        },
        i.id
      )),
      /* @__PURE__ */ l(To, { label: "Novos Fluxos", isOpen: r }),
      An.flows.map((i) => /* @__PURE__ */ l(
        Dr,
        {
          icon: i.icon,
          label: i.label,
          desc: r ? i.desc : void 0,
          active: e === i.id,
          onClick: () => a(i.id),
          isOpen: r,
          badge: i.badge
        },
        i.id
      )),
      /* @__PURE__ */ l(To, { label: "Auth & Onboarding", isOpen: r }),
      An.auth.map((i) => /* @__PURE__ */ l(
        Dr,
        {
          icon: i.icon,
          label: i.label,
          desc: r ? i.desc : void 0,
          active: e === i.id,
          onClick: () => a(i.id),
          isOpen: r,
          badge: i.badge
        },
        i.id
      )),
      /* @__PURE__ */ l(To, { label: "Admin & Suporte", isOpen: r }),
      An.admin.map((i) => /* @__PURE__ */ l(
        Dr,
        {
          icon: i.icon,
          label: i.label,
          desc: r ? i.desc : void 0,
          active: e === i.id,
          onClick: () => a(i.id),
          isOpen: r,
          badge: i.badge
        },
        i.id
      )),
      /* @__PURE__ */ l(To, { label: "UI Kit", isOpen: r }),
      An.uikit.map((i) => /* @__PURE__ */ l(
        Dr,
        {
          icon: i.icon,
          label: i.label,
          active: e === i.id,
          onClick: () => a(i.id),
          isOpen: r
        },
        i.id
      ))
    ] }),
    /* @__PURE__ */ S("div", { className: "pt-4 border-t border-border space-y-1", children: [
      /* @__PURE__ */ l(Dr, { icon: CE, label: "Definições", active: !1, isOpen: r }),
      /* @__PURE__ */ l(Dr, { icon: gE, label: "Sair", active: !1, isOpen: r, variant: "danger" })
    ] })
  ] });
}, Jq = ({
  currentView: e,
  setCurrentView: t,
  isOpen: r,
  setIsOpen: n,
  isMobileOpen: o,
  setIsMobileOpen: a
}) => /* @__PURE__ */ S(Me, { children: [
  /* @__PURE__ */ l("aside", { className: T(
    "fixed top-0 left-0 h-full bg-card border-r border-border z-50 transition-all duration-500 ease-in-out flex-col hidden md:flex",
    r ? "w-72" : "w-20"
  ), children: /* @__PURE__ */ l(Om, { currentView: e, setCurrentView: t, isOpen: r, setIsOpen: n }) }),
  o && /* @__PURE__ */ l("div", { className: "fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 md:hidden", onClick: () => a(!1) }),
  /* @__PURE__ */ S("aside", { className: T(
    "fixed top-0 left-0 h-full w-72 bg-card border-r border-border z-[60] transition-transform duration-300 ease-in-out md:hidden",
    o ? "translate-x-0" : "-translate-x-full"
  ), children: [
    /* @__PURE__ */ l("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ l("button", { onClick: () => a(!1), className: "p-2 hover:bg-accent rounded-xl transition-colors text-muted-foreground", children: /* @__PURE__ */ l(to, { size: 20 }) }) }),
    /* @__PURE__ */ l(
      Om,
      {
        currentView: e,
        setCurrentView: t,
        isOpen: !0,
        setIsOpen: n,
        onNavigate: () => a(!1)
      }
    )
  ] })
] });
var VK = (e) => {
  switch (e) {
    case "success":
      return KK;
    case "info":
      return qK;
    case "warning":
      return YK;
    case "error":
      return XK;
    default:
      return null;
  }
}, GK = Array(12).fill(0), UK = ({ visible: e, className: t }) => _.createElement("div", { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e }, _.createElement("div", { className: "sonner-spinner" }, GK.map((r, n) => _.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${n}` })))), KK = _.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, _.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), YK = _.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, _.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), qK = _.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, _.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), XK = _.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, _.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), ZK = _.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, _.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })), QK = () => {
  let [e, t] = _.useState(document.hidden);
  return _.useEffect(() => {
    let r = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", r), () => window.removeEventListener("visibilitychange", r);
  }, []), e;
}, Yc = 1, JK = class {
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
      let { message: r, ...n } = e, o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Yc++, a = this.toasts.find((s) => s.id === o), i = e.dismissible === void 0 ? !0 : e.dismissible;
      return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o), a ? this.toasts = this.toasts.map((s) => s.id === o ? (this.publish({ ...s, ...e, id: o, title: r }), { ...s, ...e, id: o, dismissible: i, title: r }) : s) : this.addToast({ title: r, ...n, dismissible: i, id: o }), o;
    }, this.dismiss = (e) => (this.dismissedToasts.add(e), e || this.toasts.forEach((t) => {
      this.subscribers.forEach((r) => r({ id: t.id, dismiss: !0 }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })), e), this.message = (e, t) => this.create({ ...t, message: e }), this.error = (e, t) => this.create({ ...t, message: e, type: "error" }), this.success = (e, t) => this.create({ ...t, type: "success", message: e }), this.info = (e, t) => this.create({ ...t, type: "info", message: e }), this.warning = (e, t) => this.create({ ...t, type: "warning", message: e }), this.loading = (e, t) => this.create({ ...t, type: "loading", message: e }), this.promise = (e, t) => {
      if (!t) return;
      let r;
      t.loading !== void 0 && (r = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let n = e instanceof Promise ? e : e(), o = r !== void 0, a, i = n.then(async (c) => {
        if (a = ["resolve", c], _.isValidElement(c)) o = !1, this.create({ id: r, type: "default", message: c });
        else if (tY(c) && !c.ok) {
          o = !1;
          let d = typeof t.error == "function" ? await t.error(`HTTP error! status: ${c.status}`) : t.error, f = typeof t.description == "function" ? await t.description(`HTTP error! status: ${c.status}`) : t.description;
          this.create({ id: r, type: "error", message: d, description: f });
        } else if (t.success !== void 0) {
          o = !1;
          let d = typeof t.success == "function" ? await t.success(c) : t.success, f = typeof t.description == "function" ? await t.description(c) : t.description;
          this.create({ id: r, type: "success", message: d, description: f });
        }
      }).catch(async (c) => {
        if (a = ["reject", c], t.error !== void 0) {
          o = !1;
          let d = typeof t.error == "function" ? await t.error(c) : t.error, f = typeof t.description == "function" ? await t.description(c) : t.description;
          this.create({ id: r, type: "error", message: d, description: f });
        }
      }).finally(() => {
        var c;
        o && (this.dismiss(r), r = void 0), (c = t.finally) == null || c.call(t);
      }), s = () => new Promise((c, d) => i.then(() => a[0] === "reject" ? d(a[1]) : c(a[1])).catch(d));
      return typeof r != "string" && typeof r != "number" ? { unwrap: s } : Object.assign(r, { unwrap: s });
    }, this.custom = (e, t) => {
      let r = (t == null ? void 0 : t.id) || Yc++;
      return this.create({ jsx: e(r), id: r, ...t }), r;
    }, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}, mt = new JK(), eY = (e, t) => {
  let r = (t == null ? void 0 : t.id) || Yc++;
  return mt.addToast({ title: e, ...t, id: r }), r;
}, tY = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", rY = eY, nY = () => mt.toasts, oY = () => mt.getActiveToasts(), Xe = Object.assign(rY, { success: mt.success, info: mt.info, warning: mt.warning, error: mt.error, custom: mt.custom, message: mt.message, promise: mt.promise, dismiss: mt.dismiss, loading: mt.loading }, { getHistory: nY, getToasts: oY });
function aY(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t === "top" && r.firstChild ? r.insertBefore(n, r.firstChild) : r.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
aY(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Xa(e) {
  return e.label !== void 0;
}
var iY = 3, sY = "32px", lY = "16px", Im = 4e3, cY = 356, dY = 14, uY = 20, fY = 200;
function Ot(...e) {
  return e.filter(Boolean).join(" ");
}
function pY(e) {
  let [t, r] = e.split("-"), n = [];
  return t && n.push(t), r && n.push(r), n;
}
var mY = (e) => {
  var t, r, n, o, a, i, s, c, d, f, p;
  let { invert: m, toast: h, unstyled: v, interacting: g, setHeights: b, visibleToasts: y, heights: w, index: x, toasts: C, expanded: N, removeToast: P, defaultRichColors: E, closeButton: A, style: R, cancelButtonStyle: B, actionButtonStyle: M, className: $ = "", descriptionClassName: U = "", duration: L, position: K, gap: V, loadingIcon: z, expandByDefault: O, classNames: F, icons: ee, closeButtonAriaLabel: te = "Close toast", pauseWhenPageIsHidden: I } = e, [D, W] = _.useState(null), [G, Z] = _.useState(null), [k, Y] = _.useState(!1), [J, re] = _.useState(!1), [ne, X] = _.useState(!1), [q, j] = _.useState(!1), [oe, ce] = _.useState(!1), [ve, fe] = _.useState(0), [de, _e] = _.useState(0), je = _.useRef(h.duration || L || Im), Ae = _.useRef(null), We = _.useRef(null), at = x === 0, dt = x + 1 <= y, $e = h.type, Ue = h.dismissible !== !1, _r = h.className || "", At = h.descriptionClassName || "", ut = _.useMemo(() => w.findIndex((ie) => ie.toastId === h.id) || 0, [w, h.id]), bt = _.useMemo(() => {
    var ie;
    return (ie = h.closeButton) != null ? ie : A;
  }, [h.closeButton, A]), kt = _.useMemo(() => h.duration || L || Im, [h.duration, L]), ot = _.useRef(0), pt = _.useRef(0), Rr = _.useRef(0), Zt = _.useRef(null), [bo, le] = K.split("-"), ye = _.useMemo(() => w.reduce((ie, pe, we) => we >= ut ? ie : ie + pe.height, 0), [w, ut]), Ne = QK(), Re = h.invert || m, be = $e === "loading";
  pt.current = _.useMemo(() => ut * V + ye, [ut, ye]), _.useEffect(() => {
    je.current = kt;
  }, [kt]), _.useEffect(() => {
    Y(!0);
  }, []), _.useEffect(() => {
    let ie = We.current;
    if (ie) {
      let pe = ie.getBoundingClientRect().height;
      return _e(pe), b((we) => [{ toastId: h.id, height: pe, position: h.position }, ...we]), () => b((we) => we.filter((Ze) => Ze.toastId !== h.id));
    }
  }, [b, h.id]), _.useLayoutEffect(() => {
    if (!k) return;
    let ie = We.current, pe = ie.style.height;
    ie.style.height = "auto";
    let we = ie.getBoundingClientRect().height;
    ie.style.height = pe, _e(we), b((Ze) => Ze.find((Ke) => Ke.toastId === h.id) ? Ze.map((Ke) => Ke.toastId === h.id ? { ...Ke, height: we } : Ke) : [{ toastId: h.id, height: we, position: h.position }, ...Ze]);
  }, [k, h.title, h.description, b, h.id]);
  let He = _.useCallback(() => {
    re(!0), fe(pt.current), b((ie) => ie.filter((pe) => pe.toastId !== h.id)), setTimeout(() => {
      P(h);
    }, fY);
  }, [h, P, b, pt]);
  _.useEffect(() => {
    if (h.promise && $e === "loading" || h.duration === 1 / 0 || h.type === "loading") return;
    let ie;
    return N || g || I && Ne ? (() => {
      if (Rr.current < ot.current) {
        let pe = (/* @__PURE__ */ new Date()).getTime() - ot.current;
        je.current = je.current - pe;
      }
      Rr.current = (/* @__PURE__ */ new Date()).getTime();
    })() : je.current !== 1 / 0 && (ot.current = (/* @__PURE__ */ new Date()).getTime(), ie = setTimeout(() => {
      var pe;
      (pe = h.onAutoClose) == null || pe.call(h, h), He();
    }, je.current)), () => clearTimeout(ie);
  }, [N, g, h, $e, I, Ne, He]), _.useEffect(() => {
    h.delete && He();
  }, [He, h.delete]);
  function Je() {
    var ie, pe, we;
    return ee != null && ee.loading ? _.createElement("div", { className: Ot(F == null ? void 0 : F.loader, (ie = h == null ? void 0 : h.classNames) == null ? void 0 : ie.loader, "sonner-loader"), "data-visible": $e === "loading" }, ee.loading) : z ? _.createElement("div", { className: Ot(F == null ? void 0 : F.loader, (pe = h == null ? void 0 : h.classNames) == null ? void 0 : pe.loader, "sonner-loader"), "data-visible": $e === "loading" }, z) : _.createElement(UK, { className: Ot(F == null ? void 0 : F.loader, (we = h == null ? void 0 : h.classNames) == null ? void 0 : we.loader), visible: $e === "loading" });
  }
  return _.createElement("li", { tabIndex: 0, ref: We, className: Ot($, _r, F == null ? void 0 : F.toast, (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast, F == null ? void 0 : F.default, F == null ? void 0 : F[$e], (r = h == null ? void 0 : h.classNames) == null ? void 0 : r[$e]), "data-sonner-toast": "", "data-rich-colors": (n = h.richColors) != null ? n : E, "data-styled": !(h.jsx || h.unstyled || v), "data-mounted": k, "data-promise": !!h.promise, "data-swiped": oe, "data-removed": J, "data-visible": dt, "data-y-position": bo, "data-x-position": le, "data-index": x, "data-front": at, "data-swiping": ne, "data-dismissible": Ue, "data-type": $e, "data-invert": Re, "data-swipe-out": q, "data-swipe-direction": G, "data-expanded": !!(N || O && k), style: { "--index": x, "--toasts-before": x, "--z-index": C.length - x, "--offset": `${J ? ve : pt.current}px`, "--initial-height": O ? "auto" : `${de}px`, ...R, ...h.style }, onDragEnd: () => {
    X(!1), W(null), Zt.current = null;
  }, onPointerDown: (ie) => {
    be || !Ue || (Ae.current = /* @__PURE__ */ new Date(), fe(pt.current), ie.target.setPointerCapture(ie.pointerId), ie.target.tagName !== "BUTTON" && (X(!0), Zt.current = { x: ie.clientX, y: ie.clientY }));
  }, onPointerUp: () => {
    var ie, pe, we, Ze;
    if (q || !Ue) return;
    Zt.current = null;
    let Ke = Number(((ie = We.current) == null ? void 0 : ie.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), yt = Number(((pe = We.current) == null ? void 0 : pe.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Qt = (/* @__PURE__ */ new Date()).getTime() - ((we = Ae.current) == null ? void 0 : we.getTime()), Dt = D === "x" ? Ke : yt, Tr = Math.abs(Dt) / Qt;
    if (Math.abs(Dt) >= uY || Tr > 0.11) {
      fe(pt.current), (Ze = h.onDismiss) == null || Ze.call(h, h), Z(D === "x" ? Ke > 0 ? "right" : "left" : yt > 0 ? "down" : "up"), He(), j(!0), ce(!1);
      return;
    }
    X(!1), W(null);
  }, onPointerMove: (ie) => {
    var pe, we, Ze, Ke;
    if (!Zt.current || !Ue || ((pe = window.getSelection()) == null ? void 0 : pe.toString().length) > 0) return;
    let yt = ie.clientY - Zt.current.y, Qt = ie.clientX - Zt.current.x, Dt = (we = e.swipeDirections) != null ? we : pY(K);
    !D && (Math.abs(Qt) > 1 || Math.abs(yt) > 1) && W(Math.abs(Qt) > Math.abs(yt) ? "x" : "y");
    let Tr = { x: 0, y: 0 };
    D === "y" ? (Dt.includes("top") || Dt.includes("bottom")) && (Dt.includes("top") && yt < 0 || Dt.includes("bottom") && yt > 0) && (Tr.y = yt) : D === "x" && (Dt.includes("left") || Dt.includes("right")) && (Dt.includes("left") && Qt < 0 || Dt.includes("right") && Qt > 0) && (Tr.x = Qt), (Math.abs(Tr.x) > 0 || Math.abs(Tr.y) > 0) && ce(!0), (Ze = We.current) == null || Ze.style.setProperty("--swipe-amount-x", `${Tr.x}px`), (Ke = We.current) == null || Ke.style.setProperty("--swipe-amount-y", `${Tr.y}px`);
  } }, bt && !h.jsx ? _.createElement("button", { "aria-label": te, "data-disabled": be, "data-close-button": !0, onClick: be || !Ue ? () => {
  } : () => {
    var ie;
    He(), (ie = h.onDismiss) == null || ie.call(h, h);
  }, className: Ot(F == null ? void 0 : F.closeButton, (o = h == null ? void 0 : h.classNames) == null ? void 0 : o.closeButton) }, (a = ee == null ? void 0 : ee.close) != null ? a : ZK) : null, h.jsx || Qa(h.title) ? h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title : _.createElement(_.Fragment, null, $e || h.icon || h.promise ? _.createElement("div", { "data-icon": "", className: Ot(F == null ? void 0 : F.icon, (i = h == null ? void 0 : h.classNames) == null ? void 0 : i.icon) }, h.promise || h.type === "loading" && !h.icon ? h.icon || Je() : null, h.type !== "loading" ? h.icon || (ee == null ? void 0 : ee[$e]) || VK($e) : null) : null, _.createElement("div", { "data-content": "", className: Ot(F == null ? void 0 : F.content, (s = h == null ? void 0 : h.classNames) == null ? void 0 : s.content) }, _.createElement("div", { "data-title": "", className: Ot(F == null ? void 0 : F.title, (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.title) }, typeof h.title == "function" ? h.title() : h.title), h.description ? _.createElement("div", { "data-description": "", className: Ot(U, At, F == null ? void 0 : F.description, (d = h == null ? void 0 : h.classNames) == null ? void 0 : d.description) }, typeof h.description == "function" ? h.description() : h.description) : null), Qa(h.cancel) ? h.cancel : h.cancel && Xa(h.cancel) ? _.createElement("button", { "data-button": !0, "data-cancel": !0, style: h.cancelButtonStyle || B, onClick: (ie) => {
    var pe, we;
    Xa(h.cancel) && Ue && ((we = (pe = h.cancel).onClick) == null || we.call(pe, ie), He());
  }, className: Ot(F == null ? void 0 : F.cancelButton, (f = h == null ? void 0 : h.classNames) == null ? void 0 : f.cancelButton) }, h.cancel.label) : null, Qa(h.action) ? h.action : h.action && Xa(h.action) ? _.createElement("button", { "data-button": !0, "data-action": !0, style: h.actionButtonStyle || M, onClick: (ie) => {
    var pe, we;
    Xa(h.action) && ((we = (pe = h.action).onClick) == null || we.call(pe, ie), !ie.defaultPrevented && He());
  }, className: Ot(F == null ? void 0 : F.actionButton, (p = h == null ? void 0 : h.classNames) == null ? void 0 : p.actionButton) }, h.action.label) : null));
};
function $m() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function hY(e, t) {
  let r = {};
  return [e, t].forEach((n, o) => {
    let a = o === 1, i = a ? "--mobile-offset" : "--offset", s = a ? lY : sY;
    function c(d) {
      ["top", "right", "bottom", "left"].forEach((f) => {
        r[`${i}-${f}`] = typeof d == "number" ? `${d}px` : d;
      });
    }
    typeof n == "number" || typeof n == "string" ? c(n) : typeof n == "object" ? ["top", "right", "bottom", "left"].forEach((d) => {
      n[d] === void 0 ? r[`${i}-${d}`] = s : r[`${i}-${d}`] = typeof n[d] == "number" ? `${n[d]}px` : n[d];
    }) : c(s);
  }), r;
}
mn(function(e, t) {
  let { invert: r, position: n = "bottom-right", hotkey: o = ["altKey", "KeyT"], expand: a, closeButton: i, className: s, offset: c, mobileOffset: d, theme: f = "light", richColors: p, duration: m, style: h, visibleToasts: v = iY, toastOptions: g, dir: b = $m(), gap: y = dY, loadingIcon: w, icons: x, containerAriaLabel: C = "Notifications", pauseWhenPageIsHidden: N } = e, [P, E] = _.useState([]), A = _.useMemo(() => Array.from(new Set([n].concat(P.filter((I) => I.position).map((I) => I.position)))), [P, n]), [R, B] = _.useState([]), [M, $] = _.useState(!1), [U, L] = _.useState(!1), [K, V] = _.useState(f !== "system" ? f : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), z = _.useRef(null), O = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), F = _.useRef(null), ee = _.useRef(!1), te = _.useCallback((I) => {
    E((D) => {
      var W;
      return (W = D.find((G) => G.id === I.id)) != null && W.delete || mt.dismiss(I.id), D.filter(({ id: G }) => G !== I.id);
    });
  }, []);
  return _.useEffect(() => mt.subscribe((I) => {
    if (I.dismiss) {
      E((D) => D.map((W) => W.id === I.id ? { ...W, delete: !0 } : W));
      return;
    }
    setTimeout(() => {
      Zc.flushSync(() => {
        E((D) => {
          let W = D.findIndex((G) => G.id === I.id);
          return W !== -1 ? [...D.slice(0, W), { ...D[W], ...I }, ...D.slice(W + 1)] : [I, ...D];
        });
      });
    });
  }), []), _.useEffect(() => {
    if (f !== "system") {
      V(f);
      return;
    }
    if (f === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? V("dark") : V("light")), typeof window > "u") return;
    let I = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      I.addEventListener("change", ({ matches: D }) => {
        V(D ? "dark" : "light");
      });
    } catch {
      I.addListener(({ matches: W }) => {
        try {
          V(W ? "dark" : "light");
        } catch (G) {
          console.error(G);
        }
      });
    }
  }, [f]), _.useEffect(() => {
    P.length <= 1 && $(!1);
  }, [P]), _.useEffect(() => {
    let I = (D) => {
      var W, G;
      o.every((Z) => D[Z] || D.code === Z) && ($(!0), (W = z.current) == null || W.focus()), D.code === "Escape" && (document.activeElement === z.current || (G = z.current) != null && G.contains(document.activeElement)) && $(!1);
    };
    return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
  }, [o]), _.useEffect(() => {
    if (z.current) return () => {
      F.current && (F.current.focus({ preventScroll: !0 }), F.current = null, ee.current = !1);
    };
  }, [z.current]), _.createElement("section", { ref: t, "aria-label": `${C} ${O}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: !0 }, A.map((I, D) => {
    var W;
    let [G, Z] = I.split("-");
    return P.length ? _.createElement("ol", { key: I, dir: b === "auto" ? $m() : b, tabIndex: -1, ref: z, className: s, "data-sonner-toaster": !0, "data-theme": K, "data-y-position": G, "data-lifted": M && P.length > 1 && !a, "data-x-position": Z, style: { "--front-toast-height": `${((W = R[0]) == null ? void 0 : W.height) || 0}px`, "--width": `${cY}px`, "--gap": `${y}px`, ...h, ...hY(c, d) }, onBlur: (k) => {
      ee.current && !k.currentTarget.contains(k.relatedTarget) && (ee.current = !1, F.current && (F.current.focus({ preventScroll: !0 }), F.current = null));
    }, onFocus: (k) => {
      k.target instanceof HTMLElement && k.target.dataset.dismissible === "false" || ee.current || (ee.current = !0, F.current = k.relatedTarget);
    }, onMouseEnter: () => $(!0), onMouseMove: () => $(!0), onMouseLeave: () => {
      U || $(!1);
    }, onDragEnd: () => $(!1), onPointerDown: (k) => {
      k.target instanceof HTMLElement && k.target.dataset.dismissible === "false" || L(!0);
    }, onPointerUp: () => L(!1) }, P.filter((k) => !k.position && D === 0 || k.position === I).map((k, Y) => {
      var J, re;
      return _.createElement(mY, { key: k.id, icons: x, index: Y, toast: k, defaultRichColors: p, duration: (J = g == null ? void 0 : g.duration) != null ? J : m, className: g == null ? void 0 : g.className, descriptionClassName: g == null ? void 0 : g.descriptionClassName, invert: r, visibleToasts: v, closeButton: (re = g == null ? void 0 : g.closeButton) != null ? re : i, interacting: U, position: I, style: g == null ? void 0 : g.style, unstyled: g == null ? void 0 : g.unstyled, classNames: g == null ? void 0 : g.classNames, cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle, actionButtonStyle: g == null ? void 0 : g.actionButtonStyle, removeToast: te, toasts: P.filter((ne) => ne.position == k.position), heights: R.filter((ne) => ne.position == k.position), setHeights: B, expandByDefault: a, gap: y, loadingIcon: w, expanded: M, pauseWhenPageIsHidden: N, swipeDirections: e.swipeDirections });
    })) : null;
  }));
});
const eX = ({ open: e, onClose: t, profile: r }) => {
  const [n, o] = me(!1);
  return e ? /* @__PURE__ */ l(
    rt.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-foreground/50 backdrop-blur-sm",
      onClick: t,
      children: /* @__PURE__ */ S(
        rt.div,
        {
          initial: { opacity: 0, y: 80, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 60, scale: 0.95 },
          transition: { type: "spring", damping: 25, stiffness: 300 },
          className: "bg-card w-full max-w-lg rounded-t-3xl md:rounded-3xl shadow-elevated border border-border relative max-h-[90vh] overflow-y-auto",
          onClick: (a) => a.stopPropagation(),
          children: [
            /* @__PURE__ */ S("div", { className: "h-28 bg-gradient-to-br from-primary/20 via-info/10 to-primary/5 rounded-t-3xl relative", children: [
              /* @__PURE__ */ l("button", { onClick: t, className: "absolute top-4 right-4 p-2 bg-card/80 backdrop-blur-sm rounded-xl text-muted-foreground hover:text-foreground transition-all", children: /* @__PURE__ */ l(to, { size: 18 }) }),
              /* @__PURE__ */ l(
                "button",
                {
                  onClick: () => {
                    o(!n), Xe(n ? "Removido dos favoritos" : "Adicionado aos favoritos");
                  },
                  className: "absolute top-4 left-4 p-2 bg-card/80 backdrop-blur-sm rounded-xl transition-all",
                  children: /* @__PURE__ */ l(nn, { size: 18, className: n ? "text-destructive fill-destructive" : "text-muted-foreground" })
                }
              )
            ] }),
            /* @__PURE__ */ l("div", { className: "flex justify-center -mt-12 relative z-10", children: /* @__PURE__ */ l("div", { className: "w-24 h-24 rounded-2xl bg-secondary overflow-hidden border-4 border-card shadow-elevated", children: /* @__PURE__ */ l("img", { src: `https://i.pravatar.cc/200?u=care${r.avatarId}`, alt: r.name, className: "w-full h-full object-cover" }) }) }),
            /* @__PURE__ */ S("div", { className: "p-6 pt-4 space-y-6", children: [
              /* @__PURE__ */ S("div", { className: "text-center", children: [
                /* @__PURE__ */ S("div", { className: "flex items-center justify-center gap-2 mb-1", children: [
                  /* @__PURE__ */ l("h2", { className: "text-xl font-display font-black text-foreground uppercase tracking-tight", children: r.name }),
                  /* @__PURE__ */ l(nd, { size: 18, className: "text-success" })
                ] }),
                /* @__PURE__ */ l("p", { className: "text-sm text-muted-foreground font-medium", children: r.role }),
                /* @__PURE__ */ S("div", { className: "flex items-center justify-center gap-4 mt-3", children: [
                  /* @__PURE__ */ S("span", { className: "flex items-center gap-1 text-sm font-bold text-warning", children: [
                    /* @__PURE__ */ l(od, { size: 16, className: "fill-current" }),
                    " ",
                    r.rating
                  ] }),
                  /* @__PURE__ */ S("span", { className: "text-sm text-muted-foreground flex items-center gap-1", children: [
                    /* @__PURE__ */ l(vE, { size: 14 }),
                    " ",
                    r.location || "Porto, PT"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ l("div", { className: "grid grid-cols-3 gap-3", children: [
                { label: "Experiência", value: r.experience || "8 anos", icon: rE },
                { label: "Projetos", value: "24", icon: ci },
                { label: "Tempo Resp.", value: "< 2h", icon: xh }
              ].map((a) => /* @__PURE__ */ S("div", { className: "bg-secondary/50 rounded-xl p-3 text-center", children: [
                /* @__PURE__ */ l(a.icon, { size: 16, className: "mx-auto text-primary mb-1" }),
                /* @__PURE__ */ l("p", { className: "text-sm font-display font-black text-foreground", children: a.value }),
                /* @__PURE__ */ l("p", { className: "text-[9px] font-display font-medium text-muted-foreground uppercase tracking-widest", children: a.label })
              ] }, a.label)) }),
              /* @__PURE__ */ S("div", { children: [
                /* @__PURE__ */ l("p", { className: "text-xs font-display font-bold text-foreground uppercase tracking-widest mb-2", children: "Sobre" }),
                /* @__PURE__ */ l("p", { className: "text-sm text-muted-foreground leading-relaxed", children: r.bio || "Especialista com mais de 8 anos de experiência em contexto hospitalar e domiciliário. Certificada em cuidados intensivos, apoio pós-operatório e gestão de medicação." })
              ] }),
              /* @__PURE__ */ S("div", { children: [
                /* @__PURE__ */ l("p", { className: "text-xs font-display font-bold text-foreground uppercase tracking-widest mb-2", children: "Competências" }),
                /* @__PURE__ */ l("div", { className: "flex flex-wrap gap-2", children: (r.skills || ["Drenagem", "Curativos", "Diabetes", "Pós-Operatório", "Geriatria"]).map((a) => /* @__PURE__ */ l("span", { className: "text-[10px] font-display font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg uppercase tracking-widest", children: a }, a)) })
              ] }),
              /* @__PURE__ */ S("div", { className: "bg-secondary/50 rounded-2xl p-4 flex items-center justify-between", children: [
                /* @__PURE__ */ S("div", { children: [
                  /* @__PURE__ */ l("p", { className: "text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest", children: "Preço Base" }),
                  /* @__PURE__ */ S("p", { className: "text-2xl font-display font-black text-foreground tracking-tighter", children: [
                    r.price,
                    "€",
                    /* @__PURE__ */ l("span", { className: "text-sm text-muted-foreground font-medium ml-1", children: "/h" })
                  ] })
                ] }),
                /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ l("span", { className: "px-3 py-1 text-[9px] font-display font-bold rounded-lg uppercase tracking-widest bg-success/10 text-success", children: "Disponível" }) })
              ] }),
              /* @__PURE__ */ S("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ S(Ce, { variant: "default", size: "lg", className: "flex-1", onClick: () => {
                  Xe.success("Proposta de recrutamento enviada!"), t();
                }, children: [
                  /* @__PURE__ */ l(ci, { size: 16 }),
                  " Propor Recrutamento"
                ] }),
                /* @__PURE__ */ l(Ce, { variant: "outline", size: "lg", onClick: () => {
                  Xe.info("Chat aberto com " + r.name), t();
                }, children: /* @__PURE__ */ l(sa, { size: 16 }) }),
                /* @__PURE__ */ l(Ce, { variant: "outline", size: "lg", onClick: () => Xe.info("A ligar..."), children: /* @__PURE__ */ l(xE, { size: 16 }) })
              ] }),
              /* @__PURE__ */ S("div", { children: [
                /* @__PURE__ */ l("p", { className: "text-xs font-display font-bold text-foreground uppercase tracking-widest mb-3", children: "Disponibilidade" }),
                /* @__PURE__ */ l("div", { className: "grid grid-cols-7 gap-1.5", children: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((a, i) => /* @__PURE__ */ l("div", { className: `text-center p-2 rounded-xl text-[10px] font-display font-bold uppercase ${i < 5 ? "bg-success/10 text-success" : "bg-secondary text-muted-foreground"}`, children: a }, a)) })
              ] })
            ] })
          ]
        }
      )
    }
  ) : null;
}, En = ({ title: e, desc: t }) => /* @__PURE__ */ S("div", { className: "space-y-1 sm:space-y-2", children: [
  /* @__PURE__ */ l("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-display font-black text-foreground tracking-tighter leading-none uppercase", children: e }),
  /* @__PURE__ */ l("p", { className: "text-sm sm:text-base text-muted-foreground font-medium", children: t })
] }), tX = ({ title: e, children: t }) => /* @__PURE__ */ S("section", { className: "space-y-4", children: [
  /* @__PURE__ */ l("h4", { className: "text-[10px] font-display font-black text-muted-foreground uppercase tracking-[0.4em] border-l-4 border-primary pl-4", children: e }),
  /* @__PURE__ */ l("div", { className: "bg-card p-5 sm:p-8 rounded-3xl border border-border shadow-card relative overflow-hidden", children: t })
] }), rX = ({ label: e, value: t, icon: r, colorClass: n }) => /* @__PURE__ */ S("div", { className: "bg-card p-5 sm:p-7 rounded-3xl border border-border shadow-card space-y-3 sm:space-y-4 hover:shadow-elevated transition-all group", children: [
  /* @__PURE__ */ l("div", { className: T("w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform", n || "text-primary"), children: /* @__PURE__ */ l(r, { size: 22 }) }),
  /* @__PURE__ */ S("div", { children: [
    /* @__PURE__ */ l("div", { className: "text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest", children: e }),
    /* @__PURE__ */ l("div", { className: "text-2xl sm:text-3xl font-display font-black text-foreground tracking-tighter leading-none mt-1", children: t })
  ] })
] }), dS = () => /* @__PURE__ */ l("div", { className: "w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-glow", children: /* @__PURE__ */ l(nn, { size: 26, className: "text-primary-foreground", fill: "currentColor" }) }), nX = ({
  onNavigate: e,
  onSubmit: t
}) => {
  const [r, n] = me(""), [o, a] = me(""), [i, s] = me(!1), [c, d] = me(!1);
  return /* @__PURE__ */ l("div", { className: "min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center px-4 py-12", children: /* @__PURE__ */ S("div", { className: "w-full max-w-md space-y-8", children: [
    /* @__PURE__ */ S("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ l(dS, {}),
      /* @__PURE__ */ S("div", { children: [
        /* @__PURE__ */ l("h1", { className: "text-3xl font-display font-black uppercase tracking-tighter text-foreground", children: "EVYRA" }),
        /* @__PURE__ */ l("p", { className: "text-sm text-muted-foreground font-medium mt-1", children: "Plataforma de cuidados sénior" })
      ] })
    ] }),
    /* @__PURE__ */ S("div", { className: "bg-card rounded-3xl border border-border shadow-elevated p-8 space-y-6", children: [
      /* @__PURE__ */ S("div", { children: [
        /* @__PURE__ */ l("h2", { className: "text-xl font-display font-black uppercase tracking-tighter text-foreground", children: "Entrar na Conta" }),
        /* @__PURE__ */ l("p", { className: "text-sm text-muted-foreground mt-1", children: "Bem-vindo de volta" })
      ] }),
      /* @__PURE__ */ S(Ce, { variant: "outline", className: "w-full rounded-2xl", onClick: () => Xe.info("Google login..."), children: [
        /* @__PURE__ */ S("svg", { className: "mr-2 h-4 w-4", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ l("path", { fill: "#4285F4", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }),
          /* @__PURE__ */ l("path", { fill: "#34A853", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }),
          /* @__PURE__ */ l("path", { fill: "#FBBC05", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" }),
          /* @__PURE__ */ l("path", { fill: "#EA4335", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" })
        ] }),
        "Continuar com Google"
      ] }),
      /* @__PURE__ */ S("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ l("div", { className: "flex-1 h-px bg-border" }),
        /* @__PURE__ */ l("span", { className: "text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest", children: "ou" }),
        /* @__PURE__ */ l("div", { className: "flex-1 h-px bg-border" })
      ] }),
      /* @__PURE__ */ S("form", { onSubmit: async (p) => {
        p.preventDefault(), d(!0);
        try {
          t ? await t(r, o) : (await new Promise((m) => setTimeout(m, 1200)), Xe.success("Login efetuado!"), e == null || e("dashboard"));
        } catch (m) {
          console.error("Login error:", m);
        } finally {
          d(!1);
        }
      }, className: "space-y-4", children: [
        /* @__PURE__ */ S("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ l("label", { className: "text-[10px] font-display font-black uppercase tracking-widest text-foreground", children: "Email" }),
          /* @__PURE__ */ S("div", { className: "relative", children: [
            /* @__PURE__ */ l(Sh, { size: 15, className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ l(
              "input",
              {
                type: "email",
                value: r,
                onChange: (p) => n(p.target.value),
                placeholder: "email@exemplo.com",
                required: !0,
                className: "w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-2xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ S("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ l("label", { className: "text-[10px] font-display font-black uppercase tracking-widest text-foreground", children: "Palavra-passe" }),
          /* @__PURE__ */ S("div", { className: "relative", children: [
            /* @__PURE__ */ l(hE, { size: 15, className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ l(
              "input",
              {
                type: i ? "text" : "password",
                value: o,
                onChange: (p) => a(p.target.value),
                placeholder: "••••••••",
                required: !0,
                className: "w-full pl-10 pr-12 py-3 bg-secondary border border-border rounded-2xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              }
            ),
            /* @__PURE__ */ l("button", { type: "button", onClick: () => s(!i), className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors", children: i ? /* @__PURE__ */ l(cE, { size: 15 }) : /* @__PURE__ */ l(dE, { size: 15 }) })
          ] })
        ] }),
        /* @__PURE__ */ l("div", { className: "flex justify-end", children: /* @__PURE__ */ l("button", { type: "button", className: "text-xs text-primary font-display font-bold hover:underline", children: "Esqueci a palavra-passe" }) }),
        /* @__PURE__ */ l(Ce, { type: "submit", size: "lg", className: "w-full rounded-2xl", disabled: c, children: c ? /* @__PURE__ */ S(Me, { children: [
          /* @__PURE__ */ l(rd, { size: 16, className: "animate-spin mr-2" }),
          "A entrar..."
        ] }) : "Entrar" })
      ] }),
      /* @__PURE__ */ S("p", { className: "text-center text-sm text-muted-foreground", children: [
        "Sem conta?",
        " ",
        /* @__PURE__ */ l("button", { onClick: () => e == null ? void 0 : e("register"), className: "text-primary font-display font-bold hover:underline", children: "Registar" })
      ] })
    ] })
  ] }) });
}, oX = ({
  onNavigate: e,
  onSubmitRegister: t
}) => {
  const [r, n] = me(1), [o, a] = me("FAMILY"), [i, s] = me(!1), [c, d] = me(!1), [f, p] = me(!1), [m, h] = me({ name: "", email: "", phone: "", password: "", confirm: "" }), v = (y) => (w) => h((x) => ({ ...x, [y]: w.target.value })), g = async (y) => {
    if (y.preventDefault(), !f) {
      Xe.error("Aceite os termos para continuar");
      return;
    }
    if (m.password !== m.confirm) {
      Xe.error("As palavras-passe não coincidem");
      return;
    }
    d(!0);
    try {
      t ? await t({ name: m.name, email: m.email, phone: m.phone, password: m.password, role: o }) : (await new Promise((w) => setTimeout(w, 1200)), Xe.success("Conta criada!"), e == null || e(o === "FAMILY" ? "family-setup" : "profile-setup"));
    } catch (w) {
      console.error("Register error:", w);
    } finally {
      d(!1);
    }
  }, b = [
    { id: "FAMILY", icon: Ir, title: "Família", desc: "Procuro um cuidador para o meu familiar", tag: "€29 ativação", tagClass: "bg-warning/10 text-warning border border-warning/30" },
    { id: "CAREGIVER", icon: nn, title: "Cuidador(a)", desc: "Sou profissional de saúde ou cuidador", tag: "Gratuito", tagClass: "bg-success/10 text-success border border-success/30" }
  ];
  return /* @__PURE__ */ l("div", { className: "min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center px-4 py-12", children: /* @__PURE__ */ S("div", { className: "w-full max-w-lg space-y-6", children: [
    /* @__PURE__ */ S("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ l(dS, {}),
      /* @__PURE__ */ l("h1", { className: "text-3xl font-display font-black uppercase tracking-tighter text-foreground", children: "Criar Conta" })
    ] }),
    /* @__PURE__ */ l("div", { className: "flex items-center justify-center gap-3", children: [1, 2].map((y) => /* @__PURE__ */ S(_.Fragment, { children: [
      /* @__PURE__ */ l("div", { className: `w-8 h-8 rounded-xl flex items-center justify-center text-xs font-display font-black transition-all ${y <= r ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-muted-foreground border border-border"}`, children: y < r ? /* @__PURE__ */ l(Qe, { size: 14 }) : y }),
      y < 2 && /* @__PURE__ */ l("div", { className: `w-16 h-0.5 rounded-full transition-all ${y < r ? "bg-primary" : "bg-border"}` })
    ] }, y)) }),
    /* @__PURE__ */ S("div", { className: "bg-card rounded-3xl border border-border shadow-elevated p-8 space-y-6", children: [
      r === 1 && /* @__PURE__ */ S("div", { className: "space-y-5", children: [
        /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("h2", { className: "text-lg font-display font-black uppercase tracking-tighter", children: "Qual é o seu papel?" }),
          /* @__PURE__ */ l("p", { className: "text-sm text-muted-foreground mt-1", children: "Escolha o tipo de conta a criar" })
        ] }),
        /* @__PURE__ */ l("div", { className: "space-y-3", children: b.map((y) => /* @__PURE__ */ S(
          "label",
          {
            onClick: () => a(y.id),
            className: `flex items-center gap-4 p-5 border-2 rounded-2xl cursor-pointer transition-all ${o === y.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"}`,
            children: [
              /* @__PURE__ */ l("div", { className: `w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${o === y.id ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`, children: /* @__PURE__ */ l(y.icon, { size: 22 }) }),
              /* @__PURE__ */ S("div", { className: "flex-1", children: [
                /* @__PURE__ */ S("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ l("span", { className: "font-display font-black text-foreground text-sm uppercase", children: y.title }),
                  /* @__PURE__ */ l("span", { className: `text-[9px] font-display font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${y.tagClass}`, children: y.tag })
                ] }),
                /* @__PURE__ */ l("p", { className: "text-xs text-muted-foreground mt-0.5", children: y.desc })
              ] }),
              /* @__PURE__ */ l("div", { className: `w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${o === y.id ? "border-primary bg-primary" : "border-border"}`, children: o === y.id && /* @__PURE__ */ l("div", { className: "w-2 h-2 rounded-full bg-primary-foreground" }) })
            ]
          },
          y.id
        )) }),
        /* @__PURE__ */ l(Ce, { size: "lg", className: "w-full rounded-2xl", onClick: () => n(2), children: "Continuar" })
      ] }),
      r === 2 && /* @__PURE__ */ S("form", { onSubmit: g, className: "space-y-5", children: [
        /* @__PURE__ */ S("div", { className: "flex items-center gap-3 p-4 bg-secondary rounded-2xl", children: [
          o === "FAMILY" ? /* @__PURE__ */ l(Ir, { size: 18, className: "text-muted-foreground" }) : /* @__PURE__ */ l(nn, { size: 18, className: "text-muted-foreground" }),
          /* @__PURE__ */ l("span", { className: "font-display font-bold text-sm text-foreground", children: o === "FAMILY" ? "Família" : "Cuidador(a)" }),
          /* @__PURE__ */ l("button", { type: "button", onClick: () => n(1), className: "ml-auto text-[10px] font-display font-black text-primary uppercase tracking-widest hover:underline", children: "Alterar" })
        ] }),
        [
          { label: "Nome Completo", key: "name", type: "text", placeholder: "Nome completo" },
          { label: "Email", key: "email", type: "email", placeholder: "email@exemplo.com" },
          { label: "Telemóvel", key: "phone", type: "tel", placeholder: "+351 912 345 678" },
          { label: "Palavra-passe", key: "password", type: i ? "text" : "password", placeholder: "••••••••" },
          { label: "Confirmar Palavra-passe", key: "confirm", type: "password", placeholder: "••••••••" }
        ].map((y) => /* @__PURE__ */ S("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ l("label", { className: "text-[10px] font-display font-black uppercase tracking-widest text-foreground", children: y.label }),
          /* @__PURE__ */ l(
            "input",
            {
              type: y.type,
              value: m[y.key],
              onChange: v(y.key),
              placeholder: y.placeholder,
              className: "w-full px-4 py-3 bg-secondary border border-border rounded-2xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            }
          )
        ] }, y.key)),
        o === "FAMILY" && /* @__PURE__ */ S("div", { className: "p-4 bg-warning/5 border border-warning/20 rounded-2xl", children: [
          /* @__PURE__ */ l("p", { className: "text-xs font-display font-black text-foreground uppercase", children: "Taxa de Ativação — €29" }),
          /* @__PURE__ */ l("p", { className: "text-xs text-muted-foreground mt-1", children: "Taxa única para acesso completo, verificação KYC e suporte dedicado." })
        ] }),
        o === "CAREGIVER" && /* @__PURE__ */ S("div", { className: "p-4 bg-success/5 border border-success/20 rounded-2xl flex items-start gap-3", children: [
          /* @__PURE__ */ l(Qe, { size: 14, className: "text-success mt-0.5 shrink-0" }),
          /* @__PURE__ */ S("div", { children: [
            /* @__PURE__ */ l("p", { className: "text-xs font-display font-black text-success uppercase", children: "Registo Gratuito" }),
            /* @__PURE__ */ l("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Sem taxa de ativação. Crie o perfil e comece a receber propostas." })
          ] })
        ] }),
        /* @__PURE__ */ S("label", { className: "flex items-start gap-3 cursor-pointer", children: [
          /* @__PURE__ */ l("div", { onClick: () => p(!f), className: `w-5 h-5 rounded-md border-2 flex items-center justify-center mt-0.5 transition-all shrink-0 ${f ? "bg-primary border-primary" : "border-border"}`, children: f && /* @__PURE__ */ l(Qe, { size: 11, className: "text-primary-foreground" }) }),
          /* @__PURE__ */ S("span", { className: "text-xs text-muted-foreground leading-relaxed", children: [
            "Aceito os ",
            /* @__PURE__ */ l("button", { type: "button", className: "text-primary font-medium hover:underline", children: "Termos" }),
            " e a ",
            /* @__PURE__ */ l("button", { type: "button", className: "text-primary font-medium hover:underline", children: "Política de Privacidade" })
          ] })
        ] }),
        /* @__PURE__ */ S("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ l(Ce, { type: "button", variant: "outline", className: "rounded-2xl px-5", onClick: () => n(1), children: "←" }),
          /* @__PURE__ */ l(Ce, { type: "submit", size: "lg", className: "flex-1 rounded-2xl", disabled: c || !f, children: c ? /* @__PURE__ */ S(Me, { children: [
            /* @__PURE__ */ l(rd, { size: 15, className: "animate-spin mr-2" }),
            "A criar..."
          ] }) : "Criar Conta" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S("p", { className: "text-center text-sm text-muted-foreground", children: [
      "Já tem conta?",
      " ",
      /* @__PURE__ */ l("button", { onClick: () => e == null ? void 0 : e("login"), className: "text-primary font-display font-bold hover:underline", children: "Entrar" })
    ] })
  ] }) });
}, uS = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } }, fS = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } } }, gY = [
  { id: 1, type: "credit", desc: "Pagamento recebido — Contrato #1042", amount: 320, date: "2026-04-14", status: "COMPLETED" },
  { id: 2, type: "debit", desc: "Comissão plataforma (10%)", amount: 32, date: "2026-04-14", status: "COMPLETED" },
  { id: 3, type: "credit", desc: "Pagamento recebido — Contrato #1038", amount: 180, date: "2026-04-12", status: "COMPLETED" },
  { id: 4, type: "credit", desc: "Bónus avaliação 5 estrelas", amount: 10, date: "2026-04-11", status: "COMPLETED" },
  { id: 5, type: "credit", desc: "Pagamento em Escrow — Contrato #1051", amount: 240, date: "2026-04-10", status: "PENDING" },
  { id: 6, type: "debit", desc: "Comissão plataforma (10%)", amount: 18, date: "2026-04-10", status: "COMPLETED" },
  { id: 7, type: "credit", desc: "Pagamento recebido — Contrato #1035", amount: 400, date: "2026-04-08", status: "COMPLETED" }
], aX = ({
  transactions: e
} = {}) => {
  const [t, r] = me("all"), n = e || gY, o = t === "all" ? n : n.filter((c) => c.type === t), a = n.filter((c) => c.status === "COMPLETED" && c.type === "credit").reduce((c, d) => c + d.amount, 0) - n.filter((c) => c.status === "COMPLETED" && c.type === "debit").reduce((c, d) => c + d.amount, 0), i = n.filter((c) => c.status === "PENDING").reduce((c, d) => c + d.amount, 0), s = n.filter((c) => c.type === "credit").reduce((c, d) => c + d.amount, 0);
  return /* @__PURE__ */ S("div", { className: "space-y-6 sm:space-y-8 animate-fade-in", children: [
    /* @__PURE__ */ l(En, { title: "Minha Carteira", desc: "Saldo de conta e histórico de transações" }),
    /* @__PURE__ */ S("div", { className: "bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-6 sm:p-10 text-primary-foreground shadow-elevated relative overflow-hidden", children: [
      /* @__PURE__ */ l("div", { className: "absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" }),
      /* @__PURE__ */ S("div", { className: "relative space-y-6", children: [
        /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("p", { className: "text-[10px] font-display font-black uppercase tracking-widest opacity-70 mb-1", children: "Saldo Disponível" }),
          /* @__PURE__ */ S("p", { className: "text-4xl sm:text-5xl font-display font-black tracking-tighter", children: [
            "€",
            a.toFixed(2)
          ] })
        ] }),
        /* @__PURE__ */ l("div", { className: "grid grid-cols-2 gap-3", children: [["Total Ganhos", `€${s}`], ["Em Escrow", `€${i}`]].map(([c, d]) => /* @__PURE__ */ S("div", { className: "bg-white/10 rounded-2xl p-4", children: [
          /* @__PURE__ */ l("p", { className: "text-[9px] font-display font-black uppercase tracking-widest opacity-70 mb-1", children: c }),
          /* @__PURE__ */ l("p", { className: "text-lg font-display font-black tracking-tighter", children: d })
        ] }, c)) }),
        /* @__PURE__ */ S("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ l(Ce, { variant: "secondary", size: "sm", className: "flex-1 rounded-2xl bg-white/20 hover:bg-white/30 text-white border-0", onClick: () => Xe.info("Levantar fundos..."), children: "Levantar" }),
          /* @__PURE__ */ l(Ce, { variant: "secondary", size: "sm", className: "flex-1 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20", onClick: () => Xe.info("Gerar extrato..."), children: "Extrato PDF" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l("div", { className: "grid grid-cols-3 gap-4", children: [{ label: "Este Mês", value: "€510", sub: "+12%", color: "text-success" }, { label: "Contratos Ativos", value: "3", sub: "1 escrow", color: "text-primary" }, { label: "Taxa Plataforma", value: "10%", sub: "por pagamento", color: "text-warning" }].map((c) => /* @__PURE__ */ S("div", { className: "bg-card rounded-2xl border border-border shadow-card p-4 text-center", children: [
      /* @__PURE__ */ l("p", { className: "text-[9px] font-display font-black uppercase tracking-widest text-muted-foreground", children: c.label }),
      /* @__PURE__ */ l("p", { className: `text-xl font-display font-black tracking-tighter mt-1 ${c.color}`, children: c.value }),
      /* @__PURE__ */ l("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: c.sub })
    ] }, c.label)) }),
    /* @__PURE__ */ S("div", { className: "space-y-4", children: [
      /* @__PURE__ */ S("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ l("h3", { className: "text-[10px] font-display font-black uppercase tracking-widest text-foreground border-l-4 border-primary pl-3", children: "Histórico" }),
        /* @__PURE__ */ l("div", { className: "flex gap-1", children: [["all", "Todos"], ["credit", "Entradas"], ["debit", "Saídas"]].map(([c, d]) => /* @__PURE__ */ l("button", { onClick: () => r(c), className: `px-3 py-1.5 rounded-xl text-[10px] font-display font-bold uppercase tracking-widest transition-all ${t === c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent"}`, children: d }, c)) })
      ] }),
      /* @__PURE__ */ l(rt.div, { variants: uS, initial: "hidden", animate: "show", className: "bg-card rounded-3xl border border-border shadow-card overflow-hidden", children: o.map((c, d) => /* @__PURE__ */ S(rt.div, { variants: fS, className: `flex items-center gap-4 px-5 py-4 hover:bg-secondary/50 transition-all ${d > 0 ? "border-t border-border/50" : ""}`, children: [
        /* @__PURE__ */ l("div", { className: `w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${c.type === "credit" ? c.status === "PENDING" ? "bg-warning/10 text-warning" : "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`, children: c.type === "credit" ? /* @__PURE__ */ l(tE, { size: 18 }) : /* @__PURE__ */ l(eE, { size: 18 }) }),
        /* @__PURE__ */ S("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ l("p", { className: "text-sm font-display font-black text-foreground truncate", children: c.desc }),
          /* @__PURE__ */ S("p", { className: "text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest mt-0.5", children: [
            new Date(c.date).toLocaleDateString("pt-PT", { day: "2-digit", month: "short" }),
            c.status === "PENDING" && /* @__PURE__ */ l("span", { className: "ml-2 text-warning", children: "• Pendente" })
          ] })
        ] }),
        /* @__PURE__ */ S("p", { className: `font-display font-black text-base tracking-tighter shrink-0 ${c.type === "credit" ? c.status === "PENDING" ? "text-warning" : "text-success" : "text-destructive"}`, children: [
          c.type === "credit" ? "+" : "-",
          "€",
          c.amount
        ] })
      ] }, c.id)) })
    ] }),
    /* @__PURE__ */ S("div", { className: "bg-info/5 border border-info/20 rounded-3xl p-5 flex items-start gap-4", children: [
      /* @__PURE__ */ l("div", { className: "w-10 h-10 bg-info/10 rounded-xl flex items-center justify-center shrink-0 text-info", children: /* @__PURE__ */ l(Ch, { size: 18 }) }),
      /* @__PURE__ */ S("div", { children: [
        /* @__PURE__ */ l("p", { className: "text-sm font-display font-black text-foreground uppercase", children: "Levantamentos IBAN" }),
        /* @__PURE__ */ l("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed", children: "Processados toda sexta-feira. Mínimo €50. Configure o seu IBAN nas definições." })
      ] })
    ] })
  ] });
}, vY = {
  contract_accepted: Qe,
  payment_received: Ch,
  kyc_approved: on,
  review_received: od,
  chat_message: sa,
  contract_created: Lr,
  contract_payment: oE
}, bY = {
  contract_accepted: "bg-success/10 text-success",
  payment_received: "bg-primary/10 text-primary",
  kyc_approved: "bg-success/10 text-success",
  review_received: "bg-warning/10 text-warning",
  chat_message: "bg-info/10 text-info",
  contract_created: "bg-primary/10 text-primary",
  contract_payment: "bg-warning/10 text-warning"
}, yY = [
  { id: 1, type: "contract_accepted", title: "Contrato Aceite", msg: "Maria Silva aceitou o contrato #1042. Fundos em Escrow.", read: !1, date: "2026-04-14T10:23:00" },
  { id: 2, type: "payment_received", title: "Pagamento Recebido", msg: "Recebeu €320 referente ao Contrato #1038.", read: !1, date: "2026-04-14T08:10:00" },
  { id: 3, type: "kyc_approved", title: "Identidade Verificada", msg: "A sua verificação KYC foi aprovada. Conta totalmente ativa.", read: !1, date: "2026-04-13T16:45:00" },
  { id: 4, type: "review_received", title: "Nova Avaliação", msg: 'Família Costa deixou 5 estrelas: "Excelente profissional!"', read: !0, date: "2026-04-12T14:30:00" },
  { id: 5, type: "chat_message", title: "Nova Mensagem", msg: "João Ferreira enviou uma mensagem sobre o contrato.", read: !0, date: "2026-04-12T11:00:00" },
  { id: 6, type: "contract_created", title: "Nova Proposta", msg: "Família Moreira propôs um contrato. Clique para ver.", read: !0, date: "2026-04-11T09:15:00" }
], iX = ({
  notifications: e,
  onMarkAsRead: t
} = {}) => {
  const [r, n] = me(e || yY), o = r.filter((s) => !s.read).length, a = () => {
    n((s) => s.map((c) => ({ ...c, read: !0 }))), t == null || t();
  }, i = (s) => {
    n((c) => c.map((d) => d.id === s ? { ...d, read: !0 } : d)), t == null || t(s);
  };
  return /* @__PURE__ */ S("div", { className: "space-y-6 sm:space-y-8 animate-fade-in", children: [
    /* @__PURE__ */ S("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ l(En, { title: "Notificações", desc: o > 0 ? `${o} nova${o !== 1 ? "s" : ""}` : "Todas lidas" }),
      o > 0 && /* @__PURE__ */ S(Ce, { variant: "outline", size: "sm", className: "rounded-2xl gap-2", onClick: a, children: [
        /* @__PURE__ */ l(Qe, { size: 14 }),
        " Marcar todas"
      ] })
    ] }),
    /* @__PURE__ */ S(rt.div, { variants: uS, initial: "hidden", animate: "show", className: "space-y-3", children: [
      r.map((s) => {
        const c = vY[s.type] || Hn, d = bY[s.type] || "bg-primary/10 text-primary";
        return /* @__PURE__ */ S(
          rt.div,
          {
            variants: fS,
            onClick: () => i(s.id),
            className: `bg-card rounded-3xl border shadow-card cursor-pointer group transition-all hover:shadow-elevated flex items-start gap-4 p-5 sm:p-6 ${s.read ? "border-border" : "border-primary/30 bg-primary/[0.02]"}`,
            children: [
              /* @__PURE__ */ l("div", { className: `w-12 h-12 rounded-2xl ${d} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`, children: /* @__PURE__ */ l(c, { size: 20 }) }),
              /* @__PURE__ */ S("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ l("p", { className: `font-display font-black text-sm uppercase tracking-tight ${s.read ? "text-foreground/75" : "text-foreground"}`, children: s.title }),
                /* @__PURE__ */ l("p", { className: "text-sm text-muted-foreground mt-0.5 leading-relaxed line-clamp-2", children: s.msg }),
                /* @__PURE__ */ l("span", { className: "text-[10px] font-display font-bold text-muted-foreground/50 uppercase tracking-widest mt-1 block", children: new Date(s.date).toLocaleDateString("pt-PT", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }) })
              ] }),
              !s.read && /* @__PURE__ */ l("div", { className: "w-2.5 h-2.5 bg-primary rounded-full shrink-0 mt-1 animate-pulse" })
            ]
          },
          s.id
        );
      }),
      r.every((s) => s.read) && /* @__PURE__ */ S("div", { className: "text-center py-16 space-y-3", children: [
        /* @__PURE__ */ l("div", { className: "w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto", children: /* @__PURE__ */ l(Hn, { size: 28, className: "text-muted-foreground" }) }),
        /* @__PURE__ */ l("p", { className: "font-display font-black text-foreground uppercase", children: "Nenhuma notificação" }),
        /* @__PURE__ */ l("p", { className: "text-sm text-muted-foreground", children: "Receberá notificações sobre contratos e propostas aqui" })
      ] })
    ] })
  ] });
}, sX = ({ onNavigate: e }) => {
  const [t, r] = me("sobre"), n = {
    name: "Helena Costa Ferreira",
    title: "Enfermeira Especializada",
    city: "Lisboa",
    rating: 4.9,
    reviews: 27,
    rate: 18,
    experience: "8 anos",
    verified: !0,
    available: !0,
    specialties: ["Cuidados Paliativos", "Alzheimer/Demência", "Fisioterapia", "Administração de Medicação", "Higiene Pessoal"],
    languages: ["Português", "Inglês", "Espanhol"],
    schedule: ["Segunda a Sexta", "Manhã e Tarde", "Full-time disponível"],
    bio: "Enfermeira com 8 anos de experiência em cuidados domiciliários sénior. Especializada em cuidados paliativos e acompanhamento de pacientes com Alzheimer. Abordagem humanista, com foco no bem-estar físico e emocional.",
    ratingsList: [
      { author: "Família Moreira", rating: 5, date: "2026-04-10", text: "Profissional excecional. Extremamente cuidadosa e empática." },
      { author: "Família Santos", rating: 5, date: "2026-04-02", text: "Recomendo sem hesitar. Pontual e muito carinhosa." },
      { author: "Família Pereira", rating: 4, date: "2026-03-28", text: "Excelentes conhecimentos técnicos e boa comunicação." }
    ]
  }, o = ({ rating: a }) => /* @__PURE__ */ l("div", { className: "flex gap-0.5", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ l(od, { size: 13, className: i <= a ? "text-warning fill-warning" : "text-muted-foreground" }, i)) });
  return /* @__PURE__ */ S("div", { className: "space-y-6 sm:space-y-8 animate-fade-in max-w-3xl", children: [
    /* @__PURE__ */ l("button", { onClick: () => e == null ? void 0 : e("search-cuidadores"), className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-display font-bold uppercase tracking-widest transition-colors", children: "← Voltar" }),
    /* @__PURE__ */ S("div", { className: "bg-card rounded-3xl border border-border shadow-card p-6 sm:p-8", children: [
      /* @__PURE__ */ S("div", { className: "flex flex-col sm:flex-row items-start gap-6", children: [
        /* @__PURE__ */ S("div", { className: "relative shrink-0", children: [
          /* @__PURE__ */ l("div", { className: "w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl font-display font-black text-primary", children: "HCF" }),
          /* @__PURE__ */ l("div", { className: "absolute -bottom-1.5 -right-1.5 w-7 h-7 bg-success rounded-full flex items-center justify-center border-2 border-card", children: /* @__PURE__ */ l(Qe, { size: 12, className: "text-success-foreground" }) })
        ] }),
        /* @__PURE__ */ S("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ S("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
            /* @__PURE__ */ S("div", { children: [
              /* @__PURE__ */ l("h2", { className: "text-xl font-display font-black uppercase tracking-tighter text-foreground", children: n.name }),
              /* @__PURE__ */ S("p", { className: "text-sm text-muted-foreground", children: [
                n.title,
                " · ",
                n.city
              ] })
            ] }),
            /* @__PURE__ */ S("div", { className: "flex flex-col items-end gap-1", children: [
              /* @__PURE__ */ l("span", { className: "text-[9px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-success/10 text-success border border-success/30", children: "Disponível" }),
              /* @__PURE__ */ l("span", { className: "text-[9px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/30", children: "Verificado" })
            ] })
          ] }),
          /* @__PURE__ */ S("div", { className: "flex flex-wrap items-center gap-4", children: [
            /* @__PURE__ */ S("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ l(o, { rating: Math.round(n.rating) }),
              /* @__PURE__ */ l("span", { className: "text-sm font-display font-black text-foreground", children: n.rating }),
              /* @__PURE__ */ S("span", { className: "text-xs text-muted-foreground", children: [
                "(",
                n.reviews,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ S("span", { className: "text-xl font-display font-black text-primary", children: [
              "€",
              n.rate,
              /* @__PURE__ */ l("span", { className: "text-sm text-muted-foreground font-normal", children: "/h" })
            ] }),
            /* @__PURE__ */ S("span", { className: "text-xs text-muted-foreground", children: [
              n.experience,
              " exp."
            ] })
          ] }),
          /* @__PURE__ */ l("div", { className: "flex flex-wrap gap-1.5 pt-1", children: n.languages.map((a) => /* @__PURE__ */ l("span", { className: "text-[9px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-secondary border border-border text-muted-foreground", children: a }, a)) })
        ] })
      ] }),
      /* @__PURE__ */ S("div", { className: "flex gap-3 mt-6 pt-6 border-t border-border", children: [
        /* @__PURE__ */ S(Ce, { variant: "outline", className: "flex-1 rounded-2xl gap-2", onClick: () => e == null ? void 0 : e("chat"), children: [
          /* @__PURE__ */ l(sa, { size: 15 }),
          " Mensagem"
        ] }),
        /* @__PURE__ */ S(Ce, { className: "flex-1 rounded-2xl gap-2", onClick: () => e == null ? void 0 : e("nova-demanda"), children: [
          /* @__PURE__ */ l(on, { size: 15 }),
          " Contratar"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l("div", { className: "flex border-b border-border", children: [["sobre", "Sobre"], ["especialidades", "Especialidades"], ["avaliações", "Avaliações"]].map(([a, i]) => /* @__PURE__ */ l("button", { onClick: () => r(a), className: `flex-1 py-3 text-sm font-display font-bold transition-all border-b-2 ${t === a ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`, children: i }, a)) }),
    t === "sobre" && /* @__PURE__ */ S("div", { className: "space-y-4", children: [
      /* @__PURE__ */ S("div", { className: "bg-card rounded-3xl border border-border shadow-card p-6", children: [
        /* @__PURE__ */ l("p", { className: "text-[10px] font-display font-black uppercase tracking-widest text-muted-foreground mb-3", children: "Apresentação" }),
        /* @__PURE__ */ l("p", { className: "text-sm text-muted-foreground leading-relaxed", children: n.bio })
      ] }),
      /* @__PURE__ */ l("div", { className: "grid grid-cols-3 gap-4", children: [{ label: "Taxa/Hora", value: `€${n.rate}`, color: "text-primary" }, { label: "Contratos", value: "12", color: "text-foreground" }, { label: "Avaliação", value: String(n.rating), color: "text-warning" }].map((a) => /* @__PURE__ */ S("div", { className: "bg-card rounded-2xl border border-border p-4 text-center shadow-card", children: [
        /* @__PURE__ */ l("p", { className: "text-[9px] font-display font-black uppercase tracking-widest text-muted-foreground", children: a.label }),
        /* @__PURE__ */ l("p", { className: `text-2xl font-display font-black tracking-tighter mt-1 ${a.color}`, children: a.value })
      ] }, a.label)) })
    ] }),
    t === "especialidades" && /* @__PURE__ */ l("div", { className: "bg-card rounded-3xl border border-border shadow-card p-6 space-y-3", children: n.specialties.map((a) => /* @__PURE__ */ S("div", { className: "flex items-center gap-3 p-3 bg-secondary rounded-2xl border border-border/50", children: [
      /* @__PURE__ */ l("div", { className: "w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ l(Qe, { size: 14, className: "text-primary" }) }),
      /* @__PURE__ */ l("span", { className: "text-sm font-display font-bold text-foreground", children: a })
    ] }, a)) }),
    t === "avaliações" && /* @__PURE__ */ l("div", { className: "space-y-4", children: n.ratingsList.map((a, i) => /* @__PURE__ */ S("div", { className: "bg-card rounded-3xl border border-border shadow-card p-6", children: [
      /* @__PURE__ */ S("div", { className: "flex items-start justify-between mb-3", children: [
        /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("p", { className: "font-display font-black text-sm text-foreground uppercase", children: a.author }),
          /* @__PURE__ */ l("p", { className: "text-[10px] text-muted-foreground font-display font-bold uppercase tracking-widest", children: new Date(a.date).toLocaleDateString("pt-PT", { day: "2-digit", month: "short", year: "numeric" }) })
        ] }),
        /* @__PURE__ */ l(o, { rating: a.rating })
      ] }),
      /* @__PURE__ */ S("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
        '"',
        a.text,
        '"'
      ] })
    ] }, i)) })
  ] });
}, wY = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }, Fl = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } } }, xY = ({ step: e, total: t, labels: r }) => /* @__PURE__ */ S("div", { className: "space-y-3", children: [
  /* @__PURE__ */ l("div", { className: "flex items-center", children: Array.from({ length: t }).map((n, o) => /* @__PURE__ */ S(_.Fragment, { children: [
    /* @__PURE__ */ l("div", { className: `w-9 h-9 rounded-xl flex items-center justify-center font-display font-black text-sm shrink-0 transition-all ${o + 1 < e ? "bg-success text-success-foreground shadow-sm" : o + 1 === e ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-muted-foreground border border-border"}`, children: o + 1 < e ? /* @__PURE__ */ l(Qe, { size: 14 }) : o + 1 }),
    o < t - 1 && /* @__PURE__ */ l("div", { className: `flex-1 h-0.5 mx-2 rounded-full transition-all duration-500 ${o + 1 < e ? "bg-success" : "bg-border"}` })
  ] }, o)) }),
  r && /* @__PURE__ */ l("div", { className: "grid gap-2", style: { gridTemplateColumns: `repeat(${t}, 1fr)` }, children: r.map((n, o) => /* @__PURE__ */ l("p", { className: `text-[9px] font-display font-black uppercase tracking-widest text-center truncate ${e >= o + 1 ? "text-foreground" : "text-muted-foreground"}`, children: n }, n)) })
] }), Za = ({ label: e, active: t, onClick: r }) => /* @__PURE__ */ S(
  "button",
  {
    type: "button",
    onClick: r,
    className: `flex items-center gap-2.5 px-3 py-2.5 border rounded-2xl text-sm cursor-pointer transition-all text-left w-full ${t ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground hover:border-primary/40 hover:bg-secondary/60"}`,
    children: [
      /* @__PURE__ */ l("div", { className: `w-4 h-4 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${t ? "bg-primary border-primary" : "border-border/70"}`, children: t && /* @__PURE__ */ l(Qe, { size: 10, className: "text-primary-foreground" }) }),
      /* @__PURE__ */ l("span", { className: "font-medium", children: e })
    ]
  }
), It = ({ children: e }) => /* @__PURE__ */ l("label", { className: "text-[10px] font-display font-black uppercase tracking-widest text-foreground", children: e }), Mo = _.forwardRef((e, t) => /* @__PURE__ */ l(
  "input",
  {
    ref: t,
    ...e,
    className: "w-full px-4 py-3 bg-secondary border border-border rounded-2xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
  }
)), zl = ({ label: e }) => /* @__PURE__ */ l("div", { className: "text-[10px] font-display font-black text-muted-foreground uppercase tracking-[0.35em] border-l-4 border-primary pl-3", children: e }), CY = ["Diabetes", "Hipertensão", "Alzheimer/Demência", "Parkinson", "AVC/Sequelas", "Insuficiência Cardíaca", "Artrite/Osteoporose", "Depressão/Ansiedade"], SY = ["Higiene Pessoal", "Administração de Medicação", "Fisioterapia", "Companhia e Lazer", "Transporte Médico", "Cuidados de Enfermagem", "Preparação de Refeições", "Apoio Noturno"], NY = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"], EY = ["Manhã (6h–12h)", "Tarde (12h–18h)", "Noite (18h–00h)", "Madrugada (00h–6h)"], PY = ["Independente", "Mobilidade Parcial", "Cadeira de Rodas", "Acamado"], lX = ({ onNavigate: e }) => {
  const [t, r] = me(1), [n, o] = me({ elderName: "", elderAge: "", mobility: "", conditions: [], services: [], days: [], times: [], emergencyName: "", emergencyPhone: "", city: "", notes: "" }), a = (s, c) => o((d) => ({ ...d, [s]: d[s].includes(c) ? d[s].filter((f) => f !== c) : [...d[s], c] })), i = () => {
    if (t === 1 && !n.elderName) {
      Xe.error("Preencha o nome do idoso");
      return;
    }
    if (t === 2 && n.services.length === 0) {
      Xe.error("Selecione pelo menos um serviço");
      return;
    }
    t < 3 ? r((s) => s + 1) : (Xe.success("Perfil guardado!"), e == null || e("kyc"));
  };
  return /* @__PURE__ */ l("div", { className: "min-h-screen bg-gradient-to-br from-primary/[0.04] via-background to-background px-4 py-10", children: /* @__PURE__ */ S("div", { className: "max-w-xl mx-auto space-y-8", children: [
    /* @__PURE__ */ S("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ S("div", { className: "relative inline-block", children: [
        /* @__PURE__ */ l("div", { className: "w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-glow", children: /* @__PURE__ */ S("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "white", strokeWidth: "2.5", children: [
          /* @__PURE__ */ l("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
          /* @__PURE__ */ l("circle", { cx: "9", cy: "7", r: "4" }),
          /* @__PURE__ */ l("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
          /* @__PURE__ */ l("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
        ] }) }),
        /* @__PURE__ */ l("div", { className: "absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-lg flex items-center justify-center border-2 border-background", children: /* @__PURE__ */ l(Qe, { size: 10, className: "text-success-foreground" }) })
      ] }),
      /* @__PURE__ */ S("div", { children: [
        /* @__PURE__ */ l("h1", { className: "text-3xl font-display font-black uppercase tracking-tighter text-foreground", children: "Configure o Cuidado" }),
        /* @__PURE__ */ S("p", { className: "text-sm text-muted-foreground mt-1", children: [
          "Família · EVYRA · Passo ",
          t,
          " de 3"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l(xY, { step: t, total: 3, labels: ["Dados do Idoso", "Necessidades", "Emergência"] }),
    /* @__PURE__ */ l(na, { mode: "wait", children: /* @__PURE__ */ S(
      rt.div,
      {
        variants: wY,
        initial: "hidden",
        animate: "show",
        className: "bg-card rounded-3xl border border-border shadow-elevated p-6 sm:p-8 space-y-6",
        children: [
          t === 1 && /* @__PURE__ */ S(rt.div, { variants: Fl, className: "space-y-6", children: [
            /* @__PURE__ */ l(zl, { label: "Dados do Idoso" }),
            /* @__PURE__ */ S("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ S("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ l(It, { children: "Nome do Idoso *" }),
                /* @__PURE__ */ l(Mo, { value: n.elderName, onChange: (s) => o((c) => ({ ...c, elderName: s.target.value })), placeholder: "Nome completo" })
              ] }),
              /* @__PURE__ */ S("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ l(It, { children: "Idade" }),
                /* @__PURE__ */ l(Mo, { type: "number", value: n.elderAge, onChange: (s) => o((c) => ({ ...c, elderAge: s.target.value })), placeholder: "78" })
              ] })
            ] }),
            /* @__PURE__ */ S("div", { className: "space-y-2", children: [
              /* @__PURE__ */ l(It, { children: "Nível de Mobilidade" }),
              /* @__PURE__ */ l("div", { className: "grid grid-cols-2 gap-2", children: PY.map((s) => /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  onClick: () => o((c) => ({ ...c, mobility: s })),
                  className: `px-3 py-2.5 border rounded-2xl text-sm font-display font-bold transition-all text-left ${n.mobility === s ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground hover:border-primary/40"}`,
                  children: s
                },
                s
              )) })
            ] }),
            /* @__PURE__ */ S("div", { className: "space-y-2", children: [
              /* @__PURE__ */ l(It, { children: "Condições Médicas" }),
              /* @__PURE__ */ l("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: CY.map((s) => /* @__PURE__ */ l(Za, { label: s, active: n.conditions.includes(s), onClick: () => a("conditions", s) }, s)) })
            ] })
          ] }),
          t === 2 && /* @__PURE__ */ S(rt.div, { variants: Fl, className: "space-y-6", children: [
            /* @__PURE__ */ l(zl, { label: "Necessidades de Cuidado" }),
            /* @__PURE__ */ S("div", { className: "space-y-2", children: [
              /* @__PURE__ */ l(It, { children: "Serviços Necessários *" }),
              /* @__PURE__ */ l("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: SY.map((s) => /* @__PURE__ */ l(Za, { label: s, active: n.services.includes(s), onClick: () => a("services", s) }, s)) })
            ] }),
            /* @__PURE__ */ S("div", { className: "border-t border-border pt-5 space-y-5", children: [
              /* @__PURE__ */ S("div", { className: "space-y-2", children: [
                /* @__PURE__ */ l(It, { children: "Dias da Semana" }),
                /* @__PURE__ */ l("div", { className: "grid grid-cols-2 gap-2", children: NY.map((s) => /* @__PURE__ */ l(Za, { label: s, active: n.days.includes(s), onClick: () => a("days", s) }, s)) })
              ] }),
              /* @__PURE__ */ S("div", { className: "space-y-2", children: [
                /* @__PURE__ */ l(It, { children: "Período" }),
                /* @__PURE__ */ l("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: EY.map((s) => /* @__PURE__ */ l(Za, { label: s, active: n.times.includes(s), onClick: () => a("times", s) }, s)) })
              ] })
            ] })
          ] }),
          t === 3 && /* @__PURE__ */ S(rt.div, { variants: Fl, className: "space-y-6", children: [
            /* @__PURE__ */ l(zl, { label: "Contacto de Emergência" }),
            /* @__PURE__ */ S("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ l(It, { children: "Nome do Contacto *" }),
              /* @__PURE__ */ l(Mo, { value: n.emergencyName, onChange: (s) => o((c) => ({ ...c, emergencyName: s.target.value })), placeholder: "Nome completo" })
            ] }),
            /* @__PURE__ */ S("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ S("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ l(It, { children: "Telemóvel *" }),
                /* @__PURE__ */ l(Mo, { type: "tel", value: n.emergencyPhone, onChange: (s) => o((c) => ({ ...c, emergencyPhone: s.target.value })), placeholder: "+351 912 345 678" })
              ] }),
              /* @__PURE__ */ S("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ l(It, { children: "Cidade" }),
                /* @__PURE__ */ l(Mo, { value: n.city, onChange: (s) => o((c) => ({ ...c, city: s.target.value })), placeholder: "Lisboa, Porto..." })
              ] })
            ] }),
            /* @__PURE__ */ S("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ l(It, { children: "Notas Adicionais" }),
              /* @__PURE__ */ l(
                "textarea",
                {
                  value: n.notes,
                  onChange: (s) => o((c) => ({ ...c, notes: s.target.value })),
                  rows: 3,
                  placeholder: "Informação adicional para o cuidador...",
                  className: "w-full px-4 py-3 bg-secondary border border-border rounded-2xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ S("div", { className: "bg-secondary rounded-2xl p-4 border border-border/60 space-y-2", children: [
              /* @__PURE__ */ l("p", { className: "text-[9px] font-display font-black uppercase tracking-widest text-muted-foreground mb-2", children: "Resumo" }),
              [["Idoso", n.elderName || "—"], ["Mobilidade", n.mobility || "—"], ["Serviços", `${n.services.length} selecionados`], ["Emergência", n.emergencyName || "—"]].map(([s, c]) => /* @__PURE__ */ S("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ l("span", { className: "text-muted-foreground", children: s }),
                /* @__PURE__ */ l("span", { className: "font-display font-black text-foreground", children: c })
              ] }, s))
            ] })
          ] })
        ]
      },
      t
    ) }),
    /* @__PURE__ */ S("div", { className: "flex gap-3", children: [
      t > 1 && /* @__PURE__ */ l(Ce, { variant: "outline", className: "px-5 rounded-2xl", onClick: () => r((s) => s - 1), children: "← Voltar" }),
      /* @__PURE__ */ S(Ce, { size: "lg", className: "flex-1 rounded-2xl", onClick: i, children: [
        t === 3 ? "Completar Registo" : "Continuar",
        " ",
        /* @__PURE__ */ l(Yi, { size: 16, className: "ml-2" })
      ] })
    ] })
  ] }) });
}, cX = ({ onNavigate: e }) => {
  const [t, r] = me("UNVERIFIED"), [n, o] = me(!1), [a, i] = me(!1), s = { UNVERIFIED: "PENDING", PENDING: "VERIFIED", VERIFIED: "REJECTED", REJECTED: "UNVERIFIED" }, c = () => {
    i(!0), setTimeout(() => {
      i(!1), r("PENDING"), o(!0);
    }, 900);
  }, f = {
    UNVERIFIED: { icon: "🛡️", bg: "bg-secondary", title: "Não Verificado", desc: "Inicie a verificação para desbloquear todas as funcionalidades.", badgeCls: "bg-secondary text-muted-foreground border-border" },
    PENDING: { icon: "⏳", bg: "bg-warning/10", title: "Em Verificação", desc: "O processo está em curso. Aguarde.", badgeCls: "bg-warning/10 text-warning border-warning/30" },
    VERIFIED: { icon: "✅", bg: "bg-success/10", title: "Verificado", desc: "Identidade confirmada. Conta totalmente ativa.", badgeCls: "bg-success/10 text-success border-success/30" },
    REJECTED: { icon: "❌", bg: "bg-destructive/10", title: "Rejeitado", desc: "A verificação falhou. Tente com documentos válidos.", badgeCls: "bg-destructive/10 text-destructive border-destructive/30" }
  }[t];
  return /* @__PURE__ */ S("div", { className: "min-h-screen bg-gradient-to-br from-primary/[0.04] via-background to-background px-4 py-10", children: [
    n && /* @__PURE__ */ l("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm", children: /* @__PURE__ */ S(rt.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, className: "w-full max-w-md mx-4 bg-card rounded-3xl border border-border shadow-elevated overflow-hidden", children: [
      /* @__PURE__ */ S("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border", children: [
        /* @__PURE__ */ S("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ l("div", { className: "w-7 h-7 bg-primary rounded-lg flex items-center justify-center", children: /* @__PURE__ */ l(on, { size: 14, className: "text-primary-foreground" }) }),
          /* @__PURE__ */ l("span", { className: "text-sm font-display font-black uppercase tracking-tight text-foreground", children: "Verificação Didit" })
        ] }),
        /* @__PURE__ */ l("button", { onClick: () => {
          o(!1), r("VERIFIED");
        }, className: "text-muted-foreground hover:text-foreground transition-colors p-1", children: "✕" })
      ] }),
      /* @__PURE__ */ S("div", { className: "p-8 text-center space-y-5", children: [
        /* @__PURE__ */ l("div", { className: "w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-4xl", children: "📸" }),
        /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("p", { className: "font-display font-black text-foreground uppercase", children: "Documento de Identidade" }),
          /* @__PURE__ */ l("p", { className: "text-sm text-muted-foreground mt-1", children: "Posicione o BI ou Passaporte em frente à câmara" })
        ] }),
        /* @__PURE__ */ l("div", { className: "w-full h-36 bg-secondary rounded-2xl border-2 border-dashed border-border flex items-center justify-center", children: /* @__PURE__ */ S("div", { className: "text-center", children: [
          /* @__PURE__ */ l(bf, { size: 28, className: "mx-auto text-muted-foreground" }),
          /* @__PURE__ */ l("p", { className: "text-xs text-muted-foreground mt-2 font-display font-bold", children: "Câmara Didit" })
        ] }) }),
        /* @__PURE__ */ l(Ce, { size: "lg", className: "w-full rounded-2xl", onClick: () => {
          o(!1), r("VERIFIED");
        }, children: "Simular Aprovação ✓" })
      ] })
    ] }) }),
    /* @__PURE__ */ S("div", { className: "max-w-xl mx-auto space-y-6", children: [
      /* @__PURE__ */ S("div", { className: "text-center space-y-3", children: [
        /* @__PURE__ */ l("div", { className: "w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-glow", children: /* @__PURE__ */ l(on, { size: 28, className: "text-primary-foreground" }) }),
        /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("h1", { className: "text-3xl font-display font-black uppercase tracking-tighter text-foreground", children: "Verificação KYC" }),
          /* @__PURE__ */ l("p", { className: "text-sm text-muted-foreground mt-1", children: "Identidade · EVYRA" })
        ] })
      ] }),
      /* @__PURE__ */ S(rt.div, { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, className: "bg-card rounded-3xl border border-border shadow-elevated p-8 text-center space-y-5", children: [
        /* @__PURE__ */ l("div", { className: `w-20 h-20 ${f.bg} rounded-2xl flex items-center justify-center mx-auto text-4xl`, children: f.icon }),
        /* @__PURE__ */ l("span", { className: `inline-flex text-[9px] font-display font-black uppercase tracking-widest px-3 py-1.5 rounded-full border ${f.badgeCls}`, children: f.title }),
        /* @__PURE__ */ l("p", { className: "text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed", children: f.desc }),
        /* @__PURE__ */ S("div", { className: "flex flex-wrap gap-3 justify-center", children: [
          t === "UNVERIFIED" && /* @__PURE__ */ l(Ce, { size: "lg", className: "rounded-2xl", onClick: c, disabled: a, children: a ? /* @__PURE__ */ S(Me, { children: [
            /* @__PURE__ */ l(rd, { size: 15, className: "animate-spin mr-2" }),
            "A iniciar..."
          ] }) : /* @__PURE__ */ S(Me, { children: [
            /* @__PURE__ */ l(nd, { size: 16, className: "mr-2" }),
            "Iniciar Verificação"
          ] }) }),
          t === "PENDING" && /* @__PURE__ */ l(Ce, { size: "lg", className: "rounded-2xl", onClick: () => o(!0), children: "Continuar" }),
          t === "VERIFIED" && /* @__PURE__ */ S(Ce, { size: "lg", className: "rounded-2xl bg-success hover:bg-success/90", onClick: () => e == null ? void 0 : e("dashboard"), children: [
            "Ir para Dashboard ",
            /* @__PURE__ */ l(Yi, { size: 15, className: "ml-2" })
          ] }),
          t === "REJECTED" && /* @__PURE__ */ l(Ce, { size: "lg", className: "rounded-2xl", onClick: c, children: "Nova Tentativa" }),
          /* @__PURE__ */ l(Ce, { variant: "outline", size: "sm", className: "rounded-2xl", onClick: () => r(s[t]), children: "Demo →" })
        ] })
      ] }),
      /* @__PURE__ */ l("div", { className: "grid grid-cols-3 gap-3", children: [[/* @__PURE__ */ S("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
        /* @__PURE__ */ l("rect", { x: "3", y: "4", width: "18", height: "16", rx: "2" }),
        /* @__PURE__ */ l("path", { d: "M7 8h2m0 0a2 2 0 1 1 4 0H9" }),
        /* @__PURE__ */ l("line", { x1: "7", y1: "16", x2: "17", y2: "16" }),
        /* @__PURE__ */ l("line", { x1: "7", y1: "12", x2: "17", y2: "12" })
      ] }, "id"), "Documento ID", "BI ou Passaporte"], [/* @__PURE__ */ l(bf, { size: 20 }, "cam"), "Câmara", "Em boas condições"], [/* @__PURE__ */ l(_Y, { size: 20 }, "sun"), "Iluminação", "Sem reflexos"]].map(([p, m, h]) => /* @__PURE__ */ S("div", { className: "bg-card rounded-2xl border border-border p-4 text-center space-y-2", children: [
        /* @__PURE__ */ l("div", { className: "w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto text-primary", children: p }),
        /* @__PURE__ */ l("p", { className: "text-[10px] font-display font-black uppercase text-foreground", children: m }),
        /* @__PURE__ */ l("p", { className: "text-[10px] text-muted-foreground leading-relaxed", children: h })
      ] }, m)) }),
      /* @__PURE__ */ S("div", { className: "bg-primary/5 border border-primary/20 rounded-2xl p-5", children: [
        /* @__PURE__ */ l("p", { className: "text-[10px] font-display font-black uppercase tracking-widest text-foreground mb-3", children: "Benefícios" }),
        /* @__PURE__ */ l("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: ["Acesso completo à plataforma", "Maior confiança de famílias", "Contratos e pagamentos ativos", "Perfil com selo verificado"].map((p) => /* @__PURE__ */ S("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ l("div", { className: "w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ l(Qe, { size: 10, className: "text-success" }) }),
          /* @__PURE__ */ l("span", { className: "text-xs text-foreground", children: p })
        ] }, p)) })
      ] })
    ] })
  ] });
}, _Y = ({ size: e }) => /* @__PURE__ */ S("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
  /* @__PURE__ */ l("circle", { cx: "12", cy: "12", r: "5" }),
  /* @__PURE__ */ l("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
  /* @__PURE__ */ l("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
  /* @__PURE__ */ l("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
  /* @__PURE__ */ l("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
  /* @__PURE__ */ l("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
  /* @__PURE__ */ l("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
  /* @__PURE__ */ l("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
  /* @__PURE__ */ l("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })
] }), RY = ({ step: e, total: t, labels: r }) => /* @__PURE__ */ S("div", { className: "space-y-3", children: [
  /* @__PURE__ */ l("div", { className: "flex gap-1.5", children: Array.from({ length: t }).map((n, o) => /* @__PURE__ */ l("div", { className: `flex-1 h-1.5 rounded-full transition-all duration-500 ${o + 1 <= e ? "bg-primary" : "bg-border"}` }, o)) }),
  r && /* @__PURE__ */ l("div", { className: "grid gap-2", style: { gridTemplateColumns: `repeat(${t}, 1fr)` }, children: r.map((n, o) => /* @__PURE__ */ l("p", { className: `text-[9px] font-display font-black uppercase tracking-widest text-center ${e >= o + 1 ? "text-foreground" : "text-muted-foreground"}`, children: n }, n)) })
] }), vr = ({ label: e, children: t }) => /* @__PURE__ */ S("div", { className: "bg-card rounded-3xl border border-border shadow-card p-6 sm:p-8 space-y-6", children: [
  e && /* @__PURE__ */ l("div", { className: "text-[10px] font-display font-black text-muted-foreground uppercase tracking-[0.35em] border-l-4 border-primary pl-3", children: e }),
  t
] }), _t = ({ label: e, children: t }) => /* @__PURE__ */ S("div", { className: "space-y-1.5", children: [
  /* @__PURE__ */ l("label", { className: "text-[10px] font-display font-black uppercase tracking-widest text-foreground", children: e }),
  t
] }), Ft = "w-full px-4 py-3 bg-secondary border border-border rounded-2xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all", Wi = ({ k: e, v: t }) => /* @__PURE__ */ S("div", { className: "flex justify-between text-sm border-b border-border/50 pb-2.5 last:border-0", children: [
  /* @__PURE__ */ l("span", { className: "text-muted-foreground", children: e }),
  /* @__PURE__ */ l("span", { className: "font-display font-black text-foreground", children: t })
] }), pS = ({ step: e, onBack: t, onNext: r, nextLabel: n, loading: o }) => /* @__PURE__ */ S("div", { className: "flex gap-3", children: [
  e > 1 && /* @__PURE__ */ S(Ce, { variant: "outline", className: "px-5 rounded-2xl gap-2", onClick: t, children: [
    /* @__PURE__ */ l(aa, { size: 15 }),
    "Voltar"
  ] }),
  /* @__PURE__ */ S(Ce, { size: "lg", className: "flex-1 rounded-2xl gap-2", onClick: r, disabled: o, children: [
    n || "Continuar",
    " ",
    /* @__PURE__ */ l(Yi, { size: 15 })
  ] })
] }), TY = ["Higiene Pessoal", "Administração de Medicação", "Fisioterapia", "Companhia e Lazer", "Transporte Médico", "Cuidados de Enfermagem", "Preparação de Refeições", "Apoio Noturno 24h"], MY = ["Seg–Sex Manhã", "Seg–Sex Tarde", "Seg–Sex Noite", "Fins-de-semana", "Período Completo", "Madrugada"], AY = ({ label: e, active: t, onClick: r }) => /* @__PURE__ */ S(
  "button",
  {
    type: "button",
    onClick: r,
    className: `flex items-center gap-2.5 px-3 py-2.5 border rounded-2xl text-sm transition-all text-left w-full ${t ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground hover:border-primary/40"}`,
    children: [
      /* @__PURE__ */ l("div", { className: `w-4 h-4 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${t ? "bg-primary border-primary" : "border-border/70"}`, children: t && /* @__PURE__ */ l(Qe, { size: 10, className: "text-primary-foreground" }) }),
      /* @__PURE__ */ l("span", { className: "font-medium", children: e })
    ]
  }
), dX = ({ onNavigate: e }) => {
  const [t, r] = me(1), [n, o] = me({ title: "", description: "", services: [], city: "", startDate: "", duration: "", budget: "", schedule: [] }), a = (i, s) => o((c) => ({ ...c, [i]: c[i].includes(s) ? c[i].filter((d) => d !== s) : [...c[i], s] }));
  return /* @__PURE__ */ S("div", { className: "space-y-6 animate-fade-in max-w-2xl", children: [
    /* @__PURE__ */ l("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ S("button", { onClick: () => e == null ? void 0 : e("demandas"), className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-display font-bold uppercase tracking-widest transition-colors", children: [
      /* @__PURE__ */ l(aa, { size: 15 }),
      "Voltar"
    ] }) }),
    /* @__PURE__ */ l(En, { title: "Nova Demanda", desc: "Publique a necessidade e receba propostas de cuidadores qualificados" }),
    /* @__PURE__ */ l(RY, { step: t, total: 3, labels: ["Detalhes", "Requisitos", "Publicar"] }),
    /* @__PURE__ */ l(na, { mode: "wait", children: /* @__PURE__ */ S(rt.div, { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, children: [
      t === 1 && /* @__PURE__ */ S(vr, { label: "Detalhes da Demanda", children: [
        /* @__PURE__ */ l(_t, { label: "Título *", children: /* @__PURE__ */ l("input", { value: n.title, onChange: (i) => o((s) => ({ ...s, title: i.target.value })), placeholder: "Ex: Cuidador(a) para sénior com mobilidade reduzida", className: Ft }) }),
        /* @__PURE__ */ l(_t, { label: "Descrição *", children: /* @__PURE__ */ l("textarea", { value: n.description, onChange: (i) => o((s) => ({ ...s, description: i.target.value })), rows: 4, placeholder: "Descreva as necessidades, rotinas, perfil ideal...", className: `${Ft} resize-none` }) }),
        /* @__PURE__ */ S("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ l(_t, { label: "Localização *", children: /* @__PURE__ */ l("input", { value: n.city, onChange: (i) => o((s) => ({ ...s, city: i.target.value })), placeholder: "Lisboa, Porto...", className: Ft }) }),
          /* @__PURE__ */ l(_t, { label: "Data de Início", children: /* @__PURE__ */ l("input", { type: "date", value: n.startDate, onChange: (i) => o((s) => ({ ...s, startDate: i.target.value })), className: Ft }) })
        ] })
      ] }),
      t === 2 && /* @__PURE__ */ S(vr, { label: "Requisitos", children: [
        /* @__PURE__ */ l(_t, { label: "Serviços Necessários *", children: /* @__PURE__ */ l("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: TY.map((i) => /* @__PURE__ */ l(AY, { label: i, active: n.services.includes(i), onClick: () => a("services", i) }, i)) }) }),
        /* @__PURE__ */ l(_t, { label: "Horário Pretendido", children: /* @__PURE__ */ l("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: MY.map((i) => /* @__PURE__ */ l("button", { onClick: () => a("schedule", i), className: `px-3 py-2.5 border rounded-2xl text-xs font-display font-bold transition-all ${n.schedule.includes(i) ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground hover:border-primary/40"}`, children: i }, i)) }) }),
        /* @__PURE__ */ S("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ l(_t, { label: "Duração", children: /* @__PURE__ */ S("select", { value: n.duration, onChange: (i) => o((s) => ({ ...s, duration: i.target.value })), className: Ft, children: [
            /* @__PURE__ */ l("option", { value: "", children: "Selecione" }),
            ["1 semana", "2 semanas", "1 mês", "3 meses", "6 meses", "Permanente"].map((i) => /* @__PURE__ */ l("option", { children: i }, i))
          ] }) }),
          /* @__PURE__ */ l(_t, { label: "Orçamento (€/hora)", children: /* @__PURE__ */ l("input", { type: "number", value: n.budget, onChange: (i) => o((s) => ({ ...s, budget: i.target.value })), placeholder: "15", className: Ft }) })
        ] })
      ] }),
      t === 3 && /* @__PURE__ */ S("div", { className: "space-y-4", children: [
        /* @__PURE__ */ l(vr, { label: "Resumo da Demanda", children: [["Título", n.title || "Cuidador(a) para sénior"], ["Localização", n.city || "Lisboa"], ["Início", n.startDate || "A definir"], ["Serviços", `${n.services.length} selecionados`], ["Duração", n.duration || "A definir"], ["Orçamento", n.budget ? `€${n.budget}/h` : "A negociar"]].map(([i, s]) => /* @__PURE__ */ l(Wi, { k: i, v: s }, i)) }),
        /* @__PURE__ */ S("div", { className: "flex items-start gap-3 p-4 bg-warning/5 border border-warning/20 rounded-2xl", children: [
          /* @__PURE__ */ l(NE, { size: 14, className: "text-warning mt-0.5 shrink-0" }),
          /* @__PURE__ */ l("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "A demanda será visível para cuidadores verificados. Receberá propostas por notificação e email." })
        ] })
      ] })
    ] }, t) }),
    /* @__PURE__ */ l(pS, { step: t, onBack: () => r((i) => i - 1), onNext: () => t < 3 ? r((i) => i + 1) : (Xe.success("Demanda publicada!"), e == null ? void 0 : e("demandas")), nextLabel: t === 3 ? "Publicar Demanda" : void 0 })
  ] });
}, uX = ({ onNavigate: e }) => {
  const [t, r] = me({ rate: 18, hours: 20, weeks: 4, startDate: "", schedule: "", notes: "", escrow: !0 }), n = t.rate * t.hours * t.weeks, o = Math.round(n * 0.1), a = n - o;
  return /* @__PURE__ */ S("div", { className: "space-y-6 animate-fade-in max-w-2xl", children: [
    /* @__PURE__ */ S("button", { onClick: () => e == null ? void 0 : e("contratos"), className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-display font-bold uppercase tracking-widest transition-colors", children: [
      /* @__PURE__ */ l(aa, { size: 15 }),
      "Voltar"
    ] }),
    /* @__PURE__ */ l(En, { title: "Novo Contrato", desc: "Defina os termos com o(a) cuidador(a)" }),
    /* @__PURE__ */ S("div", { className: "bg-card rounded-3xl border border-border shadow-card p-5 flex items-center gap-4", children: [
      /* @__PURE__ */ l("div", { className: "w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-sm font-display font-black text-primary shrink-0", children: "HCF" }),
      /* @__PURE__ */ S("div", { className: "flex-1", children: [
        /* @__PURE__ */ l("p", { className: "font-display font-black text-foreground text-sm uppercase", children: "Helena Costa Ferreira" }),
        /* @__PURE__ */ l("p", { className: "text-xs text-muted-foreground", children: "Enfermeira Especializada · Lisboa" })
      ] }),
      /* @__PURE__ */ l("span", { className: "text-[9px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-success/10 text-success border border-success/30", children: "Verificado" })
    ] }),
    /* @__PURE__ */ S(vr, { label: "Termos do Contrato", children: [
      /* @__PURE__ */ l("div", { className: "grid grid-cols-3 gap-4", children: [["Valor/Hora (€)", "rate"], ["Horas/Semana", "hours"], ["Semanas", "weeks"]].map(([i, s]) => /* @__PURE__ */ l(_t, { label: i, children: /* @__PURE__ */ l("input", { type: "number", min: 1, value: t[s], onChange: (c) => r((d) => ({ ...d, [s]: Number(c.target.value) })), className: Ft }) }, s)) }),
      /* @__PURE__ */ S("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ l(_t, { label: "Data de Início", children: /* @__PURE__ */ l("input", { type: "date", value: t.startDate, onChange: (i) => r((s) => ({ ...s, startDate: i.target.value })), className: Ft }) }),
        /* @__PURE__ */ l(_t, { label: "Horário", children: /* @__PURE__ */ l("input", { value: t.schedule, onChange: (i) => r((s) => ({ ...s, schedule: i.target.value })), placeholder: "Seg–Sex 9h–13h", className: Ft }) })
      ] }),
      /* @__PURE__ */ l(_t, { label: "Notas Especiais", children: /* @__PURE__ */ l("textarea", { value: t.notes, onChange: (i) => r((s) => ({ ...s, notes: i.target.value })), rows: 3, placeholder: "Instruções específicas...", className: `${Ft} resize-none` }) })
    ] }),
    /* @__PURE__ */ S(vr, { label: "Resumo Financeiro", children: [
      /* @__PURE__ */ l("div", { className: "space-y-2.5", children: [["Valor por hora", `€${t.rate}/h`], [`Total (${t.hours}h × ${t.weeks} sem.)`, `€${n}`], ["Taxa plataforma (10%)", `€${o}`]].map(([i, s]) => /* @__PURE__ */ l(Wi, { k: i, v: s }, i)) }),
      /* @__PURE__ */ S("div", { className: "grid grid-cols-2 gap-4 mt-4", children: [
        /* @__PURE__ */ S("div", { className: "bg-primary/5 rounded-2xl p-4 border border-primary/20 text-center", children: [
          /* @__PURE__ */ l("p", { className: "text-[9px] font-display font-black uppercase tracking-widest text-muted-foreground", children: "Total Contrato" }),
          /* @__PURE__ */ S("p", { className: "text-3xl font-display font-black text-primary tracking-tighter mt-1", children: [
            "€",
            n
          ] })
        ] }),
        /* @__PURE__ */ S("div", { className: "bg-success/5 rounded-2xl p-4 border border-success/20 text-center", children: [
          /* @__PURE__ */ l("p", { className: "text-[9px] font-display font-black uppercase tracking-widest text-muted-foreground", children: "Cuidador Recebe" }),
          /* @__PURE__ */ S("p", { className: "text-3xl font-display font-black text-success tracking-tighter mt-1", children: [
            "€",
            a
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S("div", { className: "bg-card rounded-3xl border border-border shadow-card p-5 flex items-center gap-4", children: [
      /* @__PURE__ */ l("div", { className: "w-11 h-11 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 text-primary", children: /* @__PURE__ */ l(on, { size: 20 }) }),
      /* @__PURE__ */ S("div", { className: "flex-1", children: [
        /* @__PURE__ */ l("p", { className: "font-display font-black text-foreground text-sm uppercase", children: "Pagamento via Escrow" }),
        /* @__PURE__ */ l("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Fundos protegidos até aprovação semanal" })
      ] }),
      /* @__PURE__ */ l("div", { onClick: () => r((i) => ({ ...i, escrow: !i.escrow })), className: `w-12 h-7 rounded-full cursor-pointer transition-all ${t.escrow ? "bg-primary" : "bg-border"} flex items-center p-1`, children: /* @__PURE__ */ l("div", { className: `w-5 h-5 rounded-full bg-white shadow transition-all ${t.escrow ? "translate-x-5" : "translate-x-0"}` }) })
    ] }),
    /* @__PURE__ */ S(Ce, { size: "lg", className: "w-full rounded-2xl gap-2 shadow-elevated", onClick: () => {
      Xe.success("Contrato criado e enviado!"), e == null || e("contratos");
    }, children: [
      /* @__PURE__ */ l(Lr, { size: 17 }),
      " Criar Contrato & Enviar para Assinatura"
    ] })
  ] });
}, fX = ({ onNavigate: e }) => {
  const [t, r] = me(1), n = ["Revisar", "Assinar", "Pagar", "Confirmação"], o = { name: "Helena Costa Ferreira", rate: 18, hours: 20, weeks: 4, total: 1440, net: 1296, fee: 144, schedule: "Seg–Sex 9h–13h", start: "2026-05-01" };
  return /* @__PURE__ */ S("div", { className: "space-y-6 animate-fade-in max-w-2xl", children: [
    /* @__PURE__ */ S("button", { onClick: () => e == null ? void 0 : e("propostas"), className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-display font-bold uppercase tracking-widest transition-colors", children: [
      /* @__PURE__ */ l(aa, { size: 15 }),
      "Voltar às Propostas"
    ] }),
    /* @__PURE__ */ l(En, { title: "Aceitar Proposta", desc: "Revise os termos antes de confirmar" }),
    /* @__PURE__ */ l("div", { className: "flex items-center", children: n.map((a, i) => /* @__PURE__ */ S(_.Fragment, { children: [
      /* @__PURE__ */ S("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ l("div", { className: `w-9 h-9 rounded-xl flex items-center justify-center font-display font-black text-sm transition-all ${i + 1 < t ? "bg-success text-success-foreground" : i + 1 === t ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-muted-foreground border border-border"}`, children: i + 1 < t ? /* @__PURE__ */ l(Qe, { size: 14 }) : i + 1 }),
        /* @__PURE__ */ l("p", { className: `text-[9px] font-display font-bold uppercase tracking-widest mt-1 hidden sm:block ${t >= i + 1 ? "text-foreground" : "text-muted-foreground"}`, children: a })
      ] }),
      i < n.length - 1 && /* @__PURE__ */ l("div", { className: `flex-1 h-0.5 mx-1 mb-3 rounded-full transition-all ${i + 1 < t ? "bg-success" : "bg-border"}` })
    ] }, i)) }),
    /* @__PURE__ */ l(na, { mode: "wait", children: /* @__PURE__ */ S(rt.div, { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, children: [
      t === 1 && /* @__PURE__ */ l(vr, { label: `Proposta de ${o.name}`, children: [["Cuidador(a)", o.name], ["Valor/Hora", `€${o.rate}/h`], [`Total (${o.hours}h × ${o.weeks}sem.)`, `€${o.total}`], ["Você Paga", `€${o.total}`], ["Cuidador Recebe", `€${o.net}`], ["Horário", o.schedule], ["Início", o.start]].map(([a, i]) => /* @__PURE__ */ l(Wi, { k: a, v: i }, a)) }),
      t === 2 && /* @__PURE__ */ S(vr, { label: "Assinatura Digital", children: [
        /* @__PURE__ */ l("div", { className: "space-y-3", children: [["📋", "Termos do Serviço", "Duração, horário e responsabilidades"], ["💰", "Condições de Pagamento", "Pagamento semanal via Escrow"], ["🛡️", "Proteção EVYRA", "Seguro e mediação incluídos"], ["⚖️", "Cláusulas Legais", "Contrato conforme lei portuguesa"]].map(([a, i, s]) => /* @__PURE__ */ S("div", { className: "flex items-center gap-4 p-4 bg-secondary rounded-2xl border border-border/50", children: [
          /* @__PURE__ */ l("span", { className: "text-xl shrink-0", children: a }),
          /* @__PURE__ */ S("div", { className: "flex-1", children: [
            /* @__PURE__ */ l("p", { className: "text-sm font-display font-black text-foreground uppercase", children: i }),
            /* @__PURE__ */ l("p", { className: "text-xs text-muted-foreground", children: s })
          ] }),
          /* @__PURE__ */ l("div", { className: "w-6 h-6 bg-success rounded-full flex items-center justify-center shrink-0", children: /* @__PURE__ */ l(Qe, { size: 11, className: "text-success-foreground" }) })
        ] }, i)) }),
        /* @__PURE__ */ l("div", { className: "p-4 bg-primary/5 border border-primary/20 rounded-2xl text-xs text-muted-foreground leading-relaxed", children: "Ao aceitar, confirmo que li todos os termos. A aceitação fica registada com data, hora e IP." })
      ] }),
      t === 3 && /* @__PURE__ */ S(vr, { label: "Depósito em Escrow", children: [
        /* @__PURE__ */ S("div", { className: "bg-primary/5 border border-primary/20 rounded-2xl p-5 text-center", children: [
          /* @__PURE__ */ l("p", { className: "text-[9px] font-display font-black uppercase tracking-widest text-muted-foreground", children: "Valor a Depositar" }),
          /* @__PURE__ */ S("p", { className: "text-4xl font-display font-black text-primary tracking-tighter mt-2", children: [
            "€",
            o.total
          ] }),
          /* @__PURE__ */ l("p", { className: "text-xs text-muted-foreground mt-1", children: "Libertado semanalmente após aprovação" })
        ] }),
        /* @__PURE__ */ l("div", { className: "space-y-2.5", children: [["📱", "MB Way", "+351 91X XXX XXX"], ["🏧", "Multibanco", "Entidade: 11222 · Ref: 123 456 789"], ["🏦", "IBAN", "PT50 0000 0000 0000 0000 0000 0"]].map(([a, i, s]) => /* @__PURE__ */ S("div", { className: "flex items-center gap-3 p-4 border border-border rounded-2xl cursor-pointer hover:border-primary/30 hover:bg-secondary/50 transition-all", children: [
          /* @__PURE__ */ l("span", { className: "text-2xl", children: a }),
          /* @__PURE__ */ S("div", { children: [
            /* @__PURE__ */ l("p", { className: "text-sm font-display font-black text-foreground uppercase", children: i }),
            /* @__PURE__ */ l("p", { className: "text-xs text-muted-foreground font-mono", children: s })
          ] })
        ] }, i)) })
      ] }),
      t === 4 && /* @__PURE__ */ S("div", { className: "text-center space-y-6 py-8", children: [
        /* @__PURE__ */ l(rt.div, { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { type: "spring", stiffness: 300, damping: 20 }, className: "w-24 h-24 bg-success/10 rounded-3xl flex items-center justify-center mx-auto", children: /* @__PURE__ */ l(Qe, { size: 48, className: "text-success", strokeWidth: 2.5 }) }),
        /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("h3", { className: "text-2xl font-display font-black uppercase tracking-tighter text-foreground", children: "Contrato Ativo!" }),
          /* @__PURE__ */ l("p", { className: "text-muted-foreground mt-2 text-sm leading-relaxed", children: "Assinado e fundos em Escrow seguro. Cuidador notificado." })
        ] }),
        /* @__PURE__ */ l(vr, { children: [["Cuidador(a)", o.name], ["Início", o.start], ["Escrow", `€${o.total} protegido`], ["Estado", "Ativo ✓"]].map(([a, i]) => /* @__PURE__ */ l(Wi, { k: a, v: i }, a)) }),
        /* @__PURE__ */ S("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ l(Ce, { size: "lg", className: "flex-1 rounded-2xl", onClick: () => e == null ? void 0 : e("contratos"), children: "Ver Contrato" }),
          /* @__PURE__ */ l(Ce, { size: "lg", variant: "outline", className: "flex-1 rounded-2xl", onClick: () => e == null ? void 0 : e("chat"), children: "Mensagem" })
        ] })
      ] })
    ] }, t) }),
    t < 4 && /* @__PURE__ */ l(pS, { step: t, onBack: () => r((a) => a - 1), onNext: () => r((a) => a + 1), nextLabel: t === 3 ? "Confirmar Pagamento" : t === 2 ? "Aceitar & Assinar" : void 0 })
  ] });
}, pX = () => {
  const e = [
    { label: "Utilizadores", value: "1,248", delta: "+8.2%", Icon: Ir, color: "text-primary", bg: "bg-primary/10" },
    { label: "Contratos Ativos", value: "342", delta: "+12.5%", Icon: Lr, color: "text-success", bg: "bg-success/10" },
    { label: "Volume Mensal", value: "€48.2k", delta: "+23%", Icon: Gl, color: "text-warning", bg: "bg-warning/10" },
    { label: "KYC Pendentes", value: "23", delta: "", Icon: on, color: "text-destructive", bg: "bg-destructive/10" }
  ], t = [
    { name: "Carlos Mendes", type: "Cuidador", action: "KYC Pendente", cls: "bg-warning/10 text-warning border-warning/30" },
    { name: "Família Sousa", type: "Família", action: "Ativação €29", cls: "bg-info/10 text-info border-info/30" },
    { name: "Ana Rodrigues", type: "Cuidador", action: "Documentos em falta", cls: "bg-destructive/10 text-destructive border-destructive/30" },
    { name: "Contrato #1052", type: "Contrato", action: "Disputa reportada", cls: "bg-destructive/10 text-destructive border-destructive/30" }
  ];
  return /* @__PURE__ */ S("div", { className: "space-y-6 sm:space-y-8 animate-fade-in", children: [
    /* @__PURE__ */ S("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ l(En, { title: "Admin Dashboard", desc: "Visão geral da plataforma EVYRA" }),
      /* @__PURE__ */ l("span", { className: "text-[9px] font-display font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-destructive/10 text-destructive border border-destructive/30", children: "Admin" })
    ] }),
    /* @__PURE__ */ l("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: e.map((r) => /* @__PURE__ */ S("div", { className: "bg-card rounded-3xl border border-border shadow-card p-5 space-y-3 hover:shadow-elevated transition-all", children: [
      /* @__PURE__ */ l("div", { className: `w-10 h-10 ${r.bg} rounded-2xl flex items-center justify-center ${r.color}`, children: /* @__PURE__ */ l(r.Icon, { size: 18 }) }),
      /* @__PURE__ */ S("div", { children: [
        /* @__PURE__ */ l("p", { className: "text-[9px] font-display font-black uppercase tracking-widest text-muted-foreground", children: r.label }),
        /* @__PURE__ */ l("p", { className: `text-2xl font-display font-black tracking-tighter mt-1 ${r.color}`, children: r.value }),
        r.delta && /* @__PURE__ */ S("p", { className: "text-[10px] text-success font-medium mt-0.5", children: [
          r.delta,
          " este mês"
        ] })
      ] })
    ] }, r.label)) }),
    /* @__PURE__ */ S("div", { className: "space-y-3", children: [
      /* @__PURE__ */ l("h3", { className: "text-[10px] font-display font-black uppercase tracking-widest text-foreground border-l-4 border-destructive pl-3", children: "Ações Pendentes" }),
      /* @__PURE__ */ l("div", { className: "bg-card rounded-3xl border border-border shadow-card overflow-hidden", children: t.map((r, n) => /* @__PURE__ */ S("div", { className: `flex items-center gap-4 px-5 py-4 hover:bg-secondary/50 transition-all cursor-pointer ${n > 0 ? "border-t border-border/50" : ""}`, onClick: () => Xe.info(`Gerir: ${r.name}`), children: [
        /* @__PURE__ */ l("div", { className: "w-10 h-10 bg-secondary rounded-2xl flex items-center justify-center text-xs font-display font-black text-primary shrink-0", children: r.name.split(" ").map((o) => o[0]).slice(0, 2).join("") }),
        /* @__PURE__ */ S("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ l("p", { className: "text-sm font-display font-black text-foreground uppercase truncate", children: r.name }),
          /* @__PURE__ */ l("p", { className: "text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest", children: r.type })
        ] }),
        /* @__PURE__ */ l("span", { className: `text-[9px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${r.cls} whitespace-nowrap`, children: r.action }),
        /* @__PURE__ */ l(hn, { size: 15, className: "text-muted-foreground shrink-0" })
      ] }, n)) })
    ] }),
    /* @__PURE__ */ l("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [["👥", "Utilizadores", "Gerir contas"], ["💰", "Pagamentos", "Escrow & saques"], ["📋", "Contratos", "Disputas"], ["🛡️", "Moderação", "Conteúdo"]].map(([r, n, o]) => /* @__PURE__ */ S("div", { className: "bg-card rounded-2xl border border-border shadow-card p-5 text-center cursor-pointer hover:shadow-elevated hover:border-primary/30 transition-all group", onClick: () => Xe.info(`Abrir ${n}...`), children: [
      /* @__PURE__ */ l("span", { className: "text-3xl group-hover:scale-110 inline-block transition-transform", children: r }),
      /* @__PURE__ */ l("p", { className: "text-xs font-display font-black uppercase text-foreground mt-2", children: n }),
      /* @__PURE__ */ l("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: o })
    ] }, n)) })
  ] });
}, mX = () => {
  const [e, t] = me(""), [r, n] = me(null), o = [["🚀", "Primeiros Passos", 8], ["🔒", "Verificação KYC", 5], ["💳", "Pagamentos", 12], ["📋", "Contratos", 9], ["👥", "Perfil & Conta", 6], ["⚖️", "Disputas", 4]], i = [
    ["Como funciona o sistema Escrow?", "O Escrow bloqueia os fundos até a conclusão semanal. A família deposita antes do início e o cuidador recebe semanalmente após aprovação."],
    ["Qual o prazo para verificação KYC?", "Realizada em tempo real pelo Didit. Na maioria dos casos demora menos de 5 minutos. Em casos excecionais até 24 horas."],
    ["Posso cancelar um contrato?", "Sim, com 7 dias de antecedência. Cancelamentos antes do início têm reembolso total. Após o início aplica-se a política proporcional."],
    ["Como são calculadas as comissões?", "A EVYRA retém 10% como taxa de serviço, cobrindo seguros, mediação, suporte e infraestrutura."],
    ["O que é a taxa de ativação familiar?", "€29 (taxa única) para ativar a conta familiar. Financia a verificação de cuidadores e suporte dedicado."]
  ].filter(([s]) => !e || s.toLowerCase().includes(e.toLowerCase()));
  return /* @__PURE__ */ S("div", { className: "space-y-6 sm:space-y-8 animate-fade-in", children: [
    /* @__PURE__ */ l(En, { title: "Centro de Ajuda", desc: "Como podemos ajudar?" }),
    /* @__PURE__ */ S("div", { className: "relative", children: [
      /* @__PURE__ */ l(Xi, { size: 17, className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" }),
      /* @__PURE__ */ l("input", { value: e, onChange: (s) => t(s.target.value), placeholder: "Pesquisar artigos de ajuda...", className: `w-full pl-12 pr-4 py-4 ${Ft}` })
    ] }),
    !e && /* @__PURE__ */ l("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-4", children: o.map(([s, c, d]) => /* @__PURE__ */ S("div", { className: "bg-card rounded-2xl border border-border shadow-card p-5 cursor-pointer hover:shadow-elevated hover:border-primary/30 transition-all group", onClick: () => Xe.info(`Abrir ${c}...`), children: [
      /* @__PURE__ */ l("span", { className: "text-3xl group-hover:scale-110 inline-block transition-transform", children: s }),
      /* @__PURE__ */ l("p", { className: "text-sm font-display font-black uppercase text-foreground mt-2", children: c }),
      /* @__PURE__ */ S("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: [
        d,
        " artigos"
      ] })
    ] }, c)) }),
    /* @__PURE__ */ S("div", { className: "space-y-2.5", children: [
      /* @__PURE__ */ l("h3", { className: "text-[10px] font-display font-black uppercase tracking-widest text-foreground border-l-4 border-primary pl-3", children: "Perguntas Frequentes" }),
      i.map(([s, c], d) => /* @__PURE__ */ S("div", { className: "bg-card rounded-2xl border border-border shadow-card overflow-hidden", children: [
        /* @__PURE__ */ S("button", { onClick: () => n(r === d ? null : d), className: "w-full flex items-center justify-between px-5 py-4 text-left", children: [
          /* @__PURE__ */ l("span", { className: "text-sm font-display font-black text-foreground uppercase pr-4", children: s }),
          /* @__PURE__ */ l(ia, { size: 17, className: `text-muted-foreground shrink-0 transition-transform duration-300 ${r === d ? "rotate-180" : ""}` })
        ] }),
        /* @__PURE__ */ l(na, { children: r === d && /* @__PURE__ */ l(rt.div, { initial: { height: 0 }, animate: { height: "auto" }, exit: { height: 0 }, className: "overflow-hidden", children: /* @__PURE__ */ l("div", { className: "px-5 pb-5 pt-3 border-t border-border/50", children: /* @__PURE__ */ l("p", { className: "text-sm text-muted-foreground leading-relaxed", children: c }) }) }) })
      ] }, d)),
      i.length === 0 && /* @__PURE__ */ S("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ l("p", { className: "font-display font-black text-foreground uppercase", children: "Nenhum resultado" }),
        /* @__PURE__ */ l("p", { className: "text-sm text-muted-foreground mt-1", children: "Tente outros termos" })
      ] })
    ] }),
    /* @__PURE__ */ l("div", { className: "bg-gradient-to-r from-primary/5 to-info/5 border border-primary/20 rounded-3xl p-6 sm:p-8", children: /* @__PURE__ */ S("div", { className: "flex flex-col sm:flex-row items-center gap-5", children: [
      /* @__PURE__ */ l("div", { className: "w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl shrink-0", children: "💬" }),
      /* @__PURE__ */ S("div", { className: "flex-1 text-center sm:text-left", children: [
        /* @__PURE__ */ l("p", { className: "font-display font-black text-foreground uppercase", children: "Não encontrou resposta?" }),
        /* @__PURE__ */ l("p", { className: "text-sm text-muted-foreground mt-1", children: "Suporte disponível 7 dias/semana · 8h–22h" })
      ] }),
      /* @__PURE__ */ S("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ S(Ce, { size: "sm", className: "rounded-2xl gap-2", onClick: () => Xe.info("Chat ao vivo..."), children: [
          /* @__PURE__ */ l(bE, { size: 14 }),
          "Chat ao Vivo"
        ] }),
        /* @__PURE__ */ S(Ce, { size: "sm", variant: "outline", className: "rounded-2xl gap-2", onClick: () => Xe.info("Email..."), children: [
          /* @__PURE__ */ l(Sh, { size: 14 }),
          "Email"
        ] })
      ] })
    ] }) })
  ] });
};
export {
  JY as Accordion,
  TT as AccordionContent,
  _T as AccordionItem,
  RT as AccordionTrigger,
  pX as AdminDashboardView,
  uN as Alert,
  pN as AlertDescription,
  Tq as AlertDialog,
  ZG as AlertDialogAction,
  QG as AlertDialogCancel,
  UG as AlertDialogContent,
  XG as AlertDialogDescription,
  YG as AlertDialogFooter,
  KG as AlertDialogHeader,
  qG as AlertDialogTitle,
  Mq as AlertDialogTrigger,
  fN as AlertTitle,
  _q as AspectRatio,
  LK as Avatar,
  zK as AvatarFallback,
  FK as AvatarImage,
  LY as Badge,
  $T as Breadcrumb,
  FT as BreadcrumbItem,
  zT as BreadcrumbLink,
  LT as BreadcrumbList,
  BT as BreadcrumbPage,
  jT as BreadcrumbSeparator,
  Ce as Button,
  nL as Calendar,
  eN as Card,
  oN as CardContent,
  nN as CardDescription,
  aN as CardFooter,
  tN as CardHeader,
  rN as CardTitle,
  FL as Carousel,
  zL as CarouselContent,
  BL as CarouselItem,
  HL as CarouselNext,
  jL as CarouselPrevious,
  _G as ChartContainer,
  Pq as ChartLegend,
  MG as ChartLegendContent,
  RG as ChartStyle,
  Eq as ChartTooltip,
  TG as ChartTooltipContent,
  eP as Checkbox,
  hq as Collapsible,
  vq as CollapsibleContent,
  gq as CollapsibleTrigger,
  mx as Command,
  Nq as CommandDialog,
  x5 as CommandEmpty,
  C5 as CommandGroup,
  y5 as CommandInput,
  N5 as CommandItem,
  w5 as CommandList,
  S5 as CommandSeparator,
  E5 as CommandShortcut,
  kq as ContextMenu,
  NU as ContextMenuCheckboxItem,
  CU as ContextMenuContent,
  Oq as ContextMenuGroup,
  SU as ContextMenuItem,
  PU as ContextMenuLabel,
  EU as ContextMenuRadioItem,
  _U as ContextMenuSeparator,
  RU as ContextMenuShortcut,
  Iq as ContextMenuSub,
  xU as ContextMenuSubContent,
  wU as ContextMenuSubTrigger,
  Dq as ContextMenuTrigger,
  sX as CuidadorDetailView,
  p5 as Dialog,
  Sq as DialogClose,
  px as DialogContent,
  b5 as DialogDescription,
  g5 as DialogFooter,
  h5 as DialogHeader,
  fx as DialogOverlay,
  m5 as DialogPortal,
  v5 as DialogTitle,
  Cq as DialogTrigger,
  tX as DocCard,
  hD as Drawer,
  mq as DrawerClose,
  vD as DrawerContent,
  xD as DrawerDescription,
  yD as DrawerFooter,
  bD as DrawerHeader,
  Jw as DrawerOverlay,
  gD as DrawerPortal,
  wD as DrawerTitle,
  pq as DrawerTrigger,
  Lq as DropdownMenu,
  eK as DropdownMenuCheckboxItem,
  QU as DropdownMenuContent,
  zq as DropdownMenuGroup,
  JU as DropdownMenuItem,
  rK as DropdownMenuLabel,
  Bq as DropdownMenuPortal,
  Hq as DropdownMenuRadioGroup,
  tK as DropdownMenuRadioItem,
  nK as DropdownMenuSeparator,
  oK as DropdownMenuShortcut,
  jq as DropdownMenuSub,
  ZU as DropdownMenuSubContent,
  XU as DropdownMenuSubTrigger,
  Fq as DropdownMenuTrigger,
  Qq as EvyraHeader,
  Jq as EvyraSidebar,
  lX as FamilySetupView,
  jY as Form,
  UE as FormControl,
  KE as FormDescription,
  HY as FormField,
  VE as FormItem,
  GE as FormLabel,
  YE as FormMessage,
  mX as HelpCenterView,
  Yq as HoverCard,
  RK as HoverCardContent,
  qq as HoverCardTrigger,
  Gm as Input,
  iT as InputOTP,
  sT as InputOTPGroup,
  cT as InputOTPSeparator,
  lT as InputOTPSlot,
  cX as KYCView,
  Ym as Label,
  nX as LoginView,
  pA as Menubar,
  yA as MenubarCheckboxItem,
  vA as MenubarContent,
  sq as MenubarGroup,
  bA as MenubarItem,
  xA as MenubarLabel,
  iq as MenubarMenu,
  wA as MenubarRadioItem,
  CA as MenubarSeparator,
  SA as MenubarShortcut,
  lq as MenubarSub,
  gA as MenubarSubContent,
  hA as MenubarSubTrigger,
  mA as MenubarTrigger,
  uM as NavigationMenu,
  hM as NavigationMenuContent,
  nq as NavigationMenuItem,
  oq as NavigationMenuLink,
  fM as NavigationMenuList,
  mM as NavigationMenuTrigger,
  iX as NotificacoesView,
  dX as NovaDemandaView,
  uX as NovoContratoView,
  HT as Pagination,
  WT as PaginationContent,
  KT as PaginationEllipsis,
  VT as PaginationItem,
  kd as PaginationLink,
  UT as PaginationNext,
  GT as PaginationPrevious,
  Vq as Popover,
  bK as PopoverContent,
  Gq as PopoverTrigger,
  eX as ProfileModal,
  WE as Progress,
  fX as ProposalFlowView,
  NP as RadioGroup,
  EP as RadioGroupItem,
  oX as RegisterView,
  xq as ResizableHandle,
  wq as ResizablePanel,
  yq as ResizablePanelGroup,
  ID as ScrollArea,
  p0 as ScrollBar,
  En as SectionHeader,
  UY as Select,
  uR as SelectContent,
  KY as SelectGroup,
  pR as SelectItem,
  fR as SelectLabel,
  Cv as SelectScrollDownButton,
  xv as SelectScrollUpButton,
  mR as SelectSeparator,
  dR as SelectTrigger,
  YY as SelectValue,
  dw as Separator,
  FA as Sheet,
  dq as SheetClose,
  Tw as SheetContent,
  VA as SheetDescription,
  HA as SheetFooter,
  jA as SheetHeader,
  Rw as SheetOverlay,
  zA as SheetPortal,
  WA as SheetTitle,
  cq as SheetTrigger,
  wk as Sidebar,
  Rk as SidebarContent,
  Pk as SidebarFooter,
  Tk as SidebarGroup,
  Ak as SidebarGroupAction,
  kk as SidebarGroupContent,
  Mk as SidebarGroupLabel,
  Ek as SidebarHeader,
  Sk as SidebarInset,
  Dk as SidebarMenu,
  Fk as SidebarMenuBadge,
  $k as SidebarMenuButton,
  Ok as SidebarMenuItem,
  zk as SidebarMenuSkeleton,
  Bk as SidebarMenuSub,
  Hk as SidebarMenuSubButton,
  jk as SidebarMenuSubItem,
  yk as SidebarProvider,
  Ck as SidebarRail,
  xk as SidebarTrigger,
  Nf as Skeleton,
  DR as Slider,
  rX as StatBlock,
  zR as Switch,
  cO as Table,
  uO as TableBody,
  gO as TableCaption,
  hO as TableCell,
  fO as TableFooter,
  mO as TableHead,
  dO as TableHeader,
  pO as TableRow,
  tq as Tabs,
  IT as TabsContent,
  DT as TabsList,
  OT as TabsTrigger,
  qE as Textarea,
  Zq as ThemeProvider,
  Ph as Toast,
  TE as ToastAction,
  zY as Toaster,
  BR as Toggle,
  GR as ToggleGroup,
  UR as ToggleGroupItem,
  uk as Tooltip,
  Fw as TooltipContent,
  dk as TooltipProvider,
  fk as TooltipTrigger,
  aX as WalletView,
  cN as badgeVariants,
  jn as buttonVariants,
  T as cn,
  pM as navigationMenuTriggerStyle,
  OE as toast,
  Uv as toggleVariants,
  NA as useIsMobile,
  xs as useSidebar,
  BK as useTheme,
  IE as useToast
};
//# sourceMappingURL=bloom-elements.esm.js.map
