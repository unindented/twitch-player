import { useTheme } from "@twitch-player/themes/dist/hooks";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { Image, StyleSheet, View } from "react-native";
import Highlightable from "../Highlightable";
import InternalTouchableLink from "../InternalTouchableLink";

const NavigationIcon = ({
  href,
  source,
  accessibilityLabel,
  testID = "navigation-icon",
}) => {
  const [{ colors, layout }] = useTheme();

  const imageSize = layout.navSize;
  const imageStyle = {
    height: imageSize,
    margin: layout.gapMedium,
    width: imageSize,
  };

  return (
    <Highlightable>
      {isHighlighted => {
        const wrapper = {
          backgroundColor: isHighlighted
            ? colors.navBackgroundHover
            : "transparent",
        };

        return (
          <InternalTouchableLink
            href={href}
            style={styles.root}
            testID={testID}
          >
            <View style={wrapper} testID={`${testID}-wrapper`}>
              <Image
                source={{ uri: source }}
                accessibilityLabel={accessibilityLabel}
                style={imageStyle}
                testID={`${testID}-image`}
              />
            </View>
          </InternalTouchableLink>
        );
      }}
    </Highlightable>
  );
};

NavigationIcon.propTypes = {
  href: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  accessibilityLabel: PropTypes.string.isRequired,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    outline: "none",
  },
});

export default memo(NavigationIcon);
