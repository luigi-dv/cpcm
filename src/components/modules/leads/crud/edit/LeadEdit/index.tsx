import { Lead } from '@prisma/client';

import { LeadEditNotesForm } from '@/components/forms/lead/LeadEditNotesForm';
import { LeadEditRouteForm } from '@/components/forms/lead/LeadEditRouteForm';
import { LeadEditInformationForm } from '@/components/forms/lead/LeadEditInformationForm';

export const LeadEdit = ({ lead }: { lead: Lead }) => {
  return (
    <div className='grid grid-cols-2 gap-8'>
      <LeadEditInformationForm lead={lead} />
      <LeadEditRouteForm lead={lead} />
      <LeadEditNotesForm lead={lead} />
    </div>
  );
};
