/**
 * Design System Spacing for Thank You BD Discount Program
 * Based on the UI-Only PRD specifications
 */

// Spacing values as specified in PRD
export const Spacing = {
  // Small: 8px
  small: 8,

  // Medium: 16px
  medium: 16,

  // Large: 24px
  large: 24,

  // Extra Large: 32px
  extraLarge: 32,

  // Additional spacing values for flexibility
  tiny: 4,
  xsmall: 12,
  xlarge: 40,
  xxlarge: 48,

  // Screen margins
  screenMargin: 16,
  screenPadding: 16,

  // Component spacing
  cardPadding: 16,
  buttonPadding: 12,
  inputPadding: 12,

  // Navigation spacing
  tabBarHeight: 60,
  headerHeight: 56,

  // Touch target minimum (44pt for accessibility)
  touchTarget: 44,
};

// Spacing utilities for common use cases
export const SpacingUtils = {
  // Padding
  padding: {
    small: Spacing.small,
    medium: Spacing.medium,
    large: Spacing.large,
    extraLarge: Spacing.extraLarge,
  },

  // Margins
  margin: {
    small: Spacing.small,
    medium: Spacing.medium,
    large: Spacing.large,
    extraLarge: Spacing.extraLarge,
  },

  // Gaps between elements
  gap: {
    small: Spacing.small,
    medium: Spacing.medium,
    large: Spacing.large,
    extraLarge: Spacing.extraLarge,
  },

  // Border radius
  borderRadius: {
    small: 4,
    medium: 8,
    large: 12,
    extraLarge: 16,
    round: 50, // For circular elements
  },
};
