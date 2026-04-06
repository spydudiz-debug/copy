import type { MetadataRoute } from "next";

import { POSTS_PER_PAGE } from "@/components/blog-pagination";
import { blogData } from "@/lib/blog-data";
import { BLOG_PATH } from "@/lib/constants";
import { keywordSlugs } from "@/lib/keyword-pages";
import { setupGuideSlugs } from "@/lib/deviceSetupGuides";
import { SITE_URL } from "@/lib/site-config";

const RESERVED_SLUGS = ["blog", "step-guide", "setup", "api"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date();
  const postCount = Object.keys(blogData).length;
  const totalBlogPages = Math.max(1, Math.ceil(postCount / POSTS_PER_PAGE));

  const blogListingPages: MetadataRoute.Sitemap = [];
  for (let p = 1; p <= totalBlogPages; p++) {
    blogListingPages.push({
      url: p === 1 ? `${SITE_URL}${BLOG_PATH}` : `${SITE_URL}${BLOG_PATH}?page=${p}`,
      lastModified: lastMod,
      changeFrequency: "weekly" as const,
      priority: p === 1 ? 0.9 : 0.85,
    });
  }

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: lastMod, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}${BLOG_PATH}`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.9 },
    {
      url: `${SITE_URL}/step-guide`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = Object.keys(blogData).map((slug) => ({
    url: `${SITE_URL}${BLOG_PATH}/${slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const setupPages: MetadataRoute.Sitemap = setupGuideSlugs.map((slug) => ({
    url: `${SITE_URL}/step-guide/${slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const keywordPages: MetadataRoute.Sitemap = keywordSlugs
    .filter((slug) => !RESERVED_SLUGS.includes(slug))
    .map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: lastMod,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }));

  return [...staticPages, ...blogListingPages.slice(1), ...keywordPages, ...blogPages, ...setupPages];
}
