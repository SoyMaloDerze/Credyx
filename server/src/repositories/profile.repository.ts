import type {
    Prisma,
    Profile,
} from "@prisma/client";

import { prisma } from "../lib/prisma";

/* -------------------------------------------------------------------------- */
/*                                  Queries                                   */
/* -------------------------------------------------------------------------- */

export async function findProfileById(
    id: string,
): Promise<Profile | null> {
    return prisma.profile.findUnique({
        where: {
            id,
        },
    });
}

export async function findProfileByUserId(
    userId: string,
): Promise<Profile | null> {
    return prisma.profile.findUnique({
        where: {
            userId,
        },
    });
}

/* -------------------------------------------------------------------------- */
/*                                 Mutations                                  */
/* -------------------------------------------------------------------------- */

export async function createProfile(
    data: Prisma.ProfileCreateInput,
): Promise<Profile> {
    return prisma.profile.create({
        data,
    });
}

export async function updateProfile(
    userId: string,
    data: Prisma.ProfileUpdateInput,
): Promise<Profile> {
    return prisma.profile.update({
        where: {
            userId,
        },
        data,
    });
}

export async function deleteProfile(
    id: string,
): Promise<Profile> {
    return prisma.profile.delete({
        where: {
            id,
        },
    });
}