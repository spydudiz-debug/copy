"use client";

import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const iptvPlans: {
  name: string;
  price: string;
  featured: boolean;
  badge?: string;
  buttonClass: string;
  checkClass: string;
  features: readonly string[];
}[] = [
  {
    name: "Monthly",
    price: "£14.99",
    featured: false,
    buttonClass:
      "bg-[#0ea5e9] shadow-lg shadow-cyan-500/25 hover:brightness-110 focus-visible:ring-cyan-400/40",
    checkClass: "text-[#2563eb]",
    features: [
      "10,000+ live channels",
      "HD & FHD streams",
      "Anti-freeze technology",
      "EPG & catch-up where available",
      "24/7 ticket support",
    ],
  },
  {
    name: "Semi-Annual",
    price: "£44.99",
    featured: true,
    badge: "POPULAR",
    buttonClass:
      "bg-gradient-to-r from-[#a855f7] to-[#6366f1] shadow-lg shadow-purple-500/30 hover:brightness-110 focus-visible:ring-purple-400/40",
    checkClass: "text-[#7c3aed]",
    features: [
      "Everything in Monthly",
      "Better value per month",
      "Priority support queue",
      "Multi-connection options",
      "Instant activation",
    ],
  },
  {
    name: "Annual",
    price: "£48.99",
    featured: false,
    buttonClass: "bg-[#ef4444] shadow-lg shadow-red-500/25 hover:brightness-110 focus-visible:ring-red-400/40",
    checkClass: "text-[#ef4444]",
    features: [
      "Lowest effective monthly price",
      "Long-term stability",
      "Premium channel bundles",
      "VOD library access",
      "Money-back guarantee window",
    ],
  },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("h-5 w-5 shrink-0", className)} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Pricing() {
  const [planType, setPlanType] = useState<"iptv" | "reseller">("iptv");

  return (
    <Section id="subscription" className="bg-[#f5f5f7]">
      <Container>
        <h2 className="text-center text-[1.625rem] font-bold tracking-tight text-[#0f172a] sm:text-3xl md:text-4xl">
          Choose Your Plan
        </h2>

        <div className="mt-8 flex justify-center sm:mt-10">
          <div
            className="inline-flex rounded-full bg-white p-1 shadow-md ring-1 ring-black/5"
            role="group"
            aria-label="Plan type"
          >
            <button
              type="button"
              onClick={() => setPlanType("iptv")}
              className={cn(
                "rounded-full px-4 py-2.5 text-sm font-semibold transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a855f7]/50 sm:px-6",
                planType === "iptv"
                  ? "bg-[#0f172a] text-white shadow-md"
                  : "text-[#6b7280] hover:text-[#0f172a]"
              )}
            >
              IPTV Plans
            </button>
            <button
              type="button"
              onClick={() => setPlanType("reseller")}
              className={cn(
                "rounded-full px-4 py-2.5 text-sm font-semibold transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a855f7]/50 sm:px-6",
                planType === "reseller"
                  ? "bg-[#0f172a] text-white shadow-md"
                  : "text-[#6b7280] hover:text-[#0f172a]"
              )}
            >
              Reseller Plans
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-3 lg:items-stretch">
          {iptvPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "group relative flex flex-col rounded-2xl bg-white p-6 text-center shadow-xl shadow-black/5 ring-1 ring-black/5",
                "transition duration-300 ease-out will-change-transform",
                "hover:-translate-y-1 hover:shadow-2xl",
                "sm:p-8",
                plan.featured &&
                  "lg:z-[1] lg:-mt-1 lg:scale-[1.02] lg:shadow-[0_32px_64px_-16px_rgba(168,85,247,0.25)] lg:ring-purple-200/40"
              )}
            >
              {plan.featured && plan.badge ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-gradient-to-r from-[#ff2a7f] to-[#a855f7] px-3.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wide text-white shadow-lg sm:px-4 sm:text-xs">
                    {plan.badge}
                  </span>
                </div>
              ) : null}

              <h3 className="text-base font-bold text-[#0f172a] sm:text-lg">{plan.name}</h3>
              <p className="mt-3 text-[2rem] font-bold tracking-tight text-[#0f172a] sm:mt-4 sm:text-4xl">
                {plan.price}
              </p>

              <Link
                href="#contact"
                className={cn(
                  "mt-6 inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-white",
                  "transition duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                  plan.buttonClass
                )}
              >
                Get Started
              </Link>

              <ul className="mt-6 flex flex-col gap-2.5 text-left sm:mt-8 sm:gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-medium leading-snug text-[#0f172a]">
                    <CheckIcon className={plan.checkClass} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
