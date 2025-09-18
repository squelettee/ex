"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useWallet } from "@solana/wallet-adapter-react";
import { Coins, Gift, Menu, MessageCircle, Rocket, ShieldCheck, Sparkles, Trophy, Twitter } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const WalletMultiButton = dynamic(
  () => import("@solana/wallet-adapter-react-ui").then((mod) => mod.WalletMultiButton),
  { ssr: false }
);

async function fetchUserTokens(wallet: string) {
  const { getUserTokens } = await import("@/actions/get-user-tokens");
  return getUserTokens(wallet);
}

export default function Page() {
  const { connected, publicKey } = useWallet();
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-6xl px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="#hero" className="inline-flex items-center gap-2">
            <Image src="/logo.png" alt="Nextex logo" width={30} height={30} className="rounded-sm" />
            <span className="font-semibold">Nextex Beta</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <Link href="#service" className="hover:text-foreground">Service</Link>
            <Link href="#points" className="hover:text-foreground">Points & Airdrop</Link>
            <Link href="#rewards" className="hover:text-foreground">Rewards</Link>
            <Link href="#faq" className="hover:text-foreground">FAQ</Link>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Link href="https://x.com/nextexapp" target="_blank" rel="noreferrer" aria-label="Nextex on X">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
            <Button asChild size="sm">
              <Link href="/">Open the app</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Ouvrir le menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-6">
                <SheetHeader className="mb-2">
                  <SheetTitle className="text-sm text-muted-foreground">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1">
                  <SheetClose asChild>
                    <Link href="#service" className="px-3 py-2 rounded-md text-base hover:bg-accent hover:text-accent-foreground" scroll>
                      Service
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#points" className="px-3 py-2 rounded-md text-base hover:bg-accent hover:text-accent-foreground" scroll>
                      Points & Airdrop
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#rewards" className="px-3 py-2 rounded-md text-base hover:bg-accent hover:text-accent-foreground" scroll>
                      Rewards
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#faq" className="px-3 py-2 rounded-md text-base hover:bg-accent hover:text-accent-foreground" scroll>
                      FAQ
                    </Link>
                  </SheetClose>
                </nav>
                <Separator className="my-4" />
                <div className="flex gap-3 items-center">
                  <SheetClose asChild>
                    <Link href="https://x.com/nextexapp" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-base hover:bg-accent hover:text-accent-foreground">
                      <Twitter className="h-4 w-4" />
                      Follow on X
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button asChild className="flex-1">
                      <Link href="/">Open the app</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-background text-foreground" style={{ backgroundImage: 'url(/backgroundshape.webp)', backgroundSize: 'cover' }}>
        {/* Hero */}
        <section id="hero" className="container mx-auto max-w-6xl px-4 md:px-8 pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="inline-flex items-center gap-3 text-primary">
              <Image src="/logo.png" alt="Nextex logo" width={80} height={80} className="rounded-md" />
              <span className="text-3xl md:text-5xl font-bold tracking-tight">Nextex Beta</span>
            </div>
            <p className="max-w-3xl text-sm md:text-base leading-relaxed text-muted-foreground">
              Meet new people, chat privately, and earn rewards by completing challenges.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/">Get started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/">Open the app</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Utility Image */}
        <section id="utility" className="container mx-auto max-w-6xl px-4 md:px-8 pb-16 md:pb-24">
          <div className="relative overflow-hidden rounded-2xl border bg-card/30 shadow-sm">
            <Image
              src="/bgimage.jpg"
              alt="Nextex utility preview"
              width={1600}
              height={900}
              className="h-64 sm:h-80 md:h-[460px] w-full object-cover object-[center_30%]"
              priority
            />
          </div>
        </section>

        {/* Service Explanation */}
        <section id="service" className="container mx-auto max-w-6xl px-4 md:px-8 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <CardHeader className="flex flex-row items-center gap-4 p-6 md:p-8">
                <Sparkles className="h-6 w-6 text-primary" />
                <CardTitle className="text-base md:text-lg">Smart discovery</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground p-6 pt-0 md:px-8">
                Find compatible profiles using your preferences and interactions.
              </CardContent>
            </Card>

            <Card className="backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <CardHeader className="flex flex-row items-center gap-4 p-6 md:p-8">
                <MessageCircle className="h-6 w-6 text-primary" />
                <CardTitle className="text-base md:text-lg">Private chats</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground p-6 pt-0 md:px-8">
                Enjoy fast and reliable conversations with a smooth chat experience.
              </CardContent>
            </Card>

            <Card className="backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <CardHeader className="flex flex-row items-center gap-4 p-6 md:p-8">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <CardTitle className="text-base md:text-lg">Security & control</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground p-6 pt-0 md:px-8">
                Your experience stays in control with clear, simple settings.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Points & Airdrop */}
        <section id="points" className="container mx-auto max-w-6xl px-4 md:px-8 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* Left: Copy on soft primary background */}
            <Card className="border-0 bg-primary/10">
              <CardHeader className="p-6 md:p-8 space-y-3">
                <div className="inline-flex items-center gap-2">
                  <Coins className="h-5 w-5 text-primary" />
                  <Badge variant="secondary">Points & Airdrop</Badge>
                </div>
                <CardTitle className="text-xl md:text-2xl">Use points in-app and qualify for the $EX token airdrop</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 md:px-8 text-sm md:text-base text-muted-foreground space-y-3">
                <p>Earn points by completing challenges and daily actions. Points unlock in-app perks today and also count toward the $EX token airdrop at launch.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="w-full sm:w-auto">
                    <WalletMultiButton className="h-11 px-8 text-base rounded-md" />
                  </div>
                </div>
                {connected && (
                  <p className="text-xs text-muted-foreground break-all">Connected: {publicKey?.toBase58()}</p>
                )}
              </CardContent>
            </Card>

            {/* Right: Compact metrics card */}
            <Card className="border bg-card/60">
              <CardHeader className="p-6 md:p-8 flex flex-row items-center justify-between">
                <CardTitle className="text-base md:text-lg">Your progress</CardTitle>
                <Rocket className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent className="p-6 pt-0 md:px-8 grid grid-cols-2 gap-4 text-sm">
                {/* Points metric */}
                <PointsMetric />
                <div className="rounded-lg border p-4 bg-background/60">
                  <div className="text-xs text-muted-foreground">Airdrop eligibility</div>
                  <div className="text-lg font-semibold">{`Based on points`}</div>
                </div>
                <div className="rounded-lg border p-4 bg-background/60 col-span-2">
                  <div className="text-xs text-muted-foreground">Next boost</div>
                  <div className="text-sm">Complete 1 daily claim + 1 challenge</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Rewards */}
        <section id="rewards" className="container mx-auto max-w-6xl px-4 md:px-8 pb-16 md:pb-24">
          <div className="rounded-2xl border p-6 md:p-10 bg-card/50">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  <Badge variant="secondary">Rewards</Badge>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold">Earn more by completing challenges</h2>
                <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
                  Participate daily, collect points, and unlock exclusive benefits.
                </p>
              </div>
              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link href="/">Join now</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 p-6">
                  <Gift className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Daily claim</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground p-6 pt-0">Come back every day to collect your bonus.</CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 p-6">
                  <Trophy className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Challenges</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground p-6 pt-0">Complétez des objectifs et progressez dans le classement.</CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 p-6">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Fair & transparent</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground p-6 pt-0">Simple, visible rules for every user.</CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="container mx-auto max-w-4xl px-4 md:px-8 pb-16 md:pb-24">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-semibold">Frequently asked questions</h2>
            <p className="text-sm md:text-base text-muted-foreground">Common questions about Nextex</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem value="item-1" className="rounded-xl border bg-card/40">
              <AccordionTrigger className="px-4 py-4 md:px-6 md:py-5">What are Nextex Points?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4 md:px-6 md:pb-6 text-sm text-muted-foreground">
                Points are earned by using the app (daily claim, likes, matches, messages, and challenges). They unlock in-app perks and contribute toward the future X token airdrop.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="rounded-xl border bg-card/40">
              <AccordionTrigger className="px-4 py-4 md:px-6 md:py-5">How do points count toward the $EX token airdrop?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4 md:px-6 md:pb-6 text-sm text-muted-foreground">
                At token launch, your cumulative points will be used as an input to determine eligibility and allocation for the airdrop. Exact mechanics and snapshot timing will be announced before launch.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="rounded-xl border bg-card/40">
              <AccordionTrigger className="px-4 py-4 md:px-6 md:py-5">How do I earn points fast?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4 md:px-6 md:pb-6 text-sm text-muted-foreground">
                Claim your daily bonus, complete challenges, stay active in chats, and keep your profile updated. Seasonal events may offer boosted multipliers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="rounded-xl border bg-card/40">
              <AccordionTrigger className="px-4 py-4 md:px-6 md:py-5">When is the $EX token launching?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4 md:px-6 md:pb-6 text-sm text-muted-foreground">
                We’ll share the launch window and the airdrop snapshot date ahead of time. Keep earning points in the meantime—your activity counts.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="rounded-xl border bg-card/40">
              <AccordionTrigger className="px-4 py-4 md:px-6 md:py-5">Do I need KYC or extra steps for the airdrop?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4 md:px-6 md:pb-6 text-sm text-muted-foreground">
                Depending on your region, compliance steps may apply. We’ll publish clear requirements with the airdrop announcement.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <Separator className="container mx-auto max-w-6xl" />

        {/* Footer */}
        <footer className="container mx-auto max-w-6xl px-4 md:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 text-sm">
            <div className="inline-flex items-center gap-2">
              <Image src="/logo.png" alt="Nextex logo" width={30} height={30} className="rounded-sm" />
              <span className="font-semibold">Nextex Beta</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 text-muted-foreground">
              <Link href="#hero">Home</Link>
              <Link href="#service">Service</Link>
              <Link href="#points">Points & Airdrop</Link>
              <Link href="#rewards">Rewards</Link>
              <Link href="#faq">FAQ</Link>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">© {new Date().getFullYear()} Nextex. All rights reserved.
              <Link href="https://x.com/nextexapp" target="_blank" rel="noreferrer" aria-label="Nextex on X">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

function PointsMetric() {
  const { publicKey } = useWallet();
  const [tokens, setTokens] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const wallet = publicKey?.toBase58();
    if (!wallet) {
      setTokens(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    fetchUserTokens(wallet)
      .then((res) => setTokens(res?.tokens ?? 0))
      .catch(() => setTokens(0))
      .finally(() => setLoading(false));
  }, [publicKey]);

  const displayValue = !publicKey ? "Connect" : loading ? "…" : tokens ?? 0;

  return (
    <div className="rounded-lg border p-4 bg-background/60">
      <div className="text-xs text-muted-foreground">Points</div>
      <div className="text-lg font-semibold">{displayValue}</div>
    </div>
  );
}


