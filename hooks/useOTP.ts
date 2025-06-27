import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";

interface OTPState {
  isLoading: boolean;
  isVerified: boolean;
  resendTimer: number;
  attempts: number;
  maxAttempts: number;
  lockoutTime: number;
  isLocked: boolean;
}

interface OTPVerificationResult {
  success: boolean;
  error?: string;
  user?: any;
}

export const useOTP = () => {
  const [otpState, setOtpState] = useState<OTPState>({
    isLoading: false,
    isVerified: false,
    resendTimer: 0,
    attempts: 0,
    maxAttempts: 5,
    lockoutTime: 0,
    isLocked: false,
  });

  // Load saved attempts from storage
  useEffect(() => {
    loadAttemptsFromStorage();
  }, []);

  // Handle resend timer
  useEffect(() => {
    if (otpState.resendTimer > 0) {
      const timer = setTimeout(() => {
        setOtpState((prev) => ({ ...prev, resendTimer: prev.resendTimer - 1 }));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [otpState.resendTimer]);

  // Handle lockout timer
  useEffect(() => {
    if (otpState.lockoutTime > 0) {
      const timer = setTimeout(() => {
        setOtpState((prev) => ({
          ...prev,
          lockoutTime: prev.lockoutTime - 1,
          isLocked: prev.lockoutTime - 1 > 0,
        }));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [otpState.lockoutTime]);

  const loadAttemptsFromStorage = async () => {
    try {
      const savedAttempts = await AsyncStorage.getItem("otp_attempts");
      const savedLockoutTime = await AsyncStorage.getItem("otp_lockout_time");

      if (savedAttempts) {
        const attempts = parseInt(savedAttempts);
        setOtpState((prev) => ({ ...prev, attempts }));
      }

      if (savedLockoutTime) {
        const lockoutTime = parseInt(savedLockoutTime);
        const now = Date.now();
        if (lockoutTime > now) {
          const remainingTime = Math.ceil((lockoutTime - now) / 1000);
          setOtpState((prev) => ({
            ...prev,
            lockoutTime: remainingTime,
            isLocked: remainingTime > 0,
          }));
        }
      }
    } catch (error) {
      console.error("Error loading OTP attempts:", error);
    }
  };

  const saveAttemptsToStorage = async (attempts: number) => {
    try {
      await AsyncStorage.setItem("otp_attempts", attempts.toString());
    } catch (error) {
      console.error("Error saving OTP attempts:", error);
    }
  };

  const saveLockoutTimeToStorage = async (lockoutTime: number) => {
    try {
      await AsyncStorage.setItem("otp_lockout_time", lockoutTime.toString());
    } catch (error) {
      console.error("Error saving lockout time:", error);
    }
  };

  const clearOTPStorage = async () => {
    try {
      await AsyncStorage.multiRemove(["otp_attempts", "otp_lockout_time"]);
    } catch (error) {
      console.error("Error clearing OTP storage:", error);
    }
  };

  const verifyOTP = useCallback(
    async (otp: string): Promise<OTPVerificationResult> => {
      // Check if user is locked out
      if (otpState.isLocked) {
        return {
          success: false,
          error: `Account temporarily locked. Please wait ${otpState.lockoutTime} seconds before trying again.`,
        };
      }

      // Check if max attempts reached
      if (otpState.attempts >= otpState.maxAttempts) {
        const lockoutDuration = 300; // 5 minutes
        const lockoutEndTime = Date.now() + lockoutDuration * 1000;

        setOtpState((prev) => ({
          ...prev,
          isLocked: true,
          lockoutTime: lockoutDuration,
        }));

        await saveLockoutTimeToStorage(lockoutEndTime);

        return {
          success: false,
          error: "Too many failed attempts. Account locked for 5 minutes.",
        };
      }

      setOtpState((prev) => ({ ...prev, isLoading: true }));

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // For demo purposes, accept "1234" as valid OTP
        if (otp === "1234") {
          setOtpState((prev) => ({
            ...prev,
            isLoading: false,
            isVerified: true,
            attempts: 0,
          }));

          await clearOTPStorage();

          // Mock user data
          const mockUser = {
            id: "user_" + Date.now(),
            name: "Verified User",
            email: "user@example.com",
            isVerified: true,
          };

          return {
            success: true,
            user: mockUser,
          };
        } else {
          const newAttempts = otpState.attempts + 1;
          setOtpState((prev) => ({
            ...prev,
            isLoading: false,
            attempts: newAttempts,
          }));

          await saveAttemptsToStorage(newAttempts);

          const remainingAttempts = otpState.maxAttempts - newAttempts;

          return {
            success: false,
            error: `Invalid verification code. ${remainingAttempts} attempts remaining.`,
          };
        }
      } catch (error) {
        setOtpState((prev) => ({ ...prev, isLoading: false }));
        return {
          success: false,
          error: "Network error. Please try again.",
        };
      }
    },
    [
      otpState.attempts,
      otpState.maxAttempts,
      otpState.isLocked,
      otpState.lockoutTime,
    ]
  );

  const resendOTP = useCallback(async (): Promise<{
    success: boolean;
    error?: string;
  }> => {
    if (otpState.resendTimer > 0) {
      return {
        success: false,
        error: `Please wait ${otpState.resendTimer} seconds before requesting a new code.`,
      };
    }

    setOtpState((prev) => ({ ...prev, isLoading: true }));

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setOtpState((prev) => ({
        ...prev,
        isLoading: false,
        resendTimer: 30, // 30 seconds cooldown
      }));

      Alert.alert(
        "Code Sent",
        "A new verification code has been sent to your phone/email.",
        [{ text: "OK" }]
      );

      return { success: true };
    } catch (error) {
      setOtpState((prev) => ({ ...prev, isLoading: false }));
      return {
        success: false,
        error: "Failed to send verification code. Please try again.",
      };
    }
  }, [otpState.resendTimer]);

  const resetOTPState = useCallback(() => {
    setOtpState({
      isLoading: false,
      isVerified: false,
      resendTimer: 0,
      attempts: 0,
      maxAttempts: 5,
      lockoutTime: 0,
      isLocked: false,
    });
  }, []);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return {
    ...otpState,
    verifyOTP,
    resendOTP,
    resetOTPState,
    formatTime,
  };
};
