import { useTheme } from "@twitch-player/themes/dist/hooks";
import {
  getItemDimensions,
  getHorizontalListItemLayout,
  getHorizontalListItemStyle,
  isSmallView,
} from "../utils";
import { useDimensions } from ".";

export const useCategoryList = itemCount => {
  const [{ layout }] = useTheme();
  const [dimensions] = useDimensions("main");
  const { width } = dimensions;

  const options = {
    itemCount,
    containerWidth: width,
    maxImageWidth: layout.maxCategoryWidth,
    maxImageHeight: layout.maxCategoryHeight,
    spaceSides: isSmallView(dimensions)
      ? layout.gapLarge
      : layout.gapExtraLarge,
    spaceBetween: layout.gapSmall,
    spaceBottom: layout.gapMedium,
  };

  const itemDimensions = getItemDimensions(options);
  const extendedOptions = { ...options, ...itemDimensions };

  const getItemLayout =
    itemCount && getHorizontalListItemLayout(extendedOptions);
  const renderItemStyle =
    itemCount && getHorizontalListItemStyle(extendedOptions);

  return {
    ...extendedOptions,
    getItemLayout,
    renderItemStyle,
  };
};

export const useChannelList = itemCount => {
  const [{ layout }] = useTheme();
  const [dimensions] = useDimensions("main");
  const { width } = dimensions;

  const options = {
    itemCount,
    containerWidth: width,
    maxImageWidth: layout.maxChannelWidth,
    maxImageHeight: layout.maxChannelHeight,
    spaceSides: isSmallView(dimensions)
      ? layout.gapLarge
      : layout.gapExtraLarge,
    spaceBetween: layout.gapSmall,
    spaceBottom: layout.gapMedium,
  };

  const itemDimensions = getItemDimensions(options);
  const extendedOptions = { ...options, ...itemDimensions };

  const getItemLayout =
    itemCount && getHorizontalListItemLayout(extendedOptions);
  const renderItemStyle =
    itemCount && getHorizontalListItemStyle(extendedOptions);

  return {
    ...extendedOptions,
    getItemLayout,
    renderItemStyle,
  };
};
