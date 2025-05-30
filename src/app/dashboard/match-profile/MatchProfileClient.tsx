"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { CoinsIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { User } from "../../../../generated/prisma";
import { Navbar } from "../DashboardClient";

export default function MatchProfileClient({ matches, myUserId, user }: { matches: User[]; myUserId: string, user: User | null }) {
  const { publicKey } = useWallet();

  return (
    <div
      className="min-h-screen w-full max-w-sm min-w-sm mx-auto flex flex-col items-center justify-start relative py-8 px-2 overflow-hidden pb-32 bg-background text-foreground"
      style={{ backgroundImage: 'url(/backgroundshape.webp)', backgroundSize: 'cover' }}
    >
      <div className="flex flex-row justify-end items-center gap-1 p-2 fixed top-0">
        <p className="text-foreground font-bold">{user?.tokens}</p>
        <CoinsIcon className="w-4 h-4 text-foreground" />
      </div>
      <Image src="/god.jpg" alt="background" fill className="object-cover object-center -z-10" />
      <div className="absolute inset-0 bg-background/70 -z-10" />
      <div className="inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-8 rounded-full px-4 py-1.5 text-sm  font-medium shadow-sm transition-none mt-8"><span className="mr-1 text-primary">✦</span>Matches</div>
      <ul className="w-full flex flex-col gap-4">
        {matches.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-muted-foreground">No matches found</p>
          </div>
        )}
        {matches.map((user) => (
          <li key={user.id} className="w-full">
            <div className="flex flex-row items-center gap-4 bg-card/70 rounded-2xl p-4 shadow-lg border border-black">
              {user.image && (
                <Image src={user.image} alt="profile" width={56} height={56} className="rounded-full object-cover border-2 border-primary" />
              )}
              <div className="flex-1">
                <p className="font-bold text-lg text-card-foreground">{user.name}</p>
              </div>
              <Link
                href={`/dashboard/match-profile/${user.id}/private-chat?me=${myUserId}&wallet=${publicKey?.toBase58()}`}
                className="bg-primary text-primary-foreground font-bold rounded-xl px-4 py-2 hover:bg-primary/80 transition-colors text-sm"
              >
                Chat
              </Link>
            </div>
          </li>
        ))}
      </ul>
      {/* Navbar en fixed en bas */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm min-w-sm z-20">
        <Navbar user={user} publicKey={publicKey} />
      </div>
    </div>
  );
}
