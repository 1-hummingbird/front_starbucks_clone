import React from 'react';
import PayDelivery from '../../components/mainpay/PayDelivery';
import PayPurchase from '../../components/mainpay/PayPurchase';
import { getPayItemDatas } from '@/action/payAction';
import { getCartDatas } from '@/action/cartAction';

async function page() {
  const [cartDatas] = await Promise.all([getCartDatas()]);
  console.log(cartDatas);

  return (
    <>
      <PayDelivery />
      <PayPurchase />
    </>
  );
}

export default page;
