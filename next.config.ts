import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Renamed venues (October 2026): Cuckoo Club is now 99 Regent Street, Tabu is now Rumour.
      { source: "/clubs/cuckoo-club", destination: "/clubs/99-regent-street", permanent: true },
      { source: "/clubs/tabu-london", destination: "/clubs/rumour-london", permanent: true },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/gallery/images/:path*",
        destination:
          "https://hgsgysaxiraaezeneshr.supabase.co/storage/v1/object/public/gallery/:path*",
      },
    ];
  },
};

export default nextConfig;
