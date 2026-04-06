import { CANONICAL_SITE_ORIGIN } from "./constants";

/**
 * Normalize origin: https only, no trailing slash (sitemap / robots consistency).
 */
export function normalizeSiteOrigin(raw: string): string {
  let u = raw.trim().replace(/\/$/, "");
  if (u.startsWith("http://")) {
    u = `https://${u.slice("http://".length)}`;
  }
  return u;
}

/**
 * Public site origin for sitemaps, robots, and canonical bases.
 *
 * - Uses `NEXT_PUBLIC_SITE_URL` when set (staging / alternate host).
 * - Otherwise uses `CANONICAL_SITE_ORIGIN` (https://iptvuk-tv.com).
 *
 * Intentionally does **not** use `VERCEL_URL`: that produced preview hostnames in
 * the sitemap and caused mass GSC errors when the Search Console property is the
 * custom domain.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return normalizeSiteOrigin(fromEnv);
  return normalizeSiteOrigin(CANONICAL_SITE_ORIGIN);
}
