import { useTranslation } from "@twitch-player/i18n";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { ScrollView } from "react-native";
import FeaturedChannels from "../../components/FeaturedChannels";
import Heading from "../../components/Heading";
import TopCategories from "../../components/TopCategories";
import TopChannels from "../../components/TopChannels";

const Home = ({ testID = "home-page" }) => {
  const { t } = useTranslation();

  return (
    <ScrollView testID={testID}>
      <Heading level="2">{t("pages.home.featuredChannelsHeading")}</Heading>
      <FeaturedChannels />

      <Heading level="2">{t("pages.home.topCategoriesHeading")}</Heading>
      <TopCategories />

      <Heading level="2">{t("pages.home.topChannelsHeading")}</Heading>
      <TopChannels />

      <Heading level="2">{t("pages.home.topPS4ChannelsHeading")}</Heading>
      <TopChannels platformType="ps4" />

      <Heading level="2">{t("pages.home.topXboxOneChannelsHeading")}</Heading>
      <TopChannels platformType="xbox" />
    </ScrollView>
  );
};

Home.propTypes = {
  testID: PropTypes.string,
};

export default memo(Home);
