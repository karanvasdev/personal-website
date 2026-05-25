---
# ============================================================
# ESSAY TEMPLATE — copy this file, rename it, fill it in.
# The block between the --- lines is "frontmatter": metadata.
# Edit the values, keep the field names.
# ============================================================

title: "Your essay title here"
# The dek is the italic line that appears under the title. One sentence.
dek: "A single-sentence description of what this essay argues."
# Date format: YYYY-MM-DD. This controls ordering and appears on the site.
date: 2026-04-18
# Approximate reading time in minutes. Optional but nice.
readTime: 8
# Tags control the map. Any other post sharing a tag will connect to this one.
# Keep them short, lowercase, meaningful. Don't invent new tags if an existing one fits.
tags: [epistemics, writing, example]
# Set draft: true to hide this from the site until you're ready. Default false.
draft: true
---

<!-- =============================================================
EVERYTHING BELOW THIS LINE IS THE BODY OF YOUR POST.
It's written in Markdown. The reference below shows every pattern
you'll ever need. Delete what you don't use.
============================================================= -->

This is a regular paragraph. Just write plain text. Leave a blank line between paragraphs and they'll separate properly. The first paragraph on the page gets a drop cap automatically — you don't need to do anything.

This is the second paragraph. You can make a word **bold** with two asterisks, or *italic* with one. You can make text *italic by surrounding it with single asterisks* and **bold by surrounding it with double asterisks** and ***both at once with triple***.

## This is a section heading (H2)

Use H2 for the major sections within your essay. The section heading above would be written as `## This is a section heading` in the raw Markdown.

### This is a sub-heading (H3)

Use H3 sparingly, for sub-sections within an H2. H3 renders in italic Fraunces.

## Links and emphasis

You can add a [link to an external site](https://example.com) inline, like this. Links appear in persimmon with a subtle underline.

You can also [link to another post on your site](/essays/another-essay-slug/) — just use the path starting with `/`. The path is `/essays/` plus the filename of the other post without the `.md` extension.

A blockquote is useful when you want to pause the flow of the essay with a single emphatic line:

> This is a blockquote. Use it for a line you want the reader to sit with. It renders italic with a persimmon left border.

## Lists

An unordered (bulleted) list:

- First point. Use a dash followed by a space at the start of each item.
- Second point. These lines can be as long as you want — they'll wrap.
- Third point with **bold** and *italic* inside, which works fine.

A numbered list (same idea but with `1.` `2.` etc.):

1. First step.
2. Second step.
3. Third step.

## Code (if you ever need it)

Inline `code like this` uses single backticks.

A code block uses three backticks on their own line:

```
function example() {
  return "hello";
}
```

You can tag the language after the first set of backticks for syntax highlighting:

```javascript
function example() {
  return "hello";
}
```

## Horizontal rule (a break between sections)

Three dashes on their own line creates a small centered rule. Useful when you want a pause that isn't a heading.

---

## Images

To add an image: drop the image file in `public/images/` (create the folder if it doesn't exist), then reference it like this:

![Alt text describing the image](/images/your-image-filename.png)

For an image with a caption, use the HTML `<figure>` tag — Markdown allows raw HTML:

<figure>
  <img src="/images/your-image.png" alt="Alt text" />
  <figcaption>Figure 1 — caption text here</figcaption>
</figure>

## Diagrams (three ways)

### Way 1: Draw it, export it, link it

This is the simplest. Sketch on paper → scan/photograph → drop the image in `public/images/`. Or use Excalidraw, Figma, or tldraw, export as PNG or SVG, drop in `public/images/`. Then reference with the image syntax above.

### Way 2: Inline SVG

If you want a simple geometric diagram that scales perfectly, you can paste raw SVG directly. Wrap it in a figure with class="diagram" for the paper-shade background:

<figure class="diagram">
<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="110" x2="260" y2="110" stroke="#1C1A17" stroke-width="1"/>
  <line x1="40" y1="110" x2="40" y2="30" stroke="#1C1A17" stroke-width="1"/>
  <circle cx="220" cy="50" r="5" fill="#B5543A" />
  <text x="230" y="55" font-family="Fraunces" font-size="11" font-style="italic" fill="#1C1A17">the point</text>
</svg>
<figcaption>Fig. 1 — a simple inline diagram</figcaption>
</figure>

### Way 3: Mermaid (for flowcharts, trees, sequences)

Mermaid is not enabled by default to keep the site lightweight. If you want it, ask and I'll add the plugin. Until then, use Way 1 (exported image) or Way 2 (inline SVG).

## A few typography tips

- For a real em dash (—) type three hyphens `---` and Markdown converts it. Or paste — directly.
- For an ellipsis (…) just paste the character, or type `...`.
- "Smart quotes" vs "dumb quotes": write them however you want; the Markdown processor handles it.
- To emphasize a single word in the title, wrap it in `<em>tags</em>` in the title frontmatter, like: `title: "On <em>rigor</em>"`. The word will render italic in persimmon. Use this sparingly — one word per title at most.
