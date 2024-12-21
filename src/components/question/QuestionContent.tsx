import { ExamQuestion } from '@/lib/types/question';

interface QuestionContentProps {
  question: ExamQuestion;
}

export function QuestionContent({ question }: QuestionContentProps) {
  return (
    <div className="prose max-w-none mb-4 sm:mb-6">
      <p className="text-sm">
        {question.content}
        {question.type === 'multiple' && (
          <span className="ml-2 text-sm text-gray-500">（多选题）</span>
        )}
      </p>
    </div>
  );
}