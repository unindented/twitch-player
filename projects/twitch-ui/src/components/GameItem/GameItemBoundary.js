import React from "react";
import ErrorBoundary from "../ErrorBoundary";
import GameItem from "./GameItem";
import GameItemError from "./GameItemError";

const GameItemBoundary = props => {
  return (
    <ErrorBoundary renderError={() => <GameItemError {...props} />}>
      <GameItem {...props} />
    </ErrorBoundary>
  );
};

export default GameItemBoundary;
