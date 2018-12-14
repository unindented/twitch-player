import { useTranslation } from "@twitch-player/i18n";
import React, { memo } from "react";
import { View } from "react-native";
import Heading from "../../components/Heading";
import LanguagePicker from "../../components/LanguagePicker";

const Settings = memo(({ testID = "settings-page" }) => {
  const [t] = useTranslation();

  return (
    <View testID={testID}>
      <Heading level="2">{t("pages.settings.mainHeading")}</Heading>
      <LanguagePicker />
    </View>
  );
});

export default Settings;
