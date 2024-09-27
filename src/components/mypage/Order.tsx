import React from "react";
import OrderStatus from "./OrderStatus";

function Order() {
  return (
    <>
      <div className="flex items-center gap-2 px-8 py-4">
        {" "}
        <span className="text-lg font-bold">주문/배송 현황</span>{" "}
        <p className="text-xs text-gray-600">최근 3개월 동안 구매한 상품</p>{" "}
      </div>

      <div>
        <OrderStatus />
      </div>
    </>
  );
}

export default Order;
