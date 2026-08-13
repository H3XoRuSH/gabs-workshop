# Gab's Portfolio — Build Plan (Astro)

## Who this is for
Rae Gabriel "Gab" Samonte — BS Computer Science, University of the Philippines Diliman
(**Summa Cum Laude**, grade 1.1976). Currently **Software Developer at Azeus Systems
Limited** (Oct 2024–present, remote, NCR Philippines). Competitive programmer
(Codeforces, AtCoder, NOI.PH). Backend-leaning full-stack. Builds side projects for fun.
Likes dogs, cats, music, pickleball, table tennis and video games (per UP activities/societies).

LinkedIn headline: "Software Developer @ Azeus | BS Computer Science @ UP Diliman (Summa Cum Laude) 🎓 | Full-Stack & AI Software Engineer"

LinkedIn "About" (source material for tone/content, do not copy verbatim — see Content
guidance below):
> Software Developer at Azeus Systems Philippines Limited and BS Computer Science graduate from UP Diliman (Summa Cum Laude, GWA 1.1976) with a strong foundation in competitive programming (NOI.PH, Codeforces, AtCoder) and high-performance full-stack web development.
> At Azeus, I work on enterprise applications leveraging Java, Vue.js, and Python. Beyond my corporate work, I specialize in building real-time multiplayer systems, AI-integrated platforms, serverless edge architectures, and scalable developer tools.
> Technical Expertise & Core Stack:
> • Languages: Java, Python, TypeScript, JavaScript, C++, SQL
> • Frontend: Vue 3, React, Svelte 5, Next.js, Maplibre GL
> • Backend & Cloud: Node.js, Express, Cloudflare Workers, Spring Boot, REST APIs, Socket.io
> • AI & Databases: AI Integration, Machine Learning, PostgreSQL, Drizzle ORM, Upstash Redis
> Driven by algorithmic efficiency, clean software architecture, and continuous learning, I thrive on solving complex computational challenges and engineering state-of-the-art web applications.

Vibe: **playful/personal**, side-project energy — not corporate, not overly serious.
The site should feel like a workshop, not a resume. The LinkedIn "About" text above reads
corporate/generic ("results-driven professional") — the agent should NOT reuse this
phrasing directly. Rewrite in Gab's actual voice (informal, specific, a little playful)
using the underlying facts, not the LinkedIn wording.

## Portfolio principles (apply throughout)
A good portfolio is a highly curated, data-driven showcase meant to convert viewers into
clients or employers — not a complete archive of everything Gab has built. Concretely:

- **Strictly curated**: 4-6 projects max in the main showcase, not all 8. See the
  "Projects" section below for which ones make the cut and why.
- **Result-oriented**: wherever a real number exists (users, response time, dataset
  size, contest rank, % accuracy, etc.), use it. Do not fabricate metrics that aren't in
  the source data — flag to Gab where a number would help and ask him to supply it
  rather than inventing one.
- **Process-driven**: each featured project should briefly answer three things —
  the problem, Gab's specific role, and how he solved it — not just a tech-stack tag
  list. This is a rewrite of the existing project blurbs, not new content: restructure
  each one as problem → role → solution in a sentence or two.
- **Future-focused**: the featured set should skew toward the kind of work Gab wants to
  do next (full-stack / backend / AI-leaning, per his headline), not just his most
  academic or most personal projects. Confirm direction with Gab, but the arcade,
  console-911, and the Fake News Detector already lean this way.
- **User-friendly**: fast load, fully responsive/mobile-first, seamless navigation. This
  is a build requirement for the agent, not just a design idea — see Tech setup below.
- **Actionable**: a prominent, always-reachable contact method (not buried at the
  bottom only) and a downloadable resume/CV. Gab already has a CV linked from his GitHub
  README — reuse or update that PDF rather than building a new one from scratch.

This tightens the earlier "playful arcade" direction rather than replacing it: the
personality and neo-brutalist signature stay, but project selection and copy get held to
a hiring-manager-facing bar, not just a "fun stuff I built" bar.

