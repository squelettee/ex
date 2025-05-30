import prisma from "@/lib/prisma";

export default async function getMatches(userId: string) {

  const iLike = await prisma.userLikes.findMany({
    where: { fromId: userId },
    select: { toId: true }
  });
  const iLikeIds = iLike.map((like: { toId: string }) => like.toId);

  if (iLikeIds.length === 0) return [];

  const matches = await prisma.userLikes.findMany({
    where: {
      fromId: { in: iLikeIds },
      toId: userId
    },
    select: { fromId: true }
  });
  const matchIds = matches.map((m: { fromId: string }) => m.fromId);

  if (matchIds.length === 0) return [];

  return prisma.user.findMany({
    where: { id: { in: matchIds } }
  });
} 