import { useTranslation } from "@twitch-player/i18n";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { View } from "react-native";
import DebugSwitch from "../../components/DebugSwitch";
import Heading from "../../components/Heading";
import LanguagePicker from "../../components/LanguagePicker";
import ThemeSwitch from "../../components/ThemeSwitch";

const Settings = ({ testID = "settings-page" }) => {
  const { t } = useTranslation();

  return (
    <View testID={testID}>
      <Heading level="2">{t("pages.settings.mainHeading")}</Heading>
      <LanguagePicker />
      <ThemeSwitch />
      <DebugSwitch />
    </View>
  );
};

Settings.propTypes = {
  testID: PropTypes.string,
};

export default memo(Settings);
