'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import dayjs from 'dayjs';
import { toast } from 'sonner';
import { Lead } from '@prisma/client';
import { mapToLeadSchema } from '@/schemas/leads/mapToLeadSchema';

import { updateLead } from '@/services/leads';
import { LeadNotesFormValues } from '@/types/forms/leads';
import { LeadNoteInputsCard } from '@/components//modules/leads/crud/common/LeadNoteInputsCard';

export const LeadEditNotesForm = ({ lead }: { lead: Lead }) => {
  const form = useForm<LeadNotesFormValues>({
    defaultValues: {
      notes: lead.Notes,
    },
  });

  const onSubmit: SubmitHandler<LeadNotesFormValues> = async (data) => {
    const schema = mapToLeadSchema({
      ...lead,
      Notes: data.notes,
    });

    try {
      const updatedLead = await updateLead({
        // @ts-ignore
        id: lead['_id']?.['$oid'], // Safely access nested properties
        schema, // Spread schema properties into the object
      });
      toast.success('Lead Notes Updated', {
        description: dayjs(updatedLead?.UpdatedAt).toString(),
      });
    } catch (e) {
      toast.error('Error', {
        description: 'Failed to update the lead. Please try again.',
      });
    }
  };

  return (
    <div className='col-span-2'>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <LeadNoteInputsCard notesForm={form} withSaveButton />
      </form>
    </div>
  );
};
