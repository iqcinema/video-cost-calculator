import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
 plugins: react(),
 base: '/video-cost-calculator/', // ← имя репозитория
 build: {
 outDir: 'dist'
 },
});
