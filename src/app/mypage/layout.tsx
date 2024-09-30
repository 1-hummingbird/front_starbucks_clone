import MainHeader from '@/components/header/MainHeader';
import { Metadata } from 'next';
import React from 'react';
import TopNavigationBar from '@/components/TopNavigationBar';

export const metadata: Metadata = {
  title: 'My Page',
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
