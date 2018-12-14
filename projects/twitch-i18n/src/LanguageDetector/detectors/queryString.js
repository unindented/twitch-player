import { parse } from "querystring";

export default {
  lookup: ({ lookupQueryString }) =>
    parse(window.location.search.substring(1))[lookupQueryString],
};
