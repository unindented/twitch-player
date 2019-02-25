import React, { createContext, useState } from "react";

const defaultDimensions = {};

export const DimensionsContext = createContext();

export const DimensionsProvider = ({ ...props }) => {
  const dimensionsState = useState(defaultDimensions);

  return <DimensionsContext.Provider {...props} value={dimensionsState} />;
};
