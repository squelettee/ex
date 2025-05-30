"use server";

import prisma from "@/lib/prisma";

export async function dislikeUser(fromId: string, toId: string) {
  if (fromId === toId) return;
  const exists = await prisma.userDislikes.findUnique({
    where: { fromId_toId: { fromId, toId } },
  });
  if (exists) return;
  await prisma.userDislikes.create({
    data: { fromId, toId },
  });
}

