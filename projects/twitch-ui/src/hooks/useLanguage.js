import { useTranslation } from "@twitch-player/i18n";
import { useEffect } from "react";

const useLanguage = onLanguageChanged => {
  const { i18n } = useTranslation();

  const handleLanguageChanged = () => {
    const lng = i18n.language;
    const dir = i18n.dir(lng);

    onLanguageChanged(lng, dir);
  };

  useEffect(() => {
    handleLanguageChanged();

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);
};

export default useLanguage;
