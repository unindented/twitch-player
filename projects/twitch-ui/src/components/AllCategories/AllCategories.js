import { TopCategoriesQuery } from "@twitch-player/data";
import PropTypes from "prop-types";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import CategoryGrid from "../../components/CategoryGrid";
import RetryButton from "../../components/RetryButton";

const AllCategories = ({ testID = "all-categories" }) => {
  const { data, error, refetch } = useQuery(TopCategoriesQuery, {
    suspend: true,
    variables: { first: 25 },
  });
  const categories = !error
    ? data.categories.edges.map(({ node }) => node)
    : undefined;

  return error ? (
    <RetryButton onPress={refetch} />
  ) : (
    <CategoryGrid list={categories} testID={testID} />
  );
};

AllCategories.propTypes = {
  testID: PropTypes.string,
};

export default AllCategories;
