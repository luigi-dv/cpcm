// @ts-expect-error
import type { NextAuthRequest } from 'next-auth/lib';

import { auth } from '@/auth';
import { NextResponse } from 'next/server';
import { LOCALES } from '@/constants/locales';
import {
  AUTH_ERROR_ROUTE,
  AUTH_SIGN_IN_ROUTE,
  AUTH_VERIFY_REQUEST_ROUTE,
  DASHBOARD_ROUTE,
} from '@/routes';

import { getLocale } from '@/lib/dictionaries';

/**
 * This is a middleware that checks if the user is authenticated.
 * If the user is not authenticated, it will redirect the user to the login page.
 */
export const middleware = auth((req) => {
  const { pathname } = new URL(req.url);

  return redirectAuthentication(req, pathname);
});

const redirectLocale = (req: NextAuthRequest, pathname: string) => {
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(req);

  if (pathname === AUTH_SIGN_IN_ROUTE || pathname === '/') {
    return NextResponse.redirect(new URL(`/${locale}/${DASHBOARD_ROUTE}`, req.url));
  }
  req.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(req.nextUrl);
};

const redirectAuthentication = (req: NextAuthRequest, pathname: string) => {
  const publicRoutes = [AUTH_SIGN_IN_ROUTE, AUTH_VERIFY_REQUEST_ROUTE, AUTH_ERROR_ROUTE];

  if (!req.auth && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL(AUTH_SIGN_IN_ROUTE, req.url));
  } else if (req.auth) {
    return redirectLocale(req, pathname);
  }
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};

export default middleware;
