---
name: Vertical Technology
description: Trust-first elevator service marketing and lead-generation site
colors:
  brand-teal: "#2B7A8A"
  brand-sky: "#4FA5B8"
  deep-navy: "#0D1B2A"
  charcoal: "#1A1A1A"
  mist: "#F5F5F5"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Inter, Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.1
  headline:
    fontFamily: "Inter, Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Inter, Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  sm: "16px"
  md: "24px"
  lg: "48px"
components:
  button-primary:
    backgroundColor: "{colors.brand-teal}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.brand-sky}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.10)"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  card-service:
    backgroundColor: "{colors.white}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.lg}"
    padding: "24px"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
---

# Design System: Vertical Technology

## Overview

**Creative North Star: "The Steady Shaft"**

Vertical Technology looks like what it sells: steady vertical competence. Deep navy sections carry authority, teal marks the engineering signal, and calm mist-white surfaces keep long service lists scannable for building managers. Nothing decorative competes with proof — stats, coverage zones, and partner names always sit above ornament.

Density is moderate and airy: one centered column, generous section padding, cards in even grids. The aesthetic philosophy is industrial trust without coldness — crisp Inter/Noto Sans Georgian type, soft 8–12px corners, gentle lift on hover, never a hard sell. The confirmed anti-reference is fabrication: no invented testimonials, logos, or stats beyond the confirmed numbers.

**Key Characteristics:**
- Navy authority framing, teal signal accents, mist calm body
- One centered column (max-w-6xl), even card grids
- Confident and calm components: soft corners, gentle hover lift

## Colors

Engineering teal on navy authority with a calm mist body; white surfaces carry the content.

