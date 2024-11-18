import { LOCALES } from '@/constants/locales';
import { NextRequest, NextResponse } from 'next/server';
import { AUTH_SIGN_IN_ROUTE, AUTH_VERIFY_REQUEST_ROUTE, DASHBOARD_ROUTE } from '@/routes';

import { getLocale } from '@/lib/locale/dictionaries';

export const redirectLocale = (req: NextRequest, pathname: string, isAuthenticated: boolean) => {
  // Check if the pathname already includes a valid locale
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return; // Avoid redirect if locale is already present

  const locale = getLocale(req);

  // Prevent redirect loop: Check if current path is the target path with locale
  if (req.nextUrl.pathname.startsWith(`/${locale}`)) {
    return; // Already redirected to the correct locale, no further action needed
  }

  if (!isAuthenticated) {
    switch (pathname) {
      case AUTH_SIGN_IN_ROUTE:
      case AUTH_VERIFY_REQUEST_ROUTE:
        return; // Avoid redirect if the user is on the sign-in or verify request page
    }
  } else {
    switch (pathname) {
      case AUTH_SIGN_IN_ROUTE:
      case '/':
      case AUTH_VERIFY_REQUEST_ROUTE:
        // Redirect to the dashboard only if the user is authenticated
        return NextResponse.redirect(new URL(`/${locale}/${DASHBOARD_ROUTE}`, req.url));
    }
  }

  // Append the locale to the path and redirect if necessary
  req.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(req.nextUrl);
};
