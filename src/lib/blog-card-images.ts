/**
 * Deterministic featured images for blog cards and post heroes.
 * URLs come from a bundled pool of Pexels images (pre-verified HTTP 200).
 * Thematic `pickPool` only affects alt text variety; index mixes slug + theme.
 */

import blogCardImagePool from "@/data/blog-card-image-pool.json";

const VERIFIED_URLS = blogCardImagePool as string[];

function idx(slug: string, len: number): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (Math.imul(31, h) + slug.charCodeAt(i)) | 0;
  return Math.abs(h) % Math.max(1, len);
}

function pickPool(slug: string, haystack: string): PoolKey {
  const s = haystack.toLowerCase();

  if (
    /\b(football|soccer|cricket|ufc|boxing|sports?|stadium|premier league|bein|sky sports|bt sport|live sport|match)\b/i.test(
      s,
    )
  ) {
    return "sports";
  }
  if (
    /\b(legal|law|illegal|piracy|copyright|legality|safe or not|is iptv legal|risk)\b/i.test(s) ||
    /\b(iptv truth|iptv facts)\b/i.test(s)
  ) {
    return "legal";
  }
  if (
    /\b(m3u8?|playlist|xtream|panel|server|reseller|codes?|links?|smarters|xciptv|tivimate)\b/i.test(s)
  ) {
    return "devTech";
  }
  if (
    /\b(firestick|fire tv|android tv|smart tv|iptv box|iptv app|ios|iphone|ipad|mac|windows)\b/i.test(s) ||
    /\b(iptv android|iptv ios|iptv mac|iptv windows|iptv smart tv|iptv firestick|iptv for android|iptv for smart tv|iptv for firestick)\b/i.test(
      s,
    )
  ) {
    return "devices";
  }
  if (
    /\b(uk iptv|british|uk tv|uk live|london|subscription uk|firestick uk|iptv uk guide|internet tv uk|streaming uk|affordable iptv uk|premium iptv uk|reliable iptv uk|buy iptv uk|iptv deals uk|iptv for sale uk|top iptv service uk|uk iptv provider|iptv service uk|iptv setup guide uk|how to choose iptv uk|best iptv for uk users|iptv uk 2026|legal iptv uk|iptv legal uk|iptv law uk|4k iptv uk|uk premium channels|uk sports streaming|best iptv subscription in uk)\b/i.test(
      s,
    )
  ) {
    return "uk";
  }
  if (/\b(indian|pakistani|usa iptv|arabic)\b/i.test(s)) {
    return "world";
  }

  return "default";
}

type PoolKey =
  | "sports"
  | "legal"
  | "devTech"
  | "devices"
  | "uk"
  | "world"
  | "default";

const ALT_FRAG: Record<PoolKey, string> = {
  sports: "live sports streaming",
  legal: "streaming law and viewer rights",
  devTech: "IPTV technology and playlists",
  devices: "devices and apps for streaming TV",
  uk: "UK TV and streaming",
  world: "international TV streaming",
  default: "internet TV and streaming at home",
};

export type ResolvedFeaturedImage = { url: string; alt: string };

export function resolveBlogFeaturedImage(slug: string, keyword: string): ResolvedFeaturedImage {
  const haystack = `${keyword} ${slug.replace(/-/g, " ")}`;
  const poolKey = pickPool(slug, haystack);
  const n = VERIFIED_URLS.length;
  const i = idx(`${slug}:${poolKey}`, n);
  return {
    url: VERIFIED_URLS[i]!,
    alt: `${keyword || slug} — ${ALT_FRAG[poolKey]}`,
  };
}
