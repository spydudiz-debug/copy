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
    variant === "nav"
      ? "h-9 w-auto sm:h-10 md:h-11"
      : "h-12 w-auto sm:h-[3.25rem] md:h-14";

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
        width={320}
        height={84}
        className={cn(imgClass, "w-auto object-contain object-left")}
        sizes={variant === "nav" ? "(max-width: 768px) 220px, 280px" : "(max-width: 768px) 260px, 300px"}
        priority={priority}
      />
    </Link>
  );
}
