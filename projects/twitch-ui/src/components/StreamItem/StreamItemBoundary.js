import React from "react";
import ErrorBoundary from "../ErrorBoundary";
import StreamItem from "./StreamItem";
import StreamItemError from "./StreamItemError";

const renderError = () => <StreamItemError />;

const StreamItemBoundary = props => {
  return (
    <ErrorBoundary renderError={renderError}>
      <StreamItem {...props} />
    </ErrorBoundary>
  );
};

export default StreamItemBoundary;
