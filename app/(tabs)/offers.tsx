import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const offers = [
  {
    id: 1,
    title: "20% Off at Starbucks",
    vendor: "Starbucks",
    category: "Coffee",
    discount: "20%",
    validUntil: "Dec 31, 2024",
    icon: <Ionicons name="cafe-outline" size={32} color="#a16207" />, // Coffee
    isNew: true,
  },
  {
    id: 2,
    title: "Free Month at Planet Fitness",
    vendor: "Planet Fitness",
    category: "Fitness",
    discount: "Free Month",
    validUntil: "Jan 15, 2025",
    icon: <Ionicons name="barbell-outline" size={32} color="#16a34a" />, // Fitness
    isNew: false,
  },
  {
    id: 3,
    title: "30% Off at Sephora",
    vendor: "Sephora",
    category: "Beauty",
    discount: "30%",
    validUntil: "Dec 25, 2024",
    icon: <Ionicons name="rose-outline" size={32} color="#be185d" />, // Beauty
    isNew: true,
  },
  {
    id: 4,
    title: "15% Off at McDonald's",
    vendor: "McDonald's",
    category: "Restaurants",
    discount: "15%",
    validUntil: "Jan 10, 2025",
    icon: <Ionicons name="fast-food-outline" size={32} color="#ea580c" />, // Food
    isNew: false,
  },
  {
    id: 5,
    title: "25% Off at Nike Store",
    vendor: "Nike Store",
    category: "Shopping",
    discount: "25%",
    validUntil: "Jan 20, 2025",
    icon: <Ionicons name="shirt-outline" size={32} color="#2563eb" />, // Shopping
    isNew: true,
  },
];

export default function OffersScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <View
        className="bg-white dark:bg-gray-800 px-4 pb-4 border-b border-gray-200 dark:border-gray-700"
        style={{ paddingTop: insets.top + 12 }}
      >
        <Text className="text-xl font-bold text-gray-900 dark:text-white text-center">
          Offers
        </Text>
      </View>

      {/* Offers Content */}
      <ScrollView
        className="flex-1 px-4 pt-6"
        contentContainerStyle={{
          paddingBottom: 100, // Extra padding for tab bar
          paddingTop: 16, // More space above
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Bar */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-4 mb-8 shadow-sm">
          <View className="flex-row items-center bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-3">
            <Ionicons name="search-outline" size={20} color="#6B7280" />
            <Text className="flex-1 ml-3 text-gray-500 dark:text-gray-400">
              Search offers...
            </Text>
          </View>
        </View>

        {/* Filter Tabs */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-4 mb-8 shadow-sm">
          <View className="flex-row space-x-2">
            <Pressable className="bg-primary-600 rounded-full px-4 py-2">
              <Text className="text-white text-sm font-medium">All</Text>
            </Pressable>
            <Pressable className="bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2">
              <Text className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                New
              </Text>
            </Pressable>
            <Pressable className="bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2">
              <Text className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Popular
              </Text>
            </Pressable>
            <Pressable className="bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2">
              <Text className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Expiring
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Offers List */}
        <View className="space-y-6 gap-y-3">
          {offers.map((offer) => (
            <Pressable
              key={offer.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <View className="flex-row items-center">
                {/* Offer Icon */}
                <View className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-xl items-center justify-center mr-5">
                  {offer.icon}
                </View>

                {/* Offer Details */}
                <View className="flex-1">
                  <View className="flex-row items-center justify-between mb-2">
                    <Text className="text-lg font-bold text-gray-900 dark:text-white">
                      {offer.title}
                    </Text>
                    {offer.isNew && (
                      <View className="bg-red-100 dark:bg-red-900 rounded-full px-2 py-1">
                        <Text className="text-red-700 dark:text-red-300 text-xs font-bold">
                          NEW
                        </Text>
                      </View>
                    )}
                  </View>

                  <Text className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {offer.vendor} • {offer.category}
                  </Text>

                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center">
                      <View className="bg-green-100 dark:bg-green-900 rounded-full px-3 py-1 mr-3">
                        <Text className="text-green-700 dark:text-green-300 text-sm font-bold">
                          {offer.discount}
                        </Text>
                      </View>
                      <Text className="text-gray-500 dark:text-gray-400 text-xs">
                        Valid until {offer.validUntil}
                      </Text>
                    </View>
                    <Ionicons
                      name="chevron-forward"
                      size={20}
                      color="#6B7280"
                    />
                  </View>
                </View>
              </View>
            </Pressable>
          ))}
        </View>

        {/* Load More */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mt-8 shadow-sm">
          <Pressable className="items-center">
            <Text className="text-primary-600 dark:text-primary-400 font-semibold">
              Load More Offers
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
