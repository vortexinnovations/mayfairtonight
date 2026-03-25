# Mayfair Tonight

Your insider guide to what's happening tonight at Mayfair's best nightclubs.

## How to Update Content

### Updating "What's On Tonight" and "This Weekend"

Both the homepage and weekend page pull from one file:

```
src/data/events.json
```

**To update what's on tonight:**

1. Open `src/data/events.json`
2. Each entry looks like this:

```json
{
  "date": "2026-03-27",
  "clubSlug": "tape-london",
  "clubName": "Tape London",
  "eventName": "Friday Sessions",
  "specialGuest": "DJ Snake",
  "musicGenre": "Hip-Hop & RnB",
  "openingTime": "22:00",
  "description": "A one-line description of what's happening tonight."
}
```

3. **date** — use format YYYY-MM-DD (e.g., 2026-03-27 for March 27th 2026)
4. **clubSlug** — must match the club's URL slug. Here are all the slugs:
   - `tape-london`
   - `cirque-le-soir`
   - `the-london-reign`
   - `tabu-london`
   - `libertine`
   - `luxx-club`
   - `maddox`
   - `scotch-of-st-james`
   - `cuckoo-club`
   - `dear-darling`
   - `beat-london`
   - `ministry-of-sound`
   - `lio-london`
5. **clubName** — the club's display name
6. **eventName** — name of the night/event
7. **specialGuest** — leave empty ("") if no guest, or add a DJ/artist name
8. **musicGenre** — what music is playing
9. **openingTime** — when doors open (e.g., "22:00")
10. **description** — one punchy line about the night

**To add a new night's events:**
- Copy an existing entry, change the date and details
- Add entries for each club that's open that night
- Save the file

**To clear old events:**
- Delete entries with past dates
- The homepage automatically falls back to showing which clubs are usually open that day of the week if no events are listed for today

### How the Homepage Works

- If there are entries in `events.json` matching today's date → it shows those specific events
- If there are no entries for today → it shows which clubs are normally open on that day of the week (pulled from the club data)
- So you don't HAVE to update events.json every day — the site still works without it

### How "This Weekend" Works

- Shows events from `events.json` for the upcoming Friday, Saturday, and Sunday
- If no events are listed for a weekend day, it falls back to showing clubs normally open that night
- Update the events.json with weekend dates to show specific events

### Updating Club Information

Club data lives in:

```
src/data/clubs.ts
```

Edit this file to change a club's:
- Description, tagline, what to expect
- Music policy, dress code
- Opening nights, times
- Table minimums
- Location, vibe, insider tips

### Updating Night-by-Night Pages

Night data lives in:

```
src/data/nights.ts
```

These are evergreen pages — they rarely need updating since club opening nights stay consistent.

## Running Locally

```bash
npm run dev
```

Open http://localhost:3000

## Building for Production

```bash
npm run build
```

## Deploying to Vercel

1. Push to GitHub
2. Connect the repo to Vercel
3. Vercel auto-detects Next.js and deploys

Or use the Vercel CLI:

```bash
npx vercel
```

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Deployed on Vercel
