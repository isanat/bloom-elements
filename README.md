# 🌸 Bloom Elements

A complete UI Design System built with React, TypeScript, and TailwindCSS. Powers the **Evyra** platform.

## Features

- ✨ **52+ UI Components** — Fully typed with TypeScript
- 🎨 **Complete Design System** — Light/dark theme with semantic tokens
- ♿ **Accessible** — Built on Radix UI primitives
- 🌳 **Tree-shakeable** — Import only what you use
- 📦 **ESM + CJS** — Works everywhere

## Installation

```bash
npm install @isanat/bloom-elements
# or
pnpm add @isanat/bloom-elements
# or
bun add @isanat/bloom-elements
```

## Setup

### 1. Import Styles

Add the Bloom CSS to your app entry point:

```tsx
// app/layout.tsx (Next.js) or main.tsx (Vite)
import '@isanat/bloom-elements/styles';
```

### 2. Configure Tailwind

```ts
// tailwind.config.ts
import { bloomPreset } from '@isanat/bloom-elements/tailwind';

export default {
  presets: [bloomPreset],
  content: [
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    // Include bloom components for class detection
    './node_modules/@isanat/bloom-elements/dist/**/*.js',
  ],
};
```

### 3. Use Components

```tsx
import { Button, Card, CardContent, Input, Label } from '@isanat/bloom-elements';

export function LoginForm() {
  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="seu@email.com" />
        </div>
        <Button className="w-full">Entrar</Button>
      </CardContent>
    </Card>
  );
}
```

## Next.js Setup (careapp)

If you're integrating into a Next.js project:

```tsx
// app/layout.tsx
import '@isanat/bloom-elements/styles';
import { ThemeProvider } from '@isanat/bloom-elements';

export default function RootLayout({ children }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

Add to `next.config.js` if needed:

```js
// next.config.js
const nextConfig = {
  transpilePackages: ['@isanat/bloom-elements'],
};
```

## Component Reference

| Category | Components |
|----------|-----------|
| **Base** | Button, Card, Input, Label, Badge, Alert |
| **Form** | Checkbox, Radio, Switch, Toggle, Select, Textarea, Slider, InputOTP |
| **Layout** | Accordion, Tabs, Breadcrumb, Pagination, Sidebar, Drawer, Sheet, ScrollArea, Separator |
| **Data** | Table, Calendar, Carousel, Chart, Command |
| **Feedback** | Toast, Progress, Skeleton |
| **Overlay** | Dialog, AlertDialog, Popover, Tooltip, DropdownMenu, ContextMenu, HoverCard |

## Customizing Theme

Override CSS variables in your global stylesheet:

```css
:root {
  --primary: 221 83% 53%;      /* Main brand color */
  --background: 210 20% 98%;   /* Page background */
  --radius: 0.75rem;           /* Border radius */
  --success: 160 84% 39%;      /* Success states */
  --warning: 38 92% 50%;       /* Warning states */
  --info: 199 89% 48%;         /* Info states */
}
```

## Hooks

```tsx
import { useTheme, useToast, useIsMobile } from '@isanat/bloom-elements';

// Theme toggle
const { theme, toggleTheme } = useTheme();

// Toast notifications
const { toast } = useToast();
toast({ title: "Sucesso!", description: "Operação concluída." });

// Responsive
const isMobile = useIsMobile();
```

## License

MIT — [Isanat](https://github.com/isanat)
