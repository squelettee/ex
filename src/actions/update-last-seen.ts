"use server";

import prisma from "@/lib/prisma";

export async function updateLastSeen(wallet: string) {

  const user = await prisma.user.findUnique({ where: { wallet } });
  if (!user) {
    console.warn("User not found for wallet:", wallet);
    return;
  }
  await prisma.user.update({
    where: { wallet },
    data: { lastSeen: new Date() },
  });
}