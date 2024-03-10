import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  server: {
    hmr: true,
    watch: {
      usePolling: true,
    },
  },
  test: {
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
    environment: 'jsdom',
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'serif-ui-components',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
