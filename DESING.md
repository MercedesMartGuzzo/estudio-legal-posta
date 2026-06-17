---
name: Serene Juris
colors:
  surface: '#fff8f5'
  surface-dim: '#dfd9d6'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f2ef'
  surface-container: '#f3ede9'
  surface-container-high: '#ede7e4'
  surface-container-highest: '#e7e1de'
  on-surface: '#1d1b1a'
  on-surface-variant: '#454240'
  inverse-surface: '#32302e'
  inverse-on-surface: '#f6efec'
  outline: '#787586'
  outline-variant: '#c8c4d7'
  surface-tint: '#1f4d3d'
  primary: '#163a2d'
  on-primary: '#ffffff'
  primary-container: '#1f4d3d'
  on-primary-container: '#e1f5ee'
  inverse-primary: '#9fe1cb'
  secondary: '#785a00'
  on-secondary: '#ffffff'
  secondary-container: '#fece5e'
  on-secondary-container: '#755700'
  tertiary: '#524d45'
  on-tertiary: '#ffffff'
  tertiary-container: '#6a655c'
  on-tertiary-container: '#ebe3d8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c0e4d6'
  primary-fixed-dim: '#9fe1cb'
  on-primary-fixed: '#04342c'
  on-primary-fixed-variant: '#0f6e56'
  secondary-fixed: '#ffdf9d'
  secondary-fixed-dim: '#efc052'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#e9e1d7'
  tertiary-fixed-dim: '#cdc5bb'
  on-tertiary-fixed: '#1e1b15'
  on-tertiary-fixed-variant: '#4a463e'
  background: '#fff8f5'
  on-background: '#1d1b1a'
  surface-variant: '#e7e1de'
  background-paper: '#FFFDFA'
  forest-accent: '#1F4D3D'
  text-rich-gray: '#5C4E3D'
typography:
  display-lg:
    fontFamily: Libre Baskerville
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Baskerville
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Libre Baskerville
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-sm:
    fontFamily: Libre Baskerville
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  title-lg:
    fontFamily: DM Sans
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

This design system embodies a sophisticated blend of legal authority and modern accessibility. It is designed for a boutique legal firm that prioritizes clarity, empathy, and intellectual precision. The target audience includes discerning professionals and individuals seeking high-stakes legal counsel who value a tranquil, organized, and trustworthy experience.

The design style is **Minimalist with Tactile Illustrations**. It leverages a "Paper & Ink" philosophy, using high-quality whitespace and professional serif typography to establish gravity, while introducing deep forest-green accents and thin linear illustrations to modernize the aesthetic. The interface should feel like a premium printed document—intentional, spacious, and meticulously structured.

## Colors

The palette is anchored by a warm, ivory-tinted neutral (`#FFFDFA`) that prevents the sterile feel of pure white. The primary color is a deep, traditional bottle-green (`#1F4D3D`), used for brand presence and key actions, evoking the gravitas of classic legal offices and bound law libraries.

Secondary accents of muted gold (`#B88E23`) are used sparingly to denote expertise, heritage, or "verified" statuses, pairing naturally with the green in a heraldic, trustworthy combination. Typography and structural lines utilize a range of warm grays and charcoals (`#454240`, `#5C4E3D`) to maintain high legibility without the harshness of pure black. Background layers should utilize the beige-toned `#F4ECE1` to create soft separation between content sections.

## Typography

This design system uses a dual-font strategy to balance tradition with modern utility. **Libre Baskerville** is the voice of the firm; it is used for all headlines and display text to evoke the classic authority of legal publishing. It should be typeset with generous leading to maintain an editorial feel.

**DM Sans** handles the functional aspects of the interface. It provides a clean, neutral counterpoint that is highly legible at smaller scales for body copy, labels, and UI controls. Labels and small metadata should occasionally use all-caps with increased letter spacing to create a distinct hierarchy between informative text and interactive elements.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** approach on desktop to ensure content remains centered and readable, mimicking the proportions of a centered manuscript. On mobile, it transitions to a fluid model with comfortable side margins.

Key spacing principles:
- **Generous Verticality:** Large gaps (`section-gap`) between content blocks to allow the brand's premium photography and linear illustrations room to breathe.
- **Hierarchical Padding:** Use an 8px base unit. Internal card padding should be significantly larger (e.g., 32px or 40px) than the spacing between related text items (e.g., 8px or 12px).
- **Asymmetric Balance:** Occasionally place text in narrow columns (6-8 units) offset from center to create a dynamic, modern editorial look.

## Elevation & Depth

To maintain a clean, professional aesthetic, this design system avoids heavy shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

Depth is created through:
- **Surface Stacking:** Using the beige background (`#F4ECE1`) as a base layer and pure white (`#FFFDFA`) for foreground cards.
- **Hairline Borders:** UI elements like cards or inputs use a 1px border in a soft warm-gray rather than a shadow.
- **Selective Blurs:** Navigation bars may use a subtle backdrop blur (glassmorphism) when scrolling over content to maintain context without adding visual weight.
- **Linear Illustrations:** Thin-line drawings act as "float" elements, often overlapping multiple sections to create a sense of continuity and depth without traditional 3D effects.

## Shapes

The shape language is **Soft** and restrained. We avoid sharp, aggressive corners to ensure the brand feels approachable, but we also avoid overly bubbly shapes that would detract from the legal firm's professionalism.

- **Standard Elements:** Buttons, input fields, and tags use a `0.25rem` (4px) radius.
- **Large Containers:** Cards and modals use a `0.5rem` (8px) radius.
- **Decorative Elements:** Illustrative icons and divider lines should have rounded caps to match the soft-linear style of the brand assets.

## Components

### Buttons
Primary buttons use the bottle-green accent (`#1F4D3D`) with white text, featuring a subtle hover state that slightly lightens the hue. Secondary buttons are outlined in the neutral text color with no fill. All buttons should have generous horizontal padding (at least 24px) to feel balanced.

### Input Fields
Fields are represented by a bottom-border only or a very light 4-sided outline. When focused, the border transitions to the primary bottle-green. Labels should always be visible above the field in a small, bold `DM Sans` font.

### Cards
Cards are the primary container for services and articles. They should have a 1px soft-gray border and no shadow. The background should be pure white (`#FFFDFA`) to pop against the beige site background.

### Chips & Tags
Tags for legal specialties use a light green tint (`#1F4D3D` at 10% opacity) with dark green text. They are pill-shaped but follow the soft roundedness of the system.

### Linear Illustrations
Incorporate thin-stroke (1px to 1.5px) illustrations that combine legal motifs (scales, pillars, pens) with organic, flowing lines. These should be colored in a mix of the primary bottle-green and the secondary gold to tie the brand together visually.