import { MetadataRoute } from "next";
import { clubs } from "@/data/clubs";
import { nights } from "@/data/nights";
import { getFileListingPosts, getListingPosts, type ListingPost } from "@/lib/blog";

// Rendered per request from the cached post list in lib/blog.ts, which
// /api/revalidate marks stale on every publish. Not prerendered: on Vercel a
// prerendered sitemap was served as a static file that neither on-demand nor
// time-based revalidation refreshed, so new posts only appeared after a deploy.
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://mayfairtonight.com";

  const staticPages = [
    { url: baseUrl, changeFrequency: "daily" as const, priority: 1 },
    {
      url: `${baseUrl}/this-weekend`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/where-to-go-tonight`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-the-editor`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/clubs`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dress-code`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    // Hub pages
    {
      url: `${baseUrl}/mayfair-nightclubs`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/best-nightclubs-in-mayfair`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mayfair-nightlife-guide`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/where-to-go-out-in-mayfair`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mayfair-club-dress-code`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mayfair-vip-nightlife`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    // Comparison pages
    {
      url: `${baseUrl}/best-hip-hop-clubs-in-mayfair`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-celebrity-clubs-in-mayfair`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-clubs-for-groups-in-mayfair`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-clubs-for-tables-in-mayfair`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/girls-guestlist-clubs-mayfair`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mayfair-clubs-by-music-style`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    // Support pages
    {
      url: `${baseUrl}/mayfair-club-entry-rules`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mayfair-club-guestlist-guide`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/how-mayfair-nightclub-tables-work`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mayfair-night-out-itinerary`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/best-areas-around-hanover-square-and-berkeley-square-for-nightlife`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  const clubPages = clubs.map((club) => ({
    url: `${baseUrl}/clubs/${club.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const nightPages = nights.map((night) => ({
    url: `${baseUrl}/nights/${night.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // If the database is down and nothing is cached yet, list the file posts
  // rather than fail the whole sitemap.
  let posts: ListingPost[];
  try {
    posts = await getListingPosts();
  } catch (err) {
    console.error("sitemap: post list unavailable, listing file posts only", err);
    posts = await getFileListingPosts();
  }
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: post.updated || post.date,
  }));

  return [...staticPages, ...clubPages, ...nightPages, ...blogPages];
}