### Primary
- **Signal Teal** (#2B7A8A): primary actions, stat numerals, card titles, active nav. The engineering signal — used sparingly against navy and white.
- **Lift Sky** (#4FA5B8): hover state for primary actions, wordmark accent ("Vertical"), learn-more links. Never a body background.

### Neutral
- **Deep Shaft Navy** (#0D1B2A): header, hero, CTA band, footer. Always paired with white text at 80–100% opacity.
- **Charcoal Ink** (#1A1A1A): body text on light surfaces; muted to 70% opacity for secondary descriptions.
- **Calm Mist** (#F5F5F5): page background. White cards sit on it.
- **Clean White** (#FFFFFF): cards, form panel, primary button text.

### Named Rules (optional, powerful)
**The Signal Rarity Rule.** Teal covers ≤10% of any screen. Its rarity is the point — if everything is signal, nothing is.

## Typography

**Display Font:** Inter (with Noto Sans Georgian for ka)
**Body Font:** Inter (with Noto Sans Georgian for ka)

**Character:** Crisp, upright, procurement-readable. Extrabold display for hero and stats, semibold labels for actions, regular body for scanning. Georgian glyphs render in Noto Sans Georgian at the same weights (400–800).

### Hierarchy
- **Display** (800, clamp 2.25rem–3rem, 1.1): hero titles only (max-w-2xl), plus 4xl stat numerals.
- **Headline** (700, 1.5rem, 1.25): section titles (services, CTA, info headings).
- **Title** (700, 1.125rem, 1.4): card titles in Signal Teal.
- **Body** (400, 1rem–1.125rem, 1.5): subtitles (white/80 on navy), descriptions (ink/70 on white), max ~65ch via max-w-xl/2xl.
- **Label** (600, 0.875rem, 1.4): buttons, nav links (0.875rem/500 on desktop nav), form labels, footer headings.

### Named Rules (optional)
**The Two-Weight Rule.** Display and headlines are 700–800; everything else is 400–600. No middle-weight drift.

## Layout

Single centered column: `max-w-6xl` (72rem) with `px-4` gutters, sections spaced `py-12` (content) to `py-20/28` (hero) and `py-14` (CTA band). Content grids: stats 3-up, services 1→2→4 columns (`sm:grid-cols-2 lg:grid-cols-4`), contact info/form 2-up on large. Rhythm is card-gap `gap-4` (16px) and section-gap `gap-8` (32px). Responsive behavior: desktop nav collapses to a hamburger panel below `md`; hero type steps 4xl→5xl at `md`; grids collapse to single column on mobile. Sticky navy header (`z-50`) anchors every scroll.

## Elevation & Depth

Flat by default with tonal layering: mist page, white cards, navy bands. Depth comes from small shadows, not borders — cards carry no outline.

### Shadow Vocabulary (if applicable)
- **Card rest** (`box-shadow: 0 1px 2px rgba(0,0,0,0.05)`): stat blocks, service cards, form panel at rest.
- **Card lift** (`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.10)`): service-card hover, paired with `-translate-y-1`.
- **Header rest** (`box-shadow: 0 1px 3px rgba(0,0,0,0.10)`): sticky navy header separation.

### Named Rules (optional)
**The Flat-By-Default Rule.** Surfaces are flat at rest with `shadow-sm`. Shadows deepen only on hover or for the sticky header — never decorative stacking.

## Shapes

Soft-industrial form language: gently rounded rectangles everywhere, no pills except none, no sharp spec-sheet corners. Buttons and inputs use a comfortable radius (8px); cards and form panels use a broader radius (12px); the mobile menu button uses a tight radius (4px). Hero imagery is full-bleed with no radius, dimmed to 30% opacity under navy. Map embed is the one rounded utility surface (12px, borderless).

## Components

### Buttons
Confident and calm: solid teal, soft corners, sky hover.
- **Shape:** comfortable rounding (8px)
- **Primary:** Signal Teal background, white semibold text, padding 12px 24px
- **Hover / Focus:** background shifts to Lift Sky; inputs shift border to Signal Teal with no outline
- **Secondary / Ghost (if applicable):** white/10 background on navy with white text, hover white/20 (hero "Learn more")

### Cards / Containers
- **Corner Style:** broad rounding (12px)
- **Background:** Clean White on Calm Mist
- **Shadow Strategy:** Card rest at rest; Card lift + rise 4px on service-card hover
- **Border:** none
- **Internal Padding:** 24px

### Inputs / Fields
- **Style:** white background, default border, comfortable rounding (8px), padding 8px 12px
- **Focus:** border shifts to Signal Teal, outline removed
- **Error / Disabled:** red-500 border with red-600 message text (12px) below the field; success panel is green-50 background with green-700 text (14px, 12px radius)

### Navigation
Sticky navy bar, white 14px medium links, Lift Sky on hover/active; logo is extrabold tight-tracked wordmark with "Vertical" in Lift Sky. Mobile: hamburger toggles a bordered panel (white/10 divider) with block links and white/10 hover; locale switcher sits inline at the end. Keyboard-navigable with clear focus; menu closes on locale switch.

### Stat Block
Centered white card (12px radius, rest shadow): 4xl extrabold Signal Teal numeral over 14px ink label. Always grouped in threes, never alone.

### Hero Band
Navy band with full-bleed image at 30% opacity, contained content (max-w-6xl, py-20/28): extrabold display title (max-w-2xl), white/80 subtitle (max-w-xl), optional action row (flex wrap, gap-3).

### Language Switcher
Compact uppercase 12px semibold chips (padding 4px 8px, 4px radius): active locale is Signal Teal with white text; inactive are white/10 with white/20 hover.

## Do's and Don'ts

### Do:
- **Do** keep one centered `max-w-6xl` column with `px-4` gutters on every section.
- **Do** end every service path at phone or the contact form — never a dead end.
- **Do** render ka in Noto Sans Georgian at the same weights as Inter; never let Georgian fall back to system sans alone.
- **Do** use Signal Teal sparingly (actions, numerals, active states) per the Signal Rarity Rule.

### Don't:
- **Don't** fabricate testimonials, client logos, or stats beyond 100+ installed / 600+ maintained / 14 years.
- **Don't** introduce new accent hues — Lift Sky is the only hover/secondary voice.
- **Don't** put body copy on image backgrounds without the navy overlay; hero imagery stays at 30% opacity.
- **Don't** hand-edit ka/ru translations — source of truth is `messages/en.json` via the translate script.
