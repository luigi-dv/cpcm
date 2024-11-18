import type { Metadata } from 'next';

import React from 'react';

import { ThemeProvider } from '@/providers/ThemeProvider';

import { Toaster } from '@/components/ui/sonner';

import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Authentication | AVClients',
  description: 'Client Prospecting Customer Management for AVClients',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
