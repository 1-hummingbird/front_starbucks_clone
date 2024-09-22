"use client";
import React, { useState } from "react";
import Image from "next/image";

function CartinFormation() {
  // 상태 관리
  const [allChecked, setAllChecked] = useState(false);
  const [productChecked, setProductChecked] = useState(false);

  // 전체 선택 클릭 핸들러
  const handleAllChecked = () => {
    const newChecked = !allChecked;
    setAllChecked(newChecked);
    setProductChecked(newChecked);
  };

  // 개별 상품 체크박스 핸들러
  const handleProductChecked = () => {
    setProductChecked(!productChecked);
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
          <div className="text-xs">
            <button className="px-3" type="button">
              선택 삭제
            </button>
            <button type="button">전체 삭제</button>
          </div>
        </div>
        <hr className="border-border-solid z-20 border-t-[1px] border-t-slate-200" />

        <div className="p-3">
          <input
            type="checkbox"
            checked={productChecked}
            onChange={handleProductChecked}
          />{" "}
          일반 상품
        </div>
        <hr className="border-border-solid z-20 border-t-[1px] border-t-slate-200" />
      </div>

      {/* 상품 정보 */}
      <div className="grid grid-cols-3 items-center gap-3">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={productChecked}
            onChange={handleProductChecked}
          />
          <Image
            src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/08/[9300000005363]_20240806161440187.jpg"
            width={112}
            height={112}
            alt="머그"
            className="ml-2"
          />
        </div>

        <div className="col-span-2 flex flex-col justify-center gap-4 pl-4">
          <div className="flex items-center gap-4">
            {" "}
            {/* 텍스트 간격 조정 */}
            <span>코리아 단청 머그</span>
            <span>X</span>
          </div>

          <div className="mt-2 flex items-center gap-4">
            {" "}
            {/* 텍스트 간격 조정 */}
            <span>개수 추가</span>
            <span>29000원</span>
          </div>
        </div>
      </div>

      {/* 상품 금액 */}
      <div className="p-3">
        <ul className="flex justify-between">
          <li>상품 금액</li>
          <li className="text-lg font-bold">29000원</li>
        </ul>
        <ul className="flex justify-between">
          <li>할인 금액</li>
          <li className="text-lg font-bold">0원</li>
        </ul>
        <ul className="flex justify-between">
          <li>배송비</li>
          <li className="text-lg font-bold">3000원</li>
        </ul>
        <ul className="flex justify-between py-3">
          <li>총 결제예정금액</li>
          <li className="text-xl font-bold">32000원</li>
        </ul>
      </div>

      <div className="m-3 bg-slate-100 p-3 text-sm text-slate-400">
        <span>
          장바구니에는 최대 20개까지 담을 수 있으며, 담긴 상품은 최대 2개월간
          보관됩니다. 총 결제예정금액은 결제 단계에서 추가할인 수단 적용으로
          달라질 수 있습니다. 가격, 옵션 등 정보가 변결된 경우 주문이 불가할 수
          있습니다.
        </span>
      </div>

      <hr className="border-border-solid z-20 border-t-[1px] border-t-slate-200" />

      {/* 선물 구매 버튼 */}
      <div className="py-2">
        <div>
          <ul className="flex justify-between px-12 py-2">
            <li className="text-base">총 1건</li>
            <li className="text-lg font-bold">32000원</li>
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

export default CartinFormation;
