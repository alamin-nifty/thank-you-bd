import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CardScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <View
        className="bg-white dark:bg-gray-800 px-4 pb-4 border-b border-gray-200 dark:border-gray-700"
        style={{ paddingTop: insets.top + 12 }}
      >
        <Text className="text-xl font-bold text-gray-900 dark:text-white text-center">
          My Card
        </Text>
      </View>

      {/* Card Content */}
      <ScrollView
        className="flex-1 px-4 pt-6"
        contentContainerStyle={{
          paddingBottom: 100, // Extra padding for tab bar
          paddingTop: 8,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Digital Card */}
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

              <View className="bg-white/20 rounded-lg px-3 py-1">
                <Text className="text-white text-xs font-semibold">
                  Thank You BD
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Quick Actions */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Quick Actions
          </Text>

          <View className="flex-row flex-wrap justify-between">
            <Pressable className="w-[48%] bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3 items-center">
              <Ionicons name="qr-code-outline" size={32} color="#667eea" />
              <Text className="text-gray-900 dark:text-white font-semibold mt-2">
                Show QR Code
              </Text>
            </Pressable>

            <Pressable className="w-[48%] bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3 items-center">
              <Ionicons name="card-outline" size={32} color="#667eea" />
              <Text className="text-gray-900 dark:text-white font-semibold mt-2">
                Card Details
              </Text>
            </Pressable>

            <Pressable className="w-[48%] bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3 items-center">
              <Ionicons name="share-outline" size={32} color="#667eea" />
              <Text className="text-gray-900 dark:text-white font-semibold mt-2">
                Share Card
              </Text>
            </Pressable>

            <Pressable className="w-[48%] bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3 items-center">
              <Ionicons name="settings-outline" size={32} color="#667eea" />
              <Text className="text-gray-900 dark:text-white font-semibold mt-2">
                Settings
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Card Information */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Card Information
          </Text>

          <View className="space-y-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600 dark:text-gray-400">
                Card Type
              </Text>
              <Text className="text-gray-900 dark:text-white font-semibold">
                Gold Membership
              </Text>
            </View>

            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600 dark:text-gray-400">
                Member Since
              </Text>
              <Text className="text-gray-900 dark:text-white font-semibold">
                January 2024
              </Text>
            </View>

            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600 dark:text-gray-400">Status</Text>
              <View className="bg-green-100 dark:bg-green-900 rounded-full px-3 py-1">
                <Text className="text-green-700 dark:text-green-300 text-sm font-semibold">
                  Active
                </Text>
              </View>
            </View>

            <View className="flex-row justify-between items-center">
              <Text className="text-gray-600 dark:text-gray-400">
                Total Points Earned
              </Text>
              <Text className="text-gray-900 dark:text-white font-semibold">
                12,450
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
