# Skipped — installation page ideas (parked, not forgotten)

Ideas from the design review that need real content, photos, or backend before they earn code.
Add each only when the trigger below is met.

## 1. Shaft checklist box (needs copy + owner)
- What: navy box — shaft W×D×H, pit depth, floors/stops, power 380V + "Request measurement" CTA.
- Skipped because: new i18n copy in 3 locales + needs DeepL run (`scripts/translate.mjs`); no confirmed wording from the company.
- Add when: company confirms the 4–5 measurements they actually ask for on a first call.

## 2. FAQ accordion (needs answers)
- What: 3 Qs — price range? timeline? warranty/service?
- Skipped because: inventing prices/timelines would violate the no-fabrication rule (PRODUCT.md).
- Add when: company supplies real answers; use `<details>/<summary>`, open on desktop.

## 3. Real photography (needs assets)
- What: replace `picsum.photos` hero with real shaft/cabin/technician photo at 30% navy overlay.
- Skipped because: no real photos on hand; placeholders must not ship as final.
- Add when: company provides photos; add `srcset` + ka/en/ru `alt`.

## 4. Type cards: one-line use-cases per lift (needs copy)
- What: each of the 7 lift cards gets a use-case line (capacity, cabin size, shaft needs).
- Skipped because: new i18n copy × 7 types × 3 locales; specs must come from the company, not us.
- Add when: company confirms per-type specs; then add `services.installation.typesDesc.*` via `en.json` + translate script.

## 5. Pricing calculator / 3D configurator
- Skipped because: no backend, no pricing data, heavy build for unproven demand.
- Add when: real leads repeatedly ask for ballpark pricing.

## 6. Snap-scroll mobile carousel for type cards
- Skipped because: plain stacking grid works and is less fragile; carousel adds a11y + scroll-snap edge cases.
- Add when: 7 cards feel too long to scroll in testing on a real phone.

## 7. Vertical shaft background motif
- Skipped because: decorative CSS (`repeating-linear-gradient`) competes with the Flat-By-Default rule; proof first.
- Add when: page feels empty after real photos land.

## 8. Sticky mobile call bar analytics
- The bar itself ships now (cheap `tel:` link). Skipped: call-tracking / event logging.
- Add when: lead-capture backend lands (still undecided per PRODUCT.md).

---

# Skipped — service page ideas (parked, not forgotten)

## 9. Response-time SLA / pricing table
- What: "arrival in X min in Tbilisi, Y min in regions" + maintenance plan prices.
- Skipped because: inventing SLAs/prices violates the no-fabrication rule (PRODUCT.md).
- Add when: company supplies real SLA numbers and plan prices.

## 10. Live dispatcher / form → backend
- What: service-request form posting to a real endpoint with status tracking.
- Skipped because: contact form is frontend-only `mailto:` by decision; backend undecided per PRODUCT.md.
- Add when: lead-capture backend lands.

## 11. Testimonials / client logos (service)
- Skipped because: banned by DESIGN.md anti-reference until real ones exist.
- Add when: company provides real client quotes/logos.

## 12. Snap-scroll mobile carousel for feature cards
- Skipped because: plain stacking grid is more robust; carousel adds a11y + scroll-snap edge cases.
- Add when: cards feel too long to scroll in testing on a real phone.

## 13. "How it works" 3-step strip as separate section
- What: Scheduled visit → Inspection + report → Fix from stock, as its own timeline section.
- Skipped because: overlaps the 4 feature cards; one scannable grid beats two competing rhythms on a short page.
- Add when: page grows real process copy distinct from the 4 features; then add `services.service.steps.*` via `en.json` + translate script.

---

# Skipped — repair page ideas (parked, not forgotten)

## 14. Before/after gallery
- What: photo pairs of cabins/shafts before and after repair/modernization.
- Skipped because: needs real photos; `picsum` placeholders would destroy repair trust worse than anywhere else.
- Add when: company provides real job photos; add `srcset` + ka/en/ru `alt`.

## 15. Price ranges / timelines per repair
- What: ballpark cost + duration per repair type (cable, motor, modernization…).
- Skipped because: inventing prices/timelines violates the no-fabrication rule (PRODUCT.md).
- Add when: company supplies real ranges; then add `services.repair.pricing.*` via `en.json` + translate script.

## 16. Symptom checker ("what's wrong with my lift?")
- What: guided triage — noise / stuck / doors / jerky ride → likely cause + call CTA.
- Skipped because: new i18n × 3 locales + risk of wrong self-diagnosis; unproven demand.
- Add when: support calls show repeated triage load that a checker would actually deflect.

## 17. Online booking / dispatcher backend
- What: repair-request form posting to a real endpoint with status tracking.
- Skipped because: contact form is frontend-only `mailto:` by decision; backend undecided per PRODUCT.md.
- Add when: lead-capture backend lands.

