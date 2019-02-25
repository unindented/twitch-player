import { extractFeaturedChannels } from ".";

describe("extractFeaturedChannels", () => {
  const { data } = require("../../fixtures/featuredChannels.json");
  const similarData = {
    ...data,
    channels: data.channels.slice(),
  };
  const dissimilarData = {
    ...data,
    channels: data.channels.slice(1),
  };

  it("extracts the channel nodes from a response", () => {
    expect(extractFeaturedChannels(data)).toMatchSnapshot();
  });

  it("returns the same result for the exact same argument", () => {
    expect(extractFeaturedChannels(data)).toBe(extractFeaturedChannels(data));
  });

  it("returns the same result for similar argument", () => {
    expect(extractFeaturedChannels(data)).toBe(
      extractFeaturedChannels(similarData)
    );
  });

  it("returns a different result for dissimilar argument", () => {
    expect(extractFeaturedChannels(data)).not.toBe(
      extractFeaturedChannels(dissimilarData)
    );
  });
});
