"use client";
import { jsx as e, jsxs as s, Fragment as se } from "react/jsx-runtime";
import * as n from "react";
import Oe, { useState as z, createContext as qa, useEffect as Le, useContext as Wa, useRef as Xe, forwardRef as Ja } from "react";
import { Slot as W } from "@radix-ui/react-slot";
import { cva as K } from "class-variance-authority";
import { clsx as Qa } from "clsx";
import { twMerge as Xa } from "tailwind-merge";
import * as da from "@radix-ui/react-label";
import * as F from "@radix-ui/react-toast";
import { X as ne, Check as L, Circle as ke, ChevronDown as Se, ChevronUp as Za, Dot as et, ChevronRight as Z, ChevronLeft as la, MoreHorizontal as at, PanelLeft as tt, GripVertical as rt, ArrowLeft as ot, ArrowRight as Re, Search as pe, Mail as st, Lock as it, EyeOff as nt, Eye as dt, Loader2 as Ye, Users as O, Heart as Y, Shield as Ve, Camera as Ze, ShieldCheck as ee, Sun as ca, Menu as ma, Moon as lt, Bell as we, Clock as Ke, FileText as G, MessageSquare as Ce, CheckCircle as ua, Settings as ct, LogOut as mt, BarChart3 as ea, LayoutDashboard as aa, Briefcase as me, Zap as Ae, Wallet as he, CreditCard as Me, Key as ut, UserPlus as pt, Calendar as ft, Stethoscope as gt, AlertTriangle as bt, Star as fe, HelpCircle as ht, Layers as ta, Globe as xt, Palette as vt, Smartphone as yt, Sparkles as Nt, Box as wt, CircleDot as Ct, Type as kt, Ruler as St, MapPin as Rt, Award as It, Phone as Tt, ArrowUp as Pt, ArrowDown as zt, Scale as Dt, Receipt as At } from "lucide-react";
import * as Be from "@radix-ui/react-progress";
import { FormProvider as Mt, Controller as Et, useFormContext as _t } from "react-hook-form";
import * as $e from "@radix-ui/react-checkbox";
import * as ge from "@radix-ui/react-radio-group";
import * as P from "@radix-ui/react-select";
import * as ce from "@radix-ui/react-slider";
import * as Ge from "@radix-ui/react-switch";
import * as pa from "@radix-ui/react-toggle";
import * as Ie from "@radix-ui/react-toggle-group";
import { OTPInput as jt, OTPInputContext as Ft } from "input-otp";
import * as X from "@radix-ui/react-accordion";
import * as ae from "@radix-ui/react-tabs";
import * as _ from "@radix-ui/react-navigation-menu";
import * as x from "@radix-ui/react-menubar";
import * as fa from "@radix-ui/react-separator";
import * as v from "@radix-ui/react-dialog";
import * as xe from "@radix-ui/react-tooltip";
import { Drawer as $ } from "vaul";
import * as Ue from "@radix-ui/react-collapsible";
import * as Q from "@radix-ui/react-scroll-area";
import * as qe from "react-resizable-panels";
import { DayPicker as Lt } from "react-day-picker";
import Vt from "embla-carousel-react";
import { Command as j } from "cmdk";
import * as We from "recharts";
import * as Bt from "@radix-ui/react-aspect-ratio";
import * as E from "@radix-ui/react-alert-dialog";
import * as R from "@radix-ui/react-context-menu";
import * as N from "@radix-ui/react-dropdown-menu";
import * as be from "@radix-ui/react-popover";
import * as Te from "@radix-ui/react-hover-card";
import * as de from "@radix-ui/react-avatar";
import { toast as T } from "sonner";
import { AnimatePresence as Je, motion as I } from "framer-motion";
import { NavLink as $t } from "react-router-dom";
function i(...t) {
  return Xa(Qa(t));
}
const ie = K(
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
), S = n.forwardRef(
  ({ className: t, variant: a, size: r, asChild: o = !1, ...d }, m) => /* @__PURE__ */ e(o ? W : "button", { className: i(ie({ variant: a, size: r, className: t })), ref: m, ...d })
);
S.displayName = "Button";
const Gt = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e("div", { ref: r, className: i("rounded-lg border bg-card text-card-foreground shadow-sm", t), ...a }));
Gt.displayName = "Card";
const Ht = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("div", { ref: r, className: i("flex flex-col space-y-1.5 p-6", t), ...a })
);
Ht.displayName = "CardHeader";
const Ot = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("h3", { ref: r, className: i("text-2xl font-semibold leading-none tracking-tight", t), ...a })
);
Ot.displayName = "CardTitle";
const Yt = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("p", { ref: r, className: i("text-sm text-muted-foreground", t), ...a })
);
Yt.displayName = "CardDescription";
const Kt = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("div", { ref: r, className: i("p-6 pt-0", t), ...a })
);
Kt.displayName = "CardContent";
const Ut = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("div", { ref: r, className: i("flex items-center p-6 pt-0", t), ...a })
);
Ut.displayName = "CardFooter";
const ga = n.forwardRef(
  ({ className: t, type: a, ...r }, o) => /* @__PURE__ */ e(
    "input",
    {
      type: a,
      className: i(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        t
      ),
      ref: o,
      ...r
    }
  )
);
ga.displayName = "Input";
const qt = K("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), ba = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(da.Root, { ref: r, className: i(qt(), t), ...a }));
ba.displayName = da.Root.displayName;
const Wt = K(
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
function tn({ className: t, variant: a, ...r }) {
  return /* @__PURE__ */ e("div", { className: i(Wt({ variant: a }), t), ...r });
}
const Jt = K(
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
), Qt = n.forwardRef(({ className: t, variant: a, ...r }, o) => /* @__PURE__ */ e("div", { ref: o, role: "alert", className: i(Jt({ variant: a }), t), ...r }));
Qt.displayName = "Alert";
const Xt = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("h5", { ref: r, className: i("mb-1 font-medium leading-none tracking-tight", t), ...a })
);
Xt.displayName = "AlertTitle";
const Zt = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("div", { ref: r, className: i("text-sm [&_p]:leading-relaxed", t), ...a })
);
Zt.displayName = "AlertDescription";
const er = F.Provider, ha = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  F.Viewport,
  {
    ref: r,
    className: i(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      t
    ),
    ...a
  }
));
ha.displayName = F.Viewport.displayName;
const ar = K(
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
), xa = n.forwardRef(({ className: t, variant: a, ...r }, o) => /* @__PURE__ */ e(F.Root, { ref: o, className: i(ar({ variant: a }), t), ...r }));
xa.displayName = F.Root.displayName;
const tr = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  F.Action,
  {
    ref: r,
    className: i(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      t
    ),
    ...a
  }
));
tr.displayName = F.Action.displayName;
const va = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  F.Close,
  {
    ref: r,
    className: i(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      t
    ),
    "toast-close": "",
    ...a,
    children: /* @__PURE__ */ e(ne, { className: "h-4 w-4" })
  }
));
va.displayName = F.Close.displayName;
const ya = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(F.Title, { ref: r, className: i("text-sm font-semibold", t), ...a }));
ya.displayName = F.Title.displayName;
const Na = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(F.Description, { ref: r, className: i("text-sm opacity-90", t), ...a }));
Na.displayName = F.Description.displayName;
const rr = 1, or = 1e6;
let Ee = 0;
function sr() {
  return Ee = (Ee + 1) % Number.MAX_SAFE_INTEGER, Ee.toString();
}
const _e = /* @__PURE__ */ new Map(), ra = (t) => {
  if (_e.has(t))
    return;
  const a = setTimeout(() => {
    _e.delete(t), ue({
      type: "REMOVE_TOAST",
      toastId: t
    });
  }, or);
  _e.set(t, a);
}, ir = (t, a) => {
  switch (a.type) {
    case "ADD_TOAST":
      return {
        ...t,
        toasts: [a.toast, ...t.toasts].slice(0, rr)
      };
    case "UPDATE_TOAST":
      return {
        ...t,
        toasts: t.toasts.map((r) => r.id === a.toast.id ? { ...r, ...a.toast } : r)
      };
    case "DISMISS_TOAST": {
      const { toastId: r } = a;
      return r ? ra(r) : t.toasts.forEach((o) => {
        ra(o.id);
      }), {
        ...t,
        toasts: t.toasts.map(
          (o) => o.id === r || r === void 0 ? {
            ...o,
            open: !1
          } : o
        )
      };
    }
    case "REMOVE_TOAST":
      return a.toastId === void 0 ? {
        ...t,
        toasts: []
      } : {
        ...t,
        toasts: t.toasts.filter((r) => r.id !== a.toastId)
      };
  }
}, ye = [];
let Ne = { toasts: [] };
function ue(t) {
  Ne = ir(Ne, t), ye.forEach((a) => {
    a(Ne);
  });
}
function nr({ ...t }) {
  const a = sr(), r = (d) => ue({
    type: "UPDATE_TOAST",
    toast: { ...d, id: a }
  }), o = () => ue({ type: "DISMISS_TOAST", toastId: a });
  return ue({
    type: "ADD_TOAST",
    toast: {
      ...t,
      id: a,
      open: !0,
      onOpenChange: (d) => {
        d || o();
      }
    }
  }), {
    id: a,
    dismiss: o,
    update: r
  };
}
function dr() {
  const [t, a] = n.useState(Ne);
  return n.useEffect(() => (ye.push(a), () => {
    const r = ye.indexOf(a);
    r > -1 && ye.splice(r, 1);
  }), [t]), {
    ...t,
    toast: nr,
    dismiss: (r) => ue({ type: "DISMISS_TOAST", toastId: r })
  };
}
function rn() {
  const { toasts: t } = dr();
  return /* @__PURE__ */ s(er, { children: [
    t.map(function({ id: a, title: r, description: o, action: d, ...m }) {
      return /* @__PURE__ */ s(xa, { ...m, children: [
        /* @__PURE__ */ s("div", { className: "grid gap-1", children: [
          r && /* @__PURE__ */ e(ya, { children: r }),
          o && /* @__PURE__ */ e(Na, { children: o })
        ] }),
        d,
        /* @__PURE__ */ e(va, {})
      ] }, a);
    }),
    /* @__PURE__ */ e(ha, {})
  ] });
}
const lr = n.forwardRef(({ className: t, value: a, ...r }, o) => /* @__PURE__ */ e(
  Be.Root,
  {
    ref: o,
    className: i("relative h-4 w-full overflow-hidden rounded-full bg-secondary", t),
    ...r,
    children: /* @__PURE__ */ e(
      Be.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (a || 0)}%)` }
      }
    )
  }
));
lr.displayName = Be.Root.displayName;
function oa({ className: t, ...a }) {
  return /* @__PURE__ */ e("div", { className: i("animate-pulse rounded-md bg-muted", t), ...a });
}
const on = Mt, wa = n.createContext({}), sn = ({
  ...t
}) => /* @__PURE__ */ e(wa.Provider, { value: { name: t.name }, children: /* @__PURE__ */ e(Et, { ...t }) }), Pe = () => {
  const t = n.useContext(wa), a = n.useContext(Ca), { getFieldState: r, formState: o } = _t(), d = r(t.name, o);
  if (!t)
    throw new Error("useFormField should be used within <FormField>");
  const { id: m } = a;
  return {
    id: m,
    name: t.name,
    formItemId: `${m}-form-item`,
    formDescriptionId: `${m}-form-item-description`,
    formMessageId: `${m}-form-item-message`,
    ...d
  };
}, Ca = n.createContext({}), cr = n.forwardRef(
  ({ className: t, ...a }, r) => {
    const o = n.useId();
    return /* @__PURE__ */ e(Ca.Provider, { value: { id: o }, children: /* @__PURE__ */ e("div", { ref: r, className: i("space-y-2", t), ...a }) });
  }
);
cr.displayName = "FormItem";
const mr = n.forwardRef(({ className: t, ...a }, r) => {
  const { error: o, formItemId: d } = Pe();
  return /* @__PURE__ */ e(ba, { ref: r, className: i(o && "text-destructive", t), htmlFor: d, ...a });
});
mr.displayName = "FormLabel";
const ur = n.forwardRef(
  ({ ...t }, a) => {
    const { error: r, formItemId: o, formDescriptionId: d, formMessageId: m } = Pe();
    return /* @__PURE__ */ e(
      W,
      {
        ref: a,
        id: o,
        "aria-describedby": r ? `${d} ${m}` : `${d}`,
        "aria-invalid": !!r,
        ...t
      }
    );
  }
);
ur.displayName = "FormControl";
const pr = n.forwardRef(
  ({ className: t, ...a }, r) => {
    const { formDescriptionId: o } = Pe();
    return /* @__PURE__ */ e("p", { ref: r, id: o, className: i("text-sm text-muted-foreground", t), ...a });
  }
);
pr.displayName = "FormDescription";
const fr = n.forwardRef(
  ({ className: t, children: a, ...r }, o) => {
    const { error: d, formMessageId: m } = Pe(), c = d ? String(d == null ? void 0 : d.message) : a;
    return c ? /* @__PURE__ */ e("p", { ref: o, id: m, className: i("text-sm font-medium text-destructive", t), ...r, children: c }) : null;
  }
);
fr.displayName = "FormMessage";
const gr = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  "textarea",
  {
    className: i(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      t
    ),
    ref: r,
    ...a
  }
));
gr.displayName = "Textarea";
const br = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  $e.Root,
  {
    ref: r,
    className: i(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      t
    ),
    ...a,
    children: /* @__PURE__ */ e($e.Indicator, { className: i("flex items-center justify-center text-current"), children: /* @__PURE__ */ e(L, { className: "h-4 w-4" }) })
  }
));
br.displayName = $e.Root.displayName;
const hr = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(ge.Root, { className: i("grid gap-2", t), ...a, ref: r }));
hr.displayName = ge.Root.displayName;
const xr = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  ge.Item,
  {
    ref: r,
    className: i(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      t
    ),
    ...a,
    children: /* @__PURE__ */ e(ge.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ e(ke, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
xr.displayName = ge.Item.displayName;
const nn = P.Root, dn = P.Group, ln = P.Value, vr = n.forwardRef(({ className: t, children: a, ...r }, o) => /* @__PURE__ */ s(
  P.Trigger,
  {
    ref: o,
    className: i(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      t
    ),
    ...r,
    children: [
      a,
      /* @__PURE__ */ e(P.Icon, { asChild: !0, children: /* @__PURE__ */ e(Se, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
vr.displayName = P.Trigger.displayName;
const ka = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  P.ScrollUpButton,
  {
    ref: r,
    className: i("flex cursor-default items-center justify-center py-1", t),
    ...a,
    children: /* @__PURE__ */ e(Za, { className: "h-4 w-4" })
  }
));
ka.displayName = P.ScrollUpButton.displayName;
const Sa = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  P.ScrollDownButton,
  {
    ref: r,
    className: i("flex cursor-default items-center justify-center py-1", t),
    ...a,
    children: /* @__PURE__ */ e(Se, { className: "h-4 w-4" })
  }
));
Sa.displayName = P.ScrollDownButton.displayName;
const yr = n.forwardRef(({ className: t, children: a, position: r = "popper", ...o }, d) => /* @__PURE__ */ e(P.Portal, { children: /* @__PURE__ */ s(
  P.Content,
  {
    ref: d,
    className: i(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      t
    ),
    position: r,
    ...o,
    children: [
      /* @__PURE__ */ e(ka, {}),
      /* @__PURE__ */ e(
        P.Viewport,
        {
          className: i(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: a
        }
      ),
      /* @__PURE__ */ e(Sa, {})
    ]
  }
) }));
yr.displayName = P.Content.displayName;
const Nr = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(P.Label, { ref: r, className: i("py-1.5 pl-8 pr-2 text-sm font-semibold", t), ...a }));
Nr.displayName = P.Label.displayName;
const wr = n.forwardRef(({ className: t, children: a, ...r }, o) => /* @__PURE__ */ s(
  P.Item,
  {
    ref: o,
    className: i(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t
    ),
    ...r,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(P.ItemIndicator, { children: /* @__PURE__ */ e(L, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ e(P.ItemText, { children: a })
    ]
  }
));
wr.displayName = P.Item.displayName;
const Cr = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(P.Separator, { ref: r, className: i("-mx-1 my-1 h-px bg-muted", t), ...a }));
Cr.displayName = P.Separator.displayName;
const kr = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ s(
  ce.Root,
  {
    ref: r,
    className: i("relative flex w-full touch-none select-none items-center", t),
    ...a,
    children: [
      /* @__PURE__ */ e(ce.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ e(ce.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ e(ce.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
kr.displayName = ce.Root.displayName;
const Sr = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  Ge.Root,
  {
    className: i(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      t
    ),
    ...a,
    ref: r,
    children: /* @__PURE__ */ e(
      Ge.Thumb,
      {
        className: i(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Sr.displayName = Ge.Root.displayName;
const Ra = K(
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
), Rr = n.forwardRef(({ className: t, variant: a, size: r, ...o }, d) => /* @__PURE__ */ e(pa.Root, { ref: d, className: i(Ra({ variant: a, size: r, className: t })), ...o }));
Rr.displayName = pa.Root.displayName;
const Ia = n.createContext({
  size: "default",
  variant: "default"
}), Ir = n.forwardRef(({ className: t, variant: a, size: r, children: o, ...d }, m) => /* @__PURE__ */ e(Ie.Root, { ref: m, className: i("flex items-center justify-center gap-1", t), ...d, children: /* @__PURE__ */ e(Ia.Provider, { value: { variant: a, size: r }, children: o }) }));
Ir.displayName = Ie.Root.displayName;
const Tr = n.forwardRef(({ className: t, children: a, variant: r, size: o, ...d }, m) => {
  const c = n.useContext(Ia);
  return /* @__PURE__ */ e(
    Ie.Item,
    {
      ref: m,
      className: i(
        Ra({
          variant: c.variant || r,
          size: c.size || o
        }),
        t
      ),
      ...d,
      children: a
    }
  );
});
Tr.displayName = Ie.Item.displayName;
const Pr = n.forwardRef(
  ({ className: t, containerClassName: a, ...r }, o) => /* @__PURE__ */ e(
    jt,
    {
      ref: o,
      containerClassName: i("flex items-center gap-2 has-[:disabled]:opacity-50", a),
      className: i("disabled:cursor-not-allowed", t),
      ...r
    }
  )
);
Pr.displayName = "InputOTP";
const zr = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("div", { ref: r, className: i("flex items-center", t), ...a })
);
zr.displayName = "InputOTPGroup";
const Dr = n.forwardRef(({ index: t, className: a, ...r }, o) => {
  const d = n.useContext(Ft), { char: m, hasFakeCaret: c, isActive: l } = d.slots[t];
  return /* @__PURE__ */ s(
    "div",
    {
      ref: o,
      className: i(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        l && "z-10 ring-2 ring-ring ring-offset-background",
        a
      ),
      ...r,
      children: [
        m,
        c && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ e("div", { className: "animate-caret-blink h-4 w-px bg-foreground duration-1000" }) })
      ]
    }
  );
});
Dr.displayName = "InputOTPSlot";
const Ar = n.forwardRef(
  ({ ...t }, a) => /* @__PURE__ */ e("div", { ref: a, role: "separator", ...t, children: /* @__PURE__ */ e(et, {}) })
);
Ar.displayName = "InputOTPSeparator";
const cn = X.Root, Mr = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(X.Item, { ref: r, className: i("border-b", t), ...a }));
Mr.displayName = "AccordionItem";
const Er = n.forwardRef(({ className: t, children: a, ...r }, o) => /* @__PURE__ */ e(X.Header, { className: "flex", children: /* @__PURE__ */ s(
  X.Trigger,
  {
    ref: o,
    className: i(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      t
    ),
    ...r,
    children: [
      a,
      /* @__PURE__ */ e(Se, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
Er.displayName = X.Trigger.displayName;
const _r = n.forwardRef(({ className: t, children: a, ...r }, o) => /* @__PURE__ */ e(
  X.Content,
  {
    ref: o,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...r,
    children: /* @__PURE__ */ e("div", { className: i("pb-4 pt-0", t), children: a })
  }
));
_r.displayName = X.Content.displayName;
const mn = ae.Root, jr = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  ae.List,
  {
    ref: r,
    className: i(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      t
    ),
    ...a
  }
));
jr.displayName = ae.List.displayName;
const Fr = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  ae.Trigger,
  {
    ref: r,
    className: i(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      t
    ),
    ...a
  }
));
Fr.displayName = ae.Trigger.displayName;
const Lr = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  ae.Content,
  {
    ref: r,
    className: i(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t
    ),
    ...a
  }
));
Lr.displayName = ae.Content.displayName;
const Vr = n.forwardRef(({ ...t }, a) => /* @__PURE__ */ e("nav", { ref: a, "aria-label": "breadcrumb", ...t }));
Vr.displayName = "Breadcrumb";
const Br = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e(
    "ol",
    {
      ref: r,
      className: i(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        t
      ),
      ...a
    }
  )
);
Br.displayName = "BreadcrumbList";
const $r = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("li", { ref: r, className: i("inline-flex items-center gap-1.5", t), ...a })
);
$r.displayName = "BreadcrumbItem";
const Gr = n.forwardRef(({ asChild: t, className: a, ...r }, o) => /* @__PURE__ */ e(t ? W : "a", { ref: o, className: i("transition-colors hover:text-foreground", a), ...r }));
Gr.displayName = "BreadcrumbLink";
const Hr = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e(
    "span",
    {
      ref: r,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: i("font-normal text-foreground", t),
      ...a
    }
  )
);
Hr.displayName = "BreadcrumbPage";
const Or = ({ children: t, className: a, ...r }) => /* @__PURE__ */ e("li", { role: "presentation", "aria-hidden": "true", className: i("[&>svg]:size-3.5", a), ...r, children: t ?? /* @__PURE__ */ e(Z, {}) });
Or.displayName = "BreadcrumbSeparator";
const Yr = ({ className: t, ...a }) => /* @__PURE__ */ e(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: i("mx-auto flex w-full justify-center", t),
    ...a
  }
);
Yr.displayName = "Pagination";
const Kr = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("ul", { ref: r, className: i("flex flex-row items-center gap-1", t), ...a })
);
Kr.displayName = "PaginationContent";
const Ur = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e("li", { ref: r, className: i("", t), ...a }));
Ur.displayName = "PaginationItem";
const Qe = ({ className: t, isActive: a, size: r = "icon", ...o }) => /* @__PURE__ */ e(
  "a",
  {
    "aria-current": a ? "page" : void 0,
    className: i(
      ie({
        variant: a ? "outline" : "ghost",
        size: r
      }),
      t
    ),
    ...o
  }
);
Qe.displayName = "PaginationLink";
const qr = ({ className: t, ...a }) => /* @__PURE__ */ s(Qe, { "aria-label": "Go to previous page", size: "default", className: i("gap-1 pl-2.5", t), ...a, children: [
  /* @__PURE__ */ e(la, { className: "h-4 w-4" }),
  /* @__PURE__ */ e("span", { children: "Previous" })
] });
qr.displayName = "PaginationPrevious";
const Wr = ({ className: t, ...a }) => /* @__PURE__ */ s(Qe, { "aria-label": "Go to next page", size: "default", className: i("gap-1 pr-2.5", t), ...a, children: [
  /* @__PURE__ */ e("span", { children: "Next" }),
  /* @__PURE__ */ e(Z, { className: "h-4 w-4" })
] });
Wr.displayName = "PaginationNext";
const Jr = ({ className: t, ...a }) => /* @__PURE__ */ s("span", { "aria-hidden": !0, className: i("flex h-9 w-9 items-center justify-center", t), ...a, children: [
  /* @__PURE__ */ e(at, { className: "h-4 w-4" }),
  /* @__PURE__ */ e("span", { className: "sr-only", children: "More pages" })
] });
Jr.displayName = "PaginationEllipsis";
const Qr = n.forwardRef(({ className: t, children: a, ...r }, o) => /* @__PURE__ */ s(
  _.Root,
  {
    ref: o,
    className: i("relative z-10 flex max-w-max flex-1 items-center justify-center", t),
    ...r,
    children: [
      a,
      /* @__PURE__ */ e(Ta, {})
    ]
  }
));
Qr.displayName = _.Root.displayName;
const Xr = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  _.List,
  {
    ref: r,
    className: i("group flex flex-1 list-none items-center justify-center space-x-1", t),
    ...a
  }
));
Xr.displayName = _.List.displayName;
const un = _.Item, Zr = K(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), eo = n.forwardRef(({ className: t, children: a, ...r }, o) => /* @__PURE__ */ s(
  _.Trigger,
  {
    ref: o,
    className: i(Zr(), "group", t),
    ...r,
    children: [
      a,
      " ",
      /* @__PURE__ */ e(
        Se,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
eo.displayName = _.Trigger.displayName;
const ao = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  _.Content,
  {
    ref: r,
    className: i(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      t
    ),
    ...a
  }
));
ao.displayName = _.Content.displayName;
const pn = _.Link, Ta = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e("div", { className: i("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ e(
  _.Viewport,
  {
    className: i(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      t
    ),
    ref: r,
    ...a
  }
) }));
Ta.displayName = _.Viewport.displayName;
const to = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  _.Indicator,
  {
    ref: r,
    className: i(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      t
    ),
    ...a,
    children: /* @__PURE__ */ e("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
to.displayName = _.Indicator.displayName;
const fn = x.Menu, gn = x.Group, bn = x.Sub, ro = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  x.Root,
  {
    ref: r,
    className: i("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", t),
    ...a
  }
));
ro.displayName = x.Root.displayName;
const oo = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  x.Trigger,
  {
    ref: r,
    className: i(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      t
    ),
    ...a
  }
));
oo.displayName = x.Trigger.displayName;
const so = n.forwardRef(({ className: t, inset: a, children: r, ...o }, d) => /* @__PURE__ */ s(
  x.SubTrigger,
  {
    ref: d,
    className: i(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      a && "pl-8",
      t
    ),
    ...o,
    children: [
      r,
      /* @__PURE__ */ e(Z, { className: "ml-auto h-4 w-4" })
    ]
  }
));
so.displayName = x.SubTrigger.displayName;
const io = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  x.SubContent,
  {
    ref: r,
    className: i(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...a
  }
));
io.displayName = x.SubContent.displayName;
const no = n.forwardRef(({ className: t, align: a = "start", alignOffset: r = -4, sideOffset: o = 8, ...d }, m) => /* @__PURE__ */ e(x.Portal, { children: /* @__PURE__ */ e(
  x.Content,
  {
    ref: m,
    align: a,
    alignOffset: r,
    sideOffset: o,
    className: i(
      "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...d
  }
) }));
no.displayName = x.Content.displayName;
const lo = n.forwardRef(({ className: t, inset: a, ...r }, o) => /* @__PURE__ */ e(
  x.Item,
  {
    ref: o,
    className: i(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      a && "pl-8",
      t
    ),
    ...r
  }
));
lo.displayName = x.Item.displayName;
const co = n.forwardRef(({ className: t, children: a, checked: r, ...o }, d) => /* @__PURE__ */ s(
  x.CheckboxItem,
  {
    ref: d,
    className: i(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t
    ),
    checked: r,
    ...o,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(x.ItemIndicator, { children: /* @__PURE__ */ e(L, { className: "h-4 w-4" }) }) }),
      a
    ]
  }
));
co.displayName = x.CheckboxItem.displayName;
const mo = n.forwardRef(({ className: t, children: a, ...r }, o) => /* @__PURE__ */ s(
  x.RadioItem,
  {
    ref: o,
    className: i(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t
    ),
    ...r,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(x.ItemIndicator, { children: /* @__PURE__ */ e(ke, { className: "h-2 w-2 fill-current" }) }) }),
      a
    ]
  }
));
mo.displayName = x.RadioItem.displayName;
const uo = n.forwardRef(({ className: t, inset: a, ...r }, o) => /* @__PURE__ */ e(
  x.Label,
  {
    ref: o,
    className: i("px-2 py-1.5 text-sm font-semibold", a && "pl-8", t),
    ...r
  }
));
uo.displayName = x.Label.displayName;
const po = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(x.Separator, { ref: r, className: i("-mx-1 my-1 h-px bg-muted", t), ...a }));
po.displayName = x.Separator.displayName;
const fo = ({ className: t, ...a }) => /* @__PURE__ */ e("span", { className: i("ml-auto text-xs tracking-widest text-muted-foreground", t), ...a });
fo.displayname = "MenubarShortcut";
const je = 768;
function go() {
  const [t, a] = n.useState(void 0);
  return n.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${je - 1}px)`), o = () => {
      a(window.innerWidth < je);
    };
    return r.addEventListener("change", o), a(window.innerWidth < je), () => r.removeEventListener("change", o);
  }, []), !!t;
}
const Pa = n.forwardRef(({ className: t, orientation: a = "horizontal", decorative: r = !0, ...o }, d) => /* @__PURE__ */ e(
  fa.Root,
  {
    ref: d,
    decorative: r,
    orientation: a,
    className: i("shrink-0 bg-border", a === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", t),
    ...o
  }
));
Pa.displayName = fa.Root.displayName;
const bo = v.Root, hn = v.Trigger, xn = v.Close, ho = v.Portal, za = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  v.Overlay,
  {
    className: i(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...a,
    ref: r
  }
));
za.displayName = v.Overlay.displayName;
const xo = K(
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
), Da = n.forwardRef(
  ({ side: t = "right", className: a, children: r, ...o }, d) => /* @__PURE__ */ s(ho, { children: [
    /* @__PURE__ */ e(za, {}),
    /* @__PURE__ */ s(v.Content, { ref: d, className: i(xo({ side: t }), a), ...o, children: [
      r,
      /* @__PURE__ */ s(v.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
        /* @__PURE__ */ e(ne, { className: "h-4 w-4" }),
        /* @__PURE__ */ e("span", { className: "sr-only", children: "Close" })
      ] })
    ] })
  ] })
);
Da.displayName = v.Content.displayName;
const vo = ({ className: t, ...a }) => /* @__PURE__ */ e("div", { className: i("flex flex-col space-y-2 text-center sm:text-left", t), ...a });
vo.displayName = "SheetHeader";
const yo = ({ className: t, ...a }) => /* @__PURE__ */ e("div", { className: i("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t), ...a });
yo.displayName = "SheetFooter";
const No = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(v.Title, { ref: r, className: i("text-lg font-semibold text-foreground", t), ...a }));
No.displayName = v.Title.displayName;
const wo = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(v.Description, { ref: r, className: i("text-sm text-muted-foreground", t), ...a }));
wo.displayName = v.Description.displayName;
const Co = xe.Provider, ko = xe.Root, So = xe.Trigger, Aa = n.forwardRef(({ className: t, sideOffset: a = 4, ...r }, o) => /* @__PURE__ */ e(
  xe.Content,
  {
    ref: o,
    sideOffset: a,
    className: i(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...r
  }
));
Aa.displayName = xe.Content.displayName;
const Ro = "sidebar:state", Io = 60 * 60 * 24 * 7, To = "16rem", Po = "18rem", zo = "3rem", Do = "b", Ma = n.createContext(null);
function ze() {
  const t = n.useContext(Ma);
  if (!t)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return t;
}
const Ao = n.forwardRef(({ defaultOpen: t = !0, open: a, onOpenChange: r, className: o, style: d, children: m, ...c }, l) => {
  const u = go(), [p, b] = n.useState(!1), [C, w] = n.useState(t), M = a ?? C, g = n.useCallback(
    (h) => {
      const A = typeof h == "function" ? h(M) : h;
      r ? r(A) : w(A), document.cookie = `${Ro}=${A}; path=/; max-age=${Io}`;
    },
    [r, M]
  ), y = n.useCallback(() => u ? b((h) => !h) : g((h) => !h), [u, g, b]);
  n.useEffect(() => {
    const h = (A) => {
      A.key === Do && (A.metaKey || A.ctrlKey) && (A.preventDefault(), y());
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [y]);
  const k = M ? "expanded" : "collapsed", f = n.useMemo(
    () => ({
      state: k,
      open: M,
      setOpen: g,
      isMobile: u,
      openMobile: p,
      setOpenMobile: b,
      toggleSidebar: y
    }),
    [k, M, g, u, p, b, y]
  );
  return /* @__PURE__ */ e(Ma.Provider, { value: f, children: /* @__PURE__ */ e(Co, { delayDuration: 0, children: /* @__PURE__ */ e(
    "div",
    {
      style: {
        "--sidebar-width": To,
        "--sidebar-width-icon": zo,
        ...d
      },
      className: i("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", o),
      ref: l,
      ...c,
      children: m
    }
  ) }) });
});
Ao.displayName = "SidebarProvider";
const Mo = n.forwardRef(({ side: t = "left", variant: a = "sidebar", collapsible: r = "offcanvas", className: o, children: d, ...m }, c) => {
  const { isMobile: l, state: u, openMobile: p, setOpenMobile: b } = ze();
  return r === "none" ? /* @__PURE__ */ e(
    "div",
    {
      className: i("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", o),
      ref: c,
      ...m,
      children: d
    }
  ) : l ? /* @__PURE__ */ e(bo, { open: p, onOpenChange: b, ...m, children: /* @__PURE__ */ e(
    Da,
    {
      "data-sidebar": "sidebar",
      "data-mobile": "true",
      className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
      style: {
        "--sidebar-width": Po
      },
      side: t,
      children: /* @__PURE__ */ e("div", { className: "flex h-full w-full flex-col", children: d })
    }
  ) }) : /* @__PURE__ */ s(
    "div",
    {
      ref: c,
      className: "group peer hidden text-sidebar-foreground md:block",
      "data-state": u,
      "data-collapsible": u === "collapsed" ? r : "",
      "data-variant": a,
      "data-side": t,
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: i(
              "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              a === "floating" || a === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
            )
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            className: i(
              "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
              t === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              a === "floating" || a === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
              o
            ),
            ...m,
            children: /* @__PURE__ */ e(
              "div",
              {
                "data-sidebar": "sidebar",
                className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                children: d
              }
            )
          }
        )
      ]
    }
  );
});
Mo.displayName = "Sidebar";
const Eo = n.forwardRef(
  ({ className: t, onClick: a, ...r }, o) => {
    const { toggleSidebar: d } = ze();
    return /* @__PURE__ */ s(
      S,
      {
        ref: o,
        "data-sidebar": "trigger",
        variant: "ghost",
        size: "icon",
        className: i("h-7 w-7", t),
        onClick: (m) => {
          a == null || a(m), d();
        },
        ...r,
        children: [
          /* @__PURE__ */ e(tt, {}),
          /* @__PURE__ */ e("span", { className: "sr-only", children: "Toggle Sidebar" })
        ]
      }
    );
  }
);
Eo.displayName = "SidebarTrigger";
const _o = n.forwardRef(
  ({ className: t, ...a }, r) => {
    const { toggleSidebar: o } = ze();
    return /* @__PURE__ */ e(
      "button",
      {
        ref: r,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: o,
        title: "Toggle Sidebar",
        className: i(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 hover:after:bg-sidebar-border sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          t
        ),
        ...a
      }
    );
  }
);
_o.displayName = "SidebarRail";
const jo = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  "main",
  {
    ref: r,
    className: i(
      "relative flex min-h-svh flex-1 flex-col bg-background",
      "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
      t
    ),
    ...a
  }
));
jo.displayName = "SidebarInset";
const Fo = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e(
    ga,
    {
      ref: r,
      "data-sidebar": "input",
      className: i(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        t
      ),
      ...a
    }
  )
);
Fo.displayName = "SidebarInput";
const Lo = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e("div", { ref: r, "data-sidebar": "header", className: i("flex flex-col gap-2 p-2", t), ...a }));
Lo.displayName = "SidebarHeader";
const Vo = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e("div", { ref: r, "data-sidebar": "footer", className: i("flex flex-col gap-2 p-2", t), ...a }));
Vo.displayName = "SidebarFooter";
const Bo = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e(
    Pa,
    {
      ref: r,
      "data-sidebar": "separator",
      className: i("mx-2 w-auto bg-sidebar-border", t),
      ...a
    }
  )
);
Bo.displayName = "SidebarSeparator";
const $o = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  "div",
  {
    ref: r,
    "data-sidebar": "content",
    className: i(
      "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      t
    ),
    ...a
  }
));
$o.displayName = "SidebarContent";
const Go = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  "div",
  {
    ref: r,
    "data-sidebar": "group",
    className: i("relative flex w-full min-w-0 flex-col p-2", t),
    ...a
  }
));
Go.displayName = "SidebarGroup";
const Ho = n.forwardRef(
  ({ className: t, asChild: a = !1, ...r }, o) => /* @__PURE__ */ e(
    a ? W : "div",
    {
      ref: o,
      "data-sidebar": "group-label",
      className: i(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        t
      ),
      ...r
    }
  )
);
Ho.displayName = "SidebarGroupLabel";
const Oo = n.forwardRef(
  ({ className: t, asChild: a = !1, ...r }, o) => /* @__PURE__ */ e(
    a ? W : "button",
    {
      ref: o,
      "data-sidebar": "group-action",
      className: i(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        t
      ),
      ...r
    }
  )
);
Oo.displayName = "SidebarGroupAction";
const Yo = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("div", { ref: r, "data-sidebar": "group-content", className: i("w-full text-sm", t), ...a })
);
Yo.displayName = "SidebarGroupContent";
const Ko = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e("ul", { ref: r, "data-sidebar": "menu", className: i("flex w-full min-w-0 flex-col gap-1", t), ...a }));
Ko.displayName = "SidebarMenu";
const Uo = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e("li", { ref: r, "data-sidebar": "menu-item", className: i("group/menu-item relative", t), ...a }));
Uo.displayName = "SidebarMenuItem";
const qo = K(
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
), Wo = n.forwardRef(({ asChild: t = !1, isActive: a = !1, variant: r = "default", size: o = "default", tooltip: d, className: m, ...c }, l) => {
  const u = t ? W : "button", { isMobile: p, state: b } = ze(), C = /* @__PURE__ */ e(
    u,
    {
      ref: l,
      "data-sidebar": "menu-button",
      "data-size": o,
      "data-active": a,
      className: i(qo({ variant: r, size: o }), m),
      ...c
    }
  );
  return d ? (typeof d == "string" && (d = {
    children: d
  }), /* @__PURE__ */ s(ko, { children: [
    /* @__PURE__ */ e(So, { asChild: !0, children: C }),
    /* @__PURE__ */ e(Aa, { side: "right", align: "center", hidden: b !== "collapsed" || p, ...d })
  ] })) : C;
});
Wo.displayName = "SidebarMenuButton";
const Jo = n.forwardRef(({ className: t, asChild: a = !1, showOnHover: r = !1, ...o }, d) => /* @__PURE__ */ e(
  a ? W : "button",
  {
    ref: d,
    "data-sidebar": "menu-action",
    className: i(
      "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      // Increases the hit area of the button on mobile.
      "after:absolute after:-inset-2 after:md:hidden",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      r && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
      t
    ),
    ...o
  }
));
Jo.displayName = "SidebarMenuAction";
const Qo = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      "data-sidebar": "menu-badge",
      className: i(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        t
      ),
      ...a
    }
  )
);
Qo.displayName = "SidebarMenuBadge";
const Xo = n.forwardRef(({ className: t, showIcon: a = !1, ...r }, o) => {
  const d = n.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ s(
    "div",
    {
      ref: o,
      "data-sidebar": "menu-skeleton",
      className: i("flex h-8 items-center gap-2 rounded-md px-2", t),
      ...r,
      children: [
        a && /* @__PURE__ */ e(oa, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ e(
          oa,
          {
            className: "h-4 max-w-[--skeleton-width] flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": d
            }
          }
        )
      ]
    }
  );
});
Xo.displayName = "SidebarMenuSkeleton";
const Zo = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e(
    "ul",
    {
      ref: r,
      "data-sidebar": "menu-sub",
      className: i(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        t
      ),
      ...a
    }
  )
);
Zo.displayName = "SidebarMenuSub";
const es = n.forwardRef(({ ...t }, a) => /* @__PURE__ */ e("li", { ref: a, ...t }));
es.displayName = "SidebarMenuSubItem";
const as = n.forwardRef(({ asChild: t = !1, size: a = "md", isActive: r, className: o, ...d }, m) => /* @__PURE__ */ e(
  t ? W : "a",
  {
    ref: m,
    "data-sidebar": "menu-sub-button",
    "data-size": a,
    "data-active": r,
    className: i(
      "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
      "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
      a === "sm" && "text-xs",
      a === "md" && "text-sm",
      "group-data-[collapsible=icon]:hidden",
      o
    ),
    ...d
  }
));
as.displayName = "SidebarMenuSubButton";
const ts = ({ shouldScaleBackground: t = !0, ...a }) => /* @__PURE__ */ e($.Root, { shouldScaleBackground: t, ...a });
ts.displayName = "Drawer";
const vn = $.Trigger, rs = $.Portal, yn = $.Close, Ea = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e($.Overlay, { ref: r, className: i("fixed inset-0 z-50 bg-black/80", t), ...a }));
Ea.displayName = $.Overlay.displayName;
const os = n.forwardRef(({ className: t, children: a, ...r }, o) => /* @__PURE__ */ s(rs, { children: [
  /* @__PURE__ */ e(Ea, {}),
  /* @__PURE__ */ s(
    $.Content,
    {
      ref: o,
      className: i(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        t
      ),
      ...r,
      children: [
        /* @__PURE__ */ e("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        a
      ]
    }
  )
] }));
os.displayName = "DrawerContent";
const ss = ({ className: t, ...a }) => /* @__PURE__ */ e("div", { className: i("grid gap-1.5 p-4 text-center sm:text-left", t), ...a });
ss.displayName = "DrawerHeader";
const is = ({ className: t, ...a }) => /* @__PURE__ */ e("div", { className: i("mt-auto flex flex-col gap-2 p-4", t), ...a });
is.displayName = "DrawerFooter";
const ns = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  $.Title,
  {
    ref: r,
    className: i("text-lg font-semibold leading-none tracking-tight", t),
    ...a
  }
));
ns.displayName = $.Title.displayName;
const ds = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e($.Description, { ref: r, className: i("text-sm text-muted-foreground", t), ...a }));
ds.displayName = $.Description.displayName;
const Nn = Ue.Root, wn = Ue.CollapsibleTrigger, Cn = Ue.CollapsibleContent, ls = n.forwardRef(({ className: t, children: a, ...r }, o) => /* @__PURE__ */ s(Q.Root, { ref: o, className: i("relative overflow-hidden", t), ...r, children: [
  /* @__PURE__ */ e(Q.Viewport, { className: "h-full w-full rounded-[inherit]", children: a }),
  /* @__PURE__ */ e(_a, {}),
  /* @__PURE__ */ e(Q.Corner, {})
] }));
ls.displayName = Q.Root.displayName;
const _a = n.forwardRef(({ className: t, orientation: a = "vertical", ...r }, o) => /* @__PURE__ */ e(
  Q.ScrollAreaScrollbar,
  {
    ref: o,
    orientation: a,
    className: i(
      "flex touch-none select-none transition-colors",
      a === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      a === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      t
    ),
    ...r,
    children: /* @__PURE__ */ e(Q.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
_a.displayName = Q.ScrollAreaScrollbar.displayName;
const kn = ({ className: t, ...a }) => /* @__PURE__ */ e(
  qe.PanelGroup,
  {
    className: i("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", t),
    ...a
  }
), Sn = qe.Panel, Rn = ({
  withHandle: t,
  className: a,
  ...r
}) => /* @__PURE__ */ e(
  qe.PanelResizeHandle,
  {
    className: i(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      a
    ),
    ...r,
    children: t && /* @__PURE__ */ e("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ e(rt, { className: "h-2.5 w-2.5" }) })
  }
), cs = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ e("table", { ref: r, className: i("w-full caption-bottom text-sm", t), ...a }) })
);
cs.displayName = "Table";
const ms = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("thead", { ref: r, className: i("[&_tr]:border-b", t), ...a })
);
ms.displayName = "TableHeader";
const us = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("tbody", { ref: r, className: i("[&_tr:last-child]:border-0", t), ...a })
);
us.displayName = "TableBody";
const ps = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("tfoot", { ref: r, className: i("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t), ...a })
);
ps.displayName = "TableFooter";
const fs = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e(
    "tr",
    {
      ref: r,
      className: i("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", t),
      ...a
    }
  )
);
fs.displayName = "TableRow";
const gs = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e(
    "th",
    {
      ref: r,
      className: i(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        t
      ),
      ...a
    }
  )
);
gs.displayName = "TableHead";
const bs = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("td", { ref: r, className: i("p-4 align-middle [&:has([role=checkbox])]:pr-0", t), ...a })
);
bs.displayName = "TableCell";
const hs = n.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("caption", { ref: r, className: i("mt-4 text-sm text-muted-foreground", t), ...a })
);
hs.displayName = "TableCaption";
function xs({ className: t, classNames: a, showOutsideDays: r = !0, ...o }) {
  return /* @__PURE__ */ e(
    Lt,
    {
      showOutsideDays: r,
      className: i("p-3", t),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: i(
          ie({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: i(ie({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...a
      },
      components: {
        IconLeft: ({ ...d }) => /* @__PURE__ */ e(la, { className: "h-4 w-4" }),
        IconRight: ({ ...d }) => /* @__PURE__ */ e(Z, { className: "h-4 w-4" })
      },
      ...o
    }
  );
}
xs.displayName = "Calendar";
const ja = n.createContext(null);
function De() {
  const t = n.useContext(ja);
  if (!t)
    throw new Error("useCarousel must be used within a <Carousel />");
  return t;
}
const vs = n.forwardRef(
  ({ orientation: t = "horizontal", opts: a, setApi: r, plugins: o, className: d, children: m, ...c }, l) => {
    const [u, p] = Vt(
      {
        ...a,
        axis: t === "horizontal" ? "x" : "y"
      },
      o
    ), [b, C] = n.useState(!1), [w, M] = n.useState(!1), g = n.useCallback((h) => {
      h && (C(h.canScrollPrev()), M(h.canScrollNext()));
    }, []), y = n.useCallback(() => {
      p == null || p.scrollPrev();
    }, [p]), k = n.useCallback(() => {
      p == null || p.scrollNext();
    }, [p]), f = n.useCallback(
      (h) => {
        h.key === "ArrowLeft" ? (h.preventDefault(), y()) : h.key === "ArrowRight" && (h.preventDefault(), k());
      },
      [y, k]
    );
    return n.useEffect(() => {
      !p || !r || r(p);
    }, [p, r]), n.useEffect(() => {
      if (p)
        return g(p), p.on("reInit", g), p.on("select", g), () => {
          p == null || p.off("select", g);
        };
    }, [p, g]), /* @__PURE__ */ e(
      ja.Provider,
      {
        value: {
          carouselRef: u,
          api: p,
          opts: a,
          orientation: t || ((a == null ? void 0 : a.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: y,
          scrollNext: k,
          canScrollPrev: b,
          canScrollNext: w
        },
        children: /* @__PURE__ */ e(
          "div",
          {
            ref: l,
            onKeyDownCapture: f,
            className: i("relative", d),
            role: "region",
            "aria-roledescription": "carousel",
            ...c,
            children: m
          }
        )
      }
    );
  }
);
vs.displayName = "Carousel";
const ys = n.forwardRef(
  ({ className: t, ...a }, r) => {
    const { carouselRef: o, orientation: d } = De();
    return /* @__PURE__ */ e("div", { ref: o, className: "overflow-hidden", children: /* @__PURE__ */ e(
      "div",
      {
        ref: r,
        className: i("flex", d === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t),
        ...a
      }
    ) });
  }
);
ys.displayName = "CarouselContent";
const Ns = n.forwardRef(
  ({ className: t, ...a }, r) => {
    const { orientation: o } = De();
    return /* @__PURE__ */ e(
      "div",
      {
        ref: r,
        role: "group",
        "aria-roledescription": "slide",
        className: i("min-w-0 shrink-0 grow-0 basis-full", o === "horizontal" ? "pl-4" : "pt-4", t),
        ...a
      }
    );
  }
);
Ns.displayName = "CarouselItem";
const ws = n.forwardRef(
  ({ className: t, variant: a = "outline", size: r = "icon", ...o }, d) => {
    const { orientation: m, scrollPrev: c, canScrollPrev: l } = De();
    return /* @__PURE__ */ s(
      S,
      {
        ref: d,
        variant: a,
        size: r,
        className: i(
          "absolute h-8 w-8 rounded-full",
          m === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          t
        ),
        disabled: !l,
        onClick: c,
        ...o,
        children: [
          /* @__PURE__ */ e(ot, { className: "h-4 w-4" }),
          /* @__PURE__ */ e("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
ws.displayName = "CarouselPrevious";
const Cs = n.forwardRef(
  ({ className: t, variant: a = "outline", size: r = "icon", ...o }, d) => {
    const { orientation: m, scrollNext: c, canScrollNext: l } = De();
    return /* @__PURE__ */ s(
      S,
      {
        ref: d,
        variant: a,
        size: r,
        className: i(
          "absolute h-8 w-8 rounded-full",
          m === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          t
        ),
        disabled: !l,
        onClick: c,
        ...o,
        children: [
          /* @__PURE__ */ e(Re, { className: "h-4 w-4" }),
          /* @__PURE__ */ e("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
Cs.displayName = "CarouselNext";
const ks = v.Root, In = v.Trigger, Ss = v.Portal, Tn = v.Close, Fa = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  v.Overlay,
  {
    ref: r,
    className: i(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...a
  }
));
Fa.displayName = v.Overlay.displayName;
const La = n.forwardRef(({ className: t, children: a, ...r }, o) => /* @__PURE__ */ s(Ss, { children: [
  /* @__PURE__ */ e(Fa, {}),
  /* @__PURE__ */ s(
    v.Content,
    {
      ref: o,
      className: i(
        "fixed left-[50%] top-[50%] z-50 grid w-[calc(100%-1.5rem)] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-4 sm:p-6 shadow-lg duration-200 max-h-[90dvh] overflow-y-auto rounded-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        t
      ),
      ...r,
      children: [
        a,
        /* @__PURE__ */ s(v.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ e(ne, { className: "h-4 w-4" }),
          /* @__PURE__ */ e("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
La.displayName = v.Content.displayName;
const Rs = ({ className: t, ...a }) => /* @__PURE__ */ e("div", { className: i("flex flex-col space-y-1.5 text-center sm:text-left", t), ...a });
Rs.displayName = "DialogHeader";
const Is = ({ className: t, ...a }) => /* @__PURE__ */ e("div", { className: i("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t), ...a });
Is.displayName = "DialogFooter";
const Ts = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  v.Title,
  {
    ref: r,
    className: i("text-lg font-semibold leading-none tracking-tight", t),
    ...a
  }
));
Ts.displayName = v.Title.displayName;
const Ps = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(v.Description, { ref: r, className: i("text-sm text-muted-foreground", t), ...a }));
Ps.displayName = v.Description.displayName;
const Va = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  j,
  {
    ref: r,
    className: i(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      t
    ),
    ...a
  }
));
Va.displayName = j.displayName;
const Pn = ({ children: t, ...a }) => /* @__PURE__ */ e(ks, { ...a, children: /* @__PURE__ */ e(La, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ e(Va, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: t }) }) }), zs = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ s("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ e(pe, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ e(
    j.Input,
    {
      ref: r,
      className: i(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        t
      ),
      ...a
    }
  )
] }));
zs.displayName = j.Input.displayName;
const Ds = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  j.List,
  {
    ref: r,
    className: i("max-h-[300px] overflow-y-auto overflow-x-hidden", t),
    ...a
  }
));
Ds.displayName = j.List.displayName;
const As = n.forwardRef((t, a) => /* @__PURE__ */ e(j.Empty, { ref: a, className: "py-6 text-center text-sm", ...t }));
As.displayName = j.Empty.displayName;
const Ms = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  j.Group,
  {
    ref: r,
    className: i(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      t
    ),
    ...a
  }
));
Ms.displayName = j.Group.displayName;
const Es = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(j.Separator, { ref: r, className: i("-mx-1 h-px bg-border", t), ...a }));
Es.displayName = j.Separator.displayName;
const _s = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  j.Item,
  {
    ref: r,
    className: i(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      t
    ),
    ...a
  }
));
_s.displayName = j.Item.displayName;
const js = ({ className: t, ...a }) => /* @__PURE__ */ e("span", { className: i("ml-auto text-xs tracking-widest text-muted-foreground", t), ...a });
js.displayName = "CommandShortcut";
const Fs = { light: "", dark: ".dark" }, Ba = n.createContext(null);
function $a() {
  const t = n.useContext(Ba);
  if (!t)
    throw new Error("useChart must be used within a <ChartContainer />");
  return t;
}
const Ls = n.forwardRef(({ id: t, className: a, children: r, config: o, ...d }, m) => {
  const c = n.useId(), l = `chart-${t || c.replace(/:/g, "")}`;
  return /* @__PURE__ */ e(Ba.Provider, { value: { config: o }, children: /* @__PURE__ */ s(
    "div",
    {
      "data-chart": l,
      ref: m,
      className: i(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        a
      ),
      ...d,
      children: [
        /* @__PURE__ */ e(Vs, { id: l, config: o }),
        /* @__PURE__ */ e(We.ResponsiveContainer, { children: r })
      ]
    }
  ) });
});
Ls.displayName = "Chart";
const Vs = ({ id: t, config: a }) => {
  const r = Object.entries(a).filter(([o, d]) => d.theme || d.color);
  return r.length ? /* @__PURE__ */ e(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(Fs).map(
          ([o, d]) => `
${d} [data-chart=${t}] {
${r.map(([m, c]) => {
            var u;
            const l = ((u = c.theme) == null ? void 0 : u[o]) || c.color;
            return l ? `  --color-${m}: ${l};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, zn = We.Tooltip, Bs = n.forwardRef(
  ({
    active: t,
    payload: a,
    className: r,
    indicator: o = "dot",
    hideLabel: d = !1,
    hideIndicator: m = !1,
    label: c,
    labelFormatter: l,
    labelClassName: u,
    formatter: p,
    color: b,
    nameKey: C,
    labelKey: w
  }, M) => {
    const { config: g } = $a(), y = n.useMemo(() => {
      var le;
      if (d || !(a != null && a.length))
        return null;
      const [f] = a, h = `${w || f.dataKey || f.name || "value"}`, A = He(g, f, h), V = !w && typeof c == "string" ? ((le = g[c]) == null ? void 0 : le.label) || c : A == null ? void 0 : A.label;
      return l ? /* @__PURE__ */ e("div", { className: i("font-medium", u), children: l(V, a) }) : V ? /* @__PURE__ */ e("div", { className: i("font-medium", u), children: V }) : null;
    }, [c, l, a, d, u, g, w]);
    if (!t || !(a != null && a.length))
      return null;
    const k = a.length === 1 && o !== "dot";
    return /* @__PURE__ */ s(
      "div",
      {
        ref: M,
        className: i(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          r
        ),
        children: [
          k ? null : y,
          /* @__PURE__ */ e("div", { className: "grid gap-1.5", children: a.map((f, h) => {
            const A = `${C || f.name || f.dataKey || "value"}`, V = He(g, f, A), le = b || f.payload.fill || f.color;
            return /* @__PURE__ */ e(
              "div",
              {
                className: i(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  o === "dot" && "items-center"
                ),
                children: p && (f == null ? void 0 : f.value) !== void 0 && f.name ? p(f.value, f.name, f, h, f.payload) : /* @__PURE__ */ s(se, { children: [
                  V != null && V.icon ? /* @__PURE__ */ e(V.icon, {}) : !m && /* @__PURE__ */ e(
                    "div",
                    {
                      className: i("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                        "h-2.5 w-2.5": o === "dot",
                        "w-1": o === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": o === "dashed",
                        "my-0.5": k && o === "dashed"
                      }),
                      style: {
                        "--color-bg": le,
                        "--color-border": le
                      }
                    }
                  ),
                  /* @__PURE__ */ s(
                    "div",
                    {
                      className: i(
                        "flex flex-1 justify-between leading-none",
                        k ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ s("div", { className: "grid gap-1.5", children: [
                          k ? y : null,
                          /* @__PURE__ */ e("span", { className: "text-muted-foreground", children: (V == null ? void 0 : V.label) || f.name })
                        ] }),
                        f.value && /* @__PURE__ */ e("span", { className: "font-mono font-medium tabular-nums text-foreground", children: f.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              f.dataKey
            );
          }) })
        ]
      }
    );
  }
);
Bs.displayName = "ChartTooltip";
const Dn = We.Legend, $s = n.forwardRef(({ className: t, hideIcon: a = !1, payload: r, verticalAlign: o = "bottom", nameKey: d }, m) => {
  const { config: c } = $a();
  return r != null && r.length ? /* @__PURE__ */ e(
    "div",
    {
      ref: m,
      className: i("flex items-center justify-center gap-4", o === "top" ? "pb-3" : "pt-3", t),
      children: r.map((l) => {
        const u = `${d || l.dataKey || "value"}`, p = He(c, l, u);
        return /* @__PURE__ */ s(
          "div",
          {
            className: i("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
            children: [
              p != null && p.icon && !a ? /* @__PURE__ */ e(p.icon, {}) : /* @__PURE__ */ e(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: l.color
                  }
                }
              ),
              p == null ? void 0 : p.label
            ]
          },
          l.value
        );
      })
    }
  ) : null;
});
$s.displayName = "ChartLegend";
function He(t, a, r) {
  if (typeof a != "object" || a === null)
    return;
  const o = "payload" in a && typeof a.payload == "object" && a.payload !== null ? a.payload : void 0;
  let d = r;
  return r in a && typeof a[r] == "string" ? d = a[r] : o && r in o && typeof o[r] == "string" && (d = o[r]), d in t ? t[d] : t[r];
}
const An = Bt.Root, Mn = E.Root, En = E.Trigger, Gs = E.Portal, Ga = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  E.Overlay,
  {
    className: i(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...a,
    ref: r
  }
));
Ga.displayName = E.Overlay.displayName;
const Hs = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ s(Gs, { children: [
  /* @__PURE__ */ e(Ga, {}),
  /* @__PURE__ */ e(
    E.Content,
    {
      ref: r,
      className: i(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        t
      ),
      ...a
    }
  )
] }));
Hs.displayName = E.Content.displayName;
const Os = ({ className: t, ...a }) => /* @__PURE__ */ e("div", { className: i("flex flex-col space-y-2 text-center sm:text-left", t), ...a });
Os.displayName = "AlertDialogHeader";
const Ys = ({ className: t, ...a }) => /* @__PURE__ */ e("div", { className: i("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t), ...a });
Ys.displayName = "AlertDialogFooter";
const Ks = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(E.Title, { ref: r, className: i("text-lg font-semibold", t), ...a }));
Ks.displayName = E.Title.displayName;
const Us = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(E.Description, { ref: r, className: i("text-sm text-muted-foreground", t), ...a }));
Us.displayName = E.Description.displayName;
const qs = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(E.Action, { ref: r, className: i(ie(), t), ...a }));
qs.displayName = E.Action.displayName;
const Ws = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  E.Cancel,
  {
    ref: r,
    className: i(ie({ variant: "outline" }), "mt-2 sm:mt-0", t),
    ...a
  }
));
Ws.displayName = E.Cancel.displayName;
const _n = R.Root, jn = R.Trigger, Fn = R.Group, Ln = R.Sub, Js = n.forwardRef(({ className: t, inset: a, children: r, ...o }, d) => /* @__PURE__ */ s(
  R.SubTrigger,
  {
    ref: d,
    className: i(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      a && "pl-8",
      t
    ),
    ...o,
    children: [
      r,
      /* @__PURE__ */ e(Z, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Js.displayName = R.SubTrigger.displayName;
const Qs = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  R.SubContent,
  {
    ref: r,
    className: i(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...a
  }
));
Qs.displayName = R.SubContent.displayName;
const Xs = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(R.Portal, { children: /* @__PURE__ */ e(
  R.Content,
  {
    ref: r,
    className: i(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...a
  }
) }));
Xs.displayName = R.Content.displayName;
const Zs = n.forwardRef(({ className: t, inset: a, ...r }, o) => /* @__PURE__ */ e(
  R.Item,
  {
    ref: o,
    className: i(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      a && "pl-8",
      t
    ),
    ...r
  }
));
Zs.displayName = R.Item.displayName;
const ei = n.forwardRef(({ className: t, children: a, checked: r, ...o }, d) => /* @__PURE__ */ s(
  R.CheckboxItem,
  {
    ref: d,
    className: i(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t
    ),
    checked: r,
    ...o,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(R.ItemIndicator, { children: /* @__PURE__ */ e(L, { className: "h-4 w-4" }) }) }),
      a
    ]
  }
));
ei.displayName = R.CheckboxItem.displayName;
const ai = n.forwardRef(({ className: t, children: a, ...r }, o) => /* @__PURE__ */ s(
  R.RadioItem,
  {
    ref: o,
    className: i(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t
    ),
    ...r,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(R.ItemIndicator, { children: /* @__PURE__ */ e(ke, { className: "h-2 w-2 fill-current" }) }) }),
      a
    ]
  }
));
ai.displayName = R.RadioItem.displayName;
const ti = n.forwardRef(({ className: t, inset: a, ...r }, o) => /* @__PURE__ */ e(
  R.Label,
  {
    ref: o,
    className: i("px-2 py-1.5 text-sm font-semibold text-foreground", a && "pl-8", t),
    ...r
  }
));
ti.displayName = R.Label.displayName;
const ri = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(R.Separator, { ref: r, className: i("-mx-1 my-1 h-px bg-border", t), ...a }));
ri.displayName = R.Separator.displayName;
const oi = ({ className: t, ...a }) => /* @__PURE__ */ e("span", { className: i("ml-auto text-xs tracking-widest text-muted-foreground", t), ...a });
oi.displayName = "ContextMenuShortcut";
const Vn = N.Root, Bn = N.Trigger, $n = N.Group, Gn = N.Portal, Hn = N.Sub, On = N.RadioGroup, si = n.forwardRef(({ className: t, inset: a, children: r, ...o }, d) => /* @__PURE__ */ s(
  N.SubTrigger,
  {
    ref: d,
    className: i(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      a && "pl-8",
      t
    ),
    ...o,
    children: [
      r,
      /* @__PURE__ */ e(Z, { className: "ml-auto h-4 w-4" })
    ]
  }
));
si.displayName = N.SubTrigger.displayName;
const ii = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  N.SubContent,
  {
    ref: r,
    className: i(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...a
  }
));
ii.displayName = N.SubContent.displayName;
const ni = n.forwardRef(({ className: t, sideOffset: a = 4, ...r }, o) => /* @__PURE__ */ e(N.Portal, { children: /* @__PURE__ */ e(
  N.Content,
  {
    ref: o,
    sideOffset: a,
    className: i(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...r
  }
) }));
ni.displayName = N.Content.displayName;
const di = n.forwardRef(({ className: t, inset: a, ...r }, o) => /* @__PURE__ */ e(
  N.Item,
  {
    ref: o,
    className: i(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      a && "pl-8",
      t
    ),
    ...r
  }
));
di.displayName = N.Item.displayName;
const li = n.forwardRef(({ className: t, children: a, checked: r, ...o }, d) => /* @__PURE__ */ s(
  N.CheckboxItem,
  {
    ref: d,
    className: i(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t
    ),
    checked: r,
    ...o,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(N.ItemIndicator, { children: /* @__PURE__ */ e(L, { className: "h-4 w-4" }) }) }),
      a
    ]
  }
));
li.displayName = N.CheckboxItem.displayName;
const ci = n.forwardRef(({ className: t, children: a, ...r }, o) => /* @__PURE__ */ s(
  N.RadioItem,
  {
    ref: o,
    className: i(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t
    ),
    ...r,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(N.ItemIndicator, { children: /* @__PURE__ */ e(ke, { className: "h-2 w-2 fill-current" }) }) }),
      a
    ]
  }
));
ci.displayName = N.RadioItem.displayName;
const mi = n.forwardRef(({ className: t, inset: a, ...r }, o) => /* @__PURE__ */ e(
  N.Label,
  {
    ref: o,
    className: i("px-2 py-1.5 text-sm font-semibold", a && "pl-8", t),
    ...r
  }
));
mi.displayName = N.Label.displayName;
const ui = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(N.Separator, { ref: r, className: i("-mx-1 my-1 h-px bg-muted", t), ...a }));
ui.displayName = N.Separator.displayName;
const pi = ({ className: t, ...a }) => /* @__PURE__ */ e("span", { className: i("ml-auto text-xs tracking-widest opacity-60", t), ...a });
pi.displayName = "DropdownMenuShortcut";
const Yn = be.Root, Kn = be.Trigger, fi = n.forwardRef(({ className: t, align: a = "center", sideOffset: r = 4, ...o }, d) => /* @__PURE__ */ e(be.Portal, { children: /* @__PURE__ */ e(
  be.Content,
  {
    ref: d,
    align: a,
    sideOffset: r,
    className: i(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...o
  }
) }));
fi.displayName = be.Content.displayName;
const Un = Te.Root, qn = Te.Trigger, gi = n.forwardRef(({ className: t, align: a = "center", sideOffset: r = 4, ...o }, d) => /* @__PURE__ */ e(
  Te.Content,
  {
    ref: d,
    align: a,
    sideOffset: r,
    className: i(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...o
  }
));
gi.displayName = Te.Content.displayName;
const bi = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  de.Root,
  {
    ref: r,
    className: i("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", t),
    ...a
  }
));
bi.displayName = de.Root.displayName;
const hi = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(de.Image, { ref: r, className: i("aspect-square h-full w-full", t), ...a }));
hi.displayName = de.Image.displayName;
const xi = n.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  de.Fallback,
  {
    ref: r,
    className: i("flex h-full w-full items-center justify-center rounded-full bg-muted", t),
    ...a
  }
));
xi.displayName = de.Fallback.displayName;
const Ha = () => /* @__PURE__ */ e("div", { className: "w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-glow", children: /* @__PURE__ */ e(Y, { size: 26, className: "text-primary-foreground", fill: "currentColor" }) }), Wn = ({
  onNavigate: t,
  onSubmit: a
}) => {
  const [r, o] = z(""), [d, m] = z(""), [c, l] = z(!1), [u, p] = z(!1);
  return /* @__PURE__ */ e("div", { className: "min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center px-4 py-12", children: /* @__PURE__ */ s("div", { className: "w-full max-w-md space-y-8", children: [
    /* @__PURE__ */ s("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ e(Ha, {}),
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ e("h1", { className: "text-3xl font-display font-black uppercase tracking-tighter text-foreground", children: "EVYRA" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground font-medium mt-1", children: "Plataforma de cuidados sénior" })
      ] })
    ] }),
    /* @__PURE__ */ s("div", { className: "bg-card rounded-3xl border border-border shadow-elevated p-8 space-y-6", children: [
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ e("h2", { className: "text-xl font-display font-black uppercase tracking-tighter text-foreground", children: "Entrar na Conta" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground mt-1", children: "Bem-vindo de volta" })
      ] }),
      /* @__PURE__ */ s(S, { variant: "outline", className: "w-full rounded-2xl", onClick: () => T.info("Google login..."), children: [
        /* @__PURE__ */ s("svg", { className: "mr-2 h-4 w-4", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ e("path", { fill: "#4285F4", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }),
          /* @__PURE__ */ e("path", { fill: "#34A853", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }),
          /* @__PURE__ */ e("path", { fill: "#FBBC05", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" }),
          /* @__PURE__ */ e("path", { fill: "#EA4335", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" })
        ] }),
        "Continuar com Google"
      ] }),
      /* @__PURE__ */ s("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ e("div", { className: "flex-1 h-px bg-border" }),
        /* @__PURE__ */ e("span", { className: "text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest", children: "ou" }),
        /* @__PURE__ */ e("div", { className: "flex-1 h-px bg-border" })
      ] }),
      /* @__PURE__ */ s("form", { onSubmit: async (C) => {
        C.preventDefault(), p(!0);
        try {
          a ? await a(r, d) : (await new Promise((w) => setTimeout(w, 1200)), T.success("Login efetuado!"), t == null || t("dashboard"));
        } catch (w) {
          console.error("Login error:", w);
        } finally {
          p(!1);
        }
      }, className: "space-y-4", children: [
        /* @__PURE__ */ s("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ e("label", { className: "text-[10px] font-display font-black uppercase tracking-widest text-foreground", children: "Email" }),
          /* @__PURE__ */ s("div", { className: "relative", children: [
            /* @__PURE__ */ e(st, { size: 15, className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "email",
                value: r,
                onChange: (C) => o(C.target.value),
                placeholder: "email@exemplo.com",
                required: !0,
                className: "w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-2xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ s("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ e("label", { className: "text-[10px] font-display font-black uppercase tracking-widest text-foreground", children: "Palavra-passe" }),
          /* @__PURE__ */ s("div", { className: "relative", children: [
            /* @__PURE__ */ e(it, { size: 15, className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: c ? "text" : "password",
                value: d,
                onChange: (C) => m(C.target.value),
                placeholder: "••••••••",
                required: !0,
                className: "w-full pl-10 pr-12 py-3 bg-secondary border border-border rounded-2xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              }
            ),
            /* @__PURE__ */ e("button", { type: "button", onClick: () => l(!c), className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors", children: c ? /* @__PURE__ */ e(nt, { size: 15 }) : /* @__PURE__ */ e(dt, { size: 15 }) })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "flex justify-end", children: /* @__PURE__ */ e("button", { type: "button", className: "text-xs text-primary font-display font-bold hover:underline", children: "Esqueci a palavra-passe" }) }),
        /* @__PURE__ */ e(S, { type: "submit", size: "lg", className: "w-full rounded-2xl", disabled: u, children: u ? /* @__PURE__ */ s(se, { children: [
          /* @__PURE__ */ e(Ye, { size: 16, className: "animate-spin mr-2" }),
          "A entrar..."
        ] }) : "Entrar" })
      ] }),
      /* @__PURE__ */ s("p", { className: "text-center text-sm text-muted-foreground", children: [
        "Sem conta?",
        " ",
        /* @__PURE__ */ e("button", { onClick: () => t == null ? void 0 : t("register"), className: "text-primary font-display font-bold hover:underline", children: "Registar" })
      ] })
    ] })
  ] }) });
}, Jn = ({
  onNavigate: t,
  onSubmitRegister: a
}) => {
  const [r, o] = z(1), [d, m] = z("FAMILY"), [c, l] = z(!1), [u, p] = z(!1), [b, C] = z(!1), [w, M] = z({ name: "", email: "", phone: "", password: "", confirm: "" }), g = (f) => (h) => M((A) => ({ ...A, [f]: h.target.value })), y = async (f) => {
    if (f.preventDefault(), !b) {
      T.error("Aceite os termos para continuar");
      return;
    }
    if (w.password !== w.confirm) {
      T.error("As palavras-passe não coincidem");
      return;
    }
    p(!0);
    try {
      a ? await a({ name: w.name, email: w.email, phone: w.phone, password: w.password, role: d }) : (await new Promise((h) => setTimeout(h, 1200)), T.success("Conta criada!"), t == null || t(d === "FAMILY" ? "family-setup" : "profile-setup"));
    } catch (h) {
      console.error("Register error:", h);
    } finally {
      p(!1);
    }
  }, k = [
    { id: "FAMILY", icon: O, title: "Família", desc: "Procuro um cuidador para o meu familiar", tag: "€29 ativação", tagClass: "bg-warning/10 text-warning border border-warning/30" },
    { id: "CAREGIVER", icon: Y, title: "Cuidador(a)", desc: "Sou profissional de saúde ou cuidador", tag: "Gratuito", tagClass: "bg-success/10 text-success border border-success/30" }
  ];
  return /* @__PURE__ */ e("div", { className: "min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center px-4 py-12", children: /* @__PURE__ */ s("div", { className: "w-full max-w-lg space-y-6", children: [
    /* @__PURE__ */ s("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ e(Ha, {}),
      /* @__PURE__ */ e("h1", { className: "text-3xl font-display font-black uppercase tracking-tighter text-foreground", children: "Criar Conta" })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex items-center justify-center gap-3", children: [1, 2].map((f) => /* @__PURE__ */ s(Oe.Fragment, { children: [
      /* @__PURE__ */ e("div", { className: `w-8 h-8 rounded-xl flex items-center justify-center text-xs font-display font-black transition-all ${f <= r ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-muted-foreground border border-border"}`, children: f < r ? /* @__PURE__ */ e(L, { size: 14 }) : f }),
      f < 2 && /* @__PURE__ */ e("div", { className: `w-16 h-0.5 rounded-full transition-all ${f < r ? "bg-primary" : "bg-border"}` })
    ] }, f)) }),
    /* @__PURE__ */ s("div", { className: "bg-card rounded-3xl border border-border shadow-elevated p-8 space-y-6", children: [
      r === 1 && /* @__PURE__ */ s("div", { className: "space-y-5", children: [
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ e("h2", { className: "text-lg font-display font-black uppercase tracking-tighter", children: "Qual é o seu papel?" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground mt-1", children: "Escolha o tipo de conta a criar" })
        ] }),
        /* @__PURE__ */ e("div", { className: "space-y-3", children: k.map((f) => /* @__PURE__ */ s(
          "label",
          {
            onClick: () => m(f.id),
            className: `flex items-center gap-4 p-5 border-2 rounded-2xl cursor-pointer transition-all ${d === f.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"}`,
            children: [
              /* @__PURE__ */ e("div", { className: `w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${d === f.id ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`, children: /* @__PURE__ */ e(f.icon, { size: 22 }) }),
              /* @__PURE__ */ s("div", { className: "flex-1", children: [
                /* @__PURE__ */ s("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ e("span", { className: "font-display font-black text-foreground text-sm uppercase", children: f.title }),
                  /* @__PURE__ */ e("span", { className: `text-[9px] font-display font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${f.tagClass}`, children: f.tag })
                ] }),
                /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground mt-0.5", children: f.desc })
              ] }),
              /* @__PURE__ */ e("div", { className: `w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${d === f.id ? "border-primary bg-primary" : "border-border"}`, children: d === f.id && /* @__PURE__ */ e("div", { className: "w-2 h-2 rounded-full bg-primary-foreground" }) })
            ]
          },
          f.id
        )) }),
        /* @__PURE__ */ e(S, { size: "lg", className: "w-full rounded-2xl", onClick: () => o(2), children: "Continuar" })
      ] }),
      r === 2 && /* @__PURE__ */ s("form", { onSubmit: y, className: "space-y-5", children: [
        /* @__PURE__ */ s("div", { className: "flex items-center gap-3 p-4 bg-secondary rounded-2xl", children: [
          d === "FAMILY" ? /* @__PURE__ */ e(O, { size: 18, className: "text-muted-foreground" }) : /* @__PURE__ */ e(Y, { size: 18, className: "text-muted-foreground" }),
          /* @__PURE__ */ e("span", { className: "font-display font-bold text-sm text-foreground", children: d === "FAMILY" ? "Família" : "Cuidador(a)" }),
          /* @__PURE__ */ e("button", { type: "button", onClick: () => o(1), className: "ml-auto text-[10px] font-display font-black text-primary uppercase tracking-widest hover:underline", children: "Alterar" })
        ] }),
        [
          { label: "Nome Completo", key: "name", type: "text", placeholder: "Nome completo" },
          { label: "Email", key: "email", type: "email", placeholder: "email@exemplo.com" },
          { label: "Telemóvel", key: "phone", type: "tel", placeholder: "+351 912 345 678" },
          { label: "Palavra-passe", key: "password", type: c ? "text" : "password", placeholder: "••••••••" },
          { label: "Confirmar Palavra-passe", key: "confirm", type: "password", placeholder: "••••••••" }
        ].map((f) => /* @__PURE__ */ s("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ e("label", { className: "text-[10px] font-display font-black uppercase tracking-widest text-foreground", children: f.label }),
          /* @__PURE__ */ e(
            "input",
            {
              type: f.type,
              value: w[f.key],
              onChange: g(f.key),
              placeholder: f.placeholder,
              className: "w-full px-4 py-3 bg-secondary border border-border rounded-2xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            }
          )
        ] }, f.key)),
        d === "FAMILY" && /* @__PURE__ */ s("div", { className: "p-4 bg-warning/5 border border-warning/20 rounded-2xl", children: [
          /* @__PURE__ */ e("p", { className: "text-xs font-display font-black text-foreground uppercase", children: "Taxa de Ativação — €29" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground mt-1", children: "Taxa única para acesso completo, verificação KYC e suporte dedicado." })
        ] }),
        d === "CAREGIVER" && /* @__PURE__ */ s("div", { className: "p-4 bg-success/5 border border-success/20 rounded-2xl flex items-start gap-3", children: [
          /* @__PURE__ */ e(L, { size: 14, className: "text-success mt-0.5 shrink-0" }),
          /* @__PURE__ */ s("div", { children: [
            /* @__PURE__ */ e("p", { className: "text-xs font-display font-black text-success uppercase", children: "Registo Gratuito" }),
            /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Sem taxa de ativação. Crie o perfil e comece a receber propostas." })
          ] })
        ] }),
        /* @__PURE__ */ s("label", { className: "flex items-start gap-3 cursor-pointer", children: [
          /* @__PURE__ */ e("div", { onClick: () => C(!b), className: `w-5 h-5 rounded-md border-2 flex items-center justify-center mt-0.5 transition-all shrink-0 ${b ? "bg-primary border-primary" : "border-border"}`, children: b && /* @__PURE__ */ e(L, { size: 11, className: "text-primary-foreground" }) }),
          /* @__PURE__ */ s("span", { className: "text-xs text-muted-foreground leading-relaxed", children: [
            "Aceito os ",
            /* @__PURE__ */ e("button", { type: "button", className: "text-primary font-medium hover:underline", children: "Termos" }),
            " e a ",
            /* @__PURE__ */ e("button", { type: "button", className: "text-primary font-medium hover:underline", children: "Política de Privacidade" })
          ] })
        ] }),
        /* @__PURE__ */ s("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ e(S, { type: "button", variant: "outline", className: "rounded-2xl px-5", onClick: () => o(1), children: "←" }),
          /* @__PURE__ */ e(S, { type: "submit", size: "lg", className: "flex-1 rounded-2xl", disabled: u || !b, children: u ? /* @__PURE__ */ s(se, { children: [
            /* @__PURE__ */ e(Ye, { size: 15, className: "animate-spin mr-2" }),
            "A criar..."
          ] }) : "Criar Conta" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s("p", { className: "text-center text-sm text-muted-foreground", children: [
      "Já tem conta?",
      " ",
      /* @__PURE__ */ e("button", { onClick: () => t == null ? void 0 : t("login"), className: "text-primary font-display font-bold hover:underline", children: "Entrar" })
    ] })
  ] }) });
}, Oa = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }, oe = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } } }, Ya = ({ step: t, total: a, labels: r }) => /* @__PURE__ */ s("div", { className: "space-y-3", children: [
  /* @__PURE__ */ e("div", { className: "flex items-center", children: Array.from({ length: a }).map((o, d) => /* @__PURE__ */ s(Oe.Fragment, { children: [
    /* @__PURE__ */ e("div", { className: `w-9 h-9 rounded-xl flex items-center justify-center font-display font-black text-sm shrink-0 transition-all ${d + 1 < t ? "bg-success text-success-foreground shadow-sm" : d + 1 === t ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-muted-foreground border border-border"}`, children: d + 1 < t ? /* @__PURE__ */ e(L, { size: 14 }) : d + 1 }),
    d < a - 1 && /* @__PURE__ */ e("div", { className: `flex-1 h-0.5 mx-2 rounded-full transition-all duration-500 ${d + 1 < t ? "bg-success" : "bg-border"}` })
  ] }, d)) }),
  r && /* @__PURE__ */ e("div", { className: "grid gap-2", style: { gridTemplateColumns: `repeat(${a}, 1fr)` }, children: r.map((o, d) => /* @__PURE__ */ e("p", { className: `text-[9px] font-display font-black uppercase tracking-widest text-center truncate ${t >= d + 1 ? "text-foreground" : "text-muted-foreground"}`, children: o }, o)) })
] }), q = ({ label: t, active: a, onClick: r }) => /* @__PURE__ */ s(
  "button",
  {
    type: "button",
    onClick: r,
    className: `flex items-center gap-2.5 px-3 py-2.5 border rounded-2xl text-sm cursor-pointer transition-all text-left w-full ${a ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground hover:border-primary/40 hover:bg-secondary/60"}`,
    children: [
      /* @__PURE__ */ e("div", { className: `w-4 h-4 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${a ? "bg-primary border-primary" : "border-border/70"}`, children: a && /* @__PURE__ */ e(L, { size: 10, className: "text-primary-foreground" }) }),
      /* @__PURE__ */ e("span", { className: "font-medium", children: t })
    ]
  }
), D = ({ children: t }) => /* @__PURE__ */ e("label", { className: "text-[10px] font-display font-black uppercase tracking-widest text-foreground", children: t }), B = Oe.forwardRef((t, a) => /* @__PURE__ */ e(
  "input",
  {
    ref: a,
    ...t,
    className: "w-full px-4 py-3 bg-secondary border border-border rounded-2xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
  }
)), U = ({ label: t }) => /* @__PURE__ */ e("div", { className: "text-[10px] font-display font-black text-muted-foreground uppercase tracking-[0.35em] border-l-4 border-primary pl-3", children: t }), vi = ["Diabetes", "Hipertensão", "Alzheimer/Demência", "Parkinson", "AVC/Sequelas", "Insuficiência Cardíaca", "Artrite/Osteoporose", "Depressão/Ansiedade"], yi = ["Higiene Pessoal", "Administração de Medicação", "Fisioterapia", "Companhia e Lazer", "Transporte Médico", "Cuidados de Enfermagem", "Preparação de Refeições", "Apoio Noturno"], Ni = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"], wi = ["Manhã (6h–12h)", "Tarde (12h–18h)", "Noite (18h–00h)", "Madrugada (00h–6h)"], Ci = ["Independente", "Mobilidade Parcial", "Cadeira de Rodas", "Acamado"], Qn = ({ onNavigate: t }) => {
  const [a, r] = z(1), [o, d] = z({ elderName: "", elderAge: "", mobility: "", conditions: [], services: [], days: [], times: [], emergencyName: "", emergencyPhone: "", city: "", notes: "" }), m = (l, u) => d((p) => ({ ...p, [l]: p[l].includes(u) ? p[l].filter((b) => b !== u) : [...p[l], u] })), c = () => {
    if (a === 1 && !o.elderName) {
      T.error("Preencha o nome do idoso");
      return;
    }
    if (a === 2 && o.services.length === 0) {
      T.error("Selecione pelo menos um serviço");
      return;
    }
    a < 3 ? r((l) => l + 1) : (T.success("Perfil guardado!"), t == null || t("kyc"));
  };
  return /* @__PURE__ */ e("div", { className: "min-h-screen bg-gradient-to-br from-primary/[0.04] via-background to-background px-4 py-10", children: /* @__PURE__ */ s("div", { className: "max-w-xl mx-auto space-y-8", children: [
    /* @__PURE__ */ s("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ s("div", { className: "relative inline-block", children: [
        /* @__PURE__ */ e("div", { className: "w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-glow", children: /* @__PURE__ */ s("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "white", strokeWidth: "2.5", children: [
          /* @__PURE__ */ e("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
          /* @__PURE__ */ e("circle", { cx: "9", cy: "7", r: "4" }),
          /* @__PURE__ */ e("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
          /* @__PURE__ */ e("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-lg flex items-center justify-center border-2 border-background", children: /* @__PURE__ */ e(L, { size: 10, className: "text-success-foreground" }) })
      ] }),
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ e("h1", { className: "text-3xl font-display font-black uppercase tracking-tighter text-foreground", children: "Configure o Cuidado" }),
        /* @__PURE__ */ s("p", { className: "text-sm text-muted-foreground mt-1", children: [
          "Família · EVYRA · Passo ",
          a,
          " de 3"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e(Ya, { step: a, total: 3, labels: ["Dados do Idoso", "Necessidades", "Emergência"] }),
    /* @__PURE__ */ e(Je, { mode: "wait", children: /* @__PURE__ */ s(
      I.div,
      {
        variants: Oa,
        initial: "hidden",
        animate: "show",
        className: "bg-card rounded-3xl border border-border shadow-elevated p-6 sm:p-8 space-y-6",
        children: [
          a === 1 && /* @__PURE__ */ s(I.div, { variants: oe, className: "space-y-6", children: [
            /* @__PURE__ */ e(U, { label: "Dados do Idoso" }),
            /* @__PURE__ */ s("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ s("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ e(D, { children: "Nome do Idoso *" }),
                /* @__PURE__ */ e(B, { value: o.elderName, onChange: (l) => d((u) => ({ ...u, elderName: l.target.value })), placeholder: "Nome completo" })
              ] }),
              /* @__PURE__ */ s("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ e(D, { children: "Idade" }),
                /* @__PURE__ */ e(B, { type: "number", value: o.elderAge, onChange: (l) => d((u) => ({ ...u, elderAge: l.target.value })), placeholder: "78" })
              ] })
            ] }),
            /* @__PURE__ */ s("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e(D, { children: "Nível de Mobilidade" }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2", children: Ci.map((l) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => d((u) => ({ ...u, mobility: l })),
                  className: `px-3 py-2.5 border rounded-2xl text-sm font-display font-bold transition-all text-left ${o.mobility === l ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground hover:border-primary/40"}`,
                  children: l
                },
                l
              )) })
            ] }),
            /* @__PURE__ */ s("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e(D, { children: "Condições Médicas" }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: vi.map((l) => /* @__PURE__ */ e(q, { label: l, active: o.conditions.includes(l), onClick: () => m("conditions", l) }, l)) })
            ] })
          ] }),
          a === 2 && /* @__PURE__ */ s(I.div, { variants: oe, className: "space-y-6", children: [
            /* @__PURE__ */ e(U, { label: "Necessidades de Cuidado" }),
            /* @__PURE__ */ s("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e(D, { children: "Serviços Necessários *" }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: yi.map((l) => /* @__PURE__ */ e(q, { label: l, active: o.services.includes(l), onClick: () => m("services", l) }, l)) })
            ] }),
            /* @__PURE__ */ s("div", { className: "border-t border-border pt-5 space-y-5", children: [
              /* @__PURE__ */ s("div", { className: "space-y-2", children: [
                /* @__PURE__ */ e(D, { children: "Dias da Semana" }),
                /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2", children: Ni.map((l) => /* @__PURE__ */ e(q, { label: l, active: o.days.includes(l), onClick: () => m("days", l) }, l)) })
              ] }),
              /* @__PURE__ */ s("div", { className: "space-y-2", children: [
                /* @__PURE__ */ e(D, { children: "Período" }),
                /* @__PURE__ */ e("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: wi.map((l) => /* @__PURE__ */ e(q, { label: l, active: o.times.includes(l), onClick: () => m("times", l) }, l)) })
              ] })
            ] })
          ] }),
          a === 3 && /* @__PURE__ */ s(I.div, { variants: oe, className: "space-y-6", children: [
            /* @__PURE__ */ e(U, { label: "Contacto de Emergência" }),
            /* @__PURE__ */ s("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ e(D, { children: "Nome do Contacto *" }),
              /* @__PURE__ */ e(B, { value: o.emergencyName, onChange: (l) => d((u) => ({ ...u, emergencyName: l.target.value })), placeholder: "Nome completo" })
            ] }),
            /* @__PURE__ */ s("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ s("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ e(D, { children: "Telemóvel *" }),
                /* @__PURE__ */ e(B, { type: "tel", value: o.emergencyPhone, onChange: (l) => d((u) => ({ ...u, emergencyPhone: l.target.value })), placeholder: "+351 912 345 678" })
              ] }),
              /* @__PURE__ */ s("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ e(D, { children: "Cidade" }),
                /* @__PURE__ */ e(B, { value: o.city, onChange: (l) => d((u) => ({ ...u, city: l.target.value })), placeholder: "Lisboa, Porto..." })
              ] })
            ] }),
            /* @__PURE__ */ s("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ e(D, { children: "Notas Adicionais" }),
              /* @__PURE__ */ e(
                "textarea",
                {
                  value: o.notes,
                  onChange: (l) => d((u) => ({ ...u, notes: l.target.value })),
                  rows: 3,
                  placeholder: "Informação adicional para o cuidador...",
                  className: "w-full px-4 py-3 bg-secondary border border-border rounded-2xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ s("div", { className: "bg-secondary rounded-2xl p-4 border border-border/60 space-y-2", children: [
              /* @__PURE__ */ e("p", { className: "text-[9px] font-display font-black uppercase tracking-widest text-muted-foreground mb-2", children: "Resumo" }),
              [["Idoso", o.elderName || "—"], ["Mobilidade", o.mobility || "—"], ["Serviços", `${o.services.length} selecionados`], ["Emergência", o.emergencyName || "—"]].map(([l, u]) => /* @__PURE__ */ s("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ e("span", { className: "text-muted-foreground", children: l }),
                /* @__PURE__ */ e("span", { className: "font-display font-black text-foreground", children: u })
              ] }, l))
            ] })
          ] })
        ]
      },
      a
    ) }),
    /* @__PURE__ */ s("div", { className: "flex gap-3", children: [
      a > 1 && /* @__PURE__ */ e(S, { variant: "outline", className: "px-5 rounded-2xl", onClick: () => r((l) => l - 1), children: "← Voltar" }),
      /* @__PURE__ */ s(S, { size: "lg", className: "flex-1 rounded-2xl", onClick: c, children: [
        a === 3 ? "Completar Registo" : "Continuar",
        " ",
        /* @__PURE__ */ e(Re, { size: 16, className: "ml-2" })
      ] })
    ] })
  ] }) });
}, ki = ["Cuidados a Idosos", "Alzheimer/Demência", "Cuidados Paliativos", "Fisioterapia", "Enfermagem", "Administração de Medicação", "Higiene Pessoal", "Reabilitação", "Apoio Psicológico", "Pediatria"], Si = ["Certificado de Cuidador Formal", "Licenciatura em Enfermagem", "Técnico de Geriatria", "Primeiros Socorros", "HACCP", "Carta de Condução"], Ri = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"], Ii = ["Manhã (6h–12h)", "Tarde (12h–18h)", "Noite (18h–00h)", "Full-time"], Xn = ({ onNavigate: t }) => {
  const [a, r] = z(1), [o, d] = z({
    firstName: "",
    lastName: "",
    city: "",
    phone: "",
    bio: "",
    specialties: [],
    experience: "",
    rate: "",
    certifications: [],
    days: [],
    times: []
  }), m = (l, u) => d((p) => ({ ...p, [l]: p[l].includes(u) ? p[l].filter((b) => b !== u) : [...p[l], u] })), c = () => {
    if (a === 1 && (!o.firstName || !o.lastName)) {
      T.error("Preencha o nome completo");
      return;
    }
    if (a === 2 && o.specialties.length === 0) {
      T.error("Selecione pelo menos uma especialidade");
      return;
    }
    a < 3 ? r((l) => l + 1) : (T.success("Perfil de cuidador criado!"), t == null || t("kyc"));
  };
  return /* @__PURE__ */ e("div", { className: "min-h-screen bg-gradient-to-br from-primary/[0.04] via-background to-background px-4 py-10", children: /* @__PURE__ */ s("div", { className: "max-w-xl mx-auto space-y-8", children: [
    /* @__PURE__ */ s("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ s("div", { className: "relative inline-block", children: [
        /* @__PURE__ */ e("div", { className: "w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-glow", children: /* @__PURE__ */ s("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "white", strokeWidth: "2.5", children: [
          /* @__PURE__ */ e("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
          /* @__PURE__ */ e("circle", { cx: "12", cy: "7", r: "4" })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-lg flex items-center justify-center border-2 border-background", children: /* @__PURE__ */ e("span", { className: "text-primary-foreground text-[8px] font-black", children: "✦" }) })
      ] }),
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ e("h1", { className: "text-3xl font-display font-black uppercase tracking-tighter text-foreground", children: "Criar Perfil" }),
        /* @__PURE__ */ s("p", { className: "text-sm text-muted-foreground mt-1", children: [
          "Cuidador · EVYRA · Passo ",
          a,
          " de 3"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e(Ya, { step: a, total: 3, labels: ["Dados Pessoais", "Especialidades", "Disponibilidade"] }),
    /* @__PURE__ */ e(Je, { mode: "wait", children: /* @__PURE__ */ s(
      I.div,
      {
        variants: Oa,
        initial: "hidden",
        animate: "show",
        className: "bg-card rounded-3xl border border-border shadow-elevated p-6 sm:p-8 space-y-6",
        children: [
          a === 1 && /* @__PURE__ */ s(I.div, { variants: oe, className: "space-y-5", children: [
            /* @__PURE__ */ e(U, { label: "Dados Pessoais" }),
            /* @__PURE__ */ s("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ s("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ e(D, { children: "Primeiro Nome *" }),
                /* @__PURE__ */ e(B, { value: o.firstName, onChange: (l) => d((u) => ({ ...u, firstName: l.target.value })), placeholder: "Maria" })
              ] }),
              /* @__PURE__ */ s("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ e(D, { children: "Apelido *" }),
                /* @__PURE__ */ e(B, { value: o.lastName, onChange: (l) => d((u) => ({ ...u, lastName: l.target.value })), placeholder: "Silva" })
              ] })
            ] }),
            /* @__PURE__ */ s("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ s("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ e(D, { children: "Cidade" }),
                /* @__PURE__ */ e(B, { value: o.city, onChange: (l) => d((u) => ({ ...u, city: l.target.value })), placeholder: "Lisboa" })
              ] }),
              /* @__PURE__ */ s("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ e(D, { children: "Telemóvel" }),
                /* @__PURE__ */ e(B, { type: "tel", value: o.phone, onChange: (l) => d((u) => ({ ...u, phone: l.target.value })), placeholder: "+351 912 345 678" })
              ] })
            ] }),
            /* @__PURE__ */ s("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ e(D, { children: "Apresentação" }),
              /* @__PURE__ */ e(
                "textarea",
                {
                  value: o.bio,
                  onChange: (l) => d((u) => ({ ...u, bio: l.target.value })),
                  rows: 3,
                  placeholder: "Descreva a sua experiência e abordagem aos cuidados...",
                  className: "w-full px-4 py-3 bg-secondary border border-border rounded-2xl text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ s(
              "div",
              {
                className: "border-2 border-dashed border-border rounded-2xl p-6 text-center cursor-pointer hover:border-primary/50 hover:bg-primary/[0.02] transition-all",
                onClick: () => T.info("Upload de foto em desenvolvimento"),
                children: [
                  /* @__PURE__ */ e("div", { className: "w-14 h-14 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ s("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "text-muted-foreground", children: [
                    /* @__PURE__ */ e("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
                    /* @__PURE__ */ e("circle", { cx: "12", cy: "7", r: "4" })
                  ] }) }),
                  /* @__PURE__ */ e("p", { className: "text-sm font-display font-black text-foreground uppercase", children: "Foto de Perfil" }),
                  /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground mt-1", children: "Clique para fazer upload" })
                ]
              }
            )
          ] }),
          a === 2 && /* @__PURE__ */ s(I.div, { variants: oe, className: "space-y-6", children: [
            /* @__PURE__ */ e(U, { label: "Especialidades *" }),
            /* @__PURE__ */ e("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: ki.map((l) => /* @__PURE__ */ e(q, { label: l, active: o.specialties.includes(l), onClick: () => m("specialties", l) }, l)) }),
            /* @__PURE__ */ e(U, { label: "Experiência & Tarifas" }),
            /* @__PURE__ */ s("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ s("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ e(D, { children: "Anos de Experiência" }),
                /* @__PURE__ */ e(B, { type: "number", value: o.experience, onChange: (l) => d((u) => ({ ...u, experience: l.target.value })), placeholder: "5" })
              ] }),
              /* @__PURE__ */ s("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ e(D, { children: "Tarifa Horária (€)" }),
                /* @__PURE__ */ e(B, { type: "number", value: o.rate, onChange: (l) => d((u) => ({ ...u, rate: l.target.value })), placeholder: "20" })
              ] })
            ] }),
            /* @__PURE__ */ e(U, { label: "Certificações" }),
            /* @__PURE__ */ e("div", { className: "grid grid-cols-1 gap-2", children: Si.map((l) => /* @__PURE__ */ e(q, { label: l, active: o.certifications.includes(l), onClick: () => m("certifications", l) }, l)) })
          ] }),
          a === 3 && /* @__PURE__ */ s(I.div, { variants: oe, className: "space-y-6", children: [
            /* @__PURE__ */ e(U, { label: "Disponibilidade" }),
            /* @__PURE__ */ s("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e(D, { children: "Dias Disponíveis" }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2", children: Ri.map((l) => /* @__PURE__ */ e(q, { label: l, active: o.days.includes(l), onClick: () => m("days", l) }, l)) })
            ] }),
            /* @__PURE__ */ s("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e(D, { children: "Períodos" }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: Ii.map((l) => /* @__PURE__ */ e(q, { label: l, active: o.times.includes(l), onClick: () => m("times", l) }, l)) })
            ] }),
            /* @__PURE__ */ s("div", { className: "bg-primary/5 border border-primary/20 rounded-2xl p-5 space-y-2", children: [
              /* @__PURE__ */ e("p", { className: "text-[9px] font-display font-black uppercase tracking-widest text-primary mb-3", children: "Resumo do Perfil" }),
              [
                ["Nome", `${o.firstName} ${o.lastName}`.trim() || "—"],
                ["Cidade", o.city || "—"],
                ["Experiência", o.experience ? `${o.experience} anos` : "—"],
                ["Tarifa", o.rate ? `€${o.rate}/hora` : "—"],
                ["Especialidades", `${o.specialties.length} selecionadas`],
                ["Certificações", `${o.certifications.length} selecionadas`]
              ].map(([l, u]) => /* @__PURE__ */ s("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ e("span", { className: "text-muted-foreground", children: l }),
                /* @__PURE__ */ e("span", { className: "font-display font-black text-foreground", children: u })
              ] }, l))
            ] })
          ] })
        ]
      },
      a
    ) }),
    /* @__PURE__ */ s("div", { className: "flex gap-3", children: [
      a > 1 && /* @__PURE__ */ e(S, { variant: "outline", className: "px-5 rounded-2xl", onClick: () => r((l) => l - 1), children: "← Voltar" }),
      /* @__PURE__ */ s(S, { size: "lg", className: "flex-1 rounded-2xl", onClick: c, children: [
        a === 3 ? "Criar Perfil" : "Continuar",
        " ",
        /* @__PURE__ */ e(Re, { size: 16, className: "ml-2" })
      ] })
    ] })
  ] }) });
}, Zn = ({ onNavigate: t }) => {
  const [a, r] = z("UNVERIFIED"), [o, d] = z(!1), [m, c] = z(!1), l = { UNVERIFIED: "PENDING", PENDING: "VERIFIED", VERIFIED: "REJECTED", REJECTED: "UNVERIFIED" }, u = () => {
    c(!0), setTimeout(() => {
      c(!1), r("PENDING"), d(!0);
    }, 900);
  }, b = {
    UNVERIFIED: { icon: "🛡️", bg: "bg-secondary", title: "Não Verificado", desc: "Inicie a verificação para desbloquear todas as funcionalidades.", badgeCls: "bg-secondary text-muted-foreground border-border" },
    PENDING: { icon: "⏳", bg: "bg-warning/10", title: "Em Verificação", desc: "O processo está em curso. Aguarde.", badgeCls: "bg-warning/10 text-warning border-warning/30" },
    VERIFIED: { icon: "✅", bg: "bg-success/10", title: "Verificado", desc: "Identidade confirmada. Conta totalmente ativa.", badgeCls: "bg-success/10 text-success border-success/30" },
    REJECTED: { icon: "❌", bg: "bg-destructive/10", title: "Rejeitado", desc: "A verificação falhou. Tente com documentos válidos.", badgeCls: "bg-destructive/10 text-destructive border-destructive/30" }
  }[a];
  return /* @__PURE__ */ s("div", { className: "min-h-screen bg-gradient-to-br from-primary/[0.04] via-background to-background px-4 py-10", children: [
    o && /* @__PURE__ */ e("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm", children: /* @__PURE__ */ s(I.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, className: "w-full max-w-md mx-4 bg-card rounded-3xl border border-border shadow-elevated overflow-hidden", children: [
      /* @__PURE__ */ s("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border", children: [
        /* @__PURE__ */ s("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e("div", { className: "w-7 h-7 bg-primary rounded-lg flex items-center justify-center", children: /* @__PURE__ */ e(Ve, { size: 14, className: "text-primary-foreground" }) }),
          /* @__PURE__ */ e("span", { className: "text-sm font-display font-black uppercase tracking-tight text-foreground", children: "Verificação Didit" })
        ] }),
        /* @__PURE__ */ e("button", { onClick: () => {
          d(!1), r("VERIFIED");
        }, className: "text-muted-foreground hover:text-foreground transition-colors p-1", children: "✕" })
      ] }),
      /* @__PURE__ */ s("div", { className: "p-8 text-center space-y-5", children: [
        /* @__PURE__ */ e("div", { className: "w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-4xl", children: "📸" }),
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ e("p", { className: "font-display font-black text-foreground uppercase", children: "Documento de Identidade" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground mt-1", children: "Posicione o BI ou Passaporte em frente à câmara" })
        ] }),
        /* @__PURE__ */ e("div", { className: "w-full h-36 bg-secondary rounded-2xl border-2 border-dashed border-border flex items-center justify-center", children: /* @__PURE__ */ s("div", { className: "text-center", children: [
          /* @__PURE__ */ e(Ze, { size: 28, className: "mx-auto text-muted-foreground" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground mt-2 font-display font-bold", children: "Câmara Didit" })
        ] }) }),
        /* @__PURE__ */ e(S, { size: "lg", className: "w-full rounded-2xl", onClick: () => {
          d(!1), r("VERIFIED");
        }, children: "Simular Aprovação ✓" })
      ] })
    ] }) }),
    /* @__PURE__ */ s("div", { className: "max-w-xl mx-auto space-y-6", children: [
      /* @__PURE__ */ s("div", { className: "text-center space-y-3", children: [
        /* @__PURE__ */ e("div", { className: "w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-glow", children: /* @__PURE__ */ e(Ve, { size: 28, className: "text-primary-foreground" }) }),
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ e("h1", { className: "text-3xl font-display font-black uppercase tracking-tighter text-foreground", children: "Verificação KYC" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground mt-1", children: "Identidade · EVYRA" })
        ] })
      ] }),
      /* @__PURE__ */ s(I.div, { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, className: "bg-card rounded-3xl border border-border shadow-elevated p-8 text-center space-y-5", children: [
        /* @__PURE__ */ e("div", { className: `w-20 h-20 ${b.bg} rounded-2xl flex items-center justify-center mx-auto text-4xl`, children: b.icon }),
        /* @__PURE__ */ e("span", { className: `inline-flex text-[9px] font-display font-black uppercase tracking-widest px-3 py-1.5 rounded-full border ${b.badgeCls}`, children: b.title }),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed", children: b.desc }),
        /* @__PURE__ */ s("div", { className: "flex flex-wrap gap-3 justify-center", children: [
          a === "UNVERIFIED" && /* @__PURE__ */ e(S, { size: "lg", className: "rounded-2xl", onClick: u, disabled: m, children: m ? /* @__PURE__ */ s(se, { children: [
            /* @__PURE__ */ e(Ye, { size: 15, className: "animate-spin mr-2" }),
            "A iniciar..."
          ] }) : /* @__PURE__ */ s(se, { children: [
            /* @__PURE__ */ e(ee, { size: 16, className: "mr-2" }),
            "Iniciar Verificação"
          ] }) }),
          a === "PENDING" && /* @__PURE__ */ e(S, { size: "lg", className: "rounded-2xl", onClick: () => d(!0), children: "Continuar" }),
          a === "VERIFIED" && /* @__PURE__ */ s(S, { size: "lg", className: "rounded-2xl bg-success hover:bg-success/90", onClick: () => t == null ? void 0 : t("dashboard"), children: [
            "Ir para Dashboard ",
            /* @__PURE__ */ e(Re, { size: 15, className: "ml-2" })
          ] }),
          a === "REJECTED" && /* @__PURE__ */ e(S, { size: "lg", className: "rounded-2xl", onClick: u, children: "Nova Tentativa" }),
          /* @__PURE__ */ e(S, { variant: "outline", size: "sm", className: "rounded-2xl", onClick: () => r(l[a]), children: "Demo →" })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-3", children: [[/* @__PURE__ */ s("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
        /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "16", rx: "2" }),
        /* @__PURE__ */ e("path", { d: "M7 8h2m0 0a2 2 0 1 1 4 0H9" }),
        /* @__PURE__ */ e("line", { x1: "7", y1: "16", x2: "17", y2: "16" }),
        /* @__PURE__ */ e("line", { x1: "7", y1: "12", x2: "17", y2: "12" })
      ] }, "id"), "Documento ID", "BI ou Passaporte"], [/* @__PURE__ */ e(Ze, { size: 20 }, "cam"), "Câmara", "Em boas condições"], [/* @__PURE__ */ e(ca, { size: 20 }, "sun"), "Iluminação", "Sem reflexos"]].map(([C, w, M]) => /* @__PURE__ */ s("div", { className: "bg-card rounded-2xl border border-border p-4 text-center space-y-2", children: [
        /* @__PURE__ */ e("div", { className: "w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto text-primary", children: C }),
        /* @__PURE__ */ e("p", { className: "text-[10px] font-display font-black uppercase text-foreground", children: w }),
        /* @__PURE__ */ e("p", { className: "text-[10px] text-muted-foreground leading-relaxed", children: M })
      ] }, w)) }),
      /* @__PURE__ */ s("div", { className: "bg-primary/5 border border-primary/20 rounded-2xl p-5", children: [
        /* @__PURE__ */ e("p", { className: "text-[10px] font-display font-black uppercase tracking-widest text-foreground mb-3", children: "Benefícios" }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: ["Acesso completo à plataforma", "Maior confiança de famílias", "Contratos e pagamentos ativos", "Perfil com selo verificado"].map((C) => /* @__PURE__ */ s("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ e("div", { className: "w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ e(L, { size: 10, className: "text-success" }) }),
          /* @__PURE__ */ e("span", { className: "text-xs text-foreground", children: C })
        ] }, C)) })
      ] })
    ] })
  ] });
}, Ka = qa({ theme: "light", toggleTheme: () => {
} });
function ed({ children: t }) {
  const [a, r] = z(() => typeof window < "u" && localStorage.getItem("evyra-theme") || "light");
  Le(() => {
    const d = document.documentElement;
    d.classList.remove("light", "dark"), d.classList.add(a), localStorage.setItem("evyra-theme", a);
  }, [a]);
  const o = () => r((d) => d === "light" ? "dark" : "light");
  return /* @__PURE__ */ e(Ka.Provider, { value: { theme: a, toggleTheme: o }, children: t });
}
const Ti = () => Wa(Ka), Pi = [
  { id: "1", type: "proposal", title: "Nova Proposta Recebida", desc: "Mariana Costa enviou uma proposta para Apoio Pós-Operatório.", time: "2 min", read: !1, avatar: "https://i.pravatar.cc/100?u=prop0" },
  { id: "2", type: "message", title: "Nova Mensagem", desc: 'João Pedro: "Olá, gostaria de discutir os detalhes..."', time: "15 min", read: !1, avatar: "https://i.pravatar.cc/100?u=prop1" },
  { id: "3", type: "status", title: "Proposta Aceite", desc: "A sua proposta para Cuidados Mensais foi aceite.", time: "1h", read: !1 },
  { id: "4", type: "message", title: "Nova Mensagem", desc: 'Ana Ferreira: "Confirmo disponibilidade para amanhã."', time: "2h", read: !0, avatar: "https://i.pravatar.cc/100?u=prop2" },
  { id: "5", type: "proposal", title: "Proposta Atualizada", desc: "Carlos Silva atualizou o orçamento para 890€.", time: "3h", read: !0, avatar: "https://i.pravatar.cc/100?u=prop3" }
], sa = [
  { type: "message", title: "Nova Mensagem", desc: 'Sofia Lopes: "Podemos agendar para sexta-feira?"', avatar: "https://i.pravatar.cc/100?u=prop4" },
  { type: "proposal", title: "Nova Proposta Recebida", desc: "Ricardo Mendes candidatou-se a Fisioterapia Domiciliária.", avatar: "https://i.pravatar.cc/100?u=prop5" },
  { type: "status", title: "Pagamento Confirmado", desc: "O pagamento de 450€ foi processado com sucesso." }
], zi = {
  proposal: G,
  message: Ce,
  status: ua
}, Di = {
  proposal: "bg-primary/10 text-primary",
  message: "bg-accent text-accent-foreground",
  status: "bg-success/10 text-success"
}, ad = ({ sidebarOpen: t, onMobileMenuToggle: a }) => {
  const { theme: r, toggleTheme: o } = Ti(), [d, m] = z(Pi), [c, l] = z(!1), u = Xe(null), p = Xe(0), b = d.filter((g) => !g.read).length;
  Le(() => {
    const g = setInterval(() => {
      if (p.current < sa.length) {
        const y = sa[p.current];
        p.current++, m((k) => [
          { ...y, id: `new-${Date.now()}`, read: !1, time: "agora" },
          ...k
        ]);
      }
    }, 3e4);
    return () => clearInterval(g);
  }, []), Le(() => {
    const g = (y) => {
      u.current && !u.current.contains(y.target) && l(!1);
    };
    return c && document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [c]);
  const C = () => {
    m((g) => g.map((y) => ({ ...y, read: !0 })));
  }, w = (g) => {
    m((y) => y.map((k) => k.id === g ? { ...k, read: !0 } : k));
  }, M = (g) => {
    m((y) => y.filter((k) => k.id !== g));
  };
  return /* @__PURE__ */ s("header", { className: "h-16 border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between", children: [
    /* @__PURE__ */ s("div", { className: "flex items-center gap-4 flex-1", children: [
      /* @__PURE__ */ e(
        "button",
        {
          onClick: a,
          className: "p-2 text-muted-foreground hover:bg-accent rounded-xl transition-colors md:hidden",
          children: /* @__PURE__ */ e(ma, { size: 22 })
        }
      ),
      /* @__PURE__ */ s("div", { className: "relative w-full max-w-md hidden md:block", children: [
        /* @__PURE__ */ e(pe, { size: 16, className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ e(
          "input",
          {
            className: "w-full bg-secondary border border-border rounded-2xl pl-11 pr-4 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body text-foreground placeholder:text-muted-foreground",
            placeholder: "Pesquisar por especialidade ou localização..."
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ s("div", { className: "flex items-center gap-2 md:gap-3", children: [
      /* @__PURE__ */ e(
        "button",
        {
          onClick: o,
          className: "p-2.5 text-muted-foreground hover:bg-accent rounded-xl transition-colors",
          "aria-label": "Toggle theme",
          children: r === "dark" ? /* @__PURE__ */ e(ca, { size: 20 }) : /* @__PURE__ */ e(lt, { size: 20 })
        }
      ),
      /* @__PURE__ */ s("div", { className: "relative", ref: u, children: [
        /* @__PURE__ */ s(
          "button",
          {
            onClick: () => l(!c),
            className: "p-2.5 text-muted-foreground hover:bg-accent rounded-xl relative transition-colors",
            children: [
              /* @__PURE__ */ e(we, { size: 20 }),
              b > 0 && /* @__PURE__ */ e(
                I.span,
                {
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  className: "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-destructive text-destructive-foreground rounded-full text-[10px] font-bold flex items-center justify-center px-1 border-2 border-card",
                  children: b
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ e(Je, { children: c && /* @__PURE__ */ s(
          I.div,
          {
            initial: { opacity: 0, y: 8, scale: 0.96 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: 8, scale: 0.96 },
            transition: { duration: 0.2, ease: "easeOut" },
            className: "absolute right-0 top-full mt-2 w-[calc(100vw-2rem)] sm:w-96 bg-card border border-border rounded-2xl shadow-elevated overflow-hidden z-50",
            children: [
              /* @__PURE__ */ s("div", { className: "px-5 py-4 border-b border-border flex items-center justify-between", children: [
                /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("h3", { className: "font-display font-black text-foreground uppercase text-sm tracking-wider", children: "Notificações" }),
                  b > 0 && /* @__PURE__ */ s("span", { className: "bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-lg", children: [
                    b,
                    " novas"
                  ] })
                ] }),
                b > 0 && /* @__PURE__ */ e(
                  "button",
                  {
                    onClick: C,
                    className: "text-xs font-semibold text-primary hover:text-primary/80 transition-colors",
                    children: "Marcar todas como lidas"
                  }
                )
              ] }),
              /* @__PURE__ */ e("div", { className: "max-h-[400px] overflow-y-auto", children: d.length === 0 ? /* @__PURE__ */ s("div", { className: "py-12 text-center text-muted-foreground", children: [
                /* @__PURE__ */ e(we, { size: 32, className: "mx-auto mb-3 opacity-30" }),
                /* @__PURE__ */ e("p", { className: "text-sm font-medium", children: "Sem notificações" })
              ] }) : d.map((g, y) => {
                const k = zi[g.type];
                return /* @__PURE__ */ s(
                  I.div,
                  {
                    initial: { opacity: 0, x: -12 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: y * 0.03 },
                    className: i(
                      "flex items-start gap-3 px-5 py-3.5 hover:bg-accent/50 transition-colors cursor-pointer group relative",
                      !g.read && "bg-primary/[0.03]"
                    ),
                    onClick: () => w(g.id),
                    children: [
                      !g.read && /* @__PURE__ */ e("span", { className: "absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full" }),
                      g.avatar ? /* @__PURE__ */ e("div", { className: "w-9 h-9 rounded-xl overflow-hidden shrink-0 ring-2 ring-secondary", children: /* @__PURE__ */ e("img", { src: g.avatar, alt: "", className: "w-full h-full object-cover" }) }) : /* @__PURE__ */ e("div", { className: i("w-9 h-9 rounded-xl flex items-center justify-center shrink-0", Di[g.type]), children: /* @__PURE__ */ e(k, { size: 16 }) }),
                      /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ e("p", { className: i("text-sm font-semibold text-foreground truncate", !g.read && "font-bold"), children: g.title }),
                        /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground line-clamp-2 mt-0.5", children: g.desc }),
                        /* @__PURE__ */ s("div", { className: "flex items-center gap-1 mt-1.5", children: [
                          /* @__PURE__ */ e(Ke, { size: 10, className: "text-muted-foreground/50" }),
                          /* @__PURE__ */ e("span", { className: "text-[10px] text-muted-foreground/60 font-medium", children: g.time })
                        ] })
                      ] }),
                      /* @__PURE__ */ e(
                        "button",
                        {
                          onClick: (f) => {
                            f.stopPropagation(), M(g.id);
                          },
                          className: "opacity-0 group-hover:opacity-100 p-1 text-muted-foreground hover:text-destructive rounded-lg transition-all shrink-0",
                          children: /* @__PURE__ */ e(ne, { size: 14 })
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
      /* @__PURE__ */ e("div", { className: "w-10 h-10 bg-secondary rounded-xl border-2 border-card shadow-card overflow-hidden ring-2 ring-secondary cursor-pointer", children: /* @__PURE__ */ e("img", { src: "https://i.pravatar.cc/100?u=company", alt: "User", className: "w-full h-full object-cover" }) })
    ] })
  ] });
}, H = ({
  icon: t,
  label: a,
  desc: r,
  active: o,
  onClick: d,
  isOpen: m,
  count: c,
  variant: l = "default",
  badge: u
}) => /* @__PURE__ */ s(
  "button",
  {
    onClick: d,
    className: i(
      "w-full flex items-center justify-between p-3 rounded-2xl transition-all duration-200 relative group",
      o ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-accent hover:text-foreground"
    ),
    children: [
      /* @__PURE__ */ s("div", { className: "flex items-center gap-3 min-w-0", children: [
        /* @__PURE__ */ e(t, { size: 18, className: i(
          "shrink-0",
          o ? "text-primary-foreground" : l === "danger" ? "text-destructive" : "text-muted-foreground group-hover:text-primary transition-colors"
        ) }),
        m && /* @__PURE__ */ s("div", { className: "min-w-0 text-left", children: [
          /* @__PURE__ */ e("span", { className: i(
            "text-sm font-display font-bold tracking-tight block",
            o ? "text-primary-foreground" : l === "danger" ? "text-destructive" : "text-foreground"
          ), children: a }),
          r && /* @__PURE__ */ e("span", { className: "text-[10px] opacity-60 font-medium block leading-none mt-0.5 truncate", children: r })
        ] })
      ] }),
      m && (c || u) && /* @__PURE__ */ e("span", { className: i(
        "px-2 py-0.5 rounded-lg text-[9px] font-bold font-display uppercase tracking-widest shrink-0",
        o ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary/10 text-primary"
      ), children: c || u })
    ]
  }
), te = ({ label: t, isOpen: a }) => /* @__PURE__ */ e("div", { className: "pt-5 pb-1.5 px-3", children: a ? /* @__PURE__ */ e("p", { className: "text-[9px] font-display font-black text-muted-foreground/50 uppercase tracking-[0.3em]", children: t }) : /* @__PURE__ */ e("div", { className: "h-px bg-border mx-auto w-8" }) }), J = {
  main: [
    { id: "dashboard-caregiver", icon: ea, label: "Dashboard Cuidador", desc: "Visão do cuidador" },
    { id: "dashboard-family", icon: aa, label: "Dashboard Família", desc: "Visão da família" },
    { id: "marketplace", icon: pe, label: "Explorar Talentos", desc: "Pesquisar cuidadores" },
    { id: "demandas", icon: me, label: "Demandas", desc: "Publicar necessidades", count: "3" },
    { id: "search-cuidadores", icon: O, label: "Procurar Cuidadores", desc: "Encontrar profissional" },
    { id: "entrevistas", icon: Ae, label: "Entrevistas", desc: "Agendadas e pendentes" },
    { id: "propostas", icon: G, label: "Propostas", desc: "Recebidas e enviadas", count: "2" },
    { id: "chat", icon: Ce, label: "Mensagens", desc: "Conversas ativas", count: "5" }
  ],
  recruit: [
    { id: "contratos", icon: G, label: "Contratos", desc: "Ativos e histórico", count: "1" },
    { id: "database", icon: O, label: "Base de Dados", desc: "Pool de candidatos" },
    { id: "payments", icon: he, label: "Pagamentos & Escrow", desc: "Transações e saldo" },
    { id: "verificacao", icon: ee, label: "Verificação KYC", desc: "Estado de identidade" },
    { id: "profile", icon: O, label: "Meu Perfil", desc: "Editar informação" },
    { id: "wallet", icon: Me, label: "Carteira", desc: "Saldo detalhado", badge: "novo" },
    { id: "notificacoes", icon: we, label: "Notificações", desc: "Alertas recentes", badge: "novo" }
  ],
  flows: [
    { id: "cuidador-detail", icon: O, label: "Detalhe Cuidador", desc: "Perfil público", badge: "novo" },
    { id: "nova-demanda", icon: me, label: "Nova Demanda", desc: "Publicar necessidade", badge: "novo" },
    { id: "novo-contrato", icon: G, label: "Novo Contrato", desc: "Criar contrato", badge: "novo" },
    { id: "proposal-flow", icon: Ae, label: "Proposal Flow", desc: "Aceitar proposta", badge: "novo" }
  ],
  auth: [
    { id: "login", icon: ut, label: "Login", desc: "Página de entrada", badge: "novo" },
    { id: "register", icon: pt, label: "Registro", desc: "Criação de conta", badge: "novo" },
    { id: "family-setup", icon: Y, label: "Family Setup", desc: "Wizard família", badge: "novo" },
    { id: "profile-setup", icon: O, label: "Profile Setup", desc: "Wizard cuidador", badge: "novo" },
    { id: "kyc", icon: Ve, label: "Verificação KYC", desc: "Identidade Didit", badge: "novo" }
  ],
  family: [
    { id: "family-member", icon: Y, label: "Familiar Cuidado", desc: "Perfil do dependente", badge: "novo" },
    { id: "family-search", icon: pe, label: "Procurar Cuidadores", desc: "Busca avançada", badge: "novo" },
    { id: "family-demandas", icon: me, label: "Minhas Demandas", desc: "Vagas publicadas", badge: "novo" },
    { id: "family-agenda", icon: ft, label: "Agenda", desc: "Turnos da semana", badge: "novo" },
    { id: "family-care-plan", icon: gt, label: "Plano de Cuidados", desc: "Medicação & rotina", badge: "novo" },
    { id: "family-emergency", icon: bt, label: "Emergências SOS", desc: "Contactos rápidos", badge: "novo" },
    { id: "family-payments", icon: Me, label: "Pagamentos Família", desc: "Faturas & recibos", badge: "novo" },
    { id: "family-contracts", icon: G, label: "Contratos Família", desc: "Em vigor", badge: "novo" },
    { id: "family-favorites", icon: fe, label: "Favoritos", desc: "Cuidadores guardados", badge: "novo" },
    { id: "family-review", icon: fe, label: "Avaliar Cuidador", desc: "Review pós-contrato", badge: "novo" },
    { id: "family-chat", icon: Ce, label: "Chat Família", desc: "Falar com cuidadora", badge: "novo" }
  ],
  admin: [
    { id: "admin", icon: aa, label: "Admin Dashboard", desc: "Painel de gestão", badge: "novo" },
    { id: "help", icon: ht, label: "Centro de Ajuda", desc: "FAQ & suporte", badge: "novo" }
  ],
  uikit: [
    { id: "ui-buttons", icon: ta, label: "Botões" },
    { id: "ui-forms", icon: G, label: "Formulários" },
    { id: "ui-cards", icon: Me, label: "Cards & Badges" },
    { id: "ui-feedback", icon: we, label: "Feedback & Alerts" },
    { id: "ui-data", icon: ea, label: "Dados & Tabelas" },
    { id: "ui-navigation", icon: xt, label: "Navegação" },
    { id: "ui-overlays", icon: ta, label: "Overlays & Modais" },
    { id: "ui-misc", icon: Ae, label: "Utilitários" },
    { id: "ui-colors", icon: vt, label: "Paleta de Cores" },
    { id: "ui-health-icons", icon: Y, label: "Ícones Health" },
    { id: "ui-bottom-nav", icon: yt, label: "Bottom Nav" },
    { id: "ui-specialty-modals", icon: Nt, label: "Modais Especiais" },
    { id: "ui-bloom-custom", icon: wt, label: "Bloom Custom" },
    { id: "ui-status-badge", icon: Ct, label: "Status Badges" },
    { id: "ui-special-inputs", icon: kt, label: "Inputs Especiais" },
    { id: "ui-mobile-audit", icon: St, label: "Mobile UI Audit" }
  ]
}, ia = ({ currentView: t, setCurrentView: a, isOpen: r, setIsOpen: o, onNavigate: d }) => {
  const m = (c) => {
    a(c), d == null || d();
  };
  return /* @__PURE__ */ s("div", { className: "flex flex-col h-full p-4", children: [
    /* @__PURE__ */ s("div", { className: "flex items-center justify-between mb-6 px-1 pt-1", children: [
      r ? /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e("div", { className: "w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-glow", children: /* @__PURE__ */ e(Y, { size: 20, className: "text-primary-foreground", fill: "currentColor" }) }),
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ e("h1", { className: "text-base font-display font-black tracking-tighter text-primary leading-none", children: "EVYRA" }),
          /* @__PURE__ */ e("p", { className: "text-[9px] font-display font-bold text-muted-foreground uppercase tracking-widest mt-0.5", children: "UI Kit" })
        ] })
      ] }) : /* @__PURE__ */ e("div", { className: "w-10 h-10 bg-primary rounded-xl flex items-center justify-center mx-auto shadow-glow", children: /* @__PURE__ */ e(Y, { size: 20, className: "text-primary-foreground", fill: "currentColor" }) }),
      /* @__PURE__ */ e("button", { onClick: () => o(!r), className: "p-2 hover:bg-accent rounded-xl transition-colors text-muted-foreground hidden md:block", children: /* @__PURE__ */ e(ma, { size: 18 }) })
    ] }),
    r && /* @__PURE__ */ s("div", { className: "mx-1 mb-4 px-3 py-2.5 bg-primary/5 border border-primary/20 rounded-2xl", children: [
      /* @__PURE__ */ e("p", { className: "text-[9px] font-display font-black uppercase tracking-widest text-primary", children: "13 páginas novas" }),
      /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Prontas para o repositório" })
    ] }),
    /* @__PURE__ */ s("nav", { className: "flex-1 space-y-0.5 overflow-y-auto scrollbar-hide", children: [
      J.main.map((c) => /* @__PURE__ */ e(
        H,
        {
          icon: c.icon,
          label: c.label,
          desc: r ? c.desc : void 0,
          active: t === c.id,
          onClick: () => m(c.id),
          isOpen: r,
          count: c.count
        },
        c.id
      )),
      /* @__PURE__ */ e(te, { label: "Recrutamento", isOpen: r }),
      J.recruit.map((c) => /* @__PURE__ */ e(
        H,
        {
          icon: c.icon,
          label: c.label,
          desc: r ? c.desc : void 0,
          active: t === c.id,
          onClick: () => m(c.id),
          isOpen: r,
          badge: c.badge
        },
        c.id
      )),
      /* @__PURE__ */ e(te, { label: "Novos Fluxos", isOpen: r }),
      J.flows.map((c) => /* @__PURE__ */ e(
        H,
        {
          icon: c.icon,
          label: c.label,
          desc: r ? c.desc : void 0,
          active: t === c.id,
          onClick: () => m(c.id),
          isOpen: r,
          badge: c.badge
        },
        c.id
      )),
      /* @__PURE__ */ e(te, { label: "Auth & Onboarding", isOpen: r }),
      J.auth.map((c) => /* @__PURE__ */ e(
        H,
        {
          icon: c.icon,
          label: c.label,
          desc: r ? c.desc : void 0,
          active: t === c.id,
          onClick: () => m(c.id),
          isOpen: r,
          badge: c.badge
        },
        c.id
      )),
      /* @__PURE__ */ e(te, { label: "Família", isOpen: r }),
      J.family.map((c) => /* @__PURE__ */ e(
        H,
        {
          icon: c.icon,
          label: c.label,
          desc: r ? c.desc : void 0,
          active: t === c.id,
          onClick: () => m(c.id),
          isOpen: r,
          badge: c.badge
        },
        c.id
      )),
      /* @__PURE__ */ e(te, { label: "Admin & Suporte", isOpen: r }),
      J.admin.map((c) => /* @__PURE__ */ e(
        H,
        {
          icon: c.icon,
          label: c.label,
          desc: r ? c.desc : void 0,
          active: t === c.id,
          onClick: () => m(c.id),
          isOpen: r,
          badge: c.badge
        },
        c.id
      )),
      /* @__PURE__ */ e(te, { label: "UI Kit", isOpen: r }),
      J.uikit.map((c) => /* @__PURE__ */ e(
        H,
        {
          icon: c.icon,
          label: c.label,
          active: t === c.id,
          onClick: () => m(c.id),
          isOpen: r
        },
        c.id
      ))
    ] }),
    /* @__PURE__ */ s("div", { className: "pt-4 border-t border-border space-y-1", children: [
      /* @__PURE__ */ e(H, { icon: ct, label: "Definições", active: !1, isOpen: r }),
      /* @__PURE__ */ e(H, { icon: mt, label: "Sair", active: !1, isOpen: r, variant: "danger" })
    ] })
  ] });
}, td = ({
  currentView: t,
  setCurrentView: a,
  isOpen: r,
  setIsOpen: o,
  isMobileOpen: d,
  setIsMobileOpen: m
}) => /* @__PURE__ */ s(se, { children: [
  /* @__PURE__ */ e("aside", { className: i(
    "fixed top-0 left-0 h-full bg-card border-r border-border z-50 transition-all duration-500 ease-in-out flex-col hidden md:flex",
    r ? "w-72" : "w-20"
  ), children: /* @__PURE__ */ e(ia, { currentView: t, setCurrentView: a, isOpen: r, setIsOpen: o }) }),
  d && /* @__PURE__ */ e("div", { className: "fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 md:hidden", onClick: () => m(!1) }),
  /* @__PURE__ */ s("aside", { className: i(
    "fixed top-0 left-0 h-full w-72 bg-card border-r border-border z-[60] transition-transform duration-300 ease-in-out md:hidden",
    d ? "translate-x-0" : "-translate-x-full"
  ), children: [
    /* @__PURE__ */ e("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ e("button", { onClick: () => m(!1), className: "p-2 hover:bg-accent rounded-xl transition-colors text-muted-foreground", children: /* @__PURE__ */ e(ne, { size: 20 }) }) }),
    /* @__PURE__ */ e(
      ia,
      {
        currentView: t,
        setCurrentView: a,
        isOpen: !0,
        setIsOpen: o,
        onNavigate: () => m(!1)
      }
    )
  ] })
] }), rd = ({ open: t, onClose: a, profile: r }) => {
  const [o, d] = z(!1);
  return t ? /* @__PURE__ */ e(
    I.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-foreground/50 backdrop-blur-sm",
      onClick: a,
      children: /* @__PURE__ */ s(
        I.div,
        {
          initial: { opacity: 0, y: 80, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 60, scale: 0.95 },
          transition: { type: "spring", damping: 25, stiffness: 300 },
          className: "bg-card w-full max-w-lg rounded-t-3xl md:rounded-3xl shadow-elevated border border-border relative max-h-[90vh] overflow-y-auto",
          onClick: (m) => m.stopPropagation(),
          children: [
            /* @__PURE__ */ s("div", { className: "h-28 bg-gradient-to-br from-primary/20 via-info/10 to-primary/5 rounded-t-3xl relative", children: [
              /* @__PURE__ */ e("button", { onClick: a, className: "absolute top-4 right-4 p-2 bg-card/80 backdrop-blur-sm rounded-xl text-muted-foreground hover:text-foreground transition-all", children: /* @__PURE__ */ e(ne, { size: 18 }) }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => {
                    d(!o), T(o ? "Removido dos favoritos" : "Adicionado aos favoritos");
                  },
                  className: "absolute top-4 left-4 p-2 bg-card/80 backdrop-blur-sm rounded-xl transition-all",
                  children: /* @__PURE__ */ e(Y, { size: 18, className: o ? "text-destructive fill-destructive" : "text-muted-foreground" })
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: "flex justify-center -mt-12 relative z-10", children: /* @__PURE__ */ e("div", { className: "w-24 h-24 rounded-2xl bg-secondary overflow-hidden border-4 border-card shadow-elevated", children: /* @__PURE__ */ e("img", { src: `https://i.pravatar.cc/200?u=care${r.avatarId}`, alt: r.name, className: "w-full h-full object-cover" }) }) }),
            /* @__PURE__ */ s("div", { className: "p-6 pt-4 space-y-6", children: [
              /* @__PURE__ */ s("div", { className: "text-center", children: [
                /* @__PURE__ */ s("div", { className: "flex items-center justify-center gap-2 mb-1", children: [
                  /* @__PURE__ */ e("h2", { className: "text-xl font-display font-black text-foreground uppercase tracking-tight", children: r.name }),
                  /* @__PURE__ */ e(ee, { size: 18, className: "text-success" })
                ] }),
                /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground font-medium", children: r.role }),
                /* @__PURE__ */ s("div", { className: "flex items-center justify-center gap-4 mt-3", children: [
                  /* @__PURE__ */ s("span", { className: "flex items-center gap-1 text-sm font-bold text-warning", children: [
                    /* @__PURE__ */ e(fe, { size: 16, className: "fill-current" }),
                    " ",
                    r.rating
                  ] }),
                  /* @__PURE__ */ s("span", { className: "text-sm text-muted-foreground flex items-center gap-1", children: [
                    /* @__PURE__ */ e(Rt, { size: 14 }),
                    " ",
                    r.location || "Porto, PT"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-3", children: [
                { label: "Experiência", value: r.experience || "8 anos", icon: It },
                { label: "Projetos", value: "24", icon: me },
                { label: "Tempo Resp.", value: "< 2h", icon: Ke }
              ].map((m) => /* @__PURE__ */ s("div", { className: "bg-secondary/50 rounded-xl p-3 text-center", children: [
                /* @__PURE__ */ e(m.icon, { size: 16, className: "mx-auto text-primary mb-1" }),
                /* @__PURE__ */ e("p", { className: "text-sm font-display font-black text-foreground", children: m.value }),
                /* @__PURE__ */ e("p", { className: "text-[9px] font-display font-medium text-muted-foreground uppercase tracking-widest", children: m.label })
              ] }, m.label)) }),
              /* @__PURE__ */ s("div", { children: [
                /* @__PURE__ */ e("p", { className: "text-xs font-display font-bold text-foreground uppercase tracking-widest mb-2", children: "Sobre" }),
                /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground leading-relaxed", children: r.bio || "Especialista com mais de 8 anos de experiência em contexto hospitalar e domiciliário. Certificada em cuidados intensivos, apoio pós-operatório e gestão de medicação." })
              ] }),
              /* @__PURE__ */ s("div", { children: [
                /* @__PURE__ */ e("p", { className: "text-xs font-display font-bold text-foreground uppercase tracking-widest mb-2", children: "Competências" }),
                /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: (r.skills || ["Drenagem", "Curativos", "Diabetes", "Pós-Operatório", "Geriatria"]).map((m) => /* @__PURE__ */ e("span", { className: "text-[10px] font-display font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg uppercase tracking-widest", children: m }, m)) })
              ] }),
              /* @__PURE__ */ s("div", { className: "bg-secondary/50 rounded-2xl p-4 flex items-center justify-between", children: [
                /* @__PURE__ */ s("div", { children: [
                  /* @__PURE__ */ e("p", { className: "text-[10px] font-display font-bold text-muted-foreground uppercase tracking-widest", children: "Preço Base" }),
                  /* @__PURE__ */ s("p", { className: "text-2xl font-display font-black text-foreground tracking-tighter", children: [
                    r.price,
                    "€",
                    /* @__PURE__ */ e("span", { className: "text-sm text-muted-foreground font-medium ml-1", children: "/h" })
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ e("span", { className: "px-3 py-1 text-[9px] font-display font-bold rounded-lg uppercase tracking-widest bg-success/10 text-success", children: "Disponível" }) })
              ] }),
              /* @__PURE__ */ s("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ s(S, { variant: "default", size: "lg", className: "flex-1", onClick: () => {
                  T.success("Proposta de recrutamento enviada!"), a();
                }, children: [
                  /* @__PURE__ */ e(me, { size: 16 }),
                  " Propor Recrutamento"
                ] }),
                /* @__PURE__ */ e(S, { variant: "outline", size: "lg", onClick: () => {
                  T.info("Chat aberto com " + r.name), a();
                }, children: /* @__PURE__ */ e(Ce, { size: 16 }) }),
                /* @__PURE__ */ e(S, { variant: "outline", size: "lg", onClick: () => T.info("A ligar..."), children: /* @__PURE__ */ e(Tt, { size: 16 }) })
              ] }),
              /* @__PURE__ */ s("div", { children: [
                /* @__PURE__ */ e("p", { className: "text-xs font-display font-bold text-foreground uppercase tracking-widest mb-3", children: "Disponibilidade" }),
                /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-1.5", children: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((m, c) => /* @__PURE__ */ e("div", { className: `text-center p-2 rounded-xl text-[10px] font-display font-bold uppercase ${c < 5 ? "bg-success/10 text-success" : "bg-secondary text-muted-foreground"}`, children: m }, m)) })
              ] })
            ] })
          ]
        }
      )
    }
  ) : null;
}, Ai = ({ title: t, desc: a }) => /* @__PURE__ */ s("div", { className: "space-y-1 sm:space-y-2", children: [
  /* @__PURE__ */ e("h2", { className: "text-xl sm:text-3xl md:text-4xl font-display font-black text-foreground tracking-tighter leading-tight sm:leading-none uppercase break-words", children: t }),
  /* @__PURE__ */ e("p", { className: "text-xs sm:text-base text-muted-foreground font-medium", children: a })
] }), Fe = ({ title: t, children: a }) => /* @__PURE__ */ s("section", { className: "space-y-4", children: [
  /* @__PURE__ */ e("h4", { className: "text-[10px] font-display font-black text-muted-foreground uppercase tracking-[0.4em] border-l-4 border-primary pl-4", children: t }),
  /* @__PURE__ */ e("div", { className: "bg-card p-4 sm:p-8 rounded-3xl border border-border shadow-card relative overflow-hidden", children: a })
] }), ve = ({ label: t, value: a, icon: r, colorClass: o }) => /* @__PURE__ */ s("div", { className: "bg-card p-3 sm:p-7 rounded-3xl border border-border shadow-card space-y-2 sm:space-y-4 hover:shadow-elevated transition-all group", children: [
  /* @__PURE__ */ e("div", { className: i("w-9 h-9 sm:w-12 sm:h-12 rounded-2xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform", o || "text-primary"), children: /* @__PURE__ */ e(r, { size: 18, className: "sm:!size-[22px]" }) }),
  /* @__PURE__ */ s("div", { children: [
    /* @__PURE__ */ e("div", { className: "text-[9px] sm:text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest leading-tight", children: t }),
    /* @__PURE__ */ e("div", { className: "text-lg sm:text-3xl font-display font-black text-foreground tracking-tighter leading-none mt-1 break-all", children: a })
  ] })
] }), Mi = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } }
}, re = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }
}, na = {
  caregiver: { activeContracts: 3, totalHours: 248, rating: 4.9, totalReviews: 27 },
  family: { activeContracts: 1, totalHours: 96, rating: 5, totalReviews: 4 }
}, Ei = [
  { type: "credit", description: "Pagamento recebido — Contrato #1042", amount: 320, date: "2026-04-14" },
  { type: "debit", description: "Comissão plataforma", amount: 32, date: "2026-04-14" },
  { type: "credit", description: "Pagamento recebido — Contrato #1038", amount: 180, date: "2026-04-12" },
  { type: "credit", description: "Bónus avaliação 5 estrelas", amount: 10, date: "2026-04-11" },
  { type: "debit", description: "Comissão plataforma", amount: 18, date: "2026-04-10" }
], _i = [
  { title: "Pagamento Garantido", sub: "Receba pontualmente", icon: he },
  { title: "Perfil Verificado", sub: "Mais famílias confiam", icon: ee },
  { title: "Reputação Pública", sub: "Avaliações verificáveis", icon: fe },
  { title: "Proteção Jurídica", sub: "Contrato formal", icon: Dt }
], ji = [
  { title: "Cuidadores Verificados", sub: "KYC e antecedentes", icon: ee },
  { title: "Contratos Jurídicos", sub: "Assinatura digital", icon: G },
  { title: "Pagamento Seguro", sub: "Proteção financeira", icon: he },
  { title: "Recibos Fiscais", sub: "Válidos para IRS", icon: At }
], Fi = [
  { label: "Completar verificação KYC", href: "#", icon: ee }
], Li = [
  { label: "Ativar conta (pagamento)", href: "#", icon: he },
  { label: "Completar verificação KYC", href: "#", icon: ee },
  { label: "Completar perfil do familiar", href: "#", icon: O }
], Ua = ({ role: t = "caregiver" }) => {
  const a = t === "caregiver" ? na.caregiver : na.family, r = t === "caregiver" ? _i : ji, o = t === "caregiver" ? Fi : Li;
  return /* @__PURE__ */ s("div", { className: "space-y-6 sm:space-y-8 animate-fade-in", children: [
    /* @__PURE__ */ e(
      Ai,
      {
        title: t === "caregiver" ? "Dashboard Cuidador" : "Dashboard Família",
        desc: t === "caregiver" ? "Visão geral da sua atividade como cuidador." : "Visão geral do cuidado familiar e contratos ativos."
      }
    ),
    /* @__PURE__ */ s(I.div, { variants: Mi, initial: "hidden", animate: "show", children: [
      /* @__PURE__ */ e(I.div, { variants: re, className: "bg-card rounded-3xl p-5 sm:p-7 border border-border shadow-card", children: /* @__PURE__ */ s("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3", children: [
        /* @__PURE__ */ s("div", { children: [
          /* @__PURE__ */ s("h2", { className: "text-2xl sm:text-3xl font-display font-black text-foreground tracking-tighter leading-none uppercase", children: [
            "Olá, ",
            t === "caregiver" ? "Helena" : "João"
          ] }),
          /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground font-medium mt-1", children: t === "caregiver" ? "Enfermeira Especializada" : "Gestor Familiar" })
        ] }),
        /* @__PURE__ */ s("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[9px] font-display font-bold uppercase tracking-widest bg-success/10 text-success border border-success/30 w-fit", children: [
          /* @__PURE__ */ e(ua, { size: 12 }),
          " Conta Ativa"
        ] })
      ] }) }),
      /* @__PURE__ */ s(I.div, { variants: re, className: "grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mt-5", children: [
        /* @__PURE__ */ e(ve, { label: "Contratos Ativos", value: String(a.activeContracts), icon: G, colorClass: "text-primary" }),
        /* @__PURE__ */ e(ve, { label: "Horas Totais", value: `${a.totalHours}h`, icon: Ke, colorClass: "text-warning" }),
        /* @__PURE__ */ e(ve, { label: "Avaliação", value: String(a.rating), icon: fe, colorClass: "text-info" }),
        /* @__PURE__ */ e(ve, { label: "Avaliações", value: String(a.totalReviews), icon: O, colorClass: "text-success" })
      ] }),
      /* @__PURE__ */ s(I.div, { variants: re, className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5", children: [
        t === "family" ? /* @__PURE__ */ e(
          "div",
          {
            className: "bg-card rounded-3xl p-5 sm:p-7 border border-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all cursor-pointer group",
            onClick: () => T.info("Navegar para pesquisa de cuidadores"),
            children: /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform", children: /* @__PURE__ */ e(pe, { size: 20 }) }),
              /* @__PURE__ */ s("div", { children: [
                /* @__PURE__ */ e("p", { className: "font-display font-black text-foreground text-sm uppercase", children: "Procurar Cuidadores" }),
                /* @__PURE__ */ e("p", { className: "text-[10px] text-muted-foreground font-medium", children: "Encontrar profissional ideal" })
              ] })
            ] })
          }
        ) : /* @__PURE__ */ e(
          "div",
          {
            className: "bg-card rounded-3xl p-5 sm:p-7 border border-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-all cursor-pointer group",
            onClick: () => T.info("Navegar para propostas"),
            children: /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform", children: /* @__PURE__ */ e(G, { size: 20 }) }),
              /* @__PURE__ */ s("div", { children: [
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
            onClick: () => T.info("Navegar para contratos"),
            children: /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-2xl bg-success/10 flex items-center justify-center text-success group-hover:scale-110 transition-transform", children: /* @__PURE__ */ e(G, { size: 20 }) }),
              /* @__PURE__ */ s("div", { children: [
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
            onClick: () => T.info("Navegar para carteira"),
            children: /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-2xl bg-warning/10 flex items-center justify-center text-warning group-hover:scale-110 transition-transform", children: /* @__PURE__ */ e(he, { size: 20 }) }),
              /* @__PURE__ */ s("div", { children: [
                /* @__PURE__ */ e("p", { className: "font-display font-black text-foreground text-sm uppercase", children: "Carteira" }),
                /* @__PURE__ */ e("p", { className: "text-[10px] text-muted-foreground font-medium", children: "Saldo e movimentos" })
              ] })
            ] })
          }
        )
      ] }),
      o.length > 0 && /* @__PURE__ */ e(I.div, { variants: re, className: "mt-5", children: /* @__PURE__ */ e(Fe, { title: "Próximos Passos", children: /* @__PURE__ */ e("div", { className: "space-y-3", children: o.map((d, m) => /* @__PURE__ */ s(
        "div",
        {
          className: "flex items-center justify-between p-4 bg-secondary rounded-2xl border border-border/50 hover:border-warning/30 transition-all cursor-pointer group",
          onClick: () => T.info(d.label),
          children: [
            /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ e("div", { className: "w-9 h-9 bg-warning/10 rounded-xl flex items-center justify-center text-warning", children: /* @__PURE__ */ e(d.icon, { size: 16 }) }),
              /* @__PURE__ */ e("span", { className: "text-sm font-display font-bold text-foreground", children: d.label })
            ] }),
            /* @__PURE__ */ e(Z, { size: 16, className: "text-muted-foreground group-hover:text-warning transition-colors" })
          ]
        },
        m
      )) }) }) }),
      /* @__PURE__ */ e(I.div, { variants: re, className: "mt-5", children: /* @__PURE__ */ e(Fe, { title: "Benefícios da Plataforma", children: /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4", children: r.map((d, m) => /* @__PURE__ */ s("div", { className: "bg-secondary rounded-2xl p-4 sm:p-5 text-center hover:bg-primary/5 transition-all group", children: [
        /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-2xl bg-card flex items-center justify-center text-primary mx-auto mb-3 group-hover:scale-110 transition-transform border border-border", children: /* @__PURE__ */ e(d.icon, { size: 18 }) }),
        /* @__PURE__ */ e("p", { className: "text-xs font-display font-black text-foreground uppercase", children: d.title }),
        /* @__PURE__ */ e("p", { className: "text-[10px] text-muted-foreground font-medium mt-1", children: d.sub })
      ] }, m)) }) }) }),
      /* @__PURE__ */ e(I.div, { variants: re, className: "mt-5", children: /* @__PURE__ */ s(Fe, { title: "Atividade Recente", children: [
        /* @__PURE__ */ s("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ e("p", { className: "text-[10px] font-display font-black text-muted-foreground uppercase tracking-widest", children: "Últimos movimentos" }),
          /* @__PURE__ */ e(S, { variant: "link", size: "sm", onClick: () => T.info("Ver todo o histórico"), children: "Ver Todos" })
        ] }),
        /* @__PURE__ */ e("div", { className: "space-y-3", children: Ei.map((d, m) => /* @__PURE__ */ s("div", { className: "flex items-center justify-between p-3 sm:p-4 bg-secondary rounded-2xl border border-border/50", children: [
          /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e("div", { className: `w-9 h-9 rounded-xl flex items-center justify-center ${d.type === "credit" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`, children: d.type === "credit" ? /* @__PURE__ */ e(Pt, { size: 16 }) : /* @__PURE__ */ e(zt, { size: 16 }) }),
            /* @__PURE__ */ s("div", { children: [
              /* @__PURE__ */ e("p", { className: "text-sm font-display font-bold text-foreground", children: d.description }),
              /* @__PURE__ */ e("p", { className: "text-[10px] text-muted-foreground font-medium", children: new Date(d.date).toLocaleDateString("pt-PT") })
            ] })
          ] }),
          /* @__PURE__ */ s("span", { className: `text-sm font-display font-black ${d.type === "credit" ? "text-success" : "text-destructive"}`, children: [
            d.type === "credit" ? "+" : "-",
            d.amount,
            "€"
          ] })
        ] }, m)) })
      ] }) })
    ] })
  ] });
}, od = () => /* @__PURE__ */ e(Ua, { role: "caregiver" }), sd = () => /* @__PURE__ */ e(Ua, { role: "family" }), Vi = Ja(
  ({ className: t, activeClassName: a, pendingClassName: r, to: o, ...d }, m) => /* @__PURE__ */ e(
    $t,
    {
      ref: m,
      to: o,
      className: ({ isActive: c, isPending: l }) => i(t, c && a, l && r),
      ...d
    }
  )
);
Vi.displayName = "NavLink";
export {
  cn as Accordion,
  _r as AccordionContent,
  Mr as AccordionItem,
  Er as AccordionTrigger,
  Qt as Alert,
  Zt as AlertDescription,
  Mn as AlertDialog,
  qs as AlertDialogAction,
  Ws as AlertDialogCancel,
  Hs as AlertDialogContent,
  Us as AlertDialogDescription,
  Ys as AlertDialogFooter,
  Os as AlertDialogHeader,
  Ks as AlertDialogTitle,
  En as AlertDialogTrigger,
  Xt as AlertTitle,
  An as AspectRatio,
  bi as Avatar,
  xi as AvatarFallback,
  hi as AvatarImage,
  tn as Badge,
  Vr as Breadcrumb,
  $r as BreadcrumbItem,
  Gr as BreadcrumbLink,
  Br as BreadcrumbList,
  Hr as BreadcrumbPage,
  Or as BreadcrumbSeparator,
  S as Button,
  xs as Calendar,
  Gt as Card,
  Kt as CardContent,
  Yt as CardDescription,
  Ut as CardFooter,
  Ht as CardHeader,
  Ot as CardTitle,
  vs as Carousel,
  ys as CarouselContent,
  Ns as CarouselItem,
  Cs as CarouselNext,
  ws as CarouselPrevious,
  Ls as ChartContainer,
  Dn as ChartLegend,
  $s as ChartLegendContent,
  Vs as ChartStyle,
  zn as ChartTooltip,
  Bs as ChartTooltipContent,
  br as Checkbox,
  Nn as Collapsible,
  Cn as CollapsibleContent,
  wn as CollapsibleTrigger,
  Va as Command,
  Pn as CommandDialog,
  As as CommandEmpty,
  Ms as CommandGroup,
  zs as CommandInput,
  _s as CommandItem,
  Ds as CommandList,
  Es as CommandSeparator,
  js as CommandShortcut,
  _n as ContextMenu,
  ei as ContextMenuCheckboxItem,
  Xs as ContextMenuContent,
  Fn as ContextMenuGroup,
  Zs as ContextMenuItem,
  ti as ContextMenuLabel,
  ai as ContextMenuRadioItem,
  ri as ContextMenuSeparator,
  oi as ContextMenuShortcut,
  Ln as ContextMenuSub,
  Qs as ContextMenuSubContent,
  Js as ContextMenuSubTrigger,
  jn as ContextMenuTrigger,
  od as DashboardCaregiverView,
  sd as DashboardFamilyView,
  Ua as DashboardView,
  ks as Dialog,
  Tn as DialogClose,
  La as DialogContent,
  Ps as DialogDescription,
  Is as DialogFooter,
  Rs as DialogHeader,
  Fa as DialogOverlay,
  Ss as DialogPortal,
  Ts as DialogTitle,
  In as DialogTrigger,
  Fe as DocCard,
  ts as Drawer,
  yn as DrawerClose,
  os as DrawerContent,
  ds as DrawerDescription,
  is as DrawerFooter,
  ss as DrawerHeader,
  Ea as DrawerOverlay,
  rs as DrawerPortal,
  ns as DrawerTitle,
  vn as DrawerTrigger,
  Vn as DropdownMenu,
  li as DropdownMenuCheckboxItem,
  ni as DropdownMenuContent,
  $n as DropdownMenuGroup,
  di as DropdownMenuItem,
  mi as DropdownMenuLabel,
  Gn as DropdownMenuPortal,
  On as DropdownMenuRadioGroup,
  ci as DropdownMenuRadioItem,
  ui as DropdownMenuSeparator,
  pi as DropdownMenuShortcut,
  Hn as DropdownMenuSub,
  ii as DropdownMenuSubContent,
  si as DropdownMenuSubTrigger,
  Bn as DropdownMenuTrigger,
  ad as EvyraHeader,
  td as EvyraSidebar,
  Qn as FamilySetupView,
  on as Form,
  ur as FormControl,
  pr as FormDescription,
  sn as FormField,
  cr as FormItem,
  mr as FormLabel,
  fr as FormMessage,
  Un as HoverCard,
  gi as HoverCardContent,
  qn as HoverCardTrigger,
  ga as Input,
  Pr as InputOTP,
  zr as InputOTPGroup,
  Ar as InputOTPSeparator,
  Dr as InputOTPSlot,
  Zn as KYCView,
  ba as Label,
  Wn as LoginView,
  ro as Menubar,
  co as MenubarCheckboxItem,
  no as MenubarContent,
  gn as MenubarGroup,
  lo as MenubarItem,
  uo as MenubarLabel,
  fn as MenubarMenu,
  mo as MenubarRadioItem,
  po as MenubarSeparator,
  fo as MenubarShortcut,
  bn as MenubarSub,
  io as MenubarSubContent,
  so as MenubarSubTrigger,
  oo as MenubarTrigger,
  Vi as NavLink,
  Qr as NavigationMenu,
  ao as NavigationMenuContent,
  un as NavigationMenuItem,
  pn as NavigationMenuLink,
  Xr as NavigationMenuList,
  eo as NavigationMenuTrigger,
  Yr as Pagination,
  Kr as PaginationContent,
  Jr as PaginationEllipsis,
  Ur as PaginationItem,
  Qe as PaginationLink,
  Wr as PaginationNext,
  qr as PaginationPrevious,
  Yn as Popover,
  fi as PopoverContent,
  Kn as PopoverTrigger,
  rd as ProfileModal,
  Xn as ProfileSetupView,
  lr as Progress,
  hr as RadioGroup,
  xr as RadioGroupItem,
  Jn as RegisterView,
  Rn as ResizableHandle,
  Sn as ResizablePanel,
  kn as ResizablePanelGroup,
  ls as ScrollArea,
  _a as ScrollBar,
  Ai as SectionHeader,
  nn as Select,
  yr as SelectContent,
  dn as SelectGroup,
  wr as SelectItem,
  Nr as SelectLabel,
  Sa as SelectScrollDownButton,
  ka as SelectScrollUpButton,
  Cr as SelectSeparator,
  vr as SelectTrigger,
  ln as SelectValue,
  Pa as Separator,
  bo as Sheet,
  xn as SheetClose,
  Da as SheetContent,
  wo as SheetDescription,
  yo as SheetFooter,
  vo as SheetHeader,
  za as SheetOverlay,
  ho as SheetPortal,
  No as SheetTitle,
  hn as SheetTrigger,
  Mo as Sidebar,
  $o as SidebarContent,
  Vo as SidebarFooter,
  Go as SidebarGroup,
  Oo as SidebarGroupAction,
  Yo as SidebarGroupContent,
  Ho as SidebarGroupLabel,
  Lo as SidebarHeader,
  jo as SidebarInset,
  Ko as SidebarMenu,
  Qo as SidebarMenuBadge,
  Wo as SidebarMenuButton,
  Uo as SidebarMenuItem,
  Xo as SidebarMenuSkeleton,
  Zo as SidebarMenuSub,
  as as SidebarMenuSubButton,
  es as SidebarMenuSubItem,
  Ao as SidebarProvider,
  _o as SidebarRail,
  Eo as SidebarTrigger,
  oa as Skeleton,
  kr as Slider,
  ve as StatBlock,
  Sr as Switch,
  cs as Table,
  us as TableBody,
  hs as TableCaption,
  bs as TableCell,
  ps as TableFooter,
  gs as TableHead,
  ms as TableHeader,
  fs as TableRow,
  mn as Tabs,
  Lr as TabsContent,
  jr as TabsList,
  Fr as TabsTrigger,
  gr as Textarea,
  ed as ThemeProvider,
  xa as Toast,
  tr as ToastAction,
  rn as Toaster,
  Rr as Toggle,
  Ir as ToggleGroup,
  Tr as ToggleGroupItem,
  ko as Tooltip,
  Aa as TooltipContent,
  Co as TooltipProvider,
  So as TooltipTrigger,
  Wt as badgeVariants,
  ie as buttonVariants,
  i as cn,
  Zr as navigationMenuTriggerStyle,
  nr as toast,
  Ra as toggleVariants,
  go as useIsMobile,
  ze as useSidebar,
  Ti as useTheme,
  dr as useToast
};
//# sourceMappingURL=bloom-elements.esm.js.map
