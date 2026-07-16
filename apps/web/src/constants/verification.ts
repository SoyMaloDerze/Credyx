export const VERIFICATION_STATUS = {
    VERIFIED: "verified",
    PENDING: "pending",
    UNVERIFIED: "unverified",
} as const;

export type VerificationStatus = (typeof VERIFICATION_STATUS)[keyof typeof VERIFICATION_STATUS];