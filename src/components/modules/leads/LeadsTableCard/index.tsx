'use client';

import React, { useEffect } from 'react';

import { Lead } from '@prisma/client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { TableSearchParams } from '@/types/searchParams';
import { EmptyState } from '@/components/common/EmptyStates';
import { LeadsTable } from '@/components/modules/leads/LeadsTable';
import { TablePagination } from '@/components/common/TablePagination';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const LeadsTableCard = ({
  dict,
  leads,
  currentPage,
  currentSize,
  total,
  query,
}: {
  dict: any;
  leads: Lead[];
  currentPage: number;
  currentSize: number;
  total: number;
  query?: TableSearchParams<Lead>;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateSearchParams = (newQuery: TableSearchParams<Lead>) => {
    const updatedParams = new URLSearchParams(searchParams.toString());

    // Assuming your query contains keys that map directly to the search params
    if (newQuery) {
      Object.keys(newQuery).forEach((key) => {
        const value = newQuery[key as keyof TableSearchParams<Lead>];
        if (value) {
          updatedParams.set(key, value);
        } else {
          updatedParams.delete(key);
        }
      });
    }
    // Avoid re-setting search params if they haven't changed
    const currentParams = searchParams.toString();
    if (updatedParams.toString() !== currentParams) {
      router.push(`${pathname}?${updatedParams.toString()}`);
    }
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (query) {
      updateSearchParams(query);
    } else {
      router.push(`${pathname}`);
    }
  }, [query, pathname, router]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{dict.pages.leads.title}</CardTitle>
        <CardDescription>{dict.pages.leads.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {leads.length > 0 ? (
          <LeadsTable leads={leads} />
        ) : (
          <EmptyState
            title={dict.pages.leads.noleadsFound}
            description={dict.pages.leads.noleadsFoundDescription}
          />
        )}
      </CardContent>
      <CardFooter>
        {leads.length > 0 && (
          <TablePagination currentPage={currentPage} rowsPerPage={currentSize} totalRows={total} />
        )}
      </CardFooter>
    </Card>
  );
};
