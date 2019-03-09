import { useTranslation } from "@twitch-player/i18n";
import { useTheme } from "@twitch-player/themes/dist/hooks";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import Text from "../Text";

const LiveIndicator = ({ testID = "live-indicator" }) => {
  const { t } = useTranslation();
  const [{ colors, layout, typography }] = useTheme();

  const fontSize = typography.sizeTertiary;
  const dotSize = Math.round(fontSize * 0.75);

  const rootStyle = [
    styles.root,
    {
      backgroundColor: colors.liveIndicatorBackground,
      borderRadius: layout.borderRadiusSmall,
      padding: layout.gapSmall,
      margin: layout.gapMedium,
    },
  ];
  const dotStyle = [
    styles.dot,
    {
      backgroundColor: colors.liveIndicatorDot,
      height: dotSize,
      marginEnd: layout.gapSmall,
      width: dotSize,
    },
  ];
  const textStyle = [
    styles.text,
    {
      color: colors.liveIndicator,
      fontSize,
    },
  ];

  return (
    <View aria-hidden={true} style={rootStyle} testID={testID}>
      <View style={dotStyle} />
      <Text style={textStyle}>{t("components.item.liveIndicator")}</Text>
    </View>
  );
};

LiveIndicator.propTypes = {
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    flexDirection: "row",
    width: "max-content",
  },
  dot: {
    borderRadius: "50%",
    display: "block",
  },
  text: {
    lineHeight: "1",
    textTransform: "uppercase",
  },
});

export default memo(LiveIndicator);
