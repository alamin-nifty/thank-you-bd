import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const categories = [
  {
    id: 1,
    name: "Restaurants",
    icon: "restaurant-outline",
    color: "#FF6B6B",
    count: 45,
  },
  { id: 2, name: "Coffee", icon: "cafe-outline", color: "#4ECDC4", count: 32 },
  { id: 3, name: "Shopping", icon: "bag-outline", color: "#45B7D1", count: 78 },
  { id: 4, name: "Beauty", icon: "cut-outline", color: "#96CEB4", count: 23 },
  {
    id: 5,
    name: "Fitness",
    icon: "fitness-outline",
    color: "#FFEAA7",
    count: 15,
  },
  {
    id: 6,
    name: "Entertainment",
    icon: "game-controller-outline",
    color: "#DDA0DD",
    count: 28,
  },
  {
    id: 7,
    name: "Health",
    icon: "medical-outline",
    color: "#98D8C8",
    count: 19,
  },
  {
    id: 8,
    name: "Services",
    icon: "construct-outline",
    color: "#F7DC6F",
    count: 34,
  },
  {
    id: 9,
    name: "Transport",
    icon: "car-outline",
    color: "#BB8FCE",
    count: 12,
  },
  {
    id: 10,
    name: "Education",
    icon: "school-outline",
    color: "#85C1E9",
    count: 8,
  },
  {
    id: 11,
    name: "More",
    icon: "ellipsis-horizontal-outline",
    color: "#AEB6BF",
    count: 0,
  },
];

export default function ExploreScreen() {
  const insets = useSafeAreaInsets();

  const handleCategoryPress = (categoryName: string) => {
    router.push({
      pathname: "/category-detail",
      params: { category: categoryName },
    });
  };

  return (
    <View className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <View
        className="bg-white dark:bg-gray-800 px-4 pb-4 border-b border-gray-200 dark:border-gray-700"
        style={{ paddingTop: insets.top + 12 }}
      >
        <Text className="text-xl font-bold text-gray-900 dark:text-white text-center">
          Categories
        </Text>
      </View>

      {/* Categories Content */}
      <ScrollView
        className="flex-1 px-4 pt-6"
        contentContainerStyle={{
          paddingBottom: 100, // Extra padding for tab bar
          paddingTop: 8,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Bar */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-4 mb-6 shadow-sm">
          <View className="flex-row items-center bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-3">
            <Ionicons name="search-outline" size={20} color="#6B7280" />
            <Text className="flex-1 ml-3 text-gray-500 dark:text-gray-400">
              Search categories...
            </Text>
          </View>
        </View>

        {/* Categories Grid */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm mb-4">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            All Categories
          </Text>

          <View className="flex-row flex-wrap justify-between">
            {categories.map((category) => (
              <Pressable
                key={category.id}
                className="w-[48%] bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4"
                onPress={() => handleCategoryPress(category.name)}
              >
                <View className="flex-row items-center mb-3">
                  <View
                    className="w-12 h-12 rounded-xl items-center justify-center mr-3"
                    style={{ backgroundColor: category.color + "20" }}
                  >
                    <Ionicons
                      name={category.icon as any}
                      size={24}
                      color={category.color}
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 dark:text-white font-semibold text-sm">
                      {category.name}
                    </Text>
                    <Text className="text-gray-500 dark:text-gray-400 text-xs">
                      {category.count} vendors
                    </Text>
                  </View>
                </View>

                <View className="flex-row items-center justify-between">
                  <Text className="text-primary-600 dark:text-primary-400 text-xs font-medium">
                    View Offers
                  </Text>
                  <Ionicons name="chevron-forward" size={16} color="#667eea" />
                </View>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Popular Categories */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Popular Categories
          </Text>

          <View className="space-y-3">
            {categories.slice(0, 5).map((category) => (
              <Pressable
                key={category.id}
                className="flex-row items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl"
              >
                <View className="flex-row items-center">
                  <View
                    className="w-10 h-10 rounded-lg items-center justify-center mr-3"
                    style={{ backgroundColor: category.color + "20" }}
                  >
                    <Ionicons
                      name={category.icon as any}
                      size={20}
                      color={category.color}
                    />
                  </View>
                  <View>
                    <Text className="text-gray-900 dark:text-white font-medium">
                      {category.name}
                    </Text>
                    <Text className="text-gray-500 dark:text-gray-400 text-xs">
                      {category.count} vendors available
                    </Text>
                  </View>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#6B7280" />
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
