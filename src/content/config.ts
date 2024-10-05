import { z, defineCollection } from "astro:content";

export const portfolioSchema = z.object({
  title: z.string(),
  year: z.string(),
  category: z.string(),
  role: z.string(),
  name: z.string(),
  description: z.string(),
  githublink: z.string().url(),
  mockup: z.string(),
  gallery: z.array(z.string()),
  route: z.string(),
  stack: z.array(z.string()),
  deployment: z.string(),
  features_scope: z.array(z.string())
});

export const portfolioCollectionsSchema = z.array(
  z.object({
    id: z.string(),
    slug: z.string(),
    body: z.any(),
    collection: z.string(),
    data: portfolioSchema,
  })
);

const projects = defineCollection({
  type: "content",
  schema: portfolioSchema,
});

export const collections = {
  projects,
};
