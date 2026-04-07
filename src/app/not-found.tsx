import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { Navbar } from "@/components/Navbar";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[50vh] pt-16 md:pt-[4.5rem]">
        <Container className="flex flex-col items-center py-20 text-center sm:py-24">
          <Logo className="rounded-lg bg-[#0f172a] px-3 py-2 shadow-md ring-1 ring-white/10" />
          <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-[#6366f1]">404</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">Page not found</h1>
          <p className="mt-3 max-w-md text-[0.9375rem] font-medium leading-relaxed text-[#64748b]">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-10 inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#2563eb] to-[#7c3aed] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg"
          >
            Back to home
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}
