import { extractChannelsForCategory, extractChannelsForPlatformType } from ".";

describe("extractChannelsForCategory", () => {
  const { data } = require("../../fixtures/categoryChannels.json");
  const similarData = {
    ...data,
    category: {
      ...data.category,
      channels: {
        ...data.category.channels,
        edges: data.category.channels.edges.slice(),
      },
    },
  };
  const dissimilarData = {
    ...data,
    category: {
      ...data.category,
      channels: {
        ...data.category.channels,
        edges: data.category.channels.edges.slice(1),
      },
    },
  };

  it("extracts the channel nodes from a response", () => {
    expect(extractChannelsForCategory(data)).toMatchSnapshot();
  });

  it("returns the same result for the exact same argument", () => {
    expect(extractChannelsForCategory(data)).toBe(
      extractChannelsForCategory(data)
    );
  });

  it("returns the same result for similar argument", () => {
    expect(extractChannelsForCategory(data)).toBe(
      extractChannelsForCategory(similarData)
    );
  });

  it("returns a different result for dissimilar argument", () => {
    expect(extractChannelsForCategory(data)).not.toBe(
      extractChannelsForCategory(dissimilarData)
    );
  });
});

describe("extractChannelsForPlatformType", () => {
  const { data } = require("../../fixtures/topChannels.json");
  const similarData = {
    ...data,
    channels: {
      ...data.channels,
      edges: data.channels.edges.slice(),
    },
  };
  const dissimilarData = {
    ...data,
    channels: {
      ...data.channels,
      edges: data.channels.edges.slice(1),
    },
  };

  it("extracts the channel nodes from a response", () => {
    expect(extractChannelsForPlatformType("all")(data)).toMatchSnapshot();
  });

  it("returns the same result for the exact same argument", () => {
    expect(extractChannelsForPlatformType("all")(data)).toBe(
      extractChannelsForPlatformType("all")(data)
    );
  });

  it("returns the same result for similar argument", () => {
    expect(extractChannelsForPlatformType("all")(data)).toBe(
      extractChannelsForPlatformType("all")(similarData)
    );
  });

  it("returns a different result for dissimilar argument", () => {
    expect(extractChannelsForPlatformType("all")(data)).not.toBe(
      extractChannelsForPlatformType("all")(dissimilarData)
    );
  });

  it("returns a different result for different platform", () => {
    expect(extractChannelsForPlatformType("ps4")(data)).not.toBe(
      extractChannelsForPlatformType("xbox")(data)
    );
  });
});
