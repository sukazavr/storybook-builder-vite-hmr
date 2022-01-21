import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  envDir: './env',
  build: {
    sourcemap: true,
  },
  plugins: [react()],
});
