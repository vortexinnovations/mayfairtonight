/** The layout appends this to every page title through `title.template`. */
const SITE_SUFFIX = " | Mayfair Tonight";

/** Longest rendered <title> that Google shows without cutting it off. */
const MAX_TITLE = 60;

/**
 * A page title that keeps the site name only when the whole thing fits:
 * "body | Mayfair Tonight" when that is at most 60 characters, otherwise
 * the body alone (Next's `{ absolute }` skips the layout template).
 */
export function fitTitle(body: string): string | { absolute: string } {
  return body.length + SITE_SUFFIX.length <= MAX_TITLE ? body : { absolute: body };
}
