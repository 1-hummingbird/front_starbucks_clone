import MainHeader from '@/components/icons/header/MainHeader';
import { Metadata } from 'next';
import React from 'react';
import TopNavigationBar from '@/components/TopNavigationBar';

export const metadata: Metadata = {
  title: 'Main',
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <MainHeader />
      <TopNavigationBar />
      {children}
    </>
  );
};

export default layout;
