import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogPostListItem = {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  featuredImage: string | null;
  featuredImageAlt: string;
};

export type BlogPostDetail = BlogPostListItem & {
  content: string;
};

function extractFirstMarkdownImage(md: string): { url: string | null; alt: string } {
  const m = md.match(/!\[([^\]]*)\]\(([^)]+)\)/);
  if (!m) return { url: null, alt: "" };
  return { url: m[2].trim(), alt: m[1]?.trim() || "" };
}

/** Accept only http(s) URLs for remote images — avoids broken relative paths in markdown */
export function isSafeRemoteImageUrl(url: string | null): url is string {
  if (!url || typeof url !== "string") return false;
  const t = url.trim();
  return t.startsWith("https://") || t.startsWith("http://");
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[blog] content/blog directory missing:", BLOG_DIR);
    }
    return [];
  }
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts(): BlogPostListItem[] {
  const slugs = getPostSlugs();
  const posts: BlogPostListItem[] = [];

  for (const slug of slugs) {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    const title = String(data.title ?? slug);
    const description = String(data.description ?? "");
    const keyword = String(data.keyword ?? "");
    const { url, alt } = extractFirstMarkdownImage(content);
    const safeUrl = isSafeRemoteImageUrl(url) ? url : null;

    posts.push({
      slug,
      title,
      description,
      keyword,
      featuredImage: safeUrl,
      featuredImageAlt: alt || title,
    });
  }

  posts.sort((a, b) => a.title.localeCompare(b.title));

  if (process.env.NODE_ENV === "development") {
    console.log("[blog] getAllPosts:", posts.length, "files from", BLOG_DIR);
  }

  return posts;
}

export function getPostBySlug(slug: string): BlogPostDetail | null {
  if (!slug || slug.includes("..") || slug.includes("/")) return null;
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const title = String(data.title ?? slug);
  const description = String(data.description ?? "");
  const keyword = String(data.keyword ?? "");
  const { url, alt } = extractFirstMarkdownImage(content);
  const safeUrl = isSafeRemoteImageUrl(url) ? url : null;

  return {
    slug,
    title,
    description,
    keyword,
    featuredImage: safeUrl,
    featuredImageAlt: alt || title,
    content,
  };
}
