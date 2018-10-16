import PropTypes from "prop-types";
import React from "react";
import { StyleSheet } from "react-native";
import Text from "../Text";
import { useTheme } from "../../hooks";

const Heading = ({ level, style = [], children, testID = "heading" }) => {
  const { colors, typography } = useTheme();
  const color = colors.heading;
  const fontSize =
    level === "1"
      ? typography.sizePrimary
      : level === "2"
      ? typography.sizeSecondary
      : typography.sizeTertiary;
  const compositeStyle = [styles.root]
    .concat(style)
    .concat({ color, fontSize });

  return (
    <Text
      accessibilityRole="heading"
      aria-level={level}
      style={compositeStyle}
      testID={testID}
    >
      {children}
    </Text>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf(["1", "2", "3"]).isRequired,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  children: PropTypes.node.isRequired,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    fontWeight: "bold",
  },
});

export default Heading;
