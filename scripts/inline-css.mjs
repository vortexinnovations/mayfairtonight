/**
 * Post-build script: inline all CSS into HTML files.
 *
 * Tailwind v4 outputs CSS that critters cannot parse, so optimizeCss
 * doesn't work. This script does the same job manually:
 * 1. Finds the generated CSS file
 * 2. Reads every static HTML file in .next/server/app
 * 3. Replaces the <link rel="stylesheet"> tag with an inline <style> block
 *
 * Run after `next build`: npm run build && node scripts/inline-css.mjs
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const CSS_DIR = join(ROOT, ".next", "static", "css");
const APP_DIR = join(ROOT, ".next", "server", "app");

async function findCssFile() {
  const files = await readdir(CSS_DIR);
  const css = files.find((f) => f.endsWith(".css"));
  if (!css) throw new Error("No CSS file found in .next/static/css/");
  return join(CSS_DIR, css);
}

async function findHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await findHtmlFiles(full)));
    } else if (entry.name.endsWith(".html")) {
      results.push(full);
    }
  }
  return results;
}

async function main() {
  const cssPath = await findCssFile();
  const cssContent = await readFile(cssPath, "utf-8");
  const htmlFiles = await findHtmlFiles(APP_DIR);

  console.log(`CSS file: ${cssPath} (${cssContent.length} bytes)`);
  console.log(`HTML files found: ${htmlFiles.length}`);

  let patched = 0;
  for (const htmlPath of htmlFiles) {
    let html = await readFile(htmlPath, "utf-8");

    // Match the <link rel="stylesheet" href="/_next/static/css/..."> tag
    const linkRegex =
      /<link\s+rel="stylesheet"\s+href="\/_next\/static\/css\/[^"]+"\s*[^>]*\/?>/g;

    if (linkRegex.test(html)) {
      html = html.replace(linkRegex, `<style>${cssContent}</style>`);
      await writeFile(htmlPath, html, "utf-8");
      patched++;
    }
  }

  console.log(`Patched ${patched}/${htmlFiles.length} HTML files — CSS inlined.`);
}

main().catch((err) => {
  console.error("inline-css failed:", err);
  process.exit(1);
});
