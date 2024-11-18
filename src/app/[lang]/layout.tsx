import type { Metadata, Viewport } from 'next';

import React from 'react';

import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeProvider';

import { Toaster } from '@/components/ui/sonner';

import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CPCM - AVClients',
  description: 'Client Prospecting Customer Management for AVClients',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster position='top-right' />
      </body>
    </html>
  );
}
