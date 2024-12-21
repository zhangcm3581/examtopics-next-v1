'use client';

import { useState, useEffect } from 'react';
import { NavLinks } from './NavLinks';
import LanguageSelector from './LanguageSelector';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'bg-[#1a1f2d]/95 backdrop-blur-sm shadow-md' 
          : 'bg-[#1a1f2d]'
        }
      `}
    >
      <div className="max-w-[1100px] mx-auto px-3 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <NavLinks />
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}