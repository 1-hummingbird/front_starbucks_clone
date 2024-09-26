import MainHeader from '@/components/header/MainHeader';
import React from 'react';

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};

export default layout;
