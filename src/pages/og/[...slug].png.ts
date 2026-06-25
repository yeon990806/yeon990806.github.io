import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';
import path from 'node:path';

// Load Korean-supporting font ONCE at module scope (runs at build time only).
const FONT_DIR = path.resolve('node_modules/@fontsource/noto-sans-kr/files');
const fontRegular = fs.readFileSync(path.join(FONT_DIR, 'noto-sans-kr-korean-400-normal.woff'));
const fontBold = fs.readFileSync(path.join(FONT_DIR, 'noto-sans-kr-korean-700-normal.woff'));

export const getStaticPaths: GetStaticPaths = async () => {
  const showDrafts = import.meta.env.DEV;
  const posts = await getCollection('posts', ({ data }) => showDrafts || !data.draft);
  const portfolio = await getCollection('portfolio', ({ data }) => showDrafts || !data.draft);

  return [
    ...posts.map((e) => ({
      params: { slug: `posts/${e.id}` },
      props: { title: e.data.title, kind: 'post' as const },
    })),
    ...portfolio.map((e) => ({
      params: { slug: `portfolio/${e.id}` },
      props: { title: e.data.title, kind: 'project' as const },
    })),
  ];
};

export const GET: APIRoute = async ({ props }) => {
  const { title, kind } = props as { title: string; kind: 'post' | 'project' };
  const label = kind === 'post' ? 'POST' : 'PROJECT';

  // Satori is strict about flex layout — every container with multiple children
  // must explicitly declare display:flex. The template below mirrors the site's
  // aurora + glass aesthetic in a 1200×630 OG card.
  const markup = html`
    <div style="
      width: 1200px;
      height: 630px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 72px 80px;
      background:
        radial-gradient(60% 50% at 18% 18%, #e2d4ff 0%, transparent 65%),
        radial-gradient(55% 50% at 82% 22%, #d4f1e8 0%, transparent 65%),
        radial-gradient(70% 55% at 50% 88%, #ffe2d4 0%, transparent 65%),
        #fafafa;
      color: #1a1a2e;
      font-family: 'Noto Sans KR';
    ">
      <div style="display: flex; justify-content: space-between; align-items: center; font-size: 22px; color: #6b7280; letter-spacing: 0.12em;">
        <div style="display: flex; font-weight: 700;">${label}</div>
        <div style="display: flex;">yeon.dev</div>
      </div>

      <div style="
        display: flex;
        font-size: 64px;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: -0.025em;
        color: #1a1a2e;
        max-width: 1040px;
      ">${title}</div>

      <div style="display: flex; align-items: center; gap: 16px; font-size: 24px; color: #4b5563;">
        <div style="
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: #6d4ff0;
          color: #ffffff;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 20px;
        ">y.</div>
        <div style="display: flex;">실용주의 개발자의 정돈된 작업실</div>
      </div>
    </div>
  `;

  const svg = await satori(markup as any, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Noto Sans KR', data: fontRegular, weight: 400, style: 'normal' },
      { name: 'Noto Sans KR', data: fontBold, weight: 700, style: 'normal' },
    ],
  });

  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
