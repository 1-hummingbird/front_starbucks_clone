import CartHeader from "@/components/cart/CartHeader";
import OrderHeader from "@/components/order/OrderHeader";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OrderHeader />
      {children}
    </>
  );
}

export default layout;
