import { useTranslation } from "@twitch-player/i18n";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks";
import LiveIndicator from "../LiveIndicator";
import Text from "../Text";

const ChannelItemOverlay = ({
  viewersCount,
  style = [],
  testID = "channel-item-image-overlay",
}) => {
  const { t } = useTranslation();
  const { colors, layout, typography } = useTheme();

  const rootStyle = [styles.root].concat(style);
  const textStyle = [
    styles.text,
    {
      color: colors.liveIndicator,
      backgroundImage: `linear-gradient(transparent, ${
        colors.liveIndicatorBackground
      })`,
      paddingBottom: layout.gapSmall,
      paddingHorizontal: layout.gapMedium,
      paddingTop: layout.gapMedium,
      fontSize: typography.sizeTertiary,
    },
  ];

  return (
    <View style={rootStyle} testID={testID}>
      <LiveIndicator />
      <Text numberOfLines={1} style={textStyle}>
        {t("components.item.viewersCount", {
          count: viewersCount,
        })}
      </Text>
    </View>
  );
};

ChannelItemOverlay.propTypes = {
  viewersCount: PropTypes.number.isRequired,
  style: PropTypes.any,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default memo(ChannelItemOverlay);
