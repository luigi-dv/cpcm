'use client';

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import dayjs from 'dayjs';
import { toast } from 'sonner';
import { LEADS_ROUTE } from '@/routes';
import { useRouter } from 'next/navigation';
import { mapToLeadSchema } from '@/schemas/leads';
import { CreateLeadContext } from '@/context/CreateLeadContext';

import { createLead } from '@/services/leads';
import { LeadCreateFormValues } from '@/types/forms/leads/LeadCreateFormValues';

export const CreateLeadProvider = (props: { children: React.ReactNode }) => {
  const form = useForm<LeadCreateFormValues>();
  const router = useRouter();

  const onSubmit: SubmitHandler<LeadCreateFormValues> = async (data) => {
    const schema = mapToLeadSchema({
      ContactPerson: data.contactPerson,
      Email: data.email,
      Phone: data.phone,
      Department: data.department,
      Route: data.route,
      Province: data.province,
      Category: data.category,
      CenterName: data.centerName,
      Notes: data.notes,
    });

    try {
      const createdLead = await createLead({
        schema, // Spread schema properties into the object
      });
      router.replace(LEADS_ROUTE + '/' + createdLead?.id);
      toast.success('Lead created successfully', {
        description: dayjs(createdLead?.UpdatedAt).toString(),
      });
    } catch (e) {
      toast.error('Error', {
        description: 'Failed to create the lead. Please try again.',
      });
    }
  };

  return (
    <CreateLeadContext.Provider value={{ form, onSubmit }}>
      {props.children}
    </CreateLeadContext.Provider>
  );
};
