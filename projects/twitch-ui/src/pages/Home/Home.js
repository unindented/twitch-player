import { useTranslation } from "@twitch-player/i18n";
import React, { memo } from "react";
import { View } from "react-native";
import Heading from "../../components/Heading";

const Home = memo(({ testID = "home-page" }) => {
  const [t] = useTranslation();

  return (
    <View testID={testID}>
      <Heading level="2">{t("pages.home.mainHeading")}</Heading>
    </View>
  );
});

export default Home;
