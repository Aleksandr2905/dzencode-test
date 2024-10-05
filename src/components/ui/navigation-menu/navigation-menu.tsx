'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { common } from '@/data';
import { NavProps } from './types';
import clsx from 'clsx';

export const NavigationMenu = ({ className }: NavProps) => {
  const pathname = usePathname();
  const { navigation } = common;

  return (
    <nav className={className}>
      <ul className="flex flex-col gap-5 items-center">
        {navigation.map((i) => (
          <li key={i.id}>
            <Link
              href={i.href}
              className={clsx(
                'relative text-lg font-semibold text-title animation hover:text-text_hover'
              )}
            >
              {i.name}
              <span
                className={clsx(
                  'absolute left-0 -bottom-1 h-[2px] bg-text_hover animation',
                  pathname === i.href ? 'w-full' : 'w-0 hover:w-full'
                )}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
