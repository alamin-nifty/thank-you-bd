import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";

// Complete the auth session for web
WebBrowser.maybeCompleteAuthSession();

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  provider: "google" | "facebook" | "email";
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  });

  // Google OAuth configuration
  const googleConfig = {
    clientId: "YOUR_GOOGLE_CLIENT_ID", // Replace with actual Google Client ID
    scopes: ["openid", "profile", "email"],
    redirectUri: AuthSession.makeRedirectUri({
      scheme: "thankyoubd",
      path: "auth",
    }),
  };

  // Facebook OAuth configuration
  const facebookConfig = {
    clientId: "YOUR_FACEBOOK_APP_ID", // Replace with actual Facebook App ID
    scopes: ["public_profile", "email"],
    redirectUri: AuthSession.makeRedirectUri({
      scheme: "thankyoubd",
      path: "auth",
    }),
  };

  useEffect(() => {
    loadUserFromStorage();
  }, []);

  const loadUserFromStorage = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        const user = JSON.parse(userData);
        setAuthState({
          user,
          isLoading: false,
          isAuthenticated: true,
        });
      } else {
        setAuthState((prev) => ({ ...prev, isLoading: false }));
      }
    } catch (error) {
      console.error("Error loading user from storage:", error);
      setAuthState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const saveUserToStorage = async (user: User) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error("Error saving user to storage:", error);
    }
  };

  const removeUserFromStorage = async () => {
    try {
      await AsyncStorage.removeItem("user");
    } catch (error) {
      console.error("Error removing user from storage:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setAuthState((prev) => ({ ...prev, isLoading: true }));

      const request = new AuthSession.AuthRequest({
        clientId: googleConfig.clientId,
        scopes: googleConfig.scopes,
        redirectUri: googleConfig.redirectUri,
        responseType: AuthSession.ResponseType.Code,
      });

      const result = await request.promptAsync({
        authorizationEndpoint: "https://accounts.google.com/oauth/authorize",
      });

      if (result.type === "success") {
        // In a real app, you would exchange the code for tokens
        // and fetch user data from Google's API
        const mockUser: User = {
          id: "google_" + Date.now(),
          name: "Google User",
          email: "googleuser@example.com",
          avatar: "https://via.placeholder.com/150",
          provider: "google",
        };

        setAuthState({
          user: mockUser,
          isLoading: false,
          isAuthenticated: true,
        });

        await saveUserToStorage(mockUser);
        return { success: true, user: mockUser };
      } else {
        setAuthState((prev) => ({ ...prev, isLoading: false }));
        return { success: false, error: "Google login cancelled" };
      }
    } catch (error) {
      console.error("Google login error:", error);
      setAuthState((prev) => ({ ...prev, isLoading: false }));
      return { success: false, error: "Google login failed" };
    }
  };

  const handleFacebookLogin = async () => {
    try {
      setAuthState((prev) => ({ ...prev, isLoading: true }));

      const request = new AuthSession.AuthRequest({
        clientId: facebookConfig.clientId,
        scopes: facebookConfig.scopes,
        redirectUri: facebookConfig.redirectUri,
        responseType: AuthSession.ResponseType.Code,
      });

      const result = await request.promptAsync({
        authorizationEndpoint: "https://www.facebook.com/v18.0/dialog/oauth",
      });

      if (result.type === "success") {
        // In a real app, you would exchange the code for tokens
        // and fetch user data from Facebook's API
        const mockUser: User = {
          id: "facebook_" + Date.now(),
          name: "Facebook User",
          email: "facebookuser@example.com",
          avatar: "https://via.placeholder.com/150",
          provider: "facebook",
        };

        setAuthState({
          user: mockUser,
          isLoading: false,
          isAuthenticated: true,
        });

        await saveUserToStorage(mockUser);
        return { success: true, user: mockUser };
      } else {
        setAuthState((prev) => ({ ...prev, isLoading: false }));
        return { success: false, error: "Facebook login cancelled" };
      }
    } catch (error) {
      console.error("Facebook login error:", error);
      setAuthState((prev) => ({ ...prev, isLoading: false }));
      return { success: false, error: "Facebook login failed" };
    }
  };

  const handleEmailLogin = async (email: string, password: string) => {
    try {
      setAuthState((prev) => ({ ...prev, isLoading: true }));

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockUser: User = {
        id: "email_" + Date.now(),
        name: "Email User",
        email: email,
        provider: "email",
      };

      setAuthState({
        user: mockUser,
        isLoading: false,
        isAuthenticated: true,
      });

      await saveUserToStorage(mockUser);
      return { success: true, user: mockUser };
    } catch (error) {
      console.error("Email login error:", error);
      setAuthState((prev) => ({ ...prev, isLoading: false }));
      return { success: false, error: "Email login failed" };
    }
  };

  const handleEmailRegister = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      setAuthState((prev) => ({ ...prev, isLoading: true }));

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockUser: User = {
        id: "email_" + Date.now(),
        name: name,
        email: email,
        provider: "email",
      };

      setAuthState({
        user: mockUser,
        isLoading: false,
        isAuthenticated: true,
      });

      await saveUserToStorage(mockUser);
      return { success: true, user: mockUser };
    } catch (error) {
      console.error("Email registration error:", error);
      setAuthState((prev) => ({ ...prev, isLoading: false }));
      return { success: false, error: "Email registration failed" };
    }
  };

  const logout = async () => {
    try {
      setAuthState((prev) => ({ ...prev, isLoading: true }));
      await removeUserFromStorage();
      setAuthState({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    } catch (error) {
      console.error("Logout error:", error);
      setAuthState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const updateUser = async (updates: Partial<User>) => {
    if (authState.user) {
      const updatedUser = { ...authState.user, ...updates };
      setAuthState((prev) => ({ ...prev, user: updatedUser }));
      await saveUserToStorage(updatedUser);
    }
  };

  return {
    ...authState,
    handleGoogleLogin,
    handleFacebookLogin,
    handleEmailLogin,
    handleEmailRegister,
    logout,
    updateUser,
  };
};
