"use server";

import { prismaClient } from "@/lib/prisma";

/**
 * Retrieves a user by their email address.
 */
export const getUserByEmail = async (email: string) => {
  return prismaClient.user.findUnique({
    where: {
      email: email,
    },
  });
};
