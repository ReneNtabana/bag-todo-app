import { UpdateTaskDocument } from "@/generated/graphql";
import graphQLClients from "@/lib/graphqlClient";

export async function PUT(req: Request) {
  const body = await req.json();
  const data = await graphQLClients.request(UpdateTaskDocument, body);
  return new Response(JSON.stringify({ data }));
}