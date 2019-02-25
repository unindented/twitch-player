import { useTranslation } from "@twitch-player/i18n";
import { useTheme } from "@twitch-player/themes/dist/hooks";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { useDimensions } from "../../hooks";
import { getMatchingQuerySize } from "../../utils";
import NavigationIcon from "./NavigationIcon";

const homeIcon = require("@twitch-player/assets/dist/ui/icons/home.svg");
const channelsIcon = require("@twitch-player/assets/dist/ui/icons/channels.svg");
const categoriesIcon = require("@twitch-player/assets/dist/ui/icons/categories.svg");
const searchIcon = require("@twitch-player/assets/dist/ui/icons/search.svg");
const settingsIcon = require("@twitch-player/assets/dist/ui/icons/settings.svg");

const layoutQuery = {
  horizontal: {
    maxWidth: 480,
  },
  vertical: {
    minWidth: 481,
  },
};

const Navigation = ({ testID = "navigation" }) => {
  const { t } = useTranslation();
  const [{ colors }] = useTheme();
  const [dimensions] = useDimensions("page");

  const layout = getMatchingQuerySize(layoutQuery, dimensions);

  const rootStyle = [
    styles.root,
    styles[layout],
    {
      backgroundColor: colors.navBackground,
    },
  ];

  return (
    <View accessibilityRole="navigation" style={rootStyle} testID={testID}>
      <View style={styles[layout]}>
        <NavigationIcon
          href="/"
          source={homeIcon}
          accessibilityLabel={t("components.navigation.homeLabel")}
          testID={`${testID}-home-icon`}
        />
        <NavigationIcon
          href="/channels"
          source={channelsIcon}
          accessibilityLabel={t("components.navigation.channelsLabel")}
          testID={`${testID}-channels-icon`}
        />
        <NavigationIcon
          href="/categories"
          source={categoriesIcon}
          accessibilityLabel={t("components.navigation.categoriesLabel")}
          testID={`${testID}-categories-icon`}
        />
        <NavigationIcon
          href="/search"
          source={searchIcon}
          accessibilityLabel={t("components.navigation.searchLabel")}
          testID={`${testID}-search-icon`}
        />
      </View>
      <View style={styles[layout]}>
        <NavigationIcon
          href="/settings"
          source={settingsIcon}
          accessibilityLabel={t("components.navigation.settingsLabel")}
          testID={`${testID}-settings-icon`}
        />
      </View>
    </View>
  );
};

Navigation.propTypes = {
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    justifyContent: "space-between",
  },
  horizontal: {
    flexDirection: "row",
  },
  vertical: {
    flexDirection: "column",
  },
});

export default memo(Navigation);
