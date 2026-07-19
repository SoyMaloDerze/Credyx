import { z } from "zod";

/* -------------------------------------------------------------------------- */
/*                               Profile Schema                               */
/* -------------------------------------------------------------------------- */

export const profileSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(1, "First name is required.")
        .max(50),

    lastName: z
        .string()
        .trim()
        .min(1, "Last name is required.")
        .max(50),

    displayName: z
        .string()
        .trim()
        .min(1, "Display name is required.")
        .max(100),

    profession: z
        .string()
        .trim()
        .min(1, "Profession is required.")
        .max(100),

    summary: z
        .string()
        .trim()
        .min(20, "Professional summary is too short.")
        .max(1000),

    email: z
        .string()
        .trim()
        .email("Please provide a valid email address."),

    phone: z
        .string()
        .trim()
        .optional(),

    website: z
        .string()
        .trim()
        .url("Please provide a valid website URL.")
        .optional()
        .or(z.literal("")),

    country: z
        .string()
        .trim()
        .min(1, "Country is required."),

    city: z
        .string()
        .trim()
        .min(1, "City is required."),

    timezone: z
        .string()
        .trim()
        .min(1, "Timezone is required."),
});

/* -------------------------------------------------------------------------- */
/*                           Partial Update Schema                            */
/* -------------------------------------------------------------------------- */

export const updateProfileSchema =
    profileSchema.partial();

/* -------------------------------------------------------------------------- */
/*                                Export Types                                */
/* -------------------------------------------------------------------------- */

export type ProfileInput =
    z.infer<
        typeof profileSchema
    >;

export type UpdateProfileInput =
    z.infer<
        typeof updateProfileSchema
    >;