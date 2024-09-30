import React from 'react';

import { Metadata } from 'next';
<<<<<<< HEAD
import PayHeader from '@/components/mainpay/PayHeader';

export const metadata: Metadata = {
  title: 'Main',
=======

export const metadata: Metadata = {
  title: 'Pay',
>>>>>>> 0b90996c411696e9d8f5375c0f1bdf9527b6eb1d
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <PayHeader />
      {children}
    </>
  );
};

export default layout;
