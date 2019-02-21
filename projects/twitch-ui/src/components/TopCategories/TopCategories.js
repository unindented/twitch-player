import { TopCategoriesQuery } from "@twitch-player/data";
import PropTypes from "prop-types";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import CategoryList from "../../components/CategoryList";
import RetryButton from "../../components/RetryButton";

const TopCategories = ({ testID = "top-categories" }) => {
  const { data, error, refetch } = useQuery(TopCategoriesQuery, {
    suspend: true,
  });
  const categories = !error
    ? data.categories.edges.map(({ node }) => node)
    : undefined;

  return error ? (
    <RetryButton onPress={refetch} />
  ) : (
    <CategoryList list={categories} testID={testID} />
  );
};

TopCategories.propTypes = {
  testID: PropTypes.string,
};

export default TopCategories;
