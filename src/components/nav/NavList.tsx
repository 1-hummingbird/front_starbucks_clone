import { Nav } from '@/types/common';
import NavItem from './NavItem';
import React from 'react';
import { cn } from '@/lib/utils';

const NavList = ({ navs }: { navs: Nav[] }) => {
  return (
    <>
      {navs.map((item) => {
        return (
          <li
            key={item.id}
            className={cn(
              'w-full text-center',
              item.isActive ? 'border-b-4 border-solid border-green-600' : '',
            )}
          >
            <NavItem item={item} />
          </li>
        );
      })}
    </>
  );
};

export default NavList;
