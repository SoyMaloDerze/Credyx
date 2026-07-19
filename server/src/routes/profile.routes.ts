import { Router } from "express";

import {
    createProfile,
    fetchProfile,
    updateProfile,
} from "../controllers/profile.controller";

import { validate } from "../middleware/validate.middleware";

import {
    profileSchema,
    updateProfileSchema,
} from "../validators/profile.validator";

import { authenticate } from "../middleware/auth.middleware";

const router = Router();

/* -------------------------------------------------------------------------- */
/*                               Profile Routes                               */
/* -------------------------------------------------------------------------- */

router.post(
    "/",
    authenticate,
    validate(profileSchema),
    createProfile,
);

router.get(
    "/",
    authenticate,
    fetchProfile,
);

router.patch(
    "/",
    authenticate,
    validate(updateProfileSchema),
    updateProfile,
);

export default router;