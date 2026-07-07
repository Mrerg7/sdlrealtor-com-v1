import { defineCollection, z } from 'astro:content';

const whyCollection = defineCollection({
  type: 'data',
  schema: z.object({
    label: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const useCasesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    icon: z.string(),
    title: z.string(),
    description: z.string(),
    tagline: z.string(),
    order: z.number(),
  }),
});

const marketCollection = defineCollection({
  type: 'data',
  schema: z.object({
    label: z.string(),
    title: z.string(),
    description: z.string().optional(),
    stats: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        }),
      )
      .optional(),
    order: z.number(),
  }),
});

export const collections = {
  why: whyCollection,
  useCases: useCasesCollection,
  market: marketCollection,
};
