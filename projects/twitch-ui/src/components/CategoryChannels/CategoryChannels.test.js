import React from "react";
import { useQuery } from "react-apollo-hooks";
import { fireEvent, render } from "../../testing";
import Main from "../Main";
import CategoryChannels from "./CategoryChannels";

jest.mock("react-apollo-hooks", () => ({
  useQuery: jest.fn(),
}));
jest.mock("../ChannelGrid", () => "mock-channel-grid");

const categoryChannels = require("@twitch-player/data/fixtures/categoryChannels.json");

describe("CategoryChannels", () => {
  let instance;

  describe("when queries succeed", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => categoryChannels);

      instance = render(
        <Main>
          <CategoryChannels name="Fortnite" heading="Fortnite" />
        </Main>
      );
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders the list of category channels", () => {
      expect(instance.getByTestId("main")).toMatchSnapshot();
    });
  });

  describe("when queries fail", () => {
    beforeEach(() => {
      useQuery.mockImplementationOnce(() => ({
        error: "Category channels failed to load!",
        refetch: jest.fn(),
      }));

      instance = render(
        <Main>
          <CategoryChannels name="Fortnite" heading="Fortnite" />
        </Main>
      );
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders an error", () => {
      expect(instance.getByTestId("retry-button")).toMatchSnapshot();
    });
  });
});
