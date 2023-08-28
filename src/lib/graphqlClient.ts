import { GraphQLClient } from "graphql-request";

const graphQLClients = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`,
  {
    headers: {
      "x-hasura-admin-secret": `${process.env.NEXT_PUBLIC_HASURA_API_SECRET}`,
    },
  }
);

export default graphQLClients;
