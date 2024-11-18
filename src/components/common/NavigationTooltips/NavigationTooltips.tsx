'use client';

import React from 'react';

import Link from 'next/link';
import { classNames } from '@/utils/cn';
import { usePathname } from 'next/navigation';
import { PRIVATE_NAVIGATION } from '@/constants';
import { removeLanguageSlug } from '@/utils/routing';

import { NavigationTooltipsProps } from '@/types/components/common';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

/**
 * Navigation tooltips component
 * @description Navigation tooltips component for the navigation tooltips.
 */
export const NavigationTooltips = (props: NavigationTooltipsProps) => {
  const { dict } = props;
  const pathname = usePathname();
  const currentPathname = removeLanguageSlug(pathname);

  return (
    <TooltipProvider>
      {PRIVATE_NAVIGATION.map((item) => (
        <Tooltip key={item.route}>
          <TooltipTrigger asChild>
            <Link
              href={item.route}
              className={classNames(
                '/' + currentPathname == item.route ? 'bg-accent text-accent-foreground' : '',
                'flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8'
              )}
            >
              <item.icon className='h-5 w-5' />
            </Link>
          </TooltipTrigger>
          <TooltipContent side='right' className='capitalize'>
            {dict.routes[item.name]}
          </TooltipContent>
        </Tooltip>
      ))}
    </TooltipProvider>
  );
};
