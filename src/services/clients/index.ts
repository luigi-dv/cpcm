'use server';

import { Client } from '@prisma/client';

import { prismaClient } from '@/lib/prisma';

export const getClients = async (skip?: number, take?: number): Promise<Client[]> => {
  return prismaClient.client.findMany({
    skip: skip,
    take: take,
  });
};
