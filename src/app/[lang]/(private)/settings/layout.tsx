import React, { ReactNode } from 'react';

import { Metadata } from 'next';

import { Separator } from '@/components/ui/separator';
import { getDictionary } from '@/lib/locale/dictionaries';
import { SideBarNavigation } from '@/components/common/NavigationSidebar';

export const metadata: Metadata = {
  title: 'Forms',
  description: 'Advanced form example using react-hook-form and Zod.',
};

const sidebarNavItems = [
  {
    title: 'Account',
    href: '/settings',
  },
  {
    title: 'Notifications',
    href: '/settings/notifications',
  },
];

export default async function SettingsLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <div className='space-y-6 p-10 pb-16 block'>
        <div className='space-y-0.5'>
          <h2 className='text-2xl font-bold tracking-tight'>{dict.pages.settings.title}</h2>
          <p className='text-muted-foreground'>{dict.pages.settings.description}</p>
        </div>
        <Separator className='my-6' />
        <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <aside className='-mx-4 lg:w-1/5'>
            <SideBarNavigation items={sidebarNavItems} />
          </aside>
          <div className='flex-1 lg:max-w-2xl'>{children}</div>
        </div>
      </div>
    </>
  );
}
