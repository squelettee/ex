import getMessages from "@/query/getMessages";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userA = searchParams.get("userA");
  const userB = searchParams.get("userB");

  if (!userA || !userB) {
    return new Response(JSON.stringify({ error: "Missing userA or userB" }), { status: 400 });
  }

  const messages = await getMessages(userA, userB);
  return Response.json(messages);
} 