"use client";

import { updateUser } from "@/actions/update-user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useWallet } from "@solana/wallet-adapter-react";
import { CoinsIcon } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import type { User } from "../../../../generated/prisma";
import { Navbar } from "../DashboardClient";

const WalletDisconnectButton = dynamic(() => import("@solana/wallet-adapter-react-ui").then((mod) => mod.WalletDisconnectButton), { ssr: false });

export default function EditProfileForm({ user }: { user: User | null }) {
  const { publicKey, signMessage } = useWallet();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (!user) {
    redirect("/");
  }

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const name = formData.get("name") as string;
    const bio = formData.get("bio") as string;
    const gender = formData.get("gender") as string;
    const lookingFor = formData.get("lookingFor") as string;
    let image = formData.get("image");
    if (image instanceof File && image.size === 0) {
      image = "";
    }
    if (!(image instanceof File) && typeof image !== "string") {
      image = "";
    }

    if (!publicKey || !signMessage) return;

    const message = `Update profile for ${publicKey.toBase58()} at ${Date.now()}`;
    const encodedMessage = new TextEncoder().encode(message);

    try {
      const signature = await signMessage(encodedMessage);

      await updateUser(
        publicKey.toBase58(),
        name,
        gender,
        lookingFor,
        bio,
        image,
        message,
        Buffer.from(signature).toString("base64")
      );

      router.push("/dashboard?wallet=" + publicKey.toBase58());
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-screen max-w-sm min-w-sm flex-col mx-auto bg-background text-foreground items-center justify-between relative overflow-hidden">
      <div className=" z-30 flex flex-row justify-end items-center gap-1 p-2 fixed top-0 ">
        <p className="text-foreground font-bold">{user?.tokens}</p>
        <CoinsIcon className="w-4 h-4 text-foreground" />
      </div>
      <form
        action={handleSubmit}
        className="relative z-10 flex flex-col items-center gap-6 w-full max-w-sm min-w-sm px-8 py-10 rounded-3xl bg-card/70 pb-32"
      >
        <div className="inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm transition-none mt-8"><span className="mr-1 text-primary">✦</span>Edit your profile</div>
        {user?.image && (
          <div className="mb-2 flex justify-center w-full">
            <Image
              src={user.image}
              alt="Profile"
              width={96}
              height={96}
              className="rounded-full object-cover border-4 border-primary"
            />
          </div>
        )}
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="name" className="text-card-foreground">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            defaultValue={user?.name || ""}
            className="bg-muted text-muted-foreground border-none focus:ring-2 focus:ring-ring rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="bio" className="text-card-foreground">Bio</Label>
          <Textarea
            id="bio"
            placeholder="Bio"
            name="bio"
            defaultValue={user?.bio || ""}
            className="bg-muted text-muted-foreground border-none focus:ring-2 focus:ring-ring rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="image" className="text-card-foreground">Image</Label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            name="image"
            className="bg-muted text-muted-foreground border-none focus:ring-2 focus:ring-ring rounded-lg file:bg-primary file:text-primary-foreground file:font-bold file:rounded file:px-3 file:py-1"
          />
        </div>
        <div className="flex flex-row gap-2 w-full">
          <Label htmlFor="gender" className="text-card-foreground">Gender</Label>
          <Select
            name="gender"
            defaultValue={user?.gender || "MALE"}
          >
            <SelectTrigger className="bg-muted text-muted-foreground border-none focus:ring-2 focus:ring-ring rounded-lg">
              <SelectValue placeholder="Select a gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="MALE">Male</SelectItem>
              <SelectItem value="FEMALE">Female</SelectItem>
            </SelectContent>
          </Select>
          <Label htmlFor="lookingFor" className="text-card-foreground">Looking For</Label>
          <Select
            name="lookingFor"
            defaultValue={user?.lookingFor || "FEMALE"}
          >
            <SelectTrigger className="bg-muted text-muted-foreground border-none focus:ring-2 focus:ring-ring rounded-lg">
              <SelectValue placeholder="Select a gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="MALE">Male</SelectItem>
              <SelectItem value="FEMALE">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <WalletDisconnectButton style={{ width: "100%", textAlign: "center", justifyContent: "center" }} onClick={() => router.push('/')} />
        <Button
          className="w-full mt-2 bg-primary text-primary-foreground font-bold text-lg rounded-sm py-6 hover:bg-primary/80 transition-colors"
          type="submit"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}
        </Button>
      </form>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm min-w-sm z-20 h-[10vh]">
        <Navbar user={user} publicKey={publicKey} />
      </div>
    </div>
  );
}