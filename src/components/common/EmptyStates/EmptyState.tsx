'use client';

import React from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { EmptyStateProps } from '@/types/components/common';

/**
 * Empty state component
 * @description Empty state component for the empty states.
 */
export const EmptyState = (props: EmptyStateProps) => {
  return (
    <div className='flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm py-8'>
      <div className='flex flex-col items-center gap-1 text-center'>
        <h3 className='text-2xl font-bold tracking-tight'>{props.title}</h3>
        <p className='text-sm text-muted-foreground'>{props.description}</p>
        {props.withAction && (
          <Button className='mt-4' asChild>
            <Link href={props.actionRoute}> {props.actionText}</Link>
          </Button>
        )}
      </div>
    </div>
  );
};
