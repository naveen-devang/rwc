# FIND Real Estate - Design System

**Reference Sites:** - [FIND Real Estate](https://findrealestate.com/)
- [Awwwards - FIND Real Estate (by Cuberto)](https://www.awwwards.com/sites/find-real-estate)

This document extracts and extrapolates the design system, typography, colors, layout principles, and interactive animations of the FIND Real Estate website, built by the award-winning agency Cuberto. It is optimized for ingestion by an AI site generator (like Antigravity) to reconstruct a visually and experientially identical platform.

---

## 1. Brand Identity & Vibe
- **Keywords:** Minimalist, Premium, Confident, Modern, "Rewired".
- **Visual Style:** High-contrast monochromatic layouts, large striking imagery (architecture/people), abundant whitespace, and fluid scrolling experiences.

---

## 2. Color Palette

The color system relies heavily on stark contrasts to give a premium, editorial feel.

### Core Colors
| Token Name | Hex Value | RGB Value | Usage |
| :--- | :--- | :--- | :--- |
| `--color-bg-primary` | `#FFFFFF` | `rgb(255, 255, 255)` | Main background color. |
| `--color-bg-secondary`| `#F4F4F4` | `rgb(244, 244, 244)` | Off-white sections (e.g., "How FIND Can Help You"). |
| `--color-bg-dark` | `#0A0A0A` | `rgb(10, 10, 10)` | Dark mode sections / Footer background. |
| `--color-text-primary`| `#000000` | `rgb(0, 0, 0)` | Primary headings and body text on light backgrounds. |
| `--color-text-inverse`| `#FFFFFF` | `rgb(255, 255, 255)` | Text on dark backgrounds. |
| `--color-text-muted` | `#666666` | `rgb(102, 102, 102)` | Subtitles, placeholders, secondary descriptions. |
| `--color-border` | `#E5E5E5` | `rgb(229, 229, 229)` | Dividers, subtle card borders. |

### Accents
*Instead of a bright brand color, the site relies on photography and high-contrast UI elements. Accent interactions are typically inverted (black to white, white to black).*

---

## 3. Typography

The typography is distinctly modern, utilizing a premium geometric/neo-grotesque sans-serif.

### Font Families
- **Primary Font (Display & Headings):** `Neue Montreal`, `PP Mori`, or `Inter Display`.
  - *Fallback:* `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- **Secondary Font (Body & UI):** `Inter` or `Roobert`.

### Typographic Scale
| Element | Font Size (Desktop) | Font Size (Mobile) | Weight | Line Height | Tracking/Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title (H1)** | `8rem` (128px) | `4rem` (64px) | 500 / Medium | `1.0` | `-0.02em` |
| **Section Title (H2)**| `5rem` (80px) | `2.5rem` (40px) | 500 / Medium | `1.1` | `-0.01em` |
| **Card Title (H3)** | `2rem` (32px) | `1.5rem` (24px) | 500 / Medium | `1.2` | `normal` |
| **Lead Paragraph** | `1.5rem` (24px)| `1.25rem` (20px)| 400 / Regular | `1.4` | `normal` |
| **Body Text (p)** | `1.125rem` (18px)| `1rem` (16px) | 400 / Regular | `1.5` | `normal` |
| **UI Labels / Nav** | `0.875rem` (14px)| `0.875rem` (14px)| 500 / Medium | `1.0` | `0.05em` (Uppercase) |

---

## 4. Grid & Spacing System

### Layout Grid
- **Max Width:** `1600px`
- **Columns:** 12-column grid
- **Gutter:** `24px` (Desktop) / `16px` (Mobile)
- **Margins:** `5vw` or minimum `24px` on screen edges.

### Spacing Scale (8pt grid system)
- `--space-xs`: `8px`
- `--space-sm`: `16px`
- `--space-md`: `24px`
- `--space-lg`: `48px`
- `--space-xl`: `96px` (Default section padding)
- `--space-xxl`: `160px` (Large section spacing / Hero bottom padding)

---

## 5. UI Components

### Buttons
- **Primary Button:** - Shape: Pill-shaped (border-radius: `999px`) or sharp rectangle.
  - Default: Black background (`#000`), White text (`#FFF`).
  - Hover: Background fills with White, Text becomes Black. Border (`1px solid #000`) remains.
  - Padding: `16px 32px`.
- **Magnetic Effect:** Buttons gently pull towards the user's cursor on hover (using GSAP).

### Navigation (Header)
- **State:** Fixed to top, transparent on load, blurs/solidifies on scroll (`backdrop-filter: blur(10px); background: rgba(255,255,255,0.8)`).
- **Structure:** Logo left, Links center, CTA/Profile right.

### Cards (Properties & Blog)
- **Image:** Full-bleed image within the card. Aspect ratio typically 4:5 or 16:9.
- **Hover State:** Image scales up slightly (`transform: scale(1.05)`) within a hidden overflow container. Text overlay shifts up.

---

## 6. Animations & Interactions (Crucial for Awwwards Feel)

To replicate the Cuberto experience, standard CSS transitions are not enough. The site utilizes heavy JavaScript-based animations (e.g., GSAP, Framer Motion, Locomotive Scroll).

### 1. Smooth Scrolling
- Custom smooth scroll implementation with momentum (Lenis or Locomotive Scroll).
- Elements move at slightly different parallax speeds based on scroll depth.

### 2. Page Load / Hero Reveal
- **Text:** The hero text ("Find What Moves You") is broken into lines. They animate in from bottom to top using `clip-path` or an overflow-hidden wrapper (Staggered translation Y from `100%` to `0%`).
- **Duration:** `1.2s`, Easing: `cubic-bezier(0.16, 1, 0.3, 1)`.

### 3. Scroll-Triggered Animations (Intersection Observers)
- **Fade Up:** As sections enter the viewport, text elements slide up by `40px` and fade from `opacity: 0` to `opacity: 1`.
- **Image Parallax:** Images inside masks have a slight negative Y-translation that corrects as the user scrolls past, creating a "window" effect.

### 4. Cursor / Hover Effects
- **Custom Cursor:** The default cursor is hidden and replaced with a custom small black dot.
- **Hover Enlarge:** When hovering over clickable elements (images, videos), the custom cursor expands into a larger circle (often displaying "View" or "Play").
- **Magnetic Links:** Navigation links in the header attract the cursor within a 20px radius.

### 5. Avatar Animation
- As mentioned in the Awwwards breakdown, circular avatars (e.g., for testimonials or agent profiles) feature subtle floating or rolling animations when entering the viewport.

---

## 7. Implementation Notes for Antigravity

- **CSS Framework:** Recommend using Tailwind CSS for rapid styling using the tokens above.
- **Animation Library:** Integrate GSAP + ScrollTrigger for the reveal animations and parallax.
- **React/Next.js:** Build the components modularly. Use Framer Motion for page transitions.
- **Structure:**
  - `<Hero>`: Massive text, background architectural video/image.
  - `<TextMarquee>`: For scrolling text banners ("Real Estate, Rewired").
  - `<FeatureList>`: Staggered list items with numeric markers ("01. Talk to a Real Human").
  - `<TestimonialSlider>`: Clean, swipeable cards with strong typographic quotes.
