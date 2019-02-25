import {
  getItemDimensions,
  getHorizontalListItemLayout,
  getHorizontalListItemStyle,
  getGridListItemLayout,
  getGridListItemStyle,
  getMatchingQuerySize,
} from ".";

describe("getItemDimensions", () => {
  it("returns the item dimensions for a list", () => {
    expect(
      getItemDimensions({
        containerWidth: 480,
        itemCount: 20,
        maxImageWidth: 188,
        maxImageHeight: 250,
        spaceSides: 30,
        spaceBetween: 5,
        spaceBottom: 10,
      })
    ).toEqual({
      imageWidth: 133,
      imageHeight: 176,
      numColumns: 3,
      numRows: 1,
    });
  });

  it("returns the item dimensions for a grid", () => {
    expect(
      getItemDimensions({
        containerWidth: 480,
        containerHeight: 640,
        itemCount: 20,
        maxImageWidth: 188,
        maxImageHeight: 250,
        detailHeight: 54,
        spaceSides: 30,
        spaceBetween: 5,
        spaceBottom: 10,
      })
    ).toEqual({
      imageWidth: 133,
      imageHeight: 176,
      numColumns: 3,
      numRows: 3,
    });
  });

  it("returns valid item dimensions when everything is zero", () => {
    expect(
      getItemDimensions({
        containerWidth: 0,
        containerHeight: 0,
        maxImageWidth: 188,
        maxImageHeight: 250,
        spaceSides: 30,
        spaceBetween: 5,
        spaceBottom: 10,
      })
    ).toEqual({
      imageWidth: 0,
      imageHeight: 0,
      numColumns: 1,
      numRows: 1,
    });
  });
});

describe("getHorizontalListItemLayout", () => {
  let getItemLayout;

  beforeEach(() => {
    getItemLayout = getHorizontalListItemLayout({
      itemCount: 20,
      imageWidth: 133,
      spaceSides: 30,
      spaceBetween: 5,
      spaceBottom: 10,
    });
  });

  it("returns the right item layout for the first element in the list", () => {
    expect(getItemLayout(null, 0)).toEqual({
      index: 0,
      length: 168,
      offset: 0,
    });
  });

  it("returns the right item layout for subsequent elements in the list", () => {
    expect(getItemLayout(null, 1)).toEqual({
      index: 1,
      length: 143,
      offset: 168,
    });
  });

  it("returns the right item layout for the last element in the list", () => {
    expect(getItemLayout(null, 19)).toEqual({
      index: 19,
      length: 168,
      offset: 3192,
    });
  });
});

describe("getHorizontalListItemStyle", () => {
  let renderItemStyle;

  beforeEach(() => {
    renderItemStyle = getHorizontalListItemStyle({
      itemCount: 20,
      spaceSides: 30,
      spaceBetween: 5,
      spaceBottom: 10,
    });
  });

  it("returns the right item style for the first element in the list", () => {
    expect(renderItemStyle(0)).toEqual({
      marginStart: 30,
      marginEnd: 5,
      marginBottom: 10,
    });
  });

  it("returns the right item style for subsequent elements in the list", () => {
    expect(renderItemStyle(1)).toEqual({
      marginStart: 5,
      marginEnd: 5,
      marginBottom: 10,
    });
  });

  it("returns the right item style for the last element in the list", () => {
    expect(renderItemStyle(19)).toEqual({
      marginStart: 5,
      marginEnd: 30,
      marginBottom: 10,
    });
  });
});

describe("getGridListItemLayout", () => {
  let getItemLayout;

  beforeEach(() => {
    getItemLayout = getGridListItemLayout({
      imageHeight: 176,
      detailHeight: 38,
      spaceBottom: 10,
    });
  });

  it("returns the right item layout for the first element in the row", () => {
    expect(getItemLayout(null, 0)).toEqual({
      index: 0,
      length: 224,
      offset: 0,
    });
  });

  it("returns the right item layout for subsequent elements in the row", () => {
    expect(getItemLayout(null, 1)).toEqual({
      index: 1,
      length: 224,
      offset: 224,
    });
  });

  it("returns the right item layout for the last element in the row", () => {
    expect(getItemLayout(null, 2)).toEqual({
      index: 2,
      length: 224,
      offset: 448,
    });
  });
});

describe("getGridListItemStyle", () => {
  let renderItemStyle;

  beforeEach(() => {
    renderItemStyle = getGridListItemStyle({
      numColumns: 3,
      spaceSides: 30,
      spaceBetween: 5,
      spaceBottom: 10,
    });
  });

  it("returns the right item style for the first element in the row", () => {
    expect(renderItemStyle(0)).toEqual({
      marginStart: 30,
      marginEnd: 5,
      marginBottom: 10,
    });
  });

  it("returns the right item style for subsequent elements in the row", () => {
    expect(renderItemStyle(1)).toEqual({
      marginStart: 5,
      marginEnd: 5,
      marginBottom: 10,
    });
  });

  it("returns the right item style for the last element in the row", () => {
    expect(renderItemStyle(2)).toEqual({
      marginStart: 5,
      marginEnd: 30,
      marginBottom: 10,
    });
  });
});

describe("getMatchingQuerySize", () => {
  const layoutQuery = {
    horizontal: {
      maxWidth: 480,
    },
    vertical: {
      minWidth: 481,
    },
  };

  it("returns the query size that matches the provided dimensions", () => {
    expect(getMatchingQuerySize(layoutQuery, { width: 480, height: 320 })).toBe(
      "horizontal"
    );
  });

  it("returns the query size that matches the provided dimensions", () => {
    expect(getMatchingQuerySize(layoutQuery, { width: 481, height: 320 })).toBe(
      "vertical"
    );
  });
});
