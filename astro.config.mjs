// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yeon990806.github.io',
  integrations: [mdx(), sitemap()],

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
      name: 'Geist',
      cssVariable: '--font-geist',
      fallbacks: ['system-ui', '-apple-system', 'sans-serif'],
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
