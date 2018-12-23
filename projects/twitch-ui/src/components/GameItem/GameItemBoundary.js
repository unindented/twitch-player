import React from "react";
import ErrorBoundary from "../ErrorBoundary";
import GameItem from "./GameItem";
import GameItemError from "./GameItemError";

const renderError = () => <GameItemError />;

const GameItemBoundary = props => {
  return (
    <ErrorBoundary renderError={renderError}>
      <GameItem {...props} />
    </ErrorBoundary>
  );
};

export default GameItemBoundary;
