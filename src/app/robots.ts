import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Never /_next/: it serves the CSS, JavaScript and /_next/image pictures Google renders with.
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://mayfairtonight.com/sitemap.xml",
  };
}
