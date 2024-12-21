import type { Exam } from '@/types/exam';

export const examData: Record<string, Exam> = {
  'aws-saa-c03': {
    id: 'aws-saa-c03',
    code: 'SAA-C03',
    title: 'AWS Certified Solutions Architect - Associate',
    provider: 'AWS',
    description: 'Validate your ability to design and implement distributed systems on AWS',
    totalQuestions: 6,
    passingScore: 72,
    updated_at: '2024-01-15'
  },
  'aws-dva-c02': {
    id: 'aws-dva-c02',
    title: 'AWS Certified Developer - Associate',
    code: 'DVA-C02',
    provider: 'AWS',
    description: 'Validate your ability to develop and maintain AWS-based applications',
    totalQuestions: 6,
    passingScore: 72,
    updated_at: '2024-01-15'
  }
};