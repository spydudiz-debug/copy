"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import type { BlogPostListItem } from "@/lib/blog";
import { BLOG_PATH } from "@/lib/constants";
import { cn } from "@/lib/cn";

type BlogListProps = {
  posts: BlogPostListItem[];
  className?: string;
};

export function BlogList({ posts, className }: BlogListProps) {
  useEffect(() => {
    console.log("[BlogList] posts in state:", posts.length);
    console.log(
      "[BlogList] slugs:",
      posts.map((p) => p.slug)
    );
  }, [posts]);

  if (posts.length === 0) {
    console.warn("[BlogList] empty posts array — check content/blog/*.md");
    return (
      <p className="rounded-2xl border border-dashed border-[#e2e8f0] bg-[#f8fafc] px-6 py-12 text-center text-[0.9375rem] font-medium text-[#64748b]">
        No blogs available
      </p>
    );
  }

  return (
    <ul className={cn("grid gap-8 sm:grid-cols-2 lg:gap-10", className)}>
      {posts.map((post) => (
        <li key={post.slug}>
          <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-lg shadow-black/[0.04] ring-1 ring-black/[0.03] transition hover:border-[#cbd5e1] hover:shadow-xl">
            <Link href={`${BLOG_PATH}/${post.slug}`} className="relative block aspect-[16/9] w-full overflow-hidden bg-[#f1f5f9]">
              {post.featuredImage ? (
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm font-medium text-[#94a3b8]">No image</div>
              )}
            </Link>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#6366f1]">{post.keyword}</p>
              <h2 className="mt-2 text-lg font-bold leading-snug tracking-tight text-[#0f172a] sm:text-xl">
                <Link href={`${BLOG_PATH}/${post.slug}`} className="transition hover:text-[#6366f1]">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-[0.9375rem] font-medium leading-relaxed text-[#64748b]">{post.description}</p>
              <Link
                href={`${BLOG_PATH}/${post.slug}`}
                className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#6366f1] transition hover:gap-2.5 hover:text-[#4f46e5]"
              >
                Read more
                <span aria-hidden>→</span>
              </Link>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
