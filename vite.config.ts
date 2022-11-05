import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    react(),
    Pages({
      dirs: 'src/pages',
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.md$/, // .md
      ],
      imports: ['react', 'react-router-dom', 'ahooks'],
      dts: './src/auto-imports.d.ts',
      dirs: [],
      eslintrc: {
        enabled: true,
      },
    }),
  ],
});
