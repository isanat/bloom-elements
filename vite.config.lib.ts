import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      exclude: ['src/main.tsx', 'src/App.tsx', 'src/pages/**', 'src/components/evyra/views/**'],
      outDir: 'dist',
      tsconfigPath: './tsconfig.json',
    }),
  ],
  build: {
    lib: {
      entry: {
        'bloom-elements': path.resolve(__dirname, 'src/index.ts'),
        'tailwind.config': path.resolve(__dirname, 'tailwind.config.ts'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        const ext = format === 'es' ? 'js' : 'cjs'
        if (entryName === 'bloom-elements') {
          return `bloom-elements.${format === 'es' ? 'esm' : 'cjs'}.js`
        }
        return `${entryName}.${ext}`
      },
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        // Don't bundle these — consumer's project provides them
        'framer-motion',
        'react-hook-form',
        '@hookform/resolvers',
        '@hookform/resolvers/zod',
        'zod',
        'next-themes',
        'react-router-dom',
        '@tanstack/react-query',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
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
