# Automated Content Improvement: mayfairtonight.com

You improve ONE existing page per run. You never write new pages. This site moved to improvement mode on 2026-10-07 (owner decision): the June 2026 "beyond the clubs" lane earned about 124 impressions and 1 click in three months, while the older club content earned about 58,000 impressions. The job now is making the pages that already earn traffic accurate and stronger.

Two kinds of page earn that traffic, and they are edited differently:

- **Blog posts** (`/blog/{slug}`) live in Markdown files and the Supabase `site_posts` table. Edit them ONLY through the dashboard content API: no file edits, no commit, no build.
- **Site pages** (`/clubs/{slug}`, `/nights/{day}`, `/clubs`, the hub pages) are code and data in this repo. Edit them as files, build, commit and push. About 80% of the site's search demand is on these pages (Search Console, Jul-Oct 2026: 51,318 of 63,693 impressions).

Content-API commands run from `C:\websites\dashboard` as `node --env-file=.env.local scripts/publish-post.mjs ...` (shortened to `ppm` below). The script reads the secret itself: never print, paste or commit `CONTENT_API_SECRET`. On a computer set up from the dashboard's `docs/CONTENT-API.md`, `ppm` is `node --env-file=C:\content-api\.env C:\content-api\publish-post.mjs` and work files go in `C:\content-api\work` instead of `C:/temp`. Nothing in this prompt needs a database connection: start every run with `ppm --brief mayfairtonight --dir C:/temp/brief`, which prints the run history and writes the build notes, venues (open, closed, rebranded), allowed citation domains and keyword registry to that folder.

## HARD RULES (never break these)

1. **Never create a new post or page.** One improved existing page per run. (The API refuses new posts on this site.)
2. **Never change a URL, slug or route.** For blog posts never send `publish_date`; the API keeps the original date and sets the modified date itself.
3. **Never present a closed venue as open or bookable.** Venue status comes from the open and closed venue lists in `mayfairtonight-context.md` (the `scheduler_venues` table) and `src/data/clubs.ts`. Where they disagree, do not guess: flag it in the report and leave that venue as it is.
4. **Never invent facts, prices, reviews or first-person anecdotes.** No "I visited", "I noticed", "on my last visit". The persona (Henry Ashcroft) is not a real person (rule 4c.2). Older pages contain such claims: rewrite them into factual, editorial voice.
5. **Keep each page's primary query in its title and meta title.** You may sharpen a title; the query the page ranks for must stay.
6. **Never link a nightclub's own website.** Internal links are root-relative with NO trailing slash (`/clubs/tape-london`, `/nights/friday`, `/blog/{slug}`).
7. **Blog posts:** improved only if `ppm <payload>` exits 0 and prints `OK`; never fall back to editing the Markdown file. **Site pages:** if `npx tsc --noEmit` or `npm run build` fails, revert the file and stop.

## STEP 1: PICK THE PAGE

`git -C C:/websites/mayfairtonight pull --no-edit` first.

A page is already handled if it has a `scheduler_reports` row for this site with `content_type = 'improvement'` (status `success` = improved, `skipped` = flagged):

They are listed under `improvements` in `ppm --brief mayfairtonight` (newest first).

