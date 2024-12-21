import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defaultLocale, locales } from '@/lib/i18n/config';

export function middleware(request: NextRequest) {
  // Skip middleware for static files and API routes
  if (
    request.nextUrl.pathname.includes('.') || 
    request.nextUrl.pathname.startsWith('/api/') ||
    request.nextUrl.pathname.startsWith('/_next/')
  ) {
    return NextResponse.next();
  }

  // Get locale from cookie
  let locale = request.cookies.get('NEXT_LOCALE')?.value;
  
  // If no locale cookie exists, use default
  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  const response = NextResponse.next();
  
  // Set locale cookie
  response.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 31536000, // 1 year
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};