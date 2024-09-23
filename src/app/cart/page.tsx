import { getCartAddress } from "@/action/cartDataFetch";
import CartAdress from "@/components/cart/CartAdress";
import CartHeader from "@/components/cart/CartHeader";
import CartinFormation from "@/components/cart/CartinFormation";
import React from "react";

async function page() {
  const cartData = await getCartAddress();
  return (
    <>
      <CartHeader />
      <CartAdress cartData={cartData} />
      <CartinFormation />
    </>
  );
}

export default page;
