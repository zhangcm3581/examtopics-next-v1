'use client';

import { useEffect, useState } from 'react';
import { QuestionList } from '@/components/QuestionList';
import { QuestionInfo } from '@/components/question/QuestionInfo';
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
  
        const examId = params.code.replace(/-[a-z]{2}$/, '');
        console.log('Fetching data for examId:', examId); // 添加日志
        
        const res = await fetch(`/api/questions?code=${examId}&language=${language}`);
        console.log('API Response:', {
          status: res.status,
          statusText: res.statusText,
          headers: Object.fromEntries(res.headers.entries())
        });
        
        if (!res.ok) {
          const errorData = await res.json();
          console.error('API Error:', errorData); // 添加错误日志
          setError(errorData.error || 'Failed to load exam data');
          return;
        }
  
        const examData = await res.json();
        console.log('Exam data:', examData); // 添加数据日志
        
        setExam({
          id: examData.id,
          title: examData.title,
          code: examData.code,
          provider: examData.provider,
          description: examData.description || '',
          totalQuestions: examData.questions.length,
          updated_at: examData.updated_at
        });
        
        setQuestions(examData.questions);
      } catch (err) {
        console.error('Error details:', err); // 增强错误日志
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
        <QuestionInfo
          title={exam.title}
          lastUpdated={exam.updated_at}
          vendor={exam.provider}
          examCode={exam.code}
          examName={exam.title}
          totalQuestions={exam.totalQuestions}
        />

        <div className="space-y-6 sm:space-y-8">
          <QuestionList questions={questions} examId={exam.id} />
        </div>
      </div>
    </div>
  );
}