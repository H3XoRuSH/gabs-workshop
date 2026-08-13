import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Projects content collection.
 * Adding a new project later = dropping a markdown file into
 * src/content/projects/ — no component edits needed.
 */
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    /** one-line summary used in the "more builds" strip */
    blurb: z.string(),
    /** the problem it solves (featured cards only) */
    problem: z.string().optional(),
    /** Gab's specific role (featured cards only) */
    role: z.string().optional(),
    /** how it was solved (featured cards only) */
    solution: z.string().optional(),
    stack: z.array(z.string()),
    accent: z.enum(['red', 'orange', 'yellow', 'green']),
    /** display dates, e.g. "Jan–May 2023" (omit when unknown) */
    dates: z.string().optional(),
    /** live site / demo link */
    link: z.string().url().optional(),
    /** source repo link */
    repo: z.string().url().optional(),
    /** true = gets a full card in the main showcase (max 5); false = compact "more builds" strip */
    featured: z.boolean().default(true),
    /** sort order inside the featured grid */
    order: z.number().default(0),
  }),
});

export const collections = { projects };
