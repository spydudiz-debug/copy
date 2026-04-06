import { SCOP_MEDIA_SITE_URL } from "./constants";

/**
 * Canonical site origin for sitemaps, robots, and absolute URLs.
 * Prefer `NEXT_PUBLIC_SITE_URL` when the live domain differs from the default.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }
  return SCOP_MEDIA_SITE_URL.replace(/\/$/, "");
}
