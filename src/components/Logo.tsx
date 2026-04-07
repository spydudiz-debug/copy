import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";

type LogoProps = {
  variant?: "nav" | "footer";
  className?: string;
  priority?: boolean;
};

/**
 * Primary brand mark — links home, responsive, works on dark backgrounds (wordmark is light).
 */
export function Logo({ variant = "nav", className, priority }: LogoProps) {
  const hClass =
    variant === "nav" ? "h-9 w-auto sm:h-10 md:h-11" : "h-11 w-auto sm:h-[3.25rem] md:h-14";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex shrink-0 items-center rounded-md outline-offset-4 transition duration-300 ease-out",
        "hover:scale-[1.03] active:scale-[0.99] focus-visible:outline focus-visible:outline-2",
        variant === "nav" ? "focus-visible:outline-[#a855f7]" : "focus-visible:outline-white",
        className,
      )}
    >
      <span
        className={cn(
          "relative inline-flex transition duration-300 ease-out",
          "group-hover:drop-shadow-[0_0_14px_rgba(99,102,241,0.55)]",
        )}
      >
        <Image
          src="/logo.svg"
          alt="IPTV UK TV Logo"
          width={280}
          height={45}
          className={cn(hClass, "w-auto object-contain object-left")}
          sizes={variant === "nav" ? "(max-width: 768px) 200px, 240px" : "(max-width: 768px) 240px, 280px"}
          priority={priority}
        />
      </span>
    </Link>
  );
}
