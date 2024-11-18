import * as React from 'react';

import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';
import { getDictionary } from '@/lib/locale/dictionaries';
import { NavigationBar } from '@/components/common/NavigationBar';
import { NavigationSheet } from '@/components/common/NavigationSheet';
import { NavigationBreadcrumb } from '@/components/common/NavigationBreadcrumb';
import { NavigationUserDropdown } from '@/components/common/NavigationUserDropdown';
import { NavigationCommandDialog } from '@/components/common/NavigationCommandDialog';
const AuthenticatedLayout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) => {
  const { lang } = await params;

  const dict = await getDictionary(lang);

  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/auth/login');
  }

  return (
    <div className='flex min-h-screen w-full flex-col bg-muted/40'>
      <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
        <NavigationBar dict={dict} />
      </aside>
      <div className='h-full flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
        <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
          <NavigationSheet dict={dict} />
          <NavigationBreadcrumb dict={dict} />
          <div className='relative ml-auto flex-1 md:grow-0'>
            <NavigationCommandDialog dict={dict} />
          </div>
          <NavigationUserDropdown dict={dict} />
        </header>
        {children}
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
