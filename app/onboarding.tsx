import { Button } from "@/components/ui/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Dimensions, Pressable, ScrollView, Text, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

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
  const scrollViewRef = useRef<ScrollView>(null);
  const scrollX = useSharedValue(0);

  const saveOnboardingCompletion = async () => {
    try {
      await AsyncStorage.setItem("hasCompletedOnboarding", "true");
    } catch (error) {
      console.error("Error saving onboarding completion:", error);
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
      await saveOnboardingCompletion();
      router.replace("/(tabs)");
    }
  };

  const handleSkip = async () => {
    // Save completion status and navigate to main app
    await saveOnboardingCompletion();
    router.replace("/(tabs)");
  };

  const handleDotPress = (index: number) => {
    setCurrentSlide(index);
    scrollViewRef.current?.scrollTo({
      x: index * width,
      animated: true,
    });
  };

  const handleScrollEnd = (event: any) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentSlide(slideIndex);
  };

  const handleScroll = (event: any) => {
    scrollX.value = event.nativeEvent.contentOffset.x;
  };

  // Create animated styles for each slide
  const slide0IconStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      [-width, 0, width],
      [0.8, 1, 0.8],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      scrollX.value,
      [-width, 0, width],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );
    const translateY = interpolate(
      scrollX.value,
      [-width, 0, width],
      [50, 0, 50],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        { scale: withSpring(scale, { damping: 15, stiffness: 150 }) },
        { translateY: withSpring(translateY, { damping: 15, stiffness: 150 }) },
      ],
      opacity: withTiming(opacity, { duration: 300 }),
    };
  });

  const slide0TextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollX.value,
      [-width, 0, width],
      [0.3, 1, 0.3],
      Extrapolate.CLAMP
    );
    const translateX = interpolate(
      scrollX.value,
      [-width, 0, width],
      [100, 0, -100],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        { translateX: withSpring(translateX, { damping: 15, stiffness: 150 }) },
      ],
      opacity: withTiming(opacity, { duration: 300 }),
    };
  });

  const slide1IconStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      [0, width, 2 * width],
      [0.8, 1, 0.8],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      scrollX.value,
      [0, width, 2 * width],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );
    const translateY = interpolate(
      scrollX.value,
      [0, width, 2 * width],
      [50, 0, 50],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        { scale: withSpring(scale, { damping: 15, stiffness: 150 }) },
        { translateY: withSpring(translateY, { damping: 15, stiffness: 150 }) },
      ],
      opacity: withTiming(opacity, { duration: 300 }),
    };
  });

  const slide1TextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollX.value,
      [0, width, 2 * width],
      [0.3, 1, 0.3],
      Extrapolate.CLAMP
    );
    const translateX = interpolate(
      scrollX.value,
      [0, width, 2 * width],
      [100, 0, -100],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        { translateX: withSpring(translateX, { damping: 15, stiffness: 150 }) },
      ],
      opacity: withTiming(opacity, { duration: 300 }),
    };
  });

  const slide2IconStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      [width, 2 * width, 3 * width],
      [0.8, 1, 0.8],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      scrollX.value,
      [width, 2 * width, 3 * width],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );
    const translateY = interpolate(
      scrollX.value,
      [width, 2 * width, 3 * width],
      [50, 0, 50],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        { scale: withSpring(scale, { damping: 15, stiffness: 150 }) },
        { translateY: withSpring(translateY, { damping: 15, stiffness: 150 }) },
      ],
      opacity: withTiming(opacity, { duration: 300 }),
    };
  });

  const slide2TextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollX.value,
      [width, 2 * width, 3 * width],
      [0.3, 1, 0.3],
      Extrapolate.CLAMP
    );
    const translateX = interpolate(
      scrollX.value,
      [width, 2 * width, 3 * width],
      [100, 0, -100],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        { translateX: withSpring(translateX, { damping: 15, stiffness: 150 }) },
      ],
      opacity: withTiming(opacity, { duration: 300 }),
    };
  });

  const slide3IconStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      [2 * width, 3 * width, 4 * width],
      [0.8, 1, 0.8],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      scrollX.value,
      [2 * width, 3 * width, 4 * width],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );
    const translateY = interpolate(
      scrollX.value,
      [2 * width, 3 * width, 4 * width],
      [50, 0, 50],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        { scale: withSpring(scale, { damping: 15, stiffness: 150 }) },
        { translateY: withSpring(translateY, { damping: 15, stiffness: 150 }) },
      ],
      opacity: withTiming(opacity, { duration: 300 }),
    };
  });

  const slide3TextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollX.value,
      [2 * width, 3 * width, 4 * width],
      [0.3, 1, 0.3],
      Extrapolate.CLAMP
    );
    const translateX = interpolate(
      scrollX.value,
      [2 * width, 3 * width, 4 * width],
      [100, 0, -100],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        { translateX: withSpring(translateX, { damping: 15, stiffness: 150 }) },
      ],
      opacity: withTiming(opacity, { duration: 300 }),
    };
  });

  // Progress dot animations
  const dot0Style = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      [-width * 0.5, 0, width * 0.5],
      [1, 1.2, 1],
      Extrapolate.CLAMP
    );
    return {
      transform: [
        { scale: withSpring(scale, { damping: 15, stiffness: 150 }) },
      ],
    };
  });

  const dot1Style = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      [width * 0.5, width, width * 1.5],
      [1, 1.2, 1],
      Extrapolate.CLAMP
    );
    return {
      transform: [
        { scale: withSpring(scale, { damping: 15, stiffness: 150 }) },
      ],
    };
  });

  const dot2Style = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      [width * 1.5, 2 * width, width * 2.5],
      [1, 1.2, 1],
      Extrapolate.CLAMP
    );
    return {
      transform: [
        { scale: withSpring(scale, { damping: 15, stiffness: 150 }) },
      ],
    };
  });

  const dot3Style = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      [width * 2.5, 3 * width, width * 3.5],
      [1, 1.2, 1],
      Extrapolate.CLAMP
    );
    return {
      transform: [
        { scale: withSpring(scale, { damping: 15, stiffness: 150 }) },
      ],
    };
  });

  const slideStyles = [
    { icon: slide0IconStyle, text: slide0TextStyle },
    { icon: slide1IconStyle, text: slide1TextStyle },
    { icon: slide2IconStyle, text: slide2TextStyle },
    { icon: slide3IconStyle, text: slide3TextStyle },
  ];

  const dotStyles = [dot0Style, dot1Style, dot2Style, dot3Style];

  return (
    <View className="flex-1 bg-white dark:bg-black">
      {/* Progress Dots */}
      <View className="flex-row justify-center mt-16 mb-8">
        {slides.map((_, index) => (
          <Pressable
            key={index}
            onPress={() => handleDotPress(index)}
            className="mx-1"
          >
            <Animated.View
              style={dotStyles[index]}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${
                  index === currentSlide
                    ? "bg-primary-600"
                    : "bg-gray-300 dark:bg-gray-600"
                }
              `}
            />
          </Pressable>
        ))}
      </View>

      {/* Progress Bar */}
      <View className="mx-8 mb-8">
        <View className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <Animated.View
            className="h-full bg-primary-600 rounded-full"
            style={{
              width: withSpring(
                `${((currentSlide + 1) / slides.length) * 100}%`,
                { damping: 15, stiffness: 150 }
              ),
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
        onScroll={handleScroll}
        scrollEventThrottle={16}
        className="flex-1"
        decelerationRate="fast"
        snapToInterval={width}
        snapToAlignment="center"
      >
        {slides.map((slide, index) => (
          <View
            key={slide.id}
            className="w-screen px-8 items-center justify-center"
          >
            <Animated.Text
              style={slideStyles[index].icon}
              className="text-6xl mb-8"
            >
              {slide.icon}
            </Animated.Text>

            <Animated.View
              style={slideStyles[index].text}
              className="items-center"
            >
              <Text className="text-2xl font-bold text-center mb-4 text-primary-700 dark:text-primary-300">
                {slide.title}
              </Text>
              <Text className="text-lg text-center mb-2 text-secondary-600 dark:text-secondary-400">
                {slide.subtitle}
              </Text>
              <Text className="text-base text-center text-secondary-500 dark:text-secondary-500 leading-6">
                {slide.description}
              </Text>
            </Animated.View>
          </View>
        ))}
      </ScrollView>

      {/* Navigation Buttons */}
      <View className="px-8 pb-8">
        <View className="flex-row justify-between items-center">
          <Button
            title="Skip"
            variant="outline"
            onPress={handleSkip}
            className="flex-1 mr-4"
          />
          <Button
            title={currentSlide === slides.length - 1 ? "Get Started" : "Next"}
            onPress={handleNext}
            className="flex-1"
          />
        </View>

        {/* Slide Counter */}
        <Animated.Text
          className="text-center mt-4 text-sm text-secondary-400 dark:text-secondary-500"
          style={{
            opacity: withTiming(1, { duration: 300 }),
          }}
        >
          {currentSlide + 1} of {slides.length}
        </Animated.Text>
      </View>
    </View>
  );
}
