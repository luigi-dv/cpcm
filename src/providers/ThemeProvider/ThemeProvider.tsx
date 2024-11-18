'use client';

import React, { useEffect, useState } from 'react';

import { type ThemeProviderProps } from 'next-themes/dist/types';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  /**
   * This is a workaround to prevent a flash of unstyled content (FOUC) when
   */
  useEffect(() => {
    setMounted(true);
  }, []);

  /**
   * If the component is not mounted, skip rendering it to prevent the FOUC.
   */
  if (!mounted) {
    return null;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
