'use client';

import React from 'react';

import dayjs from 'dayjs';
import { LEADS_ROUTE } from '@/routes';
import { useRouter } from 'next/navigation';
import relativeTime from 'dayjs/plugin/relativeTime';

import { LeadsTableProps } from '@/types/components/modules/leads/LeadsTableProps';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export const LeadsTable = ({ leads }: LeadsTableProps) => {
  const router = useRouter();
  dayjs.extend(relativeTime);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Center Name</TableHead>
          <TableHead>Contact Person</TableHead>
          <TableHead>Department</TableHead>
          <TableHead className='hidden md:table-cell'>Phone</TableHead>
          <TableHead className='hidden md:table-cell'>Last Update</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leads.map((lead) => (
          <TableRow
            key={lead.id}
            onClick={() => router.push(`${LEADS_ROUTE}/${lead.id}`)}
            className='cursor-pointer'
          >
            <TableCell>{lead.CenterName}</TableCell>
            <TableCell>{lead.ContactPerson}</TableCell>
            <TableCell>{lead.Department}</TableCell>
            <TableCell className='hidden md:table-cell'>{lead.Phone}</TableCell>
            <TableCell className='hidden md:table-cell'>
              {dayjs(lead.UpdatedAt).fromNow()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
