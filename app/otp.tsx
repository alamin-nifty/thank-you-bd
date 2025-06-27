import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { useOTP } from "../hooks/useOTP";

export default function OTPScreen() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const inputRefs = useRef<TextInput[]>([]);

  const {
    isLoading,
    isVerified,
    resendTimer,
    attempts,
    maxAttempts,
    lockoutTime,
    isLocked,
    verifyOTP,
    resendOTP,
    resetOTPState,
    formatTime,
  } = useOTP();

  useEffect(() => {
    if (isVerified) {
      router.replace("/(tabs)");
    }
  }, [isVerified]);

  const handleOtpChange = (text: string, index: number) => {
    if (isLocked) return;

    if (text.length > 1) {
      text = text[text.length - 1];
    }

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    setError("");

    // Auto-focus next input
    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-focus previous input on backspace
    if (!text && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (isLocked) return;

    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const validateOtp = () => {
    const otpString = otp.join("");
    if (otpString.length !== 4) {
      return "Please enter the complete 4-digit code";
    }
    if (!/^\d{4}$/.test(otpString)) {
      return "Please enter only numbers";
    }
    return "";
  };

  const handleVerify = async () => {
    if (isLocked) {
      Alert.alert(
        "Account Locked",
        `Please wait ${formatTime(lockoutTime)} before trying again.`
      );
      return;
    }

    const validationError = validateOtp();
    if (validationError) {
      setError(validationError);
      return;
    }

    const otpString = otp.join("");
    const result = await verifyOTP(otpString);

    if (result.success) {
      // Success - user will be redirected by useEffect
    } else {
      setError(result.error || "Verification failed");
      if (result.error?.includes("attempts remaining")) {
        setOtp(["", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
    }
  };

  const handleResend = async () => {
    const result = await resendOTP();
    if (!result.success) {
      Alert.alert("Error", result.error || "Failed to resend code");
    }
  };

  const getInputBorderColor = (index: number) => {
    if (isLocked) return "border-gray-400";
    if (error && !otp[index]) return "border-red-500";
    if (otp[index]) return "border-green-500";
    return "border-gray-300 dark:border-gray-600";
  };

  const isOtpComplete = otp.every((digit) => digit !== "") && !isLocked;

  const getAttemptsColor = () => {
    const remainingAttempts = maxAttempts - attempts;
    if (remainingAttempts <= 1) return "text-red-500";
    if (remainingAttempts <= 2) return "text-orange-500";
    return "text-gray-500 dark:text-gray-400";
  };

  return (
    <View className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <View className="px-6 pt-16 pb-8">
        <Pressable
          onPress={() => router.back()}
          className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full items-center justify-center mb-6 shadow-sm"
        >
          <Ionicons name="arrow-back" size={20} color="#6B7280" />
        </Pressable>

        <View className="items-center mb-8">
          <View className="w-16 h-16 bg-primary-600 rounded-2xl items-center justify-center mb-4">
            <Ionicons name="shield-checkmark" size={32} color="white" />
          </View>
          <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Verify Your Account
          </Text>
          <Text className="text-gray-600 dark:text-gray-400 text-center">
            We&apos;ve sent a 4-digit code to your phone/email
          </Text>
        </View>
      </View>

      {/* OTP Form */}
      <View className="px-6 flex-1">
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
          {/* OTP Input */}
          <View className="mb-6">
            <Text className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-4 text-center">
              Enter Verification Code
            </Text>

            <View className="flex-row justify-center space-x-3 mb-4">
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => {
                    if (ref) inputRefs.current[index] = ref;
                  }}
                  value={digit}
                  onChangeText={(text) => handleOtpChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  className={`w-14 h-14 text-center text-2xl font-bold border-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white ${getInputBorderColor(index)}`}
                  keyboardType="numeric"
                  maxLength={1}
                  selectTextOnFocus
                  autoFocus={index === 0}
                  editable={!isLocked && !isLoading}
                />
              ))}
            </View>

            {error && (
              <View className="flex-row items-center justify-center mb-4">
                <Ionicons name="alert-circle" size={16} color="#EF4444" />
                <Text className="text-red-500 text-sm ml-2">{error}</Text>
              </View>
            )}

            {/* Attempts Counter */}
            {attempts > 0 && (
              <View className="flex-row items-center justify-center mb-4">
                <Ionicons name="warning" size={16} color="#F59E0B" />
                <Text className={`text-sm ml-2 ${getAttemptsColor()}`}>
                  {maxAttempts - attempts} attempts remaining
                </Text>
              </View>
            )}

            {/* Lockout Warning */}
            {isLocked && (
              <View className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 mb-6">
                <View className="flex-row items-center">
                  <Ionicons name="lock-closed" size={20} color="#EF4444" />
                  <Text className="text-red-700 dark:text-red-300 text-sm ml-2 flex-1">
                    Account temporarily locked. Please wait{" "}
                    {formatTime(lockoutTime)} before trying again.
                  </Text>
                </View>
              </View>
            )}

            {/* Demo Hint */}
            {!isLocked && (
              <View className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6">
                <View className="flex-row items-center">
                  <Ionicons
                    name="information-circle"
                    size={20}
                    color="#3B82F6"
                  />
                  <Text className="text-blue-700 dark:text-blue-300 text-sm ml-2 flex-1">
                    Demo: Use code <Text className="font-bold">1234</Text> to
                    verify
                  </Text>
                </View>
              </View>
            )}
          </View>

          {/* Verify Button */}
          <Pressable
            onPress={handleVerify}
            disabled={isLoading || !isOtpComplete || isLocked}
            className={`rounded-xl py-4 items-center mb-6 ${
              isLoading || !isOtpComplete || isLocked
                ? "bg-gray-300"
                : "bg-primary-600"
            }`}
          >
            {isLoading ? (
              <View className="flex-row items-center">
                <Ionicons name="reload" size={20} color="#6B7280" />
                <Text className="text-gray-600 font-semibold ml-2">
                  Verifying...
                </Text>
              </View>
            ) : (
              <Text className="text-white font-semibold text-lg">
                Verify Code
              </Text>
            )}
          </Pressable>

          {/* Resend Code */}
          <View className="items-center">
            <Text className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              Didn&apos;t receive the code?
            </Text>
            <Pressable
              onPress={handleResend}
              disabled={resendTimer > 0 || isLoading || isLocked}
              className={`${resendTimer > 0 || isLoading || isLocked ? "opacity-50" : ""}`}
            >
              <Text
                className={`text-sm font-medium ${
                  resendTimer > 0 || isLoading || isLocked
                    ? "text-gray-400"
                    : "text-primary-600 dark:text-primary-400"
                }`}
              >
                {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend Code"}
              </Text>
            </Pressable>
          </View>

          {/* Security Info */}
          <View className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <View className="flex-row items-center justify-center">
              <Ionicons name="shield-checkmark" size={16} color="#10B981" />
              <Text className="text-green-600 dark:text-green-400 text-xs ml-2">
                Secure verification process
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View className="px-6 pb-8">
        <Text className="text-gray-500 dark:text-gray-400 text-center text-xs">
          By verifying your account, you agree to our Terms of Service and
          Privacy Policy
        </Text>
      </View>
    </View>
  );
}
