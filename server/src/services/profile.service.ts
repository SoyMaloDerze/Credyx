import { AppError } from "../errors/AppError";

import {
    createProfile,
    findProfileByUserId,
    updateProfile,
} from "../repositories/profile.repository";

import { findUserById } from "../repositories/user.repository";

import type {
    ProfileInput,
} from "../validators/profile.validator";

function calculateCompletion(
    profile: ProfileInput,
): number {
    const fields = [
        profile.firstName,
        profile.lastName,
        profile.displayName,
        profile.profession,
        profile.summary,
        profile.email,
        profile.phone,
        profile.website,
        profile.country,
        profile.city,
        profile.timezone,
    ];

    const completed =
        fields.filter(Boolean).length;

    return Math.round(
        (completed / fields.length) * 100,
    );
}

/* -------------------------------------------------------------------------- */
/*                              Create Profile                                */
/* -------------------------------------------------------------------------- */

export async function createUserProfile(
    userId: string,
    input: ProfileInput,
) {
    const user =
        await findUserById(userId);

    if (!user) {
        throw new AppError(
            "User not found.",
            404,
        );
    }

    const existing =
        await findProfileByUserId(
            userId,
        );

    if (existing) {
        throw new AppError(
            "Profile already exists.",
            409,
        );
    }

    return createProfile({
        ...input,

        completion:
            calculateCompletion(
                input,
            ),

        user: {
            connect: {
                id: userId,
            },
        },
    });
}

/* -------------------------------------------------------------------------- */
/*                               Get Profile                                  */
/* -------------------------------------------------------------------------- */

export async function getProfile(
    userId: string,
) {
    const profile =
        await findProfileByUserId(
            userId,
        );

    if (!profile) {
        throw new AppError(
            "Profile not found.",
            404,
        );
    }

    return profile;
}

/* -------------------------------------------------------------------------- */
/*                             Update Profile                                 */
/* -------------------------------------------------------------------------- */

export async function updateUserProfile(
    userId: string,
    input: ProfileInput,
) {
    const profile =
        await findProfileByUserId(
            userId,
        );

    if (!profile) {
        throw new AppError(
            "Profile not found.",
            404,
        );
    }

    return updateProfile(
        userId,
        {
            ...input,
            completion:
                calculateCompletion(
                    input,
                ),
        },
    );
}