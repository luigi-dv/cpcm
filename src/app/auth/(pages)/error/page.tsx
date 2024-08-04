'use client';

import React from 'react';

import { HOME_ROUTE } from '@/routes';
import { useSearchParams, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { errorMessageDisplay, AUTH_ERROR } from '@/lib/errors';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

/**
 * Authentication Error Page
 */
const AuthenticationErrorPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get('error') as typeof AUTH_ERROR.type;
  const handleReturnToHome = (e: React.SyntheticEvent) => {
    router.replace(HOME_ROUTE);
  };
  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle className='text-lg'>Hmm, something went wrong</CardTitle>
        <CardDescription>{errorMessageDisplay(error)}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className='w-full' onClick={handleReturnToHome}>
          Go back to home
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AuthenticationErrorPage;
