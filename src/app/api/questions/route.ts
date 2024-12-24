import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // 获取URL参数
    const { searchParams } = new URL(request.url);
    const language = searchParams.get('language') || 'zh';
    const code = searchParams.get('code');

    if (!code) {
      return NextResponse.json({ error: 'Code is required' }, { status: 400 });
    }

    // 查询exam和关联的questions
    const exam = await prisma.exam.findFirst({
      where: {
        AND: [
          { language },
          { code }
        ]
      },
      include: {
        questions: {
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
          }
        }
      }
    });

    if (!exam) {
      return NextResponse.json({ error: 'Exam not found' }, { status: 404 });
    }

    return NextResponse.json(exam);
    
  } catch (error) {
    console.error('Error fetching questions:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}