import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { useCreateLeadContext } from '@/hooks/useCreateLeadContext';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LeadNoteInputsCard } from '@/components/modules/leads/crud/common/LeadNoteInputsCard';
import { LeadRouteInputsCard } from '@/components/modules/leads/crud/common/LeadRouteInputsCard';
import { LeadInformationInputsCard } from '@/components/modules/leads/crud/common/LeadInformationInputsCard';
import {
  LeadInformationFormValues,
  LeadNotesFormValues,
  LeadRouteFormValues,
} from '@/types/forms/leads';

export const LeadCreateForm = () => {
  const { form } = useCreateLeadContext();
  return (
    <>
      <LeadInformationInputsCard
        informationForm={form as unknown as UseFormReturn<LeadInformationFormValues>}
      />

      <LeadRouteInputsCard routeForm={form as unknown as UseFormReturn<LeadRouteFormValues>} />

      <LeadNoteInputsCard notesForm={form as unknown as UseFormReturn<LeadNotesFormValues>} />
    </>
  );
};
