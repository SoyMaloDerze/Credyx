import type {
    NextFunction,
    Request,
    Response,
} from "express";

import * as walletService from "../services/wallet.service";

import { sendSuccess } from "../utils/response";

export async function connectWallet(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const wallet =
            await walletService.connectWallet(
                request.user!.userId,
                request.body,
            );

        return sendSuccess(
            response,
            201,
            "Wallet connected successfully.",
            wallet,
        );
    } catch (error) {
        next(error);
    }
}

export async function fetchWallet(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const wallet =
            await walletService.getWallet(
                request.user!.userId,
            );

        return sendSuccess(
            response,
            200,
            "Wallet fetched successfully.",
            wallet,
        );
    } catch (error) {
        next(error);
    }
}

export async function updateWallet(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const wallet =
            await walletService.updateWallet(
                request.user!.userId,
                request.body,
            );

        return sendSuccess(
            response,
            200,
            "Wallet updated successfully.",
            wallet,
        );
    } catch (error) {
        next(error);
    }
}