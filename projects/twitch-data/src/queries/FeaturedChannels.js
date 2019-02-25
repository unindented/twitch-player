import gql from "graphql-tag";
import { ChannelFragment } from "../fragments";

export default gql`
  query FeaturedChannels($first: Int!) {
    channels: featuredStreams(first: $first) {
      node: stream {
        ...Channel
      }
    }
  }
  ${ChannelFragment}
`;
