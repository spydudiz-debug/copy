"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { IPTV_STORE_URL, STEP_GUIDE_PATH } from "@/lib/constants";

const links = [
  { href: IPTV_STORE_URL, label: "IPTV Subscription" },
  { href: STEP_GUIDE_PATH, label: "Setup Guides" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navText = scrolled
    ? "text-[#0f172a] hover:text-[#a855f7]"
    : "text-white hover:text-white/90";
  const logoClass = scrolled ? "text-[#0f172a]" : "text-white";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out",
        scrolled ? "bg-white/95 shadow-md shadow-black/5 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center md:h-[4.5rem]">
        <nav className="flex w-full items-center justify-between" aria-label="Primary">
          <Link
            href="/"
            className={cn(
              "text-lg font-bold tracking-tight transition-colors duration-300 sm:text-xl",
              logoClass
            )}
          >
            SCOP
          </Link>

          <ul className="hidden items-center gap-6 lg:gap-8 xl:gap-10 md:flex">
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "cursor-pointer text-sm font-medium transition-colors duration-300 lg:text-[0.9375rem]",
                    navText
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 md:hidden",
              scrolled ? "text-[#0f172a] hover:bg-black/5" : "text-white hover:bg-white/10"
            )}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "border-t md:hidden",
          mobileOpen ? "block" : "hidden",
          scrolled ? "border-gray-100 bg-white shadow-lg" : "border-white/10 bg-[#0b0f1a]/95 backdrop-blur-md"
        )}
      >
        <Container className="py-3">
          <ul className="flex flex-col gap-0.5">
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "block cursor-pointer rounded-xl px-3 py-3 text-[0.9375rem] font-medium transition-colors duration-300",
                    scrolled ? "text-[#0f172a] hover:bg-black/[0.04]" : "text-white hover:bg-white/10"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
}
