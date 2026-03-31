import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { blogImages, heroImages } from "@/data/images";
import HeroImage from "@/components/HeroImage";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";

export const metadata: Metadata = {
  title: "Mayfair Nightlife Blog — Insider Tips, Club Guides & What's On",
  description:
    "The insider blog for Mayfair nightlife. Club guides, what to expect, how to get in, best nights by genre, and tips from people who go out in Mayfair every week.",
  alternates: { canonical: "https://mayfairtonight.com/blog" },
  openGraph: {
    title: "Mayfair Nightlife Blog — Insider Tips & Club Guides",
    description:
      "Insider guides to Mayfair's best nightclubs. Tips, recommendations, and everything you need to know before you go out in London.",
    url: "https://mayfairtonight.com/blog",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  // Feature the latest post
  const [featuredPost, ...otherPosts] = posts;

  return (
    <>
      <HeroImage src={heroImages.blog} alt="Mayfair nightlife blog">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Mayfair Nightlife <span className="text-gold">Blog</span>
        </h1>
        <p className="text-dark-muted mt-2">
          Insider tips, club guides, and everything you need to know before
          going out in Mayfair.
        </p>
      </HeroImage>

      <article className="max-w-6xl mx-auto px-4 pt-8">
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">
            Tonight
          </Link>
          {" / "}
          <span className="text-gray-300">Blog</span>
        </nav>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div className="hidden md:block ml-auto">
            <WhatsAppCTA size="md" />
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="text-xs text-dark-muted mr-1 self-center">
            Topics:
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="bg-dark-card border border-dark-border rounded-full px-3 py-1 text-xs text-gray-300"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Featured post */}
        {featuredPost && (
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="block bg-dark-card border border-dark-border rounded-xl overflow-hidden mb-8 hover:border-gold/30 transition-colors group"
          >
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={blogImages[featuredPost.slug]?.featured || heroImages.blog}
                alt={featuredPost.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-gold/10 text-gold text-xs font-medium px-2.5 py-0.5 rounded">
                Latest
              </span>
              <span className="text-xs text-dark-muted">
                {featuredPost.category}
              </span>
              <span className="text-xs text-dark-muted">
                {featuredPost.readingTime}
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-white group-hover:text-gold transition-colors mb-2">
              {featuredPost.title}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-3">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-dark-muted">
                {new Date(featuredPost.date + "T12:00:00").toLocaleDateString(
                  "en-GB",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}
              </span>
              <span className="text-gold">Read more →</span>
            </div>
            </div>
          </Link>
        )}

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {otherPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-gold/30 transition-colors group"
            >
              <div className="relative aspect-[3/2] overflow-hidden rounded-t-xl">
                <Image
                  src={blogImages[post.slug]?.featured || heroImages.blog}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-dark-muted">{post.category}</span>
                <span className="text-xs text-dark-muted">
                  {post.readingTime}
                </span>
              </div>
              <h2 className="text-lg font-semibold text-white group-hover:text-gold transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-3 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-dark-muted">
                  {new Date(post.date + "T12:00:00").toLocaleDateString(
                    "en-GB",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </span>
                <span className="text-sm text-gold">Read →</span>
              </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-dark-card border border-gold/30 rounded-xl p-6 text-center mt-10 mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            Ready to Go Out Tonight?
          </h2>
          <p className="text-dark-muted mb-4">
            Stop reading. Start booking. Message us on WhatsApp and we&apos;ll
            sort your night out.
          </p>
          <WhatsAppCTA size="lg" />
        </div>
      </article>

      <StickyBookingBar />
    </>
  );
}
