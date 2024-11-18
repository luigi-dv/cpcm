import { Suspense } from 'react';

import dynamic from 'next/dynamic';
import { Lead } from '@prisma/client';

import { MapsSkeletonCard } from '@/components/common/MapsSkeletonCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MapView = dynamic(() => import('../../../../common/MapView'));

export const LeadRoute = ({ lead }: { lead: Lead }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lead Route</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <div className='grid grid-cols-1  md:grid-cols-2 gap-8'>
            {lead.CenterName ? (
              <Suspense fallback={<MapsSkeletonCard />}>
                <MapView query={encodeURI(lead.CenterName + lead.Province)} />
              </Suspense>
            ) : (
              <MapsSkeletonCard />
            )}
            <dl className='divide-y'>
              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='text-sm/6 font-medium'>Route</dt>
                <dd className='mt-1 text-sm/6 sm:col-span-2 sm:mt-0'>{lead.Route ?? 'N/A'}</dd>
              </div>
              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='text-sm/6 font-medium'>Province</dt>
                <dd className='mt-1 text-sm/6 sm:col-span-2 sm:mt-0'>{lead.Province ?? 'N/A'}</dd>
              </div>
              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='text-sm/6 font-medium'>Category</dt>
                <dd className='mt-1 text-sm/6 sm:col-span-2 sm:mt-0'>{lead.Category ?? 'N/A'}</dd>
              </div>
              <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                <dt className='text-sm/6 font-medium'>Center Name</dt>
                <dd className='mt-1 text-sm/6 sm:col-span-2 sm:mt-0'>{lead.CenterName ?? 'N/A'}</dd>
              </div>
            </dl>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
