import React from "react";
import ErrorBoundary from "../ErrorBoundary";
import StreamItem from "./StreamItem";
import StreamItemError from "./StreamItemError";

const StreamItemBoundary = props => {
  return (
    <ErrorBoundary renderError={() => <StreamItemError {...props} />}>
      <StreamItem {...props} />
    </ErrorBoundary>
  );
};

export default StreamItemBoundary;
