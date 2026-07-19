import { ethers } from "ethers";
import registry from "./blockchain.service";

export async function registerCredential(
    hash: string,
    owner: string
) {
    const tx = await registry.registerCredential(hash, owner);
    const receipt = await tx.wait();

    return {
        transactionHash: receipt.hash,
        blockNumber: receipt.blockNumber,
        explorerUrl: `https://testnet.monadvision.com/tx/${receipt.hash}`,
    };
}

export async function verifyCredential(hash: string): Promise<boolean> {
    return await registry.verifyCredential(hash);
}



export async function getCredential(hash: string) {
    const credential = await registry.getCredential(hash);

    return {
        hash: credential.hash,
        owner: credential.owner,
        issuer: credential.issuer,
        issuedAt: Number(credential.issuedAt),
        revoked: credential.revoked,
    };
}

export async function revokeCredential(hash: string) {
    const tx = await registry.revokeCredential(hash);
    const receipt = await tx.wait();

    return {
        transactionHash: receipt.hash,
        blockNumber: receipt.blockNumber,
    };
}

export function generateCredentialHash(data: string): string {
    return ethers.keccak256(
        ethers.toUtf8Bytes(data)
    );
}