---

# Skipped — products page ideas (parked, not forgotten)

## 18. Group-by-category sections + sticky sub-nav
- What: 6 category headings with bento featured hero spanning 2 cols and per-category anchors.
- Skipped because: 6 new i18n headings + anchor logic for 12 items is decoration until users actually filter by catalogue breadth; current chip filter solves scanning cheaper with one query key.
- Add when: catalogue grows past ~30 items with real photos + per-category stock; then group grid and add anchors.

## 19. Availability badge per part (in-stock / on-order, counts)
- What: stock dot/count per card proving warehouse claim.
- Skipped because: needs live stock data or convincing mock; `picsum` placeholders + fake counts would violate no-fabrication rule (PRODUCT.md).
- Add when: warehouse system exposes per-SKU availability.

## 20. Search input on products
- What: `input[type=search]` over the chip bar filtering by name.
- Skipped because: 12 items is below the "needs search" threshold; filter chips handle it in one tap without a keyboard.
- Add when: catalogue exceeds ~30 items or uses numeric SKUs.

## 21. Real product photography
- What: replace `picsum.photos` per-part with real motor/door/panel photos + `srcset` + ka/en/ru `alt`.
- Skipped because: no real photos on hand; fake photos damage repair trust.
- Add when: company provides photos.

---

# Skipped — about page ideas (parked, not forgotten)

## 22. History mini-timeline (2011 → today milestones)
- What: 2–3 step strip under `historyText` — founded 2011 in Tbilisi → 700+ elevators → zone coverage.
- Skipped because: only founding year + current totals are confirmed; intermediate milestones would be invented; also new i18n copy × 3 locales needing a DeepL run.
- Add when: company confirms 1–2 real milestones (e.g. year hitting 500 units, Batumi branch opening).

## 23. Real team / job photography
- What: replace `picsum.photos` hero + history image with real technician/cabin photos at 30% navy overlay.
- Skipped because: no real photos on hand; placeholders must not ship as final.
- Add when: company provides photos; add `srcset` + ka/en/ru `alt`.

## 24. Snap-scroll mobile carousel for values cards
- Skipped because: plain `sm:grid-cols-2 lg:grid-cols-3` stacking works and is less fragile; carousel adds a11y + scroll-snap edge cases for 3 cards.
- Add when: values grow past ~5 cards and the scroll feels too long on a real phone.

---

# Skipped — contact page ideas (parked, not forgotten)

## 25. Form reorders above info on mobile
- What: `order-first` on the form card so mobile visitors hit the callback form before phone cards + map.
- Skipped because: contact intent here is call-first (sticky `tel:` bar already exists app-wide); info cards above the form keep the emergency number closest to the thumb.
- Add when: analytics show form submissions outnumber calls from mobile contact visits.

## 26. Map click-to-load facade
- What: static preview + tap-to-load for the Google embed to save LCP/data.
- Skipped because: one lazy iframe on a low-traffic page is cheap enough; facade adds a11y + thumbnail upkeep.
- Add when: contact LCP suffers on 4G or map gets heavy custom markers.

## 27. Real photography on contact
- What: replace `picsum.photos` contact hero with a real cabin/technician photo at 30% navy overlay.
- Skipped because: no real photos on hand; placeholders must not ship as final.
- Add when: company provides photos; add `srcset` + ka/en/ru `alt`.

## 28. Form → backend instead of `mailto:`
- What: POST endpoint with confirmation state, spam protection, dispatcher routing.
- Skipped because: backend undecided per PRODUCT.md; `mailto:` handoff is the confirmed option A.
- Add when: lead-capture backend lands.

## 29. Call-tracking / form analytics
- What: tel: tap events, topic-select funnel, copy-email counts.
- Skipped because: no analytics pipeline yet; adds weight before we know the funnel matters.
- Add when: lead attribution becomes a question the company actually asks.

## 30. favicon / tab
- What: proper tab icon set from `logo.webp` — `apple-touch-icon` (180px), 32/16 PNGs, `<link rel="icon">` in `app/app.vue`.
- Skipped because: `public/favicon.ico` fallback works for now; needs logo exports at right sizes.
- Add when: logo is final; then export + wire links.
- Status: DONE — emblem-based set ships (`apple-touch-icon.png`, `favicon-32x32/16x16.png`, rebuilt `favicon.ico`); wired in `app/app.vue` with `og:image` + `Organization` JSON-LD.

## 31. hosting move (cache headers)
- What: hosting will move off Vercel in the future — port the immutable `Cache-Control` rules in `vercel.json` (`/hero/*`, `/pages/*`, `/partners/*`, `/logo.webp`, `/favicon-*.png`, `/apple-touch-icon.png`, `/_image*`) to the new host's syntax.
- Skipped because: currently on Vercel.
- Add when: hosting moves (nginx location block / netlify.toml / etc).
