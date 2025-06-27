/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

/**
 * Design System Colors for Thank You BD Discount Program
 * Based on the UI-Only PRD specifications
 */

// Primary Brand Colors
const primaryBlue = "#007AFF";
const secondaryGreen = "#34C759";
const accentGold = "#FFD700";

// Background Colors
const backgroundLight = "#F2F2F7";
const backgroundDark = "#1C1C1E";

// Text Colors
const textDark = "#1C1C1E";
const textLight = "#FFFFFF";

// Status Colors
const errorRed = "#FF3B30";
const successGreen = "#34C759";

// Package Colors
const premiumGold = "#FFD700";
const affordableSilver = "#C0C0C0";

export const Colors = {
  // Primary Brand Colors
  primary: primaryBlue,
  secondary: secondaryGreen,
  accent: accentGold,

  // Background Colors
  background: {
    light: backgroundLight,
    dark: backgroundDark,
  },

  // Text Colors
  text: {
    primary: textDark,
    secondary: "#687076",
    light: textLight,
  },

  // Status Colors
  error: errorRed,
  success: successGreen,
  warning: "#FF9500",

  // Package Colors
  premium: premiumGold,
  affordable: affordableSilver,

  // Legacy support for existing components
  light: {
    text: textDark,
    background: backgroundLight,
    tint: primaryBlue,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: primaryBlue,
  },
  dark: {
    text: textLight,
    background: backgroundDark,
    tint: textLight,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: textLight,
  },
};
