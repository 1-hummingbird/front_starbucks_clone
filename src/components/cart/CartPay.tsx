"use client";
import { CartItemType, CartListType } from "@/types/responseType";
import React, { useState } from "react";

function CartPay() {
  return (
    <>
      <div className="p-3">
        <ul className="flex items-center justify-between">
          <li>상품 금액</li>
          <li className="text-lg font-bold">원</li>
        </ul>
        <ul className="flex items-center justify-between">
          <li>할인 금액</li>
          <li className="text-lg font-bold">원</li>
        </ul>
        <ul className="flex items-center justify-between py-4">
          <li>총 결제예정금액</li>
          <li className="text-2xl font-bold">원</li>
        </ul>
      </div>
    </>
  );
}

export default CartPay;
