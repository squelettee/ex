import getMatches from "@/query/getMatches";
import getUser from "@/query/getUser";
import type { User } from "../../../../generated/prisma";
import MatchProfileClient from "./MatchProfileClient";

export default async function MatchProfilePage({ searchParams }: { searchParams: Promise<{ userId?: string, wallet?: string }> }) {
  // Next.js 15: searchParams will be async in the future
  const { userId, wallet } = await searchParams;
  if (!userId) return <div>No userId provided</div>;
  if (!wallet) return <div>No wallet provided</div>;
  const matches: User[] = await getMatches(userId);
  const user: User | null = await getUser(wallet);

  return <MatchProfileClient matches={matches} myUserId={userId} user={user} />;
}
