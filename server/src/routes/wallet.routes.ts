import { Router } from "express";

import {
    connectWallet,
    fetchWallet,
    updateWallet,
} from "../controllers/wallet.controller";

import { authenticate } from "../middleware/auth.middleware";
import { validate } from "../middleware/validate.middleware";

import {
    connectWalletSchema,
    updateWalletSchema,
} from "../validators/wallet.validator";

const router = Router();

router.use(authenticate);

router.post(
    "/connect",
    validate(connectWalletSchema),
    connectWallet,
);

router.get(
    "/",
    fetchWallet,
);

router.patch(
    "/",
    validate(updateWalletSchema),
    updateWallet,
);

export default router;