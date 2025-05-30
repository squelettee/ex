import prisma from "@/lib/prisma";

export default async function getMessages(userA: string, userB: string) {
  return prisma.message.findMany({
    where: {
      OR: [
        { fromUserId: userA, toUserId: userB },
        { fromUserId: userB, toUserId: userA }
      ]
    },
    orderBy: { createdAt: "asc" },
    take: 30
  });
} 