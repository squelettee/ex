"use client";

import { dislikeUser } from "@/actions/dislike";
import { likeUser } from "@/actions/like-user";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { CoinsIcon, HeartIcon, MessageCircleHeart, SettingsIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "../../../generated/prisma";

type UserWithRelations = User & {
  dislikes: { toId: string }[],
  likes: { toId: string }[],
  likedBy: { fromId: string }[]
};

export default function DashboardClient({ usersProps, user }: { usersProps: UserWithRelations[], user: UserWithRelations | null }) {
  const { connected, publicKey } = useWallet();
  const [users, setUsers] = useState<UserWithRelations[]>(usersProps);
  const router = useRouter();
  const [likeAnimation, setLikeAnimation] = useState<{ id: string | null, type: 'like' | 'dislike' | null }>({ id: null, type: null });

  useEffect(() => {
    if (!connected) {
      router.push("/");
    }
    setUsers(usersProps);
  }, [connected, router, usersProps]);

  const dislikedIds = user?.dislikes?.map((d: { toId: string }) => d.toId) ?? [];
  const likedIds = user?.likes?.map((l: { toId: string }) => l.toId) ?? [];
  const likedByIds = user?.likedBy?.map((l: { fromId: string }) => l.fromId) ?? [];
  const matchedIds = likedIds.filter((id: string) => likedByIds.includes(id));

  async function handleLike(userId: string, type: 'like' | 'dislike') {
    if (!publicKey) return;

    const currentUser = users.find(u => u.wallet === publicKey.toBase58());
    if (!currentUser) return;
    if (currentUser.id === userId) return;

    setLikeAnimation({ id: userId, type });
    if (type === 'like') {
      await likeUser(currentUser.id, userId);
    } else if (type === 'dislike') {
      await dislikeUser(currentUser.id, userId);
    }
    setTimeout(() => setLikeAnimation({ id: null, type: null }), 1000);

    setUsers(prev => prev.filter(u => u.id !== userId));
  }

  return (
    <div
      className="flex max-w-sm min-w-sm flex-col h-screen w-full bg-background items-center justify-between mx-auto"
      style={{ backgroundImage: 'url(/backgroundshape.webp)', backgroundSize: 'cover' }}
    >
      <div className="flex flex-row justify-end items-center gap-1 p-2 fixed top-0 ">
        <p className="text-foreground font-bold">{user?.tokens}</p>
        <CoinsIcon className="w-4 h-4 text-foreground" />
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full self-start mt-16 h-[80vh]">
          {(!user?.image || !user?.name || !user?.bio) ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-xl font-bold text-foreground">Update your profile to swipe</p>
              <Link href={`/dashboard/edit-profile?wallet=${publicKey?.toBase58()}`} className="mt-4 px-6 py-2 bg-primary text-primary-foreground font-bold rounded-lg shadow hover:bg-primary/80 transition-colors">
                Edit Profile
              </Link>
            </div>
          ) : users.filter(user =>
            user.wallet !== publicKey?.toBase58() &&
            !dislikedIds.includes(user.id) &&
            !matchedIds.includes(user.id) &&
            user.image &&
            user.name &&
            user.bio
          ).length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-xl font-bold text-foreground">No more profiles available</p>
              <p className="text-muted-foreground mt-2">Check back later for new matches!</p>
            </div>
          ) : (
            (() => {
              const filteredUsers = users.filter(userItem =>
                userItem.wallet !== publicKey?.toBase58() &&
                !dislikedIds.includes(userItem.id) &&
                !matchedIds.includes(userItem.id) &&
                userItem.image &&
                userItem.name &&
                userItem.bio
              );
              const currentProfile = filteredUsers[0];

              return currentProfile && (
                <div
                  key={currentProfile.id}
                  className="relative flex flex-col items-center rounded-4xl shadow h-full overflow-hidden"
                >
                  {likeAnimation.id === currentProfile.id && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center">
                      {likeAnimation.type === 'like' ? (
                        <HeartIcon className="w-32 h-32 text-destructive animate-bounce" />
                      ) : (
                        <XIcon className="w-32 h-32 text-muted-foreground animate-bounce" />
                      )}
                    </div>
                  )}
                  {currentProfile.image && (
                    <div className="w-full h-full relative">
                      <Image
                        src={currentProfile.image}
                        alt="User Image"
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/70 to-transparent">
                        <div className="flex items-center gap-2 pl-4">
                          <p className="font-bold text-xl text-card-foreground">{currentProfile.name}</p>
                        </div>
                        <p className="text-card-foreground line-clamp-2 pl-4">{currentProfile.bio}</p>
                        <div className="flex justify-around items-center h-18 ">
                          <Image src={"/nope.png"} height={70} width={70} alt="dislike" onClick={() => handleLike(currentProfile.id, 'dislike')} className="cursor-pointer hover:scale-110 transition-transform grayscale" />
                          <Image src={"/like.png"} height={70} width={70} alt="like" onClick={() => handleLike(currentProfile.id, 'like')} className="cursor-pointer hover:scale-110 transition-transform" style={{ filter: 'drop-shadow(0 0 8px var(--primary))' }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })()
          )}
        </div>
      </div>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm min-w-sm z-20 h-[10vh]">
        <Navbar user={user} publicKey={publicKey} />
      </div>
    </div>
  );
}

export function Navbar({ user, publicKey }: { user: User | null, publicKey: PublicKey | null }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-row gap-2 justify-around items-center w-full h-[10vh] border-t-2 border-primary bg-background/80">
      {pathname === `/dashboard/edit-profile` ? (
        <SettingsIcon className="w-10 h-10 text-primary hover:text-foreground transition-colors rounded-full p-1" />
      ) : (
        <Link href={`/dashboard/edit-profile?wallet=${publicKey?.toBase58()}`} className="text-primary hover:text-foreground transition-colors">
          <SettingsIcon className="w-10 h-10 text-primary hover:text-foreground transition-colors rounded-full p-1" />
        </Link>
      )}

      {pathname === `/dashboard/match-profile` ? (
        <MessageCircleHeart className="w-10 h-10 text-primary hover:text-foreground transition-colors rounded-full p-1" />
      ) : (
        <Link href={`/dashboard/match-profile?userId=${user?.id}&wallet=${publicKey?.toBase58()}`} className="text-primary hover:text-foreground transition-colors">
          <MessageCircleHeart className="w-10 h-10 text-primary hover:text-foreground transition-colors rounded-full p-1" />
        </Link>
      )}

      {pathname === `/dashboard?wallet=${publicKey?.toBase58()}` ? (
        <HeartIcon className="w-10 h-10 text-primary hover:text-foreground transition-colors rounded-full p-1" />
      ) : (
        <Link href={`/dashboard?wallet=${publicKey?.toBase58()}`} className="text-primary hover:text-foreground transition-colors">
          <HeartIcon className="w-10 h-10 text-primary hover:text-foreground transition-colors rounded-full p-1" />
        </Link>
      )}

      {pathname === `/dashboard/challenges-token?wallet=${publicKey?.toBase58()}` ? (
        <CoinsIcon className="w-10 h-10 text-primary hover:text-foreground transition-colors rounded-full p-1" />
      ) : (
        <Link href={`/dashboard/challenges-token?wallet=${publicKey?.toBase58()}`} className="text-primary hover:text-foreground transition-colors">
          <CoinsIcon className="w-10 h-10 text-primary hover:text-foreground transition-colors rounded-full p-1" />
        </Link>
      )}
    </div>
  );
}