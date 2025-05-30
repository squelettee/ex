"use client";
import { sendMessage } from "@/actions/send-message";
import { pusherClient } from "@/lib/pusher-client";
import { useWallet } from "@solana/wallet-adapter-react";
import { CoinsIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Message, User } from "../../../../../../generated/prisma";
import { Navbar } from "../../../DashboardClient";

export default function PrivateChatClient({ myUserId, otherUserId, messages: initialMessages, user }: { myUserId: string; otherUserId: string; messages: Message[]; user: User }) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const { publicKey } = useWallet();

  // Channel public pour la conversation (ordre stable)
  const ids = [myUserId, otherUserId].sort();
  const channel = `chat-${ids[0]}-${ids[1]}`;

  // Refetch messages at mount
  useEffect(() => {
    async function fetchMessages() {
      try {
        const res = await fetch(`/api/messages?userA=${myUserId}&userB=${otherUserId}`);
        if (res.ok) {
          const data = await res.json();
          setMessages(data);
        }
      } catch {
        // ignore
      }
    }
    fetchMessages();
  }, [myUserId, otherUserId]);

  useEffect(() => {
    const pusher = pusherClient;
    pusher.subscribe(channel);
    const handler = (data: { message: Message }) => {
      setMessages(prev => {
        if (prev.some(m => m.id === data.message.id)) return prev;
        return [...prev, data.message];
      });
    };
    pusher.bind("new-message", handler);
    return () => {
      pusher.unbind("new-message", handler);
      pusher.unsubscribe(channel);
    };
  }, [channel]);


  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    await sendMessage(myUserId, otherUserId, input.trim());
    setInput("");
  }


  return (
    <div className="flex flex-col h-screen w-full max-w-sm min-w-sm mx-auto bg-background text-foreground">
      {/* Header */}
      <div className="flex flex-row justify-end items-center gap-1 p-2 fixed top-0 ">
        <p className="text-foreground font-bold">{user?.tokens}</p>
        <CoinsIcon className="w-4 h-4 text-foreground" />
      </div>
      <div className="flex justify-center pt-8 pb-4">
        <div className="inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm transition-none">
          <span className="mr-1 text-primary">✦</span>Private Chat
        </div>
      </div>

      {/* Messages container */}
      <div className="flex-1 overflow-hidden px-2">
        <div className="h-full overflow-y-auto bg-card/70 rounded-2xl p-4">
          <ul className="flex flex-col gap-2">
            {messages.map((msg: Message) => (
              <li key={msg.id} className={msg.fromUserId === myUserId ? "text-right" : "text-left"}>
                <div className="inline-block max-w-xs">
                  <span className={msg.fromUserId === myUserId
                    ? "bg-primary text-primary-foreground px-3 py-1 rounded-xl inline-block"
                    : "bg-muted text-muted-foreground px-3 py-1 rounded-xl inline-block"}>
                    {msg.content}
                  </span>
                  <div className="text-xs text-muted-foreground text-right mt-0.5">
                    {new Date(msg.createdAt).toLocaleTimeString()}
                  </div>
                </div>
              </li>
            ))}
            <div ref={bottomRef} />
          </ul>
        </div>
      </div>

      {/* Input form */}
      <div className="p-2">
        <form onSubmit={handleSend} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Message..."
            className="flex-1 rounded-lg px-3 py-2 bg-muted text-muted-foreground border-none focus:ring-2 focus:ring-ring"
          />
          <button type="submit" className="bg-primary text-primary-foreground font-bold px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors">Use 5 tokens</button>
        </form>
      </div>

      {/* Navbar */}
      <div className="mt-auto">
        <Navbar user={null} publicKey={publicKey} />
      </div>
    </div>
  );
}