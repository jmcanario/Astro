import { newsletter } from 'astro:content';

const blogNewsletter = newsletter({
    
    type: 'content', // v2.5.0 y posteriores
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }), });

export const collections = {
  'blog': blogNewsletter;
};