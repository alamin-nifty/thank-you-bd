import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <View
        className="bg-white dark:bg-gray-800 px-4 pb-4 border-b border-gray-200 dark:border-gray-700"
        style={{ paddingTop: insets.top + 12 }}
      >
        <Text className="text-xl font-bold text-gray-900 dark:text-white text-center">
          Profile
        </Text>
      </View>

      {/* Profile Content */}
      <ScrollView
        className="flex-1 px-4 pt-6"
        contentContainerStyle={{
          paddingBottom: 100, // Extra padding for tab bar
          paddingTop: 8,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* User Info */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <View className="items-center mb-6">
            <View className="w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded-full items-center justify-center mb-4">
              <Ionicons name="person" size={40} color="#6B7280" />
            </View>
            <Text className="text-xl font-bold text-gray-900 dark:text-white">
              John Doe
            </Text>
            <Text className="text-gray-600 dark:text-gray-400">
              john.doe@example.com
            </Text>
            <View className="bg-yellow-100 dark:bg-yellow-900 rounded-full px-3 py-1 mt-2">
              <Text className="text-yellow-700 dark:text-yellow-300 text-sm font-semibold">
                Gold Member
              </Text>
            </View>
          </View>

          <View className="flex-row justify-around">
            <View className="items-center">
              <Text className="text-2xl font-bold text-gray-900 dark:text-white">
                2,450
              </Text>
              <Text className="text-gray-600 dark:text-gray-400 text-sm">
                Points
              </Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-gray-900 dark:text-white">
                $24.50
              </Text>
              <Text className="text-gray-600 dark:text-gray-400 text-sm">
                Balance
              </Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-gray-900 dark:text-white">
                15
              </Text>
              <Text className="text-gray-600 dark:text-gray-400 text-sm">
                Rewards
              </Text>
            </View>
          </View>
        </View>

        {/* Account Settings */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Account Settings
          </Text>

          <View className="space-y-2">
            <Pressable className="flex-row items-center justify-between py-3">
              <View className="flex-row items-center">
                <Ionicons name="person-outline" size={20} color="#6B7280" />
                <Text className="text-gray-900 dark:text-white ml-3">
                  Edit Profile
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable className="flex-row items-center justify-between py-3">
              <View className="flex-row items-center">
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color="#6B7280"
                />
                <Text className="text-gray-900 dark:text-white ml-3">
                  Notifications
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable className="flex-row items-center justify-between py-3">
              <View className="flex-row items-center">
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color="#6B7280"
                />
                <Text className="text-gray-900 dark:text-white ml-3">
                  Privacy & Security
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable className="flex-row items-center justify-between py-3">
              <View className="flex-row items-center">
                <Ionicons name="card-outline" size={20} color="#6B7280" />
                <Text className="text-gray-900 dark:text-white ml-3">
                  Payment Methods
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>
          </View>
        </View>

        {/* App Settings */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            App Settings
          </Text>

          <View className="space-y-2">
            <Pressable className="flex-row items-center justify-between py-3">
              <View className="flex-row items-center">
                <Ionicons name="moon-outline" size={20} color="#6B7280" />
                <Text className="text-gray-900 dark:text-white ml-3">
                  Dark Mode
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable className="flex-row items-center justify-between py-3">
              <View className="flex-row items-center">
                <Ionicons name="language-outline" size={20} color="#6B7280" />
                <Text className="text-gray-900 dark:text-white ml-3">
                  Language
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable className="flex-row items-center justify-between py-3">
              <View className="flex-row items-center">
                <Ionicons
                  name="help-circle-outline"
                  size={20}
                  color="#6B7280"
                />
                <Text className="text-gray-900 dark:text-white ml-3">
                  Help & Support
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable className="flex-row items-center justify-between py-3">
              <View className="flex-row items-center">
                <Ionicons
                  name="information-circle-outline"
                  size={20}
                  color="#6B7280"
                />
                <Text className="text-gray-900 dark:text-white ml-3">
                  About
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>
          </View>
        </View>

        {/* My Membership */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            My Membership
          </Text>
          {/* Card UI Inline */}
          <View className="rounded-3xl p-6 shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 mb-4">
            {/* Card Header */}
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-lg font-bold text-gray-900 dark:text-white">
                Thank You BD
              </Text>
              <Image
                source={require("../../assets/images/adaptive-icon.png")}
                style={{ width: 36, height: 36, borderRadius: 8 }}
                resizeMode="contain"
              />
            </View>
            {/* Member Name & Membership */}
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-xl font-bold text-gray-900 dark:text-white">
                John Doe
              </Text>
              <View className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-800">
                <Text className="text-yellow-700 dark:text-yellow-200 font-semibold text-xs">
                  Gold Membership
                </Text>
              </View>
            </View>
            {/* Card Number */}
            <Text className="text-2xl font-mono font-bold tracking-widest text-gray-900 dark:text-white mb-4">
              **** **** **** 1234
            </Text>
            {/* Expiry & QR */}
            <View className="flex-row items-center justify-between mt-2">
              <View>
                <Text className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  Expires
                </Text>
                <Text className="text-base font-semibold text-gray-900 dark:text-white">
                  12/25
                </Text>
              </View>
              <View className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-xl items-center justify-center overflow-hidden">
                <Image
                  source={{
                    uri: "https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=ThankYouBD-1234",
                  }}
                  style={{ width: 56, height: 56 }}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Logout */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Pressable className="flex-row items-center justify-center py-3">
            <Ionicons name="log-out-outline" size={20} color="#EF4444" />
            <Text className="text-red-500 font-semibold ml-3">Log Out</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
