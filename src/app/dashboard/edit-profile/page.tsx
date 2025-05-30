import getUser from "@/query/getUser";
import EditProfileForm from "./EditProfileForm";

export default async function EditProfilePage({ searchParams }: { searchParams: Promise<{ wallet?: string }> }) {
  // Next.js 15: searchParams will be async in the future
  const { wallet } = await searchParams;
  if (!wallet) return <div>No wallet provided</div>;
  const user = await getUser(wallet);
  return <EditProfileForm user={user} />;
}
