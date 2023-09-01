import { GetTaskQueryDocument } from "@/generated/graphql";
import graphQLClients from "@/lib/graphqlClient";

export async function GET() {
  const data = await graphQLClients.request(GetTaskQueryDocument);
  return new Response(JSON.stringify({ data }));
}
