import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-16 text-center">
      <h1 className="text-4xl font-bold text-white mb-3">Page Not Found</h1>
      <p className="text-dark-muted mb-8">
        Looks like this page doesn&apos;t exist. Let&apos;s get you back on
        track.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors"
        >
          What&apos;s On Tonight
        </Link>
        <Link
          href="/clubs"
          className="border border-gold text-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold hover:text-black transition-colors"
        >
          Browse Clubs
        </Link>
      </div>
    </div>
  );
}
