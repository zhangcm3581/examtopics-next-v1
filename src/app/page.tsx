'use client';

import { ExamSection } from '@/components/home/ExamSection';
import { useLanguageStore } from '@/lib/stores/languageStore';
import { getProvidersByLanguage } from '@/data/providers';

export default function Home() {
  const { language } = useLanguageStore();
  const currentProviders = getProvidersByLanguage(language);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-[1100px] mx-auto px-3 sm:px-6 py-6 sm:py-12">
        <h1 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4">认证考试题库</h1>
        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">提供中英文版本</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {currentProviders.map((provider) => (
            <ExamSection key={provider.id} provider={provider} />
          ))}
        </div>
      </div>
    </main>
  );
}