export interface ExamQuestion {
  id: string;
  content: string;
  type: 'single' | 'multiple';
  options: {
    label: string;
    content: string;
  }[];
  correctAnswer: string;
  explanation: {
    answer: string;
    detail: string;
  };
  language: 'en' | 'zh';
}