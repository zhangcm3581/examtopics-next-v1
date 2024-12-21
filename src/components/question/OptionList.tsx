import { ExamQuestion } from '@/lib/types/question';

interface OptionListProps {
  options: ExamQuestion['options'];
  selectedOptions: string[];
  onSelect: (label: string) => void;
  name: string;
  correctAnswer?: string;
  type: 'single' | 'multiple';
  showExplanation: boolean;
}

export function OptionList({ 
  options, 
  selectedOptions, 
  onSelect, 
  name, 
  correctAnswer, 
  type,
  showExplanation 
}: OptionListProps) {
  const correctAnswers = type === 'multiple' ? correctAnswer?.split(',') || [] : [correctAnswer];

  return (
    <div className="space-y-2 sm:space-y-3">
      {options.map((option) => {
        const isSelected = selectedOptions.includes(option.label);
        const isCorrect = correctAnswers.includes(option.label);
        
        let styles = 'border-gray-200 bg-white';
        
        if (showExplanation) {
          if (isCorrect) {
            styles = 'border-green-500 bg-green-50';
          } else if (isSelected) {
            styles = 'border-red-500 bg-red-50';
          }
        } else if (isSelected) {
          styles = 'border-blue-500 bg-blue-50';
        }

        return (
          <div
            key={option.label}
            className={`p-3 sm:p-4 rounded-lg cursor-pointer border ${styles} hover:border-gray-300 transition-colors`}
            onClick={() => onSelect(option.label)}
          >
            <div className="flex">
              <span className="text-gray-500 text-xs sm:text-sm font-medium mr-2">{option.label}.</span>
              <span className="text-gray-600 text-xs sm:text-sm">{option.content}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}