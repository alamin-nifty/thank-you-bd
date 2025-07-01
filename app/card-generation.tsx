import { Ionicons } from "@expo/vector-icons";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const packageDetails = {
  basic: {
    name: "Basic Package",
    color: "bg-white dark:bg-gray-900",
    pill: "bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200",
    benefits: "5% average discount",
  },
  premium: {
    name: "Premium Package",
    color: "bg-white dark:bg-gray-900",
    pill: "bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200",
    benefits: "15% average discount",
  },
};

export default function CardGenerationScreen() {
  const insets = useSafeAreaInsets();
  const { packageId } = useLocalSearchParams<{ packageId: string }>();
  const [isFavorite, setIsFavorite] = useState(false);
  const colorScheme = useColorScheme();

  const packageInfo =
    packageDetails[packageId as keyof typeof packageDetails] ||
    packageDetails.basic;

  // Generate mock card data
  const cardData = {
    cardNumber: "**** **** **** 1234",
    userName: "Ahmed Rahman",
    membershipType: packageInfo.name,
    expirationDate: "12/25",
    qrCode:
      "https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=ThankYouBD-1234", // Placeholder QR code image
  };

  const handleShare = () => {
    // Implement share functionality
    console.log("Sharing card...");
  };

  const handleDownload = () => {
    // Implement download functionality
    console.log("Downloading card...");
  };

  const handleRenew = () => {
    // Navigate to renewal screen
    router.push("/package-selection");
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 bg-gray-50 dark:bg-gray-900">
        {/* Navigation Header */}
        <View
          className="bg-white dark:bg-gray-800 px-4 pb-4 border-b border-gray-200 dark:border-gray-700"
          style={{ paddingTop: insets.top + 12 }}
        >
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Pressable onPress={() => router.back()} className="mr-3 p-2">
                <Ionicons name="chevron-back" size={24} color="#007BFF" />
              </Pressable>
              <Text className="text-xl font-bold text-gray-900 dark:text-white">
                Your Digital Card
              </Text>
            </View>
            <Pressable
              className="p-2"
              onPress={() => setIsFavorite(!isFavorite)}
            >
              <Ionicons
                name={isFavorite ? "heart" : "heart-outline"}
                size={24}
                color={isFavorite ? "#EF4444" : "#6B7280"}
              />
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
          {/* Digital Card */}
          <View className="mb-6">
            <View
              className={`rounded-3xl p-6 shadow-lg ${packageInfo.color} border border-gray-200 dark:border-gray-700`}
            >
              {/* Card Header */}
              <View className="flex-row items-center justify-between mb-4">
                <Text className="text-lg font-bold text-gray-900 dark:text-white">
                  Thank You BD
                </Text>
                <Image
                  source={require("../assets/images/adaptive-icon.png")}
                  style={{ width: 36, height: 36, borderRadius: 8 }}
                  resizeMode="contain"
                />
              </View>

              {/* Card Title */}
              <Text className="text-base font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Digital Loyalty Card
              </Text>

              {/* Card Number */}
              <Text className="text-2xl font-mono font-bold tracking-widest text-gray-900 dark:text-white mb-4">
                {cardData.cardNumber}
              </Text>

              {/* Cardholder & Expiry */}
              <View className="flex-row justify-between items-center mb-4">
                <View>
                  <Text className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Cardholder
                  </Text>
                  <Text className="text-base font-semibold text-gray-900 dark:text-white">
                    {cardData.userName}
                  </Text>
                </View>
                <View className="items-end">
                  <Text className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Expires
                  </Text>
                  <Text className="text-base font-semibold text-gray-900 dark:text-white">
                    {cardData.expirationDate}
                  </Text>
                </View>
              </View>

              {/* Membership & QR */}
              <View className="flex-row items-center justify-between mt-2">
                <View
                  className={`px-3 py-1 rounded-full ${packageInfo.pill} font-semibold text-xs`}
                >
                  <Text className="font-semibold text-xs">
                    {cardData.membershipType}
                  </Text>
                </View>
                <View className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-xl items-center justify-center overflow-hidden">
                  <Image
                    source={{ uri: cardData.qrCode }}
                    style={{ width: 56, height: 56 }}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>
          </View>

          {/* Card Actions */}
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
            <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Card Actions
            </Text>
            <View className="space-y-3">
              <Pressable
                className="flex-row items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
                onPress={handleShare}
              >
                <Ionicons name="share-outline" size={24} color="#667eea" />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3 flex-1">
                  Share Card
                </Text>
                <Ionicons name="chevron-forward" size={20} color="#6B7280" />
              </Pressable>

              <Pressable
                className="flex-row items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
                onPress={handleDownload}
              >
                <Ionicons name="download-outline" size={24} color="#667eea" />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3 flex-1">
                  Download Card
                </Text>
                <Ionicons name="chevron-forward" size={20} color="#6B7280" />
              </Pressable>

              <Pressable
                className="flex-row items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
                onPress={handleRenew}
              >
                <Ionicons name="refresh-outline" size={24} color="#667eea" />
                <Text className="text-gray-900 dark:text-white font-semibold ml-3 flex-1">
                  Renew Membership
                </Text>
                <Ionicons name="chevron-forward" size={20} color="#6B7280" />
              </Pressable>
            </View>
          </View>

          {/* Membership Benefits */}
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
            <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Your Benefits
            </Text>
            <View className="space-y-3">
              <View className="flex-row items-center">
                <Ionicons name="checkmark-circle" size={20} color="#10B981" />
                <Text className="text-gray-700 dark:text-gray-300 ml-3 flex-1">
                  {packageInfo.benefits} on all purchases
                </Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="checkmark-circle" size={20} color="#10B981" />
                <Text className="text-gray-700 dark:text-gray-300 ml-3 flex-1">
                  Access to exclusive vendor offers
                </Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="checkmark-circle" size={20} color="#10B981" />
                <Text className="text-gray-700 dark:text-gray-300 ml-3 flex-1">
                  Digital loyalty card for easy access
                </Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="checkmark-circle" size={20} color="#10B981" />
                <Text className="text-gray-700 dark:text-gray-300 ml-3 flex-1">
                  Points accumulation on every purchase
                </Text>
              </View>
            </View>
          </View>

          {/* Redeemed Offers */}
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
            <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Redeemed Offers
            </Text>

            {/* Shwapno Offer */}
            <View className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 mb-3">
              <View className="flex-row items-center justify-between mb-2">
                <View className="flex-row items-center">
                  <View className="w-10 h-10 bg-green-100 dark:bg-green-800 rounded-full items-center justify-center mr-3">
                    <Text className="text-xl">🛒</Text>
                  </View>
                  <View>
                    <Text className="text-gray-900 dark:text-white font-semibold">
                      Shwapno - 15% Off
                    </Text>
                    <Text className="text-gray-600 dark:text-gray-400 text-sm">
                      Groceries
                    </Text>
                  </View>
                </View>
                <View className="bg-green-100 dark:bg-green-800 rounded-full px-3 py-1">
                  <Text className="text-green-700 dark:text-green-300 text-xs font-medium">
                    ACTIVE
                  </Text>
                </View>
              </View>

              <View className="bg-white dark:bg-gray-700 rounded-lg p-3 mb-2">
                <Text className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                  Redemption Code
                </Text>
                <Text className="text-gray-900 dark:text-white font-mono font-bold">
                  SHWAPNO15
                </Text>
              </View>

              <Text className="text-gray-600 dark:text-gray-400 text-xs">
                Valid until Dec 31, 2024 • Show code to cashier
              </Text>
            </View>

            {/* Samsung Offer */}
            <View className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
              <View className="flex-row items-center justify-between mb-2">
                <View className="flex-row items-center">
                  <View className="w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-full items-center justify-center mr-3">
                    <Text className="text-xl">📱</Text>
                  </View>
                  <View>
                    <Text className="text-gray-900 dark:text-white font-semibold">
                      Samsung - 12% Off
                    </Text>
                    <Text className="text-gray-600 dark:text-gray-400 text-sm">
                      Smartphones
                    </Text>
                  </View>
                </View>
                <View className="bg-blue-100 dark:bg-blue-800 rounded-full px-3 py-1">
                  <Text className="text-blue-700 dark:text-blue-300 text-xs font-medium">
                    ACTIVE
                  </Text>
                </View>
              </View>

              <View className="bg-white dark:bg-gray-700 rounded-lg p-3 mb-2">
                <Text className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                  Redemption Code
                </Text>
                <Text className="text-gray-900 dark:text-white font-mono font-bold">
                  SAMSUNG12
                </Text>
              </View>

              <Text className="text-gray-600 dark:text-gray-400 text-xs">
                Valid until Jan 15, 2025 • Show code to cashier
              </Text>
            </View>
          </View>

          {/* How to Use */}
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
            <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              How to Use Your Card
            </Text>
            <View className="space-y-4">
              <View className="flex-row">
                <View className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full items-center justify-center mr-3">
                  <Text className="text-primary-600 dark:text-primary-400 font-bold text-sm">
                    1
                  </Text>
                </View>
                <View className="flex-1">
                  <Text className="text-gray-900 dark:text-white font-semibold mb-1">
                    Show Your Card
                  </Text>
                  <Text className="text-gray-600 dark:text-gray-400 text-sm">
                    Present your digital card to the vendor when making a
                    purchase
                  </Text>
                </View>
              </View>
              <View className="flex-row">
                <View className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full items-center justify-center mr-3">
                  <Text className="text-primary-600 dark:text-primary-400 font-bold text-sm">
                    2
                  </Text>
                </View>
                <View className="flex-1">
                  <Text className="text-gray-900 dark:text-white font-semibold mb-1">
                    Get Your Discount
                  </Text>
                  <Text className="text-gray-600 dark:text-gray-400 text-sm">
                    The vendor will apply your discount automatically
                  </Text>
                </View>
              </View>
              <View className="flex-row">
                <View className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full items-center justify-center mr-3">
                  <Text className="text-primary-600 dark:text-primary-400 font-bold text-sm">
                    3
                  </Text>
                </View>
                <View className="flex-1">
                  <Text className="text-gray-900 dark:text-white font-semibold mb-1">
                    Save Money
                  </Text>
                  <Text className="text-gray-600 dark:text-gray-400 text-sm">
                    Enjoy instant savings on your purchases
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Support */}
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
            <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Need Help?
            </Text>
            <Pressable className="flex-row items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <Ionicons name="help-circle-outline" size={24} color="#667eea" />
              <Text className="text-gray-900 dark:text-white font-semibold ml-3 flex-1">
                Contact Support
              </Text>
              <Ionicons name="chevron-forward" size={20} color="#6B7280" />
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
