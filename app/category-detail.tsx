import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Bangladeshi brands data
const bangladeshiBrands = {
  Grocery: [
    {
      id: 1,
      name: "Shwapno",
      logo: "🛒",
      discount: "15% off",
      distance: "0.5 km",
      rating: 4.5,
      category: "Grocery",
    },
    {
      id: 2,
      name: "Meena Bazar",
      logo: "🛒",
      discount: "20% off",
      distance: "1.2 km",
      rating: 4.3,
      category: "Grocery",
    },
    {
      id: 3,
      name: "Prince Bazar",
      logo: "🛒",
      discount: "10% off",
      distance: "0.8 km",
      rating: 4.1,
      category: "Grocery",
    },
    {
      id: 4,
      name: "Aarong",
      logo: "🛒",
      discount: "25% off",
      distance: "2.1 km",
      rating: 4.7,
      category: "Grocery",
    },
    {
      id: 5,
      name: "BD Food",
      logo: "🛒",
      discount: "12% off",
      distance: "1.5 km",
      rating: 4.2,
      category: "Grocery",
    },
    {
      id: 6,
      name: "Unimart",
      logo: "🛒",
      discount: "18% off",
      distance: "0.9 km",
      rating: 4.4,
      category: "Grocery",
    },
    {
      id: 7,
      name: "Best Buy",
      logo: "🛒",
      discount: "22% off",
      distance: "1.8 km",
      rating: 4.6,
      category: "Grocery",
    },
  ],
  "Health/Medicine": [
    {
      id: 8,
      name: "Lazz Pharma",
      logo: "💊",
      discount: "10% off",
      distance: "0.3 km",
      rating: 4.4,
      category: "Health/Medicine",
    },
    {
      id: 9,
      name: "Al-Shefa Pharmacy",
      logo: "💊",
      discount: "15% off",
      distance: "0.7 km",
      rating: 4.2,
      category: "Health/Medicine",
    },
    {
      id: 10,
      name: "Wellbeing Pharmacy",
      logo: "💊",
      discount: "12% off",
      distance: "1.1 km",
      rating: 4.5,
      category: "Health/Medicine",
    },
    {
      id: 11,
      name: "Lead Pharma",
      logo: "💊",
      discount: "8% off",
      distance: "0.5 km",
      rating: 4.1,
      category: "Health/Medicine",
    },
  ],
  "Hospitals/Diagnostics": [
    {
      id: 12,
      name: "Popular Diagnostic Center",
      logo: "🏥",
      discount: "20% off",
      distance: "2.3 km",
      rating: 4.6,
      category: "Hospitals/Diagnostics",
    },
    {
      id: 13,
      name: "Alok Diagnostic Center",
      logo: "🏥",
      discount: "15% off",
      distance: "1.8 km",
      rating: 4.3,
      category: "Hospitals/Diagnostics",
    },
    {
      id: 14,
      name: "Ibn Sina Specialized Hospital",
      logo: "🏥",
      discount: "25% off",
      distance: "3.2 km",
      rating: 4.8,
      category: "Hospitals/Diagnostics",
    },
  ],
  "Mobile Phones": [
    {
      id: 15,
      name: "Samsung",
      logo: "📱",
      discount: "12% off",
      distance: "1.2 km",
      rating: 4.5,
      category: "Mobile Phones",
    },
    {
      id: 16,
      name: "Xiaomi",
      logo: "📱",
      discount: "18% off",
      distance: "0.8 km",
      rating: 4.3,
      category: "Mobile Phones",
    },
    {
      id: 17,
      name: "Realme",
      logo: "📱",
      discount: "15% off",
      distance: "1.5 km",
      rating: 4.2,
      category: "Mobile Phones",
    },
    {
      id: 18,
      name: "Oppo",
      logo: "📱",
      discount: "20% off",
      distance: "1.0 km",
      rating: 4.4,
      category: "Mobile Phones",
    },
    {
      id: 19,
      name: "Vivo",
      logo: "📱",
      discount: "16% off",
      distance: "0.9 km",
      rating: 4.1,
      category: "Mobile Phones",
    },
    {
      id: 20,
      name: "Apple",
      logo: "📱",
      discount: "8% off",
      distance: "2.1 km",
      rating: 4.7,
      category: "Mobile Phones",
    },
    {
      id: 21,
      name: "Huawei",
      logo: "📱",
      discount: "14% off",
      distance: "1.3 km",
      rating: 4.0,
      category: "Mobile Phones",
    },
    {
      id: 22,
      name: "Infinix",
      logo: "📱",
      discount: "22% off",
      distance: "0.7 km",
      rating: 4.2,
      category: "Mobile Phones",
    },
    {
      id: 23,
      name: "Tecno",
      logo: "📱",
      discount: "19% off",
      distance: "1.1 km",
      rating: 4.1,
      category: "Mobile Phones",
    },
    {
      id: 24,
      name: "Walton",
      logo: "📱",
      discount: "25% off",
      distance: "1.6 km",
      rating: 4.3,
      category: "Mobile Phones",
    },
    {
      id: 25,
      name: "Nokia",
      logo: "📱",
      discount: "10% off",
      distance: "1.8 km",
      rating: 4.4,
      category: "Mobile Phones",
    },
    {
      id: 26,
      name: "Symphony",
      logo: "📱",
      discount: "30% off",
      distance: "0.5 km",
      rating: 4.0,
      category: "Mobile Phones",
    },
    {
      id: 27,
      name: "OnePlus",
      logo: "📱",
      discount: "12% off",
      distance: "2.0 km",
      rating: 4.6,
      category: "Mobile Phones",
    },
    {
      id: 28,
      name: "Motorola",
      logo: "📱",
      discount: "15% off",
      distance: "1.4 km",
      rating: 4.2,
      category: "Mobile Phones",
    },
    {
      id: 29,
      name: "Lava",
      logo: "📱",
      discount: "20% off",
      distance: "0.9 km",
      rating: 4.1,
      category: "Mobile Phones",
    },
    {
      id: 30,
      name: "Itel",
      logo: "📱",
      discount: "28% off",
      distance: "0.6 km",
      rating: 4.0,
      category: "Mobile Phones",
    },
    {
      id: 31,
      name: "HTC",
      logo: "📱",
      discount: "5% off",
      distance: "2.5 km",
      rating: 4.3,
      category: "Mobile Phones",
    },
    {
      id: 32,
      name: "Sony",
      logo: "📱",
      discount: "8% off",
      distance: "2.2 km",
      rating: 4.5,
      category: "Mobile Phones",
    },
    {
      id: 33,
      name: "Google (Pixel)",
      logo: "📱",
      discount: "6% off",
      distance: "2.8 km",
      rating: 4.7,
      category: "Mobile Phones",
    },
    {
      id: 34,
      name: "Lenovo",
      logo: "📱",
      discount: "18% off",
      distance: "1.7 km",
      rating: 4.2,
      category: "Mobile Phones",
    },
  ],
  "Tourist Hotels": [
    {
      id: 35,
      name: "Hotel Sea Uttora",
      logo: "🏨",
      discount: "15% off",
      distance: "5.2 km",
      rating: 4.6,
      category: "Tourist Hotels",
      location: "Cox's Bazar",
    },
    {
      id: 36,
      name: "Hotel Kollol",
      logo: "🏨",
      discount: "20% off",
      distance: "4.8 km",
      rating: 4.4,
      category: "Tourist Hotels",
      location: "Cox's Bazar",
    },
    {
      id: 37,
      name: "Ocean Paradise",
      logo: "🏨",
      discount: "12% off",
      distance: "5.5 km",
      rating: 4.7,
      category: "Tourist Hotels",
      location: "Cox's Bazar",
    },
    {
      id: 38,
      name: "Hotel Ocean Palace",
      logo: "🏨",
      discount: "18% off",
      distance: "4.9 km",
      rating: 4.3,
      category: "Tourist Hotels",
      location: "Cox's Bazar",
    },
    {
      id: 39,
      name: "Hotel Purabi",
      logo: "🏨",
      discount: "25% off",
      distance: "6.1 km",
      rating: 4.2,
      category: "Tourist Hotels",
      location: "Bandarban",
    },
    {
      id: 40,
      name: "Night Heaven",
      logo: "🏨",
      discount: "22% off",
      distance: "5.8 km",
      rating: 4.5,
      category: "Tourist Hotels",
      location: "Bandarban",
    },
    {
      id: 41,
      name: "Garden City",
      logo: "🏨",
      discount: "16% off",
      distance: "6.3 km",
      rating: 4.1,
      category: "Tourist Hotels",
      location: "Bandarban",
    },
    {
      id: 42,
      name: "Hotel Plaza",
      logo: "🏨",
      discount: "14% off",
      distance: "5.9 km",
      rating: 4.4,
      category: "Tourist Hotels",
      location: "Bandarban",
    },
    {
      id: 43,
      name: "Parjatan Motel",
      logo: "🏨",
      discount: "30% off",
      distance: "6.5 km",
      rating: 4.0,
      category: "Tourist Hotels",
      location: "Bandarban",
    },
    {
      id: 44,
      name: "Green Peak Resorts",
      logo: "🏨",
      discount: "28% off",
      distance: "7.2 km",
      rating: 4.6,
      category: "Tourist Hotels",
      location: "Bandarban",
    },
    {
      id: 45,
      name: "Hill View",
      logo: "🏨",
      discount: "24% off",
      distance: "6.8 km",
      rating: 4.3,
      category: "Tourist Hotels",
      location: "Bandarban",
    },
    {
      id: 46,
      name: "Diamond Park",
      logo: "🏨",
      discount: "19% off",
      distance: "8.1 km",
      rating: 4.5,
      category: "Tourist Hotels",
      location: "Chittagong",
    },
    {
      id: 47,
      name: "Hotel Heritage",
      logo: "🏨",
      discount: "21% off",
      distance: "7.8 km",
      rating: 4.7,
      category: "Tourist Hotels",
      location: "Chittagong",
    },
    {
      id: 48,
      name: "Crown City",
      logo: "🏨",
      discount: "17% off",
      distance: "8.3 km",
      rating: 4.2,
      category: "Tourist Hotels",
      location: "Chittagong",
    },
    {
      id: 49,
      name: "Regal Palace",
      logo: "🏨",
      discount: "23% off",
      distance: "7.9 km",
      rating: 4.4,
      category: "Tourist Hotels",
      location: "Chittagong",
    },
    {
      id: 50,
      name: "Hotel Shaikat",
      logo: "🏨",
      discount: "26% off",
      distance: "8.5 km",
      rating: 4.1,
      category: "Tourist Hotels",
      location: "Chittagong",
    },
    {
      id: 51,
      name: "Saint Martin",
      logo: "🏨",
      discount: "35% off",
      distance: "12.3 km",
      rating: 4.8,
      category: "Tourist Hotels",
      location: "Saint Martin",
    },
  ],
};

