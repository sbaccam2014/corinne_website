// Design Token System
// Centralized design values for consistent styling across the site

export const colors = {
  // Brand Colors
  brand: {
    purple: '#9370DB',           // Primary brand color
    purpleLight: '#E6E6FA',      // Light lavender
    purpleFaded: 'rgba(230, 230, 250, 0.7)',
    purplePale: 'rgba(220, 208, 255, 0.7)',
    purpleTransparent: 'rgba(147, 112, 219, 0.3)',
    purpleOverlay: 'rgba(147, 112, 219, 0.55)',

    sage: '#9CAF88',             // Secondary brand color
    sageFaded: 'rgba(156, 175, 136, 0.7)',
    sageAlt: 'rgba(178, 201, 171, 0.7)',
    sageOverlay: 'rgba(156, 175, 136, 0.9)',
  },

  // Background Colors
  background: {
    white: '#FFFFFF',
    lavenderTint: '#F9F8FF',     // Very light lavender
    sageTint: '#F9FBF7',         // Very light sage
    lavender: '#E6E6FA',         // Footer background
    gray: '#F5F5F5',             // Neutral gray
    grayMat: '#DCDDE2',          // Image mat
    heroGradientStart: '#F3F0FF',
    heroGradientEnd: '#FDFCFF',
  },

  // Text Colors
  text: {
    primary: '#0F172A',          // slate-900
    secondary: '#475569',        // slate-600
    tertiary: '#64748B',         // slate-500
    neutral: '#404040',          // neutral-700
  },

  // Border Colors
  border: {
    light: '#F1F5F9',            // border-gray-100
    medium: '#E2E8F0',
  },
};

export const typography = {
  // Font Families
  fontFamily: {
    sans: '"Raleway", sans-serif',
    display: '"Nunito", sans-serif',
  },

  // Font Sizes (Tailwind scale)
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },

  // Font Weights
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Line Heights
  lineHeight: {
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // Letter Spacing
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.2em',
  },
};

export const spacing = {
  // Spacing Scale (Tailwind scale in rem)
  0: '0',
  1: '0.25rem',    // 4px
  2: '0.5rem',     // 8px
  3: '0.75rem',    // 12px
  4: '1rem',       // 16px
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px
  8: '2rem',       // 32px
  10: '2.5rem',    // 40px
  12: '3rem',      // 48px
  14: '3.5rem',    // 56px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
  32: '8rem',      // 128px
  40: '10rem',     // 160px
  48: '12rem',     // 192px
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  DEFAULT: '0.25rem', // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
};

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
};

export const transitions = {
  duration: {
    fast: '150ms',
    DEFAULT: '200ms',
    slow: '300ms',
  },
  timing: {
    DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// Component-specific tokens
export const components = {
  button: {
    primary: {
      bg: colors.brand.sage,
      text: colors.background.white,
      hover: 0.9, // opacity
    },
    secondary: {
      bg: colors.brand.purple,
      text: colors.background.white,
      hover: 0.9,
    },
    padding: {
      small: `${spacing[2]} ${spacing[4]}`,
      medium: `${spacing[2.5]} ${spacing[5]}`,
      large: `${spacing[3]} ${spacing[6]}`,
    },
  },

  card: {
    padding: {
      small: `${spacing[4]} ${spacing[5]}`,
      medium: `${spacing[6]} ${spacing[8]}`,
      large: `${spacing[8]} ${spacing[10]}`,
    },
    borderRadius: borderRadius['2xl'],
  },

  section: {
    padding: {
      mobile: spacing[20],
      desktop: spacing[32],
    },
    maxWidth: '72rem', // max-w-6xl
  },
};

// Helper functions
export const getColor = (path) => {
  const parts = path.split('.');
  let value = colors;
  for (const part of parts) {
    value = value[part];
  }
  return value;
};

export const getSpacing = (value) => spacing[value];

export const getFontSize = (size) => typography.fontSize[size];

// Export default for easier imports
export default {
  colors,
  typography,
  spacing,
  breakpoints,
  borderRadius,
  shadows,
  transitions,
  components,
  getColor,
  getSpacing,
  getFontSize,
};
