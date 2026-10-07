import https from "https";
import { unstable_cache } from "next/cache";
import { cache } from "react";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";
import filePosts from "@/data/file-posts.json";
import { blogImages } from "@/data/images";
import { WHATSAPP_NUMBER } from "./whatsapp";

// Posts come from two places: the Markdown files in src/content/blog, and the
// shared `site_posts` table in Supabase, written by the dashboard's content API
// (no redeploy needed). A database row with the same slug supersedes the file,
// at the same URL. Both are read at build and ISR regeneration only, never on a
// visitor's request, and both render through the same remark pipeline.
//
// The Markdown files are bundled into src/data/file-posts.json before every
// build (scripts/build-post-manifest.mjs) and imported, never read from disk
// at runtime: on Vercel some server functions (the sitemap) were deployed
// without the src/content/blog folder, so runtime reads there failed.

type FilePostEntry = { data: Record<string, unknown>; content: string };
const fileStore = filePosts as Record<string, FilePostEntry>;
const SITE_KEY = "vortexinnovations/mayfairtonight";
const DB_TIMEOUT_MS = 10_000;

/**
 * Posts hardcode wa.me links in their markdown. Rewrite whatever number they
 * contain to the one from NEXT_PUBLIC_WHATSAPP_NUMBER so blog CTAs stay in sync
 * with the rest of the site without editing every post.
 */
function applyWhatsAppNumber(content: string): string {
  return content.replace(/wa\.me\/\d+/g, `wa.me/${WHATSAPP_NUMBER}`);
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  updated?: string;
  excerpt: string;
  category: string;
  tags: string[];
  readingTime: string;
  content: string;
  htmlContent?: string;
  // Featured image: a database post carries its own; a file post's comes from
  // src/data/images.ts (many file posts have none).
  image?: string;
  imageAlt?: string;
  source: "file" | "db";
}

function estimateReadingTime(content: string): string {
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

function getFileSlugs(): string[] {
  // Throw, never return []: an empty list would cache a 404 for every post and
  // an empty sitemap. A thrown error keeps the last good page live instead.
  const slugs = Object.keys(fileStore);
  if (slugs.length === 0) throw new Error("src/data/file-posts.json has no posts; run scripts/build-post-manifest.mjs");
  return slugs;
}

function getFilePost(slug: string): BlogPost | null {
  const entry = fileStore[slug];
  if (!entry) return null;
  // Same fields and fallbacks as when the files were parsed with gray-matter.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = entry.data as Record<string, any>;
  const content = entry.content;

  return {
    slug,
    title: data.title || "",
    metaTitle: data.metaTitle || data.title || "",
    metaDescription: data.metaDescription || data.excerpt || "",
    date: data.date || "",
    updated: data.updated || undefined,
    excerpt: data.excerpt || "",
    category: data.category || "Nightlife",
    tags: data.tags || [],
    readingTime: data.readingTime || estimateReadingTime(content),
    content: applyWhatsAppNumber(content),
    image: blogImages[slug]?.featured,
    source: "file",
  };
}

type DbPostRow = {
  slug: string;
  title: string;
  excerpt: string | null;
  body_md: string;
  meta_title: string | null;
  meta_description: string | null;
  image: string | null;
  image_alt: string | null;
  category: string | null;
  publish_date: string;
  date_modified: string;
};

// Deliberately node:https, NOT fetch(). Next instruments fetch() with its own
// data cache, and a cached response there can be served stale-while-revalidate:
// on bestclubinlondon, generateMetadata read a stale copy while the page body
// read a fresh one, and a new post was cached with the homepage canonical.
// Reading outside fetch() means each regeneration sees the database as it is now.
function getJson<T>(url: string, headers: Record<string, string>): Promise<T> {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers, timeout: DB_TIMEOUT_MS }, (res) => {
      let body = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => {
        if (!res.statusCode || res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`site_posts read failed: HTTP ${res.statusCode}`));
          return;
        }
        try {
          resolve(JSON.parse(body) as T);
        } catch (err) {
          reject(err);
        }
      });
    });
    req.on("timeout", () => req.destroy(new Error("site_posts read timed out")));
    req.on("error", reject);
  });
}

