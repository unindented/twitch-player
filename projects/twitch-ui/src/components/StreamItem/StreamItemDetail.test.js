import { render } from "@twitch-player/testing/dist/unit";
import React from "react";
import StreamItemDetail from "./StreamItemDetail";

describe("StreamItemDetail", () => {
  let instance;

  describe("when not hovering", () => {
    describe("with a game", () => {
      beforeEach(() => {
        instance = render(
          <StreamItemDetail
            title="We Gaming <3 "
            broadcasterName="Ninja"
            broadcasterImageURL="profiles/cef31105-8a6e-4211-a74b-2f0bbd9791fb-profile_image-150x150.png"
            gameName="Fortnite"
            width={400}
          />
        );
      });

      it("renders a stream item detail", () => {
        expect(instance.getByTestId("stream-item-detail")).toMatchSnapshot();
      });
    });

    describe("without a game", () => {
      beforeEach(() => {
        instance = render(
          <StreamItemDetail
            title="We Gaming <3 "
            broadcasterName="Ninja"
            broadcasterImageURL="profiles/cef31105-8a6e-4211-a74b-2f0bbd9791fb-profile_image-150x150.png"
            width={400}
          />
        );
      });

      it("renders a stream item detail", () => {
        expect(instance.getByTestId("stream-item-detail")).toMatchSnapshot();
      });
    });
  });

  describe("when hovering", () => {
    describe("with a game", () => {
      beforeEach(() => {
        instance = render(
          <StreamItemDetail
            title="We Gaming <3 "
            broadcasterName="Ninja"
            broadcasterImageURL="profiles/cef31105-8a6e-4211-a74b-2f0bbd9791fb-profile_image-150x150.png"
            gameName="Fortnite"
            width={400}
            isHover={true}
          />
        );
      });

      it("renders a hovered stream item detail", () => {
        expect(instance.getByTestId("stream-item-detail")).toMatchSnapshot();
      });
    });

    describe("without a game", () => {
      beforeEach(() => {
        instance = render(
          <StreamItemDetail
            title="We Gaming <3 "
            broadcasterName="Ninja"
            broadcasterImageURL="profiles/cef31105-8a6e-4211-a74b-2f0bbd9791fb-profile_image-150x150.png"
            width={400}
            isHover={true}
          />
        );
      });

      it("renders a hovered stream item detail", () => {
        expect(instance.getByTestId("stream-item-detail")).toMatchSnapshot();
      });
    });
  });
});
