import type { Locale } from './config';

export interface Translation {
  common: {
    home: string;
    contact: string;
    copyright: string;
    prev: string;
    next: string;
    page: string;
  };
  home: {
    title: string;
    description: string;
    viewAll: string;
  };
  contact: {
    title: string;
    description: string;
    response: string;
    copy: string;
    copied: string;
  };
  exam: {
    questions: string;
    passingScore: string;
    lastUpdated: string;
    showAnswer: string;
    hideAnswer: string;
    explanation: {
      correctAnswer: string;
      note: string;
    };
    vendor: string;
    code: string;
  };
}

export type TranslationKey = keyof Translation;
export type TranslationValue = Translation[TranslationKey];