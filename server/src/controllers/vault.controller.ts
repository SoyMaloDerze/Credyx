import type {
    NextFunction,
    Request,
    Response,
} from "express";

import {
    getVault,
    renameVault,
} from "../services/vault.service";

import { sendSuccess } from "../utils/response";

/* -------------------------------------------------------------------------- */
/*                                Get Vault                                   */
/* -------------------------------------------------------------------------- */

export async function fetchVault(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const vault = await getVault(
            request.user!.userId,
        );

        return sendSuccess(
            response,
            200,
            "Vault fetched successfully.",
            vault,
        );
    } catch (error) {
        next(error);
    }
}

/* -------------------------------------------------------------------------- */
/*                              Rename Vault                                  */
/* -------------------------------------------------------------------------- */

export async function updateVault(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const vault =
            await renameVault(
                request.user!.userId,
                request.body.name,
            );

        return sendSuccess(
            response,
            200,
            "Vault updated successfully.",
            vault,
        );
    } catch (error) {
        next(error);
    }
}