import { Lead } from '@prisma/client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const LeadInformationNotes = ({ lead }: { lead: Lead }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lead Information</CardTitle>
        <CardDescription>{lead.id}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='border-t'>
          <dl className='divide-y'>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm/6 font-medium'>Contact Person</dt>
              <dd className='mt-1 text-sm/6 sm:col-span-2 sm:mt-0'>
                {lead.ContactPerson ?? 'N/A'}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm/6 font-medium'>Email Address</dt>
              <dd className='mt-1 text-sm/6 sm:col-span-2 sm:mt-0'>{lead.Email ?? 'N/A'}</dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm/6 font-medium'>Phone Number</dt>
              <dd className='mt-1 text-sm/6 sm:col-span-2 sm:mt-0'>{lead.Phone ?? 'N/A'}</dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm/6 font-medium'>Department</dt>
              <dd className='mt-1 text-sm/6 sm:col-span-2 sm:mt-0'>{lead.Department ?? 'N/A'}</dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm/6 font-medium'>Notes</dt>
              <dd className='mt-1 text-sm/6 sm:col-span-2 sm:mt-0'>{lead.Notes ?? 'N/A'}</dd>
            </div>
          </dl>
        </div>
      </CardContent>
    </Card>
  );
};
