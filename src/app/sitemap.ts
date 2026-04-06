import fs from "node:fs";
import path from "node:path";

import type { MetadataRoute } from "next";

import { getPostSlugs } from "@/lib/blog";
import { BLOG_PATH } from "@/lib/constants";
import { getSeoKeywordSlugs } from "@/lib/seo-pages";
import { getSiteUrl } from "@/lib/site-url";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function blogLastModified(slug: string): Date | undefined {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) return undefined;
    return fs.statSync(filePath).mtime;
  } catch {
    return undefined;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}${BLOG_PATH}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/step-guide`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  const keywordEntries: MetadataRoute.Sitemap = getSeoKeywordSlugs().map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = getPostSlugs().map((slug) => ({
    url: `${base}${BLOG_PATH}/${slug}`,
    lastModified: blogLastModified(slug) ?? now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...keywordEntries, ...blogEntries];
}
