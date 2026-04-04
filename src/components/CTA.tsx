import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { IPTV_STORE_URL } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function CTA() {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 sm:py-20 lg:py-24",
        "bg-gradient-to-r from-[#ff2a7f] via-[#a855f7] to-[#22c1f1] bg-[length:200%_200%] animate-gradient-slow"
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_60%)]" />
      <Container className="relative text-center">
        <h2 className="text-[1.625rem] font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-tight">
          7-days money-back guarantee
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[0.9375rem] font-medium leading-relaxed text-white/95 sm:mt-4 sm:text-base md:text-lg">
          Try it risk-free—if you are not satisfied within the first week, contact us for a hassle-free
          refund. No tricks, no runaround.
        </p>
        <Link
          href={IPTV_STORE_URL}
          className={cn(
            "mt-8 inline-flex h-12 min-w-[168px] cursor-pointer items-center justify-center rounded-full bg-white px-9 text-sm font-semibold text-[#0f172a] shadow-xl shadow-black/15",
            "transition duration-300 ease-out hover:scale-[1.03] hover:brightness-95 active:scale-[0.98] sm:mt-10 sm:min-w-[180px] sm:px-10",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          )}
        >
          Get Started
        </Link>
      </Container>
    </section>
  );
}
