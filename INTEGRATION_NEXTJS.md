# Integração `@isanat/bloom-elements` no `careapp` (Next.js + Tailwind v4)

Guia passo-a-passo para o programador front-end. Tudo testado contra Next.js 14/15 com App Router.

---

## 1. Instalação

```bash
# no repo careapp
npm install @isanat/bloom-elements

# Peer deps de runtime (já costumam estar instaladas, completar o que faltar)
npm install react react-dom framer-motion lucide-react sonner \
  class-variance-authority clsx tailwind-merge tailwindcss-animate \
  @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio \
  @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible \
  @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu \
  @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar \
  @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress \
  @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select \
  @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot \
  @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast \
  @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip
```

> Os componentes não vão funcionar visualmente sem o CSS e as fontes — passos 2 e 3 são obrigatórios.

---

## 2. Importar o CSS uma única vez

`app/layout.tsx` (raiz):

```tsx
import "@isanat/bloom-elements/styles.css";
import "./globals.css"; // o teu próprio reset/tokens, depois do Bloom
```

A ordem importa: importa o Bloom **antes** do teu CSS para poderes sobrepor tokens se quiseres.

---

## 3. Fontes (Space Grotesk + Inter)

`app/layout.tsx`:

```tsx
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
```

E garante no Tailwind (passo 4) que `font-body` e `font-display` apontam para essas variáveis.

---

## 4. Tailwind v4 — alinhar tokens HSL

`app/globals.css`:

```css
@import "tailwindcss";

@theme {
  --font-body: var(--font-body);
  --font-display: var(--font-display);

  /* Os valores abaixo já vêm definidos no bloom-elements.css.
     Só os redeclares aqui se quiseres CUSTOMIZAR a marca. */
}

/* Dark mode trigger compatível com next-themes */
@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));
```

> O `bloom-elements.css` já declara `--background`, `--foreground`, `--primary`, etc. em formato HSL no `:root` e `.dark`. **Não duplicar.**

---

## 5. Providers (Toaster, Tooltip, Theme)

`app/providers.tsx`:

```tsx
"use client";

import { ThemeProvider } from "next-themes";
import { TooltipProvider, Toaster } from "@isanat/bloom-elements";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
      <TooltipProvider>
        {children}
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}
```

`app/layout.tsx` envolve o `children` com `<Providers>`.

---

## 6. Usar componentes

Server Component (page.tsx, etc.) pode importar diretamente — o package vem com a directiva `"use client"` injetada em todos os chunks, portanto **não precisas marcar a tua page como client**:

```tsx
// app/dashboard/page.tsx — fica Server Component
import { Button, Card, CardHeader, CardTitle, CardContent } from "@isanat/bloom-elements";

export default function Page() {
  return (
    <Card>
      <CardHeader><CardTitle>EVYRA Dashboard</CardTitle></CardHeader>
      <CardContent><Button variant="premium">Nova demanda</Button></CardContent>
    </Card>
  );
}
```

---

## 7. Toasts (sonner)

```tsx
"use client";
import { toast, Button } from "@isanat/bloom-elements";

export function Demo() {
  return <Button onClick={() => toast.success("Guardado!")}>Guardar</Button>;
}
```

---

## 8. Erros comuns e correções

| Sintoma | Causa | Fix |
|---|---|---|
| `Invalid hook call` | duas cópias de React | confirma que `react`/`react-dom` aparecem **uma vez** em `npm ls react` |
| Botões sem cor / fundo branco | falta o CSS | `import "@isanat/bloom-elements/styles.css"` no `app/layout.tsx` |
| Tipografia errada | fontes não carregadas | passo 3 (next/font) + variáveis `--font-body`/`--font-display` |
| `useState only works in Client Components` | a usar a v1.1.x antiga | atualizar para `>=1.2.0` (banner `"use client"` no build) |
| Modal/Dialog não fecha | falta `<TooltipProvider>` ou portal | passo 5 |
| Dark mode não muda | `attribute` errado no ThemeProvider | usar `attribute="data-theme"` |

---

## 9. Smoke test (5 minutos)

Cria `app/(dev)/bloom-test/page.tsx`:

```tsx
import { Button, Card, CardContent, Badge } from "@isanat/bloom-elements";

export default function BloomTest() {
  return (
    <main className="p-10 space-y-6">
      <h1 className="text-4xl font-display font-black uppercase tracking-tighter">
        Bloom OK
      </h1>
      <div className="flex gap-3">
        <Button>Default</Button>
        <Button variant="premium">Premium</Button>
        <Button variant="outline">Outline</Button>
      </div>
      <Card><CardContent className="p-6">
        <Badge>Active</Badge>
      </CardContent></Card>
    </main>
  );
}
```

Abre `/bloom-test`. Se vires botões com gradiente roxo, tipografia Space Grotesk maiúscula e cantos arredondados — está a funcionar.
