import { cookies } from 'next/headers';
import { defaultLocale, getLocaleFromString, type Locale } from './config';

export function getServerLocale(): Locale {
  try {
    const cookieStore = cookies();
    const localeCookie = cookieStore.get('NEXT_LOCALE');
    return getLocaleFromString(localeCookie?.value || defaultLocale);
  } catch (error) {
    console.error('Error getting server locale:', error);
    return defaultLocale;
  }
}