/**
 * Adds 3 unique stock images per blog post (no URL reuse across posts).
 * Run: node scripts/enrich-blog-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const POOL_PATH = path.join(process.cwd(), "scripts/data/stock-images.json");

const IMG_QUERY = "?auto=compress&cs=tinysrgb&w=1200&h=630";

function stripAllImages(md) {
  return md.replace(/!\[[^\]]*\]\([^)]+\)\s*\n?/g, "").replace(/\n{3,}/g, "\n\n");
}

function normalizeUrl(u) {
  const [base] = u.split("?");
  return base + IMG_QUERY;
}

function buildAlts(keyword) {
  const k = keyword || "IPTV";
  return [
    `${k} — smart TV and streaming setup for UK viewers`,
    `${k} — home broadband and reliable streaming context`,
    `${k} — comparing IPTV options and devices in the UK`,
  ];
}

function rebuildBody({ h1Line, intro, main, urls, alts }) {
  const img1 = `![${alts[0]}](${normalizeUrl(urls[0])})`;
  const img2 = `![${alts[1]}](${normalizeUrl(urls[1])})`;
  const img3 = `![${alts[2]}](${normalizeUrl(urls[2])})`;

  let m = main;
  if (m.includes("## Pros & Cons")) {
    m = m.replace(/^## Pros & Cons/m, `${img2}\n\n## Pros & Cons`);
  } else if (m.includes("## FAQs")) {
    m = m.replace(/^## FAQs/m, `${img2}\n\n## FAQs`);
  } else if (m.includes("## Quality")) {
    m = m.replace(/^## Quality/m, `${img2}\n\n## Quality`);
  } else {
    const firstH2 = m.match(/^## .+/m);
    if (firstH2) {
      const pos = m.indexOf(firstH2[0]);
      const afterFirst = m.indexOf("\n## ", pos + 1);
      if (afterFirst !== -1) {
        m = m.slice(0, afterFirst) + `\n\n${img2}\n\n` + m.slice(afterFirst + 2);
      } else {
        m = `${img2}\n\n${m}`;
      }
    }
  }

  if (m.includes("## Conclusion")) {
    m = m.replace(/^## Conclusion/m, `${img3}\n\n## Conclusion`);
  } else {
    m = `${m}\n\n${img3}\n`;
  }

  return `${h1Line}\n\n${intro.trim()}\n\n${img1}\n\n${m.trim()}\n`;
}

function processBody(rawBody, keyword, urls, alts) {
  const stripped = stripAllImages(rawBody).trim();
  const lines = stripped.split("\n");
  const h1Line = lines[0]?.startsWith("# ") ? lines[0] : `# ${keyword}`;
  const afterH1 = lines[0]?.startsWith("# ") ? lines.slice(1).join("\n").trim() : stripped;

  const h2Match = afterH1.match(/\n## /);
  let intro;
  let main;
  if (h2Match) {
    const idx = afterH1.indexOf("\n## ");
    intro = afterH1.slice(0, idx).trim();
    main = afterH1.slice(idx + 1).trim();
  } else {
    const para = afterH1.split(/\n\n+/);
    intro = para.slice(0, 2).join("\n\n").trim();
    main = para.slice(2).join("\n\n").trim();
    if (!main) {
      intro = afterH1;
      main = "";
    }
  }

  return rebuildBody({ h1Line, intro, main, urls, alts });
}

function main() {
  const pool = JSON.parse(fs.readFileSync(POOL_PATH, "utf8"));
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .sort();

  const need = files.length * 3;
  if (pool.length < need) {
    console.error(`Pool too small: need ${need}, have ${pool.length}. Run build-stock-pool.mjs with higher TARGET.`);
    process.exit(1);
  }

  let offset = 0;
  const used = new Set();

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    const keyword = String(data.keyword || file.replace(/\.md$/, "").replace(/-/g, " "));

    const u1 = pool[offset++];
    const u2 = pool[offset++];
    const u3 = pool[offset++];
    [u1, u2, u3].forEach((u) => {
      if (used.has(u)) throw new Error(`Duplicate URL in assignment: ${u}`);
      used.add(u);
    });

    const alts = buildAlts(keyword);
    const newContent = processBody(content, keyword, [u1, u2, u3], alts);
    const out = matter.stringify(newContent, data);
    fs.writeFileSync(filePath, out, "utf8");
    console.log("OK", file);
  }

  console.log(`Done. Used ${offset} unique image URLs from pool (${pool.length} available).`);
}

main();
