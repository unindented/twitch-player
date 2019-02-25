import { TopCategoriesQuery, extractCategories } from "@twitch-player/data";
import { clamp } from "@twitch-player/utils";
import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { useQuery } from "react-apollo-hooks";
import CategoryList from "../../components/CategoryList";
import Heading from "../../components/Heading";
import RetryButton from "../../components/RetryButton";
import { useCategoryList } from "../../hooks";

const TopCategories = ({ heading, testID = "top-categories" }) => {
  const { numColumns } = useCategoryList();
  const categoryCount = clamp(numColumns * 1.5, 6, 40);

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
    <CategoryList
      list={categories}
      renderHeader={renderHeader}
      testID={testID}
    />
  );
};

TopCategories.propTypes = {
  heading: PropTypes.string.isRequired,
  testID: PropTypes.string,
};

export default memo(TopCategories);
