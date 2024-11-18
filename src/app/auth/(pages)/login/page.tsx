import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

import { SignInForm } from '@/components/auth/SignInForm';

const LoginPage = () => {
  return (
    <div className='lg:p-8'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col space-y-2 text-center'>
          <h1 className='text-2xl font-semibold tracking-tight'>Sign in to your account</h1>
        </div>
        <SignInForm />
        <p className='px-8 text-center text-sm text-muted-foreground'>
          By signing in, you agree to our{' '}
          <Link href='/terms' className='underline underline-offset-4 hover:text-primary'>
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href='/privacy' className='underline underline-offset-4 hover:text-primary'>
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
