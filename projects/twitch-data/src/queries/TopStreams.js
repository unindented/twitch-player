import gql from "graphql-tag";
import { StreamFragment } from "../fragments";

export default gql`
  query TopStreams($first: Int = 10, $platformType: PlatformType = all) {
    streams(first: $first, platformType: $platformType) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          ...Stream
        }
      }
    }
  }
  ${StreamFragment}
`;
