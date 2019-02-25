import { useTheme } from "@twitch-player/themes/dist/hooks";
import {
  getItemDimensions,
  getGridListItemLayout,
  getGridListItemStyle,
} from "../utils";
import { useDimensions } from ".";

export const useCategoryGrid = itemCount => {
  const [{ layout, typography }] = useTheme();
  const [{ width, height }] = useDimensions("main");

  const options = {
    itemCount,
    containerWidth: width,
    containerHeight: height,
    maxImageWidth: layout.maxCategoryWidth,
    maxImageHeight: layout.maxCategoryHeight,
    detailHeight:
      Math.floor(typography.sizeSecondary * typography.lineHeight) +
      Math.floor(typography.sizeTertiary * typography.lineHeight) +
      layout.gapSmall * 2,
    spaceSides: layout.gapExtraLarge,
    spaceBetween: layout.gapSmall,
    spaceBottom: layout.gapMedium,
  };

  const itemDimensions = getItemDimensions(options);
  const extendedOptions = { ...options, ...itemDimensions };

  const getItemLayout = itemCount && getGridListItemLayout(extendedOptions);
  const renderItemStyle = itemCount && getGridListItemStyle(extendedOptions);

  return {
    ...extendedOptions,
    getItemLayout,
    renderItemStyle,
  };
};

export const useChannelGrid = itemCount => {
  const [{ layout, typography }] = useTheme();
  const [{ width, height }] = useDimensions("main");

  const options = {
    itemCount,
    containerWidth: width,
    containerHeight: height,
    maxImageWidth: layout.maxChannelWidth,
    maxImageHeight: layout.maxChannelHeight,
    detailHeight:
      Math.floor(typography.sizeSecondary * typography.lineHeight) +
      Math.floor(typography.sizeTertiary * typography.lineHeight) +
      Math.floor(typography.sizeTertiary * typography.lineHeight) +
      layout.gapSmall * 2,
    spaceSides: layout.gapExtraLarge,
    spaceBetween: layout.gapSmall,
    spaceBottom: layout.gapMedium,
  };

  const itemDimensions = getItemDimensions(options);
  const extendedOptions = { ...options, ...itemDimensions };

  const getItemLayout = itemCount && getGridListItemLayout(extendedOptions);
  const renderItemStyle = itemCount && getGridListItemStyle(extendedOptions);

  return {
    ...extendedOptions,
    getItemLayout,
    renderItemStyle,
  };
};
