import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks";

const Main = ({ children, testID = "main" }) => {
  const { colors } = useTheme();

  const rootStyle = [
    styles.root,
    {
      backgroundColor: colors.bodyBackground,
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
  },
});

export default Main;
