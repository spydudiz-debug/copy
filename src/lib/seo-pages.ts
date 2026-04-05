import manifest from "../../content/blog/manifest.json";

export type SeoKeywordEntry = {
  keyword: string;
  slug: string;
};

const rawEntries = manifest.keywords as SeoKeywordEntry[];

/** Dedupe by slug (manifest should already be unique) */
const seen = new Set<string>();
export const SEO_KEYWORD_PAGES: SeoKeywordEntry[] = rawEntries.filter((e) => {
  if (seen.has(e.slug)) return false;
  seen.add(e.slug);
  return true;
});

export function getSeoKeywordSlugs(): string[] {
  return SEO_KEYWORD_PAGES.map((e) => e.slug);
}

export function getSeoKeywordPage(slug: string): SeoKeywordEntry | null {
  return SEO_KEYWORD_PAGES.find((e) => e.slug === slug) ?? null;
}

/** Meta description ~150–160 chars, keyword-rich */
export function buildSeoDescription(keyword: string): string {
  const d = `${keyword}: SCOP Media explains internet TV, IPTV apps, and subscription options—plus links to setup guides.`;
  if (d.length <= 160) return d;
  return `${d.slice(0, 157)}…`;
}

export function buildSeoParagraph(keyword: string): string {
  return `This page is a short introduction to ${keyword} in the context of internet television (IPTV). For step-by-step installation on Fire TV, Smart TV, Android, PC, and more, open our setup guides. To compare IPTV subscription plans, visit the SCOP Media store.`;
}
