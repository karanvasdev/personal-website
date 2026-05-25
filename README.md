# karanvasdev.com

Personal site. Essays, field notes, marginalia, and models, visualized as a topology.

Built with [Astro](https://astro.build). Content is plain Markdown files. No database. No CMS.

---

## Before you launch — read this first

The project ships with **seeded example content** so the site looks alive the moment you run it. These are placeholders, not your writing. Before you deploy publicly:

1. **Delete the seeded content.** In each of these four folders, delete every `.md` file *except* the one starting with `_TEMPLATE.md` (templates start with an underscore so they're ignored by the build).
   - `src/content/essays/`
   - `src/content/field-notes/`
   - `src/content/marginalia/`
   - `src/content/models/`

2. **Write at least one real post** before deploying — otherwise the site will show four empty sections with "Nothing here yet" messages. One essay or two field notes is enough to make it feel inhabited.

3. **Pick your foundational tags early.** The map is only as meaningful as your tag discipline. Before writing, decide on 5–8 core tags you expect to return to (e.g. `epistemics`, `empathy`, `writing`, `ambition`, `practice`, `rigor`). Use those consistently. New tags are fine — but every new tag is a new island unless it also connects to existing work through shared tags.

---

## Part 1 — Running it on your computer

### One-time setup

1. **Install Node.js.**
   - Go to https://nodejs.org and download the "LTS" version for your OS.
   - Run the installer. Click through the defaults.
   - To confirm it worked: open Terminal (Mac) or Command Prompt (Windows) and type `node --version`. You should see something like `v20.x.x`.

2. **Open this project in a terminal.**
   - On Mac: open Terminal, type `cd ` (with a space), then drag this folder onto the terminal window and press Enter.
   - On Windows: in File Explorer, right-click inside the folder while holding Shift → "Open in Terminal."

3. **Install the project's dependencies.**
   ```
   npm install
   ```
   This reads `package.json` and downloads Astro into a `node_modules/` folder. It'll take a minute the first time. You only do this once.

### Running the site locally

```
npm run dev
```

Astro will print a local address, usually `http://localhost:4321`. Open it in your browser. You'll see your site. Any change you save to a Markdown file or any other file appears in the browser within a second. Leave this running while you write.

To stop the dev server: press `Ctrl+C` in the terminal.

### Building the production version (rarely needed by hand)

```
npm run build
```

This creates a `dist/` folder with the final static site. You won't usually run this manually — Netlify will do it for you on every push. But it's useful to run once before deploying to catch errors.

---

## Part 2 — Writing content

All writing lives in `src/content/`, organized into four sections:

```
src/content/
├── essays/         ← long-form arguments
├── field-notes/    ← short, raw thoughts
├── marginalia/     ← responses to others' work
└── models/         ← frameworks you return to
```

Each section has a `_TEMPLATE.md` file. **Don't edit the template itself.** When you want to write a new post:

1. **Copy the template.** In your file explorer or terminal, copy `_TEMPLATE.md` inside the relevant folder and rename the copy to something descriptive, like `the-shape-of-a-problem.md`. The filename becomes the URL (`/essays/the-shape-of-a-problem/`).
2. **Open the copy in any text editor.** VS Code, Sublime, iA Writer, Obsidian, even TextEdit — anything that saves plain text.
3. **Fill in the frontmatter.** That's the block between the two `---` lines at the top. Follow the comments in the template.
4. **Write the body below the frontmatter.** In Markdown.
5. **Set `draft: false`** when you want it to appear on the site. While `draft: true`, it's invisible except to you.
6. **Save.** If `npm run dev` is running, the site updates immediately.

### What Markdown looks like

A very short cheat sheet (the templates have more):

| You type            | It renders as                |
| ------------------- | ---------------------------- |
| `# Title`           | A huge heading (don't use — the frontmatter title handles this) |
| `## Heading`        | A section heading            |
| `### Sub-heading`   | A smaller heading            |
| `**bold**`          | **bold**                     |
| `*italic*`          | *italic*                     |
| `- item`            | a bullet                     |
| `1. item`           | a numbered list              |
| `[text](url)`       | a link                       |
| `> quoted text`     | a blockquote                 |
| `---`               | a horizontal rule            |
| `` `code` ``        | `inline code`                |

### How the map works automatically

You don't manage the map by hand. It builds itself from your content:

- Every published (`draft: false`) post becomes a node.
- Two posts are connected if they share *any tag*.
- Shape and color come from which section the post is in.

So the single most important habit for the map to work is: **use tags consistently.** If you write about epistemics in one post, tag it `epistemics`, not `epistemology`. If you used `writing` before, don't switch to `writing-craft`. The tags are the skeleton of the map.

A good rule: before inventing a new tag, look at your existing posts and see if one of those tags already fits.

### Adding images

Drop image files in `public/images/` (create the folder if it doesn't exist). Reference them in a post like this:

```markdown
![Alt text](/images/filename.png)
```

The path always starts with `/images/` regardless of where the post is.

### Diagrams

The essay and model templates include examples of all three approaches (exported image, inline SVG, or a placeholder for Mermaid if you want it added later). Start with exported images — it's the fastest workflow.

---

## Part 3 — Publishing to the live site

Once you've written something and set `draft: false`:

1. Save the file.
2. In your terminal:
   ```
   git add .
   git commit -m "Add essay: on the shape of problems"
   git push
   ```
3. Wait ~30 seconds. Netlify automatically rebuilds and deploys.

That's it. No dashboard, no upload, no copy-paste. You wrote a file, you committed it, the site is live.

---

## Project structure (for reference)

```
karanvasdev-site/
├── package.json              ← project config, don't usually touch
├── astro.config.mjs          ← Astro config, don't usually touch
├── public/
│   └── images/               ← drop images here
├── src/
│   ├── content/              ← YOUR WRITING GOES HERE
│   │   ├── config.ts         ← schema for all sections, rarely edited
│   │   ├── essays/
│   │   ├── field-notes/
│   │   ├── marginalia/
│   │   └── models/
│   ├── components/           ← reusable pieces (header, footer, map)
│   ├── layouts/              ← page shells
│   ├── pages/                ← URL structure of the site
│   └── styles/
│       └── global.css        ← all styling, edit if you want to tweak visuals
└── README.md                 ← you are here
```

You'll spend 99% of your time in `src/content/`. Everything else is stable.

---

## Quick reference: common tasks

**Add a new essay.** Copy `src/content/essays/_TEMPLATE.md` → rename → fill in → set `draft: false`.

**Preview a draft without publishing.** Set `draft: true`. It's hidden from the site but visible if you visit its URL directly while running `npm run dev` locally. (Drafts are excluded from the build, so they won't appear publicly.)

**Tweak a color.** Edit `src/styles/global.css`. The four section colors are at the top in `:root`.

**Change your mission statement.** Edit `src/pages/index.astro`. Look for the `<h1>` inside `<div class="landing-intro">`.

**Re-tag existing posts.** Open the `.md` file and edit the `tags:` line in the frontmatter. The map will redraw itself on the next save.

---

## Design system reference

All visual tokens live at the top of `src/styles/global.css` inside `:root`. Edit there to change the system globally.

### Colors

- `--paper` — the page background (warm off-white)
- `--ink` — primary text (soft near-black)
- `--stone` — quiet meta text (warm gray)
- `--persimmon` — the accent color, used for links, emphasis, the *italicized word* in titles
- `--c-essays` / `--c-field` / `--c-marginalia` / `--c-models` — section colors (persimmon / stone / ink / ochre)

### Type scale — 7 sizes

| Token | Size | Role |
|---|---|---|
| `--fs-xs` | 11px | Meta text, labels, nav, dates, tags |
| `--fs-sm` | 14px | Secondary prose, captions, code |
| `--fs-base` | 18px | Default body, simple list titles |
| `--fs-md` | 22px | Emphasized list titles, deks, source titles |
| `--fs-lg` | 28px | H2 in posts, mission, Most Recent header |
| `--fs-xl` | 40px | Post titles, essay list titles |
| `--fs-xxl` | 64px | Section page heroes |

### Fonts — 3 editorial + 1 code

- **Fraunces** — voice, titles, italic emphasis
- **Source Serif 4** — reading prose in posts
- **Inter** — navigation, labels, metadata
- **system monospace** — inline code and code blocks only

To rescale the entire site one notch bigger, change `--fs-base` from 18px to 19px and save — everything proportional will follow.
