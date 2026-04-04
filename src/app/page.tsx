import { CTA } from "@/components/CTA";
import { Datacenter } from "@/components/Datacenter";
import { Devices } from "@/components/Devices";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Guides } from "@/components/Guides";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { Setup } from "@/components/Setup";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <Features />
        <Setup />
        <Datacenter />
        <Devices />
        <Guides />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
