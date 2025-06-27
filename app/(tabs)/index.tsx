import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const categories = [
  { id: 1, name: "Restaurants", icon: "restaurant-outline", color: "#FF6B6B" },
  { id: 2, name: "Coffee", icon: "cafe-outline", color: "#4ECDC4" },
  { id: 3, name: "Shopping", icon: "bag-outline", color: "#45B7D1" },
  { id: 4, name: "Beauty", icon: "cut-outline", color: "#96CEB4" },
  { id: 5, name: "Fitness", icon: "fitness-outline", color: "#FFEAA7" },
  {
    id: 6,
    name: "Entertainment",
    icon: "game-controller-outline",
    color: "#DDA0DD",
  },
  { id: 7, name: "Health", icon: "medical-outline", color: "#98D8C8" },
  { id: 8, name: "Services", icon: "construct-outline", color: "#F7DC6F" },
  { id: 9, name: "Transport", icon: "car-outline", color: "#BB8FCE" },
  { id: 10, name: "Education", icon: "school-outline", color: "#85C1E9" },
  {
    id: 11,
    name: "More",
    icon: "ellipsis-horizontal-outline",
    color: "#AEB6BF",
  },
];

const featuredVendors = [
  {
    id: 1,
    name: "Starbucks",
    category: "Coffee",
    rating: 4.5,
    discount: "20% off",
    image: "☕",
  },
  {
    id: 2,
    name: "McDonald's",
    category: "Restaurants",
    rating: 4.2,
    discount: "15% off",
    image: "🍔",
  },
  {
    id: 3,
    name: "Nike Store",
    category: "Shopping",
    rating: 4.7,
    discount: "25% off",
    image: "👟",
  },
  {
    id: 4,
    name: "Sephora",
    category: "Beauty",
    rating: 4.4,
    discount: "30% off",
    image: "💄",
  },
  {
    id: 5,
    name: "Planet Fitness",
    category: "Fitness",
    rating: 4.3,
    discount: "Free month",
    image: "💪",
  },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const handleCategoryPress = (categoryName: string) => {
    router.push({
      pathname: "/category-detail",
      params: { category: categoryName },
    });
  };

  return (
    <View className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Top Bar */}
      <View
        className="bg-white dark:bg-gray-800 px-4 pb-4 border-b border-gray-200 dark:border-gray-700"
        style={{ paddingTop: insets.top + 12 }}
      >
        <View className="flex-row items-center justify-between">
          {/* Logo */}
          <View className="flex-row items-center">
            <View className="w-8 h-8 bg-primary-600 rounded-lg items-center justify-center mr-2">
              <Text className="text-white font-bold text-sm">TY</Text>
            </View>
            <Text className="text-lg font-bold text-gray-900 dark:text-white">
              Thank You BD
            </Text>
          </View>

          {/* Right Icons */}
          <View className="flex-row items-center space-x-4">
            {/* Notification Icon */}
            <Pressable className="relative">
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#6B7280"
              />
              <View className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
            </Pressable>

            {/* Profile Icon */}
            <Pressable>
              <View className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full items-center justify-center">
                <Ionicons name="person-outline" size={20} color="#6B7280" />
              </View>
            </Pressable>

            {/* Menu Icon */}
            <Pressable>
              <Ionicons name="menu-outline" size={24} color="#6B7280" />
            </Pressable>
          </View>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView
        className="flex-1 px-4 pt-4"
        contentContainerStyle={{
          paddingBottom: 100, // Extra padding for tab bar
          paddingTop: 8,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome back!
        </Text>

        {/* Membership Card Widget */}
        <View className="mb-6">
          <LinearGradient
            colors={["#667eea", "#764ba2"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="rounded-2xl p-6 shadow-lg"
          >
            {/* Card Header */}
            <View className="flex-row justify-between items-start mb-6">
              <View>
                <Text className="text-white/80 text-sm font-medium mb-1">
                  MEMBER NAME
                </Text>
                <Text className="text-white text-xl font-bold">John Doe</Text>
              </View>
              <View className="bg-white/20 rounded-lg px-3 py-1">
                <Text className="text-white text-xs font-semibold">GOLD</Text>
              </View>
            </View>

            {/* Card Number */}
            <View className="mb-6">
              <Text className="text-white/80 text-sm font-medium mb-2">
                CARD NUMBER
              </Text>
              <Text className="text-white text-lg font-mono tracking-wider">
                **** **** **** 1234
              </Text>
            </View>

            {/* Card Footer */}
            <View className="flex-row justify-between items-end">
              <View>
                <Text className="text-white/80 text-sm font-medium mb-1">
                  EXPIRES
                </Text>
                <Text className="text-white text-base font-semibold">
                  12/25
                </Text>
              </View>

              {/* Quick Access Buttons */}
              <View className="flex-row space-x-3">
                <Pressable className="bg-white/20 rounded-full p-2">
                  <Ionicons name="qr-code-outline" size={20} color="white" />
                </Pressable>
                <Pressable className="bg-white/20 rounded-full p-2">
                  <Ionicons name="card-outline" size={20} color="white" />
                </Pressable>
                <Pressable className="bg-white/20 rounded-full p-2">
                  <Ionicons name="settings-outline" size={20} color="white" />
                </Pressable>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Points/Balance Widget */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-lg font-bold text-gray-900 dark:text-white">
              Your Rewards
            </Text>
            <Pressable className="bg-primary-100 dark:bg-primary-900 rounded-full px-3 py-1">
              <Text className="text-primary-700 dark:text-primary-300 text-sm font-medium">
                View History
              </Text>
            </Pressable>
          </View>

          {/* Points Display */}
          <View className="flex-row justify-between items-center mb-6">
            <View>
              <Text className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
                Current Points
              </Text>
              <Text className="text-3xl font-bold text-gray-900 dark:text-white">
                2,450
              </Text>
            </View>
            <View className="items-end">
              <Text className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
                Balance
              </Text>
              <Text className="text-2xl font-bold text-green-600 dark:text-green-400">
                $24.50
              </Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View className="mb-6">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-gray-600 dark:text-gray-400 text-sm">
                Progress to Gold
              </Text>
              <Text className="text-gray-600 dark:text-gray-400 text-sm">
                2,450 / 5,000
              </Text>
            </View>
            <View className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <View
                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                style={{ width: "49%" }}
              />
            </View>
            <Text className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              49% complete - 2,550 points to Gold level
            </Text>
          </View>

          {/* Quick Actions */}
          <View className="flex-row space-x-3">
            <Pressable className="flex-1 bg-primary-600 rounded-xl py-3 items-center">
              <Ionicons name="add-circle-outline" size={20} color="white" />
              <Text className="text-white font-semibold text-sm mt-1">
                Earn Points
              </Text>
            </Pressable>
            <Pressable className="flex-1 bg-green-600 rounded-xl py-3 items-center">
              <Ionicons name="gift-outline" size={20} color="white" />
              <Text className="text-white font-semibold text-sm mt-1">
                Redeem
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Search Bar */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-4 mb-6 shadow-sm">
          <View className="flex-row items-center bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-3">
            <Ionicons name="search-outline" size={20} color="#6B7280" />
            <TextInput
              placeholder="Search vendors, categories..."
              placeholderTextColor="#9CA3AF"
              className="flex-1 ml-3 text-gray-900 dark:text-white"
            />
          </View>
        </View>

        {/* Category Grid */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Categories
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {categories.map((category) => (
              <Pressable
                key={category.id}
                className="w-[30%] items-center mb-4"
                onPress={() => handleCategoryPress(category.name)}
              >
                <View
                  className="w-16 h-16 rounded-2xl items-center justify-center mb-2"
                  style={{ backgroundColor: category.color + "20" }}
                >
                  <Ionicons
                    name={category.icon as any}
                    size={28}
                    color={category.color}
                  />
                </View>
                <Text className="text-xs text-gray-600 dark:text-gray-400 text-center font-medium">
                  {category.name}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Featured Vendors */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-900 dark:text-white">
              Featured Vendors
            </Text>
            <Pressable>
              <Text className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                View All
              </Text>
            </Pressable>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row"
          >
            {featuredVendors.map((vendor) => (
              <Pressable
                key={vendor.id}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mr-4 w-40"
              >
                <View className="items-center mb-3">
                  <Text className="text-3xl mb-2">{vendor.image}</Text>
                  <Text className="text-sm font-bold text-gray-900 dark:text-white text-center">
                    {vendor.name}
                  </Text>
                  <Text className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    {vendor.category}
                  </Text>
                </View>

                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <Ionicons name="star" size={12} color="#FBBF24" />
                    <Text className="text-xs text-gray-600 dark:text-gray-400 ml-1">
                      {vendor.rating}
                    </Text>
                  </View>
                  <View className="bg-green-100 dark:bg-green-900 rounded-full px-2 py-1">
                    <Text className="text-xs font-bold text-green-700 dark:text-green-300">
                      {vendor.discount}
                    </Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Placeholder for promo banners */}
        <View className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
          <Text className="text-gray-600 dark:text-gray-300">
            Promo banners will go here
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
