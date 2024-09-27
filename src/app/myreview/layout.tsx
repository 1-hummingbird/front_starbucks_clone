import CartHeader from "@/components/cart/CartHeader";
import ReviewHeader from "@/components/review/ReviewHeader";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReviewHeader />
      {children}
    </>
  );
}

export default layout;
