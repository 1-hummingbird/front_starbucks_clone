import Link from 'next/link';
import { Nav } from '@/types/common';
import React from 'react';
import { cn } from '@/lib/utils';

const NavItem = ({ item }: { item: Nav }) => {
  return (
    <Link href={`/${item.url}`}>
      {item.component && <item.component />}
      {item.label && (
        <p
          className={cn(
            'mx-[5px] my-3.5 h-[17px]',
            item.isActive ? 'text-black' : 'text-gray-500',
          )}
        >
          {item.label}
        </p>
      )}
    </Link>
  );
};

export default NavItem;
