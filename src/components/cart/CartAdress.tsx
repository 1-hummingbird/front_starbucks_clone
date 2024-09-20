import Link from "next/link";
import React from "react";

const CartAdress = () => {
  return (
    <>
      <div className="bg-slate-200 p-3">
        <ul className="flex justify-between">
          <div className="flex gap-2">
            <li className="font-bold">홍길동</li>
            <li className="font-bold">집</li>
            <li className="text-xs italic text-green-500">기본</li>
          </div>
          <div>
            <button className="px-2 text-xs text-rose-900">
              <Link href="cart/subadress">배송지 변경</Link>
            </button>
          </div>
        </ul>
        <p className="pt-1">경상남도 김해시 000동 00호</p>
        <p className="py-3">010-0000-0000</p>
      </div>
    </>
  );
};

export default CartAdress;
