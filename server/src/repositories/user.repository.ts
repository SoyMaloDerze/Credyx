import type {
    Prisma,
    User,
} from "@prisma/client";

import { prisma } from "../lib/prisma";

/* -------------------------------------------------------------------------- */
/*                                  Queries                                   */
/* -------------------------------------------------------------------------- */

export async function findUserById(
    id: string,
): Promise<User | null> {
    return prisma.user.findUnique({
        where: {
            id,
        },
    });
}

export async function findUserByEmail(
    email: string,
): Promise<User | null> {
    return prisma.user.findUnique({
        where: {
            email,
        },
    });
}

export async function findUserByGoogleId(
    googleId: string,
): Promise<User | null> {
    return prisma.user.findUnique({
        where: {
            googleId,
        },
    });
}

export async function findUserByGithubId(
    githubId: string,
): Promise<User | null> {
    return prisma.user.findUnique({
        where: {
            githubId,
        },
    });
}

/* -------------------------------------------------------------------------- */
/*                                 Mutations                                  */
/* -------------------------------------------------------------------------- */

export async function createUser(
    data: Prisma.UserCreateInput,
): Promise<User> {
    return prisma.user.create({
        data,
    });
}

export async function updateUser(
    id: string,
    data: Prisma.UserUpdateInput,
): Promise<User> {
    return prisma.user.update({
        where: {
            id,
        },
        data,
    });
}

export async function deleteUser(
    id: string,
): Promise<User> {
    return prisma.user.delete({
        where: {
            id,
        },
    });
}