'use client';

import { useState } from 'react';
import { ExamQuestion } from '@/lib/types/question';
import { QuestionCard } from './question/QuestionCard';
import { Pagination } from './Pagination';
import { useScrollToTop } from '@/hooks/useScrollToTop';

interface QuestionListProps {
  questions: ExamQuestion[];
  examId: string;
}

export function QuestionList({ questions, examId }: QuestionListProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const scrollToTop = useScrollToTop();
  const questionsPerPage = 3;

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

  // Calculate pagination
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = questions.slice(startIndex, endIndex);

  return (
    <div>
      <div className="space-y-[15px]">
        {currentQuestions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            number={startIndex + index + 1}
            onAnswer={(answer) => handleAnswer(question.id, answer)}
          />
        ))}
      </div>
      
      {questions.length > questionsPerPage && (
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