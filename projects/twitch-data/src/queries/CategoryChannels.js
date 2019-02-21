import gql from "graphql-tag";
import { ChannelFragment } from "../fragments";

export default gql`
  query CategoryChannels($name: String!, $first: Int = 12) {
    category: game(name: $name) {
      channels: streams(first: $first) {
        edges {
          cursor
          node {
            ...Channel
          }
        }
      }
    }
  }
  ${ChannelFragment}
`;
