---
target: homepage
total_score: 15
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 2
target_identity: "file:/home/mike/Projects/verticaltech/app/pages/index.vue"
target_fingerprint: "sha256:dc131f04502e7f50efb855d08efb23db188ea7b6a8e4f0b0c7c690f85b8e1a36"
target_path: /home/mike/Projects/verticaltech/app/pages/index.vue
timestamp: 2026-09-23T20-48-30Z
slug: app-pages-index-vue
---
# Critique — app/pages/index.vue (homepage)

## Report header provenance

⚠️ DEGRADED: single-context (no sub-agent tool exposed; A+B run inline sequentially)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No location/status cues beyond nav active state; CTA gives no expectation of what happens next |
| 2 | Match System / Real World | 3 | Plain service language; "Safe, Fast, Reliable" is generic category-speak |
| 3 | User Control and Freedom | 3 | No traps; standard nav/back, minor gap: mobile menu has no Esc handling |
| 4 | Consistency and Standards | 3 | Cards/buttons consistent; hero CTA styles differ from bottom CTA for no reason |
| 5 | Error Prevention | n/a | No inputs on this surface |
| 6 | Recognition Rather Than Recall | 2 | Phone number absent from homepage — user must navigate to contact to call |
| 7 | Flexibility and Efficiency | n/a | Persuade surface |
| 8 | Aesthetic and Minimalist Design | 2 | Placeholder picsum hero + 4 identical cards; looks like a template |
| 9 | Error Recovery | n/a | No error states on this surface |
| 10 | Help and Documentation | n/a | Persuade surface |
| **Total** | | **15/24** | **Acceptable (62%)** |

## Design Specificity Verdict

**LLM assessment**: Category-interchangeable. Swap the nouns and this page sells plumbing, HVAC, or IT support: generic hero claim, 3-number stat strip, 4 identical cards, navy CTA band. Nothing on the page is grounded in elevators (no shaft, cabin, brand, technician, Tbilisi proof) except the words. The confirmed differentiators — 700+ elevators, since 2011, zone-based 24/7 technicians, named partners — are either missing (partners, zones, phone) or flattened (stats show 100+/600+/14 but never the headline 700+).

**Deterministic scan**: `impeccable detect --json app/pages/index.vue` → clean (exit 0, no findings). Whole-tree scan `detect --json app/` → 1 warning: `overused-font` (Inter in `app/app.vue:27`). No slop/contrast/a11y flags beyond that. Detector agrees with the H8 verdict on typography and caught nothing the review missed structurally — the problems are compositional, not rule violations.

**Visual overlays**: No browser injection attempted — no browser tool exposed in this context. No user-visible overlay exists; fallback signal is the CLI scan above plus source inspection.

## Overall Impression

Solid skeleton, zero persuasion. The page does the right things in the right order (promise → proof → services → close) but every block is the thinnest possible version of itself, and the single most important element for a lead-gen site — the phone number — never appears. Biggest opportunity: make the hero close the deal for a building manager in 10 seconds (phone + 700+ proof + real elevator imagery).

## What's Working

1. **Correct Persuade spine.** Hero → stats → services → trust CTA mirrors the brief's "trust before persuasion, one path to contact" and every service card routes somewhere real. The IA is right; the content inside it is thin.
2. **Bilingual-safe component split.** HeroSection/ServiceCard/Header keep copy in i18n keys, so visual fixes don't fork ka/en/ru. Good bones for refinement.
3. **Sticky nav with active state + mobile menu.** Basic orientation works; `aria-expanded` on the menu button is present and labels recompute on locale switch.

## Priority Issues

- **[P1] Phone number nowhere on the homepage.** **Why it matters**: PRODUCT.md says success = calls; managers scan and call, they don't browse to /contact first. Every scroll ends at a `NuxtLink`, never a `tel:`. **Fix**: add `tel:+995595147878` link in hero (third element or under CTAs) and in the bottom CTA band alongside the contact button. **Suggested command**: `/impeccable clarify`
- **[P1] Hero image is a picsum placeholder at 30% opacity.** **Why it matters**: a fake grayscale wash behind "trust us with your elevator" actively destroys the trust the page exists to build. **Fix**: replace with a real cabin/shaft/technician photo; until provided, drop the photo and use a solid navy hero with a spec-detail motif rather than a lying image. Never ship picsum. **Suggested command**: `/impeccable bolder`
- **[P2] Four identical ServiceCards — no scannability.** **Why it matters**: managers scan, builders compare; four same-shape cards with two-line descs and identical "Learn more →" give neither group a reason to click one over another. **Fix**: differentiate with one proof line each (e.g. Repair: "8-item checklist + defect report"; Service: "24/7, zone technicians"), add icons, vary the spotlight card. **Suggested command**: `/impeccable layout`
- **[P2] Stats band undersells the headline number.** **Why it matters**: the one uncopyable fact (700+ elevators, 14 years) never appears as a headline; "100+/600+/14" forces arithmetic and omits the total. **Fix**: lead with "700+ elevators served since 2011" as the band headline, keep the three splits beneath. **Suggested command**: `/impeccable clarify`
- **[P3] Overused Inter + two competing CTA styles.** **Why it matters**: detector-confirmed generic type plus ghost-button hero vs solid-button footer CTA reads as template, not authored brand. **Fix**: keep Inter only if Noto Sans Georgian pairing is load-bearing; unify CTA to one primary style (solid brand) with ghost as secondary. **Suggested command**: `/impeccable typeset`

## Persona Red Flags

**Jordan (First-Timer, building manager)**: lands on "Safe, Fast, Reliable" — no building type, no city, no price signal within 5 seconds. Clicks "Learn more" (first CTA, ghost style) and lands on /about instead of a service. No visible help or "which service do I need?" guidance. Will bounce before finding the phone number.
**Casey (Distracted Mobile, one-handed)**: hero stacks 2 full-width-feel CTAs plus hidden phone; primary call action is not in the thumb zone and requires navigating to /contact. picsum hero at 1600px loads heavy on slow connections with zero payoff. Touch targets OK, but the page demands reading 4 cards to choose — no tap-and-call shortcut.
**Riley (Stress Tester)**: switches locale to ka mid-scroll — labels recompute (good) but hero `alt=title` duplicates the H1 for screen readers; `loading="eager"` on a decorative placeholder blocks render; ServiceCard "Learn more →" arrow is a raw text glyph, untranslatable and RTL-unsafe.

## Minor Observations

- Hero CTA pair ("Learn more" ghost + "Contact us" solid) inverts hierarchy: the exploratory action is visually louder at a glance due to position.
- `text-ink/70` card desc vs `text-white/80` hero subtitle: muted grays risk contrast dips on white; verify AA.
- Mobile menu has no Esc-to-close or focus trap; `watch(locale)` closes it but route change doesn't explicitly.
- Missing partners/zones strip on homepage despite being the trust evidence managers check before calling.

## Questions to Consider

- What if the hero's job were "get the call," not "say hello" — phone-first, proof-backed?
- Does this page need four equal services, or one spotlight (24/7 service) with three supporting?
- What would a confident version look like with a real elevator photo and the 700+ headline?
