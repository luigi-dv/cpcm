'use client';

import React from 'react';

import Link from 'next/link';
import { DASHBOARD_ROUTE, LEADS_ROUTE } from '@/routes';
import { Home, Package2, PanelLeft, Users2 } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { Button } from '@/components/ui/button';
import { NavigationSheetProps } from '@/types/components/common';
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

/**
 * Navigation sheet component
 * @description The navigation sheet component is used to display the navigation sheet
 */
export const NavigationSheet = (props: NavigationSheetProps) => {
  const { dict } = props;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' variant='outline' className='sm:hidden'>
          <PanelLeft className='h-5 w-5' />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='sm:max-w-xs'>
        <VisuallyHidden>
          <SheetTitle>Navigation</SheetTitle>
        </VisuallyHidden>
        <nav className='grid gap-6 text-lg font-medium'>
          <SheetClose asChild>
            <Link
              href={DASHBOARD_ROUTE}
              className='group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base'
            >
              <Package2 className='h-5 w-5 transition-all group-hover:scale-110' />
              <span className='sr-only'>{process.env.NEXT_PUBLIC_COMPANY_NAME}</span>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={DASHBOARD_ROUTE}
              className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
            >
              <Home className='h-5 w-5' />
              {dict.routes.dashboard}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={LEADS_ROUTE}
              className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
            >
              <Users2 className='h-5 w-5' />
              {dict.routes.leads}
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
