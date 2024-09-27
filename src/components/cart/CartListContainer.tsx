import { CartItemType, CartListType } from "@/types/responseType";
import React from "react";
import CartListItem from "./CartListItem";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import CartPay from "./CartPay";
import { getCartItemData } from "@/action/cartDataFetch";
import Cart from "../icons/header/Cart";
import { CreditCard, Gift } from "lucide-react";
import Link from "next/link";

function CartListContainer({ cartDatas }: { cartDatas: CartListType }) {
  console.log("container", cartDatas);

  return (
    <section className="w-full">
      <nav className="border-b-[1px] py-2">
        <ul className="flex items-center justify-between px-5">
          <li className="flex items-center justify-start gap-2">
            <Checkbox
              id="cartAll"
              className="h-[20px] w-[20px] border-starbucks data-[state=checked]:bg-starbucks"
            />
            <label htmlFor="cartAll" className="text-[0.8rem]">
              전체선택
            </label>
          </li>
          <li>
            <Button
              variant={"ghost"}
              className="text-xs font-semibold text-starbucks"
            >
              선택삭제
            </Button>
            <span className="px-1 text-[0.7rem] opacity-20">|</span>
            <Button variant={"ghost"} className="text-xs">
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

      <CartPay />
      <div className="mx-4 mb-32 bg-[#F7F7F7] p-5 text-sm text-[#B8B8B8]">
        <span>
          장바구니에는 최대 20개까지 담을 수 있으며, 담긴 상품은 최대 2개월간
          보관됩니다. 총 결제예정금액은 결제 단계에서 추가할인 수단 적용으로
          달라질 수 있습니다. 가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수
          있습니다.
        </span>
      </div>

      <div className="fixed bottom-0 left-0 z-20 w-full bg-white shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.1)]">
        <div>
          <ul className="flex items-center justify-between px-16 py-2">
            <li className="text-sm font-bold">
              <span className="flex">
                총<p className="text-[#04A663]"></p>건
              </span>
            </li>
            <li className="text-base font-bold">원</li>
          </ul>
        </div>

        <div className="flex justify-center gap-4 pb-6">
          <button className="text-[#1DA16C ] w-34 h-8 rounded-3xl border-2 border-solid border-green-400 px-6">
            <p className="flex items-center gap-1">
              <Gift size={16} color="#179961" /> 선물하기
            </p>
          </button>

          <Link href={"/pay"}>
            <button className="w-34 h-8 rounded-3xl border-2 border-solid bg-[#00A862] px-6 text-white">
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
