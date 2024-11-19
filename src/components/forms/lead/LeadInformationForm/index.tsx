import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { LeadInformationFormValues } from '@/types/forms/leads';

export const LeadInformationForm = ({
  form,
}: {
  form: UseFormReturn<LeadInformationFormValues, any, undefined>;
}) => {
  const { register } = form;
  return (
    <>
      <div className='space-y-1'>
        <Label htmlFor='lead-contact-person'>Contact</Label>
        <Input id='lead-contact-person' {...register('contactPerson')} />
      </div>
      <div className='space-y-1'>
        <Label htmlFor='lead-email'>Email</Label>
        <Input id='lead-email' {...register('email')} />
      </div>
      <div className='space-y-1'>
        <Label htmlFor='lead-phone'>Phone</Label>
        <Input id='lead-phone' {...register('phone')} />
      </div>
      <div className='space-y-1'>
        <Label htmlFor='lead-department'>Department</Label>
        <Input id='lead-department' {...register('department')} />
      </div>
    </>
  );
};
