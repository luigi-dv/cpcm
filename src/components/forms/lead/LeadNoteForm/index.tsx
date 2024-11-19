import { UseFormReturn } from 'react-hook-form';

import { Textarea } from '@/components/ui/textarea';
import { LeadNotesFormValues } from '@/types/forms/leads';

export const LeadNotesForm = ({
  form,
}: {
  form: UseFormReturn<LeadNotesFormValues, any, undefined>;
}) => {
  const { register } = form;

  return (
    <>
      <div className='space-y-1'>
        <Textarea id='name' {...register('notes')} rows={10} />
      </div>
    </>
  );
};
