import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { GuideArticle } from "@/components/GuideArticle";
import { Navbar } from "@/components/Navbar";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { STEP_GUIDE_PATH } from "@/lib/constants";
import { deviceSetupGuides, getDeviceGuideBySlug } from "@/lib/deviceSetupGuides";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return deviceSetupGuides.map((g) => ({ slug: g.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getDeviceGuideBySlug(slug);
  if (!guide) return { title: "Guide not found" };

  const title = `${guide.title} — IPTV Setup | IPTV UK TV`;
  const description =
    guide.intro.length > 155 ? `${guide.intro.slice(0, 152)}…` : guide.intro;

  return {
    title,
    description,
    alternates: { canonical: `${STEP_GUIDE_PATH}/${slug}` },
  };
}

export default async function StepGuideDevicePage({ params }: Props) {
  const { slug } = await params;
  const guide = getDeviceGuideBySlug(slug);
  if (!guide) notFound();

  const index = deviceSetupGuides.findIndex((g) => g.id === slug);

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-[4.5rem]">
        <Section className="bg-[#f5f5f7] pb-16 pt-8 sm:pb-20 sm:pt-10 md:pt-12">
          <Container>
            <nav className="mb-8 text-sm font-medium text-[#64748b] sm:mb-10" aria-label="Breadcrumb">
              <Link href="/" className="text-[#6366f1] transition hover:text-[#4f46e5]">
                Home
              </Link>
              <span className="mx-2 text-[#cbd5e1]">/</span>
              <Link href={STEP_GUIDE_PATH} className="text-[#6366f1] transition hover:text-[#4f46e5]">
                Setup guides
              </Link>
              <span className="mx-2 text-[#cbd5e1]">/</span>
              <span className="text-[#0f172a] line-clamp-1">{guide.title}</span>
            </nav>

            <p className="text-sm font-semibold text-[#6366f1]">
              <Link href={STEP_GUIDE_PATH} className="transition hover:underline">
                ← All setup guides
              </Link>
            </p>

            <div className="mx-auto mt-8 max-w-4xl">
              <GuideArticle guide={guide} index={index >= 0 ? index : 0} />
            </div>
          </Container>
        </Section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
