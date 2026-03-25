/**
 * Post-build script: inline all CSS into HTML and RSC files.
 *
 * Tailwind v4 outputs CSS that critters cannot parse, so optimizeCss
 * doesn't work. This script does the same job manually:
 * 1. Finds the generated CSS file(s)
 * 2. Reads every static HTML file in .next/server/app
 * 3. Replaces <link rel="stylesheet"> tags with inline <style> blocks
 * 4. Also patches RSC payload files that reference the CSS
 *
 * Run after `next build`: next build --webpack && node scripts/inline-css.mjs
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const CSS_DIR = join(ROOT, ".next", "static", "css");
const APP_DIR = join(ROOT, ".next", "server", "app");

async function findCssFiles() {
  const files = await readdir(CSS_DIR);
  return files.filter((f) => f.endsWith(".css"));
}

async function findFiles(dir, ext) {
  const entries = await readdir(dir, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await findFiles(full, ext)));
    } else if (entry.name.endsWith(ext)) {
      results.push(full);
    }
  }
  return results;
}

async function main() {
  const cssFileNames = await findCssFiles();
  if (cssFileNames.length === 0) {
    console.log("No CSS files found — nothing to inline.");
    return;
  }

  // Read all CSS content
  const cssContents = {};
  for (const name of cssFileNames) {
    cssContents[name] = await readFile(join(CSS_DIR, name), "utf-8");
  }

  console.log(`CSS files found: ${cssFileNames.join(", ")}`);
  console.log(`Total CSS size: ${Object.values(cssContents).reduce((a, b) => a + b.length, 0)} bytes`);

  // Patch HTML files
  const htmlFiles = await findFiles(APP_DIR, ".html");
  console.log(`HTML files found: ${htmlFiles.length}`);

  let patchedHtml = 0;
  for (const htmlPath of htmlFiles) {
    let html = await readFile(htmlPath, "utf-8");
    let changed = false;

    for (const [fileName, css] of Object.entries(cssContents)) {
      // Use string replace instead of regex to avoid lastIndex issues
      const linkPattern = `/_next/static/css/${fileName}`;
      if (html.includes(linkPattern)) {
        // Replace the full <link> tag containing this CSS file
        html = html.replace(
          new RegExp(
            `<link\\s+[^>]*href="\\/_next\\/static\\/css\\/${fileName.replace(/\./g, "\\.")}"[^>]*\\/?>`,
            "g"
          ),
          `<style>${css}</style>`
        );
        changed = true;
      }
    }

    // Also catch any other CSS links we might have missed (different attribute order)
    for (const [fileName, css] of Object.entries(cssContents)) {
      const escapedName = fileName.replace(/\./g, "\\.");
      const altPattern = new RegExp(
        `<link\\s+rel="stylesheet"\\s+href="\\/_next\\/static\\/css\\/${escapedName}"[^>]*\\/?>`,
        "g"
      );
      if (altPattern.test(html)) {
        html = html.replace(
          new RegExp(
            `<link\\s+rel="stylesheet"\\s+href="\\/_next\\/static\\/css\\/${escapedName}"[^>]*\\/?>`,
            "g"
          ),
          `<style>${css}</style>`
        );
        changed = true;
      }
    }

    if (changed) {
      await writeFile(htmlPath, html, "utf-8");
      patchedHtml++;
    }
  }

  console.log(`Patched ${patchedHtml}/${htmlFiles.length} HTML files.`);

  // Also patch .rsc files and .meta files that might reference the CSS
  const rscFiles = await findFiles(APP_DIR, ".rsc");
  let patchedRsc = 0;
  for (const rscPath of rscFiles) {
    let content = await readFile(rscPath, "utf-8");
    let changed = false;

    for (const fileName of cssFileNames) {
      if (content.includes(fileName)) {
        // In RSC payloads, we can't easily inline — but we can check
        // The CSS reference in RSC is typically in the flight data
        // We'll leave RSC alone but log it
        console.log(`  Note: ${rscPath} references ${fileName} (RSC payload — cannot inline)`);
        changed = true;
      }
    }
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error("inline-css failed:", err);
  process.exit(1);
});
