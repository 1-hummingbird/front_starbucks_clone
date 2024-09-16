"use client";
import React, { useState } from "react";
import PayButton from "./PayButton";

const PayMethod = () => {
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const togglePaymentOptions = () => {
    setShowPaymentOptions(!showPaymentOptions); // 결제 옵션 표시 상태 토글
  };

  return (
    <>
      <div className="ml-8 py-5 ">
        <div className="flex justify-between">
          <h4 className="text-xl font-bold">결제 수단</h4>
          <PayButton toggleOrderDetails={togglePaymentOptions} />{" "}
          {/* PayButton에 상태 변경 함수 전달 */}
        </div>

        {/* 결제 옵션 표시 */}
        {showPaymentOptions && (
          <div className="my-2 py-5">
            <div className="flex items-center mb-2">
              <input
                id="country-option-1"
                type="radio"
                name="payment"
                value="CreditCard"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                defaultChecked
              />
              <label
                htmlFor="country-option-1"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                신용카드 간편결제
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                id="country-option-2"
                type="radio"
                name="payment"
                value="NormalPayment"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
              />
              <label
                htmlFor="country-option-2"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                신용카드 일반결제
              </label>
            </div>
          </div>
        )}
      </div>
      <hr className="border-border-solid border-t-[1px] z-20 border-t-slate-400" />
    </>
  );
};

export default PayMethod;
