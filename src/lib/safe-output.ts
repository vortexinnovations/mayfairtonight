/**
 * JSON for a <script type="application/ld+json"> tag. "<" is written as <
 * so no value can close the tag early; it parses to exactly the same JSON.
 */
export function safeJsonLd(data: unknown): string {
  return (JSON.stringify(data) ?? "").replace(/</g, "\\u003c");
}
