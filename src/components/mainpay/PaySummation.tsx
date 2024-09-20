import React from "react";
import Link from "next/link";

function PaySummation() {
  return (
    <>
      <div className="bg-slate-300	">
        <div className="ml-9 py-5">
          <div>
            <div>
              <div className="py-2 text-xl font-bold">
                <p>주문 금액:{}</p>
              </div>
              <p className="pb-3">상품 금액:{}</p>
              <p className="pb-3">배송비:{}</p>
            </div>
            <hr />

            <div>
              <div className="py-2 text-xl font-bold">
                <p>할인금액:{}</p>
              </div>
              <p className="pb-3">상품 할인:{}</p>
            </div>
            <hr />

            <div>
              <p className="py-2 text-2xl font-bold">최종 결제금액:{}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-solid	rounded-s border-black bg-slate-300 items-center m-5">
        <p>위 주문 내용을 확인하였으며, 결제에 동의합니다.</p>
        <p>(정자상거래법 8조 2항11)</p>
      </div>

      <div className="m-3">
        <button
          type="button"
          className="block bg-green-600 text-center	w-4/5	mx-auto rounded-lg"
        >
          <Link href={"/"}> {}원 결제하기</Link>
        </button>
      </div>
    </>
  );
}

export default PaySummation;
