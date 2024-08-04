'use client';

import React, { Fragment } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALES } from '@/constants/locales';

import { NavigationBreadcrumbProps } from '@/types/components/common';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

/**
 * Navigation breadcrumb component
 * @description Navigation breadcrumb component for the navigation breadcrumb.
 */
export const NavigationBreadcrumb = (props: NavigationBreadcrumbProps) => {
  const { dict } = props;

  const pathname = usePathname();
  const items = pathname.split('/').filter((item) => item !== '');
  const locale = LOCALES.includes(items[0]) ? items.shift() : null;

  return (
    <Breadcrumb className='hidden md:flex'>
      <BreadcrumbList>
        {items.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              {index === items.length - 1 ? (
                <BreadcrumbPage>
                  <Link
                    href={`/${locale}/${items.slice(0, index + 1).join('/') || ''}`}
                    className='capitalize'
                  >
                    {dict.routes[item]}
                  </Link>
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link
                    href={`/${locale}/${items.slice(0, index + 1).join('/') || ''}`}
                    className='capitalize'
                  >
                    {dict.routes[item]}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {items.length - 1 !== index && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
