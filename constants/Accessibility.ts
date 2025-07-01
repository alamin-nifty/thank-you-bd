// Accessibility roles for React Native
export const AccessibilityRoles = {
  BUTTON: "button",
  LINK: "link",
  HEADER: "header",
  IMAGE: "image",
  TEXT: "text",
  TAB: "tab",
  TABBAR: "tabbar",
  SEARCH: "search",
  SWITCH: "switch",
  SLIDER: "slider",
  CHECKBOX: "checkbox",
  RADIO: "radio",
  TEXTBOX: "textbox",
  KEYBOARD_KEY: "keyboardkey",
  ADJUSTABLE: "adjustable",
  SUMMARY: "summary",
  ALERT: "alert",
  BANNER: "banner",
  COMBOBOX: "combobox",
  MENU: "menu",
  MENUBAR: "menubar",
  MENUITEM: "menuitem",
  PROGRESSBAR: "progressbar",
  SCROLLBAR: "scrollbar",
  SPINBUTTON: "spinbutton",
  TABLIST: "tablist",
  TOOLBAR: "toolbar",
  TOOLTIP: "tooltip",
} as const;

// Accessibility states
export const AccessibilityStates = {
  SELECTED: "selected",
  DISABLED: "disabled",
  CHECKED: "checked",
  UNCHECKED: "unchecked",
  EXPANDED: "expanded",
  COLLAPSED: "collapsed",
  BUSY: "busy",
  REQUIRED: "required",
} as const;

// Accessibility traits for iOS
export const AccessibilityTraits = {
  BUTTON: "button",
  LINK: "link",
  HEADER: "header",
  IMAGE: "image",
  TEXT: "text",
  TAB: "tab",
  SEARCH: "search",
  SWITCH: "switch",
  SLIDER: "slider",
  CHECKBOX: "checkbox",
  RADIO: "radio",
  TEXTBOX: "textbox",
  KEYBOARD_KEY: "keyboardkey",
  ADJUSTABLE: "adjustable",
  SUMMARY: "summary",
  ALERT: "alert",
  BANNER: "banner",
  COMBOBOX: "combobox",
  MENU: "menu",
  MENUBAR: "menubar",
  MENUITEM: "menuitem",
  PROGRESSBAR: "progressbar",
  SCROLLBAR: "scrollbar",
  SPINBUTTON: "spinbutton",
  TABLIST: "tablist",
  TOOLBAR: "toolbar",
  TOOLTIP: "tooltip",
} as const;

// Hook to get accessibility labels and hints
export const useAccessibility = () => {
  return {
    // Navigation accessibility
    getTabAccessibility: (tabName: string) => ({
      accessibilityLabel: `${tabName} tab`,
      accessibilityRole: AccessibilityRoles.TAB,
      accessibilityHint: `Navigate to ${tabName} tab`,
    }),

    // Button accessibility
    getButtonAccessibility: (buttonType: string, context?: string) => ({
      accessibilityLabel: `${buttonType} button`,
      accessibilityRole: AccessibilityRoles.BUTTON,
      accessibilityHint: context
        ? `${buttonType} button for ${context}`
        : undefined,
    }),

    // Input accessibility
    getInputAccessibility: (inputType: string) => ({
      accessibilityLabel: `${inputType} input`,
      accessibilityRole: AccessibilityRoles.TEXTBOX,
      accessibilityHint: `Enter ${inputType} information`,
    }),

    // Card accessibility
    getCardAccessibility: (cardType: string, title: string) => ({
      accessibilityLabel: `${title} ${cardType} card`,
      accessibilityRole: AccessibilityRoles.BUTTON,
      accessibilityHint: `View ${cardType} details`,
    }),

    // Status accessibility
    getStatusAccessibility: (
      status: "loading" | "error" | "success" | "noResults"
    ) => ({
      accessibilityLabel: `${status} message`,
      accessibilityRole: AccessibilityRoles.ALERT,
    }),

    // Image accessibility
    getImageAccessibility: (imageType: string, description?: string) => ({
      accessibilityLabel: description || `${imageType} image`,
      accessibilityRole: AccessibilityRoles.IMAGE,
    }),

    // List accessibility
    getListAccessibility: (listType: string, itemCount: number) => ({
      accessibilityLabel: `${listType} list with ${itemCount} items`,
      accessibilityRole: AccessibilityRoles.MENU,
    }),

    // Progress accessibility
    getProgressAccessibility: (
      current: number,
      total: number,
      type: string
    ) => ({
      accessibilityLabel: `${type} progress: ${current} of ${total}`,
      accessibilityRole: AccessibilityRoles.PROGRESSBAR,
      accessibilityValue: {
        min: 0,
        max: total,
        now: current,
      },
    }),

    // Switch accessibility
    getSwitchAccessibility: (switchType: string, isEnabled: boolean) => ({
      accessibilityLabel: `${switchType} switch`,
      accessibilityRole: AccessibilityRoles.SWITCH,
      accessibilityValue: {
        text: isEnabled ? "on" : "off",
      },
    }),

    // Search accessibility
    getSearchAccessibility: () => ({
      accessibilityLabel: "Search input",
      accessibilityRole: AccessibilityRoles.SEARCH,
      accessibilityHint: "Type to search",
    }),

    // Modal accessibility
    getModalAccessibility: (modalType: string) => ({
      accessibilityLabel: `${modalType} modal`,
      accessibilityRole: AccessibilityRoles.ALERT,
      accessibilityViewIsModal: true,
    }),

    // Generic accessibility helpers
    getGenericAccessibility: (type: string, context?: Record<string, any>) => ({
      accessibilityLabel: `${type} element`,
      accessibilityRole: AccessibilityRoles.BUTTON,
      accessibilityHint: `Interact with ${type}`,
    }),
  };
};

