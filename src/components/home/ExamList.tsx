import Link from 'next/link';
import type { ExamLink } from '@/lib/types/exam';

interface ExamLinkListProps {
  examLinks: ExamLink[];
}

export function ExamLinkList({ examLinks }: ExamLinkListProps) {
  return (
    <div className="space-y-2 sm:space-y-3">
      {examLinks.map((exam) => (
        <Link
          key={exam.id}
          href={`/exams/${exam.provider}/${exam.slug}`}
          className="block text-sm sm:text-base text-blue-600 hover:text-blue-800"
        >
          {exam.title}
        </Link>
      ))}
    </div>
  );
}