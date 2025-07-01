import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Mock data
const userPoints = {
  current: 1250,
  total: 2000,
  level: "Silver",
  nextLevel: "Gold",
  nextLevelPoints: 750,
};

const userBalance = {
  current: "৳450",
  currency: "BDT",
};

const transactions = [
  {
    id: 1,
    type: "earned",
    description: "Purchase at Shwapno",
    amount: "+150",
    date: "Today, 2:30 PM",
    vendor: "Shwapno",
  },
  {
    id: 2,
    type: "spent",
    description: "Redeemed for discount",
    amount: "-50",
    date: "Yesterday, 1:15 PM",
    vendor: "Meena Bazar",
  },
  {
    id: 3,
    type: "earned",
    description: "Purchase at Samsung",
    amount: "+200",
    date: "2 days ago",
    vendor: "Samsung",
  },
  {
    id: 4,
    type: "earned",
    description: "Welcome bonus",
    amount: "+100",
    date: "1 week ago",
    vendor: "Thank You BD",
  },
  {
    id: 5,
    type: "spent",
    description: "Redeemed for cashback",
    amount: "-75",
    date: "1 week ago",
    vendor: "System",
  },
];

const rewards = [
  {
    id: 1,
    name: "৳50 Cashback",
    points: 500,
    description: "Get ৳50 cashback on your next purchase",
    icon: "💰",
    available: true,
  },
  {
    id: 2,
    name: "Free Delivery",
    points: 300,
    description: "Free delivery on your next order",
    icon: "🚚",
    available: true,
  },
  {
    id: 3,
    name: "Premium Support",
    points: 1000,
    description: "Priority customer support for 1 month",
    icon: "⭐",
    available: false,
  },
  {
    id: 4,
    name: "৳100 Discount",
    points: 800,
    description: "৳100 off on purchases above ৳1000",
    icon: "🎫",
    available: true,
  },
];

