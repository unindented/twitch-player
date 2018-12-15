import { useTranslation } from "@twitch-player/i18n";
import React, { memo } from "react";
import { View } from "react-native";
import Heading from "../../components/Heading";

const Categories = memo(({ testID = "categories-page" }) => {
  const [t] = useTranslation();

  return (
    <View testID={testID}>
      <Heading level="2">{t("pages.categories.mainHeading")}</Heading>
    </View>
  );
});

export default Categories;
