import { useTranslation } from "@twitch-player/i18n";
import React, { memo } from "react";
import { View } from "react-native";
import Heading from "../../components/Heading";

const Live = memo(({ testID = "live-page" }) => {
  const [t] = useTranslation();

  return (
    <View testID={testID}>
      <Heading level="2">{t("pages.live.mainHeading")}</Heading>
    </View>
  );
});

export default Live;
