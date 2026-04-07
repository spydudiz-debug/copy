import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { BLOG_PATH } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  const docTitle = post.metaTitle
    ? post.metaTitle
    : `${post.title.length > 45 ? `${post.title.slice(0, 42)}…` : post.title} | SCOP Blog`;

  return {
    title: docTitle,
    description: post.description,
    alternates: { canonical: `${BLOG_PATH}/${slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  if (process.env.NODE_ENV === "development") {
    console.log("[blog/[slug]] render:", slug, post.title);
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-[4.5rem]">
        <Section className="bg-[#f5f5f7] pb-16 pt-8 sm:pb-20 sm:pt-10 md:pt-12">
          <Container className="max-w-3xl pb-0">
            <nav className="mb-8 text-sm font-medium text-[#64748b] sm:mb-10" aria-label="Breadcrumb">
              <Link href="/" className="text-[#6366f1] transition hover:text-[#4f46e5]">
                Home
              </Link>
              <span className="mx-2 text-[#cbd5e1]">/</span>
              <Link href={BLOG_PATH} className="text-[#6366f1] transition hover:text-[#4f46e5]">
                Blog
              </Link>
              <span className="mx-2 text-[#cbd5e1]">/</span>
              <span className="text-[#0f172a] line-clamp-1">{post.title}</span>
            </nav>

            <p className="text-xs font-semibold uppercase tracking-wide text-[#6366f1]">{post.keyword}</p>
            <h1 className="mt-2 text-[1.75rem] font-bold tracking-tight text-[#0f172a] sm:text-3xl md:text-4xl">{post.title}</h1>
            <p className="mt-4 text-[0.9375rem] font-medium leading-relaxed text-[#64748b] sm:text-lg">{post.description}</p>

            {post.featuredImage ? (
              <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#e2e8f0] shadow-lg">
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt}
                  fill
                  className="object-cover"
                  priority
                  unoptimized={
                    post.featuredImage.startsWith("http://") ||
                    post.featuredImage.startsWith("https://")
                  }
                  sizes="(max-width: 768px) 100vw, 720px"
                />
              </div>
            ) : null}

            <article className="blog-markdown mt-10 max-w-none">
              <ReactMarkdown
                components={{
                  h1: () => null,
                  img: ({ src, alt }) => {
                    const url = typeof src === "string" ? src : "";
                    if (!url) return null;
                    const remote = url.startsWith("http://") || url.startsWith("https://");
                    return (
                      <span className="relative my-8 block aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#e2e8f0]">
                        <Image
                          src={url}
                          alt={alt || ""}
                          fill
                          unoptimized={remote}
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 720px"
                        />
                      </span>
                    );
                  },
                  h2: ({ children }) => (
                    <h2 className="mt-10 border-b border-[#e2e8f0] pb-2 text-xl font-bold tracking-tight text-[#0f172a] sm:text-2xl">{children}</h2>
                  ),
                  h3: ({ children }) => <h3 className="mt-8 text-lg font-bold text-[#0f172a] sm:text-xl">{children}</h3>,
                  p: ({ children }) => <p className="mt-4 text-[0.9375rem] font-medium leading-relaxed text-[#475569] sm:text-base">{children}</p>,
                  ul: ({ children }) => <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.9375rem] font-medium text-[#475569]">{children}</ul>,
                  ol: ({ children }) => <ol className="mt-4 list-decimal space-y-2 pl-5 text-[0.9375rem] font-medium text-[#475569]">{children}</ol>,
                  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                  strong: ({ children }) => <strong className="font-semibold text-[#0f172a]">{children}</strong>,
                  a: ({ href, children }) => (
                    <a href={href} className="font-semibold text-[#6366f1] underline-offset-2 hover:underline">
                      {children}
                    </a>
                  ),
                  table: ({ children }) => (
                    <div className="my-6 overflow-x-auto rounded-xl border border-[#e2e8f0] bg-white">
                      <table className="w-full min-w-[480px] text-left text-sm">{children}</table>
                    </div>
                  ),
                  thead: ({ children }) => <thead className="bg-[#f8fafc] font-semibold text-[#0f172a]">{children}</thead>,
                  th: ({ children }) => <th className="border-b border-[#e2e8f0] px-4 py-3">{children}</th>,
                  td: ({ children }) => <td className="border-b border-[#e2e8f0] px-4 py-3 text-[#475569]">{children}</td>,
                }}
              >
                {stripLeadingTitleAndImage(post.content)}
              </ReactMarkdown>
            </article>

            <div className="mt-12 border-t border-[#e2e8f0] pt-10">
              <Link
                href={BLOG_PATH}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#6366f1] transition hover:gap-2.5 hover:text-[#4f46e5]"
              >
                ← Back to blog
              </Link>
            </div>
          </Container>

          <div className="mx-auto mt-12 w-full max-w-7xl px-4 sm:mt-14 sm:px-6 lg:mt-16 lg:px-8">
            <CTASection />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

/** Remove duplicate H1 and first image from markdown body (shown in hero). */
function stripLeadingTitleAndImage(md: string): string {
  let s = md.trim();
  s = s.replace(/^#\s+.+\n+/, "");
  s = s.replace(/^!\[[^\]]*\]\([^)]+\)\s*\n+/, "");
  return s.trim();
}
