import MainHeader from '@/components/header/MainHeader';
import BottomNavigationBar from '@/components/BottomNavigationBar';
import { Metadata } from 'next';
import React from 'react';
import AllProducts from '@/components/best/AllProducts';

export const metadata: Metadata = {
  title: 'Main',
};

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <MainHeader />
      <AllProducts />
      {children}
      <BottomNavigationBar />
    </>
  );
};

export default Layout;
