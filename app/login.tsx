import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useAuth } from "../hooks/useAuth";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const {
    handleGoogleLogin,
    handleFacebookLogin,
    handleEmailLogin,
    isLoading,
  } = useAuth();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+880|880|0)?1[3-9]\d{8}$/;

    if (!email) return "Email or phone number is required";
    if (!emailRegex.test(email) && !phoneRegex.test(email)) {
      return "Please enter a valid email or phone number";
    }
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: validateEmail(text) }));
    }
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: validatePassword(text) }));
    }
  };

  const handleLogin = async () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    if (emailError || passwordError) {
      return;
    }

    const result = await handleEmailLogin(email, password);
    if (result.success) {
      router.replace("/(tabs)");
    } else {
      Alert.alert("Login Failed", result.error || "Please try again");
    }
  };

  const handleSocialLogin = async (provider: "google" | "facebook") => {
    try {
      let result;
      if (provider === "google") {
        result = await handleGoogleLogin();
      } else {
        result = await handleFacebookLogin();
      }

      if (result.success) {
        router.replace("/(tabs)");
      } else {
        Alert.alert(
          `${provider} Login Failed`,
          result.error || "Please try again"
        );
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "Social login is not configured yet. Please use email login."
      );
    }
  };

  const getInputBorderColor = (isFocused: boolean, hasError: boolean) => {
    if (hasError) return "border-red-500";
    if (isFocused) return "border-primary-600";
    return "border-gray-300 dark:border-gray-600";
  };

  return (
    <View className="flex-1 bg-gray-50 dark:bg-gray-900">
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header */}
        <View className="px-6 pt-16 pb-8">
          <View className="items-center mb-8">
            <View className="w-16 h-16 bg-primary-600 rounded-2xl items-center justify-center mb-4">
              <Text className="text-white font-bold text-2xl">TY</Text>
            </View>
            <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome Back
            </Text>
            <Text className="text-gray-600 dark:text-gray-400 text-center">
              Sign in to your account to continue
            </Text>
          </View>
        </View>

        {/* Login Form */}
        <View className="px-6 flex-1">
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
            {/* Email/Phone Input */}
            <View className="mb-4">
              <Text className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Email or Phone Number
              </Text>
              <View
                className={`flex-row items-center bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-3 border-2 ${getInputBorderColor(isEmailFocused, !!errors.email)}`}
              >
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={errors.email ? "#EF4444" : "#6B7280"}
                />
                <TextInput
                  value={email}
                  onChangeText={handleEmailChange}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => {
                    setIsEmailFocused(false);
                    setErrors((prev) => ({
                      ...prev,
                      email: validateEmail(email),
                    }));
                  }}
                  placeholder="Enter your email or phone"
                  placeholderTextColor="#9CA3AF"
                  className="flex-1 ml-3 text-gray-900 dark:text-white"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  editable={!isLoading}
                />
                {errors.email && (
                  <Ionicons name="alert-circle" size={20} color="#EF4444" />
                )}
              </View>
              {errors.email && (
                <Text className="text-red-500 text-xs mt-1 ml-1">
                  {errors.email}
                </Text>
              )}
            </View>

            {/* Password Input */}
            <View className="mb-6">
              <Text className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Password
              </Text>
              <View
                className={`flex-row items-center bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-3 border-2 ${getInputBorderColor(isPasswordFocused, !!errors.password)}`}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color={errors.password ? "#EF4444" : "#6B7280"}
                />
                <TextInput
                  value={password}
                  onChangeText={handlePasswordChange}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => {
                    setIsPasswordFocused(false);
                    setErrors((prev) => ({
                      ...prev,
                      password: validatePassword(password),
                    }));
                  }}
                  placeholder="Enter your password"
                  placeholderTextColor="#9CA3AF"
                  className="flex-1 ml-3 text-gray-900 dark:text-white"
                  secureTextEntry={!showPassword}
                  autoCorrect={false}
                  editable={!isLoading}
                />
                <Pressable
                  onPress={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color="#6B7280"
                  />
                </Pressable>
                {errors.password && (
                  <Ionicons name="alert-circle" size={20} color="#EF4444" />
                )}
              </View>
              {errors.password && (
                <Text className="text-red-500 text-xs mt-1 ml-1">
                  {errors.password}
                </Text>
              )}
            </View>

            {/* Forgot Password */}
            <Pressable className="items-end mb-6" disabled={isLoading}>
              <Text className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                Forgot Password?
              </Text>
            </Pressable>

            {/* Login Button */}
            <Pressable
              onPress={handleLogin}
              disabled={isLoading}
              className={`rounded-xl py-4 items-center mb-6 ${
                isLoading ? "bg-gray-300" : "bg-primary-600"
              }`}
            >
              {isLoading ? (
                <View className="flex-row items-center">
                  <Ionicons name="reload" size={20} color="#6B7280" />
                  <Text className="text-gray-600 font-semibold ml-2">
                    Signing In...
                  </Text>
                </View>
              ) : (
                <Text className="text-white font-semibold text-lg">
                  Sign In
                </Text>
              )}
            </Pressable>

            {/* Divider */}
            <View className="flex-row items-center mb-6">
              <View className="flex-1 h-px bg-gray-300 dark:bg-gray-600" />
              <Text className="mx-4 text-gray-500 dark:text-gray-400 text-sm">
                or
              </Text>
              <View className="flex-1 h-px bg-gray-300 dark:bg-gray-600" />
            </View>

            {/* Social Login */}
            <View className="space-y-3 mb-6">
              <Pressable
                onPress={() => handleSocialLogin("google")}
                disabled={isLoading}
                className={`flex-row items-center justify-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl py-3 ${isLoading ? "opacity-50" : ""}`}
              >
                <Ionicons name="logo-google" size={20} color="#DB4437" />
                <Text className="text-gray-900 dark:text-white font-medium ml-3">
                  Continue with Google
                </Text>
              </Pressable>

              <Pressable
                onPress={() => handleSocialLogin("facebook")}
                disabled={isLoading}
                className={`flex-row items-center justify-center bg-blue-600 rounded-xl py-3 ${isLoading ? "opacity-50" : ""}`}
              >
                <Ionicons name="logo-facebook" size={20} color="white" />
                <Text className="text-white font-medium ml-3">
                  Continue with Facebook
                </Text>
              </Pressable>
            </View>

            {/* Sign Up Link */}
            <View className="flex-row justify-center">
              <Text className="text-gray-600 dark:text-gray-400">
                Don&apos;t have an account?{" "}
              </Text>
              <Pressable
                onPress={() => router.push("/register")}
                disabled={isLoading}
              >
                <Text className="text-primary-600 dark:text-primary-400 font-medium">
                  Sign Up
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View className="px-6 pb-8">
          <Text className="text-gray-500 dark:text-gray-400 text-center text-xs">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
