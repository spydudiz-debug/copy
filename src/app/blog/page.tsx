import type { Metadata } from "next";
import { Suspense } from "react";

import { BlogList } from "@/components/blog/BlogList";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getAllPosts } from "@/lib/blog";
import { BLOG_POSTS_PER_PAGE } from "@/lib/blog-constants";
import { BLOG_PATH } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type Props = {
  searchParams: Promise<{ page?: string }>;
};

function clampBlogPage(raw: string | undefined, totalPages: number): number {
  const n = parseInt(raw ?? "1", 10);
  if (!Number.isFinite(n) || n < 1) return 1;
  return Math.min(n, totalPages);
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const posts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / BLOG_POSTS_PER_PAGE));
  const params = await searchParams;
  const page = clampBlogPage(params.page, totalPages);
  const canonical = page <= 1 ? BLOG_PATH : `${BLOG_PATH}?page=${page}`;

  return {
    title: "IPTV Blog — Guides, Tips & Streaming Insights | SCOP",
    description:
      "Read SCOP Media’s IPTV blog: setup tips, streaming quality, subscriptions, and device guides in plain English.",
    alternates: { canonical },
  };
}

export default async function BlogPage({ searchParams }: Props) {
  const posts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / BLOG_POSTS_PER_PAGE));
  const params = await searchParams;
  const page = clampBlogPage(params.page, totalPages);

  if (process.env.NODE_ENV === "development") {
    console.log("[blog/page] rendering with", posts.length, "posts, page", page);
  }

  return (
    <>
      <Navbar />
      <main className="min-h-[50vh] pt-16 md:pt-[4.5rem]">
        <Section className="bg-[#f5f5f7] pb-16 pt-10 sm:pb-20 sm:pt-12 md:pt-14">
          <Container>
            <header className="mx-auto max-w-3xl text-center">
              <h1 className="text-[1.75rem] font-bold tracking-tight text-[#0f172a] sm:text-3xl md:text-4xl">Blog</h1>
              <p className="mt-4 text-[0.9375rem] font-medium leading-relaxed text-[#64748b] sm:text-lg">
                Practical articles on IPTV, devices, and streaming—updated as we publish new guides.
              </p>
            </header>

            <div className="mx-auto mt-12 max-w-6xl sm:mt-14">
              <Suspense
                fallback={
                  <p className="rounded-2xl border border-[#e2e8f0] bg-white px-6 py-12 text-center text-[#64748b]">
                    Loading articles…
                  </p>
                }
              >
                <BlogList posts={posts} initialPage={page} />
              </Suspense>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
