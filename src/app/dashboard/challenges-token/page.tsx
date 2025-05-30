import getUser from "@/query/getUser";
import ChallengeTokenClient from "./ChallengeTokenClient";

export default async function ChallengesTokenPage({ searchParams }: { searchParams: Promise<{ wallet?: string }> }) {
  const { wallet } = await searchParams;
  if (!wallet) return <div>No wallet provided</div>;
  const user = await getUser(wallet);
  return (
    <ChallengeTokenClient
      user={
        user
          ? {
            ...user,
            lastDailyClaim: user.lastDailyClaim ? user.lastDailyClaim.toISOString() : null,
          }
          : null
      }
    />
  );
}
