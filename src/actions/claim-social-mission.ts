"use server";

import prisma from "@/lib/prisma";

const SOCIAL_FIELDS = {
  x: "visitedX",
  instagram: "visitedInstagram",
  tiktok: "visitedTiktok",
  youtube: "visitedYoutube",
  telegram: "visitedTelegram",
} as const;

type SocialNetwork = keyof typeof SOCIAL_FIELDS;

export async function claimSocialMission(wallet: string, network: SocialNetwork) {
  const field = SOCIAL_FIELDS[network];
  if (!field) {
    throw new Error("Invalid social network");
  }

  const user = await prisma.user.findUnique({ where: { wallet } });
  if (!user) {
    return { success: false, alreadyClaimed: false, tokens: 0 };
  }

  if (user[field]) {
    return { success: true, alreadyClaimed: true, tokens: user.tokens };
  }

  const updated = await prisma.user.update({
    where: { wallet },
    data: {
      [field]: true,
      tokens: { increment: 50 },
    },
  });

  return { success: true, alreadyClaimed: false, tokens: updated.tokens };
} 