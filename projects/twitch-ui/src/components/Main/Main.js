import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks";

const Main = ({ children, testID = "main" }) => {
  const { colors, layout } = useTheme();

  const rootStyle = [
    styles.root,
    {
      backgroundColor: colors.bodyBackground,
      padding: layout.gapLarge,
    },
  ];

  return (
    <View accessibilityRole="main" style={rootStyle} testID={testID}>
      {children}
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
    overflowY: "auto",
  },
});

export default Main;
