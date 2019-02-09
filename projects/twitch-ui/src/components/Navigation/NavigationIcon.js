import PropTypes from "prop-types";
import React, { memo } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks";
import Hoverable from "../Hoverable";
import InternalTouchableLink from "../InternalTouchableLink";

const NavigationIcon = ({
  href,
  source,
  accessibilityLabel,
  testID = "navigation-icon",
}) => {
  const { colors, layout } = useTheme();

  const imageSize = layout.navSize;
  const imageStyle = {
    height: imageSize,
    margin: layout.gapSmall,
    width: imageSize,
  };

  return (
    <Hoverable>
      {isHover => {
        const wrapper = [
          styles.wrapper,
          {
            backgroundColor: isHover
              ? colors.navBackgroundHover
              : "transparent",
            margin: layout.gapSmall,
          },
        ];

        return (
          <InternalTouchableLink href={href} testID={testID}>
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
    </Hoverable>
  );
};

NavigationIcon.propTypes = {
  href: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  accessibilityLabel: PropTypes.string.isRequired,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: "50%",
  },
});

export default memo(NavigationIcon);
