'use client';

import { NavLink } from './NavLink';
import { useTranslations } from '@/hooks/useTranslations';

export function NavLinks() {
  const t = useTranslations();
  
  const navLinks = [
    { href: '/', label: t.common.home },
    { href: '/contact', label: t.common.contact },
  ];

  return (
    <nav className="flex items-center space-x-6">
      {navLinks.map(({ href, label }) => (
        <NavLink key={href} href={href}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}