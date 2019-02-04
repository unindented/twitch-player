import gql from "graphql-tag";
import { StreamFragment } from "../fragments";

export default gql`
  query CategoryStreams($name: String!, $first: Int = 12) {
    game(name: $name) {
      streams(first: $first) {
        edges {
          cursor
          node {
            ...Stream
          }
        }
      }
    }
  }
  ${StreamFragment}
`;
