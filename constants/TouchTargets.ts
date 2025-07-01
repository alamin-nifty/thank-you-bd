/**
 * Touch Target Accessibility Utility
 * Ensures all interactive elements meet minimum touch target size requirements
 */

// WCAG and iOS/Android minimum touch target sizes
export const TOUCH_TARGET_SIZES = {
  MINIMUM: 44, // 44pt minimum for accessibility (WCAG 2.1)
  RECOMMENDED: 48, // 48pt recommended for better usability
  LARGE: 56, // 56pt for important actions
} as const;

// Touch target validation
export const validateTouchTarget = (width: number, height: number): boolean => {
  return (
    width >= TOUCH_TARGET_SIZES.MINIMUM && height >= TOUCH_TARGET_SIZES.MINIMUM
  );
};

// Ensure minimum touch target size
export const ensureMinimumTouchTarget = (size: number): number => {
  return Math.max(size, TOUCH_TARGET_SIZES.MINIMUM);
};

// Get recommended touch target size based on importance
export const getTouchTargetSize = (
  importance: "standard" | "important" | "critical" = "standard"
): number => {
  switch (importance) {
    case "critical":
      return TOUCH_TARGET_SIZES.LARGE;
    case "important":
      return TOUCH_TARGET_SIZES.RECOMMENDED;
    default:
      return TOUCH_TARGET_SIZES.MINIMUM;
  }
};

// Touch target styles for React Native
export const TouchTargetStyles = {
  // Standard minimum touch target
  minimum: {
    minWidth: TOUCH_TARGET_SIZES.MINIMUM,
    minHeight: TOUCH_TARGET_SIZES.MINIMUM,
  },

  // Recommended touch target
  recommended: {
    minWidth: TOUCH_TARGET_SIZES.RECOMMENDED,
    minHeight: TOUCH_TARGET_SIZES.RECOMMENDED,
  },

  // Large touch target for important actions
  large: {
    minWidth: TOUCH_TARGET_SIZES.LARGE,
    minHeight: TOUCH_TARGET_SIZES.LARGE,
  },

  // Square touch targets
  square: {
    min: {
      width: TOUCH_TARGET_SIZES.MINIMUM,
      height: TOUCH_TARGET_SIZES.MINIMUM,
    },
    recommended: {
      width: TOUCH_TARGET_SIZES.RECOMMENDED,
      height: TOUCH_TARGET_SIZES.RECOMMENDED,
    },
    large: {
      width: TOUCH_TARGET_SIZES.LARGE,
      height: TOUCH_TARGET_SIZES.LARGE,
    },
  },

  // Circular touch targets
  circular: {
    min: {
      width: TOUCH_TARGET_SIZES.MINIMUM,
      height: TOUCH_TARGET_SIZES.MINIMUM,
      borderRadius: TOUCH_TARGET_SIZES.MINIMUM / 2,
    },
    recommended: {
      width: TOUCH_TARGET_SIZES.RECOMMENDED,
      height: TOUCH_TARGET_SIZES.RECOMMENDED,
      borderRadius: TOUCH_TARGET_SIZES.RECOMMENDED / 2,
    },
    large: {
      width: TOUCH_TARGET_SIZES.LARGE,
      height: TOUCH_TARGET_SIZES.LARGE,
      borderRadius: TOUCH_TARGET_SIZES.LARGE / 2,
    },
  },
} as const;

