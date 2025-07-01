import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  terms: string[];
  category: string;
  vendorName: string;
  vendorLogo: string;
  isRedeemable: boolean;
  redemptionCode?: string;
}

// Sample offer data
const sampleOffers: Record<string, Offer> = {
  "shwapno-15-off": {
    id: "shwapno-15-off",
    title: "15% Off on Groceries",
    description:
      "Get 15% discount on all grocery items at Shwapno stores. Perfect for your daily shopping needs.",
    discount: "15% OFF",
    validUntil: "December 31, 2024",
    terms: [
      "Valid on all grocery items",
      "Cannot be combined with other offers",
      "Minimum purchase of ৳500",
      "Valid at all Shwapno locations",
      "Show digital card at checkout",
    ],
    category: "Grocery",
    vendorName: "Shwapno",
    vendorLogo: "🛒",
    isRedeemable: true,
    redemptionCode: "SHWAPNO15",
  },
  "samsung-12-off": {
    id: "samsung-12-off",
    title: "12% Off on Smartphones",
    description:
      "Save 12% on Samsung smartphones and accessories. Limited time offer on latest models.",
    discount: "12% OFF",
    validUntil: "January 15, 2025",
    terms: [
      "Valid on Samsung smartphones only",
      "Cannot be combined with other offers",
      "Valid at official Samsung stores",
      "Show digital card at purchase",
      "Limited to one redemption per customer",
    ],
    category: "Electronics",
    vendorName: "Samsung",
    vendorLogo: "📱",
    isRedeemable: true,
    redemptionCode: "SAMSUNG12",
  },
};

