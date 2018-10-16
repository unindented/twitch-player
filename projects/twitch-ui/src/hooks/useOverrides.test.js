import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import { MemoryRouter as Router } from "react-router";
import InternalLink from "../components/InternalLink";
import { OverridesProvider } from "../context";
import { useOverrides } from ".";

const SomeComponent = () => {
  const { Link } = useOverrides();

  return <Link href="/some-link">Some Link</Link>;
};

describe("useOverrides", () => {
  let instance;

  beforeEach(() => {
    instance = render(
      <OverridesProvider overrides={{ Link: InternalLink }}>
        <Router>
          <SomeComponent />
        </Router>
      </OverridesProvider>
    );
  });

  it("renders with the overriden link", () => {
    expect(instance.asFragment()).toMatchSnapshot();
  });
});
