import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z
        .enum([
            "development",
            "test",
            "production",
        ])
        .default("development"),

    PORT: z.coerce
        .number()
        .default(5000),

    DATABASE_URL: z
        .string()
        .min(1, "DATABASE_URL is required"),

    JWT_SECRET: z
        .string()
        .min(32, "JWT_SECRET must be at least 32 characters"),

    JWT_EXPIRES_IN: z
        .string()
        .default("7d"),

    FRONTEND_URL: z
        .string()
        .url("FRONTEND_URL must be a valid URL"),
    
    // test 
    GOOGLE_CLIENT_ID: z.string().optional(),
    GOOGLE_CLIENT_SECRET: z.string().optional(),
    GITHUB_CLIENT_ID: z.string().optional(),
    GITHUB_CLIENT_SECRET: z.string().optional(),

    // GOOGLE_CLIENT_ID: z
    //     .string()
    //     .min(1, "GOOGLE_CLIENT_ID is required"),

    // GOOGLE_CLIENT_SECRET: z
    //     .string()
    //     .min(1, "GOOGLE_CLIENT_SECRET is required"),

    // GITHUB_CLIENT_ID: z
    //     .string()
    //     .min(1, "GITHUB_CLIENT_ID is required"),

    // GITHUB_CLIENT_SECRET: z
    //     .string()
    //     .min(1, "GITHUB_CLIENT_SECRET is required"),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
    console.error(
        "❌ Invalid environment variables:\n",
        parsed.error.format(),
    );

    process.exit(1);
}

export const env = parsed.data;