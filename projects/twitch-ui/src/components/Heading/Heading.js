import { useTheme } from "@twitch-player/themes/dist/hooks";
import PropTypes from "prop-types";
import React from "react";
import { StyleSheet } from "react-native";
import Text from "../Text";

const Heading = ({ level, children, testID = "heading" }) => {
  const [{ colors, layout, typography }] = useTheme();

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
      marginHorizontal: layout.gapExtraLarge,
      marginTop: layout.gapLarge,
      marginBottom: layout.gapSmall,
    },
  ];

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
  children: PropTypes.node.isRequired,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    fontWeight: "bold",
  },
});

export default Heading;
