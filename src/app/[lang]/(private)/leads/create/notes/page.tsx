'use client';

import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { CREATE_LEAD_ROUTE_ROUTE } from '@/routes';
import { useCreateLeadContext } from '@/hooks/useCreateLeadContext';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { LeadNotesFormValues } from '@/types/forms/leads';
import { LeadNotesForm } from '@/components/forms/lead/LeadNoteForm';

export default function CreateLeadNotesPage() {
  const { form, onSubmit } = useCreateLeadContext();

  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Notes</h3>
        <p className='text-sm text-muted-foreground'>Add some notes to your lead.</p>
      </div>
      <Separator />
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <LeadNotesForm form={form as unknown as UseFormReturn<LeadNotesFormValues>} />
        <div>
          <Button variant='default' type='submit' className='w-full'>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
