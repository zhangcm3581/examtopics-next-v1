export interface ExamLink {
  id: string;
  title: string;
}

export interface Provider {
  id: string;
  title: string;
  logo: string;
  allExamsLink: string;
  examLinks: ExamLink[];
}

export interface Exam {
  id: string;
  title: string;
  code: string;
  provider: 'AWS' | 'Google' | 'Cisco';
  description: string;
  totalQuestions: number;
  language?: 'en' | 'zh';
  updated_at?: string;
}