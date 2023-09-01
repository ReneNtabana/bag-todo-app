import { Insert_Single_TaskDocument } from "@/generated/graphql";
import graphQLClients from "@/lib/graphqlClient";

export async function POST(req: Request) {
  const body = await req.json();
  const data = await graphQLClients.request(Insert_Single_TaskDocument, body);
  return new Response(JSON.stringify({ data }));
}
