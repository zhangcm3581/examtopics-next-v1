import { useTranslations } from '@/hooks/useTranslations';

interface ExplanationViewProps {
  answer: string;
  detail: string;
  show: boolean;
}

export function ExplanationView({ answer, detail, show }: ExplanationViewProps) {
  const t = useTranslations();
  
  if (!show) return null;

  return (
    <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-blue-50 border border-blue-100 rounded-lg">
      <div className="mb-2">
        <p className="font-medium text-xs sm:text-sm text-gray-700">
          {t.exam.explanation.correctAnswer}: {answer}
        </p>
      </div>
      <div>
        <p className="text-xs sm:text-sm text-gray-600">
          {t.exam.explanation.note}: {detail}
        </p>
      </div>
    </div>
  );
}