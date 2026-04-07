import Link from "next/link";

import { cn } from "@/lib/cn";

type CTASectionProps = {
  className?: string;
};

/**
 * Blog-focused “Get Started” CTA — gradient card, responsive row/stack layout.
 */
export function CTASection({ className }: CTASectionProps) {
  return (
    <section
      className={cn("w-full", className)}
      aria-labelledby="blog-get-started-cta-heading"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div
          className={cn(
            "overflow-hidden rounded-3xl border border-white/40 shadow-[0_20px_50px_-12px_rgba(99,102,241,0.25)]",
            "bg-gradient-to-br from-sky-100/90 via-violet-100/90 to-pink-100/90",
            "px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14",
          )}
        >
          <div className="flex flex-col items-stretch gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="max-w-xl text-center md:text-left">
              <h2
                id="blog-get-started-cta-heading"
                className="text-xl font-bold tracking-tight text-[#0f172a] sm:text-2xl md:text-[1.65rem] md:leading-snug"
              >
                7-days money-back guarantee
              </h2>
              <p className="mt-3 text-[0.9375rem] font-medium leading-relaxed text-[#475569] sm:text-base">
                Try it risk-free—if you are not satisfied within the first week, contact us for a hassle-free
                refund. No tricks, no runaround.
              </p>
            </div>

            <div className="flex shrink-0 justify-center md:justify-end">
              <Link
                href="/#subscription"
                aria-label="Get started — view subscription plans and pricing"
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-md sm:text-base",
                  "bg-gradient-to-r from-[#2563eb] via-[#6366f1] to-[#7c3aed]",
                  "transition duration-200 ease-out",
                  "hover:scale-[1.03] hover:shadow-lg hover:shadow-indigo-500/35",
                  "active:scale-[0.98]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0f4ff]",
                )}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
