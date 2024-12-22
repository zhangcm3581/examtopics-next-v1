import { useState, useEffect } from 'react';
import { ExamLinkList } from './ExamList';
import { useLanguageStore } from '@/lib/stores/languageStore';
import type { ExamLink } from '@/lib/types/exam';

type ExamsByProvider = Record<string, ExamLink[]>;

export function ExamSection() {
  const [examsByProvider, setExamsByProvider] = useState<ExamsByProvider>({});
  const [loading, setLoading] = useState(true);
  const { language } = useLanguageStore();

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const res = await fetch(`/api/exams?language=${language}`);
        if (!res.ok) throw new Error('Failed to fetch exams');
        const data = await res.json();
        setExamsByProvider(data);
      } catch (error) {
        console.error('Error fetching exams:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, [language]);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }

  return (
    <>
      {Object.entries(examsByProvider).map(([provider, exams]) => (
        <div key={provider} className="bg-white rounded-lg shadow-md p-3 sm:p-6">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-semibold">{provider}</h2>
          </div>
          <ExamLinkList examLinks={exams} />
        </div>
      ))}
    </>
  );
}