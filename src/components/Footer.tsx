import Link from "next/link";
import { getOpenClubs } from "@/data/clubs";

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 — Branding */}
          <div>
            <Link href="/" className="text-gold font-bold text-lg">
              MAYFAIR<span className="text-white">TONIGHT</span>
            </Link>
            <p className="text-sm text-dark-muted mt-3">
              The insider guide to Mayfair&apos;s nightlife. Clubs, guestlists,
              dress codes, and everything you need for a night out.
            </p>
          </div>

          {/* Column 2 — Mayfair Guides */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Mayfair Guides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mayfair-nightclubs" className="text-sm text-dark-muted hover:text-gold transition-colors">
                  Mayfair Nightclubs
                </Link>
              </li>
              <li>
                <Link href="/best-nightclubs-in-mayfair" className="text-sm text-dark-muted hover:text-gold transition-colors">
                  Best Nightclubs Ranked
                </Link>
              </li>
              <li>
                <Link href="/mayfair-nightlife-guide" className="text-sm text-dark-muted hover:text-gold transition-colors">
                  Nightlife Guide
                </Link>
              </li>
              <li>
                <Link href="/where-to-go-out-in-mayfair" className="text-sm text-dark-muted hover:text-gold transition-colors">
                  Where to Go Out
                </Link>
              </li>
              <li>
                <Link href="/mayfair-club-dress-code" className="text-sm text-dark-muted hover:text-gold transition-colors">
                  Dress Code Guide
                </Link>
              </li>
              <li>
                <Link href="/mayfair-vip-nightlife" className="text-sm text-dark-muted hover:text-gold transition-colors">
                  VIP Nightlife
                </Link>
              </li>
              <li>
                <Link href="/mayfair-night-out-itinerary" className="text-sm text-dark-muted hover:text-gold transition-colors">
                  Night Out Itinerary
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Compare & Choose */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Compare & Choose</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/best-hip-hop-clubs-in-mayfair" className="text-sm text-dark-muted hover:text-gold transition-colors">
                  Hip-Hop Clubs
                </Link>
              </li>
              <li>
                <Link href="/best-celebrity-clubs-in-mayfair" className="text-sm text-dark-muted hover:text-gold transition-colors">
                  Celebrity Clubs
                </Link>
              </li>
              <li>
                <Link href="/best-clubs-for-groups-in-mayfair" className="text-sm text-dark-muted hover:text-gold transition-colors">
                  Best for Groups
                </Link>
              </li>
              <li>
                <Link href="/best-clubs-for-tables-in-mayfair" className="text-sm text-dark-muted hover:text-gold transition-colors">
                  Best for Tables
                </Link>
              </li>
              <li>
                <Link href="/girls-guestlist-clubs-mayfair" className="text-sm text-dark-muted hover:text-gold transition-colors">
                  Girls&apos; Night Guide
                </Link>
              </li>
              <li>
                <Link href="/mayfair-clubs-by-music-style" className="text-sm text-dark-muted hover:text-gold transition-colors">
                  Clubs by Music Style
                </Link>
              </li>
              <li>
                <Link href="/mayfair-club-entry-rules" className="text-sm text-dark-muted hover:text-gold transition-colors">
                  Entry Rules
                </Link>
              </li>
              <li>
                <Link href="/mayfair-club-guestlist-guide" className="text-sm text-dark-muted hover:text-gold transition-colors">
                  Guestlist Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Clubs */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Clubs</h3>
            <ul className="space-y-2">
              {getOpenClubs().slice(0, 8).map((club) => (
                <li key={club.slug}>
                  <Link
                    href={`/clubs/${club.slug}`}
                    className="text-sm text-dark-muted hover:text-gold transition-colors"
                  >
                    {club.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/clubs" className="text-sm text-gold hover:text-gold-light transition-colors">
                  View all clubs →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Night links */}
        <div className="border-t border-dark-border mt-8 pt-6">
          <div className="flex flex-wrap gap-3 justify-center text-sm text-dark-muted">
            <span>By night:</span>
            {["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((night) => (
              <Link key={night} href={`/nights/${night.toLowerCase()}`} className="hover:text-gold transition-colors">
                {night}
              </Link>
            ))}
            <span className="text-dark-border">|</span>
            <Link href="/" className="hover:text-gold transition-colors">Tonight</Link>
            <Link href="/this-weekend" className="hover:text-gold transition-colors">This Weekend</Link>
            <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
          </div>
        </div>

        <div className="border-t border-dark-border mt-6 pt-6 text-center">
          <p className="text-xs text-dark-muted">
            © {new Date().getFullYear()} Mayfair Tonight. The insider guide to
            London&apos;s best nightlife.
          </p>
          <p className="text-xs text-dark-muted mt-2">
            <Link href="/contact" className="hover:text-gold transition-colors">
              Book a Table
            </Link>
            {" · "}
            <Link href="/mayfair-nightclubs" className="hover:text-gold transition-colors">
              Mayfair Nightclubs
            </Link>
            {" · "}
            <Link href="/clubs" className="hover:text-gold transition-colors">
              All Clubs
            </Link>
            {" · "}
            <Link href="/best-areas-around-hanover-square-and-berkeley-square-for-nightlife" className="hover:text-gold transition-colors">
              Nightlife Areas
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
