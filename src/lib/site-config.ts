import { getSiteUrl } from "./site-url";

/**
 * Resolved at module load (build/request). Matches `getSiteUrl()` for sitemap assembly.
 * Prefer `getSiteUrl()` if you need a fresh read in the same process.
 */
export const SITE_URL = getSiteUrl();
