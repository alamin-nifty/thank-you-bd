import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const packages = [
  {
    id: "basic",
    name: "Basic Package",
    price: "৳299",
    originalPrice: "৳499",
    period: "per month",
    features: [
      "Access to 100+ vendors",
      "5% average discount",
      "Basic customer support",
      "Email notifications",
    ],
    popular: false,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "premium",
    name: "Premium Package",
    price: "৳599",
    originalPrice: "৳999",
    period: "per month",
    features: [
      "Access to 500+ vendors",
      "15% average discount",
      "Priority customer support",
      "Push notifications",
      "Exclusive deals",
      "Free delivery on orders",
    ],
    popular: true,
    gradient: "from-purple-500 to-pink-600",
  },
];

export default function PackageSelectionScreen() {
  const insets = useSafeAreaInsets();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackage(packageId);
    // Navigate to card generation screen
    router.push({
      pathname: "/card-generation",
      params: { packageId },
    });
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
              Choose Your Package
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
        {/* Header Info */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Unlock Amazing Deals
          </Text>
          <Text className="text-gray-600 dark:text-gray-400 text-base">
            Choose the perfect package to start saving on your favorite
            Bangladeshi brands
          </Text>
        </View>

        {/* Package Cards */}
        <View className="space-y-6 mb-6">
          {packages.map((pkg) => (
            <View
              key={pkg.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border-2 ${
                selectedPackage === pkg.id
                  ? "border-primary-500"
                  : "border-transparent"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <View className="absolute -top-3 left-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-4 py-1">
                  <Text className="text-white text-xs font-bold">
                    MOST POPULAR
                  </Text>
                </View>
              )}

              {/* Package Header */}
              <View className="mb-4">
                <Text className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {pkg.name}
                </Text>
                <View className="flex-row items-baseline">
                  <Text className="text-3xl font-bold text-gray-900 dark:text-white">
                    {pkg.price}
                  </Text>
                  <Text className="text-gray-500 dark:text-gray-400 ml-2 line-through">
                    {pkg.originalPrice}
                  </Text>
                  <Text className="text-gray-500 dark:text-gray-400 ml-1">
                    {pkg.period}
                  </Text>
                </View>
              </View>

              {/* Features */}
              <View className="mb-6">
                <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  What&apos;s included:
                </Text>
                <View className="space-y-2">
                  {pkg.features.map((feature, index) => (
                    <View key={index} className="flex-row items-center">
                      <Ionicons
                        name="checkmark-circle"
                        size={20}
                        color="#10B981"
                        className="mr-3"
                      />
                      <Text className="text-gray-700 dark:text-gray-300 flex-1">
                        {feature}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>

              {/* Select Button */}
              <Pressable
                className={`bg-gradient-to-r ${pkg.gradient} rounded-xl py-4 items-center`}
                onPress={() => handleSelectPackage(pkg.id)}
              >
                <Text className="text-white font-bold text-lg">
                  {selectedPackage === pkg.id ? "Selected" : "Select Package"}
                </Text>
              </Pressable>
            </View>
          ))}
        </View>

        {/* Comparison Table */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Package Comparison
          </Text>
          <View className="space-y-3">
            <View className="flex-row items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <Text className="text-gray-700 dark:text-gray-300">
                Vendor Access
              </Text>
              <View className="flex-row space-x-4">
                <Text className="text-gray-900 dark:text-white font-medium">
                  100+
                </Text>
                <Text className="text-gray-900 dark:text-white font-medium">
                  500+
                </Text>
              </View>
            </View>
            <View className="flex-row items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <Text className="text-gray-700 dark:text-gray-300">
                Average Discount
              </Text>
              <View className="flex-row space-x-4">
                <Text className="text-gray-900 dark:text-white font-medium">
                  5%
                </Text>
                <Text className="text-gray-900 dark:text-white font-medium">
                  15%
                </Text>
              </View>
            </View>
            <View className="flex-row items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <Text className="text-gray-700 dark:text-gray-300">
                Customer Support
              </Text>
              <View className="flex-row space-x-4">
                <Text className="text-gray-900 dark:text-white font-medium">
                  Basic
                </Text>
                <Text className="text-gray-900 dark:text-white font-medium">
                  Priority
                </Text>
              </View>
            </View>
            <View className="flex-row items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <Text className="text-gray-700 dark:text-gray-300">
                Notifications
              </Text>
              <View className="flex-row space-x-4">
                <Text className="text-gray-900 dark:text-white font-medium">
                  Email
                </Text>
                <Text className="text-gray-900 dark:text-white font-medium">
                  Push
                </Text>
              </View>
            </View>
            <View className="flex-row items-center justify-between py-2">
              <Text className="text-gray-700 dark:text-gray-300">
                Exclusive Deals
              </Text>
              <View className="flex-row space-x-4">
                <Text className="text-gray-500 dark:text-gray-400">✗</Text>
                <Text className="text-green-500">✓</Text>
              </View>
            </View>
          </View>
        </View>

        {/* FAQ Section */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </Text>
          <View className="space-y-4">
            <View>
              <Text className="text-gray-900 dark:text-white font-semibold mb-1">
                Can I cancel anytime?
              </Text>
              <Text className="text-gray-600 dark:text-gray-400 text-sm">
                Yes, you can cancel your subscription at any time with no
                cancellation fees.
              </Text>
            </View>
            <View>
              <Text className="text-gray-900 dark:text-white font-semibold mb-1">
                How do I get my digital card?
              </Text>
              <Text className="text-gray-600 dark:text-gray-400 text-sm">
                After selecting a package, you&apos;ll receive your digital
                loyalty card instantly.
              </Text>
            </View>
            <View>
              <Text className="text-gray-900 dark:text-white font-semibold mb-1">
                Are there any hidden fees?
              </Text>
              <Text className="text-gray-600 dark:text-gray-400 text-sm">
                No hidden fees. The price you see is what you pay, with
                transparent billing.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
