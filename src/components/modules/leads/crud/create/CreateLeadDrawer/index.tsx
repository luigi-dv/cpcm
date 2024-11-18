'use client';

import React from 'react';

import { PlusCircle } from 'lucide-react';
import { useMediaQuery } from 'usehooks-ts';
import { useCreateLeadContext } from '@/hooks/useCreateLeadContext';

import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import { LeadCreateForm } from '@/components/forms/lead/LeadCreateForm';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from '@/components/ui/drawer';

export const CreateLeadDrawer = ({ title }: { title: string }) => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const { onSubmit, form } = useCreateLeadContext();

  const {
    formState: { isSubmitting },
  } = form;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size='sm' className='h-7 gap-1'>
            <PlusCircle className='h-3.5 w-3.5' />
            <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>{title}</span>
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle>Create Lead</DialogTitle>
            <DialogDescription>
              Create a new Lead by adding the information, route and notes.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <LeadCreateForm />
            <DialogFooter>
              <Button type='submit'>
                {isSubmitting ? (
                  <div className='flex'>
                    <Loading /> Saving{' '}
                  </div>
                ) : (
                  'Save'
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button size='sm' className='h-7 gap-1'>
          <PlusCircle className='h-3.5 w-3.5' />
          <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>{title}</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle>Create Lead</DrawerTitle>
          <DrawerDescription>
            Create a new Lead by adding the information, route and notes.
          </DrawerDescription>
        </DrawerHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <LeadCreateForm />
          <DrawerFooter className='pt-2'>
            <Button type='submit'>
              {isSubmitting ? (
                <div className='flex'>
                  <Loading /> Saving{' '}
                </div>
              ) : (
                'Save'
              )}
            </Button>
            <DrawerClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
};
