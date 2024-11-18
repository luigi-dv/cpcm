'use client';
import React, { useState } from 'react';

import dayjs from 'dayjs';
import { toast } from 'sonner';
import { LEADS_ROUTE } from '@/routes';
import { TrashIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { deleteLead } from '@/services/leads';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export const DeleteLeadDialog = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onDelete = async () => {
    try {
      const deletedLead = await deleteLead(id);
      toast.success('Lead Delete Successfully', {
        description: dayjs(deletedLead?.UpdatedAt).toString(),
      });
      setOpen(false);
      router.replace(LEADS_ROUTE);
    } catch (e) {
      toast.error('Error', {
        description: 'Failed to delete the lead. Please try again.',
      });
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size='sm' variant='destructive' className='h-7 gap-1'>
          <TrashIcon className='h-3.5 w-3.5' />
          <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Delete</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Lead</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your lead and remove your
            data from the database.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button size='sm' variant='destructive' className='h-7 gap-1' onClick={onDelete}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
