import { z } from "zod";

export const connectWalletSchema = z.object({
    address: z
        .string()
        .trim()
        .min(1, "Wallet address is required.")
        .regex(
            /^0x[a-fA-F0-9]{40}$/,
            "Invalid wallet address."
        ),

    network: z
        .string()
        .trim()
        .min(1, "Network is required."),
});

export const updateWalletSchema =
    connectWalletSchema.partial();

export type ConnectWalletInput =
    z.infer<typeof connectWalletSchema>;

export type UpdateWalletInput =
    z.infer<typeof updateWalletSchema>;