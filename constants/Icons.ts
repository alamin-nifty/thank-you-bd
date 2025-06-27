/**
 * Design System Icons for Thank You BD Discount Program
 * Based on the UI-Only PRD specifications
 */

import { Ionicons } from "@expo/vector-icons";

// Category Icons (24x24pt, outlined style) as specified in PRD
export const CategoryIcons = {
  // 11 main categories with icons and color coding
  grocery: {
    name: "cart-outline" as keyof typeof Ionicons.glyphMap,
    size: 24,
    color: "#34C759", // Green for grocery
  },
  health: {
    name: "medical-outline" as keyof typeof Ionicons.glyphMap,
    size: 24,
    color: "#FF3B30", // Red for health
  },
  mobilePhone: {
    name: "phone-portrait-outline" as keyof typeof Ionicons.glyphMap,
    size: 24,
    color: "#007AFF", // Blue for mobile
  },
  touristHotel: {
    name: "bed-outline" as keyof typeof Ionicons.glyphMap,
    size: 24,
    color: "#FF9500", // Orange for hotels
  },
  transport: {
    name: "bus-outline" as keyof typeof Ionicons.glyphMap,
    size: 24,
    color: "#5856D6", // Purple for transport
  },
  foodSweets: {
    name: "restaurant-outline" as keyof typeof Ionicons.glyphMap,
    size: 24,
    color: "#FF2D92", // Pink for food
  },
  onlineShops: {
    name: "bag-outline" as keyof typeof Ionicons.glyphMap,
    size: 24,
    color: "#AF52DE", // Purple for online shops
  },
  fashionFootwear: {
    name: "shirt-outline" as keyof typeof Ionicons.glyphMap,
    size: 24,
    color: "#FF6B35", // Orange for fashion
  },
  furniture: {
    name: "home-outline" as keyof typeof Ionicons.glyphMap,
    size: 24,
    color: "#8E8E93", // Gray for furniture
  },
  electronics: {
    name: "laptop-outline" as keyof typeof Ionicons.glyphMap,
    size: 24,
    color: "#007AFF", // Blue for electronics
  },
  automobilesMotorcycles: {
    name: "car-outline" as keyof typeof Ionicons.glyphMap,
    size: 24,
    color: "#FF3B30", // Red for automobiles
  },
};

// Action Icons (20x20pt, filled style) as specified in PRD
export const ActionIcons = {
  // Navigation
  home: {
    name: "home" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  categories: {
    name: "grid" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  search: {
    name: "search" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  card: {
    name: "card" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  profile: {
    name: "person" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },

  // Common actions
  back: {
    name: "chevron-back" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  forward: {
    name: "chevron-forward" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  close: {
    name: "close" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  edit: {
    name: "create" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  delete: {
    name: "trash" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  share: {
    name: "share" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  favorite: {
    name: "heart" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  favoriteOutline: {
    name: "heart-outline" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  notification: {
    name: "notifications" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  menu: {
    name: "menu" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },

  // Vendor actions
  call: {
    name: "call" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  location: {
    name: "location" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  website: {
    name: "globe" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  directions: {
    name: "navigate" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },

  // Card actions
  qrCode: {
    name: "qr-code" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  download: {
    name: "download" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  renew: {
    name: "refresh" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },

  // Points and rewards
  star: {
    name: "star" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  starOutline: {
    name: "star-outline" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  gift: {
    name: "gift" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },

  // Settings
  settings: {
    name: "settings" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  help: {
    name: "help-circle" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
  logout: {
    name: "log-out" as keyof typeof Ionicons.glyphMap,
    size: 20,
  },
};

// Navigation Icons (24x24pt, consistent style) as specified in PRD
export const NavigationIcons = {
  // Bottom tab bar icons
  home: {
    name: "home-outline" as keyof typeof Ionicons.glyphMap,
    size: 24,
  },
  categories: {
    name: "grid-outline" as keyof typeof Ionicons.glyphMap,
    size: 24,
  },
  search: {
    name: "search-outline" as keyof typeof Ionicons.glyphMap,
    size: 24,
  },
  card: {
    name: "card-outline" as keyof typeof Ionicons.glyphMap,
    size: 24,
  },
  profile: {
    name: "person-outline" as keyof typeof Ionicons.glyphMap,
    size: 24,
  },

  // Top navigation
  back: {
    name: "chevron-back" as keyof typeof Ionicons.glyphMap,
    size: 24,
  },
  close: {
    name: "close" as keyof typeof Ionicons.glyphMap,
    size: 24,
  },
  menu: {
    name: "menu" as keyof typeof Ionicons.glyphMap,
    size: 24,
  },
  notification: {
    name: "notifications-outline" as keyof typeof Ionicons.glyphMap,
    size: 24,
  },
};

// Icon utilities
export const IconUtils = {
  // Get category icon by key
  getCategoryIcon: (category: keyof typeof CategoryIcons) => {
    return CategoryIcons[category];
  },

  // Get action icon by key
  getActionIcon: (action: keyof typeof ActionIcons) => {
    return ActionIcons[action];
  },

  // Get navigation icon by key
  getNavigationIcon: (nav: keyof typeof NavigationIcons) => {
    return NavigationIcons[nav];
  },
};
