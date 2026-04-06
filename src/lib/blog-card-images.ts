/**
 * Keyword-aware Unsplash images for blog cards and post heroes.
 * Deterministic per slug; only images.unsplash.com (next.config remotePatterns).
 */

const Q = "?w=1200&h=630&fit=crop&q=80";

function u(id: string) {
  return `https://images.unsplash.com/${id}${Q}`;
}

function idx(slug: string, len: number): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (Math.imul(31, h) + slug.charCodeAt(i)) | 0;
  return Math.abs(h) % Math.max(1, len);
}

function uniq(ids: string[]) {
  return [...new Set(ids)];
}

/** Verified Unsplash photo-* ids used across the project / common stock */
const SPORTS = uniq([
  "photo-1574629810360-7efbbe195018",
  "photo-1579952363873-27f3adead43c",
  "photo-1459865264687-49e6a9c17b08",
  "photo-1521412644187-c49fa049e84d",
  "photo-1575367477473-9e0bee975b2d",
  "photo-1517649763962-0c623866c6e4",
  "photo-1502877341263-554561e674cf",
  "photo-1577223623263-e5b8f71c4b1e",
  "photo-1622279451047-80811d8353a3",
  "photo-1504450758481-7338eba7524a",
  "photo-1519861531473-920026218a02",
  "photo-1595435934249-5df7ed86e1c0",
  "photo-1508098682722-e99c43a406b2",
  "photo-1540747913346-19e32dc3e97e",
  "photo-1461896836934-fb8a5a41a5b8",
  "photo-1614730321146-b6fa6a46bcb4",
  "photo-1551958219-ac608a2d0e1e",
  "photo-1493711662062-fa541adb3fc8",
  "photo-1522778119026-d647f0596c20",
]);

const LEGAL = uniq([
  "photo-1589829547916-cf0855b1e420",
  "photo-1450101499163-c8848c66ca85",
  "photo-1505664194779-8beaceb93744",
  "photo-1521791055366-05d430d2749e",
  "photo-1523240795612-9a054b0db644",
  "photo-1507679799987-c73779587ccf",
  "photo-1589994965851-a29189d06499",
  "photo-1505664063603-28e48ca204eb",
  "photo-1521791136064-7986c2920216",
  "photo-1563986768609-322da13575f3",
  "photo-1563013544-824ae1b704d3",
  "photo-1544197150-b99a580bb7a8",
]);

const DEV_TECH = uniq([
  "photo-1544197150-b99a580bb7a8",
  "photo-1460925895917-afdab827c52f",
  "photo-1555066931-4365d14bab8c",
  "photo-1558494949-ef010cbdcc31",
  "photo-1515879218367-8466d910aaa4",
  "photo-1504639725590-04d098436dc7",
  "photo-1516321318423-f06f85e504b3",
  "photo-1550751827-4bd374c3f58b",
  "photo-1531482615713-2afd69097998",
  "photo-1518770660439-4636190af475",
  "photo-1517077304055-6e89abbf09b0",
  "photo-1504384308090-c894fdcc538d",
  "photo-1522071820081-009f0129c71c",
  "photo-1531297484001-80022131f5a1",
  "photo-1498050108023-c5249f4df085",
  "photo-1461749280684-dccba630e2f6",
  "photo-1555066931-4365d14bab8c",
  "photo-1504639725590-04d098436dc7",
]);

const DEVICES = uniq([
  "photo-1511707171634-5f897ff02aa9",
  "photo-1526498460520-4c076283dc9e",
  "photo-1533750516457-a7f992034fec",
  "photo-1512941937669-90a1b58e7e9c",
  "photo-1611162616475-46b635cb6868",
  "photo-1574375927938-d5a98eefe9e6",
  "photo-1593784991094-a6f1b7d0c5d0",
  "photo-1498049794561-778288e09079",
  "photo-1522869635100-9f4c5e86aa37",
  "photo-1505740420928-5e560c06d30e",
  "photo-1563013544-824ae1b704d3",
  "photo-1517336714731-489489fd4508",
  "photo-1556656793-08538906a9f8",
  "photo-1563986768609-322da13575f3",
  "photo-1434030216411-0b793f4b4173",
  "photo-1485846234645-a62644f84728",
  "photo-1601972602237-8c79241ea74a",
  "photo-1611162617474-5b21e737e893",
  "photo-1504711434969-e33886168f5c",
  "photo-1558618666-fcd25c85cd64",
]);

