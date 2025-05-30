"use server";

import prisma from "@/lib/prisma";
import { PublicKey } from "@solana/web3.js";

export async function createUser(publicKeyString: string, referral?: string) {
  const publicKey = new PublicKey(publicKeyString);

  const user = await prisma.user.findUnique({
    where: { wallet: publicKey.toBase58() },
  });

  if (user) {
    return { success: true, onboarded: user.onboarded };
  }


  if (referral && referral !== "undefined") {
    const referralUser = await prisma.user.findFirst({
      where: { id: referral },
    });

    if (referralUser) {
      await prisma.user.update({
        where: { id: referralUser.id },
        data: {
          tokens: {
            increment: 500,
          },
        },
      });
    } else {
      console.warn("Referral code not found:", referral);
    }
  }


  await prisma.user.create({
    data: { wallet: publicKey.toBase58(), lastSeen: new Date(), referral: referral || null },
  });

  return { success: true, onboarded: false };
}