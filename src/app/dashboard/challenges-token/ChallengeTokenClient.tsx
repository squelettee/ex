"use client";
import { claimSocialMission } from "@/actions/claim-social-mission";
import { dailyClaim } from "@/actions/daily-claim";
import { Button } from "@/components/ui/button";
import { useWallet } from "@solana/wallet-adapter-react";
import { isSameDay } from "date-fns";
import { CoinsIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { User } from "../../../../generated/prisma";
import { Navbar } from "../DashboardClient";

const SOCIALS = [
  {
    key: "x" as const,
    label: "Follow on X",
    url: "https://x.com/myExonsol?t=kXhXt-D6Y6muXLmZxqtnFg&s=09",
    appUrl: "twitter://user?screen_name=myExonsol",
    field: "visitedX" as const,
  },
  {
    key: "instagram" as const,
    label: "Follow on Instagram",
    url: "https://www.instagram.com/exonsol/",
    appUrl: "instagram://user?username=exonsol",
    field: "visitedInstagram" as const,
  },
  {
    key: "tiktok" as const,
    label: "Follow on TikTok",
    url: "https://www.tiktok.com/@exonsol?_t=ZN-8vkWKxytwpi&_r=1",
    appUrl: "tiktok://user/@exonsol",
    field: "visitedTiktok" as const,
  },
  {
    key: "youtube" as const,
    label: "Subscribe on YouTube",
    url: "https://www.youtube.com/@exonsolana",
    appUrl: "youtube://channel/UCexonsolana",
    field: "visitedYoutube" as const,
  },
  {
    key: "telegram" as const,
    label: "Join Telegram",
    url: "https://t.me/myexonsol",
    appUrl: "tg://resolve?domain=myexonsol",
    field: "visitedTelegram" as const,
  },
];

type SocialKey = typeof SOCIALS[number]["key"];

type UserWithSocials = Omit<User, "lastDailyClaim"> & {
  visitedX: boolean;
  visitedInstagram: boolean;
  visitedTiktok: boolean;
  visitedYoutube: boolean;
  visitedTelegram: boolean;
  lastDailyClaim?: string | null;
};

export default function ChallengeTokenClient({ user: initialUser }: { user: UserWithSocials | null }) {
  const { publicKey } = useWallet();
  const [user, setUser] = useState<UserWithSocials | null>(initialUser);
  const [loading, setLoading] = useState<SocialKey | null>(null);
  const [dailyLoading, setDailyLoading] = useState(false);
  const [dailyClaimed, setDailyClaimed] = useState(false);

  useEffect(() => {
    if (!user?.lastDailyClaim) {
      setDailyClaimed(false);
      return;
    }
    const last = new Date(user.lastDailyClaim);
    setDailyClaimed(isSameDay(last, new Date()));
  }, [user?.lastDailyClaim]);

  async function handleVisitAndClaim(socialKey: SocialKey, url: string) {
    if (!user || !publicKey) return;
    setLoading(socialKey);

    const social = SOCIALS.find(s => s.key === socialKey)!;

    // Try to open native app first
    try {
      window.location.href = social.appUrl;
      // Wait a bit to see if the app opens
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch {
      // If native app fails, open in browser
      window.open(url, '_blank');
    }

    // Claim tokens
    const res = await claimSocialMission(publicKey.toBase58(), socialKey);
    if (res.success && !res.alreadyClaimed) {
      setUser({ ...user, tokens: res.tokens, [social.field]: true });
    }
    setLoading(null);
  }

  async function handleDailyClaim() {
    if (!user || !publicKey || dailyClaimed) return;
    setDailyLoading(true);
    const data = await dailyClaim(publicKey.toBase58());
    if (data.success) {
      setUser({ ...user, tokens: data.tokens, lastDailyClaim: data?.lastDailyClaim ?? null });
      setDailyClaimed(!data.alreadyClaimed ? true : dailyClaimed);
    }
    setDailyLoading(false);
  }

  return (
    <div className="min-h-screen w-full max-w-sm min-w-sm mx-auto flex flex-col items-center justify-start relative overflow-hidden bg-background text-foreground">
      <div className="flex flex-row justify-end items-center gap-1 p-2 fixed top-0 ">
        <p className="text-foreground font-bold">{user?.tokens}</p>
        <CoinsIcon className="w-4 h-4 text-foreground" />
      </div>
      <div className="inline-flex items-center border focus:outline-none mt-16 focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-8 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm transition-none"><span className="mr-1 text-primary">✦</span>Earn tokens</div>

      {/* Transfer tokens to wallet - disabled until drop */}
      <div className="w-full flex flex-col gap-4 px-2">
        <div className="w-full flex flex-col items-center gap-2 bg-card/80 rounded-2xl p-4 mb-4 border-2 border-orange-400/70">
          <h2 className="text-lg font-bold text-orange-500 mb-1">Transfer to Wallet</h2>
          <p className="text-xs text-muted-foreground mb-2 text-center">
            Transfer your tokens to your Solana wallet
          </p>
          <Button
            className="w-full bg-orange-400/20 text-orange-600 font-bold rounded-xl py-2 cursor-not-allowed border border-orange-400/50"
            disabled
          >
            Wait until the drop
          </Button>
        </div>
        {/* Daily Claim Challenge */}
        <div className="w-full flex flex-col items-center gap-2 bg-card/80 rounded-2xl p-4 mb-4 border border-primary/30">
          <h2 className="text-lg font-bold text-primary mb-1">Daily Claim</h2>
          <p className="text-xs text-muted-foreground mb-2 text-center">
            Claim <span className="font-bold text-primary">200 tokens</span> once per day!
          </p>
          <Button
            className="w-full bg-primary text-primary-foreground font-bold rounded-xl py-2 hover:bg-primary/80 transition-colors"
            disabled={dailyClaimed || dailyLoading}
            onClick={handleDailyClaim}
          >
            {dailyLoading ? "Claiming..." : dailyClaimed ? "Already claimed today" : "Claim 200 tokens"}
          </Button>
        </div>
        {/* Bloc Referral Challenge */}
        {user?.id && (
          <div className="w-full flex flex-col items-center gap-2 bg-card/80 rounded-2xl p-4 mt-4 mb-4 border border-primary/30">
            <h2 className="text-lg font-bold text-primary mb-1">Referral Challenge</h2>
            <div className="flex flex-row items-center gap-2 w-full">
              <input
                type="text"
                readOnly
                value={`${process.env.NEXT_PUBLIC_APP_URL}/referral=${user.id}`}
                className="flex-1 px-2 py-1 rounded border border-muted bg-muted text-xs text-muted-foreground outline-none"
                style={{ minWidth: 0 }}
                onFocus={e => e.target.select()}
              />
              <Button
                type="button"
                size="sm"
                className="px-3 py-1 text-xs font-bold"
                onClick={() => {
                  navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_APP_URL}?referral=${user.id}`);
                }}
              >
                Copy
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              If someone uses your link when signing up, you will receive <span className="font-bold text-primary">500 tokens</span>!
            </p>
          </div>
        )}
        {/* Social challenges */}
        {SOCIALS.map(social => (
          <div key={social.key} className="rounded-2xl p-4 bg-card/70 text-card-foreground flex flex-col gap-2">
            <h2 className="text-xl font-semibold mb-2 text-primary">{social.label}</h2>
            <p className="text-muted-foreground mb-4">Follow us to earn 50 tokens</p>
            <Button
              className="w-full bg-primary text-primary-foreground font-bold rounded-xl py-2 hover:bg-primary/80 transition-colors"
              disabled={!!user?.[social.field] || loading === social.key}
              onClick={() => handleVisitAndClaim(social.key, social.url)}
            >
              {user?.[social.field]
                ? "Claimed"
                : loading === social.key
                  ? "Claiming..."
                  : "Visit & Claim 50 tokens"}
            </Button>
          </div>
        ))}
        {/* Défi profil déjà présent */}
        <div className="rounded-2xl p-4 bg-card/70 text-card-foreground">
          <h2 className="text-xl font-semibold mb-2 text-primary">Complete your profile</h2>
          <p className="text-muted-foreground mb-4">Complete your profile to earn 30 tokens</p>
          {user?.onboarded ? (
            <Button className="w-full bg-primary/20 text-primary-foreground font-bold rounded-xl py-2 cursor-not-allowed" disabled>
              Done
            </Button>
          ) : (
            <Link href={`/dashboard/edit-profile?wallet=${publicKey?.toBase58()}`}>
              <Button className="w-full bg-primary text-primary-foreground font-bold rounded-xl py-2 hover:bg-primary/80 transition-colors">
                Complete my profile
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div className="mt-4 p-4 bg-card/60 rounded-lg w-full max-w-sm text-center text-muted-foreground pb-32">
        <p className="text-sm">
          Tokens allow you to send messages and interact with other users.<br />
          The more active you are on the platform, the more tokens you earn!
        </p>
      </div>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm min-w-sm z-20">
        <Navbar
          user={
            user
              ? { ...user, lastDailyClaim: user.lastDailyClaim ? new Date(user.lastDailyClaim) : null }
              : null
          }
          publicKey={publicKey}
        />
      </div>
    </div>
  );
}