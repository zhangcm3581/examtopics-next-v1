'use client';

import Link from 'next/link';
import { useLanguageStore } from '@/lib/stores/languageStore';
import { getProvidersByLanguage } from '@/data/providers';

export default function ExamsPage() {
  const { language } = useLanguageStore();
  const providers = getProvidersByLanguage(language);

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12">
      <div className="max-w-[1100px] mx-auto px-3 sm:px-6">
        <h1 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8">认证考试题库</h1>
        
        {providers.map((provider) => (
          <div key={provider.id} className="mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6">
              {provider.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {provider.examLinks.map((exam) => (
                <Link 
                  key={exam.id}
                  href={`/exams/${exam.id}`}
                  className="block p-3 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-sm sm:text-lg font-semibold mb-2">{exam.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}