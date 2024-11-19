'use client';

import React from 'react';

import { CreateLeadProvider } from '@/providers/CreateLeadProvider';
import { CREATE_LEAD_NOTES_ROUTE, CREATE_LEAD_ROUTE, CREATE_LEAD_ROUTE_ROUTE } from '@/routes';

import { Separator } from '@/components/ui/separator';
import { SideBarNavigation } from '@/components/common/NavigationSidebar';

interface CreateLeadLayoutProps {
  children: React.ReactNode;
}

const sidebarNavItems = [
  {
    title: 'Information',
    href: CREATE_LEAD_ROUTE,
  },
  {
    title: 'Route',
    href: CREATE_LEAD_ROUTE_ROUTE,
  },
  {
    title: 'Notes',
    href: CREATE_LEAD_NOTES_ROUTE,
  },
];

export default function CreateLeadLayout({ children }: CreateLeadLayoutProps) {
  return (
    <CreateLeadProvider>
      <div className='space-y-6 p-10 pb-16 '>
        <div className='space-y-0.5'>
          <h2 className='text-2xl font-bold tracking-tight'>New Lead</h2>
          <p className='text-muted-foreground'>Create a new Lead</p>
        </div>
        <Separator className='my-6' />
        <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <aside className='-mx-4 lg:w-1/5'>
            <SideBarNavigation items={sidebarNavItems} />
          </aside>
          <div className='flex-1 lg:max-w-2xl'>{children}</div>
        </div>
      </div>
    </CreateLeadProvider>
  );
}
