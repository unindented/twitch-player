import { storiesOf } from "@storybook/react";
import React from "react";
import Text from "../Text";
import ErrorBoundary from ".";

const renderError = error => (
  <Text>{`Something went wrong: ${error.message}`}</Text>
);

storiesOf("Static Components|ErrorBoundary", module)
  .add("without error", () => {
    const GoodChild = () => <Text>Everything is fine.</Text>;
    return (
      <ErrorBoundary renderError={renderError}>
        <GoodChild />
      </ErrorBoundary>
    );
  })
  .add("with error", () => {
    const BadChild = () => {
      throw new Error("BOOM");
    };
    return (
      <ErrorBoundary renderError={renderError}>
        <BadChild />
      </ErrorBoundary>
    );
  });
