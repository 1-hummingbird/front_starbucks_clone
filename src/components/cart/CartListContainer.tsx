import { CartListType } from '@/types/responseType';
import { Car } from 'lucide-react';
import React from 'react';
import CartListItem from './CartListItem';

function CartListContainer({ cartDatas }: { cartDatas: CartListType }) {
  console.log('container', cartDatas);

  const data = [1, 2, 3, 4, 5];

  return (
    <div className="w-full px-4">
      {data.length > 0 ? (
        data.map((item, index) => <CartListItem key={index} cartId={item} />)
      ) : (
        <div>장바구니가 비었습니다.</div>
      )}
    </div>
  );
}

export default CartListContainer;
