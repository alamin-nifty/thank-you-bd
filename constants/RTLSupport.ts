/**
 * RTL Support and Font Scaling Utility
 * Provides comprehensive support for Right-to-Left text direction and dynamic font scaling
 */

import { I18nManager } from "react-native";

// RTL Support Configuration
export const RTL_CONFIG = {
  // Languages that use RTL
  RTL_LANGUAGES: ["bn", "ar", "he", "fa", "ur"] as const,

  // Default text alignment
  DEFAULT_TEXT_ALIGN: "left" as const,
  RTL_TEXT_ALIGN: "right" as const,

  // Layout direction
  DEFAULT_LAYOUT: "ltr" as const,
  RTL_LAYOUT: "rtl" as const,
} as const;

// Font scaling configuration
export const FONT_SCALING = {
  // Minimum and maximum font scale factors
  MIN_SCALE: 0.8,
  MAX_SCALE: 2.0,
  DEFAULT_SCALE: 1.0,

  // Font size categories
  SIZES: {
    XS: 12,
    SM: 14,
    BASE: 16,
    LG: 18,
    XL: 20,
    XXL: 24,
    XXXL: 32,
  } as const,

  // Line height multipliers
  LINE_HEIGHT: {
    TIGHT: 1.2,
    NORMAL: 1.4,
    RELAXED: 1.6,
    LOOSE: 1.8,
  } as const,
} as const;

// Check if current language is RTL (simplified to use system RTL)
export const isRTL = (): boolean => {
  return I18nManager.isRTL;
};

// Get text alignment based on language
export const getTextAlign = (): "left" | "right" | "center" => {
  return isRTL() ? RTL_CONFIG.RTL_TEXT_ALIGN : RTL_CONFIG.DEFAULT_TEXT_ALIGN;
};

// Get layout direction
export const getLayoutDirection = (): "ltr" | "rtl" => {
  return isRTL() ? RTL_CONFIG.RTL_LAYOUT : RTL_CONFIG.DEFAULT_LAYOUT;
};

// RTL-aware flex direction
export const getFlexDirection = (
  defaultDirection: "row" | "column" = "row"
): "row" | "row-reverse" | "column" | "column-reverse" => {
  if (defaultDirection === "row" && isRTL()) {
    return "row-reverse";
  }
  return defaultDirection;
};

// RTL-aware margin/padding
export const getRTLMargin = (
  left: number,
  right: number
): { marginLeft: number; marginRight: number } => {
  if (isRTL()) {
    return { marginLeft: right, marginRight: left };
  }
  return { marginLeft: left, marginRight: right };
};

export const getRTLPadding = (
  left: number,
  right: number
): { paddingLeft: number; paddingRight: number } => {
  if (isRTL()) {
    return { paddingLeft: right, paddingRight: left };
  }
  return { paddingLeft: left, paddingRight: right };
};

// RTL-aware border radius
export const getRTLBorderRadius = (
  topLeft: number,
  topRight: number,
  bottomLeft: number,
  bottomRight: number
): {
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;
} => {
  if (isRTL()) {
    return {
      borderTopLeftRadius: topRight,
      borderTopRightRadius: topLeft,
      borderBottomLeftRadius: bottomRight,
      borderBottomRightRadius: bottomLeft,
    };
  }
  return {
    borderTopLeftRadius: topLeft,
    borderTopRightRadius: topRight,
    borderBottomLeftRadius: bottomLeft,
    borderBottomRightRadius: bottomRight,
  };
};

// Font scaling utilities
export const getScaledFontSize = (
  baseSize: number,
  scaleFactor?: number
): number => {
  const systemScale = I18nManager.isRTL ? 1.0 : 1.0; // System font scale
  const customScale = scaleFactor || FONT_SCALING.DEFAULT_SCALE;
  const finalScale = Math.min(
    Math.max(customScale * systemScale, FONT_SCALING.MIN_SCALE),
    FONT_SCALING.MAX_SCALE
  );

  return Math.round(baseSize * finalScale);
};