Compare by path only (the venue-status sweep record carries a #fragment so it does not mark /clubs as handled). Take the FIRST unhandled entry in this queue (ranked by Search Console, 90 days to 2026-10-05: impressions, clicks, position):

```
VENUE-STATUS   DONE 2026-10-07 (commit 139f50e; report post_url https://mayfairtonight.com/clubs#venue-status-sweep)
SITE  /clubs/tape-london                        7,214 imp / 6 clicks, pos 11.5
SITE  /nights/wednesday                         5,776 / 54, pos 9.6
SITE  /nights/thursday                          5,083 / 30, pos 10.3
SITE  /clubs                                    5,010 / 16, pos 11.9
SITE  /nights/monday                            3,891 / 34, pos 10.5
SITE  /mayfair-club-entry-rules                 2,686 / 26, pos 7.2
SITE  /dress-code                               2,369 / 28, pos 8.1
SITE  /clubs/reign-london                       2,283 / 11, pos 11.4
BLOG  /blog/over-30s-nightlife-mayfair          2,146 / 52, pos 9.8
BLOG  /blog/best-hip-hop-clubs-london           2,127 / 46, pos 14.7 (its table lists closed venues)
SITE  /best-nightclubs-in-mayfair               1,931 / 21, pos 17.1
SITE  /clubs/cirque-le-soir                     1,825 / 3, pos 12.0
BLOG  /blog/mahiki-london-guide                 1,634 / 4, pos 13.5 (Mahiki is closed)
SITE  /mayfair-club-guestlist-guide             1,343 / 28, pos 7.8
BLOG  /blog/the-box-london-nightclub-guide      1,128 / 5, pos 12.9
BLOG  /blog/mayfair-clubs-near-piccadilly       1,042 / 3, pos 10.6
SITE  /clubs/scotch-of-st-james                 1,022 / 4, pos 13.9
BLOG  /blog/funky-buddha-london-guide             996 / 7, pos 10.7 (Funky Buddha is closed)
SITE  /nights/tuesday                             924 / 13, pos 17.2
BLOG  /blog/best-house-music-clubs-london         672 / 10, pos 26.4
BLOG  /blog/selene-london-club-guide              603 / 2, pos 9.9
SITE  /clubs/cuckoo-club                          582 / 2, pos 13.5 (Cuckoo Club is closed)
BLOG  /blog/what-to-do-in-mayfair-at-night        432 / 10, pos 12.3
BLOG  /blog/dinner-and-clubbing-mayfair           428 / 15, pos 19.8
SITE  /nights/sunday                              475 / 5, pos 9.5
SITE  /mayfair-vip-nightlife                      447 / 6, pos 8.3
SITE  /best-clubs-for-groups-in-mayfair           515 / 4, pos 15.5
```

The homepage is excluded. When the queue is exhausted, run `ppm --queries mayfairtonight` (top pages, last 90 days) and take the highest-impression page not improved in the last 90 days.

**Duplicate check:** before improving a page, check it is not a near-copy of a stronger page on this site (search the repo titles and `ppm --urls mayfairtonight`). If it is, do NOT improve it: record it with `ppm --report mayfairtonight skipped "possible-duplicate of <stronger URL>" "<the evidence>" --url <its live URL> --type improvement` and take the next entry. Consolidation is a human decision.

## THE VENUE-STATUS SWEEP (done 2026-10-07; repeat it whenever a venue closes)

`src/data/clubs.ts` lists venues as `status: "open"` that have closed. Every closed venue page then shows a closure notice (`closedMessage`), and the night pages stop listing it. As of 2026-10-07:

- **Closed per scheduler_venues AND mfnights' venue-closure data (act on these):** Funky Buddha (Itzel has opened at the same Berkeley Street address), TABU London (Rumour has opened at the same Dover Street address), Cuckoo Club (99 Regent Street has opened in the same building). Set `status: "closed"` and write a `closedMessage` that says so plainly and points to open venues THIS site covers. Mention the successor venue by name only as a fact; do not link it or claim we book it unless it is in `clubs.ts`.
- **Luna Club London and Maison Close: RESOLVED (owner, 2026-10-07: both permanently closed).** Both are now `status: "closed"` in `clubs.ts` with a `closedMessage` and an `alternatives` list (open venues shown first under "Open Clubs in Mayfair"), and the hub pages no longer recommend Luna. Their pages stay live and indexable. Treat any page that still presents either as open as a closed-venue fix.
- **Already closed here but recommending closed venues:** fix the `closedMessage` / `whatToExpect` of Libertine and Luxx Club so they only recommend open venues.
- Grep the whole repo (`src/data`, `src/app`, `src/content/blog`) for the newly closed names and list in the report every page that still recommends them; fix the site-page ones in this same commit, and leave the blog posts to their own queue entries.

## STEP 2A: IMPROVING A SITE PAGE (files)

Find where the page's words live:

- `/clubs/{slug}`: that venue's entry in `src/data/clubs.ts` (description, dressCode, tableMinimum, openNights, times, insiderTip, whatToExpect, bestFor). The page template is `src/app/clubs/[slug]/page.tsx`; change it only to fix a factual or structural problem in the template itself.
- `/nights/{day}`: that day's entry in `src/data/nights.ts`. The venue list on the page comes from `clubs.ts` (`openNights`, `status`).
- `/clubs` and the hub pages (`/mayfair-club-entry-rules`, `/dress-code`, `/best-nightclubs-in-mayfair`, `/mayfair-club-guestlist-guide`, ...): `src/app/<route>/page.tsx`.

Then:
- Check every fact against a citable source or the portfolio's own venue data (`C:\websites\clubsinlondon\content\clubs\*.ts` has hours, nights, minimums, guestlist and dress code per venue; mfnights' booking pages in `src/data/bookingContent.json`). Where sources conflict, prefer the more specific and recent one and say which you used in the report. Do not state prices or hours without "as of {Month Year}" where the page's format allows it.
- Make the page answer the query it ranks for in its first paragraph, cut first-person persona claims, remove closed venues from recommendations, and add genuinely useful specifics. Keep the existing structure, metadata keys, slugs and component props.
- Edit only string content unless the template itself is wrong. No em dashes in anything you write; British English.
- Verify: `npx tsc --noEmit` and `npm run build` must pass (the build regenerates the gitignored `src/data/file-posts.json`; if it changes `next-env.d.ts`, restore it). Then commit ONLY the files you meant to change: `Improve: <page> (facts verified, cleanup)`, push to master, confirm LOCAL==REMOTE SHA, and wait for the Vercel deploy to succeed.
- Fetch the live page and confirm a distinctive new sentence is present.
- Bookkeeping (the API did not publish this page, so record it yourself once the deploy is live): `ppm --report mayfairtonight success "<change 1>" "<change 2>" ... --url <the live URL> --type improvement`. It checks the page answers 200, writes the improvement report and moves the site in the rotation. Never write these records any other way.

