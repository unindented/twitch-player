import { useTheme } from "@twitch-player/themes/dist/hooks";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { Image, StyleSheet } from "react-native";
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
        const activeStyle = {
          backgroundColor: colors.navBackgroundHover,
        };
        const rootStyle = [
          styles.root,
          isHighlighted ? activeStyle : undefined,
        ];

        return (
          <InternalTouchableLink
            href={href}
            style={rootStyle}
            activeStyle={activeStyle}
            testID={testID}
          >
            <Image
              source={{ uri: source }}
              accessibilityLabel={accessibilityLabel}
              style={imageStyle}
              testID={`${testID}-image`}
            />
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
    display: "block",
    outlineStyle: "none",
    overflow: "hidden",
  },
});

export default memo(NavigationIcon);