// Get line height for a given font size
export const getLineHeight = (
  fontSize: number,
  multiplier: keyof typeof FONT_SCALING.LINE_HEIGHT = "NORMAL"
): number => {
  return Math.round(fontSize * FONT_SCALING.LINE_HEIGHT[multiplier]);
};

// RTL-aware styles
export const RTLStyles = {
  // Text alignment
  text: {
    left: { textAlign: "left" as const },
    right: { textAlign: "right" as const },
    center: { textAlign: "center" as const },
    auto: { textAlign: getTextAlign() },
  },

  // Layout direction
  layout: {
    ltr: { direction: "ltr" as const },
    rtl: { direction: "rtl" as const },
    auto: { direction: getLayoutDirection() },
  },

  // Flex direction
  flex: {
    row: { flexDirection: getFlexDirection("row") },
    column: { flexDirection: getFlexDirection("column") },
    rowReverse: { flexDirection: "row-reverse" as const },
    columnReverse: { flexDirection: "column-reverse" as const },
  },

  // Common RTL-aware spacing
  spacing: {
    marginHorizontal: (value: number) => getRTLMargin(value, value),
    marginVertical: (value: number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingHorizontal: (value: number) => getRTLPadding(value, value),
    paddingVertical: (value: number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },

  // RTL-aware positioning
  position: {
    absolute: { position: "absolute" as const },
    relative: { position: "relative" as const },
    left: (value: number) => (isRTL() ? { right: value } : { left: value }),
    right: (value: number) => (isRTL() ? { left: value } : { right: value }),
  },
} as const;

// Font scaling styles
export const FontScalingStyles = {
  // Predefined font sizes with scaling
  sizes: {
    xs: (scaleFactor?: number) => ({
      fontSize: getScaledFontSize(FONT_SCALING.SIZES.XS, scaleFactor),
    }),
    sm: (scaleFactor?: number) => ({
      fontSize: getScaledFontSize(FONT_SCALING.SIZES.SM, scaleFactor),
    }),
    base: (scaleFactor?: number) => ({
      fontSize: getScaledFontSize(FONT_SCALING.SIZES.BASE, scaleFactor),
    }),
    lg: (scaleFactor?: number) => ({
      fontSize: getScaledFontSize(FONT_SCALING.SIZES.LG, scaleFactor),
    }),
    xl: (scaleFactor?: number) => ({
      fontSize: getScaledFontSize(FONT_SCALING.SIZES.XL, scaleFactor),
    }),
    xxl: (scaleFactor?: number) => ({
      fontSize: getScaledFontSize(FONT_SCALING.SIZES.XXL, scaleFactor),
    }),
    xxxl: (scaleFactor?: number) => ({
      fontSize: getScaledFontSize(FONT_SCALING.SIZES.XXXL, scaleFactor),
    }),
  },

  // Line heights
  lineHeight: {
    tight: (fontSize: number) => ({
      lineHeight: getLineHeight(fontSize, "TIGHT"),
    }),
    normal: (fontSize: number) => ({
      lineHeight: getLineHeight(fontSize, "NORMAL"),
    }),
    relaxed: (fontSize: number) => ({
      lineHeight: getLineHeight(fontSize, "RELAXED"),
    }),
    loose: (fontSize: number) => ({
      lineHeight: getLineHeight(fontSize, "LOOSE"),
    }),
  },

  // Combined font styles
  text: {
    xs: (scaleFactor?: number) => ({
      ...FontScalingStyles.sizes.xs(scaleFactor),
      ...FontScalingStyles.lineHeight.normal(FONT_SCALING.SIZES.XS),
    }),
    sm: (scaleFactor?: number) => ({
      ...FontScalingStyles.sizes.sm(scaleFactor),
      ...FontScalingStyles.lineHeight.normal(FONT_SCALING.SIZES.SM),
    }),
    base: (scaleFactor?: number) => ({
      ...FontScalingStyles.sizes.base(scaleFactor),
      ...FontScalingStyles.lineHeight.normal(FONT_SCALING.SIZES.BASE),
    }),
    lg: (scaleFactor?: number) => ({
      ...FontScalingStyles.sizes.lg(scaleFactor),
      ...FontScalingStyles.lineHeight.relaxed(FONT_SCALING.SIZES.LG),
    }),
    xl: (scaleFactor?: number) => ({
      ...FontScalingStyles.sizes.xl(scaleFactor),
      ...FontScalingStyles.lineHeight.relaxed(FONT_SCALING.SIZES.XL),
    }),
    xxl: (scaleFactor?: number) => ({
      ...FontScalingStyles.sizes.xxl(scaleFactor),
      ...FontScalingStyles.lineHeight.loose(FONT_SCALING.SIZES.XXL),
    }),
    xxxl: (scaleFactor?: number) => ({
      ...FontScalingStyles.sizes.xxxl(scaleFactor),
      ...FontScalingStyles.lineHeight.loose(FONT_SCALING.SIZES.XXXL),
    }),
  },
} as const;

// Hook for RTL and font scaling
export const useRTLAndFontScaling = (fontScaleFactor?: number) => {
  const isRTLMode = isRTL();
  const textAlign = getTextAlign();
  const layoutDirection = getLayoutDirection();

  return {
    // RTL properties
    isRTL: isRTLMode,
    textAlign,
    layoutDirection,

    // RTL-aware functions
    getFlexDirection: (direction: "row" | "column" = "row") =>
      getFlexDirection(direction),
    getRTLMargin: (left: number, right: number) => getRTLMargin(left, right),
    getRTLPadding: (left: number, right: number) => getRTLPadding(left, right),

    // Font scaling functions
    getScaledFontSize: (baseSize: number) =>
      getScaledFontSize(baseSize, fontScaleFactor),
    getLineHeight: (
      fontSize: number,
      multiplier?: keyof typeof FONT_SCALING.LINE_HEIGHT
    ) => getLineHeight(fontSize, multiplier),

    // Predefined styles
    styles: {
      ...RTLStyles,
      font: FontScalingStyles,
    },
  };
};

// Utility to force RTL layout (for testing)
export const forceRTL = (enabled: boolean = true): void => {
  I18nManager.forceRTL(enabled);
  I18nManager.allowRTL(enabled);
};

// Utility to reset RTL layout
export const resetRTL = (): void => {
  I18nManager.forceRTL(false);
  I18nManager.allowRTL(true);
};

// Test RTL layout
export const testRTLSupport = () => {
  console.log("Testing RTL Support...");
  console.log(`Is RTL: ${isRTL()}`);
  console.log(`Text align: ${getTextAlign()}`);
  console.log(`Layout direction: ${getLayoutDirection()}`);
  console.log(`Flex direction (row): ${getFlexDirection("row")}`);
  console.log(`Flex direction (column): ${getFlexDirection("column")}`);

  // Test font scaling
  console.log("\nTesting Font Scaling...");
  console.log(`Base font size (16): ${getScaledFontSize(16)}`);
  console.log(`Large font size (24): ${getScaledFontSize(24)}`);
  console.log(`Line height for 16px: ${getLineHeight(16)}`);
  console.log(`Line height for 24px: ${getLineHeight(24, "RELAXED")}`);
};

export default {
  RTL_CONFIG,
  FONT_SCALING,
  isRTL,
  getTextAlign,
  getLayoutDirection,
  getFlexDirection,
  getRTLMargin,
  getRTLPadding,
  getRTLBorderRadius,
  getScaledFontSize,
  getLineHeight,
  RTLStyles,
  FontScalingStyles,
  useRTLAndFontScaling,
  forceRTL,
  resetRTL,
  testRTLSupport,
};
