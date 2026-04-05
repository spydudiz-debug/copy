import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/ui/Section";

export default function BlogLoading() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-[4.5rem]">
        <Section className="bg-[#f5f5f7] pb-16 pt-10 sm:pb-20 sm:pt-12 md:pt-14">
          <Container>
            <div className="mx-auto h-10 max-w-md animate-pulse rounded-lg bg-[#e2e8f0]" />
            <div className="mx-auto mt-6 h-4 max-w-xl animate-pulse rounded bg-[#e2e8f0]" />
            <ul className="mx-auto mt-12 grid max-w-6xl gap-8 sm:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
                  <div className="aspect-[16/9] animate-pulse bg-[#e2e8f0]" />
                  <div className="space-y-3 p-6">
                    <div className="h-3 w-24 animate-pulse rounded bg-[#e2e8f0]" />
                    <div className="h-6 w-full animate-pulse rounded bg-[#e2e8f0]" />
                    <div className="h-4 w-full animate-pulse rounded bg-[#e2e8f0]" />
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
