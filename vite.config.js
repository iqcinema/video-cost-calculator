import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/video-cost-calculator/', // ← Меняйте на имя вашего репозитория
  build: {
    outDir: 'dist'
  }
});