import MainHeader from '@/components/icons/header/MainHeader';
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
