'use client';

import React from 'react';

import { signOut } from '@/auth';

import { Button } from '@/components/ui/button';
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
