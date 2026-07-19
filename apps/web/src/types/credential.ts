export type CredentialStatus =
    | "ACTIVE"
    | "REVOKED";

export type CredentialType =
    | "DEGREE"
    | "CERTIFICATION"
    | "DIPLOMA"
    | "LICENSE"
    | "ACHIEVEMENT"
    | "TRAINING"
    | "EMPLOYMENT"
    | "MEMBERSHIP"
    | "OTHER";

export interface Credential {
    id: string;

    issuerId: string;

    recipientName: string;

    recipientEmail: string | null;

    issuingOrganization: string;

    credentialTitle: string;

    credentialType: CredentialType;

    description: string | null;

    credentialIssuedAt: string;

    ownerWallet: string;

    metadataUrl: string | null;

    credentialHash: string;

    transactionHash: string;

    contractAddress: string;

    status: CredentialStatus;

    issuedOnChainAt: string;

    revokedAt: string | null;

    createdAt: string;

    updatedAt: string;
}