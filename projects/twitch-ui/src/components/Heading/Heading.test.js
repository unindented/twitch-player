import React from "react";
import { render } from "../../testing";
import Heading from "./Heading";

describe("Heading", () => {
  let instance;

  describe("level 1", () => {
    beforeEach(() => {
      instance = render(<Heading level="1">Some Heading</Heading>);
    });

    it("renders a level-1 heading", () => {
      expect(instance.getByTestId("heading")).toMatchSnapshot();
    });
  });

  describe("level 2", () => {
    beforeEach(() => {
      instance = render(<Heading level="2">Some Heading</Heading>);
    });

    it("renders a level-2 heading", () => {
      expect(instance.getByTestId("heading")).toMatchSnapshot();
    });
  });

  describe("level 3", () => {
    beforeEach(() => {
      instance = render(<Heading level="3">Some Heading</Heading>);
    });

    it("renders a level-3 heading", () => {
      expect(instance.getByTestId("heading")).toMatchSnapshot();
    });
  });
});
