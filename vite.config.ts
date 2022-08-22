import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { plugin, Mode } from 'vite-plugin-markdown';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), plugin({ mode: [Mode.HTML, Mode.TOC, Mode.REACT] })],
  resolve: {
    alias: {
      'node-fetch': 'isomorphic-fetch',
    },
  },
});
