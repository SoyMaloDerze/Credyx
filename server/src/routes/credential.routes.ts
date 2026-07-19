import { Router } from "express";
import {
    getCredentialController,
    issueCredential,
    revokeCredentialController,
    verifyCredentialController,
} from "../controllers/credential.controller";

const router = Router();

router.post("/issue", issueCredential);

router.get("/verify/:hash", verifyCredentialController);

router.get("/:hash", getCredentialController);

router.patch("/revoke/:hash", revokeCredentialController);

export default router;