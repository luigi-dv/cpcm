import React from 'react';

import { emailLogin, providerLogin } from '@/app/auth/(pages)/login/actions';

import { Icons } from '@/components/icons';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface SignInFormProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * A form that allows users to sign in with their email address with a Magic link.
 */
export const SignInForm = (props: SignInFormProps) => {
  return (
    <div className='grid gap-4'>
      <form>
        <input name='provider' defaultValue='google' hidden />
        <Button formAction={providerLogin} className='w-full' variant='secondary'>
          <Icons.google className='mr-2 h-4 w-4' />
          Google
        </Button>
      </form>
      <form>
        <input name='provider' defaultValue='linkedin' hidden />
        <Button formAction={providerLogin} className='w-full' variant='secondary'>
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
      <form>
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
            />
          </div>
          <Button formAction={emailLogin}>Sign In</Button>
        </div>
      </form>
    </div>
  );
};
