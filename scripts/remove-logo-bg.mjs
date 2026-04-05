/**
 * One-off: make near-black pixels transparent on the SCOOP Media PNG.
 * Run: node scripts/remove-logo-bg.mjs
 */
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
/** Drop a flat black-bg PNG here, run this script, then delete the source if you like */
const input = join(root, "public", "images", "_scoop-logo-source.png");
const output = join(root, "public", "images", "scoop-media-logo.png");

/** Pixels darker than this (all channels) become fully transparent */
const BLACK_THRESHOLD = 42;

async function main() {
  const buf = await readFile(input);
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  if (channels !== 4) throw new Error(`Expected RGBA, got ${channels} channels`);

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r <= BLACK_THRESHOLD && g <= BLACK_THRESHOLD && b <= BLACK_THRESHOLD) {
      data[i + 3] = 0;
    }
  }

  await sharp(data, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(output);

  console.log("Wrote", output);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
