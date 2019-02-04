import gql from "graphql-tag";
import { GameFragment, TagFragment } from "../fragments";

export default gql`
  query TopGames($first: Int = 20) {
    games(first: $first) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          ...Game
          tags(tagType: CONTENT) {
            ...Tag
          }
        }
      }
    }
  }
  ${GameFragment}
  ${TagFragment}
`;
