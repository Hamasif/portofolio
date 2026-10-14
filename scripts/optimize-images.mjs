import sharp from "sharp";
import { readdirSync } from "node:fs";
import { join } from "node:path";

const jobs = [
  { dir: "src/assets/projects", width: 1280, quality: 80 },
  { dir: "src/assets/certificates", width: 1280, quality: 80 },
  { dir: "src/assets/companies", width: 256, quality: 85 },
  { dir: "src/assets/tech", width: 256, quality: 85 },
  { dir: "src/assets/images", width: 900, quality: 82 },
  { dir: "src/assets/textures", width: 1024, quality: 85 },
];

let totalBefore = 0;
let totalAfter = 0;

for (const job of jobs) {
  for (const file of readdirSync(job.dir)) {
    if (!/\.(png|jpe?g)$/i.test(file)) continue;

    const input = join(job.dir, file);
    const output = input.replace(/\.(png|jpe?g)$/i, ".webp");

    const meta = await sharp(input)
      .rotate()
      .resize({ width: job.width, withoutEnlargement: true })
      .webp({ quality: job.quality })
      .toFile(output);

    const before = (await import("node:fs")).statSync(input).size;
    totalBefore += before;
    totalAfter += meta.size;

    console.log(
      `${file} -> ${file.replace(/\.(png|jpe?g)$/i, ".webp")}  ` +
        `${Math.round(before / 1024)}KB -> ${Math.round(meta.size / 1024)}KB` +
        `  (${meta.width}x${meta.height})`
    );
  }
}

console.log(
  `\nTOTAL: ${Math.round(totalBefore / 1024)}KB -> ${Math.round(totalAfter / 1024)}KB` +
    `  (-${Math.round((1 - totalAfter / totalBefore) * 100)}%)`
);
