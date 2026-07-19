import { CredentialType, Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";

interface CreateCredentialInput {
    issuerId: string;

    recipientName: string;
    recipientEmail?: string;

    issuingOrganization: string;

    credentialTitle: string;
    credentialType: CredentialType;

    description?: string;

    credentialIssuedAt: Date;

    ownerWallet: string;

    credentialHash: string;
    transactionHash: string;
    contractAddress: string;

    issuedOnChainAt: Date;

    metadataUrl?: string;
}

export async function createCredential(data: CreateCredentialInput) {
    return prisma.credential.create({
        data,
    });
}


export async function getCredentials() {
    return prisma.credential.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
}

export async function findCredentialByHash(credentialHash: string) {
    return prisma.credential.findUnique({
        where: {
            credentialHash,
        },
    });
}

export async function revokeCredentialRecord(credentialHash: string) {
    return prisma.credential.update({
        where: {
            credentialHash,
        },
        data: {
            status: "REVOKED",
            revokedAt: new Date(),
        },
    });
}