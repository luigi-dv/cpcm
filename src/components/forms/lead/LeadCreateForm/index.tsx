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
  const { form, onSubmit } = useCreateLeadContext();
  return (
    <div className='col-span-2 md:col-span-1'>
      <Tabs defaultValue='contact-information'>
        <div className='flex items-center px-4'>
          <TabsList>
            <TabsTrigger value='contact-information'>Contact Information</TabsTrigger>
            <TabsTrigger value='route'>Route</TabsTrigger>
            <TabsTrigger value='notes'>Notes</TabsTrigger>
          </TabsList>
        </div>
        <div className='p-4 md:p-2'>
          <TabsContent value='contact-information'>
            <LeadInformationInputsCard
              informationForm={form as unknown as UseFormReturn<LeadInformationFormValues>}
            />
          </TabsContent>
          <TabsContent value='route'>
            <LeadRouteInputsCard
              routeForm={form as unknown as UseFormReturn<LeadRouteFormValues>}
            />
          </TabsContent>
          <TabsContent value='notes'>
            <LeadNoteInputsCard notesForm={form as unknown as UseFormReturn<LeadNotesFormValues>} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
