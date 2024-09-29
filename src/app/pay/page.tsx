import React from 'react';
import PayDelivery from '../../components/mainpay/PayDelivery';
import PayPurchase from '../../components/mainpay/PayPurchase';
import { getPayItemDatas } from '@/action/payAction';

async function page() {
  console.log(getPayItemDatas);

  return (
    <>
      <PayDelivery />
      <PayPurchase />
    </>
  );
}

export default page;
