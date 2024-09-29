import CartHeader from '@/components/cart/CartHeader';
import OrderHeader from '@/components/order/OrderHeader';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Order',
};

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OrderHeader />
      {children}
    </>
  );
}

export default layout;
