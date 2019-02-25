export const getItemDimensions = ({
  containerWidth,
  containerHeight,
  maxImageWidth,
  maxImageHeight,
  detailHeight,
  spaceSides,
  spaceBetween,
}) => {
  const numColumns = containerWidth
    ? Math.ceil(containerWidth / maxImageWidth)
    : 1;
  const imageWidth = Math.max(
    Math.floor(
      (containerWidth - 2 * spaceSides - (numColumns - 1) * 2 * spaceBetween) /
        numColumns
    ),
    0
  );
  const imageHeight = Math.max(
    Math.floor((imageWidth * maxImageHeight) / maxImageWidth),
    0
  );
  const numRows = containerHeight
    ? Math.ceil(containerHeight / (imageHeight + detailHeight))
    : 1;

  return { numColumns, numRows, imageWidth, imageHeight };
};

export const getHorizontalListItemLayout = ({
  itemCount,
  imageWidth,
  spaceSides,
  spaceBetween,
}) => {
  return (_, index) => {
    const isFirstItem = index === 0;
    const isLastItem = index === itemCount - 1;

    const totalItemWidth =
      imageWidth +
      (isFirstItem ? spaceSides : spaceBetween) +
      (isLastItem ? spaceSides : spaceBetween);
    const firstItemWidth = imageWidth + spaceSides + spaceBetween;

    return {
      length: totalItemWidth,
      offset: index === 0 ? 0 : totalItemWidth * (index - 1) + firstItemWidth,
      index,
    };
  };
};

export const getHorizontalListItemStyle = ({
  itemCount,
  spaceSides,
  spaceBetween,
  spaceBottom,
}) => {
  return index => {
    const isFirstItem = index === 0;
    const isLastItem = index === itemCount - 1;

    return {
      marginStart: isFirstItem ? spaceSides : spaceBetween,
      marginEnd: isLastItem ? spaceSides : spaceBetween,
      marginBottom: spaceBottom,
    };
  };
};

export const getGridListItemLayout = ({
  imageHeight,
  detailHeight,
  spaceBottom,
}) => {
  const totalItemHeight = imageHeight + detailHeight + spaceBottom;

  return (_, index) => ({
    length: totalItemHeight,
    offset: totalItemHeight * index,
    index,
  });
};

export const getGridListItemStyle = ({
  numColumns,
  spaceSides,
  spaceBetween,
  spaceBottom,
}) => {
  return index => {
    const isFirstItem = index % numColumns === 0;
    const isLastItem = index % numColumns === numColumns - 1;

    return {
      marginStart: isFirstItem ? spaceSides : spaceBetween,
      marginEnd: isLastItem ? spaceSides : spaceBetween,
      marginBottom: spaceBottom,
    };
  };
};

export const getMatchingQuerySize = (query, { height, width }) => {
  for (const key of Object.keys(query)) {
    const {
      maxHeight = Infinity,
      minHeight = 0,
      maxWidth = Infinity,
      minWidth = 0,
    } = query[key];

    if (
      height <= maxHeight &&
      height >= minHeight &&
      width <= maxWidth &&
      width >= minWidth
    ) {
      return key;
    }
  }
};
