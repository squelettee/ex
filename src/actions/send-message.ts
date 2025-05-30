"use server";

import prisma from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher-server";

export async function sendMessage(fromUserId: string, toUserId: string, content: string) {

  const message = await prisma.message.create({
    data: {
      fromUserId,
      toUserId,
      content,
    },
  });

  const ids = [fromUserId, toUserId].sort();
  const channel = `chat-${ids[0]}-${ids[1]}`;

  await pusherServer.trigger(channel, "new-message", {
    message,
  });

  await prisma.user.update({
    where: { id: fromUserId },
    data: { tokens: { decrement: 5 } },
  });

  return message;
}