export default function PointsBalanceScreen() {
  const insets = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState<"transactions" | "rewards">(
    "transactions"
  );

  const progressPercentage = (userPoints.current / userPoints.total) * 100;

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
              Points & Balance
            </Text>
          </View>
          <Pressable className="p-2">
            <Ionicons name="help-circle-outline" size={24} color="#6B7280" />
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
        {/* Points Section */}
        <View className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-6 mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-white text-lg font-semibold">
              Your Points
            </Text>
            <View className="bg-white/20 rounded-full px-3 py-1">
              <Text className="text-white text-sm font-medium">
                {userPoints.level}
              </Text>
            </View>
          </View>

          <Text className="text-white text-3xl font-bold mb-2">
            {userPoints.current.toLocaleString()}
          </Text>
          <Text className="text-white/80 text-sm mb-4">
            {userPoints.nextLevelPoints} points to {userPoints.nextLevel}
          </Text>

          {/* Progress Bar */}
          <View className="bg-white/20 rounded-full h-2 mb-2">
            <View
              className="bg-white rounded-full h-2"
              style={{ width: `${progressPercentage}%` }}
            />
          </View>
          <Text className="text-white/80 text-xs">
            {userPoints.current} / {userPoints.total} points
          </Text>
        </View>

        {/* Balance Section */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-gray-900 dark:text-white text-lg font-semibold mb-4">
            Available Balance
          </Text>
          <Text className="text-gray-900 dark:text-white text-3xl font-bold mb-2">
            {userBalance.current}
          </Text>
          <Text className="text-gray-600 dark:text-gray-400 text-sm">
            Ready to use for discounts and cashback
          </Text>
        </View>

        {/* Tab Navigation */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-2 mb-6 shadow-sm">
          <View className="flex-row">
            <Pressable
              className={`flex-1 py-3 px-4 rounded-xl ${
                selectedTab === "transactions"
                  ? "bg-primary-100 dark:bg-primary-900"
                  : "bg-transparent"
              }`}
              onPress={() => setSelectedTab("transactions")}
            >
              <Text
                className={`text-center font-semibold ${
                  selectedTab === "transactions"
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                Transactions
              </Text>
            </Pressable>
            <Pressable
              className={`flex-1 py-3 px-4 rounded-xl ${
                selectedTab === "rewards"
                  ? "bg-primary-100 dark:bg-primary-900"
                  : "bg-transparent"
              }`}
              onPress={() => setSelectedTab("rewards")}
            >
              <Text
                className={`text-center font-semibold ${
                  selectedTab === "rewards"
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                Rewards
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Transactions Tab */}
        {selectedTab === "transactions" && (
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
            <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Recent Transactions
            </Text>
            <View className="space-y-4">
              {transactions.map((transaction) => (
                <View
                  key={transaction.id}
                  className="flex-row items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                >
                  <View className="flex-1">
                    <View className="flex-row items-center mb-1">
                      <Text className="text-gray-900 dark:text-white font-semibold">
                        {transaction.description}
                      </Text>
                      {transaction.vendor !== "System" && (
                        <Text className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                          at {transaction.vendor}
                        </Text>
                      )}
                    </View>
                    <Text className="text-gray-500 dark:text-gray-400 text-sm">
                      {transaction.date}
                    </Text>
                  </View>
                  <Text
                    className={`font-bold text-lg ${
                      transaction.type === "earned"
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {transaction.amount}
                  </Text>
                </View>
              ))}
            </View>
            <Pressable className="items-center mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <Text className="text-primary-600 dark:text-primary-400 font-semibold">
                View All Transactions
              </Text>
            </Pressable>
          </View>
        )}

        {/* Rewards Tab */}
        {selectedTab === "rewards" && (
          <View className="space-y-4 mb-6">
            {rewards.map((reward) => (
              <View
                key={reward.id}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border-2 ${
                  reward.available
                    ? "border-transparent"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              >
                <View className="flex-row items-center justify-between mb-3">
                  <View className="flex-row items-center">
                    <Text className="text-2xl mr-3">{reward.icon}</Text>
                    <View>
                      <Text className="text-gray-900 dark:text-white font-semibold text-lg">
                        {reward.name}
                      </Text>
                      <Text className="text-gray-600 dark:text-gray-400 text-sm">
                        {reward.description}
                      </Text>
                    </View>
                  </View>
                  <View className="items-end">
                    <Text className="text-gray-900 dark:text-white font-bold text-lg">
                      {reward.points}
                    </Text>
                    <Text className="text-gray-500 dark:text-gray-400 text-sm">
                      points
                    </Text>
                  </View>
                </View>

                <Pressable
                  className={`rounded-xl py-3 px-4 items-center ${
                    reward.available
                      ? userPoints.current >= reward.points
                        ? "bg-primary-600 dark:bg-primary-500"
                        : "bg-gray-200 dark:bg-gray-700"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                  disabled={
                    !reward.available || userPoints.current < reward.points
                  }
                >
                  <Text
                    className={`font-semibold ${
                      reward.available && userPoints.current >= reward.points
                        ? "text-white"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {!reward.available
                      ? "Coming Soon"
                      : userPoints.current >= reward.points
                        ? "Redeem Now"
                        : `Need ${reward.points - userPoints.current} more points`}
                  </Text>
                </Pressable>
              </View>
            ))}
          </View>
        )}

        {/* Quick Actions */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Quick Actions
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <Pressable className="w-[48%] bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3 items-center">
              <Ionicons name="card-outline" size={24} color="#667eea" />
              <Text className="text-gray-900 dark:text-white font-semibold text-sm mt-2">
                View Card
              </Text>
            </Pressable>

            <Pressable className="w-[48%] bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3 items-center">
              <Ionicons name="gift-outline" size={24} color="#667eea" />
              <Text className="text-gray-900 dark:text-white font-semibold text-sm mt-2">
                Earn More
              </Text>
            </Pressable>

            <Pressable className="w-[48%] bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3 items-center">
              <Ionicons name="share-outline" size={24} color="#667eea" />
              <Text className="text-gray-900 dark:text-white font-semibold text-sm mt-2">
                Share
              </Text>
            </Pressable>

            <Pressable className="w-[48%] bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3 items-center">
              <Ionicons name="help-circle-outline" size={24} color="#667eea" />
              <Text className="text-gray-900 dark:text-white font-semibold text-sm mt-2">
                Help
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
