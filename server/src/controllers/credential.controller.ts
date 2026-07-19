import { Request, Response } from "express";
import {
    generateCredentialHash,
    getCredential,
    registerCredential,
    revokeCredential,
    verifyCredential,
} from "../services/credential.service";
import { createCredential, getCredentials, } from "../repositories/credential.repository";
import { CredentialType } from "@prisma/client";
import { env } from "../config/env";


export async function issueCredential(
    req: Request,
    res: Response
) {
    try {
        const {
            issuerId,

            recipientName,
            recipientEmail,

            issuingOrganization,

            credentialTitle,
            credentialType,

            description,

            credentialIssuedAt,

            ownerWallet,

            metadataUrl,
        } = req.body;

        if (
            !issuerId ||
            !recipientName ||
            !issuingOrganization ||
            !credentialTitle ||
            !credentialType ||
            !credentialIssuedAt ||
            !ownerWallet
        ) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields",
            });
        }

        const hash = generateCredentialHash(
            JSON.stringify({
                recipientName,
                recipientEmail,
                issuingOrganization,
                credentialTitle,
                credentialType,
                credentialIssuedAt,
                ownerWallet,
            })
        );

        const blockchain = await registerCredential(
            hash,
            ownerWallet
        );

        const credential = await createCredential({
            issuerId,

            recipientName,
            recipientEmail,

            issuingOrganization,

            credentialTitle,

            credentialType:
                credentialType as CredentialType,

            description,

            credentialIssuedAt: new Date(
                credentialIssuedAt
            ),

            ownerWallet,

            credentialHash: hash,

            transactionHash:
                blockchain.transactionHash,

            contractAddress:
                env.CONTRACT_ADDRESS,

            issuedOnChainAt: new Date(),

            metadataUrl,
        });

        return res.status(201).json({
            success: true,
            credential,
            blockchain,
        });
    } catch (error) {
        const message =
            error instanceof Error
                ? error.message
                : "Unknown error";

        return res.status(500).json({
            success: false,
            message,
        });
    }
}

export async function verifyCredentialController(
    req: Request,
    res: Response
) {
    try {
        const hash = req.params.hash as string;

        const valid = await verifyCredential(hash);

        return res.json({
            success: true,
            valid,
        });
    } catch (error) {
        const message =
            error instanceof Error
                ? error.message
                : "Unknown error";
        return res.status(500).json({
            success: false,
            message,
        });
    }
}

export async function getCredentialController(
    req: Request,
    res: Response
) {
    try {
        const hash = req.params.hash as string;

        const credential = await getCredential(hash);

        return res.json({
            success: true,
            credential,
        });
    } catch (error) {
        const message =
            error instanceof Error
                ? error.message
                : "Unknown error";
        return res.status(500).json({
            success: false,
            message,
        });
    }
}


export async function getCredentialsController(
    req: Request,
    res: Response
) {
    try {
        const credentials =
            await getCredentials();

        return res.json({
            success: true,
            credentials,
        });
    } catch (error) {
        const message =
            error instanceof Error
                ? error.message
                : "Unknown error";

        return res.status(500).json({
            success: false,
            message,
        });
    }
}

export async function revokeCredentialController(
    req: Request,
    res: Response
) {
    try {
        const hash = req.params.hash as string;

        const result = await revokeCredential(hash);

        return res.json({
            success: true,
            ...result,
        });
    } catch (error) {
        const message =
            error instanceof Error
                ? error.message
                : "Unknown error";
        return res.status(500).json({
            success: false,
            message,
        });
    }
}