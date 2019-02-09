import { useTranslation } from "@twitch-player/i18n";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { ScrollView } from "react-native";
import Heading from "../../components/Heading";
import AllChannels from "../../components/AllChannels";

const Channels = ({ testID = "channels-page" }) => {
  const { t } = useTranslation();

  return (
    <ScrollView testID={testID}>
      <Heading level="2">{t("pages.channels.mainHeading")}</Heading>
      <AllChannels />
    </ScrollView>
  );
};

Channels.propTypes = {
  testID: PropTypes.string,
};

export default memo(Channels);
