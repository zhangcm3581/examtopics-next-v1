export interface ExamQuestion {
  id: string;
  content: string;
  type: 'single' | 'multiple';
  options: {
    label: string;
    content: string;
  }[];
  correctAnswer: string;
  explanation: string;
  language: 'en' | 'zh';
}