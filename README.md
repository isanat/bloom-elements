# @isanat/bloom-elements

> 🌸 **Bloom Elements** — Design System completo com 50+ componentes React prontos para produção.

Baseado em Radix UI + Tailwind CSS + shadcn/ui, com tokens semânticos, dark mode, e componentes acessíveis.

## Instalação

```bash
npm install @isanat/bloom-elements
```

### Peer Dependencies

```bash
npm install react react-dom tailwindcss tailwindcss-animate
```

## Setup

### 1. Configurar Tailwind CSS

```ts
// tailwind.config.ts
import { bloomPreset } from '@isanat/bloom-elements/tailwind';

export default {
  presets: [bloomPreset],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@isanat/bloom-elements/dist/**/*.{js,mjs}',
  ],
};
```

### 2. Importar os estilos (CSS tokens)

```css
/* No seu CSS principal */
@import '@isanat/bloom-elements/bloom-elements.css';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Usar os componentes

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from '@isanat/bloom-elements';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Olá Bloom! <Badge>Novo</Badge></CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="premium" size="lg">Começar</Button>
      </CardContent>
    </Card>
  );
}
```

## Componentes Disponíveis

| Categoria | Componentes |
|-----------|------------|
| **Layout** | Card, AspectRatio, Separator, ResizablePanel, ScrollArea, Sidebar |
| **Forms** | Button, Input, Textarea, Checkbox, RadioGroup, Select, Switch, Slider, Calendar, Form, InputOTP |
| **Feedback** | Alert, Toast, Toaster, Sonner, Progress, Skeleton, Badge |
| **Overlay** | Dialog, AlertDialog, Sheet, Drawer, Popover, HoverCard, Tooltip, DropdownMenu, ContextMenu |
| **Navigation** | Tabs, Accordion, Breadcrumb, NavigationMenu, Menubar, Pagination, Command |
| **Data** | Table, Carousel, Chart, Toggle, ToggleGroup, Collapsible |

## Design Tokens

O Bloom usa tokens semânticos HSL via CSS custom properties:

- `--primary` / `--primary-foreground`
- `--secondary` / `--secondary-foreground`
- `--destructive` / `--success` / `--warning` / `--info`
- `--muted` / `--accent` / `--card` / `--popover`
- `--background` / `--foreground` / `--border` / `--ring`

### Button Variants

```tsx
<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="success">Confirm</Button>
<Button variant="warning">Caution</Button>
<Button variant="premium">Premium</Button>
<Button variant="dark">Dark</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

## Hooks

```tsx
import { useTheme, useIsMobile, useToast } from '@isanat/bloom-elements';
```

- **`useTheme()`** — Toggle light/dark mode
- **`useIsMobile()`** — Responsive breakpoint detection
- **`useToast()`** — Programmatic toast notifications

## Licença

MIT © isanat
