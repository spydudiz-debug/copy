import type { Metadata } from "next";

import { BlogList } from "@/components/blog/BlogList";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getAllPosts } from "@/lib/blog";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "IPTV Blog — Guides, Tips & Streaming Insights | SCOP",
  description:
    "Read SCOP Media’s IPTV blog: setup tips, streaming quality, subscriptions, and device guides in plain English.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = getAllPosts();

  if (process.env.NODE_ENV === "development") {
    console.log("[blog/page] rendering with", posts.length, "posts");
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
              <BlogList posts={posts} />
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
