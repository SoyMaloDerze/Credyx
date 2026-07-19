import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;

/**
 * Hashes a plain-text password using bcrypt.
 */
export async function hashPassword(
    password: string,
): Promise<string> {
    return bcrypt.hash(
        password,
        SALT_ROUNDS,
    );
}

/**
 * Compares a plain-text password against
 * its hashed counterpart.
 */
export async function comparePassword(
    password: string,
    hashedPassword: string,
): Promise<boolean> {
    return bcrypt.compare(
        password,
        hashedPassword,
    );
}