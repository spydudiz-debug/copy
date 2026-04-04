import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

const bullets = [
  {
    title: "Optimized Delivery",
    body: "Smart routing and tuned servers help keep streams stable—even during peak hours and major events.",
    iconClass: "from-[#a855f7] to-[#6366f1]",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Anti-Freeze Tech",
    body: "Built-in safeguards reduce buffering and freezing so your entertainment stays uninterrupted from kickoff to credits.",
    iconClass: "from-[#22c1f1] to-[#0ea5e9]",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
] as const;

export function Features() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid items-center gap-10 sm:gap-12 md:gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div
              className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#ff2a7f] via-[#a855f7] to-[#22c1f1] opacity-90 blur-2xl sm:-inset-4"
              aria-hidden
            />
            <div className="relative rounded-2xl bg-gradient-to-br from-[#ff2a7f]/20 via-[#a855f7]/20 to-[#22c1f1]/30 p-4 shadow-xl sm:p-6">
              <div
                className={cn(
                  "relative mx-auto aspect-[4/3] w-full max-w-sm overflow-hidden rounded-xl bg-slate-900 shadow-2xl ring-4 ring-white/50",
                  "transition duration-300 ease-out hover:ring-white/70"
                )}
              >
                <Image
                  src="/images/tablet-streaming.jpg"
                  alt="Tablet displaying streaming TV app with movies and live channels"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 text-center sm:gap-6 lg:text-left">
            <h2 className="text-[1.625rem] font-bold tracking-tight text-[#0f172a] sm:text-3xl md:text-4xl">
              Binge What You Love Today!
            </h2>
            <p className="text-[0.9375rem] font-medium leading-relaxed text-[#6b7280] sm:text-base md:text-lg">
              From live sports to the latest series, SCOP delivers a smooth viewing experience on your
              favorite devices. Pick up where you left off and enjoy crisp picture quality without the
              frustration of freezes or endless loading.
            </p>

            <ul className="mt-1 flex flex-col gap-6 sm:mt-2 sm:gap-7">
              {bullets.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col items-center gap-4 sm:flex-row sm:items-start lg:items-start"
                >
                  <span
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white shadow-lg",
                      "transition duration-300 ease-out hover:scale-110 hover:shadow-xl",
                      item.iconClass
                    )}
                  >
                    {item.icon}
                  </span>
                  <div className="max-w-md sm:max-w-none">
                    <h3 className="text-lg font-bold text-[#0f172a]">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-[#6b7280] sm:text-[0.9375rem]">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
