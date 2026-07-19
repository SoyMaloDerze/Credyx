import { z } from "zod";

/* -------------------------------------------------------------------------- */
/*                               Asset Enums                                  */
/* -------------------------------------------------------------------------- */

const assetTypes = [
    "RESUME",
    "PORTFOLIO",
    "EXPERIENCE",
    "EDUCATION",
    "DOCUMENT",
    "CERTIFICATE",
    "PROFILE",
    "WEBSITE",
    "IDENTITY",
] as const;

const assetCollections = [
    "PROFESSIONAL",
    "PROJECTS",
    "EDUCATION",
    "ACHIEVEMENTS",
    "DEVELOPER",
    "IDENTITY",
] as const;

/* -------------------------------------------------------------------------- */
/*                           Create Vault Asset                               */
/* -------------------------------------------------------------------------- */

export const vaultAssetSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, "Title is required.")
        .max(100),

    description: z
        .string()
        .trim()
        .min(1, "Description is required.")
        .max(1000),

    type: z.enum(assetTypes),

    collection: z.enum(assetCollections),

    size: z
        .string()
        .trim()
        .min(1, "Asset size is required."),

    tags: z
        .array(
            z.string().trim().min(1),
        )
        .default([]),

    isPrimary: z
        .boolean()
        .default(false),

    isFavorite: z
        .boolean()
        .default(false),

    isPinned: z
        .boolean()
        .default(false),
});

/* -------------------------------------------------------------------------- */
/*                           Update Vault Asset                               */
/* -------------------------------------------------------------------------- */

export const updateVaultAssetSchema =
    vaultAssetSchema.partial();

/* -------------------------------------------------------------------------- */
/*                              Rename Vault                                  */
/* -------------------------------------------------------------------------- */

export const renameVaultSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, "Vault name is required.")
        .max(100),
});

/* -------------------------------------------------------------------------- */
/*                               Export Types                                 */
/* -------------------------------------------------------------------------- */

export type VaultAssetInput =
    z.infer<
        typeof vaultAssetSchema
    >;

export type UpdateVaultAssetInput =
    z.infer<
        typeof updateVaultAssetSchema
    >;

export type RenameVaultInput =
    z.infer<
        typeof renameVaultSchema
    >;