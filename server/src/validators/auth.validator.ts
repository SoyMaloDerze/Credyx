import { z } from "zod";

/* -------------------------------------------------------------------------- */
/*                              Register Schema                               */
/* -------------------------------------------------------------------------- */

export const registerSchema = z
    .object({
        email: z
            .string()
            .trim()
            .email("Please provide a valid email address."),

        password: z
            .string()
            .min(
                8,
                "Password must be at least 8 characters.",
            )
            .max(
                64,
                "Password cannot exceed 64 characters.",
            )
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                "Password must contain at least one uppercase letter, one lowercase letter and one number.",
            ),

        confirmPassword: z
            .string(),
    })
    .refine(
        (data) =>
            data.password ===
            data.confirmPassword,
        {
            path: ["confirmPassword"],
            message:
                "Passwords do not match.",
        },
    );

/* -------------------------------------------------------------------------- */
/*                                Login Schema                                */
/* -------------------------------------------------------------------------- */

export const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .email("Please provide a valid email address."),

    password: z
        .string()
        .min(
            1,
            "Password is required.",
        ),
});

/* -------------------------------------------------------------------------- */
/*                              OAuth Schema                                  */
/* -------------------------------------------------------------------------- */

export const oauthSchema = z.object({
    provider: z.enum([
        "GOOGLE",
        "GITHUB",
    ]),

    accessToken: z
        .string()
        .min(
            1,
            "Access token is required.",
        ),
});

/* -------------------------------------------------------------------------- */
/*                               Export Types                                 */
/* -------------------------------------------------------------------------- */

export type RegisterInput =
    z.infer<
        typeof registerSchema
    >;

export type LoginInput =
    z.infer<
        typeof loginSchema
    >;

export type OAuthInput =
    z.infer<
        typeof oauthSchema
    >;