## Signature concept
Borrow the real visual language of Gab's own live project, **Gab's Arcade**
(gabs-arcade.xyz), instead of inventing a new aesthetic. That site already has a strong,
consistent neo-brutalist identity:
- Warm off-white background (~#F5F1E8) with a subtle dotted-grid texture
- Hard, offset drop-shadows (not blurred) on cards and buttons — no soft/glow shadows anywhere
- Thick black (~#1A1A1A) borders, ~2-3px, sharp corners or very slight rounding
- Bold, condensed, all-caps display type for headers (Anton / Archivo Black style)
- Clean sans body face (Inter or similar)
- Color-coded accent system: crimson red, burnt orange, mustard yellow, olive green —
  used as category tags / top borders on cards, never randomly

Reuse this exact card pattern (colored top border + hard shadow + bold border) across the
whole portfolio so it feels like one continuous universe with the arcade, not a separate
skin bolted onto a resume.

## Explicitly avoid (AI slop tells)
- Cream bg + serif + terracotta accent (#D97757-ish) — generic AI default
- Near-black bg + single neon accent — generic AI default
- Big-stat-with-gradient-blob hero
- Numbered section markers (01/02/03) unless representing a real sequence
- Generic copy like "passionate full-stack developer" or "turning ideas into reality" —
  every sentence of copy must reference something real and specific from Gab's actual
  work (see Content section)
- Animating every element on scroll — keep motion restrained (press/shift effect on
  click, mimicking the hard-shadow style shifting; no blanket fade-ins)

## Layout / sections (in order)

1. **Hero**
   - No headshot-and-tagline template. Instead: a mini recreation of the Arcade's own
     card grid UI (hard shadow, colored top border, bold border) — but the tiles are
     portfolio sections instead of games: "Projects", "Competitive Programming",
     "About", "Contact". Clicking a tile scroll-links to that section.
   - Page title styled like "GAB'S ARCADE" heading treatment, but for the portfolio
     itself, e.g. "GAB'S WORKSHOP" or similar — confirm naming with Gab before finalizing.
   - One line under the title, specific, not generic. Draft option: "Backend developer.
     Competitive programmer. Builds multiplayer games for fun." (confirm tone with Gab)

2. **Projects** — reuse the card component throughout. Per Portfolio Principles above,
   cap the featured showcase at **5 projects total** (including the Arcade). The other
   three (LERA, GastroFilter, Grad Dedications) move to a small "more builds" strip —
   linked but not given full card treatment — so the section stays curated, not a full
   archive.

   For each of the 5 featured projects, write copy as **problem → role → solution**,
   not a feature/tech list. Drafted below; confirm with Gab and fill in any real metrics
   he can supply (do not invent numbers).

   - **Gab's Arcade** (signature project, gets the most space/detail)
     - Problem: wanted a place to play classic board/pen-and-paper games with friends
       online, in real time, without it feeling like a generic game site.
     - Role: solo full-stack — built both the multiplayer backend and the whole
       front-end game/UI system.
     - Solution: real-time multiplayer arcade, 11 games (Black Hole, Connect Four, Dots
       and Boxes, Battleship, Checkers, Escape Room, Bingo, Trivia, AI-powered Infinite
       Word Chain, Pictionary, Pattern Hunt). Vue 3 + Vite + TailwindCSS front-end,
       Node.js + Express + Socket.io backend. Neo-brutalist design, page transitions,
       confetti — as a deliberate identity, not decoration.
     - Live link: gabs-arcade.xyz. Metric to request from Gab if available: rooms
       hosted / concurrent players / games played, if he's tracked any of this.
   - **cam-no-map** (Camarines Norte Interactive Map, Jan–May 2023, UP Diliman)
     - Problem: Camarines Norte tourism info was scattered, making trip-planning hard.
     - Role: built the mapping/front-end layer for a UP Diliman project.
     - Solution: interactive Mapbox + React map marking accommodation, tourism,
       historical, and business spots, with tour recommendations. TypeScript.
   - **Filipino Fake News Detector** (May–Jun 2023, UP Diliman)
     - Problem: fake news detection tools weren't tuned for Philippine-context text.
     - Role: built the ML classifier and the Chrome Extension that ships it.
     - Solution: Multinomial Naive Bayes classifier trained for Filipino-context fake
       text, delivered as a Chrome Extension. Python. Metric to request: classifier
       accuracy/F1 if Gab has it — a real number here would carry a lot of weight.
   - **console-911**
     - Problem: wanted to explore LLMs for branching, high-pressure dialogue rather
       than a typical chatbot demo.
     - Role: designed and built the dialogue engine and simulator.
     - Solution: text-based emergency dispatch simulator with a hybrid LLM-driven
       dialogue engine. TypeScript. (No LinkedIn dates found — confirm timeframe with
       Gab if displaying one.)
   - **WebSnapse Dynamic** (May 2023–Jun 2024, UP Diliman)
     - Problem: the prior WebSnapse Reloaded simulator didn't support neuron division
       for Spiking Neural P systems.
     - Role: extended the simulator and proposed new matrix representations.
     - Solution: added neuron-division support and new SN P systems matrix
       representations. Vue.js. Good project to show algorithmic/research depth
       alongside the web-dev-heavy ones — helps the "future-focused" AI-engineer angle
       from Gab's headline.

   **More builds** (compact strip, not full cards — name, one line, link if available):
   - **Project LERA** — Luzon electricity reliability analysis; scraped outage data,
     used Chi-Square tests and random forest regression to model outages. Python.
   - **EAMC GastroFilter** — patient tracking/filtering tool built for East Avenue
     Medical Center's research team. Vue.js.
   - **Gab's Grad Dedications** — small Vue.js app serving personalized grad messages
     by code, with Python-generated JSON payloads. A fun, personal one.
   - **Agent action item**: use the connected GitHub MCP to list all repos under
     H3XoRuSH (github.com/H3XoRuSH — 14 repos total per the profile page) and add any
     not already covered above or in the 5 featured projects to this strip. For each
     one pulled in this way: use the repo's name, description, and primary language as
     shown by the MCP tool — do not invent a description if the repo has none, just use
     the name and language, or ask Gab for a one-line description. Skip forks unless
     Gab says otherwise, and skip the H3XoRuSH/H3XoRuSH profile-README repo itself.
     Known repos already accounted for: black-hole (=Gab's Arcade), cam-no-map,
     Filipino-Fake-News-Detector, console-911 — don't duplicate these.

   Confirm with Gab which of LERA / WebSnapse / GastroFilter / Grad Dedications have
   public repos or live links; omit the link affordance for any that don't rather than
   linking to nothing.

3. **Experience** (new section — real data now available)
   - **Software Developer**, Azeus Systems Limited · Full-time · Oct 2024–Present
     (1 yr 11 mos) · National Capital Region, Philippines · Remote
   - **Software Engineer Intern**, Azeus Systems Philippines Limited · Jul–Aug 2023
     (2 mos) · NCR, Philippines · Spring Boot + other skills
   - **Bootcamp Trainer**, StackTrek · Part-time · May 2022–Jun 2023 (1 yr 2 mos) ·
     Remote — instructed and mentored aspiring developers; covered HTML, CSS,
     JavaScript, React, Node.js
   - Keep this brief and card-based like everything else (role, company, dates, one
     line) rather than a dense traditional resume list — this is a portfolio, not a CV.
     Consider small mono-type date tags to match the comp-programming section's style.

4. **Education**
   - **BS Computer Science**, University of the Philippines Diliman, Sep 2020–Jul 2024
     — **Summa Cum Laude**, grade 1.1976. Activities: Programming, Table Tennis, Video
     Games. Member: UP Algo++ (competitive programming org), UP Sarô.
   - **Philippine Science High School – Bicol Region Campus**, 2014–2019
   - Summa Cum Laude + 1.1976 is a strong, specific, non-generic detail — feature it,
     don't bury it in fine print.

5. **Certifications** (optional small section or fold into About/sidebar — don't let it
   dominate)
   - Gold Level Programmer, StackLeague (Nov 2021)
   - Python (Basic), HackerRank (Jul 2020)
   - Problem Solving (Basic), HackerRank (Jun 2020)
   - Bootcamp Trainer cert, StackTrek (May 2022)
   - These are mostly early/foundational — fine as a compact list, not worth individual
     cards. Could live as a small strip under Education.

6. **Competitive Programming**
   - Framed as "for fun," not resume padding
   - Codeforces + AtCoder — link profiles once Gab provides handles/stats
   - NOI.PH mentioned in LinkedIn "About" as an early contest credential — worth a nod
     here as the origin story ("started with NOI.PH in high school")
   - Use the monospace face here as a nod to competitive-programming culture
   - Optional: small stat block (rank, rating, problems solved) if Gab wants to share
     numbers — do not fabricate placeholder numbers

7. **About**
   - Short, human, not a bio essay. UP Diliman CS grad (Summa Cum Laude), backend-leaning
     full-stack, currently at Azeus Systems. Table tennis and video games (from actual UP
     activities/societies — nicely specific, use these over generic hobby language).
     Cats, dogs, music mentioned briefly and specifically (e.g. actual pet names/photos
     if Gab wants) rather than as a generic aside.

8. **Contact**
   - Same card treatment as above (consistency, not a new style)
   - Email, GitHub (H3XoRuSH), LinkedIn (gabsamonte614) links only — no contact form
     needed for v1
   - Per Portfolio Principles: contact should be **actionable and always reachable**,
     not just a footer section — add a small persistent contact link/button in the
     header/nav (not a full duplicate section, just a quick way to reach it from
     anywhere on the page)
   - Add a **"Download Resume/CV"** button here, prominent, not hidden. Gab has a CV
     PDF already linked from his GitHub README
     (github.com/H3XoRuSH/H3XoRuSH/blob/main/CV%20-%20Samonte%2C%20Rae%20Gabriel.pdf) —
     confirm with Gab whether to reuse that PDF as-is or have him supply an updated one

## Design tokens (for the agent to hardcode as CSS variables)
```
--bg: #F5F1E8;
--ink: #1A1A1A;
--red: #C1442D;     /* Black Hole tag */
--orange: #D9822B;  /* Connect Four tag */
--yellow: #E0B23C;  /* Dots and Boxes tag */
--green: #6B8E4E;   /* Battleship tag */
--shadow-offset: 4px 4px 0px var(--ink);   /* hard shadow, no blur */
--border: 2.5px solid var(--ink);
--font-display: 'Archivo Black', 'Anton', sans-serif;
--font-body: 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```
(Agent: pull exact colors from a screenshot of gabs-arcade.xyz if available, rather than
guessing — these are close approximations from the provided screenshot.)

## Tech setup
- Astro, static output (no SSR needed for v1 — everything here is static content)
- Content collections for projects (so adding a new project later = adding a markdown
  file, not editing a component)
- One shared `Card.astro` component implementing the hard-shadow/border/accent pattern,
  reused for projects, comp-programming stats, and contact — this is the consistency
  mechanism that makes the whole site feel unified
- Astro `<Image />` for the arcade screenshot / any project images
- No unnecessary JS islands — the only interactive bit needed is the hero tile
  scroll-links, which can be done with plain anchor tags, no framework required
- **Performance/mobile requirements (from Portfolio Principles — treat as acceptance
  criteria, not nice-to-haves):**
  - Mobile-first responsive layout — test the card grid, hero tiles, and nav at mobile
    width specifically, not just shrink the desktop layout
  - Optimize/compress the arcade screenshot and any other images (Astro's `<Image />`
    handles this if used correctly — don't bypass it with raw `<img>` tags)
  - No layout-shift-causing lazy loads above the fold
  - Keep total JS minimal — this site should load fast even on a slow connection,
    which is itself a small proof point of Gab's engineering judgment

## Open items to confirm with Gab before/while building
- Final site title/headline treatment ("Gab's Workshop" vs alternatives)
- Whether to embed a live screenshot of the arcade or just link out
- Codeforces/AtCoder handles and whether to display stats
- Any pet photos/names for the About section
- Which of LERA / WebSnapse Dynamic / EAMC GastroFilter / Grad Dedications have public
  repos or live links to share (LinkedIn data has descriptions but no links for these)
- Confirm dates/timeframe for console-911 if it should be shown (not in LinkedIn data)
- LinkedIn "About" text is written in a corporate register ("results-driven
  professional") — needs a full rewrite in Gab's actual voice per the note above; agent
  should draft 2-3 options and let Gab pick rather than shipping a direct paraphrase
- Confirm the 5-project featured set (Arcade, cam-no-map, Fake News Detector,
  console-911, WebSnapse Dynamic) is the right curation — Gab may want to swap one
- Any real metrics Gab can supply for the featured projects (accuracy %, usage numbers,
  contest rank/rating) — do not fabricate placeholders
- Confirm whether to reuse the existing CV PDF from the GitHub README or have Gab supply
  an updated resume for the download button
- After the agent pulls the full repo list via GitHub MCP: confirm with Gab which
  additional repos are worth showing at all (e.g. exclude tutorial-following repos,
  coursework clones, or anything he considers unfinished/not representative) rather than
  dumping every repo into the strip by default