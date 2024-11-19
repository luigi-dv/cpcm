'use client';

import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { useRouter } from 'next/navigation';
import { CREATE_LEAD_ROUTE_ROUTE } from '@/routes';
import { useCreateLeadContext } from '@/hooks/useCreateLeadContext';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { LeadInformationFormValues } from '@/types/forms/leads';
import { LeadInformationForm } from '@/components/forms/lead/LeadInformationForm';

export default function CreateLeadPage() {
  const { form, onSubmit } = useCreateLeadContext();

  const router = useRouter();
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Contact Information</h3>
        <p className='text-sm text-muted-foreground'>This is your lead contact information.</p>
      </div>
      <Separator />
      <LeadInformationForm form={form as unknown as UseFormReturn<LeadInformationFormValues>} />
      <div>
        <Button
          onClick={() => router.push(CREATE_LEAD_ROUTE_ROUTE)}
          variant='default'
          type='button'
          className='w-full'
        >
          Next
        </Button>
      </div>
    </div>
  );
}
