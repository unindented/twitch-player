import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks";

const Main = ({ children, testID = "main" }) => {
  const theme = useTheme();

  return (
    <View
      accessibilityRole="main"
      style={[
        styles.root,
        {
          backgroundColor: theme.colors.bodyBackground,
          padding: theme.layout.gapBig,
        },
      ]}
      testID={testID}
    >
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
