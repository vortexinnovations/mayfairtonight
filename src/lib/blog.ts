import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

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
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((f) => f.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      return getPostBySlug(slug);
    })
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

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
    content,
  };
}

export async function getPostWithHtml(slug: string): Promise<BlogPost | null> {
  const post = getPostBySlug(slug);
  if (!post) return null;

  const result = await remark().use(html).process(post.content);
  post.htmlContent = result.toString();
  return post;
}

export function getAllSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const cats = new Set(posts.map((p) => p.category));
  return Array.from(cats);
}

function estimateReadingTime(content: string): string {
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}
