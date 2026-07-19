import type {
    Prisma,
    Wallet,
} from "@prisma/client";

import { prisma } from "../lib/prisma";

/* -------------------------------------------------------------------------- */
/*                                  Queries                                   */
/* -------------------------------------------------------------------------- */

export async function findWalletById(
    id: string,
): Promise<Wallet | null> {
    return prisma.wallet.findUnique({
        where: {
            id,
        },
    });
}

export async function findWalletByUserId(
    userId: string,
): Promise<Wallet | null> {
    return prisma.wallet.findUnique({
        where: {
            userId,
        },
    });
}

export async function findWalletByAddress(
    address: string,
): Promise<Wallet | null> {
    return prisma.wallet.findUnique({
        where: {
            address,
        },
    });
}

/* -------------------------------------------------------------------------- */
/*                                 Mutations                                  */
/* -------------------------------------------------------------------------- */

export async function createWallet(
    data: Prisma.WalletCreateInput,
): Promise<Wallet> {
    return prisma.wallet.create({
        data,
    });
}

export async function updateWallet(
    userId: string,
    data: Prisma.WalletUpdateInput,
): Promise<Wallet> {
    return prisma.wallet.update({
        where: {
            userId,
        },
        data,
    });
}

export async function deleteWallet(
    id: string,
): Promise<Wallet> {
    return prisma.wallet.delete({
        where: {
            id,
        },
    });
}