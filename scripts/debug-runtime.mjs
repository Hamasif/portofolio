import puppeteer from "puppeteer-core";

const url = process.argv[2] ?? "http://localhost:4173";
const tag = process.argv[3] ?? "test";
const candidates = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
];
const fs = await import("node:fs");
const exe = candidates.find((p) => fs.existsSync(p));

const browser = await puppeteer.launch({
  executablePath: exe,
  headless: true,
  args: ["--no-sandbox", "--disable-gpu", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

let pageErrors = 0;
page.on("pageerror", (e) => {
  pageErrors++;
  console.log("[pageerror]", e.message.slice(0, 200));
});

await page.goto(url, { waitUntil: "load", timeout: 60000 });
await new Promise((r) => setTimeout(r, 9000));

const heroInfo = await page.evaluate(() => ({
  h1: document.querySelector("h1")?.textContent ?? null,
  canvases: document.querySelectorAll("canvas").length,
}));
console.log(`[${tag}] hero:`, JSON.stringify(heroInfo));

await page.screenshot({ path: `C:\\Users\\MSIGF6~1\\AppData\\Local\\Temp\\opencode\\hero-${tag}.png` });

// buka modal detail project
await page.evaluate(() => {
  document.querySelector("#portfolio")?.scrollIntoView();
});
await new Promise((r) => setTimeout(r, 2500));
await page.evaluate(() => {
  const card = document.querySelector("#portfolio .group");
  card?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
});
await new Promise((r) => setTimeout(r, 2500));

const modalInfo = await page.evaluate(() => ({
  dialog: !!document.querySelector('[role="dialog"]'),
  title: document.querySelector('[role="dialog"] h3')?.textContent ?? null,
  fiturItems: document.querySelectorAll('[role="dialog"] ul li').length,
}));
console.log(`[${tag}] modal:`, JSON.stringify(modalInfo));

await page.screenshot({ path: `C:\\Users\\MSIGF6~1\\AppData\\Local\\Temp\\opencode\\modal-${tag}.png` });

console.log(`[${tag}] pageErrors=${pageErrors}`);
await browser.close();
