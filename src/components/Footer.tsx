import Link from "next/link";

import { cn } from "@/lib/cn";
import { SCOP_MEDIA_SITE_URL } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-[4.5rem] bg-[#050814] pt-12 text-white sm:scroll-mt-20 sm:pt-14 md:scroll-mt-24 lg:pt-16"
    >
      <Container>
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 xl:gap-12">
          <div className="max-w-sm lg:max-w-none">
            <p className="text-lg font-bold sm:text-xl">SCOP</p>
            <p className="mt-3 text-sm font-medium leading-relaxed text-white/65 sm:mt-4">
              Premium IPTV with reliable streams, global infrastructure, and support that actually
              answers—built for viewers who want live TV without the cable bill.
            </p>
            <div className="mt-5 flex gap-2.5 sm:mt-6 sm:gap-3">
              {(
                [
                  { href: "https://facebook.com", label: "Facebook", path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
                  {
                    href: "https://twitter.com",
                    label: "Twitter",
                    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                  },
                  {
                    href: "https://instagram.com",
                    label: "Instagram",
                    path: "M7.75 2h8.5A5.75 5.75 0 0022 7.75v8.5A5.75 5.75 0 0016.25 22h-8.5A5.75 5.75 0 002 16.25v-8.5A5.75 5.75 0 007.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 4.25h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-3.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z",
                  },
                ] as const
              ).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15",
                    "transition duration-300 ease-out hover:scale-105 hover:bg-white/20"
                  )}
                  aria-label={s.label}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white/90">IPTV</h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm font-medium text-white/70 sm:mt-4">
              {(
                [
                  ["#subscription", "Subscription"],
                  ["#subscription", "Pricing"],
                  ["#blog", "Blog"],
                  ["#contact", "Contact"],
                ] as const
              ).map(([href, label]) => (
                <li key={label}>
                  <Link href={href} className="transition duration-300 hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white/90">Setup Guide</h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm font-medium text-white/70 sm:mt-4">
              {(
                [
                  ["Firestick", SCOP_MEDIA_SITE_URL],
                  ["Smart TV", SCOP_MEDIA_SITE_URL],
                  ["Android Box", SCOP_MEDIA_SITE_URL],
                  ["Windows PC", SCOP_MEDIA_SITE_URL],
                  ["Formuler", SCOP_MEDIA_SITE_URL],
                ] as const
              ).map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="transition duration-300 hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white/90">IPTV Guides</h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm font-medium text-white/70 sm:mt-4">
              {(
                [
                  ["Getting Started"],
                  ["Troubleshooting"],
                  ["Reviews & Comparisons"],
                  ["News & Updates"],
                ] as const
              ).map(([label]) => (
                <li key={label}>
                  <Link href="#blog" className="transition duration-300 hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="mt-10 border-t border-white/10 sm:mt-12">
        <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:py-8">
          <p className="text-xs font-medium text-white/50">
            © {new Date().getFullYear()} SCOP. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            <button
              type="button"
              className={cn(
                "rounded-full bg-white/10 px-3.5 py-2 text-xs font-semibold ring-1 ring-white/15 sm:px-4",
                "transition duration-300 ease-out hover:bg-white/15 hover:ring-white/25"
              )}
            >
              USA - English
            </button>
            <button
              type="button"
              className={cn(
                "rounded-full bg-white/10 px-3.5 py-2 text-xs font-semibold ring-1 ring-white/15 sm:px-4",
                "transition duration-300 ease-out hover:bg-white/15 hover:ring-white/25"
              )}
            >
              GBP - £
            </button>
          </div>
        </Container>
      </div>
    </footer>
  );
}
