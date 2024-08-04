'use server';

import { prismaClient } from '@/lib/prisma';

/**
 * Retrieves a user by id
 */
export const getUser = async (id: string) => {
  return prismaClient.user.findUnique({
    where: {
      id: id,
    },
  });
};

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

/**
 * Update a user by id
 */
export const updateUser = async (userId: string, data: any) => {
  return prismaClient.user.update({
    where: {
      id: userId,
    },
    data,
  });
};
