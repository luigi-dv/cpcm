'use client';

import { UseFormReturn } from 'react-hook-form';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import { LeadInformationFormValues } from '@/types/forms/leads';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const LeadInformationInputsCard = ({
  informationForm,
  withSaveButton,
}: {
  informationForm: UseFormReturn<LeadInformationFormValues>;
  withSaveButton?: boolean;
}) => {
  const {
    register,
    formState: { isDirty, dirtyFields, isSubmitting },
  } = informationForm;

  return (
    <Card className='col-span-2 md:col-span-1'>
      <CardHeader>
        <CardTitle>Lead Information</CardTitle>
      </CardHeader>
      <CardContent className='space-y-2'>
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
      </CardContent>
      {withSaveButton && (
        <CardFooter className='w-full flex justify-end'>
          <Button type='submit'>
            {isSubmitting ? (
              <div className='flex'>
                <Loading /> Saving{' '}
              </div>
            ) : (
              'Save'
            )}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
