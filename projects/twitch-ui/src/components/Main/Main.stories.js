import { storiesOf } from "@storybook/react";
import React from "react";
import Spinner from "../Spinner";
import Main from ".";

storiesOf("Static Components|Main", module)
  .add("without error", () => {
    return (
      <Main>
        <Spinner />
      </Main>
    );
  })
  .add("with error", () => {
    const BadChild = () => {
      throw new Error("BOOM");
    };
    return (
      <Main>
        <BadChild />
      </Main>
    );
  });
