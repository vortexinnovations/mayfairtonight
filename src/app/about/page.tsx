import { safeJsonLd } from "@/lib/safe-output";
import { Metadata } from "next";
import Link from "next/link";
import { ORGANIZATION, SITE_NAME, SITE_URL } from "@/lib/organization";

const TITLE = "About Mayfair Tonight: Who We Are and How We Write";
const DESCRIPTION =
  "Who runs Mayfair Tonight, how we earn a commission on bookings, how we write and check our Mayfair club guides with AI tools, and how to report an error.";
const URL = `${SITE_URL}/about`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: TITLE,
            description: DESCRIPTION,
            url: URL,
            about: ORGANIZATION,
          }),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 pt-10 pb-16">
        <nav className="text-sm text-dark-muted mb-6">
          <Link href="/" className="hover:text-gold">Tonight</Link>
          {" / "}
          <span className="text-gray-300">About</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          About Mayfair <span className="text-gold">Tonight</span>
        </h1>
        <p className="text-gray-300 text-lg mb-10">
          Who runs this site, how it makes money, and how our guides are written and checked.
        </p>

        <h2 className="text-2xl font-bold text-white mb-5">Who Runs Mayfair Tonight</h2>
        <div className="space-y-5 text-gray-300 leading-relaxed mb-12">
          <p>
            Mayfair Tonight is run by a London nightlife booking team. We arrange VIP tables and
            guestlist places at London clubs, and we handle enquiries on WhatsApp. Our focus is
            Mayfair: which clubs are open tonight, what each night is like and how to book.
          </p>
          <p>
            <strong className="text-white">How we make money:</strong> we earn a commission when a
            table or guestlist place we arrange goes ahead. That makes us a booking service, not an
            independent review site, so read our recommendations with that in mind.
          </p>
        </div>

        <h2 id="how-we-write" className="text-2xl font-bold text-white mb-5 scroll-mt-24">
          How We Write
        </h2>
        <div className="space-y-5 text-gray-300 leading-relaxed mb-12">
          <p>
            We write and update our guides with the help of AI tools. They are based on what venues
            announce, published listings and news reports, and the prices and door policies our
            booking desk works with.
          </p>
          <p>
            Automated checks look for closed venues, broken links and house-style problems before a
            page goes live. From 25 November 2026, a member of our team reads and approves every new
            article before it is published.
          </p>
          <p>We credit pages to the Mayfair Tonight team rather than to individual writers.</p>
          <p>
            Prices, opening nights and door policies change often.{" "}
            <Link href="/contact" className="text-gold hover:underline">Message us</Link> before you
            go and we will confirm the details for your night.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-5">What We Cover</h2>
        <ul className="space-y-3 text-gray-300 leading-relaxed list-disc list-inside mb-12">
          <li>
            <Link href="/" className="text-gold hover:underline">Tonight</Link>: the Mayfair clubs
            open tonight, and <Link href="/this-weekend" className="text-gold hover:underline">this weekend</Link>
          </li>
          <li>
            <Link href="/clubs" className="text-gold hover:underline">Every club we cover</Link>: music,
            opening nights, dress code and how to book
          </li>
          <li>
            Guides to <Link href="/dress-code" className="text-gold hover:underline">dress codes</Link>,{" "}
            <Link href="/mayfair-club-guestlist-guide" className="text-gold hover:underline">guestlists</Link>{" "}
            and <Link href="/how-mayfair-nightclub-tables-work" className="text-gold hover:underline">tables</Link>
          </li>
          <li>
            The <Link href="/blog" className="text-gold hover:underline">blog</Link>: nights of the
            week, music styles and the streets of Mayfair after dark
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white mb-5">Corrections</h2>
        <p className="text-gray-300 leading-relaxed mb-12">
          If something on a page is wrong or out of date, tell us on WhatsApp through our{" "}
          <Link href="/contact" className="text-gold hover:underline">contact page</Link> and we will
          correct it.
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
