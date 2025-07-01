import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Mock user data
const userData = {
  name: "Ahmed Rahman",
  email: "ahmed.rahman@email.com",
  phone: "+880 1712-345678",
  avatar: "👤",
  membership: {
    package: "Premium Package",
    expiration: "Dec 31, 2024",
    status: "Active",
  },
  stats: {
    totalPoints: 1250,
    totalSavings: "৳2,450",
    totalPurchases: 23,
  },
};

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleEditProfile = () => {
    // Navigate to edit profile screen
    console.log("Edit profile");
  };

  const handleViewCard = () => {
    router.push("/card-generation");
  };

  const handleViewPoints = () => {
    router.push("/points-balance");
  };

  const handleSettings = () => {
    // Navigate to settings screen
    console.log("Settings");
  };

  const handleHelp = () => {
    // Navigate to help screen
    console.log("Help");
  };

  const handleLogout = () => {
    // Handle logout
    console.log("Logout");
  };

  const handleDeleteAccount = () => {
    // Handle account deletion
    console.log("Delete account");
  };

  return (
    <View className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <View
        className="bg-white dark:bg-gray-800 px-4 pb-4 border-b border-gray-200 dark:border-gray-700"
        style={{ paddingTop: insets.top + 12 }}
      >
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-bold text-gray-900 dark:text-white">
            Profile
          </Text>
          <Pressable className="p-2" onPress={handleEditProfile}>
            <Ionicons name="create-outline" size={24} color="#6B7280" />
          </Pressable>
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
        {/* User Info */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <View className="items-center mb-6">
            <View className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full items-center justify-center mb-4">
              <Text className="text-4xl">{userData.avatar}</Text>
            </View>
            <Text className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {userData.name}
            </Text>
            <Text className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              {userData.email}
            </Text>
            <Text className="text-gray-600 dark:text-gray-400 text-sm">
              {userData.phone}
            </Text>
          </View>

          {/* Stats */}
          <View className="flex-row justify-between">
            <View className="items-center flex-1">
              <Text className="text-2xl font-bold text-gray-900 dark:text-white">
                {userData.stats.totalPoints}
              </Text>
              <Text className="text-gray-600 dark:text-gray-400 text-sm">
                Points
              </Text>
            </View>
            <View className="items-center flex-1">
              <Text className="text-2xl font-bold text-gray-900 dark:text-white">
                {userData.stats.totalSavings}
              </Text>
              <Text className="text-gray-600 dark:text-gray-400 text-sm">
                Saved
              </Text>
            </View>
            <View className="items-center flex-1">
              <Text className="text-2xl font-bold text-gray-900 dark:text-white">
                {userData.stats.totalPurchases}
              </Text>
              <Text className="text-gray-600 dark:text-gray-400 text-sm">
                Purchases
              </Text>
            </View>
          </View>
        </View>

        {/* Membership Status */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Membership Status
          </Text>
          <View className="space-y-4">
            <View className="flex-row items-center justify-between">
              <Text className="text-gray-700 dark:text-gray-300">Package</Text>
              <Text className="text-gray-900 dark:text-white font-semibold">
                {userData.membership.package}
              </Text>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-gray-700 dark:text-gray-300">Expires</Text>
              <Text className="text-gray-900 dark:text-white font-semibold">
                {userData.membership.expiration}
              </Text>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-gray-700 dark:text-gray-300">Status</Text>
              <View className="bg-green-100 dark:bg-green-900 rounded-full px-3 py-1">
                <Text className="text-green-700 dark:text-green-300 text-sm font-semibold">
                  {userData.membership.status}
                </Text>
              </View>
            </View>
          </View>
          <Pressable className="mt-4 bg-primary-600 dark:bg-primary-500 rounded-xl py-3 items-center">
            <Text className="text-white font-semibold">Renew Membership</Text>
          </Pressable>
        </View>

        {/* Quick Actions */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Quick Actions
          </Text>
          <View className="space-y-3">
            <Pressable
              className="flex-row items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
              onPress={handleViewCard}
            >
              <Ionicons name="card-outline" size={24} color="#667eea" />
              <Text className="text-gray-900 dark:text-white font-semibold ml-3 flex-1">
                View Digital Card
              </Text>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable
              className="flex-row items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
              onPress={handleViewPoints}
            >
              <Ionicons name="star-outline" size={24} color="#667eea" />
              <Text className="text-gray-900 dark:text-white font-semibold ml-3 flex-1">
                Points & Balance
              </Text>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable
              className="flex-row items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
              onPress={handleSettings}
            >
              <Ionicons name="settings-outline" size={24} color="#667eea" />
              <Text className="text-gray-900 dark:text-white font-semibold ml-3 flex-1">
                Settings
              </Text>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable
              className="flex-row items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
              onPress={handleHelp}
            >
              <Ionicons name="help-circle-outline" size={24} color="#667eea" />
              <Text className="text-gray-900 dark:text-white font-semibold ml-3 flex-1">
                Help & Support
              </Text>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>
          </View>
        </View>

        {/* Account Actions */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Account Actions
          </Text>
          <View className="space-y-3">
            <Pressable
              className="flex-row items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
              onPress={handleLogout}
            >
              <Ionicons name="log-out-outline" size={24} color="#EF4444" />
              <Text className="text-red-600 dark:text-red-400 font-semibold ml-3 flex-1">
                Logout
              </Text>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable
              className="flex-row items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
              onPress={handleDeleteAccount}
            >
              <Ionicons name="trash-outline" size={24} color="#EF4444" />
              <Text className="text-red-600 dark:text-red-400 font-semibold ml-3 flex-1">
                Delete Account
              </Text>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>
          </View>
        </View>

        {/* App Info */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            App Information
          </Text>
          <View className="space-y-3">
            <View className="flex-row items-center justify-between">
              <Text className="text-gray-700 dark:text-gray-300">Version</Text>
              <Text className="text-gray-900 dark:text-white">1.0.0</Text>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-gray-700 dark:text-gray-300">Build</Text>
              <Text className="text-gray-900 dark:text-white">2024.12.01</Text>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-gray-700 dark:text-gray-300">Platform</Text>
              <Text className="text-gray-900 dark:text-white">
                React Native
              </Text>
            </View>
          </View>
        </View>

        {/* Legal */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Legal
          </Text>
          <View className="space-y-3">
            <Pressable className="flex-row items-center justify-between py-2">
              <Text className="text-gray-700 dark:text-gray-300">
                Privacy Policy
              </Text>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>
            <Pressable className="flex-row items-center justify-between py-2">
              <Text className="text-gray-700 dark:text-gray-300">
                Terms of Service
              </Text>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>
            <Pressable className="flex-row items-center justify-between py-2">
              <Text className="text-gray-700 dark:text-gray-300">
                Cookie Policy
              </Text>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
