import PropTypes from "prop-types";
import React, { createContext } from "react";
import ExternalLink from "../components/ExternalLink";

const defaultOverrides = { Link: ExternalLink };

export const OverridesContext = createContext(defaultOverrides);

export const OverridesProvider = ({ overrides, ...props }) => (
  <OverridesContext.Provider {...props} value={overrides || defaultOverrides} />
);

OverridesProvider.propTypes = {
  overrides: PropTypes.object,
};
