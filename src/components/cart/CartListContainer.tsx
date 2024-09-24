import { CartListType } from "@/types/responseType";
import CartListItem from "./CartListItem";
import CartPay from "./CartPay";
import React from "react";
import Image from "next/image";

function CartListContainer({ cartDatas }: { cartDatas: CartListType }) {
  return (
    <>
      <div className="w-full px-4">
        {cartDatas.length > 0 ? (
          cartDatas.cartIds.map((item, index) => (
            <CartListItem key={index} cartId={item} />
          ))
        ) : (
          <div className="items-center justify-center p-20">
            <div className="">
              <Image
                className="mx-10 my-2"
                src="https://img.icons8.com/?size=100&id=2931&format=png&color=000000"
                width={60}
                height={60}
                alt="장바구니"
              ></Image>
            </div>
            <p>장바구니가 비었습니다.</p>
          </div>
        )}
      </div>

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
            <li className="text-base">총 건</li>
            <li className="text-lg font-bold">원</li>
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
