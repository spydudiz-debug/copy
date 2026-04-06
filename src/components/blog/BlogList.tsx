"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import type { BlogPostListItem } from "@/lib/blog";
import { BLOG_IMAGE_FALLBACK, BLOG_POSTS_PER_PAGE } from "@/lib/blog-constants";
import { BLOG_PATH } from "@/lib/constants";
import { cn } from "@/lib/cn";

type BlogListProps = {
  posts: BlogPostListItem[];
  className?: string;
};

function buildPageList(totalPages: number, current: number): (number | "ellipsis")[] {
  if (totalPages <= 1) return totalPages === 1 ? [1] : [];
  if (totalPages <= 9) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const set = new Set<number>();
  set.add(1);
  set.add(totalPages);
  for (let p = current - 2; p <= current + 2; p++) {
    if (p >= 1 && p <= totalPages) set.add(p);
  }
  const sorted = [...set].sort((a, b) => a - b);
  const out: (number | "ellipsis")[] = [];
  for (let i = 0; i < sorted.length; i++) {
    const p = sorted[i]!;
    if (i > 0 && p - sorted[i - 1]! > 1) {
      out.push("ellipsis");
    }
    out.push(p);
  }
  return out;
}

function BlogCardImage({
  src,
  alt,
  title,
}: {
  src: string | null;
  alt: string;
  title: string;
}) {
  const initial = src ?? BLOG_IMAGE_FALLBACK;
  const [imgSrc, setImgSrc] = useState(initial);

  useEffect(() => {
    setImgSrc(src ?? BLOG_IMAGE_FALLBACK);
  }, [src]);

  const remote = imgSrc.startsWith("http://") || imgSrc.startsWith("https://");

  return (
    <Image
      src={imgSrc}
      alt={alt || title}
      fill
      unoptimized={remote}
      className="object-cover transition duration-500 group-hover:scale-[1.03]"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
      onError={() => {
        if (imgSrc !== BLOG_IMAGE_FALLBACK) {
          console.warn("[BlogCardImage] failed to load, using fallback:", src);
          setImgSrc(BLOG_IMAGE_FALLBACK);
        }
      }}
    />
  );
}

export function BlogList({ posts, className }: BlogListProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(posts.length / BLOG_POSTS_PER_PAGE));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const currentPosts = useMemo(() => {
    const last = currentPage * BLOG_POSTS_PER_PAGE;
    const first = last - BLOG_POSTS_PER_PAGE;
    return posts.slice(first, last);
  }, [posts, currentPage]);

  const pageNumbers = useMemo(() => buildPageList(totalPages, currentPage), [totalPages, currentPage]);

  if (posts.length === 0) {
    console.warn("[BlogList] empty posts array — check content/blog/*.md");
    return (
      <p className="rounded-2xl border border-dashed border-[#e2e8f0] bg-[#f8fafc] px-6 py-12 text-center text-[0.9375rem] font-medium text-[#64748b]">
        No blogs available
      </p>
    );
  }

  return (
    <div className={cn("space-y-12", className)}>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {currentPosts.map((post) => (
          <li key={post.slug}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-[0_4px_24px_-4px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.04] transition hover:-translate-y-0.5 hover:border-[#c7d2fe] hover:shadow-[0_12px_40px_-8px_rgba(79,70,229,0.12)]">
              <Link
                href={`${BLOG_PATH}/${post.slug}`}
                className="relative block aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-[#eef2ff] to-[#faf5ff]"
              >
                <BlogCardImage src={post.featuredImage} alt={post.featuredImageAlt} title={post.title} />
              </Link>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#6366f1]">{post.keyword}</p>
                <h2 className="mt-2 line-clamp-2 text-lg font-bold leading-snug tracking-tight text-[#0f172a] sm:text-xl">
                  <Link href={`${BLOG_PATH}/${post.slug}`} className="transition hover:text-[#6366f1]">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 line-clamp-3 flex-1 text-[0.9375rem] font-medium leading-relaxed text-[#64748b]">
                  {post.description}
                </p>
                <Link
                  href={`${BLOG_PATH}/${post.slug}`}
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#0f172a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1e293b]"
                >
                  Read more
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {totalPages > 1 ? (
        <nav
          className="flex flex-wrap items-center justify-center gap-2 border-t border-[#e2e8f0] pt-10"
          aria-label="Blog pagination"
        >
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={cn(
              "min-h-11 min-w-[5.5rem] rounded-full border px-4 text-sm font-semibold transition",
              currentPage === 1
                ? "cursor-not-allowed border-[#e2e8f0] bg-[#f8fafc] text-[#94a3b8]"
                : "border-[#cbd5e1] bg-white text-[#0f172a] hover:border-[#6366f1] hover:text-[#6366f1]"
            )}
          >
            Previous
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {pageNumbers.map((item, idx) =>
              item === "ellipsis" ? (
                <span
                  key={`e-${idx}`}
                  className="flex h-11 min-w-[2.75rem] items-center justify-center text-[#94a3b8]"
                  aria-hidden
                >
                  …
                </span>
              ) : (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCurrentPage(item)}
                  className={cn(
                    "flex h-11 min-w-[2.75rem] items-center justify-center rounded-full px-3.5 text-sm font-semibold transition",
                    currentPage === item
                      ? "bg-[#6366f1] text-white shadow-md shadow-indigo-500/25"
                      : "border border-[#e2e8f0] bg-white text-[#0f172a] hover:border-[#6366f1] hover:text-[#6366f1]"
                  )}
                  aria-current={currentPage === item ? "page" : undefined}
                >
                  {item}
                </button>
              )
            )}
          </div>

          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={cn(
              "min-h-11 min-w-[5.5rem] rounded-full border px-4 text-sm font-semibold transition",
              currentPage === totalPages
                ? "cursor-not-allowed border-[#e2e8f0] bg-[#f8fafc] text-[#94a3b8]"
                : "border-[#cbd5e1] bg-white text-[#0f172a] hover:border-[#6366f1] hover:text-[#6366f1]"
            )}
          >
            Next
          </button>
        </nav>
      ) : null}

      <p className="text-center text-sm font-medium text-[#94a3b8]">
        Page {currentPage} of {totalPages}
        <span className="mx-2 text-[#cbd5e1]">·</span>
        {posts.length} article{posts.length === 1 ? "" : "s"}
      </p>
    </div>
  );
}
