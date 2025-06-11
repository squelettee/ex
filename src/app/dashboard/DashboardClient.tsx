"use client";

import { dislikeUser } from "@/actions/dislike";
import { likeUser } from "@/actions/like-user";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { CoinsIcon, HeartIcon, MessageCircleHeart, SettingsIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
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

  const [cardTransform, setCardTransform] = useState({ x: 0, y: 0, rotation: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [isProcessingSwipe, setIsProcessingSwipe] = useState(false);

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

  const filteredUsers = users.filter(userItem =>
    userItem.wallet !== publicKey?.toBase58() &&
    !dislikedIds.includes(userItem.id) &&
    !matchedIds.includes(userItem.id) &&
    userItem.image &&
    userItem.name &&
    userItem.bio
  );

  const handleSwipe = useCallback(async (userId: string, type: 'like' | 'dislike') => {
    if (!publicKey || isProcessingSwipe) return;

    const currentUser = users.find(u => u.wallet === publicKey.toBase58());
    if (!currentUser) return;
    if (currentUser.id === userId) return;

    setIsProcessingSwipe(true);

    if (type === 'like') {
      await likeUser(currentUser.id, userId);
    } else if (type === 'dislike') {
      await dislikeUser(currentUser.id, userId);
    }

    // Animation de sortie de la carte
    setCardTransform({
      x: type === 'like' ? 1000 : -1000,
      y: 0,
      rotation: type === 'like' ? 30 : -30
    });

    setTimeout(() => {
      setUsers(prev => prev.filter(u => u.id !== userId));
      setCardTransform({ x: 0, y: 0, rotation: 0 });
      setIsProcessingSwipe(false);
    }, 300);
  }, [publicKey, isProcessingSwipe, users, setUsers]);

  // Gestion des événements tactiles et souris avec événements globaux
  const handleStart = useCallback((clientX: number, clientY: number) => {
    if (isProcessingSwipe || filteredUsers.length === 0) return;
    setStartPos({ x: clientX, y: clientY });
    setIsDragging(true);
  }, [isProcessingSwipe, filteredUsers.length]);

  const handleMove = useCallback((clientX: number, clientY: number) => {
    if (!isDragging || isProcessingSwipe) return;

    const deltaX = clientX - startPos.x;
    const deltaY = clientY - startPos.y;
    const rotation = deltaX * 0.1; // Rotation proportionnelle au mouvement

    setCardTransform({ x: deltaX, y: deltaY, rotation });
  }, [isDragging, isProcessingSwipe, startPos.x, startPos.y]);

  const handleEnd = useCallback(() => {
    if (!isDragging || isProcessingSwipe) return;
    setIsDragging(false);

    const threshold = 100; // Distance minimum pour déclencher un swipe

    if (Math.abs(cardTransform.x) > threshold && filteredUsers.length > 0) {
      const currentProfile = filteredUsers[0];
      if (cardTransform.x > 0) {
        handleSwipe(currentProfile.id, 'like');
      } else {
        handleSwipe(currentProfile.id, 'dislike');
      }
    } else {
      // Retour à la position initiale si le swipe n'est pas assez fort
      setCardTransform({ x: 0, y: 0, rotation: 0 });
    }
  }, [isDragging, isProcessingSwipe, cardTransform.x, filteredUsers, handleSwipe]);

  // Événements tactiles
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  // Événements souris
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleStart(e.clientX, e.clientY);
  };

  // Gestion des événements globaux pour éviter les problèmes de propagation
  useEffect(() => {
    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
        const touch = e.touches[0];
        handleMove(touch.clientX, touch.clientY);
      }
    };

    const handleGlobalTouchEnd = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
        handleEnd();
      }
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault();
        handleMove(e.clientX, e.clientY);
      }
    };

    const handleGlobalMouseUp = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault();
        handleEnd();
      }
    };

    if (isDragging) {
      document.addEventListener('touchmove', handleGlobalTouchMove, { passive: false });
      document.addEventListener('touchend', handleGlobalTouchEnd, { passive: false });
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('touchmove', handleGlobalTouchMove);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, startPos, cardTransform, filteredUsers, isProcessingSwipe, handleEnd, handleMove, handleStart]);

  // Couleur d'overlay basée sur la direction du swipe
  const getOverlayColor = () => {
    if (cardTransform.x > 50) return 'rgba(34, 197, 94, 0.3)'; // Vert pour like
    if (cardTransform.x < -50) return 'rgba(239, 68, 68, 0.3)'; // Rouge pour dislike
    return 'transparent';
  };

  const getSwipeText = () => {
    if (cardTransform.x > 50) return 'LIKE';
    if (cardTransform.x < -50) return 'NOPE';
    return '';
  };

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
        <div className="w-full self-start mt-16 h-[80vh] relative">
          {(!user?.image || !user?.name || !user?.bio) ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-xl font-bold text-foreground">Update your profile to swipe</p>
              <Link href={`/dashboard/edit-profile?wallet=${publicKey?.toBase58()}`} className="mt-4 px-6 py-2 bg-primary text-primary-foreground font-bold rounded-lg shadow hover:bg-primary/80 transition-colors">
                Edit Profile
              </Link>
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-xl font-bold text-foreground">No more profiles available</p>
              <p className="text-muted-foreground mt-2">Check back later for new matches!</p>
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Cartes en arrière-plan (prochains profils) */}
              {filteredUsers.slice(1, 3).map((userItem, index) => (
                <div
                  key={userItem.id}
                  className="absolute w-full h-full rounded-4xl shadow-lg overflow-hidden pointer-events-none"
                  style={{
                    transform: `scale(${0.95 - index * 0.05}) translateY(${index * 10}px)`,
                    zIndex: 10 - index,
                    opacity: 0.8 - index * 0.2
                  }}
                >
                  {userItem.image && (
                    <div className="w-full h-full relative">
                      <Image
                        src={userItem.image}
                        alt="User Image"
                        fill
                        className="object-cover object-top"
                        draggable={false}
                      />
                    </div>
                  )}
                </div>
              ))}

              {/* Carte principale (swipeable) */}
              {filteredUsers[0] && (
                <div
                  ref={cardRef}
                  className="absolute w-full h-full rounded-4xl shadow-lg overflow-hidden cursor-grab active:cursor-grabbing select-none"
                  style={{
                    transform: `translate(${cardTransform.x}px, ${cardTransform.y}px) rotate(${cardTransform.rotation}deg)`,
                    transition: isDragging ? 'none' : 'transform 0.3s ease-out',
                    zIndex: 20
                  }}
                  onTouchStart={handleTouchStart}
                  onMouseDown={handleMouseDown}
                >
                  {/* Overlay de swipe */}
                  <div
                    className="absolute inset-0 z-30 flex items-center justify-center"
                    style={{ backgroundColor: getOverlayColor() }}
                  >
                    {getSwipeText() && (
                      <span className="text-white text-6xl font-bold transform rotate-12 border-4 border-white px-8 py-4 rounded-lg">
                        {getSwipeText()}
                      </span>
                    )}
                  </div>



                  {filteredUsers[0].image && (
                    <div className="w-full h-full relative">
                      <Image
                        src={filteredUsers[0].image}
                        alt="User Image"
                        fill
                        className="object-cover object-top"
                        draggable={false}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/70 to-transparent">
                        <div className="flex items-center gap-2 pl-4">
                          <p className="font-bold text-xl text-card-foreground">{filteredUsers[0].name}</p>
                        </div>
                        <p className="text-card-foreground line-clamp-2 pl-4 pb-4">{filteredUsers[0].bio}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Boutons d'action (en bas) */}
              {filteredUsers[0] && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-6 z-30">
                  <button
                    onClick={() => handleSwipe(filteredUsers[0].id, 'dislike')}
                    className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <XIcon className="w-8 h-8 text-red-500" />
                  </button>
                  <button
                    onClick={() => handleSwipe(filteredUsers[0].id, 'like')}
                    className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <HeartIcon className="w-8 h-8 text-green-500" />
                  </button>
                </div>
              )}
            </div>
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