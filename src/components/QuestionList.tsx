'use client';

import { useState, useEffect } from 'react';
import { ExamQuestion } from '@/lib/types/question';
import { QuestionCard } from './question/QuestionCard';
import { Pagination } from './Pagination';
import { useScrollToTop } from '@/hooks/useScrollToTop';

interface ApiResponse {
  exam: {
    id: string;
    title: string;
    code: string;
    provider: string;
    description: string;
    updated_at: string;
  };
  questions: ExamQuestion[];
  pagination: {
    currentPage: number;
    pageSize: number;
    totalQuestions: number;
    totalPages: number;
  };
}

interface QuestionListProps {
  examId: string;
  language: string;
}

export function QuestionList({ examId, language }: QuestionListProps) {
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollToTop = useScrollToTop();
  const pageSize = 3;

  const fetchQuestions = async (page: number) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(
        `/api/questions?id=${examId}&language=${language}&page=${page}&pageSize=${pageSize}`
      );
      
      if (res.status !== 200) {
        throw new Error('Failed to fetch questions');
      }

      const data: ApiResponse = await res.json();
      setQuestions(data.questions);
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error('Failed to fetch questions:', error);
      setError(error instanceof Error ? error.message : '获取题目失败');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions(currentPage);
  }, [currentPage, examId, language]);

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };

  if (loading) {
    return <div className="flex justify-center py-8">加载中...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-8">{error}</div>;
  }

  return (
    <div>
      <div className="space-y-[15px]">
        {questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            number={(currentPage - 1) * pageSize + index + 1}
            onAnswer={(answer) => handleAnswer(question.id, answer)}
          />
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}