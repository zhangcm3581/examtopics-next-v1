import { Locale } from '@/lib/i18n';
import type { ExamQuestion } from '@/lib/types/question';
import type { Exam } from '@/types/exam';
import { saaC03EnQuestions } from '@/data/question/aws-saa-c03/en';
import { saaC03ZhQuestions } from '@/data/question/aws-saa-c03/zh';
import { examData } from '@/data/exam';

export async function getExamQuestions(examId: string, language: Locale = 'zh'): Promise<ExamQuestion[]> {
  // Return mock data based on language
  return language === 'en' ? saaC03EnQuestions : saaC03ZhQuestions;
}

export async function getExamDetails(examId: string, language: Locale = 'zh'): Promise<Exam | null> {
  // Return mock data
  return examData[examId] || null;
}

export async function getExamsByProvider(provider: string, language: Locale = 'zh'): Promise<Exam[]> {
  // Return mock data filtered by provider
  return Object.values(examData).filter(exam => exam.provider === provider);
}