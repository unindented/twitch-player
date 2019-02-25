import PropTypes from "prop-types";
import React, { createContext, useState } from "react";

const defaultValue = false;

export const DebugContext = createContext();

export const DebugProvider = ({ value, ...props }) => {
  const debugState = useState(value || defaultValue);

  return <DebugContext.Provider {...props} value={debugState} />;
};

DebugProvider.propTypes = {
  value: PropTypes.bool,
};
