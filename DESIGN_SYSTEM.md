# Design System Documentation

## Overview

This site now uses a comprehensive design token system for consistent styling across all components.

## Design Tokens Location

`src/design/tokens.js` - Central source of truth for all design values

## Key Benefits

✅ **Consistency** - All colors, spacing, typography defined once
✅ **Maintainability** - Change values in one place, updates everywhere
✅ **Scalability** - Easy to extend with new tokens
✅ **Type Safety** - Import and use with autocomplete

## Usage

### Importing Tokens

```javascript
import tokens from '../design/tokens';
```

### Using Colors

```javascript
// Brand colors
style={{color: tokens.colors.brand.purple}}
style={{backgroundColor: tokens.colors.brand.sage}}

// Background colors
style={{backgroundColor: tokens.colors.background.lavenderTint}}

// Text colors
className="text-slate-900" // or use tokens.colors.text.primary
```

### Color Palette

**Brand Colors:**
- `brand.purple` - #9370DB (primary brand color, headings)
- `brand.sage` - #9CAF88 (secondary brand, buttons, accents)
- `brand.purpleLight` - #E6E6FA (footer background)
- `brand.purpleFaded` - rgba(230, 230, 250, 0.7) (decorative elements)
- `brand.sageFaded` - rgba(156, 175, 136, 0.7) (decorative elements)

**Backgrounds:**
- `background.white` - #FFFFFF
- `background.lavenderTint` - #F9F8FF (section backgrounds)
- `background.sageTint` - #F9FBF7 (Bio section)
- `background.lavender` - #E6E6FA (footer)
- `background.gray` - #F5F5F5 (cards, subtle backgrounds)

## Reusable Components

### Button Component

```jsx
import Button from './components/Button';

<Button variant="primary" size="medium" href="#contact">
  CONTACT US
</Button>

<Button variant="secondary" size="large">
  LEARN MORE
</Button>
```

**Props:**
- `variant`: "primary" (sage green) | "secondary" (lavender)
- `size`: "small" | "medium" | "large"
- `href`: Link destination
- `onClick`: Click handler
- `className`: Additional classes

### Card Component

```jsx
import Card from './components/Card';

<Card variant="white" padding="medium">
  {children}
</Card>

<Card variant="tinted" padding="large">
  {children}
</Card>
```

**Props:**
- `variant`: "white" | "subtle" | "elevated" | "tinted"
- `padding`: "small" | "medium" | "large"
- `className`: Additional classes

### SectionHeader Component

```jsx
import SectionHeader from './components/SectionHeader';

<SectionHeader
  overline="OPTIONAL OVERLINE"
  heading="Main Heading Text"
  subheading="Optional subheading text"
  centered={true}
  showDecoration={true}
  decorationVariant="triple"
/>
```

**Props:**
- `overline`: Optional overline text (automatically sage green)
- `heading`: Main heading text (required)
- `subheading`: Optional subheading
- `centered`: Boolean for centering
- `showDecoration`: Show flower petals
- `decorationVariant`: "triple" | "dual"
- `headingColor`: Custom color (defaults to purple)

### SectionDivider Component

```jsx
import SectionDivider from './components/SectionDivider';

<SectionDivider color="lavender" direction="down" variant={1} />
```

**Props:**
- `color`: "white" | "lavender" | "sage" | "lavenderDark"
- `direction`: "up" | "down"
- `variant`: 1 | 2 | 3 (different wave patterns)

### DecorativeCircles Component (Flower Petals)

```jsx
import DecorativeCircles from './components/DecorativeCircles';

<DecorativeCircles variant="triple" />
<DecorativeCircles variant="dual" />
```

**Props:**
- `variant`: "triple" (5 petals + accents) | "dual" (4 petals + accent)

## Color Usage Rules

**Systematic hierarchy:**

1. **Purple (#9370DB)** - Primary headings, important content
2. **Sage Green (#9CAF88)** - Primary CTAs, overlines, supporting elements
3. **Soft Lavender (#F9F8FF)** - Alternating section backgrounds
4. **Soft Sage (#F9FBF7)** - Bio section background
5. **Lavender (#E6E6FA)** - Footer background

## Typography Scale

Use design tokens for consistent font sizing:

```javascript
// Font sizes
tokens.typography.fontSize.xs    // 12px
tokens.typography.fontSize.sm    // 14px
tokens.typography.fontSize.base  // 16px
tokens.typography.fontSize.xl    // 20px
tokens.typography.fontSize['4xl'] // 36px
```

## Spacing Scale

```javascript
tokens.spacing[4]   // 1rem (16px)
tokens.spacing[6]   // 1.5rem (24px)
tokens.spacing[8]   // 2rem (32px)
tokens.spacing[24]  // 6rem (96px)
tokens.spacing[32]  // 8rem (128px)
```

## Section Background Pattern

Alternate backgrounds create visual rhythm:

1. **Hero** - Lavender gradient (#F3F0FF → #FDFCFF)
2. **Challenges** - White
3. **WhoIHelp** - Soft lavender (#F9F8FF)
4. **LearnMore** - White
5. **WhatSetsApart** - Image with lavender overlay
6. **Bio** - Soft sage (#F9FBF7)
7. **Testimonials** - Image with purple overlay
8. **CTA** - White
9. **ContactForm** - Soft lavender (#F9F8FF)
10. **Footer** - Lavender (#E6E6FA)

## Best Practices

### DO:
✅ Always import tokens for colors, spacing, typography
✅ Use reusable components (Button, Card, SectionHeader)
✅ Follow the established color hierarchy
✅ Use Tailwind classes for common utilities
✅ Keep inline styles minimal (only for token-based values)

### DON'T:
❌ Hardcode hex colors in components
❌ Create custom button styles - use Button component
❌ Use arbitrary spacing values - use token scale
❌ Mix design patterns - stay consistent

## Adding New Tokens

To add new design values:

1. Open `src/design/tokens.js`
2. Add to appropriate section (colors, spacing, etc.)
3. Use throughout components via import
4. Update this documentation

## Migration Guide

If you need to update an older component:

**Before:**
```jsx
<div style={{backgroundColor: '#9370DB'}}>
  <h2 style={{color: '#9CAF88'}}>Heading</h2>
</div>
```

**After:**
```jsx
import tokens from '../design/tokens';

<div style={{backgroundColor: tokens.colors.brand.purple}}>
  <h2 style={{color: tokens.colors.brand.sage}}>Heading</h2>
</div>
```

Or better yet, use components:

```jsx
<Card variant="white">
  <SectionHeader heading="Heading" />
</Card>
```

## Questions?

The design system is centralized in `/src/design/tokens.js`. All values are organized by category (colors, typography, spacing, etc.) with clear naming conventions.
