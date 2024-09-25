import { CartItemType, CartListType } from '@/types/responseType';
import React from 'react';
import CartListItem from './CartListItem';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';

function CartListContainer({ cartDatas }: { cartDatas: CartListType }) {
  console.log('container', cartDatas);

  return (
    <section className="w-full">
      <nav className="border-b-[1px] py-2">
        <ul className="flex items-center justify-between px-5">
          <li className="flex items-center justify-start gap-2">
            <Checkbox
              id="cartAll"
              className="data-[state=checked]:bg-starbucks border-starbucks h-[20px] w-[20px]"
            />
            <label htmlFor="cartAll" className="text-[0.8rem]">
              전체선택
            </label>
          </li>
          <li>
            <Button
              variant={'ghost'}
              className="text-starbucks text-xs font-semibold"
            >
              선택삭제
            </Button>
            <span className="px-1 text-[0.7rem] opacity-20">|</span>
            <Button variant={'ghost'} className="text-xs">
              전체삭제
            </Button>
          </li>
        </ul>
      </nav>
      {cartDatas.cartIds.length > 0 ? (
        <ul className="py-[2rem]">
          {cartDatas.cartIds.map((cartItem) => (
            <CartListItem key={cartItem} cartItem={cartItem} />
          ))}
        </ul>
      ) : (
        <div className="py-10 text-center">장바구니가 비어 있습니다.</div>
      )}
    </section>
  );
}

export default CartListContainer;
