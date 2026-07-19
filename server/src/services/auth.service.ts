
import {
    createUser,
    findUserByEmail,
    findUserById,
} from "../repositories/user.repository";

import { AppError } from "../errors/AppError";

import { createVault } from "../repositories/vault.repository";

import {
    generateAccessToken,
} from "../utils/jwt";

import {
    hashPassword,
    comparePassword,
} from "../utils/hash";

import type {
    RegisterInput,
    LoginInput,
} from "../validators/auth.validator";

interface AuthResponse {
    token: string;

    user: {
        id: string;
        email: string;
    };
}

/* -------------------------------------------------------------------------- */
/*                              Register User                                 */
/* -------------------------------------------------------------------------- */

export async function registerUser(
    input: RegisterInput,
): Promise<AuthResponse> {
    const existingUser =
        await findUserByEmail(
            input.email,
        );

    if (existingUser) {
        throw new AppError(
            "An account with this email already exists.",
            409,
        );
    }

    const hashedPassword =
        await hashPassword(
            input.password,
        );

    const user =
        await createUser({
            email: input.email,
            password:
                hashedPassword,
        });

    await createVault({
        name: "My Vault",

        user: {
            connect: {
                id: user.id,
            },
        },
    });

    const token =
        generateAccessToken({
            userId: user.id,
        });

    return {
        token,

        user: {
            id: user.id,
            email: user.email,
        },
    };
}

/* -------------------------------------------------------------------------- */
/*                                Login User                                  */
/* -------------------------------------------------------------------------- */

export async function loginUser(
    input: LoginInput,
): Promise<AuthResponse> {
    const user = await findUserByEmail(
        input.email,
    );

    if (!user) {
        throw new AppError(
            "Invalid email or password.",
            401,
        );
    }

    if (!user.password) {
        throw new AppError(
            "Please sign in using your authentication provider.",
            401,
        );
    }

    const passwordMatches =
        await comparePassword(
            input.password,
            user.password,
        );

    if (!passwordMatches) {
        throw new AppError(
            "Invalid email or password.",
            401,
        );
    }

    const token =
        generateAccessToken({
            userId: user.id,
        });

    return {
        token,

        user: {
            id: user.id,
            email: user.email,
        },
    };
}

/* -------------------------------------------------------------------------- */
/*                             Get Current User                               */
/* -------------------------------------------------------------------------- */

export async function getCurrentUser(
    userId: string,
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

    return {
        id: user.id,
        email: user.email,
        provider: user.provider,
        createdAt: user.createdAt,
    };
}



