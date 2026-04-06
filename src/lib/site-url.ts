import { CANONICAL_SITE_ORIGIN } from "./constants";

/**
 * Live site origin for sitemaps and robots.
 * Override with `NEXT_PUBLIC_SITE_URL` when staging or splitting environments.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }
  return CANONICAL_SITE_ORIGIN.replace(/\/$/, "");
}
