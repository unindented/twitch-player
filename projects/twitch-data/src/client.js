import ApolloClient from "apollo-boost";

export const createClient = () => {
  return new ApolloClient({
    uri: process.env.TWITCH_GRAPHQL_URI,
    headers: {
      "Client-ID": process.env.TWITCH_CLIENT_ID,
    },
  });
};
