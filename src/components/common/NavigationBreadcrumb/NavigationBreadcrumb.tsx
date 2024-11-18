'use client';

import React, { Fragment } from 'react';

import Link from 'next/link';
import { LOCALES } from '@/constants/locales';
import { useParams, usePathname } from 'next/navigation';

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
  const params = useParams<{ id: string }>();
  const items = pathname.split('/').filter((item) => item !== '');
  const locale = LOCALES.includes(items[0]) ? items.shift() : null;

  return (
    <Breadcrumb className='hidden md:flex'>
      <BreadcrumbList>
        {items.map((item, index) => {
          // Replace dynamic segments (e.g., :id) with their values from params
          const isDynamicSegment = item.startsWith('[') && item.endsWith(']');
          const paramKey = isDynamicSegment ? item.slice(1, -1) : null;
          const displayText = isDynamicSegment && paramKey ? params.id : dict.routes[item] || item;

          return (
            <Fragment key={index}>
              <BreadcrumbItem>
                {index === items.length - 1 ? (
                  <BreadcrumbPage>
                    <Link
                      href={`/${locale}/${items.slice(0, index + 1).join('/') || ''}`}
                      className='capitalize'
                    >
                      {displayText}
                    </Link>
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      href={`/${locale}/${items.slice(0, index + 1).join('/') || ''}`}
                      className='capitalize'
                    >
                      {displayText}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {items.length - 1 !== index && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
