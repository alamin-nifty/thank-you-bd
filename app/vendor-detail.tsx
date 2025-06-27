import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Vendor data with Bangladeshi brands
const vendorData = {
  1: {
    id: 1,
    name: "Shwapno",
    logo: "🛒",
    category: "Grocery",
    discount: "15% off",
    rating: 4.5,
    reviewCount: 1247,
    distance: "0.5 km",
    address: "House #123, Road #12, Banani, Dhaka",
    phone: "+880 1712-345678",
    website: "www.shwapno.com",
    hours: "Open 24/7",
    description:
      "Leading grocery chain in Bangladesh offering fresh produce, household items, and daily essentials.",
    services: ["Grocery", "Fresh Produce", "Household Items", "Personal Care"],
    reviews: [
      {
        id: 1,
        user: "Ahmed K.",
        rating: 5,
        comment: "Great quality products and excellent service!",
        date: "2 days ago",
      },
      {
        id: 2,
        user: "Fatima R.",
        rating: 4,
        comment: "Good variety of items, prices are reasonable.",
        date: "1 week ago",
      },
      {
        id: 3,
        user: "Mohammad S.",
        rating: 5,
        comment: "Very clean store and friendly staff.",
        date: "2 weeks ago",
      },
    ],
    isFavorite: false,
  },
  15: {
    id: 15,
    name: "Samsung",
    logo: "📱",
    category: "Mobile Phones",
    discount: "12% off",
    rating: 4.5,
    reviewCount: 892,
    distance: "1.2 km",
    address: "Shop #45, Gulshan-2, Dhaka",
    phone: "+880 1812-345678",
    website: "www.samsung.com/bd",
    hours: "10:00 AM - 8:00 PM",
    description:
      "Official Samsung store offering the latest smartphones, tablets, and accessories.",
    services: ["Smartphones", "Tablets", "Accessories", "Service Center"],
    reviews: [
      {
        id: 1,
        user: "Rahim A.",
        rating: 5,
        comment: "Best place to buy Samsung phones in Dhaka!",
        date: "3 days ago",
      },
      {
        id: 2,
        user: "Sadia K.",
        rating: 4,
        comment: "Good service and warranty support.",
        date: "1 week ago",
      },
    ],
    isFavorite: true,
  },
  35: {
    id: 35,
    name: "Hotel Sea Uttora",
    logo: "🏨",
    category: "Tourist Hotels",
    discount: "15% off",
    rating: 4.6,
    reviewCount: 567,
    distance: "5.2 km",
    address: "Marine Drive, Cox's Bazar",
    phone: "+880 1912-345678",
    website: "www.seauttora.com",
    hours: "Check-in: 2:00 PM, Check-out: 12:00 PM",
    description:
      "Premium beachfront hotel offering stunning ocean views and world-class amenities.",
    services: [
      "Luxury Rooms",
      "Beach Access",
      "Restaurant",
      "Spa",
      "Conference Hall",
    ],
    reviews: [
      {
        id: 1,
        user: "Karim H.",
        rating: 5,
        comment: "Amazing ocean view and excellent service!",
        date: "1 week ago",
      },
      {
        id: 2,
        user: "Nadia F.",
        rating: 4,
        comment: "Beautiful location, clean rooms.",
        date: "2 weeks ago",
      },
    ],
    isFavorite: false,
  },
};

