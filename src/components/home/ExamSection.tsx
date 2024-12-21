'use client';

import Link from 'next/link';
import { ExamLinkList } from './ExamList';
import { useTranslations } from '@/hooks/useTranslations';
import type { Provider } from '@/lib/types/exam';

interface ExamSectionProps {
  provider: Provider;
}

export function ExamSection({ provider }: ExamSectionProps) {
  const t = useTranslations();

  return (
    <div className="bg-white rounded-lg shadow-md p-3 sm:p-6">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold">
          {provider.title}
        </h2>
        <Link 
          href={provider.allExamsLink}
          className="text-xs sm:text-sm text-blue-500 hover:text-blue-600"
        >
          {t.home.viewAll}
        </Link>
      </div>
      
      <ExamLinkList examLinks={provider.examLinks} />
    </div>
  );
}