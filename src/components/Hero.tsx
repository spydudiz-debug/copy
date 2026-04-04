import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { IPTV_STORE_URL } from "@/lib/constants";
import { cn } from "@/lib/cn";

function StarRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5 lg:justify-start">
      <div className="flex gap-1 sm:gap-1.5" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff2a7f]/90 shadow-md ring-2 ring-white/20 transition duration-300 hover:scale-110 hover:shadow-lg sm:h-9 sm:w-9"
          >
            <svg className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
        ))}
      </div>
      <p className="text-sm font-medium text-white/95 sm:text-base">Trusted by 5,000+ customers</p>
    </div>
  );
}

const btnPrimary =
  "inline-flex h-12 min-w-[148px] cursor-pointer items-center justify-center rounded-full bg-[#0f172a] px-7 text-sm font-semibold text-white shadow-lg shadow-black/20 transition duration-300 ease-out hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] sm:min-w-[160px] sm:px-8";
const btnGhost =
  "inline-flex h-12 min-w-[148px] cursor-pointer items-center justify-center rounded-full border-2 border-white bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 ease-out hover:scale-[1.02] hover:bg-white/15 active:scale-[0.98] sm:min-w-[160px] sm:px-8";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#ff2a7f] via-[#a855f7] to-[#22c1f1] pb-14 pt-[calc(4.5rem+env(safe-area-inset-top))] sm:pb-20 sm:pt-[calc(5rem+env(safe-area-inset-top))] lg:pb-24 lg:pt-[calc(5.5rem+env(safe-area-inset-top))]"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,193,241,0.25),transparent_50%)]" />

      <Container className="relative">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="flex max-w-2xl flex-col gap-5 text-center sm:gap-6 lg:max-w-none lg:text-left">
            <div className="animate-fade-up inline-flex justify-center lg:justify-start">
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm sm:px-4 sm:text-xs">
                NO BUFFERING & FREEZE
              </span>
            </div>

            <h1
              id="hero-heading"
              className={cn(
                "animate-fade-up animate-delay-100 text-[2rem] font-bold leading-[1.12] tracking-tight text-white",
                "sm:text-[2.5rem] sm:leading-[1.1] md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] xl:leading-[1.08]"
              )}
            >
              Best IPTV Provider
            </h1>

            <p className="animate-fade-up animate-delay-200 mx-auto max-w-xl text-[0.9375rem] font-medium leading-relaxed text-white/95 sm:text-base lg:mx-0 lg:max-w-[26rem] lg:text-lg xl:max-w-xl">
              Stream thousands of live channels, sports, movies, and on-demand shows in HD and 4K. Fast
              channel zapping, rock-solid uptime, and support when you need it—so you never miss the
              moments that matter.
            </p>

            <div className="animate-fade-up animate-delay-200 flex justify-center lg:justify-start">
              <StarRow />
            </div>

            <div className="animate-fade-up animate-delay-300 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
              <Link href={IPTV_STORE_URL} className={btnPrimary}>
                Get Started
              </Link>
              <Link href={IPTV_STORE_URL} className={btnGhost}>
                Get Free
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div
              className={cn(
                "animate-hero-float relative rounded-2xl bg-white p-2.5 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.25)] ring-1 ring-black/5",
                "transition duration-300 ease-out will-change-transform hover:-translate-y-1 hover:shadow-[0_40px_80px_-16px_rgba(0,0,0,0.3)]",
                "sm:p-3"
              )}
            >
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-xl">
                <Image
                  src="/images/football.jpg"
                  alt="Watching live football on IPTV"
                  fill
                  className="object-cover object-center transition duration-300 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
              <div
                className={cn(
                  "pointer-events-none absolute -bottom-2 -left-2 z-10 rotate-[-8deg] sm:-bottom-3 sm:-left-3",
                  "drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
                )}
              >
                <div
                  className="absolute -inset-3 -z-10 rounded-3xl bg-[#22c1f1]/25 blur-2xl"
                  aria-hidden
                />
                <Image
                  src="/images/iptv-ui.jpg"
                  alt="IPTV Smarters interface preview"
                  width={220}
                  height={140}
                  className="max-h-[140px] w-auto max-w-[min(220px,calc(100vw-2.5rem))] rounded-xl border border-white/20 object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
