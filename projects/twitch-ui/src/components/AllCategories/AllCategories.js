import { TopCategoriesQuery, extractCategories } from "@twitch-player/data";
import { clamp } from "@twitch-player/utils";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { useQuery } from "react-apollo-hooks";
import CategoryGrid from "../../components/CategoryGrid";
import Heading from "../../components/Heading";
import RetryButton from "../../components/RetryButton";
import { useCategoryGrid } from "../../hooks";

const AllCategories = ({ heading, testID = "all-categories" }) => {
  const { numColumns, numRows } = useCategoryGrid();
  const categoryCount = clamp(numColumns * (numRows + 1), 20, 80);

  const { data, error, refetch } = useQuery(TopCategoriesQuery, {
    suspend: true,
    variables: { first: categoryCount },
  });

  const categories = !error ? extractCategories(data) : undefined;
  // istanbul ignore next
  const renderHeader = useCallback(
    () => <Heading level="2">{heading}</Heading>,
    [heading]
  );

  return error ? (
    <RetryButton onPress={refetch} />
  ) : (
    <CategoryGrid
      list={categories}
      renderHeader={renderHeader}
      testID={testID}
    />
  );
};

AllCategories.propTypes = {
  heading: PropTypes.string,
  testID: PropTypes.string,
};

export default memo(AllCategories);
