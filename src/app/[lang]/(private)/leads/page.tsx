import React from 'react';

import { File } from 'lucide-react';
import { Lead } from '@prisma/client';
import { CreateLeadProvider } from '@/providers/CreateLeadProvider';

import { getLeads } from '@/services/leads';
import { Button } from '@/components/ui/button';
import { TableSearchParams } from '@/types/searchParams';
import { getDictionary } from '@/lib/locale/dictionaries';
import { LeadsTableCard } from '@/components/modules/leads/LeadsTableCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreateLeadDrawer } from '@/components/modules/leads/crud/create/CreateLeadDrawer';

const LeadsPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams?: Promise<TableSearchParams<Lead>>;
}) => {
  const { lang } = await params;
  const query = await searchParams;

  const currentSize = Number(query?.size) || 10;
  const currentPage = Number(query?.page) || 1;
  const orderBy = query?.orderBy ? (query.orderBy as keyof Lead) : undefined;
  const order = query?.order as 'asc' | 'desc';

  const dict = await getDictionary(lang);

  const { leads, total } = await getLeads({
    skip: (currentPage - 1) * currentSize,
    take: currentSize,
    orderBy,
    order,
  });

  return (
    <main className='h-full grid flex-1 items-start gap-4 md:p-4 md:px-6 md:py-0 md:gap-8'>
      <Tabs defaultValue='last-updated'>
        <div className='flex items-center px-4'>
          <TabsList>
            <TabsTrigger value='last-updated'>Last Updated</TabsTrigger>
            <TabsTrigger value='all'>All</TabsTrigger>
          </TabsList>
          <div className='ml-auto flex items-center gap-2'>
            <Button size='sm' variant='outline' className='h-7 gap-1'>
              <File className='h-3.5 w-3.5' />
              <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
                {dict.pages.leads.CRUD.export}
              </span>
            </Button>
            <CreateLeadProvider>
              <CreateLeadDrawer title={dict.pages.leads.CRUD.create} />
            </CreateLeadProvider>
          </div>
        </div>
        <TabsContent value='all'>
          <LeadsTableCard
            dict={dict}
            currentPage={currentPage}
            leads={leads}
            currentSize={currentSize}
            total={total}
          />
        </TabsContent>
        <TabsContent value='last-updated'>
          <LeadsTableCard
            dict={dict}
            currentPage={currentPage}
            leads={leads}
            currentSize={currentSize}
            total={total}
            query={{
              ...query,
              orderBy: 'UpdatedAt',
              order: 'desc',
            }}
          />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default LeadsPage;