// Accessibility constants for common elements
export const AccessibilityConstants = {
  // Minimum touch target size (44pt as per WCAG guidelines)
  MIN_TOUCH_TARGET_SIZE: 44,

  // Minimum contrast ratios
  CONTRAST_RATIOS: {
    NORMAL_TEXT: 4.5, // AA standard
    LARGE_TEXT: 3.0, // AA standard
    UI_COMPONENTS: 3.0, // AA standard
  },

  // Focus indicators
  FOCUS_INDICATORS: {
    BORDER_WIDTH: 2,
    BORDER_COLOR: "#007AFF", // iOS blue
    BORDER_RADIUS: 4,
  },

  // Screen reader delays
  SCREEN_READER_DELAYS: {
    SHORT: 100,
    MEDIUM: 300,
    LONG: 500,
  },
} as const;

// Accessibility validation helpers
export const AccessibilityHelpers = {
  // Check if color contrast meets WCAG AA standards
  checkColorContrast: (foreground: string, background: string): boolean => {
    // This is a simplified check - in production, use a proper color contrast library
    const getLuminance = (color: string): number => {
      // Convert hex to RGB and calculate luminance
      const hex = color.replace("#", "");
      const r = parseInt(hex.substr(0, 2), 16) / 255;
      const g = parseInt(hex.substr(2, 2), 16) / 255;
      const b = parseInt(hex.substr(4, 2), 16) / 255;

      const [rs, gs, bs] = [r, g, b].map((c) => {
        if (c <= 0.03928) return c / 12.92;
        return Math.pow((c + 0.055) / 1.055, 2.4);
      });

      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };

    const l1 = getLuminance(foreground);
    const l2 = getLuminance(background);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

    return ratio >= AccessibilityConstants.CONTRAST_RATIOS.NORMAL_TEXT;
  },

  // Ensure minimum touch target size
  ensureMinimumTouchTarget: (size: number): number => {
    return Math.max(size, AccessibilityConstants.MIN_TOUCH_TARGET_SIZE);
  },

  // Generate unique accessibility ID
  generateAccessibilityId: (prefix: string, id?: string): string => {
    return `${prefix}_${id || Math.random().toString(36).substr(2, 9)}`;
  },

  // Format numbers for screen readers
  formatNumberForScreenReader: (
    number: number,
    locale: string = "en"
  ): string => {
    return new Intl.NumberFormat(locale, {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(number);
  },

  // Format currency for screen readers
  formatCurrencyForScreenReader: (
    amount: number,
    currency: string = "BDT",
    locale: string = "en"
  ): string => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  },

  // Format date for screen readers
  formatDateForScreenReader: (date: Date, locale: string = "en"): string => {
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  },
} as const;

// Accessibility context provider
export const AccessibilityContext = {
  // Screen reader announcements
  announceForAccessibility: (
    message: string,
    priority: "polite" | "assertive" = "polite"
  ) => {
    // In React Native, this would typically use AccessibilityInfo.announceForAccessibility
    // For now, we'll create a placeholder that can be implemented with the actual API
    console.log(`[Accessibility Announcement - ${priority}]: ${message}`);
  },

  // Set accessibility focus
  setAccessibilityFocus: (ref: any) => {
    // In React Native, this would use AccessibilityInfo.setAccessibilityFocus
    if (ref && ref.current) {
      ref.current.setNativeProps({
        accessibilityFocus: true,
      });
    }
  },

  // Check if screen reader is active
  isScreenReaderEnabled: (): Promise<boolean> => {
    // In React Native, this would use AccessibilityInfo.isScreenReaderEnabled
    return Promise.resolve(false); // Placeholder
  },

  // Add accessibility event listener
  addAccessibilityEventListener: (
    event: string,
    handler: (enabled: boolean) => void
  ) => {
    // In React Native, this would use AccessibilityInfo.addEventListener
    console.log(`[Accessibility Event Listener Added]: ${event}`);
  },

  // Remove accessibility event listener
  removeAccessibilityEventListener: (
    event: string,
    handler: (enabled: boolean) => void
  ) => {
    // In React Native, this would use AccessibilityInfo.removeEventListener
    console.log(`[Accessibility Event Listener Removed]: ${event}`);
  },
} as const;

export default {
  AccessibilityRoles,
  AccessibilityStates,
  AccessibilityTraits,
  useAccessibility,
  AccessibilityConstants,
  AccessibilityHelpers,
  AccessibilityContext,
};
