import { getPostSlugs } from "./blog";

const slugs = getPostSlugs();

/** Slug → marker object so `Object.keys(blogData).length` matches post count (sitemap parity). */
export const blogData: Record<string, { slug: string }> = Object.fromEntries(
  slugs.map((slug) => [slug, { slug }]),
);
