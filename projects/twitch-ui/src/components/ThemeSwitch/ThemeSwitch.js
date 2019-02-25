import { useTranslation } from "@twitch-player/i18n";
import { useTheme } from "@twitch-player/themes/dist/hooks";
import {
  dark as darkTheme,
  light as lightTheme,
} from "@twitch-player/themes/dist/themes";
import PropTypes from "prop-types";
import React, { memo } from "react";
import Switch from "../Switch";
import Text from "../Text";

const ThemeSwitch = ({ testID = "theme-switch" }) => {
  const { t } = useTranslation();
  const [theme, setTheme] = useTheme();

  const isDarkTheme = theme === darkTheme;
  const toggleDarkTheme = value => setTheme(value ? darkTheme : lightTheme);

  const textStyle = {
    color: theme.colors.bodyText,
    fontSize: theme.typography.sizeSecondary,
  };

  return (
    <Text accessibilityRole="label" testID={testID}>
      <Text style={textStyle}>{t("pages.settings.themeHeading")}</Text>
      <Switch value={isDarkTheme} onValueChange={toggleDarkTheme} />
    </Text>
  );
};

ThemeSwitch.propTypes = {
  testID: PropTypes.string,
};

export default memo(ThemeSwitch);
