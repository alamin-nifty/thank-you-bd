import { router } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    // Wait for navigation to be ready before redirecting
    const timeout = setTimeout(() => {
      router.replace("/splash");
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  return null;
}
