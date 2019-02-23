import { useTranslation } from "@twitch-player/i18n";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks";
import Text from "../Text";

const CategoryItemDetail = ({
  name,
  viewersCount,
  width: boxArtWidth,
  isHighlighted,
  testID = "category-item-detail",
}) => {
  const { t } = useTranslation();
  const { colors, layout, typography } = useTheme();

  const detailStyle = {
    paddingHorizontal: layout.gapMedium,
    paddingVertical: layout.gapSmall,
    width: boxArtWidth,
  };

  const detailPrimaryStyle = [
    styles.detailPrimary,
    {
      color: isHighlighted ? colors.itemPrimaryHover : colors.itemPrimary,
      fontSize: typography.sizeSecondary,
    },
  ];
  const detailSecondaryStyle = {
    color: isHighlighted ? colors.itemSecondaryHover : colors.itemSecondary,
    fontSize: typography.sizeTertiary,
  };

  return (
    <View style={detailStyle} testID={testID}>
      <Text numberOfLines={1} style={detailPrimaryStyle}>
        {name}
      </Text>
      <Text numberOfLines={1} style={detailSecondaryStyle}>
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
  detailPrimary: {
    fontWeight: "bold",
  },
});

export default memo(CategoryItemDetail);
