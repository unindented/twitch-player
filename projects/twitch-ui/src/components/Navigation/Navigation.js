import { useTranslation } from "@twitch-player/i18n";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { useLayout, useTheme } from "../../hooks";
import NavigationIcon from "./NavigationIcon";

const homeIcon = require("@twitch-player/assets/dist/ui/icons/home.svg");
const channelsIcon = require("@twitch-player/assets/dist/ui/icons/channels.svg");
const categoriesIcon = require("@twitch-player/assets/dist/ui/icons/categories.svg");
const searchIcon = require("@twitch-player/assets/dist/ui/icons/search.svg");
const settingsIcon = require("@twitch-player/assets/dist/ui/icons/settings.svg");

const layoutQuery = {
  horizontal: {
    minWidth: 301,
  },
  vertical: {
    maxWidth: 300,
  },
};

const Navigation = memo(({ testID = "navigation" }) => {
  const [t] = useTranslation();
  const [layout, updateLayout] = useLayout(layoutQuery);
  const { colors } = useTheme();

  const rootStyle = [
    styles.root,
    styles[layout || "horizontal"],
    {
      backgroundColor: colors.navBackground,
    },
  ];

  return (
    <View
      accessibilityRole="navigation"
      style={rootStyle}
      testID={testID}
      onLayout={updateLayout}
    >
      {layout && (
        <>
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
        </>
      )}
    </View>
  );
});

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

export default Navigation;
