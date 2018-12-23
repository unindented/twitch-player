import PropTypes from "prop-types";
import React, { createContext } from "react";

const defaultOverrides = {
  StreamPlayer: () => null,
};

export const OverridesContext = createContext(defaultOverrides);

export const OverridesProvider = ({ overrides, ...props }) => (
  <OverridesContext.Provider {...props} value={overrides || defaultOverrides} />
);

OverridesProvider.propTypes = {
  overrides: PropTypes.object,
};
