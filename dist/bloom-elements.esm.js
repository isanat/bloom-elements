"use client";
import { jsx as e, jsxs as d, Fragment as xe } from "react/jsx-runtime";
import * as i from "react";
import ja, { useState as I, createContext as Ea, useEffect as Me, useContext as La, useRef as He, forwardRef as Fa } from "react";
import { Slot as K } from "@radix-ui/react-slot";
import { cva as O } from "class-variance-authority";
import { clsx as Ba } from "clsx";
import { twMerge as Ga } from "tailwind-merge";
import * as Qe from "@radix-ui/react-label";
import * as j from "@radix-ui/react-toast";
import { X as ee, Check as $, Circle as ve, ChevronDown as ye, ChevronUp as Va, Dot as Ha, ChevronRight as W, ChevronLeft as Xe, MoreHorizontal as Oa, PanelLeft as $a, GripVertical as Ka, ArrowLeft as Ya, ArrowRight as Ua, Search as ne, Mail as qa, Lock as Wa, EyeOff as Ja, Eye as Qa, Loader2 as Ze, Users as V, Heart as H, Menu as ea, Sun as Xa, Moon as Za, Bell as be, Clock as Le, FileText as B, MessageSquare as he, CheckCircle as aa, Settings as et, LogOut as at, BarChart3 as Oe, LayoutDashboard as $e, Briefcase as se, Zap as Se, Wallet as me, ShieldCheck as ae, CreditCard as Te, Key as tt, UserPlus as rt, Shield as ot, Calendar as st, Stethoscope as it, AlertTriangle as nt, Star as de, HelpCircle as dt, Layers as Ke, Globe as lt, Palette as ct, Smartphone as mt, Sparkles as ut, Box as pt, CircleDot as ft, Type as gt, Ruler as bt, MapPin as ht, Award as xt, Phone as vt, ArrowUp as yt, ArrowDown as Nt, Scale as wt, Receipt as Ct } from "lucide-react";
import * as Ae from "@radix-ui/react-progress";
import { FormProvider as kt, Controller as Rt, useFormContext as St } from "react-hook-form";
import * as _e from "@radix-ui/react-checkbox";
import * as le from "@radix-ui/react-radio-group";
import * as k from "@radix-ui/react-select";
import * as oe from "@radix-ui/react-slider";
import * as je from "@radix-ui/react-switch";
import * as ta from "@radix-ui/react-toggle";
import * as Ne from "@radix-ui/react-toggle-group";
import { OTPInput as Tt, OTPInputContext as Pt } from "input-otp";
import * as q from "@radix-ui/react-accordion";
import * as J from "@radix-ui/react-tabs";
import * as D from "@radix-ui/react-navigation-menu";
import * as h from "@radix-ui/react-menubar";
import * as ra from "@radix-ui/react-separator";
import * as x from "@radix-ui/react-dialog";
import * as ue from "@radix-ui/react-tooltip";
import { Drawer as F } from "vaul";
import * as Fe from "@radix-ui/react-collapsible";
import * as U from "@radix-ui/react-scroll-area";
import * as Be from "react-resizable-panels";
import { DayPicker as zt } from "react-day-picker";
import It from "embla-carousel-react";
import { Command as M } from "cmdk";
import * as Ge from "recharts";
import * as Dt from "@radix-ui/react-aspect-ratio";
import * as z from "@radix-ui/react-alert-dialog";
import * as C from "@radix-ui/react-context-menu";
import * as N from "@radix-ui/react-dropdown-menu";
import * as ce from "@radix-ui/react-popover";
import * as we from "@radix-ui/react-hover-card";
import * as te from "@radix-ui/react-avatar";
import { toast as P } from "sonner";
import { motion as E, AnimatePresence as Mt } from "framer-motion";
import { NavLink as At } from "react-router-dom";
function o(...a) {
  return Ga(Ba(a));
}
const Z = O(
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
), _ = i.forwardRef(
  ({ className: a, variant: t, size: r, asChild: s = !1, ...n }, c) => /* @__PURE__ */ e(s ? K : "button", { className: o(Z({ variant: t, size: r, className: a })), ref: c, ...n })
);
_.displayName = "Button";
const _t = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e("div", { ref: r, className: o("rounded-lg border bg-card text-card-foreground shadow-sm", a), ...t }));
_t.displayName = "Card";
const jt = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e("div", { ref: r, className: o("flex flex-col space-y-1.5 p-6", a), ...t })
);
jt.displayName = "CardHeader";
const Et = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e("h3", { ref: r, className: o("text-2xl font-semibold leading-none tracking-tight", a), ...t })
);
Et.displayName = "CardTitle";
const Lt = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e("p", { ref: r, className: o("text-sm text-muted-foreground", a), ...t })
);
Lt.displayName = "CardDescription";
const Ft = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e("div", { ref: r, className: o("p-6 pt-0", a), ...t })
);
Ft.displayName = "CardContent";
const Bt = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e("div", { ref: r, className: o("flex items-center p-6 pt-0", a), ...t })
);
Bt.displayName = "CardFooter";
const oa = i.forwardRef(
  ({ className: a, type: t, ...r }, s) => /* @__PURE__ */ e(
    "input",
    {
      type: t,
      className: o(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        a
      ),
      ref: s,
      ...r
    }
  )
);
oa.displayName = "Input";
const Gt = O("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), sa = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(Qe.Root, { ref: r, className: o(Gt(), a), ...t }));
sa.displayName = Qe.Root.displayName;
const Vt = O(
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
function Bi({ className: a, variant: t, ...r }) {
  return /* @__PURE__ */ e("div", { className: o(Vt({ variant: t }), a), ...r });
}
const Ht = O(
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
), Ot = i.forwardRef(({ className: a, variant: t, ...r }, s) => /* @__PURE__ */ e("div", { ref: s, role: "alert", className: o(Ht({ variant: t }), a), ...r }));
Ot.displayName = "Alert";
const $t = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e("h5", { ref: r, className: o("mb-1 font-medium leading-none tracking-tight", a), ...t })
);
$t.displayName = "AlertTitle";
const Kt = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e("div", { ref: r, className: o("text-sm [&_p]:leading-relaxed", a), ...t })
);
Kt.displayName = "AlertDescription";
const Yt = j.Provider, ia = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  j.Viewport,
  {
    ref: r,
    className: o(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      a
    ),
    ...t
  }
));
ia.displayName = j.Viewport.displayName;
const Ut = O(
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
), na = i.forwardRef(({ className: a, variant: t, ...r }, s) => /* @__PURE__ */ e(j.Root, { ref: s, className: o(Ut({ variant: t }), a), ...r }));
na.displayName = j.Root.displayName;
const qt = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  j.Action,
  {
    ref: r,
    className: o(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      a
    ),
    ...t
  }
));
qt.displayName = j.Action.displayName;
const da = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  j.Close,
  {
    ref: r,
    className: o(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      a
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ e(ee, { className: "h-4 w-4" })
  }
));
da.displayName = j.Close.displayName;
const la = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(j.Title, { ref: r, className: o("text-sm font-semibold", a), ...t }));
la.displayName = j.Title.displayName;
const ca = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(j.Description, { ref: r, className: o("text-sm opacity-90", a), ...t }));
ca.displayName = j.Description.displayName;
const Wt = 1, Jt = 1e6;
let Pe = 0;
function Qt() {
  return Pe = (Pe + 1) % Number.MAX_SAFE_INTEGER, Pe.toString();
}
const ze = /* @__PURE__ */ new Map(), Ye = (a) => {
  if (ze.has(a))
    return;
  const t = setTimeout(() => {
    ze.delete(a), ie({
      type: "REMOVE_TOAST",
      toastId: a
    });
  }, Jt);
  ze.set(a, t);
}, Xt = (a, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...a,
        toasts: [t.toast, ...a.toasts].slice(0, Wt)
      };
    case "UPDATE_TOAST":
      return {
        ...a,
        toasts: a.toasts.map((r) => r.id === t.toast.id ? { ...r, ...t.toast } : r)
      };
    case "DISMISS_TOAST": {
      const { toastId: r } = t;
      return r ? Ye(r) : a.toasts.forEach((s) => {
        Ye(s.id);
      }), {
        ...a,
        toasts: a.toasts.map(
          (s) => s.id === r || r === void 0 ? {
            ...s,
            open: !1
          } : s
        )
      };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? {
        ...a,
        toasts: []
      } : {
        ...a,
        toasts: a.toasts.filter((r) => r.id !== t.toastId)
      };
  }
}, fe = [];
let ge = { toasts: [] };
function ie(a) {
  ge = Xt(ge, a), fe.forEach((t) => {
    t(ge);
  });
}
function Zt({ ...a }) {
  const t = Qt(), r = (n) => ie({
    type: "UPDATE_TOAST",
    toast: { ...n, id: t }
  }), s = () => ie({ type: "DISMISS_TOAST", toastId: t });
  return ie({
    type: "ADD_TOAST",
    toast: {
      ...a,
      id: t,
      open: !0,
      onOpenChange: (n) => {
        n || s();
      }
    }
  }), {
    id: t,
    dismiss: s,
    update: r
  };
}
function er() {
  const [a, t] = i.useState(ge);
  return i.useEffect(() => (fe.push(t), () => {
    const r = fe.indexOf(t);
    r > -1 && fe.splice(r, 1);
  }), [a]), {
    ...a,
    toast: Zt,
    dismiss: (r) => ie({ type: "DISMISS_TOAST", toastId: r })
  };
}
function Gi() {
  const { toasts: a } = er();
  return /* @__PURE__ */ d(Yt, { children: [
    a.map(function({ id: t, title: r, description: s, action: n, ...c }) {
      return /* @__PURE__ */ d(na, { ...c, children: [
        /* @__PURE__ */ d("div", { className: "grid gap-1", children: [
          r && /* @__PURE__ */ e(la, { children: r }),
          s && /* @__PURE__ */ e(ca, { children: s })
        ] }),
        n,
        /* @__PURE__ */ e(da, {})
      ] }, t);
    }),
    /* @__PURE__ */ e(ia, {})
  ] });
}
const ar = i.forwardRef(({ className: a, value: t, ...r }, s) => /* @__PURE__ */ e(
  Ae.Root,
  {
    ref: s,
    className: o("relative h-4 w-full overflow-hidden rounded-full bg-secondary", a),
    ...r,
    children: /* @__PURE__ */ e(
      Ae.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
ar.displayName = Ae.Root.displayName;
function Ue({ className: a, ...t }) {
  return /* @__PURE__ */ e("div", { className: o("animate-pulse rounded-md bg-muted", a), ...t });
}
const Vi = kt, ma = i.createContext({}), Hi = ({
  ...a
}) => /* @__PURE__ */ e(ma.Provider, { value: { name: a.name }, children: /* @__PURE__ */ e(Rt, { ...a }) }), Ce = () => {
  const a = i.useContext(ma), t = i.useContext(ua), { getFieldState: r, formState: s } = St(), n = r(a.name, s);
  if (!a)
    throw new Error("useFormField should be used within <FormField>");
  const { id: c } = t;
  return {
    id: c,
    name: a.name,
    formItemId: `${c}-form-item`,
    formDescriptionId: `${c}-form-item-description`,
    formMessageId: `${c}-form-item-message`,
    ...n
  };
}, ua = i.createContext({}), tr = i.forwardRef(
  ({ className: a, ...t }, r) => {
    const s = i.useId();
    return /* @__PURE__ */ e(ua.Provider, { value: { id: s }, children: /* @__PURE__ */ e("div", { ref: r, className: o("space-y-2", a), ...t }) });
  }
);
tr.displayName = "FormItem";
const rr = i.forwardRef(({ className: a, ...t }, r) => {
  const { error: s, formItemId: n } = Ce();
  return /* @__PURE__ */ e(sa, { ref: r, className: o(s && "text-destructive", a), htmlFor: n, ...t });
});
rr.displayName = "FormLabel";
const or = i.forwardRef(
  ({ ...a }, t) => {
    const { error: r, formItemId: s, formDescriptionId: n, formMessageId: c } = Ce();
    return /* @__PURE__ */ e(
      K,
      {
        ref: t,
        id: s,
        "aria-describedby": r ? `${n} ${c}` : `${n}`,
        "aria-invalid": !!r,
        ...a
      }
    );
  }
);
or.displayName = "FormControl";
const sr = i.forwardRef(
  ({ className: a, ...t }, r) => {
    const { formDescriptionId: s } = Ce();
    return /* @__PURE__ */ e("p", { ref: r, id: s, className: o("text-sm text-muted-foreground", a), ...t });
  }
);
sr.displayName = "FormDescription";
const ir = i.forwardRef(
  ({ className: a, children: t, ...r }, s) => {
    const { error: n, formMessageId: c } = Ce(), l = n ? String(n == null ? void 0 : n.message) : t;
    return l ? /* @__PURE__ */ e("p", { ref: s, id: c, className: o("text-sm font-medium text-destructive", a), ...r, children: l }) : null;
  }
);
ir.displayName = "FormMessage";
const nr = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  "textarea",
  {
    className: o(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      a
    ),
    ref: r,
    ...t
  }
));
nr.displayName = "Textarea";
const dr = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  _e.Root,
  {
    ref: r,
    className: o(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      a
    ),
    ...t,
    children: /* @__PURE__ */ e(_e.Indicator, { className: o("flex items-center justify-center text-current"), children: /* @__PURE__ */ e($, { className: "h-4 w-4" }) })
  }
));
dr.displayName = _e.Root.displayName;
const lr = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(le.Root, { className: o("grid gap-2", a), ...t, ref: r }));
lr.displayName = le.Root.displayName;
const cr = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  le.Item,
  {
    ref: r,
    className: o(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      a
    ),
    ...t,
    children: /* @__PURE__ */ e(le.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ e(ve, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
cr.displayName = le.Item.displayName;
const Oi = k.Root, $i = k.Group, Ki = k.Value, mr = i.forwardRef(({ className: a, children: t, ...r }, s) => /* @__PURE__ */ d(
  k.Trigger,
  {
    ref: s,
    className: o(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      a
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ e(k.Icon, { asChild: !0, children: /* @__PURE__ */ e(ye, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
mr.displayName = k.Trigger.displayName;
const pa = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  k.ScrollUpButton,
  {
    ref: r,
    className: o("flex cursor-default items-center justify-center py-1", a),
    ...t,
    children: /* @__PURE__ */ e(Va, { className: "h-4 w-4" })
  }
));
pa.displayName = k.ScrollUpButton.displayName;
const fa = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  k.ScrollDownButton,
  {
    ref: r,
    className: o("flex cursor-default items-center justify-center py-1", a),
    ...t,
    children: /* @__PURE__ */ e(ye, { className: "h-4 w-4" })
  }
));
fa.displayName = k.ScrollDownButton.displayName;
const ur = i.forwardRef(({ className: a, children: t, position: r = "popper", ...s }, n) => /* @__PURE__ */ e(k.Portal, { children: /* @__PURE__ */ d(
  k.Content,
  {
    ref: n,
    className: o(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      a
    ),
    position: r,
    ...s,
    children: [
      /* @__PURE__ */ e(pa, {}),
      /* @__PURE__ */ e(
        k.Viewport,
        {
          className: o(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ e(fa, {})
    ]
  }
) }));
ur.displayName = k.Content.displayName;
const pr = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(k.Label, { ref: r, className: o("py-1.5 pl-8 pr-2 text-sm font-semibold", a), ...t }));
pr.displayName = k.Label.displayName;
const fr = i.forwardRef(({ className: a, children: t, ...r }, s) => /* @__PURE__ */ d(
  k.Item,
  {
    ref: s,
    className: o(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      a
    ),
    ...r,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(k.ItemIndicator, { children: /* @__PURE__ */ e($, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ e(k.ItemText, { children: t })
    ]
  }
));
fr.displayName = k.Item.displayName;
const gr = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(k.Separator, { ref: r, className: o("-mx-1 my-1 h-px bg-muted", a), ...t }));
gr.displayName = k.Separator.displayName;
const br = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ d(
  oe.Root,
  {
    ref: r,
    className: o("relative flex w-full touch-none select-none items-center", a),
    ...t,
    children: [
      /* @__PURE__ */ e(oe.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ e(oe.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ e(oe.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
br.displayName = oe.Root.displayName;
const hr = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  je.Root,
  {
    className: o(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      a
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ e(
      je.Thumb,
      {
        className: o(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
hr.displayName = je.Root.displayName;
const ga = O(
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
), xr = i.forwardRef(({ className: a, variant: t, size: r, ...s }, n) => /* @__PURE__ */ e(ta.Root, { ref: n, className: o(ga({ variant: t, size: r, className: a })), ...s }));
xr.displayName = ta.Root.displayName;
const ba = i.createContext({
  size: "default",
  variant: "default"
}), vr = i.forwardRef(({ className: a, variant: t, size: r, children: s, ...n }, c) => /* @__PURE__ */ e(Ne.Root, { ref: c, className: o("flex items-center justify-center gap-1", a), ...n, children: /* @__PURE__ */ e(ba.Provider, { value: { variant: t, size: r }, children: s }) }));
vr.displayName = Ne.Root.displayName;
const yr = i.forwardRef(({ className: a, children: t, variant: r, size: s, ...n }, c) => {
  const l = i.useContext(ba);
  return /* @__PURE__ */ e(
    Ne.Item,
    {
      ref: c,
      className: o(
        ga({
          variant: l.variant || r,
          size: l.size || s
        }),
        a
      ),
      ...n,
      children: t
    }
  );
});
yr.displayName = Ne.Item.displayName;
const Nr = i.forwardRef(
  ({ className: a, containerClassName: t, ...r }, s) => /* @__PURE__ */ e(
    Tt,
    {
      ref: s,
      containerClassName: o("flex items-center gap-2 has-[:disabled]:opacity-50", t),
      className: o("disabled:cursor-not-allowed", a),
      ...r
    }
  )
);
Nr.displayName = "InputOTP";
const wr = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e("div", { ref: r, className: o("flex items-center", a), ...t })
);
wr.displayName = "InputOTPGroup";
const Cr = i.forwardRef(({ index: a, className: t, ...r }, s) => {
  const n = i.useContext(Pt), { char: c, hasFakeCaret: l, isActive: f } = n.slots[a];
  return /* @__PURE__ */ d(
    "div",
    {
      ref: s,
      className: o(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        f && "z-10 ring-2 ring-ring ring-offset-background",
        t
      ),
      ...r,
      children: [
        c,
        l && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ e("div", { className: "animate-caret-blink h-4 w-px bg-foreground duration-1000" }) })
      ]
    }
  );
});
Cr.displayName = "InputOTPSlot";
const kr = i.forwardRef(
  ({ ...a }, t) => /* @__PURE__ */ e("div", { ref: t, role: "separator", ...a, children: /* @__PURE__ */ e(Ha, {}) })
);
kr.displayName = "InputOTPSeparator";
const Yi = q.Root, Rr = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(q.Item, { ref: r, className: o("border-b", a), ...t }));
Rr.displayName = "AccordionItem";
const Sr = i.forwardRef(({ className: a, children: t, ...r }, s) => /* @__PURE__ */ e(q.Header, { className: "flex", children: /* @__PURE__ */ d(
  q.Trigger,
  {
    ref: s,
    className: o(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      a
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ e(ye, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
Sr.displayName = q.Trigger.displayName;
const Tr = i.forwardRef(({ className: a, children: t, ...r }, s) => /* @__PURE__ */ e(
  q.Content,
  {
    ref: s,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...r,
    children: /* @__PURE__ */ e("div", { className: o("pb-4 pt-0", a), children: t })
  }
));
Tr.displayName = q.Content.displayName;
const Ui = J.Root, Pr = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  J.List,
  {
    ref: r,
    className: o(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      a
    ),
    ...t
  }
));
Pr.displayName = J.List.displayName;
const zr = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  J.Trigger,
  {
    ref: r,
    className: o(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      a
    ),
    ...t
  }
));
zr.displayName = J.Trigger.displayName;
const Ir = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  J.Content,
  {
    ref: r,
    className: o(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      a
    ),
    ...t
  }
));
Ir.displayName = J.Content.displayName;
const Dr = i.forwardRef(({ ...a }, t) => /* @__PURE__ */ e("nav", { ref: t, "aria-label": "breadcrumb", ...a }));
Dr.displayName = "Breadcrumb";
const Mr = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e(
    "ol",
    {
      ref: r,
      className: o(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        a
      ),
      ...t
    }
  )
);
Mr.displayName = "BreadcrumbList";
const Ar = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e("li", { ref: r, className: o("inline-flex items-center gap-1.5", a), ...t })
);
Ar.displayName = "BreadcrumbItem";
const _r = i.forwardRef(({ asChild: a, className: t, ...r }, s) => /* @__PURE__ */ e(a ? K : "a", { ref: s, className: o("transition-colors hover:text-foreground", t), ...r }));
_r.displayName = "BreadcrumbLink";
const jr = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e(
    "span",
    {
      ref: r,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: o("font-normal text-foreground", a),
      ...t
    }
  )
);
jr.displayName = "BreadcrumbPage";
const Er = ({ children: a, className: t, ...r }) => /* @__PURE__ */ e("li", { role: "presentation", "aria-hidden": "true", className: o("[&>svg]:size-3.5", t), ...r, children: a ?? /* @__PURE__ */ e(W, {}) });
Er.displayName = "BreadcrumbSeparator";
const Lr = ({ className: a, ...t }) => /* @__PURE__ */ e(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: o("mx-auto flex w-full justify-center", a),
    ...t
  }
);
Lr.displayName = "Pagination";
const Fr = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e("ul", { ref: r, className: o("flex flex-row items-center gap-1", a), ...t })
);
Fr.displayName = "PaginationContent";
const Br = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e("li", { ref: r, className: o("", a), ...t }));
Br.displayName = "PaginationItem";
const Ve = ({ className: a, isActive: t, size: r = "icon", ...s }) => /* @__PURE__ */ e(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: o(
      Z({
        variant: t ? "outline" : "ghost",
        size: r
      }),
      a
    ),
    ...s
  }
);
Ve.displayName = "PaginationLink";
const Gr = ({ className: a, ...t }) => /* @__PURE__ */ d(Ve, { "aria-label": "Go to previous page", size: "default", className: o("gap-1 pl-2.5", a), ...t, children: [
  /* @__PURE__ */ e(Xe, { className: "h-4 w-4" }),
  /* @__PURE__ */ e("span", { children: "Previous" })
] });
Gr.displayName = "PaginationPrevious";
const Vr = ({ className: a, ...t }) => /* @__PURE__ */ d(Ve, { "aria-label": "Go to next page", size: "default", className: o("gap-1 pr-2.5", a), ...t, children: [
  /* @__PURE__ */ e("span", { children: "Next" }),
  /* @__PURE__ */ e(W, { className: "h-4 w-4" })
] });
Vr.displayName = "PaginationNext";
const Hr = ({ className: a, ...t }) => /* @__PURE__ */ d("span", { "aria-hidden": !0, className: o("flex h-9 w-9 items-center justify-center", a), ...t, children: [
  /* @__PURE__ */ e(Oa, { className: "h-4 w-4" }),
  /* @__PURE__ */ e("span", { className: "sr-only", children: "More pages" })
] });
Hr.displayName = "PaginationEllipsis";
const Or = i.forwardRef(({ className: a, children: t, ...r }, s) => /* @__PURE__ */ d(
  D.Root,
  {
    ref: s,
    className: o("relative z-10 flex max-w-max flex-1 items-center justify-center", a),
    ...r,
    children: [
      t,
      /* @__PURE__ */ e(ha, {})
    ]
  }
));
Or.displayName = D.Root.displayName;
const $r = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  D.List,
  {
    ref: r,
    className: o("group flex flex-1 list-none items-center justify-center space-x-1", a),
    ...t
  }
));
$r.displayName = D.List.displayName;
const qi = D.Item, Kr = O(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), Yr = i.forwardRef(({ className: a, children: t, ...r }, s) => /* @__PURE__ */ d(
  D.Trigger,
  {
    ref: s,
    className: o(Kr(), "group", a),
    ...r,
    children: [
      t,
      " ",
      /* @__PURE__ */ e(
        ye,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
Yr.displayName = D.Trigger.displayName;
const Ur = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  D.Content,
  {
    ref: r,
    className: o(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      a
    ),
    ...t
  }
));
Ur.displayName = D.Content.displayName;
const Wi = D.Link, ha = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e("div", { className: o("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ e(
  D.Viewport,
  {
    className: o(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      a
    ),
    ref: r,
    ...t
  }
) }));
ha.displayName = D.Viewport.displayName;
const qr = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  D.Indicator,
  {
    ref: r,
    className: o(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      a
    ),
    ...t,
    children: /* @__PURE__ */ e("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
qr.displayName = D.Indicator.displayName;
const Ji = h.Menu, Qi = h.Group, Xi = h.Sub, Wr = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  h.Root,
  {
    ref: r,
    className: o("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", a),
    ...t
  }
));
Wr.displayName = h.Root.displayName;
const Jr = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  h.Trigger,
  {
    ref: r,
    className: o(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      a
    ),
    ...t
  }
));
Jr.displayName = h.Trigger.displayName;
const Qr = i.forwardRef(({ className: a, inset: t, children: r, ...s }, n) => /* @__PURE__ */ d(
  h.SubTrigger,
  {
    ref: n,
    className: o(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      a
    ),
    ...s,
    children: [
      r,
      /* @__PURE__ */ e(W, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Qr.displayName = h.SubTrigger.displayName;
const Xr = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  h.SubContent,
  {
    ref: r,
    className: o(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a
    ),
    ...t
  }
));
Xr.displayName = h.SubContent.displayName;
const Zr = i.forwardRef(({ className: a, align: t = "start", alignOffset: r = -4, sideOffset: s = 8, ...n }, c) => /* @__PURE__ */ e(h.Portal, { children: /* @__PURE__ */ e(
  h.Content,
  {
    ref: c,
    align: t,
    alignOffset: r,
    sideOffset: s,
    className: o(
      "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a
    ),
    ...n
  }
) }));
Zr.displayName = h.Content.displayName;
const eo = i.forwardRef(({ className: a, inset: t, ...r }, s) => /* @__PURE__ */ e(
  h.Item,
  {
    ref: s,
    className: o(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      a
    ),
    ...r
  }
));
eo.displayName = h.Item.displayName;
const ao = i.forwardRef(({ className: a, children: t, checked: r, ...s }, n) => /* @__PURE__ */ d(
  h.CheckboxItem,
  {
    ref: n,
    className: o(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      a
    ),
    checked: r,
    ...s,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(h.ItemIndicator, { children: /* @__PURE__ */ e($, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
ao.displayName = h.CheckboxItem.displayName;
const to = i.forwardRef(({ className: a, children: t, ...r }, s) => /* @__PURE__ */ d(
  h.RadioItem,
  {
    ref: s,
    className: o(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      a
    ),
    ...r,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(h.ItemIndicator, { children: /* @__PURE__ */ e(ve, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
to.displayName = h.RadioItem.displayName;
const ro = i.forwardRef(({ className: a, inset: t, ...r }, s) => /* @__PURE__ */ e(
  h.Label,
  {
    ref: s,
    className: o("px-2 py-1.5 text-sm font-semibold", t && "pl-8", a),
    ...r
  }
));
ro.displayName = h.Label.displayName;
const oo = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(h.Separator, { ref: r, className: o("-mx-1 my-1 h-px bg-muted", a), ...t }));
oo.displayName = h.Separator.displayName;
const so = ({ className: a, ...t }) => /* @__PURE__ */ e("span", { className: o("ml-auto text-xs tracking-widest text-muted-foreground", a), ...t });
so.displayname = "MenubarShortcut";
const Ie = 768;
function io() {
  const [a, t] = i.useState(void 0);
  return i.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${Ie - 1}px)`), s = () => {
      t(window.innerWidth < Ie);
    };
    return r.addEventListener("change", s), t(window.innerWidth < Ie), () => r.removeEventListener("change", s);
  }, []), !!a;
}
const xa = i.forwardRef(({ className: a, orientation: t = "horizontal", decorative: r = !0, ...s }, n) => /* @__PURE__ */ e(
  ra.Root,
  {
    ref: n,
    decorative: r,
    orientation: t,
    className: o("shrink-0 bg-border", t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", a),
    ...s
  }
));
xa.displayName = ra.Root.displayName;
const no = x.Root, Zi = x.Trigger, en = x.Close, lo = x.Portal, va = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  x.Overlay,
  {
    className: o(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      a
    ),
    ...t,
    ref: r
  }
));
va.displayName = x.Overlay.displayName;
const co = O(
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
), ya = i.forwardRef(
  ({ side: a = "right", className: t, children: r, ...s }, n) => /* @__PURE__ */ d(lo, { children: [
    /* @__PURE__ */ e(va, {}),
    /* @__PURE__ */ d(x.Content, { ref: n, className: o(co({ side: a }), t), ...s, children: [
      r,
      /* @__PURE__ */ d(x.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
        /* @__PURE__ */ e(ee, { className: "h-4 w-4" }),
        /* @__PURE__ */ e("span", { className: "sr-only", children: "Close" })
      ] })
    ] })
  ] })
);
ya.displayName = x.Content.displayName;
const mo = ({ className: a, ...t }) => /* @__PURE__ */ e("div", { className: o("flex flex-col space-y-2 text-center sm:text-left", a), ...t });
mo.displayName = "SheetHeader";
const uo = ({ className: a, ...t }) => /* @__PURE__ */ e("div", { className: o("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", a), ...t });
uo.displayName = "SheetFooter";
const po = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(x.Title, { ref: r, className: o("text-lg font-semibold text-foreground", a), ...t }));
po.displayName = x.Title.displayName;
const fo = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(x.Description, { ref: r, className: o("text-sm text-muted-foreground", a), ...t }));
fo.displayName = x.Description.displayName;
const go = ue.Provider, bo = ue.Root, ho = ue.Trigger, Na = i.forwardRef(({ className: a, sideOffset: t = 4, ...r }, s) => /* @__PURE__ */ e(
  ue.Content,
  {
    ref: s,
    sideOffset: t,
    className: o(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a
    ),
    ...r
  }
));
Na.displayName = ue.Content.displayName;
const xo = "sidebar:state", vo = 60 * 60 * 24 * 7, yo = "16rem", No = "18rem", wo = "3rem", Co = "b", wa = i.createContext(null);
function ke() {
  const a = i.useContext(wa);
  if (!a)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return a;
}
const ko = i.forwardRef(({ defaultOpen: a = !0, open: t, onOpenChange: r, className: s, style: n, children: c, ...l }, f) => {
  const g = io(), [u, v] = i.useState(!1), [S, R] = i.useState(a), A = t ?? S, p = i.useCallback(
    (b) => {
      const T = typeof b == "function" ? b(A) : b;
      r ? r(T) : R(T), document.cookie = `${xo}=${T}; path=/; max-age=${vo}`;
    },
    [r, A]
  ), y = i.useCallback(() => g ? v((b) => !b) : p((b) => !b), [g, p, v]);
  i.useEffect(() => {
    const b = (T) => {
      T.key === Co && (T.metaKey || T.ctrlKey) && (T.preventDefault(), y());
    };
    return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
  }, [y]);
  const w = A ? "expanded" : "collapsed", m = i.useMemo(
    () => ({
      state: w,
      open: A,
      setOpen: p,
      isMobile: g,
      openMobile: u,
      setOpenMobile: v,
      toggleSidebar: y
    }),
    [w, A, p, g, u, v, y]
  );
  return /* @__PURE__ */ e(wa.Provider, { value: m, children: /* @__PURE__ */ e(go, { delayDuration: 0, children: /* @__PURE__ */ e(
    "div",
    {
      style: {
        "--sidebar-width": yo,
        "--sidebar-width-icon": wo,
        ...n
      },
      className: o("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", s),
      ref: f,
      ...l,
      children: c
    }
  ) }) });
});
ko.displayName = "SidebarProvider";
const Ro = i.forwardRef(({ side: a = "left", variant: t = "sidebar", collapsible: r = "offcanvas", className: s, children: n, ...c }, l) => {
  const { isMobile: f, state: g, openMobile: u, setOpenMobile: v } = ke();
  return r === "none" ? /* @__PURE__ */ e(
    "div",
    {
      className: o("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", s),
      ref: l,
      ...c,
      children: n
    }
  ) : f ? /* @__PURE__ */ e(no, { open: u, onOpenChange: v, ...c, children: /* @__PURE__ */ e(
    ya,
    {
      "data-sidebar": "sidebar",
      "data-mobile": "true",
      className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
      style: {
        "--sidebar-width": No
      },
      side: a,
      children: /* @__PURE__ */ e("div", { className: "flex h-full w-full flex-col", children: n })
    }
  ) }) : /* @__PURE__ */ d(
    "div",
    {
      ref: l,
      className: "group peer hidden text-sidebar-foreground md:block",
      "data-state": g,
      "data-collapsible": g === "collapsed" ? r : "",
      "data-variant": t,
      "data-side": a,
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: o(
              "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
            )
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            className: o(
              "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
              a === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
              s
            ),
            ...c,
            children: /* @__PURE__ */ e(
              "div",
              {
                "data-sidebar": "sidebar",
                className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                children: n
              }
            )
          }
        )
      ]
    }
  );
});
Ro.displayName = "Sidebar";
const So = i.forwardRef(
  ({ className: a, onClick: t, ...r }, s) => {
    const { toggleSidebar: n } = ke();
    return /* @__PURE__ */ d(
      _,
      {
        ref: s,
        "data-sidebar": "trigger",
        variant: "ghost",
        size: "icon",
        className: o("h-7 w-7", a),
        onClick: (c) => {
          t == null || t(c), n();
        },
        ...r,
        children: [
          /* @__PURE__ */ e($a, {}),
          /* @__PURE__ */ e("span", { className: "sr-only", children: "Toggle Sidebar" })
        ]
      }
    );
  }
);
So.displayName = "SidebarTrigger";
const To = i.forwardRef(
  ({ className: a, ...t }, r) => {
    const { toggleSidebar: s } = ke();
    return /* @__PURE__ */ e(
      "button",
      {
        ref: r,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: s,
        title: "Toggle Sidebar",
        className: o(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 hover:after:bg-sidebar-border sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          a
        ),
        ...t
      }
    );
  }
);
To.displayName = "SidebarRail";
const Po = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  "main",
  {
    ref: r,
    className: o(
      "relative flex min-h-svh flex-1 flex-col bg-background",
      "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
      a
    ),
    ...t
  }
));
Po.displayName = "SidebarInset";
const zo = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e(
    oa,
    {
      ref: r,
      "data-sidebar": "input",
      className: o(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        a
      ),
      ...t
    }
  )
);
zo.displayName = "SidebarInput";
const Io = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e("div", { ref: r, "data-sidebar": "header", className: o("flex flex-col gap-2 p-2", a), ...t }));
Io.displayName = "SidebarHeader";
const Do = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e("div", { ref: r, "data-sidebar": "footer", className: o("flex flex-col gap-2 p-2", a), ...t }));
Do.displayName = "SidebarFooter";
const Mo = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e(
    xa,
    {
      ref: r,
      "data-sidebar": "separator",
      className: o("mx-2 w-auto bg-sidebar-border", a),
      ...t
    }
  )
);
Mo.displayName = "SidebarSeparator";
const Ao = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  "div",
  {
    ref: r,
    "data-sidebar": "content",
    className: o(
      "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      a
    ),
    ...t
  }
));
Ao.displayName = "SidebarContent";
const _o = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  "div",
  {
    ref: r,
    "data-sidebar": "group",
    className: o("relative flex w-full min-w-0 flex-col p-2", a),
    ...t
  }
));
_o.displayName = "SidebarGroup";
const jo = i.forwardRef(
  ({ className: a, asChild: t = !1, ...r }, s) => /* @__PURE__ */ e(
    t ? K : "div",
    {
      ref: s,
      "data-sidebar": "group-label",
      className: o(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        a
      ),
      ...r
    }
  )
);
jo.displayName = "SidebarGroupLabel";
const Eo = i.forwardRef(
  ({ className: a, asChild: t = !1, ...r }, s) => /* @__PURE__ */ e(
    t ? K : "button",
    {
      ref: s,
      "data-sidebar": "group-action",
      className: o(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        a
      ),
      ...r
    }
  )
);
Eo.displayName = "SidebarGroupAction";
const Lo = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e("div", { ref: r, "data-sidebar": "group-content", className: o("w-full text-sm", a), ...t })
);
Lo.displayName = "SidebarGroupContent";
const Fo = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e("ul", { ref: r, "data-sidebar": "menu", className: o("flex w-full min-w-0 flex-col gap-1", a), ...t }));
Fo.displayName = "SidebarMenu";
const Bo = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e("li", { ref: r, "data-sidebar": "menu-item", className: o("group/menu-item relative", a), ...t }));
Bo.displayName = "SidebarMenuItem";
const Go = O(
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
), Vo = i.forwardRef(({ asChild: a = !1, isActive: t = !1, variant: r = "default", size: s = "default", tooltip: n, className: c, ...l }, f) => {
  const g = a ? K : "button", { isMobile: u, state: v } = ke(), S = /* @__PURE__ */ e(
    g,
    {
      ref: f,
      "data-sidebar": "menu-button",
      "data-size": s,
      "data-active": t,
      className: o(Go({ variant: r, size: s }), c),
      ...l
    }
  );
  return n ? (typeof n == "string" && (n = {
    children: n
  }), /* @__PURE__ */ d(bo, { children: [
    /* @__PURE__ */ e(ho, { asChild: !0, children: S }),
    /* @__PURE__ */ e(Na, { side: "right", align: "center", hidden: v !== "collapsed" || u, ...n })
  ] })) : S;
});
Vo.displayName = "SidebarMenuButton";
const Ho = i.forwardRef(({ className: a, asChild: t = !1, showOnHover: r = !1, ...s }, n) => /* @__PURE__ */ e(
  t ? K : "button",
  {
    ref: n,
    "data-sidebar": "menu-action",
    className: o(
      "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      // Increases the hit area of the button on mobile.
      "after:absolute after:-inset-2 after:md:hidden",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      r && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
      a
    ),
    ...s
  }
));
Ho.displayName = "SidebarMenuAction";
const Oo = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      "data-sidebar": "menu-badge",
      className: o(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        a
      ),
      ...t
    }
  )
);
Oo.displayName = "SidebarMenuBadge";
const $o = i.forwardRef(({ className: a, showIcon: t = !1, ...r }, s) => {
  const n = i.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ d(
    "div",
    {
      ref: s,
      "data-sidebar": "menu-skeleton",
      className: o("flex h-8 items-center gap-2 rounded-md px-2", a),
      ...r,
      children: [
        t && /* @__PURE__ */ e(Ue, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ e(
          Ue,
          {
            className: "h-4 max-w-[--skeleton-width] flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": n
            }
          }
        )
      ]
    }
  );
});
$o.displayName = "SidebarMenuSkeleton";
const Ko = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e(
    "ul",
    {
      ref: r,
      "data-sidebar": "menu-sub",
      className: o(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        a
      ),
      ...t
    }
  )
);
Ko.displayName = "SidebarMenuSub";
const Yo = i.forwardRef(({ ...a }, t) => /* @__PURE__ */ e("li", { ref: t, ...a }));
Yo.displayName = "SidebarMenuSubItem";
const Uo = i.forwardRef(({ asChild: a = !1, size: t = "md", isActive: r, className: s, ...n }, c) => /* @__PURE__ */ e(
  a ? K : "a",
  {
    ref: c,
    "data-sidebar": "menu-sub-button",
    "data-size": t,
    "data-active": r,
    className: o(
      "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
      "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
      t === "sm" && "text-xs",
      t === "md" && "text-sm",
      "group-data-[collapsible=icon]:hidden",
      s
    ),
    ...n
  }
));
Uo.displayName = "SidebarMenuSubButton";
const qo = ({ shouldScaleBackground: a = !0, ...t }) => /* @__PURE__ */ e(F.Root, { shouldScaleBackground: a, ...t });
qo.displayName = "Drawer";
const an = F.Trigger, Wo = F.Portal, tn = F.Close, Ca = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(F.Overlay, { ref: r, className: o("fixed inset-0 z-50 bg-black/80", a), ...t }));
Ca.displayName = F.Overlay.displayName;
const Jo = i.forwardRef(({ className: a, children: t, ...r }, s) => /* @__PURE__ */ d(Wo, { children: [
  /* @__PURE__ */ e(Ca, {}),
  /* @__PURE__ */ d(
    F.Content,
    {
      ref: s,
      className: o(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        a
      ),
      ...r,
      children: [
        /* @__PURE__ */ e("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        t
      ]
    }
  )
] }));
Jo.displayName = "DrawerContent";
const Qo = ({ className: a, ...t }) => /* @__PURE__ */ e("div", { className: o("grid gap-1.5 p-4 text-center sm:text-left", a), ...t });
Qo.displayName = "DrawerHeader";
const Xo = ({ className: a, ...t }) => /* @__PURE__ */ e("div", { className: o("mt-auto flex flex-col gap-2 p-4", a), ...t });
Xo.displayName = "DrawerFooter";
const Zo = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  F.Title,
  {
    ref: r,
    className: o("text-lg font-semibold leading-none tracking-tight", a),
    ...t
  }
));
Zo.displayName = F.Title.displayName;
const es = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(F.Description, { ref: r, className: o("text-sm text-muted-foreground", a), ...t }));
es.displayName = F.Description.displayName;
const rn = Fe.Root, on = Fe.CollapsibleTrigger, sn = Fe.CollapsibleContent, as = i.forwardRef(({ className: a, children: t, ...r }, s) => /* @__PURE__ */ d(U.Root, { ref: s, className: o("relative overflow-hidden", a), ...r, children: [
  /* @__PURE__ */ e(U.Viewport, { className: "h-full w-full rounded-[inherit]", children: t }),
  /* @__PURE__ */ e(ka, {}),
  /* @__PURE__ */ e(U.Corner, {})
] }));
as.displayName = U.Root.displayName;
const ka = i.forwardRef(({ className: a, orientation: t = "vertical", ...r }, s) => /* @__PURE__ */ e(
  U.ScrollAreaScrollbar,
  {
    ref: s,
    orientation: t,
    className: o(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      a
    ),
    ...r,
    children: /* @__PURE__ */ e(U.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ka.displayName = U.ScrollAreaScrollbar.displayName;
const nn = ({ className: a, ...t }) => /* @__PURE__ */ e(
  Be.PanelGroup,
  {
    className: o("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", a),
    ...t
  }
), dn = Be.Panel, ln = ({
  withHandle: a,
  className: t,
  ...r
}) => /* @__PURE__ */ e(
  Be.PanelResizeHandle,
  {
    className: o(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      t
    ),
    ...r,
    children: a && /* @__PURE__ */ e("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ e(Ka, { className: "h-2.5 w-2.5" }) })
  }
), ts = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ e("table", { ref: r, className: o("w-full caption-bottom text-sm", a), ...t }) })
);
ts.displayName = "Table";
const rs = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e("thead", { ref: r, className: o("[&_tr]:border-b", a), ...t })
);
rs.displayName = "TableHeader";
const os = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e("tbody", { ref: r, className: o("[&_tr:last-child]:border-0", a), ...t })
);
os.displayName = "TableBody";
const ss = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e("tfoot", { ref: r, className: o("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", a), ...t })
);
ss.displayName = "TableFooter";
const is = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e(
    "tr",
    {
      ref: r,
      className: o("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", a),
      ...t
    }
  )
);
is.displayName = "TableRow";
const ns = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e(
    "th",
    {
      ref: r,
      className: o(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        a
      ),
      ...t
    }
  )
);
ns.displayName = "TableHead";
const ds = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e("td", { ref: r, className: o("p-4 align-middle [&:has([role=checkbox])]:pr-0", a), ...t })
);
ds.displayName = "TableCell";
const ls = i.forwardRef(
  ({ className: a, ...t }, r) => /* @__PURE__ */ e("caption", { ref: r, className: o("mt-4 text-sm text-muted-foreground", a), ...t })
);
ls.displayName = "TableCaption";
function cs({ className: a, classNames: t, showOutsideDays: r = !0, ...s }) {
  return /* @__PURE__ */ e(
    zt,
    {
      showOutsideDays: r,
      className: o("p-3", a),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: o(
          Z({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: o(Z({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
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
        IconLeft: ({ ...n }) => /* @__PURE__ */ e(Xe, { className: "h-4 w-4" }),
        IconRight: ({ ...n }) => /* @__PURE__ */ e(W, { className: "h-4 w-4" })
      },
      ...s
    }
  );
}
cs.displayName = "Calendar";
const Ra = i.createContext(null);
function Re() {
  const a = i.useContext(Ra);
  if (!a)
    throw new Error("useCarousel must be used within a <Carousel />");
  return a;
}
const ms = i.forwardRef(
  ({ orientation: a = "horizontal", opts: t, setApi: r, plugins: s, className: n, children: c, ...l }, f) => {
    const [g, u] = It(
      {
        ...t,
        axis: a === "horizontal" ? "x" : "y"
      },
      s
    ), [v, S] = i.useState(!1), [R, A] = i.useState(!1), p = i.useCallback((b) => {
      b && (S(b.canScrollPrev()), A(b.canScrollNext()));
    }, []), y = i.useCallback(() => {
      u == null || u.scrollPrev();
    }, [u]), w = i.useCallback(() => {
      u == null || u.scrollNext();
    }, [u]), m = i.useCallback(
      (b) => {
        b.key === "ArrowLeft" ? (b.preventDefault(), y()) : b.key === "ArrowRight" && (b.preventDefault(), w());
      },
      [y, w]
    );
    return i.useEffect(() => {
      !u || !r || r(u);
    }, [u, r]), i.useEffect(() => {
      if (u)
        return p(u), u.on("reInit", p), u.on("select", p), () => {
          u == null || u.off("select", p);
        };
    }, [u, p]), /* @__PURE__ */ e(
      Ra.Provider,
      {
        value: {
          carouselRef: g,
          api: u,
          opts: t,
          orientation: a || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: y,
          scrollNext: w,
          canScrollPrev: v,
          canScrollNext: R
        },
        children: /* @__PURE__ */ e(
          "div",
          {
            ref: f,
            onKeyDownCapture: m,
            className: o("relative", n),
            role: "region",
            "aria-roledescription": "carousel",
            ...l,
            children: c
          }
        )
      }
    );
  }
);
ms.displayName = "Carousel";
const us = i.forwardRef(
  ({ className: a, ...t }, r) => {
    const { carouselRef: s, orientation: n } = Re();
    return /* @__PURE__ */ e("div", { ref: s, className: "overflow-hidden", children: /* @__PURE__ */ e(
      "div",
      {
        ref: r,
        className: o("flex", n === "horizontal" ? "-ml-4" : "-mt-4 flex-col", a),
        ...t
      }
    ) });
  }
);
us.displayName = "CarouselContent";
const ps = i.forwardRef(
  ({ className: a, ...t }, r) => {
    const { orientation: s } = Re();
    return /* @__PURE__ */ e(
      "div",
      {
        ref: r,
        role: "group",
        "aria-roledescription": "slide",
        className: o("min-w-0 shrink-0 grow-0 basis-full", s === "horizontal" ? "pl-4" : "pt-4", a),
        ...t
      }
    );
  }
);
ps.displayName = "CarouselItem";
const fs = i.forwardRef(
  ({ className: a, variant: t = "outline", size: r = "icon", ...s }, n) => {
    const { orientation: c, scrollPrev: l, canScrollPrev: f } = Re();
    return /* @__PURE__ */ d(
      _,
      {
        ref: n,
        variant: t,
        size: r,
        className: o(
          "absolute h-8 w-8 rounded-full",
          c === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          a
        ),
        disabled: !f,
        onClick: l,
        ...s,
        children: [
          /* @__PURE__ */ e(Ya, { className: "h-4 w-4" }),
          /* @__PURE__ */ e("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
fs.displayName = "CarouselPrevious";
const gs = i.forwardRef(
  ({ className: a, variant: t = "outline", size: r = "icon", ...s }, n) => {
    const { orientation: c, scrollNext: l, canScrollNext: f } = Re();
    return /* @__PURE__ */ d(
      _,
      {
        ref: n,
        variant: t,
        size: r,
        className: o(
          "absolute h-8 w-8 rounded-full",
          c === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          a
        ),
        disabled: !f,
        onClick: l,
        ...s,
        children: [
          /* @__PURE__ */ e(Ua, { className: "h-4 w-4" }),
          /* @__PURE__ */ e("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
gs.displayName = "CarouselNext";
const bs = x.Root, cn = x.Trigger, hs = x.Portal, mn = x.Close, Sa = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  x.Overlay,
  {
    ref: r,
    className: o(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      a
    ),
    ...t
  }
));
Sa.displayName = x.Overlay.displayName;
const Ta = i.forwardRef(({ className: a, children: t, ...r }, s) => /* @__PURE__ */ d(hs, { children: [
  /* @__PURE__ */ e(Sa, {}),
  /* @__PURE__ */ d(
    x.Content,
    {
      ref: s,
      className: o(
        "fixed left-[50%] top-[50%] z-50 grid w-[calc(100%-1.5rem)] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-4 sm:p-6 shadow-lg duration-200 max-h-[90dvh] overflow-y-auto rounded-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        a
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ d(x.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ e(ee, { className: "h-4 w-4" }),
          /* @__PURE__ */ e("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Ta.displayName = x.Content.displayName;
const xs = ({ className: a, ...t }) => /* @__PURE__ */ e("div", { className: o("flex flex-col space-y-1.5 text-center sm:text-left", a), ...t });
xs.displayName = "DialogHeader";
const vs = ({ className: a, ...t }) => /* @__PURE__ */ e("div", { className: o("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", a), ...t });
vs.displayName = "DialogFooter";
const ys = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  x.Title,
  {
    ref: r,
    className: o("text-lg font-semibold leading-none tracking-tight", a),
    ...t
  }
));
ys.displayName = x.Title.displayName;
const Ns = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(x.Description, { ref: r, className: o("text-sm text-muted-foreground", a), ...t }));
Ns.displayName = x.Description.displayName;
const Pa = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  M,
  {
    ref: r,
    className: o(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      a
    ),
    ...t
  }
));
Pa.displayName = M.displayName;
const un = ({ children: a, ...t }) => /* @__PURE__ */ e(bs, { ...t, children: /* @__PURE__ */ e(Ta, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ e(Pa, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: a }) }) }), ws = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ d("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ e(ne, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ e(
    M.Input,
    {
      ref: r,
      className: o(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        a
      ),
      ...t
    }
  )
] }));
ws.displayName = M.Input.displayName;
const Cs = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  M.List,
  {
    ref: r,
    className: o("max-h-[300px] overflow-y-auto overflow-x-hidden", a),
    ...t
  }
));
Cs.displayName = M.List.displayName;
const ks = i.forwardRef((a, t) => /* @__PURE__ */ e(M.Empty, { ref: t, className: "py-6 text-center text-sm", ...a }));
ks.displayName = M.Empty.displayName;
const Rs = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  M.Group,
  {
    ref: r,
    className: o(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      a
    ),
    ...t
  }
));
Rs.displayName = M.Group.displayName;
const Ss = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(M.Separator, { ref: r, className: o("-mx-1 h-px bg-border", a), ...t }));
Ss.displayName = M.Separator.displayName;
const Ts = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  M.Item,
  {
    ref: r,
    className: o(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      a
    ),
    ...t
  }
));
Ts.displayName = M.Item.displayName;
const Ps = ({ className: a, ...t }) => /* @__PURE__ */ e("span", { className: o("ml-auto text-xs tracking-widest text-muted-foreground", a), ...t });
Ps.displayName = "CommandShortcut";
const zs = { light: "", dark: ".dark" }, za = i.createContext(null);
function Ia() {
  const a = i.useContext(za);
  if (!a)
    throw new Error("useChart must be used within a <ChartContainer />");
  return a;
}
const Is = i.forwardRef(({ id: a, className: t, children: r, config: s, ...n }, c) => {
  const l = i.useId(), f = `chart-${a || l.replace(/:/g, "")}`;
  return /* @__PURE__ */ e(za.Provider, { value: { config: s }, children: /* @__PURE__ */ d(
    "div",
    {
      "data-chart": f,
      ref: c,
      className: o(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        t
      ),
      ...n,
      children: [
        /* @__PURE__ */ e(Ds, { id: f, config: s }),
        /* @__PURE__ */ e(Ge.ResponsiveContainer, { children: r })
      ]
    }
  ) });
});
Is.displayName = "Chart";
const Ds = ({ id: a, config: t }) => {
  const r = Object.entries(t).filter(([s, n]) => n.theme || n.color);
  return r.length ? /* @__PURE__ */ e(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(zs).map(
          ([s, n]) => `
${n} [data-chart=${a}] {
${r.map(([c, l]) => {
            var g;
            const f = ((g = l.theme) == null ? void 0 : g[s]) || l.color;
            return f ? `  --color-${c}: ${f};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, pn = Ge.Tooltip, Ms = i.forwardRef(
  ({
    active: a,
    payload: t,
    className: r,
    indicator: s = "dot",
    hideLabel: n = !1,
    hideIndicator: c = !1,
    label: l,
    labelFormatter: f,
    labelClassName: g,
    formatter: u,
    color: v,
    nameKey: S,
    labelKey: R
  }, A) => {
    const { config: p } = Ia(), y = i.useMemo(() => {
      var re;
      if (n || !(t != null && t.length))
        return null;
      const [m] = t, b = `${R || m.dataKey || m.name || "value"}`, T = Ee(p, m, b), L = !R && typeof l == "string" ? ((re = p[l]) == null ? void 0 : re.label) || l : T == null ? void 0 : T.label;
      return f ? /* @__PURE__ */ e("div", { className: o("font-medium", g), children: f(L, t) }) : L ? /* @__PURE__ */ e("div", { className: o("font-medium", g), children: L }) : null;
    }, [l, f, t, n, g, p, R]);
    if (!a || !(t != null && t.length))
      return null;
    const w = t.length === 1 && s !== "dot";
    return /* @__PURE__ */ d(
      "div",
      {
        ref: A,
        className: o(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          r
        ),
        children: [
          w ? null : y,
          /* @__PURE__ */ e("div", { className: "grid gap-1.5", children: t.map((m, b) => {
            const T = `${S || m.name || m.dataKey || "value"}`, L = Ee(p, m, T), re = v || m.payload.fill || m.color;
            return /* @__PURE__ */ e(
              "div",
              {
                className: o(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  s === "dot" && "items-center"
                ),
                children: u && (m == null ? void 0 : m.value) !== void 0 && m.name ? u(m.value, m.name, m, b, m.payload) : /* @__PURE__ */ d(xe, { children: [
                  L != null && L.icon ? /* @__PURE__ */ e(L.icon, {}) : !c && /* @__PURE__ */ e(
                    "div",
                    {
                      className: o("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                        "h-2.5 w-2.5": s === "dot",
                        "w-1": s === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": s === "dashed",
                        "my-0.5": w && s === "dashed"
                      }),
                      style: {
                        "--color-bg": re,
                        "--color-border": re
                      }
                    }
                  ),
                  /* @__PURE__ */ d(
                    "div",
                    {
                      className: o(
                        "flex flex-1 justify-between leading-none",
                        w ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ d("div", { className: "grid gap-1.5", children: [
                          w ? y : null,
                          /* @__PURE__ */ e("span", { className: "text-muted-foreground", children: (L == null ? void 0 : L.label) || m.name })
                        ] }),
                        m.value && /* @__PURE__ */ e("span", { className: "font-mono font-medium tabular-nums text-foreground", children: m.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              m.dataKey
            );
          }) })
        ]
      }
    );
  }
);
Ms.displayName = "ChartTooltip";
const fn = Ge.Legend, As = i.forwardRef(({ className: a, hideIcon: t = !1, payload: r, verticalAlign: s = "bottom", nameKey: n }, c) => {
  const { config: l } = Ia();
  return r != null && r.length ? /* @__PURE__ */ e(
    "div",
    {
      ref: c,
      className: o("flex items-center justify-center gap-4", s === "top" ? "pb-3" : "pt-3", a),
      children: r.map((f) => {
        const g = `${n || f.dataKey || "value"}`, u = Ee(l, f, g);
        return /* @__PURE__ */ d(
          "div",
          {
            className: o("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
            children: [
              u != null && u.icon && !t ? /* @__PURE__ */ e(u.icon, {}) : /* @__PURE__ */ e(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: f.color
                  }
                }
              ),
              u == null ? void 0 : u.label
            ]
          },
          f.value
        );
      })
    }
  ) : null;
});
As.displayName = "ChartLegend";
function Ee(a, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const s = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let n = r;
  return r in t && typeof t[r] == "string" ? n = t[r] : s && r in s && typeof s[r] == "string" && (n = s[r]), n in a ? a[n] : a[r];
}
const gn = Dt.Root, bn = z.Root, hn = z.Trigger, _s = z.Portal, Da = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  z.Overlay,
  {
    className: o(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      a
    ),
    ...t,
    ref: r
  }
));
Da.displayName = z.Overlay.displayName;
const js = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ d(_s, { children: [
  /* @__PURE__ */ e(Da, {}),
  /* @__PURE__ */ e(
    z.Content,
    {
      ref: r,
      className: o(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        a
      ),
      ...t
    }
  )
] }));
js.displayName = z.Content.displayName;
const Es = ({ className: a, ...t }) => /* @__PURE__ */ e("div", { className: o("flex flex-col space-y-2 text-center sm:text-left", a), ...t });
Es.displayName = "AlertDialogHeader";
const Ls = ({ className: a, ...t }) => /* @__PURE__ */ e("div", { className: o("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", a), ...t });
Ls.displayName = "AlertDialogFooter";
const Fs = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(z.Title, { ref: r, className: o("text-lg font-semibold", a), ...t }));
Fs.displayName = z.Title.displayName;
const Bs = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(z.Description, { ref: r, className: o("text-sm text-muted-foreground", a), ...t }));
Bs.displayName = z.Description.displayName;
const Gs = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(z.Action, { ref: r, className: o(Z(), a), ...t }));
Gs.displayName = z.Action.displayName;
const Vs = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  z.Cancel,
  {
    ref: r,
    className: o(Z({ variant: "outline" }), "mt-2 sm:mt-0", a),
    ...t
  }
));
Vs.displayName = z.Cancel.displayName;
const xn = C.Root, vn = C.Trigger, yn = C.Group, Nn = C.Sub, Hs = i.forwardRef(({ className: a, inset: t, children: r, ...s }, n) => /* @__PURE__ */ d(
  C.SubTrigger,
  {
    ref: n,
    className: o(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      a
    ),
    ...s,
    children: [
      r,
      /* @__PURE__ */ e(W, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Hs.displayName = C.SubTrigger.displayName;
const Os = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  C.SubContent,
  {
    ref: r,
    className: o(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a
    ),
    ...t
  }
));
Os.displayName = C.SubContent.displayName;
const $s = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(C.Portal, { children: /* @__PURE__ */ e(
  C.Content,
  {
    ref: r,
    className: o(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a
    ),
    ...t
  }
) }));
$s.displayName = C.Content.displayName;
const Ks = i.forwardRef(({ className: a, inset: t, ...r }, s) => /* @__PURE__ */ e(
  C.Item,
  {
    ref: s,
    className: o(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      a
    ),
    ...r
  }
));
Ks.displayName = C.Item.displayName;
const Ys = i.forwardRef(({ className: a, children: t, checked: r, ...s }, n) => /* @__PURE__ */ d(
  C.CheckboxItem,
  {
    ref: n,
    className: o(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      a
    ),
    checked: r,
    ...s,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(C.ItemIndicator, { children: /* @__PURE__ */ e($, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Ys.displayName = C.CheckboxItem.displayName;
const Us = i.forwardRef(({ className: a, children: t, ...r }, s) => /* @__PURE__ */ d(
  C.RadioItem,
  {
    ref: s,
    className: o(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      a
    ),
    ...r,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(C.ItemIndicator, { children: /* @__PURE__ */ e(ve, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Us.displayName = C.RadioItem.displayName;
const qs = i.forwardRef(({ className: a, inset: t, ...r }, s) => /* @__PURE__ */ e(
  C.Label,
  {
    ref: s,
    className: o("px-2 py-1.5 text-sm font-semibold text-foreground", t && "pl-8", a),
    ...r
  }
));
qs.displayName = C.Label.displayName;
const Ws = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(C.Separator, { ref: r, className: o("-mx-1 my-1 h-px bg-border", a), ...t }));
Ws.displayName = C.Separator.displayName;
const Js = ({ className: a, ...t }) => /* @__PURE__ */ e("span", { className: o("ml-auto text-xs tracking-widest text-muted-foreground", a), ...t });
Js.displayName = "ContextMenuShortcut";
const wn = N.Root, Cn = N.Trigger, kn = N.Group, Rn = N.Portal, Sn = N.Sub, Tn = N.RadioGroup, Qs = i.forwardRef(({ className: a, inset: t, children: r, ...s }, n) => /* @__PURE__ */ d(
  N.SubTrigger,
  {
    ref: n,
    className: o(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      t && "pl-8",
      a
    ),
    ...s,
    children: [
      r,
      /* @__PURE__ */ e(W, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Qs.displayName = N.SubTrigger.displayName;
const Xs = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  N.SubContent,
  {
    ref: r,
    className: o(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a
    ),
    ...t
  }
));
Xs.displayName = N.SubContent.displayName;
const Zs = i.forwardRef(({ className: a, sideOffset: t = 4, ...r }, s) => /* @__PURE__ */ e(N.Portal, { children: /* @__PURE__ */ e(
  N.Content,
  {
    ref: s,
    sideOffset: t,
    className: o(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a
    ),
    ...r
  }
) }));
Zs.displayName = N.Content.displayName;
const ei = i.forwardRef(({ className: a, inset: t, ...r }, s) => /* @__PURE__ */ e(
  N.Item,
  {
    ref: s,
    className: o(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      a
    ),
    ...r
  }
));
ei.displayName = N.Item.displayName;
const ai = i.forwardRef(({ className: a, children: t, checked: r, ...s }, n) => /* @__PURE__ */ d(
  N.CheckboxItem,
  {
    ref: n,
    className: o(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      a
    ),
    checked: r,
    ...s,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(N.ItemIndicator, { children: /* @__PURE__ */ e($, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
ai.displayName = N.CheckboxItem.displayName;
const ti = i.forwardRef(({ className: a, children: t, ...r }, s) => /* @__PURE__ */ d(
  N.RadioItem,
  {
    ref: s,
    className: o(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      a
    ),
    ...r,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(N.ItemIndicator, { children: /* @__PURE__ */ e(ve, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
ti.displayName = N.RadioItem.displayName;
const ri = i.forwardRef(({ className: a, inset: t, ...r }, s) => /* @__PURE__ */ e(
  N.Label,
  {
    ref: s,
    className: o("px-2 py-1.5 text-sm font-semibold", t && "pl-8", a),
    ...r
  }
));
ri.displayName = N.Label.displayName;
const oi = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(N.Separator, { ref: r, className: o("-mx-1 my-1 h-px bg-muted", a), ...t }));
oi.displayName = N.Separator.displayName;
const si = ({ className: a, ...t }) => /* @__PURE__ */ e("span", { className: o("ml-auto text-xs tracking-widest opacity-60", a), ...t });
si.displayName = "DropdownMenuShortcut";
const Pn = ce.Root, zn = ce.Trigger, ii = i.forwardRef(({ className: a, align: t = "center", sideOffset: r = 4, ...s }, n) => /* @__PURE__ */ e(ce.Portal, { children: /* @__PURE__ */ e(
  ce.Content,
  {
    ref: n,
    align: t,
    sideOffset: r,
    className: o(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a
    ),
    ...s
  }
) }));
ii.displayName = ce.Content.displayName;
const In = we.Root, Dn = we.Trigger, ni = i.forwardRef(({ className: a, align: t = "center", sideOffset: r = 4, ...s }, n) => /* @__PURE__ */ e(
  we.Content,
  {
    ref: n,
    align: t,
    sideOffset: r,
    className: o(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a
    ),
    ...s
  }
));
ni.displayName = we.Content.displayName;
const di = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  te.Root,
  {
    ref: r,
    className: o("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", a),
    ...t
  }
));
di.displayName = te.Root.displayName;
const li = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(te.Image, { ref: r, className: o("aspect-square h-full w-full", a), ...t }));
li.displayName = te.Image.displayName;
const ci = i.forwardRef(({ className: a, ...t }, r) => /* @__PURE__ */ e(
  te.Fallback,
  {
    ref: r,
    className: o("flex h-full w-full items-center justify-center rounded-full bg-muted", a),
    ...t
  }
));
ci.displayName = te.Fallback.displayName;
const Ma = () => /* @__PURE__ */ e("div", { className: "w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-glow", children: /* @__PURE__ */ e(H, { size: 26, className: "text-primary-foreground", fill: "currentColor" }) }), Mn = ({
  onNavigate: a,
  onSubmit: t
}) => {
  const [r, s] = I(""), [n, c] = I(""), [l, f] = I(!1), [g, u] = I(!1);
  return /* @__PURE__ */ e("div", { className: "min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center px-4 py-12", children: /* @__PURE__ */ d("div", { className: "w-full max-w-md space-y-8", children: [
    /* @__PURE__ */ d("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ e(Ma, {}),
      /* @__PURE__ */ d("div", { children: [
        /* @__PURE__ */ e("h1", { className: "text-3xl font-display font-black uppercase tracking-tighter text-foreground", children: "EVYRA" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground font-medium mt-1", children: "Plataforma de cuidados sénior" })
      ] })
    ] }),
    /* @__PURE__ */ d("div", { className: "bg-card rounded-3xl border border-border shadow-elevated p-8 space-y-6", children: [
      /* @__PURE__ */ d("div", { children: [
        /* @__PURE__ */ e("h2", { className: "text-xl font-display font-black uppercase tracking-tighter text-foreground", children: "Entrar na Conta" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground mt-1", children: "Bem-vindo de volta" })
      ] }),
      /* @__PURE__ */ d(_, { variant: "outline", className: "w-full rounded-2xl", onClick: () => P.info("Google login..."), children: [
        /* @__PURE__ */ d("svg", { className: "mr-2 h-4 w-4", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ e("path", { fill: "#4285F4", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }),
          /* @__PURE__ */ e("path", { fill: "#34A853", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }),
          /* @__PURE__ */ e("path", { fill: "#FBBC05", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" }),
          /* @__PURE__ */ e("path", { fill: "#EA4335", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" })
        ] }),
        "Continuar com Google"
      ] }),
      /* @__PURE__ */ d("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ e("div", { className: "flex-1 h-px bg-border" }),
        /* @__PURE__ */ e("span", { className: "text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest", children: "ou" }),
        /* @__PURE__ */ e("div", { className: "flex-1 h-px bg-border" })
      ] }),
      /* @__PURE__ */ d("form", { onSubmit: async (S) => {
        S.preventDefault(), u(!0);
        try {
          t ? await t(r, n) : (await new Promise((R) => setTimeout(R, 1200)), P.success("Login efetuado!"), a == null || a("dashboard"));
        } catch (R) {
          console.error("Login error:", R);
        } finally {
          u(!1);
        }
      }, className: "space-y-4", children: [
        /* @__PURE__ */ d("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ e("label", { className: "text-[10px] font-display font-black uppercase tracking-widest text-foreground", children: "Email" }),
          /* @__PURE__ */ d("div", { className: "relative", children: [
            /* @__PURE__ */ e(qa, { size: 15, className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: r,
                onChange: (S) => s(S.target.value),
                placeholder: "email@exemplo.com",
                required: !0,
                className: "w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-2xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ e("label", { className: "text-[10px] font-display font-black uppercase tracking-widest text-foreground", children: "Palavra-passe" }),
          /* @__PURE__ */ d("div", { className: "relative", children: [
            /* @__PURE__ */ e(Wa, { size: 15, className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: l ? "text" : "password",
                value: n,
                onChange: (S) => c(S.target.value),
                placeholder: "••••••••",
                required: !0,
                className: "w-full pl-10 pr-12 py-3 bg-secondary border border-border rounded-2xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              }
            ),
            /* @__PURE__ */ e("button", { type: "button", onClick: () => f(!l), className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors", children: l ? /* @__PURE__ */ e(Ja, { size: 15 }) : /* @__PURE__ */ e(Qa, { size: 15 }) })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "flex justify-end", children: /* @__PURE__ */ e("button", { type: "button", className: "text-xs text-primary font-display font-bold hover:underline", children: "Esqueci a palavra-passe" }) }),
        /* @__PURE__ */ e(_, { type: "submit", size: "lg", className: "w-full rounded-2xl", disabled: g, children: g ? /* @__PURE__ */ d(xe, { children: [
          /* @__PURE__ */ e(Ze, { size: 16, className: "animate-spin mr-2" }),
          "A entrar..."
        ] }) : "Entrar" })
      ] }),
      /* @__PURE__ */ d("p", { className: "text-center text-sm text-muted-foreground", children: [
        "Sem conta?",
        " ",
        /* @__PURE__ */ e("button", { onClick: () => a == null ? void 0 : a("register"), className: "text-primary font-display font-bold hover:underline", children: "Registar" })
      ] })
    ] })
  ] }) });
}, An = ({
  onNavigate: a,
  onSubmitRegister: t
}) => {
  const [r, s] = I(1), [n, c] = I("FAMILY"), [l, f] = I(!1), [g, u] = I(!1), [v, S] = I(!1), [R, A] = I({ name: "", email: "", phone: "", password: "", confirm: "" }), p = (m) => (b) => A((T) => ({ ...T, [m]: b.target.value })), y = async (m) => {
    if (m.preventDefault(), !v) {
      P.error("Aceite os termos para continuar");
      return;
    }
    if (R.password !== R.confirm) {
      P.error("As palavras-passe não coincidem");
      return;
    }
    u(!0);
    try {
      t ? await t({ name: R.name, email: R.email, phone: R.phone, password: R.password, role: n }) : (await new Promise((b) => setTimeout(b, 1200)), P.success("Conta criada!"), a == null || a(n === "FAMILY" ? "family-setup" : "profile-setup"));
    } catch (b) {
      console.error("Register error:", b);
    } finally {
      u(!1);
    }
  }, w = [
    { id: "FAMILY", icon: V, title: "Família", desc: "Procuro um cuidador para o meu familiar", tag: "€29 ativação", tagClass: "bg-warning/10 text-warning border border-warning/30" },
    { id: "CAREGIVER", icon: H, title: "Cuidador(a)", desc: "Sou profissional de saúde ou cuidador", tag: "Gratuito", tagClass: "bg-success/10 text-success border border-success/30" }
  ];
  return /* @__PURE__ */ e("div", { className: "min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center px-4 py-12", children: /* @__PURE__ */ d("div", { className: "w-full max-w-lg space-y-6", children: [
    /* @__PURE__ */ d("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ e(Ma, {}),
      /* @__PURE__ */ e("h1", { className: "text-3xl font-display font-black uppercase tracking-tighter text-foreground", children: "Criar Conta" })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex items-center justify-center gap-3", children: [1, 2].map((m) => /* @__PURE__ */ d(ja.Fragment, { children: [
      /* @__PURE__ */ e("div", { className: `w-8 h-8 rounded-xl flex items-center justify-center text-xs font-display font-black transition-all ${m <= r ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-muted-foreground border border-border"}`, children: m < r ? /* @__PURE__ */ e($, { size: 14 }) : m }),
      m < 2 && /* @__PURE__ */ e("div", { className: `w-16 h-0.5 rounded-full transition-all ${m < r ? "bg-primary" : "bg-border"}` })
    ] }, m)) }),
    /* @__PURE__ */ d("div", { className: "bg-card rounded-3xl border border-border shadow-elevated p-8 space-y-6", children: [
      r === 1 && /* @__PURE__ */ d("div", { className: "space-y-5", children: [
        /* @__PURE__ */ d("div", { children: [
          /* @__PURE__ */ e("h2", { className: "text-lg font-display font-black uppercase tracking-tighter", children: "Qual é o seu papel?" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground mt-1", children: "Escolha o tipo de conta a criar" })
        ] }),
        /* @__PURE__ */ e("div", { className: "space-y-3", children: w.map((m) => /* @__PURE__ */ d(
          "label",
          {
            onClick: () => c(m.id),
            className: `flex items-center gap-4 p-5 border-2 rounded-2xl cursor-pointer transition-all ${n === m.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"}`,
            children: [
              /* @__PURE__ */ e("div", { className: `w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${n === m.id ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`, children: /* @__PURE__ */ e(m.icon, { size: 22 }) }),
              /* @__PURE__ */ d("div", { className: "flex-1", children: [
                /* @__PURE__ */ d("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ e("span", { className: "font-display font-black text-foreground text-sm uppercase", children: m.title }),
                  /* @__PURE__ */ e("span", { className: `text-[9px] font-display font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${m.tagClass}`, children: m.tag })
                ] }),
                /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground mt-0.5", children: m.desc })
              ] }),
              /* @__PURE__ */ e("div", { className: `w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${n === m.id ? "border-primary bg-primary" : "border-border"}`, children: n === m.id && /* @__PURE__ */ e("div", { className: "w-2 h-2 rounded-full bg-primary-foreground" }) })
            ]
          },
          m.id
        )) }),
        /* @__PURE__ */ e(_, { size: "lg", className: "w-full rounded-2xl", onClick: () => s(2), children: "Continuar" })
      ] }),
      r === 2 && /* @__PURE__ */ d("form", { onSubmit: y, className: "space-y-5", children: [
        /* @__PURE__ */ d("div", { className: "flex items-center gap-3 p-4 bg-secondary rounded-2xl", children: [
          n === "FAMILY" ? /* @__PURE__ */ e(V, { size: 18, className: "text-muted-foreground" }) : /* @__PURE__ */ e(H, { size: 18, className: "text-muted-foreground" }),
          /* @__PURE__ */ e("span", { className: "font-display font-bold text-sm text-foreground", children: n === "FAMILY" ? "Família" : "Cuidador(a)" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: () => s(1), className: "ml-auto text-[10px] font-display font-black text-primary uppercase tracking-widest hover:underline", children: "Alterar" })
        ] }),
        [
          { label: "Nome Completo", key: "name", type: "text", placeholder: "Nome completo" },
          { label: "Email", key: "email", type: "email", placeholder: "email@exemplo.com" },
          { label: "Telemóvel", key: "phone", type: "tel", placeholder: "+351 912 345 678" },
          { label: "Palavra-passe", key: "password", type: l ? "text" : "password", placeholder: "••••••••" },
          { label: "Confirmar Palavra-passe", key: "confirm", type: "password", placeholder: "••••••••" }
        ].map((m) => /* @__PURE__ */ d("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ e("label", { className: "text-[10px] font-display font-black uppercase tracking-widest text-foreground", children: m.label }),
          /* @__PURE__ */ e(
            "input",
            {
              type: m.type,
              value: R[m.key],
              onChange: p(m.key),
              placeholder: m.placeholder,
              className: "w-full px-4 py-3 bg-secondary border border-border rounded-2xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            }
          )
        ] }, m.key)),
        n === "FAMILY" && /* @__PURE__ */ d("div", { className: "p-4 bg-warning/5 border border-warning/20 rounded-2xl", children: [
          /* @__PURE__ */ e("p", { className: "text-xs font-display font-black text-foreground uppercase", children: "Taxa de Ativação — €29" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground mt-1", children: "Taxa única para acesso completo, verificação KYC e suporte dedicado." })
        ] }),
        n === "CAREGIVER" && /* @__PURE__ */ d("div", { className: "p-4 bg-success/5 border border-success/20 rounded-2xl flex items-start gap-3", children: [
          /* @__PURE__ */ e($, { size: 14, className: "text-success mt-0.5 shrink-0" }),
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ e("p", { className: "text-xs font-display font-black text-success uppercase", children: "Registo Gratuito" }),
            /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Sem taxa de ativação. Crie o perfil e comece a receber propostas." })
          ] })
        ] }),
        /* @__PURE__ */ d("label", { className: "flex items-start gap-3 cursor-pointer", children: [
          /* @__PURE__ */ e("div", { onClick: () => S(!v), className: `w-5 h-5 rounded-md border-2 flex items-center justify-center mt-0.5 transition-all shrink-0 ${v ? "bg-primary border-primary" : "border-border"}`, children: v && /* @__PURE__ */ e($, { size: 11, className: "text-primary-foreground" }) }),
          /* @__PURE__ */ d("span", { className: "text-xs text-muted-foreground leading-relaxed", children: [
            "Aceito os ",
            /* @__PURE__ */ e("button", { type: "button", className: "text-primary font-medium hover:underline", children: "Termos" }),
            " e a ",
            /* @__PURE__ */ e("button", { type: "button", className: "text-primary font-medium hover:underline", children: "Política de Privacidade" })
          ] })
        ] }),
        /* @__PURE__ */ d("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ e(_, { type: "button", variant: "outline", className: "rounded-2xl px-5", onClick: () => s(1), children: "←" }),
          /* @__PURE__ */ e(_, { type: "submit", size: "lg", className: "flex-1 rounded-2xl", disabled: g || !v, children: g ? /* @__PURE__ */ d(xe, { children: [
            /* @__PURE__ */ e(Ze, { size: 15, className: "animate-spin mr-2" }),
            "A criar..."
          ] }) : "Criar Conta" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ d("p", { className: "text-center text-sm text-muted-foreground", children: [
      "Já tem conta?",
      " ",
      /* @__PURE__ */ e("button", { onClick: () => a == null ? void 0 : a("login"), className: "text-primary font-display font-bold hover:underline", children: "Entrar" })
    ] })
  ] }) });
}, Aa = Ea({ theme: "light", toggleTheme: () => {
} });
function _n({ children: a }) {
  const [t, r] = I(() => typeof window < "u" && localStorage.getItem("evyra-theme") || "light");
  Me(() => {
    const n = document.documentElement;
    n.classList.remove("light", "dark"), n.classList.add(t), localStorage.setItem("evyra-theme", t);
  }, [t]);
  const s = () => r((n) => n === "light" ? "dark" : "light");
  return /* @__PURE__ */ e(Aa.Provider, { value: { theme: t, toggleTheme: s }, children: a });
}
const mi = () => La(Aa), ui = [
  { id: "1", type: "proposal", title: "Nova Proposta Recebida", desc: "Mariana Costa enviou uma proposta para Apoio Pós-Operatório.", time: "2 min", read: !1, avatar: "https://i.pravatar.cc/100?u=prop0" },
  { id: "2", type: "message", title: "Nova Mensagem", desc: 'João Pedro: "Olá, gostaria de discutir os detalhes..."', time: "15 min", read: !1, avatar: "https://i.pravatar.cc/100?u=prop1" },
  { id: "3", type: "status", title: "Proposta Aceite", desc: "A sua proposta para Cuidados Mensais foi aceite.", time: "1h", read: !1 },
  { id: "4", type: "message", title: "Nova Mensagem", desc: 'Ana Ferreira: "Confirmo disponibilidade para amanhã."', time: "2h", read: !0, avatar: "https://i.pravatar.cc/100?u=prop2" },
  { id: "5", type: "proposal", title: "Proposta Atualizada", desc: "Carlos Silva atualizou o orçamento para 890€.", time: "3h", read: !0, avatar: "https://i.pravatar.cc/100?u=prop3" }
], qe = [
  { type: "message", title: "Nova Mensagem", desc: 'Sofia Lopes: "Podemos agendar para sexta-feira?"', avatar: "https://i.pravatar.cc/100?u=prop4" },
  { type: "proposal", title: "Nova Proposta Recebida", desc: "Ricardo Mendes candidatou-se a Fisioterapia Domiciliária.", avatar: "https://i.pravatar.cc/100?u=prop5" },
  { type: "status", title: "Pagamento Confirmado", desc: "O pagamento de 450€ foi processado com sucesso." }
], pi = {
  proposal: B,
  message: he,
  status: aa
}, fi = {
  proposal: "bg-primary/10 text-primary",
  message: "bg-accent text-accent-foreground",
  status: "bg-success/10 text-success"
}, jn = ({ sidebarOpen: a, onMobileMenuToggle: t }) => {
  const { theme: r, toggleTheme: s } = mi(), [n, c] = I(ui), [l, f] = I(!1), g = He(null), u = He(0), v = n.filter((p) => !p.read).length;
  Me(() => {
    const p = setInterval(() => {
      if (u.current < qe.length) {
        const y = qe[u.current];
        u.current++, c((w) => [
          { ...y, id: `new-${Date.now()}`, read: !1, time: "agora" },
          ...w
        ]);
      }
    }, 3e4);
    return () => clearInterval(p);
  }, []), Me(() => {
    const p = (y) => {
      g.current && !g.current.contains(y.target) && f(!1);
    };
    return l && document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [l]);
  const S = () => {
    c((p) => p.map((y) => ({ ...y, read: !0 })));
  }, R = (p) => {
    c((y) => y.map((w) => w.id === p ? { ...w, read: !0 } : w));
  }, A = (p) => {
    c((y) => y.filter((w) => w.id !== p));
  };
  return /* @__PURE__ */ d("header", { className: "h-16 border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between", children: [
    /* @__PURE__ */ d("div", { className: "flex items-center gap-4 flex-1", children: [
      /* @__PURE__ */ e(
        "button",
        {
          onClick: t,
          className: "p-2 text-muted-foreground hover:bg-accent rounded-xl transition-colors md:hidden",
          children: /* @__PURE__ */ e(ea, { size: 22 })
        }
      ),
      /* @__PURE__ */ d("div", { className: "relative w-full max-w-md hidden md:block", children: [
        /* @__PURE__ */ e(ne, { size: 16, className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ e(
          "input",
          {
            className: "w-full bg-secondary border border-border rounded-2xl pl-11 pr-4 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body text-foreground placeholder:text-muted-foreground",
            placeholder: "Pesquisar por especialidade ou localização..."
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ d("div", { className: "flex items-center gap-2 md:gap-3", children: [
      /* @__PURE__ */ e(
        "button",
        {
          onClick: s,
          className: "p-2.5 text-muted-foreground hover:bg-accent rounded-xl transition-colors",
          "aria-label": "Toggle theme",
          children: r === "dark" ? /* @__PURE__ */ e(Xa, { size: 20 }) : /* @__PURE__ */ e(Za, { size: 20 })
        }
      ),
      /* @__PURE__ */ d("div", { className: "relative", ref: g, children: [
        /* @__PURE__ */ d(
          "button",
          {
            onClick: () => f(!l),
            className: "p-2.5 text-muted-foreground hover:bg-accent rounded-xl relative transition-colors",
            children: [
              /* @__PURE__ */ e(be, { size: 20 }),
              v > 0 && /* @__PURE__ */ e(
                E.span,
                {
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  className: "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-destructive text-destructive-foreground rounded-full text-[10px] font-bold flex items-center justify-center px-1 border-2 border-card",
                  children: v
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ e(Mt, { children: l && /* @__PURE__ */ d(
          E.div,
          {
            initial: { opacity: 0, y: 8, scale: 0.96 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: 8, scale: 0.96 },
            transition: { duration: 0.2, ease: "easeOut" },
            className: "absolute right-0 top-full mt-2 w-[calc(100vw-2rem)] sm:w-96 bg-card border border-border rounded-2xl shadow-elevated overflow-hidden z-50",
            children: [
              /* @__PURE__ */ d("div", { className: "px-5 py-4 border-b border-border flex items-center justify-between", children: [
                /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("h3", { className: "font-display font-black text-foreground uppercase text-sm tracking-wider", children: "Notificações" }),
                  v > 0 && /* @__PURE__ */ d("span", { className: "bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-lg", children: [
                    v,
                    " novas"
                  ] })
                ] }),
                v > 0 && /* @__PURE__ */ e(
                  "button",
                  {
                    onClick: S,
                    className: "text-xs font-semibold text-primary hover:text-primary/80 transition-colors",
                    children: "Marcar todas como lidas"
                  }
                )
              ] }),
              /* @__PURE__ */ e("div", { className: "max-h-[400px] overflow-y-auto", children: n.length === 0 ? /* @__PURE__ */ d("div", { className: "py-12 text-center text-muted-foreground", children: [
                /* @__PURE__ */ e(be, { size: 32, className: "mx-auto mb-3 opacity-30" }),
                /* @__PURE__ */ e("p", { className: "text-sm font-medium", children: "Sem notificações" })
              ] }) : n.map((p, y) => {
                const w = pi[p.type];
                return /* @__PURE__ */ d(
                  E.div,
                  {
                    initial: { opacity: 0, x: -12 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: y * 0.03 },
                    className: o(
                      "flex items-start gap-3 px-5 py-3.5 hover:bg-accent/50 transition-colors cursor-pointer group relative",
                      !p.read && "bg-primary/[0.03]"
                    ),
                    onClick: () => R(p.id),
                    children: [
                      !p.read && /* @__PURE__ */ e("span", { className: "absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full" }),
                      p.avatar ? /* @__PURE__ */ e("div", { className: "w-9 h-9 rounded-xl overflow-hidden shrink-0 ring-2 ring-secondary", children: /* @__PURE__ */ e("img", { src: p.avatar, alt: "", className: "w-full h-full object-cover" }) }) : /* @__PURE__ */ e("div", { className: o("w-9 h-9 rounded-xl flex items-center justify-center shrink-0", fi[p.type]), children: /* @__PURE__ */ e(w, { size: 16 }) }),
                      /* @__PURE__ */ d("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ e("p", { className: o("text-sm font-semibold text-foreground truncate", !p.read && "font-bold"), children: p.title }),
                        /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground line-clamp-2 mt-0.5", children: p.desc }),
                        /* @__PURE__ */ d("div", { className: "flex items-center gap-1 mt-1.5", children: [
                          /* @__PURE__ */ e(Le, { size: 10, className: "text-muted-foreground/50" }),
                          /* @__PURE__ */ e("span", { className: "text-[10px] text-muted-foreground/60 font-medium", children: p.time })
                        ] })
                      ] }),
                      /* @__PURE__ */ e(
                        "button",
                        {
                          onClick: (m) => {
                            m.stopPropagation(), A(p.id);
                          },
                          className: "opacity-0 group-hover:opacity-100 p-1 text-muted-foreground hover:text-destructive rounded-lg transition-all shrink-0",
                          children: /* @__PURE__ */ e(ee, { size: 14 })
                        }
                      )
                    ]
                  },
                  p.id
                );
              }) })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ e("div", { className: "w-10 h-10 bg-secondary rounded-xl border-2 border-card shadow-card overflow-hidden ring-2 ring-secondary cursor-pointer", children: /* @__PURE__ */ e("img", { src: "https://i.pravatar.cc/100?u=company", alt: "User", className: "w-full h-full object-cover" }) })
    ] })
  ] });
}, G = ({
  icon: a,
  label: t,
  desc: r,
  active: s,
  onClick: n,
  isOpen: c,
  count: l,
  variant: f = "default",
  badge: g
}) => /* @__PURE__ */ d(
  "button",
  {
    onClick: n,
    className: o(
      "w-full flex items-center justify-between p-3 rounded-2xl transition-all duration-200 relative group",
      s ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-accent hover:text-foreground"
    ),
    children: [
      /* @__PURE__ */ d("div", { className: "flex items-center gap-3 min-w-0", children: [
        /* @__PURE__ */ e(a, { size: 18, className: o(
          "shrink-0",
          s ? "text-primary-foreground" : f === "danger" ? "text-destructive" : "text-muted-foreground group-hover:text-primary transition-colors"
        ) }),
        c && /* @__PURE__ */ d("div", { className: "min-w-0 text-left", children: [
          /* @__PURE__ */ e("span", { className: o(
            "text-sm font-display font-bold tracking-tight block",
            s ? "text-primary-foreground" : f === "danger" ? "text-destructive" : "text-foreground"
          ), children: t }),
          r && /* @__PURE__ */ e("span", { className: "text-[10px] opacity-60 font-medium block leading-none mt-0.5 truncate", children: r })
        ] })
      ] }),
      c && (l || g) && /* @__PURE__ */ e("span", { className: o(
        "px-2 py-0.5 rounded-lg text-[9px] font-bold font-display uppercase tracking-widest shrink-0",
        s ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary/10 text-primary"
      ), children: l || g })
    ]
  }
), Q = ({ label: a, isOpen: t }) => /* @__PURE__ */ e("div", { className: "pt-5 pb-1.5 px-3", children: t ? /* @__PURE__ */ e("p", { className: "text-[9px] font-display font-black text-muted-foreground/50 uppercase tracking-[0.3em]", children: a }) : /* @__PURE__ */ e("div", { className: "h-px bg-border mx-auto w-8" }) }), Y = {
  main: [
    { id: "dashboard-caregiver", icon: Oe, label: "Dashboard Cuidador", desc: "Visão do cuidador" },
    { id: "dashboard-family", icon: $e, label: "Dashboard Família", desc: "Visão da família" },
    { id: "marketplace", icon: ne, label: "Explorar Talentos", desc: "Pesquisar cuidadores" },
    { id: "demandas", icon: se, label: "Demandas", desc: "Publicar necessidades", count: "3" },
    { id: "search-cuidadores", icon: V, label: "Procurar Cuidadores", desc: "Encontrar profissional" },
    { id: "entrevistas", icon: Se, label: "Entrevistas", desc: "Agendadas e pendentes" },
    { id: "propostas", icon: B, label: "Propostas", desc: "Recebidas e enviadas", count: "2" },
    { id: "chat", icon: he, label: "Mensagens", desc: "Conversas ativas", count: "5" }
  ],
  recruit: [
    { id: "contratos", icon: B, label: "Contratos", desc: "Ativos e histórico", count: "1" },
    { id: "database", icon: V, label: "Base de Dados", desc: "Pool de candidatos" },
    { id: "payments", icon: me, label: "Pagamentos & Escrow", desc: "Transações e saldo" },
    { id: "verificacao", icon: ae, label: "Verificação KYC", desc: "Estado de identidade" },
    { id: "profile", icon: V, label: "Meu Perfil", desc: "Editar informação" },
    { id: "wallet", icon: Te, label: "Carteira", desc: "Saldo detalhado", badge: "novo" },
    { id: "notificacoes", icon: be, label: "Notificações", desc: "Alertas recentes", badge: "novo" }
  ],
  flows: [
    { id: "cuidador-detail", icon: V, label: "Detalhe Cuidador", desc: "Perfil público", badge: "novo" },
    { id: "nova-demanda", icon: se, label: "Nova Demanda", desc: "Publicar necessidade", badge: "novo" },
    { id: "novo-contrato", icon: B, label: "Novo Contrato", desc: "Criar contrato", badge: "novo" },
    { id: "proposal-flow", icon: Se, label: "Proposal Flow", desc: "Aceitar proposta", badge: "novo" }
  ],
  auth: [
    { id: "login", icon: tt, label: "Login", desc: "Página de entrada", badge: "novo" },
    { id: "register", icon: rt, label: "Registro", desc: "Criação de conta", badge: "novo" },
    { id: "family-setup", icon: H, label: "Family Setup", desc: "Wizard família", badge: "novo" },
    { id: "profile-setup", icon: V, label: "Profile Setup", desc: "Wizard cuidador", badge: "novo" },
    { id: "kyc", icon: ot, label: "Verificação KYC", desc: "Identidade Didit", badge: "novo" }
  ],
  family: [
    { id: "family-member", icon: H, label: "Familiar Cuidado", desc: "Perfil do dependente", badge: "novo" },
    { id: "family-search", icon: ne, label: "Procurar Cuidadores", desc: "Busca avançada", badge: "novo" },
    { id: "family-demandas", icon: se, label: "Minhas Demandas", desc: "Vagas publicadas", badge: "novo" },
    { id: "family-agenda", icon: st, label: "Agenda", desc: "Turnos da semana", badge: "novo" },
    { id: "family-care-plan", icon: it, label: "Plano de Cuidados", desc: "Medicação & rotina", badge: "novo" },
    { id: "family-emergency", icon: nt, label: "Emergências SOS", desc: "Contactos rápidos", badge: "novo" },
    { id: "family-payments", icon: Te, label: "Pagamentos Família", desc: "Faturas & recibos", badge: "novo" },
    { id: "family-contracts", icon: B, label: "Contratos Família", desc: "Em vigor", badge: "novo" },
    { id: "family-favorites", icon: de, label: "Favoritos", desc: "Cuidadores guardados", badge: "novo" },
    { id: "family-review", icon: de, label: "Avaliar Cuidador", desc: "Review pós-contrato", badge: "novo" },
    { id: "family-chat", icon: he, label: "Chat Família", desc: "Falar com cuidadora", badge: "novo" }
  ],
  admin: [
    { id: "admin", icon: $e, label: "Admin Dashboard", desc: "Painel de gestão", badge: "novo" },
    { id: "help", icon: dt, label: "Centro de Ajuda", desc: "FAQ & suporte", badge: "novo" }
  ],
  uikit: [
    { id: "ui-buttons", icon: Ke, label: "Botões" },
    { id: "ui-forms", icon: B, label: "Formulários" },
    { id: "ui-cards", icon: Te, label: "Cards & Badges" },
    { id: "ui-feedback", icon: be, label: "Feedback & Alerts" },
    { id: "ui-data", icon: Oe, label: "Dados & Tabelas" },
    { id: "ui-navigation", icon: lt, label: "Navegação" },
    { id: "ui-overlays", icon: Ke, label: "Overlays & Modais" },
    { id: "ui-misc", icon: Se, label: "Utilitários" },
    { id: "ui-colors", icon: ct, label: "Paleta de Cores" },
    { id: "ui-health-icons", icon: H, label: "Ícones Health" },
    { id: "ui-bottom-nav", icon: mt, label: "Bottom Nav" },
    { id: "ui-specialty-modals", icon: ut, label: "Modais Especiais" },
    { id: "ui-bloom-custom", icon: pt, label: "Bloom Custom" },
    { id: "ui-status-badge", icon: ft, label: "Status Badges" },
    { id: "ui-special-inputs", icon: gt, label: "Inputs Especiais" },
    { id: "ui-mobile-audit", icon: bt, label: "Mobile UI Audit" }
  ]
}, We = ({ currentView: a, setCurrentView: t, isOpen: r, setIsOpen: s, onNavigate: n }) => {
  const c = (l) => {
    t(l), n == null || n();
  };
  return /* @__PURE__ */ d("div", { className: "flex flex-col h-full p-4", children: [
    /* @__PURE__ */ d("div", { className: "flex items-center justify-between mb-6 px-1 pt-1", children: [
      r ? /* @__PURE__ */ d("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e("div", { className: "w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-glow", children: /* @__PURE__ */ e(H, { size: 20, className: "text-primary-foreground", fill: "currentColor" }) }),
        /* @__PURE__ */ d("div", { children: [
          /* @__PURE__ */ e("h1", { className: "text-base font-display font-black tracking-tighter text-primary leading-none", children: "EVYRA" }),
          /* @__PURE__ */ e("p", { className: "text-[9px] font-display font-bold text-muted-foreground uppercase tracking-widest mt-0.5", children: "UI Kit" })
        ] })
      ] }) : /* @__PURE__ */ e("div", { className: "w-10 h-10 bg-primary rounded-xl flex items-center justify-center mx-auto shadow-glow", children: /* @__PURE__ */ e(H, { size: 20, className: "text-primary-foreground", fill: "currentColor" }) }),
      /* @__PURE__ */ e("button", { onClick: () => s(!r), className: "p-2 hover:bg-accent rounded-xl transition-colors text-muted-foreground hidden md:block", children: /* @__PURE__ */ e(ea, { size: 18 }) })
    ] }),
    r && /* @__PURE__ */ d("div", { className: "mx-1 mb-4 px-3 py-2.5 bg-primary/5 border border-primary/20 rounded-2xl", children: [
      /* @__PURE__ */ e("p", { className: "text-[9px] font-display font-black uppercase tracking-widest text-primary", children: "13 páginas novas" }),
      /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Prontas para o repositório" })
    ] }),
    /* @__PURE__ */ d("nav", { className: "flex-1 space-y-0.5 overflow-y-auto scrollbar-hide", children: [
      Y.main.map((l) => /* @__PURE__ */ e(
        G,
        {
          icon: l.icon,
          label: l.label,
          desc: r ? l.desc : void 0,
          active: a === l.id,
          onClick: () => c(l.id),
          isOpen: r,
          count: l.count
        },
        l.id
      )),
      /* @__PURE__ */ e(Q, { label: "Recrutamento", isOpen: r }),
      Y.recruit.map((l) => /* @__PURE__ */ e(
        G,
        {
          icon: l.icon,
          label: l.label,
          desc: r ? l.desc : void 0,
          active: a === l.id,
          onClick: () => c(l.id),
          isOpen: r,
          badge: l.badge
        },
        l.id
      )),
      /* @__PURE__ */ e(Q, { label: "Novos Fluxos", isOpen: r }),
      Y.flows.map((l) => /* @__PURE__ */ e(
        G,
        {
          icon: l.icon,
          label: l.label,
          desc: r ? l.desc : void 0,
          active: a === l.id,
          onClick: () => c(l.id),
          isOpen: r,
          badge: l.badge
        },
        l.id
      )),
      /* @__PURE__ */ e(Q, { label: "Auth & Onboarding", isOpen: r }),
      Y.auth.map((l) => /* @__PURE__ */ e(
        G,
        {
          icon: l.icon,
          label: l.label,
          desc: r ? l.desc : void 0,
          active: a === l.id,
          onClick: () => c(l.id),
          isOpen: r,
          badge: l.badge
        },
        l.id
      )),
      /* @__PURE__ */ e(Q, { label: "Família", isOpen: r }),
      Y.family.map((l) => /* @__PURE__ */ e(
        G,
        {
          icon: l.icon,
          label: l.label,
          desc: r ? l.desc : void 0,
          active: a === l.id,
          onClick: () => c(l.id),
          isOpen: r,
          badge: l.badge
        },
        l.id
      )),
      /* @__PURE__ */ e(Q, { label: "Admin & Suporte", isOpen: r }),
      Y.admin.map((l) => /* @__PURE__ */ e(
        G,
        {
          icon: l.icon,
          label: l.label,
          desc: r ? l.desc : void 0,
          active: a === l.id,
          onClick: () => c(l.id),
          isOpen: r,
          badge: l.badge
        },
        l.id
      )),
      /* @__PURE__ */ e(Q, { label: "UI Kit", isOpen: r }),
      Y.uikit.map((l) => /* @__PURE__ */ e(
        G,
        {
          icon: l.icon,
          label: l.label,
          active: a === l.id,
          onClick: () => c(l.id),
          isOpen: r
        },
        l.id
      ))
    ] }),
    /* @__PURE__ */ d("div", { className: "pt-4 border-t border-border space-y-1", children: [
      /* @__PURE__ */ e(G, { icon: et, label: "Definições", active: !1, isOpen: r }),
      /* @__PURE__ */ e(G, { icon: at, label: "Sair", active: !1, isOpen: r, variant: "danger" })
    ] })
  ] });
}, En = ({
  currentView: a,
  setCurrentView: t,
  isOpen: r,
  setIsOpen: s,
  isMobileOpen: n,
  setIsMobileOpen: c
}) => /* @__PURE__ */ d(xe, { children: [
  /* @__PURE__ */ e("aside", { className: o(
    "fixed top-0 left-0 h-full bg-card border-r border-border z-50 transition-all duration-500 ease-in-out flex-col hidden md:flex",
    r ? "w-72" : "w-20"
  ), children: /* @__PURE__ */ e(We, { currentView: a, setCurrentView: t, isOpen: r, setIsOpen: s }) }),
  n && /* @__PURE__ */ e("div", { className: "fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 md:hidden", onClick: () => c(!1) }),
  /* @__PURE__ */ d("aside", { className: o(
    "fixed top-0 left-0 h-full w-72 bg-card border-r border-border z-[60] transition-transform duration-300 ease-in-out md:hidden",
    n ? "translate-x-0" : "-translate-x-full"
  ), children: [
    /* @__PURE__ */ e("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ e("button", { onClick: () => c(!1), className: "p-2 hover:bg-accent rounded-xl transition-colors text-muted-foreground", children: /* @__PURE__ */ e(ee, { size: 20 }) }) }),
    /* @__PURE__ */ e(
      We,
      {
        currentView: a,
        setCurrentView: t,
        isOpen: !0,
        setIsOpen: s,
        onNavigate: () => c(!1)
      }
    )
  ] })
] }), Ln = ({ open: a, onClose: t, profile: r }) => {
  const [s, n] = I(!1);
  return a ? /* @__PURE__ */ e(
    E.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-foreground/50 backdrop-blur-sm",
      onClick: t,
      children: /* @__PURE__ */ d(
        E.div,
        {
          initial: { opacity: 0, y: 80, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 60, scale: 0.95 },
          transition: { type: "spring", damping: 25, stiffness: 300 },
          className: "bg-card w-full max-w-lg rounded-t-3xl md:rounded-3xl shadow-elevated border border-border relative max-h-[90vh] overflow-y-auto",
          onClick: (c) => c.stopPropagation(),
          children: [
            /* @__PURE__ */ d("div", { className: "h-28 bg-gradient-to-br from-primary/20 via-info/10 to-primary/5 rounded-t-3xl relative", children: [
              /* @__PURE__ */ e("button", { onClick: t, className: "absolute top-4 right-4 p-2 bg-card/80 backdrop-blur-sm rounded-xl text-muted-foreground hover:text-foreground transition-all", children: /* @__PURE__ */ e(ee, { size: 18 }) }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => {
                    n(!s), P(s ? "Removido dos favoritos" : "Adicionado aos favoritos");
                  },
                  className: "absolute top-4 left-4 p-2 bg-card/80 backdrop-blur-sm rounded-xl transition-all",
                  children: /* @__PURE__ */ e(H, { size: 18, className: s ? "text-destructive fill-destructive" : "text-muted-foreground" })
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: "flex justify-center -mt-12 relative z-10", children: /* @__PURE__ */ e("div", { className: "w-24 h-24 rounded-2xl bg-secondary overflow-hidden border-4 border-card shadow-elevated", children: /* @__PURE__ */ e("img", { src: `https://i.pravatar.cc/200?u=care${r.avatarId}`, alt: r.name, className: "w-full h-full object-cover" }) }) }),
            /* @__PURE__ */ d("div", { className: "p-6 pt-4 space-y-6", children: [
              /* @__PURE__ */ d("div", { className: "text-center", children: [
                /* @__PURE__ */ d("div", { className: "flex items-center justify-center gap-2 mb-1", children: [
                  /* @__PURE__ */ e("h2", { className: "text-xl font-display font-black text-foreground uppercase tracking-tight", children: r.name }),
                  /* @__PURE__ */ e(ae, { size: 18, className: "text-success" })
                ] }),
                /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground font-medium", children: r.role }),
                /* @__PURE__ */ d("div", { className: "flex items-center justify-center gap-4 mt-3", children: [
                  /* @__PURE__ */ d("span", { className: "flex items-center gap-1 text-sm font-bold text-warning", children: [
                    /* @__PURE__ */ e(de, { size: 16, className: "fill-current" }),
                    " ",
                    r.rating
                  ] }),
                  /* @__PURE__ */ d("span", { className: "text-sm text-muted-foreground flex items-center gap-1", children: [
                    /* @__PURE__ */ e(ht, { size: 14 }),
                    " ",
                    r.location || "Porto, PT"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-3", children: [
                { label: "Experiência", value: r.experience || "8 anos", icon: xt },
                { label: "Projetos", value: "24", icon: se },
                { label: "Tempo Resp.", value: "< 2h", icon: Le }
              ].map((c) => /* @__PURE__ */ d("div", { className: "bg-secondary/50 rounded-xl p-3 text-center", children: [
                /* @__PURE__ */ e(c.icon, { size: 16, className: "mx-auto text-primary mb-1" }),
                /* @__PURE__ */ e("p", { className: "text-sm font-display font-black text-foreground", children: c.value }),
                /* @__PURE__ */ e("p", { className: "text-[9px] font-display font-medium text-muted-foreground uppercase tracking-widest", children: c.label })
              ] }, c.label)) }),
              /* @__PURE__ */ d("div", { children: [
                /* @__PURE__ */ e("p", { className: "text-xs font-display font-bold text-foreground uppercase tracking-widest mb-2", children: "Sobre" }),
                /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground leading-relaxed", children: r.bio || "Especialista com mais de 8 anos de experiência em contexto hospitalar e domiciliário. Certificada em cuidados intensivos, apoio pós-operatório e gestão de medicação." })
              ] }),
              /* @__PURE__ */ d("div", { children: [
                /* @__PURE__ */ e("p", { className: "text-xs font-display font-bold text-foreground uppercase tracking-widest mb-2", children: "Competências" }),
                /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: (r.skills || ["Drenagem", "Curativos", "Diabetes", "Pós-Operatório", "Geriatria"]).map((c) => /* @__PURE__ */ e("span", { className: "text-[10px] font-display font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg uppercase tracking-widest", children: c }, c)) })
              ] }),
              /* @__PURE__ */ d("div", { className: "bg-secondary/50 rounded-2xl p-4 flex items-center justify-between", children: [
                /* @__PURE__ */ d("div", { children: [
                  /* @__PURE__ */ e("p", { className: "text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest", children: "Preço Base" }),
                  /* @__PURE__ */ d("p", { className: "text-2xl font-display font-black text-foreground tracking-tighter", children: [
                    r.price,
                    "€",
                    /* @__PURE__ */ e("span", { className: "text-sm text-muted-foreground font-medium ml-1", children: "/h" })
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ e("span", { className: "px-3 py-1 text-[9px] font-display font-bold rounded-lg uppercase tracking-widest bg-success/10 text-success", children: "Disponível" }) })
              ] }),
              /* @__PURE__ */ d("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ d(_, { variant: "default", size: "lg", className: "flex-1", onClick: () => {
                  P.success("Proposta de recrutamento enviada!"), t();
                }, children: [
                  /* @__PURE__ */ e(se, { size: 16 }),
                  " Propor Recrutamento"
                ] }),
                /* @__PURE__ */ e(_, { variant: "outline", size: "lg", onClick: () => {
                  P.info("Chat aberto com " + r.name), t();
                }, children: /* @__PURE__ */ e(he, { size: 16 }) }),
                /* @__PURE__ */ e(_, { variant: "outline", size: "lg", onClick: () => P.info("A ligar..."), children: /* @__PURE__ */ e(vt, { size: 16 }) })
              ] }),
              /* @__PURE__ */ d("div", { children: [
                /* @__PURE__ */ e("p", { className: "text-xs font-display font-bold text-foreground uppercase tracking-widest mb-3", children: "Disponibilidade" }),
                /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-1.5", children: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((c, l) => /* @__PURE__ */ e("div", { className: `text-center p-2 rounded-xl text-[10px] font-display font-bold uppercase ${l < 5 ? "bg-success/10 text-success" : "bg-secondary text-muted-foreground"}`, children: c }, c)) })
              ] })
            ] })
          ]
        }
      )
    }
  ) : null;
}, gi = ({ title: a, desc: t }) => /* @__PURE__ */ d("div", { className: "space-y-1 sm:space-y-2", children: [
  /* @__PURE__ */ e("h2", { className: "text-xl sm:text-3xl md:text-4xl font-display font-black text-foreground tracking-tighter leading-tight sm:leading-none uppercase break-words", children: a }),
  /* @__PURE__ */ e("p", { className: "text-xs sm:text-base text-muted-foreground font-medium", children: t })
] }), De = ({ title: a, children: t }) => /* @__PURE__ */ d("section", { className: "space-y-4", children: [
  /* @__PURE__ */ e("h4", { className: "text-[10px] font-display font-black text-muted-foreground uppercase tracking-[0.4em] border-l-4 border-primary pl-4", children: a }),
  /* @__PURE__ */ e("div", { className: "bg-card p-4 sm:p-8 rounded-3xl border border-border shadow-card relative overflow-hidden", children: t })
] }), pe = ({ label: a, value: t, icon: r, colorClass: s }) => /* @__PURE__ */ d("div", { className: "bg-card p-3 sm:p-7 rounded-3xl border border-border shadow-card space-y-2 sm:space-y-4 hover:shadow-elevated transition-all group", children: [
  /* @__PURE__ */ e("div", { className: o("w-9 h-9 sm:w-12 sm:h-12 rounded-2xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform", s || "text-primary"), children: /* @__PURE__ */ e(r, { size: 18, className: "sm:!size-[22px]" }) }),
  /* @__PURE__ */ d("div", { children: [
    /* @__PURE__ */ e("div", { className: "text-[9px] sm:text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest leading-tight", children: a }),
    /* @__PURE__ */ e("div", { className: "text-lg sm:text-3xl font-display font-black text-foreground tracking-tighter leading-none mt-1 break-all", children: t })
  ] })
] }), bi = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } }
}, X = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }
}, Je = {
  caregiver: { activeContracts: 3, totalHours: 248, rating: 4.9, totalReviews: 27 },
  family: { activeContracts: 1, totalHours: 96, rating: 5, totalReviews: 4 }
}, hi = [
  { type: "credit", description: "Pagamento recebido — Contrato #1042", amount: 320, date: "2026-04-14" },
  { type: "debit", description: "Comissão plataforma", amount: 32, date: "2026-04-14" },
  { type: "credit", description: "Pagamento recebido — Contrato #1038", amount: 180, date: "2026-04-12" },
  { type: "credit", description: "Bónus avaliação 5 estrelas", amount: 10, date: "2026-04-11" },
  { type: "debit", description: "Comissão plataforma", amount: 18, date: "2026-04-10" }
], xi = [
  { title: "Pagamento Garantido", sub: "Receba pontualmente", icon: me },
  { title: "Perfil Verificado", sub: "Mais famílias confiam", icon: ae },
  { title: "Reputação Pública", sub: "Avaliações verificáveis", icon: de },
  { title: "Proteção Jurídica", sub: "Contrato formal", icon: wt }
], vi = [
  { title: "Cuidadores Verificados", sub: "KYC e antecedentes", icon: ae },
  { title: "Contratos Jurídicos", sub: "Assinatura digital", icon: B },
  { title: "Pagamento Seguro", sub: "Proteção financeira", icon: me },
  { title: "Recibos Fiscais", sub: "Válidos para IRS", icon: Ct }
], yi = [
  { label: "Completar verificação KYC", href: "#", icon: ae }
], Ni = [
  { label: "Ativar conta (pagamento)", href: "#", icon: me },
  { label: "Completar verificação KYC", href: "#", icon: ae },
  { label: "Completar perfil do familiar", href: "#", icon: V }
], _a = ({ role: a = "caregiver" }) => {
  const t = a === "caregiver" ? Je.caregiver : Je.family, r = a === "caregiver" ? xi : vi, s = a === "caregiver" ? yi : Ni;
  return /* @__PURE__ */ d("div", { className: "space-y-6 sm:space-y-8 animate-fade-in", children: [
    /* @__PURE__ */ e(
      gi,
      {
        title: a === "caregiver" ? "Dashboard Cuidador" : "Dashboard Família",
        desc: a === "caregiver" ? "Visão geral da sua atividade como cuidador." : "Visão geral do cuidado familiar e contratos ativos."
      }
    ),
    /* @__PURE__ */ d(E.div, { variants: bi, initial: "hidden", animate: "show", children: [
      /* @__PURE__ */ e(E.div, { variants: X, className: "bg-card rounded-3xl p-5 sm:p-7 border border-border shadow-card", children: /* @__PURE__ */ d("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3", children: [
        /* @__PURE__ */ d("div", { children: [
          /* @__PURE__ */ d("h2", { className: "text-2xl sm:text-3xl font-display font-black text-foreground tracking-tighter leading-none uppercase", children: [
            "Olá, ",
            a === "caregiver" ? "Helena" : "João"
          ] }),
          /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground font-medium mt-1", children: a === "caregiver" ? "Enfermeira Especializada" : "Gestor Familiar" })
        ] }),
        /* @__PURE__ */ d("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[9px] font-display font-bold uppercase tracking-widest bg-success/10 text-success border border-success/30 w-fit", children: [
          /* @__PURE__ */ e(aa, { size: 12 }),
          " Conta Ativa"
        ] })
      ] }) }),
      /* @__PURE__ */ d(E.div, { variants: X, className: "grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mt-5", children: [
        /* @__PURE__ */ e(pe, { label: "Contratos Ativos", value: String(t.activeContracts), icon: B, colorClass: "text-primary" }),
        /* @__PURE__ */ e(pe, { label: "Horas Totais", value: `${t.totalHours}h`, icon: Le, colorClass: "text-warning" }),
        /* @__PURE__ */ e(pe, { label: "Avaliação", value: String(t.rating), icon: de, colorClass: "text-info" }),
        /* @__PURE__ */ e(pe, { label: "Avaliações", value: String(t.totalReviews), icon: V, colorClass: "text-success" })
      ] }),
      /* @__PURE__ */ d(E.div, { variants: X, className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5", children: [
        a === "family" ? /* @__PURE__ */ e(
          "div",
          {
            className: "bg-card rounded-3xl p-5 sm:p-7 border border-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all cursor-pointer group",
            onClick: () => P.info("Navegar para pesquisa de cuidadores"),
            children: /* @__PURE__ */ d("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform", children: /* @__PURE__ */ e(ne, { size: 20 }) }),
              /* @__PURE__ */ d("div", { children: [
                /* @__PURE__ */ e("p", { className: "font-display font-black text-foreground text-sm uppercase", children: "Procurar Cuidadores" }),
                /* @__PURE__ */ e("p", { className: "text-[10px] text-muted-foreground font-medium", children: "Encontrar profissional ideal" })
              ] })
            ] })
          }
        ) : /* @__PURE__ */ e(
          "div",
          {
            className: "bg-card rounded-3xl p-5 sm:p-7 border border-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all cursor-pointer group",
            onClick: () => P.info("Navegar para propostas"),
            children: /* @__PURE__ */ d("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform", children: /* @__PURE__ */ e(B, { size: 20 }) }),
              /* @__PURE__ */ d("div", { children: [
                /* @__PURE__ */ e("p", { className: "font-display font-black text-foreground text-sm uppercase", children: "Propostas" }),
                /* @__PURE__ */ e("p", { className: "text-[10px] text-muted-foreground font-medium", children: "Solicitações recebidas" })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            className: "bg-card rounded-3xl p-5 sm:p-7 border border-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all cursor-pointer group",
            onClick: () => P.info("Navegar para contratos"),
            children: /* @__PURE__ */ d("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-2xl bg-success/10 flex items-center justify-center text-success group-hover:scale-110 transition-transform", children: /* @__PURE__ */ e(B, { size: 20 }) }),
              /* @__PURE__ */ d("div", { children: [
                /* @__PURE__ */ e("p", { className: "font-display font-black text-foreground text-sm uppercase", children: "Contratos" }),
                /* @__PURE__ */ e("p", { className: "text-[10px] text-muted-foreground font-medium", children: "Ver todos os contratos" })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            className: "bg-card rounded-3xl p-5 sm:p-7 border border-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all cursor-pointer group",
            onClick: () => P.info("Navegar para carteira"),
            children: /* @__PURE__ */ d("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-2xl bg-warning/10 flex items-center justify-center text-warning group-hover:scale-110 transition-transform", children: /* @__PURE__ */ e(me, { size: 20 }) }),
              /* @__PURE__ */ d("div", { children: [
                /* @__PURE__ */ e("p", { className: "font-display font-black text-foreground text-sm uppercase", children: "Carteira" }),
                /* @__PURE__ */ e("p", { className: "text-[10px] text-muted-foreground font-medium", children: "Saldo e movimentos" })
              ] })
            ] })
          }
        )
      ] }),
      s.length > 0 && /* @__PURE__ */ e(E.div, { variants: X, className: "mt-5", children: /* @__PURE__ */ e(De, { title: "Próximos Passos", children: /* @__PURE__ */ e("div", { className: "space-y-3", children: s.map((n, c) => /* @__PURE__ */ d(
        "div",
        {
          className: "flex items-center justify-between p-4 bg-secondary rounded-2xl border border-border/50 hover:border-warning/30 transition-all cursor-pointer group",
          onClick: () => P.info(n.label),
          children: [
            /* @__PURE__ */ d("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ e("div", { className: "w-9 h-9 bg-warning/10 rounded-xl flex items-center justify-center text-warning", children: /* @__PURE__ */ e(n.icon, { size: 16 }) }),
              /* @__PURE__ */ e("span", { className: "text-sm font-display font-bold text-foreground", children: n.label })
            ] }),
            /* @__PURE__ */ e(W, { size: 16, className: "text-muted-foreground group-hover:text-warning transition-colors" })
          ]
        },
        c
      )) }) }) }),
      /* @__PURE__ */ e(E.div, { variants: X, className: "mt-5", children: /* @__PURE__ */ e(De, { title: "Benefícios da Plataforma", children: /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4", children: r.map((n, c) => /* @__PURE__ */ d("div", { className: "bg-secondary rounded-2xl p-4 sm:p-5 text-center hover:bg-primary/5 transition-all group", children: [
        /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-2xl bg-card flex items-center justify-center text-primary mx-auto mb-3 group-hover:scale-110 transition-transform border border-border", children: /* @__PURE__ */ e(n.icon, { size: 18 }) }),
        /* @__PURE__ */ e("p", { className: "text-xs font-display font-black text-foreground uppercase", children: n.title }),
        /* @__PURE__ */ e("p", { className: "text-[10px] text-muted-foreground font-medium mt-1", children: n.sub })
      ] }, c)) }) }) }),
      /* @__PURE__ */ e(E.div, { variants: X, className: "mt-5", children: /* @__PURE__ */ d(De, { title: "Atividade Recente", children: [
        /* @__PURE__ */ d("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ e("p", { className: "text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest", children: "Últimos movimentos" }),
          /* @__PURE__ */ e(_, { variant: "link", size: "sm", onClick: () => P.info("Ver todo o histórico"), children: "Ver Todos" })
        ] }),
        /* @__PURE__ */ e("div", { className: "space-y-3", children: hi.map((n, c) => /* @__PURE__ */ d("div", { className: "flex items-center justify-between p-3 sm:p-4 bg-secondary rounded-2xl border border-border/50", children: [
          /* @__PURE__ */ d("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e("div", { className: `w-9 h-9 rounded-xl flex items-center justify-center ${n.type === "credit" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`, children: n.type === "credit" ? /* @__PURE__ */ e(yt, { size: 16 }) : /* @__PURE__ */ e(Nt, { size: 16 }) }),
            /* @__PURE__ */ d("div", { children: [
              /* @__PURE__ */ e("p", { className: "text-sm font-display font-bold text-foreground", children: n.description }),
              /* @__PURE__ */ e("p", { className: "text-[10px] text-muted-foreground font-medium", children: new Date(n.date).toLocaleDateString("pt-PT") })
            ] })
          ] }),
          /* @__PURE__ */ d("span", { className: `text-sm font-display font-black ${n.type === "credit" ? "text-success" : "text-destructive"}`, children: [
            n.type === "credit" ? "+" : "-",
            n.amount,
            "€"
          ] })
        ] }, c)) })
      ] }) })
    ] })
  ] });
}, Fn = () => /* @__PURE__ */ e(_a, { role: "caregiver" }), Bn = () => /* @__PURE__ */ e(_a, { role: "family" }), wi = Fa(
  ({ className: a, activeClassName: t, pendingClassName: r, to: s, ...n }, c) => /* @__PURE__ */ e(
    At,
    {
      ref: c,
      to: s,
      className: ({ isActive: l, isPending: f }) => o(a, l && t, f && r),
      ...n
    }
  )
);
wi.displayName = "NavLink";
export {
  Yi as Accordion,
  Tr as AccordionContent,
  Rr as AccordionItem,
  Sr as AccordionTrigger,
  Ot as Alert,
  Kt as AlertDescription,
  bn as AlertDialog,
  Gs as AlertDialogAction,
  Vs as AlertDialogCancel,
  js as AlertDialogContent,
  Bs as AlertDialogDescription,
  Ls as AlertDialogFooter,
  Es as AlertDialogHeader,
  Fs as AlertDialogTitle,
  hn as AlertDialogTrigger,
  $t as AlertTitle,
  gn as AspectRatio,
  di as Avatar,
  ci as AvatarFallback,
  li as AvatarImage,
  Bi as Badge,
  Dr as Breadcrumb,
  Ar as BreadcrumbItem,
  _r as BreadcrumbLink,
  Mr as BreadcrumbList,
  jr as BreadcrumbPage,
  Er as BreadcrumbSeparator,
  _ as Button,
  cs as Calendar,
  _t as Card,
  Ft as CardContent,
  Lt as CardDescription,
  Bt as CardFooter,
  jt as CardHeader,
  Et as CardTitle,
  ms as Carousel,
  us as CarouselContent,
  ps as CarouselItem,
  gs as CarouselNext,
  fs as CarouselPrevious,
  Is as ChartContainer,
  fn as ChartLegend,
  As as ChartLegendContent,
  Ds as ChartStyle,
  pn as ChartTooltip,
  Ms as ChartTooltipContent,
  dr as Checkbox,
  rn as Collapsible,
  sn as CollapsibleContent,
  on as CollapsibleTrigger,
  Pa as Command,
  un as CommandDialog,
  ks as CommandEmpty,
  Rs as CommandGroup,
  ws as CommandInput,
  Ts as CommandItem,
  Cs as CommandList,
  Ss as CommandSeparator,
  Ps as CommandShortcut,
  xn as ContextMenu,
  Ys as ContextMenuCheckboxItem,
  $s as ContextMenuContent,
  yn as ContextMenuGroup,
  Ks as ContextMenuItem,
  qs as ContextMenuLabel,
  Us as ContextMenuRadioItem,
  Ws as ContextMenuSeparator,
  Js as ContextMenuShortcut,
  Nn as ContextMenuSub,
  Os as ContextMenuSubContent,
  Hs as ContextMenuSubTrigger,
  vn as ContextMenuTrigger,
  Fn as DashboardCaregiverView,
  Bn as DashboardFamilyView,
  _a as DashboardView,
  bs as Dialog,
  mn as DialogClose,
  Ta as DialogContent,
  Ns as DialogDescription,
  vs as DialogFooter,
  xs as DialogHeader,
  Sa as DialogOverlay,
  hs as DialogPortal,
  ys as DialogTitle,
  cn as DialogTrigger,
  De as DocCard,
  qo as Drawer,
  tn as DrawerClose,
  Jo as DrawerContent,
  es as DrawerDescription,
  Xo as DrawerFooter,
  Qo as DrawerHeader,
  Ca as DrawerOverlay,
  Wo as DrawerPortal,
  Zo as DrawerTitle,
  an as DrawerTrigger,
  wn as DropdownMenu,
  ai as DropdownMenuCheckboxItem,
  Zs as DropdownMenuContent,
  kn as DropdownMenuGroup,
  ei as DropdownMenuItem,
  ri as DropdownMenuLabel,
  Rn as DropdownMenuPortal,
  Tn as DropdownMenuRadioGroup,
  ti as DropdownMenuRadioItem,
  oi as DropdownMenuSeparator,
  si as DropdownMenuShortcut,
  Sn as DropdownMenuSub,
  Xs as DropdownMenuSubContent,
  Qs as DropdownMenuSubTrigger,
  Cn as DropdownMenuTrigger,
  jn as EvyraHeader,
  En as EvyraSidebar,
  Vi as Form,
  or as FormControl,
  sr as FormDescription,
  Hi as FormField,
  tr as FormItem,
  rr as FormLabel,
  ir as FormMessage,
  In as HoverCard,
  ni as HoverCardContent,
  Dn as HoverCardTrigger,
  oa as Input,
  Nr as InputOTP,
  wr as InputOTPGroup,
  kr as InputOTPSeparator,
  Cr as InputOTPSlot,
  sa as Label,
  Mn as LoginView,
  Wr as Menubar,
  ao as MenubarCheckboxItem,
  Zr as MenubarContent,
  Qi as MenubarGroup,
  eo as MenubarItem,
  ro as MenubarLabel,
  Ji as MenubarMenu,
  to as MenubarRadioItem,
  oo as MenubarSeparator,
  so as MenubarShortcut,
  Xi as MenubarSub,
  Xr as MenubarSubContent,
  Qr as MenubarSubTrigger,
  Jr as MenubarTrigger,
  wi as NavLink,
  Or as NavigationMenu,
  Ur as NavigationMenuContent,
  qi as NavigationMenuItem,
  Wi as NavigationMenuLink,
  $r as NavigationMenuList,
  Yr as NavigationMenuTrigger,
  Lr as Pagination,
  Fr as PaginationContent,
  Hr as PaginationEllipsis,
  Br as PaginationItem,
  Ve as PaginationLink,
  Vr as PaginationNext,
  Gr as PaginationPrevious,
  Pn as Popover,
  ii as PopoverContent,
  zn as PopoverTrigger,
  Ln as ProfileModal,
  ar as Progress,
  lr as RadioGroup,
  cr as RadioGroupItem,
  An as RegisterView,
  ln as ResizableHandle,
  dn as ResizablePanel,
  nn as ResizablePanelGroup,
  as as ScrollArea,
  ka as ScrollBar,
  gi as SectionHeader,
  Oi as Select,
  ur as SelectContent,
  $i as SelectGroup,
  fr as SelectItem,
  pr as SelectLabel,
  fa as SelectScrollDownButton,
  pa as SelectScrollUpButton,
  gr as SelectSeparator,
  mr as SelectTrigger,
  Ki as SelectValue,
  xa as Separator,
  no as Sheet,
  en as SheetClose,
  ya as SheetContent,
  fo as SheetDescription,
  uo as SheetFooter,
  mo as SheetHeader,
  va as SheetOverlay,
  lo as SheetPortal,
  po as SheetTitle,
  Zi as SheetTrigger,
  Ro as Sidebar,
  Ao as SidebarContent,
  Do as SidebarFooter,
  _o as SidebarGroup,
  Eo as SidebarGroupAction,
  Lo as SidebarGroupContent,
  jo as SidebarGroupLabel,
  Io as SidebarHeader,
  Po as SidebarInset,
  Fo as SidebarMenu,
  Oo as SidebarMenuBadge,
  Vo as SidebarMenuButton,
  Bo as SidebarMenuItem,
  $o as SidebarMenuSkeleton,
  Ko as SidebarMenuSub,
  Uo as SidebarMenuSubButton,
  Yo as SidebarMenuSubItem,
  ko as SidebarProvider,
  To as SidebarRail,
  So as SidebarTrigger,
  Ue as Skeleton,
  br as Slider,
  pe as StatBlock,
  hr as Switch,
  ts as Table,
  os as TableBody,
  ls as TableCaption,
  ds as TableCell,
  ss as TableFooter,
  ns as TableHead,
  rs as TableHeader,
  is as TableRow,
  Ui as Tabs,
  Ir as TabsContent,
  Pr as TabsList,
  zr as TabsTrigger,
  nr as Textarea,
  _n as ThemeProvider,
  na as Toast,
  qt as ToastAction,
  Gi as Toaster,
  xr as Toggle,
  vr as ToggleGroup,
  yr as ToggleGroupItem,
  bo as Tooltip,
  Na as TooltipContent,
  go as TooltipProvider,
  ho as TooltipTrigger,
  Vt as badgeVariants,
  Z as buttonVariants,
  o as cn,
  Kr as navigationMenuTriggerStyle,
  Zt as toast,
  ga as toggleVariants,
  io as useIsMobile,
  ke as useSidebar,
  mi as useTheme,
  er as useToast
};
//# sourceMappingURL=bloom-elements.esm.js.map