// Common touch target configurations
export const TouchTargetConfigs = {
  // Button configurations
  button: {
    primary: {
      ...TouchTargetStyles.recommended,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    secondary: {
      ...TouchTargetStyles.recommended,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    small: {
      ...TouchTargetStyles.minimum,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    icon: {
      ...TouchTargetStyles.minimum,
      justifyContent: "center",
      alignItems: "center",
    },
  },

  // Input configurations
  input: {
    standard: {
      ...TouchTargetStyles.recommended,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    search: {
      ...TouchTargetStyles.recommended,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
  },

  // Card configurations
  card: {
    interactive: {
      ...TouchTargetStyles.minimum,
      padding: 16,
    },
  },

  // Navigation configurations
  navigation: {
    tab: {
      ...TouchTargetStyles.recommended,
      paddingVertical: 8,
    },
    back: {
      ...TouchTargetStyles.minimum,
      padding: 8,
    },
    menu: {
      ...TouchTargetStyles.minimum,
      padding: 8,
    },
  },

  // List item configurations
  listItem: {
    interactive: {
      ...TouchTargetStyles.minimum,
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  },
} as const;

// Utility function to create accessible touch target wrapper
export const createTouchTargetWrapper = (
  size: "minimum" | "recommended" | "large" = "minimum",
  shape: "rectangular" | "circular" = "rectangular"
) => {
  const sizeKey = size === "minimum" ? "min" : size;
  const baseStyles =
    shape === "circular"
      ? TouchTargetStyles.circular[sizeKey]
      : TouchTargetStyles.square[sizeKey];

  return {
    ...baseStyles,
    justifyContent: "center",
    alignItems: "center",
  };
};

// Hook to ensure touch target compliance
export const useTouchTarget = (
  importance: "standard" | "important" | "critical" = "standard"
) => {
  const size = getTouchTargetSize(importance);

  return {
    size,
    styles: {
      minWidth: size,
      minHeight: size,
    },
    validate: (width: number, height: number) =>
      validateTouchTarget(width, height),
  };
};

// Validation function for existing components
export const validateComponentTouchTargets = (
  components: {
    name: string;
    width: number;
    height: number;
  }[]
) => {
  const results = components.map((component) => ({
    ...component,
    valid: validateTouchTarget(component.width, component.height),
    meetsMinimum:
      component.width >= TOUCH_TARGET_SIZES.MINIMUM &&
      component.height >= TOUCH_TARGET_SIZES.MINIMUM,
    meetsRecommended:
      component.width >= TOUCH_TARGET_SIZES.RECOMMENDED &&
      component.height >= TOUCH_TARGET_SIZES.RECOMMENDED,
  }));

  const summary = {
    total: results.length,
    valid: results.filter((r) => r.valid).length,
    invalid: results.filter((r) => !r.valid).length,
    meetsMinimum: results.filter((r) => r.meetsMinimum).length,
    meetsRecommended: results.filter((r) => r.meetsRecommended).length,
  };

  return { results, summary };
};

// Common touch target issues and solutions
export const TouchTargetIssues = {
  SMALL_BUTTONS: {
    issue: "Buttons smaller than 44pt",
    solution: "Use TouchTargetStyles.minimum or larger",
    example: "TouchTargetStyles.recommended for primary actions",
  },
  ICON_ONLY_BUTTONS: {
    issue: "Icon buttons without proper touch target",
    solution: "Wrap icon in container with minimum 44pt size",
    example: "Use TouchTargetConfigs.button.icon",
  },
  CLOSE_BUTTONS: {
    issue: "Close/X buttons too small",
    solution: "Ensure minimum 44pt touch target",
    example: "Use TouchTargetStyles.minimum with proper padding",
  },
  LIST_ITEMS: {
    issue: "Interactive list items without proper touch target",
    solution: "Add minimum padding to ensure 44pt height",
    example: "Use TouchTargetConfigs.listItem.interactive",
  },
} as const;

// Export validation function for testing
export const testTouchTargets = () => {
  console.log("Testing touch target compliance...");

  const testComponents = [
    { name: "Small Button", width: 32, height: 32 },
    { name: "Standard Button", width: 44, height: 44 },
    { name: "Large Button", width: 56, height: 56 },
    { name: "Icon Button", width: 24, height: 24 },
    { name: "Navigation Tab", width: 48, height: 48 },
  ];

  const validation = validateComponentTouchTargets(testComponents);

  validation.results.forEach((result) => {
    console.log(
      `${result.name}: ${result.width}x${result.height}pt (${result.valid ? "PASS" : "FAIL"})`
    );
  });

  console.log(
    `\nSummary: ${validation.summary.valid}/${validation.summary.total} components meet touch target requirements`
  );

  return validation;
};

export default {
  TOUCH_TARGET_SIZES,
  validateTouchTarget,
  ensureMinimumTouchTarget,
  getTouchTargetSize,
  TouchTargetStyles,
  TouchTargetConfigs,
  createTouchTargetWrapper,
  useTouchTarget,
  validateComponentTouchTargets,
  TouchTargetIssues,
  testTouchTargets,
};
