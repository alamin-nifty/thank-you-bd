import { Ionicons } from "@expo/vector-icons";
import { Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SearchScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Search Header */}
      <View
        className="bg-white dark:bg-gray-800 px-4 pb-4 border-b border-gray-200 dark:border-gray-700"
        style={{ paddingTop: insets.top + 12 }}
      >
        <View className="flex-row items-center bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-3">
          <Ionicons name="search-outline" size={20} color="#6B7280" />
          <TextInput
            placeholder="Search vendors, categories, offers..."
            placeholderTextColor="#9CA3AF"
            className="flex-1 ml-3 text-gray-900 dark:text-white"
            autoFocus
          />
        </View>
      </View>

      {/* Search Content */}
      <View
        className="flex-1 px-4 pt-6"
        style={{ paddingBottom: 100 }} // Extra padding for tab bar
      >
        <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Search Results
        </Text>

        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 items-center justify-center flex-1">
          <Ionicons name="search-outline" size={48} color="#9CA3AF" />
          <Text className="text-gray-500 dark:text-gray-400 text-center mt-4 text-lg">
            Search for vendors, categories, or offers
          </Text>
          <Text className="text-gray-400 dark:text-gray-500 text-center mt-2 text-sm">
            Find the best deals and rewards
          </Text>
        </View>
      </View>
    </View>
  );
}
