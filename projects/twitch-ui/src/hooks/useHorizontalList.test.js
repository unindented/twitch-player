import React from "react";
import { Text } from "react-native";
import { fireEvent, render } from "../testing";
import Main from "../components/Main";
import { useCategoryList, useChannelList } from ".";

describe("useCategoryList", () => {
  const SomeComponent = () => {
    const options = useCategoryList(6);

    return <Text>{`${JSON.stringify(options, null, 2)}`}</Text>;
  };

  let instance;

  beforeEach(() => {
    instance = render(
      <Main>
        <SomeComponent />
      </Main>
    );
  });

  describe("with a small viewport", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders with the right attributes", () => {
      expect(instance.getByTestId("main")).toMatchSnapshot();
    });
  });

  describe("with a large viewport", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 640, height: 480 } });
    });

    it("renders with the right attributes", () => {
      expect(instance.getByTestId("main")).toMatchSnapshot();
    });
  });
});

describe("useChannelList", () => {
  const SomeComponent = () => {
    const options = useChannelList(6);

    return <Text>{`${JSON.stringify(options, null, 2)}`}</Text>;
  };

  let instance;

  beforeEach(() => {
    instance = render(
      <Main>
        <SomeComponent />
      </Main>
    );
  });

  describe("with a small viewport", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 480, height: 640 } });
    });

    it("renders with the right attributes", () => {
      expect(instance.getByTestId("main")).toMatchSnapshot();
    });
  });

  describe("with a large viewport", () => {
    beforeEach(() => {
      fireEvent.resize(window, { target: { width: 640, height: 480 } });
    });

    it("renders with the right attributes", () => {
      expect(instance.getByTestId("main")).toMatchSnapshot();
    });
  });
});
