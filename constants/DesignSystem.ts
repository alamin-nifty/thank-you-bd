/**
 * Design System Index for Thank You BD Discount Program
 * Exports all design system constants for easy access
 */

// Export all design system constants
// Re-export commonly used constants for convenience
import { Colors } from "./Colors";
import {
  ActionIcons,
  CategoryIcons,
  IconUtils,
  NavigationIcons,
} from "./Icons";
import { Spacing, SpacingUtils } from "./Spacing";
import { FontFamily, FontSize, Typography } from "./Typography";

export * from "./Colors";
export * from "./Icons";
export * from "./Spacing";
export * from "./Typography";

// Design System object for easy access
export const DesignSystem = {
  colors: Colors,
  typography: Typography,
  fontSize: FontSize,
  fontFamily: FontFamily,
  spacing: Spacing,
  spacingUtils: SpacingUtils,
  icons: {
    category: CategoryIcons,
    action: ActionIcons,
    navigation: NavigationIcons,
    utils: IconUtils,
  },
};

// Common theme object for styled-components or other styling libraries
export const theme = {
  colors: Colors,
  typography: Typography,
  spacing: Spacing,
  borderRadius: SpacingUtils.borderRadius,
  shadows: {
    small: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    large: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
  },
  animations: {
    duration: {
      fast: 200,
      normal: 300,
      slow: 500,
    },
    easing: {
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
    },
  },
};

// Export default theme
export default theme;
