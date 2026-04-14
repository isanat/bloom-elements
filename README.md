# Bloom Elements UI Kit

A beautiful and complete UI Kit design system (EVYRA) built with React, TypeScript, and TailwindCSS.

## Features

✨ **52+ UI Components** - Fully typed with TypeScript
🎨 **Complete Design System** - EVYRA Design System with light/dark theme
♿ **Accessible** - Built on Radix UI primitives
⚡ **Performant** - Optimized bundle size (280KB gzipped)
🛠️ **Developer Friendly** - Type-safe, well-documented, easy to customize
📦 **Framework Agnostic** - Works with any React setup

## Installation

```bash
npm install @isanat/bloom-elements
```

## Quick Start

### 1. Import Styles

```tsx
import '@isanat/bloom-elements/css';
```

### 2. Setup Theme Provider

```tsx
import { ThemeProvider } from '@isanat/bloom-elements';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

### 3. Use Components

```tsx
import { Button, Card, CardContent, Input, Label } from '@isanat/bloom-elements';

export function MyComponent() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <Button>Submit</Button>
        </div>
      </CardContent>
    </Card>
  );
}
```

## Component Categories

### Base Components
- Button, Card, Input, Label, Badge, Alert

### Form Components
- Checkbox, Radio, Switch, Toggle, Select, Textarea, Slider, Input OTP

### Layout Components
- Accordion, Tabs, Breadcrumb, Pagination, Sidebar, Drawer, Sheet

### Data Display
- Table, Calendar, Carousel, Chart

### Feedback Components
- Toast, Alert, Progress, Skeleton

### Overlay Components
- Dialog, Popover, Tooltip, Dropdown Menu

## Customization

### Theme Variables

```css
:root {
  --primary: 221 83% 53%; /* Change primary color */
  --background: 210 20% 98%;
  --radius: 0.75rem; /* Border radius */
}
```

### Using Theme Hook

```tsx
import { useTheme } from '@isanat/bloom-elements';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle Theme</button>;
}
```

## License

MIT
