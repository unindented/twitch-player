import PropTypes from "prop-types";
import React, { createContext } from "react";
import { light } from "../themes";

export const ThemeContext = createContext(light);

export const ThemeProvider = ({ theme, ...props }) => (
  <ThemeContext.Provider {...props} value={theme || light} />
);

ThemeProvider.propTypes = {
  theme: PropTypes.object,
};
