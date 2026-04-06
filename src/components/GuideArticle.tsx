import type { DeviceGuide } from "@/lib/deviceSetupGuides";

function StepLine({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p className="text-[0.9375rem] font-medium leading-relaxed text-[#475569] sm:text-base">
      {parts.map((part, i) => {
        const bold = part.match(/^\*\*(.+)\*\*$/);
        if (bold) {
          return (
            <strong key={i} className="font-semibold text-[#0f172a]">
              {bold[1]}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
}

export function GuideArticle({ guide, index }: { guide: DeviceGuide; index: number }) {
  return (
    <article
      id={guide.id}
      className="scroll-mt-28 rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-lg shadow-black/[0.04] ring-1 ring-black/[0.03] sm:p-8 lg:p-10"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="flex min-w-0 flex-1 gap-4">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#a855f7] to-[#6366f1] text-lg font-bold text-white shadow-md"
            aria-hidden
          >
            {index + 1}
          </span>
          <div className="min-w-0">
            <h2 className="text-xl font-bold tracking-tight text-[#0f172a] sm:text-2xl md:text-[1.625rem]">{guide.title}</h2>
            <p className="mt-3 text-[0.9375rem] font-medium leading-relaxed text-[#64748b] sm:text-base">{guide.intro}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-[#f1f5f9] pt-8">
        <h3 className="text-base font-bold text-[#0f172a] sm:text-lg">Step-by-step</h3>
        <ol className="mt-5 flex list-none flex-col gap-5">
          {guide.steps.map((step, stepIndex) => (
            <li key={stepIndex} className="flex gap-4">
              <span
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1f5f9] text-sm font-bold text-[#6366f1]"
                aria-hidden
              >
                {stepIndex + 1}
              </span>
              <StepLine text={step} />
            </li>
          ))}
        </ol>
      </div>

      {guide.tips && guide.tips.length > 0 ? (
        <div className="mt-8 rounded-xl bg-gradient-to-br from-[#faf5ff] to-[#eef2ff] p-5 sm:p-6">
          <h3 className="text-sm font-bold uppercase tracking-wide text-[#7c3aed]">Tips</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm font-medium leading-relaxed text-[#475569] sm:text-[0.9375rem]">
            {guide.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
