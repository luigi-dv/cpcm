'use client';

import React from 'react';

import { LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Icons } from '@/components/icons';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { supabaseClient } from '@/lib/supabase/client';
import { signInWithEmail } from '@/lib/supabase/auth/email';
import { useSignInForm } from '@/components/auth/SignInForm/hooks/useSignInForm';

interface SignInFormProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * A form that allows users to sign in with their email address with a Magic link.
 */
export const SignInForm = (props: SignInFormProps) => {
  const {
    isLoading,
    changeLoadingState,
    isGoogleLoading,
    changeGoogleLoadingState,
    isLinkedInLoading,
    changeLinkedInLoadingState,
    email,
    handleEmailChange,
    validationMessage,
  } = useSignInForm();

  const router = useRouter();

  /**
   * Sign in with email handler.
   */
  const onSubmit = async (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
    changeLoadingState(true);
    const formData = new FormData() as FormData;
    formData.append('email', email);
    await signInWithEmail(email);
    router.push('/auth/verify-email');
  };

  /**
   * Sign in with Google Handler.
   */
  const onGoogleSubmit = async (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
    changeGoogleLoadingState(true);
    await supabaseClient.auth.signInWithOAuth({ provider: 'google' });
  };

  /**
   * Sign in with LinkedIn Handler.
   */
  const onLinkedInSubmit = (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
    changeLinkedInLoadingState(true);
    // TODO: Implement LinkedIn Sign In
  };

  return (
    <div className='grid gap-4'>
      <form onSubmit={onGoogleSubmit}>
        <Button
          className='w-full'
          variant='secondary'
          type='submit'
          disabled={isLoading || isGoogleLoading || isLinkedInLoading}
        >
          {isGoogleLoading && <LoaderCircle className='mr-2 h-4 w-4 animate-spin' />}
          <Icons.google className='mr-2 h-4 w-4' />
          Google
        </Button>
      </form>
      <form onSubmit={onLinkedInSubmit}>
        <Button className='w-full' variant='secondary' type='submit' disabled={isLoading}>
          {isLinkedInLoading && <LoaderCircle className='mr-2 h-4 w-4 animate-spin' />}
          <Icons.linkedin className='mr-2 h-4 w-4' />
          LinkedIn
        </Button>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'> Or continue with </span>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div className='grid gap-6'>
          <div className='grid gap-1'>
            <Label className='sr-only' htmlFor='email'>
              Email
            </Label>
            <Input
              id='email'
              name='email'
              placeholder='Email'
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              value={email}
              onChange={handleEmailChange}
              disabled={isLoading || isGoogleLoading || isLinkedInLoading}
            />
          </div>
          <Button disabled={isLoading} type='submit'>
            {isLoading && <LoaderCircle className='mr-2 h-4 w-4 animate-spin' />}
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
