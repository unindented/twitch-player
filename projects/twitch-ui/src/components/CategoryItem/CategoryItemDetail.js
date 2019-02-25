import { useTranslation } from "@twitch-player/i18n";
import { useTheme } from "@twitch-player/themes/dist/hooks";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import Text from "../Text";

const CategoryItemDetail = ({
  name,
  viewersCount,
  width: boxArtWidth,
  isHighlighted,
  testID = "category-item-detail",
}) => {
  const { t } = useTranslation();
  const [{ colors, layout, typography }] = useTheme();

  const rootStyle = {
    paddingHorizontal: layout.gapMedium,
    paddingVertical: layout.gapSmall,
    width: boxArtWidth,
  };

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
        {name}
      </Text>
      <Text numberOfLines={1} style={secondaryTextStyle}>
        {t("components.item.viewersCount", {
          count: viewersCount,
        })}
      </Text>
    </View>
  );
};

CategoryItemDetail.propTypes = {
  name: PropTypes.string.isRequired,
  viewersCount: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  isHighlighted: PropTypes.bool,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  primaryText: {
    fontWeight: "bold",
  },
});

export default memo(CategoryItemDetail);
