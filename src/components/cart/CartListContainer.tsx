'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { CartListType } from '@/types/responseType';
import CartListItem from './CartListItem';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { CreditCard, Gift } from 'lucide-react';
import Link from 'next/link';
import { getCartItemData } from '@/action/cartAction';

function CartListContainer({ cartDatas }: { cartDatas: CartListType }) {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [cartItems, setCartItems] = useState<number[]>(cartDatas.cartIds);
  const [selectAll, setSelectAll] = useState(false);
  const [itemPrices, setItemPrices] = useState<{ [key: number]: number }>({});
  const [itemDiscounts, setItemDiscounts] = useState<{ [key: number]: number }>(
    {},
  );
  const [selectedTotalPrice, setSelectedTotalPrice] = useState(0); // 총 가격 상태
  const [selectedTotalDiscount, setSelectedTotalDiscount] = useState(0); // 총 할인 금액 상태
  const [finalPrice, setFinalPrice] = useState(0); // 최종 결제 금액 상태

  // 개별 항목의 가격과 할인을 업데이트하는 함수
  const handleItemChange = (
    id: number,
    newTotalPrice: number,
    newDiscount: number,
  ) => {
    setItemPrices((prevPrices) => ({
      ...prevPrices,
      [id]: newTotalPrice,
    }));

    setItemDiscounts((prevDiscounts) => ({
      ...prevDiscounts,
      [id]: newDiscount,
    }));
  };

  // 선택된 항목들의 총 가격과 할인 금액을 계산하는 함수
  const calculateTotalPrice = useCallback(() => {
    let total = 0;
    let totalDiscount = 0;

    for (const itemId of selectedItems) {
      total += itemPrices[itemId] || 0;
      totalDiscount += itemDiscounts[itemId] || 0;
    }

    setSelectedTotalPrice(total);
    setSelectedTotalDiscount(totalDiscount);
    setFinalPrice(total - totalDiscount);
  }, [selectedItems, itemPrices, itemDiscounts]);

  // 선택된 항목이 변경될 때마다 총 가격과 할인 금액을 다시 계산
  useEffect(() => {
    calculateTotalPrice();
  }, [selectedItems, calculateTotalPrice]);

  const handleSelectItem = (id: number) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id],
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems);
    }
    setSelectAll(!selectAll);
  };

  const handleDeleteAll = () => {
    setCartItems([]);
    setSelectedItems([]);
    setSelectAll(false);
    setItemPrices({});
    setItemDiscounts({});
  };

  const handleDeleteSelected = () => {
    const remainingItems = cartItems.filter(
      (item) => !selectedItems.includes(item),
    );
    setCartItems(remainingItems);
    setSelectedItems([]);
    setSelectAll(false);
    setItemPrices((prevPrices) =>
      Object.fromEntries(
        Object.entries(prevPrices).filter(
          ([key]) => !selectedItems.includes(Number(key)),
        ),
      ),
    );
    setItemDiscounts((prevDiscounts) =>
      Object.fromEntries(
        Object.entries(prevDiscounts).filter(
          ([key]) => !selectedItems.includes(Number(key)),
        ),
      ),
    );
  };

  const allItemsSelected =
    cartItems.length > 0 && selectedItems.length === cartItems.length;

  if (selectAll !== allItemsSelected) {
    setSelectAll(allItemsSelected);
  }

  return (
    <section className="w-full">
      <nav className="border-b-[1px] py-2">
        <ul className="flex items-center justify-between px-5">
          <li className="flex items-center justify-start gap-2">
            <Checkbox
              id="cartAll"
              checked={selectAll}
              onCheckedChange={handleSelectAll}
              className="h-[20px] w-[20px] border-starbucks data-[state=checked]:bg-starbucks"
            />
            <label htmlFor="cartAll" className="text-[0.8rem]">
              전체선택
            </label>
          </li>
          <li>
            <Button
              variant={'ghost'}
              className="text-xs font-semibold text-starbucks"
              onClick={handleDeleteSelected}
              disabled={selectedItems.length === 0}
            >
              선택삭제
            </Button>
            <span className="px-1 text-[0.7rem] opacity-20">|</span>
            <Button
              variant={'ghost'}
              className="text-xs"
              onClick={handleDeleteAll}
              disabled={cartItems.length === 0}
            >
              전체삭제
            </Button>
          </li>
        </ul>
      </nav>

      {cartItems.length > 0 ? (
        <ul className="py-[2rem]">
          {cartItems.map((cartItem) => (
            <CartListItem
              key={cartItem}
              cartItem={cartItem}
              isSelected={selectedItems.includes(cartItem)}
              onSelect={() => handleSelectItem(cartItem)}
              handleItemChange={handleItemChange} // Pass the handleItemChange function
            />
          ))}
        </ul>
      ) : (
        <div className="py-10 text-center">장바구니가 비어 있습니다.</div>
      )}
      {/* Price Summary Section */}
      <div className="p-3">
        <ul className="flex items-center justify-between">
          <li>상품 금액</li>
          <li className="text-lg font-bold">
            {selectedTotalPrice.toLocaleString()}원 {/* 총 상품 금액 */}
          </li>
        </ul>
        <ul className="flex items-center justify-between">
          <li>할인 금액</li>
          <li className="text-lg font-bold">
            {selectedTotalDiscount.toLocaleString()}원 {/* 총 할인 금액 */}
          </li>
        </ul>
        <ul className="flex items-center justify-between py-4">
          <li>총 결제예정금액</li>
          <li className="text-2xl font-bold">
            {finalPrice.toLocaleString()}원 {/* 최종 결제 금액 */}
          </li>
        </ul>
      </div>
      <div className="mx-4 mb-40 bg-[#F7F7F7] p-5 text-sm text-[#B8B8B8]">
        <span>
          장바구니에는 최대 20개까지 담을 수 있으며, 담긴 상품은 최대 2개월간
          보관됩니다. 총 결제예정금액은 결제 단계에서 추가할인 수단 적용으로
          달라질 수 있습니다. 가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수
          있습니다.
        </span>
      </div>
      <div className="fixed bottom-0 left-0 z-20 w-full bg-white shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.1)]">
        <div>
          <ul className="flex items-center justify-between px-10 py-5">
            <li className="text-base font-bold">
              <span className="flex">
                총 <p className="text-[#04A663]">{selectedItems.length}</p>건
              </span>
            </li>
            <li className="text-2xl font-bold">
              {finalPrice.toLocaleString()}원 {/* 총 가격 표시 */}
            </li>
          </ul>
        </div>

        <div className="flex justify-center gap-4 pb-6">
          <button className="h-12 w-40 items-center justify-center rounded-3xl border-2 border-solid border-green-400 px-6 text-[#0DA366]">
            <p className="flex items-center gap-1">
              <Gift size={16} color="#179961" /> 선물하기
            </p>
          </button>

          <Link href={'/pay'}>
            <button className="h-12 w-40 items-center justify-center rounded-3xl border-2 border-solid bg-[#00A862] px-6 text-white">
              <p className="flex items-center gap-1">
                <CreditCard size={16} />
                구매하기
              </p>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CartListContainer;
