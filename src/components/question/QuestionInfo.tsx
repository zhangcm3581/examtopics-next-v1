import { formatDate } from '@/lib/utils/date';

interface QuestionInfoProps {
  title?: string;
  lastUpdated?: string;
  vendor?: string;
  examCode?: string;
  examName?: string;
  totalQuestions?: number;
}

export function QuestionInfo({
  title = '',
  lastUpdated,
  vendor = '',
  examCode = '',
  examName = '',
  totalQuestions = 0,
}: QuestionInfoProps) {

  return (
    <div className="bg-white rounded-lg shadow-sm mb-4 sm:mb-8">
      <div className="px-4 sm:px-8 py-4 sm:py-6">
        <h1 className="text-xl sm:text-3xl font-bold text-center mb-2">{title}</h1>
        {lastUpdated && (
          <p className="text-gray-600 text-center text-sm sm:text-base">
            Last updated on {formatDate(lastUpdated)}
          </p>
        )}
      </div>
      
      <div className="border-t border-gray-100">
        <div className="px-4 sm:px-8 py-4 sm:py-6 space-y-3 sm:space-y-4">
          <div className="flex border-b border-gray-100 pb-3 sm:pb-4">
            <div className="w-32 sm:w-48">
              <span className="text-gray-600 text-sm sm:text-base">Vendor:</span>
            </div>
            <div>
              <span className="text-gray-900 text-sm sm:text-base">{vendor === 'AWS' ? '亚马逊' : vendor}</span>
            </div>
          </div>

          <div className="flex border-b border-gray-100 pb-3 sm:pb-4">
            <div className="w-32 sm:w-48">
              <span className="text-gray-600 text-sm sm:text-base">Exam Code:</span>
            </div>
            <div>
              <span className="text-gray-900 text-sm sm:text-base">{examCode}</span>
            </div>
          </div>

          <div className="flex border-b border-gray-100 pb-3 sm:pb-4">
            <div className="w-32 sm:w-48">
              <span className="text-gray-600 text-sm sm:text-base">Exam Name:</span>
            </div>
            <div>
              <span className="text-gray-900 text-sm sm:text-base">{examName}</span>
            </div>
          </div>

          <div className="flex">
            <div className="w-32 sm:w-48">
              <span className="text-gray-600 text-sm sm:text-base">Exam Questions:</span>
            </div>
            <div>
              <span className="text-gray-900 text-sm sm:text-base">{totalQuestions}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}