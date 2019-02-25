import gql from "graphql-tag";
import { CategoryFragment, TagFragment } from "../fragments";

export default gql`
  query TopCategories($first: Int!) {
    categories: games(first: $first) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          ...Category
          tags(tagType: CONTENT) {
            ...Tag
          }
        }
      }
    }
  }
  ${CategoryFragment}
  ${TagFragment}
`;
