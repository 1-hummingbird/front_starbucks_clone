import MainHeader from '@/components/header/MainHeader';
import BottomButtons from '@/components/pages/productDetail/BottomButtons';
import ScrollUpButton from '@/components/util/ScrollUpButton';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Main',
};

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <MainHeader />
      {children}
      <BottomButtons />
    </>
  );
};

export default Layout;
