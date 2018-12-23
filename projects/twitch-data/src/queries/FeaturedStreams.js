import gql from "graphql-tag";
import { StreamFragment } from "../fragments";

export default gql`
  query FeaturedStreams($first: Int = 10) {
    featuredStreams(first: $first) {
      stream {
        ...Stream
      }
    }
  }
  ${StreamFragment}
`;
