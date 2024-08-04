import { ReactNode } from 'react';

const AuthenticationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='max-h-screen container relative lg:h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
        <div
          className='absolute inset-0 bg-zinc-900'
          style={{
            backgroundImage: "url('/images/bg-1590069261209-f8e9b8642343.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-6 w-6'
          >
            <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
          </svg>
          {process.env.NEXT_PUBLIC_COMPANY_NAME}
        </div>
      </div>
      <div className='h-screen flex items-center justify-center'>{children}</div>
    </div>
  );
};

export default AuthenticationLayout;
