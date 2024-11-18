'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import dayjs from 'dayjs';
import { toast } from 'sonner';
import { Lead } from '@prisma/client';
import { mapToLeadSchema } from '@/schemas/leads/mapToLeadSchema';

import { updateLead } from '@/services/leads';
import { LeadInformationFormValues } from '@/types/forms/leads';
import { LeadInformationInputsCard } from '@/components/modules/leads/crud/common/LeadInformationInputsCard';

export const LeadEditInformationForm = ({ lead }: { lead: Lead }) => {
  const form = useForm<LeadInformationFormValues>({
    defaultValues: {
      contactPerson: lead.ContactPerson,
      email: lead.Email,
      phone: lead.Phone,
      department: lead.Department,
    },
  });

  const onSubmit: SubmitHandler<LeadInformationFormValues> = async (data) => {
    const schema = mapToLeadSchema({
      ...lead,
      ContactPerson: data.contactPerson,
      Email: data.email,
      Phone: data.phone,
      Department: data.department,
    });

    try {
      const updatedLead = await updateLead({
        // @ts-ignore
        id: lead['_id']?.['$oid'], // Safely access nested properties
        schema, // Spread schema properties into the object
      });
      toast.success('Lead Information Data Updated', {
        description: dayjs(updatedLead?.UpdatedAt).toString(),
      });
    } catch (e) {
      toast.error('Error', {
        description: 'Failed to update the lead. Please try again.',
      });
    }
  };

  return (
    <div className='col-span-2 md:col-span-1'>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <LeadInformationInputsCard informationForm={form} withSaveButton />
      </form>
    </div>
  );
};
