import {
    AssetCollection,
    AssetType,
} from "@prisma/client";

import { z } from "zod";

/* -------------------------------------------------------------------------- */
/*                             Asset Create Schema                            */
/* -------------------------------------------------------------------------- */

export const createAssetSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, "Title is required.")
        .max(100),

    description: z
        .string()
        .trim()
        .min(1, "Description is required.")
        .max(5000),

    type: z.nativeEnum(
        AssetType,
        {
            message:
                "Invalid asset type.",
        },
    ),

    collection: z.nativeEnum(
        AssetCollection,
        {
            message:
                "Invalid asset collection.",
        },
    ),

    size: z
        .string()
        .trim()
        .min(1, "Size is required."),

    tags: z
        .array(
            z.string().trim(),
        )
        .default([]),

    isPrimary: z
        .boolean()
        .optional(),

    isFavorite: z
        .boolean()
        .optional(),

    isPinned: z
        .boolean()
        .optional(),
});

/* -------------------------------------------------------------------------- */
/*                             Asset Update Schema                            */
/* -------------------------------------------------------------------------- */

export const updateAssetSchema =
    createAssetSchema
        .partial()
        .extend({
            txHash: z
                .string()
                .trim()
                .optional(),

            verified: z
                .boolean()
                .optional(),
        });

/* -------------------------------------------------------------------------- */
/*                                Export Types                                */
/* -------------------------------------------------------------------------- */

export type CreateAssetInput =
    z.infer<
        typeof createAssetSchema
    >;

export type UpdateAssetInput =
    z.infer<
        typeof updateAssetSchema
    >;