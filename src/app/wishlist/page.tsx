import WishButton from "@/components/Wishlist/WishButton";
import WishHeader from "@/components/Wishlist/WishHeader";
import WishProduct from "@/components/Wishlist/WishProduct";
import React from "react";

function page() {
  return (
    <>
      <WishHeader />
      <WishProduct />
      <WishButton />
    </>
  );
}

export default page;
