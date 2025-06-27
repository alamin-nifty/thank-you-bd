/**
 * Design System Typography for Thank You BD Discount Program
 * Based on the UI-Only PRD specifications
 */

import { Platform } from "react-native";

// Font families
export const FontFamily = {
  regular: Platform.select({
    ios: "System",
    android: "Roboto",
    default: "System",
  }),
  medium: Platform.select({
    ios: "System",
    android: "Roboto-Medium",
    default: "System",
  }),
  bold: Platform.select({
    ios: "System",
    android: "Roboto-Bold",
    default: "System",
  }),
  light: Platform.select({
    ios: "System",
    android: "Roboto-Light",
    default: "System",
  }),
  // Bengali font support
  bengali: Platform.select({
    ios: "Noto Sans Bengali",
    android: "Noto Sans Bengali",
    default: "System",
  }),
};

// Font sizes as specified in PRD
export const FontSize = {
  // Headings: Bold, 18-24pt
  h1: 24,
  h2: 22,
  h3: 20,
  h4: 18,

  // Body Text: Regular, 16pt
  body: 16,

  // Captions: Light, 12-14pt
  caption: 14,
  captionSmall: 12,

  // Button Text: Medium, 16pt
  button: 16,

  // Special sizes
  large: 20,
  small: 14,
  tiny: 10,
};

// Line heights for better readability
export const LineHeight = {
  h1: 32,
  h2: 30,
  h3: 28,
  h4: 26,
  body: 24,
  caption: 20,
  captionSmall: 18,
  button: 24,
};

// Typography styles
export const Typography = {
  // Headings
  h1: {
    fontFamily: FontFamily.bold,
    fontSize: FontSize.h1,
    lineHeight: LineHeight.h1,
    fontWeight: "bold" as const,
  },
  h2: {
    fontFamily: FontFamily.bold,
    fontSize: FontSize.h2,
    lineHeight: LineHeight.h2,
    fontWeight: "bold" as const,
  },
  h3: {
    fontFamily: FontFamily.bold,
    fontSize: FontSize.h3,
    lineHeight: LineHeight.h3,
    fontWeight: "bold" as const,
  },
  h4: {
    fontFamily: FontFamily.bold,
    fontSize: FontSize.h4,
    lineHeight: LineHeight.h4,
    fontWeight: "bold" as const,
  },

  // Body text
  body: {
    fontFamily: FontFamily.regular,
    fontSize: FontSize.body,
    lineHeight: LineHeight.body,
    fontWeight: "normal" as const,
  },

  // Captions
  caption: {
    fontFamily: FontFamily.light,
    fontSize: FontSize.caption,
    lineHeight: LineHeight.caption,
    fontWeight: "300" as const,
  },
  captionSmall: {
    fontFamily: FontFamily.light,
    fontSize: FontSize.captionSmall,
    lineHeight: LineHeight.captionSmall,
    fontWeight: "300" as const,
  },

  // Button text
  button: {
    fontFamily: FontFamily.medium,
    fontSize: FontSize.button,
    lineHeight: LineHeight.button,
    fontWeight: "500" as const,
  },

  // Bengali text
  bengali: {
    fontFamily: FontFamily.bengali,
    fontSize: FontSize.body,
    lineHeight: LineHeight.body,
    fontWeight: "normal" as const,
  },
  bengaliBold: {
    fontFamily: FontFamily.bengali,
    fontSize: FontSize.body,
    lineHeight: LineHeight.body,
    fontWeight: "bold" as const,
  },
};
