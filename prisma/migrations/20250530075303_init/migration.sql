-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "wallet" TEXT NOT NULL,
    "lastSeen" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "bio" TEXT,
    "image" TEXT,
    "tokens" INTEGER NOT NULL DEFAULT 0,
    "referral" TEXT DEFAULT '',
    "onboarded" BOOLEAN NOT NULL DEFAULT false,
    "visitedX" BOOLEAN NOT NULL DEFAULT false,
    "visitedInstagram" BOOLEAN NOT NULL DEFAULT false,
    "visitedTiktok" BOOLEAN NOT NULL DEFAULT false,
    "visitedYoutube" BOOLEAN NOT NULL DEFAULT false,
    "visitedTelegram" BOOLEAN NOT NULL DEFAULT false,
    "lastDailyClaim" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLikes" (
    "fromId" TEXT NOT NULL,
    "toId" TEXT NOT NULL,

    CONSTRAINT "UserLikes_pkey" PRIMARY KEY ("fromId","toId")
);

-- CreateTable
CREATE TABLE "UserDislikes" (
    "fromId" TEXT NOT NULL,
    "toId" TEXT NOT NULL,

    CONSTRAINT "UserDislikes_pkey" PRIMARY KEY ("fromId","toId")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fromUserId" TEXT NOT NULL,
    "toUserId" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_wallet_key" ON "User"("wallet");

-- CreateIndex
CREATE UNIQUE INDEX "UserLikes_fromId_toId_key" ON "UserLikes"("fromId", "toId");

-- CreateIndex
CREATE UNIQUE INDEX "UserDislikes_fromId_toId_key" ON "UserDislikes"("fromId", "toId");

-- CreateIndex
CREATE INDEX "Message_fromUserId_toUserId_idx" ON "Message"("fromUserId", "toUserId");

-- AddForeignKey
ALTER TABLE "UserLikes" ADD CONSTRAINT "UserLikes_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLikes" ADD CONSTRAINT "UserLikes_toId_fkey" FOREIGN KEY ("toId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDislikes" ADD CONSTRAINT "UserDislikes_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDislikes" ADD CONSTRAINT "UserDislikes_toId_fkey" FOREIGN KEY ("toId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
