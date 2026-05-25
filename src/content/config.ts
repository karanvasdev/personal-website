import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    date: z.date(),
    readTime: z.number().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const fieldNotes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const models = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    glyph: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'essays': essays,
  'field-notes': fieldNotes,
  'models': models,
};
