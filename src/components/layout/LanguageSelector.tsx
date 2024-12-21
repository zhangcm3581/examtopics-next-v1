'use client';

import { useRouter } from 'next/navigation';
import { Globe } from '@/components/icons/Globe';
import { useLanguageStore } from '@/lib/stores/languageStore';
import type { Locale } from '@/lib/i18n';

export default function LanguageSelector() {
  const router = useRouter();
  const { language, setLanguage } = useLanguageStore();
  
  const handleLanguageChange = (newLanguage: Locale) => {
    setLanguage(newLanguage);
    router.push('/'); // Redirect to home page
  };

  return (
    <div className="flex items-center space-x-1.5">
      <Globe className="text-gray-400" />
      <select 
        value={language}
        onChange={(e) => handleLanguageChange(e.target.value as Locale)}
        className="bg-transparent text-gray-300 text-sm border-none focus:ring-0 cursor-pointer appearance-none pr-5"
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
          backgroundSize: '16px'
        }}
      >
        <option value="zh" className="bg-[#1a1f2d] text-gray-300">中文</option>
        <option value="en" className="bg-[#1a1f2d] text-gray-300">English</option>
      </select>
    </div>
  );
}