export default function CategoryDetailScreen() {
  const insets = useSafeAreaInsets();
  const { category } = useLocalSearchParams<{ category: string }>();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const vendors =
    bangladeshiBrands[category as keyof typeof bangladeshiBrands] || [];

  return (
    <View className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <View
        className="bg-white dark:bg-gray-800 px-4 pb-4 border-b border-gray-200 dark:border-gray-700"
        style={{ paddingTop: insets.top + 12 }}
      >
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Pressable onPress={() => router.back()} className="mr-3 p-2">
              <Ionicons name="arrow-back" size={24} color="#6B7280" />
            </Pressable>
            <Text className="text-xl font-bold text-gray-900 dark:text-white">
              {category}
            </Text>
          </View>

          <View className="flex-row items-center space-x-3">
            <Pressable className="p-2">
              <Ionicons name="search-outline" size={24} color="#6B7280" />
            </Pressable>
            <Pressable className="p-2">
              <Ionicons name="filter-outline" size={24} color="#6B7280" />
            </Pressable>
          </View>
        </View>
      </View>

      {/* Content */}
      <ScrollView
        className="flex-1 px-4 pt-4"
        contentContainerStyle={{
          paddingBottom: 100,
          paddingTop: 8,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Category Info */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-bold text-gray-900 dark:text-white">
              {vendors.length} Vendors Available
            </Text>
            <View className="flex-row items-center space-x-2">
              <Pressable
                className={`rounded-lg p-2 ${viewMode === "grid" ? "bg-primary-100 dark:bg-primary-900" : "bg-gray-100 dark:bg-gray-700"}`}
                onPress={() => setViewMode("grid")}
              >
                <Ionicons
                  name="grid-outline"
                  size={20}
                  color={viewMode === "grid" ? "#667eea" : "#6B7280"}
                />
              </Pressable>
              <Pressable
                className={`rounded-lg p-2 ${viewMode === "list" ? "bg-primary-100 dark:bg-primary-900" : "bg-gray-100 dark:bg-gray-700"}`}
                onPress={() => setViewMode("list")}
              >
                <Ionicons
                  name="list-outline"
                  size={20}
                  color={viewMode === "list" ? "#667eea" : "#6B7280"}
                />
              </Pressable>
            </View>
          </View>

          <Text className="text-gray-600 dark:text-gray-400 text-sm">
            Discover amazing deals from top {category} vendors in your area
          </Text>
        </View>

        {/* Vendors Grid/List */}
        {viewMode === "grid" ? (
          <View className="flex-row flex-wrap justify-between">
            {vendors.map((vendor) => (
              <Pressable
                key={vendor.id}
                className="w-[48%] bg-white dark:bg-gray-800 rounded-2xl p-4 mb-4 shadow-sm"
                onPress={() =>
                  router.push({
                    pathname: "/vendor-detail",
                    params: { vendorId: vendor.id.toString() },
                  })
                }
              >
                {/* Vendor Logo */}
                <View className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-xl items-center justify-center mb-3 mx-auto">
                  <Text className="text-2xl">{vendor.logo}</Text>
                </View>

                {/* Vendor Info */}
                <View className="items-center">
                  <Text className="text-gray-900 dark:text-white font-semibold text-sm text-center mb-1">
                    {vendor.name}
                  </Text>

                  {(vendor as any).location && (
                    <Text className="text-gray-500 dark:text-gray-400 text-xs text-center mb-2">
                      {(vendor as any).location}
                    </Text>
                  )}

                  {/* Rating */}
                  <View className="flex-row items-center mb-2">
                    <Ionicons name="star" size={12} color="#FBBF24" />
                    <Text className="text-xs text-gray-600 dark:text-gray-400 ml-1">
                      {vendor.rating}
                    </Text>
                  </View>

                  {/* Discount */}
                  <View className="bg-green-100 dark:bg-green-900 rounded-full px-3 py-1 mb-2">
                    <Text className="text-green-700 dark:text-green-300 text-xs font-bold">
                      {vendor.discount}
                    </Text>
                  </View>

                  {/* Distance */}
                  <Text className="text-gray-500 dark:text-gray-400 text-xs">
                    {vendor.distance}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        ) : (
          <View className="space-y-4">
            {vendors.map((vendor) => (
              <Pressable
                key={vendor.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm"
                onPress={() =>
                  router.push({
                    pathname: "/vendor-detail",
                    params: { vendorId: vendor.id.toString() },
                  })
                }
              >
                <View className="flex-row items-center">
                  {/* Vendor Logo */}
                  <View className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-xl items-center justify-center mr-4">
                    <Text className="text-2xl">{vendor.logo}</Text>
                  </View>

                  {/* Vendor Info */}
                  <View className="flex-1">
                    <View className="flex-row items-center justify-between mb-2">
                      <Text className="text-gray-900 dark:text-white font-semibold text-base">
                        {vendor.name}
                      </Text>
                      <View className="bg-green-100 dark:bg-green-900 rounded-full px-3 py-1">
                        <Text className="text-green-700 dark:text-green-300 text-xs font-bold">
                          {vendor.discount}
                        </Text>
                      </View>
                    </View>

                    {(vendor as any).location && (
                      <Text className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                        {(vendor as any).location}
                      </Text>
                    )}

                    <View className="flex-row items-center justify-between">
                      <View className="flex-row items-center">
                        <Ionicons name="star" size={14} color="#FBBF24" />
                        <Text className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                          {vendor.rating}
                        </Text>
                      </View>
                      <Text className="text-gray-500 dark:text-gray-400 text-sm">
                        {vendor.distance}
                      </Text>
                    </View>
                  </View>

                  <Ionicons name="chevron-forward" size={20} color="#6B7280" />
                </View>
              </Pressable>
            ))}
          </View>
        )}

        {/* Load More */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Pressable className="items-center">
            <Text className="text-primary-600 dark:text-primary-400 font-semibold">
              Load More Vendors
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
