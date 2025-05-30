import getUser from "@/query/getUser";
import getUsers from "@/query/getUsers";
import { redirect } from "next/navigation";
import DashboardClient from "./DashboardClient";


export default async function DashboardPage({ searchParams }: { searchParams: Promise<{ wallet?: string }> }) {
  const users = await getUsers();
  const { wallet } = await searchParams;

  if (!wallet) {
    redirect("/");
  }

  const user = await getUser(wallet);

  if (!user) {
    console.log("User not found for wallet:", wallet);
    redirect("/");
  }

  return <DashboardClient usersProps={users} user={user} />;
}
