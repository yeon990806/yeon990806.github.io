import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/yeon990806.github.io/',
  resolve: {
    alias: {}
  },
  build: {
    rollupOptions: {
      input: {
        app: './src/public/index.html',
      }
    }
  },
  server: {
    open: './src/public/index.html'
  }
});