import React from 'react';

import { notFound } from 'next/navigation';

import { getLead } from '@/services/leads';
import { LeadEdit } from '@/components/modules/leads/crud/edit/LeadEdit';
import { LeadRoute } from '@/components/modules/leads/information/LeadRoute';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DeleteLeadDialog } from '@/components/modules/leads/crud/delete/DeleteLeadDialog';
import { LeadInformationNotes } from '@/components/modules/leads/information/LeadInformation';

export default async function LeadPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const lead = await getLead(id);

  // Returns not found page
  if (!lead) return notFound();

  return (
    <main className='h-full grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
      <Tabs defaultValue='information' className='w-full'>
        <div className='flex items-center px-4'>
          <TabsList>
            <TabsTrigger value='information'>Information</TabsTrigger>
            <TabsTrigger value='edit-lead'>Edit</TabsTrigger>
          </TabsList>
          <div className='ml-auto flex items-center gap-2'>
            <DeleteLeadDialog id={id} />
          </div>
        </div>
        <TabsContent value={'information'}>
          <div className='grid grid-cols-1 gap-y-4'>
            <LeadInformationNotes lead={lead} />
            <LeadRoute lead={lead} />
          </div>
        </TabsContent>
        <TabsContent value='edit-lead'>
          <LeadEdit lead={lead} />
        </TabsContent>
      </Tabs>
    </main>
  );
}
