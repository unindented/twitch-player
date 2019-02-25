import { useTheme } from "@twitch-player/themes/dist/hooks";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { Image, StyleSheet, View } from "react-native";
import Text from "../Text";

const ChannelItemDetail = ({
  title,
  broadcasterName,
  broadcasterImageURL,
  categoryName,
  width: previewImageWidth,
  isHighlighted,
  testID = "channel-item-detail",
}) => {
  const [{ colors, layout, typography }] = useTheme();

  const rootStyle = {
    paddingHorizontal: layout.gapMedium,
    paddingVertical: layout.gapSmall,
    width: previewImageWidth,
  };

  const broadcasterImageHeight =
    Math.floor(typography.sizeTertiary * typography.lineHeight) * 2;
  const broadcasterImageStyle = {
    height: broadcasterImageHeight,
    width: broadcasterImageHeight,
  };
  const broadcasterInfoStyle = [
    styles.broadcasterInfo,
    { marginStart: layout.gapSmall },
  ];
  const primaryTextStyle = [
    styles.primaryText,
    {
      color: isHighlighted ? colors.itemPrimaryHover : colors.itemPrimary,
      fontSize: typography.sizeSecondary,
    },
  ];
  const secondaryTextStyle = {
    color: isHighlighted ? colors.itemSecondaryHover : colors.itemSecondary,
    fontSize: typography.sizeTertiary,
  };

  return (
    <View style={rootStyle} testID={testID}>
      <Text numberOfLines={1} style={primaryTextStyle}>
        {title}
      </Text>
      <View style={styles.secondaryBlock}>
        <Image
          source={{ uri: broadcasterImageURL }}
          accessibilityLabel=""
          style={broadcasterImageStyle}
          testID={`${testID}-broadcaster`}
        />
        <View style={broadcasterInfoStyle}>
          <Text numberOfLines={1} style={secondaryTextStyle}>
            {broadcasterName}
          </Text>
          <Text numberOfLines={1} style={secondaryTextStyle}>
            {categoryName || " "}
          </Text>
        </View>
      </View>
    </View>
  );
};

ChannelItemDetail.propTypes = {
  title: PropTypes.string.isRequired,
  broadcasterName: PropTypes.string.isRequired,
  broadcasterImageURL: PropTypes.string.isRequired,
  categoryName: PropTypes.string,
  width: PropTypes.number.isRequired,
  isHighlighted: PropTypes.bool,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  primaryText: {
    fontWeight: "bold",
  },
  secondaryBlock: {
    flexDirection: "row",
  },
  broadcasterInfo: {
    flex: 1,
  },
});

export default memo(ChannelItemDetail);
