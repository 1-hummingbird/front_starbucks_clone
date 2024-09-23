'use client';
import {
  getCartItemData,
  getCartProductImageData,
} from '@/action/cartDataFetch';
import { CartItemType, ImageByCartIdType } from '@/types/responseType';
import React, { useEffect, useState } from 'react';
import Input from '../ui/input';

function CartListItem({ cartId }: { cartId: number }) {
  const [data, setData] = useState<CartItemType>();
  const [cartIdByImage, setCartIdByImage] = useState<ImageByCartIdType>();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // if (!cartId) return;
    // console.log('cartid', cartId);
    // const getData = async () => {
    //   const res = await getCartItemData(cartId);
    //   const resImage = await getCartProductImageData(cartId);
    //   setData(res);
    //   setCartIdByImage(resImage);
    // };
    // getData();
  }, [cartId]);

  return (
    <div className="flex w-full justify-between">
      <input
        type="checkbox"
        name={`cartId-${cartId}`}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label>{cartId}</label>
    </div>
  );
}

export default CartListItem;
