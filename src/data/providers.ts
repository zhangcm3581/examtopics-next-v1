import { Provider } from '@/types/provider'

const zhProviders: Provider[] = [
  {
    id: 'amazon-zh',
    title: '亚马逊云服务认证',
    logo: '/images/amazon-logo.png',
    allExamsLink: '/amazon-exams',
    examLinks: [
      {
        id: 'aws-saa-c03-zh',
        title: 'AWS 认证解决方案架构师 - 助理级 (SAA-C03)',
      },
      {
        id: 'aws-dva-c02-zh',
        title: 'AWS 认证开发人员 - 助理级 (DVA-C02)',
      },
      {
        id: 'aws-sap-c02-zh',
        title: 'AWS 认证解决方案架构师 - 专业级 (SAP-C02)',
      },
      {
        id: 'aws-ml-zh',
        title: 'AWS 认证机器学习 - 专业级',
      }
    ],
  },
  {
    id: 'cisco-zh',
    title: '思科认证',
    logo: '/images/cisco-logo.png',
    allExamsLink: '/cisco-exams',
    examLinks: [
      {
        id: 'ccna-200-301-zh',
        title: '200-301: 思科认证网络工程师 (CCNA)',
      },
      {
        id: 'devnet-200-901-zh',
        title: '200-901: DevNet 助理级 (DEVASC)',
      },
      {
        id: 'encor-350-401-zh',
        title: '350-401: 实施思科企业网络核心技术',
      },
    ],
  }
]

const enProviders: Provider[] = [
  {
    id: 'amazon-en',
    title: 'Amazon AWS',
    logo: '/images/amazon-logo.png',
    allExamsLink: '/amazon-exams',
    examLinks: [
      {
        id: 'aws-saa-c03-en',
        title: 'AWS Certified Solutions Architect - Associate (SAA-C03)',
      },
      {
        id: 'aws-dva-c02-en',
        title: 'AWS Certified Developer - Associate (DVA-C02)',
      },
      {
        id: 'aws-sap-c02-en',
        title: 'AWS Certified Solutions Architect - Professional (SAP-C02)',
      },
      {
        id: 'aws-ml-en',
        title: 'AWS Certified Machine Learning - Specialty',
      }
    ],
  },
  {
    id: 'cisco-en',
    title: 'Cisco',
    logo: '/images/cisco-logo.png',
    allExamsLink: '/cisco-exams',
    examLinks: [
      {
        id: 'ccna-200-301-en',
        title: '200-301: Cisco Certified Network Associate (CCNA)',
      },
      {
        id: 'devnet-200-901-en',
        title: '200-901: DevNet Associate (DEVASC)',
      },
      {
        id: 'encor-350-401-en',
        title: '350-401: Implementing Cisco Enterprise Network Core Technologies',
      },
    ],
  }
]

export function getProvidersByLanguage(language: 'en' | 'zh'): Provider[] {
  return language === 'en' ? enProviders : zhProviders
}