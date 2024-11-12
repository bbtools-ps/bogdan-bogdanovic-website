import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
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
    }),
});

const workExperienceCollection = defineCollection({
  type: "content",
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
