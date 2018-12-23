import gql from "graphql-tag";

export default gql`
  fragment Tag on Tag {
    id
    key: id
    isLanguageTag
    localizedName
    tagName
  }
`;