const UK_REGION = uniq([
  "photo-1529655683825-aba9b3e77334",
  "photo-1513635269977-59696318aa48",
  "photo-1520986606214-8b456732c813",
  "photo-1502602898657-3e91760cbb34",
  "photo-1506905925346-21bda4d32df4",
  "photo-1529257414772-1960b7bea539",
  "photo-1513635269977-59696318aa48",
  "photo-1529655683825-aba9b3e77334",
  "photo-1520986606214-8b456732c813",
  "photo-1502602898657-3e91760cbb34",
  "photo-1529655683825-aba9b3e77334",
  "photo-1513635269977-59696318aa48",
]);

const WORLD_TV = uniq([
  "photo-1529257414772-1960b7bea539",
  "photo-1460925895917-afdab827c52f",
  "photo-1521737604893-d14cc237f11d",
  "photo-1522071820081-009f0129c71c",
  "photo-1556742049-0c0ed38c1e3a",
  "photo-1563986768609-322da13575f3",
  "photo-1451188507581-efc96a62b0e1",
  "photo-1504711434969-e33886168f5c",
  "photo-1558618666-fcd25c85cd64",
  "photo-1526498460520-4c076283dc9e",
  "photo-1511707171634-5f897ff02aa9",
  "photo-1593784991094-a6f1b7d0c5d0",
  "photo-1498049794561-778288e09079",
  "photo-1485846234645-a62644f84728",
  "photo-1522869635100-9f4c5e86aa37",
  "photo-1517336714731-489489fd4508",
  "photo-1574375927938-d5a98eefe9e6",
  "photo-1505740420928-5e560c06d30e",
  "photo-1434030216411-0b793f4b4173",
  "photo-1611162617474-5b21e737e893",
]);

const STREAMING_HOME = uniq([
  "photo-1593784991094-a6f1b7d0c5d0",
  "photo-1574375927938-d5a98eefe9e6",
  "photo-1498049794561-778288e09079",
  "photo-1485846234645-a62644f84728",
  "photo-1522869635100-9f4c5e86aa37",
  "photo-1517336714731-489489fd4508",
  "photo-1504711434969-e33886168f5c",
  "photo-1611162617474-5b21e737e893",
  "photo-1558618666-fcd25c85cd64",
  "photo-1526498460520-4c076283dc9e",
  "photo-1512941937669-90a1b58e7e9c",
  "photo-1505740420928-5e560c06d30e",
  "photo-1434030216411-0b793f4b4173",
  "photo-1611162616475-46b635cb6868",
  "photo-1563013544-824ae1b704d3",
  "photo-1601972602237-8c79241ea74a",
  "photo-1556656793-08538906a9f8",
  "photo-1563986768609-322da13575f3",
  "photo-1451188507581-efc96a62b0e1",
  "photo-1593359677879-a431bb5327d9",
  "photo-1470225620780-dba8ba3626e2",
  "photo-1556742049-0c0ed38c1e3a",
]);

const POOLS = {
  sports: SPORTS,
  legal: LEGAL,
  devTech: DEV_TECH,
  devices: DEVICES,
  uk: UK_REGION,
  world: WORLD_TV,
  default: STREAMING_HOME,
};

function pickPool(slug: string, haystack: string): keyof typeof POOLS {
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

const ALT_FRAG: Record<keyof typeof POOLS, string> = {
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
  const pool = POOLS[poolKey];
  const id = pool[idx(slug, pool.length)]!;
  return {
    url: u(id),
    alt: `${keyword || slug} — ${ALT_FRAG[poolKey]}`,
  };
}
