import { DeleteTaskDocument } from "@/generated/graphql";
import graphQLClients from "@/lib/graphqlClient";

export async function DELETE(req:Request) {
     const id = req.headers.get('id') ;
  const data = await graphQLClients.request(DeleteTaskDocument,{id});
  return new Response(JSON.stringify({ data }));
}
