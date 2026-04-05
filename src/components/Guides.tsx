import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";
import { SCOP_MEDIA_SITE_URL } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const guidePosts = [
  {
    title: "Best IPTV for Firestick",
    image: "/images/guide-firestick.jpg",
    alt: "Home cinema screen with movies and streaming entertainment",
  },
  {
    title: "IPTV Buffering: Fixes That Actually Work",
    image: "/images/guide-streaming.jpg",
    alt: "Watching live TV and streaming content at home",
  },
  {
    title: "Smart TV Setup in Under 10 Minutes",
    image: "/images/guide-smarttv.jpg",
    alt: "Modern smart TV in a living room for streaming IPTV",
  },
  {
    title: "Choosing the Right IPTV Plan",
    image: "/images/guide-planning.jpg",
    alt: "Choosing an IPTV subscription and entertainment plan",
  },
] as const;

const deviceGuides = [
  { label: "Firestick", href: "/step-guide#amazon-firestick-fire-tv", type: "fire" as const },
  { label: "Smart TV", href: "/step-guide#smart-tv-samsung-lg-sony", type: "tv" as const },
  { label: "Android Box", href: "/step-guide#android-box-tv-box", type: "android" as const },
];

function DeviceIcon({ type }: { type: "fire" | "tv" | "android" }) {
  if (type === "fire") {
    return (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
        />
      </svg>
    );
  }
  if (type === "tv") {
    return (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    );
  }
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  );
}

export function Guides() {
  return (
    <Section id="blog" className="bg-[#0b0f1a] text-white">
      <Container>
        <div className="grid gap-12 sm:gap-14 lg:grid-cols-2 lg:items-start lg:gap-16 xl:gap-20">
          <div>
            <h2 className="text-[1.375rem] font-bold tracking-tight sm:text-2xl md:text-3xl">
              IPTV Guides &amp; Resources
            </h2>
            <ul className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
              {guidePosts.map((post) => (
                <li key={post.title}>
                  <Link
                    href="#blog"
                    className={cn(
                      "group flex items-center gap-3 rounded-2xl bg-white/5 p-2.5 ring-1 ring-white/10 sm:gap-4 sm:p-3",
                      "transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-xl"
                    )}
                  >
                    <div className="relative h-14 w-[5.5rem] shrink-0 overflow-hidden rounded-xl bg-slate-800 sm:h-16 sm:w-24">
                      <Image src={post.image} alt={post.alt} fill className="object-cover" sizes="96px" />
                    </div>
                    <span className="text-left text-sm font-semibold leading-snug transition-colors duration-300 group-hover:text-[#22c1f1] sm:text-base">
                      {post.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[1.375rem] font-bold tracking-tight sm:text-2xl md:text-3xl">
              Device Setup Guides
            </h2>
            <p className="mt-3 text-sm font-medium leading-relaxed text-white/70 sm:mt-4 sm:text-[0.9375rem] md:text-base">
              Follow device-specific walkthroughs with screenshots, recommended settings, and tips to get
              the smoothest playback on your hardware. Open our full{" "}
              <Link href={SCOP_MEDIA_SITE_URL} className="font-semibold text-[#22c1f1] underline-offset-2 hover:underline">
                IPTV setup guides
              </Link>{" "}
              for Fire TV, Smart TV, Android, PC, and Formuler.
            </p>

            <div className="mt-8 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-3">
              {deviceGuides.map((d) => (
                <Link
                  key={d.label}
                  href={d.href}
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold ring-1 ring-white/15 sm:px-6 sm:py-3",
                    "transition duration-300 ease-out hover:scale-[1.02] hover:bg-white/15 active:scale-[0.98]"
                  )}
                >
                  <DeviceIcon type={d.type} />
                  {d.label}
                </Link>
              ))}
            </div>

            <Link
              href="#blog"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#22c1f1] transition duration-300 hover:translate-x-0.5 hover:text-white sm:mt-8"
            >
              View All Guides
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
