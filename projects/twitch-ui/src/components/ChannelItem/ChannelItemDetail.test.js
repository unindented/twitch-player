import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import ChannelItemDetail from "./ChannelItemDetail";

describe("ChannelItemDetail", () => {
  let instance;

  describe("when not hovering", () => {
    describe("with a category", () => {
      beforeEach(() => {
        instance = render(
          <ChannelItemDetail
            title="We Gaming <3 "
            broadcasterName="Ninja"
            broadcasterImageURL="profiles/cef31105-8a6e-4211-a74b-2f0bbd9791fb-profile_image-150x150.png"
            categoryName="Fortnite"
            width={400}
          />
        );
      });

      it("renders a channel item detail", () => {
        expect(instance.getByTestId("channel-item-detail")).toMatchSnapshot();
      });
    });

    describe("without a category", () => {
      beforeEach(() => {
        instance = render(
          <ChannelItemDetail
            title="We Gaming <3 "
            broadcasterName="Ninja"
            broadcasterImageURL="profiles/cef31105-8a6e-4211-a74b-2f0bbd9791fb-profile_image-150x150.png"
            width={400}
          />
        );
      });

      it("renders a channel item detail", () => {
        expect(instance.getByTestId("channel-item-detail")).toMatchSnapshot();
      });
    });
  });

  describe("when hovering", () => {
    describe("with a category", () => {
      beforeEach(() => {
        instance = render(
          <ChannelItemDetail
            title="We Gaming <3 "
            broadcasterName="Ninja"
            broadcasterImageURL="profiles/cef31105-8a6e-4211-a74b-2f0bbd9791fb-profile_image-150x150.png"
            categoryName="Fortnite"
            width={400}
            isHighlighted={true}
          />
        );
      });

      it("renders a hovered channel item detail", () => {
        expect(instance.getByTestId("channel-item-detail")).toMatchSnapshot();
      });
    });

    describe("without a category", () => {
      beforeEach(() => {
        instance = render(
          <ChannelItemDetail
            title="We Gaming <3 "
            broadcasterName="Ninja"
            broadcasterImageURL="profiles/cef31105-8a6e-4211-a74b-2f0bbd9791fb-profile_image-150x150.png"
            width={400}
            isHighlighted={true}
          />
        );
      });

      it("renders a hovered channel item detail", () => {
        expect(instance.getByTestId("channel-item-detail")).toMatchSnapshot();
      });
    });
  });
});
