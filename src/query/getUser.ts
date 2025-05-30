import prisma from "@/lib/prisma";

export default async function getUser(wallet: string) {
  return prisma.user.findUnique({
    where: { wallet },
    include: {
      dislikes: { select: { toId: true } },
      likes: { select: { toId: true } },
      likedBy: { select: { fromId: true } }
    }
  });
} 