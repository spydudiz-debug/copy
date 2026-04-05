import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SetupStepsGrid } from "@/components/SetupStepsGrid";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Step-by-Step Setup Guide | SCOP",
  description:
    "Install your IPTV app, sign in, load channels, and start watching—five clear steps with screenshots.",
};

export default function StepGuidePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-[4.5rem]">
        <Section className="bg-[#f5f5f7] pb-16 pt-8 sm:pb-20 sm:pt-10 md:pt-12">
          <Container>
            <nav className="mb-8 text-sm font-medium text-[#6b7280] sm:mb-10">
              <Link href="/" className="text-[#6366f1] transition hover:text-[#4f46e5]">
                ← Home
              </Link>
              <span className="mx-2 text-[#cbd5e1]">/</span>
              <span className="text-[#0f172a]">Setup guide</span>
            </nav>

            <SetupStepsGrid headingLevel="h1" />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
