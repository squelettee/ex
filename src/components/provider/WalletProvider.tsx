"use client";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import React, { useMemo } from "react";

import {
  PhantomWalletAdapter,
} from "@solana/wallet-adapter-wallets";

import { SolanaMobileWalletAdapter } from "@solana-mobile/wallet-adapter-mobile";

import "@solana/wallet-adapter-react-ui/styles.css";

export default function AppWalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolanaMobileWalletAdapter({
        appIdentity: {
          name: "TonNomDApp",
        },
        addressSelector: {
          select: () => Promise.resolve("44'/501'/0'/0/0"),
        },
        authorizationResultCache: {
          get: async () => undefined,
          set: async () => { },
          clear: async () => { },
        },
        chain: WalletAdapterNetwork.Devnet,
        onWalletNotFound: async () => { },
      }),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
