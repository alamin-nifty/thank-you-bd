import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export default function SplashScreen() {
  const logoScale = useSharedValue(0);
  const logoOpacity = useSharedValue(0);
  const textOpacity = useSharedValue(0);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        // Check if user has completed onboarding
        const hasCompletedOnboarding = await AsyncStorage.getItem(
          "hasCompletedOnboarding"
        );

        // Animate logo appearance
        logoScale.value = withSequence(
          withTiming(1.2, { duration: 800 }),
          withTiming(1, { duration: 400 })
        );
        logoOpacity.value = withTiming(1, { duration: 600 });

        // Animate text appearance
        textOpacity.value = withDelay(400, withTiming(1, { duration: 600 }));

        // Navigate based on onboarding status
        const timer = setTimeout(() => {
          if (hasCompletedOnboarding === "true") {
            // Skip onboarding if already completed
            router.replace("/(tabs)");
          } else {
            // Show onboarding for first-time users
            router.replace("/onboarding");
          }
        }, 2500);

        return () => clearTimeout(timer);
      } catch (error) {
        console.error("Error checking onboarding status:", error);
        // Default to onboarding on error
        const timer = setTimeout(() => {
          router.replace("/onboarding");
        }, 2500);
        return () => clearTimeout(timer);
      }
    };

    checkOnboardingStatus();
  }, []);

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: logoScale.value }],
    opacity: logoOpacity.value,
  }));

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }));

  return (
    <View className="flex-1 bg-primary-600 dark:bg-primary-800 items-center justify-center">
      <Animated.View style={logoAnimatedStyle} className="mb-8">
        <View className="w-24 h-24 bg-white dark:bg-primary-200 rounded-full items-center justify-center">
          <Text className="text-4xl font-bold text-primary-600 dark:text-primary-800">
            TY
          </Text>
        </View>
      </Animated.View>

      <Animated.View style={textAnimatedStyle} className="items-center">
        <Text className="text-2xl font-bold text-white dark:text-primary-100 mb-2">
          Thank You BD
        </Text>
        <Text className="text-white/80 dark:text-primary-200 text-center mb-8">
          Your Digital Loyalty Partner
        </Text>
        <ActivityIndicator size="large" color="#ffffff" />
      </Animated.View>
    </View>
  );
}
