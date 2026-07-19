import { Router } from "express";

import {
    fetchVault,
    updateVault,
} from "../controllers/vault.controller";

import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.use(authenticate);

router.get(
    "/",
    fetchVault,
);

router.patch(
    "/",
    updateVault,
);

export default router;