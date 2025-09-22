"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useWallet } from "@solana/wallet-adapter-react";
import { Coins, Gift, Menu, MessageCircle, Rocket, ShieldCheck, Sparkles, Trophy, Twitter } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";

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
  const [txCount, setTxCount] = useState<number>(0);
  const [goalReached, setGoalReached] = useState<boolean>(false);

  // Fake Solana transactions
  useEffect(() => {
    const transactionTypes = [
      { type: "Transaction", emoji: "🔥", color: "text-orange-500" },
      { type: "Transaction", emoji: "🔥", color: "text-red-500" },
      { type: "Transaction", emoji: "🔥", color: "text-yellow-500" },
      { type: "Transaction", emoji: "🔥", color: "text-orange-600" },
      { type: "Transaction", emoji: "🔥", color: "text-red-600" },
      { type: "Transaction", emoji: "🔥", color: "text-yellow-600" },
    ];

    const generateRandomAddress = () => {
      const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789";
      let result = "";
      for (let i = 0; i < 44; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    };

    const generateRandomAmount = () => {
      return (Math.random() * 1000).toFixed(2);
    };

    const showTransaction = () => {
      const txType = transactionTypes[Math.floor(Math.random() * transactionTypes.length)];
      const address = generateRandomAddress();
      const amount = generateRandomAmount();

      // Increment counter
      setTxCount(prev => prev + 1);

      toast.success(
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className={`text-2xl animate-pulse ${txType.color}`}>{txType.emoji}</span>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-orange-600">{txType.type}</span>
            <span className="text-xs text-muted-foreground">
              {amount} SOL • {address.slice(0, 8)}...{address.slice(-8)}
            </span>
          </div>
        </div>,
        {
          duration: 3000,
          className: "border-l-4 border-orange-500 bg-gradient-to-r from-orange-900/20 to-red-900/20 shadow-lg dark:bg-gradient-to-r dark:from-orange-900/30 dark:to-red-900/30",
        }
      );
    };

    // Show first transaction immediately
    showTransaction();

    // Then show one every 1.2 seconds (slower)
    const interval = setInterval(showTransaction, 1200);

    return () => clearInterval(interval);
  }, []);

  // Check if goal is reached
  useEffect(() => {
    if (txCount >= 20 && !goalReached) {
      setGoalReached(true);
    }
  }, [txCount, goalReached]);

  return (
    <div className="dark">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-6xl px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href="#hero" className="inline-flex items-center gap-2">
            <Image src="/logo.png" alt="Nextex logo" width={30} height={30} className="rounded-sm" />
            <span className="font-semibold">Nextex Beta</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <Link href="#service" className="hover:text-foreground">Features</Link>
            <Link href="#points" className="hover:text-foreground">Points & Airdrop</Link>
            <Link href="#roadmap" className="hover:text-foreground">Roadmap</Link>
            <Link href="#rewards" className="hover:text-foreground">Rewards</Link>
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
                <Button variant="outline" size="icon" aria-label="Open menu">
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
                      Features
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#points" className="px-3 py-2 rounded-md text-base hover:bg-accent hover:text-accent-foreground" scroll>
                      Points & Airdrop
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#roadmap" className="px-3 py-2 rounded-md text-base hover:bg-accent hover:text-accent-foreground" scroll>
                      Roadmap
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#rewards" className="px-3 py-2 rounded-md text-base hover:bg-accent hover:text-accent-foreground" scroll>
                      Rewards
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

        {/* Transaction Counter */}
        <section id="tx-counter" className="container mx-auto max-w-4xl px-4 md:px-8 pb-10 md:pb-14">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Live Blockchain Activity</h2>
            <p className="text-sm md:text-base text-muted-foreground">Real-time transaction counter</p>
          </div>

          {/* Progress Bar */}
          {!goalReached && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Progress to Launch</span>
                <span className="text-sm text-muted-foreground">{txCount}/20 transactions</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${Math.min((txCount / 20) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Total Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {txCount.toLocaleString()}
                </div>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 font-medium">LIVE</span>
                </div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Network</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-emerald-600">Solana</div>
                <div className="text-xs text-muted-foreground mt-1">Mainnet Beta</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-green-600">Active</div>
                <div className="text-xs text-muted-foreground mt-1">Real-time updates</div>
              </CardContent>
            </Card>
          </div>

          {/* Goal Reached Button */}
          {goalReached && (
            <div className="mt-8 text-center">
              <div className="inline-flex flex-col items-center gap-4 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-lg font-bold text-green-600">Goal Reached!</span>
                </div>
                <p className="text-sm text-muted-foreground">20 transactions reached - The app is live!</p>
                <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold">
                  <Link href="/">Open App</Link>
                </Button>
              </div>
            </div>
          )}
        </section>

        {/* Trust Logos (moved up for credibility) */}
        <section id="trust" className="container mx-auto max-w-6xl px-4 md:px-8 pb-10 md:pb-14">
          <div className="text-center text-xs md:text-sm text-muted-foreground mb-6">
            Powering the next generation of builders
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70">
            <Link href="https://phantom.app" target="_blank" rel="noreferrer" aria-label="Phantom">
              <Image src="/phantom.svg" alt="Phantom" width={110} height={28} className="h-6 w-auto" />
            </Link>
            <Link href="https://solana.com" target="_blank" rel="noreferrer" aria-label="Solana">
              <Image src="/solana.svg" alt="Solana" width={110} height={28} className="h-6 w-auto" />
            </Link>
            <Link href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" aria-label="App Store">
              <Image src="/appstore.svg" alt="App Store" width={128} height={28} className="h-6 w-auto" />
            </Link>
            <Link href="https://play.google.com/" target="_blank" rel="noreferrer" aria-label="Google Play">
              <Image src="/playstore.svg" alt="Google Play" width={128} height={28} className="h-6 w-auto" />
            </Link>
          </div>
        </section>

        {/* Utility Image */}
        <section id="utility" className="container mx-auto max-w-6xl px-4 md:px-8 pb-16 md:pb-24">
          <div className="relative overflow-hidden rounded-2xl border shadow-sm bg-black">
            <Image
              src="/bgimage.jpg"
              alt="Nextex utility preview"
              width={1600}
              height={900}
              className="h-64 sm:h-80 md:h-[460px] w-full object-cover"
              priority
            />
          </div>
        </section>

        {/* Features */}
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
                <CardContent className="text-sm text-muted-foreground p-6 pt-0">Complete objectives and climb the leaderboard.</CardContent>
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

        {/* Roadmap (moved before Rewards for narrative flow) */}
        <section id="roadmap" className="container mx-auto max-w-5xl px-4 md:px-8 pb-16 md:pb-24">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-semibold">Roadmap</h2>
            <p className="text-sm md:text-base text-muted-foreground">Interactive roadmap</p>
          </div>

          <Carousel className="px-6" opts={{ align: "start" }}>
            <CarouselContent>
              {[
                {
                  phase: 'Phase 1 – Bootstrapping',
                  items: [
                    { num: '01', title: 'Beta Release of NextEx App', desc: 'Early access to test and shape the product.' },
                    { num: '02', title: 'Organic Growth of EX Community', desc: 'Build an engaged and authentic base.' },
                    { num: '03', title: 'ExoSol Ecosystem', desc: 'Mini-games, NFTs and exclusive utilities.' },
                    { num: '04', title: 'Influencer & Marketing', desc: 'KOLs, ads and viral activations.' },
                  ],
                },
                {
                  phase: 'Phase 2 – Launch',
                  items: [
                    { num: '05', title: 'Token Launch: $EX', desc: 'Community-first distribution.' },
                    { num: '06', title: 'Official App Release', desc: 'Full and stable version.' },
                    { num: '07', title: 'iOS & Android', desc: 'Release on major app stores.' },
                    { num: '08', title: 'Web App', desc: 'Full-featured cross-platform web app.' },
                  ],
                },
                {
                  phase: 'Phase 3 – Scale',
                  items: [
                    { num: '09', title: 'Strategic Partnerships', desc: 'Alliances with Web3 projects, brands and creators.' },
                    { num: '10', title: 'CEX Listings', desc: 'Expand $EX accessibility beyond DeFi.' },
                    { num: '11', title: 'Mainstream Expansion', desc: 'Grow visibility to the broader market.' },
                    { num: '12', title: 'Challenge Industry Giants', desc: 'Aim to compete with incumbents.' },
                  ],
                },
              ].map((group, gi) => (
                <CarouselItem key={gi}>
                  <div className="mx-auto max-w-3xl">
                    <div className="mb-4 text-sm font-medium text-muted-foreground">{group.phase}</div>
                    <ol className="relative border-l pl-4 md:pl-6 border-border/60">
                      {group.items.map((it) => (
                        <li key={it.num} className="mb-6 last:mb-0">
                          <div
                            className={`absolute -left-2 md:-left-3 mt-1 h-3 w-3 rounded-full ${["01", "02", "03"].includes(it.num) ? "bg-emerald-500" : "bg-rose-500"}`}
                            aria-hidden
                          />
                          <div className="flex items-start gap-3">
                            <span
                              className={`inline-flex h-6 items-center rounded-md px-2 text-xs font-semibold ${["01", "02", "03"].includes(it.num) ? "bg-emerald-500/10 text-emerald-600" : "bg-rose-500/10 text-rose-600"}`}
                            >
                              {it.num}
                            </span>
                            <div className="space-y-1">
                              <div className="text-sm md:text-base font-medium">{it.title}</div>
                              <p className="text-xs md:text-sm text-muted-foreground max-w-prose">{it.desc}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </section>

        {/* Email Opt-in */}
        <section id="subscribe" className="container mx-auto max-w-3xl px-4 md:px-8 pb-16 md:pb-24">
          <Card className="bg-card/50">
            <CardHeader className="p-6 md:p-8">
              <CardTitle className="text-lg md:text-xl">Stay informed about the official launch</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 md:px-8">
              <NewsletterForm />
              <p className="mt-3 text-xs text-muted-foreground">No spam. You can unsubscribe anytime.</p>
            </CardContent>
          </Card>
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
                Points are earned by using the app (daily claim, likes, matches, messages, and challenges). They unlock in-app perks and contribute toward the future $EX token airdrop.
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
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Invalid email");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Server error");
      setStatus("success");
      setMessage("Thanks! We'll keep you posted.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("We couldn't save your email. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
      <Input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-11"
        required
      />
      <Button type="submit" className="h-11 px-6" disabled={status === "loading"}>
        {status === "loading" ? "Submitting…" : "Notify me"}
      </Button>
      {message && (
        <div className={`text-xs sm:ml-2 ${status === "error" ? "text-destructive" : "text-muted-foreground"}`}>
          {message}
        </div>
      )}
    </form>
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


