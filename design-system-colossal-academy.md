# Colossal Academy Design System

## 1. Brand Overview

Colossal Academy should feel like a modern educational institution with warmth, clarity, and credibility. The visual identity should communicate care, structure, and optimism without drifting into startup, SaaS, or marketing-heavy aesthetics.

Core brand attributes:

- Educational
- Trustworthy
- Warm
- Modern, but not startup-like
- Friendly for parents and children

The overall tone should balance professionalism and approachability. Interfaces should feel welcoming to families, visually clean, and easy to understand within seconds.

## 2. Logo Usage

The logo should always support recognition and clarity, especially in the header and footer.

Guidelines:

- Keep clear space around the logo equal to at least the height of the icon mark or the capital height of the wordmark.
- Prefer placing the logo on light backgrounds such as white, `#fdfcfb`, or `#f7f6f3`.
- On dark or highly saturated backgrounds, use a version with sufficient contrast, ideally with white elements or a simplified monochrome treatment.
- In headers, place the brand on the left side with generous breathing room and minimal competing elements.
- Avoid placing the logo inside visually noisy areas, over photography without an overlay, or against clashing gradients.

Current portal treatment:

- A compact SVG mark using the Colossal Academy gradient system.
- Wordmark styling with `New Tegomin` to echo the brand accent seen in the nursery reference.
- Subtitle or descriptor in uppercase `Montserrat` for supporting brand context such as `Campus Portal` or `Portal principal`.

If the official logo asset becomes available, it should replace the SVG placeholder while preserving spacing, scale, and placement rules.

## 3. Color Palette

The palette is derived from the nursery reference and should remain stable across future properties.

### Primary

`#6d67c8`

Use for:

- Brand emphasis
- Key headings or brand accents
- Navigation hover states
- Gradient starts

### Secondary

`#578daf`

Use for:

- Supporting accents
- Secondary highlights
- Subtle gradients
- Decorative surfaces and section accents

### Accent / CTA

`#20bb96`

Use for:

- Primary buttons
- Action states
- Positive emphasis
- Important interactive highlights

### Button Hover

`#1a9d7e`

Use for:

- Primary button hover and focus states
- Interactive feedback on CTA elements

### Background Light

`#fdfcfb`

Use for:

- Main page background
- Large light sections
- Areas where a clean institutional feel is needed

### Background Soft

`#f7f6f3`

Use for:

- Secondary surfaces
- Soft section transitions
- Hero backgrounds with subtle warmth

### Background Highlight

`#f0f4ff`

Use for:

- Highlight sections
- Card gradients
- Soft interface tinting
- Light emphasis blocks

Usage notes:

- The brand should stay predominantly light.
- Gradients should be soft and friendly, not glossy or overly intense.
- Use the purple-blue-green sequence carefully for brand moments, not everywhere.
- White remains an important structural color for cards, footer areas, and readable content blocks.

## 4. Typography

The reference site suggests a two-font system:

- Primary font: `Montserrat`
- Secondary / accent font: `New Tegomin`

### Primary Font: Montserrat

Use for:

- Body text
- Navigation
- Buttons
- UI labels
- Supporting headings

Recommended style:

- Clean, readable, confident
- Medium to bold weights for UI clarity
- Comfortable line height for family-facing content

Recommended fallback stack:

`Montserrat, "Segoe UI", Helvetica, Arial, sans-serif`

### Secondary / Accent Font: New Tegomin

Use for:

- Brand wordmark treatments
- Occasional heading accents
- Signature editorial moments

Recommended style:

- Use sparingly
- Best for brand presence rather than long-form reading
- Should add character without reducing legibility

Recommended fallback stack:

`"New Tegomin", Georgia, "Times New Roman", serif`

### Usage Rules

Headings:

- Use `Montserrat` by default for most page headings
- Use heavy weights and tight tracking for clarity
- Use `New Tegomin` selectively when emphasizing the brand itself

Body text:

- Use `Montserrat`
- Maintain readable contrast and comfortable line height
- Avoid overly condensed or decorative styles

Highlights:

- Use color, weight, or subtle gradient accents
- Reserve `New Tegomin` for brand-led emphasis, not generic UI labels

Buttons:

- Use `Montserrat`
- Prefer semibold or bold weights
- Keep labels short and direct

## 5. Layout Principles

The design system should feel spacious, calm, and easy to scan.

Core layout principles:

- Generous white space
- Soft rounded corners
- Subtle shadows
- Friendly proportions
- Mobile-first layout

### Spacing Philosophy

Use consistent spacing with room between sections, cards, and controls. The interface should never feel cramped.

Suggested spacing scale:

- `4px`
- `8px`
- `12px`
- `16px`
- `24px`
- `32px`
- `48px`
- `64px`
- `96px`

### Section Structure

Typical structure:

- Short section intro or eyebrow
- Clear heading
- Brief supporting text
- Main interactive content

### Container Philosophy

- Use centered containers with comfortable horizontal padding
- Keep content aligned and readable on large screens
- Avoid overly wide text blocks
- Preserve clean stacking behavior on mobile

## 6. UI Components

### Buttons

