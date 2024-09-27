import MainHeader from '@/components/header/MainHeader';
import { Metadata } from 'next';
import React from 'react';
import ScrollUpButton from '@/components/util/ScrollUpButton';
import { usePathname } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Main',
};

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  // const pathname = usePathname();

  return (
    <>
      <MainHeader />
      {children}
      <ScrollUpButton />
    </>
  );
};

export default Layout;
