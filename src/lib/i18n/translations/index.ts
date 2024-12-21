import { zh } from './zh';
import { en } from './en';
import { Locale } from '../config';

export const translations = {
  zh,
  en,
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export type Translations = typeof zh;

export { zh, en };