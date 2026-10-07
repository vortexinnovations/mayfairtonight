/**
 * Pre-build: bundle the Markdown blog posts into src/data/file-posts.json.
 *
 * lib/blog.ts reads posts from this JSON (an import, so it is compiled into
 * every server function) instead of from src/content/blog at runtime. With the
 * webpack build, Vercel deployed some server functions (the sitemap route)
 * without the src/content/blog folder, so any runtime read there failed
 * ("blog content directory missing at runtime"); a bundled import cannot go
 * missing. The JSON is generated, gitignored, and rebuilt on every build/dev.
 *
 * Run: node scripts/build-post-manifest.mjs   (wired as prebuild and predev)
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import matter from "gray-matter";

const ROOT = resolve(import.meta.dirname, "..");
const POSTS_DIR = join(ROOT, "src", "content", "blog");
const OUT = join(ROOT, "src", "data", "file-posts.json");

// gray-matter turns unquoted YAML dates into Date objects; keep YYYY-MM-DD.
function plain(value) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (Array.isArray(value)) return value.map(plain);
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, plain(v)]));
  return value;
}

const files = (await readdir(POSTS_DIR)).filter((f) => f.endsWith(".md")).sort();
if (files.length === 0) throw new Error(`no posts found in ${POSTS_DIR}`);

const posts = {};
for (const file of files) {
  const { data, content } = matter(await readFile(join(POSTS_DIR, file), "utf8"));
  posts[file.replace(/\.md$/, "")] = { data: plain(data), content };
}

await writeFile(OUT, JSON.stringify(posts) + "\n", "utf8");
console.log(`Bundled ${files.length} posts -> src/data/file-posts.json`);
