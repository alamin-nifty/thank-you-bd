import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        setIsLoading(true);

        // Simple timeout to show splash screen
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Check if user has completed onboarding
        let hasCompletedOnboarding = null;
        try {
          hasCompletedOnboarding = await AsyncStorage.getItem(
            "hasCompletedOnboarding"
          );
        } catch (storageError) {
          console.warn("AsyncStorage error, using default:", storageError);
          // Continue with default behavior if storage fails
        }

        // Navigate based on onboarding status
        try {
          if (hasCompletedOnboarding === "true") {
            // Skip onboarding if already completed
            router.replace("/(tabs)");
          } else {
            // Show onboarding for first-time users
            router.replace("/onboarding");
          }
        } catch (navigationError) {
          console.error("Navigation error:", navigationError);
          // Fallback to onboarding
          router.replace("/onboarding");
        }
      } catch (error) {
        console.error("Error checking onboarding status:", error);
        setError(error instanceof Error ? error.message : "Unknown error");

        // Default to onboarding on error after a delay
        const timer = setTimeout(() => {
          try {
            router.replace("/onboarding");
          } catch (navError) {
            console.error("Fallback navigation failed:", navError);
          }
        }, 3000);
        return () => clearTimeout(timer);
      } finally {
        setIsLoading(false);
      }
    };

    checkOnboardingStatus();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#667eea",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: 96,
          height: 96,
          backgroundColor: "white",
          borderRadius: 48,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 32,
        }}
      >
        <Text
          style={{
            fontSize: 36,
            fontWeight: "bold",
            color: "#667eea",
          }}
        >
          TY
        </Text>
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "white",
          marginBottom: 8,
        }}
      >
        Thank You BD
      </Text>
      <Text
        style={{
          color: "rgba(255, 255, 255, 0.8)",
          textAlign: "center",
          marginBottom: 32,
        }}
      >
        Your Digital Loyalty Partner
      </Text>
      {isLoading && <ActivityIndicator size="large" color="#ffffff" />}
      {error && (
        <Text
          style={{
            color: "#ffcccc",
            textAlign: "center",
            fontSize: 14,
            marginTop: 16,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
}
