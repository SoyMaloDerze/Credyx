import { AppError } from "../errors/AppError";

import * as walletRepository from "../repositories/wallet.repository";

import type {
    ConnectWalletInput,
    UpdateWalletInput,
} from "../validators/wallet.validator";

export async function connectWallet(
    userId: string,
    data: ConnectWalletInput,
) {
    const walletByAddress =
        await walletRepository.findWalletByAddress(
            data.address,
        );

    if (
        walletByAddress &&
        walletByAddress.userId !== userId
    ) {
        throw new AppError(
            "Wallet address is already in use.",
            409,
        );
    }

    const existingWallet =
        await walletRepository.findWalletByUserId(
            userId,
        );

    if (existingWallet) {
        return walletRepository.updateWallet(
            existingWallet.id,
            data,
        );
    }

    return walletRepository.createWallet({
        address: data.address,
        network: data.network,
        user: {
            connect: {
                id: userId,
            },
        },
    });
}

export async function getWallet(
    userId: string,
) {
    const wallet =
        await walletRepository.findWalletByUserId(
            userId,
        );

    if (!wallet) {
        throw new AppError(
            "Wallet not found.",
            404,
        );
    }

    return wallet;
}

export async function updateWallet(
    userId: string,
    data: UpdateWalletInput,
) {
    const wallet =
        await walletRepository.findWalletByUserId(
            userId,
        );

    if (!wallet) {
        throw new AppError(
            "Wallet not found.",
            404,
        );
    }

    return walletRepository.updateWallet(
        userId,
        data,
    );
}