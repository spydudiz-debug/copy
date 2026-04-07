/** Canonical origin for this domain (sitemap, robots, metadataBase, absolute SEO URLs) */
export const CANONICAL_SITE_ORIGIN = "https://iptvuk-tv.com" as const;

/** In-app path for IPTV setup guides (same site, not external redirect) */
export const STEP_GUIDE_PATH = "/step-guide" as const;

/** SEO blog listing and posts */
export const BLOG_PATH = "/blog" as const;

/** External checkout (billing host; link text in UI uses “IPTV UK TV”) */
export const IPTV_STORE_URL =
  "https://scopmedia.com/index.php?rp=/store/iptv-subscriptions" as const;

export const RESELLER_PACKAGES_URL =
  "https://scopmedia.com/index.php?rp=/store/reseller-packages" as const;
