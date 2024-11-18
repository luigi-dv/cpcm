import { LeadNotesFormValues } from '@/types/forms/leads/LeadNotesFormValues';
import { LeadRouteFormValues } from '@/types/forms/leads/LeadRouteFormValues';
import { LeadInformationFormValues } from '@/types/forms/leads/LeadInformationFormValues';

export interface LeadCreateFormValues
  extends LeadInformationFormValues,
    LeadRouteFormValues,
    LeadNotesFormValues {}
