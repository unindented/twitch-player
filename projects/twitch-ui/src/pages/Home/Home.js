import { useTranslation } from "@twitch-player/i18n";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { ScrollView } from "react-native";
import FeaturedChannels from "../../components/FeaturedChannels";
import TopCategories from "../../components/TopCategories";
import TopChannels from "../../components/TopChannels";

const Home = ({ testID = "home-page" }) => {
  const { t } = useTranslation();

  return (
    <ScrollView testID={testID}>
      <FeaturedChannels heading={t("pages.home.featuredChannelsHeading")} />
      <TopCategories heading={t("pages.home.topCategoriesHeading")} />
      <TopChannels heading={t("pages.home.topChannelsHeading")} />
      <TopChannels
        platformType="ps4"
        heading={t("pages.home.topPS4ChannelsHeading")}
      />
      <TopChannels
        platformType="xbox"
        heading={t("pages.home.topXboxOneChannelsHeading")}
      />
    </ScrollView>
  );
};

Home.propTypes = {
  testID: PropTypes.string,
};

export default memo(Home);
