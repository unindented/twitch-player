import { useTheme } from "@twitch-player/themes/dist/hooks";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Spinner = ({ testID = "spinner" }) => {
  const [{ colors, layout }] = useTheme();

  return (
    <View style={styles.root} testID={testID}>
      <ActivityIndicator color={colors.spinner} size={layout.spinnerSize} />
    </View>
  );
};

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

export default memo(Spinner);
