import PropTypes from "prop-types";
import React, { memo } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks";
import Text from "../Text";

const ChannelItemDetail = ({
  title,
  broadcasterName,
  broadcasterImageURL,
  categoryName,
  width: previewImageWidth,
  isHover,
  testID = "channel-item-detail",
}) => {
  const { colors, layout, typography } = useTheme();

  const rootStyle = {
    paddingHorizontal: layout.gapMedium,
    paddingTop: layout.gapSmall,
    paddingBottom: layout.gapMedium,
    width: previewImageWidth,
  };

  const broadcasterImageStyle = {
    height: typography.sizeSecondary * 2.375,
    width: typography.sizeSecondary * 2.375,
  };
  const primaryTextStyle = [
    styles.primaryText,
    {
      color: isHover ? colors.itemPrimaryHover : colors.itemPrimary,
      fontSize: typography.sizeSecondary,
    },
  ];
  const secondaryTextStyle = {
    color: isHover ? colors.itemSecondaryHover : colors.itemSecondary,
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
        <View style={{ marginStart: layout.gapSmall }}>
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
  isHover: PropTypes.bool,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  primaryText: {
    fontWeight: "bold",
  },
  secondaryBlock: {
    flexDirection: "row",
  },
});

export default memo(ChannelItemDetail);
