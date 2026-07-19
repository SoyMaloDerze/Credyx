
import type {
    NextFunction,
    Request,
    Response,
} from "express";



import {
    createVaultAsset,
    deleteVaultAsset,
    getVaultAsset,
    getVaultAssets,
    updateVaultAsset,
} from "../services/vaultAsset.service";

import { sendSuccess } from "../utils/response";

/* -------------------------------------------------------------------------- */
/*                               Create Asset                                 */
/* -------------------------------------------------------------------------- */

export async function createAsset(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const asset =
            await createVaultAsset(
                request.user!.userId,
                request.body,
            );

        return sendSuccess(
            response,
            201,
            "Asset created successfully.",
            asset,
        );
    } catch (error) {
        next(error);
    }
}

/* -------------------------------------------------------------------------- */
/*                              Get All Assets                                */
/* -------------------------------------------------------------------------- */

export async function fetchAssets(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const assets =
            await getVaultAssets(
                request.user!.userId,
            );

        return sendSuccess(
            response,
            200,
            "Assets fetched successfully.",
            assets,
        );
    } catch (error) {
        next(error);
    }
}

/* -------------------------------------------------------------------------- */
/*                               Get One Asset                                */
/* -------------------------------------------------------------------------- */

export async function fetchAsset(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const assetId = request.params.id as string;
        const asset =
            await getVaultAsset(
                request.user!.userId,
                assetId,
            );

        return sendSuccess(
            response,
            200,
            "Asset fetched successfully.",
            asset,
        );
    } catch (error) {
        next(error);
    }
}

/* -------------------------------------------------------------------------- */
/*                              Update Asset                                  */
/* -------------------------------------------------------------------------- */

export async function updateAsset(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const assetId = request.params.id as string;
        const asset =
            await updateVaultAsset(
                request.user!.userId,
                assetId,
                request.body,
            );

        return sendSuccess(
            response,
            200,
            "Asset updated successfully.",
            asset,
        );
    } catch (error) {
        next(error);
    }
}

/* -------------------------------------------------------------------------- */
/*                              Delete Asset                                  */
/* -------------------------------------------------------------------------- */

export async function removeAsset(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const assetId = request.params.id as string;
        await deleteVaultAsset(
            request.user!.userId,
            assetId,
        );

        return sendSuccess(
            response,
            200,
            "Asset deleted successfully.",
        );
    } catch (error) {
        next(error);
    }
}