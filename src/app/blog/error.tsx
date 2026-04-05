"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BLOG_PATH } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export default function BlogError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[blog/error]", error.message, error.digest);
  }, [error]);

  return (
    <>
      <Navbar />
      <main className="min-h-[40vh] pt-16 md:pt-[4.5rem]">
        <Container className="py-16 text-center">
          <h1 className="text-2xl font-bold text-[#0f172a]">Something went wrong</h1>
          <p className="mt-3 text-[0.9375rem] font-medium text-[#64748b]">We couldn&apos;t load the blog. Please try again.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#0f172a] px-6 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Try again
            </button>
            <Link
              href={BLOG_PATH}
              className="inline-flex h-11 items-center justify-center rounded-full border border-[#e2e8f0] bg-white px-6 text-sm font-semibold text-[#0f172a] transition hover:bg-[#f8fafc]"
            >
              Back to blog
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
