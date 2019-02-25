import { useTheme } from "@twitch-player/themes/dist/hooks";
import {
  getItemDimensions,
  getHorizontalListItemLayout,
  getHorizontalListItemStyle,
} from "../utils";
import { useDimensions } from ".";

export const useCategoryList = itemCount => {
  const [{ layout }] = useTheme();
  const [{ width }] = useDimensions("main");

  const options = {
    itemCount,
    containerWidth: width,
    maxImageWidth: layout.maxCategoryWidth,
    maxImageHeight: layout.maxCategoryHeight,
    spaceSides: layout.gapExtraLarge,
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
  const [{ width }] = useDimensions("main");

  const options = {
    itemCount,
    containerWidth: width,
    maxImageWidth: layout.maxChannelWidth,
    maxImageHeight: layout.maxChannelHeight,
    spaceSides: layout.gapExtraLarge,
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
