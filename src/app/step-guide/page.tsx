import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { SCOP_MEDIA_SITE_URL } from "@/lib/constants";
import { Navbar } from "@/components/Navbar";
import { StepGuideContent } from "@/components/StepGuideContent";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "IPTV Setup Guides — Firestick, Smart TV, Android, PC & Formuler | SCOP",
  description:
    "Step-by-step IPTV setup for Fire TV, Samsung & LG smart TVs, Android boxes, Windows PC, and Formuler (MyTVOnline). Install apps, enter login details, and start streaming.",
  keywords: [
    "IPTV Firestick setup",
    "how to install IPTV on Fire TV",
    "IPTV Smart TV setup",
    "IPTV Samsung LG Sony guide",
    "IPTV Android box setup",
    "TV box IPTV guide",
    "IPTV on Windows PC",
    "how to watch IPTV on laptop",
    "Formuler IPTV setup",
    "MyTVOnline IPTV guide",
  ],
};

export default function StepGuidePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-[4.5rem]">
        <Section className="bg-[#f5f5f7] pb-16 pt-8 sm:pb-20 sm:pt-10 md:pt-12">
          <Container>
            <nav className="mb-8 text-sm font-medium text-[#64748b] sm:mb-10" aria-label="Breadcrumb">
              <Link href={SCOP_MEDIA_SITE_URL} className="text-[#6366f1] transition hover:text-[#4f46e5]">
                Home
              </Link>
              <span className="mx-2 text-[#cbd5e1]">/</span>
              <span className="text-[#0f172a]">Setup guides</span>
            </nav>

            <header className="mx-auto max-w-3xl text-center">
              <h1 className="text-[1.75rem] font-bold tracking-tight text-[#0f172a] sm:text-3xl md:text-4xl">
                IPTV Setup Guides
              </h1>
              <p className="mt-4 text-[0.9375rem] font-medium leading-relaxed text-[#64748b] sm:mt-5 sm:text-lg">
                Clear, device-specific instructions for Amazon Fire TV, Smart TVs, Android boxes, Windows, and
                Formuler—so you can install your app, enter your subscription, and watch live TV and on-demand
                content without guesswork.
              </p>
            </header>

            <div className="mx-auto mt-12 max-w-4xl sm:mt-14">
              <StepGuideContent />
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
