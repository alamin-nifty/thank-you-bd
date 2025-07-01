import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useRef } from "react";
import {
  Animated,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  AccessibilityRoles,
  useAccessibility,
} from "../../constants/Accessibility";
import {
  FontScalingStyles,
  useRTLAndFontScaling,
} from "../../constants/RTLSupport";
import { TouchTargetConfigs } from "../../constants/TouchTargets";

const categories = [
  {
    id: 1,
    name: "Grocery",
    key: "grocery",
    icon: "basket-outline" as const,
    color: "#FF6B6B",
  },
  {
    id: 2,
    name: "Electronics",
    key: "electronics",
    icon: "phone-portrait-outline" as const,
    color: "#4ECDC4",
  },
  {
    id: 3,
    name: "Fashion",
    key: "fashion",
    icon: "shirt-outline" as const,
    color: "#45B7D1",
  },
  {
    id: 4,
    name: "Restaurants",
    key: "restaurants",
    icon: "restaurant-outline" as const,
    color: "#96CEB4",
  },
  {
    id: 5,
    name: "Beauty",
    key: "beauty",
    icon: "cut-outline" as const,
    color: "#FFEAA7",
  },
  {
    id: 6,
    name: "Home",
    key: "home",
    icon: "home-outline" as const,
    color: "#DDA0DD",
  },
  {
    id: 7,
    name: "Health",
    key: "health",
    icon: "medical-outline" as const,
    color: "#98D8C8",
  },
  {
    id: 8,
    name: "Sports",
    key: "sports",
    icon: "fitness-outline" as const,
    color: "#F7DC6F",
  },
  {
    id: 9,
    name: "Books",
    key: "books",
    icon: "library-outline" as const,
    color: "#BB8FCE",
  },
  {
    id: 10,
    name: "Automotive",
    key: "automotive",
    icon: "car-outline" as const,
    color: "#85C1E9",
  },
  {
    id: 11,
    name: "More",
    key: "more",
    icon: "ellipsis-horizontal-outline" as const,
    color: "#AEB6BF",
  },
];

