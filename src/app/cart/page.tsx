import {
  getCartDatas,
  getShippingDefaultAddress,
} from '@/action/cartDataFetch';
import CartListContainer from '@/components/cart/CartListContainer';
import ShippingDefaultAddress from '@/components/cart/ShippingDefaultAddress';
import React from 'react';

async function page() {
  const [cartDatas, shippingDefaultAddress] = await Promise.all([
    getCartDatas(),
    getShippingDefaultAddress(),
  ]);

  console.log(cartDatas, shippingDefaultAddress);

  return (
    <main className="pt-[50px]">
      <ShippingDefaultAddress shippingDefaultAddress={shippingDefaultAddress} />
      {/* <TabMenus /> */}
      <CartListContainer cartDatas={cartDatas} />
    </main>
  );
}

export default page;
