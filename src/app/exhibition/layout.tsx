import MainHeader from '@/components/header/MainHeader';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'exhibition',
};

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};

export default Layout;
