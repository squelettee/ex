"use server";

import prisma from "@/lib/prisma";

export async function getUserTokens(wallet: string) {
  try {
    const user = await prisma.user.findUnique({ where: { wallet } });
    return { success: true, tokens: user?.tokens ?? 0, lastDailyClaim: user?.lastDailyClaim ?? null };
  } catch (error) {
    console.error("getUserTokens error", error);
    return { success: false, tokens: 0, lastDailyClaim: null };
  }
}


