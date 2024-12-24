import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const language = searchParams.get('language') || 'zh';
    const id = searchParams.get('id');
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '10');
    const skip = (page - 1) * pageSize;

    if (!id) {
      return NextResponse.json({ error: 'Params error.' }, { status: 400 });
    }

    // 1. 先查询exam基本信息
    const exam = await prisma.exam.findFirst({
      where: {
        AND: [
          { language },
          { id }
        ]
      },
      select: {
        id: true,
        title: true,
        code: true,
        provider: true,
        description: true,
        updatedAt: true
      }
    });

    if (!exam) {
      return NextResponse.json({ error: 'Exam not found' }, { status: 404 });
    }

    // 2. 根据examId查询分页questions
    const [questions, totalCount] = await Promise.all([
      prisma.question.findMany({
        where: {
          examId: exam.id
        },
        select: {
          id: true,
          questionNumber: true,
          content: true,
          options: true,
          type: true,
          correctAnswer: true,
          explanation: true
        },
        orderBy: {
          questionNumber: 'asc'
        },
        skip,
        take: pageSize
      }),
      prisma.question.count({
        where: {
          examId: exam.id
        }
      })
    ]);

    // 3. 合并数据并返回
    return NextResponse.json({
      exam,
      questions,
      pagination: {
        currentPage: page,
        pageSize,
        totalQuestions: totalCount,
        totalPages: Math.ceil(totalCount / pageSize)
      }
    });
    
  } catch (error) {
    console.error('Error fetching questions:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}