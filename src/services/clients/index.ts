"use server";

import { prismaClient } from "@/lib/prisma";
import { Client } from "@prisma/client";

export const getClients = async (
  skip?: number,
  take?: number,
): Promise<Client[]> => {
  return prismaClient.client.findMany({
    skip: skip,
    take: take,
  });
};
