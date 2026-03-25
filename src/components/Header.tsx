"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Tonight" },
  { href: "/this-weekend", label: "This Weekend" },
  { href: "/where-to-go-tonight", label: "Where To Go" },
  { href: "/clubs", label: "Clubs" },
  { href: "/blog", label: "Blog" },
  { href: "/dress-code", label: "Dress Code" },
  { href: "/contact", label: "Book Now" },
];

const nightLinks = [
  { href: "/nights/monday", label: "Mon" },
  { href: "/nights/tuesday", label: "Tue" },
  { href: "/nights/wednesday", label: "Wed" },
  { href: "/nights/thursday", label: "Thu" },
  { href: "/nights/friday", label: "Fri" },
  { href: "/nights/saturday", label: "Sat" },
  { href: "/nights/sunday", label: "Sun" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-dark-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-gold font-bold text-xl tracking-tight">
            MAYFAIR<span className="text-white">TONIGHT</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-gold ${
                  link.label === "Book Now"
                    ? "bg-gold text-black px-4 py-2 rounded font-semibold hover:bg-gold-light hover:text-black"
                    : "text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Night-by-night bar (desktop) */}
        <div className="hidden md:flex items-center gap-1 pb-2">
          <span className="text-xs text-dark-muted mr-2">By night:</span>
          {nightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-gray-400 hover:text-gold px-2 py-1 rounded hover:bg-dark-card transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-card border-t border-dark-border">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm ${
                  link.label === "Book Now"
                    ? "bg-gold text-black px-4 py-2 rounded font-semibold text-center"
                    : "text-gray-300 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-dark-border pt-3 mt-1">
              <p className="text-xs text-dark-muted mb-2">By night:</p>
              <div className="flex flex-wrap gap-2">
                {nightLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-xs text-gray-400 hover:text-gold bg-dark px-3 py-1.5 rounded"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
