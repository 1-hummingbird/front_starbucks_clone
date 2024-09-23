import React from "react";

function CartPay() {
  return (
    <>
      <div className="p-3">
        <ul className="flex items-center justify-between">
          <li>상품 금액</li>
          <li className="text-lg font-bold">29000원</li>
        </ul>
        <ul className="flex items-center justify-between">
          <li>할인 금액</li>
          <li className="text-lg font-bold">0원</li>
        </ul>
        <ul className="flex items-center justify-between">
          <li>배송비</li>
          <li className="text-lg font-bold">3000원</li>
        </ul>
        <ul className="flex items-center justify-between py-3">
          <li>총 결제예정금액</li>
          <li className="text-xl font-bold">32000원</li>
        </ul>
      </div>
    </>
  );
}

export default CartPay;
