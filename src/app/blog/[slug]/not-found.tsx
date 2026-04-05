import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BLOG_PATH } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export default function BlogPostNotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[40vh] pt-16 md:pt-[4.5rem]">
        <Container className="py-16 text-center">
          <h1 className="text-2xl font-bold text-[#0f172a]">Article not found</h1>
          <p className="mt-3 text-[0.9375rem] font-medium text-[#64748b]">This post may have moved or doesn&apos;t exist.</p>
          <Link href={BLOG_PATH} className="mt-8 inline-flex font-semibold text-[#6366f1] hover:underline">
            ← Back to blog
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}
