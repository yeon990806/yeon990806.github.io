import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
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