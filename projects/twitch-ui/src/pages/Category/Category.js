import PropTypes from "prop-types";
import React, { memo } from "react";
import CategoryChannels from "../../components/CategoryChannels";

const Category = ({ match }) => {
  const { name } = match.params;

  return <CategoryChannels name={name} heading={name} />;
};

Category.propTypes = {
  match: PropTypes.object.isRequired,
};

export default memo(Category);
