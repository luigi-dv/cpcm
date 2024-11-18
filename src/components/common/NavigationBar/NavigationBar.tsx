import React from 'react';

import Link from 'next/link';
import { Package2 } from 'lucide-react';
import { DASHBOARD_ROUTE } from '@/routes';

import { NavigationBarProps } from '@/types/components/common';
import { NavigationTooltips } from '@/components/common/NavigationTooltips';

/**
 * Navigation bar component
 * @description Navigation bar component for the navigation bar.
 * */
export const NavigationBar = (props: NavigationBarProps) => {
  const { dict } = props;
  return (
    <nav className='flex flex-col items-center gap-4 px-2 py-4'>
      <Link
        href={DASHBOARD_ROUTE}
        className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'
      >
        <Package2 className='h-4 w-4 transition-all group-hover:scale-110' />
        <span className='sr-only'>{process.env.NEXT_PUBLIC_COMPANY_NAME}</span>
      </Link>
      <NavigationTooltips dict={dict} />
    </nav>
  );
};
