'use client';

import { UseFormReturn } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import { LeadInformationFormValues } from '@/types/forms/leads';
import { LeadInformationForm } from '@/components/forms/lead/LeadInformationForm';
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
        <LeadInformationForm form={informationForm} />
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
