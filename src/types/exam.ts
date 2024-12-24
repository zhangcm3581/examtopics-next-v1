export interface Exam {
  id: string;
  title: string;
  code: string;
  provider: 'AWS' | 'Google' | 'Cisco';
  description: string;
  totalQuestions: number;
  updated_at: string;
}

export interface Question {
  id: string;
  examId: string;
  language: 'en' | 'zh';
  type: 'single' | 'multiple';
  questionNumber: number;
  content: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}
