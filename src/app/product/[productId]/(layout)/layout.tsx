import MainHeader from '@/components/header/MainHeader';
import { Metadata } from 'next';
import React from 'react';
import ScrollUpButton from '@/components/util/ScrollUpButton';

export const metadata: Metadata = {
  title: 'Main',
};

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <MainHeader />
      {children}
      <ScrollUpButton />
    </>
  );
};

export default Layout;