export default function VendorDetailScreen() {
  const insets = useSafeAreaInsets();
  const { vendorId } = useLocalSearchParams<{ vendorId: string }>();

  const vendor =
    vendorData[vendorId as keyof typeof vendorData] ||
    (vendorId &&
      vendorData[parseInt(vendorId) as unknown as keyof typeof vendorData]);

  if (!vendor) {
    return (
      <View className="flex-1 bg-gray-50 dark:bg-gray-900 items-center justify-center">
        <Text className="text-gray-600 dark:text-gray-400">
          Vendor not found
        </Text>
      </View>
    );
  }

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
            <View className="flex-row items-center">
              <View className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl items-center justify-center mr-3">
                <Text className="text-xl">{vendor.logo}</Text>
              </View>
              <View>
                <Text className="text-lg font-bold text-gray-900 dark:text-white">
                  {vendor.name}
                </Text>
                <Text className="text-gray-600 dark:text-gray-400 text-sm">
                  {vendor.category}
                </Text>
              </View>
            </View>
          </View>

          <View className="flex-row items-center space-x-2">
            <Pressable className="p-2">
              <Ionicons
                name={vendor.isFavorite ? "heart" : "heart-outline"}
                size={24}
                color={vendor.isFavorite ? "#EF4444" : "#6B7280"}
              />
            </Pressable>
            <Pressable className="p-2">
              <Ionicons name="share-outline" size={24} color="#6B7280" />
            </Pressable>
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
        {/* Discount Banner */}
        <View className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 mb-6">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-white text-2xl font-bold mb-1">
                {vendor.discount}
              </Text>
              <Text className="text-white/80 text-sm">
                Valid until Dec 31, 2024
              </Text>
            </View>
            <Pressable className="bg-white/20 rounded-full p-3">
              <Ionicons name="qr-code-outline" size={24} color="white" />
            </Pressable>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Quick Actions
          </Text>

          <View className="flex-row flex-wrap justify-between">
            <Pressable className="w-[48%] bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3 items-center">
              <Ionicons name="card-outline" size={24} color="#667eea" />
              <Text className="text-gray-900 dark:text-white font-semibold text-sm mt-2">
                Show Card
              </Text>
            </Pressable>

            <Pressable className="w-[48%] bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3 items-center">
              <Ionicons name="call-outline" size={24} color="#667eea" />
              <Text className="text-gray-900 dark:text-white font-semibold text-sm mt-2">
                Call Now
              </Text>
            </Pressable>

            <Pressable className="w-[48%] bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3 items-center">
              <Ionicons name="navigate-outline" size={24} color="#667eea" />
              <Text className="text-gray-900 dark:text-white font-semibold text-sm mt-2">
                Directions
              </Text>
            </Pressable>

            <Pressable className="w-[48%] bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3 items-center">
              <Ionicons name="globe-outline" size={24} color="#667eea" />
              <Text className="text-gray-900 dark:text-white font-semibold text-sm mt-2">
                Website
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Service Details */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Service Details
          </Text>

          <View className="space-y-4">
            <View className="flex-row items-center">
              <Ionicons name="location-outline" size={20} color="#6B7280" />
              <View className="flex-1 ml-3">
                <Text className="text-gray-900 dark:text-white font-medium">
                  Address
                </Text>
                <Text className="text-gray-600 dark:text-gray-400 text-sm">
                  {vendor.address}
                </Text>
              </View>
            </View>

            <View className="flex-row items-center">
              <Ionicons name="call-outline" size={20} color="#6B7280" />
              <View className="flex-1 ml-3">
                <Text className="text-gray-900 dark:text-white font-medium">
                  Phone
                </Text>
                <Text className="text-gray-600 dark:text-gray-400 text-sm">
                  {vendor.phone}
                </Text>
              </View>
            </View>

            <View className="flex-row items-center">
              <Ionicons name="time-outline" size={20} color="#6B7280" />
              <View className="flex-1 ml-3">
                <Text className="text-gray-900 dark:text-white font-medium">
                  Hours
                </Text>
                <Text className="text-gray-600 dark:text-gray-400 text-sm">
                  {vendor.hours}
                </Text>
              </View>
            </View>

            <View className="flex-row items-center">
              <Ionicons name="globe-outline" size={20} color="#6B7280" />
              <View className="flex-1 ml-3">
                <Text className="text-gray-900 dark:text-white font-medium">
                  Website
                </Text>
                <Text className="text-primary-600 dark:text-primary-400 text-sm">
                  {vendor.website}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Services Offered */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Services Offered
          </Text>

          <View className="flex-row flex-wrap">
            {vendor.services.map((service, index) => (
              <View
                key={index}
                className="bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 mr-2 mb-2"
              >
                <Text className="text-gray-700 dark:text-gray-300 text-sm">
                  {service}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Reviews */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-bold text-gray-900 dark:text-white">
              Reviews
            </Text>
            <Pressable className="bg-primary-100 dark:bg-primary-900 rounded-full px-3 py-1">
              <Text className="text-primary-700 dark:text-primary-300 text-sm font-medium">
                Add Review
              </Text>
            </Pressable>
          </View>

          {/* Rating Summary */}
          <View className="flex-row items-center mb-4">
            <View className="flex-row items-center mr-4">
              <Ionicons name="star" size={20} color="#FBBF24" />
              <Text className="text-lg font-bold text-gray-900 dark:text-white ml-1">
                {vendor.rating}
              </Text>
            </View>
            <Text className="text-gray-600 dark:text-gray-400">
              ({vendor.reviewCount} reviews)
            </Text>
          </View>

          {/* Review List */}
          <View className="space-y-4">
            {vendor.reviews.map((review) => (
              <View
                key={review.id}
                className="border-b border-gray-200 dark:border-gray-700 pb-4"
              >
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-gray-900 dark:text-white font-medium">
                    {review.user}
                  </Text>
                  <Text className="text-gray-500 dark:text-gray-400 text-sm">
                    {review.date}
                  </Text>
                </View>

                <View className="flex-row items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Ionicons
                      key={i}
                      name={i < review.rating ? "star" : "star-outline"}
                      size={14}
                      color="#FBBF24"
                    />
                  ))}
                </View>

                <Text className="text-gray-600 dark:text-gray-400 text-sm">
                  {review.comment}
                </Text>
              </View>
            ))}
          </View>

          <Pressable className="items-center mt-4">
            <Text className="text-primary-600 dark:text-primary-400 font-semibold">
              View All Reviews
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
