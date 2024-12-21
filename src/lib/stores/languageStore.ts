import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Locale } from '@/lib/i18n';

interface LanguageState {
  language: Locale;
  setLanguage: (lang: Locale) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'zh',
      setLanguage: (lang) => {
        set({ language: lang });
        document.documentElement.lang = lang;
        document.cookie = `NEXT_LOCALE=${lang};path=/;max-age=31536000`;
      },
    }),
    {
      name: 'language-storage',
    }
  )
);