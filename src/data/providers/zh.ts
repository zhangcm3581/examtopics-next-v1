import { Provider } from '@/lib/types/exam';

export const zhProviders: Provider[] = [
  {
    id: 'aws',
    title: 'AWS 认证',
    logo: '/images/aws-logo.png',
    allExamsLink: '/exams?provider=aws',
    examLinks: [
      {
        id: 'aws-saa-c03',
        title: 'AWS 认证解决方案架构师 - 助理级 (SAA-C03)',
      },
      {
        id: 'aws-dva-c02',
        title: 'AWS 认证开发人员 - 助理级 (DVA-C02)',
      }
    ],
  },
  {
    id: 'cisco',
    title: '思科认证',
    logo: '/images/cisco-logo.png',
    allExamsLink: '/exams?provider=cisco',
    examLinks: [
      {
        id: 'ccna-200-301',
        title: 'Cisco CCNA (200-301)',
      },
      {
        id: 'devnet-200-901',
        title: 'Cisco DevNet Associate (200-901)',
      }
    ],
  }
];