## STEP 2B: IMPROVING A BLOG POST (content API)

```
ppm --get mayfairtonight <slug> --out C:/temp/mt-improve.json
```

This returns the live post as a ready-to-send payload, with `replace_legacy: true` for a file post, the inline JSON-LD, byline and "Last updated" lines already stripped (the template renders the byline and dates), and the featured image filled from `src/data/images.ts` (most older posts have none: choose one, vetted by eye; the API rejects reused or venue-branded gallery images). Make every edit with a Node script that reads and rewrites the JSON (never a shell heredoc).

- Rewrite first-person persona claims (the API rejects them), remove or correct closed venues (say plainly that a venue has closed if the page is about it, and point to open alternatives), fix em dashes (rejected), make internal links root-relative with no trailing slash, and add one citation from the allowed domains in `mayfairtonight-context.md` that genuinely supports a claim (fetch-verify it first).
- Strengthen what the post's top queries ask for (the queue notes; re-check with `ppm --queries mayfairtonight <page URL>` if unsure). Tables are fine. FAQs go in the body as `## Frequently Asked Questions` with `### ` questions.
- Add `"report": {"rules_applied": [...]}` listing what you changed.

```
ppm C:/temp/mt-improve.json --dry-run
ppm C:/temp/mt-improve.json
```

Fix every dry-run error. The post is improved ONLY if the second command exits 0 and prints `OK`: the API has then seen the new text live at the same URL, pinged search engines, written the `success` improvement report and moved `last_posted_at` itself. Do not write records by hand for a blog post. Then fetch the live URL and confirm a distinctive new sentence.

## DEFINITION OF DONE (all true)

- [ ] One existing page improved; URL unchanged; nothing new created
- [ ] No closed venue presented as open; no first-person persona claims; no em dashes
- [ ] Facts match the sources named above; conflicts recorded in the report
- [ ] Site page: tsc and build passed, only intended files committed, deploy succeeded, records written by hand. Blog post: `ppm` printed `OK`
- [ ] The new text is confirmed on the live page
