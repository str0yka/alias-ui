import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.tsx', 'src/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/components/**/*.{ts,tsx}'],
      exclude: [
        'node_modules',
        'src/**/*.d.ts',
        'src/components/*.ts',
        'src/components/**/*.stories.{ts, tsx}'
      ]
    }
  }
});
