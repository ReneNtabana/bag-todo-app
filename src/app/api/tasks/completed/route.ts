import { GetCompletedQueriesDocument } from "@/generated/graphql";
import graphQLClients from "@/lib/graphqlClient";

export async function GET() {
  const data = await graphQLClients.request(GetCompletedQueriesDocument);
  return new Response(JSON.stringify({ data }));
}
