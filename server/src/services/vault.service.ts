import { AppError } from "../errors/AppError";

import {
    findVaultByUserId,
    findVaultWithAssets,
    updateVault,
} from "../repositories/vault.repository";

import { findUserById } from "../repositories/user.repository";

/* -------------------------------------------------------------------------- */
/*                               Get User Vault                               */
/* -------------------------------------------------------------------------- */

export async function getVault(
    userId: string,
) {
    const vault = await findVaultWithAssets(
        userId,
    );

    if (!vault) {
        throw new AppError(
            "Vault not found.",
            404,
        );
    }

    return vault;
}

/* -------------------------------------------------------------------------- */
/*                              Rename Vault                                  */
/* -------------------------------------------------------------------------- */

export async function renameVault(
    userId: string,
    name: string,
) {
    const user = await findUserById(
        userId,
    );

    if (!user) {
        throw new AppError(
            "User not found.",
            404,
        );
    }

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

    return updateVault(
        userId,
        {
            name,
        },
    );
}