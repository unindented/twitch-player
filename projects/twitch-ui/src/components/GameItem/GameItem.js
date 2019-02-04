import { GameType } from "@twitch-player/data";
import { useTranslation } from "@twitch-player/i18n";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks";
import { processImageTemplate } from "../../utils";
import Hoverable from "../Hoverable";
import InternalTouchableLink from "../InternalTouchableLink";
import Text from "../Text";

const GameItem = memo(
  ({
    item: { name, boxArtURL, viewersCount },
    width: boxArtWidth,
    height: boxArtHeight,
    testID = "game-item",
  }) => {
    const [t] = useTranslation();
    const { colors, layout, typography } = useTheme();

    const imageURI = processImageTemplate(
      boxArtURL,
      layout.maxGameWidth,
      layout.maxGameHeight
    );

    const imageStyle = {
      backgroundColor: colors.itemBackground,
      height: boxArtHeight,
      width: boxArtWidth,
    };
    const detailStyle = {
      paddingHorizontal: layout.gapMedium,
      paddingVertical: layout.gapSmall,
      width: boxArtWidth,
    };

    return (
      <Hoverable>
        {isHover => {
          const wrapperStyle = {
            backgroundColor: isHover
              ? colors.itemBackgroundHover
              : "transparent",
          };
          const detailPrimaryStyle = [
            styles.detailPrimary,
            {
              color: isHover ? colors.itemPrimaryHover : colors.itemPrimary,
              fontSize: typography.sizeSecondary,
            },
          ];
          const detailSecondaryStyle = {
            color: isHover ? colors.itemSecondaryHover : colors.itemSecondary,
            fontSize: typography.sizeTertiary,
          };

          return (
            <InternalTouchableLink href={`/categories/${name}`} testID={testID}>
              <View style={wrapperStyle} testID={`${testID}-wrapper`}>
                <Image
                  source={{ uri: imageURI }}
                  accessibilityLabel={name}
                  style={imageStyle}
                  testID={`${testID}-image`}
                />
                <View style={detailStyle} testID={`${testID}-detail`}>
                  <Text numberOfLines={1} style={detailPrimaryStyle}>
                    {name}
                  </Text>
                  <Text numberOfLines={1} style={detailSecondaryStyle}>
                    {t("components.item.viewersCount", {
                      count: viewersCount,
                    })}
                  </Text>
                </View>
              </View>
            </InternalTouchableLink>
          );
        }}
      </Hoverable>
    );
  }
);

GameItem.propTypes = {
  item: GameType.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  detailPrimary: {
    fontWeight: "bold",
  },
});

export default GameItem;
