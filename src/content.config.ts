import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
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
    }),
});

const portfolio = defineCollection({
  loader: glob({ base: './src/content/portfolio', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      period: z.string(),
      role: z.string().optional(),
      status: z.enum(['live', 'archived', 'wip']).default('live'),
      tags: z.array(z.string()).default([]),
      heroImage: z.optional(image()),
      demoUrl: z.string().url().optional(),
      repoUrl: z.string().url().optional(),
      featured: z.boolean().default(false),
      pubDate: z.coerce.date(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { posts, portfolio };
