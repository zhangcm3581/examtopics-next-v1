export const defaultLocale = 'zh';
export const locales = ['zh', 'en'] as const;
export type Locale = typeof locales[number];

export function getLocaleFromString(locale: string): Locale {
  const normalizedLocale = locale.toLowerCase();
  return locales.includes(normalizedLocale as Locale) 
    ? (normalizedLocale as Locale) 
    : defaultLocale;
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}