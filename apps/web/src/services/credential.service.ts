import { api } from "./api";

import type {
    Credential,
    CredentialType,
} from "../types/credential";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export interface IssueCredentialRequest {
    issuerId: string;

    recipientName: string;

    recipientEmail?: string;

    issuingOrganization: string;

    credentialTitle: string;

    credentialType: CredentialType;

    description?: string;

    credentialIssuedAt: string;

    ownerWallet: string;

    metadataUrl?: string;
}

export interface IssueCredentialResponse {
    success: boolean;

    credential: Credential;

    blockchain: {
        transactionHash: string;

        blockNumber: number;

        explorerUrl: string;
    };
}

export interface GetCredentialsResponse {
    success: boolean;

    credentials: Credential[];
}

export interface GetCredentialResponse {
    success: boolean;

    credential: Credential;
}

export interface VerifyCredentialResponse {
    success: boolean;

    verified: boolean;

    credential: Credential;
}

export interface RevokeCredentialResponse {
    success: boolean;

    credential: Credential;
}

/* -------------------------------------------------------------------------- */
/*                             Issue Credential                               */
/* -------------------------------------------------------------------------- */

export async function issueCredential(
    data: IssueCredentialRequest,
): Promise<IssueCredentialResponse> {
    const response =
        await api.post<IssueCredentialResponse>(
            "/credentials/issue",
            data,
        );

    return response.data;
}

/* -------------------------------------------------------------------------- */
/*                           Get Credentials                                  */
/* -------------------------------------------------------------------------- */

export async function getCredentials(): Promise<GetCredentialsResponse> {
    const response =
        await api.get<GetCredentialsResponse>(
            "/credentials",
        );

    return response.data;
}

/* -------------------------------------------------------------------------- */
/*                            Get Credential                                  */
/* -------------------------------------------------------------------------- */

export async function getCredential(
    hash: string,
): Promise<GetCredentialResponse> {
    const response =
        await api.get<GetCredentialResponse>(
            `/credentials/${hash}`,
        );

    return response.data;
}

/* -------------------------------------------------------------------------- */
/*                          Verify Credential                                 */
/* -------------------------------------------------------------------------- */

export async function verifyCredential(
    hash: string,
): Promise<VerifyCredentialResponse> {
    const response =
        await api.get<VerifyCredentialResponse>(
            `/credentials/verify/${hash}`,
        );

    return response.data;
}

/* -------------------------------------------------------------------------- */
/*                          Revoke Credential                                 */
/* -------------------------------------------------------------------------- */

export async function revokeCredential(
    hash: string,
): Promise<RevokeCredentialResponse> {
    const response =
        await api.patch<RevokeCredentialResponse>(
            `/credentials/revoke/${hash}`,
        );

    return response.data;
}