-- CreateEnum
CREATE TYPE "CredentialStatus" AS ENUM ('ACTIVE', 'REVOKED');

-- CreateEnum
CREATE TYPE "CredentialType" AS ENUM ('DEGREE', 'CERTIFICATION', 'DIPLOMA', 'LICENSE', 'ACHIEVEMENT', 'TRAINING', 'EMPLOYMENT', 'MEMBERSHIP', 'OTHER');

-- CreateTable
CREATE TABLE "Credential" (
    "id" TEXT NOT NULL,
    "issuerId" TEXT NOT NULL,
    "recipientName" TEXT NOT NULL,
    "recipientEmail" TEXT,
    "issuingOrganization" TEXT NOT NULL,
    "credentialTitle" TEXT NOT NULL,
    "credentialType" "CredentialType" NOT NULL,
    "description" TEXT,
    "credentialIssuedAt" TIMESTAMP(3) NOT NULL,
    "ownerWallet" TEXT NOT NULL,
    "metadataUrl" TEXT,
    "credentialHash" TEXT NOT NULL,
    "transactionHash" TEXT NOT NULL,
    "contractAddress" TEXT NOT NULL,
    "status" "CredentialStatus" NOT NULL DEFAULT 'ACTIVE',
    "issuedOnChainAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Credential_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Credential_credentialHash_key" ON "Credential"("credentialHash");

-- CreateIndex
CREATE UNIQUE INDEX "Credential_transactionHash_key" ON "Credential"("transactionHash");

-- AddForeignKey
ALTER TABLE "Credential" ADD CONSTRAINT "Credential_issuerId_fkey" FOREIGN KEY ("issuerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
