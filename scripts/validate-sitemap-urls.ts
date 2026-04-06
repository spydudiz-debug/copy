/**
 * Post-deploy / CI: verify every sitemap URL returns HTTP 200 with no redirect hop.
 *
 * Usage (from repo root, after production is live):
 *   npx tsx scripts/validate-sitemap-urls.ts
 *
 * Fails (exit 1) on: non-200, 3xx (redirect), timeout, network error.
 */

import { collectSitemapAbsoluteUrls } from "../src/lib/sitemap-config";

const TIMEOUT_MS = 20_000;
const CONCURRENCY = 6;

async function checkUrl(url: string): Promise<{ ok: boolean; detail: string }> {
  try {
    const res = await fetch(url, {
      method: "GET",
      redirect: "manual",
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: {
        "User-Agent": "SitemapValidator/1.0 (+https://iptvuk-tv.com)",
        Accept: "text/html,application/xhtml+xml",
      },
    });

    if (res.status >= 300 && res.status < 400) {
      const loc = res.headers.get("location") ?? "";
      return { ok: false, detail: `redirect ${res.status} → ${loc}` };
    }
    if (res.status !== 200) {
      return { ok: false, detail: `HTTP ${res.status}` };
    }
    return { ok: true, detail: "200" };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return { ok: false, detail: msg };
  }
}

async function poolMap<T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const results: R[] = [];
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx]!);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => worker()));
  return results;
}

async function main() {
  const urls = collectSitemapAbsoluteUrls();
  console.log(`Checking ${urls.length} URLs (no redirects, 200 only)…\n`);

  const outcomes = await poolMap(urls, CONCURRENCY, async (url) => {
    const r = await checkUrl(url);
    return { url, ...r };
  });

  const bad = outcomes.filter((o) => !o.ok);
  for (const o of outcomes) {
    const mark = o.ok ? "✓" : "✗";
    console.log(`${mark} ${o.url} — ${o.detail}`);
  }

  if (bad.length > 0) {
    console.error(`\nFailed: ${bad.length} / ${urls.length}`);
    process.exit(1);
  }
  console.log(`\nAll ${urls.length} URLs returned 200 with no redirect.`);
}

main();
