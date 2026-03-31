import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllSlugs, getPostWithHtml, getAllPosts } from "@/lib/blog";
import { blogImages } from "@/data/images";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostWithHtml(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://mayfairtonight.com/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://mayfairtonight.com/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostWithHtml(slug);
  if (!post) notFound();

  const images = blogImages[slug];
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <article className="max-w-3xl mx-auto px-4 pt-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">
            Tonight
          </Link>
          {" / "}
          <Link href="/blog" className="hover:text-gold">
            Blog
          </Link>
          {" / "}
          <span className="text-gray-300 line-clamp-1">{post.title}</span>
        </nav>

        {/* Post header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="bg-gold/10 text-gold text-xs font-medium px-2.5 py-0.5 rounded">
              {post.category}
            </span>
            <span className="text-xs text-dark-muted">{post.readingTime}</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-dark-muted bg-dark border border-dark-border px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
            {post.title}
          </h1>
          {images?.featured && (
            <div className="relative aspect-video overflow-hidden rounded-xl mb-4">
              <Image
                src={images.featured}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          )}
          <p className="text-lg text-gray-400">{post.excerpt}</p>
          <div className="flex items-center gap-4 mt-4 text-sm text-dark-muted">
            <time dateTime={post.date}>
              {new Date(post.date + "T12:00:00").toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            {post.updated && (
              <span>
                Updated{" "}
                {new Date(post.updated + "T12:00:00").toLocaleDateString(
                  "en-GB",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}
              </span>
            )}
          </div>
        </header>

        {/* Post content */}
        <div
          className="prose prose-invert prose-gold max-w-none
            [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-3
            [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-white [&_h3]:mt-6 [&_h3]:mb-2
            [&_p]:text-gray-300 [&_p]:leading-relaxed [&_p]:mb-4
            [&_ul]:text-gray-300 [&_ul]:mb-4 [&_ul]:space-y-1
            [&_ol]:text-gray-300 [&_ol]:mb-4 [&_ol]:space-y-1
            [&_li]:text-gray-300
            [&_strong]:text-white [&_strong]:font-semibold
            [&_a]:text-gold [&_a]:hover:text-gold-light [&_a]:underline
            [&_blockquote]:border-l-2 [&_blockquote]:border-gold [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-400
            [&_hr]:border-dark-border [&_hr]:my-8"
          dangerouslySetInnerHTML={{ __html: post.htmlContent || "" }}
        />

        {/* Mid-post CTA */}
        <div className="bg-dark-card border border-gold/30 rounded-xl p-6 text-center my-10">
          <h2 className="text-xl font-semibold text-white mb-2">
            Ready to Book?
          </h2>
          <p className="text-dark-muted mb-4">
            Message us on WhatsApp and we&apos;ll sort your night out in minutes.
          </p>
          <WhatsAppCTA size="lg" />
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-10 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              Keep Reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors group"
                >
                  <span className="text-xs text-dark-muted">{rp.category}</span>
                  <h3 className="text-sm font-medium text-white group-hover:text-gold transition-colors mt-1 line-clamp-2">
                    {rp.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Quick links */}
        <section className="mb-8 border-t border-dark-border pt-8">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/"
              className="bg-dark-card border border-dark-border rounded-lg px-3 py-1.5 text-xs text-gray-300 hover:border-gold/30 transition-colors"
            >
              What&apos;s on tonight
            </Link>
            <Link
              href="/this-weekend"
              className="bg-dark-card border border-dark-border rounded-lg px-3 py-1.5 text-xs text-gray-300 hover:border-gold/30 transition-colors"
            >
              This weekend
            </Link>
            <Link
              href="/clubs"
              className="bg-dark-card border border-dark-border rounded-lg px-3 py-1.5 text-xs text-gray-300 hover:border-gold/30 transition-colors"
            >
              All clubs
            </Link>
            <Link
              href="/dress-code"
              className="bg-dark-card border border-dark-border rounded-lg px-3 py-1.5 text-xs text-gray-300 hover:border-gold/30 transition-colors"
            >
              Dress code
            </Link>
            <Link
              href="/blog"
              className="bg-dark-card border border-dark-border rounded-lg px-3 py-1.5 text-xs text-gray-300 hover:border-gold/30 transition-colors"
            >
              All articles
            </Link>
          </div>
        </section>
      </article>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription,
            datePublished: post.date,
            dateModified: post.updated || post.date,
            author: {
              "@type": "Organization",
              name: "Mayfair Tonight",
              url: "https://mayfairtonight.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Mayfair Tonight",
              url: "https://mayfairtonight.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://mayfairtonight.com/blog/${post.slug}`,
            },
            keywords: post.tags.join(", "),
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://mayfairtonight.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://mayfairtonight.com/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://mayfairtonight.com/blog/${post.slug}`,
              },
            ],
          }),
        }}
      />

      <StickyBookingBar />
    </>
  );
}
