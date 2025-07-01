import React from "react";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { getCurrentLanguage, setLanguage } from "../constants/Localization";
import { TouchTargetConfigs } from "../constants/TouchTargets";

interface LanguageSwitcherProps {
  style?: any;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  style,
}) => {
  const { t } = useTranslation();
  const currentLanguage = getCurrentLanguage();

  const handleLanguageChange = (language: "en" | "bn") => {
    setLanguage(language);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{t("settings.language")}:</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            TouchTargetConfigs.button.small,
            styles.button,
            currentLanguage === "en" && styles.activeButton,
          ]}
          onPress={() => handleLanguageChange("en")}
          accessible={true}
          accessibilityLabel={t("settings.english")}
          accessibilityRole="button"
        >
          <Text
            style={[
              styles.buttonText,
              currentLanguage === "en" && styles.activeButtonText,
            ]}
          >
            {t("settings.english")}
          </Text>
        </Pressable>

        <Pressable
          style={[
            TouchTargetConfigs.button.small,
            styles.button,
            currentLanguage === "bn" && styles.activeButton,
          ]}
          onPress={() => handleLanguageChange("bn")}
          accessible={true}
          accessibilityLabel={t("settings.bengali")}
          accessibilityRole="button"
        >
          <Text
            style={[
              styles.buttonText,
              currentLanguage === "bn" && styles.activeButtonText,
            ]}
          >
            {t("settings.bengali")}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
    marginRight: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    backgroundColor: "#F2F2F7",
  },
  activeButton: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#687076",
  },
  activeButtonText: {
    color: "#FFFFFF",
  },
});

export default LanguageSwitcher;
