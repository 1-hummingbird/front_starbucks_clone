"use client";
import React, { useState } from "react";
import Image from "next/image";
import CartPay from "./CartPay";

interface Product {
  id: number;
  name: string;
  price: number;
  checked: boolean;
}

function CartListContainer() {
  // 상태 관리
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "코리아 단청 머그",
      price: 29000,
      checked: false,
    },
  ]);

  const [allChecked, setAllChecked] = useState(false);

  // 전체 선택 클릭 핸들러
  const handleAllChecked = () => {
    const newChecked = !allChecked;
    setAllChecked(newChecked);
    setProducts((prevProducts) =>
      prevProducts.map((product) => ({
        ...product,
        checked: newChecked,
      })),
    );
  };

  // 개별 선택 핸들러
  const handleProductChecked = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, checked: !product.checked } : product,
      ),
    );
  };

  // 전체 삭제
  const handleDeleteAll = () => {
    setProducts([]);
  };

  // 선택된 상품 삭제
  const handleDeleteSelected = () => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => !product.checked),
    );
  };

  return (
    <>
      {/* 버튼 */}
      <div>
        <div className="flex justify-between p-3">
          <div>
            <input
              type="checkbox"
              checked={allChecked}
              onChange={handleAllChecked}
            />{" "}
            전체선택
          </div>
          <div className="text-sm">
            <button
              className="px-3"
              type="button"
              onClick={handleDeleteSelected}
            >
              선택 삭제
            </button>
            <button type="button" onClick={handleDeleteAll}>
              전체 삭제
            </button>
          </div>
        </div>
        <hr className="border-border-solid z-20 mx-3 border-t-[1px] border-t-slate-200 shadow-inner" />
      </div>

      {/* 상품 정보 */}
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-3 items-center gap-3 shadow-md"
          >
            <div className="flex items-center px-3">
              <input
                type="checkbox"
                checked={product.checked}
                onChange={() => handleProductChecked(product.id)}
              />
              <Image
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/08/[9300000005363]_20240806161440187.jpg"
                width={112}
                height={112}
                alt="머그"
                className="ml-2"
              />
            </div>

            <div className="col-span-2 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-4">
                <span>{product.name}</span>
                <span>X</span>
              </div>

              <div className="flex items-center gap-4">
                <span>개수 추가</span>
                <span>{product.price.toLocaleString()}원</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="py-10 text-center">장바구니가 비어 있습니다.</div>
      )}

      <CartPay />

      <div className="m-3 bg-slate-100 p-3 text-sm text-slate-400">
        <span>
          장바구니에는 최대 20개까지 담을 수 있으며, 담긴 상품은 최대 2개월간
          보관됩니다. 총 결제예정금액은 결제 단계에서 추가할인 수단 적용으로
          달라질 수 있습니다. 가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수
          있습니다.
        </span>
      </div>

      <hr className="border-border-solid z-20 border-t-[1px] border-t-slate-200" />

      {/* 선물 구매 버튼 */}
      <div className="py-2">
        <div>
          <ul className="flex justify-between px-12 py-2">
            <li className="text-base">총 {products.length}건</li>
            <li className="text-lg font-bold">
              {products
                .reduce((acc, product) => acc + product.price, 0)
                .toLocaleString()}
              원
            </li>
          </ul>
        </div>

        <div className="flex justify-center gap-4 py-2">
          <button className="rounded-full border-2 border-solid border-green-400 px-8 text-green-700">
            선물하기
          </button>
          <button className="rounded-full border-2 border-solid border-green-800 bg-green-600 px-8 text-white">
            구매하기
          </button>
        </div>
      </div>
    </>
  );
}

export default CartListContainer;
