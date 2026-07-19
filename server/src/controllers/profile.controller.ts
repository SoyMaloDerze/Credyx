import type {
    NextFunction,
    Request,
    Response,
} from "express";

import {
    createUserProfile,
    getProfile,
    updateUserProfile,
} from "../services/profile.service";

import {
    sendSuccess,
} from "../utils/response";

/* -------------------------------------------------------------------------- */
/*                              Create Profile                                */
/* -------------------------------------------------------------------------- */

export async function createProfile(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const profile =
            await createUserProfile(
                request.user!.userId,
                request.body,
            );

        return sendSuccess(
            response,
            201,
            "Profile created successfully.",
            profile,
        );
    } catch (error) {
        next(error);
    }
}

/* -------------------------------------------------------------------------- */
/*                               Get Profile                                  */
/* -------------------------------------------------------------------------- */

export async function fetchProfile(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const profile =
            await getProfile(
                request.user!.userId,
            );

        return sendSuccess(
            response,
            200,
            "Profile fetched successfully.",
            profile,
        );
    } catch (error) {
        next(error);
    }
}

/* -------------------------------------------------------------------------- */
/*                              Update Profile                                */
/* -------------------------------------------------------------------------- */

export async function updateProfile(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const profile =
            await updateUserProfile(
                request.user!.userId,
                request.body,
            );

        return sendSuccess(
            response,
            200,
            "Profile updated successfully.",
            profile,
        );
    } catch (error) {
        next(error);
    }
}