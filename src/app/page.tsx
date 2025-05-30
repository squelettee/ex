"use client";

import { createUser } from "@/actions/create-user";
import { useWallet } from "@solana/wallet-adapter-react";
import { FlameIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
const WalletMultiButton = dynamic(
  () => import("@solana/wallet-adapter-react-ui").then((mod) => mod.WalletMultiButton),
  {
    ssr: false,
  }
);

export default function Page() {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
}

function Home() {
  const searchParams = useSearchParams();
  const referral = searchParams?.get("referral") || undefined;
  const { connected, publicKey } = useWallet();
  const router = useRouter();

  useEffect(() => {
    async function fetchAccount() {
      try {
        if (publicKey) {
          const user = await createUser(publicKey.toBase58(), referral || undefined);
          if (!user.onboarded) {
            router.push("/dashboard/edit-profile?wallet=" + publicKey.toBase58());
          } else {
            router.push("/dashboard?wallet=" + publicKey.toBase58());
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchAccount();
  }, [connected, publicKey, referral, router]);

  return (
    <div
      className="flex h-screen max-w-sm min-w-sm mx-auto bg-background text-foreground flex-col items-center justify-center gap-24 relative"
      style={{ backgroundImage: 'url(/backgroundshape.webp)', backgroundSize: 'cover' }}
    >
      <div className="relative flex flex-col items-center">
        <FlameIcon className="w-10 h-10 mb-2" />
        <h1 className="text-5xl font-bold text-primary text-center">Nextex</h1>
      </div>
      <div className="flex flex-col items-center gap-4">
        <WalletMultiButton />
        <p className="text-center text-sm text-muted-foreground px-8">
          Connect your wallet to access the app and start meeting new people
        </p>
      </div>
    </div>
  );
}
