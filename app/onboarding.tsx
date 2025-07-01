import { Button } from "@/components/ui/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Dimensions, Pressable, ScrollView, Text, View } from "react-native";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    title: "Welcome to Thank You BD",
    subtitle: "Your Digital Loyalty Partner",
    description:
      "Discover amazing discounts and rewards from your favorite local vendors.",
    icon: "🎉",
  },
  {
    id: 2,
    title: "Exclusive Discounts",
    subtitle: "Save More, Shop Smart",
    description:
      "Get special offers and discounts from restaurants, shops, and services near you.",
    icon: "💰",
  },
  {
    id: 3,
    title: "Digital Loyalty Card",
    subtitle: "No More Physical Cards",
    description:
      "Store all your loyalty cards digitally and earn points with every purchase.",
    icon: "💳",
  },
  {
    id: 4,
    title: "Local Vendors",
    subtitle: "Support Your Community",
    description:
      "Connect with trusted local businesses and discover new favorites in your area.",
    icon: "🏪",
  },
];

export default function OnboardingScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const saveOnboardingCompletion = async () => {
    try {
      await AsyncStorage.setItem("hasCompletedOnboarding", "true");
    } catch (error) {
      console.error("Error saving onboarding completion:", error);
      // Continue even if storage fails
    }
  };

  const navigateToMain = async () => {
    if (isNavigating) return; // Prevent multiple navigation attempts

    setIsNavigating(true);
    try {
      await saveOnboardingCompletion();
      router.replace("/(tabs)");
    } catch (error) {
      console.error("Navigation error:", error);
      // Fallback navigation
      try {
        router.replace("/(tabs)");
      } catch (fallbackError) {
        console.error("Fallback navigation failed:", fallbackError);
      }
    } finally {
      setIsNavigating(false);
    }
  };

  const handleNext = async () => {
    if (currentSlide < slides.length - 1) {
      const nextSlide = currentSlide + 1;
      setCurrentSlide(nextSlide);
      scrollViewRef.current?.scrollTo({
        x: nextSlide * width,
        animated: true,
      });
    } else {
      // Save completion status and navigate to main app
      await navigateToMain();
    }
  };

  const handleSkip = async () => {
    // Save completion status and navigate to main app
    await navigateToMain();
  };

  const handleDotPress = (index: number) => {
    setCurrentSlide(index);
    scrollViewRef.current?.scrollTo({
      x: index * width,
      animated: true,
    });
  };

  const handleScrollEnd = (event: any) => {
    try {
      const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
      setCurrentSlide(slideIndex);
    } catch (error) {
      console.error("Error handling scroll end:", error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* Progress Dots */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 64,
          marginBottom: 32,
        }}
      >
        {slides.map((_, index) => (
          <Pressable
            key={index}
            onPress={() => handleDotPress(index)}
            style={{ marginHorizontal: 4 }}
          >
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: index === currentSlide ? "#667eea" : "#d1d5db",
              }}
            />
          </Pressable>
        ))}
      </View>

      {/* Progress Bar */}
      <View style={{ marginHorizontal: 32, marginBottom: 32 }}>
        <View
          style={{
            height: 4,
            backgroundColor: "#e5e7eb",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              height: "100%",
              backgroundColor: "#667eea",
              borderRadius: 2,
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
          />
        </View>
      </View>

      {/* Slides */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
        decelerationRate="fast"
        snapToInterval={width}
        snapToAlignment="center"
      >
        {slides.map((slide, index) => (
          <View
            key={slide.id}
            style={{
              width: width,
              paddingHorizontal: 32,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 48, marginBottom: 32 }}>{slide.icon}</Text>

            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: 16,
                  color: "#374151",
                }}
              >
                {slide.title}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  marginBottom: 8,
                  color: "#6b7280",
                }}
              >
                {slide.subtitle}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  color: "#6b7280",
                  lineHeight: 24,
                }}
              >
                {slide.description}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Navigation Buttons */}
      <View style={{ paddingHorizontal: 32, paddingBottom: 32 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            title="Skip"
            variant="outline"
            onPress={handleSkip}
            style={{ flex: 1, marginRight: 16 }}
          />
          <Button
            title={currentSlide === slides.length - 1 ? "Get Started" : "Next"}
            onPress={handleNext}
            style={{ flex: 1 }}
          />
        </View>

        {/* Slide Counter */}
        <Text
          style={{
            textAlign: "center",
            marginTop: 16,
            fontSize: 14,
            color: "#9ca3af",
          }}
        >
          {currentSlide + 1} of {slides.length}
        </Text>
      </View>
    </View>
  );
}
