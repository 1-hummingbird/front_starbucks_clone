"use client";
import { CartItemType, ImageByCartIdType } from "@/types/responseType";
import React, { useEffect, useState } from "react";

function CartListItem({ cartId }: { cartId: number }) {
  const [data, setData] = useState<CartItemType>();
  const [cartIdByImage, setCartIdByImage] = useState<ImageByCartIdType>();
  const [checked, setChecked] = useState(false);

  useEffect(() => {}, [cartId]);
  return (
    <>
      <div className="flex w-full gap-3">
        <input
          type="checkbox"
          name={`cartId-${cartId}`}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <label>{cartId}</label>
      </div>
      {/* 
      <Image src="{}" width={112} height={112} alt="" className="ml-2"></Image> */}
    </>
  );
}

export default CartListItem;
