import Image from "next/image";

import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const miniCards = [
  {
    title: "Android",
    subtitle: "APK install & quick login",
    iconBox: "bg-[#22c1f1]/15 text-[#0891b2]",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4486.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0987L4.841 5.4465a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.186.8535 12.3074.8535 13.8999c0 2.3447 4.9908 4.5 11.1465 4.5s11.1465-2.1553 11.1465-4.5c0-1.5925-1.8354-2.7139-4.3184-3.5785" />
      </svg>
    ),
  },
  {
    title: "Easy Steps",
    subtitle: "Checklist-driven setup flow",
    iconBox: "bg-[#a855f7]/15 text-[#7c3aed]",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
] as const;

export function Setup() {
  return (
    <Section id="setup-guide" className="bg-[#f5f5f7]">
      <Container>
        <div className="grid items-center gap-10 sm:gap-12 md:gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="order-2 flex flex-col gap-6 sm:gap-8 lg:order-1">
            <h2 className="text-[1.625rem] font-bold tracking-tight text-[#0f172a] sm:text-3xl md:text-4xl">
              Effortless And Easy To Setup
            </h2>
            <p className="text-[0.9375rem] font-medium leading-relaxed text-[#6b7280] sm:text-base md:text-lg">
              Whether you are on Android TV, Firestick, or a smart TV app, our guided steps help you go
              from login to live channels in minutes—no complicated networking knowledge required.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {miniCards.map((card) => (
                <div
                  key={card.title}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lg shadow-black/5 ring-1 ring-black/5 sm:gap-4 sm:p-5",
                    "transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12",
                      card.iconBox
                    )}
                  >
                    {card.icon}
                  </span>
                  <div className="min-w-0 text-left">
                    <p className="text-sm font-semibold text-[#0f172a]">{card.title}</p>
                    <p className="mt-0.5 text-xs font-medium text-[#6b7280] sm:text-[0.8125rem]">{card.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:mx-0 lg:max-w-none">
            <div
              className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#14b8a6] via-[#22c1f1] to-[#6366f1] opacity-80 blur-2xl sm:-inset-4"
              aria-hidden
            />
            <div className="relative rounded-2xl bg-gradient-to-br from-[#14b8a6]/30 to-[#22c1f1]/40 p-6 shadow-xl sm:p-8">
              <div
                className={cn(
                  "group relative mx-auto aspect-[9/16] w-full max-w-[260px] overflow-hidden rounded-2xl bg-slate-900 shadow-xl ring-4 ring-white/40",
                  "sm:max-w-[280px]"
                )}
              >
                <Image
                  src="/images/iptv-ui.jpg"
                  alt="IPTV Smarters app interface"
                  fill
                  className="object-cover object-center transition duration-300 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 70vw, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
