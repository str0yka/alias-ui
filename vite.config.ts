import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss(), dts({ tsconfigPath: './tsconfig.app.json' })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'alias-ui',
      formats: ['es', 'umd'],
      fileName: 'alias-ui',
      cssFileName: 'alias-ui'
    },
    rollupOptions: {
      external: [
        '@tailwindcss/vite',
        'class-variance-authority',
        'clsx',
        'react',
        'react-dom',
        'react/jsx-runtime',
        'tailwind-merge',
        'tailwindcss'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
          'react/jsx-runtime': 'ReactJsxRuntime'
        }
      }
    }
  }
});
