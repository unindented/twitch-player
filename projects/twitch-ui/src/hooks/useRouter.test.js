import React from "react";
import { Text } from "react-native";
import { MemoryRouter as Router } from "react-router";
import { render } from "../testing";
import { useRouter } from ".";

const SomeComponent = () => {
  const { location } = useRouter();

  return <Text>{location.pathname}</Text>;
};

describe("useRouter", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <Router>
        <SomeComponent />
      </Router>
    );
  });

  it("renders with the current location", () => {
    expect(instance.asFragment()).toMatchSnapshot();
  });
});
