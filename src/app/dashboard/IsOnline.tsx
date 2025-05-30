export default function IsOnline({ user }: { user: { id: string; wallet: string; lastSeen: Date } }) {
  const lastSeenDate = new Date(user.lastSeen);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - lastSeenDate.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return <div>Online</div>;
  }

  return <div>Last seen {lastSeenDate.toLocaleString()}</div>;
}
