import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About the Editor — Henry Ashcroft | Mayfair Tonight",
  description:
    "Meet Henry Ashcroft, Mayfair Area Specialist. He covers W1 after dark - the venues, the crowd, and the day-of-week patterns - with a specialist's depth.",
  alternates: { canonical: "https://mayfairtonight.com/about-the-editor" },
  openGraph: {
    title: "About the Editor — Henry Ashcroft | Mayfair Tonight",
    description:
      "Henry Ashcroft covers Mayfair after dark: the venues, the crowd, and the day-of-week patterns of the W1 scene.",
    url: "https://mayfairtonight.com/about-the-editor",
  },
};

export default function AboutTheEditorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              "@id": "https://mayfairtonight.com/about-the-editor/#author-henry",
              name: "Henry Ashcroft",
              jobTitle: "Mayfair Area Specialist",
              url: "https://mayfairtonight.com/about-the-editor/",
              description:
                "Henry focuses exclusively on Mayfair after dark - the venues, the crowd, the day-of-week patterns. He writes about the W1 nightlife scene with the depth that only a specialist can.",
              worksFor: {
                "@type": "Organization",
                name: "Mayfair Tonight",
                url: "https://mayfairtonight.com",
              },
              knowsAbout: [
                "Mayfair nightlife",
                "W1 nightclub venues",
                "Day-of-week night patterns in Mayfair",
                "Mayfair music and genre nights",
              ],
            },
          }),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 pt-10 pb-16">
        <nav className="text-sm text-dark-muted mb-6">
          <Link href="/" className="hover:text-gold">Tonight</Link>
          {" / "}
          <span className="text-gray-300">About the Editor</span>
        </nav>

        <p className="text-sm uppercase tracking-widest text-dark-muted mb-3">About the Editor</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Henry <span className="text-gold">Ashcroft</span>
        </h1>
        <p className="text-gray-300 text-lg mb-10">Mayfair Area Specialist, Mayfair Tonight</p>

        <div className="space-y-5 text-gray-300 leading-relaxed mb-12">
          <p>
            Henry focuses exclusively on Mayfair after dark: the venues, the crowd, and the
            day-of-week patterns that decide what a night in W1 actually looks like. Where most
            nightlife coverage treats London as one scene, Henry treats one square mile as a
            subject worth knowing properly.
          </p>
          <p>
            That means tracking the area&apos;s venues daily, knowing which rooms carry which
            nights, and writing guides with the depth that only a specialist can: how a Tuesday
            differs from a Thursday, where each genre actually lives, and what the doors expect.
            Every guide carries the date it was last updated.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-5">What Henry Covers</h2>
        <ul className="space-y-3 text-gray-300 leading-relaxed list-disc list-inside mb-12">
          <li>Mayfair-focused nightlife, tracked daily</li>
          <li>Day-of-week guides: how each night in W1 actually runs</li>
          <li>Genre nights: where hip-hop, R&amp;B, disco and house live in Mayfair</li>
          <li>Long-term observation of the W1 scene and its crowds</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mb-5">Recent Guides by Henry</h2>
        <ul className="space-y-3 mb-10">
          <li>
            <Link href="/blog/disco-funk-nights-mayfair" className="text-gold hover:underline">
              Disco and Funk Nights in Mayfair: Where the Classic Sound Lives
            </Link>
          </li>
          <li>
            <Link href="/blog/wednesday-night-mayfair" className="text-gold hover:underline">
              Wednesday Night in Mayfair: Where to Go and What to Expect
            </Link>
          </li>
          <li>
            <Link href="/blog/tuesday-night-out-mayfair" className="text-gold hover:underline">
              Tuesday Night Out in Mayfair
            </Link>
          </li>
        </ul>
        <p className="text-gray-300 leading-relaxed mb-12">
          Browse all of Henry&apos;s guides on the <Link href="/blog" className="text-gold hover:underline">blog</Link>.
        </p>

        <div className="border border-gold/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-3">Planning a night in Mayfair?</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Tell us the night and the group, and we&apos;ll point you to the right room with the
            table or entry sorted before you arrive.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Book via WhatsApp
          </Link>
        </div>
      </article>
    </>
  );
}