const featuredVendors = [
  {
    id: 1,
    name: "Shwapno",
    category: "Grocery",
    rating: 4.5,
    discount: "15% off",
    image: "🛒",
    color: "#FF6B6B",
    distance: "0.5 km",
  },
  {
    id: 15,
    name: "Samsung",
    category: "Electronics",
    rating: 4.2,
    discount: "12% off",
    image: "📱",
    color: "#4ECDC4",
    distance: "1.2 km",
  },
  {
    id: 35,
    name: "Hotel Sea Uttora",
    category: "Tourist Hotels",
    rating: 4.7,
    discount: "15% off",
    image: "🏨",
    color: "#45B7D1",
    distance: "5.2 km",
  },
  {
    id: 4,
    name: "Aarong",
    category: "Fashion",
    rating: 4.4,
    discount: "20% off",
    image: "👗",
    color: "#96CEB4",
    distance: "1.8 km",
  },
  {
    id: 5,
    name: "Khaas Food",
    category: "Restaurants",
    rating: 4.3,
    discount: "10% off",
    image: "🍽️",
    color: "#FFEAA7",
    distance: "2.5 km",
  },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const accessibility = useAccessibility();
  const {
    isRTL,
    textAlign,
    getFlexDirection,
    styles: rtlStyles,
  } = useRTLAndFontScaling();

  // Animation for profile icon
  const profileScale = useRef(new Animated.Value(1)).current;

  const handleCategoryPress = (categoryName: string) => {
    router.push({
      pathname: "/category-detail",
      params: { category: categoryName },
    });
  };

  const handleVendorPress = (vendorName: string) => {
    // Find the vendor in the featuredVendors array
    const vendor = featuredVendors.find((v) => v.name === vendorName);
    const vendorId = vendor ? vendor.id.toString() : "1";

    router.push({
      pathname: "/vendor-detail",
      params: { vendorId },
    });
  };

  const handleProfilePress = () => {
    Animated.sequence([
      Animated.timing(profileScale, {
        toValue: 0.85,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(profileScale, {
        toValue: 1,
        duration: 80,
        useNativeDriver: true,
      }),
    ]).start();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push("/profile");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F2F2F7",
        ...rtlStyles.layout.auto,
      }}
      accessible={true}
      accessibilityLabel="Home screen with featured offers and categories"
      accessibilityRole={AccessibilityRoles.TEXT}
    >
      {/* Header */}
      <View
        style={{
          backgroundColor: "#FFFFFF",
          paddingTop: insets.top + 10,
          paddingBottom: 20,
          paddingHorizontal: 20,
          borderBottomWidth: 1,
          borderBottomColor: "#E5E5E5",
          ...rtlStyles.layout.auto,
        }}
      >
        <View
          style={{
            flexDirection: getFlexDirection("row"),
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: getFlexDirection("row"),
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#007AFF",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 12,
              }}
              accessible={true}
              accessibilityLabel="Thank You BD app logo"
              accessibilityRole={AccessibilityRoles.IMAGE}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  ...FontScalingStyles.text.lg(),
                }}
              >
                TY
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#1A1A1A",
                  ...FontScalingStyles.text.xl(),
                  ...rtlStyles.text.auto,
                }}
              >
                Thank You BD
              </Text>
              <Text
                style={{
                  color: "#687076",
                  ...FontScalingStyles.text.sm(),
                  ...rtlStyles.text.auto,
                }}
              >
                Discount Program
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: getFlexDirection("row"),
              alignItems: "center",
            }}
          >
            <Pressable
              style={[
                TouchTargetConfigs.button.icon,
                {
                  marginRight: 12,
                  backgroundColor: "#F2F2F7",
                  borderRadius: 22,
                },
              ]}
              accessible={true}
              accessibilityLabel="Notification button"
              accessibilityHint="Tap to view notifications"
              accessibilityRole={AccessibilityRoles.BUTTON}
            >
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#007AFF"
              />
            </Pressable>

            <Animated.View style={{ transform: [{ scale: profileScale }] }}>
              <Pressable
                style={[
                  TouchTargetConfigs.button.icon,
                  {
                    backgroundColor: "#F2F2F7",
                    borderRadius: 22,
                  },
                ]}
                accessible={true}
                accessibilityLabel="Profile button"
                accessibilityHint="Tap to navigate to profile"
                accessibilityRole={AccessibilityRoles.BUTTON}
                onPress={handleProfilePress}
              >
                <Ionicons name="person-outline" size={24} color="#007AFF" />
              </Pressable>
            </Animated.View>
          </View>
        </View>
      </View>

      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
        {/* Membership Card */}
        <Pressable
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
            padding: 20,
            marginTop: 20,
            marginBottom: 24,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4,
            ...rtlStyles.layout.auto,
          }}
          accessible={true}
          accessibilityLabel="Membership card with points and balance"
          accessibilityHint="Double tap to view your digital card"
          accessibilityRole={AccessibilityRoles.BUTTON}
        >
          <LinearGradient
            colors={["#007AFF", "#0056CC"]}
            style={{
              borderRadius: 12,
              padding: 16,
              marginBottom: 16,
            }}
          >
            <View>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontWeight: "600",
                  ...FontScalingStyles.text.lg(),
                  ...rtlStyles.text.auto,
                  marginBottom: 4,
                  textAlign: "left",
                }}
              >
                Membership Card
              </Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  opacity: 0.9,
                  ...FontScalingStyles.text.sm(),
                  ...rtlStyles.text.auto,
                  marginBottom: 8,
                  textAlign: "left",
                }}
              >
                Member Name: John Doe
              </Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  opacity: 0.9,
                  ...FontScalingStyles.text.xs(),
                  ...rtlStyles.text.auto,
                  marginBottom: 2,
                  textAlign: "left",
                }}
              >
                Card Number
              </Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  ...FontScalingStyles.text.lg(),
                  ...rtlStyles.text.auto,
                  textAlign: "left",
                }}
              >
                **** **** **** 1234
              </Text>
            </View>
          </LinearGradient>

          <View
            style={{
              flexDirection: getFlexDirection("row"),
              justifyContent: "space-between",
              marginTop: 16,
            }}
          >
            <Pressable
              style={[
                {
                  backgroundColor: "#007AFF",
                  borderRadius: 8,
                  flex: 1,
                  marginRight: 8,
                  paddingVertical: 12,
                  alignItems: "center",
                },
              ]}
              accessible={true}
              accessibilityLabel="View your digital card"
              accessibilityRole={AccessibilityRoles.BUTTON}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontWeight: "600",
                  fontSize: 16,
                  ...rtlStyles.text.center,
                }}
              >
                Show Your Card
              </Text>
            </Pressable>

            <Pressable
              style={[
                {
                  backgroundColor: "#FFFFFF",
                  borderRadius: 8,
                  flex: 1,
                  marginLeft: 8,
                  borderWidth: 2,
                  borderColor: "#007AFF",
                  paddingVertical: 12,
                  alignItems: "center",
                },
              ]}
              accessible={true}
              accessibilityLabel="Earn more points"
              accessibilityRole={AccessibilityRoles.BUTTON}
            >
              <Text
                style={{
                  color: "#007AFF",
                  fontWeight: "600",
                  fontSize: 16,
                  ...rtlStyles.text.center,
                }}
              >
                Earn More
              </Text>
            </Pressable>
          </View>
        </Pressable>

        {/* Points & Balance Widget */}
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
            padding: 20,
            marginBottom: 24,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4,
            ...rtlStyles.layout.auto,
          }}
          accessible={true}
          accessibilityLabel="Points and balance information"
          accessibilityRole={AccessibilityRoles.SUMMARY}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "#1A1A1A",
              marginBottom: 12,
              ...FontScalingStyles.text.xl(),
              ...rtlStyles.text.auto,
            }}
          >
            Your Points
          </Text>

          <View style={{ marginBottom: 16 }}>
            <View
              style={{
                flexDirection: getFlexDirection("row"),
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: "#687076",
                  ...FontScalingStyles.text.sm(),
                  ...rtlStyles.text.auto,
                }}
              >
                Progress
              </Text>
              <Text
                style={{
                  color: "#687076",
                  ...FontScalingStyles.text.sm(),
                  ...rtlStyles.text.auto,
                }}
              >
                750 points to 1000
              </Text>
            </View>
            <View
              style={{
                height: 8,
                backgroundColor: "#F2F2F7",
                borderRadius: 4,
                overflow: "hidden",
              }}
              accessible={true}
              accessibilityLabel="75% progress"
              accessibilityRole={AccessibilityRoles.PROGRESSBAR}
            >
              <View
                style={{
                  width: "75%",
                  height: "100%",
                  backgroundColor: "#34C759",
                  borderRadius: 4,
                }}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: getFlexDirection("row"),
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#1A1A1A",
                  ...FontScalingStyles.text.xxl(),
                  ...rtlStyles.text.auto,
                }}
              >
                ৳2,450
              </Text>
              <Text
                style={{
                  color: "#687076",
                  ...FontScalingStyles.text.sm(),
                  ...rtlStyles.text.auto,
                }}
              >
                Available Balance
              </Text>
            </View>
            <Pressable
              style={[
                TouchTargetConfigs.button.primary,
                {
                  backgroundColor: "#007AFF",
                  borderRadius: 8,
                },
              ]}
              accessible={true}
              accessibilityLabel="Redeem points"
              accessibilityRole={AccessibilityRoles.BUTTON}
            >
              <Text
                style={{
                  color: "#FFFFFF",

                  fontWeight: "600",
                  ...FontScalingStyles.text.sm(),
                  ...rtlStyles.text.center,
                }}
              >
                Redeem Now
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Search Bar */}
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            paddingHorizontal: 16,
            marginBottom: 24,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4,
            ...rtlStyles.layout.auto,
          }}
        >
          <View
            style={{
              flexDirection: getFlexDirection("row"),
              alignItems: "center",
            }}
          >
            <Ionicons
              name="search"
              size={20}
              color="#687076"
              style={{ marginRight: 12 }}
            />
            <TextInput
              style={[
                TouchTargetConfigs.input.search,
                {
                  flex: 1,

                  color: "#1A1A1A",
                  ...FontScalingStyles.text.base(),
                  ...rtlStyles.text.auto,
                },
              ]}
              placeholder="Search"
              placeholderTextColor="#8E8E93"
              accessible={true}
              accessibilityLabel="Search input"
              accessibilityHint="Type to search for categories or vendors"
              accessibilityRole={AccessibilityRoles.SEARCH}
            />
          </View>
        </View>

        {/* Popular Categories */}
        <View style={{ marginBottom: 24 }}>
          <View
            style={{
              flexDirection: getFlexDirection("row"),
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "#1A1A1A",
                ...FontScalingStyles.text.xl(),
                ...rtlStyles.text.auto,
              }}
            >
              Popular Categories
            </Text>
            <Pressable
              style={TouchTargetConfigs.button.small}
              accessible={true}
              accessibilityLabel="View all categories"
              accessibilityRole={AccessibilityRoles.BUTTON}
            >
              <Text
                style={{
                  color: "#007AFF",

                  fontWeight: "600",
                  ...FontScalingStyles.text.sm(),
                  ...rtlStyles.text.auto,
                }}
              >
                View All
              </Text>
            </Pressable>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              padding: 8,
            }}
          >
            {categories.map((category, idx) => (
              <Pressable
                key={category.name}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 12,
                  paddingVertical: 20,
                  paddingHorizontal: 16,
                  marginRight: idx === categories.length - 1 ? 0 : 16,
                  alignItems: "center",
                  minWidth: 100,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 8,
                  elevation: 4,
                }}
                onPress={() => handleCategoryPress(category.name)}
                accessible={true}
                accessibilityLabel={`${category.name} category card`}
                accessibilityHint={`Double tap to view ${category.name} offers`}
                accessibilityRole={AccessibilityRoles.BUTTON}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: category.color,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                  accessible={true}
                  accessibilityLabel={`${category.name} category icon`}
                  accessibilityRole={AccessibilityRoles.IMAGE}
                >
                  <Ionicons name={category.icon} size={24} color="#FFFFFF" />
                </View>
                <Text
                  style={{
                    color: "#1A1A1A",
                    ...FontScalingStyles.text.xs(),
                    ...rtlStyles.text.center,
                  }}
                >
                  {category.name}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Featured Vendors */}
        <View style={{ marginBottom: 24 }}>
          <View
            style={{
              flexDirection: getFlexDirection("row"),
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "#1A1A1A",
                ...FontScalingStyles.text.xl(),
                ...rtlStyles.text.auto,
              }}
            >
              Featured Offers
            </Text>
            <Pressable
              style={TouchTargetConfigs.button.small}
              accessible={true}
              accessibilityLabel="View all vendors"
              accessibilityRole={AccessibilityRoles.BUTTON}
            >
              <Text
                style={{
                  color: "#007AFF",
                  fontWeight: "600",
                  ...FontScalingStyles.text.sm(),
                  ...rtlStyles.text.auto,
                }}
              >
                View All
              </Text>
            </Pressable>
          </View>

          <View
            accessible={true}
            accessibilityLabel="List of featured vendors and offers"
            accessibilityRole={AccessibilityRoles.TEXT}
          >
            {featuredVendors.map((vendor) => (
              <Pressable
                key={vendor.name}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 12,
                  padding: 16,
                  marginBottom: 12,
                  flexDirection: getFlexDirection("row"),
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 8,
                  elevation: 4,
                }}
                onPress={() => handleVendorPress(vendor.name)}
                accessible={true}
                accessibilityLabel={`${vendor.name} vendor card`}
                accessibilityHint={`Double tap to view ${vendor.name} offers`}
                accessibilityRole={AccessibilityRoles.BUTTON}
              >
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 8,
                    backgroundColor: vendor.color,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 16,
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontWeight: "bold",
                      ...FontScalingStyles.text.xxl(),
                      ...rtlStyles.text.center,
                    }}
                  >
                    {vendor.image}
                  </Text>
                </View>

                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontWeight: "600",
                      color: "#1A1A1A",
                      marginBottom: 4,
                      ...FontScalingStyles.text.lg(),
                      ...rtlStyles.text.auto,
                    }}
                  >
                    {vendor.name}
                  </Text>
                  <Text
                    style={{
                      color: "#687076",
                      marginBottom: 4,
                      ...FontScalingStyles.text.sm(),
                      ...rtlStyles.text.auto,
                    }}
                  >
                    {vendor.category} • {vendor.distance}
                  </Text>
                  <View
                    style={{
                      flexDirection: getFlexDirection("row"),
                      alignItems: "center",
                    }}
                  >
                    <Ionicons name="star" size={16} color="#FFD700" />
                    <Text
                      style={{
                        color: "#687076",
                        marginLeft: 4,
                        ...FontScalingStyles.text.sm(),
                        ...rtlStyles.text.auto,
                      }}
                    >
                      {vendor.rating} • {vendor.discount}
                    </Text>
                  </View>
                </View>

                <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
