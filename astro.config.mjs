// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yeon990806.github.io',
  integrations: [mdx(), sitemap()],

  // 케이스 스터디를 portfolio 컬렉션에서 posts로 옮기면서 사라진 주소들.
  // 이미 배포됐던 URL이라 끊지 않고 새 위치로 넘깁니다.
  // 정적 빌드에서는 meta refresh + canonical 페이지로 생성됩니다.
  redirects: {
    '/portfolio/wink-front': '/posts/wink-front/',
    '/portfolio/wink-worker': '/posts/wink-worker/',
    '/portfolio/howlink-wms': '/posts/howlink-wms/',
    '/portfolio/howlink-landing': '/posts/howlink-landing/',
  },

  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: false,
    },
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Pretendard',
      cssVariable: '--font-pretendard',
      fallbacks: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Apple SD Gothic Neo',
        'Noto Sans KR',
        'sans-serif',
      ],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jbmono',
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
