import { SubmitHandler, UseFormReturn } from 'react-hook-form';

import { LeadCreateFormValues } from '@/types/forms/leads/LeadCreateFormValues';

export interface CreateLeadContextInterface {
  form: UseFormReturn<LeadCreateFormValues, any, undefined>;
  onSubmit: SubmitHandler<LeadCreateFormValues>;
}
