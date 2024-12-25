import { prisma } from '@/lib/prisma';
import { QuestionList } from '@/components/QuestionList';
import { QuestionInfo } from '@/components/question/QuestionInfo';
import type { Metadata } from 'next';

interface Props {
  params: { 
    provider: string;
    slug: string 
  };
  searchParams: { lang?: string };
}


// 生成SEO元数据
export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const exam = await prisma.exam.findFirst({
    where: {
      provider: params.provider,
      slug: params.slug,
      language: searchParams.lang || 'zh'
    }
  });

  return {
    title: `${exam?.title} 考试题库 | ExamTopics`,
    description: exam?.description,
    openGraph: {
      title: exam?.title,
      description: exam?.description,
      url: `/exams/${params.provider}/${params.slug}`,
    }
  };
}

// 服务端获取数据
export default async function ExamPage({ params, searchParams }: Props) {
  const exam = await prisma.exam.findFirst({
    where: {
      provider: params.provider,
      slug: params.slug,
      language: searchParams.lang || 'zh'
    },
    select: {
      id: true,
      title: true,
      code: true,
      provider: true,
      description: true,
      totalQuestions: true,
      updatedAt: true
    }
  });

  if (!exam) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          考试未找到
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          您查找的考试可能已被移除或不存在。
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12">
      <div className="max-w-[1100px] mx-auto px-3 sm:px-6">
        <QuestionInfo
          title={exam.title}
          lastUpdated={exam.updatedAt?.toLocaleDateString()}
          vendor={exam.provider}
          examCode={exam.code}
          examName={exam.title}
          totalQuestions={exam.totalQuestions}
        />

        <div className="space-y-6 sm:space-y-8">
          <QuestionList 
            language={searchParams.lang || 'zh'} 
            examId={exam.id} 
          />
        </div>
      </div>
    </div>
  );
}