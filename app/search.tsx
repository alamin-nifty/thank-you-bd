import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Mock data
const recentSearches = [
  "Shwapno",
  "Meena Bazar",
  "Samsung",
  "Restaurants",
  "Electronics",
];

const searchResults = [
  {
    id: 1,
    name: "Shwapno Supermarket",
    category: "Grocery",
    discount: "15%",
    rating: 4.5,
    distance: "0.5 km",
    image: "🛒",
  },
  {
    id: 2,
    name: "Meena Bazar",
    category: "Grocery",
    discount: "10%",
    rating: 4.2,
    distance: "1.2 km",
    image: "🛒",
  },
  {
    id: 3,
    name: "Samsung Experience Store",
    category: "Electronics",
    discount: "20%",
    rating: 4.7,
    distance: "2.1 km",
    image: "📱",
  },
  {
    id: 4,
    name: "Aarong",
    category: "Fashion",
    discount: "25%",
    rating: 4.3,
    distance: "1.8 km",
    image: "👗",
  },
  {
    id: 5,
    name: "Bata",
    category: "Footwear",
    discount: "12%",
    rating: 4.1,
    distance: "0.9 km",
    image: "👟",
  },
];

const categories = [
  { name: "Grocery", icon: "🛒", count: 45 },
  { name: "Electronics", icon: "📱", count: 32 },
  { name: "Fashion", icon: "👗", count: 28 },
  { name: "Restaurants", icon: "🍽️", count: 67 },
  { name: "Beauty", icon: "💄", count: 23 },
  { name: "Home", icon: "🏠", count: 19 },
];

const filterOptions = {
  sortBy: ["Relevance", "Distance", "Rating", "Discount"],
  categories: [
    "All",
    "Grocery",
    "Electronics",
    "Fashion",
    "Restaurants",
    "Beauty",
    "Home",
  ],
  rating: ["Any", "3+", "3.5+", "4+", "4.5+"],
  discount: ["Any", "5%+", "10%+", "15%+", "20%+"],
  distance: ["Any", "1 km", "2 km", "5 km", "10 km"],
};

