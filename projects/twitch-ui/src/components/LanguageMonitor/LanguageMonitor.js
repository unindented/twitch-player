import { memo } from "react";
import { I18nManager } from "react-native";
import { useLanguage } from "../../hooks";

const LanguageMonitor = () => {
  useLanguage((lng, dir) => {
    document.documentElement.setAttribute("lang", lng);
    I18nManager.forceRTL(dir === "rtl");
  });

  return null;
};

export default memo(LanguageMonitor);
