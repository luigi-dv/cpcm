'use client';

import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { useRouter } from 'next/navigation';
import { useCreateLeadContext } from '@/hooks/useCreateLeadContext';
import { CREATE_LEAD_NOTES_ROUTE, CREATE_LEAD_ROUTE, CREATE_LEAD_ROUTE_ROUTE } from '@/routes';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { LeadRouteForm } from '@/components/forms/lead/LeadRouteForm';
import { LeadInformationForm } from '@/components/forms/lead/LeadInformationForm';
import { LeadInformationFormValues, LeadRouteFormValues } from '@/types/forms/leads';

export default function CreateLeadRoute() {
  const router = useRouter();
  const { form } = useCreateLeadContext();

  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Route Information</h3>
        <p className='text-sm text-muted-foreground'>This is your lead route information.</p>
      </div>
      <Separator />
      <LeadRouteForm form={form as unknown as UseFormReturn<LeadRouteFormValues>} />
      <div className='grid grid-cols-2 gap-8'>
        <div>
          <Button
            onClick={() => router.push(CREATE_LEAD_ROUTE)}
            variant='outline'
            type='button'
            className='w-full'
          >
            Previous
          </Button>
        </div>
        <div>
          <Button
            onClick={() => router.push(CREATE_LEAD_NOTES_ROUTE)}
            variant='default'
            type='button'
            className='w-full'
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
