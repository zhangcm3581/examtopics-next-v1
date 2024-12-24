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
        provider: true
      }
    });

    // 重新组织数据，确保 AWS 在第一位
    const examsByProvider = exams.reduce((acc, exam) => {
      if (!acc[exam.provider]) {
        acc[exam.provider] = [];
      }
      acc[exam.provider].push({
        id: exam.id,
        title: exam.title
      });
      return acc;
    }, {} as Record<string, any[]>);

    // 将 AWS 提取出来，重新构建有序对象
    const { AWS, ...others } = examsByProvider;
    const orderedData = {
      AWS: AWS || [],
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