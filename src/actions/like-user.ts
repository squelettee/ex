"use server";

import prisma from "@/lib/prisma";

export async function likeUser(fromId: string, toId: string) {
  if (fromId === toId) return;

  const exists = await prisma.userLikes.findUnique({
    where: { fromId_toId: { fromId, toId } },
  });
  if (exists) return;
  await prisma.userLikes.create({
    data: { fromId, toId },
  });
}

