import fs from "node:fs";
import path from "node:path";

import type { MetadataRoute } from "next";

import { blogData } from "./blog-data";
import { BLOG_PATH, CANONICAL_SITE_ORIGIN } from "./constants";
import { setupGuideSlugs } from "./deviceSetupGuides";
import { keywordSlugs } from "./keyword-pages";

/**
 * Sitemap & robots must always list this host — never preview, vercel.app, or env overrides.
 * Matches GSC property https://iptvuk-tv.com
 */
export const INDEXING_ORIGIN = CANONICAL_SITE_ORIGIN.replace(/\/$/, "");

/** Exact URL for robots.txt `Sitemap:` directive */
export const INDEXING_SITEMAP_URL = `${INDEXING_ORIGIN}/sitemap.xml`;

const RESERVED_SLUGS = new Set([
  "blog",
  "step-guide",
  "setup",
  "api",
  "_not-found",
  "robots.txt",
  "sitemap.xml",
  "favicon.ico",
]);

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const MANIFEST_PATH = path.join(process.cwd(), "content/blog/manifest.json");
const APP = path.join(process.cwd(), "src/app");

function safeMtime(filePath: string): Date | undefined {
  try {
    if (!fs.existsSync(filePath)) return undefined;
    return fs.statSync(filePath).mtime;
  } catch {
    return undefined;
  }
}

function blogPostLastMod(slug: string): Date | undefined {
  return safeMtime(path.join(BLOG_DIR, `${slug}.md`));
}

function seoKeywordSectionLastMod(): Date | undefined {
  const a = safeMtime(MANIFEST_PATH);
  const b = safeMtime(path.join(APP, "[slug]", "page.tsx"));
  if (!a) return b;
  if (!b) return a;
  return a > b ? a : b;
}

function absUrl(pathSegment: string): string {
  if (!pathSegment || pathSegment === "/") return INDEXING_ORIGIN;
  const p = pathSegment.startsWith("/") ? pathSegment : `/${pathSegment}`;
  if (p.includes("?") || p.includes("#")) {
    throw new Error(`[sitemap] invalid path (no query/fragment): ${pathSegment}`);
  }
  return `${INDEXING_ORIGIN}${p}`;
}

function dedupe(entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
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

function isIndexableSlug(slug: string): boolean {
  if (!slug || slug.trim() === "") return false;
  if (RESERVED_SLUGS.has(slug)) return false;
  return true;
}

const FALLBACK_MOD = new Date();

/**
 * High-quality indexable URLs only: https iptvuk-tv.com, no query strings, deduped.
 * lastmod from source files where available (Google prefers accurate dates).
 */
export function buildIndexableSitemap(): MetadataRoute.Sitemap {
  const homeM = safeMtime(path.join(APP, "page.tsx")) ?? FALLBACK_MOD;
  const blogIndexM = safeMtime(path.join(APP, "blog", "page.tsx")) ?? FALLBACK_MOD;
  const stepGuideM = safeMtime(path.join(APP, "step-guide", "page.tsx")) ?? FALLBACK_MOD;
  const keywordLM = seoKeywordSectionLastMod() ?? FALLBACK_MOD;

  const staticPages: MetadataRoute.Sitemap = [
    { url: absUrl(""), lastModified: homeM, changeFrequency: "weekly", priority: 1 },
    { url: absUrl(BLOG_PATH), lastModified: blogIndexM, changeFrequency: "weekly", priority: 0.9 },
    { url: absUrl("/step-guide"), lastModified: stepGuideM, changeFrequency: "monthly", priority: 0.9 },
  ];

  const sortedKeywords = [...keywordSlugs].filter(isIndexableSlug).sort((a, b) => a.localeCompare(b));
  const keywordPages: MetadataRoute.Sitemap = sortedKeywords.map((slug) => ({
    url: absUrl(`/${slug}`),
    lastModified: keywordLM,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const sortedBlog = Object.keys(blogData).sort((a, b) => a.localeCompare(b));
  const blogPages: MetadataRoute.Sitemap = sortedBlog.map((slug) => ({
    url: absUrl(`${BLOG_PATH}/${slug}`),
    lastModified: blogPostLastMod(slug) ?? FALLBACK_MOD,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const sortedSetup = [...setupGuideSlugs].sort((a, b) => a.localeCompare(b));
  const setupPages: MetadataRoute.Sitemap = sortedSetup.map((slug) => ({
    url: absUrl(`/step-guide/${slug}`),
    lastModified: stepGuideM,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return dedupe([...staticPages, ...keywordPages, ...blogPages, ...setupPages]);
}

/** For `scripts/validate-sitemap-urls.ts` — same URLs as the live sitemap. */
export function collectSitemapAbsoluteUrls(): string[] {
  return buildIndexableSitemap().map((e) => e.url);
}
