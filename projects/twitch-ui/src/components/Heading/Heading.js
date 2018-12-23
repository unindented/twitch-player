import PropTypes from "prop-types";
import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "../../hooks";
import Text from "../Text";

const Heading = ({ level, style = [], children, testID = "heading" }) => {
  const { colors, layout, typography } = useTheme();

  const rootStyle = [
    styles.root,
    {
      color: colors.heading,
      fontSize:
        level === "1"
          ? typography.sizePrimary
          : level === "2"
          ? typography.sizeSecondary
          : typography.sizeTertiary,
      marginBottom: layout.gapMedium,
    },
  ].concat(style);

  return (
    <Text
      accessibilityRole="heading"
      aria-level={level}
      style={rootStyle}
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
