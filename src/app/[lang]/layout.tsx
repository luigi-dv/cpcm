import type { Metadata } from 'next';

import React from 'react';

import { auth } from '@/auth';
import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '@/providers/ThemeProvider';

import { Toaster } from '@/components/ui/sonner';

import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CPCM - AVClients',
  description: 'Client Prospecting Customer Management for AVClients',
};

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const session = await auth();
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
