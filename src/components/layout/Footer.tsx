'use client';

import Link from 'next/link';
import { useTranslations } from '@/hooks/useTranslations';

export function Footer() {
  const t = useTranslations();
  
  const footerLinks = [
    {
      href: 'https://www.examtopics.com',
      label: 'ExamTopics',
      external: true,
    },
    {
      href: '/contact',
      label: t.common.contact,
    },
  ];

  return (
    <footer className="bg-[#1a1f2d] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-2">
          {footerLinks.map(({ href, label, external }) => (
            external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                {label}
              </Link>
            )
          ))}
        </div>
        <p className="text-sm text-gray-400">{t.common.copyright}</p>
      </div>
    </footer>
  );
}