Primary button rules:

- Background: `#20bb96`
- Hover: `#1a9d7e`
- Text: white
- Rounded corners
- Short, direct labels
- Subtle hover lift or shadow increase

Secondary button rules:

- Light background
- Brand-colored text, usually purple
- Soft border
- Minimal elevation

Buttons should feel friendly and confident, not aggressive or overly glossy.

### Cards

Card rules:

- Rounded corners
- Soft shadow
- Light backgrounds or soft tinted gradients
- Clear internal spacing
- Gentle hover elevation

Cards should feel clean and approachable. Avoid sharp corners, dense layouts, or dark surfaces unless a specific use case requires it.

### Navigation

Navigation rules:

- Clean header
- Brand on the left
- Minimal navigation
- Soft light background
- Sticky behavior is acceptable if subtle

The navigation should support orientation, not dominate the page.

### Footer

Footer rules:

- Light background
- Simple structure
- Brand presence
- Modest spacing
- Useful links only

The footer should feel consistent with the nursery reference: calm, clear, and institutional.

## 7. Motion & Interaction

Motion should remain subtle, smooth, and non-distracting.

Allowed animations:

- Fade-in on load
- Hover lift on cards
- Button microinteraction

Recommended characteristics:

- Short durations
- Soft easing
- Minimal distance
- No performance-heavy motion

Avoid:

- Large motion
- Flashy effects
- Over-animated parallax
- Heavy JavaScript animation libraries
- Unnecessary bouncing, spinning, or attention-seeking transitions

## 8. Images & Visual Tone

Recommended imagery:

- Children learning
- Classroom environments
- Bright natural light
- Warm and welcoming educational settings

Visual tone:

- Positive
- Real
- Family-friendly
- Clean and contemporary

Avoid:

- Dark stock photos
- Overly corporate imagery
- Tech-style visuals
- Startup office aesthetics
- Highly staged imagery that feels artificial

If gradients or illustrations are used, they should support the brand palette and remain secondary to clarity.

## 9. Accessibility

All implementations should respect basic accessibility expectations.

Rules:

- Maintain readable contrast between text and background
- Use large tap targets for mobile users
- Keep navigation simple and predictable
- Ensure mobile friendliness across viewport sizes
- Preserve visible focus states for keyboard users
- Avoid placing critical text over busy imagery
- Keep button labels and navigation wording explicit

Accessibility should be considered a brand quality standard, not an optional enhancement.

## 10. Implementation Guide (Astro + Tailwind)

Future Astro + Tailwind projects should implement this design system through reusable theme tokens and lightweight component patterns.

### Suggested Tailwind Color Tokens

```js
colors: {
  primary: "#6d67c8",
  secondary: "#578daf",
  accent: "#20bb96",
  "accent-hover": "#1a9d7e",
  "bg-light": "#fdfcfb",
  "bg-soft": "#f7f6f3",
  "bg-highlight": "#f0f4ff",
  ink: "#111827",
  muted: "#4b5563"
}
```

### Suggested Font Tokens

```js
fontFamily: {
  sans: ["Montserrat", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
  brand: ["New Tegomin", "Georgia", "Times New Roman", "serif"]
}
```

### Buttons in Tailwind

Primary button mapping:

- `bg-accent`
- `text-white`
- `rounded-xl` or `rounded-2xl`
- `font-bold`
- `transition`
- `duration-200`
- `hover:bg-accent-hover`
- `hover:-translate-y-px`
- `shadow-lg`

Secondary button mapping:

- `bg-white`
- `text-primary`
- `border`
- `border-primary/15`
- `rounded-xl`
- `font-semibold`
- `shadow-sm`
- `hover:bg-bg-highlight`

### Cards in Tailwind

Suggested mapping:

- `rounded-[28px]` or `rounded-3xl`
- `border`
- `border-primary/10`
- `bg-white`
- `shadow-xl`
- `transition`
- `duration-200`
- `hover:-translate-y-1`
- `hover:shadow-2xl`

Optional card surface variations:

- `bg-gradient-to-b`
- `from-white`
- `to-bg-highlight`

### Layout in Tailwind

Suggested mapping:

- `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- `grid gap-4 md:gap-6 lg:gap-8`
- `py-16 md:py-20 lg:py-24`

Implementation notes:

- Build sections mobile-first
- Keep visual hierarchy simple
- Reuse tokens consistently across campuses
- Avoid introducing unrelated palettes or font pairings

## 11. Future Sites

This design system should be applied consistently across:

- `colossalacademy.com.mx` as the campus selection portal
- `primary.colossalacademy.com.mx` as the Primary School experience
- `nursery.colossalacademy.com.mx` as the existing Nursery School experience

Consistency goals:

- Shared palette
- Shared button language
- Shared typography rules
- Shared corner radius and shadow philosophy
- Shared accessibility baseline
- Shared overall tone

Each campus site may have its own content, layout emphasis, and imagery selection, but all should feel like part of the same Colossal Academy brand family.

The portal should remain the simplest expression of the system. Primary and Nursery can extend the system with additional sections and content, but they should not drift into a different visual identity.
