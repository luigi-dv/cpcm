'use client';

import { UseFormReturn } from 'react-hook-form';

import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import { Textarea } from '@/components/ui/textarea';
import { LeadNotesFormValues } from '@/types/forms/leads';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const LeadNoteInputsCard = ({
  notesForm,
  withSaveButton,
}: {
  notesForm: UseFormReturn<LeadNotesFormValues>;
  withSaveButton?: boolean;
}) => {
  const {
    register,
    formState: { isDirty, dirtyFields, isSubmitting },
  } = notesForm;

  return (
    <Card className='col-span-2'>
      <CardHeader>
        <CardTitle>Notes</CardTitle>
        <CardDescription>Manage all related with your lead notes here.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <div className='space-y-1'>
          <Textarea id='name' {...register('notes')} />
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
