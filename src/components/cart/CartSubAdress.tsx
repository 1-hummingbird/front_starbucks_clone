import React from "react";
import Link from "next/link";

function CartSubAdress() {
  return (
    <>
      <div>
        <h2 className="p-4 text-2xl font-bold">배송지 변경</h2>

        <div className="">
          <Link className="pl-56 text-green-500" href={"/"}>
            + 새 배송지 추가
          </Link>
        </div>

        <div>
          <div className="px-4 pt-10">
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
        </div>
      </div>

      <div>
        <div className="fixed bottom-0 left-0 my-4 ml-9 w-3/4 rounded-full bg-[#02A862] py-4 text-center text-white">
          <button>
            <Link href="/cart">변경하기</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default CartSubAdress;
