import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const locations = [
  { label: "USA", count: "+10" },
  { label: "Germany", count: "+6" },
  { label: "England", count: "+4" },
  { label: "Belgium", count: "+3" },
] as const;

export function Datacenter() {
  return (
    <Section className="bg-[#0b0f1a] text-white">
      <Container>
        <h2 className="text-center text-[1.625rem] font-bold tracking-tight sm:text-3xl md:text-4xl">
          Datacenter Locations
        </h2>

        <div className="mt-10 grid gap-8 sm:mt-12 sm:gap-10 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
          <ul className="flex flex-col gap-3 sm:gap-4">
            {locations.map((loc) => (
              <li key={loc.label}>
                <div
                  className={cn(
                    "flex items-center justify-between rounded-full bg-white/5 px-4 py-3.5 ring-1 ring-white/10 sm:px-6 sm:py-4",
                    "transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-lg"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#22c1f1]/20 text-[#22c1f1] sm:h-10 sm:w-10">
                      <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                        />
                      </svg>
                    </span>
                    <span className="text-[0.9375rem] font-semibold sm:text-base">
                      {loc.label}{" "}
                      <span className="font-bold text-[#22c1f1]">({loc.count})</span>
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="relative lg:justify-self-center">
            <div className="absolute -inset-4 rounded-3xl bg-[#22c1f1]/10 blur-3xl sm:-inset-6" aria-hidden />
            <div
              className={cn(
                "relative flex min-h-[280px] flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#111827] to-[#0b0f1a] p-8 shadow-2xl ring-1 ring-white/10 sm:min-h-[320px] sm:p-10",
                "transition duration-300 ease-out hover:shadow-[0_0_60px_-10px_rgba(34,193,241,0.45)]"
              )}
            >
              <div className="relative h-40 w-40 sm:h-48 sm:w-48" aria-hidden>
                <div className="absolute inset-0 rounded-full bg-[#22c1f1]/20 blur-xl" />
                <svg
                  viewBox="0 0 200 200"
                  className="relative h-full w-full text-[#22c1f1]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                >
                  <circle cx="100" cy="100" r="78" className="opacity-40" />
                  <ellipse cx="100" cy="100" rx="78" ry="28" className="opacity-60" />
                  <ellipse cx="100" cy="100" rx="78" ry="52" className="opacity-40" />
                  <ellipse cx="100" cy="100" rx="28" ry="78" className="opacity-50" />
                  <path d="M22 100h156M100 22v156" className="opacity-30" />
                  <path d="M34 66c44 18 88 18 132 0M34 134c44-18 88-18 132 0" className="opacity-35" />
                </svg>
              </div>
              <p className="mt-5 text-lg font-bold tracking-tight sm:mt-6 sm:text-xl">Global Network</p>
              <p className="mt-2 max-w-sm text-center text-sm font-medium leading-relaxed text-white/70">
                Redundant uplinks and regional hubs keep latency low for viewers worldwide.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
