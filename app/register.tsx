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

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    terms?: string;
  }>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const { handleGoogleLogin, handleFacebookLogin, handleEmailRegister } =
    useAuth();

  const validateName = (name: string) => {
    if (!name.trim()) return "Full name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (!/^[a-zA-Z\s]+$/.test(name.trim()))
      return "Name can only contain letters and spaces";
    return "";
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";
    if (!/(?=.*[a-z])/.test(password))
      return "Password must contain at least one lowercase letter";
    if (!/(?=.*[A-Z])/.test(password))
      return "Password must contain at least one uppercase letter";
    if (!/(?=.*\d)/.test(password))
      return "Password must contain at least one number";
    return "";
  };

  const validateConfirmPassword = (confirmPassword: string) => {
    if (!confirmPassword) return "Please confirm your password";
    if (confirmPassword !== password) return "Passwords do not match";
    return "";
  };

  const getPasswordStrength = (password: string) => {
    if (!password) return { score: 0, label: "", color: "" };

    let score = 0;
    if (password.length >= 8) score++;
    if (/(?=.*[a-z])/.test(password)) score++;
    if (/(?=.*[A-Z])/.test(password)) score++;
    if (/(?=.*\d)/.test(password)) score++;
    if (/(?=.*[!@#$%^&*])/.test(password)) score++;

    const strengthMap = {
      0: { label: "Very Weak", color: "bg-red-500" },
      1: { label: "Weak", color: "bg-orange-500" },
      2: { label: "Fair", color: "bg-yellow-500" },
      3: { label: "Good", color: "bg-blue-500" },
      4: { label: "Strong", color: "bg-green-500" },
      5: { label: "Very Strong", color: "bg-green-600" },
    };

    return { score, ...strengthMap[score as keyof typeof strengthMap] };
  };

  const handleFieldChange = (field: string, value: string) => {
    switch (field) {
      case "name":
        setName(value);
        if (errors.name) {
          setErrors((prev) => ({ ...prev, name: validateName(value) }));
        }
        break;
      case "email":
        setEmail(value);
        if (errors.email) {
          setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
        }
        break;
      case "password":
        setPassword(value);
        if (errors.password) {
          setErrors((prev) => ({ ...prev, password: validatePassword(value) }));
        }
        if (confirmPassword && errors.confirmPassword) {
          setErrors((prev) => ({
            ...prev,
            confirmPassword: validateConfirmPassword(confirmPassword),
          }));
        }
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        if (errors.confirmPassword) {
          setErrors((prev) => ({
            ...prev,
            confirmPassword: validateConfirmPassword(value),
          }));
        }
        break;
    }
  };

  const handleFieldBlur = (field: string) => {
    setFocusedField(null);
    let error = "";

    switch (field) {
      case "name":
        error = validateName(name);
        setErrors((prev) => ({ ...prev, name: error }));
        break;
      case "email":
        error = validateEmail(email);
        setErrors((prev) => ({ ...prev, email: error }));
        break;
      case "password":
        error = validatePassword(password);
        setErrors((prev) => ({ ...prev, password: error }));
        break;
      case "confirmPassword":
        error = validateConfirmPassword(confirmPassword);
        setErrors((prev) => ({ ...prev, confirmPassword: error }));
        break;
    }
  };

  const handleRegister = async () => {
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);
    const termsError = !acceptTerms
      ? "Please accept the terms and conditions"
      : "";

    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
      terms: termsError,
    });

    if (
      nameError ||
      emailError ||
      passwordError ||
      confirmPasswordError ||
      termsError
    ) {
      return;
    }

    setIsLoading(true);
    const result = await handleEmailRegister(name, email, password);
    if (result.success) {
      router.replace("/otp");
    } else {
      Alert.alert("Registration Failed", result.error || "Please try again");
    }
  };

  const handleSocialRegister = async (provider: "google" | "facebook") => {
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
          `${provider} Registration Failed`,
          result.error || "Please try again"
        );
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "Social registration is not configured yet. Please use email registration."
      );
    }
  };

  const getInputBorderColor = (field: string) => {
    const hasError = !!errors[field as keyof typeof errors];
    const isFocused = focusedField === field;

    if (hasError) return "border-red-500";
    if (isFocused) return "border-primary-600";
    return "border-gray-300 dark:border-gray-600";
  };

  const passwordStrength = getPasswordStrength(password);

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
              Create Account
            </Text>
            <Text className="text-gray-600 dark:text-gray-400 text-center">
              Join Thank You BD and start earning rewards
            </Text>
          </View>
        </View>

        {/* Registration Form */}
        <View className="px-6 flex-1">
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
            {/* Name Input */}
            <View className="mb-4">
              <Text className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Full Name
              </Text>
              <View
                className={`flex-row items-center bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-3 border-2 ${getInputBorderColor("name")}`}
              >
                <Ionicons
                  name="person-outline"
                  size={20}
                  color={errors.name ? "#EF4444" : "#6B7280"}
                />
                <TextInput
                  value={name}
                  onChangeText={(text) => handleFieldChange("name", text)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => handleFieldBlur("name")}
                  placeholder="Enter your full name"
                  placeholderTextColor="#9CA3AF"
                  className="flex-1 ml-3 text-gray-900 dark:text-white"
                  autoCapitalize="words"
                  autoCorrect={false}
                  editable={!isLoading}
                />
                {errors.name && (
                  <Ionicons name="alert-circle" size={20} color="#EF4444" />
                )}
              </View>
              {errors.name && (
                <Text className="text-red-500 text-xs mt-1 ml-1">
                  {errors.name}
                </Text>
              )}
            </View>

            {/* Email Input */}
            <View className="mb-4">
              <Text className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Email Address
              </Text>
              <View
                className={`flex-row items-center bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-3 border-2 ${getInputBorderColor("email")}`}
              >
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={errors.email ? "#EF4444" : "#6B7280"}
                />
                <TextInput
                  value={email}
                  onChangeText={(text) => handleFieldChange("email", text)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => handleFieldBlur("email")}
                  placeholder="Enter your email"
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
            <View className="mb-4">
              <Text className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Password
              </Text>
              <View
                className={`flex-row items-center bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-3 border-2 ${getInputBorderColor("password")}`}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color={errors.password ? "#EF4444" : "#6B7280"}
                />
                <TextInput
                  value={password}
                  onChangeText={(text) => handleFieldChange("password", text)}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => handleFieldBlur("password")}
                  placeholder="Create a password"
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
              {password && (
                <View className="mt-2">
                  <View className="flex-row justify-between items-center mb-1">
                    <Text className="text-xs text-gray-500 dark:text-gray-400">
                      Password strength:
                    </Text>
                    <Text
                      className={`text-xs font-medium ${passwordStrength.color.replace("bg-", "text-")}`}
                    >
                      {passwordStrength.label}
                    </Text>
                  </View>
                  <View className="flex-row space-x-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <View
                        key={level}
                        className={`flex-1 h-1 rounded-full ${
                          level <= passwordStrength.score
                            ? passwordStrength.color
                            : "bg-gray-200 dark:bg-gray-600"
                        }`}
                      />
                    ))}
                  </View>
                </View>
              )}
              {errors.password && (
                <Text className="text-red-500 text-xs mt-1 ml-1">
                  {errors.password}
                </Text>
              )}
            </View>

            {/* Confirm Password Input */}
            <View className="mb-6">
              <Text className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Confirm Password
              </Text>
              <View
                className={`flex-row items-center bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-3 border-2 ${getInputBorderColor("confirmPassword")}`}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color={errors.confirmPassword ? "#EF4444" : "#6B7280"}
                />
                <TextInput
                  value={confirmPassword}
                  onChangeText={(text) =>
                    handleFieldChange("confirmPassword", text)
                  }
                  onFocus={() => setFocusedField("confirmPassword")}
                  onBlur={() => handleFieldBlur("confirmPassword")}
                  placeholder="Confirm your password"
                  placeholderTextColor="#9CA3AF"
                  className="flex-1 ml-3 text-gray-900 dark:text-white"
                  secureTextEntry={!showConfirmPassword}
                  autoCorrect={false}
                  editable={!isLoading}
                />
                <Pressable
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={isLoading}
                >
                  <Ionicons
                    name={
                      showConfirmPassword ? "eye-off-outline" : "eye-outline"
                    }
                    size={20}
                    color="#6B7280"
                  />
                </Pressable>
                {errors.confirmPassword && (
                  <Ionicons name="alert-circle" size={20} color="#EF4444" />
                )}
              </View>
              {errors.confirmPassword && (
                <Text className="text-red-500 text-xs mt-1 ml-1">
                  {errors.confirmPassword}
                </Text>
              )}
            </View>

            {/* Terms and Conditions */}
            <Pressable
              className="flex-row items-center mb-6"
              onPress={() => setAcceptTerms(!acceptTerms)}
              disabled={isLoading}
            >
              <View
                className={`w-5 h-5 rounded border-2 items-center justify-center mr-3 ${
                  acceptTerms
                    ? "bg-primary-600 border-primary-600"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              >
                {acceptTerms && (
                  <Ionicons name="checkmark" size={14} color="white" />
                )}
              </View>
              <Text className="text-gray-600 dark:text-gray-400 text-sm flex-1">
                I agree to the Terms of Service and Privacy Policy
              </Text>
            </Pressable>
            {errors.terms && (
              <Text className="text-red-500 text-xs mb-4 ml-8">
                {errors.terms}
              </Text>
            )}

            {/* Register Button */}
            <Pressable
              onPress={handleRegister}
              disabled={isLoading}
              className={`rounded-xl py-4 items-center mb-6 ${
                isLoading ? "bg-gray-300" : "bg-primary-600"
              }`}
            >
              {isLoading ? (
                <View className="flex-row items-center">
                  <Ionicons name="reload" size={20} color="#6B7280" />
                  <Text className="text-gray-600 font-semibold ml-2">
                    Creating Account...
                  </Text>
                </View>
              ) : (
                <Text className="text-white font-semibold text-lg">
                  Create Account
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

            {/* Social Registration */}
            <View className="space-y-3 mb-6">
              <Pressable
                onPress={() => handleSocialRegister("google")}
                disabled={isLoading}
                className={`flex-row items-center justify-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl py-3 ${isLoading ? "opacity-50" : ""}`}
              >
                <Ionicons name="logo-google" size={20} color="#DB4437" />
                <Text className="text-gray-900 dark:text-white font-medium ml-3">
                  Continue with Google
                </Text>
              </Pressable>

              <Pressable
                onPress={() => handleSocialRegister("facebook")}
                disabled={isLoading}
                className={`flex-row items-center justify-center bg-blue-600 rounded-xl py-3 ${isLoading ? "opacity-50" : ""}`}
              >
                <Ionicons name="logo-facebook" size={20} color="white" />
                <Text className="text-white font-medium ml-3">
                  Continue with Facebook
                </Text>
              </Pressable>
            </View>

            {/* Sign In Link */}
            <View className="flex-row justify-center">
              <Text className="text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
              </Text>
              <Pressable onPress={() => router.back()} disabled={isLoading}>
                <Text className="text-primary-600 dark:text-primary-400 font-medium">
                  Sign In
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View className="px-6 pb-8">
          <Text className="text-gray-500 dark:text-gray-400 text-center text-xs">
            By creating an account, you agree to our Terms of Service and
            Privacy Policy
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
