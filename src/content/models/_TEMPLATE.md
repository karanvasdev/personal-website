---
# ============================================================
# MODEL TEMPLATE — a framework or mental model you return to.
# A Model is something you *apply*. If you only ever reference
# this idea once, it's probably an essay, not a model.
# The diagram/glyph is usually the centerpiece.
# ============================================================

title: "Name of the model"
# The tagline is the one-line explanation, like a subtitle.
tagline: "A single-sentence description of what this model helps you see."
date: 2026-04-18
tags: [example, models]
# OPTIONAL: A small inline SVG that appears as the thumbnail on the Models grid.
# Keep it simple — strokes and small filled shapes work best.
# Use viewBox="0 0 100 100" for consistent sizing.
# The <svg> will inherit the ochre stroke color automatically.
# For filled accent shapes, add class="accent" to that element.
# If you omit this, a default diamond shape is used.
# glyph: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="30"/></svg>'
draft: true
---

<!-- =============================================================
MODEL BODY — describe the framework, show the diagram,
give the conditions of use.

Good structure for a Model post:
  1. The problem this model addresses.
  2. The model itself, usually with a diagram.
  3. How to apply it (when it fires, what it tells you).
  4. Its limits (when NOT to reach for it).
============================================================= -->

## The problem

Two or three sentences on the problem this model helps with. What confusion, mistake, or pattern does this model disentangle?

## The model

A paragraph describing the model in words.

Then the diagram. A model post usually benefits from one central diagram. Use one of these three approaches:

### Option A — inline SVG (good for clean geometric diagrams)

<figure class="diagram">
<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Replace with your own shapes. This is a placeholder. -->
  <rect x="40" y="60" width="100" height="80" fill="none" stroke="#A87C3C" stroke-width="1.5"/>
  <rect x="260" y="60" width="100" height="80" fill="none" stroke="#A87C3C" stroke-width="1.5"/>
  <line x1="140" y1="100" x2="260" y2="100" stroke="#1C1A17" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="90" y="180" font-family="Fraunces" font-size="12" font-style="italic" fill="#1C1A17" text-anchor="middle">compartment A</text>
  <text x="310" y="180" font-family="Fraunces" font-size="12" font-style="italic" fill="#1C1A17" text-anchor="middle">compartment B</text>
  <text x="200" y="92" font-family="Inter" font-size="10" fill="#A9A096" text-anchor="middle" letter-spacing="1">bridge</text>
</svg>
<figcaption>Fig. 1 — the model's shape</figcaption>
</figure>

### Option B — an exported image (good for hand-drawn or complex diagrams)

Drop your image in `public/images/` and reference it like this:

<figure>
  <img src="/images/your-model-diagram.png" alt="Description of the diagram" />
  <figcaption>Fig. 1 — the model's shape</figcaption>
</figure>

## How to apply it

A short numbered list of when you reach for this model and what it tells you:

1. **When you notice X** — check whether Y.
2. **When Y is true** — the model predicts Z.
3. **When Z is counterintuitive** — sit with it, the model is usually right.

## Its limits

A paragraph or two naming when this model *fails* or misleads. Every model has a domain. Saying where yours doesn't apply is the move that separates a tool from a dogma.

## Related

Link to essays where you've applied this model, or to the model that this one extends.

- [Essay where this model is applied](/essays/example-essay-slug/)
