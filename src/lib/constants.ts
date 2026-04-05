/** Primary site URL used for setup guide and marketing links */
export const SCOP_MEDIA_SITE_URL = "https://scopmedia.com" as const;

/**
 * Full URL to the IPTV setup guides page. Deploy this app’s `/step-guide` route at this path on
 * scopmedia.com so nav links show the same guides on the live site.
 */
export const SCOP_MEDIA_STEP_GUIDE_URL = `${SCOP_MEDIA_SITE_URL}/step-guide` as const;

export const IPTV_STORE_URL =
  "https://scopmedia.com/index.php?rp=/store/iptv-subscriptions" as const;

export const RESELLER_PACKAGES_URL =
  "https://scopmedia.com/index.php?rp=/store/reseller-packages" as const;
