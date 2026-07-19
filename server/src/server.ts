import app from "./app";
import { env } from "./config/env";
import { prisma } from "./lib/prisma";

const server = app.listen(env.PORT, () => {
    console.log(
        `🚀 Credyx API running on http://localhost:${env.PORT}`,
    );
});

/**
 * Gracefully shuts down the application.
 * This ensures Prisma disconnects cleanly and
 * all pending requests complete before exit.
 */
async function shutdown(signal: string) {
    console.log(`\n${signal} received. Shutting down...`);

    server.close(async () => {
        await prisma.$disconnect();

        console.log("✅ Database disconnected.");
        console.log("👋 Server stopped.");

        process.exit(0);
    });
}

process.on("SIGINT", () => {
    void shutdown("SIGINT");
});

process.on("SIGTERM", () => {
    void shutdown("SIGTERM");
});

/**
 * Catch unexpected promise rejections.
 */
process.on("unhandledRejection", (error) => {
    console.error("Unhandled Promise Rejection:", error);

    void shutdown("UNHANDLED_REJECTION");
});

/**
 * Catch uncaught exceptions.
 */
process.on("uncaughtException", (error) => {
    console.error("Uncaught Exception:", error);

    void shutdown("UNCAUGHT_EXCEPTION");
});