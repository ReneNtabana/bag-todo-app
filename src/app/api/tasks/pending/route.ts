import { GetPendingQueriesDocument } from "@/generated/graphql";
import graphQLClients from "@/lib/graphqlClient";

export async function GET() {
  const data = await graphQLClients.request(GetPendingQueriesDocument);
  return new Response(JSON.stringify({ data }));
}
