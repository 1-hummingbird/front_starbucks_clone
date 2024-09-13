/* eslint-disable @next/next/no-img-element */
import React from "react";
import PayButton from "./PayButton";

function PayCoupon() {
  return (
    <>
      <div className="ml-9 py-5">
        <div className="flex justify-between">
          <div>
            <h4 className="text-xl font-bold ">쿠폰 및 할인</h4>
          </div>
          <PayButton />
        </div>
        <div className="my-2 py-5">
          <div className="">
            <img src="/public/cupon.svg" alt="쿠폰" className="my-5" />
          </div>
          <div>
            <img src="/my-app/public/cupon.svg" alt="모바일 상품권" />
          </div>
        </div>
      </div>
      <hr className="border-border-solid border-t-[1px] z-20 border-t-slate-400" />
    </>
  );
}

export default PayCoupon;