function dbPost(row: DbPostRow): BlogPost {
  return {
    slug: row.slug,
    title: row.title,
    metaTitle: row.meta_title || row.title,
    metaDescription: row.meta_description || row.excerpt || "",
    date: row.publish_date,
    updated: row.date_modified,
    excerpt: row.excerpt || "",
    category: row.category || "Guides",
    tags: [],
    readingTime: estimateReadingTime(row.body_md),
    content: applyWhatsAppNumber(row.body_md),
    image: row.image || undefined,
    imageAlt: row.image_alt || undefined,
    source: "db",
  };
}

async function getDbPosts(): Promise<BlogPost[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    throw new Error("site_posts: NEXT_PUBLIC_SUPABASE_URL / SUPABASE_PUBLISHABLE_KEY not set");
  }
  const select = "slug,title,excerpt,body_md,meta_title,meta_description,image,image_alt,category,publish_date,date_modified";
  // Errors propagate on purpose: during ISR regeneration a thrown error keeps
  // the last good page live; at build time it fails the deploy, which leaves
  // the previous deployment serving.
  const rows = await getJson<DbPostRow[]>(
    `${url}/rest/v1/site_posts?site=eq.${encodeURIComponent(SITE_KEY)}&status=eq.published&select=${select}&order=publish_date.desc`,
    { apikey: key, Authorization: `Bearer ${key}` }
  );
  return rows.map(dbPost);
}

/**
 * All posts, newest first: files plus database rows, a database row replacing
 * the file with the same slug. Deduplicated per request with React cache(); no
 * module-level cache, which on a warm server would hide new database posts.
 */
async function loadAllPosts(includeDb = true): Promise<BlogPost[]> {
  const bySlug = new Map<string, BlogPost>();
  for (const slug of getFileSlugs()) {
    const p = getFilePost(slug);
    if (p) bySlug.set(slug, p);
  }
  if (includeDb) for (const p of await getDbPosts()) bySlug.set(p.slug, p);
  return [...bySlug.values()].sort((a, b) => (a.date > b.date ? -1 : 1));
}

export const getAllPosts = cache(() => loadAllPosts());

export type ListingPost = Omit<BlogPost, "content">;

function toListing(p: BlogPost): ListingPost {
  const { content, ...rest } = p;
  void content; // bodies are not needed for listings
  return rest;
}

// For route handlers (the sitemap). On Vercel a prerendered route
// handler is served as a static file that neither on-demand nor time-based
// revalidation refreshes, so they render per request from this cross-request
// cached list instead: refreshed every 5 minutes and marked stale by
// /api/revalidate on every publish, so a request never waits on Supabase.
// Bodies are left out (data cache entries are capped at 2 MB). A failed
// refresh is not stored, so the last good list keeps serving.
export const getListingPosts = unstable_cache(
  async (): Promise<ListingPost[]> => (await loadAllPosts()).map(toListing),
  ["mayfairtonight-listing-posts"],
  { tags: ["site-posts"], revalidate: 300 }
);

/** The file posts alone: the fallback when the database is down and nothing is cached yet. */
export async function getFileListingPosts(): Promise<ListingPost[]> {
  return (await loadAllPosts(false)).map(toListing);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return (await getAllPosts()).find((p) => p.slug === slug) ?? null;
}

export async function getPostWithHtml(slug: string): Promise<BlogPost | null> {
  const found = await getPostBySlug(slug);
  if (!found) return null;
  const post = { ...found };
  // Database posts may use GFM tables (the content API allows them); file posts
  // keep the plain pipeline they were written for, so their rendering is unchanged.
  const pipeline = post.source === "db" ? remark().use(remarkGfm).use(html) : remark().use(html);
  const result = await pipeline.process(post.content);
  post.htmlContent = result.toString();
  return post;
}

export async function getAllSlugs(): Promise<string[]> {
  return (await getAllPosts()).map((p) => p.slug);
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  return (await getAllPosts()).filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export async function getAllCategories(): Promise<string[]> {
  return Array.from(new Set((await getAllPosts()).map((p) => p.category)));
}
