import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRTL } from "../../utils/rtlUtils";

interface LanguageSwitcherProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const { t } = useTranslation();
  const { isRTL } = useRTL();

  const languages = [
    { code: "en", name: "English", nativeName: "English" },
    { code: "bn", name: "বাংলা", nativeName: "বাংলা" },
  ];

  return (
    <View
      style={[
        styles.container,
        { flexDirection: isRTL ? "row-reverse" : "row" },
      ]}
    >
      <Text style={[styles.label, { textAlign: isRTL ? "right" : "left" }]}>
        {t("common.language")}:
      </Text>
      <View
        style={[
          styles.languageContainer,
          { flexDirection: isRTL ? "row-reverse" : "row" },
        ]}
      >
        {languages.map((lang) => (
          <TouchableOpacity
            key={lang.code}
            style={[
              styles.languageButton,
              currentLanguage === lang.code && styles.activeLanguageButton,
              { marginHorizontal: isRTL ? 4 : 4 },
            ]}
            onPress={() => onLanguageChange(lang.code)}
            accessible={true}
            accessibilityLabel={t("common.switchToLanguage", {
              language: lang.name,
            })}
            accessibilityRole="button"
            accessibilityState={{ selected: currentLanguage === lang.code }}
          >
            <Text
              style={[
                styles.languageText,
                currentLanguage === lang.code && styles.activeLanguageText,
                { textAlign: isRTL ? "right" : "left" },
              ]}
            >
              {lang.nativeName}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    marginRight: 12,
  },
  languageContainer: {
    flex: 1,
  },
  languageButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginHorizontal: 4,
  },
  activeLanguageButton: {
    backgroundColor: "#3b82f6",
    borderColor: "#3b82f6",
  },
  languageText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6b7280",
  },
  activeLanguageText: {
    color: "#ffffff",
  },
});
