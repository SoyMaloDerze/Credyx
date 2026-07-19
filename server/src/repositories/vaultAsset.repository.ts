import type {
    Prisma,
    VaultAsset,
} from "@prisma/client";

import { prisma } from "../lib/prisma";

/* -------------------------------------------------------------------------- */
/*                                  Queries                                   */
/* -------------------------------------------------------------------------- */

export async function findAssetById(
    id: string,
): Promise<VaultAsset | null> {
    return prisma.vaultAsset.findUnique({
        where: {
            id,
        },
    });
}

export async function findAssetsByVaultId(
    vaultId: string,
): Promise<VaultAsset[]> {
    return prisma.vaultAsset.findMany({
        where: {
            vaultId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
}

/* -------------------------------------------------------------------------- */
/*                                 Mutations                                  */
/* -------------------------------------------------------------------------- */

export async function createAsset(
    data: Prisma.VaultAssetCreateInput,
): Promise<VaultAsset> {
    return prisma.vaultAsset.create({
        data,
    });
}

export async function updateAsset(
    id: string,
    data: Prisma.VaultAssetUpdateInput,
): Promise<VaultAsset> {
    return prisma.vaultAsset.update({
        where: {
            id,
        },
        data,
    });
}

export async function deleteAsset(
    id: string,
): Promise<VaultAsset> {
    return prisma.vaultAsset.delete({
        where: {
            id,
        },
    });
}