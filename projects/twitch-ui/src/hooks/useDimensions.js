import { throttle } from "@twitch-player/utils";
import { useCallback, useContext } from "react";
import { DimensionsContext } from "../context";

const useDimensions = key => {
  const [dimensions, setDimensions] = useContext(DimensionsContext);

  const updateDimensionsCallback = useCallback(
    throttle(({ nativeEvent }) => {
      setDimensions(prevState => ({ ...prevState, [key]: nativeEvent.layout }));
    }),
    [key]
  );

  return [dimensions[key], updateDimensionsCallback];
};

export default useDimensions;
