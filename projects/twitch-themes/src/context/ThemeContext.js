import PropTypes from "prop-types";
import React, { createContext, useState } from "react";
import { light } from "../themes";

const defaultTheme = light;

export const ThemeContext = createContext();

export const ThemeProvider = ({ theme, ...props }) => {
  const themeState = useState(theme || defaultTheme);

  return <ThemeContext.Provider {...props} value={themeState} />;
};

ThemeProvider.propTypes = {
  theme: PropTypes.object,
};
