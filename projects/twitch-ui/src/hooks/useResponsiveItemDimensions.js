import { useCallback, useState } from "react";
import { throttle } from "../utils";

const useResponsiveItemDimensions = ({
  maxItemWidth,
  maxItemHeight,
  spaceSides,
  spaceBetween,
}) => {
  const [layout, updateLayout] = useState(null);
  const width = layout ? layout.width : undefined;

  const numColumns = width ? Math.ceil(width / maxItemWidth) : undefined;
  const itemWidth = width
    ? Math.floor(
        (width - 2 * spaceSides - (numColumns - 1) * 2 * spaceBetween) /
          numColumns
      )
    : undefined;
  const itemHeight = width
    ? Math.floor((itemWidth * maxItemHeight) / maxItemWidth)
    : undefined;

  const updateLayoutCallback = useCallback(
    throttle(({ nativeEvent }) => {
      updateLayout(nativeEvent.layout);
    }),
    []
  );

  return [{ numColumns, itemWidth, itemHeight }, updateLayoutCallback];
};

export default useResponsiveItemDimensions;
