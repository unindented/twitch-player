import { useTranslation } from "@twitch-player/i18n";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { ScrollView } from "react-native";
import Heading from "../../components/Heading";
import AllCategories from "../../components/AllCategories";

const Categories = memo(({ testID = "categories-page" }) => {
  const [t] = useTranslation();

  return (
    <ScrollView testID={testID}>
      <Heading level="2">{t("pages.categories.mainHeading")}</Heading>
      <AllCategories />
    </ScrollView>
  );
});

Categories.propTypes = {
  testID: PropTypes.string,
};

export default Categories;
