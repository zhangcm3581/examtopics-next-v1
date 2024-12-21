'use client';

import { useLanguageStore } from '@/lib/stores/languageStore';
import { getTranslations } from '@/lib/i18n';

export function useTranslations() {
  const { language } = useLanguageStore();
  return getTranslations(language);
}