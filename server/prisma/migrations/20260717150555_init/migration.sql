-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('EMAIL', 'GOOGLE', 'GITHUB');

-- CreateEnum
CREATE TYPE "AssetType" AS ENUM ('RESUME', 'PORTFOLIO', 'EXPERIENCE', 'EDUCATION', 'DOCUMENT', 'CERTIFICATE', 'PROFILE', 'WEBSITE', 'IDENTITY');

-- CreateEnum
CREATE TYPE "AssetCollection" AS ENUM ('PROFESSIONAL', 'PROJECTS', 'EDUCATION', 'ACHIEVEMENTS', 'DEVELOPER', 'IDENTITY');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "provider" "AuthProvider" NOT NULL DEFAULT 'EMAIL',
    "githubId" TEXT,
    "googleId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "website" TEXT,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "timezone" TEXT NOT NULL,
    "completion" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vault" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'My Vault',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vault_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VaultAsset" (
    "id" TEXT NOT NULL,
    "vaultId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "AssetType" NOT NULL,
    "collection" "AssetCollection" NOT NULL,
    "size" TEXT NOT NULL,
    "tags" TEXT[],
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "isPinned" BOOLEAN NOT NULL DEFAULT false,
    "txHash" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VaultAsset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wallet" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "connected" BOOLEAN NOT NULL DEFAULT false,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "lastVerifiedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_githubId_key" ON "User"("githubId");

-- CreateIndex
CREATE UNIQUE INDEX "User_googleId_key" ON "User"("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Vault_userId_key" ON "Vault"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_userId_key" ON "Wallet"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_address_key" ON "Wallet"("address");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vault" ADD CONSTRAINT "Vault_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VaultAsset" ADD CONSTRAINT "VaultAsset_vaultId_fkey" FOREIGN KEY ("vaultId") REFERENCES "Vault"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
