import CartAdress from "@/components/cart/CartAdress";
import CartHeader from "@/components/cart/CartHeader";
import CartinFormation from "@/components/cart/CartinFormation";
import React from "react";

function page() {
  return (
    <>
      <CartHeader />
      <CartAdress />
      <CartinFormation />
    </>
  );
}

export default page;
