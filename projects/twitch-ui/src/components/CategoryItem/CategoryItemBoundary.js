import React from "react";
import ErrorBoundary from "../ErrorBoundary";
import CategoryItem from "./CategoryItem";
import CategoryItemError from "./CategoryItemError";

const CategoryItemBoundary = props => {
  return (
    <ErrorBoundary renderError={() => <CategoryItemError {...props} />}>
      <CategoryItem {...props} />
    </ErrorBoundary>
  );
};

export default CategoryItemBoundary;
