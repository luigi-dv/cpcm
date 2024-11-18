import React from 'react';

import Link from 'next/link';
import Avatar from 'boring-avatars';
import { SETTINGS_ROUTE } from '@/routes';
import { redirect } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/server';
import { signOut } from '@/lib/supabase/auth/common';
import { NavigationUserDropdownProps } from '@/types/components/common';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
/**
 * NavigationUserDropdown component
 * @description A dropdown menu for user navigation in the navigation bar
 */
export const NavigationUserDropdown = async (props: NavigationUserDropdownProps) => {
  const { dict } = props;
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/auth/login');
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon' className='overflow-hidden rounded-full'>
          <Avatar
            size={40}
            name={data?.user.email ?? 'Unknown'}
            variant='marble'
            colors={['#FF6B6B', '#4ECDC4', '#FFCE54', '#AC92EB', '#A0D568']}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem asChild className='cursor-pointer'>
          <Link href={SETTINGS_ROUTE}>{dict.settings.settings}</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className='cursor-pointer'>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button type='submit'>{dict.authentication.signOut}</button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
