import Link from "next/link";
import { clubs } from "@/data/clubs";

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-gold font-bold text-lg">
              MAYFAIR<span className="text-white">TONIGHT</span>
            </Link>
            <p className="text-sm text-dark-muted mt-3">
              Your insider guide to what&apos;s happening tonight at Mayfair&apos;s
              best nightclubs. Updated daily.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Tonight</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-dark-muted hover:text-gold transition-colors">
                  What&apos;s On Tonight
                </Link>
              </li>
              <li>
                <Link href="/this-weekend" className="text-sm text-dark-muted hover:text-gold transition-colors">
                  This Weekend
                </Link>
              </li>
              <li>
                <Link href="/where-to-go-tonight" className="text-sm text-dark-muted hover:text-gold transition-colors">
                  Where Should I Go?
                </Link>
              </li>
              <li>
                <Link href="/dress-code" className="text-sm text-dark-muted hover:text-gold transition-colors">
                  Dress Code Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3">By Night</h3>
            <ul className="space-y-2">
              {["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
                (night) => (
                  <li key={night}>
                    <Link
                      href={`/nights/${night.toLowerCase()}`}
                      className="text-sm text-dark-muted hover:text-gold transition-colors"
                    >
                      {night} Night
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Clubs</h3>
            <ul className="space-y-2">
              {clubs.slice(0, 7).map((club) => (
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

        <div className="border-t border-dark-border mt-8 pt-8 text-center">
          <p className="text-xs text-dark-muted">
            © {new Date().getFullYear()} Mayfair Tonight. The insider guide to
            London&apos;s best nightlife.
          </p>
          <p className="text-xs text-dark-muted mt-2">
            <Link href="/contact" className="hover:text-gold transition-colors">
              Book a Table
            </Link>
            {" · "}
            <Link href="/dress-code" className="hover:text-gold transition-colors">
              Dress Code
            </Link>
            {" · "}
            <Link href="/clubs" className="hover:text-gold transition-colors">
              All Clubs
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
