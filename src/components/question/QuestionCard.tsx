import { useState } from 'react';
import { ExamQuestion } from '@/lib/types/question';
import { OptionList } from './OptionList';
import { AnswerButton } from './AnswerButton';
import { ExplanationView } from './ExplanationView';
import { QuestionHeader } from './QuestionHeader';
import { QuestionContent } from './QuestionContent';

interface QuestionCardProps {
  question: ExamQuestion;
  number: number;
  onAnswer: (answer: string) => void;
}

export function QuestionCard({ question, number, onAnswer }: QuestionCardProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionSelect = (label: string) => {
    if (question.type === 'multiple') {
      setSelectedOptions(prev => {
        const newSelection = prev.includes(label)
          ? prev.filter(item => item !== label)
          : [...prev, label];
        return newSelection;
      });
    } else {
      setSelectedOptions([label]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4 sm:mb-6">
      <QuestionHeader number={number} />

      <div className="p-3 sm:p-6">
        <QuestionContent question={question} />

        <OptionList
          options={question.options}
          selectedOptions={selectedOptions}
          onSelect={handleOptionSelect}
          name={`question-${question.id}`}
          correctAnswer={question.correctAnswer}
          type={question.type}
          showExplanation={showExplanation}
        />

        <div className="mt-3 sm:mt-4">
          <AnswerButton 
            onToggle={setShowExplanation}
            isShowing={showExplanation}
          />
        </div>

        <ExplanationView
          answer={question.explanation.answer}
          detail={question.explanation.detail}
          show={showExplanation}
        />
      </div>
    </div>
  );
}