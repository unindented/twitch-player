import gql from "graphql-tag";
import BroadcasterFragment from "./Broadcaster";
import GameFragment from "./Game";
import TagFragment from "./Tag";

export default gql`
  fragment Stream on Stream {
    id
    key: id
    previewImageURL
    viewersCount
    broadcaster {
      ...Broadcaster
    }
    game {
      ...Game
    }
    tags {
      ...Tag
    }
  }
  ${BroadcasterFragment}
  ${GameFragment}
  ${TagFragment}
`;
