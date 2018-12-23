import PropTypes from "prop-types";
import React, { memo } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks";

const Spinner = memo(({ testID = "spinner" }) => {
  const { colors, layout } = useTheme();

  return (
    <View style={styles.root} testID={testID}>
      <ActivityIndicator color={colors.spinner} size={layout.spinnerSize} />
    </View>
  );
});

Spinner.propTypes = {
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default Spinner;
