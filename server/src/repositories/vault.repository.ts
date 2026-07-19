import type {
    Prisma,
    Vault,
} from "@prisma/client";

import { prisma } from "../lib/prisma";

/* -------------------------------------------------------------------------- */
/*                                  Queries                                   */
/* -------------------------------------------------------------------------- */

export async function findVaultById(
    id: string,
): Promise<Vault | null> {
    return prisma.vault.findUnique({
        where: {
            id,
        },
    });
}

export async function findVaultByUserId(
    userId: string,
): Promise<Vault | null> {
    return prisma.vault.findUnique({
        where: {
            userId,
        },
    });
}

export async function findVaultWithAssets(
    userId: string,
): Promise<Vault | null> {
    return prisma.vault.findUnique({
        where: {
            userId,
        },
        include: {
            assets: true,
        },
    });
}

/* -------------------------------------------------------------------------- */
/*                                 Mutations                                  */
/* -------------------------------------------------------------------------- */

export async function createVault(
    data: Prisma.VaultCreateInput,
): Promise<Vault> {
    return prisma.vault.create({
        data,
    });
}

export async function updateVault(
    userId: string,
    data: Prisma.VaultUpdateInput,
): Promise<Vault> {
    return prisma.vault.update({
        where: {
            userId,
        },
        data,
    });
}

export async function deleteVault(
    id: string,
): Promise<Vault> {
    return prisma.vault.delete({
        where: {
            id,
        },
    });
}