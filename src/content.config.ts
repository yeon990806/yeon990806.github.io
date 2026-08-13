import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Convention: filenames starting with `_` or all-caps names like `IMAGES.md`
// are treated as internal notes (planning docs, image guides) and are NOT
// loaded as posts. Use a normal lowercase slug for actual content.
const POST_IGNORE = ['**/_*', '**/[A-Z][A-Z]*.{md,mdx}'];

const posts = defineCollection({
  loader: glob({
    base: './src/content/posts',
    pattern: ['**/*.{md,mdx}', ...POST_IGNORE.map((p) => '!' + p)],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.optional(image()),
      tags: z.array(z.string()).default([]),
      series: z.string().optional(),
      seriesOrder: z.number().optional(),
      draft: z.boolean().default(false),

      // ── 포트폴리오 쇼케이스 ──────────────────────────────────
      // 케이스 스터디는 글 그 자체이므로 posts에 둡니다. 아래 필드는
      // /portfolio 피드에서 그 글을 한 항목으로 펼쳐 보여줄 때만 씁니다.
      // showcase: true 인 글만 피드에 오릅니다.
      showcase: z.boolean().default(false),
      /** 어느 회사 일인지. 제품명만으로는 소속을 알 수 없어 피드에 함께 씁니다. */
      org: z.string().optional(),
      period: z.string().optional(),
      role: z.string().optional(),
      status: z.enum(['live', 'archived', 'wip']).optional(),
      demoUrl: z.string().url().optional(),
      repoUrl: z.string().url().optional(),
      featured: z.boolean().default(false),
      /** 피드에 나열할 성과 불릿. 본문 요약이 아니라 "무엇을 만들었는가". */
      highlights: z.array(z.string()).default([]),
      /**
       * 정량 성과. 숫자로 말할 수 있는 결과만 넣습니다.
       * value는 짧게(`4.6배`, `-38%`, `12만`), label은 무엇을 잰 것인지.
       */
      metrics: z
        .array(z.object({ value: z.string(), label: z.string() }))
        .default([]),
      /** 피드에서 가로로 늘어놓을 스크린샷. heroImage는 자동 포함하지 않습니다. */
      gallery: z.array(image()).default([]),
    }),
});

export const collections = { posts };
