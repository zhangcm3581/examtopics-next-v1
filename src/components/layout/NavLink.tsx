'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link 
      href={href} 
      className={`
        px-3 py-2 text-sm font-medium transition-colors duration-200
        ${isActive 
          ? 'text-[#0095eb]' 
          : 'text-[#bbbbbb] hover:text-[#0095eb]'
        }
      `}
    >
      {children}
    </Link>
  );
}