import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import "react-native-reanimated";
import "../global.css";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Add a small delay to ensure everything is properly loaded
        await new Promise((resolve) => setTimeout(resolve, 100));
        setIsReady(true);
      } catch (err) {
        console.error("App initialization error:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      }
    };

    initializeApp();
  }, []);

  // Show loading state while fonts are loading
  if (!loaded || !isReady) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#667eea",
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Loading...</Text>
      </View>
    );
  }

  // Show error state if initialization failed
  if (error) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#667eea",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            textAlign: "center",
            padding: 20,
          }}
        >
          Error: {error}
        </Text>
      </View>
    );
  }

  return (
    <ErrorBoundary>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="splash" options={{ headerShown: false }} />
          <Stack.Screen name="onboarding" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
