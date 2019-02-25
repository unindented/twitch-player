import { extractCategories } from ".";

describe("extractCategories", () => {
  const { data } = require("../../fixtures/topCategories.json");
  const similarData = {
    ...data,
    categories: {
      ...data.categories,
      edges: data.categories.edges.slice(),
    },
  };
  const dissimilarData = {
    ...data,
    categories: {
      ...data.categories,
      edges: data.categories.edges.slice(1),
    },
  };

  it("extracts the category nodes from a response", () => {
    expect(extractCategories(data)).toMatchSnapshot();
  });

  it("returns the same result for the exact same argument", () => {
    expect(extractCategories(data)).toBe(extractCategories(data));
  });

  it("returns the same result for similar argument", () => {
    expect(extractCategories(data)).toBe(extractCategories(similarData));
  });

  it("returns a different result for dissimilar argument", () => {
    expect(extractCategories(data)).not.toBe(extractCategories(dissimilarData));
  });
});
