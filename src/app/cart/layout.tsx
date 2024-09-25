import CartHeader from "@/components/cart/CartHeader";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CartHeader />
      {children}
    </>
  );
}

export default layout;
