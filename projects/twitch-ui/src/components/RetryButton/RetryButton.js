import { useTranslation } from "@twitch-player/i18n";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { Button, StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks";

const RetryButton = ({ onPress, testID = "retry-button" }) => {
  const { t } = useTranslation();
  const { colors, layout } = useTheme();

  const rootStyle = [
    styles.root,
    {
      backgroundColor: colors.itemBackground,
      marginBottom: layout.gapLarge,
      padding: layout.gapLarge,
    },
  ];

  // We don't want the callback to receive any arguments, so that we can pass
  // things like Apollo's `refetch` straight through.
  const onPressWithoutArgs = () => {
    onPress();
  };

  return (
    <View style={rootStyle} testID={testID}>
      <Button
        color={colors.link}
        title={t("errors.failedToLoad")}
        onPress={onPressWithoutArgs}
      />
    </View>
  );
};

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

export default memo(RetryButton);
