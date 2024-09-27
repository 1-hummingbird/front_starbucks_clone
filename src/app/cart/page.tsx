import { getCartDatas, getDefaultShippingID } from "@/action/cartDataFetch";
import CartListContainer from "@/components/cart/CartListContainer";
import ShippingDefaultAddress from "@/components/cart/ShippingDefaultAddress";
import React from "react";

async function page() {
  const [cartDatas] = await Promise.all([getCartDatas()]);
  console.log(cartDatas);

  return (
    <main className="pt-[50px]">
      <ShippingDefaultAddress />
      {/* <TabMenus /> */}
      <CartListContainer cartDatas={cartDatas} />
    </main>
  );
}

export default page;
