export interface Exam {
  id: string;
  title: string;
  code: string;
  provider: 'AWS' | 'Google' | 'Cisco';
  description: string;
  totalQuestions: number;
  passingScore: number;
}

export interface Question {
  id: string;
  examId: string;
  questionNumber: number;
  content: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  references?: string[];
}

export interface UserProgress {
  userId: string;
  examId: string;
  questionsAttempted: number;
  correctAnswers: number;
  lastAttempted: Date;
}