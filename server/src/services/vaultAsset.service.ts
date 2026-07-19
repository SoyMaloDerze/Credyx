import { AppError } from "../errors/AppError";

import {
    findVaultByUserId,
} from "../repositories/vault.repository";

import {
    createAsset,
    deleteAsset,
    findAssetById,
    findAssetsByVaultId,
    updateAsset,
} from "../repositories/vaultAsset.repository";

import type {
    CreateAssetInput,
    UpdateAssetInput,
} from "../validators/vaultAsset.validator";

/* -------------------------------------------------------------------------- */
/*                               Create Asset                                 */
/* -------------------------------------------------------------------------- */

export async function createVaultAsset(
    userId: string,
    input: CreateAssetInput,
) {
    const vault =
        await findVaultByUserId(
            userId,
        );

    if (!vault) {
        throw new AppError(
            "Vault not found.",
            404,
        );
    }

    return createAsset({
        ...input,
        vault: {
            connect: {
                id: vault.id,
            },
        },
    });
}

/* -------------------------------------------------------------------------- */
/*                              Get All Assets                                */
/* -------------------------------------------------------------------------- */

export async function getVaultAssets(
    userId: string,
) {
    const vault =
        await findVaultByUserId(
            userId,
        );

    if (!vault) {
        throw new AppError(
            "Vault not found.",
            404,
        );
    }

    return findAssetsByVaultId(
        vault.id,
    );
}

/* -------------------------------------------------------------------------- */
/*                               Get One Asset                                */
/* -------------------------------------------------------------------------- */

export async function getVaultAsset(
    userId: string,
    assetId: string,
) {
    const vault =
        await findVaultByUserId(
            userId,
        );

    if (!vault) {
        throw new AppError(
            "Vault not found.",
            404,
        );
    }

    const asset =
        await findAssetById(
            assetId,
        );

    if (!asset) {
        throw new AppError(
            "Asset not found.",
            404,
        );
    }

    if (asset.vaultId !== vault.id) {
        throw new AppError(
            "You do not have access to this asset.",
            403,
        );
    }

    return asset;
}

/* -------------------------------------------------------------------------- */
/*                              Update Asset                                  */
/* -------------------------------------------------------------------------- */

export async function updateVaultAsset(
    userId: string,
    assetId: string,
    input: UpdateAssetInput,
) {
    await getVaultAsset(
        userId,
        assetId,
    );

    return updateAsset(
        assetId,
        input,
    );
}

/* -------------------------------------------------------------------------- */
/*                              Delete Asset                                  */
/* -------------------------------------------------------------------------- */

export async function deleteVaultAsset(
    userId: string,
    assetId: string,
) {
    await getVaultAsset(
        userId,
        assetId,
    );

    return deleteAsset(
        assetId,
    );
}