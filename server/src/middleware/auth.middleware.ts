import type {
    NextFunction,
    Request,
    Response,
} from "express";

import { verifyAccessToken } from "../utils/jwt";

declare module "express-serve-static-core" {
    interface Request {
        user?: {
            userId: string;
        };
    }
}

export async function authenticate(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const authorization =
        request.header("Authorization");

    if (
        !authorization ||
        !authorization.startsWith(
            "Bearer ",
        )
    ) {
        return response
            .status(401)
            .json({
                success: false,
                message:
                    "Unauthorized.",
            });
    }

    const token =
        authorization.replace(
            "Bearer ",
            "",
        );

    try {
        const payload =
            verifyAccessToken(
                token,
            );

        request.user = {
            userId:
                payload.userId,
        };

        next();
    } catch {
        return response
            .status(401)
            .json({
                success: false,
                message:
                    "Invalid or expired token.",
            });
    }
}