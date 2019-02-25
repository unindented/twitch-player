import { useTheme } from "@twitch-player/themes/dist/hooks";
import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useDimensions } from "../../hooks";

const Main = ({ children, testID = "main" }) => {
  const [{ colors }] = useTheme();
  const [dimensions, updateDimensions] = useDimensions("main");

  const rootStyle = [
    styles.root,
    {
      backgroundColor: colors.bodyBackground,
    },
  ];

  return (
    <View
      accessibilityRole="main"
      style={rootStyle}
      testID={testID}
      onLayout={updateDimensions}
    >
      {dimensions && children}
    </View>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Main;
