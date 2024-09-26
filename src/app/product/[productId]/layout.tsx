import { Metadata } from 'next';
import ProductHeader from '@/components/icons/header/ProductHeader';
import React from 'react';
import ScrollUpButton from '@/components/util/ScrollUpButton';

export const metadata: Metadata = {
  title: 'Main',
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <ProductHeader />
      {children}
      <ScrollUpButton />
    </>
  );
};

export default layout;
