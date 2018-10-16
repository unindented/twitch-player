import PropTypes from "prop-types";
import React, { memo } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks";

const Spinner = memo(({ testID = "spinner" }) => {
  const theme = useTheme();

  return (
    <View style={styles.root} testID={testID}>
      <ActivityIndicator
        color={theme.colors.spinner}
        size={theme.layout.spinnerSize}
      />
    </View>
  );
});

Spinner.propTypes = {
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Spinner;
