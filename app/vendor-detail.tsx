import { Ionicons } from "@expo/vector-icons";
import { router, Stack, useLocalSearchParams } from "expo-router";
import {
  Alert,
  Linking,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
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
    location: {
      latitude: 23.7937,
      longitude: 90.4066,
      address: "House #123, Road #12, Banani, Dhaka, Bangladesh",
    },
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
    location: {
      latitude: 23.7937,
      longitude: 90.4066,
      address: "Shop #45, Gulshan-2, Dhaka, Bangladesh",
    },
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
    location: {
      latitude: 21.4272,
      longitude: 92.0058,
      address: "Marine Drive, Cox's Bazar, Bangladesh",
    },
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

  const numericVendorId = parseInt(vendorId || "0") as keyof typeof vendorData;
  const vendor = vendorData[numericVendorId];

  const handleCall = async () => {
    try {
      const phoneNumber = vendor.phone.replace(/\s+/g, "");
      const url = `tel:${phoneNumber}`;
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(
          "Call Not Supported",
          "Your device doesn't support making phone calls.",
          [{ text: "OK" }]
        );
      }
    } catch (error) {
      Alert.alert("Error", "Unable to make the call. Please try again.", [
        { text: "OK" },
      ]);
    }
  };

  const handleWebsite = async () => {
    try {
      const websiteUrl = vendor.website.startsWith("http")
        ? vendor.website
        : `https://${vendor.website}`;
      const supported = await Linking.canOpenURL(websiteUrl);

      if (supported) {
        await Linking.openURL(websiteUrl);
      } else {
        Alert.alert(
          "Browser Not Available",
          "Unable to open the website. Please check your internet connection.",
          [{ text: "OK" }]
        );
      }
    } catch (error) {
      Alert.alert("Error", "Unable to open the website. Please try again.", [
        { text: "OK" },
      ]);
    }
  };

  const handleShowCard = () => {
    router.push("/card-generation");
  };

  const handleDirections = async () => {
    try {
      // Use vendor name for search instead of coordinates
      const searchQuery = encodeURIComponent(
        `${vendor.name} ${vendor.category} Bangladesh`
      );
      const url = `https://www.google.com/maps/search/${searchQuery}`;

      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        // Fallback to Apple Maps on iOS
        const appleMapsUrl = `http://maps.apple.com/?q=${searchQuery}`;
        const appleSupported = await Linking.canOpenURL(appleMapsUrl);

        if (appleSupported) {
          await Linking.openURL(appleMapsUrl);
        } else {
          Alert.alert(
            "Maps Not Available",
            "No map application found on your device.",
            [{ text: "OK" }]
          );
        }
      }
    } catch (error) {
      Alert.alert("Error", "Unable to open maps. Please try again.", [
        { text: "OK" },
      ]);
    }
  };

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
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <View
          className="bg-white dark:bg-gray-800 px-4 pb-4 border-b border-gray-200 dark:border-gray-700"
          style={{ paddingTop: insets.top }}
        >
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Pressable
                onPress={() => router.replace("/(tabs)")}
                className="mr-3 p-2 flex-row items-center"
              >
                <Ionicons name="chevron-back" size={24} color="#007BFF" />
              </Pressable>
              <View className="flex-row items-center r">
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
          className="flex-1 px-4 pt-2"
          contentContainerStyle={{
            paddingBottom: 100,
            paddingTop: 0,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Discount Banner */}
          <View className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 mb-6">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className=" text-2xl font-bold mb-1">
                  {vendor.discount}
                </Text>
                <Text className=" text-sm">Valid until Dec 31, 2024</Text>
              </View>
              <Pressable className="bg-white/20 rounded-full p-3">
                <Ionicons name="qr-code-outline" size={32} color="black" />
              </Pressable>
            </View>
          </View>

          {/* Quick Actions */}
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
            <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Quick Actions
            </Text>

            <View className="flex-row flex-wrap justify-between">
              <Pressable
                className="w-[48%] bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3 items-center"
                onPress={() =>
                  router.push("/offer-detail?offerId=shwapno-15-off")
                }
              >
                <Ionicons name="gift-outline" size={24} color="#667eea" />
                <Text className="text-gray-900 dark:text-white font-semibold text-sm mt-2">
                  View Offers
                </Text>
              </Pressable>

              <Pressable
                className="w-[48%] bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3 items-center"
                onPress={handleShowCard}
              >
                <Ionicons name="card-outline" size={24} color="#667eea" />
                <Text className="text-gray-900 dark:text-white font-semibold text-sm mt-2">
                  Show Card
                </Text>
              </Pressable>

              <Pressable
                className="w-[48%] bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3 items-center"
                onPress={handleCall}
              >
                <Ionicons name="call-outline" size={24} color="#667eea" />
                <Text className="text-gray-900 dark:text-white font-semibold text-sm mt-2">
                  Call Now
                </Text>
              </Pressable>

              <Pressable
                className="w-[48%] bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3 items-center"
                onPress={handleWebsite}
              >
                <Ionicons name="globe" size={24} color="#667eea" />
                <Text className="text-gray-900 dark:text-white font-semibold text-sm mt-2">
                  Website
                </Text>
              </Pressable>

              <Pressable
                className="w-[48%] bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3 items-center"
                onPress={handleDirections}
              >
                <Ionicons name="navigate-outline" size={24} color="#667eea" />
                <Text className="text-gray-900 dark:text-white font-semibold text-sm mt-2">
                  Directions
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Service Details */}
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-sm">
            <View className="flex-row items-center mb-6">
              <View className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-xl items-center justify-center mr-3">
                <Ionicons
                  name="information-circle-outline"
                  size={20}
                  color="#3B82F6"
                />
              </View>
              <Text className="text-xl font-bold text-gray-900 dark:text-white">
                Service Details
              </Text>
            </View>

            <View className="space-y-4">
              <View className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 border border-gray-100 dark:border-gray-600">
                <View className="flex-row items-start">
                  <View className="w-10 h-10 bg-blue-500 rounded-full items-center justify-center mr-4 flex-shrink-0">
                    <Ionicons name="location" size={20} color="white" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 dark:text-white font-semibold text-base mb-1">
                      Address
                    </Text>
                    <Text className="text-gray-600 dark:text-gray-400 text-sm leading-5">
                      {vendor.address}
                    </Text>
                  </View>
                </View>
              </View>

              <View className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 border border-gray-100 dark:border-gray-600">
                <View className="flex-row items-start">
                  <View className="w-10 h-10 bg-green-500 rounded-full items-center justify-center mr-4 flex-shrink-0">
                    <Ionicons name="call" size={20} color="white" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 dark:text-white font-semibold text-base mb-1">
                      Phone
                    </Text>
                    <Text className="text-gray-600 dark:text-gray-400 text-sm leading-5">
                      {vendor.phone}
                    </Text>
                  </View>
                </View>
              </View>

              <View className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 border border-gray-100 dark:border-gray-600">
                <View className="flex-row items-start">
                  <View className="w-10 h-10 bg-purple-500 rounded-full items-center justify-center mr-4 flex-shrink-0">
                    <Ionicons name="time" size={20} color="white" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 dark:text-white font-semibold text-base mb-1">
                      Business Hours
                    </Text>
                    <Text className="text-gray-600 dark:text-gray-400 text-sm leading-5">
                      {vendor.hours}
                    </Text>
                  </View>
                </View>
              </View>

              <View className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 border border-gray-100 dark:border-gray-600">
                <View className="flex-row items-start">
                  <View className="w-10 h-10 bg-orange-500 rounded-full items-center justify-center mr-4 flex-shrink-0">
                    <Ionicons name="globe" size={20} color="white" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 dark:text-white font-semibold text-base mb-1">
                      Website
                    </Text>
                    <Pressable onPress={handleWebsite}>
                      <Text className="text-blue-600 dark:text-blue-400 text-sm leading-5 underline">
                        {vendor.website}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>

            <View className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
              <View className="flex-row items-start">
                <Ionicons
                  name="checkmark-circle-outline"
                  size={20}
                  color="#3B82F6"
                  className="mr-2 mt-0.5"
                />
                <Text className="text-blue-700 dark:text-blue-300 text-sm leading-5 flex-1">
                  All information is verified and up-to-date. Contact details
                  are provided for your convenience.
                </Text>
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
    </>
  );
}
