import MainHeader from '@/components/header/MainHeader';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};

export default Layout;
