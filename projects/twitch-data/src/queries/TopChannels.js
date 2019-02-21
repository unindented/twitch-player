import gql from "graphql-tag";
import { ChannelFragment } from "../fragments";

export default gql`
  query TopChannels($first: Int = 10, $platformType: PlatformType = all) {
    channels: streams(first: $first, platformType: $platformType) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          ...Channel
        }
      }
    }
  }
  ${ChannelFragment}
`;
