import gql from "graphql-tag";
import { ChannelFragment } from "../fragments";

export default gql`
  query FeaturedChannels($first: Int = 10) {
    channels: featuredStreams(first: $first) {
      channel: stream {
        ...Channel
      }
    }
  }
  ${ChannelFragment}
`;
