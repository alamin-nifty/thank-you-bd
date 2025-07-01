const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add better error handling and performance optimizations for production
config.resolver.platforms = ["ios", "android", "native", "web"];
config.resolver.sourceExts = ["js", "json", "ts", "tsx", "jsx"];

// Ensure proper handling of native modules
config.resolver.alias = {
  ...config.resolver.alias,
};

// Add transformer configuration for better error handling
config.transformer = {
  ...config.transformer,
  minifierConfig: {
    keep_fnames: true,
    mangle: {
      keep_fnames: true,
    },
  },
};

// Apply NativeWind configuration
module.exports = withNativeWind(config, { input: "./global.css" });
