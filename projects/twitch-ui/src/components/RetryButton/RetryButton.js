import { useTranslation } from "@twitch-player/i18n";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { Button, StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks";

const RetryButton = memo(({ onPress, testID = "retry-button" }) => {
  const [t] = useTranslation();
  const { colors, layout } = useTheme();

  const rootStyle = [
    styles.root,
    {
      backgroundColor: colors.itemBackground,
      marginBottom: layout.gapLarge,
      padding: layout.gapLarge,
    },
  ];

  return (
    <View style={rootStyle} testID={testID}>
      <Button
        color={colors.link}
        title={t("errors.failedToLoad")}
        onPress={onPress}
      />
    </View>
  );
});

RetryButton.propTypes = {
  testID: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default RetryButton;
