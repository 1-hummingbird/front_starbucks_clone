"use client";
import React from "react";

const PayMethod = () => {
  return (
    <>
      <div className="ml-8 py-5">
        <div className="flex justify-between">
          <h4 className="text-xl font-bold">결제 수단</h4>
          {/* PayButton에 상태 변경 함수 전달 */}
        </div>

        {/* 결제 옵션 표시 */}

        <div className="my-2 py-5">
          <div className="mb-2 flex items-center">
            <input
              id="country-option-1"
              type="radio"
              name="payment"
              value="CreditCard"
              className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
              defaultChecked
            />
            <label
              htmlFor="country-option-1"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              신용카드 간편결제
            </label>
          </div>
          <div className="mb-2 flex items-center">
            <input
              id="country-option-2"
              type="radio"
              name="payment"
              value="NormalPayment"
              className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor="country-option-2"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              신용카드 일반결제
            </label>
          </div>
        </div>
      </div>
      <hr className="border-border-solid z-20 border-t-[1px] border-t-slate-400" />
    </>
  );
};

export default PayMethod;
