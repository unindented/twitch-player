import { useTranslation } from "@twitch-player/i18n";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { ScrollView } from "react-native";
import FeaturedStreams from "../../components/FeaturedStreams";
import Heading from "../../components/Heading";
import TopGames from "../../components/TopGames";
import TopStreams from "../../components/TopStreams";
import { useTheme } from "../../hooks";

const Home = memo(({ testID = "home-page" }) => {
  const [t] = useTranslation();
  const { layout } = useTheme();

  const rootStyle = {
    padding: layout.gapLarge,
  };

  return (
    <ScrollView style={rootStyle} testID={testID}>
      <Heading level="2">{t("pages.home.featuredStreamsHeading")}</Heading>
      <FeaturedStreams />

      <Heading level="2">{t("pages.home.topGamesHeading")}</Heading>
      <TopGames />

      <Heading level="2">{t("pages.home.topStreamsHeading")}</Heading>
      <TopStreams />

      <Heading level="2">{t("pages.home.topPS4StreamsHeading")}</Heading>
      <TopStreams platformType="ps4" />

      <Heading level="2">{t("pages.home.topXboxOneStreamsHeading")}</Heading>
      <TopStreams platformType="xbox" />
    </ScrollView>
  );
});

Home.propTypes = {
  testID: PropTypes.string,
};

export default Home;
