import React from "react";
import Link from "next/link";

function PaySummation() {
  return (
    <>
      <div className="bg-slate-200">
        <div className="ml-9 py-5">
          <div>
            <div>
              <div className="flex justify-between py-2 text-xl font-bold">
                <p>주문 금액:</p>
                <p className="pr-10">{1}</p>
              </div>
              <div className="flex justify-between">
                <p className="pb-3">상품 금액:</p>
                <p className="pr-10">{1}</p>
              </div>
              <div className="flex justify-between">
                <p className="pb-3">배송비:</p>
                <p className="pr-10">{1}</p>
              </div>
            </div>
            <hr className="" />

            <div>
              <div className="flex justify-between py-2 text-xl font-bold">
                <p>할인금액:</p>
                <p className="pr-10">{1}</p>
              </div>
              <div className="flex justify-between">
                <p className="pb-3">상품 할인:</p>
                <p className="pr-10">{1}</p>
              </div>
            </div>
            <hr />

            <div className="flex justify-between">
              <p className="py-2 text-2xl font-bold">최종 결제금액:{}</p>
              <p className="pr-10">{1}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="m-5 items-center rounded-s border-solid border-black p-3">
        <p>위 주문 내용을 확인하였으며, 결제에 동의합니다.</p>
        <p>(전자상거래법 8조 2항11)</p>
      </div>

      <div className="m-3">
        <button
          type="button"
          className="mx-auto block w-4/5 rounded-lg bg-green-600 text-center"
        >
          <Link href={"/"}> {}원 결제하기</Link>
        </button>
      </div>
    </>
  );
}

export default PaySummation;
