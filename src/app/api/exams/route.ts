import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const language = searchParams.get('language') || 'zh';

    const exams = await prisma.exam.findMany({
      where: { language },
      select: {
        id: true,
        title: true,
        code: true,
        provider: true,
        slug: true
      }
    });

    // 重新组织数据，确保 AWS 在第一位
    const examsByProvider = exams.reduce((acc, exam) => {
      if (!acc[exam.provider]) {
        acc[exam.provider] = [];
      }
      acc[exam.provider].push({
        id: exam.id,
        title: exam.title,
        slug: exam.slug,
        provider: exam.provider
      });
      return acc;
    }, {} as Record<string, any[]>);

    // 将 amazon 提取出来，重新构建有序对象
    const { amazon, ...others } = examsByProvider;
    const orderedData = {
      amazon: amazon || [],
      ...others
    };

    return NextResponse.json(orderedData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch exams' },
      { status: 500 }
    );
  }
}