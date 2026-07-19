import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

declare global {
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined;
}

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

/**
 * Reuseale(feat): a single Prisma Client instance across the application.
 * In development, this prevents exhausting database connections
 * during hot reloads.
 */
export const prisma =
    global.prisma ??
    new PrismaClient({
        adapter,
        log:
            process.env.NODE_ENV === "development"
                ? ["query", "warn", "error"]
                : ["error"],
    });

if (process.env.NODE_ENV !== "production") {
    global.prisma = prisma;
}