export default function OfferDetailScreen() {
  const insets = useSafeAreaInsets();
  const { offerId } = useLocalSearchParams<{ offerId: string }>();
  const { t } = useTranslation();
  const [isRedeemed, setIsRedeemed] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const offer = sampleOffers[offerId || ""];

  if (!offer) {
    return (
      <View className="flex-1 bg-gray-50 dark:bg-gray-900 items-center justify-center">
        <Text className="text-gray-600 dark:text-gray-400">
          Offer not found
        </Text>
      </View>
    );
  }

  const handleRedeem = () => {
    Alert.alert(
      "Redeem Offer",
      `Are you sure you want to redeem this ${offer.discount} offer?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Redeem",
          onPress: () => {
            setIsRedeemed(true);
            setShowCode(true);
            Alert.alert(
              "Offer Redeemed!",
              `Your ${offer.discount} offer has been redeemed successfully. Show the redemption code to the cashier.`,
              [{ text: "OK" }]
            );
          },
        },
      ]
    );
  };

  const handleShowCard = () => {
    router.push("/card-generation");
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <View
          className="bg-white dark:bg-gray-800 px-4 pb-4 border-b border-gray-200 dark:border-gray-700"
          style={{ paddingTop: insets.top + 12 }}
        >
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Pressable onPress={() => router.back()} className="mr-3 p-2">
                <Ionicons name="chevron-back" size={24} color="#007BFF" />
              </Pressable>
              <View className="flex-row items-center">
                <View className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl items-center justify-center mr-3">
                  <Text className="text-xl">{offer.vendorLogo}</Text>
                </View>
                <View>
                  <Text className="text-lg font-bold text-gray-900 dark:text-white">
                    {offer.vendorName}
                  </Text>
                  <Text className="text-gray-600 dark:text-gray-400 text-sm">
                    {offer.category}
                  </Text>
                </View>
              </View>
            </View>

            <View className="flex-row items-center space-x-2">
              <Pressable className="p-2">
                <Ionicons name="heart-outline" size={24} color="#6B7280" />
              </Pressable>
              <Pressable className="p-2">
                <Ionicons name="share-outline" size={24} color="#6B7280" />
              </Pressable>
            </View>
          </View>
        </View>

        <ScrollView
          className="flex-1 px-4 pt-4"
          contentContainerStyle={{
            paddingBottom: 100,
            paddingTop: 8,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Offer Banner */}
          <LinearGradient
            colors={["#10B981", "#059669"]}
            style={{
              borderRadius: 16,
              padding: 24,
              marginBottom: 24,
            }}
          >
            <View className="flex-row items-center justify-between mb-4">
              <View>
                <Text className="text-white text-3xl font-bold mb-2">
                  {offer.discount}
                </Text>
                <Text className="text-white/90 text-lg font-semibold">
                  {offer.title}
                </Text>
              </View>
              <View className="bg-white/20 rounded-full p-4">
                <Ionicons name="gift-outline" size={32} color="white" />
              </View>
            </View>

            <Text className="text-white/90 text-base leading-6">
              {offer.description}
            </Text>

            <View className="flex-row items-center mt-4">
              <Ionicons name="time-outline" size={16} color="white" />
              <Text className="text-white/80 text-sm ml-2">
                Valid until {offer.validUntil}
              </Text>
            </View>
          </LinearGradient>

          {/* Redemption Code */}
          {isRedeemed && (
            <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
              <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Redemption Code
              </Text>

              <Pressable
                onPress={() => setShowCode(!showCode)}
                className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 mb-4"
              >
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-mono font-bold text-gray-900 dark:text-white">
                    {showCode ? offer.redemptionCode : "••••••••••"}
                  </Text>
                  <Ionicons
                    name={showCode ? "eye-off" : "eye"}
                    size={24}
                    color="#6B7280"
                  />
                </View>
              </Pressable>

              <Text className="text-gray-600 dark:text-gray-400 text-sm">
                Show this code to the cashier when making your purchase to
                redeem your discount.
              </Text>
            </View>
          )}

          {/* Terms & Conditions */}
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
            <View className="flex-row items-center mb-6">
              <View className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-xl items-center justify-center mr-3">
                <Ionicons
                  name="document-text-outline"
                  size={20}
                  color="#F97316"
                />
              </View>
              <Text className="text-xl font-bold text-gray-900 dark:text-white">
                Terms & Conditions
              </Text>
            </View>

            <View className="space-y-4">
              {offer.terms.map((term, index) => (
                <View
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 border border-gray-100 dark:border-gray-600"
                >
                  <View className="flex-row items-start">
                    <View className="w-6 h-6 bg-orange-500 rounded-full items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Text className="text-white text-xs font-bold">
                        {index + 1}
                      </Text>
                    </View>
                    <Text className="text-gray-700 dark:text-gray-300 text-sm leading-5 flex-1">
                      {term}
                    </Text>
                  </View>
                </View>
              ))}
            </View>

            <View className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
              <View className="flex-row items-start">
                <Ionicons
                  name="information-circle-outline"
                  size={20}
                  color="#3B82F6"
                  className="mr-2 mt-0.5"
                />
                <Text className="text-blue-700 dark:text-blue-300 text-sm leading-5 flex-1">
                  Please read all terms carefully before redeeming. Terms are
                  subject to change without notice.
                </Text>
              </View>
            </View>
          </View>

          {/* How to Use */}
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
            <View className="flex-row items-center mb-6">
              <View className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-xl items-center justify-center mr-3">
                <Ionicons
                  name="help-circle-outline"
                  size={20}
                  color="#8B5CF6"
                />
              </View>
              <Text className="text-xl font-bold text-gray-900 dark:text-white">
                How to Use
              </Text>
            </View>

            <View className="space-y-4">
              <View className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 border border-gray-100 dark:border-gray-600">
                <View className="flex-row items-center">
                  <View className="w-8 h-8 bg-purple-500 rounded-full items-center justify-center mr-4 flex-shrink-0">
                    <Text className="text-white font-bold text-sm">1</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 dark:text-white font-semibold text-base mb-1">
                      Redeem the Offer
                    </Text>
                    <Text className="text-gray-600 dark:text-gray-400 text-sm leading-5">
                      Tap &quot;Redeem Offer&quot; to get your unique code
                    </Text>
                  </View>
                </View>
              </View>

              <View className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 border border-gray-100 dark:border-gray-600">
                <View className="flex-row items-center">
                  <View className="w-8 h-8 bg-purple-500 rounded-full items-center justify-center mr-4 flex-shrink-0">
                    <Text className="text-white font-bold text-sm">2</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 dark:text-white font-semibold text-base mb-1">
                      Visit {offer.vendorName}
                    </Text>
                    <Text className="text-gray-600 dark:text-gray-400 text-sm leading-5">
                      Go to any {offer.vendorName} store location
                    </Text>
                  </View>
                </View>
              </View>

              <View className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 border border-gray-100 dark:border-gray-600">
                <View className="flex-row items-center">
                  <View className="w-8 h-8 bg-purple-500 rounded-full items-center justify-center mr-4 flex-shrink-0">
                    <Text className="text-white font-bold text-sm">3</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 dark:text-white font-semibold text-base mb-1">
                      Show Your Code
                    </Text>
                    <Text className="text-gray-600 dark:text-gray-400 text-sm leading-5">
                      Present the redemption code to the cashier
                    </Text>
                  </View>
                </View>
              </View>

              <View className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 border border-gray-100 dark:border-gray-600">
                <View className="flex-row items-center">
                  <View className="w-8 h-8 bg-purple-500 rounded-full items-center justify-center mr-4 flex-shrink-0">
                    <Text className="text-white font-bold text-sm">4</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 dark:text-white font-semibold text-base mb-1">
                      Enjoy Your Discount
                    </Text>
                    <Text className="text-gray-600 dark:text-gray-400 text-sm leading-5">
                      Get your {offer.discount} discount applied!
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800">
              <View className="flex-row items-start">
                <Ionicons
                  name="checkmark-circle-outline"
                  size={20}
                  color="#10B981"
                  className="mr-2 mt-0.5"
                />
                <Text className="text-green-700 dark:text-green-300 text-sm leading-5 flex-1">
                  Your discount will be applied automatically at checkout. No
                  additional steps required!
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Actions */}
        <View className="bg-white dark:bg-gray-800 px-4 py-4 border-t border-gray-200 dark:border-gray-700 mb-4  ">
          <View className="flex-row space-x-3 gap-4">
            {!isRedeemed ? (
              <Pressable
                onPress={handleRedeem}
                className="flex-1 bg-green-600 rounded-xl py-4 items-center"
              >
                <Text className="text-white font-semibold text-lg">
                  Redeem Offer
                </Text>
              </Pressable>
            ) : (
              <Pressable
                onPress={handleShowCard}
                className="flex-1 bg-blue-600 rounded-xl py-4 items-center"
              >
                <Text className="text-white font-semibold text-lg">
                  View My Card
                </Text>
              </Pressable>
            )}

            <Pressable
              onPress={() => router.push(`/vendor-detail?vendorId=1`)}
              className="bg-gray-100 dark:bg-gray-700 rounded-xl py-4 px-6 items-center"
            >
              <Ionicons name="location-outline" size={24} color="#6B7280" />
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}
