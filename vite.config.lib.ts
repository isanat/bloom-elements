import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import dts from 'vite-plugin-dts'
import type { Plugin } from 'vite'

/**
 * Injects `"use client";` at the top of every emitted JS chunk so the
 * components work inside Next.js App Router (RSC) without the consumer
 * having to wrap each import in a client boundary.
 *
 * This kit is a *client* component library (uses hooks, Radix portals,
 * framer-motion, etc.), so a global banner is the correct trade-off.
 */
const useClientBanner = (): Plugin => ({
  name: 'use-client-banner',
  generateBundle(_options, bundle) {
    for (const file of Object.values(bundle)) {
      if (file.type === 'chunk' && /\.(js|cjs)$/.test(file.fileName)) {
        if (!file.code.startsWith('"use client"') && !file.code.startsWith("'use client'")) {
          file.code = `"use client";\n${file.code}`
        }
      }
    }
  },
})

export default defineConfig({
  plugins: [
    react(),
    dts({
      // Use the app tsconfig — it has the full compilerOptions (jsx, paths,
      // moduleResolution, lib, target). The root tsconfig.json is just a
      // references shell and produces empty/incorrect .d.ts files.
      tsconfigPath: './tsconfig.app.json',
      entryRoot: 'src',
      include: ['src'],
      exclude: [
        'src/main.tsx',
        'src/App.tsx',
        'src/pages/**',
        'src/test/**',
        '**/*.test.ts',
        '**/*.test.tsx',
      ],
      outDir: 'dist',
      // Bundle the @/ path alias into relative paths inside emitted .d.ts
      // so consumers don't need a matching tsconfig path mapping.
      rollupTypes: true,
      insertTypesEntry: true,
      // Force declaration emission even when tsconfig has noEmit: true.
      compilerOptions: {
        declaration: true,
        declarationMap: true,
        emitDeclarationOnly: true,
        noEmit: false,
        skipLibCheck: true,
      },
    }),
    useClientBanner(),
  ],
  build: {
    lib: {
      entry: {
        'bloom-elements': path.resolve(__dirname, 'src/index.ts'),
        'tailwind.config': path.resolve(__dirname, 'tailwind.config.ts'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        if (entryName === 'bloom-elements') {
          return `bloom-elements.${format === 'es' ? 'esm' : 'cjs'}.js`
        }
        const ext = format === 'es' ? 'js' : 'cjs'
        return `${entryName}.${ext}`
      },
    },
    rollupOptions: {
      // Everything that touches React state or browser APIs must be a peer.
      // Keeping these external prevents duplicate React / context mismatches
      // when the consumer (careapp) already ships them.
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'react-dom/client',
        // Animation / theming
        'framer-motion',
        'next-themes',
        // Forms
        'react-hook-form',
        '@hookform/resolvers',
        '@hookform/resolvers/zod',
        'zod',
        // Routing & data
        'react-router-dom',
        '@tanstack/react-query',
        // Icons / toasts / utilities used at runtime
        'lucide-react',
        'sonner',
        'cmdk',
        'vaul',
        'date-fns',
        'embla-carousel-react',
        'input-otp',
        'react-day-picker',
        'react-resizable-panels',
        'recharts',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
        'tailwindcss-animate',
        // All Radix primitives (regex catches every @radix-ui/* package)
        /^@radix-ui\//,
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // Inject "use client" so Next.js App Router knows this is a client bundle
        banner: '"use client";',
        // Preserve module structure for tree-shaking
        preserveModules: false,
      },
    },
    minify: 'esbuild',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
