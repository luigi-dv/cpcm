'use server';

import { ObjectId } from 'mongodb';
import { Lead } from '@prisma/client';
import { LeadSchemaInterface } from '@/schemas/leads';

import { prismaClient } from '@/lib/prisma';

/**
 * Get all leads
 * @param skip - Skip number of leads
 * @param take - Take number of leads
 * @param orderBy - Order By
 * @param order - Order
 */
export const getLeads = async ({
  skip,
  take,
  orderBy,
  order = 'desc',
}: {
  skip?: number;
  take?: number;
  orderBy?: keyof Lead;
  order?: 'asc' | 'desc';
}): Promise<{ leads: Lead[]; total: number }> => {
  // Get the total count of leads
  const total = await prismaClient.lead.count();

  const orderByField = orderBy ? { [orderBy]: order } : undefined;

  // Get the paginated leads
  const leads = await prismaClient.lead.findMany({
    skip: skip,
    take: take,
    orderBy: orderBy ? orderByField : undefined,
  });

  // Return both the leads and the total count
  return { leads, total };
};

/**
 * Get lead by id
 * @param id - Lead id
 */
export const getLead = async (id: string): Promise<Lead | null> => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const leads = (await prismaClient.lead.findRaw({
    filter: {
      _id: { $eq: { $oid: new ObjectId(id) } },
    },
  })) as unknown as Lead[];

  const transformedLeads = leads.map((lead) => ({
    ...lead,
    // @ts-expect-error
    id: lead['_id']['$oid'],
  })) as Lead[];

  // Return the first lead or null
  return transformedLeads.length > 0 ? transformedLeads[0] : null;
};

export const deleteLead = async (id: string): Promise<Lead | null> => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  return prismaClient.lead.delete({
    where: {
      id,
    },
  });
};

/**
 * Update Lead by id
 * @param id
 * @param schema
 */
export const updateLead = async ({
  id,
  schema,
}: {
  id: string;
  schema: LeadSchemaInterface;
}): Promise<Lead | null> => {
  return prismaClient.lead.update({
    where: {
      id,
    },
    data: {
      ...schema,
    },
  });
};

/**
 * Create Lead by id
 * @param schema
 */
export const createLead = async ({
  schema,
}: {
  schema: LeadSchemaInterface;
}): Promise<Lead | null> => {
  return prismaClient.lead.create({
    data: {
      ...schema,
    },
  });
};
