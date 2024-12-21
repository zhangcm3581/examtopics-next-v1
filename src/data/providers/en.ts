import { Provider } from '@/lib/types/exam';

export const enProviders: Provider[] = [
  {
    id: 'aws',
    title: 'AWS Certification',
    logo: '/images/aws-logo.png',
    allExamsLink: '/exams?provider=aws',
    examLinks: [
      {
        id: 'aws-saa-c03',
        title: 'AWS Certified Solutions Architect - Associate (SAA-C03)',
      },
      {
        id: 'aws-dva-c02',
        title: 'AWS Certified Developer - Associate (DVA-C02)',
      }
    ],
  },
  {
    id: 'cisco',
    title: 'Cisco Certification',
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