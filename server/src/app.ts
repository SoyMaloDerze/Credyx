import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { env } from "./config/env";
import {
    errorMiddleware,
} from "./middleware/error.middleware";

import {
    notFoundMiddleware,
} from "./middleware/notFound.middleware";

import authRoutes from "./routes/auth.routes";
import profileRoutes from "./routes/profile.routes";
import vaultRoutes from "./routes/vault.routes";
import vaultAssetRoutes from "./routes/vaultAsset.routes";
import walletRoutes from "./routes/wallet.routes";
import credentialRoutes from "./routes/credential.routes";


const app = express();

/* -------------------------------------------------------------------------- */
/*                                 Middleware                                 */
/* -------------------------------------------------------------------------- */

app.use(
    cors({
        origin: env.FRONTEND_URL,
        credentials: true,
    }),
);

app.use(
    helmet({
        crossOriginResourcePolicy: false,
    }),
);

app.use(compression());

app.use(morgan("dev"));

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(cookieParser());

/* -------------------------------------------------------------------------- */
/*                                 Health Check                               */
/* -------------------------------------------------------------------------- */

app.get("/health", (_, response) => {
    response.status(200).json({
        success: true,
        message: "Credyx API is running.",
        timestamp: new Date().toISOString(),
    });
});

/* -------------------------------------------------------------------------- */
/*                                   Routes                                   */
/* -------------------------------------------------------------------------- */

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/vault", vaultRoutes);
app.use("/api/vault/assets", vaultAssetRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/credentials", credentialRoutes);

/* -------------------------------------------------------------------------- */
/*                                Error Handler                               */
/* -------------------------------------------------------------------------- */

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;