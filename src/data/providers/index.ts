import { Provider } from '@/lib/types/exam';
import { enProviders } from './en';
import { zhProviders } from './zh';
import { Locale } from '@/lib/i18n';

export const providers: Record<Locale, Provider[]> = {
  en: enProviders,
  zh: zhProviders,
};

export function getProvidersByLanguage(language: Locale): Provider[] {
  return providers[language] || providers.zh;
}