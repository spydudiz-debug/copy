import Link from "next/link";

import { GuideArticle } from "@/components/GuideArticle";
import { STEP_GUIDE_PATH } from "@/lib/constants";
import { deviceSetupGuides } from "@/lib/deviceSetupGuides";

export function StepGuideContent() {
  return (
    <>
      <nav
        aria-label="On this page"
        className="rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm sm:p-6"
      >
        <h2 className="text-sm font-bold uppercase tracking-wide text-[#64748b]">Jump to a guide</h2>
        <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          {deviceSetupGuides.map((g) => (
            <li key={g.id}>
              <Link
                href={`${STEP_GUIDE_PATH}/${g.id}`}
                className="text-sm font-semibold text-[#6366f1] transition hover:text-[#4f46e5] hover:underline"
              >
                {g.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 flex flex-col gap-10 sm:gap-12 lg:gap-14">
        {deviceSetupGuides.map((guide, index) => (
          <GuideArticle key={guide.id} guide={guide} index={index} />
        ))}
      </div>
    </>
  );
}
