import PropTypes from "prop-types";
import React, { memo } from "react";
import { ScrollView } from "react-native";
import Heading from "../../components/Heading";
import CategoryStreams from "../../components/CategoryStreams";

const Category = ({ match, testID = "category-page" }) => {
  const { name } = match.params;

  return (
    <ScrollView testID={testID}>
      <Heading level="2">{name}</Heading>
      <CategoryStreams name={name} />
    </ScrollView>
  );
};

Category.propTypes = {
  match: PropTypes.object.isRequired,
  testID: PropTypes.string,
};

export default memo(Category);
