import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  root: './src',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: '../test/setup.ts',
    coverage: {
      enabled: true,
      all: true,
      reportsDirectory: '../coverage',
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
    },
  },
});
