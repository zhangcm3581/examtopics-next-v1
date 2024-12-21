import Link from 'next/link';
import { getServerLocale } from '@/lib/i18n/server';
import { getExamsByProvider } from '@/lib/services/exam';

export default async function ExamsPage() {
  const language = getServerLocale();
  const providers = ['AWS', 'Cisco', 'Google'];
  const examsByProvider: Record<string, any[]> = {};

  for (const provider of providers) {
    examsByProvider[provider] = await getExamsByProvider(provider, language);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">认证考试题库</h1>
      
      {Object.entries(examsByProvider).map(([provider, exams]) => (
        <div key={provider} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            {provider} Certification Exams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams.map((exam) => (
              <Link 
                key={exam.id}
                href={`/exams/${exam.code}`}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{exam.title}</h3>
                <p className="text-gray-600 mb-4">{exam.code}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{exam.total_questions} Questions</span>
                  <span>Pass Score: {exam.passing_score}%</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}