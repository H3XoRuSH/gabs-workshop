---
name: repo-to-project
description: 'Add a new H3XoRuSH GitHub repo to the portfolio Projects section: MCP research, content md entry, verified build'
---

# Repo → Projects Entry

Convert a new GitHub repository under `github.com/H3XoRuSH` into an entry in the portfolio's Projects content collection, following the curation and voice rules in `docs/plan.md`.

**Invocation:** `/<repo-to-project> <repo-name-or-url>` (e.g. `repo-to-project my-new-repo`). If arguments are empty, ask the user which repo.

## Steps

1. **Pull repo facts via GitHub MCP** — `search_repositories` with query `user:H3XoRuSH` (narrow with `repo:<name>` when you can). Capture: `name`, `description`, `language`, `homepage`, `has_pages`, `created_at`, `private`. Skip forks, skip the `H3XoRuSH/H3XoRuSH` profile-README repo, and default-skip tutorial/coursework/learning repos unless Gab says to include them.
   - **Never invent a description.** If the repo has none, fetch the raw README (`https://raw.githubusercontent.com/H3XoRuSH/<repo>/<default-branch>/README.md`) and write a one-line factual summary from it. If that yields nothing, use name + language and ask Gab for a one-liner.

2. **Check for duplicates** — existing entries live in `src/content/projects/`. Known aliases: `black-hole` → Gab's Arcade, `cam-no-map` → Camarines Norte Interactive Map. Grep the folder for the repo name before writing anything.

3. **Decide placement** — the featured showcase is capped at 5 (currently: gabs-arcade, cam-no-map, filipino-fake-news-detector, console-911, websnapse-dynamic). A new repo defaults to the "More builds" strip (`featured: false`). Only swap a featured card if Gab confirms via the ask tool.

4. **Write the markdown entry** at `src/content/projects/<repo-name>.md` with frontmatter matching the schema in `src/content.config.ts`:
   - `title` — project name
   - `blurb` — one line, factual, in Gab's voice
   - `problem` / `role` / `solution` — **featured cards only**, written as problem → role → solution
   - `stack` — array of real technologies visible in the repo/README; don't guess
   - `accent` — one of `red | orange | yellow | green`; vary against neighboring strip entries (strip currently cycles yellow, orange, red, green, yellow, orange)
   - `dates` — LinkedIn dates if known, else `Mon YYYY` from repo `created_at` (e.g. `Jul 2026`); omit when unsure
   - `link` — **only if verified live.** Probe the candidate URL first (repo `homepage`, or the GitHub Pages pattern `https://h3xorush.github.io/<repo>/`) and require HTTP 200. A dead link is worse than no link — check the GitHub Pages API (`https://api.github.com/repos/H3XoRuSH/<repo>/pages`) returns a site before trusting `has_pages`.
   - `repo` — `https://github.com/H3XoRuSH/<repo>`; **omit for private repos** (viewers get a 404)
   - `featured: false`, `order: <next free strip order>` (strip currently uses 10–15, so start at 16)

5. **Ask Gab when ambiguous** — featured swap? no description anywhere? private repo? unfinished project? Use the ask tool instead of guessing.

6. **Verify** — clear the Astro content cache first (`Remove-Item -Recurse -Force node_modules/.astro` — on this machine it emits duplicate-id warnings after content edits), then run `npm run check` and `npm run build`. Both must be clean before reporting done.

## Voice rules (from docs/plan.md)

- Informal, specific, a little playful. Never "passionate developer" boilerplate.
- No invented metrics, numbers, or dates — flag to Gab where a real number would help.
- Featured copy answers: the problem, Gab's specific role, how he solved it — not a tech-stack tag list.
- Strip entries: name, one line, link if available.
