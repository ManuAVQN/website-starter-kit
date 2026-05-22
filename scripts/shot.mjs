#!/usr/bin/env node
// Capture d'écran rapide pour le workflow Claude.
//
// Usage :
//   node scripts/shot.mjs <url> [mode] [target] [out] [pad]
//
// Modes :
//   viewport   → capture juste ce qui est visible à l'écran (défaut)
//   full       → capture toute la page (avec scroll)
//   element    → capture un élément précis (CSS selector)
//   around     → capture un élément précis avec une marge autour (pad en pixels)
//
// Exemples :
//   node scripts/shot.mjs http://localhost:3000
//   node scripts/shot.mjs http://localhost:3000 full
//   node scripts/shot.mjs http://localhost:3000 element "#bloc-2" /tmp/bloc2.png
//   node scripts/shot.mjs http://localhost:3000 around "#bloc-2" /tmp/bloc2.png 80

import { chromium } from "playwright";

const url = process.argv[2];
const mode = process.argv[3] || "viewport";
const target = process.argv[4];
const out = process.argv[5] || "/tmp/site.png";
const pad = parseInt(process.argv[6] || "0", 10);

if (!url) {
  console.error("Usage: node scripts/shot.mjs <url> [mode] [target] [out] [pad]");
  process.exit(1);
}

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  ignoreHTTPSErrors: true,
});
const page = await ctx.newPage();
await page.goto(url, { waitUntil: "networkidle" });

if (mode === "full") {
  await page.screenshot({ path: out, fullPage: true });
} else if (mode === "element") {
  if (!target) throw new Error("element mode needs a CSS selector as 4th arg");
  await page.locator(target).screenshot({ path: out });
} else if (mode === "around") {
  if (!target) throw new Error("around mode needs a CSS selector as 4th arg");
  const box = await page.locator(target).boundingBox();
  if (!box) throw new Error(`element ${target} not found`);
  const docSize = await page.evaluate(() => ({
    w: document.documentElement.scrollWidth,
    h: document.documentElement.scrollHeight,
  }));
  await page.screenshot({
    path: out,
    fullPage: true,
    clip: {
      x: Math.max(0, box.x - pad),
      y: Math.max(0, box.y - pad),
      width: Math.min(docSize.w, box.width + pad * 2),
      height: Math.min(docSize.h, box.height + pad * 2),
    },
  });
} else {
  await page.screenshot({ path: out });
}

await browser.close();
console.log(out);
