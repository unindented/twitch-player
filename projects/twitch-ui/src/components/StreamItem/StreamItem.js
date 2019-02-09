import { StreamType } from "@twitch-player/data";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks";
import { processImageTemplate } from "../../utils";
import Hoverable from "../Hoverable";
import InternalTouchableLink from "../InternalTouchableLink";
import Text from "../Text";
import StreamItemOverlay from "./StreamItemOverlay";

const StreamItem = ({
  item: {
    broadcaster: {
      login: broadcasterLogin,
      displayName: broadcasterName,
      broadcastSettings: { title },
    },
    game,
    previewImageURL,
    viewersCount,
  },
  width: previewImageWidth,
  height: previewImageHeight,
  testID = "stream-item",
}) => {
  const { colors, layout, typography } = useTheme();

  const imageURI = processImageTemplate(
    previewImageURL,
    layout.maxStreamWidth,
    layout.maxStreamHeight
  );

  const gameName = game ? game.name : " ";

  const imageStyle = {
    backgroundColor: colors.itemBackground,
    height: previewImageHeight,
    width: previewImageWidth,
  };
  const detailStyle = {
    paddingHorizontal: layout.gapMedium,
    paddingVertical: layout.gapSmall,
    width: previewImageWidth,
  };

  return (
    <Hoverable>
      {isHover => {
        const wrapperStyle = {
          backgroundColor: isHover ? colors.itemBackgroundHover : "transparent",
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
          <InternalTouchableLink
            href={`/channels/${broadcasterLogin}`}
            testID={testID}
          >
            <View style={wrapperStyle} testID={`${testID}-wrapper`}>
              <ImageBackground
                source={{ uri: imageURI }}
                accessibilityLabel={title}
                style={imageStyle}
                testID={`${testID}-image`}
              >
                <StreamItemOverlay viewersCount={viewersCount} />
              </ImageBackground>
              <View style={detailStyle} testID={`${testID}-detail`}>
                <Text numberOfLines={1} style={detailPrimaryStyle}>
                  {title}
                </Text>
                <Text numberOfLines={1} style={detailSecondaryStyle}>
                  {broadcasterName}
                </Text>
                <Text numberOfLines={1} style={detailSecondaryStyle}>
                  {gameName}
                </Text>
              </View>
            </View>
          </InternalTouchableLink>
        );
      }}
    </Hoverable>
  );
};

StreamItem.propTypes = {
  item: StreamType.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  detailPrimary: {
    fontWeight: "bold",
  },
});

export default memo(StreamItem);
