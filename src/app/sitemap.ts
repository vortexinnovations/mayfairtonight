import { MetadataRoute } from "next";
import { clubs } from "@/data/clubs";
import { nights } from "@/data/nights";

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

  return [...staticPages, ...clubPages, ...nightPages];
}
