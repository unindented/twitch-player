import { useTranslation } from "@twitch-player/i18n";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { View } from "react-native";
import Heading from "../../components/Heading";

const Search = memo(({ testID = "search-page" }) => {
  const [t] = useTranslation();

  return (
    <View testID={testID}>
      <Heading level="2">{t("pages.search.mainHeading")}</Heading>
    </View>
  );
});

Search.propTypes = {
  testID: PropTypes.string,
};

export default Search;
