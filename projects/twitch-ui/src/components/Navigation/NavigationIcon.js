import PropTypes from "prop-types";
import React, { memo } from "react";
import { Image } from "react-native";
import { useTheme } from "../../hooks";

const NavigationIcon = memo(
  ({ source, accessibilityLabel, testID = "navigation-icon" }) => {
    const theme = useTheme();
    const size = theme.layout.navSize;
    const style = { width: size, height: size, margin: size / 4 };

    return (
      <Image
        source={{ uri: source }}
        accessibilityLabel={accessibilityLabel}
        style={style}
        testID={testID}
      />
    );
  }
);

NavigationIcon.propTypes = {
  source: PropTypes.string.isRequired,
  accessibilityLabel: PropTypes.string.isRequired,
  testID: PropTypes.string,
};

export default NavigationIcon;
