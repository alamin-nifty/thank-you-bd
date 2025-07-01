import { useTranslation } from "react-i18next";
import { I18nManager } from "react-native";

export const useRTL = () => {
  const { i18n } = useTranslation();

  // Check if current language is RTL
  const isRTL = i18n.language === "bn" || I18nManager.isRTL;

  return {
    isRTL,
    direction: isRTL ? "rtl" : "ltr",
    textAlign: isRTL ? "right" : "left",
    flexDirection: isRTL ? "row-reverse" : "row",
  };
};

export const getRTLStyle = (isRTL: boolean) => ({
  direction: isRTL ? "rtl" : "ltr",
  textAlign: isRTL ? "right" : "left",
  flexDirection: isRTL ? "row-reverse" : "row",
});

export const getRTLMargin = (isRTL: boolean, left: number, right: number) => ({
  marginLeft: isRTL ? right : left,
  marginRight: isRTL ? left : right,
});

export const getRTLPadding = (isRTL: boolean, left: number, right: number) => ({
  paddingLeft: isRTL ? right : left,
  paddingRight: isRTL ? left : right,
});
