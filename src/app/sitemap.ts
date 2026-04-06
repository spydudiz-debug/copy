import type { MetadataRoute } from "next";

import { blogData } from "@/lib/blog-data";
import { BLOG_PATH } from "@/lib/constants";
import { setupGuideSlugs } from "@/lib/deviceSetupGuides";
import { keywordSlugs } from "@/lib/keyword-pages";
import { getSiteUrl } from "@/lib/site-url";

/**
 * Slugs that must not be emitted as root `/slug` (they are real app routes or reserved).
 */
const RESERVED_SLUGS = new Set(["blog", "step-guide", "setup", "api", "_not-found"]);

function absUrl(origin: string, path: string): string {
  const base = origin.replace(/\/$/, "");
  if (!path || path === "/") return base;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

function dedupeSitemap(entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  const out: MetadataRoute.Sitemap = [];
  for (const e of entries) {
    const loc = e.url.replace(/\/$/, "");
    if (seen.has(loc)) continue;
    seen.add(loc);
    out.push({ ...e, url: loc });
  }
  return out;
}

/**
 * Indexable URLs only: no query strings, no fragments, https canonical host,
 * one entry per location. Pagination (`/blog?page=`) is excluded per Google
 * best practice and your property rules — list only `/blog` once.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteUrl();
  const lastMod = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: absUrl(origin, ""),
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absUrl(origin, BLOG_PATH),
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absUrl(origin, "/step-guide"),
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const keywordPages: MetadataRoute.Sitemap = keywordSlugs
    .filter((slug) => !RESERVED_SLUGS.has(slug))
    .map((slug) => ({
      url: absUrl(origin, `/${slug}`),
      lastModified: lastMod,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }));

  const blogPages: MetadataRoute.Sitemap = Object.keys(blogData).map((slug) => ({
    url: absUrl(origin, `${BLOG_PATH}/${slug}`),
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const setupPages: MetadataRoute.Sitemap = setupGuideSlugs.map((slug) => ({
    url: absUrl(origin, `/step-guide/${slug}`),
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return dedupeSitemap([...staticPages, ...keywordPages, ...blogPages, ...setupPages]);
}
