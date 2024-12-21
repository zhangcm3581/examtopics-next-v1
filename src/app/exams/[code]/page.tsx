'use client';

import { useEffect, useState } from 'react';
import { getExamDetails, getExamQuestions } from '@/lib/services/exam';
import { QuestionList } from '@/components/QuestionList';
import { ExamDetailHeader } from '@/components/exam/ExamHeader';
import { useLanguageStore } from '@/lib/stores/languageStore';
import type { Exam } from '@/types/exam';
import type { ExamQuestion } from '@/lib/types/question';

export default function ExamPage({ params }: { params: { code: string } }) {
  const { language } = useLanguageStore();
  const [exam, setExam] = useState<Exam | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadExamData() {
      try {
        setLoading(true);
        setError(null);

        // Remove the -zh or -en suffix from the code
        const examId = params.code.replace(/-[a-z]{2}$/, '');
        
        const examData = await getExamDetails(examId, language);
        if (!examData) {
          setError('Exam not found');
          return;
        }
        setExam(examData);

        const questionsData = await getExamQuestions(examId, language);
        setQuestions(questionsData);
      } catch (err) {
        console.error('Failed to load exam data:', err);
        setError('Failed to load exam data');
      } finally {
        setLoading(false);
      }
    }

    loadExamData();
  }, [params.code, language]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !exam) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          {error || 'Exam not found'}
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          The exam you're looking for might have been moved or doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12">
      <div className="max-w-[1100px] mx-auto px-3 sm:px-6">
        <ExamDetailHeader
          title={exam.title}
          lastUpdated={exam.updated_at}
          vendor={exam.provider}
          examCode={exam.code}
          examName={exam.title}
          totalQuestions={exam.total_questions}
        />

        <div className="space-y-6 sm:space-y-8">
          <QuestionList questions={questions} examId={exam.id} />
        </div>
      </div>
    </div>
  );
}