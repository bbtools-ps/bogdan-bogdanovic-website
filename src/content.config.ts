import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/posts/projects" }),
  schema: ({ image }) =>
    z.object({
      sortOrder: z.number(),
      title: z.string(),
      description: z.string(),
      image: image(),
      tags: z.array(z.string()),
      infoLink: z.string().optional(),
      liveLink: z.string().optional(),
      sourceLink: z.string().optional(),
      designLink: z.string().optional(),
    }),
});

const workExperienceCollection = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "src/posts/work-experience",
  }),
  schema: z.object({
    sortOrder: z.number(),
    jobTitle: z.string(),
    companyName: z.string(),
    companyLink: z.string().optional(),
    description: z.array(z.string()),
    startDate: z.date(),
    endDate: z.date().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  "work-experience": workExperienceCollection,
};
