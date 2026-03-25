import { MetadataRoute } from "next";
import { clubs } from "@/data/clubs";
import { nights } from "@/data/nights";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
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

  const posts = getAllPosts();
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: post.updated || post.date,
  }));

  return [...staticPages, ...clubPages, ...nightPages, ...blogPages];
}
