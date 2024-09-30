import React from 'react';

import { Metadata } from 'next';
import PayHeader from '@/components/mainpay/PayHeader';

export const metadata: Metadata = {
  title: 'Pay',
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
