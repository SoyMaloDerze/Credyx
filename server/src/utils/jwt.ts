import jwt, { type SignOptions } from "jsonwebtoken";

import { env } from "../config/env";

interface JwtPayload {
    userId: string;
}

const jwtOptions: SignOptions = {
    expiresIn: env.JWT_EXPIRES_IN as SignOptions["expiresIn"],
};

export function generateAccessToken(
    payload: JwtPayload,
): string {
    return jwt.sign(
        payload,
        env.JWT_SECRET,
        jwtOptions,
    );
}

export function verifyAccessToken(
    token: string,
): JwtPayload {
    return jwt.verify(
        token,
        env.JWT_SECRET,
    ) as JwtPayload;
}