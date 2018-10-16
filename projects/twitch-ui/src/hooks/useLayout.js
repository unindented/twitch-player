import { useCallback, useState } from "react";
import { throttle } from "../utils";

const useLayout = query => {
  const [layout, updateLayout] = useState(null);
  const size = layout && getMatchingQuerySize(query, layout);

  const updateLayoutCallback = useCallback(
    throttle(({ nativeEvent }) => {
      updateLayout(nativeEvent.layout);
    }),
    [query]
  );

  return [size, updateLayoutCallback];
};

const getMatchingQuerySize = (query, { height, width }) => {
  for (const key of Object.keys(query)) {
    const {
      maxHeight = Infinity,
      minHeight = 0,
      maxWidth = Infinity,
      minWidth = 0,
    } = query[key];

    if (
      height <= maxHeight &&
      height >= minHeight &&
      width <= maxWidth &&
      width >= minWidth
    ) {
      return key;
    }
  }
};

export default useLayout;
