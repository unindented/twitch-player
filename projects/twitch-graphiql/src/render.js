import React from "react";
import { render } from "react-dom";
import GraphiQL from "graphiql";
import "graphiql/graphiql.css";

const fetcher = async params => {
  const response = await fetch(process.env.TWITCH_GRAPHQL_URI, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.TWITCH_CLIENT_ID,
    },
    body: JSON.stringify(params),
  });
  return response.json();
};

export default el => render(<GraphiQL fetcher={fetcher} />, el);
