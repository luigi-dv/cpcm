'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import { signOut } from '@/lib/supabase/auth/common';
import { SignOutButtonProps } from '@/types/components/auth';

/**
 * SignOutButton component
 * @description A button that allows users to sign out
 */
export const SignOutButton = (props: SignOutButtonProps) => {
  return (
    <Button variant='ghost' onClick={() => signOut()} {...props}>
      Sign out
    </Button>
  );
};
