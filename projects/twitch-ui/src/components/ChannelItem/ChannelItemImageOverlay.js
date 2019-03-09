import { useTranslation } from "@twitch-player/i18n";
import { useTheme } from "@twitch-player/themes/dist/hooks";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import LiveIndicator from "../LiveIndicator";
import Text from "../Text";

const ChannelItemImageOverlay = ({
  viewersCount,
  testID = "channel-item-image-overlay",
}) => {
  const { t } = useTranslation();
  const [{ colors, layout, typography }] = useTheme();

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
    <View style={styles.root} testID={testID}>
      <LiveIndicator />
      <Text numberOfLines={1} style={textStyle}>
        {t("components.item.viewersCount", {
          count: viewersCount,
        })}
      </Text>
    </View>
  );
};

ChannelItemImageOverlay.propTypes = {
  viewersCount: PropTypes.number.isRequired,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default memo(ChannelItemImageOverlay);
