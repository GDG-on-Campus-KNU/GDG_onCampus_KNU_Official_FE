import path from 'path';
import { defineConfig } from 'vite';

import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';
import prerender from '@prerenderer/rollup-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        '/',
        '/signin',
        '/introduce',
        '/apply',
        '/apply/inquiry',
        '/apply/frontend',
        '/apply/frontend/form',
        '/apply/backend',
        '/apply/backend/form',
        '/apply/ai',
        '/apply/ai/form',
        '/apply/android',
        '/apply/android/form',
        '/apply/designer',
        '/apply/designer/form',
        '/mypage',
        '/team',
        '/community',
        '/techblog',
      ],
      renderer: new PuppeteerRenderer({
        maxConcurrentRoutes: 1,
        renderAfterTime: 500,
      }),
      postProcess(route) {
        route.html = route.html
          .replace(/http:/g, 'https:')
          .replace(
            /(https:\/\/)?(localhost|127\.0\.0\.1):\d*/g,
            'https://gdsc-knu.com/'
          );
      },
    }),
  ],
  resolve: {
    alias: [{ find: '@gdsc', replacement: path.resolve(__dirname, 'src') }],
  },
  define: {
    global: {},
  },
});
