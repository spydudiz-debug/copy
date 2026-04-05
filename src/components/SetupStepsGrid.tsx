import Image from "next/image";

import { cn } from "@/lib/cn";
import { setupSteps } from "@/lib/setupSteps";

type SetupStepsGridProps = {
  heading?: string;
  /** Use h1 on the dedicated step-guide page; default h2 on home. */
  headingLevel?: "h1" | "h2";
  subheading?: string;
  showTopBorder?: boolean;
  className?: string;
};

export function SetupStepsGrid({
  heading = "Step-by-Step Setup Guide",
  headingLevel = "h2",
  subheading = "Follow these steps to get from install to live channels on your device.",
  showTopBorder = false,
  className,
}: SetupStepsGridProps) {
  const HeadingTag = headingLevel;

  return (
    <div
      className={cn(
        showTopBorder && "mt-14 border-t border-[#e5e7eb] pt-14 sm:mt-16 sm:pt-16 lg:mt-20 lg:pt-20",
        className
      )}
    >
      <HeadingTag className="text-center text-[1.375rem] font-bold tracking-tight text-[#0f172a] sm:text-2xl md:text-3xl">
        {heading}
      </HeadingTag>
      {subheading ? (
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm font-medium leading-relaxed text-[#6b7280] sm:mt-4 sm:text-[0.9375rem] md:text-base">
          {subheading}
        </p>
      ) : null}

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:mt-10">
        {setupSteps.map((s) => (
          <div
            key={s.step}
            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-black/5 ring-1 ring-black/5"
          >
            <div className="relative aspect-[16/10] w-full bg-slate-100">
              <Image
                src={s.image}
                alt={s.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <span className="inline-flex w-fit rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                Step {s.step}
              </span>
              <h3 className="mt-1 text-lg font-bold text-[#0f172a]">{s.title}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[#6b7280]">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
