import gql from "graphql-tag";
import BroadcasterFragment from "./Broadcaster";
import CategoryFragment from "./Category";
import TagFragment from "./Tag";

export default gql`
  fragment Channel on Stream {
    id
    key: id
    previewImageURL
    viewersCount
    broadcaster {
      ...Broadcaster
    }
    category: game {
      ...Category
    }
    tags {
      ...Tag
    }
  }
  ${BroadcasterFragment}
  ${CategoryFragment}
  ${TagFragment}
`;
