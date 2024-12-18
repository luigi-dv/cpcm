'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { removeLanguageSlug } from '@/utils/routing';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { SidebarNavProps } from '@/types/components/common';

/**
 * Sidebar navigation component
 * @description Sidebar navigation component for the sidebar navigation.
 */
export const SideBarNavigation = ({ className, items, ...props }: SidebarNavProps) => {
  const pathname = usePathname();
  const currentPathname = removeLanguageSlug(pathname);

  return (
    <nav
      className={cn('flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1', className)}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            currentPathname == item.href
              ? 'bg-muted hover:bg-muted'
              : 'hover:bg-transparent hover:underline',
            'justify-start'
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};
