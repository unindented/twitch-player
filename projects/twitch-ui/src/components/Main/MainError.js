import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";
import React from "react";
import RetryButton from "../RetryButton";

const reload = () => {
  // istanbul ignore else
  if (canUseDOM) {
    window.location.reload();
  }
};

const MainError = () => {
  return <RetryButton onPress={reload} />;
};

export default MainError;