export default function SearchScreen() {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    sortBy: "Relevance",
    category: "All",
    rating: "Any",
    discount: "Any",
    distance: "Any",
  });
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setHasSearched(true);
  };

  const handleRecentSearch = (search: string) => {
    setSearchQuery(search);
    setHasSearched(true);
  };

  const handleVendorPress = (vendorId: number) => {
    router.push({
      pathname: "/vendor-detail",
      params: { vendorId: vendorId.toString() },
    });
  };

  const handleCategoryPress = (category: string) => {
    router.push({
      pathname: "/category-detail",
      params: { category },
    });
  };

  const clearSearch = () => {
    setSearchQuery("");
    setHasSearched(false);
  };

  return (
    <View className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <View
        className="bg-white dark:bg-gray-800 px-4 pb-4 border-b border-gray-200 dark:border-gray-700"
        style={{ paddingTop: insets.top + 12 }}
      >
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-xl font-bold text-gray-900 dark:text-white">
            Search
          </Text>
          <Pressable
            className="p-2"
            onPress={() => setShowFilters(!showFilters)}
          >
            <Ionicons name="filter" size={24} color="#6B7280" />
          </Pressable>
        </View>

        {/* Search Bar */}
        <View className="flex-row items-center bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-3">
          <Ionicons name="search" size={20} color="#6B7280" />
          <TextInput
            className="flex-1 ml-3 text-gray-900 dark:text-white"
            placeholder="Search vendors, categories..."
            placeholderTextColor="#6B7280"
            value={searchQuery}
            onChangeText={handleSearch}
            onSubmitEditing={() => handleSearch(searchQuery)}
          />
          {searchQuery.length > 0 && (
            <Pressable onPress={clearSearch}>
              <Ionicons name="close-circle" size={20} color="#6B7280" />
            </Pressable>
          )}
        </View>
      </View>

      {/* Filters */}
      {showFilters && (
        <View className="bg-white dark:bg-gray-800 px-4 py-4 border-b border-gray-200 dark:border-gray-700">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            Filters
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row space-x-2">
              {filterOptions.sortBy.map((option) => (
                <Pressable
                  key={option}
                  className={`px-3 py-2 rounded-full border ${
                    selectedFilters.sortBy === option
                      ? "bg-primary-100 dark:bg-primary-900 border-primary-500"
                      : "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  }`}
                  onPress={() =>
                    setSelectedFilters({ ...selectedFilters, sortBy: option })
                  }
                >
                  <Text
                    className={`text-sm font-medium ${
                      selectedFilters.sortBy === option
                        ? "text-primary-600 dark:text-primary-400"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {option}
                  </Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>
        </View>
      )}

      {/* Content */}
      <ScrollView
        className="flex-1 px-4 pt-4"
        contentContainerStyle={{
          paddingBottom: 100,
          paddingTop: 8,
        }}
        showsVerticalScrollIndicator={false}
      >
        {!hasSearched ? (
          <>
            {/* Recent Searches */}
            <View className="mb-6">
              <Text className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Recent Searches
              </Text>
              <View className="flex-row flex-wrap">
                {recentSearches.map((search, index) => (
                  <Pressable
                    key={index}
                    className="bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2 mr-2 mb-2"
                    onPress={() => handleRecentSearch(search)}
                  >
                    <Text className="text-gray-700 dark:text-gray-300 text-sm">
                      {search}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            {/* Popular Categories */}
            <View className="mb-6">
              <Text className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Popular Categories
              </Text>
              <View className="grid grid-cols-2 gap-3">
                {categories.map((category, index) => (
                  <Pressable
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm"
                    onPress={() => handleCategoryPress(category.name)}
                  >
                    <View className="items-center">
                      <Text className="text-2xl mb-2">{category.icon}</Text>
                      <Text className="text-gray-900 dark:text-white font-semibold text-center">
                        {category.name}
                      </Text>
                      <Text className="text-gray-500 dark:text-gray-400 text-sm">
                        {category.count} vendors
                      </Text>
                    </View>
                  </Pressable>
                ))}
              </View>
            </View>
          </>
        ) : (
          <>
            {/* Search Results */}
            <View className="mb-6">
              <Text className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Search Results
              </Text>
              {searchResults.length > 0 ? (
                <View className="space-y-3">
                  {searchResults.map((vendor) => (
                    <Pressable
                      key={vendor.id}
                      className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm"
                      onPress={() => handleVendorPress(vendor.id)}
                    >
                      <View className="flex-row items-center">
                        <View className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg items-center justify-center mr-4">
                          <Text className="text-2xl">{vendor.image}</Text>
                        </View>
                        <View className="flex-1">
                          <Text className="text-gray-900 dark:text-white font-semibold text-lg">
                            {vendor.name}
                          </Text>
                          <Text className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                            {vendor.category} • {vendor.distance}
                          </Text>
                          <View className="flex-row items-center">
                            <Ionicons name="star" size={16} color="#F59E0B" />
                            <Text className="text-gray-600 dark:text-gray-400 text-sm ml-1">
                              {vendor.rating}
                            </Text>
                            <View className="bg-green-100 dark:bg-green-900 rounded-full px-2 py-1 ml-2">
                              <Text className="text-green-700 dark:text-green-300 text-xs font-semibold">
                                {vendor.discount} OFF
                              </Text>
                            </View>
                          </View>
                        </View>
                        <Ionicons
                          name="chevron-forward"
                          size={20}
                          color="#6B7280"
                        />
                      </View>
                    </Pressable>
                  ))}
                </View>
              ) : (
                <View className="bg-white dark:bg-gray-800 rounded-xl p-8 items-center">
                  <Ionicons name="search" size={48} color="#6B7280" />
                  <Text className="text-gray-900 dark:text-white font-semibold text-lg mt-4 mb-2">
                    No results found
                  </Text>
                  <Text className="text-gray-600 dark:text-gray-400 text-center">
                    Try adjusting your search terms or filters to find what
                    you&apos;re looking for.
                  </Text>
                </View>
              )}
            </View>

            {/* Suggested Categories */}
            <View className="mb-6">
              <Text className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                You might also like
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className="flex-row space-x-3">
                  {categories.slice(0, 4).map((category, index) => (
                    <Pressable
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm min-w-[100px]"
                      onPress={() => handleCategoryPress(category.name)}
                    >
                      <View className="items-center">
                        <Text className="text-xl mb-2">{category.icon}</Text>
                        <Text className="text-gray-900 dark:text-white font-semibold text-center text-sm">
                          {category.name}
                        </Text>
                      </View>
                    </Pressable>
                  ))}
                </View>
              </ScrollView>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}
