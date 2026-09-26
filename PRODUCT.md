# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: building managers / HOAs managing residential blocks — they need maintenance contracts, emergency response, and repairs. Secondary: developers / builders who need elevators for new construction or renovation projects (installation, shaft consulting, custom orders).

## Product Purpose

Marketing + lead-generation site for Vertical Technology, elevator service company in Tbilisi, Georgia. It must explain installation / service / repair / spare parts, prove reliability, and route visitors to phone or the contact form. Success = qualified inquiries (calls, form submissions) from managers and builders.

## Positioning

Track record since 2011: installing and maintaining 700+ elevators over 14 years across Georgia. A neighboring competitor cannot truthfully copy that operating history.

## Operating Context

Visitors evaluate the company before calling: they check services, coverage zones (Tbilisi, Gori, Mtskheta, Kutaisi, Batumi, Gonio, Zugdidi), partners, and contact details. Contact paths: phone +995 595 147 878 / 0322 12 18 18, email verticaltechnology2011@gmail.com, address Jumper Lezhava N22, Hualing, Tbilisi Plaza, Floor 2, Room 2A-051. Company offers 24/7 availability with zone-based technicians.

## Capabilities and Constraints

- Stack: Nuxt 4.5 + Tailwind CSS + @nuxtjs/i18n (existing codebase answers the stack; no `## Stack` decision needed).
- Locales: ka (default, first-open), en, ru. Source of truth `messages/en.json`; ka/ru auto-filled via `scripts/translate.mjs` + DeepL.
- Contact form is frontend-only (validation → `mailto:` handoff); no backend endpoint.
- Undecided: whether a real POST endpoint / lead-capture backend lands later.

## Brand Commitments

Name: Vertical Technology. Confirmed stats: 100+ installed, 600+ maintained, 14 years experience, 700+ elevators served. Confirmed partners: Kayatec, Kleemann, SRH, Fuji (+ Montanari, Wittur shown). Brand colors: teal `#2B7A8A` / light `#4FA5B8`, off-white `#F5F5F5`, charcoal `#1A1A1A`, deep navy `#0D1B2A`. Inter + Noto Sans Georgian.

## Evidence on Hand

Real: company history (founded 2011, Tbilisi), stats above, partner names, service zones, contact details, service item lists (elevator types, repair items). Absent: real photography, partner logos, testimonials — future work must not fabricate reviews, clients, or stats beyond the confirmed numbers. Current imagery is `picsum.photos` placeholders.

## Product Principles

1. Trust before persuasion: proof (track record, zones, partners) outranks decoration.
2. One path to contact: every service page ends at phone or form, never a dead end.
3. Managers scan, builders compare: scannable service lists plus enough spec depth for procurement.
4. Georgian-first: ka is the default experience; en/ru follow via translation workflow, never diverge by hand.

## Accessibility & Inclusion

Trilingual audience (ka/en/ru) including older residents and managers; readable type, sufficient contrast, keyboard-navigable menu and form with clear validation messages.
