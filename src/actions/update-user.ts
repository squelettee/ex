"use server";

import prisma from "@/lib/prisma";
import { PublicKey } from "@solana/web3.js";
import cloudinary from "cloudinary";
import nacl from "tweetnacl";
import { Gender, LookingFor } from "../../generated/prisma";

cloudinary.v2.config({
  cloudinary_url: process.env.CLOUDINARY_URL,
});

export async function updateUser(wallet: string, name: string, gender: string, lookingFor: string, bio: string, image: File | string, message: string, signatureB64: string) {
  const pubkey = new PublicKey(wallet);
  const signature = Buffer.from(signatureB64, "base64");
  const isValid = nacl.sign.detached.verify(
    new TextEncoder().encode(message),
    signature,
    pubkey.toBytes()
  );
  if (!isValid) throw new Error("Invalid signature");

  let imageUrl = undefined;
  if (image && typeof image !== "string") {
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    imageUrl = await new Promise<string>((resolve, reject) => {
      const stream = cloudinary.v2.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
        if (error) return reject(error);
        resolve(result?.secure_url || "");
      });
      stream.end(buffer);
    });
  } else if (typeof image === "string" && image.startsWith("http")) {
    imageUrl = image;
  }

  const updateData: Record<string, unknown> = { name, bio };
  if (imageUrl !== undefined && image !== "") {
    updateData.image = imageUrl;
  }
  if (gender) {
    updateData.gender = gender as Gender;
  }
  if (lookingFor) {
    updateData.lookingFor = lookingFor as LookingFor;
  }

  await prisma.user.update({
    where: { wallet },
    data: { ...updateData, onboarded: true },
  });
}
