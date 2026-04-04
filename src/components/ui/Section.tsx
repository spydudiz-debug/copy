import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type SectionProps = HTMLAttributes<HTMLElement>;

/** Default vertical rhythm + anchor offset for in-page links (matches fixed navbar). */
export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "scroll-mt-[4.5rem] py-16 sm:scroll-mt-20 sm:py-20 md:scroll-mt-24 lg:py-[5.5rem]",
        className
      )}
      {...props}
    />
  );
}
