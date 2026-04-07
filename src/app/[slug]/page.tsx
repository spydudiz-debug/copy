import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { IPTV_STORE_URL, STEP_GUIDE_PATH } from "@/lib/constants";
import {
  buildSeoDescription,
  buildSeoParagraph,
  getSeoKeywordPage,
  getSeoKeywordSlugs,
} from "@/lib/seo-pages";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getSeoKeywordSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getSeoKeywordPage(slug);
  if (!entry) return { title: "Not found" };

  const description = buildSeoDescription(entry.keyword);

  return {
    title: `${entry.keyword} | IPTV UK TV`,
    description,
    alternates: {
      canonical: `/${slug}`,
    },
  };
}

export default async function SeoKeywordPage({ params }: Props) {
  const { slug } = await params;
  const entry = getSeoKeywordPage(slug);
  if (!entry) notFound();

  const paragraph = buildSeoParagraph(entry.keyword);

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-[4.5rem]">
        <Section className="bg-[#f5f5f7] pb-16 pt-8 sm:pb-20 sm:pt-10 md:pt-12">
          <Container className="max-w-3xl">
            <nav className="mb-8 text-sm font-medium text-[#64748b] sm:mb-10" aria-label="Breadcrumb">
              <Link href="/" className="text-[#6366f1] transition hover:text-[#4f46e5]">
                Home
              </Link>
              <span className="mx-2 text-[#cbd5e1]">/</span>
              <span className="text-[#0f172a]">{entry.keyword}</span>
            </nav>

            <h1 className="text-[1.75rem] font-bold tracking-tight text-[#0f172a] sm:text-3xl md:text-4xl">
              {entry.keyword}
            </h1>

            <p className="mt-6 text-[0.9375rem] font-medium leading-relaxed text-[#64748b] sm:text-lg">{paragraph}</p>

            <ul className="mt-8 flex flex-col gap-3 text-[0.9375rem] font-semibold text-[#6366f1] sm:flex-row sm:flex-wrap sm:gap-6">
              <li>
                <Link href={STEP_GUIDE_PATH} className="underline-offset-2 hover:underline">
                  IPTV setup guides
                </Link>
              </li>
              <li>
                <a href={IPTV_STORE_URL} className="underline-offset-2 hover:underline">
                  IPTV subscriptions
                </a>
              </li>
              <li>
                <Link href="/blog" className="underline-offset-2 hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
