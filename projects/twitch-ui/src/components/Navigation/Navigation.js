import PropTypes from "prop-types";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { useLayout, useOverrides, useTheme } from "../../hooks";
import NavigationIcon from "./NavigationIcon";

const homeIcon = require("@twitch-player/assets/dist/ui/icons/home.svg");
const liveIcon = require("@twitch-player/assets/dist/ui/icons/live.svg");
const categoriesIcon = require("@twitch-player/assets/dist/ui/icons/categories.svg");
const searchIcon = require("@twitch-player/assets/dist/ui/icons/search.svg");
const settingsIcon = require("@twitch-player/assets/dist/ui/icons/settings.svg");

const layoutQuery = {
  horizontal: {
    minWidth: 281,
  },
  vertical: {
    maxWidth: 280,
  },
};

const Navigation = memo(({ testID = "navigation" }) => {
  const [layout, updateLayout] = useLayout(layoutQuery);
  const { Link } = useOverrides();
  const theme = useTheme();

  return (
    <View
      accessibilityRole="navigation"
      style={[
        styles.root,
        styles[layout || "horizontal"],
        { backgroundColor: theme.colors.navBackground },
      ]}
      testID={testID}
      onLayout={updateLayout}
    >
      {layout && (
        <>
          <View style={styles[layout]}>
            <Link href="/" testID={`${testID}-home-link`}>
              <NavigationIcon
                source={homeIcon}
                accessibilityLabel="Home"
                testID={`${testID}-home-icon`}
              />
            </Link>
            <Link href="/live" testID={`${testID}-live-link`}>
              <NavigationIcon
                source={liveIcon}
                accessibilityLabel="Live Channels"
                testID={`${testID}-live-icon`}
              />
            </Link>
            <Link href="/categories" testID={`${testID}-categories-link`}>
              <NavigationIcon
                source={categoriesIcon}
                accessibilityLabel="Categories"
                testID={`${testID}-categories-icon`}
              />
            </Link>
            <Link href="/search" testID={`${testID}-search-link`}>
              <NavigationIcon
                source={searchIcon}
                accessibilityLabel="Search"
                testID={`${testID}-search-icon`}
              />
            </Link>
          </View>
          <View style={styles[layout]}>
            <Link href="/settings" testID={`${testID}-settings-link`}>
              <NavigationIcon
                source={settingsIcon}
                accessibilityLabel="Settings"
                testID={`${testID}-settings-icon`}
              />
            </Link>
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
    overflowY: "scroll",
  },
  horizontal: {
    flexDirection: "row",
  },
  vertical: {
    flexDirection: "column",
  },
});

export default Navigation;
