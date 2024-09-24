import {
  getCartDatas,
  getShippingDefaultAddress,
} from "@/action/cartDataFetch";
import CartHeader from "@/components/cart/CartHeader";
import CartListContainer from "@/components/cart/CartListContainer";
import ShippingDefaultAddress from "@/components/cart/ShippingDefaultAddress";
import React from "react";

async function page() {
  const [cartDatas, shippingDefaultAddress] = await Promise.all([
    getCartDatas(),
    getShippingDefaultAddress(),
  ]);
  return (
    <>
      <CartHeader />
      <ShippingDefaultAddress shippingDefaultAddress={shippingDefaultAddress} />
      <CartListContainer />
    </>
  );
}

export default page;
