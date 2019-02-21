import React from "react";
import ErrorBoundary from "../ErrorBoundary";
import ChannelItem from "./ChannelItem";
import ChannelItemError from "./ChannelItemError";

const ChannelItemBoundary = props => {
  return (
    <ErrorBoundary renderError={() => <ChannelItemError {...props} />}>
      <ChannelItem {...props} />
    </ErrorBoundary>
  );
};

export default ChannelItemBoundary;
