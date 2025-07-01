import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Switch, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const [notifications, setNotifications] = useState(true);
  const [locationServices, setLocationServices] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [biometricAuth, setBiometricAuth] = useState(false);

  const handleEditProfile = () => {
    // Navigate to edit profile screen
    console.log("Edit profile");
  };

  const handleChangePassword = () => {
    // Navigate to change password screen
    console.log("Change password");
  };

  const handleLanguage = () => {
    // Navigate to language selection screen
    console.log("Language selection");
  };

  const handlePrivacyPolicy = () => {
    // Navigate to privacy policy screen
    console.log("Privacy policy");
  };

  const handleTermsOfService = () => {
    // Navigate to terms of service screen
    console.log("Terms of service");
  };

  const handleDataUsage = () => {
    // Navigate to data usage screen
    console.log("Data usage");
  };

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
              Settings
            </Text>
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
        {/* Account Settings */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Account Settings
          </Text>
          <View className="space-y-3">
            <Pressable
              className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
              onPress={handleEditProfile}
            >
              <View className="flex-row items-center">
                <Ionicons name="person-outline" size={24} color="#667eea" />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Personal Information
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable
              className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
              onPress={handleChangePassword}
            >
              <View className="flex-row items-center">
                <Ionicons
                  name="lock-closed-outline"
                  size={24}
                  color="#667eea"
                />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Change Password
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <View className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <View className="flex-row items-center">
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="#667eea"
                />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Push Notifications
                </Text>
              </View>
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ false: "#D1D5DB", true: "#667eea" }}
                thumbColor={notifications ? "#ffffff" : "#ffffff"}
              />
            </View>

            <View className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <View className="flex-row items-center">
                <Ionicons
                  name="finger-print-outline"
                  size={24}
                  color="#667eea"
                />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Biometric Authentication
                </Text>
              </View>
              <Switch
                value={biometricAuth}
                onValueChange={setBiometricAuth}
                trackColor={{ false: "#D1D5DB", true: "#667eea" }}
                thumbColor={biometricAuth ? "#ffffff" : "#ffffff"}
              />
            </View>
          </View>
        </View>

        {/* App Settings */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            App Settings
          </Text>
          <View className="space-y-3">
            <Pressable
              className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
              onPress={handleLanguage}
            >
              <View className="flex-row items-center">
                <Ionicons name="language-outline" size={24} color="#667eea" />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Language
                </Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-gray-600 dark:text-gray-400 mr-2">
                  English
                </Text>
                <Ionicons name="chevron-forward" size={20} color="#6B7280" />
              </View>
            </Pressable>

            <View className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <View className="flex-row items-center">
                <Ionicons name="moon-outline" size={24} color="#667eea" />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Dark Mode
                </Text>
              </View>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: "#D1D5DB", true: "#667eea" }}
                thumbColor={darkMode ? "#ffffff" : "#ffffff"}
              />
            </View>

            <View className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <View className="flex-row items-center">
                <Ionicons name="location-outline" size={24} color="#667eea" />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Location Services
                </Text>
              </View>
              <Switch
                value={locationServices}
                onValueChange={setLocationServices}
                trackColor={{ false: "#D1D5DB", true: "#667eea" }}
                thumbColor={locationServices ? "#ffffff" : "#ffffff"}
              />
            </View>

            <Pressable className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <View className="flex-row items-center">
                <Ionicons
                  name="cloud-download-outline"
                  size={24}
                  color="#667eea"
                />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Auto-Update
                </Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-gray-600 dark:text-gray-400 mr-2">
                  Wi-Fi only
                </Text>
                <Ionicons name="chevron-forward" size={20} color="#6B7280" />
              </View>
            </Pressable>
          </View>
        </View>

        {/* Privacy & Security */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Privacy & Security
          </Text>
          <View className="space-y-3">
            <Pressable
              className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
              onPress={handleDataUsage}
            >
              <View className="flex-row items-center">
                <Ionicons name="analytics-outline" size={24} color="#667eea" />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Data Usage
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <View className="flex-row items-center">
                <Ionicons
                  name="shield-checkmark-outline"
                  size={24}
                  color="#667eea"
                />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Security Settings
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <View className="flex-row items-center">
                <Ionicons name="eye-outline" size={24} color="#667eea" />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Privacy Controls
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>
          </View>
        </View>

        {/* Legal */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Legal
          </Text>
          <View className="space-y-3">
            <Pressable
              className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
              onPress={handlePrivacyPolicy}
            >
              <View className="flex-row items-center">
                <Ionicons
                  name="document-text-outline"
                  size={24}
                  color="#667eea"
                />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Privacy Policy
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable
              className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
              onPress={handleTermsOfService}
            >
              <View className="flex-row items-center">
                <Ionicons name="document-outline" size={24} color="#667eea" />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Terms of Service
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <View className="flex-row items-center">
                <Ionicons
                  name="information-circle-outline"
                  size={24}
                  color="#667eea"
                />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Cookie Policy
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>
          </View>
        </View>

        {/* Support */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Support
          </Text>
          <View className="space-y-3">
            <Pressable className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <View className="flex-row items-center">
                <Ionicons
                  name="help-circle-outline"
                  size={24}
                  color="#667eea"
                />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Help Center
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <View className="flex-row items-center">
                <Ionicons name="chatbubble-outline" size={24} color="#667eea" />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Contact Support
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>

            <Pressable className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <View className="flex-row items-center">
                <Ionicons name="star-outline" size={24} color="#667eea" />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3">
                  Rate App
                </Text>
              </View>
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
            <View className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <Text className="text-gray-700 dark:text-gray-300">Version</Text>
              <Text className="text-gray-900 dark:text-white font-semibold">
                1.0.0
              </Text>
            </View>
            <View className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <Text className="text-gray-700 dark:text-gray-300">Build</Text>
              <Text className="text-gray-900 dark:text-white font-semibold">
                2024.12.01
              </Text>
            </View>
            <View className="flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <Text className="text-gray-700 dark:text-gray-300">Platform</Text>
              <Text className="text-gray-900 dark:text-white font-semibold">
                React Native
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
