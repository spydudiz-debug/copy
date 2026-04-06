/**
 * Probes Pexels CDN for valid photo IDs and writes scripts/data/stock-images.json
 * Run once: node scripts/build-stock-pool.mjs
 */
import fs from "node:fs";
import path from "node:path";
import https from "node:https";

const OUT = path.join(process.cwd(), "scripts/data/stock-images.json");
const TARGET = 450;

function head(url) {
  return new Promise((resolve) => {
    https
      .get(url, (res) => {
        res.resume();
        resolve(res.statusCode);
      })
      .on("error", () => resolve(0));
  });
}

function pexelsUrl(id) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630`;
}

const ranges = [
  [260000, 265000],
  [265000, 270000],
  [2880000, 2890000],
  [3180000, 3190000],
  [1180000, 1182000],
  [1360000, 1370000],
  [3860000, 3870000],
  [1000000, 1010000],
];

const found = new Set();

async function probeBatch(ids) {
  const results = await Promise.all(
    ids.map(async (id) => {
      const code = await head(pexelsUrl(id));
      return code === 200 ? pexelsUrl(id) : null;
    }),
  );
  for (const u of results) {
    if (u) found.add(u);
  }
}

outer: for (const [a, b] of ranges) {
  for (let start = a; start < b && found.size < TARGET; start += 50) {
    const batch = [];
    for (let id = start; id < start + 50 && id < b; id++) batch.push(id);
    await probeBatch(batch);
    if (found.size >= TARGET) break outer;
    process.stdout.write(`\r${found.size}/${TARGET}`);
  }
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
const arr = [...found].slice(0, TARGET);
fs.writeFileSync(OUT, JSON.stringify(arr, null, 0), "utf8");
console.log("\nWrote", arr.length, "URLs to", OUT);
