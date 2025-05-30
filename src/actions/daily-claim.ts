"use server";

import prisma from "@/lib/prisma";
import { isSameDay } from "date-fns";

export async function dailyClaim(wallet: string) {
  const user = await prisma.user.findUnique({ where: { wallet } });
  if (!user) {
    return { success: false, alreadyClaimed: false, tokens: 0, lastDailyClaim: null };
  }
  const now = new Date();
  if (user.lastDailyClaim && isSameDay(new Date(user.lastDailyClaim), now)) {
    return { success: true, alreadyClaimed: true, tokens: user.tokens, lastDailyClaim: user.lastDailyClaim ? new Date(user.lastDailyClaim).toISOString() : null };
  }
  const updated = await prisma.user.update({
    where: { wallet },
    data: {
      tokens: { increment: 200 },
      lastDailyClaim: now,
    },
  });
  return { success: true, alreadyClaimed: false, tokens: updated.tokens, lastDailyClaim: updated.lastDailyClaim ? new Date(updated.lastDailyClaim).toISOString() : null };
} 