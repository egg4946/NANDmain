import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// 「過去の活動」: src/content/history/ に Markdown を1ファイル追加すると1件増える
// ファイル名が URL になる（例: 2026-10-lt.md → /history/2026-10-lt/）
const history = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/history" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { history };
