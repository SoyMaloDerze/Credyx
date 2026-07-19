import type {
    NextFunction,
    Request,
    Response,
} from "express";

import {
    getCurrentUser,
    loginUser,
    registerUser,
} from "../services/auth.service";

import {
    sendSuccess,
} from "../utils/response";

/* -------------------------------------------------------------------------- */
/*                              Register User                                 */
/* -------------------------------------------------------------------------- */

export async function register(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const result =
            await registerUser(
                request.body,
            );

        return sendSuccess(
            response,
            201,
            "Account created successfully.",
            result,
        );
    } catch (error) {
        next(error);
    }
}

/* -------------------------------------------------------------------------- */
/*                                Login User                                  */
/* -------------------------------------------------------------------------- */

export async function login(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const result =
            await loginUser(
                request.body,
            );

        return sendSuccess(
            response,
            200,
            "Login successful.",
            result,
        );
    } catch (error) {
        next(error);
    }
}

/* -------------------------------------------------------------------------- */
/*                             Current User                                   */
/* -------------------------------------------------------------------------- */

export async function me(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const result =
            await getCurrentUser(
                request.user!.userId,
            );

        return sendSuccess(
            response,
            200,
            "Authenticated user fetched successfully.",
            result,
        );
    } catch (error) {
        next(error);
    }
}