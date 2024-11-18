'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { GridPattern } from '@/components/ui/grid-pattern';

const DashboardPage = () => {
  return (
    <div className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl'>
      <p className='z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white'>
        Beta Version
      </p>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={'4 2'}
        className={cn('[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]')}
      />
    </div>
  );
};

export default DashboardPage;
