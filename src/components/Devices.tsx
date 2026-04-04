import Image from "next/image";

import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

function IconPlayback() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}

function IconSupport() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

function IconData() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  );
}

const items = [
  {
    title: "Build Watching Universe",
    body: "Organize favorites, categories, and profiles so everyone in your home gets a tailored lineup.",
    iconWrap: "from-[#ff2a7f] to-[#f43f5e]",
    Icon: IconPlayback,
  },
  {
    title: "24/7 Support",
    body: "Real humans on standby around the clock for setup help, troubleshooting, and account questions.",
    iconWrap: "from-[#6366f1] to-[#4f46e5]",
    Icon: IconSupport,
  },
  {
    title: "Data Usage",
    body: "Efficient streaming profiles help you stay within bandwidth limits while keeping quality high.",
    iconWrap: "from-[#22c1f1] to-[#0ea5e9]",
    Icon: IconData,
  },
] as const;

export function Devices() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid items-center gap-10 sm:gap-12 md:gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="relative mx-auto flex w-full max-w-[22rem] justify-center sm:max-w-md lg:mx-0 lg:max-w-none">
            <div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#a855f7]/40 via-[#6366f1]/30 to-[#22c1f1]/40 blur-2xl sm:-inset-6"
              aria-hidden
            />
            <div className="relative h-[min(26rem,72vh)] w-full max-w-sm sm:h-[28rem] lg:h-[26.25rem]">
              <div
                className={cn(
                  "absolute left-2 top-4 z-10 w-[52%] rotate-[-6deg] overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl ring-4 ring-white/50",
                  "transition duration-300 ease-out will-change-transform hover:z-20 hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]",
                  "sm:left-4 sm:top-6"
                )}
              >
                <div className="relative aspect-[9/18] w-full">
                  <Image
                    src="/images/device-phone-1.jpg"
                    alt="Modern smartphone displaying live IPTV channels and streaming guide"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 45vw, 200px"
                  />
                </div>
              </div>
              <div
                className={cn(
                  "absolute right-2 top-14 z-[11] w-[52%] rotate-[8deg] overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl ring-4 ring-white/50",
                  "transition duration-300 ease-out will-change-transform hover:z-20 hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]",
                  "sm:right-4 sm:top-16"
                )}
              >
                <div className="relative aspect-[9/18] w-full">
                  <Image
                    src="/images/device-phone-2.jpg"
                    alt="Smartphone playing sports and movies on a streaming app"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 45vw, 200px"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7 sm:gap-8">
            <ul className="flex flex-col gap-7 sm:gap-8">
              {items.map((item) => {
                const Icon = item.Icon;
                return (
                <li key={item.title} className="flex gap-4 sm:gap-5">
                  <span
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg sm:h-14 sm:w-14",
                      "transition duration-300 ease-out hover:scale-105 hover:shadow-xl",
                      item.iconWrap
                    )}
                  >
                    <Icon />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-lg font-bold text-[#0f172a] sm:text-xl">{item.title}</h3>
                    <p className="mt-1.5 text-sm font-medium leading-relaxed text-[#6b7280] sm:mt-2 sm:text-[0.9375rem] md:text-base">
                      {item.body}
                    </p>
                  </div>
                </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
