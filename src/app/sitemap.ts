import type { MetadataRoute } from "next";

import { buildIndexableSitemap } from "@/lib/sitemap-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildIndexableSitemap();
}
