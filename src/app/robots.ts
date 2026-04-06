import type { MetadataRoute } from "next";

import { INDEXING_SITEMAP_URL } from "@/lib/sitemap-config";

/**
 * Fixed production sitemap URL (no env / preview host) so GSC always matches property.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: INDEXING_SITEMAP_URL,
  };
}
