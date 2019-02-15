import React from "react";
import ErrorBoundary from "../ErrorBoundary";
import Main from "./Main";
import MainError from "./MainError";

const MainBoundary = props => {
  return (
    <ErrorBoundary renderError={() => <MainError />}>
      <Main {...props} />
    </ErrorBoundary>
  );
};

export default MainBoundary;
