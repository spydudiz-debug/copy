import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";

const LOGO = "/images/scoop-media-logo.png";

type SiteLogoProps = {
  variant?: "nav" | "footer";
  className?: string;
  priority?: boolean;
};

export function SiteLogo({ variant = "nav", className, priority }: SiteLogoProps) {
  const imgClass =
    variant === "nav" ? "h-8 w-auto sm:h-9 md:h-10" : "h-10 w-auto sm:h-11 md:h-12";

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center rounded-md outline-offset-4 transition-opacity duration-300 hover:opacity-90 focus-visible:outline focus-visible:outline-2",
        variant === "nav"
          ? "focus-visible:outline-[#a855f7]"
          : "focus-visible:outline-white",
        className
      )}
    >
      <Image
        src={LOGO}
        alt="SCOOP Media"
        width={240}
        height={64}
        className={cn(imgClass, "w-auto")}
        priority={priority}
      />
    </Link>
  );
}
