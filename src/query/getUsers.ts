import prisma from "@/lib/prisma";

export default async function getUsers() {
  return prisma.user.findMany({
    include: {
      dislikes: { select: { toId: true } },
      likes: { select: { toId: true } },
      likedBy: { select: { fromId: true } }
    }
  });
}