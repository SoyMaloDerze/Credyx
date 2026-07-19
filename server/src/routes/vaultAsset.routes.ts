import { Router } from "express";

import {
    createAsset,
    fetchAsset,
    fetchAssets,
    removeAsset,
    updateAsset,
} from "../controllers/vaultAsset.controller";

import { authenticate } from "../middleware/auth.middleware";
import { validate } from "../middleware/validate.middleware";

import {
    createAssetSchema,
    updateAssetSchema,
} from "../validators/vaultAsset.validator";

const router = Router();

/* -------------------------------------------------------------------------- */
/*                             Authentication                                 */
/* -------------------------------------------------------------------------- */

router.use(authenticate);

/* -------------------------------------------------------------------------- */
/*                              Asset Routes                                  */
/* -------------------------------------------------------------------------- */

router.post(
    "/",
    validate(createAssetSchema),
    createAsset,
);

router.get(
    "/",
    fetchAssets,
);

router.get(
    "/:id",
    fetchAsset,
);

router.patch(
    "/:id",
    validate(updateAssetSchema),
    updateAsset,
);

router.delete(
    "/:id",
    removeAsset,
);

export default router;